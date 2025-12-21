import puppeteer, { Page } from "puppeteer";
import TurndownService from "turndown";
import fs from "fs/promises";
import path from "path";
import {
  extractUpdatedDate,
  extractUpdatedDateFromPage,
  findFileForUrl,
  loadMarkdownFile,
  urlToFilePath,
} from "./utils.js";
import { buildIndex, UrlIndex } from "./build-index.js";
import { checkUrls } from "./check-urls.js";

interface UpdateResult {
  url: string;
  status: "updated" | "no_change" | "new" | "error";
  error?: string;
  filePath?: string;
}

/**
 * Configura Turndown para conversão HTML->Markdown
 */
function createTurndownService(): TurndownService {
  const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });

  turndownService.remove(["script", "style", "noscript"]);

  turndownService.addRule("codeBlock", {
    filter: ["pre"],
    replacement: (content, node) => {
      const element = node as HTMLElement;
      const codeElement = element.querySelector("code");
      const language =
        codeElement?.className?.match(/language-(\w+)/)?.[1] || "";
      const code = codeElement?.textContent || element.textContent || "";
      return `\n\`\`\`${language}\n${code.trim()}\n\`\`\`\n`;
    },
  });

  return turndownService;
}

/**
 * Extrai conteúdo HTML da página
 */
async function scrapePageContent(page: Page): Promise<string> {
  const htmlContent = await page.evaluate(() => {
    const navElements = document.getElementsByTagName("nav");

    if (navElements.length >= 2) {
      const mainContainer = navElements[1].parentNode
        ?.parentNode as HTMLElement;

      if (mainContainer) {
        const clone = mainContainer.cloneNode(true) as HTMLElement;
        clone.querySelectorAll("nav").forEach((el) => el.remove());

        const selectorsToRemove = [
          "script",
          "style",
          "noscript",
          "[type='application/json']",
          "header",
          "footer",
        ];

        selectorsToRemove.forEach((selector) => {
          clone.querySelectorAll(selector).forEach((el) => el.remove());
        });

        return clone.innerHTML;
      }
    }

    const fallbackSelectors = [
      '[role="main"] article',
      '[role="main"]',
      "article",
      "main",
    ];

    for (const selector of fallbackSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const clone = element.cloneNode(true) as HTMLElement;
        clone
          .querySelectorAll("script, style, noscript, nav")
          .forEach((el) => el.remove());
        return clone.innerHTML;
      }
    }

    return document.body.innerHTML;
  });

  return htmlContent;
}

/**
 * Faz scraping de uma URL e retorna o markdown
 */
async function scrapeUrl(
  page: Page,
  url: string,
  turndownService: TurndownService
): Promise<{ markdown: string; updatedDate: Date | null }> {
  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 30000,
  });

  await page.waitForSelector("nav", { timeout: 10000 });
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const htmlContent = await scrapePageContent(page);
  const updatedDate = await extractUpdatedDateFromPage(page);

  let markdown = turndownService.turndown(htmlContent);

  markdown = markdown
    .split("\n")
    .filter((line) => {
      if (line.trim().startsWith('{"') || line.trim().startsWith("{'")) {
        return false;
      }
      return true;
    })
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");

  const header = `<!-- Source: ${url} -->\n<!-- Scraped: ${new Date().toISOString()} -->\n\n`;
  markdown = header + markdown;

  return { markdown, updatedDate };
}

/**
 * Atualiza um arquivo específico
 */
async function updateFile(
  url: string,
  index: UrlIndex,
  page: Page,
  turndownService: TurndownService,
  options: { force?: boolean }
): Promise<UpdateResult> {
  const filePath = findFileForUrl(url, index);
  const docsDir = path.join(process.cwd(), "docs");

  // Ignorar arquivos AGENTS.md (são arquivos locais de índice, não vêm do site)
  if (filePath && filePath.endsWith("AGENTS.md")) {
    return {
      url,
      status: "no_change",
      filePath,
    };
  }

  try {
    // Se arquivo existe, verificar data
    if (filePath) {
      const fullPath = path.join(docsDir, filePath);
      const localContent = await loadMarkdownFile(fullPath);
      const localDate = extractUpdatedDate(localContent);

      if (!options.force && localDate) {
        // Fazer scraping para obter data online
        const { updatedDate: onlineDate } = await scrapeUrl(
          page,
          url,
          turndownService
        );

        if (onlineDate && localDate >= onlineDate) {
          return {
            url,
            status: "no_change",
            filePath,
          };
        }
      }
    }

    // Fazer scraping completo
    const { markdown, updatedDate } = await scrapeUrl(
      page,
      url,
      turndownService
    );

    // Determinar caminho do arquivo
    const relativePath = filePath || urlToFilePath(url);
    
    // Ignorar se o caminho resultante for AGENTS.md
    if (relativePath.endsWith("AGENTS.md")) {
      return {
        url,
        status: "no_change",
        filePath: relativePath,
      };
    }
    
    const targetPath = path.join(docsDir, relativePath);

    // Criar diretório se necessário
    await fs.mkdir(path.dirname(targetPath), { recursive: true });

    // Salvar arquivo
    await fs.writeFile(targetPath, markdown, "utf-8");

    const finalRelativePath = path.relative(docsDir, targetPath);

    return {
      url,
      status: filePath ? "updated" : "new",
      filePath: finalRelativePath.replace(/\\/g, "/"), // Normalizar para Unix path
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : String(error);
    return {
      url,
      status: "error",
      error: errorMessage,
    };
  }
}

/**
 * Modo --all: atualiza todas as URLs
 */
async function updateAll(
  index: UrlIndex,
  page: Page,
  turndownService: TurndownService,
  options: { force?: boolean }
): Promise<UpdateResult[]> {
  const docsUrlPath = path.join(process.cwd(), "docs_url.json");
  const urls: string[] = JSON.parse(
    await fs.readFile(docsUrlPath, "utf-8")
  );

  console.log(`📋 Processando ${urls.length} URLs...\n`);

  const results: UpdateResult[] = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const progress = `[${i + 1}/${urls.length}]`;
    process.stdout.write(`${progress} ${url}... `);

    const result = await updateFile(url, index, page, turndownService, options);
    results.push(result);

    if (result.status === "updated") {
      console.log("✅ Atualizado");
    } else if (result.status === "no_change") {
      console.log("⏭️  Sem mudanças");
    } else if (result.status === "new") {
      console.log("🆕 Novo arquivo criado");
    } else {
      console.log(`❌ ${result.error}`);
    }

    // Delay entre requisições
    if (i < urls.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  return results;
}

/**
 * Modo --new: atualiza apenas URLs novas e mudadas
 */
async function updateNew(
  index: UrlIndex,
  page: Page,
  turndownService: TurndownService,
  options: { force?: boolean }
): Promise<UpdateResult[]> {
  console.log("🔍 Verificando URLs novas e mudanças...\n");

  // Primeiro, verificar URLs novas/removidas
  // Por enquanto, vamos comparar docs_url.json com o índice
  const docsUrlPath = path.join(process.cwd(), "docs_url.json");
  const allUrls: string[] = JSON.parse(
    await fs.readFile(docsUrlPath, "utf-8")
  );

  // URLs que não estão no índice são novas
  const newUrls = allUrls.filter((url) => !findFileForUrl(url, index));

  // URLs que estão no índice mas podem ter mudado
  const existingUrls = allUrls.filter((url) => findFileForUrl(url, index));

  console.log(`🆕 URLs novas: ${newUrls.length}`);
  if (newUrls.length > 0) {
    console.log("   URLs novas encontradas:");
    newUrls.forEach((url, i) => {
      console.log(`   ${i + 1}. ${url}`);
    });
  }
  console.log(`📝 URLs existentes: ${existingUrls.length} (não serão verificadas no modo --new)\n`);

  const results: UpdateResult[] = [];

  // Processar URLs novas
  for (const url of newUrls) {
    process.stdout.write(`🆕 Criando: ${url}... `);
    const result = await updateFile(
      url,
      index,
      page,
      turndownService,
      options
    );
    results.push(result);

    if (result.status === "new") {
      console.log(`✅ Novo arquivo criado: ${result.filePath}`);
    } else if (result.status === "updated") {
      console.log(`✅ Atualizado: ${result.filePath}`);
    } else if (result.status === "error") {
      console.log(`❌ Erro: ${result.error}`);
    } else {
      console.log(`⏭️  Sem mudanças`);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  // No modo --new, não verificamos URLs existentes para manter rápido
  // O modo --all é para verificar todas as URLs existentes
  if (existingUrls.length > 0) {
    console.log(`\n💡 Modo --new: Pulando verificação de ${existingUrls.length} URLs existentes para manter rápido.`);
    console.log(`   Use --all para verificar todas as URLs existentes.\n`);
  }

  return results;
}

/**
 * Modo específico: atualiza URLs fornecidas
 */
async function updateSpecific(
  urls: string[],
  index: UrlIndex,
  page: Page,
  turndownService: TurndownService,
  options: { force?: boolean }
): Promise<UpdateResult[]> {
  const results: UpdateResult[] = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const progress = `[${i + 1}/${urls.length}]`;
    process.stdout.write(`${progress} ${url}... `);

    const result = await updateFile(url, index, page, turndownService, options);
    results.push(result);

    if (result.status === "updated") {
      console.log("✅ Atualizado");
    } else if (result.status === "new") {
      console.log("🆕 Novo arquivo criado");
    } else if (result.status === "no_change") {
      console.log("⏭️  Sem mudanças");
    } else {
      console.log(`❌ ${result.error}`);
    }

    if (i < urls.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  return results;
}

/**
 * Função principal
 */
async function updateDocs(): Promise<void> {
  const args = process.argv.slice(2);

  // Determinar modo
  const isAllMode = args.includes("--all");
  const isNewMode = args.includes("--new");
  const forceMode = args.includes("--force");
  const fileMode = args.includes("--file");
  const filePath = fileMode ? args[args.indexOf("--file") + 1] : undefined;

  // URLs específicas (argumentos que não são flags)
  const specificUrls = args.filter(
    (arg) =>
      !arg.startsWith("--") &&
      arg.startsWith("http") &&
      arg.includes("developers.facebook.com")
  );

  console.log("🚀 Iniciando atualização de documentação\n");
  console.log("=".repeat(50));

  // Carregar ou construir índice
  let index: UrlIndex;
  const indexPath = path.join(process.cwd(), "url-index.json");

  try {
    const indexContent = await fs.readFile(indexPath, "utf-8");
    index = JSON.parse(indexContent);
    console.log("📑 Índice carregado\n");
  } catch {
    console.log("📑 Construindo índice...\n");
    index = await buildIndex(true); // Modo silencioso quando chamado de outro script
  }

  // Iniciar browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  const turndownService = createTurndownService();

  let results: UpdateResult[];

  try {
    if (isAllMode) {
      console.log("📋 Modo: Atualização completa (--all)\n");
      results = await updateAll(index, page, turndownService, { force: forceMode });
    } else if (isNewMode) {
      console.log("🆕 Modo: Atualização incremental (--new)\n");
      results = await updateNew(index, page, turndownService, { force: forceMode });
    } else if (filePath) {
      console.log(`📄 Modo: Arquivo (--file ${filePath})\n`);
      const urls = JSON.parse(await fs.readFile(filePath, "utf-8"));
      results = await updateSpecific(
        urls,
        index,
        page,
        turndownService,
        { force: forceMode }
      );
    } else if (specificUrls.length > 0) {
      console.log(`🎯 Modo: URLs específicas (${specificUrls.length} URL(s))\n`);
      results = await updateSpecific(
        specificUrls,
        index,
        page,
        turndownService,
        { force: forceMode }
      );
    } else {
      console.error(
        "❌ Erro: Especifique um modo (--all, --new) ou forneça URLs\n"
      );
      console.log("Uso:");
      console.log("  npm run update-docs -- --all");
      console.log("  npm run update-docs -- --new");
      console.log("  npm run update-docs -- <url>");
      console.log("  npm run update-docs -- --file urls.json");
      process.exit(1);
    }
  } finally {
    await browser.close();
  }

  // Reconstruir índice se houver arquivos novos ou atualizados
  const hasNewFiles = results.some((r) => r.status === "new" || r.status === "updated");
  if (hasNewFiles) {
    console.log("\n🔄 Reconstruindo índice após atualizações...\n");
    index = await buildIndex(true); // Modo silencioso
    console.log("✅ Índice reconstruído\n");
  }

  // Relatório final
  const stats = {
    updated: results.filter((r) => r.status === "updated").length,
    new: results.filter((r) => r.status === "new").length,
    noChange: results.filter((r) => r.status === "no_change").length,
    errors: results.filter((r) => r.status === "error").length,
  };

  console.log("\n" + "=".repeat(50));
  console.log("📊 RELATÓRIO FINAL");
  console.log("=".repeat(50));
  console.log(`✅ Atualizados: ${stats.updated}`);
  console.log(`🆕 Novos: ${stats.new}`);
  console.log(`⏭️  Sem mudanças: ${stats.noChange}`);
  console.log(`❌ Erros: ${stats.errors}`);

  if (stats.errors > 0) {
    console.log("\n⚠️  URLs com erro:");
    results
      .filter((r) => r.status === "error")
      .forEach((r) => {
        console.log(`  - ${r.url}`);
        console.log(`    ${r.error}`);
      });
  }

  console.log("=".repeat(50));
}

// Executar
updateDocs()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Erro:", error);
    process.exit(1);
  });

export { updateDocs };
