# Como Usar Esta Documentação com Cursor AI

## ✅ Arquivos Criados

Foram criados os seguintes arquivos para facilitar o uso com Cursor:

1. **`.cursorrules`** - Regras e convenções para o Cursor
2. **`CURSOR_CONTEXT_GUIDE.md`** - Guia completo de uso
3. **`CURSOR_SNIPPETS.md`** - Comandos prontos para copiar
4. **`cursor_context_snippets.json`** - Estrutura JSON com todos os snippets

## 🚀 Uso Rápido

### Método 1: Usar Snippets Prontos

Abra o arquivo `CURSOR_SNIPPETS.md` e copie o comando desejado:

**Exemplo - Enviar Mensagens:**
```
@docs/QUICK_REFERENCE.md @docs/mensagens/AGENTS.md @docs/mensagens/tipos_de_mensagens/
```

**Exemplo - Webhooks:**
```
@docs/webhooks/AGENTS.md @docs/webhooks/visao_geral/ @docs/webhooks/referencia/
```

### Método 2: Adicionar Arquivos Específicos

No Cursor, use `@` seguido do caminho:

```
@docs/AGENTS.md                    # Índice principal
@docs/QUICK_REFERENCE.md          # Referência rápida
@docs/mensagens/AGENTS.md         # Contexto sobre mensagens
```

### Método 3: Adicionar Seções Completas

```
@docs/mensagens/                  # Toda a seção
@docs/webhooks/                   # Toda a seção
@docs/referencia/                 # Toda a referência
```

## 📋 Casos de Uso

### Desenvolver Bot de Atendimento

```
@docs/QUICK_REFERENCE.md
@docs/mensagens/AGENTS.md
@docs/webhooks/AGENTS.md
@docs/mensagens/tipos_de_mensagens/text_messages.md
@docs/webhooks/referencia/messages/
```

### Implementar Sistema de Notificações

```
@docs/modelos/AGENTS.md
@docs/modelos/gerenciamento_de_modelos/template_management.md
@docs/mensagens/tipos_de_mensagens/template_messages.md
```

### Tratar Erros

```
@docs/suporte/error_codes.md
@docs/suporte/AGENTS.md
@docs/mensagens/limites_de_mensagens/
```

## 🔄 Compartilhar com a Equipe

### Opção 1: Repositório Compartilhado

1. Faça push deste repositório para GitHub/GitLab
2. Cada membro clona o repositório
3. Todos usam os mesmos comandos `@docs/...`

### Opção 2: Submódulo Git

Em seus projetos:

```bash
git submodule add <url-do-repo> docs-waba
```

Depois use:
```
@docs-waba/docs/AGENTS.md
@docs-waba/docs/QUICK_REFERENCE.md
```

### Opção 3: Copiar para Projeto

Copie a pasta `docs/` para seu projeto:

```bash
cp -r docs-waba/docs seu-projeto/docs-waba
```

Use no Cursor:
```
@docs-waba/AGENTS.md
@docs-waba/QUICK_REFERENCE.md
```

## 📚 Documentação Completa

- **Guia Completo**: Veja `CURSOR_CONTEXT_GUIDE.md`
- **Snippets Prontos**: Veja `CURSOR_SNIPPETS.md`
- **Estrutura JSON**: Veja `cursor_context_snippets.json`

## 💡 Dicas

1. **Sempre comece com AGENTS.md** da seção para ter contexto
2. **Use QUICK_REFERENCE.md** para referência rápida
3. **Combine múltiplos contextos** conforme necessário
4. **Atualize regularmente** fazendo pull do repositório

## 🎯 Exemplo Completo

**Cenário**: Criar função para enviar mensagem de texto

**Contexto no Cursor:**
```
@docs/QUICK_REFERENCE.md
@docs/mensagens/AGENTS.md
@docs/mensagens/tipos_de_mensagens/text_messages.md
```

**Pergunta para o Cursor:**
> "Crie uma função em Node.js que envia uma mensagem de texto usando a API do WhatsApp"

O Cursor terá todo o contexto necessário para gerar o código correto!

---

**Pronto para usar!** 🎉
