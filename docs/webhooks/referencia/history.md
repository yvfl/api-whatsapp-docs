<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/history -->
<!-- Scraped: 2025-12-20T17:36:05.511Z -->

# Referência do webhook history

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook `history` da conta do WhatsApp Business.

O webhook **history** é usado para sincronizar o [histórico de conversas do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) de um cliente empresarial integrado por um provedor de soluções.

## Gatilhos

-   um provedor de soluções [sincronizar o histórico de conversas do app WhatsApp Business](#step-2--initiate-message-history-synchronization) de um cliente corporativo integrado com um número de telefone do app WhatsApp Business e que tenha aceitado compartilhar o histórico de conversas-   um provedor de soluções [sincronizar o histórico de conversas do app WhatsApp Business](#step-2--initiate-message-history-synchronization) de um cliente comercial integrado com um número de telefone do app WhatsApp Business, mas o cliente recusou compartilhar o histórico de conversas

## Compartilhamento do histórico de conversas aprovado

### Conteúdo do histórico de conversas

Se o cliente corporativo já tiver aprovado o compartilhamento do histórico de conversas quando o provedor de soluções solicitar o histórico de conversas da empresa, uma série de webhooks de histórico será disparada, descrevendo todas as mensagens enviadas ou recebidas em até 180 dias a partir do momento da integração da empresa na API de Nuvem.

-   As mensagens que fazem parte de uma conversa em grupo não serão incluídas.-   As mensagens de mídia não incluirão identificações de ativos de mídia. Em vez disso, webhooks adicionais de histórico contendo identificações de ativos de mensagem de mídia serão enviados separadamente, mas somente para mensagens de mídia enviadas dentro de 14 dias após a integração.

Observe que, para fins de eficiência, um único webhook pode descrever milhares de mensagens. Por isso, recomendamos que você capture o conteúdo primeiro e depois o processe de forma assíncrona.

### Fases e partes

Os webhooks são divididos em três fases do histórico, sendo o dia 0 o momento em que a empresa foi integrada à API de Nuvem:

-   Fase 0: do dia 0 ao dia 1-   Fase 1: do dia 1 ao dia 90-   Fase 2: do dia 90 até o dia 180

Para cada fase, os webhooks do histórico de conversas podem ser enviados em partes separadas, dependendo do número total de mensagens que compõem a conversa.

-   É possível usar o valor do parâmetro `chunk_order` para organizar essas partes na ordem sequencial, já que elas podem não ser entregues de maneira sequencial.-   É possível usar o valor do parâmetro `phase` para monitorar o progresso da fase. O valor `2` indica que a fase atual foi concluída.-   É possível usar o valor do parâmetro `progress` para monitorar o progresso geral. O valor `100` indica que a sincronização foi concluída.

Se não houver histórico de conversas disponível para determinada fase, nenhum webhook correspondente será enviado.

### Sintaxe

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<CUSTOMER_WABA_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<CUSTOMER_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<CUSTOMER_PHONE_NUMBER_ID>"
            },
            "history": [
              {
                "metadata": {
                  "phase": <PHASE>,
                  "chunk_order": <CHUNK_ORDER>,
                  "progress": <PROGRESS>
                },
                "threads": [
                  /* First chat history thread object */
                  {
                    "id": "<WHATSAPP_USER_PHONE_NUMBER>",
                    "messages": [
                      /* First message object in thread */
                      {
                        "from": "<BUSINESS_OR_WHATSAPP_USER_PHONE_NUMBER>",
                        "to": "<WHATSAPP_USER_PHONE_NUMBER>", // only included if SMB message echo
                        "id": "<WHATSAPP_MESSAGE_ID>",
                        "timestamp": "<DEVICE_TIMESTAMP>,
                        "type": "<MESSAGE_TYPE>",
                        "<MESSAGE_TYPE>": {
                          <MESSAGE_CONTENTS>
                        },
                        "history_context": {
                          "status": "<MESSAGE_STATUS>"
                        }
                      },
                      /* Additional message objects in thread would follow, if any */
                    ]
                  },
                  /* Additional chat history thread objects would follow, if any */
                ]
              }
            ]
          },
          "field": "history"
        }
      ]
    }
  ]
}
```

### Parâmetros

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_OR_WHATSAPP_USER_PHONE_NUMBER>`

_String_

O número de telefone do cliente corporativo ou do usuário do WhatsApp.

Se o valor for o número de telefone da empresa, o objeto da mensagem descreverá uma mensagem enviada pela empresa a um usuário do WhatsApp.

Se o valor for o número de telefone do usuário do WhatsApp, o objeto da mensagem descreverá uma mensagem enviada pelo usuário do WhatsApp à empresa.

`15550783881`

`<CHUNK_ORDER>`

_Número inteiro_

Indica o número de [fragmento](#phases-and-chunks), que pode ser usado para ordenar conjuntos de webhooks de forma sequencial.

`1`

`<CUSTOMER_WABA_ID>`

_String_

Identificação da conta do WhatsApp Business do cliente corporativo.

`102290129340398`

`<CUSTOMER_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial do cliente.

`15550783881`

`<CUSTOMER_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial do cliente.

`106540352242922`

`<DEVICE_TIMESTAMP>`

_String_

Registro de data e hora UNIX que indica quando a mensagem foi recebida pelo dispositivo do destinatário.

`1738796547`

`<MESSAGE_CONTENTS>`

_Objeto_

Um objeto que descreve o conteúdo da mensagem. Esse valor variará com base no tipo de mensagem, assim como no conteúdo da mensagem.

Por exemplo, se uma empresa enviar uma mensagem `image` sem legenda, o objeto não incluirá a propriedade `caption`.

Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/messages/send-messages) para ver exemplos de carga de cada tipo de mensagem.

`{"body":"Here's the info you requested! https://www.meta.com/quest/quest-3/"}`

`<MESSAGE_STATUS>`

_String_

Indica as estatísticas de entrega mais recentes da mensagem. Os valores podem ser os seguintes:

-   `DELIVERED`-   `ERROR`-   `PENDING`-   `PLAYED`-   `READ`-   `SENT`

`READ`

`<MESSAGE_TYPE>`

_String_

[Tipo de mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages). Esse espaço reservado aparece duas vezes na sintaxe acima, pois serve para o valor da propriedade `type` e o nome correspondente da propriedade. Confira [abaixo um exemplo de carga](#example-history-approved) de uma conversa com vários tipos de mensagens.

Se esse valor for definido como `media_placeholder`, o objeto da mensagem descreverá uma mensagem com um ativo de mídia. Nesse caso, o conteúdo da mensagem será omitido. Em vez disso, um webhook do histórico separado será enviado, descrevendo o conteúdo da mensagem e a identificação do ativo de mídia, mas somente se a mensagem tiver sido enviada nas duas últimas semanas da sua consulta. Confira [abaixo um exemplo de carga](#example-media-asset) descrevendo o conteúdo de uma mensagem de mídia.

`text`

`<PHASE>`

_Número inteiro_

Indica a [fase](#phases-and-chunks) do histórico. Os valores podem ser os seguintes:

-   `0` – indica que as mensagens são do dia 0 (tempo de integração da empresa) até o dia 1-   `1` – indica que as mensagens são do dia 1 até o dia 90-   `2` – indica que as mensagens são do dia 90 até o dia 180

`1`

`<PROGRESS>`_Número inteiro_

Indica a porcentagem total do progresso da sincronização.

Mínimo `0`, máximo `100`.

`55`

`<WHATSAPP_MESSAGE_ID>`

_String_

Identificação da mensagem do WhatsApp.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

O número de telefone do usuário do WhatsApp.

A propriedade `to` será incluída apenas se o objeto de mensagem representar um [eco de mensagem de PME](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#step-3--mirror-new-whatsapp-business-app-messages).

`16505551234`

### Exemplos

Este exemplo de webhook descreve duas conversas por mensagens: (1) uma contendo uma mensagem de texto e uma mensagem de vídeo enviadas a um usuário do WhatsApp e a resposta desse usuário, e (2) uma contendo uma mensagem de texto enviada a outro usuário do WhatsApp, agradecendo o pedido.

Observe que o conteúdo da mensagem de mídia na primeira conversa não é descrito. Em vez disso, um [segundo webhook](#example-media-asset) será disparado, descrevendo o conteúdo da mensagem de mídia.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "history": [              {                "metadata": {                  "phase": 0,                  "chunk_order": 1,                  "progress": 55                },                "threads": [                  {                    "id": "16505551234",                    "messages": [                      {                        "from": "15550783881",                        "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA",                        "timestamp": "1739230955",                        "type": "text",                        "text": {                          "body": "Here's the info you requested! https://www.meta.com/quest/quest-3/"                        },                        "history_context": {                          "status": "READ"                        }                      },                      {                        "from": "15550783881",                        "id": "wamid.QyNUEHBgLMTY0NjcwNDM1OTUVAgARGBI1Rj3NEYxMzAzMzQ5MkEA",                        "timestamp": "1739230970",                        "type": "media_placeholder",                        "history_context": {                          "status": "PLAYED"                        }                      },                      {                        "from": "16505551234",                        "id": "wamid.N0FCNjMAHBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0",                        "timestamp": "1739230970",                        "type": "text",                        "text": {                          "body": "Thanks!"                        },                        "history_context": {                          "status": "READ"                        }                      }                    ]                  },                  {                    "id": "12125557890",                    "messages": [                      {                        "from": "15550783881",                        "id": "wamid.BIyNDlBOEI5N0FCNjMAHBgLMTY0NjcwNDM1OTUVAgARGQUQ4NDc0",                        "timestamp": "1739230970",                        "type": "text",                        "text": {                          "body": "Thanks for your order! As a thank you, use code THANKS30 to get 30% of your next order."                        },                        "history_context": {                          "status": "DELIVERED"                        }                      }                    ]                  }                ]              }            ]          },          "field": "history"        }      ]    }  ]}
```

Esse exemplo de webhook descreve o conteúdo de uma mensagem de mídia.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "messages": [              {                "from": "16505551234",                "id": "wamid.QyNUEHBgLMTY0NjcwNDM1OTUVAgARGBI1Rj3NEYxMzAzMzQ5MkEA",                "timestamp": "1738796547",                "type": "image",                "image": {                  "caption": "Black Prince echeveria",                  "mime_type": "image/jpeg",                  "sha256": "3f9d94d399fa61c191bc1d4ca71375a035cd9b9f5b1128e1f0963a415c16b0cc",                  "id": "24230790383178626"                }              }            ]          },          "field": "history"        }      ]    }  ]}
```

## Compartilhamento do histórico de conversas recusado

### Sintaxe

```
{
  "messaging_product": "whatsapp",
  "metadata": {
    "display_phone_number": "<CUSTOMER_DISPLAY_PHONE_NUMBER>",
    "phone_number_id": "<CUSTOMER_PHONE_NUMBER_ID>"
  },
  "history": [
    {
      "errors": [
        {
          "code": 2593109,
          "title": "History sync is turned off by the business from the WhatsApp Business App",
          "message": "History sync is turned off by the business from the WhatsApp Business App",
          "error_data": {
            "details": "History sharing is turned off by the business"
          }
        }
      ]
    }
  ]
}
```

### Parâmetros

Espaço reservado

Descrição

Valor de exemplo

`<CUSTOMER_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial do cliente.

`15550783881`

`<CUSTOMER_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial do cliente.

`106540352242922`

### Exemplo

```
{  "messaging_product": "whatsapp",  "metadata": {    "display_phone_number": "15550783881",    "phone_number_id": "106540352242922"  },  "history": [    {      "errors": [        {          "code": 2593109,          "title": "History sync is turned off by the business from the WhatsApp Business App",          "message": "History sync is turned off by the business from the WhatsApp Business App",          "error_data": {            "details": "History sharing is turned off by the business"          }        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)