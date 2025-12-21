<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages -->
<!-- Scraped: 2025-12-20T17:36:34.105Z -->

# referência de webhook de mensagens

Updated: 22 de out de 2025

O webhook **messages** descreve as mensagens enviadas de um usuário do WhatsApp para uma empresa, bem como o status das mensagens enviadas por uma empresa para um usuário do WhatsApp.

## Estruturas de carga

### Mensagens recebidas

Os webhooks de mensagens que descrevem uma mensagem enviada por um usuário do WhatsApp (seja diretamente, por meio de um anúncio ou por meio de um componente da interface do usuário em uma mensagem recebida anteriormente) têm a mesma estrutura comum. Eles podem ser facilmente identificados, pois incluem uma matriz `messages`. Por exemplo, este webhook descreve um SMS enviado a uma empresa:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",                "timestamp": "1749416383",                "type": "text"                "text": {                  "body": "Does it come in another color?"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Os objetos na matriz `messages` podem variar significativamente com base no tipo de mensagem (indicado pela propriedade `type` do objeto). Por isso, cada tipo de mensagem recebida tem uma referência dedicada, vinculada no menu à esquerda.

### Mensagens de saída

Os webhooks que descrevem uma mensagem enviada por uma empresa a um usuário do WhatsApp têm uma estrutura diferente. Eles podem ser identificados facilmente, pois incluem uma matriz `statuses`. Por exemplo, o webhook abaixo descreve uma mensagem que foi entregue ao dispositivo de um usuário do WhatsApp:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "statuses": [              {                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI3MTE5MjVBOTE3MDk5QUVFM0YA",                "status": "delivered",                "timestamp": "1750263773",                "recipient_id": "16505551234",                "conversation": {                  "id": "6ceb9d929c9bdc4f90e967a32f8639b4",                  "origin": {                    "type": "service"                  }                },                "pricing": {                  "billable": true,                  "pricing_model": "CBP",                  "category": "service"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Esses webhooks não descrevem o conteúdo da mensagem enviada, apenas o status dela. Além disso, cada mensagem enviada pode ter até três webhooks separados (um para o status "enviada", um para "entregue" e um para "lida").

Os webhooks de status também contam com uma [referência dedicada](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status).

## Erros

Os erros nos webhooks de mensagens podem ser exibidos em três locais:

-   Os erros no nível do sistema, do app e da conta são exibidos como uma propriedade do objeto `value` (`entry.changes.value.errors`). Veja a referência sobre [erros](/documentation/business-messaging/whatsapp/webhooks/reference/messages/errors).-   Os erros de mensagem recebida aparecem na matriz `messages` (`entry.changes.value.messages.errors`). Nesses webhooks, `type` é definido como `unsupported`. Veja a referência sobre [incompatibilidade](/documentation/business-messaging/whatsapp/webhooks/reference/messages/unsupported).-   Os erros de mensagens enviadas aparecem na matriz `statuses` (`entry.changes.value.statuses.errors`). Veja a referência sobre [status](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)