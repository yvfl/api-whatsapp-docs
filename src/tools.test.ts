import { describe, it, expect, vi, beforeEach } from 'vitest';
import { searchDocumentation } from './tools';
import {
  findAllMarkdownFiles,
  getDocsPath,
  loadMarkdownFile,
} from './utils/fileLoader';
import * as fs from 'fs';

// Mock do fs também
vi.mock('fs', async () => {
  const actual = await vi.importActual('fs');
  return {
    ...actual,
    default: {
      ...actual,
      existsSync: vi.fn(),
    },
    existsSync: vi.fn(),
  };
});

// Mock do fileLoader
vi.mock('./utils/fileLoader', async () => {
  const actual = await vi.importActual('./utils/fileLoader');
  return {
    ...actual,
    getDocsPath: vi.fn(() => '/mock/docs'),
    findAllMarkdownFiles: vi.fn(() => [
      '/mock/docs/mensagens/tipos_de_mensagens/audio_messages.md',
      '/mock/docs/mensagens/tipos_de_mensagens/text_messages.md',
      '/mock/docs/referencia/midias/media_upload_api.md',
    ]),
    loadMarkdownFile: vi.fn((filePath: string) => {
      const mockFiles: Record<string, string> = {
        '/mock/docs/mensagens/tipos_de_mensagens/audio_messages.md': `# Mensagens de áudio

É possível usar a API para enviar mensagens de voz e mensagens de áudio básicas.
As mensagens de áudio são suportadas pela API.`,
        '/mock/docs/mensagens/tipos_de_mensagens/text_messages.md': `# Mensagens de texto

Os SMS contêm somente um corpo de texto e uma prévia de link opcional.`,
        '/mock/docs/referencia/midias/media_upload_api.md': `# API de Upload de Mídia

Envie arquivos de mídia (imagens, vídeos, áudio, documentos) para o WhatsApp.`,
      };
      return mockFiles[filePath] || '';
    }),
  };
});

describe('searchDocumentation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve encontrar documentos por nome de arquivo', async () => {
    const results = await searchDocumentation('audio');
    
    expect(results.length).toBeGreaterThan(0);
    const audioResult = results.find(r => r.path.includes('audio'));
    expect(audioResult).toBeDefined();
    expect(audioResult?.relevance).toBeGreaterThan(50); // Alta relevância por nome
  });

  it('deve encontrar documentos por conteúdo', async () => {
    const results = await searchDocumentation('mensagens');
    
    expect(results.length).toBeGreaterThan(0);
    // Deve encontrar tanto audio quanto text messages
    const paths = results.map(r => r.path);
    expect(paths.some(p => p.includes('audio'))).toBe(true);
    expect(paths.some(p => p.includes('text'))).toBe(true);
  });

  it('deve encontrar documentos com busca normalizada (áudio/audio)', async () => {
    const resultsAudio = await searchDocumentation('audio');
    const resultsAcento = await searchDocumentation('áudio');
    
    // Ambos devem encontrar resultados
    expect(resultsAudio.length).toBeGreaterThan(0);
    expect(resultsAcento.length).toBeGreaterThan(0);
    
    const pathsAudio = resultsAudio.map(r => r.path);
    const pathsAcento = resultsAcento.map(r => r.path);
    
    // Deve encontrar arquivos similares
    expect(pathsAudio.some(p => p.includes('audio'))).toBe(true);
    expect(pathsAcento.some(p => p.includes('audio'))).toBe(true);
  });

  it('deve encontrar documentos com múltiplas palavras', async () => {
    const results = await searchDocumentation('audio message');
    
    expect(results.length).toBeGreaterThan(0);
    const audioResult = results.find(r => r.path.includes('audio'));
    expect(audioResult).toBeDefined();
  });

  it('deve filtrar por seção quando especificado', async () => {
    const results = await searchDocumentation('mensagens', 'mensagens');
    
    expect(results.length).toBeGreaterThan(0);
    // Todos os resultados devem estar na seção mensagens
    results.forEach(result => {
      expect(result.path).toContain('mensagens');
    });
  });

  it('deve ordenar resultados por relevância', async () => {
    const results = await searchDocumentation('audio');
    
    expect(results.length).toBeGreaterThan(0);
    // Primeiro resultado deve ter maior relevância
    for (let i = 1; i < results.length; i++) {
      expect(results[i - 1].relevance).toBeGreaterThanOrEqual(results[i].relevance);
    }
  });

  it('deve limitar resultados a 20', async () => {
    // Mock com muitos arquivos
    const manyFiles = Array.from({ length: 30 }, (_, i) => 
      `/mock/docs/test/file${i}.md`
    );
    
    vi.mocked(findAllMarkdownFiles).mockReturnValueOnce(manyFiles);
    vi.mocked(loadMarkdownFile).mockImplementation(() => 'conteúdo de teste com audio');
    
    const results = await searchDocumentation('audio');
    expect(results.length).toBeLessThanOrEqual(20);
  });

  it('deve retornar array vazio quando não encontra nada', async () => {
    vi.mocked(loadMarkdownFile).mockImplementation(() => 'conteúdo completamente diferente sem relação');
    
    const results = await searchDocumentation('xyzabc123nenhummatch');
    expect(results.length).toBe(0);
  });

  it('deve incluir título e excerpt nos resultados', async () => {
    const results = await searchDocumentation('audio');
    
    expect(results.length).toBeGreaterThan(0);
    const firstResult = results[0];
    expect(firstResult.title).toBeDefined();
    expect(firstResult.excerpt).toBeDefined();
    expect(firstResult.path).toBeDefined();
    expect(firstResult.relevance).toBeGreaterThanOrEqual(0);
  });
});

describe('getDocumentByPath', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve retornar conteúdo do documento', async () => {
    const { getDocumentByPath } = await import('./tools');
    const mockContent = '# Título\n\nConteúdo de teste';
    vi.mocked(loadMarkdownFile).mockReturnValueOnce(mockContent);
    
    const content = await getDocumentByPath('mensagens/tipos_de_mensagens/audio_messages.md');
    
    // Verifica comportamento: retorna conteúdo carregado
    expect(content).toBe(mockContent);
    expect(content.length).toBeGreaterThan(0);
  });

  it('deve lançar erro para caminho inválido', async () => {
    const { getDocumentByPath } = await import('./tools');
    
    await expect(getDocumentByPath('../../../etc/passwd')).rejects.toThrow('Invalid path');
  });
});

describe('listDocumentationSections', () => {
  it('deve listar todas as seções', async () => {
    const { listDocumentationSections } = await import('./tools');
    const sections = await listDocumentationSections();
    
    expect(sections.sections).toBeDefined();
    expect(Array.isArray(sections.sections)).toBe(true);
  });

  it('deve filtrar por seção quando especificado', async () => {
    const { listDocumentationSections } = await import('./tools');
    const sections = await listDocumentationSections('mensagens');
    
    sections.sections.forEach(section => {
      expect(section.name).toContain('mensagens');
    });
  });
});

describe('getEndpointReference', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getDocsPath).mockReturnValue('/mock/docs');
  });

  it('deve encontrar referência de endpoint', async () => {
    const { getEndpointReference } = await import('./tools');
    const mockContent = '# API Reference\n\nPOST /media';
    
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(findAllMarkdownFiles).mockReturnValue([
      '/mock/docs/referencia/midias/media_api.md',
    ]);
    vi.mocked(loadMarkdownFile).mockReturnValue(mockContent);

    const content = await getEndpointReference('/media');
    
    // Verifica comportamento: retorna conteúdo encontrado
    expect(content).toBe(mockContent);
    expect(content.length).toBeGreaterThan(0);
  });

  it('deve lançar erro quando endpoint não encontrado', async () => {
    const { getEndpointReference } = await import('./tools');
    
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(findAllMarkdownFiles).mockReturnValue([]);

    await expect(getEndpointReference('/nonexistent')).rejects.toThrow('Endpoint reference not found');
  });
});

describe('getErrorCodeInfo', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getDocsPath).mockReturnValue('/mock/docs');
  });

  it('deve retornar informações de código de erro', async () => {
    const { getErrorCodeInfo } = await import('./tools');
    
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(loadMarkdownFile).mockReturnValue('100 - Rate limit exceeded\n200 - Invalid token');

    const info = await getErrorCodeInfo(100);
    
    expect(info.code).toBe(100);
    expect(info.message).toBeDefined();
    expect(info.relatedDocs).toContain('suporte/error_codes.md');
  });

  it('deve lançar erro quando código não encontrado', async () => {
    const { getErrorCodeInfo } = await import('./tools');
    
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(loadMarkdownFile).mockReturnValue('100 - Rate limit exceeded');

    await expect(getErrorCodeInfo(999)).rejects.toThrow('Error code 999 not found');
  });
});

describe('getQuickReference', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getDocsPath).mockReturnValue('/mock/docs');
  });

  it('deve retornar referência rápida quando arquivo existe', async () => {
    const { getQuickReference } = await import('./tools');
    const mockContent = '## Operação\n\nDescrição da operação';
    
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(loadMarkdownFile).mockReturnValue(mockContent);

    const content = await getQuickReference('send_message');
    
    // Verifica comportamento: retorna conteúdo válido
    expect(content).toBeDefined();
    expect(typeof content).toBe('string');
    expect(content.length).toBeGreaterThan(0);
  });

  it('deve fazer fallback para busca quando arquivo não existe', async () => {
    const { getQuickReference } = await import('./tools');
    
    vi.mocked(fs.existsSync).mockReturnValue(false);
    vi.mocked(findAllMarkdownFiles).mockReturnValue([
      '/mock/docs/mensagens/tipos_de_mensagens/audio_messages.md',
    ]);
    vi.mocked(loadMarkdownFile).mockReturnValue('# Mensagens de áudio');

    const content = await getQuickReference('audio');
    
    expect(content).toBeDefined();
  });
});
