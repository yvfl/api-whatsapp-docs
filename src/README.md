# Estrutura do Código Fonte

Todos os arquivos nesta pasta são **necessários** e continuam sendo usados após a mudança de arquitetura.

## 📁 Arquivos e suas Funções

### `index.ts` ✅ **NECESSÁRIO**
- **Função**: Entry point do servidor MCP
- **Responsabilidades**:
  - Inicializa o servidor MCP
  - Registra todos os handlers (resources, tools, prompts)
  - Configura transporte stdio
  - Gerencia logging e shutdown
- **Usado por**: Ninguém (é o ponto de entrada)
- **Importa**: `resources.ts`, `tools.ts`, `prompts.ts`

### `resources.ts` ✅ **NECESSÁRIO**
- **Função**: Handlers para recursos MCP (listar e ler arquivos markdown)
- **Responsabilidades**:
  - Lista todos os arquivos markdown disponíveis
  - Lê conteúdo de arquivos específicos via URI
  - Extrai metadados (título, descrição) dos arquivos
  - Cache de recursos para performance
- **Usado por**: `index.ts`
- **Importa**: `utils/fileLoader.ts`, `utils/search.ts`

### `tools.ts` ✅ **NECESSÁRIO**
- **Função**: Ferramentas MCP para busca e consulta
- **Responsabilidades**:
  - Busca textual em todos os documentos
  - Obtém documentos por caminho
  - Lista seções da documentação
  - Busca referências de endpoints
  - Busca códigos de erro
  - Fornece referência rápida
- **Usado por**: `index.ts`
- **Importa**: `utils/fileLoader.ts`, `utils/search.ts`

### `prompts.ts` ✅ **NECESSÁRIO**
- **Função**: Prompts pré-definidos para consultas comuns
- **Responsabilidades**:
  - Define prompts para tarefas comuns (enviar mensagem, configurar webhook, etc.)
  - Gerencia templates de prompts com argumentos
  - Registra handlers de prompts no servidor MCP
- **Usado por**: `index.ts`
- **Importa**: Nenhum (é independente)

### `utils/fileLoader.ts` ✅ **NECESSÁRIO**
- **Função**: Utilitários para carregar arquivos do sistema de arquivos
- **Responsabilidades**:
  - Encontra todos os arquivos `.md` recursivamente
  - Carrega conteúdo de arquivos markdown
  - **Encontra o caminho da pasta `docs/`** (crucial após mudança!)
- **Usado por**: `resources.ts`, `tools.ts`
- **Importa**: Nenhum (apenas Node.js fs/path)

### `utils/search.ts` ✅ **NECESSÁRIO**
- **Função**: Utilitários para busca e extração de conteúdo
- **Responsabilidades**:
  - Busca textual em conteúdo markdown
  - Extrai títulos de arquivos
  - Extrai descrições
  - Extrai trechos relevantes
  - Calcula relevância de resultados
- **Usado por**: `resources.ts`, `tools.ts`
- **Importa**: `utils/fileLoader.ts` (apenas para tipo, não usa diretamente)

## 🔄 Mudança de Arquitetura

### Antes (conceitual - nunca implementado assim)
- Arquivos seriam baixados dinamicamente
- Requeria conexão com internet
- Cache complexo

### Agora (implementado)
- ✅ Arquivos estão no bundle do npm (`docs/` incluído)
- ✅ Carregados do sistema de arquivos local
- ✅ Funciona offline
- ✅ Mais rápido e confiável

### O que mudou?
**Apenas** a forma como os arquivos são encontrados:
- Antes: Seria necessário baixar de algum lugar
- Agora: `getDocsPath()` encontra `docs/` no sistema de arquivos

**Tudo mais continua igual:**
- ✅ `resources.ts` ainda lista e lê arquivos
- ✅ `tools.ts` ainda busca e consulta
- ✅ `prompts.ts` ainda fornece prompts
- ✅ `utils/fileLoader.ts` ainda carrega arquivos (agora do filesystem)
- ✅ `utils/search.ts` ainda busca conteúdo

## 📊 Dependências entre Arquivos

```
index.ts
├── resources.ts
│   ├── utils/fileLoader.ts
│   └── utils/search.ts
├── tools.ts
│   ├── utils/fileLoader.ts
│   └── utils/search.ts
└── prompts.ts
```

## ✅ Conclusão

**TODOS os arquivos são necessários!** 

A mudança de arquitetura não removeu nenhum arquivo, apenas mudou a forma como os arquivos markdown são encontrados (de download dinâmico para leitura do filesystem local).

