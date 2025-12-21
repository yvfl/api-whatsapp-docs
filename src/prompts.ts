import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { ListPromptsRequestSchema, GetPromptRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { getDocsPath, loadMarkdownFile } from './utils/fileLoader';
import { searchInContent, extractExcerpt } from './utils/search';
import * as path from 'path';
import * as fs from 'fs';

interface Prompt {
  name: string;
  description: string;
  arguments?: Array<{
    name: string;
    description: string;
    required: boolean;
  }>;
  template: (args?: Record<string, any>) => Promise<string>;
}

const prompts: Prompt[] = [
  {
    name: 'send_message_guide',
    description: 'Guia completo para enviar mensagens via WhatsApp Business API',
    arguments: [
      {
        name: 'message_type',
        description: 'Tipo específico de mensagem: "text", "image", "template", "audio", "video", "document", "location", etc.',
        required: false,
      },
    ],
    template: async (args) => {
      const messageType = args?.message_type || 'text';
      const docsPath = getDocsPath();
      
      // Busca documentação de mensagens
      let content = '';
      const quickRefPath = path.join(docsPath, 'QUICK_REFERENCE.md');
      const sendMessagesPath = path.join(docsPath, 'mensagens', 'visao_geral', 'send_messages.md');
      
      // Tenta carregar referência rápida primeiro
      if (fs.existsSync(quickRefPath)) {
        const quickRef = loadMarkdownFile(quickRefPath);
        // Extrai seção de mensagens
        const messagesSection = quickRef.match(/## 📤 Enviar Mensagens[\s\S]*?(?=##|$)/);
        if (messagesSection) {
          content += messagesSection[0] + '\n\n';
        }
      }
      
      // Carrega guia completo de envio de mensagens
      if (fs.existsSync(sendMessagesPath)) {
        const sendMessages = loadMarkdownFile(sendMessagesPath);
        content += sendMessages + '\n\n';
      }
      
      // Busca tipo específico de mensagem se especificado
      if (messageType && messageType !== 'text') {
        const messageTypeFile = path.join(docsPath, 'mensagens', 'tipos_de_mensagens', `${messageType}_messages.md`);
        if (fs.existsSync(messageTypeFile)) {
          const typeContent = loadMarkdownFile(messageTypeFile);
          content += `\n## Documentação Específica: Mensagens ${messageType}\n\n` + typeContent;
        }
      }
      
      if (!content) {
        content = `# Guia: Enviar Mensagens via WhatsApp Business API\n\nUse a ferramenta \`get_document_by_path\` para obter documentação detalhada:\n- \`mensagens/visao_geral/send_messages.md\`\n- \`mensagens/tipos_de_mensagens/${messageType}_messages.md\`\n- \`QUICK_REFERENCE.md\``;
      }
      
      return content;
    },
  },
  {
    name: 'webhook_setup',
    description: 'Configurar webhooks para receber notificações da API',
    arguments: [
      {
        name: 'language',
        description: 'Linguagem de programação preferida (ex: "javascript", "python", "php", "java")',
        required: false,
      },
    ],
    template: async (args) => {
      const docsPath = getDocsPath();
      let content = '';
      
      // Carrega visão geral de webhooks
      const overviewPath = path.join(docsPath, 'webhooks', 'visao_geral', 'overview.md');
      if (fs.existsSync(overviewPath)) {
        content += loadMarkdownFile(overviewPath) + '\n\n';
      }
      
      // Carrega referência rápida seção de webhooks
      const quickRefPath = path.join(docsPath, 'QUICK_REFERENCE.md');
      if (fs.existsSync(quickRefPath)) {
        const quickRef = loadMarkdownFile(quickRefPath);
        const webhookSection = quickRef.match(/## 📥 Webhooks[\s\S]*?(?=##|$)/);
        if (webhookSection) {
          content += webhookSection[0] + '\n\n';
        }
      }
      
      // Busca documentação de mensagens de webhook se especificado
      const language = args?.language;
      if (language) {
        const messagesPath = path.join(docsPath, 'webhooks', 'referencia', 'messages', 'messages.md');
        if (fs.existsSync(messagesPath)) {
          const messages = loadMarkdownFile(messagesPath);
          if (searchInContent(messages, language)) {
            content += `\n## Exemplos em ${language}\n\n` + extractExcerpt(messages, language, 500);
          }
        }
      }
      
      if (!content) {
        content = `# Guia: Configurar Webhooks WhatsApp Business API\n\nUse a ferramenta \`get_document_by_path\` para obter documentação detalhada:\n- \`webhooks/visao_geral/overview.md\`\n- \`webhooks/referencia/messages/\`\n- \`QUICK_REFERENCE.md\` (seção Webhooks)`;
      }
      
      return content;
    },
  },
  {
    name: 'template_creation',
    description: 'Criar e gerenciar templates de mensagens',
    arguments: [
      {
        name: 'template_category',
        description: 'Categoria do template: "marketing", "utility", "authentication"',
        required: false,
      },
    ],
    template: async (args) => {
      const category = args?.template_category || 'utility';
      const docsPath = getDocsPath();
      let content = '';
      
      // Carrega visão geral de templates
      const overviewPath = path.join(docsPath, 'modelos', 'visao_geral', 'overview.md');
      if (fs.existsSync(overviewPath)) {
        content += loadMarkdownFile(overviewPath) + '\n\n';
      }
      
      // Carrega gerenciamento de templates
      const managementPath = path.join(docsPath, 'modelos', 'gerenciamento_de_modelos', 'template_management.md');
      if (fs.existsSync(managementPath)) {
        content += loadMarkdownFile(managementPath) + '\n\n';
      }
      
      // Carrega categoria específica
      const categoryPath = path.join(
        docsPath,
        'modelos',
        category === 'marketing' ? 'modelos_de_marketing' :
        category === 'authentication' ? 'modelos_de_autenticacao' :
        'modelos_de_utilidade',
        category === 'marketing' ? 'marketing_templates.md' :
        category === 'authentication' ? 'authentication_templates.md' :
        'utility_templates.md'
      );
      
      if (fs.existsSync(categoryPath)) {
        content += `\n## Documentação Específica: Templates ${category}\n\n` + loadMarkdownFile(categoryPath);
      }
      
      if (!content) {
        content = `# Guia: Criar Templates de Mensagens\n\nUse a ferramenta \`get_document_by_path\` para obter documentação detalhada:\n- \`modelos/visao_geral/overview.md\`\n- \`modelos/gerenciamento_de_modelos/template_management.md\`\n- \`modelos/modelos_de_${category}/\``;
      }
      
      return content;
    },
  },
  {
    name: 'error_troubleshooting',
    description: 'Resolver problemas comuns e entender códigos de erro',
    arguments: [
      {
        name: 'error_code',
        description: 'Código específico de erro para focar (opcional)',
        required: false,
      },
    ],
    template: async (args) => {
      const errorCode = args?.error_code;
      const docsPath = getDocsPath();
      let content = '';
      
      // Carrega documentação de códigos de erro
      const errorCodesPath = path.join(docsPath, 'suporte', 'error_codes.md');
      if (fs.existsSync(errorCodesPath)) {
        let errorContent = loadMarkdownFile(errorCodesPath);
        
        // Se código específico fornecido, busca seção relevante
        if (errorCode) {
          const codeStr = errorCode.toString();
          if (searchInContent(errorContent, codeStr)) {
            const excerpt = extractExcerpt(errorContent, codeStr, 1000);
            content += `# Guia: Resolução de Problemas - Erro ${errorCode}\n\n${excerpt}\n\n`;
          }
        } else {
          content += `# Guia: Resolução de Problemas e Códigos de Erro\n\n${errorContent}\n\n`;
        }
      }
      
      // Carrega documentação de suporte geral
      const supportPath = path.join(docsPath, 'suporte', 'support.md');
      if (fs.existsSync(supportPath)) {
        content += loadMarkdownFile(supportPath) + '\n\n';
      }
      
      // Carrega seção de códigos de erro da referência rápida
      const quickRefPath = path.join(docsPath, 'QUICK_REFERENCE.md');
      if (fs.existsSync(quickRefPath)) {
        const quickRef = loadMarkdownFile(quickRefPath);
        const errorSection = quickRef.match(/### Códigos de Erro Comuns[\s\S]*?(?=##|$)/);
        if (errorSection) {
          content += errorSection[0] + '\n\n';
        }
      }
      
      if (!content) {
        content = `# Guia: Resolução de Problemas e Códigos de Erro\n\nUse a ferramenta \`get_error_code_info\` para obter informações detalhadas sobre códigos de erro específicos.\n\nDocumentação completa:\n- \`suporte/error_codes.md\`\n- \`suporte/support.md\`\n- \`QUICK_REFERENCE.md\` (seção Códigos de Erro)`;
      }
      
      return content;
    },
  },
  {
    name: 'api_authentication',
    description: 'Configurar autenticação e obter tokens de acesso',
    arguments: [],
    template: async () => {
      const docsPath = getDocsPath();
      let content = '';
      
      // Carrega documentação de tokens de acesso
      const accessTokensPath = path.join(docsPath, 'recado', 'sobre_a_plataforma', 'access_tokens.md');
      if (fs.existsSync(accessTokensPath)) {
        content += loadMarkdownFile(accessTokensPath) + '\n\n';
      }
      
      // Carrega documentação de permissões
      const permissionsPath = path.join(docsPath, 'recado', 'sobre_a_plataforma', 'permissions.md');
      if (fs.existsSync(permissionsPath)) {
        content += loadMarkdownFile(permissionsPath) + '\n\n';
      }
      
      // Carrega seção de autenticação da referência rápida
      const quickRefPath = path.join(docsPath, 'QUICK_REFERENCE.md');
      if (fs.existsSync(quickRefPath)) {
        const quickRef = loadMarkdownFile(quickRefPath);
        const authSection = quickRef.match(/## 🔑 Autenticação[\s\S]*?(?=##|$)/);
        if (authSection) {
          content += authSection[0] + '\n\n';
        }
      }
      
      if (!content) {
        content = `# Guia: Autenticação WhatsApp Business API\n\nUse a ferramenta \`get_document_by_path\` para obter documentação detalhada:\n- \`recado/sobre_a_plataforma/access_tokens.md\`\n- \`recado/sobre_a_plataforma/permissions.md\`\n- \`QUICK_REFERENCE.md\` (seção Autenticação)`;
      }
      
      return content;
    },
  },
];

/**
 * Lista todos os prompts disponíveis
 */
export async function listPrompts() {
  return prompts.map((p) => ({
    name: p.name,
    description: p.description,
    arguments: p.arguments || [],
  }));
}

/**
 * Obtém prompt específico com argumentos aplicados
 */
export async function getPrompt(name: string, args?: Record<string, any>): Promise<string> {
  const prompt = prompts.find((p) => p.name === name);
  if (!prompt) {
    throw new Error(`Prompt not found: ${name}`);
  }

  return await prompt.template(args);
}

/**
 * Registra handlers de prompts no servidor MCP
 */
export function registerPromptHandlers(server: Server): void {
  server.setRequestHandler(ListPromptsRequestSchema, async () => {
    const promptList = await listPrompts();
    return {
      prompts: promptList,
    };
  });

  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    if (!name || typeof name !== 'string') {
      throw new Error('Prompt name is required');
    }

    const content = await getPrompt(name, args as Record<string, any>);
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: content,
          },
        },
      ],
    };
  });
}

