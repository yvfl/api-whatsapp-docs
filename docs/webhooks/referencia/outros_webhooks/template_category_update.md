<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/template_category_update -->
<!-- Scraped: 2025-12-20T17:40:02.885Z -->

# Referência do webhook template\_category\_update

Updated: 11 de nov de 2025

Esta referência descreve eventos de gatilho e conteúdos de carga para o webhook **template\_category\_update** da conta do WhatsApp Business.

O webhook **template\_category\_update** envia uma notificação sobre as alterações à [categoria](/documentation/business-messaging/whatsapp/templates/template-categorization) do modelo.

## Gatilhos

-   A categoria existente de um modelo do WhatsApp será alterada por um [processo automatizado](/documentation/business-messaging/whatsapp/templates/template-categorization#how-we-update-a-template-s-category-after-initial-approval).-   A categoria existente de um modelo do WhatsApp é alterada manualmente ou por um [processo automatizado](/documentation/business-messaging/whatsapp/templates/template-categorization#how-we-update-a-template-s-category-after-initial-approval).

## Sintaxe

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "changes": [
        {
          "field": "template_category_update",
          "value": {
            "message_template_id": <TEMPLATE_ID>,
            "message_template_name": "<TEMPLATE_NAME>",
            "message_template_language": "<TEMPLATE_LANGUAGE>",

            <!-- impending category change notifications only -->
            "correct_category": "<CORRECT_CATEGORY>",
            "new_category": "<CURRENT_CATEGORY>",
            "category_update_timestamp": <CATEGORY_UPDATE_TIMESTAMP><!-- completed category change notifications only -->
            "previous_category": "<PREVIOUS_CATEGORY>",
            "new_category": "<NEW_CATEGORY>"

          }
        }
      ]
    }
  ]
}
```

## Parâmetros

Espaço reservado

Descrição

Example value

`<CORRECT_CATEGORY>`

_String_

A categoria que o modelo [receberá](/documentation/business-messaging/whatsapp/templates/template-categorization#how-we-update-a-template-s-category-after-initial-approval) em 24 horas.

`MARKETING`

`<CURRENT_CATEGORY>`

_String_

A [categoria](/documentation/business-messaging/whatsapp/templates/overview#template-categories) atual do modelo.

`MARKETING`

`<NEW_CATEGORY>`

_String_

A nova [categoria](/documentation/business-messaging/whatsapp/templates/overview#template-categories) do modelo.

`MARKETING`

`<CATEGORY_UPDATE_TIMESTAMP>`

_Número inteiro_

O registro de data e hora UNIX (em segundos) que indica quando a categoria do modelo será atualizada para a opção `<CORRECT_CATEGORY>` especificada no webhook. Esse valor representa o momento em que a atualização está programada para ocorrer.

`1760711433`

`<PREVIOUS_CATEGORY>`

_String_

A [categoria](/documentation/business-messaging/whatsapp/templates/overview#template-categories) anterior do modelo.

`UTILITY`

`<TEMPLATE_ID>`

_Número inteiro_

ID do modelo.

`278077987957091`

`<TEMPLATE_LANGUAGE>`

_String_

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en-US`

`<TEMPLATE_NAME>`

_String_

O nome do modelo.

`welcome_template`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

## Exemplos

O webhook de exemplo descreve um modelo que será recategorizado como `MARKETING` em 24 horas. Observe que `new_category` indica a categoria _atual_:

```
{ "entry": [   {     "id": "102290129340398",     "time": 1746082800,     "changes": [       {         "field": "template_category_update",         "value": {           "message_template_id": 278077987957091,           "message_template_name": "welcome_template",           "message_template_language": "en-US",           "new_category": "UTILITY",           "correct_category": "MARKETING",           "category_update_timestamp": 1746169200         }       }     ]   } ], "object": "whatsapp_business_account"}
```

O exemplo de webhook descreve um modelo que foi recategorizado como `MARKETING`:

```
{ "entry": [   {     "id": "102290129340398",     "time": 1746169200,     "changes": [       {         "field": "template_category_update",         "value": {           "message_template_id": 278077987957091,           "message_template_name": "welcome_template",           "message_template_language": "en-US",           "previous_category": "UTILITY",           "new_category": "MARKETING"         }       }     ]   } ], "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)