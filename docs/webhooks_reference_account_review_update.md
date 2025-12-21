<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_review_update -->
<!-- Scraped: 2025-12-20T17:35:39.923Z -->

# Referência do webhook account\_review\_update

Updated: 22 de out de 2025

Esta referência descreve os eventos de acionamento e o conteúdo da carga do webhook `account_review_update` da conta do WhatsApp Business.

O webhook **account\_review\_update** envia uma notificação quando uma conta do WhatsApp Business é analisada em relação às nossas diretrizes de política.

## Gatilhos

-   A conta do WhatsApp Business é aprovada.-   Uma conta do WhatsApp Business é rejeitada.-   Uma decisão sobre a aprovação de uma conta do WhatsApp Business foi adiada ou está aguardando mais informações.

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
            "decision": "<DECISION>"
          },
          "field": "account_review_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

## Parâmetros da carga

Espaço reservado

Descrição

Valor de exemplo

`<DECISION>`

_String_

Indica o resultado da análise da conta do WhatsApp Business ("WABA").

Os valores podem ser os seguintes:

`APPROVED`: indica que a WABA foi aprovada e está pronta para uso.

`REJECTED`: indica que a WABA foi rejeitada porque não cumpre nossos requisitos de política e não pode ser usada com nossas APIs.

`PENDING`: indica que a decisão da análise ainda está pendente e que a WABA não pode ser usada com nossas APIs no momento.

`DEFERRED`: indica que a decisão da análise foi adiada e que a WABA não pode ser usada com nossas APIs no momento.

`APPROVED`

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
{  "entry": [    {      "id": "102290129340398",      "time": 1739321024,      "changes": [        {          "value": {            "decision": "APPROVED"          },          "field": "account_review_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)