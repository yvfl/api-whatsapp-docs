#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerResourceHandlers } from './resources.js';
import { registerToolHandlers } from './tools.js';
import { registerPromptHandlers } from './prompts.js';
import * as path from 'path';
import * as fs from 'fs';

// Importa versão do package.json dinamicamente
function loadPackageJson(): { name: string; version: string; description: string } {
  // Tenta encontrar o package.json subindo na hierarquia de diretórios
  let currentDir = __dirname;
  for (let i = 0; i < 5; i++) {
    const packagePath = path.join(currentDir, 'package.json');
    if (fs.existsSync(packagePath)) {
      const content = fs.readFileSync(packagePath, 'utf-8');
      return JSON.parse(content);
    }
    currentDir = path.dirname(currentDir);
  }
  // Fallback
  return { name: 'whatsapp-docs-mcp', version: '1.0.0', description: 'WhatsApp Docs MCP' };
}

export const packageJson = loadPackageJson();

// Configuração de logging baseada em variáveis de ambiente
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const DISABLE_CONSOLE_OUTPUT = process.env.DISABLE_CONSOLE_OUTPUT === 'true';
const MCP_MODE = process.env.MCP_MODE || 'stdio';

// Função de log condicional
function log(level: string, message: string, ...args: any[]) {
  if (DISABLE_CONSOLE_OUTPUT && MCP_MODE === 'stdio') {
    return; // Não loga nada em modo stdio para evitar interferir com JSON-RPC
  }

  const levels = ['error', 'warn', 'info', 'debug'];
  const currentLevel = levels.indexOf(LOG_LEVEL);
  const messageLevel = levels.indexOf(level);

  if (messageLevel <= currentLevel) {
    if (level === 'error') {
      console.error(`[${level.toUpperCase()}]`, message, ...args);
    } else {
      console.log(`[${level.toUpperCase()}]`, message, ...args);
    }
  }
}

async function main() {
  // Cria servidor MCP
  const server = new Server(
    {
      name: packageJson.name,
      version: packageJson.version,
    },
    {
      capabilities: {
        resources: {},
        tools: {},
        prompts: {},
      },
    }
  );

  // Registra handlers
  registerResourceHandlers(server);
  registerToolHandlers(server);
  registerPromptHandlers(server);

  // Handler de erro
  server.onerror = (error) => {
    log('error', 'Server error:', error);
  };

  // Handler de close
  process.on('SIGINT', async () => {
    log('info', 'Shutting down server...');
    await server.close();
    process.exit(0);
  });

  // Conecta transporte stdio
  const transport = new StdioServerTransport();
  await server.connect(transport);

  log('info', 'WhatsApp Docs MCP Server started');
}

main().catch((error) => {
  log('error', 'Failed to start server:', error);
  process.exit(1);
});



