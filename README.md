# WhatsApp Business API Docs - MCP Server

Servidor MCP (Model Context Protocol) que fornece acesso completo à documentação da WhatsApp Business API para assistentes de IA como Claude e Cursor.

## 🚀 Como Usar

### Configuração MCP (Cursor e Claude Desktop)

Tanto o **Cursor** quanto o **Claude Desktop** usam o mesmo método de configuração MCP:

1. **Edite o arquivo de configuração MCP:**
   - **Cursor**: `~/.cursor/mcp.json` ou via Settings > Features > MCP
   - **Claude Desktop (macOS)**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Claude Desktop (Windows)**: `%APPDATA%\Claude\claude_desktop_config.json`

2. **Adicione a configuração do servidor MCP:**

```json
{
  "mcpServers": {
    "whatsapp-docs-mcp": {
      "command": "npx",
      "args": ["whatsapp-docs-mcp@latest"],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error"
      }
    }
  }
}
```

3. **Reinicie o Cursor ou Claude Desktop**

4. **Pronto!** Agora você pode usar as ferramentas MCP diretamente:
   - `search_documentation` - Buscar na documentação
   - `get_document_by_path` - Obter documento específico
   - `get_endpoint_reference` - Referência de endpoint
   - `get_error_code_info` - Informações sobre códigos de erro
   - `get_quick_reference` - Referência rápida de operações comuns

### Método Alternativo: Usar arquivos diretamente

Se preferir não usar MCP, você pode adicionar os arquivos diretamente no chat:

```
@AGENTS.md                         # Índice principal da documentação
@docs/QUICK_REFERENCE.md          # Referência rápida de endpoints
```

## 📚 Documentação

A documentação está organizada em `docs/` com os seguintes arquivos principais:

- **`AGENTS.md`** - Índice principal com links para todas as seções
- **`docs/QUICK_REFERENCE.md`** - Referência rápida de endpoints e exemplos
- **`docs/comecar/get_started.md`** - Guia para começar
- **`docs/mensagens/`** - Documentação sobre mensagens
- **`docs/webhooks/`** - Webhooks e notificações
- **`docs/referencia/`** - Referência completa da API
- **`docs/suporte/`** - Códigos de erro e troubleshooting

Cada pasta contém um arquivo `AGENTS.md` com índice e links para facilitar a navegação.

## 🔧 Instalação Local (Desenvolvimento)

```bash
# Clone o repositório
git clone https://github.com/yvfl/api-whatsapp-docs.git
cd api-whatsapp-docs

# Instale as dependências
npm install

# Compile o projeto
npm run build

# Execute os testes
npm test
```


## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request.

## 📄 Licença

MIT License
