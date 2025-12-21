import { loadMarkdownFile } from './fileLoader';

export interface SearchResult {
  path: string;
  title: string;
  excerpt: string;
  relevance: number;
}

/**
 * Dicionário de sinônimos bilíngues (português/inglês) para termos da WhatsApp API
 * Todos os termos devem estar normalizados (sem acentos, minúsculas)
 */
export const SYNONYMS: Record<string, string[]> = {
  // Typing/Digitação
  'typing': ['digitacao', 'digitando', 'digitar', 'escrevendo', 'type'],
  'digitacao': ['typing', 'digitando', 'digitar', 'type'],
  'digitando': ['typing', 'digitacao', 'digitar', 'type'],
  'type': ['typing', 'digitacao', 'tipo'],
  
  // Indicator/Indicador
  'indicator': ['indicador', 'indicadores', 'indicators'],
  'indicators': ['indicador', 'indicadores', 'indicator'],
  'indicador': ['indicator', 'indicators', 'indicadores'],
  'indicadores': ['indicator', 'indicators', 'indicador'],
  
  // Message/Mensagem
  'message': ['mensagem', 'mensagens', 'msg', 'messages'],
  'messages': ['mensagem', 'mensagens', 'msg', 'message'],
  'mensagem': ['message', 'messages', 'msg', 'mensagens'],
  'mensagens': ['message', 'messages', 'msg', 'mensagem'],
  'msg': ['message', 'mensagem', 'messages', 'mensagens'],
  
  // Audio/Áudio
  'audio': ['som', 'voz', 'voice', 'sound'],
  'voz': ['audio', 'voice', 'som'],
  'voice': ['audio', 'voz', 'som'],
  'som': ['audio', 'voz', 'voice', 'sound'],
  
  // Webhook/Callback
  'webhook': ['callback', 'notificacao', 'notification', 'webhooks'],
  'webhooks': ['webhook', 'callback', 'notificacao'],
  'callback': ['webhook', 'notificacao', 'notification'],
  'notificacao': ['webhook', 'callback', 'notification', 'notificacoes'],
  
  // Template/Modelo
  'template': ['modelo', 'templates', 'modelos'],
  'templates': ['modelo', 'template', 'modelos'],
  'modelo': ['template', 'templates', 'modelos'],
  'modelos': ['template', 'templates', 'modelo'],
  
  // Send/Enviar
  'send': ['enviar', 'envio', 'sending'],
  'enviar': ['send', 'envio', 'sending'],
  'envio': ['send', 'enviar', 'sending'],
  
  // Receive/Receber
  'receive': ['receber', 'recebimento', 'receiving'],
  'receber': ['receive', 'recebimento', 'receiving'],
  
  // Error/Erro
  'error': ['erro', 'errors', 'erros'],
  'errors': ['erro', 'erros', 'error'],
  'erro': ['error', 'errors', 'erros'],
  'erros': ['error', 'errors', 'erro'],
  
  // Media/Mídia
  'media': ['midia', 'midias'],
  'midia': ['media', 'midias'],
  
  // Image/Imagem
  'image': ['imagem', 'images', 'imagens', 'foto', 'picture'],
  'images': ['imagem', 'imagens', 'image', 'fotos'],
  'imagem': ['image', 'images', 'imagens', 'foto'],
  'imagens': ['image', 'images', 'imagem', 'fotos'],
  
  // Video/Vídeo
  'video': ['videos'],
  'videos': ['video'],
  
  // Document/Documento
  'document': ['documento', 'documents', 'documentos', 'doc'],
  'documents': ['documento', 'documentos', 'document'],
  'documento': ['document', 'documents', 'documentos'],
  'documentos': ['document', 'documents', 'documento'],
  
  // Phone/Telefone
  'phone': ['telefone', 'phones', 'telefones', 'numero'],
  'telefone': ['phone', 'phones', 'telefones', 'numero'],
  'numero': ['phone', 'telefone', 'number'],
  'number': ['numero', 'phone', 'telefone'],
  
  // Business/Negócio
  'business': ['negocio', 'comercial', 'empresa'],
  'negocio': ['business', 'comercial', 'empresa'],
  
  // Account/Conta
  'account': ['conta', 'accounts', 'contas'],
  'conta': ['account', 'accounts', 'contas'],
  
  // Status
  'status': ['estado', 'situacao'],
  'estado': ['status', 'situacao'],
  
  // Read/Lido
  'read': ['lido', 'leitura', 'ler'],
  'lido': ['read', 'leitura'],
  'leitura': ['read', 'lido'],
  
  // Recording/Gravação
  'recording': ['gravacao', 'gravando', 'gravar'],
  'gravacao': ['recording', 'gravando', 'gravar'],
  'gravando': ['recording', 'gravacao', 'gravar'],
  'gravar': ['recording', 'gravacao', 'gravando'],
};

/**
 * Normaliza texto removendo acentos e convertendo para minúsculas
 */
export function normalizeText(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

/**
 * Aplica stemming básico para português e inglês
 * Retorna array com a palavra original e possíveis stems
 */
export function stemWord(word: string): string[] {
  const stems: string[] = [word];
  
  if (word.length < 4) return stems;
  
  // Português - verbos no gerúndio (-ando, -endo, -indo)
  if (word.endsWith('ando') && word.length > 5) {
    stems.push(word.slice(0, -4)); // raiz
    stems.push(word.slice(0, -4) + 'ar'); // infinitivo
    stems.push(word.slice(0, -4) + 'a'); // presente
  }
  if (word.endsWith('endo') && word.length > 5) {
    stems.push(word.slice(0, -4));
    stems.push(word.slice(0, -4) + 'er');
    stems.push(word.slice(0, -4) + 'e');
  }
  if (word.endsWith('indo') && word.length > 5) {
    stems.push(word.slice(0, -4));
    stems.push(word.slice(0, -4) + 'ir');
    stems.push(word.slice(0, -4) + 'e');
  }
  
  // Português - substantivos terminados em -ção/-cao (normalizado)
  if ((word.endsWith('cao') || word.endsWith('coes')) && word.length > 4) {
    const root = word.endsWith('coes') ? word.slice(0, -4) : word.slice(0, -3);
    stems.push(root);
    stems.push(root + 'c');
    stems.push(root + 'cao');
    stems.push(root + 'coes');
  }
  
  // Inglês - verbos no gerúndio (-ing)
  if (word.endsWith('ing') && word.length > 5) {
    stems.push(word.slice(0, -3)); // type
    stems.push(word.slice(0, -3) + 'e'); // type (para typing -> type)
    // Dobrar consoante: running -> run
    if (word.length > 6 && word[word.length - 4] === word[word.length - 5]) {
      stems.push(word.slice(0, -4));
    }
  }
  
  // Inglês - passado (-ed)
  if (word.endsWith('ed') && word.length > 4) {
    stems.push(word.slice(0, -2));
    stems.push(word.slice(0, -2) + 'e'); // created -> create
    // Dobrar consoante
    if (word.length > 5 && word[word.length - 3] === word[word.length - 4]) {
      stems.push(word.slice(0, -3));
    }
  }
  
  // Plural inglês (-s, -es, -ies)
  if (word.endsWith('ies') && word.length > 4) {
    stems.push(word.slice(0, -3) + 'y');
  } else if (word.endsWith('es') && word.length > 3) {
    stems.push(word.slice(0, -2));
    stems.push(word.slice(0, -1));
  } else if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) {
    stems.push(word.slice(0, -1));
  }
  
  // Plural português (-ões -> -ão)
  if (word.endsWith('oes') && word.length > 4) {
    stems.push(word.slice(0, -3) + 'ao');
  }
  
  // Remove duplicatas e retorna
  return [...new Set(stems)];
}

/**
 * Expande termos da query usando stemming e sinônimos
 * Retorna um Set com todos os termos expandidos
 */
export function expandQueryTerms(words: string[]): Set<string> {
  const expanded = new Set<string>();
  
  for (const word of words) {
    // Adiciona palavra original
    expanded.add(word);
    
    // Adiciona stems
    const stems = stemWord(word);
    stems.forEach(s => expanded.add(s));
    
    // Adiciona sinônimos (para palavra original e stems)
    const allForms = [word, ...stems];
    for (const form of allForms) {
      const synonyms = SYNONYMS[form];
      if (synonyms) {
        synonyms.forEach(s => expanded.add(s));
      }
    }
  }
  
  return expanded;
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
 * Verifica se algum termo expandido está presente no texto
 */
function hasExpandedTermMatch(text: string, expandedTerms: Set<string>): boolean {
  for (const term of expandedTerms) {
    if (text.includes(term)) {
      return true;
    }
  }
  return false;
}

/**
 * Conta quantos termos expandidos estão presentes no texto
 */
function countExpandedTermMatches(text: string, expandedTerms: Set<string>): number {
  let count = 0;
  for (const term of expandedTerms) {
    if (text.includes(term)) {
      count++;
    }
  }
  return count;
}

/**
 * Busca textual melhorada em conteúdo markdown
 * Usa expansão de termos (stemming + sinônimos) para busca mais flexível
 * Remove duplicatas e considera nome do arquivo
 */
export function searchInContent(content: string, query: string, filePath?: string): boolean {
  const normalizedQuery = normalizeText(query.trim());
  const normalizedContent = normalizeText(content);
  const normalizedFilePath = filePath ? normalizeText(filePath) : '';
  
  // Busca no nome do arquivo primeiro (maior relevância) - busca exata
  if (filePath && normalizedFilePath.includes(normalizedQuery)) {
    return true;
  }
  
  // Divide query em palavras e REMOVE DUPLICATAS
  const queryWords = [...new Set(splitIntoWords(normalizedQuery))].filter(w => w.length > 2);
  
  // Se não tem palavras válidas, busca string completa
  if (queryWords.length === 0) {
    return normalizedContent.includes(normalizedQuery) || 
           normalizedFilePath.includes(normalizedQuery);
  }
  
  // Expande termos usando stemming e sinônimos
  const expandedTerms = expandQueryTerms(queryWords);
  
  // Palavras do nome do arquivo
  const fileWords = splitIntoWords(normalizedFilePath);
  const expandedFileTerms = expandQueryTerms(fileWords);
  
  // Verifica quantas palavras originais (ou seus equivalentes) foram encontradas
  let matchedOriginalWords = 0;
  let matchedInFileName = 0;
  
  for (const qw of queryWords) {
    const wordExpansions = expandQueryTerms([qw]);
    
    // Verifica se alguma expansão está no conteúdo
    const inContent = hasExpandedTermMatch(normalizedContent, wordExpansions);
    
    // Verifica se alguma expansão está no nome do arquivo
    // Também verifica se alguma expansão do arquivo corresponde às expansões da query
    let inFile = hasExpandedTermMatch(normalizedFilePath, wordExpansions);
    if (!inFile) {
      // Verifica overlap entre expansões da query e do arquivo
      for (const exp of wordExpansions) {
        if (expandedFileTerms.has(exp)) {
          inFile = true;
          break;
        }
      }
    }
    
    if (inContent || inFile) {
      matchedOriginalWords++;
      if (inFile) {
        matchedInFileName++;
      }
    }
  }
  
  // LÓGICA DE MATCH FLEXÍVEL:
  
  // 1. Se encontrou 2+ palavras no nome do arquivo → MATCH (alta confiança)
  if (matchedInFileName >= 2) {
    return true;
  }
  
  // 2. Se encontrou 1 palavra no nome do arquivo E 1+ no conteúdo → MATCH
  if (matchedInFileName >= 1 && matchedOriginalWords >= 2) {
    return true;
  }
  
  // 3. Para queries com múltiplas palavras: precisa encontrar pelo menos 50%
  if (queryWords.length > 1) {
    const requiredMatches = Math.max(2, Math.ceil(queryWords.length * 0.5));
    if (matchedOriginalWords >= requiredMatches) {
      return true;
    }
    
    // Fallback: se encontrou pelo menos 2 palavras, aceita
    if (matchedOriginalWords >= 2) {
      return true;
    }
  }
  
  // 4. Para query de uma palavra: basta encontrar em algum lugar
  if (queryWords.length === 1 && matchedOriginalWords >= 1) {
    return true;
  }
  
  return false;
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
 * Usa expansão de termos (stemming + sinônimos) para melhor scoring
 */
export function calculateRelevance(content: string, query: string, filePath?: string): number {
  const normalizedQuery = normalizeText(query);
  const normalizedContent = normalizeText(content);
  const normalizedFilePath = filePath ? normalizeText(filePath) : '';
  
  // Remove duplicatas das palavras da query
  const queryWords = [...new Set(splitIntoWords(normalizedQuery))].filter(w => w.length > 2);
  
  let score = 0;
  
  // Bônus alto se encontra no nome do arquivo (busca exata)
  if (filePath && normalizedFilePath.includes(normalizedQuery)) {
    score += 50;
  }
  
  // Expande termos do arquivo para comparação
  const fileWords = splitIntoWords(normalizedFilePath);
  const expandedFileTerms = expandQueryTerms(fileWords);
  
  // Bônus se palavras da query (ou sinônimos/stems) correspondem ao nome do arquivo
  if (filePath) {
    for (const qw of queryWords) {
      const wordExpansions = expandQueryTerms([qw]);
      
      // Verifica match direto
      for (const exp of wordExpansions) {
        if (normalizedFilePath.includes(exp)) {
          score += 20; // Bônus alto por match no nome do arquivo
          break;
        }
      }
      
      // Verifica overlap com expansões do arquivo
      for (const exp of wordExpansions) {
        if (expandedFileTerms.has(exp)) {
          score += 15; // Bônus por sinônimo/stem encontrado
          break;
        }
      }
    }
  }
  
  // Bônus se encontra no título (primeiro H1)
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    const normalizedTitle = normalizeText(h1Match[1]);
    const expandedTitleTerms = expandQueryTerms(splitIntoWords(normalizedTitle));
    
    if (normalizedTitle.includes(normalizedQuery)) {
      score += 30;
    }
    
    // Bônus adicional se cada palavra da query (ou sinônimo) está no título
    for (const word of queryWords) {
      const wordExpansions = expandQueryTerms([word]);
      for (const exp of wordExpansions) {
        if (normalizedTitle.includes(exp) || expandedTitleTerms.has(exp)) {
          score += 8;
          break;
        }
      }
    }
  }
  
  // Conta ocorrências de cada palavra (e seus sinônimos/stems) no conteúdo
  for (const word of queryWords) {
    const wordExpansions = expandQueryTerms([word]);
    let wordScore = 0;
    
    for (const exp of wordExpansions) {
      const escapedExp = exp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const matches = (normalizedContent.match(new RegExp(escapedExp, 'g')) || []).length;
      
      if (matches > 0) {
        // Palavra original vale mais, sinônimos valem um pouco menos
        if (exp === word) {
          wordScore += matches * 3;
        } else {
          wordScore += matches * 1.5;
        }
      }
    }
    
    score += Math.min(wordScore, 20); // Cap por palavra para evitar spam
    
    // Bônus adicional se palavra está no nome do arquivo
    for (const exp of wordExpansions) {
      if (normalizedFilePath.includes(exp)) {
        score += 10;
        break;
      }
    }
  }
  
  // Se query de uma palavra, também conta ocorrências da query completa
  if (queryWords.length === 0 && normalizedQuery.length > 2) {
    const queryExpansions = expandQueryTerms([normalizedQuery]);
    for (const exp of queryExpansions) {
      const escapedExp = exp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const matches = (normalizedContent.match(new RegExp(escapedExp, 'g')) || []).length;
      score += matches * 2;
    }
  }
  
  // Normaliza para 0-100
  return Math.min(100, score);
}



