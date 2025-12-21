<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_quality_update -->
<!-- Scraped: 2025-12-20T17:36:20.284Z -->

# Referência do webhook message\_template\_quality\_update

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook `message_template_quality_update` da conta do WhatsApp Business.

O webhook **message\_template\_quality\_update** notifica você sobre alterações na [pontuação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality) de um modelo.

## Gatilhos

-   A pontuação de qualidade do modelo é alterada.

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
            "previous_quality_score": "<PREVIOUS_QUALITY_SCORE>",
            "new_quality_score": "<NEW_QUALITY_SCORE>",
            "message_template_id": <TEMPLATE_ID>,
            "message_template_name": "<TEMPLATE_NAME>",
            "message_template_language": "<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>"
          },
          "field": "message_template_status_update"
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

`<NEW_QUALITY_SCORE>`

_String_

Novo modelo de [pontuação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality).

Os valores podem ser os seguintes:

`GREEN` – indica alta qualidade.

`RED` – indica baixa qualidade.

`YELLOW` – indica qualidade média.

`UNKNOWN` – indica qualidade pendente.

`GREEN`

`<PREVIOUS_QUALITY_SCORE>`

_String_

Modelo anterior de [pontuação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality).

Os valores podem ser os seguintes:

`GREEN` – indica alta qualidade.

`RED` – indica baixa qualidade.

`YELLOW` – indica qualidade média.

`UNKNOWN` – indica qualidade pendente.

`YELLOW`

`<TEMPLATE_ID>`

_Número inteiro_

Identificação do modelo.

`806312974732579`

`<TEMPLATE_NAME>`

_String_

O nome do modelo.

`welcome_template`

`<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>`

_String_

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en-US`

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
{  "entry": [    {      "id": "102290129340398",      "time": 1674864290,      "changes": [        {          "value": {            "previous_quality_score": "GREEN",            "new_quality_score": "YELLOW",            "message_template_id": 806312974732579,            "message_template_name": "welcome_template",            "message_template_language": "en-US"          },          "field": "message_template_status_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)