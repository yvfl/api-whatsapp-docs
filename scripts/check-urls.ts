import fs from "fs/promises";
import path from "path";
import puppeteer from "puppeteer";

interface CheckUrlsOptions {
  updateJson?: boolean;
  scrapeFromSite?: boolean;
  outputFile?: string;
}

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
 * Faz scraping da página de overview para obter todas as URLs
 */
async function scrapeUrlsFromSite(): Promise<string[]> {
  console.log("🌐 Fazendo scraping da página de overview...\n");

  const overviewUrl =
    "https://developers.facebook.com/documentation/business-messaging/whatsapp/overview";

  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Para evitar problemas de permissão
  });
  const page = await browser.newPage();

  // Configurar viewport e user agent
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  try {
    await page.goto(overviewUrl, {
      waitUntil: "domcontentloaded", // Mais rápido que networkidle2
      timeout: 60000,
    });

    // Tentar esperar por nav, mas não falhar se não encontrar
    try {
      await page.waitForSelector("nav", { timeout: 20000 });
    } catch (e) {
      // Se nav não aparecer, tentar esperar por qualquer elemento de navegação ou body
      console.log("⚠️  Seletor 'nav' não encontrado, aguardando carregamento da página...");
      await page.waitForSelector("body", { timeout: 10000 });
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Mais tempo para carregar
    }
    
    // Aguardar um pouco mais para garantir que os links estão carregados
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const urls = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll("[href]"));
      const urlSet = new Set<string>();

      links.forEach((link) => {
        const href = (link as HTMLAnchorElement).href;
        if (href.includes("/documentation/business-messaging/whatsapp/")) {
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
    });

    await browser.close();
    
    if (urls.length === 0) {
      throw new Error("Nenhuma URL encontrada na página. A página pode não ter carregado corretamente.");
    }
    
    return urls.sort();
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
    try {
      currentUrls = await scrapeUrlsFromSite();
    } catch (error) {
      console.error("\n❌ Erro ao fazer scraping do site:");
      console.error(`   ${error instanceof Error ? error.message : String(error)}\n`);
      console.log("💡 Tentando continuar com URLs conhecidas do docs_url.json...");
      console.log("   Use --no-scrape para evitar tentar fazer scraping.\n");
      // Fallback: usar URLs conhecidas se scraping falhar
      currentUrls = knownUrls;
    }
  }

  console.log(`🌐 URLs atuais: ${currentUrls.length}\n`);

  // Comparar
  const { newUrls, removedUrls, unchanged } = compareUrls(
    knownUrls,
    currentUrls
  );

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
