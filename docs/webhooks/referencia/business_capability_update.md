<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update -->
<!-- Scraped: 2025-12-20T17:35:55.493Z -->

# Referência do webhook business\_capability\_update

Updated: 14 de nov de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook **business\_capability\_update** da conta do WhatsApp Business.

O webhook **business\_capability\_update** notifica você sobre alterações de capacidade da conta do WhatsApp Business ou do portfólio empresarial ([limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits#increasing-your-limit), [limites de número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#registered-number-cap) etc.).

## Gatilhos

-   Uma conta do WhatsApp Business é criada.-   A capacidade comercial da conta do WhatsApp Business ou do portfólio empresarial (por exemplo, [limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits#increasing-your-limit), [limites de número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#registered-number-limits)) é aumentada ou diminuída.

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
            "max_daily_conversation_per_phone": <MAX_DAILY_CONVERSATIONS_PER_PHONE>,
            "max_daily_conversations_per_business": <MAX_DAILY_CONVERSATIONS_PER_BUSINESS>,
            "max_phone_numbers_per_business": <MAX_PHONES_PER_BUSINESS_PORTFOLIO>,
            "max_phone_numbers_per_waba": <MAX_PHONES_PER_WHATSAPP_BUSINESS_ACCOUNT>
          },
          "field": "business_capability_update"
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

`<MAX_DAILY_CONVERSATIONS_PER_PHONE>`

_Número inteiro_

**Este parâmetro será removido em fevereiro de 2026. Use `max_daily_conversations_per_business`.**

[Limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) do portfólio empresarial. Os valores podem ser os seguintes:

-   `250`-   `2000`-   `10000`-   `100000`-   `-1`

O valor `-1` indica mensagens ilimitadas.

`2000`

`<MAX_DAILY_CONVERSATIONS_PER_BUSINESS>`

_Número inteiro_

[Limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) do portfólio empresarial.

Os valores podem ser os seguintes:

-   `TIER_250`-   `TIER_2K`-   `TIER_10K`-   `TIER_100K`-   `TIER_UNLIMITED`

`TIER_UNLIMITED`

`<MAX_PHONES_PER_BUSINESS_PORTFOLIO>`

_Número inteiro_

Número máximo de telefones comerciais que o portfólio empresarial pode ter.

Esta propriedade será incluída somente se `max_daily_conversation_per_phone` estiver definido como `250`.

`2`

`<MAX_PHONES_PER_WHATSAPP_BUSINESS_ACCOUNT>`

_Número inteiro_

Número máximo de telefones comerciais permitidos por WABA.

Esta propriedade será incluída somente se `max_daily_conversation_per_phone` **não** estiver definido como `250`.

`25`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

## Exemplo de carga

```
{  "entry": [    {      "id": "524126980791429",      "time": 1739321024,      "changes": [        {          "value": {            "max_daily_conversations_per_business": 2000,            "max_phone_numbers_per_waba": 25          },          "field": "business_capability_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)