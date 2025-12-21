<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update -->
<!-- Scraped: 2025-12-20T17:39:29.703Z -->

# Referência do webhook phone\_number\_quality\_update

Updated: 14 de nov de 2025

Esta referência descreve os eventos de disparo e o conteúdo da carga do webhook **phone\_number\_quality\_update** da conta do WhatsApp Business.

O webhook **phone\_number\_quality\_update** fornece notificações sobre as alterações de [nível de taxa de transferência de dados](/documentation/business-messaging/whatsapp/throughput) de um número de telefone comercial.

## Gatilhos

-   O nível da taxa de transferência do número de telefone comercial foi alterado.

## Sintaxe

```
{
    "entry": [
      {
        "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
        "time": <WEBHOOK_TRIGGER_TIMESTAMP>,
        "changes": [
          {
            "value": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "event": "<EVENT>",
              "old_limit": "<OLD_LIMIT>", <!-- only included for messaging limit changes -->
              "current_limit": "<CURRENT_LIMIT>",
              "max_daily_conversations_per_business": "<MAX_DAILY_MESSAGES_LIMIT>"
            },
            "field": "phone_number_quality_update"
          }
        ]
      }
    ],
    "object": "whatsapp_business_account"
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

`<CURRENT_LIMIT>`

_String_

**Este campo será removido em fevereiro de 2026. Use `max_daily_conversations_per_business`.**

Indica o [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) ou o nível de [taxa de transferência](/documentation/business-messaging/whatsapp/throughput) atual.

Os valores podem ser os seguintes:

`TIER_50` – Indica um limite de 50 mensagens.

`TIER_250` – Indica um limite de 250 mensagens.

`TIER_2K` – Indica um limite de 2 mil mensagens.

`TIER_10K` – Indica um limite de 10 mil mensagens.

`TIER_100K` – Indica um limite de 100 mil mensagens.

`TIER_NOT_SET` – Indica que o número de telefone comercial ainda não foi usado para enviar uma mensagem.

`TIER_UNLIMITED` – Indica que a taxa de transferência do número de telefone comercial aumentou.

`TIER_UNLIMITED`

`<EVENT>`

_String_

Evento de alteração de [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) ou de [taxa de transferência](/documentation/business-messaging/whatsapp/throughput).

Os valores podem ser os seguintes:

`ONBOARDING` – Indica que o número de telefone comercial ainda está sendo registrado.

`THROUGHPUT_UPGRADE` – Indica que o nível da taxa de transferência do número de telefone comercial aumentou.

`THROUGHPUT_UPGRADE`

`<MAX_DAILY_MESSAGES_LIMIT>`

_String_

Indica uma alteração no [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) ou na [taxa de transferência](/documentation/business-messaging/whatsapp/throughput) do portfólio empresarial.

Os valores podem ser os seguintes:

`TIER_50` – Indica um limite de 50 mensagens.

`TIER_250` – Indica um limite de 250 mensagens.

`TIER_2K` – Indica um limite de 2 mil mensagens.

`TIER_10K` – Indica um limite de 10 mil mensagens.

`TIER_100K` – Indica um limite de 100 mil mensagens.

`TIER_NOT_SET` – Indica que o número de telefone comercial ainda não foi usado para enviar uma mensagem.

`TIER_UNLIMITED` – Indica que a taxa de transferência do número de telefone comercial aumentou.

`TIER_2K`

`<OLD_LIMIT>`

_String_

**Este parâmetro será removido em fevereiro de 2026. Use `max_daily_conversations_per_business`.**

Indica o [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) antigo.

Os valores podem ser os seguintes:

`TIER_50` – Indica um limite de 50 mensagens.

`TIER_250` – Indica um limite de 250 mensagens.

`TIER_2K` – Indica um limite de 2 mil mensagens.

`TIER_10K` – Indica um limite de 10 mil mensagens.

`TIER_100K` – Indica um limite de 100 mil mensagens.

`TIER_NOT_SET` – Indica que o número de telefone comercial ainda não foi usado para enviar uma mensagem.

`TIER_UNLIMITED`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

## Exemplo

```
{  "entry": [    {      "id": "102290129340398",      "time": 1748454394,      "changes": [        {          "value": {            "display_phone_number": "15550783881",            "event": "THROUGHPUT_UPGRADE",            "current_limit": "TIER_UNLIMITED"          },          "field": "phone_number_quality_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)