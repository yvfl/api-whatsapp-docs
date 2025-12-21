<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/unsupported -->
<!-- Scraped: 2025-12-20T17:38:47.492Z -->

# Referência do webhook de mensagens incompatíveis

Updated: 4 de nov de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **mensagens** da conta do WhatsApp Business para mensagens incompatíveis com a API.

## Gatilhos

-   Um usuário do WhatsApp envia um tipo de mensagem incompatível com a API de Nuvem.-   Uma empresa usa a API para enviar mensagem a um número que já está sendo usado na API. Nesse caso, o webhook é enviado ao dono do número do destinatário.

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
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "errors": [
                  {
                    "code": 131051,
                    "title": "Message type unknown",
                    "message": "Message type unknown",
                    "error_data": {
                      "details": "Message type is currently not supported."
                    }
                  }
                ],
                "type": "unsupported",
                "unsupported": {
                "type": <UNSUPPORTED_TYPE>
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

Example value

`<BUSINESS_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial exibido.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial.

`106540352242922`

`<IDENTITY_KEY_HASH>`

_String_

Hash de chave de identidade. Esse campo será incluído apenas se você tiver habilitado o recurso de [verificação de alteração de identidade](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

`DF2lS5v2W6x=`

`<UNSUPPORTED_TYPE>`

Contém o tipo de mensagem incompatível.

`edit/poll/button`

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

`+16505551234`

`<WHATSAPP_USER_PROFILE_NAME>`

_String_

O nome de usuário do WhatsApp exibido no perfil do cliente na plataforma.

`Sheena Nelson`

## Exemplo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "timestamp": "1750090702",                "errors": [                  {                    "code": 131051,                    "title": "Message type unknown",                    "message": "Message type unknown",                    "error_data": {                      "details": "Message type is currently not supported."                    }                  }                ],                "type": "unsupported",                "unsupported": {                 "type": "edit"    }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)