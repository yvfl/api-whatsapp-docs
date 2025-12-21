<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/errors -->
<!-- Scraped: 2025-12-20T17:37:12.399Z -->

# Referência de webhooks de mensagens de erro

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **mensagens** da conta do WhatsApp Business para mensagens de erro.

## Gatilhos

-   Não foi possível processar uma solicitação devido a um problema no sistema.-   Não foi possível processar uma solicitação devido a um problema no app ou na conta.

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
            "errors": [
              {
                "code": <ERROR_CODE>,
                "title": "<ERROR_TITLE>",
                "message": "<ERROR_MESSAGE>",
                "error_data": {
                  "details": "<ERROR_DETAILS>"
                },
                "href": "<ERROR_CODES_URL>"
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

`<ERROR_CODE>`

_Número inteiro_

[Código de erro](/documentation/business-messaging/whatsapp/support/error-codes).

`130429`

`<ERROR_CODES_URL>`

_String_

Link para a [documentação de códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes).

`/docs/whatsapp/cloud-api/support/error-codes/`

`<ERROR_DETAILS>`

_String_

[Código de erro](/documentation/business-messaging/whatsapp/support/error-codes) detalhes.

`Message failed to send because there were too many messages sent from this phone number in a short period of time`

`<ERROR_MESSAGE>`

_String_

[Código de erro](/documentation/business-messaging/whatsapp/support/error-codes) mensagem. Esse valor é igual ao valor da propriedade `title`.

`Rate limit hit`

`<ERROR_TITLE>`

_String_

[Código de erro](/documentation/business-messaging/whatsapp/support/error-codes) título. Esse valor é igual ao valor da propriedade `message`.

`Rate limit hit`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

## Exemplo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "errors": [              {                "code": 130429,                "title": "Rate limit hit",                "message": "Rate limit hit",                "error_data": {                  "details": "Message failed to send because there were too many messages sent from this phone number in a short period of time"                },                "href": "/documentation/business-messaging/whatsapp/support/error-codes"              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)