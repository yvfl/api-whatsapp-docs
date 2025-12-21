# Passo a Passo: Como Usar no Cursor

## 🎯 Objetivo

Este guia mostra exatamente o que fazer para usar esta documentação como contexto no Cursor AI.

## ✅ Pré-requisitos

- Cursor AI instalado
- Este repositório clonado ou acessível

## 📝 Passo a Passo

### Passo 1: Abrir o Cursor

1. Abra o Cursor AI
2. Abra ou crie um projeto onde você vai desenvolver

### Passo 2: Adicionar Contexto

No chat do Cursor, digite `@` e você verá opções. Existem 3 formas:

#### Opção A: Adicionar Arquivo Específico

Digite no chat do Cursor:
```
@docs/AGENTS.md
```

O Cursor vai mostrar arquivos disponíveis. Selecione o arquivo desejado.

#### Opção B: Adicionar Múltiplos Arquivos

Digite no chat (um por linha ou separados por espaço):
```
@docs/QUICK_REFERENCE.md
@docs/mensagens/AGENTS.md
@docs/mensagens/tipos_de_mensagens/text_messages.md
```

#### Opção C: Adicionar Pasta Inteira

Digite no chat:
```
@docs/mensagens/
```

Isso adiciona todos os arquivos da pasta `mensagens/`.

### Passo 3: Fazer Pergunta

Depois de adicionar o contexto, faça sua pergunta normalmente:

```
Como enviar uma mensagem de texto usando a API do WhatsApp?
```

O Cursor terá acesso à documentação completa e poderá responder com base nela.

## 🚀 Exemplos Práticos

### Exemplo 1: Criar Função para Enviar Mensagem

**1. Adicione o contexto:**
```
@docs/QUICK_REFERENCE.md
@docs/mensagens/tipos_de_mensagens/text_messages.md
```

**2. Faça a pergunta:**
```
Crie uma função em Node.js que envia uma mensagem de texto usando a API do WhatsApp. 
Use axios para fazer a requisição HTTP.
```

### Exemplo 2: Configurar Webhook

**1. Adicione o contexto:**
```
@docs/webhooks/AGENTS.md
@docs/webhooks/visao_geral/overview.md
```

**2. Faça a pergunta:**
```
Como configurar um webhook para receber mensagens do WhatsApp? 
Mostre um exemplo em Express.js.
```

### Exemplo 3: Tratar Erros

**1. Adicione o contexto:**
```
@docs/suporte/error_codes.md
```

**2. Faça a pergunta:**
```
O que significa o erro 131031 e como tratar esse erro no código?
```

## 🔄 Para Usar em Outros Projetos

### Método 1: Repositório no Mesmo Workspace

Se você tem múltiplos projetos no mesmo workspace do Cursor:

1. Certifique-se que este repositório está aberto no workspace
2. Use `@docs-waba/docs/AGENTS.md` (ajuste o caminho conforme necessário)

### Método 2: Submódulo Git

No seu projeto:

```bash
# Adicionar como submódulo
git submodule add <url-do-repo> docs-waba

# Ou se já existe, inicializar
git submodule update --init --recursive
```

Depois use no Cursor:
```
@docs-waba/docs/AGENTS.md
```

### Método 3: Copiar Pasta

```bash
# No seu projeto
cp -r /caminho/para/docs-waba/docs ./docs-waba
```

Use no Cursor:
```
@docs-waba/AGENTS.md
```

### Método 4: Link Simbólico (Recomendado)

```bash
# No seu projeto
ln -s /caminho/para/docs-waba/docs ./docs-waba
```

Use no Cursor:
```
@docs-waba/AGENTS.md
```

## 💡 Dicas Importantes

1. **Sempre comece com AGENTS.md**: Ele dá contexto geral da seção
2. **Use QUICK_REFERENCE.md**: Para referência rápida de endpoints
3. **Combine contextos**: Você pode adicionar vários arquivos ao mesmo tempo
4. **Atualize regularmente**: Faça pull das atualizações do repositório

## 🎓 Casos de Uso Comuns

### Desenvolver Bot Completo

**Contexto necessário:**
```
@docs/QUICK_REFERENCE.md
@docs/mensagens/AGENTS.md
@docs/webhooks/AGENTS.md
@docs/mensagens/tipos_de_mensagens/text_messages.md
@docs/webhooks/referencia/messages/
@docs/suporte/error_codes.md
```

**Pergunta:**
```
Crie um bot completo em Node.js que:
1. Recebe mensagens via webhook
2. Responde automaticamente com mensagens de texto
3. Trata erros adequadamente
4. Usa variáveis de ambiente para configuração
```

### Sistema de Notificações

**Contexto necessário:**
```
@docs/modelos/AGENTS.md
@docs/modelos/gerenciamento_de_modelos/template_management.md
@docs/mensagens/tipos_de_mensagens/template_messages.md
```

**Pergunta:**
```
Como criar um sistema de notificações usando templates do WhatsApp?
Mostre como criar o template e enviá-lo.
```

## ❓ Troubleshooting

### Problema: Cursor não encontra os arquivos

**Solução:**
- Verifique se o caminho está correto
- Certifique-se que o repositório está aberto no workspace
- Use caminhos relativos ao workspace root

### Problema: Contexto muito grande

**Solução:**
- Adicione apenas os arquivos necessários
- Use AGENTS.md primeiro para ter contexto geral
- Adicione documentos específicos conforme necessário

### Problema: Respostas genéricas

**Solução:**
- Adicione mais contexto específico
- Seja específico na pergunta
- Adicione exemplos do QUICK_REFERENCE.md

## 📚 Próximos Passos

1. Experimente adicionar diferentes combinações de contexto
2. Crie seus próprios snippets baseados nos casos de uso
3. Compartilhe com a equipe os contextos que funcionam melhor

---

**Agora você está pronto para usar!** 🚀
