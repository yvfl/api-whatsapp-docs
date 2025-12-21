import { describe, it, expect, beforeEach, vi } from 'vitest';
import * as path from 'path';
import {
  scanDocuments,
  listResources,
  readResource,
} from './resources';
import {
  findAllMarkdownFiles,
  getDocsPath,
  loadMarkdownFile,
} from './utils/fileLoader';

// Mock do fileLoader
vi.mock('./utils/fileLoader', () => {
  return {
    getDocsPath: vi.fn(() => '/mock/docs'),
    findAllMarkdownFiles: vi.fn(() => [
      '/mock/docs/mensagens/tipos_de_mensagens/audio_messages.md',
      '/mock/docs/mensagens/tipos_de_mensagens/text_messages.md',
    ]),
    loadMarkdownFile: vi.fn((filePath: string) => {
      const mockFiles: Record<string, string> = {
        '/mock/docs/mensagens/tipos_de_mensagens/audio_messages.md': `# Mensagens de áudio

É possível usar a API para enviar mensagens de voz.`,
        '/mock/docs/mensagens/tipos_de_mensagens/text_messages.md': `# Mensagens de texto

Os SMS contêm somente um corpo de texto.`,
      };
      return mockFiles[filePath] || '';
    }),
  };
});

describe('scanDocuments', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve escanear e retornar todos os documentos', () => {
    const resources = scanDocuments();
    
    expect(resources.length).toBe(2);
    expect(resources[0].uri).toContain('whatsapp-docs://docs/');
    expect(resources[0].mimeType).toBe('text/markdown');
  });

  it('deve extrair título e descrição dos documentos', () => {
    const resources = scanDocuments();
    
    const audioResource = resources.find(r => r.uri.includes('audio'));
    expect(audioResource).toBeDefined();
    // Verifica estrutura, não conteúdo específico
    expect(audioResource?.name).toBeDefined();
    expect(typeof audioResource?.name).toBe('string');
    expect(audioResource?.name.length).toBeGreaterThan(0);
    expect(audioResource?.description).toBeDefined();
    expect(typeof audioResource?.description).toBe('string');
  });

  it('deve usar cache na segunda chamada', () => {
    vi.clearAllMocks();
    const firstCall = scanDocuments();
    const callCount1 = vi.mocked(findAllMarkdownFiles).mock.calls.length;
    const secondCall = scanDocuments();
    const callCount2 = vi.mocked(findAllMarkdownFiles).mock.calls.length;
    
    // Segunda chamada não deve aumentar o número de chamadas (usa cache)
    expect(callCount2).toBe(callCount1);
    expect(firstCall).toBe(secondCall); // Mesma referência (cache)
  });

  it('deve criar URIs corretas', () => {
    const resources = scanDocuments();
    
    resources.forEach(resource => {
      expect(resource.uri).toMatch(/^whatsapp-docs:\/\/docs\//);
      expect(resource.uri).not.toContain('\\'); // Sem barras invertidas
    });
  });
});

describe('listResources', () => {
  it('deve retornar lista de recursos', async () => {
    const resources = await listResources();
    
    expect(Array.isArray(resources)).toBe(true);
    expect(resources.length).toBeGreaterThan(0);
  });
});

describe('readResource', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve ler conteúdo de recurso válido', async () => {
    const uri = 'whatsapp-docs://docs/mensagens/tipos_de_mensagens/audio_messages.md';
    
    const content = await readResource(uri);
    
    // Verifica comportamento: retorna conteúdo válido
    expect(content).toBeDefined();
    expect(typeof content).toBe('string');
    expect(content.length).toBeGreaterThan(0);
    expect(loadMarkdownFile).toHaveBeenCalled();
  });

  it('deve lançar erro para URI inválida', async () => {
    const invalidUri = 'invalid://path/to/file.md';
    
    await expect(readResource(invalidUri)).rejects.toThrow('Invalid URI format');
  });

  it('deve validar que caminho está dentro de docs/', async () => {
    // Mock para simular path traversal
    vi.mocked(getDocsPath).mockReturnValueOnce('/mock/docs');
    
    const maliciousUri = 'whatsapp-docs://docs/../../../etc/passwd';
    
    await expect(readResource(maliciousUri)).rejects.toThrow('Invalid path');
  });

  it('deve lançar erro quando arquivo não existe', async () => {
    vi.mocked(loadMarkdownFile).mockImplementation(() => {
      throw new Error('File not found');
    });
    
    const uri = 'whatsapp-docs://docs/nonexistent.md';
    
    await expect(readResource(uri)).rejects.toThrow('Failed to read resource');
  });
});


