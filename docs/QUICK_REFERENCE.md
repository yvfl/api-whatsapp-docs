# Referência Rápida - WhatsApp Business API

Este documento fornece uma referência rápida dos endpoints e recursos mais comuns da API.

## 🔑 Autenticação

```bash
Authorization: Bearer <ACCESS_TOKEN>
```

**Obter Token**: [Tokens de Acesso](./recado/sobre_a_plataforma/access_tokens.md)

## 📤 Enviar Mensagens

### Base URL
```
https://graph.facebook.com/v23.0/{PHONE_NUMBER_ID}/messages
```

### Mensagem de Texto
```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "5511999999999",
  "type": "text",
  "text": {
    "body": "Olá! Esta é uma mensagem de teste."
  }
}
```
**Documentação**: [Mensagens de Texto](./mensagens/tipos_de_mensagens/text_messages.md)

### Mensagem com Imagem
```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "5511999999999",
  "type": "image",
  "image": {
    "link": "https://example.com/image.jpg"
  }
}
```
**Documentação**: [Mensagens de Imagem](./mensagens/tipos_de_mensagens/image_messages.md)

### Mensagem com Template
```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "5511999999999",
  "type": "template",
  "template": {
    "name": "hello_world",
    "language": {
      "code": "pt_BR"
    }
  }
}
```
**Documentação**: [Mensagens com Template](./mensagens/tipos_de_mensagens/template_messages.md)

## 📥 Webhooks

### Configurar Webhook
```
POST /v23.0/{APP_ID}/subscriptions
```

**Campos necessários**:
- `object`: "whatsapp_business_account"
- `callback_url`: "https://seu-dominio.com/webhook"
- `fields`: ["messages", "message_status"]

**Documentação**: [Webhooks > Visão Geral](./webhooks/visao_geral/overview.md)

### Estrutura de Payload Recebido
```json
{
  "object": "whatsapp_business_account",
  "entry": [{
    "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",
    "changes": [{
      "value": {
        "messaging_product": "whatsapp",
        "metadata": {
          "display_phone_number": "15551234567",
          "phone_number_id": "PHONE_NUMBER_ID"
        },
        "messages": [{
          "from": "5511999999999",
          "id": "wamid.xxx",
          "timestamp": "1234567890",
          "text": {
            "body": "Mensagem recebida"
          },
          "type": "text"
        }]
      },
      "field": "messages"
    }]
  }]
}
```
**Documentação**: [Webhooks > Referência > Mensagens](./webhooks/referencia/messages/)

## 📋 Endpoints Principais

### Gerenciamento de Conta
- **Listar Contas**: `GET /v23.0/{BUSINESS_ID}/owned_whatsapp_business_accounts`
- **Obter Conta**: `GET /v23.0/{WHATSAPP_BUSINESS_ACCOUNT_ID}`
- **Documentação**: [Referência > Conta do WhatsApp Business](./referencia/conta_do_whatsapp_business/)

### Gerenciamento de Números
- **Listar Números**: `GET /v23.0/{WHATSAPP_BUSINESS_ACCOUNT_ID}/phone_numbers`
- **Obter Número**: `GET /v23.0/{PHONE_NUMBER_ID}`
- **Registrar Número**: `POST /v23.0/{PHONE_NUMBER_ID}/register`
- **Documentação**: [Referência > Telefone do WhatsApp Business](./referencia/telefone_do_whatsapp_business/)

### Mídia
- **Upload**: `POST /v23.0/{PHONE_NUMBER_ID}/media`
- **Download**: `GET /v23.0/{MEDIA_ID}`
- **Documentação**: [Referência > Mídias](./referencia/midias/)

### Templates
- **Listar Templates**: `GET /v23.0/{WHATSAPP_BUSINESS_ACCOUNT_ID}/message_templates`
- **Criar Template**: `POST /v23.0/{WHATSAPP_BUSINESS_ACCOUNT_ID}/message_templates`
- **Documentação**: [Modelos > Gerenciamento](./modelos/gerenciamento_de_modelos/)

## 🔍 Códigos de Status Comuns

### Status de Mensagem
- `sent` - Mensagem enviada
- `delivered` - Mensagem entregue
- `read` - Mensagem lida
- `failed` - Falha no envio

**Documentação**: [Webhooks > Referência > Mensagens > Status](./webhooks/referencia/messages/status.md)

### Códigos de Erro Comuns
- `100` - Parâmetro inválido
- `131031` - Número de telefone inválido
- `131026` - Template não encontrado
- `131047` - Rate limit excedido

**Documentação Completa**: [Suporte > Códigos de Erro](./suporte/error_codes.md)

## ⚡ Limites Importantes

### Janela de Atendimento
- **24 horas**: Após receber mensagem do usuário
- **Template obrigatório**: Para mensagens após 24h

**Documentação**: [Mensagens > Limites](./mensagens/limites_de_mensagens/)

### Rate Limits
- Variam por tipo de mensagem e qualidade da conta
- Ver documentação completa para detalhes

**Documentação**: [Mensagens > Limites de Mensagens](./mensagens/limites_de_mensagens/messaging_limits.md)

## 🛠️ Casos de Uso Comuns

### 1. Enviar Mensagem de Boas-Vindas
```bash
curl -X POST "https://graph.facebook.com/v23.0/{PHONE_NUMBER_ID}/messages" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "messaging_product": "whatsapp",
    "to": "5511999999999",
    "type": "template",
    "template": {
      "name": "welcome_template",
      "language": {"code": "pt_BR"}
    }
  }'
```

### 2. Processar Mensagem Recebida (Webhook)
```javascript
// Exemplo Node.js
app.post('/webhook', (req, res) => {
  const entry = req.body.entry[0];
  const changes = entry.changes[0];
  
  if (changes.field === 'messages') {
    const message = changes.value.messages[0];
    const from = message.from;
    const text = message.text.body;
    
    // Processar mensagem...
  }
  
  res.sendStatus(200);
});
```

### 3. Verificar Status de Entrega
```bash
curl -X GET "https://graph.facebook.com/v23.0/{MESSAGE_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}"
```

## 📚 Links Rápidos

- **Início Rápido**: [Começar](./comecar/get_started.md)
- **Tipos de Mensagens**: [Mensagens > Tipos](./mensagens/tipos_de_mensagens/)
- **Webhooks**: [Webhooks > Visão Geral](./webhooks/visao_geral/)
- **Referência Completa**: [Referência](./referencia/)
- **Suporte**: [Suporte](./suporte/)

## 🔗 Recursos Externos

- **Postman Collection**: [Coleção Oficial](https://www.postman.com/meta/whatsapp)
- **GitHub Examples**: [Exemplos de Código](https://github.com/fbsamples/whatsapp-business-jaspers-market)
- **Status da API**: [Status Page](https://developers.facebook.com/status/)

---

**Nota**: Esta é uma referência rápida. Para documentação completa, consulte os documentos específicos em cada seção.
