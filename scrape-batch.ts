import puppeteer, { Browser, Page } from "puppeteer";
import TurndownService from "turndown";
import fs from "fs/promises";
import path from "path";

// Ler as URLs do arquivo JSON
async function loadUrls(): Promise<string[]> {
  const filePath = path.join(process.cwd(), "docs_url.json");
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
}

// Gerar nome do arquivo baseado na URL
function urlToFilename(url: string): string {
  // Extrair o path da URL após /whatsapp/
  const match = url.match(/\/whatsapp\/(.+)$/);
  if (!match) return "unknown.md";

  // Converter o path em nome de arquivo
  const pathPart = match[1]
    .replace(/\//g, "_") // Trocar / por _
    .replace(/-/g, "_"); // Trocar - por _

  return `${pathPart}.md`;
}

// Configurar Turndown
function createTurndownService(): TurndownService {
  const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });

  // Ignorar scripts e estilos inline
  turndownService.remove(["script", "style", "noscript"]);

  // Preservar blocos de código
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

// Extrair conteúdo de uma página
async function scrapePageContent(page: Page): Promise<string> {
  const htmlContent = await page.evaluate(() => {
    const navElements = document.getElementsByTagName("nav");

    if (navElements.length >= 2) {
      const mainContainer = navElements[1].parentNode?.parentNode as HTMLElement;

      if (mainContainer) {
        const clone = mainContainer.cloneNode(true) as HTMLElement;

        // Remover elementos de navegação e outros indesejados
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

    // Fallbacks
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

// Processar uma única URL
async function processUrl(
  page: Page,
  url: string,
  turndownService: TurndownService,
  docsDir: string
): Promise<{ success: boolean; filename: string; error?: string }> {
  const filename = urlToFilename(url);

  try {
    // Navegar para a URL
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    // Aguardar o conteúdo carregar
    await page.waitForSelector("nav", { timeout: 10000 });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Extrair conteúdo
    const htmlContent = await scrapePageContent(page);

    // Converter para Markdown
    let markdown = turndownService.turndown(htmlContent);

    // Limpar o markdown
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

    // Adicionar metadados no início do arquivo
    const header = `<!-- Source: ${url} -->\n<!-- Scraped: ${new Date().toISOString()} -->\n\n`;
    markdown = header + markdown;

    // Salvar o arquivo
    const outputPath = path.join(docsDir, filename);
    await fs.writeFile(outputPath, markdown, "utf-8");

    return { success: true, filename };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, filename, error: errorMessage };
  }
}

// Função principal
async function main() {
  console.log("🚀 Iniciando scraping em lote da documentação WhatsApp\n");

  // Carregar URLs
  const urls = await loadUrls();
  console.log(`📋 Total de URLs para processar: ${urls.length}\n`);

  // Criar diretório de saída
  const docsDir = path.join(process.cwd(), "docs");
  await fs.mkdir(docsDir, { recursive: true });

  // Iniciar browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  const turndownService = createTurndownService();

  // Estatísticas
  const results = {
    success: 0,
    failed: 0,
    errors: [] as { url: string; error: string }[],
  };

  // Processar cada URL
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const progress = `[${i + 1}/${urls.length}]`;

    process.stdout.write(`${progress} Processando: ${urlToFilename(url)}... `);

    const result = await processUrl(page, url, turndownService, docsDir);

    if (result.success) {
      console.log("✅");
      results.success++;
    } else {
      console.log(`❌ ${result.error}`);
      results.failed++;
      results.errors.push({ url, error: result.error || "Unknown error" });
    }

    // Delay entre requisições para evitar rate limiting
    if (i < urls.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  // Fechar browser
  await browser.close();

  // Relatório final
  console.log("\n" + "=".repeat(50));
  console.log("📊 RELATÓRIO FINAL");
  console.log("=".repeat(50));
  console.log(`✅ Sucesso: ${results.success}`);
  console.log(`❌ Falhas: ${results.failed}`);
  console.log(`📁 Arquivos salvos em: ${docsDir}`);

  if (results.errors.length > 0) {
    console.log("\n⚠️ URLs com erro:");
    results.errors.forEach(({ url, error }) => {
      console.log(`  - ${url}`);
      console.log(`    Erro: ${error}`);
    });
  }

  // Salvar relatório de erros se houver
  if (results.errors.length > 0) {
    const errorLogPath = path.join(docsDir, "_errors.json");
    await fs.writeFile(errorLogPath, JSON.stringify(results.errors, null, 2));
    console.log(`\n📝 Log de erros salvo em: ${errorLogPath}`);
  }

  // Criar índice
  const indexContent = await createIndex(urls, docsDir);
  const indexPath = path.join(docsDir, "index.md");
  await fs.writeFile(indexPath, indexContent, "utf-8");
  console.log(`\n📑 Índice criado em: ${indexPath}`);
}

// Criar arquivo de índice
async function createIndex(urls: string[], docsDir: string): Promise<string> {
  const lines = [
    "# Documentação WhatsApp Business API",
    "",
    `Gerado em: ${new Date().toISOString()}`,
    "",
    `Total de páginas: ${urls.length}`,
    "",
    "## Índice",
    "",
  ];

  for (const url of urls) {
    const filename = urlToFilename(url);
    const title = filename.replace(/_/g, " ").replace(".md", "");
    lines.push(`- [${title}](./${filename})`);
  }

  return lines.join("\n");
}

main().catch(console.error);

