#!/bin/bash

# Script para criar arquivo .code-workspace para um projeto

set -e

PROJECT_DIR="${1:-.}"
DOCS_WABA_DIR="${2:-../docs-waba}"

if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ Erro: Diretório do projeto não encontrado: $PROJECT_DIR"
    exit 1
fi

PROJECT_NAME=$(basename "$(cd "$PROJECT_DIR" && pwd)")

# Resolve caminho absoluto
FULL_PROJECT_DIR=$(cd "$PROJECT_DIR" && pwd)
FULL_DOCS_DIR=$(cd "$DOCS_WABA_DIR" 2>/dev/null && pwd || echo "$DOCS_WABA_DIR")

# Calcula caminho relativo
if [[ "$FULL_DOCS_DIR" == /* ]]; then
    # Caminho absoluto - tenta calcular relativo
    RELATIVE_DOCS_PATH=$(python3 -c "import os; print(os.path.relpath('$FULL_DOCS_DIR', '$FULL_PROJECT_DIR'))" 2>/dev/null || echo "$DOCS_WABA_DIR")
else
    RELATIVE_DOCS_PATH="$DOCS_WABA_DIR"
fi

WORKSPACE_FILE="$FULL_PROJECT_DIR/$PROJECT_NAME-waba.code-workspace"

cat > "$WORKSPACE_FILE" << EOF
{
  "folders": [
    {
      "path": ".",
      "name": "$PROJECT_NAME"
    },
    {
      "path": "$RELATIVE_DOCS_PATH",
      "name": "📚 WhatsApp API Docs"
    }
  ],
  "settings": {
    "files.exclude": {
      "**/.git": true,
      "**/node_modules": true,
      "**/__pycache__": true,
      "**/.pytest_cache": true
    }
  }
}
EOF

echo "✅ Workspace criado: $WORKSPACE_FILE"
echo ""
echo "📋 Próximos passos:"
echo "1. Abra o arquivo no Cursor: $WORKSPACE_FILE"
echo "2. Use no chat: @docs-waba/docs/AGENTS.md"
echo ""
echo "💡 Dica: Adicione ao .gitignore se não quiser versionar:"
echo "   echo '$PROJECT_NAME-waba.code-workspace' >> .gitignore"
