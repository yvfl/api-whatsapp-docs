import * as path from 'path';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { ListResourcesRequestSchema, ReadResourceRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { findAllMarkdownFiles, getDocsPath, loadMarkdownFile } from './utils/fileLoader';
import { extractTitle, extractDescription } from './utils/search';

export interface DocumentResource {
  uri: string;
  name: string;
  description: string;
  mimeType: string;
}

let cachedResources: DocumentResource[] | null = null;

/**
 * Escaneia a pasta docs/ e retorna todos os recursos disponíveis
 */
export function scanDocuments(): DocumentResource[] {
  if (cachedResources) {
    return cachedResources;
  }

  const docsPath = getDocsPath();
  const markdownFiles = findAllMarkdownFiles(docsPath);
  
  const resources: DocumentResource[] = markdownFiles.map((filePath) => {
    const relativePath = path.relative(docsPath, filePath);
    const uri = `whatsapp-docs://docs/${relativePath.replace(/\\/g, '/')}`;
    
    // Carrega conteúdo para extrair metadados
    const content = loadMarkdownFile(filePath);
    const name = extractTitle(content, relativePath);
    const description = extractDescription(content);
    
    return {
      uri,
      name,
      description,
      mimeType: 'text/markdown',
    };
  });

  cachedResources = resources;
  return resources;
}

/**
 * Lista todos os recursos disponíveis
 */
export async function listResources(): Promise<DocumentResource[]> {
  return scanDocuments();
}

/**
 * Lê conteúdo de um recurso específico
 */
export async function readResource(uri: string): Promise<string> {
  // Valida URI
  if (!uri.startsWith('whatsapp-docs://docs/')) {
    throw new Error(`Invalid URI format: ${uri}`);
  }

  // Extrai caminho relativo
  const relativePath = uri.replace('whatsapp-docs://docs/', '');
  const docsPath = getDocsPath();
  const fullPath = path.join(docsPath, relativePath);

  // Valida que o arquivo existe e está dentro de docs/
  if (!fullPath.startsWith(docsPath)) {
    throw new Error(`Invalid path: ${relativePath}`);
  }

  try {
    return loadMarkdownFile(fullPath);
  } catch (error) {
    throw new Error(`Failed to read resource ${uri}: ${error}`);
  }
}

/**
 * Registra handlers de recursos no servidor MCP
 */
export function registerResourceHandlers(server: Server): void {
  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    const resources = await listResources();
    return {
      resources: resources.map((r) => ({
        uri: r.uri,
        name: r.name,
        description: r.description,
        mimeType: r.mimeType,
      })),
    };
  });

  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;
    if (!uri || typeof uri !== 'string') {
      throw new Error('URI parameter is required');
    }

    const content = await readResource(uri);
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: content,
        },
      ],
    };
  });
}

