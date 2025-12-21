<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/interactive -->
<!-- Scraped: 2025-12-20T17:37:37.231Z -->

# Referência do webhook de mensagens interativas

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **mensagens** da conta do WhatsApp Business para respostas a mensagens interativas.

## Gatilhos

-   Um usuário do WhatsApp toca em uma linha em uma [mensagem de lista interativa](/documentation/business-messaging/whatsapp/messages/interactive-list-messages).-   Um usuário do WhatsApp toca em um botão em uma [mensagem de botão de resposta interativa](/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages).

## Sintaxe

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_PROFILE_NAME>"
                },
                "wa_id": "<WHATSAPP_USER_ID>",
                "identity_key_hash": "<IDENTITY_KEY_HASH>" <!-- only included if identity change check enabled -->
              }
            ],
            "messages": [
              {
                "context": {
                  "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                  "id": "<CONTEXTUAL_WHATSAPP_MESSAGE_ID>"
                },
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "interactive",

                <!-- interactive list message replies only -->
                "interactive": {
                  "type": "list_reply",
                  "list_reply": {
                    "id": "<ROW_ID>",
                    "title": "<ROW_TITLE>",
                    "description": "<ROW_DESCRIPTION>"
                  }
                },

                <!-- interactive reply button message replies only -->
                "interactive": {
                  "type": "button_reply",
                  "button_reply": {
                    "id": "<BUTTON_ID>",
                    "title": "<BUTTON_LABEL_TEXT>"
                  }
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

## Parâmetros

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial exibido.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial.

`106540352242922`

`<BUTTON_ID>`

_String_

ID do botão.

`cancel-button`

`<BUTTON_LABEL_TEXT>`

_String_

Texto do botão.

`Cancel`

`<CONTEXTUAL_WHATSAPP_MESSAGE_ID>`

_String_

ID da mensagem do WhatsApp que contém o botão em que o usuário do WhatsApp tocou.

`wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA=`

`<IDENTITY_KEY_HASH>`

_String_

Hash de chave de identidade. Esse campo será incluído apenas se você tiver habilitado o recurso de [verificação de alteração de identidade](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

`DF2lS5v2W6x=`

`<ROW_DESCRIPTION>`

_String_

Descrição da linha.

`Next Day to 2 Days`

`<ROW_ID>`

_String_

ID da linha.

`priority_express`

`<ROW_TITLE>`

_String_

Título da linha.

`Priority Mail Express`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_String_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

`<WHATSAPP_MESSAGE_ID>`

_String_

Identificação da mensagem do WhatsApp.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=`

`<WHATSAPP_USER_ID>`

_String_

Número de identificação do usuário do WhatsApp. Vale observar que o número de identificação de um usuário do WhatsApp nem sempre coincide com seu número de telefone.

`16505551234`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

Número de telefone do usuário do WhatsApp. É o mesmo valor retornado pela API como o valor de `input` ao enviar uma mensagem para um usuário do WhatsApp. Vale observar que o número de identificação de um usuário do WhatsApp nem sempre coincide com seu número de telefone.

`16505551234`

`<WHATSAPP_USER_PROFILE_NAME>`

_String_

O nome de usuário do WhatsApp exibido no perfil do cliente na plataforma.

`Sheena Nelson`

## Exemplos

Este exemplo de webhook descreve uma seleção feita por um usuário em uma lista de linhas em uma mensagem interativa de lista.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "context": {                  "from": "15550783881",                  "id": "wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA="                },                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "timestamp": "1749854575",                "type": "interactive",                "interactive": {                  "type": "list_reply",                  "list_reply": {                    "id": "priority_express",                    "title": "Priority Mail Express",                    "description": "Next Day to 2 Days"                  }                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Este exemplo de webhook descreve um botão tocado por um usuário do WhatsApp em uma mensagem interativa com botões de resposta.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "context": {                  "from": "15550783881",                  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI3MEM2RUJFNkI0RENGQTVDRjUA"                },                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTZBQzg0MzQ4QjRCM0NGNkVGOAA=",                "timestamp": "1750025136",                "type": "interactive",                "interactive": {                  "type": "button_reply",                  "button_reply": {                    "id": "cancel-button",                    "title": "Cancel"                  }                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)