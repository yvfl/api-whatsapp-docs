<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/call-permission-request-message-template -->
<!-- Scraped: 2025-12-20T17:31:38.991Z -->

# Modelo de mensagem de pedido de permissão para ligação

Updated: 3 de nov de 2025

Crie um modelo de mensagem de pedido de permissão para ligação que a empresa possa enviar a usuários fora da janela de atendimento ao cliente.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/543369275_3208571362625810_4384114346853497205_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9zVmexFrH_YQ7kNvwH3vxJL&_nc_oc=AdlFWlmARpsOKDe9Ojv4Xul-rhoSoBVVGkwCW7hscfHYDC_4QqJyQCgMlb0Go6gT_Fo&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=QmEM0wEL2Clon-DgfOv5jQ&oh=00_AfmCOLa77e1rQoT1trOJ08oObTg1ht_be1zgJOWqJFN8lQ&oe=696126B0)

## Crie um modelo de mensagem de pedido de permissão para ligação

### Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api?locale=en_US#Creating) para criar um modelo de mensagem de pedido de permissão para ligação.

```
curl -X POST \
  'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "sample_cpr_template",
    "language": "en",
    "category": "<CATEGORY>",
    "components": [
      {
        "type": "BODY",
        "text": "We would like to call you to help support your order.",
      },
      {
        "type": "call_permission_request"
      }
   ]
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

[Token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ou [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<API_VERSION>`

_String_

**Opcional.**

Versão da Graph API.

v24.0

`<CATEGORY>`

**Obrigatório.**

Categoria do modelo

Marketing ou utilidade

`Marketing`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

**Obrigatório.**

É a identificação da conta do WhatsApp Business.

`106540352242922`

### Sintaxe da resposta

```
{
  "id": "<ID>",
  "status": "<STATUS>",
  "category": "<CATEGORY>"
}
```

## Envie um modelo de mensagem de pedido de permissão para ligação

### Sintaxe da solicitação

Use o ponto de extremidade [POST /<PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar um modelo de mensagem de pedido de permissão para ligação a um usuário do WhatsApp.

```
curl -X POST \
  'https://graph.facebook.com/<API_VERSION>/<PHONE_NUMBER_ID>/messages' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "<WHATSAPP_USER_PHONE_NUMBER>",
    "type": "template",
    "template": {
      "name": "<TEMPLATE_NAME>",
      "language": {
        "code": "<LANGUAGE_AND_LOCAL_CODE>"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "<BODY_TEXT>"
            }
          ]
        }
      ]
   }
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

[Token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ou [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<API_VERSION>`

_String_

**Opcional.**

Versão da Graph API.

v24.0

`<BODY_TEXT>`

_String_

**Obrigatório.**

Corpo de texto. Os URLs são automaticamente inseridos como hiperlink.

Tamanho máximo de 4.096 caracteres.

`John Smith`

`<LANGUAGE_AND_LOCAL_CODE>`

_String_

**Obrigatório.**

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo.

`august_promotion`

`<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`

_String_

**Obrigatório.**

Identificação do número de telefone do WhatsApp Business.

`106540352242922`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

### Exemplo de resposta

```
{   "messaging_product": "whatsapp",   "contacts": [       {           "input": "+1233214532",           "wa_id": "1233214532"       }   ],   "messages": [       {           "id": "wamid.HBgLMTMyMzI4NjU2NzgVAgARGBJBQzRBRDBEMDEwQzVBM0M0QkIA",           "message_status": "accepted"       }   ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)