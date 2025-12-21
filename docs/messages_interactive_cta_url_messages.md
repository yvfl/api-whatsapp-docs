<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-cta-url-messages -->
<!-- Scraped: 2025-12-20T17:26:11.292Z -->

# Mensagens de botões de URL de chamada para ação interativos

Updated: 3 de nov de 2025

Os usuários do WhatsApp podem hesitar em tocar em URLs brutas com strings longas ou obscuras recebidas por mensagem de texto. Nessas situações, você pode enviar uma mensagem com um botão URL de chamada para ação (CTA) interativo. As mensagens com botões URL de CTA permitem representar qualquer URL em um botão. Dessa forma, não será preciso incluir a URL bruta no corpo da mensagem.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/498114174_2231456237292792_1964702441845433307_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LdfB_iHIlS8Q7kNvwF8SB1H&_nc_oc=Adm34u6YtvgQMvrRKF9DDv7NAGEoUFgsScTxp27AoLK6vg8ZsS3c5bOXEfnWMTolO0U&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=AYr8-BPSv-iXQuVMgq1x_w&oh=00_AflQammgzIewVEcXj3Cvw_5kOIh8zOJslYT4upZZ-7gt2w&oe=69610291)

## Sintaxe da solicitação

Ponto de extremidade: [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "cta_url",

    <!-- If using document header, otherwise omit -->
    "header": {
      "type": "document",
      "document": {
        "link": "<ASSET_URL>"
      }
    },

    <!-- If using image header, otherwise omit -->
    "header": {
      "type": "image",
      "image": {
        "link": "<ASSET_URL>"
      }
    },

    <!-- If using text header, otherwise omit -->
    "header": {
      "type": "text",
      "text": "<HEADER_TEXT>"
      }
    },

    <!-- If using video header, otherwise omit -->
    "header": {
      "type": "video",
      "video": {
        "link": "<ASSET_URL>"
      }
    },

    "body": {
      "text": "<BODY_TEXT>"
    },
    "action": {
      "name": "cta_url",
      "parameters": {
        "display_text": "<BUTTON_LABEL_TEXT>",
        "url": "<BUTTON_URL>"
      }
    },

    <!-- If using footer text, otherwise omit -->
    "footer": {
      "text": "<FOOTER_TEXT>"
    }
  }
}'
```

## Parâmetros de solicitação

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

`<ASSET_URL>`

_String_

**Obrigatório se um cabeçalho com ativo de mídia for usado.**

URL do ativo em um servidor público.

`https://www.luckyshrub.com/assets/lucky-shrub-banner-logo-v1.png`

`<BODY_TEXT>`

_String_

**Obrigatório.**

Corpo de texto. Os URLs são automaticamente inseridos como hiperlink.

Máximo de 1.024 caracteres.

`Tap the button below to see available dates.`

`<BUTTON_LABEL_TEXT>`

_String_

**Obrigatório.**

Texto do botão. Se houver vários botões, o ID deve ser único.

Máximo de 20 caracteres.

`See Dates`

`<BUTTON_URL>`

**Obrigatório.**

URL que será carregada no navegador da web padrão do dispositivo após o toque do usuário do WhatsApp.

`https://www.luckyshrub.com?clickID=kqDGWd24Q5TRwoEQTICY7W1JKoXvaZOXWAS7h1P76s0R7Paec4`

`<FOOTER_TEXT>`

_String_

**Obrigatório ao usar um rodapé.**

Texto do rodapé. Os URLs são automaticamente inseridos como hiperlink.

Máximo de 60 caracteres.

`Dates subject to change.`

`<HEADER_TEXT>`

_String_

**Obrigatório se um cabeçalho de texto for usado.**

Texto do cabeçalho.

Máximo de 60 caracteres.

`New workshop dates announced!`

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

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "interactive",
  "interactive": {
    "type": "cta_url",
    "header": {
      "type": "image",
      "image": {
        "link": "https://www.luckyshrub.com/assets/lucky-shrub-banner-logo-v1.png"
      }
    },
    "body": {
      "text": "Tap the button below to see available dates."
    },
    "action": {
      "name": "cta_url",
      "parameters": {
        "display_text": "See Dates",
        "url": "https://www.luckyshrub.com?clickID=kqDGWd24Q5TRwoEQTICY7W1JKoXvaZOXWAS7h1P76s0R7Paec4"
      }
    },
    "footer": {
      "text": "Dates subject to change."
    }
  }
}'
```

## Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)