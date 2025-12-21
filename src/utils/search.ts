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
 * Divide texto em palavras, considerando underscores, hífens e espaços como separadores
 */
function splitIntoWords(text: string): string[] {
  return text
    .replace(/[_\-\s]+/g, ' ') // Substitui underscores, hífens e múltiplos espaços por espaço
    .split(/\s+/)
    .filter(w => w.length > 0);
}

/**
 * Remove sufixos comuns para melhor matching (plural, etc)
 */
function normalizeWord(word: string): string {
  // Remove sufixos comuns de plural em inglês
  if (word.length > 3) {
    if (word.endsWith('s') && !word.endsWith('ss')) {
      return word.slice(0, -1);
    }
    if (word.endsWith('es')) {
      return word.slice(0, -2);
    }
    if (word.endsWith('ies')) {
      return word.slice(0, -3) + 'y';
    }
  }
  return word;
}

/**
 * Busca textual melhorada em conteúdo markdown
 * Busca por palavras individuais e considera nome do arquivo
 * Melhorado para considerar underscores/hífens e usar lógica mais flexível
 */
export function searchInContent(content: string, query: string, filePath?: string): boolean {
  const normalizedQuery = normalizeText(query.trim());
  const normalizedContent = normalizeText(content);
  const normalizedFilePath = filePath ? normalizeText(filePath) : '';
  
  // Busca no nome do arquivo primeiro (maior relevância) - busca exata
  if (filePath && normalizedFilePath.includes(normalizedQuery)) {
    return true;
  }
  
  // Divide query em palavras considerando underscores/hífens
  const queryWords = splitIntoWords(normalizedQuery).filter(w => w.length > 2);
  
  // Se query tem múltiplas palavras, usa lógica mais flexível
  if (queryWords.length > 1) {
    // Primeiro tenta encontrar todas as palavras (AND)
    const allWordsFound = queryWords.every(word => {
      const normalizedWord = normalizeWord(word);
      return normalizedContent.includes(word) || 
             normalizedContent.includes(normalizedWord) ||
             normalizedFilePath.includes(word) ||
             normalizedFilePath.includes(normalizedWord);
    });
    
    if (allWordsFound) {
      return true;
    }
    
    // Se não encontrou todas, tenta encontrar palavras-chave principais
    // Considera que se encontrar pelo menos 2 palavras principais, é relevante
    const mainWords = queryWords.filter(w => w.length >= 4); // Palavras com 4+ caracteres são mais importantes
    if (mainWords.length >= 2) {
      const foundMainWords = mainWords.filter(word => {
        const normalizedWord = normalizeWord(word);
        return normalizedContent.includes(word) || 
               normalizedContent.includes(normalizedWord) ||
               normalizedFilePath.includes(word) ||
               normalizedFilePath.includes(normalizedWord);
      });
      // Se há apenas 2 palavras principais, precisa encontrar ambas
      // Se há 3 ou mais, precisa encontrar pelo menos 2/3 (arredondado para cima)
      const requiredMainWords = mainWords.length === 2 
        ? 2  // Exige ambas quando há apenas 2
        : Math.ceil(mainWords.length * 2 / 3); // Pelo menos 2/3 quando há 3+
      if (foundMainWords.length >= requiredMainWords) {
        return true;
      }
    }
    
    // Fallback especial: busca por palavras no nome do arquivo quando há correspondência forte
    // Isso ajuda com casos como "typing_indicators.md" quando busca por "typing indicator"
    const wordsInFilePath = splitIntoWords(normalizedFilePath);
    
    // Verifica quais palavras da query estão no arquivo ou no conteúdo
    const foundWords = new Set<number>();
    queryWords.forEach((qw, idx) => {
      const normalizedQw = normalizeWord(qw);
      
      // Verifica no nome do arquivo
      const inFile = wordsInFilePath.some(fw => {
        const normalizedFw = normalizeWord(fw);
        return fw === qw || fw === normalizedQw || normalizedFw === qw || normalizedFw === normalizedQw ||
               fw.includes(qw) || fw.includes(normalizedQw) || normalizedFw.includes(qw) || normalizedFw.includes(normalizedQw) ||
               (normalizedQw.length >= 4 && (normalizedQw.includes(fw) || qw.includes(fw) || normalizedQw.includes(normalizedFw)));
      });
      
      // Verifica no conteúdo
      const inContent = normalizedContent.includes(qw) || normalizedContent.includes(normalizedQw);
      
      if (inFile || inContent) {
        foundWords.add(idx);
      }
    });
    
    // Se encontrou pelo menos 2 palavras (no arquivo ou conteúdo), retorna true
    if (foundWords.size >= 2) {
      return true;
    }
    
    return false;
  }
  
  // Busca simples para query de uma palavra
  const normalizedQueryWord = normalizeWord(normalizedQuery);
  return normalizedContent.includes(normalizedQuery) || 
         normalizedContent.includes(normalizedQueryWord) ||
         normalizedFilePath.includes(normalizedQuery) ||
         normalizedFilePath.includes(normalizedQueryWord);
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
  const queryWords = splitIntoWords(normalizedQuery).filter(w => w.length > 2);
  
  let score = 0;
  
  // Bônus alto se encontra no nome do arquivo (busca exata)
  if (filePath && normalizedFilePath.includes(normalizedQuery)) {
    score += 50;
  }
  
  // Bônus se palavras do nome do arquivo correspondem à query
  if (filePath) {
    const fileWords = splitIntoWords(normalizedFilePath);
    queryWords.forEach(qw => {
      const normalizedQw = normalizeWord(qw);
      fileWords.forEach(fw => {
        if (fw === qw || fw === normalizedQw || fw.includes(qw) || qw.includes(fw)) {
          score += 15;
        }
      });
    });
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
      const normalizedWord = normalizeWord(word);
      if (normalizedTitle.includes(word) || normalizedTitle.includes(normalizedWord)) {
        score += 5;
      }
    });
  }
  
  // Conta ocorrências de cada palavra no conteúdo
  queryWords.forEach(word => {
    const normalizedWord = normalizeWord(word);
    const contentMatches = (normalizedContent.match(new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    const normalizedMatches = (normalizedContent.match(new RegExp(normalizedWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    score += (contentMatches + normalizedMatches) * 2;
    
    // Bônus adicional se palavra está no nome do arquivo
    if (normalizedFilePath.includes(word) || normalizedFilePath.includes(normalizedWord)) {
      score += 10;
    }
  });
  
  // Se query de uma palavra, também conta ocorrências da query completa
  if (queryWords.length === 0 && normalizedQuery.length > 2) {
    const normalizedQueryWord = normalizeWord(normalizedQuery);
    const fullMatches = (normalizedContent.match(new RegExp(normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    const normalizedFullMatches = (normalizedContent.match(new RegExp(normalizedQueryWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    score += (fullMatches + normalizedFullMatches) * 2;
  }
  
  // Normaliza para 0-100
  return Math.min(100, score);
}

