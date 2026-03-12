<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks -->
<!-- Scraped: 2026-03-10T22:04:49.190Z -->

# Como gerenciar webhooks

Updated: 12 de dez de 2025

As contas do WhatsApp Business e os respectivos ativos são objetos no gráfico social do Facebook. Quando um evento é disparado para um desses objetos, o Facebook envia uma notificação para o URL do webhook especificado no painel do app do Facebook.

No caso do cadastro incorporado, você pode usar os webhooks para receber notificações sobre alterações em contas do WhatsApp Business, números de telefone, modelos de mensagem e mensagens enviadas aos seus telefones.

**Você precisa [assinar individualmente cada conta do WhatsApp Business](#subscribe-to-webhooks-on-a-business-customer-waba) para a qual deseja receber webhooks.** Depois de obter a identificação da conta do WhatsApp Business, assine seu app com a identificação para começar a receber webhooks.

Consulte [Webhooks](/documentation/business-messaging/whatsapp/webhooks/overview) para saber mais sobre webhooks e campos.

## Como assinar webhooks na conta do WhatsApp Business de um cliente corporativo

Use o ponto de extremidade [POST/<WABA\_ID>/subscribed\_apps](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) para assinar webhooks na WABA do cliente empresarial. Se quiser que os webhooks do cliente sejam enviados para um URL de retorno de ligação diferente do definido no seu app, você terá várias opções de [substituição de webhook](/documentation/business-messaging/whatsapp/webhooks/override).

### Solicitação

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

Repita esse processo nas outras contas do WhatsApp Business sobre as quais você quer receber notificações de webhooks. Se o app assinar webhooks de várias contas do WhatsApp Business, todas as notificações serão enviadas ao URL de retorno de chamada especificado no painel do produto **Webhooks** do Painel de Apps, a menos que você [substitua webhooks](/documentation/business-messaging/whatsapp/webhooks/override).

## Como obter todas as assinaturas em uma conta do WhatsApp Business

Para obter a lista dos apps inscritos em webhooks de uma conta do WhatsApp Business, envie uma solicitação GET ao ponto de extremidade `subscribed_apps` dela:

### Sintaxe da solicitação

```
GET https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps
```

Uma resposta bem-sucedida inclui uma matriz de apps que assinaram a conta do WhatsApp Business com as propriedades link, nome e ID de cada um.

### Exemplo de solicitação

```
curl \
'https://graph.facebook.com/v25.0/102289599326934/subscribed_apps' \
-H 'Authorization: Bearer EAAJi...'
```

### Exemplo de resposta

```
{  "data" : [    {      "whatsapp_business_api_data" : {        "id" : "67084...",        "link" : "https://www.facebook.com/games/?app_id=67084...",        "name" : "Jaspers Market"      }    },    {      "whatsapp_business_api_data" : {        "id" : "52565...",        "link" : "https://www.facebook.com/games/?app_id=52565...",        "name" : "Jaspers Fresh Finds"      }    }  ]}
```

## Como cancelar a assinatura da conta do WhatsApp Business

Para cancelar a assinatura do app dos webhooks em uma conta do WhatsApp Business, envie uma solicitação DELETE ao ponto de extremidade `subscribed_apps` dela.

### Sintaxe da solicitação

```
DELETE https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps
```

### Exemplo de solicitação

```
curl -X DELETE \
'https://graph.facebook.com/v25.0/102289599326934/subscribed_apps' \
-H 'Authorization: Bearer EAAJi...'
```

### Exemplo de resposta

```
{   "success" : true}
```

## Como substituir o URL de retorno de chamada

Consulte [Substituições de Webhooks](/documentation/business-messaging/whatsapp/webhooks/override).

## Como configurar notificações

É possível configurar webhooks para receber notificações quando houver alterações nas contas assinadas do WhatsApp Business. Veja os tipos de notificação que você pode assinar:

### Campos de assinatura disponíveis

Nome do campo

Descrição

[account\_alerts](/documentation/business-messaging/whatsapp/webhooks/reference/account_alerts)

O webhook **account\_alerts** notifica você sobre alterações no [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits), [perfil empresarial](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#business-profiles) e status da [conta comercial oficial](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#official-business-account) de um número de telefone comercial.

[account\_review\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_review_update)

O webhook **account\_review\_update** envia uma notificação quando uma conta do WhatsApp Business é analisada em relação às nossas diretrizes de política.

[account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update)

O webhook **account\_update** notifica sobre alterações no envio da [verificação da empresa conduzida pelo parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) de uma conta do WhatsApp Business, na qualificação para a [taxa internacional de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) ou no ponto comercial principal, quando é compartilhado com um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview), em caso de [violações de políticas ou termos](/documentation/business-messaging/whatsapp/policy-enforcement) ou quando é excluída.

[automatic\_events](/documentation/business-messaging/whatsapp/webhooks/reference/automatic_events)

O webhook **automatic\_events** envia uma notificação quando detectamos um evento de compra ou lead em uma conversa entre você e um usuário do WhatsApp que entrou em contato por meio do seu anúncio de clique para o WhatsApp, se você tiver aceitado a geração de relatórios de [Eventos automáticos](/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api).

[business\_capability\_update](/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update)

O webhook **business\_capability\_update** notifica você sobre alterações de capacidade da conta do WhatsApp Business ou do portfólio empresarial ([limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits#increasing-your-limit), [limites de número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#registered-number-cap) etc.).

[history](/documentation/business-messaging/whatsapp/webhooks/reference/history)

O webhook **history** é usado para sincronizar o [histórico de conversas do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) de um cliente comercial integrado por um provedor de soluções.

[message\_template\_components\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_components_update)

O webhook **message\_template\_components\_update** notifica você sobre as alterações nos componentes de um modelo.

[message\_template\_quality\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_quality_update)

O webhook **message\_template\_quality\_update** notifica você sobre alterações na [pontuação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality) de um modelo.

[message\_template\_status\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update)

O webhook **message\_template\_status\_update** notifica você sobre as alterações no status de um modelo existente.

[messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages)

O webhook **messages** descreve as mensagens enviadas de um usuário do WhatsApp para uma empresa, bem como o status das mensagens enviadas por uma empresa para um usuário do WhatsApp.

[partner\_solutions](/documentation/business-messaging/whatsapp/webhooks/reference/partner_solutions)

O **webhook partner\_solutions** descreve as alterações no status de uma [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions).

[payment\_configuration\_update](/documentation/business-messaging/whatsapp/webhooks/reference/payment_configuration_update)

O webhook **payment\_configuration\_update** envia uma notificação sobre as alterações nas configurações de pagamento da [API de Pagamentos Índia](/documentation/business-messaging/whatsapp/payments/payments-in/overview) e da [API de Pagamentos Brasil](/documentation/business-messaging/whatsapp/payments/payments-br/overview).

[phone\_number\_name\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_name_update)

O webhook **phone\_number\_name\_update** notifica você sobre os resultados da [verificação do nome de exibição](/documentation/business-messaging/whatsapp/display-names#display-name-verificationn) do número de telefone comercial.

[phone\_number\_quality\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update)

O webhook **phone\_number\_quality\_update** fornece notificações sobre as alterações de [nível de taxa de transferência de dados](/documentation/business-messaging/whatsapp/throughput) de um número de telefone comercial.

[security](/documentation/business-messaging/whatsapp/webhooks/reference/security)

O webhook **security** notifica você sobre alterações nas configurações de segurança de um número de telefone comercial.

[smb\_app\_state\_sync](/documentation/business-messaging/whatsapp/webhooks/reference/smb_app_state_sync)

O webhook **smb\_app\_state\_sync** é usado para sincronizar contatos de [usuários do app WhatsApp Business que foram integrados](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por meio de um provedor de soluções.

[smb\_message\_echoes](/documentation/business-messaging/whatsapp/webhooks/reference/smb_message_echoes)

O webhook **smb\_message\_echoes** avisa você sobre as mensagens enviadas por meio do app WhatsApp Business ou um [dispositivo adicional ("conectado")](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#linked-devices) por um cliente comercial que fez a [integração com a API de Nuvem](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por meio de um provedor de soluções.

[template\_category\_update](/documentation/business-messaging/whatsapp/webhooks/reference/template_category_update)

O webhook **template\_category\_update** envia uma notificação sobre as alterações na [categoria](/documentation/business-messaging/whatsapp/templates/template-categorization) do modelo.

[user\_preferences](/documentation/business-messaging/whatsapp/webhooks/reference/user_preferences)

O webhook **user\_preferences** notifica você sobre as alterações nas [preferências de mensagens de marketing](/documentation/business-messaging/whatsapp/templates/marketing-templates#user-preferences-for-marketing-messages) de um usuário do WhatsApp.

## Exemplos

### Cliente corporativo integrado

Um webhook **account\_update** é disparado com `event` definido como `PARTNER_ADDED` quando um cliente corporativo conclui com sucesso o fluxo de cadastro incorporado.

#### Sintaxe

```
{
  "entry": [
    {
      "id": "<BUSINESS_PORTFOLIO_ID>",
      "time": <WEBHOOK_SENT_TIMESTAMP>,
      "changes": [
        {
          "value": {
            "event": "<EVENT>",
            "waba_info": {
              "waba_id": "<CUSTOMER_WABA_ID>",
              "owner_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>"
            }
          },
          "field": "account_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

#### Exemplo

```
{  "entry": [    {      "id": "35602282435505",      "time": 1731617831,      "changes": [        {          "value": {            "event": "PARTNER_ADDED",            "waba_info": {              "waba_id": "495709166956424",              "owner_business_id": "942647313864044"            }          },          "field": "account_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

### Atualizações de número de telefone

#### Atualização de nome recebida

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "495709166956424",      "time": 1731617831,      "changes": [        {          "field": "phone_number_name_update",          "value": {            "display_phone_number": "124545784358810",            "decision": "APPROVED",            "requested_verified_name": "WhatsApp",            "rejection_reason": null          }        }      ]    }  ]}
```

#### Atualização de qualidade recebida

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "495709166956424",      "time": 1731617831,      "changes": [        {          "field": "phone_number_quality_update",          "value": {            "display_phone_number": "124545784358810",            "event": "FLAGGED",            "current_limit": "TIER_10K"          }        }      ]    }  ]}
```

### Atualizações da conta do WhatsApp Business

#### Número de sandbox atualizado para conta verificada

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "495709166956424",      "time": 1731617831,      "changes": [        {          "field": "account_update",          "value": {            "phone_number": "124545784358810",            "event": "VERIFIED_ACCOUNT"          }        }      ]    }  ]}
```

#### Conta do WhatsApp Business banida

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "495709166956424",      "time": 1731617831,      "changes": [        {          "field": "account_update",          "value": {            "event": "DISABLED_UPDATE"            "ban_info": {              "waba_ban_state": ["SCHEDULE_FOR_DISABLE", "DISABLE", "REINSTATE"],              "waba_ban_date": "DATE"            }          }        }      ]    }  ]}
```

#### Análise da conta do WhatsApp Business concluída

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "495709166956424",      "time": 1731617831,      "changes": [        {          "field": "account_review_update",          "value": {            "decision": "APPROVED"          }        }      ]    }  ]}
```

### Atualizações no modelo de mensagem

#### Aprovado

```
{  "entry": [    {      "id": "495709166956424",      "time": 1731617831,      "changes": [        {          "value": {            "event": "APPROVED",            "message_template_id": 64244916695,            "message_template_name": "Summer 20 Template",            "message_template_language": "en_US",            "reason": "NONE"          },          "field": "message_template_status_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)