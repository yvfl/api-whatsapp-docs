#!/bin/bash

# Script para configurar esta documentação em outro projeto

set -e

PROJECT_DIR="${1:-.}"
DOCS_DIR="${2:-docs-waba}"

echo "🚀 Configurando documentação WhatsApp Business API para uso com Cursor"
echo "📁 Diretório do projeto: $PROJECT_DIR"
echo "📚 Diretório de documentação: $DOCS_DIR"
echo ""

# Verifica se estamos no diretório correto
if [ ! -d "docs" ]; then
    echo "❌ Erro: Execute este script a partir da raiz do repositório docs-waba"
    exit 1
fi

# Cria link simbólico ou copia
if [ -d "$PROJECT_DIR" ]; then
    FULL_PROJECT_DIR=$(cd "$PROJECT_DIR" && pwd)
    CURRENT_DIR=$(pwd)
    
    echo "📝 Criando link simbólico..."
    
    if [ -L "$FULL_PROJECT_DIR/$DOCS_DIR" ]; then
        echo "⚠️  Link já existe, removendo..."
        rm "$FULL_PROJECT_DIR/$DOCS_DIR"
    fi
    
    ln -s "$CURRENT_DIR/docs" "$FULL_PROJECT_DIR/$DOCS_DIR"
    
    echo "✅ Link criado: $FULL_PROJECT_DIR/$DOCS_DIR -> $CURRENT_DIR/docs"
    echo ""
    echo "📋 Próximos passos:"
    echo "1. Abra o projeto no Cursor"
    echo "2. Use no chat: @$DOCS_DIR/AGENTS.md"
    echo "3. Ou: @$DOCS_DIR/QUICK_REFERENCE.md"
    echo ""
    echo "💡 Veja PASSO_A_PASSO_CURSOR.md para mais detalhes"
else
    echo "❌ Erro: Diretório do projeto não encontrado: $PROJECT_DIR"
    exit 1
fi
