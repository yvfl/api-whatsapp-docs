<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/reaction -->
<!-- Scraped: 2025-12-20T17:37:58.672Z -->

# Referência do webhook de mensagens de reação

Updated: 14 de nov de 2025

Esta referência descreve os eventos de disparo e o conteúdo da carga do webhook de **mensagens** da conta do WhatsApp Business para mensagens com uma reação a uma mensagem anterior enviada por uma empresa.

**_Observação:_** quando um usuário final remove um emoji de reação, um webhook sem o campo "emoji" será enviado conforme o exemplo de webhook abaixo.

## Gatilhos

-   Um usuário do WhatsApp reage a uma mensagem anterior enviada por uma empresa nos últimos 30 dias.-   Um usuário do WhatsApp remove uma reação enviada anteriormente a uma mensagem enviada por uma empresa nos últimos 30 dias.

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
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<REACTION_TIMESTAMP>",
                "type": "reaction",
                "reaction": {
                  "message_id": "<CONTEXTUAL_WHATSAPP_MESSAGE_ID>",
                  "emoji": "<EMOJI_UNICODE>" <!-- omitted if user removes reaction -->
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

`<CONTEXTUAL_WHATSAPP_MESSAGE_ID>`

_String_

ID da mensagem do WhatsApp à qual o usuário reagiu.

`wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA=`

`<EMOJI_UNICODE>`

_String_

Unicode do emoji enviado pelo usuário do WhatsApp como reação.

Se o usuário remover a reação inicial, outro webhook será disparado, mas o `emoji` será devidamente omitido da carga.

`U+1F44D`

`<IDENTITY_KEY_HASH>`

_String_

Hash de chave de identidade. Esse campo só será incluído se você tiver habilitado o recurso de [verificação de alteração de identidade](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

`DF2lS5v2W6x=`

`<REACTION_TIMESTAMP>`

_String_

Registro de data e hora Unix que indica quando o cliente enviou a reação.

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

`+16505551234`

`<WHATSAPP_USER_PROFILE_NAME>`

_String_

O nome de usuário do WhatsApp exibido no perfil do cliente na plataforma.

`Sheena Nelson`

## Exemplo de webhooks

**_Como receber uma reação_**

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "timestamp": "1749419544",                "type": "reaction",                "reaction": {                  "message_id": "wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA=",                  "emoji": "👍"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

**_Reação removida pelo usuário final_**

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "timestamp": "1749419544",                "type": "reaction",                "reaction": {                  "message_id": "wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA=",                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)