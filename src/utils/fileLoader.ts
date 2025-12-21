import * as fs from 'fs';
import * as path from 'path';

/**
 * Carrega conteúdo de arquivo markdown
 */
export function loadMarkdownFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to load file ${filePath}: ${error}`);
  }
}

/**
 * Encontra todos os arquivos .md recursivamente em um diretório
 */
export function findAllMarkdownFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Obtém o caminho da pasta docs relativo ao pacote instalado
 * 
 * Estratégia para encontrar docs/ quando instalado via npm:
 * - Quando executado: node_modules/whatsapp-docs-mcp/dist/index.js
 * - __dirname em dist/utils/fileLoader.js = node_modules/whatsapp-docs-mcp/dist/utils/
 * - docs/ está em: node_modules/whatsapp-docs-mcp/docs/
 * - Caminho relativo: ../../docs (subir de dist/utils/ para dist/, depois para raiz do pacote)
 */
export function getDocsPath(): string {
  const fs = require('fs');
  
  // Caminho atual: dist/utils/ quando compilado e executado
  const currentDir = __dirname;
  
  // Caminho mais provável: ../../docs relativo a dist/utils/
  // Isso resolve para: node_modules/whatsapp-docs-mcp/docs/ quando instalado
  const docsPath = path.resolve(currentDir, '../../docs');
  
  // Verifica se existe
  if (fs.existsSync(docsPath)) {
    // Valida que é realmente a pasta docs (tem pelo menos um .md ou subdiretório)
    try {
      const entries = fs.readdirSync(docsPath);
      const isValid = entries.some((entry: string) => {
        const entryPath = path.join(docsPath, entry);
        const stat = fs.statSync(entryPath);
        return entry.endsWith('.md') || stat.isDirectory();
      });
      
      if (isValid) {
        return docsPath;
      }
    } catch (error) {
      // Se houver erro ao ler, continua para tentar outros caminhos
    }
  }
  
  // Fallback: tenta caminhos alternativos
  const fallbackPaths = [
    path.resolve(currentDir, '../../../docs'), // Para casos especiais de estrutura
    path.resolve(process.cwd(), 'docs'), // Relativo ao diretório de trabalho atual
  ];
  
  for (const fallbackPath of fallbackPaths) {
    if (fs.existsSync(fallbackPath)) {
      try {
        const entries = fs.readdirSync(fallbackPath);
        const hasMarkdown = entries.some((entry: string) => 
          entry.endsWith('.md') || fs.statSync(path.join(fallbackPath, entry)).isDirectory()
        );
        if (hasMarkdown) {
          return fallbackPath;
        }
      } catch {
        continue;
      }
    }
  }
  
  // Se não encontrou em nenhum lugar, retorna o caminho esperado
  // O erro será lançado quando tentar ler os arquivos
  return docsPath;
}

