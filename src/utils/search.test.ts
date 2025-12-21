import { describe, it, expect } from 'vitest';
import {
  normalizeText,
  searchInContent,
  calculateRelevance,
  extractTitle,
  extractExcerpt,
} from './search';

describe('normalizeText', () => {
  it('deve remover acentos de texto', () => {
    expect(normalizeText('áudio')).toBe('audio');
    expect(normalizeText('ÁUDIO')).toBe('audio');
    expect(normalizeText('mensagem')).toBe('mensagem');
    expect(normalizeText('Mensagem')).toBe('mensagem');
  });

  it('deve converter para minúsculas', () => {
    expect(normalizeText('AUDIO')).toBe('audio');
    expect(normalizeText('Audio')).toBe('audio');
  });

  it('deve tratar textos com e sem acentos como iguais', () => {
    expect(normalizeText('áudio')).toBe(normalizeText('audio'));
    expect(normalizeText('Mensagem')).toBe(normalizeText('mensagem'));
  });
});

describe('searchInContent', () => {
  const sampleContent = 'É possível usar a API para enviar mensagens de voz e mensagens de áudio básicas.';

  it('deve encontrar query simples no conteúdo', () => {
    expect(searchInContent(sampleContent, 'áudio')).toBe(true);
    expect(searchInContent(sampleContent, 'audio')).toBe(true);
    expect(searchInContent(sampleContent, 'mensagens')).toBe(true);
  });

  it('deve encontrar query no nome do arquivo', () => {
    const filePath = 'mensagens/tipos_de_mensagens/audio_messages.md';
    expect(searchInContent('conteúdo qualquer', 'audio', filePath)).toBe(true);
    expect(searchInContent('conteúdo qualquer', 'áudio', filePath)).toBe(true);
  });

  it('deve encontrar múltiplas palavras (AND)', () => {
    const content = 'mensagens de áudio podem ser enviadas';
    // "audio" e "mensagens" estão ambas no conteúdo
    expect(searchInContent(content, 'audio mensagens')).toBe(true);
    expect(searchInContent(content, 'mensagens audio')).toBe(true);
    // "video" não está no conteúdo
    expect(searchInContent(content, 'video mensagens')).toBe(false);
  });

  it('deve retornar false quando não encontra', () => {
    expect(searchInContent(sampleContent, 'vídeo')).toBe(false);
    expect(searchInContent(sampleContent, 'imagem')).toBe(false);
  });

  it('deve ignorar palavras muito curtas', () => {
    const content = 'teste de busca';
    // Palavras com menos de 3 caracteres são ignoradas
    expect(searchInContent(content, 'de')).toBe(true); // Mas ainda busca a string completa
  });

  it('deve encontrar typing indicator no arquivo typing_indicators.md', () => {
    const content = `# Indicadores de digitação

Quando você recebe um webhook de mensagens indicando uma mensagem recebida, é possível usar o valor message.id para marcar a mensagem como lida e exibir um indicador de digitação. Dessa forma, o usuário do WhatsApp saberá que você está escrevendo uma resposta.

O indicador de digitação será removido depois que você responder ou após 25 segundos.

"typing_indicator": {
  "type": "text"
}`;
    const filePath = 'mensagens/recursos_adicionais/typing_indicators.md';
    
    // Deve encontrar com diferentes variações da query
    expect(searchInContent(content, 'typing indicator', filePath)).toBe(true);
    expect(searchInContent(content, 'typing indicator digitando', filePath)).toBe(true);
    expect(searchInContent(content, 'typing indicator digitando typing', filePath)).toBe(true);
    expect(searchInContent(content, 'indicador digitação', filePath)).toBe(true);
    expect(searchInContent(content, 'indicadores de digitação', filePath)).toBe(true);
    expect(searchInContent(content, 'typing_indicators', filePath)).toBe(true);
  });

  it('deve encontrar typing indicator mesmo quando algumas palavras não estão no conteúdo', () => {
    const content = `# Indicadores de digitação
É possível usar o valor message.id para marcar a mensagem como lida e exibir um indicador de digitação.`;
    const filePath = 'mensagens/recursos_adicionais/typing_indicators.md';
    
    // Mesmo que a query tenha palavras extras, deve encontrar porque o arquivo tem "typing_indicators" no nome
    expect(searchInContent(content, 'typing indicator digitando typing', filePath)).toBe(true);
  });

  it('deve considerar underscores e hífens como separadores', () => {
    const content = 'Conteúdo sobre indicadores de digitação';
    const filePath1 = 'mensagens/recursos_adicionais/typing_indicators.md';
    const filePath2 = 'mensagens/recursos_adicionais/typing-indicators.md';
    
    expect(searchInContent(content, 'typing indicator', filePath1)).toBe(true);
    expect(searchInContent(content, 'typing indicator', filePath2)).toBe(true);
    expect(searchInContent(content, 'typing_indicators', filePath1)).toBe(true);
  });

  it('deve encontrar gravação de áudio', () => {
    const content = `# Mensagens de áudio
É possível usar a API para enviar mensagens de voz e mensagens de áudio básicas.
As mensagens de áudio podem ser gravadas e enviadas.
Você pode gravar áudio usando a API para recording messages.
A gravação de áudio é suportada pela API.`;
    const filePath = 'mensagens/tipos_de_mensagens/audio.md';
    
    // "audio" está no conteúdo e no nome do arquivo, então deve encontrar
    expect(searchInContent(content, 'audio gravadas', filePath)).toBe(true);
    expect(searchInContent(content, 'audio gravar', filePath)).toBe(true);
    expect(searchInContent(content, 'recording audio', filePath)).toBe(true);
    expect(searchInContent(content, 'audio recording', filePath)).toBe(true);
    // "gravação" e "audio" estão ambos no conteúdo
    expect(searchInContent(content, 'gravação audio', filePath)).toBe(true);
  });
});

describe('calculateRelevance', () => {
  const sampleContent = `# Mensagens de áudio

É possível usar a API para enviar mensagens de voz e mensagens de áudio básicas.
As mensagens de áudio são suportadas pela API.`;

  it('deve dar alta relevância quando encontra no nome do arquivo', () => {
    const filePath = 'mensagens/tipos_de_mensagens/audio_messages.md';
    const relevance = calculateRelevance(sampleContent, 'audio', filePath);
    expect(relevance).toBeGreaterThan(50);
  });

  it('deve dar relevância quando encontra no título', () => {
    const relevance = calculateRelevance(sampleContent, 'áudio', 'outro_arquivo.md');
    expect(relevance).toBeGreaterThan(30);
  });

  it('deve dar maior relevância para queries mais relevantes', () => {
    const filePath = 'mensagens/tipos_de_mensagens/audio_messages.md';
    const relevanceAudio = calculateRelevance(sampleContent, 'audio', filePath);
    const relevanceVideo = calculateRelevance(sampleContent, 'video', filePath);
    
    expect(relevanceAudio).toBeGreaterThan(relevanceVideo);
  });

  it('deve retornar 0 para conteúdo não relacionado', () => {
    const content = 'Conteúdo sobre vídeos e imagens';
    const relevance = calculateRelevance(content, 'audio', 'outro.md');
    expect(relevance).toBe(0);
  });

  it('deve considerar múltiplas ocorrências', () => {
    const content = 'áudio áudio áudio áudio';
    const relevance = calculateRelevance(content, 'audio', 'test.md');
    expect(relevance).toBeGreaterThan(0);
  });

  it('deve dar alta relevância para typing indicator no arquivo correto', () => {
    const content = `# Indicadores de digitação
É possível usar o valor message.id para marcar a mensagem como lida e exibir um indicador de digitação.
"typing_indicator": {
  "type": "text"
}`;
    const filePath = 'mensagens/recursos_adicionais/typing_indicators.md';
    
    const relevance1 = calculateRelevance(content, 'typing indicator', filePath);
    const relevance2 = calculateRelevance(content, 'typing indicator digitando', filePath);
    const relevance3 = calculateRelevance(content, 'indicador digitação', filePath);
    
    // Todas devem ter relevância alta porque o arquivo corresponde
    expect(relevance1).toBeGreaterThan(30);
    expect(relevance2).toBeGreaterThan(20);
    expect(relevance3).toBeGreaterThan(20);
  });

  it('deve considerar palavras com underscore no cálculo de relevância', () => {
    const content = 'Conteúdo sobre typing indicators';
    const filePath = 'mensagens/recursos_adicionais/typing_indicators.md';
    
    const relevance = calculateRelevance(content, 'typing indicator', filePath);
    expect(relevance).toBeGreaterThan(30); // Deve dar bônus por estar no nome do arquivo
  });
});

describe('extractTitle', () => {
  it('deve extrair título H1', () => {
    const content = '# Título Principal\n\nConteúdo aqui';
    expect(extractTitle(content, 'test.md')).toBe('Título Principal');
  });

  it('deve extrair título H2 se não houver H1', () => {
    const content = '## Título Secundário\n\nConteúdo aqui';
    expect(extractTitle(content, 'test.md')).toBe('Título Secundário');
  });

  it('deve usar nome do arquivo como fallback', () => {
    const content = 'Conteúdo sem título';
    expect(extractTitle(content, 'audio_messages.md')).toBe('audio messages');
  });

  it('deve normalizar nome do arquivo', () => {
    const content = 'Conteúdo sem título';
    expect(extractTitle(content, 'tipos-de-mensagens.md')).toBe('tipos de mensagens');
  });
});

describe('extractExcerpt', () => {
  const content = `Linha 1
Linha 2
Linha 3 com áudio
Linha 4
Linha 5`;

  it('deve extrair trecho ao redor da busca', () => {
    const excerpt = extractExcerpt(content, 'áudio');
    expect(excerpt).toContain('áudio');
    expect(excerpt.split('\n').length).toBeGreaterThan(1);
  });

  it('deve encontrar com normalização', () => {
    const excerpt = extractExcerpt(content, 'audio');
    expect(excerpt).toContain('áudio');
  });

  it('deve limitar tamanho do excerpt', () => {
    const longContent = 'a\n'.repeat(200) + 'linha com audio\n' + 'b\n'.repeat(200);
    const excerpt = extractExcerpt(longContent, 'audio');
    expect(excerpt.length).toBeLessThanOrEqual(303); // 300 + '...'
  });

  it('deve retornar primeiras linhas como fallback', () => {
    const contentWithoutMatch = 'Linha 1\nLinha 2\nLinha 3';
    const excerpt = extractExcerpt(contentWithoutMatch, 'xyz');
    expect(excerpt.length).toBeGreaterThan(0);
  });
});
