import puppeteer from "puppeteer";
import TurndownService from "turndown";
import fs from "fs/promises";
import path from "path";

const TEST_URL =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/text-messages";

async function scrapeDocumentation(url: string): Promise<string> {
  console.log(`🚀 Iniciando scraping de: ${url}`);

  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  // Configurar viewport e user agent
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  try {
    // Navegar para a URL
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    // Aguardar o conteúdo carregar
    await page.waitForSelector("nav", { timeout: 10000 });

    // Aguardar um pouco mais para o conteúdo dinâmico carregar
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Extrair o HTML do conteúdo principal usando o seletor identificado
    const htmlContent = await page.evaluate(() => {
      // Seletor principal identificado pelo usuário
      const navElements = document.getElementsByTagName("nav");
      
      if (navElements.length >= 2) {
        const mainContainer = navElements[1].parentNode?.parentNode as HTMLElement;
        
        if (mainContainer) {
          // Clonar todo o container
          const clone = mainContainer.cloneNode(true) as HTMLElement;
          
          // Remover todos os elementos nav (sidebar de navegação)
          clone.querySelectorAll("nav").forEach((el) => el.remove());
          
          // Remover scripts, styles e outros elementos indesejados
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

      // Fallbacks mais específicos
      const fallbackSelectors = [
        '[role="main"] article',
        '[role="main"]',
        "article",
        "main",
        ".docs-content",
        "#content",
      ];

      for (const selector of fallbackSelectors) {
        const element = document.querySelector(selector);
        if (element) {
          const clone = element.cloneNode(true) as HTMLElement;
          clone.querySelectorAll("script, style, noscript, nav").forEach((el) => el.remove());
          return clone.innerHTML;
        }
      }

      // Último recurso: body inteiro
      return document.body.innerHTML;
    });

    console.log(`✅ Conteúdo HTML extraído (${htmlContent.length} caracteres)`);

    // Configurar Turndown para converter HTML em Markdown
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
        const language = codeElement?.className?.match(/language-(\w+)/)?.[1] || "";
        const code = codeElement?.textContent || element.textContent || "";
        return `\n\`\`\`${language}\n${code.trim()}\n\`\`\`\n`;
      },
    });

    // Converter para Markdown
    let markdown = turndownService.turndown(htmlContent);

    // Limpar o markdown - remover linhas que parecem ser JSON/JS
    markdown = markdown
      .split("\n")
      .filter((line) => {
        // Remover linhas que começam com { e parecem ser JSON
        if (line.trim().startsWith('{"') || line.trim().startsWith("{'")) {
          return false;
        }
        // Remover linhas vazias consecutivas (manter apenas uma)
        return true;
      })
      .join("\n")
      // Remover múltiplas linhas em branco consecutivas
      .replace(/\n{3,}/g, "\n\n");

    console.log(`✅ Convertido para Markdown (${markdown.length} caracteres)`);

    return markdown;
  } finally {
    await browser.close();
  }
}

async function main() {
  try {
    const markdown = await scrapeDocumentation(TEST_URL);

    // Criar diretório docs se não existir
    const docsDir = path.join(process.cwd(), "docs");
    await fs.mkdir(docsDir, { recursive: true });

    // Salvar o arquivo
    const outputPath = path.join(docsDir, "test-output.md");
    await fs.writeFile(outputPath, markdown, "utf-8");

    console.log(`\n📄 Arquivo salvo em: ${outputPath}`);
    console.log(`\n--- Primeiros 500 caracteres do conteúdo ---\n`);
    console.log(markdown.substring(0, 500));
    console.log("\n...\n");
  } catch (error) {
    console.error("❌ Erro:", error);
    process.exit(1);
  }
}

main();

