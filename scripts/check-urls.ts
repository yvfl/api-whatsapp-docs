import fs from "fs/promises";
import path from "path";
import puppeteer from "puppeteer";

interface CheckUrlsOptions {
  updateJson?: boolean;
  scrapeFromSite?: boolean;
  outputFile?: string;
}

interface ScrapeConfig {
  entrypoints: string[];
  urlPatterns: string[]; // Padrões para filtrar URLs
}

interface ScrapeResult {
  entrypoint: string;
  urls: string[];
  success: boolean;
  error?: string;
}

// Entrypoints padrão
const DEFAULT_ENTRYPOINTS = [
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/overview",
  "https://developers.facebook.com/docs/whatsapp/flows",
];

// Padrões de URL a coletar
const URL_PATTERNS = [
  "/documentation/business-messaging/whatsapp/",
  "/docs/whatsapp/",
];

/**
 * Carrega URLs do docs_url.json
 */
async function loadKnownUrls(): Promise<string[]> {
  const filePath = path.join(process.cwd(), "docs_url.json");
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Erro ao ler ${filePath}:`, error);
    return [];
  }
}

/**
 * Faz scraping de um único entrypoint para obter URLs
 */
async function scrapeSingleEntrypoint(
  entrypoint: string,
  urlPatterns: string[],
  browser: any,
  page: any
): Promise<ScrapeResult> {
  try {
    await page.goto(entrypoint, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    // Para páginas /docs/whatsapp/flows, usar seletor específico
    const isFlowsPage = entrypoint.includes("/docs/whatsapp/flows");
    
    if (isFlowsPage) {
      // Para Flows, esperar pelo elemento específico
      try {
        await page.waitForSelector('span[data-click-area="main"]', { timeout: 20000 });
      } catch (e) {
        await page.waitForSelector("body", { timeout: 10000 });
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    } else {
      // Para outras páginas, usar seletor nav padrão
      try {
        await page.waitForSelector("nav", { timeout: 20000 });
      } catch (e) {
        await page.waitForSelector("body", { timeout: 10000 });
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }
    
    // Aguardar um pouco mais para garantir que os links estão carregados
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const urls = await page.evaluate((patterns: string[]) => {
      const links = Array.from(document.querySelectorAll("[href]"));
      const urlSet = new Set<string>();

      links.forEach((link) => {
        const href = (link as HTMLAnchorElement).href;
        if (!href) return;
        
        // Verificar se a URL corresponde a algum dos padrões
        const matchesPattern = patterns && Array.isArray(patterns) 
          ? patterns.some((pattern: string) => pattern && href.includes(pattern))
          : false;
        
        if (matchesPattern) {
          try {
            const url = new URL(href);
            const pathname = url.pathname.replace(/\/$/, "");
            if (pathname) {
              urlSet.add(`https://developers.facebook.com${pathname}`);
            }
          } catch (e) {
            // Ignorar URLs inválidas
          }
        }
      });

      return Array.from(urlSet);
    }, urlPatterns || []);

    return {
      entrypoint,
      urls: urls.sort(),
      success: true,
    };
  } catch (error) {
    return {
      entrypoint,
      urls: [],
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Descobre entrypoints automaticamente fazendo scraping da página principal
 * Filtra URLs já conhecidas para evitar processamento duplicado
 */
async function discoverEntrypoints(
  browser: any,
  page: any,
  knownUrls: string[]
): Promise<string[]> {
  const discoveryUrls = [
    "https://developers.facebook.com/docs/whatsapp",
  ];

  const discovered: string[] = [];
  const knownSet = new Set(knownUrls);

  for (const discoveryUrl of discoveryUrls) {
    try {
      await page.goto(discoveryUrl, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });

      await page.waitForSelector("body", { timeout: 10000 });
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const entrypoints = await page.evaluate((knownUrlsList: string[]) => {
        const links = Array.from(document.querySelectorAll("[href]"));
        const entrypointSet = new Set<string>();
        const knownSet = new Set(knownUrlsList);

        links.forEach((link) => {
          const href = (link as HTMLAnchorElement).href;
          if (!href) return;
          
          // Procurar apenas por páginas que são claramente entrypoints
          // Critérios mais restritivos: apenas páginas de overview/getting-started principais
          const isMainEntrypoint = 
            (href.includes("/docs/whatsapp/") || 
             href.includes("/documentation/business-messaging/whatsapp/")) &&
            (
              // Páginas de overview de seções principais
              (href.includes("/overview") && 
               (href.match(/\/overview$/) || href.match(/\/[^\/]+\/overview$/))) ||
              // Páginas getting-started principais
              (href.includes("/getting-started") && href.match(/\/getting-started$/)) ||
              // Páginas principais sem subpath (apenas /docs/whatsapp/xxx sem mais nada)
              (href.match(/\/docs\/whatsapp\/[^\/]+$/) && 
               !href.includes("/reference/") && 
               !href.includes("/guides/") &&
               !href.includes("/changelog"))
            );

          if (isMainEntrypoint) {
            try {
              const url = new URL(href);
              const pathname = url.pathname.replace(/\/$/, "");
              const fullUrl = `https://developers.facebook.com${pathname}`;
              
              // Só adicionar se não estiver nas URLs conhecidas
              if (!knownSet.has(fullUrl)) {
                entrypointSet.add(fullUrl);
              }
            } catch (e) {
              // Ignorar URLs inválidas
            }
          }
        });

        return Array.from(entrypointSet);
      }, knownUrls);

      // Filtrar apenas entrypoints que não estão nas URLs conhecidas
      const newEntrypoints = entrypoints.filter((url: string) => !knownSet.has(url));
      discovered.push(...newEntrypoints);
    } catch (error) {
      // Continuar mesmo se uma página de descoberta falhar
      continue;
    }
  }

  return [...new Set(discovered)];
}

/**
 * Faz scraping de múltiplos entrypoints para obter todas as URLs
 */
async function scrapeUrlsFromSite(config?: ScrapeConfig): Promise<{
  urls: string[];
  results: ScrapeResult[];
}> {
  const entrypoints = config?.entrypoints || DEFAULT_ENTRYPOINTS;
  const urlPatterns = config?.urlPatterns || URL_PATTERNS;

  console.log(`🌐 Fazendo scraping de ${entrypoints.length} entrypoint(s)...\n`);

  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Configurar viewport e user agent
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  const results: ScrapeResult[] = [];
  const allUrls = new Set<string>();

  try {
    // Carregar URLs conhecidas para filtrar entrypoints já processados
    const knownUrls = await loadKnownUrls();
    
    // Descobrir entrypoints automaticamente (filtrando URLs já conhecidas)
    console.log("🔍 Descobrindo entrypoints adicionais...\n");
    const discovered = await discoverEntrypoints(browser, page, knownUrls);
    const allEntrypoints = [...new Set([...entrypoints, ...discovered])];
    
    if (discovered.length > 0) {
      console.log(`   ✅ ${discovered.length} entrypoint(s) adicional(is) descoberto(s)\n`);
    } else {
      console.log(`   ℹ️  Nenhum entrypoint adicional encontrado\n`);
    }

    // Processar cada entrypoint
    for (let i = 0; i < allEntrypoints.length; i++) {
      const entrypoint = allEntrypoints[i];
      const progress = `[${i + 1}/${allEntrypoints.length}]`;
      process.stdout.write(`${progress} Processando: ${entrypoint}... `);

      const result = await scrapeSingleEntrypoint(
        entrypoint,
        urlPatterns,
        browser,
        page
      );

      results.push(result);

      if (result.success) {
        result.urls.forEach((url) => allUrls.add(url));
        console.log(`✅ ${result.urls.length} URL(s)`);
      } else {
        console.log(`❌ ${result.error}`);
      }

      // Delay entre entrypoints
      if (i < allEntrypoints.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }

    await browser.close();

    const urlsArray = Array.from(allUrls).sort();

    if (urlsArray.length === 0) {
      throw new Error("Nenhuma URL encontrada em nenhum entrypoint.");
    }

    return {
      urls: urlsArray,
      results,
    };
  } catch (error) {
    await browser.close();
    console.error(`\n❌ Erro ao fazer scraping: ${error instanceof Error ? error.message : String(error)}`);
    throw error;
  }
}

/**
 * Compara URLs conhecidas com URLs atuais e identifica diferenças
 */
function compareUrls(
  knownUrls: string[],
  currentUrls: string[]
): {
  newUrls: string[];
  removedUrls: string[];
  unchanged: string[];
} {
  const knownSet = new Set(knownUrls);
  const currentSet = new Set(currentUrls);

  const newUrls = currentUrls.filter((url) => !knownSet.has(url));
  const removedUrls = knownUrls.filter((url) => !currentSet.has(url));
  const unchanged = knownUrls.filter((url) => currentSet.has(url));

  return { newUrls, removedUrls, unchanged };
}

/**
 * Atualiza docs_url.json com novas URLs
 */
async function updateDocsUrlJson(newUrls: string[]): Promise<void> {
  const knownUrls = await loadKnownUrls();
  const updatedUrls = [...new Set([...knownUrls, ...newUrls])].sort();

  const filePath = path.join(process.cwd(), "docs_url.json");
  await fs.writeFile(
    filePath,
    JSON.stringify(updatedUrls, null, 2) + "\n",
    "utf-8"
  );
  console.log(`\n✅ docs_url.json atualizado com ${newUrls.length} novas URLs`);
}

/**
 * Salva relatório em arquivo
 */
async function saveReport(
  report: string,
  outputFile: string
): Promise<void> {
  await fs.writeFile(outputFile, report, "utf-8");
  console.log(`\n📄 Relatório salvo em: ${outputFile}`);
}

/**
 * Função principal
 */
async function checkUrls(options: CheckUrlsOptions = {}): Promise<void> {
  console.log("🔍 Verificando URLs da documentação WhatsApp\n");
  console.log("=".repeat(50));

  // Carregar URLs conhecidas
  const knownUrls = await loadKnownUrls();
  console.log(`📋 URLs conhecidas (docs_url.json): ${knownUrls.length}\n`);

  // Obter URLs atuais
  // Por padrão, sempre faz scraping do site para detectar URLs novas/removidas
  let currentUrls: string[];
  if (options.scrapeFromSite === false) {
    // Apenas se explicitamente desabilitado com --no-scrape
    console.log(
      "⚠️  Scraping desabilitado (--no-scrape). Sem scraping, o script não pode detectar URLs novas.\n"
    );
    console.log(
      "💡 Remova --no-scrape para fazer scraping do site e detectar mudanças.\n"
    );
    currentUrls = knownUrls;
  } else {
    // Padrão: sempre fazer scraping
    let scrapeResults: ScrapeResult[] = [];
    try {
      const scrapeData = await scrapeUrlsFromSite();
      currentUrls = scrapeData.urls;
      scrapeResults = scrapeData.results;
    } catch (error) {
      console.error("\n❌ Erro ao fazer scraping do site:");
      console.error(`   ${error instanceof Error ? error.message : String(error)}\n`);
      console.log("💡 Tentando continuar com URLs conhecidas do docs_url.json...");
      console.log("   Use --no-scrape para evitar tentar fazer scraping.\n");
      // Fallback: usar URLs conhecidas se scraping falhar
      currentUrls = knownUrls;
    }

    // Mostrar estatísticas por entrypoint
    if (scrapeResults.length > 0) {
      console.log("\n" + "=".repeat(50));
      console.log("📊 ESTATÍSTICAS POR ENTRYPOINT");
      console.log("=".repeat(50));
      scrapeResults.forEach((result) => {
        if (result.success) {
          console.log(`✅ ${result.entrypoint}`);
          console.log(`   ${result.urls.length} URL(s) coletada(s)`);
        } else {
          console.log(`❌ ${result.entrypoint}`);
          console.log(`   Erro: ${result.error}`);
        }
      });
      console.log("=".repeat(50) + "\n");
    }
  }

  console.log(`🌐 URLs atuais (total consolidado): ${currentUrls.length}\n`);

  // Comparar
  const { newUrls, removedUrls, unchanged } = compareUrls(
    knownUrls,
    currentUrls
  );

  // Categorizar URLs novas por padrão
  const newUrlsByPattern: Record<string, string[]> = {
    "/documentation/": [],
    "/docs/": [],
    "outros": [],
  };

  newUrls.forEach((url) => {
    if (url.includes("/documentation/business-messaging/whatsapp/")) {
      newUrlsByPattern["/documentation/"].push(url);
    } else if (url.includes("/docs/whatsapp/")) {
      newUrlsByPattern["/docs/"].push(url);
    } else {
      newUrlsByPattern["outros"].push(url);
    }
  });

  // Gerar relatório
  let report = "=".repeat(50) + "\n";
  report += "📊 RELATÓRIO DE VERIFICAÇÃO DE URLs\n";
  report += "=".repeat(50) + "\n\n";
  report += `Data: ${new Date().toISOString()}\n\n`;
  report += `📋 URLs conhecidas: ${knownUrls.length}\n`;
  report += `🌐 URLs atuais: ${currentUrls.length}\n`;
  report += `✅ URLs inalteradas: ${unchanged.length}\n`;
  report += `🆕 URLs novas: ${newUrls.length}\n`;
  report += `🗑️  URLs removidas: ${removedUrls.length}\n\n`;

  // Estatísticas por padrão
  if (newUrls.length > 0) {
    report += "📊 URLs novas por padrão:\n";
    report += `   /documentation/*: ${newUrlsByPattern["/documentation/"].length}\n`;
    report += `   /docs/*: ${newUrlsByPattern["/docs/"].length}\n`;
    if (newUrlsByPattern["outros"].length > 0) {
      report += `   Outros: ${newUrlsByPattern["outros"].length}\n`;
    }
    report += "\n";
  }

  if (newUrls.length > 0) {
    report += "=".repeat(50) + "\n";
    report += "🆕 URLs NOVAS\n";
    report += "=".repeat(50) + "\n";
    newUrls.forEach((url, index) => {
      report += `${index + 1}. ${url}\n`;
    });
    report += "\n";
  }

  if (removedUrls.length > 0) {
    report += "=".repeat(50) + "\n";
    report += "🗑️  URLs REMOVIDAS\n";
    report += "=".repeat(50) + "\n";
    removedUrls.forEach((url, index) => {
      report += `${index + 1}. ${url}\n`;
    });
    report += "\n";
  }

  // Exibir relatório no console
  console.log(report);

  // Salvar relatório se especificado
  if (options.outputFile) {
    await saveReport(report, options.outputFile);
  }

  // Atualizar docs_url.json se solicitado
  if (options.updateJson) {
    if (newUrls.length > 0) {
      await updateDocsUrlJson(newUrls);
    } else {
      console.log("\n✅ Nenhuma URL nova para adicionar ao docs_url.json");
    }
  } else if (newUrls.length > 0) {
    console.log("\n💡 Dica: Use --update para adicionar automaticamente as URLs novas ao docs_url.json");
  }

  // Resumo final
  console.log("\n" + "=".repeat(50));
  if (newUrls.length === 0 && removedUrls.length === 0) {
    console.log("✅ Nenhuma mudança detectada!");
  } else {
    if (newUrls.length > 0) {
      console.log(`🆕 ${newUrls.length} URL(s) nova(s) encontrada(s)`);
    }
    if (removedUrls.length > 0) {
      console.log(`🗑️  ${removedUrls.length} URL(s) removida(s)`);
    }
  }
  console.log("=".repeat(50));
}

// Processar argumentos da linha de comando
const args = process.argv.slice(2);
const options: CheckUrlsOptions = {
  updateJson: args.includes("--update"),
  // Por padrão, sempre fazer scraping (só desabilita se --no-scrape for passado)
  scrapeFromSite: !args.includes("--no-scrape"),
  outputFile: args.includes("--output")
    ? args[args.indexOf("--output") + 1]
    : undefined,
};

// Executar
checkUrls(options)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Erro:", error);
    process.exit(1);
  });

export { checkUrls };
