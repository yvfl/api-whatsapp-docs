<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/partner_solutions -->
<!-- Scraped: 2025-12-20T17:39:05.204Z -->

# Referência do webhook partner\_solutions

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook **partner\_solutions** da conta do WhatsApp Business.

O **webhook partner\_solutions** descreve as alterações no status de uma [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions).

## Gatilhos

-   Uma solução multiparceiros é salva como rascunho.-   Uma solicitação de solução multiparceiros é enviada a um parceiro.-   Um parceiro de solução multiparceiros aceita uma solicitação.-   Um parceiro de solução multiparceiros rejeita uma solicitação.-   Um parceiro de solução multiparceiros solicita a desativação de uma solução.-   Uma solução multiparceiros é desativada.

## Sintaxe

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "partner_solutions",
          "value": {
            "event": "<EVENT>",
            "solution_id": "<SOLUTION_ID>",
            "solution_status": "<SOLUTION_STATUS>"
          }
        }
      ],
      "id": "<BUSINESS_PORTFOLIO_ID>",
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>
    }
  ],
  "object": "whatsapp_business_account"
}
```

## Parâmetros

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_PORTFOLIO_ID>`

_String_

A identificação do portfólio empresarial.

`506914307656634`

`<EVENT>`

_String_

Evento de alteração. Os valores podem ser os seguintes:

`SOLUTION_CREATED` – indica que uma nova solução foi salva como rascunho ou enviada como solicitação a um parceiro.

`SOLUTION_UPDATED` – Indica que uma solução existente foi atualizada.

`SOLUTION_CREATED`

`<SOLUTION_ID>`

_String_

O ID da solução.

`774485461512159`

`<SOLUTION_STATUS>`

_String_

O status da solução. Os valores podem ser os seguintes:

`ACTIVE` – O parceiro aceitou a solicitação de solução, e a solução pode ser usada.

`DEACTIVATED` – A solução foi desativada.

`DRAFT` – O rascunho da solução foi concluído, mas a solicitação de convite não foi enviada ao parceiro.

`INITIATED` – A solução foi criada, e a solicitação de convite foi enviada, mas ainda não foi aceita ou rejeitada.

`PENDING_DEACTIVATION` – O proprietário solicitou a desativação da solução, mas o parceiro ainda não aceitou nem recusou a solicitação.

`REJECTED` – O parceiro rejeitou a solicitação de solução.

`INITIATED`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

## Exemplo

```
{  "entry": [    {      "changes": [        {          "field": "partner_solutions",          "value": {            "event": "SOLUTION_CREATED",            "solution_id": "774485461512159",            "solution_status": "INITIATED"          }        }      ],      "id": "506914307656634",      "time": 1739321024    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)