<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging -->
<!-- Scraped: 2025-12-20T17:42:42.798Z -->

# Mensagens em grupo

Updated: 14 de nov de 2025

## Visão geral

Este documento fornece informações abrangentes sobre as APIs e webhooks disponíveis para enviar e receber mensagens em grupos. Ela detalha o suporte para vários tipos de mensagens, incluindo:

-   SMS-   Mensagens de mídia-   Modelos baseados em texto-   Modelos baseados em mídia

## Assinar webhooks de metadados de grupos

Para receber notificações de webhook com metadados sobre seus grupos, assine os seguintes campos de webhook:

-   `group_lifecycle_update`-   `group_participants_update`-   `group_settings_update`-   `group_status_update`

Para ver uma referência completa de webhooks para a API de Grupos, acesse [Webhooks para a referência da API de Grupos](/documentation/business-messaging/whatsapp/groups/webhooks).

## Enviar mensagens de grupo

Para enviar uma mensagem de grupo, use o ponto de extremidade de envio de mensagens existente:

`POST /<BUSINESS_PHONE_NUMBER_ID>/messages`

A compatibilidade desse ponto de extremidade foi estendida para incluir mensagens de grupo da seguinte maneira:

-   O campo `recipient_type` agora é compatível com `group` e `individual`.-   O campo `to` agora é compatível com `group ID`, que é obtida ao usar a API de Grupos.

### Exemplo de envio de mensagem em grupo

```
curl 'https://graph.facebook.com/v24.0/756079150920219/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAAu...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "group",
  "to": "Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD",
  "type": "text",
  "text": {
      "preview_url": true,
      "body": "This is another destination option: https://www.luckytravel.com/DDLmU5F1Pw"
  }
}'
```

### Webhooks

#### Exemplo de mensagem de grupo enviada

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
               "statuses": [
                 {
                   "id": "<WHATSAPP_MESSAGE_ID>",
                   "recipient_id": "<GROUP_ID>",
                   "recipient_type": "group",
                   "status": "sent",
                   "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
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

#### Exemplo de falha na mensagem de grupo

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
               "statuses": [
                 {
                   "id": "<WHATSAPP_MESSAGE_ID>",
                   "recipient_id": "<GROUP_ID>",
                   "recipient_type": "group",
                   "status": "failed",
                   "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                   "errors": [
                     {
                       "code": "<ERROR_CODE>",
                       "title": "<ERROR_TITLE>",
                       "message": "<ERROR_MESSAGE>",
                       "error_data": {
                         "details": "<ERROR_DETAILS>",
                       },
                       "href": "/documentation/business-messaging/whatsapp/support/error-codes"
                    }
                  ]
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

## Receber mensagens de grupo

Você pode usar os webhooks a seguir para receber o status das mensagens recebidas no grupo.

O objeto `message` inclui um campo `group_id` para indicar que se trata de uma mensagem de grupo. O campo `from` no objeto `message` e o objeto de contato apontam para o mesmo participante que envia a mensagem.

### Webhooks

#### Exemplo de webhook para receber mensagens de grupo

```
{
  "object": "whatsapp_business_account",
  "entry": [{
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [{
          "value": {
              "messaging_product": "whatsapp",
              "metadata": {
                  "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                  "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
              },
              "contacts": [{
                  "profile": {
                    "name": "<WHATSAPP_USER_NAME>"
                  },
                  "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>"
                }],
              "messages": [{
                  "from": "<GROUP_PARTICIPANT_PHONE_NUMBER>",
                  "group_id": "<GROUP_ID>",
                  "id": "<WHATSAPP_MESSAGE_ID>",
                  "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                  "text": {
                    "body": "<MESSAGE_BODY>"
                  },
                  "type": "text"
                }]
          },
          "field": "messages"
        }]
  }]
}
```

#### Exemplo de webhook para receber mensagens de grupo incompatíveis

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
                   "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              },
              "contacts": [
                {
                  "profile": {
                    "name": "<WHATSAPP_USER_NAME>"
                  },
                  "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>"
                }
              ],
              "messages": [
                {
                  "from": "<GROUP_PARTICIPANT_PHONE_NUMBER>",
                  "group_id": "<GROUP_ID>",
                  "id": "<WHATSAPP_MESSAGE_ID>",
                  "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                  "errors": [
                    {
                      "code": 130501,
                      "message": "Message type is not currently supported",
                      "title": "Unsupported message type",
                      "error_data": {
                        "details": "<ERROR_DETAILS>"
                      }
                    }
                  ],
                  "type": "unsupported"
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

## Fixar e desafixar mensagens de grupo

Fixar uma mensagem destaca a relevância dela.

A ordem de exibição das mensagens fixadas é baseada na ordem cronológica das principais mensagens, com as mais recentes aparecendo primeiro. Caso já haja três mensagens fixadas quando uma nova solicitação para fixar for feita, a mensagem fixada mais antiga será automaticamente desafixada.

### Limites

-   Ao chamar a API, só é possível fixar uma mensagem por vez.-   Somente o administrador do grupo pode fixar ou desafixar mensagens.-   É possível fixar até três mensagens por vez.

### Sintaxe da solicitação

`POST /<BUSINESS_PHONE_NUMBER_ID>/messages`

**Observação: você receberá um erro na resposta de sincronização se os tipos `recipient_type` e `to` não corresponderem.**

### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "group",
  "to": "<GROUP_ID>",
  "type": "pin",
  "pin": {
    "type": "<PIN_OPERATION>",
    "message_id": "<MESSAGE_ID>",
    "expiration_days": "<EXPIRATION>"
  }
}
```

### Parâmetros do corpo

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

**Obrigatório**

O grupo em que você está fixando a mensagem.

`Y2FwaV9ncm91cDoxOTUwNTU1MDA3OToxMjAzNjMzOTQzMjAdOTY0MTUZD`

`<PIN_OPERATION>`

_String_

**Obrigatório**

A operação de fixação que você está realizando no grupo.

Pode ser `"pin"` ou `"unpin"`

`pin`

`<MESSAGE_ID>`

_String_

**Obrigatório**

Um identificador único da mensagem que você está fixando ou desafixando no grupo.

`wamid.HBgLM...`

`<EXPIRATION>`

_Número inteiro_

**Obrigatório quando `PIN_OPERATION` é `pin`**

  
Duração da fixação em dias. Pode ser de 1 a 30 dias.

`4`

### Corpo da resposta

```
{      "messaging_product": "whatsapp",      "contacts": [        {          "input": "Y2FwaV9ncm91cDo....",          "wa_id": "Y2FwaV9ncm91cDo...."        }      ],      "messages": [        {          "id": "wamid.HBgLM..."        }      ]}
```

### Webhooks

Assine o tópico de webhook `messages` para receber notificações de status da mensagem. Os webhooks de status padrão "enviado" e "entregue" serão recebidos para o `message_id` na resposta.

[Saiba mais sobre o objeto de webhook de mensagens `status` webhook neste link](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)

## Webhooks de status de mensagens de grupo

Ao enviar mensagens para um grupo, você receberá um webhook quando a mensagem for entregue ou lida.

Em vez de enviar vários webhooks para cada atualização de status, enviaremos um webhook agregado.

Isso significa que, se você enviar uma mensagem e tiver definido o recebimento de vários status `read` ou `delivered`, enviaremos um único webhook agregado com vários objetos `status`.

Cada webhook que você recebe faz referência apenas a uma mensagem única enviada a um grupo único e a um tipo de status único.

[Saiba mais sobre o webhook de status de mensagens de grupo](/documentation/business-messaging/whatsapp/groups/webhooks#group-message-status-webhooks)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)