# Guia de Uso do Contexto - Cursor AI

Este guia explica como usar esta documentação como contexto no Cursor AI para desenvolvimento de aplicações com a WhatsApp Business API.

## 📋 Visão Geral

Esta documentação está estruturada para ser facilmente usada como contexto no Cursor AI, permitindo que você e sua equipe desenvolvam aplicações mais rapidamente com acesso direto à documentação oficial.

## 🚀 Como Usar no Cursor

### Método 1: Adicionar Arquivos Específicos

Use o comando `@` no Cursor para adicionar arquivos específicos ao contexto:

```
@docs/AGENTS.md                    # Índice principal
@docs/QUICK_REFERENCE.md          # Referência rápida
@docs/mensagens/AGENTS.md         # Contexto sobre mensagens
@docs/webhooks/AGENTS.md          # Contexto sobre webhooks
@docs/referencia/AGENTS.md        # Referência da API
```

### Método 2: Adicionar Seções Completas

Adicione seções inteiras para ter contexto completo:

```
@docs/mensagens/                  # Toda a seção de mensagens
@docs/webhooks/                   # Toda a seção de webhooks
@docs/referencia/                 # Toda a referência da API
@docs/modelos/                    # Toda a seção de modelos
```

### Método 3: Adicionar Documentos Específicos

Para tarefas específicas, adicione documentos relevantes:

```
@docs/mensagens/tipos_de_mensagens/text_messages.md
@docs/mensagens/tipos_de_mensagens/image_messages.md
@docs/webhooks/visao_geral/overview.md
@docs/suporte/error_codes.md
```

## 💡 Casos de Uso Comuns

### Caso 1: Desenvolver Funcionalidade de Envio de Mensagens

**Contexto necessário:**
```
@docs/QUICK_REFERENCE.md
@docs/mensagens/AGENTS.md
@docs/mensagens/tipos_de_mensagens/text_messages.md
@docs/mensagens/tipos_de_mensagens/image_messages.md
```

**Pergunta exemplo:**
> "Como enviar uma mensagem de texto usando a API do WhatsApp?"

### Caso 2: Implementar Sistema de Webhooks

**Contexto necessário:**
```
@docs/webhooks/AGENTS.md
@docs/webhooks/visao_geral/overview.md
@docs/webhooks/referencia/messages/
```

**Pergunta exemplo:**
> "Como configurar webhooks para receber mensagens do WhatsApp?"

### Caso 3: Criar e Usar Templates

**Contexto necessário:**
```
@docs/modelos/AGENTS.md
@docs/modelos/gerenciamento_de_modelos/template_management.md
@docs/mensagens/tipos_de_mensagens/template_messages.md
```

**Pergunta exemplo:**
> "Como criar um template de mensagem e enviá-lo?"

### Caso 4: Tratar Erros e Debugging

**Contexto necessário:**
```
@docs/suporte/error_codes.md
@docs/suporte/AGENTS.md
@docs/mensagens/limites_de_mensagens/messaging_limits.md
```

**Pergunta exemplo:**
> "O que significa o erro 131031 e como resolver?"

## 🔧 Configuração para Equipe

### Opção 1: Compartilhar o Repositório

1. Faça push deste repositório para um repositório compartilhado (GitHub, GitLab, etc.)
2. Cada membro da equipe clona o repositório
3. Todos usam os mesmos comandos `@docs/...` no Cursor

### Opção 2: Usar como Submódulo Git

Em seus projetos, adicione esta documentação como submódulo:

```bash
git submodule add <url-do-repositorio> docs-waba
```

Depois use no Cursor:
```
@docs-waba/docs/AGENTS.md
@docs-waba/docs/QUICK_REFERENCE.md
```

### Opção 3: Copiar para Projeto

Copie a pasta `docs/` para seu projeto e use:

```
@docs/AGENTS.md
@docs/QUICK_REFERENCE.md
```

## 📝 Criando Snippets Personalizados

Você pode criar snippets no Cursor para facilitar o acesso:

### Snippet: Contexto Completo de Mensagens
```
@docs/QUICK_REFERENCE.md
@docs/mensagens/AGENTS.md
@docs/mensagens/tipos_de_mensagens/
```

### Snippet: Contexto de Webhooks
```
@docs/webhooks/AGENTS.md
@docs/webhooks/visao_geral/
@docs/webhooks/referencia/
```

### Snippet: Referência Completa da API
```
@docs/referencia/AGENTS.md
@docs/referencia/telefone_do_whatsapp_business/
@docs/referencia/conta_do_whatsapp_business/
```

## 🎯 Dicas de Uso Eficiente

1. **Comece com o AGENTS.md**: Sempre adicione o `AGENTS.md` da seção primeiro para ter contexto geral
2. **Use QUICK_REFERENCE.md**: Para referência rápida de endpoints e exemplos
3. **Adicione documentos específicos**: Quando precisar de detalhes técnicos específicos
4. **Combine múltiplos contextos**: Você pode adicionar vários arquivos ao mesmo tempo

## 🔄 Atualizando o Contexto

Quando a documentação for atualizada:

1. Faça pull das atualizações do repositório
2. Os arquivos `AGENTS.md` são atualizados automaticamente
3. O contexto no Cursor será atualizado na próxima vez que você adicionar os arquivos

## 📚 Estrutura Recomendada para Projetos

Para projetos que usam esta documentação:

```
seu-projeto/
├── src/
├── docs/
│   └── waba/              # Link ou cópia desta documentação
│       ├── AGENTS.md
│       ├── QUICK_REFERENCE.md
│       └── ...
├── .cursorrules           # Regras do Cursor (opcional)
└── README.md
```

## 🤝 Compartilhando com a Equipe

### Via Documentação

Adicione ao README do seu projeto:

```markdown
## Contexto Cursor AI

Este projeto usa a documentação da WhatsApp Business API como contexto.

Para usar no Cursor:
1. Adicione `@docs-waba/docs/AGENTS.md` ao contexto
2. Adicione seções específicas conforme necessário
3. Veja `docs-waba/CURSOR_CONTEXT_GUIDE.md` para mais detalhes
```

### Via Wiki/Confluence

Crie uma página explicando:
- Como acessar a documentação
- Quais arquivos adicionar para cada tipo de tarefa
- Exemplos de uso

## 🎓 Exemplos Práticos

### Exemplo 1: Desenvolver Bot de Atendimento

**Contexto:**
```
@docs/QUICK_REFERENCE.md
@docs/mensagens/AGENTS.md
@docs/webhooks/AGENTS.md
@docs/mensagens/tipos_de_mensagens/text_messages.md
@docs/webhooks/referencia/messages/
```

**Pergunta:**
> "Crie um bot que recebe mensagens via webhook e responde automaticamente"

### Exemplo 2: Sistema de Notificações

**Contexto:**
```
@docs/mensagens/tipos_de_mensagens/template_messages.md
@docs/modelos/gerenciamento_de_modelos/template_management.md
@docs/mensagens/limites_de_mensagens/messaging_limits.md
```

**Pergunta:**
> "Como criar um sistema de notificações usando templates?"

## 📞 Suporte

Se tiver dúvidas sobre como usar esta documentação como contexto:
1. Consulte este guia
2. Veja os exemplos acima
3. Experimente adicionar diferentes combinações de arquivos

---

**Última atualização**: Dezembro 2025
