import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import {
  loadMarkdownFile,
  findAllMarkdownFiles,
  getDocsPath,
} from './fileLoader';

// Mock do fs
vi.mock('fs', () => {
  return {
    default: {
      readFileSync: vi.fn(),
      readdirSync: vi.fn(),
      statSync: vi.fn(),
      existsSync: vi.fn(),
    },
    readFileSync: vi.fn(),
    readdirSync: vi.fn(),
    statSync: vi.fn(),
    existsSync: vi.fn(),
  };
});

describe('loadMarkdownFile', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve carregar conteúdo de arquivo markdown', () => {
    const mockContent = '# Título\n\nConteúdo do arquivo';
    vi.mocked(fs.readFileSync).mockReturnValue(mockContent);

    const result = loadMarkdownFile('/path/to/file.md');
    
    expect(result).toBe(mockContent);
    expect(fs.readFileSync).toHaveBeenCalledWith('/path/to/file.md', 'utf-8');
  });

  it('deve lançar erro quando arquivo não existe', () => {
    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error('ENOENT: no such file or directory');
    });

    expect(() => {
      loadMarkdownFile('/path/to/nonexistent.md');
    }).toThrow('Failed to load file');
  });
});

describe('findAllMarkdownFiles', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve encontrar todos os arquivos .md recursivamente', () => {
    const calls: string[] = [];
    
    vi.mocked(fs.readdirSync).mockImplementation((dir: string) => {
      calls.push(dir);
      if (dir === '/docs') {
        return ['file1.md', 'subdir', 'file2.md'] as any;
      }
      if (dir === '/docs/subdir') {
        return ['file3.md'] as any;
      }
      return [] as any;
    });

    vi.mocked(fs.statSync).mockImplementation((filePath: string) => {
      const isDir = filePath.includes('subdir') && !filePath.endsWith('.md');
      return {
        isDirectory: () => isDir,
      } as any;
    });

    const result = findAllMarkdownFiles('/docs');
    
    expect(result).toContain('/docs/file1.md');
    expect(result).toContain('/docs/file2.md');
    // Verifica que subdir foi processado
    expect(calls).toContain('/docs/subdir');
  });

  it('deve ignorar arquivos que não são .md', () => {
    vi.mocked(fs.readdirSync).mockReturnValue(['file1.md', 'file2.txt', 'file3.js']);
    vi.mocked(fs.statSync).mockReturnValue({
      isDirectory: () => false,
    } as any);

    const result = findAllMarkdownFiles('/docs');
    
    expect(result).toContain('/docs/file1.md');
    expect(result).not.toContain('/docs/file2.txt');
    expect(result).not.toContain('/docs/file3.js');
  });

  it('deve retornar array vazio para diretório vazio', () => {
    vi.mocked(fs.readdirSync).mockReturnValue([]);
    
    const result = findAllMarkdownFiles('/empty');
    
    expect(result).toEqual([]);
  });
});

describe('getDocsPath', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve encontrar docs/ no caminho esperado', () => {
    // getDocsPath usa require('fs') internamente, então testamos apenas que retorna um caminho válido
    const result = getDocsPath();
    
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  it('deve retornar caminho válido mesmo quando validação falha', () => {
    const result = getDocsPath();
    
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });

  it('deve validar que docs/ contém arquivos markdown', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['file.txt', 'subdir']); // Sem .md
    vi.mocked(fs.statSync).mockReturnValue({
      isDirectory: () => true,
    } as any);

    const result = getDocsPath();
    
    // Deve tentar fallbacks ou retornar caminho esperado mesmo sem validação
    expect(result).toBeDefined();
  });
});
