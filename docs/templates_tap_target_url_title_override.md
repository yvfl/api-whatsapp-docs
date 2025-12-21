<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/tap-target-url-title-override -->
<!-- Scraped: 2025-12-20T17:34:32.956Z -->

# Substituição do URL do título do destino do toque

Updated: 13 de nov de 2025

Este documento explica como enviar modelos de mensagem aprovados usando o componente `tap_target_configuration` em uma mensagem de modelo. A substituição do destino do toque permite que modelos de mensagem com imagem, com texto e sem cabeçalho funcionem como botões de URL de chamada para ação interativos. Esses botões exibem um título personalizado e abrem o destino vinculado ao primeiro botão de URL.

As contas do WhatsApp Business (WABAs, pelas iniciais em inglês) devem ser totalmente verificadas e manter padrões de alta qualidade de forma consistente para garantir a conformidade e o acesso a esse componente.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/520579996_716872931262110_1406523760843053750_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=kn_LmgUcTfwQ7kNvwEfcXXX&_nc_oc=AdkLOo0Ezl-6YWzWQcuB5FnCefpHDrK89bOJ5FxHubiC2UcZJKG2TW_tpH7YkSTe1Q4&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=YL-gm2wdkH4EYhZ3Ak4zDQ&oh=00_AfnJGzffhQR6D9zQqkAMgBctZdA8I11-alQOYXp57c6z-g&oe=69610475)

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar um modelo de mensagem de texto a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "template",
  "template": {
    "name": "<TEMPLATE_NAME>",
    "language": {
      "code": "<LANGUAGE_AND_LOCALE_CODE>"
    },
    "components": [
      {
        "type": "tap_target_configuration",
        "parameters": [
          {
            "type": "tap_target_configuration",
            "tap_target_configuration": [
              {
                "url": "<URL>",
                "title": "<TITLE>"
              }
            ]
          }
        ]
      },
          <!-- Add additional components -->
    ]
  }
}
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

`<TITLE>`

_String_

**Obrigatório.**

Título do URL.

`Offer Details!`

`<URL>`

_String_

**Obrigatório.**

URL.

`https://www.luckyshrubs.com`

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

## Exemplo de solicitação

Exemplo de solicitação para enviar uma mensagem de modelo com o tipo `tap_target_configuration`.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+1233214532",
  "type": "template",
  "template": {
    "name": "august_promotion",
    "language": {
      "code": "en"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "image",
            "image": {
              "link": "https://www.luckyshrubs.com"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "Hello Andy..."
          }
        ]
      },
      {
        "type": "tap_target_configuration",
        "parameters": [
          {
            "type": "tap_target_configuration",
            "tap_target_configuration": [
              {
                "url": "https://www.luckyshrubs.com/",
                "title": "Offer Details"
              }
            ]
          }
        ]
      }
    ]
  }
}'
```

## Exemplo de resposta

```
{   "messaging_product": "whatsapp",   "contacts": [       {           "input": "+1233214532",           "wa_id": "1233214532"       }   ],   "messages": [       {           "id": "wamid.HBgLMTMyMzI4NjU2NzgVAgARGBJBQzRBRDBEMDEwQzVBM0M0QkIA",           "message_status": "accepted"       }   ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)