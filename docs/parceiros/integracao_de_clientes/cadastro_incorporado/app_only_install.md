<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/app-only-install -->
<!-- Scraped: 2025-12-20T17:49:38.244Z -->

# Instalação apenas por app

Updated: 4 de nov de 2025

É possível configurar o Cadastro Incorporado para que apenas [tokens comerciais](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) possam ser usados para acessar ativos pertencentes a clientes integrados por meio do fluxo. Essa abordagem melhora a segurança ao reduzir o risco associado aos [tokens do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens), oferece flexibilidade ao simplificar a integração de outros ativos da Meta e escalabilidade para dar suporte a um número maior de integrações. Ao usar um token granular, você também pode reduzir o impacto negativo caso um token seja comprometido, o que torna essa abordagem uma forma mais segura e eficiente de gerenciar os ativos de clientes empresariais.

Observe que a instalação somente do app não pode ser usada para [integrar usuários do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

## Habilitar o recurso na versão 3 do cadastro incorporado

Para habilitar esse recurso, defina `features` como `app_only_install` na configuração do cadastro incorporado.

```
{
  "config_id": "<CONFIGURATION_ID>",
  "response_type": "code",
  "override_default_response_type": true,
  "extras": {
    "version": "v3",
    "features": [
      {
        "name": "app_only_install"
      }
    ]
  }
}
```

Para habilitar esse recurso com uma [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions):

```
{
  "config_id": "<CONFIG_ID>",
  "response_type": "code",
  "override_default_response_type": true,
  "extras": {
    "version": "v3",
    "features": [
      {
        "name": "app_only_install"
      }
    ],
    "setup": {
      "solutionID": "<SOLUTION_ID>"
    }
  }
}
```

Quando um cliente empresarial concluir o fluxo, o [evento de mensagem do registro da sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) terá `event` definido como `FINISH_GRANT_ONLY_API_ACCESS`:

```
{
  data: {
    phone_number_id: "<CUSTOMER_BUSINESS_PHONE_NUMBER_ID>",
    waba_id: "<CUSTOMER_WABA_ID>",
    business_id: "<CUSTOMER_BUSINESS_ID>",
  },
  type: "WA_EMBEDDED_SIGNUP",
  event: "FINISH_GRANT_ONLY_API_ACCESS",
}
```

Quando um cliente empresarial concluir o fluxo, um webhook **account\_update** será disparado com `event` definido como `PARTNER_APP_INSTALLED`.

```
{
  "entry": [
    {
      "id": "<PARTNER_BUSINESS_ID_1>",
      "time": "<WEBHOOK_TRIGGER_TIMESTAMP>",
      "changes": [
        {
          "value": {
            "event": "PARTNER_APP_INSTALLED",
            "waba_info": {
              "waba_id": "<WABA_ID>",
              "owner_business_id": "<WABA_OWNER_BUSINESS_ID>",
              "partner_app_id": "<APP_ID>",
              "solution_id": "<SOLUTION_ID>",
              "solution_partner_business_ids": [
                "<PARTNER_BUSINESS_ID_1>",
                "<PARTNER_BUSINESS_ID_2>"
              ]
            }
          }
        }
      ],
      "field": "account_update",
      "object": "whatsapp_business_account"
    }
  ]
}
```

Se um cliente empresarial integrado usar o [Meta Business Suite](https://business.facebook.com) para desinstalar/remover o app, um webhook **account\_update** será acionado com `event` definido como `PARTNER_APP_UNINSTALLED`.

```
{
  "entry": [
    {
      "id": "<PARTNER_BUSINESS_ID>",
      "time": "<WEBHOOK_TRIGGER_TIMESTAMP>",
      "changes": [
        {
          "value": {
            "event": "PARTNER_APP_UNINSTALLED"
          },
          "field": "account_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

Você pode usar a [API de Gerenciamento de Token Empresarial](/docs/facebook-login/facebook-login-for-business#bisu-token-api) para obter o token de um cliente empresarial integrado.

```
curl -i -X POST "https://graph.facebook.com/v22.0/<CUSTOMER_BUSINESS_PORTFOLIO_ID>/system_user_access_tokens
  ?appsecret_proof=<APPSECRET_PROOF_HASH>
  &access_token=<ACCESS_TOKEN>
  &system_user_id=<SYSTEM_USER_ID>
  &fetch_only=true"
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)