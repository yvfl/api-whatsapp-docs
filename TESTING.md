# Guia de Testes - WhatsApp Docs MCP

## Estratégia de Testes

Os testes deste projeto foram projetados para serem **resilientes a mudanças na documentação**. Eles testam **comportamento e estrutura**, não conteúdo específico.

### Princípios

1. **Mocks para dados de teste**: Todos os testes usam dados mockados, não a documentação real
2. **Verificação de estrutura**: Testamos que funções retornam estruturas corretas, não conteúdo específico
3. **Comportamento, não conteúdo**: Testamos que a busca funciona, não o que ela encontra especificamente

## Testes por Módulo

### `utils/search.test.ts`
✅ **Seguro**: Testa algoritmos de busca e normalização com dados controlados
- Normalização de texto (áudio → audio)
- Lógica de busca por palavras
- Cálculo de relevância
- Extração de títulos e trechos

**Não quebra com mudanças na documentação** porque usa dados mockados.

### `utils/fileLoader.test.ts`
✅ **Seguro**: Testa operações de arquivo com mocks
- Carregamento de arquivos
- Busca recursiva
- Validação de caminhos

**Não quebra com mudanças na documentação** porque usa mocks do sistema de arquivos.

### `tools.test.ts`
✅ **Seguro**: Testa funcionalidades de busca e consulta com dados mockados
- Busca de documentação (testa algoritmo, não resultados específicos)
- Obtenção de documentos (testa que retorna conteúdo, não conteúdo específico)
- Listagem de seções (testa estrutura, não seções específicas)

**Não quebra com mudanças na documentação** porque:
- Usa mocks para conteúdo de arquivos
- Verifica estrutura de resultados, não conteúdo específico
- Testa comportamento (ex: "deve encontrar documentos", não "deve encontrar X específico")

### `resources.test.ts`
✅ **Seguro**: Testa recursos MCP com dados mockados
- Escaneamento de documentos
- Cache de recursos
- Leitura de recursos
- Validação de URIs

**Não quebra com mudanças na documentação** porque usa mocks.

### `prompts.test.ts`
⚠️ **Parcialmente seguro**: Testa prompts com dados mockados, mas algumas asserções podem ser frágeis

**Pode quebrar se:**
- Estrutura dos prompts mudar (nomes, argumentos)
- Formato de fallback mudar

**Não quebra se:**
- Conteúdo da documentação mudar (usa mocks)
- Textos específicos mudarem (verifica palavras-chave genéricas)

## Melhorias Recomendadas

### 1. Tornar testes de prompts mais genéricos

Em vez de verificar palavras específicas, verificar que:
- Conteúdo não está vazio
- Conteúdo contém estrutura esperada (ex: markdown válido)
- Função não lança erros

### 2. Adicionar testes de integração (opcional)

Para validar com documentação real, criar testes separados marcados como `test.integration.ts`:
- Não rodam no CI por padrão
- Podem ser executados manualmente
- Validam comportamento com documentação real

### 3. Usar snapshots para estruturas (opcional)

Para estruturas que devem ser estáveis (ex: lista de prompts), usar snapshots:
- Detecta mudanças estruturais
- Facilita revisão de mudanças
- Não quebra com mudanças de conteúdo

## Executando Testes

```bash
# Todos os testes
npm test

# Execução única
npm run test:run

# Com coverage
npm run test:coverage

# Interface visual
npm run test:ui
```

## Adicionando Novos Testes

Ao adicionar novos testes:

1. ✅ Use mocks para dados de teste
2. ✅ Teste comportamento, não conteúdo específico
3. ✅ Verifique estruturas e tipos, não valores exatos
4. ✅ Use palavras-chave genéricas quando necessário verificar conteúdo
5. ❌ Evite verificar strings específicas da documentação real

### Exemplo Bom ✅

```typescript
it('deve retornar resultados de busca', async () => {
  const results = await searchDocumentation('test');
  expect(results).toBeInstanceOf(Array);
  expect(results.length).toBeGreaterThanOrEqual(0);
  results.forEach(result => {
    expect(result).toHaveProperty('path');
    expect(result).toHaveProperty('title');
    expect(result).toHaveProperty('relevance');
  });
});
```

### Exemplo Ruim ❌

```typescript
it('deve encontrar documento sobre áudio', async () => {
  const results = await searchDocumentation('audio');
  expect(results[0].title).toBe('Mensagens de áudio'); // Quebra se título mudar!
});
```

## Manutenção

- **Atualizar mocks**: Se estrutura de dados mudar, atualize os mocks nos testes
- **Revisar asserções**: Se testes começarem a falhar após atualizações, revise se estão testando comportamento ou conteúdo
- **Adicionar casos edge**: Quando encontrar bugs, adicione testes que reproduzem o problema


