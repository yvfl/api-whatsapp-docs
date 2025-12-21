<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_alerts -->
<!-- Scraped: 2025-12-20T17:35:32.138Z -->

# Referência do webhook account\_alerts

Updated: 22 de out de 2025

Esta referência descreve os eventos de acionamento e o conteúdo da carga do webhook `account_alerts` da conta do WhatsApp Business.

O webhook **account\_alerts** notifica você sobre alterações no [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits), [perfil empresarial](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#business-profiles) e status da [](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#official-business-account)conta comercial oficial de um número de telefone comercial.

## Gatilhos

-   O aumento do limite de mensagens de todos os números de telefone do portfólio empresarial é negado, a decisão sobre o aumento é adiada ou são necessárias mais informações para se chegar a uma decisão.-   O status da conta comercial oficial de um número de telefone comercial é aprovado ou negado.-   A foto do perfil empresarial do número de telefone comercial é excluída.

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
          "field": "account_alerts",
          "value": {
            "entity_type": "<ENTITY_TYPE>",
            "entity_id": "<ENTITY_ID>",
            "alert_info": {
              "alert_severity": "<ALERT_SEVERITY>",
              "alert_status": "<ALERT_STATUS>",
              "alert_type": "<ALERT_TYPE>",
              "alert_description": "<ALERT_DESCRIPTION>"
            }
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

Valor de exemplo

`<ALERT_DESCRIPTION>`

_String_

Descrição do alerta.

Os valores podem ser os seguintes:

-   `Additional verification is required for your business {NAME}. Go to Security Center in Meta for Business to complete identity verification. To continue without completing additional verification, your business can use WhatsApp Business platform actively for several days and follow our messaging policies.`
    -   `Based on your activity, limits cannot be increased for your business. Contact support for more information.`
    -   `Limits cannot be increased for your business <BUSINESS_PORTFOLIO_NAME>. Use WhatsApp Business platform actively for several days and follow our messaging policies.`
    -   `Limits cannot be increased at this time for your business <BUSINESS_PORTFOLIO_NAME>. Limits cannot be increased as your identity verification submission was rejected. To continue without additional verification, use WhatsApp Business platform actively for several days and follow our messaging policies.`
    -   `Please reupload your profile picture`
    -   `This phone number now has a green badge next to its name showing that it's an authentic and notable business account. Add more details to your business profile to increase customer trust.`
    -   `We do not grant official business accounts to individuals. Your display name must be directly associated with your business. Edit the display name and submit a new request.`
    -   `Your messaging quality was too low to unlock more capabilities at this time. Alternatively, your business can unlock more capabilities by submitting business documents to verify your business.`
    

`Limits cannot be increased for your business <BUSINESS_PORTFOLIO_NAME>. Use WhatsApp Business platform actively for several days and follow our messaging policies.`

`<ALERT_SEVERITY>`

_String_

Gravidade do alerta. Os valores podem ser os seguintes:

`CRITICAL`: indica uma rejeição ou uma negação. O valor `alert_description` pode descrever as medidas que podem ser tomadas para resolver o motivo da rejeição ou da recusa.

`INFORMATIONAL`: indica que o webhook contém apenas dados informativos e que nenhuma ação é necessária.

`WARNING`: indica que talvez seja necessária uma ação. O valor `alert_description` descreve as medidas que podem ser tomadas.

`WARNING`

`<ALERT_STATUS>`

Status do alerta.

Os valores podem ser os seguintes:

-   `ACTIVE`-   `NONE`

`ACTIVE`

`<ALERT_TYPE>`

_String_

Tipo de alerta.

Os valores podem ser os seguintes:

`INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED`: indica que não temos sinal de mensagem suficiente para fazer uma determinação, que a verificação de identidade foi rejeitada ou que a qualidade da mensagem é muito baixa. As soluções possíveis são aumentar seu [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) ou fazer a [verificação da empresa](https://www.facebook.com/business/help/2058515294227817).

`INCREASED_CAPABILITIES_ELIGIBILITY_FAILED`: indica que os limites de mensagens não podem ser aumentados devido à atividade de mensagens anterior. As soluções possíveis são [solicitar um aumento no limite](/documentation/business-messaging/whatsapp/messaging-limits#request-an-increase) ou fazer a [verificação da empresa](https://www.facebook.com/business/help/2058515294227817).

`INCREASED_CAPABILITIES_ELIGIBILITY_NEED_MORE_INFO`: indica que os limites de mensagens não podem ser aumentados devido à atividade de mensagens anterior. As soluções possíveis são [verificar sua identidade](https://www.facebook.com/business/help/587323819101032) ou aumentar seu [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits).

`OBA_APPROVED`: indica que o status da conta comercial oficial é Aprovada.

`OBA_REJECTED`: indica que o status de conta comercial oficial ("OBA") é Negada. Analise os [critérios](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#criteria) da OBA e edite o seu [nome de exibição](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#display-names) depois de revisar nossas diretrizes para nomes de exibição.

`PROFILE_PICTURE_LOST`: indica que a foto do perfil empresarial do número de telefone comercial foi excluída. Carregue uma nova foto usando o [Gerenciador do WhatsApp](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#viewing-or-updating-your-profile-via-whatsapp-manager) ou a [API](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#updating-your-profile-via-api).

`INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED`

`<ENTITY_ID>`

_String_

Identificação da entidade. O valor pode ser a identificação do portfólio empresarial ou a do número de telefone comercial.

`506914307656634`

`<ENTITY_TYPE>`

_String_

Tipo de entidade. Os valores podem ser os seguintes:

`BUSINESS`: indica uma alteração associada a um portfólio empresarial.

`PHONE_NUMBER`: indica uma alteração associada a um número de telefone comercial.

`CURRENT_STATUS_ID`: indica uma alteração associada ao [perfil comercial](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#business-profiles) de um número de telefone comercial.

`BUSINESS`

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
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1745612159,
      "changes": [
        {
          "field": "account_alerts",
          "value": {
            "entity_type": "BUSINESS",
            "entity_id": "506914307656634",
            "alert_info": {
              "alert_severity": "WARNING",
              "alert_status": "ACTIVE",
              "alert_type": "INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED",
              "alert_description": "Limits cannot be increased for your business <BUSINESS_PORTFOLIO_NAME>. Use WhatsApp Business platform actively for several days and follow our messaging policies."
            }
          }
        }
      ]
    }
  ]
}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)