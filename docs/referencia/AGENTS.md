# Referência da API

Documentação completa de todos os endpoints da WhatsApp Business API.

## Visão Geral

Esta seção contém a referência técnica completa de todos os endpoints disponíveis, organizados por funcionalidade.

## Endpoints Principais

### Autenticação e Configuração
- **Tokens de Acesso**: Ver [Solução do WhatsApp Business > Access Token API](./solucao_do_whatsapp_business/access_token_api.md)

### Mensagens
- **Enviar Mensagem**: `POST /v23.0/{PHONE_NUMBER_ID}/messages`
  - Ver [Telefone do WhatsApp Business > Message API](./telefone_do_whatsapp_business/message_api.md)

### Mídia
- **Upload**: `POST /v23.0/{PHONE_NUMBER_ID}/media`
  - Ver [Telefone do WhatsApp Business > Media Upload API](./telefone_do_whatsapp_business/media_upload_api.md)
- **Download**: `GET /v23.0/{MEDIA_ID}`
  - Ver [Mídias > Media Download API](./midias/media_download_api.md)

### Gerenciamento de Conta
- **Listar Contas**: Ver [Business > WhatsApp Business Accounts API](./business/whatsapp_business_accounts_api.md)
- **Obter Conta**: Ver [Conta do WhatsApp Business > WhatsApp Business Account API](./conta_do_whatsapp_business/whatsapp_business_account_api.md)

### Gerenciamento de Números
- **Listar Números**: Ver [Telefone do WhatsApp Business > Phone Number API](./telefone_do_whatsapp_business/phone_number_api.md)
- **Registrar Número**: Ver [Telefone do WhatsApp Business > Register API](./telefone_do_whatsapp_business/register_api.md)

### Templates
- **Listar Templates**: Ver [Conta do WhatsApp Business > Template API](./conta_do_whatsapp_business/template_api.md)

## Base URL

Todas as requisições devem ser feitas para:
```
https://graph.facebook.com/v23.0
```

## Autenticação

Todas as requisições requerem um token de acesso:
```
Authorization: Bearer {ACCESS_TOKEN}
```

## Versão da API

A versão atual documentada é **v23.0**. Verifique sempre a versão mais recente disponível.

## Subpastas

- [Inscrição](./inscricao/) - APIs relacionadas à inscrição e criação de apps
- [Business](./business/) - APIs de gerenciamento de negócios
- [Conta do WhatsApp Business](./conta_do_whatsapp_business/) - APIs da conta principal
- [Telefone do WhatsApp Business](./telefone_do_whatsapp_business/) - APIs de gerenciamento de números
- [Mídias](./midias/) - APIs de upload e download de mídia
- [Grupo](./grupo/) - APIs de gerenciamento de grupos
- [Webhooks](./webhooks/) - Referência de webhooks
- [Usuário](./usuario/) - APIs relacionadas a usuários
- [Histórico de Mensagens](./historico_de_mensagens/) - APIs de histórico

## Recursos Adicionais

- **Postman Collection**: Coleção oficial do Postman disponível no Meta Developer Portal
- **Graph API Explorer**: Ferramenta interativa para testar endpoints
- **Rate Limits**: Ver documentação de limites em [Mensagens > Limites](../mensagens/limites_de_mensagens/)

## Documentos Disponíveis

- [Changelog](./changelog.md)

## Subpastas

- [Bot do WhatsApp Business](./bot_do_whatsapp_business/)
- [Business](./business/)
- [Conta do WhatsApp Business](./conta_do_whatsapp_business/)
- [Grupo](./grupo/)
- [Histórico de Mensagens](./historico_de_mensagens/)
- [Inscrição](./inscricao/)
- [Intenção de Migração da Conta do WhatsApp Business](./intencao_de_migracao_da_conta_do_whatsapp_business/)
- [Mídias](./midias/)
- [Número da Conta do WhatsApp](./numero_da_conta_do_whatsapp/)
- [Perfil do WhatsApp Business](./perfil_do_whatsapp_business/)
- [Solução do WhatsApp Business](./solucao_do_whatsapp_business/)
- [Telefone do WhatsApp Business](./telefone_do_whatsapp_business/)
- [Telefone Pré-Verificado do WhatsApp Business](./telefone_pre_verificado_do_whatsapp_business/)
- [Usuário](./usuario/)
- [Webhooks](./webhooks/)

