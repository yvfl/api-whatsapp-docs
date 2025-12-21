<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update -->
<!-- Scraped: 2025-12-20T17:36:28.187Z -->

# Referência do webhook message\_template\_status\_update

Updated: 14 de nov de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook `message_template_status_update` da conta do WhatsApp Business.

O webhook **message\_template\_status\_update** notifica você sobre as alterações no status de um modelo existente.

## Gatilhos

-   Um modelo é aprovado.-   Um modelo é rejeitado.-   Um modelo é desabilitado.

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
            "event": "<EVENT>",
            "message_template_id": <TEMPLATE_ID>,
            "message_template_name": "<TEMPLATE_NAME>",
            "message_template_language": "<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>",
            "reason": "<REASON>",
            "message_template_category": <TEMPLATE_CATEGORY>,

            <!-- only included if template disabled -->
            "disable_info": {
              "disable_date": "<DISABLE_TIMESTAMP>"
            },

            <!-- only included if template locked or unlocked -->
            "other_info": {
              "title": "<TITLE>",
              "description": "<DESCRIPTION>"
            }
          },

            <!-- only included if template rejected with INVALID_FORMAT reason -->
            "rejection_info": {
              "reason": "<REASON_INFO>",
              "recommendation": "<RECOMMENDATION_INFO>"
            }
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

`<DESCRIPTION>`

_String_

A string que descreve o motivo do bloqueio ou desbloqueio do modelo.

Seu modelo de mensagem do WhatsApp foi retomado.

`<DISABLE_TIMESTAMP>`

_Número inteiro_

Registro de data e hora UNIX que indica quando o modelo foi desabilitado.

`1751234563`

`<EVENT>`

_String_

Evento de status do modelo. Os valores podem ser os seguintes:

`APPROVED` – indica que o modelo foi aprovado e pode ser enviado em mensagens de modelo.

`ARCHIVED`: indica que o modelo foi arquivado para manter a lista de modelos no Gerenciador do WhatsApp limpa. `DELETED`: indica que o modelo foi excluído.

`DISABLED`: indica que o modelo foi desabilitado devido ao [feedback](/documentation/business-messaging/whatsapp/templates/template-quality) do usuário.

`FLAGGED`: indica que o modelo recebeu feedback negativo e está em risco de ser desabilitado.

`IN_APPEAL`: indica que o modelo está em processo de [apelação](/documentation/business-messaging/whatsapp/templates/template-review#appeals).

`LIMIT_EXCEEDED`: indica que o modelo de conta do WhatsApp Business está no [limite](/documentation/business-messaging/whatsapp/templates/overview).

`LOCKED`: indica que o modelo foi bloqueado e não pode ser editado.

`PAUSED`: indica que o modelo foi [pausado](/documentation/business-messaging/whatsapp/templates/template-pausing).

`PENDING`: indica que o modelo está em análise.

`REINSTATED` – indica que o modelo não está mais sinalizado ou desabilitado e pode ser enviado em mensagens de modelo novamente.

`PENDING_DELETION` – indica que o modelo foi excluído por meio do Gerenciador do WhatsApp.

`REJECTED`: indica que o modelo foi rejeitado. Você pode [editar o modelo](/documentation/business-messaging/whatsapp/templates/overview) para que ele passe pelo processo de análise novamente ou [fazer uma apelação](/documentation/business-messaging/whatsapp/templates/template-review#appeals) da rejeição.

`APPROVED`

`<TEMPLATE_ID>`

_Número inteiro_

ID do modelo.

`1689556908129832`

`<TEMPLATE_NAME>`

_String_

O nome do modelo.

`order_confirmation`

`<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>`

_String_

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en-US`

`<REASON>`

_String_

O motivo da rejeição, caso o modelo tenha sido recusado.

Se o modelo estiver programado para exclusão, o valor será `null` em vez de uma string. Caso contrário, estes podem ser os valores:

`ABUSIVE_CONTENT`: indica que o modelo inclui conteúdo que viola nossas políticas.

`CATEGORY_NOT_AVAILABLE` – (Obsoleto) indica um modelo de autenticação para uma região incompatível.

`INCORRECT_CATEGORY` – indica que o conteúdo do modelo não corresponde à categoria atribuída no momento da criação.

`INVALID_FORMAT` – indica que o modelo tem um formato inválido.

`NONE` – indica que o modelo foi pausado.

`PROMOTIONAL` – indica que o modelo inclui conteúdo que viola nossas políticas.

`SCAM` – indica que o modelo inclui conteúdo que viola nossas políticas.

`TAG_CONTENT_MISMATCH` – indica que o conteúdo do modelo não corresponde à categoria atribuída no momento da criação.

`INVALID_FORMAT`

`<TITLE>`

_String_

Título do evento de pausa ou retomada do modelo.

Os valores podem ser os seguintes:

`FIRST_PAUSE` – indica que o modelo foi pausado pela primeira vez.

`SECOND_PAUSE` – indica que o modelo foi pausado pela segunda vez.

`RATE_LIMITING_PAUSE` – indica que o modelo foi pausado devido à limitação de volume.

`UNPAUSE` – indica que o modelo foi retomado.

`DISABLED` – indica que o modelo foi desabilitado.

`FIRST_PAUSE`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

`<MESSAGE_TEMPLATE_CATEGORY>`

_String_

A categoria do modelo.

Os valores podem ser os seguintes:

`MARKETING`: indica que o modelo é categorizado como MARKETING.

`UTILITY`: indica que o modelo é categorizado como UTILITÁRIO.

`AUTHENTICATION`: indica que o modelo é categorizado como AUTENTICAÇÃO.

`MARKETING`

`<REASON_INFO>`

_String_

Fornece uma explicação detalhada sobre o motivo da rejeição do modelo. Esse campo descreve o problema específico detectado no conteúdo do modelo.

`Your template has parameters placed next to each other (like {{1}}{{2}}) without text or punctuation between them.`

`<RECOMMENDATION_INFO>`

_String_

Oferece orientações úteis sobre como modificar o modelo para resolver o motivo da rejeição. Esse campo sugere boas práticas para editar o conteúdo do modelo.

`Separate parameters with descriptive text and ensure each parameter is clearly contextualized.`

## Exemplo

O exemplo de webhook descreve um modelo que foi aprovado.

```
{  "entry": [    {      "id": "102290129340398",      "time": 1751247548,      "changes": [        {          "value": {            "event": "APPROVED",            "message_template_id": 1689556908129832,            "message_template_name": "order_confirmation",            "message_template_language": "en-US",            "reason": "NONE",            "message_template_category": "UTILITY"          },          "field": "message_template_status_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

O exemplo de webhook descreve um modelo que foi rejeitado com INVALID\_FORMAT.

```
{  "entry": [    {      "id": "102290129340398",      "time": 1751247548,      "changes": [        {          "value": {            "event": "REJECTED",            "message_template_id": 1689556908129835,            "message_template_name": "abandoned_cart",            "message_template_language": "en",            "reason": "INVALID_FORMAT"            "message_template_category": "MARKETING",            "rejection_info": {              "reason": "Your template has parameters placed next to each other (like {{1}}{{2}}) without text or punctuation between them.",              "recommendation": "Separate parameters with descriptive text and ensure each parameter is clearly contextualized."            }          },          "field": "message_template_status_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)