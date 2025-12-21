<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status -->
<!-- Scraped: 2025-12-20T17:38:11.681Z -->

# Referência do webhook de mensagens de status

Updated: 13 de nov de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **mensagens** de status da conta do WhatsApp Business.

## Gatilhos

-   Sua mensagem é enviada a um usuário do WhatsApp.-   Sua mensagem é entregue ao dispositivo de um usuário do WhatsApp.-   Sua mensagem é exibida (ou seja, "lida") no cliente do WhatsApp no dispositivo de um usuário do WhatsApp.-   Não é possível enviar sua mensagem a um usuário do WhatsApp.-   Não é possível entregar sua mensagem ao dispositivo de um usuário do WhatsApp.-   Sua mensagem é enviada a um usuário do WhatsApp em uma conversa em grupo.-   A mensagem de voz é reproduzida pelo dispositivo do usuário do WhatsApp.

Os gatilhos acima também se aplicam a usuários do WhatsApp que fazem parte de uma conversa em grupo.

Um status é considerado lido somente se tiver sido entregue. Em alguns casos, como quando o usuário recebe uma mensagem enquanto está na tela da conversa, a mensagem é entregue e lida ao mesmo tempo. Nesses casos, o webhook "entregue" não é enviado, porque fica implícito que a mensagem foi entregue depois de ter sido lida. Esse comportamento é resultado de uma otimização interna.

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
            "statuses": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "status": "<STATUS>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "recipient_id": "<USER_PHONE_NUMBER_OR_GROUP_ID>",
                "recipient_type": "group", <!-- Only included if message sent to a group -->
                "recipient_participant_id": "<GROUP_PARTICIPANT_USER_PHONE_NUMBER>", <!-- Only included if message sent to a group -->
                "recipient_identity_key_hash": "<IDENTITY_KEY_HASH>", <!-- Only included if identity change check enabled -->
                "biz_opaque_callback_data": "<BUSINESS_OPAQUE_DATA>", <!-- Only included if message sent with biz_opaque_callback_data --><!-- (1) Only included with sent status, and one of either delivered or read status
                     (2) Omitted entirely for v24.0+ unless webhook is for a free entry point conversation -->
                "conversation": {
                  "id": "<CONVERSATION_ID>",
                  "expiration_timestamp": "<CONVERSATION_EXPIRATION_TIMESTAMP>",
                  "origin": {
                    "type": "<CONVERSATION_CATEGORY>"
                  }
                },

                <!-- only included with sent status, and one of either delivered or read status -->
                "pricing": {
                  "billable": <IS_BILLABLE?>,
                  "pricing_model": "<PRICING_MODEL>",
                  "type": "<PRICING_TYPE>",
                  "category": "<PRICING_CATEGORY>"
                },

                <!-- only included if failure to send or deliver message -->
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

`<BUSINESS_OPAQUE_DATA>`

_String_

A string atribuída pela empresa à propriedade `biz_opaque_callback_data` na solicitação de envio de mensagem.

Esse campo só será incluído se a empresa definir um valor `biz_opaque_callback_data` ao [enviar](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#messages) a mensagem.

`1744434060`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial.

`106540352242922`

`<CONVERSATION_CATEGORY>`

_String_

[Categoria de conversa](/documentation/business-messaging/whatsapp/pricing#conversation-categories). Os valores podem ser os seguintes:

`authentication` – indica uma conversa de autenticação.

`authentication_international` – indica uma conversa de [autenticação internacional](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates).

`marketing` – indica uma conversa de marketing.

`marketing_lite` – Indica uma conversa da [API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview).

`referral_conversion` – indica uma conversa com ponto de entrada gratuito.

`service` – indica uma conversa de serviço.

`utility` – indica uma conversa de utilidade.

`service`

`<CONVERSATION_EXPIRATION_TIMESTAMP>`

_String_

Registro de data e hora Unix que indica quando a conversa expirará.

A propriedade expiration\_timestamp só é incluída no status `sent`.

`1744434060`

`<CONVERSATION_ID>`

_String_

Versão 24.0 e posteriores:

O objeto `conversation` será omitido, a menos que o webhook seja para uma mensagem enviada dentro de uma janela aberta de ponto de entrada gratuito. Nesse caso, o valor será único por janela.

Versão 23.0 e anteriores:

O valor agora será definido como uma identificação única por mensagem, a menos que o webhook seja para uma mensagem enviada com uma janela aberta de ponto de entrada gratuito. Nesse caso, o valor será único por janela.

`8f842dbba350821654c9dfed31f5635c`

`<ERROR_CODE>`

_Número inteiro_

[Código de erro](/documentation/business-messaging/whatsapp/support/error-codes).

`131050`

`<ERROR_CODES_URL>`

_String_

Link para a [documentação de códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes).

`/docs/whatsapp/cloud-api/support/error-codes/`

`<ERROR_DETAILS>`

_String_

[Código de erro](/documentation/business-messaging/whatsapp/support/error-codes) detalhes.

`In order to maintain a healthy ecosystem engagement, the message failed to be delivered.`

`<ERROR_MESSAGE>`

_String_

[Código de erro](/documentation/business-messaging/whatsapp/support/error-codes) mensagem. Esse valor é igual ao valor da propriedade `title`.

`This message was not delivered to maintain healthy ecosystem engagement.`

`<ERROR_TITLE>`

_String_

[Código de erro](/documentation/business-messaging/whatsapp/support/error-codes) título. Esse valor é igual ao valor da propriedade `message`.

`This message was not delivered to maintain healthy ecosystem engagement.`

`<GROUP_PARTICIPANT_USER_PHONE_NUMBER>`

_String_

Número de telefone do usuário do WhatsApp. Propriedade incluída apenas se a mensagem foi enviada a um [grupo](/documentation/business-messaging/whatsapp/groups).

`16505551234`

`<IDENTITY_KEY_HASH>`

_String_

Hash de chave de identidade. Esse campo só será incluído se você tiver habilitado o recurso de [verificação de alteração de identidade](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

`DF2lS5v2W6x=`

`<IS_BILLABLE?>`

_Booliano_

Indica se a mensagem é faturável (`true`) ou não (`false`).

A propriedade `billable` será descontinuada em um futuro lançamento com controle de versão. Por isso, recomendamos que você comece a usar `pricing.type` e `pricing.category` juntos para determinar se uma mensagem é faturável e, em caso afirmativo, definir a taxa de cobrança.

`true`

`<PRICING_CATEGORY>`

_String_

Categoria de preço ([taxa](/documentation/business-messaging/whatsapp/pricing#rates)) aplicada em caso de cobrança. Os valores podem ser os seguintes:

`authentication` – indica a taxa de autenticação aplicada.

`authentication-international` – indica a aplicação da taxa internacional de autenticação.

`marketing` – indica a aplicação da taxa de marketing.

`marketing_lite` – indica a aplicação de preços da [API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview).

`referral_conversion` – indica uma [conversa com ponto de entrada gratuito](/documentation/business-messaging/whatsapp/pricing#free-entry-point-conversations).

`service` – indica a taxa de serviço aplicada.

`utility` – indica a taxa de utilidade aplicada.

`service`

`<PRICING_MODEL>`

_String_

Modelo de preços. Os valores podem ser os seguintes:

`CBP` – indica a aplicação de preços baseados em conversas. Esse valor só será definido se o webhook tiver sido enviado antes de 1º de julho de 2025.

`PMP` – indica a aplicação de [preços por mensagem](/documentation/business-messaging/whatsapp/pricing).

`PMP`

`<PRICING_TYPE>`

_String_

Tipo de preços.

`regular` – indica que a mensagem é faturável.

`free_customer_service` – indica que a mensagem é gratuita, porque era uma mensagem de modelo de utilidade ou uma mensagem que não pertence a um modelo, enviada dentro de uma janela de atendimento ao cliente.

`free_entry_point` – indica que a mensagem é gratuita, porque ela foi enviada dentro de uma janela aberta de ponto de entrada gratuito.

`regular`

`<STATUS>`

_String_

Status da mensagem. Os valores podem ser os seguintes:

`delivered` – indica que a mensagem foi entregue no dispositivo do usuário do WhatsApp.

-   Equivalente na interface do usuário do WhatsApp: dois traços cinzas.

`failed` – indica falha ao enviar ou entregar a mensagem no dispositivo do usuário do WhatsApp.

-   Equivalente na interface do usuário do WhatsApp: triângulo de erro vermelho.

`played` – indica a primeira reprodução da mensagem de voz pelo dispositivo do usuário do WhatsApp.

-   Equivalente na interface do usuário do WhatsApp: microfone azul.

`read` – indica que a mensagem foi exibida em uma conversa aberta no dispositivo do usuário do WhatsApp.

-   Equivalente na interface do usuário do WhatsApp: dois traços azuis.

`sent` – indica que a mensagem foi enviada com sucesso dos nossos servidores.

-   Equivalente na interface do usuário do WhatsApp: um traço.

`read`

`<USER_PHONE_NUMBER_OR_GROUP_ID>`

_String_

Número de telefone do usuário ou ID do grupo do WhatsApp.

O valor corresponde ao número de telefone do usuário do WhatsApp, quando a mensagem é enviada diretamente a ele, ou à [identificação do grupo](/documentation/business-messaging/whatsapp/groups), quando a mensagem é enviada a uma identificação do grupo. Nesse último caso, o número de telefone do usuário do WhatsApp será atribuído à propriedade `recipient_participant_id`.

`16505551234`

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

## Exemplos

Este exemplo de webhook descreve uma mensagem de marketing que foi enviada com sucesso dos nossos servidores.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "statuses": [              {                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "status": "sent",                "timestamp": "1750030073",                "recipient_id": "16505551234",                "conversation": {                  "id": "72b14d6bd5407799e66f64d1b338e567",                  "expiration_timestamp": "1750116480",                  "origin": {                    "type": "marketing"                  }                },                "pricing": {                  "billable": true,                  "pricing_model": "PMP",                  "type": "regular",                  "category": "marketing"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Este exemplo de webhook v24.0 descreve uma mensagem de marketing exibida no WhatsApp do cliente (ou seja, "lida"). Nesse caso, o objeto `conversation` foi omitido porque se trata de um webhook v24.0, e o objeto `pricing` foi omitido porque ele estava sendo exibido em um webhook de mensagens de status entregues associado (o objeto pode aparecer apenas em um ou no outro).

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "statuses": [              {                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "status": "sent",                "timestamp": "1750030073",                "recipient_id": "16505551234"              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Este exemplo descreve uma mensagem que não foi enviada.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "statuses": [              {                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI0QUQ2MjA4NEYyRkExNjMyREUA",                "status": "failed",                "timestamp": "1751142888",                "recipient_id": "16505551234",                "errors": [                  {                    "code": 131049,                    "title": "This message was not delivered to maintain healthy ecosystem engagement.",                    "message": "This message was not delivered to maintain healthy ecosystem engagement.",                    "error_data": {                      "details": "In order to maintain a healthy ecosystem engagement, the message failed to be delivered."                    },                    "href": "/documentation/business-messaging/whatsapp/support/error-codes"                  }                ]              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)