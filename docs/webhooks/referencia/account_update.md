<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update -->
<!-- Scraped: 2026-01-24T01:08:22.310Z -->

# Referência do webhook account\_update

Updated: 5 de dez de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook **account\_update** da conta do WhatsApp Business.

O webhook **account\_update** notifica sobre alterações no envio da [verificação da empresa conduzida pelo parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) de uma conta do WhatsApp Business, na qualificação para a [taxa internacional de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) ou no ponto comercial principal, quando é compartilhado com um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview), em caso de [violações de políticas ou termos](/documentation/business-messaging/whatsapp/policy-enforcement) ou quando é excluída.

## Gatilhos

-   O envio de verificação da empresa conduzida por parceiro de uma conta do WhatsApp Business é aprovado, rejeitado ou descartado.-   Uma conta do WhatsApp Business é excluída.-   Uma conta do WhatsApp Business é compartilhada ("instalada") ou não compartilhada ("desinstalada") com um parceiro.-   A conta do WhatsApp Business viola um dos nossos termos ou políticas.-   Uma conta do WhatsApp Business se qualifica para as taxas internacionais de autenticação.-   O ponto comercial principal da conta do WhatsApp Business é definido.-   Uma conta do WhatsApp Business dá ao parceiro acesso às contas de anúncios.

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
            "country": "<COUNTRY_CODE>", <!--only included for  BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE event -->
            "event": "<EVENT>",

            <!-- only included for AD_ACCOUNT_LINKED event -->
            "waba_info": {
              "waba_id": "<WABA_ID>",
              "ad_account_linked": "<AD_ACCOUNT_ID>",
              "owner_business_id": "<BUSINESS_PORTFOLIO_ID>"
            },

            <!-- only included for ACCOUNT_VIOLATION event -->
            "violation_info": {
              "violation_type": "<VIOLATION_TYPE>"
            },

            <!-- only included for AUTH_INTL_PRICE_ELIGIBILITY_UPDATE event -->
            "auth_international_rate_eligibility": {
              "exception_countries": [
                {
                  "country_code": "<EXCEPTION_COUNTRY_CODE>",
                  "start_time": <EXCEPTION_START_TIME>
                }
              ],
              "start_time": <START_TIME>
            },

            <!-- only included for DISABLED_UPDATE event -->
            "ban_info": {
              "waba_ban_state": "<WABA_BAN_STATE>",
              "waba_ban_date": "<WABA_BAN_DATE>"
            },

            <!-- only included for MM_LITE_TERMS_SIGNED event -->
            "waba_info": {
              "waba_id": "<WABA_ID>",
              "owner_business_id": "<BUSINESS_PORTFOLIO_ID>"
            },

            <!-- only included for PARTNER_* events -->
            "waba_info": {
              "waba_id": "<CUSTOMER_WABA_ID>",
              "owner_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>",

              <!-- only included for PARTNER_APP_INSTALLED, PARTNER_APP_UNINSTALLED events -->
              "partner_app_id": "<PARTNER_APP_ID>",

              <!-- only included if customer onboarded via a multi-partner solution,
                   omitted from PARTNER_APP_UNINSTALLED events -->
              "solution_id": "<SOLUTION_ID>",
              "solution_partner_business_ids": [
                "<PARTNER_IDS>"
              ]
            },

            <!-- only included for PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE event -->
            "partner_client_certification_info": {
              "client_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>",
              "status": "<STATUS>",
              "rejection_reasons": [
                "<REJECTION_REASONS>"
              ]
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

## Parâmetros

Espaço reservado

Descrição

Valor de exemplo

`<COUNTRY_CODE>`

_String_

O código do país ISO 3166-1 alfa-2 do país onde determinamos que a [empresa está sediada](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#primary-business-location).

`IN`

`<CUSTOMER_BUSINESS_PORTFOLIO_ID>`

_String_

A identificação do portfólio empresarial do cliente corporativo.

`2729063490586005`

`<CUSTOMER_WABA_ID>`

_String_

A identificação da WABA do cliente comercial integrado.

`365694316623787`

`<EVENT>`

_String_

Evento da conta do WhatsApp Business ("WABA").

Os valores podem ser os seguintes:

`ACCOUNT_DELETED`: indica que a WABA foi excluída.

`ACCOUNT_VIOLATION`: indica que a WABA violou uma das nossas [políticas ou termos](/documentation/business-messaging/whatsapp/policy-enforcement).

`AD_ACCOUNT_LINKED`: indica que a WABA foi integrada à API de Mensagens de Marketing para o WhatsApp por meio do Cadastro Incorporado ou Intent API e dá ao parceiro acesso às contas de anúncios.

`AUTH_INTL_PRICE_ELIGIBILITY_UPDATE`: indica que a WABA está qualificada para as [tarifas de autenticação internacional](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates).

`BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE`: indica que o [ponto comercial principal](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#primary-business-location) da WABA foi configurado.

`DISABLED_UPDATE`: indica que a WABA violou uma das nossas [políticas ou termos](/documentation/business-messaging/whatsapp/policy-enforcement).

`MM_LITE_TERMS_SIGNED`: indica que a WABA aceitou com sucesso os Termos de Serviço da API de MM para WhatsApp.

`PARTNER_ADDED`: indica que a WABA foi compartilhada com um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview).

`PARTNER_APP_INSTALLED`: indica que um cliente empresarial concedeu mais uma permissão ao app.

`PARTNER_APP_UNINSTALLED`: indica que um cliente empresarial desautenticou ou desinstalou o app.

`PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE`: indica que o envio da [verificação da empresa conduzida por parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) da WABA foi aprovado, rejeitado ou descartado.

`PARTNER_REMOVED`: indica que a WABA deixou de ser compartilhada com um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview).

`PARTNER_ADDED`

`<EXCEPTION_COUNTRY_CODE>`

_String_

Código do país ISO 3166-1 alfa-2 do país com uma [exceção de hora de início](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#exception-countries).

`ID`

`<EXCEPTION_START_TIME>`

_Número inteiro_

Registro de data e hora UNIX que indica a hora de início da taxa internacional de autenticação para o [país de exceção](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#exception-countries).

`1751347424`

`<PARTNER_IDS>`

_Matriz_

As strings com identificações de portfólios empresariais pertencentes ao Provedor de Tecnologia (ou Parceiro de Tecnologia) e ao Parceiro de Soluções associado à [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions).

`"506914307656634","116133292427920"`

`<REJECTION_REASONS>`

_Matriz_

O motivo da rejeição do envio da verificação da empresa conduzida por parceiro.

Os valores podem ser os seguintes:

`ADDRESS NOT MATCHING`: o endereço no envio não corresponde ao endereço no perfil empresarial do cliente. Edite o envio ou peça à empresa para atualizar o perfil e tente novamente.

`BUSINESS NOT ELIGIBLE`: esta empresa não está qualificada para verificação por meio de informações fornecidas por parceiros. Ainda será possível se inscrever para a verificação da empresa da Meta.

`LEGAL NAME NOT MATCHING`: a razão social no envio não corresponde à razão social no perfil empresarial do cliente. Edite o envio ou peça à empresa para atualizar o perfil e tente novamente.

`LEGAL NAME NOT FOUND IN DOCUMENTS`: não foi possível verificar esta empresa devido a um problema com os documentos enviados. Isso pode acontecer por diversos motivos, incluindo os seguintes:

-   A razão social da empresa não é mencionada nos documentos-   O texto do documento não está claro ou é difícil de ler.

`MALFORMED DOCUMENTS`: não foi possível abrir os documentos fornecidos. Isso pode acontecer se os arquivos estiverem corrompidos, protegidos por senha ou se houver outros problemas ao abrir o documento.

`NONE`: indica que o envio não foi rejeitado.

`WEBSITE NOT MATCHING`: o site no envio não corresponde ao site no perfil empresarial do cliente. Edite o envio ou peça à empresa para atualizar o perfil e tente novamente.

`LEGAL NAME NOT FOUND IN DOCUMENTS`

`<SOLUTION_ID>`

_String_

A identificação da solução de [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions).

`303610109049230`

`<START_TIME>`

_Número inteiro_

Registro de data e hora UNIX que indica a hora de início para todos os países com preços de autenticação internacional para os quais você não tem uma [exceção](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#exception-countries).

`1748780624`

`<STATUS>`

_String_

O status do envio da [verificação da empresa conduzida pelo parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification).

Os valores podem ser os seguintes:

`APPROVED`: o envio foi analisado e aprovado.

`DISCARDED`: o envio foi descartado devido a problemas técnicos ou não há progresso há algum tempo.

`FAILED`: o envio foi analisado e rejeitado. Consulte o campo rejection\_reasons para ver mais informações sobre o motivo.

`PENDING`: o envio está aguardando análise.

`REVOKED`: o envio foi revogado.

`APPROVED`

`<VIOLATION_TYPE>`

_String_

O tipo de violação.

Consulte [Violações](/documentation/business-messaging/whatsapp/policy-enforcement-violations) para ver uma lista de valores possíveis.

`ADULT`

`<WABA_BAN_STATE>`

_String_

Estado de banimento da WABA.

Os valores podem ser os seguintes:

`DISABLE`: indica que a WABA está desabilitada.

`REINSTATE`: indica que a WABA foi restabelecida.

`SCHEDULE_FOR_DISABLE`: indica que a WABA foi programada para ser desabilitada.

`REINSTATE`

`<WABA_BAN_DATE>`

_String_

Indica quando a WABA foi banida.

`April 17, 2025`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

## Exemplos

### Conta excluída

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743451903,      "changes": [        {          "value": {            "event": "ACCOUNT_DELETED"          },          "field": "account_update"        }      ]    }  ]}
```

### Violação da conta

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743451903,      "changes": [        {          "value": {            "event": "ACCOUNT_VIOLATION",            "violation_info": {              "violation_type": "ADULT"            }          },          "field": "account_update"        }      ]    }  ]}
```

### Conta de anúncios vinculada

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "2949482758682047",      "time": 1744823932,      "changes": [        {          "field": "account_update",          "value": {            "event": "AD_ACCOUNT_LINKED",            "waba_info": {              "owner_business_id": "2329417887457253",              "ad_account_linked": "980198427534243",              "waba_id": "980198427658004"            }          }        }      ]    }  ]}
```

### Elegibilidade para autenticação internacional

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743451903,      "changes": [        {          "value": {            "auth_international_rate_eligibility": {              "exception_countries": [                {                  "country_code": "ID",                  "start_time": 1751347424                }              ],              "start_time": 1748780624            },            "event": "AUTH_INTL_PRICE_ELIGIBILITY_UPDATE"          },          "field": "account_update"        }      ]    }  ]}
```

### Atualização desabilitada

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743451903,      "changes": [        {          "value": {            "event": "DISABLED_UPDATE",            "ban_info": {              "waba_ban_state": "REINSTATE",              "waba_ban_date": "April 17, 2025"            }          },          "field": "account_update"        }      ]    }  ]}
```

### Termos de Serviço da API de MM para WhatsApp

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "2949482758682047",      "time": 1744823932,      "changes": [        {          "field": "account_update",          "value": {            "event": "MM_LITE_TERMS_SIGNED",            "waba_info": {              "owner_business_id": "2329417887457253",              "waba_id": "980198427658004"            }          }        }      ]    }  ]}
```

### Parceiro adicionado

```
{  "entry": [    {      "id": "2949482758682047",      "time": 1744823932,      "changes": [        {          "value": {            "event": "PARTNER_ADDED",            "waba_info": {              "waba_id": "980198427658004",              "owner_business_id": "2329417887457253",              "solution_id": "1715120619246906",              "solution_partner_business_ids": [                "2949482758682047",                "520744086200222"              ]            }          },          "field": "account_update"        }      ]    }  ]}
```

### App de parceiro instalado

```
{  "entry": [    {      "id": "2949482758682047",      "time": 1745337174,      "changes": [        {          "value": {            "event": "PARTNER_APP_INSTALLED",            "waba_info": {              "waba_id": "1191624265890717",              "owner_business_id": "2329417887457253",              "partner_app_id": "5731794616896507",              "solution_id": "1715120619246906",              "solution_partner_business_ids": [                "2949482758682047",                "520744086200222"              ]            }          }        }      ],      "field": "account_update",      "object": "whatsapp_business_account"    }  ]}
```

### App de parceiro desinstalado

```
{  "entry": [    {      "id": "2949482758682047",      "time": 1748477359,      "changes": [        {          "value": {            "event": "PARTNER_APP_UNINSTALLED",            "waba_info": {              "waba_id": "184943124712545",              "owner_business_id": "1284923862322270",              "partner_app_id": "869361281603019"            },            "field": "account_update",            "object": "whatsapp_business_account"          }        }      ]    }  ]}
```

### Status de verificação da empresa conduzida por parceiro

```
{  "entry": [    {      "id": "102290129340398",      "time": 1743138982,      "changes": [        {          "value": {            "event": "PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE",            "partner_client_certification_info": {              "client_business_id": "2729063490586005",              "status": "APPROVED",              "rejection_reasons": [                "NONE"              ]            }          },          "field": "account_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

### Ponto comercial principal definido

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743138982,      "changes": [        {          "value": {            "country": "IN",            "event": "BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE"          },          "field": "account_update"        }      ]    }  ]}
```

### Atualização de níveis de preços

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743451903,      "changes": [        {          "value": {            "volume_tier_info": {                "tier_update_time": 1743451903,                "pricing_category": "UTILITY",                "tier": "25000001:50000000",                "effective_month": "2025-11",                "region": "India"            },            "event": "VOLUME_BASED_PRICING_TIER_UPDATE"          },          "field": "account_update"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)