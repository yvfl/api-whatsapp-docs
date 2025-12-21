<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/order -->
<!-- Scraped: 2025-12-20T17:37:51.341Z -->

# Referência do webhook de mensagens de pedidos

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **mensagens** da conta do WhatsApp Business para mensagens de pedidos.

## Gatilhos

-   Um usuário do WhatsApp pede um ou mais produtos por meio de uma mensagem de [catálogo, produto único ou vários produtos](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services).

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
                "type": "order",
                "order": {
                  "catalog_id": "<PRODUCT_CATALOG_ID>",
                  "text": "<ORDER_TEXT>",
                  "product_items": [
                    {
                      "product_retailer_id": "<PRODUCT_ID>",
                      "quantity": <PRODUCT_QUANTITY>,
                      "item_price": <PRODUCT_PRICE>,
                      "currency": "<CURRENCY_CODE>"
                    }
                  ]
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

`<CURRENCY_CODE>`

_String_

Código da moeda no catálogo.

`USD`

`<IDENTITY_KEY_HASH>`

_String_

Hash de chave de identidade. Esse campo só será incluído se você tiver habilitado o recurso de [verificação de alteração de identidade](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

`DF2lS5v2W6x=`

`<ORDER_TEXT>`

_String_

Texto que acompanha o pedido.

`Love these!`

`<PRODUCT_CATALOG_ID>`

_String_

[Identificação do catálogo de produtos](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services).

`194836987003835`

`<PRODUCT_ID>`

_String_

[Identificação do produto](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services).

`di9ozbzfi4`

`<PRODUCT_PRICE>`

_Número inteiro_

Preço do produto individual.

`7.99`

`<PRODUCT_QUANTITY>`

_Número inteiro_

Quantidade do produto.

`2`

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

Número de telefone do usuário do WhatsApp. É o mesmo valor retornado pela API como o valor de `input` ao enviar uma mensagem para um usuário do WhatsApp. Vale observar que a identificação de um usuário do WhatsApp nem sempre coincide com seu número de telefone.

`16505551234`

`<WHATSAPP_USER_PROFILE_NAME>`

_String_

O nome de usuário do WhatsApp exibido no perfil do cliente na plataforma.

`Sheena Nelson`

## Exemplo

Este exemplo de webhook descreve um pedido feito por um usuário do WhatsApp de três produtos por meio de uma mensagem de catálogo interativa.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "timestamp": "1750096325",                "type": "order",                "order": {                  "catalog_id": "194836987003835",                  "text": "Love these!",                  "product_items": [                    {                      "product_retailer_id": "di9ozbzfi4",                      "quantity": 2,                      "item_price": 30,                      "currency": "USD"                    },                    {                      "product_retailer_id": "nqryix03ez",                      "quantity": 1,                      "item_price": 25,                      "currency": "USD"                    }                  ]                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)