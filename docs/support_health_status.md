<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/support/health-status -->
<!-- Scraped: 2025-12-20T17:55:49.697Z -->

# Status de integridade de mensagens e ligações

Updated: 22 de out de 2025

Este documento descreve como descobrir se você pode fazer ligações e enviar mensagens usando um recurso de API.

Os nós a seguir têm um campo `health_status`:

-   [Conta do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)-   [Número de telefone do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api)-   [Modelo de mensagem do WhatsApp](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api)

Se você solicitar o campo `health_status` em um desses nós, a API retornará um resumo da integridade de envio de mensagens e ligações de todos os nós envolvidos nas solicitações relacionadas usando o nó em questão. Esse resumo indica se você poderá usar a API para enviar mensagens e fazer ligações com sucesso, enviar parcialmente (devido a uma limitação em um ou mais nós) ou se não conseguirá enviar mensagens nem fazer ligações.

## Sintaxe da solicitação

```
GET /<NODE_ID>?fields=health_status
```

## Resposta

```
{
  "health_status": {
    "can_send_message": "<OVERALL_MESSAGING_STATUS>",
    "entities": [

      /* Only included if targeting a business phone number */
      {
        "entity_type": "PHONE_NUMBER",
        "id": "<BUSINESS_PHONE_NUMBER_ID>",
        "can_send_message": "<BUSINESS_PHONE_NUMBER_MESSAGING_STATUS>",
        "can_receive_call_sip": "<BUSINESS_PHONE_NUMBER_RECEIVE_CALL_SIP_STATUS>",
      },

      /* Only included if targeting a template */
      {
        "entity_type": "MESSAGE_TEMPLATE",
        "id": "<TEMPLATE_ID>",
        "can_send_message": "<TEMPLATE_MESSAGING_STATUS>"
      },

      /* WABA, business, and app always included */
      {
        "entity_type": "WABA",
        "id": "<WABA_ID>",
        "can_send_message": "<WABA_MESSAGING_STATUS>"
      },
      {
        "entity_type": "BUSINESS",
        "id": "<BUSINESS_PORTFOLIO_ID>",
        "can_send_message": "<BUSINESS_PORTFOLIO_MESSAGING_STATUS>"
      },
      {
        "entity_type": "APP",
        "id": "<APP_ID>",
        "can_send_message": "<APP_MESSAGING_STATUS>",
        "can_receive_call_sip": "<APP_RECEIVE_CALL_SIP_STATUS>",
      }
    ]
  },
  "id": "<NODE_ID>"
}
```

## Conteúdos de resposta

Espaço reservado

Descrição

Valor de exemplo

`<APP_ID>`

ID do app.

`634974688087057`

`<APP_MESSAGING_STATUS>`

O status de integridade de envio de mensagens do app. Consulte [Status de integridade de envio de mensagens](#health-status-field).

`AVAILABLE`

`<APP_RECEIVE_CALL_SIP_STATUS>`

A capacidade do app de receber uma ligação por meio de [SIP](/documentation/business-messaging/whatsapp/calling/sip). Consulte [Status de integridade](#health-status-field). Outros campos relacionados a ligações serão lançados no futuro.

`AVAILABLE`

`<BUSINESS_PORTFOLIO_ID>`

A identificação do portfólio empresarial.

`506914307656634`

`<BUSINESS_PORTFOLIO_MESSAGING_STATUS>`

O status de integridade de envio de mensagens do portfólio empresarial. Consulte [Status de integridade de envio de mensagens](#health-status-field).

`AVAILABLE`

`<BUSINESS_PHONE_NUMBER_ID>`

A identificação do número de telefone comercial.

`106540352242922`

`<BUSINESS_PHONE_NUMBER_MESSAGING_STATUS>`

O status de integridade de envio de mensagens do número de telefone comercial. Consulte [Status de integridade de envio de mensagens](#health-status-field).

`AVAILABLE`

`<BUSINESS_PHONE_NUMBER_RECEIVE_CALL_SIP_STATUS>`

A capacidade do número de telefone comercial de receber uma chamada via [SIP](/documentation/business-messaging/whatsapp/calling/sip). Consulte [Status de integridade](#health-status-field). Outros campos relacionados a ligações serão lançados no futuro.

`AVAILABLE`

`<NODE_ID>`

A identificação do nó em questão.

`161311403722088`

`<OVERALL_MESSAGING_STATUS>`

O status geral de integridade de envio de mensagens, considerando todos os nós envolvidos em uma solicitação de envio de mensagens usando o nó em questão. Consulte [Status de integridade de envio de mensagens](#health-status-field).

`AVAILABLE`

`<TEMPLATE_ID>`

Identificação do modelo.

`1421988012088524`

`<TEMPLATE_MESSAGING_STATUS>`

O status de integridade de envio de mensagens do modelo. Consulte [Status de integridade de envio de mensagens](#health-status-field).

`AVAILABLE`

`<WABA_ID>`

Identificação da WABA.

`102290129340398`

`<WABA_MESSAGING_STATUS>`

O status de integridade de envio de mensagens da WABA. Consulte [Status de integridade de envio de mensagens](#health-status-field).

`AVAILABLE`

## Campo de status de integridade

Diversos nós estão envolvidos em uma tentativa de mensagem ou ligação, incluindo o app, o portfólio empresarial proprietário ou administrador, uma WABA, um número de telefone comercial e um modelo (em caso de envio de mensagem de modelo).

Cada nó pode ter um dos seguintes status de integridade atribuídos à propriedade `can_send_message` ou `can_receive_call_sip`:

-   `AVAILABLE`: indica que o nó atende a todos os requisitos para o envio de mensagens ou realização de ligações.-   `LIMITED`: indica que o nó atende aos requisitos para o envio de mensagens ou realização de ligações, mas há limitações. Se um nó tiver esse valor, a [propriedade additional\_info](#additional-info-property) será incluída.-   `BLOCKED`: indica que o nó não atende a um ou mais requisitos para o envio de mensagens ou realização de ligações. Se um nó tiver esse valor, a [propriedade errors](#errors-property) será incluída, descrevendo o erro e uma possível solução.

### Status geral

A propriedade de status geral de integridade (`health_status.can_send_message`) será definida conforme o seguinte.

-   `BLOCKED`: status caso um ou mais nós estejam bloqueados.-   `LIMITED`: status caso nenhum nó esteja bloqueado, mas um ou mais tenham limitações.-   `AVAILABLE`: status caso todos os nós estejam disponíveis.

Observação: esse status agregado não está disponível para `can_receive_call_sip`

## Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922?fields=health_status' \
-H 'Authorization: Bearer EAAJB'
```

## Exemplo de resposta

```
{  "health_status": {    "can_send_message": "AVAILABLE",    "entities": [      {        "entity_type": "PHONE_NUMBER",        "id": "106540352242922",        "can_send_message": "AVAILABLE",        "can_receive_call_sip":"AVAILABLE"      },      {        "entity_type": "WABA",        "id": "102290129340398",        "can_send_message": "AVAILABLE"      },      {        "entity_type": "BUSINESS",        "id": "506914307656634",        "can_send_message": "AVAILABLE"      },      {        "entity_type": "APP",        "id": "634974688087057",        "can_send_message": "AVAILABLE",        "can_receive_call_sip":"AVAILABLE"      }    ]  },  "id": "106540352242922"}
```

## Propriedade additional\_info

Se a propriedade `can_send_message` ou `can_receive_call_sip` de um nó for definida como `LIMITED`, a propriedade `additional_info` será incluída, dando mais contexto sobre a limitação.

### Exemplo de resposta limitada

Este é um exemplo de resposta a uma solicitação em um número de telefone comercial que pode ser usado para enviar mensagens, mas está sujeito a um limite na quantidade de mensagens que pode ser enviada, pois o nome de exibição não foi aprovado.

```
{  "health_status": {    "can_send_message": "LIMITED",    "entities": [      {        "entity_type": "PHONE_NUMBER",        "id": "106540352242922",        "can_send_message": "LIMITED",        "can_receive_call_sip":"AVAILABLE",        "additional_info": [          "Your display name has not been approved yet. Your message limit will increase after the display name is approved."        ]      },      {        "entity_type": "WABA",        "id": "102290129340398",        "can_send_message": "AVAILABLE"      },      {        "entity_type": "BUSINESS",        "id": "506914307656634",        "can_send_message": "AVAILABLE"      },      {        "entity_type": "APP",        "id": "634974688087057",        "can_send_message": "AVAILABLE",        "can_receive_call_sip":"AVAILABLE"      }    ]  },  "id": "105154286024403"}
```

## Propriedade errors

Se a propriedade `can_send_message` ou `can_receive_call_sip` de um nó for definida como `BLOCKED`, a propriedade `errors` será incluída, descrevendo o motivo do status e uma possível solução.

### Exemplo de resposta em caso de bloqueio

Este é um exemplo de resposta a uma solicitação em um modelo que não pode ser enviado em uma mensagem porque ainda está pendente.

```
{  "health_status": {    "can_send_message": "BLOCKED",    "entities": [      {        "entity_type": "MESSAGE_TEMPLATE",        "id": "2632273056924580",        "can_send_message": "BLOCKED",        "can_receive_call_sip":"AVAILABLE",        "errors": [          {            "error_code": 141002,            "error_description": "Message templates can only be sent out if they are approved.",            "possible_solution": "Edit or appeal the message template review decision."          }        ]      },      {        "entity_type": "WABA",        "id": "102290129340398",        "can_send_message": "AVAILABLE"      },      {        "entity_type": "BUSINESS",        "id": "506914307656634",        "can_send_message": "AVAILABLE"      },      {        "entity_type": "APP",        "id": "634974688087057",        "can_send_message": "AVAILABLE",        "can_receive_call_sip":"AVAILABLE"      }    ]  },  "id": "2632273056924580"}
```

### Exemplo de resposta bloqueada ao receber chamadas por meio do SIP

Este é um exemplo de resposta a uma solicitação em um número de telefone que não configurou o [SIP](/documentation/business-messaging/whatsapp/calling/sip).

```
{  "health_status": {    "can_send_message": "BLOCKED",    "entities": [      {        "entity_type": "PHONE_NUMBER",        "id": "597727103418254",        "can_send_message": "AVAILABLE",        "can_receive_call_sip": "BLOCKED",        "errors": [          {            "error_code": 138024,            "error_description": "WhatsApp Business calling cannot use SIP because it is not enabled",            "possible_solution": "Configure SIP using {PHONE_NUMBER_ID}/settings API"          }        ]      },      {        "entity_type": "WABA",        "id": "102290129340398",        "can_send_message": "AVAILABLE"      },      {        "entity_type": "BUSINESS",        "id": "506914307656634",        "can_send_message": "AVAILABLE"      },      {        "entity_type": "APP",        "id": "634974688087057",        "can_send_message": "AVAILABLE",        "can_receive_call_sip": "BLOCKED",        "errors": [          {            "error_code": 138025,            "error_description": "This app cannot use SIP for WhatsApp Business calling because it has not configured a SIP server for this business phone number",            "possible_solution": "Configure SIP server using {PHONE_NUMBER_ID}/settings API"          }        ]      }    ]  },  "id": "105154286024403"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)