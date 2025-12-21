import { loadMarkdownFile } from './fileLoader';

export interface SearchResult {
  path: string;
  title: string;
  excerpt: string;
  relevance: number;
}

/**
 * Normaliza texto removendo acentos e convertendo para minúsculas
 */
export function normalizeText(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

/**
 * Busca textual melhorada em conteúdo markdown
 * Busca por palavras individuais e considera nome do arquivo
 */
export function searchInContent(content: string, query: string, filePath?: string): boolean {
  const normalizedQuery = normalizeText(query.trim());
  const normalizedContent = normalizeText(content);
  const normalizedFilePath = filePath ? normalizeText(filePath) : '';
  
  // Busca no nome do arquivo primeiro (maior relevância)
  if (filePath && normalizedFilePath.includes(normalizedQuery)) {
    return true;
  }
  
  // Divide query em palavras (filtra palavras muito curtas)
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 2);
  
  // Se query tem múltiplas palavras, busca por todas (AND)
  if (queryWords.length > 1) {
    return queryWords.every(word => 
      normalizedContent.includes(word) || 
      normalizedFilePath.includes(word)
    );
  }
  
  // Busca simples para query de uma palavra
  return normalizedContent.includes(normalizedQuery) || 
         normalizedFilePath.includes(normalizedQuery);
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
  const normalizedQuery = normalizeText(query);
  const lines = content.split('\n');
  
  // Busca por palavras individuais também
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 2);
  
  for (let i = 0; i < lines.length; i++) {
    const normalizedLine = normalizeText(lines[i]);
    
    // Verifica se linha contém query completa ou todas as palavras
    const matchesQuery = normalizedLine.includes(normalizedQuery) ||
      (queryWords.length > 0 && queryWords.every(word => normalizedLine.includes(word)));
    
    if (matchesQuery) {
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
 * Calcula relevância melhorada baseada em ocorrências, nome do arquivo e título
 */
export function calculateRelevance(content: string, query: string, filePath?: string): number {
  const normalizedQuery = normalizeText(query);
  const normalizedContent = normalizeText(content);
  const normalizedFilePath = filePath ? normalizeText(filePath) : '';
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 2);
  
  let score = 0;
  
  // Bônus alto se encontra no nome do arquivo
  if (filePath && normalizedFilePath.includes(normalizedQuery)) {
    score += 50;
  }
  
  // Bônus se encontra no título (primeiro H1)
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    const normalizedTitle = normalizeText(h1Match[1]);
    if (normalizedTitle.includes(normalizedQuery)) {
      score += 30;
    }
    // Bônus adicional se cada palavra da query está no título
    queryWords.forEach(word => {
      if (normalizedTitle.includes(word)) {
        score += 5;
      }
    });
  }
  
  // Conta ocorrências de cada palavra no conteúdo
  queryWords.forEach(word => {
    const contentMatches = (normalizedContent.match(new RegExp(word, 'g')) || []).length;
    score += contentMatches * 2;
    
    // Bônus adicional se palavra está no nome do arquivo
    if (normalizedFilePath.includes(word)) {
      score += 10;
    }
  });
  
  // Se query de uma palavra, também conta ocorrências da query completa
  if (queryWords.length === 0 && normalizedQuery.length > 2) {
    const fullMatches = (normalizedContent.match(new RegExp(normalizedQuery, 'g')) || []).length;
    score += fullMatches * 2;
  }
  
  // Normaliza para 0-100
  return Math.min(100, score);
}

