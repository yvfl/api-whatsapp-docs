import { loadMarkdownFile } from './fileLoader';

export interface SearchResult {
  path: string;
  title: string;
  excerpt: string;
  relevance: number;
}

/**
 * Busca textual simples em conteúdo markdown
 */
export function searchInContent(content: string, query: string): boolean {
  const normalizedQuery = query.toLowerCase().trim();
  const normalizedContent = content.toLowerCase();
  
  return normalizedContent.includes(normalizedQuery);
}

/**
 * Extrai título do arquivo markdown (primeiro # ou nome do arquivo)
 */
export function extractTitle(content: string, filePath: string): string {
  // Tenta encontrar primeiro título H1
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    return h1Match[1].trim();
  }
  
  // Tenta encontrar primeiro título H2
  const h2Match = content.match(/^##\s+(.+)$/m);
  if (h2Match) {
    return h2Match[1].trim();
  }
  
  // Usa nome do arquivo como fallback
  const fileName = filePath.split('/').pop() || filePath;
  return fileName.replace('.md', '').replace(/_/g, ' ').replace(/-/g, ' ');
}

/**
 * Extrai descrição (primeiro parágrafo ou primeiras linhas)
 */
export function extractDescription(content: string, maxLength: number = 200): string {
  // Remove código e links
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .trim();
  
  // Pega primeiro parágrafo significativo
  const lines = cleanContent.split('\n').filter(line => line.trim().length > 20);
  if (lines.length > 0) {
    const firstParagraph = lines[0];
    if (firstParagraph.length > maxLength) {
      return firstParagraph.substring(0, maxLength) + '...';
    }
    return firstParagraph;
  }
  
  return cleanContent.substring(0, maxLength) + (cleanContent.length > maxLength ? '...' : '');
}

/**
 * Extrai trecho relevante ao redor da busca
 */
export function extractExcerpt(content: string, query: string, contextLines: number = 3): string {
  const normalizedQuery = query.toLowerCase();
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes(normalizedQuery)) {
      const start = Math.max(0, i - contextLines);
      const end = Math.min(lines.length, i + contextLines + 1);
      const excerpt = lines.slice(start, end).join('\n');
      
      // Limita tamanho
      if (excerpt.length > 300) {
        return excerpt.substring(0, 300) + '...';
      }
      return excerpt;
    }
  }
  
  // Fallback: primeiras linhas
  return lines.slice(0, 5).join('\n').substring(0, 300);
}

/**
 * Calcula relevância simples baseada em ocorrências
 */
export function calculateRelevance(content: string, query: string): number {
  const normalizedQuery = query.toLowerCase();
  const normalizedContent = content.toLowerCase();
  
  const words = normalizedQuery.split(/\s+/).filter(w => w.length > 2);
  let score = 0;
  
  words.forEach(word => {
    const occurrences = (normalizedContent.match(new RegExp(word, 'g')) || []).length;
    score += occurrences;
  });
  
  // Normaliza para 0-1
  return Math.min(1, score / 10);
}

