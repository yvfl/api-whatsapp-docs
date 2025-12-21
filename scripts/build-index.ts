import fs from "fs/promises";
import path from "path";
import {
  findAllMarkdownFiles,
  extractUrlFromFile,
  loadMarkdownFile,
} from "./utils.js";

interface UrlIndex {
  urlToFile: Record<string, string>;
  fileToUrl: Record<string, string>;
  lastUpdated: string;
}

async function buildIndex(silent: boolean = false): Promise<UrlIndex> {
  if (!silent) {
    console.log("🔍 Construindo índice URL → Arquivo...\n");
  }

  const docsDir = path.join(process.cwd(), "docs");
  const markdownFiles = await findAllMarkdownFiles(docsDir);

  if (!silent) {
    console.log(`📁 Encontrados ${markdownFiles.length} arquivos markdown\n`);
  }

  const urlToFile: Record<string, string> = {};
  const fileToUrl: Record<string, string> = {};
  let processed = 0;
  let skipped = 0;

  for (const filePath of markdownFiles) {
    try {
      const content = await loadMarkdownFile(filePath);
      const url = extractUrlFromFile(content);

      if (url) {
        // Caminho relativo a partir de docs/
        const relativePath = path.relative(docsDir, filePath);
        const normalizedPath = relativePath.replace(/\\/g, "/"); // Normalizar para Unix path

        urlToFile[url] = normalizedPath;
        fileToUrl[normalizedPath] = url;
        processed++;
      } else {
        skipped++;
        if (!silent) {
          console.log(`⚠️  Sem URL encontrada em: ${path.relative(docsDir, filePath)}`);
        }
      }
    } catch (error) {
      if (!silent) {
        console.error(
          `❌ Erro ao processar ${path.relative(docsDir, filePath)}:`,
          error
        );
      }
      skipped++;
    }
  }

  const index: UrlIndex = {
    urlToFile,
    fileToUrl,
    lastUpdated: new Date().toISOString(),
  };

  // Salvar índice
  const indexPath = path.join(process.cwd(), "url-index.json");
  await fs.writeFile(indexPath, JSON.stringify(index, null, 2), "utf-8");

  if (!silent) {
    console.log("\n" + "=".repeat(50));
    console.log("📊 RELATÓRIO DO ÍNDICE");
    console.log("=".repeat(50));
    console.log(`✅ Processados: ${processed}`);
    console.log(`⚠️  Ignorados: ${skipped}`);
    console.log(`📄 Total de URLs indexadas: ${Object.keys(urlToFile).length}`);
    console.log(`💾 Índice salvo em: ${indexPath}`);
  }

  return index;
}

// Executar se chamado diretamente (não quando importado como módulo)
// Verifica se está sendo executado via tsx/node diretamente
const scriptName = process.argv[1] || "";
const isDirectExecution = scriptName.includes("build-index.ts") || scriptName.includes("build-index.js");

if (isDirectExecution && !process.env._BUILD_INDEX_IMPORTED_) {
  buildIndex(false) // Não silencioso quando executado diretamente
    .then(() => {
      console.log("\n✅ Índice construído com sucesso!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("\n❌ Erro ao construir índice:", error);
      process.exit(1);
    });
}

export { buildIndex };
export type { UrlIndex };
