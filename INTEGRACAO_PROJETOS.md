# Integração em Outros Projetos

Este guia mostra como integrar esta documentação em seus projetos para uso com Cursor AI.

## 🎯 Opções de Integração

### Opção 0: Workspace Multi-root (MAIS RECOMENDADO) ⭐⭐⭐

**Vantagens:**
- ✅ Não precisa copiar arquivos
- ✅ Não precisa criar links
- ✅ Não adiciona nada ao projeto
- ✅ Atualizações automáticas
- ✅ Funciona para toda a equipe

**Como fazer:**

1. Abra seu projeto no Cursor normalmente
2. File > Add Folder to Workspace...
3. Selecione a pasta `docs-waba`
4. Use: `@docs-waba/docs/AGENTS.md`

**Ou use o script:**
```bash
cd /caminho/do/seu/projeto
/caminho/para/docs-waba/scripts/create_workspace.sh .
```

Depois abra o arquivo `.code-workspace` gerado no Cursor.

**Veja guia completo**: [USAR_SEM_COPIAR.md](./USAR_SEM_COPIAR.md)

### Opção 1: Link Simbólico

**Vantagens:**
- Não duplica arquivos
- Atualizações automáticas
- Economiza espaço

**Como fazer:**

```bash
# No seu projeto
cd /caminho/do/seu/projeto

# Criar link simbólico
ln -s /caminho/para/docs-waba/docs ./docs-waba

# Ou usar o script
cd /caminho/para/docs-waba
./scripts/setup_for_project.sh /caminho/do/seu/projeto
```

**Usar no Cursor:**
```
@docs-waba/AGENTS.md
@docs-waba/QUICK_REFERENCE.md
```

### Opção 2: Submódulo Git

**Vantagens:**
- Versionado junto com o projeto
- Controle de versão específico

**Como fazer:**

```bash
# No seu projeto
git submodule add <url-do-repo> docs-waba
git submodule update --init --recursive
```

**Usar no Cursor:**
```
@docs-waba/docs/AGENTS.md
```

### Opção 3: Copiar Pasta

**Vantagens:**
- Independente do repositório original
- Funciona offline

**Como fazer:**

```bash
# No seu projeto
cp -r /caminho/para/docs-waba/docs ./docs-waba
```

**Usar no Cursor:**
```
@docs-waba/AGENTS.md
```

### Opção 4: Workspace Multi-root (Cursor)

**Vantagens:**
- Mantém projetos separados
- Fácil acesso

**Como fazer:**

1. No Cursor: File > Add Folder to Workspace
2. Adicione este repositório
3. Use `@docs/AGENTS.md` diretamente

## 📝 Configuração no Projeto

### Adicionar ao README.md

Adicione uma seção no README do seu projeto:

```markdown
## 📚 Documentação WhatsApp Business API

Este projeto usa a documentação da WhatsApp Business API como contexto para desenvolvimento com IA.

### Como Usar no Cursor

1. Adicione ao contexto: `@docs-waba/AGENTS.md`
2. Para referência rápida: `@docs-waba/QUICK_REFERENCE.md`
3. Para seções específicas: `@docs-waba/mensagens/AGENTS.md`

Veja mais em: `docs-waba/PASSO_A_PASSO_CURSOR.md`
```

### Criar .cursorrules no Projeto

Crie um arquivo `.cursorrules` no seu projeto:

```markdown
# Regras do Cursor para este projeto

## Documentação WhatsApp Business API

Para usar a documentação como contexto:
- `@docs-waba/AGENTS.md` - Índice principal
- `@docs-waba/QUICK_REFERENCE.md` - Referência rápida
- `@docs-waba/mensagens/AGENTS.md` - Contexto sobre mensagens
- `@docs-waba/webhooks/AGENTS.md` - Contexto sobre webhooks

Veja `docs-waba/CURSOR_SNIPPETS.md` para snippets prontos.
```

## 🔄 Atualização

### Com Link Simbólico

```bash
cd /caminho/para/docs-waba
git pull
```

Atualizações são automáticas!

### Com Submódulo

```bash
cd /caminho/do/seu/projeto
git submodule update --remote docs-waba
```

### Com Cópia

```bash
cd /caminho/do/seu/projeto
rm -rf docs-waba
cp -r /caminho/para/docs-waba/docs ./docs-waba
```

## 🎯 Exemplos por Tipo de Projeto

### Projeto Node.js/TypeScript

```bash
# Estrutura recomendada
seu-projeto/
├── src/
├── docs-waba/          # Link ou submódulo
├── .cursorrules
└── README.md
```

### Projeto Python

```bash
# Estrutura recomendada
seu-projeto/
├── app/
├── docs-waba/          # Link ou submódulo
├── .cursorrules
└── README.md
```

### Múltiplos Projetos

Se você tem múltiplos projetos:

```bash
# Opção 1: Link simbólico em cada projeto
projeto1/
└── docs-waba -> /caminho/comum/docs-waba/docs

projeto2/
└── docs-waba -> /caminho/comum/docs-waba/docs

# Opção 2: Workspace multi-root no Cursor
# Adicione todos os projetos + docs-waba no mesmo workspace
```

## 📋 Checklist de Integração

- [ ] Escolher método de integração
- [ ] Configurar link/submódulo/cópia
- [ ] Testar no Cursor: `@docs-waba/AGENTS.md`
- [ ] Adicionar seção no README.md
- [ ] Criar `.cursorrules` (opcional)
- [ ] Compartilhar com equipe

## 🤝 Compartilhando com Equipe

### Via Git

1. Adicione instruções no README
2. Se usar submódulo, documente o processo
3. Crie um guia rápido para novos membros

### Via Documentação Interna

Crie uma página no seu wiki/confluence explicando:
- Como acessar a documentação
- Quais arquivos usar para cada tarefa
- Exemplos práticos

## 💡 Dicas

1. **Use link simbólico** quando possível - mais fácil de manter
2. **Documente no README** - ajuda toda a equipe
3. **Crie snippets** - salve comandos que você usa frequentemente
4. **Atualize regularmente** - mantenha a documentação atualizada

---

**Pronto para integrar!** 🚀
