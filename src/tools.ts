import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { findAllMarkdownFiles, getDocsPath, loadMarkdownFile } from './utils/fileLoader';
import {
  searchInContent,
  extractTitle,
  extractExcerpt,
  calculateRelevance,
  SearchResult,
} from './utils/search';
import * as path from 'path';
import * as fs from 'fs';

/**
 * Busca textual em todos os documentos
 */
async function searchDocumentation(query: string, section?: string): Promise<SearchResult[]> {
  const docsPath = getDocsPath();
  let markdownFiles = findAllMarkdownFiles(docsPath);

  // Filtra por seção se especificado
  if (section) {
    markdownFiles = markdownFiles.filter((file) =>
      file.includes(section)
    );
  }

  const results: SearchResult[] = [];

  for (const filePath of markdownFiles) {
    const content = loadMarkdownFile(filePath);
    
    if (searchInContent(content, query)) {
      const relativePath = path.relative(docsPath, filePath).replace(/\\/g, '/');
      const title = extractTitle(content, relativePath);
      const excerpt = extractExcerpt(content, query);
      const relevance = calculateRelevance(content, query);

      results.push({
        path: relativePath,
        title,
        excerpt,
        relevance,
      });
    }
  }

  // Ordena por relevância
  results.sort((a, b) => b.relevance - a.relevance);

  return results.slice(0, 20); // Limita a 20 resultados
}

/**
 * Obtém documento por caminho
 */
async function getDocumentByPath(docPath: string): Promise<string> {
  const docsPath = getDocsPath();
  const fullPath = path.join(docsPath, docPath);

  // Valida segurança
  if (!fullPath.startsWith(docsPath)) {
    throw new Error(`Invalid path: ${docPath}`);
  }

  return loadMarkdownFile(fullPath);
}

/**
 * Lista seções da documentação
 */
async function listDocumentationSections(filterSection?: string): Promise<{
  sections: Array<{ name: string; path: string; documentCount: number }>;
}> {
  const docsPath = getDocsPath();
  const markdownFiles = findAllMarkdownFiles(docsPath);

  const sectionMap = new Map<string, number>();

  markdownFiles.forEach((filePath) => {
    const relativePath = path.relative(docsPath, filePath).replace(/\\/g, '/');
    const parts = relativePath.split('/');
    
    if (parts.length > 1) {
      const section = parts[0];
      if (!filterSection || section.includes(filterSection)) {
        sectionMap.set(section, (sectionMap.get(section) || 0) + 1);
      }
    }
  });

  const sections = Array.from(sectionMap.entries()).map(([name, count]) => ({
    name,
    path: name,
    documentCount: count,
  }));

  return { sections };
}

/**
 * Busca referência de endpoint
 */
async function getEndpointReference(endpoint: string): Promise<string> {
  const docsPath = getDocsPath();
  const referencePath = path.join(docsPath, 'referencia');
  
  if (!fs.existsSync(referencePath)) {
    throw new Error('Reference documentation not found');
  }

  // Busca em arquivos de referência
  const markdownFiles = findAllMarkdownFiles(referencePath);
  const normalizedEndpoint = endpoint.toLowerCase().replace(/^\//, '');

  for (const filePath of markdownFiles) {
    const content = loadMarkdownFile(filePath);
    const normalizedContent = content.toLowerCase();
    
    // Busca por padrões comuns de endpoint
    if (
      normalizedContent.includes(normalizedEndpoint) ||
      normalizedContent.includes(`/${normalizedEndpoint}`) ||
      filePath.toLowerCase().includes(normalizedEndpoint.replace(/\//g, '_'))
    ) {
      return content;
    }
  }

  throw new Error(`Endpoint reference not found: ${endpoint}`);
}

/**
 * Busca informações sobre código de erro
 */
async function getErrorCodeInfo(errorCode: number): Promise<{
  code: number;
  message: string;
  description: string;
  solution: string;
  relatedDocs: string[];
}> {
  const docsPath = getDocsPath();
  const errorCodesPath = path.join(docsPath, 'suporte', 'error_codes.md');
  
  if (!fs.existsSync(errorCodesPath)) {
    throw new Error('Error codes documentation not found');
  }

  const content = loadMarkdownFile(errorCodesPath);
  const codeStr = errorCode.toString();

  // Busca por código de erro no conteúdo
  const codePattern = new RegExp(`(?:^|\\s)${codeStr}\\s+[-:]\\s*(.+?)(?:\\n|$)`, 'im');
  const match = content.match(codePattern);

  if (!match) {
    throw new Error(`Error code ${errorCode} not found`);
  }

  // Extrai informações básicas
  return {
    code: errorCode,
    message: match[1] || 'Unknown error',
    description: `Error code ${errorCode} from WhatsApp Business API`,
    solution: 'Please refer to the error codes documentation for detailed solutions.',
    relatedDocs: ['suporte/error_codes.md'],
  };
}

/**
 * Obtém referência rápida para operação comum
 */
async function getQuickReference(operation: string): Promise<string> {
  const docsPath = getDocsPath();
  const quickRefPath = path.join(docsPath, 'QUICK_REFERENCE.md');

  if (fs.existsSync(quickRefPath)) {
    const content = loadMarkdownFile(quickRefPath);
    const normalizedOp = operation.toLowerCase();

    // Busca seção específica da operação
    if (content.toLowerCase().includes(normalizedOp)) {
      // Extrai seção relevante
      const sections = content.split(/^##/m);
      for (const section of sections) {
        if (section.toLowerCase().includes(normalizedOp)) {
          return `##${section}`;
        }
      }
    }

    return content;
  }

  // Fallback: busca em documentação geral
  const results = await searchDocumentation(operation);
  if (results.length > 0) {
    return await getDocumentByPath(results[0].path);
  }

  throw new Error(`Quick reference not found for operation: ${operation}`);
}

/**
 * Registra handlers de ferramentas no servidor MCP
 */
export function registerToolHandlers(server: Server): void {
  // Lista todas as ferramentas disponíveis
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: 'search_documentation',
          description: 'Busca textual em todos os documentos da documentação',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Termo de busca',
              },
              section: {
                type: 'string',
                description: 'Filtrar por seção específica (opcional)',
              },
            },
            required: ['query'],
          },
        },
        {
          name: 'get_document_by_path',
          description: 'Obtém conteúdo completo de um documento específico',
          inputSchema: {
            type: 'object',
            properties: {
              path: {
                type: 'string',
                description: 'Caminho relativo ao docs/ (ex: mensagens/visao_geral/send_messages.md)',
              },
            },
            required: ['path'],
          },
        },
        {
          name: 'list_documentation_sections',
          description: 'Lista todas as seções principais da documentação',
          inputSchema: {
            type: 'object',
            properties: {
              section: {
                type: 'string',
                description: 'Filtrar subseções específicas (opcional)',
              },
            },
          },
        },
        {
          name: 'get_endpoint_reference',
          description: 'Busca referência de endpoint específico da API',
          inputSchema: {
            type: 'object',
            properties: {
              endpoint: {
                type: 'string',
                description: 'Endpoint da API (ex: /messages, /webhooks, /phone_numbers)',
              },
            },
            required: ['endpoint'],
          },
        },
        {
          name: 'get_error_code_info',
          description: 'Busca informações sobre código de erro específico',
          inputSchema: {
            type: 'object',
            properties: {
              error_code: {
                type: 'number',
                description: 'Código numérico do erro',
              },
            },
            required: ['error_code'],
          },
        },
        {
          name: 'get_quick_reference',
          description: 'Obtém referência rápida para operação comum',
          inputSchema: {
            type: 'object',
            properties: {
              operation: {
                type: 'string',
                description: 'Nome da operação (ex: send_message, setup_webhook, create_template)',
              },
            },
            required: ['operation'],
          },
        },
      ],
    };
  });

  // Handler para executar ferramentas
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    try {
      switch (name) {
        case 'search_documentation': {
          const query = args?.query as string;
          const section = args?.section as string | undefined;
          const results = await searchDocumentation(query, section);
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(results, null, 2),
              },
            ],
          };
        }

        case 'get_document_by_path': {
          const docPath = args?.path as string;
          const content = await getDocumentByPath(docPath);
          return {
            content: [
              {
                type: 'text',
                text: content,
              },
            ],
          };
        }

        case 'list_documentation_sections': {
          const filterSection = args?.section as string | undefined;
          const sections = await listDocumentationSections(filterSection);
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(sections, null, 2),
              },
            ],
          };
        }

        case 'get_endpoint_reference': {
          const endpoint = args?.endpoint as string;
          const refContent = await getEndpointReference(endpoint);
          return {
            content: [
              {
                type: 'text',
                text: refContent,
              },
            ],
          };
        }

        case 'get_error_code_info': {
          const errorCode = args?.error_code as number;
          const errorInfo = await getErrorCodeInfo(errorCode);
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(errorInfo, null, 2),
              },
            ],
          };
        }

        case 'get_quick_reference': {
          const operation = args?.operation as string;
          const quickRef = await getQuickReference(operation);
          return {
            content: [
              {
                type: 'text',
                text: quickRef,
              },
            ],
          };
        }

        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Error: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  });
}

