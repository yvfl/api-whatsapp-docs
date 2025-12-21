# Documentação WhatsApp Business API

Esta é a documentação completa da WhatsApp Business API, organizada de forma hierárquica para facilitar o desenvolvimento e o uso por sistemas de IA.

## 📚 Estrutura da Documentação

A documentação está organizada em seções principais:

- **[Visão Geral](./docs/visao_geral/)** - Introdução à plataforma
- **[Começar](./docs/comecar/)** - Guias rápidos para iniciar
- **[Mensagens](./docs/mensagens/)** - Envio e recebimento de mensagens
- **[Webhooks](./docs/webhooks/)** - Notificações e eventos
- **[Referência da API](./docs/referencia/)** - Documentação completa de endpoints
- **[Suporte](./docs/suporte/)** - Resolução de problemas e códigos de erro

## 🚀 Início Rápido

### Para Desenvolvedores

1. **Configuração Inicial**: Veja [Começar](./docs/comecar/get_started.md)
2. **Primeira Mensagem**: Siga o guia em [Mensagens > Visão Geral](./docs/mensagens/visao_geral/)
3. **Configurar Webhooks**: [Webhooks > Visão Geral](./docs/webhooks/visao_geral/)

### Para Usar com Cursor AI 🤖

**⚡ Início Rápido**: Veja [INICIO_RAPIDO.md](./INICIO_RAPIDO.md)

**📖 Guias Completos**:
- [Passo a Passo Detalhado](./PASSO_A_PASSO_CURSOR.md) - Como usar no Cursor
- [Guia de Contexto](./CURSOR_CONTEXT_GUIDE.md) - Guia completo de uso
- [Integração em Projetos](./INTEGRACAO_PROJETOS.md) - Como integrar em outros projetos
- [Snippets Prontos](./CURSOR_SNIPPETS.md) - Comandos prontos para copiar

**Uso Básico no Cursor:**
```
@docs/AGENTS.md                    # Índice principal
@docs/QUICK_REFERENCE.md          # Referência rápida
```

### Para Sistemas de IA

Cada pasta contém um arquivo `AGENTS.md` que serve como índice e guia para:
- Entender o conteúdo da seção
- Encontrar documentos relacionados
- Navegar pela estrutura hierárquica

## 📖 Como Usar Esta Documentação

### Navegação Manual

- Cada pasta tem um `AGENTS.md` com links para documentos e subpastas
- Use o [AGENTS.md raiz](./docs/AGENTS.md) como ponto de entrada principal

### Para Sistemas de IA

- Os arquivos `AGENTS.md` fornecem contexto e estrutura
- Documentos markdown contêm a documentação completa
- Links relativos facilitam a navegação programática

## 🔑 Endpoints Principais

### Enviar Mensagens
- **Texto**: `POST /v23.0/{phone-number-id}/messages`
- **Mídia**: Ver [Mensagens > Tipos de Mensagens](./docs/mensagens/tipos_de_mensagens/)
- **Templates**: Ver [Modelos](./docs/modelos/)

### Webhooks
- **Configurar**: Ver [Webhooks > Visão Geral](./docs/webhooks/visao_geral/)
- **Referência**: Ver [Webhooks > Referência](./docs/webhooks/referencia/)

### Gerenciamento
- **Contas**: Ver [Referência > Conta do WhatsApp Business](./docs/referencia/conta_do_whatsapp_business/)
- **Números**: Ver [Referência > Telefone do WhatsApp Business](./docs/referencia/telefone_do_whatsapp_business/)

## 📝 Casos de Uso Comuns

1. **Enviar Mensagem de Texto**: [Mensagens > Texto](./docs/mensagens/tipos_de_mensagens/text_messages.md)
2. **Enviar Imagem**: [Mensagens > Imagem](./docs/mensagens/tipos_de_mensagens/image_messages.md)
3. **Configurar Webhook**: [Webhooks > Visão Geral](./docs/webhooks/visao_geral/overview.md)
4. **Criar Template**: [Modelos > Gerenciamento](./docs/modelos/gerenciamento_de_modelos/)
5. **Tratar Erros**: [Suporte > Códigos de Erro](./docs/suporte/error_codes.md)

## 🛠️ Recursos Adicionais

- **Autenticação**: [Recado > Sobre a Plataforma > Tokens de Acesso](./docs/recado/sobre_a_plataforma/access_tokens.md)
- **Permissões**: [Recado > Sobre a Plataforma > Permissões](./docs/recado/sobre_a_plataforma/permissions.md)
- **Preços**: [Recado > Preços](./docs/recado/precos/)

## 📊 Estrutura de Arquivos

```
docs/
├── AGENTS.md                    # Índice principal
├── visao_geral/                 # Visão geral da plataforma
├── comecar/                     # Guias de início rápido
├── mensagens/                   # Documentação de mensagens
│   ├── tipos_de_mensagens/     # Tipos específicos
│   ├── limites_de_mensagens/   # Limites e restrições
│   └── recursos_adicionais/     # Recursos extras
├── webhooks/                    # Webhooks e notificações
├── referencia/                  # Referência completa da API
└── suporte/                     # Suporte e troubleshooting
```

## 🤖 Para Desenvolvimento com IA

Esta documentação foi estruturada para facilitar o uso por sistemas de IA:

1. **Estrutura Hierárquica**: Organização clara por funcionalidade
2. **AGENTS.md**: Cada pasta tem um índice com contexto
3. **Links Relativos**: Facilita navegação programática
4. **Documentação Completa**: Todos os endpoints e recursos documentados

## 📞 Suporte

- **Códigos de Erro**: [Suporte > Códigos de Erro](./docs/suporte/error_codes.md)
- **Status da API**: [Suporte > API Status Page](./docs/suporte/api_status_page.md)
- **Testes**: [Suporte > Load Testing](./docs/suporte/load_testing.md)

## 🔄 Atualizações

Esta documentação é atualizada regularmente. Verifique a data de atualização em cada documento.

---

**Última atualização**: Dezembro 2025
