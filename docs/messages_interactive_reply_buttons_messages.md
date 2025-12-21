<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages -->
<!-- Scraped: 2025-12-20T17:26:26.111Z -->

# Mensagens de botões de resposta interativas

Updated: 3 de nov de 2025

As mensagens de botões de resposta interativas permitem que você envie até três respostas predefinidas para o usuário escolher.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/440749535_402938502645501_9105062754221017983_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Xf7aQ6c5G9QQ7kNvwFgzkuc&_nc_oc=AdmGJpqB8fjT_yihUiGB_UIJbbExoY4dgF9kalipp402IAONjZgmuT5b3-7Urbe8ZYI&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=c-ZHnVsSmN6nD79E5fluVQ&oh=00_AfnXZ5HkahE4X3NgPYtGmS5UwI18iRbWiiHaMU9X6PTsiw&oe=69610431)

Os usuários podem responder a uma mensagem selecionando um dos botões predefinidos, o que dispara um webhook de mensagens descrevendo a seleção.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/440803070_1108181003739406_7014741695346688945_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ei7WDt3NUgcQ7kNvwGUtXlj&_nc_oc=Adl9GBSb2T1rF7XOUXvI20cqAjRdoBLUaVMyH-vgwQ4sfqceQdxFD4gcW18NYyZvfNU&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=c-ZHnVsSmN6nD79E5fluVQ&oh=00_Afmk5lwjKtlRM0b2f57NrW1wf_m0drA_l9auZVrVhDZXvA&oe=69610DC6)

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem interativa com botões de resposta a um usuário do WhatsApp.

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
    "type": "button",
    "header": {<MESSAGE_HEADER>},
    "body": {
      "text": "<BODY_TEXT>"
    },
    "footer": {
      "text": "<FOOTER_TEXT>"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "<BUTTON_ID>",
            "title": "<BUTTON_LABEL_TEXT>"
          }
        }
        <!-- Additional buttons would go here (maximum 3) -->
      ]
    }
  }
}'
```

## Parâmetros de solicitação

Espaço reservado

Descrição

Exemplo de valor

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

Máximo de 1.024 caracteres.

`Hi Pablo! Your gardening workshop is scheduled for 9am tomorrow. Use the buttons if you need to reschedule. Thank you!`

`<BUTTON_ID>`

_String_

**Obrigatório.**

Um identificador único para cada botão. Aceita até três botões.

Máximo de 256 caracteres.

`change-button`

`<BUTTON_LABEL_TEXT>`

_String_

**Obrigatório.**

Texto do botão. Se houver vários botões, o ID deve ser único.

Máximo de 20 caracteres.

`Change`

`<FOOTER_TEXT>`

_String_

**Obrigatório ao usar um rodapé.**

Texto do rodapé. Os URLs são automaticamente inseridos como hiperlink.

Máximo de 60 caracteres.

`Lucky Shrub: Your gateway to succulents!™`

`<MESSAGE_HEADER>`

_Objeto JSON_

**Opcional.**

O conteúdo do cabeçalho. Compatível com os seguintes tipos:

-   `document`-   `image`-   `text`-   `video`

Os ativos de mídia podem ser enviados usando a [mídia carregada](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media)`id` ou o URL `link` (não recomendado).

Exemplo de cabeçalho de imagem com o ID da mídia carregada (mesma estrutura básica para todos os tipos de mídia):

```
{
"type": "image",
"image": {
"id": "2762702990552401"
}
```

Exemplo de cabeçalho com imagem usando mídia hospedada:

```
{
"type": "image",
"image": {
"link": "https://www.luckyshrub.com/media/workshop-banner.png"
}
```

Exemplo de cabeçalho com texto:

```
{
"type":"text",
"text": "Workshop Details"
}
```

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

Exemplo de solicitação para enviar uma mensagem interativa com botões de resposta, cabeçalho com imagem, corpo e rodapé de texto e dois botões de resposta rápida.

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
    "type": "button",
    "header": {
      "type": "image",
      "image": {
        "id": "2762702990552401"
      }
    },
    "body": {
      "text": "Hi Pablo! Your gardening workshop is scheduled for 9am tomorrow. Use the buttons if you need to reschedule. Thank you!"
    },
    "footer": {
      "text": "Lucky Shrub: Your gateway to succulents!™"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "change-button",
            "title": "Change"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "cancel-button",
            "title": "Cancel"
          }
        }
      ]
    }
  }
}'
```

## Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

## Webhooks

Quando um usuário do WhatsApp toca em um botão de resposta, é disparado um webhook de **mensagens** que descreve a seleção em um objeto `button_reply`:

```
"button_reply": {
  "id": "<BUTTON_ID>",
  "title": "<BUTTON_LABEL_TEXT>"
}
```

-   `<BUTTON_ID>` – A identificação do botão em que o usuário tocou.-   `<BUTTON_LABEL_TEXT>` – O texto da etiqueta do botão em que o usuário tocou.

### Exemplo de webhook

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Pablo Morales"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "context": {                  "from": "15550783881",                  "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBJBM0Y4RUU0RUNFQkFDMjYzQUMA"                },                "from": "16505551234",                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQThBREYwNzc2RDc2QjA1QTIwMgA=",                "timestamp": "1714510003",                "type": "interactive",                "interactive": {                  "type": "button_reply",                  "button_reply": {                    "id": "change-button",                    "title": "Change"                  }                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)