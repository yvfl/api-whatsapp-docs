<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-accounts -->
<!-- Scraped: 2025-12-20T17:51:53.846Z -->

# Como gerenciar as contas do WhatsApp Business

Updated: 4 de nov de 2025

Este documento descreve os pontos de extremidade comuns usados para gerenciar contas do WhatsApp Business de clientes comerciais.

## Consultar o ID da WABA compartilhada com o token de acesso

Depois que uma empresa conclui o fluxo de cadastro incorporado, é possível consultar o ID da WABA compartilhado usando o `accessToken` retornado com o ponto de extremidade [Token de depuração /debug\_token](/docs/graph-api/reference/debug_token). Na chamada de API, inclua seu [token de acesso do usuário do sistema](/docs/marketing-api/system-users/install-apps-and-generate-tokens#generate-token) em um cabeçalho de solicitação com o prefixo `Authorization: Bearer`.

### Sintaxe da solicitação

```
GET https://graph.facebook.com/<API_VERSION>/debug_token
  ?input_token=<TOKEN_RETURNED_FROM_SIGNUP_FLOW>
```

### Exemplo de solicitação

```
curl \
'https://graph.facebook.com/v24.0/debug_token?input_token=EAAFl...' \
-H 'Authorization: Bearer EAAJi...'
```

### Exemplo de resposta

```
{  "data" : {    "app_id" : "670843887433847",    "application" : "JaspersMarket",    "data_access_expires_at" : 1672092840,    "expires_at" : 1665090000,    "granular_scopes" : [      {        "scope" : "whatsapp_business_management",        "target_ids" : [          "102289599326934", // ID of newest WABA to grant app whatsapp_business_management          "101569239400667"        ]      },      {        "scope" : "whatsapp_business_messaging",        "target_ids" : [          "102289599326934",          "101569239400667"        ]      }    ],    "is_valid" : true,    "scopes" : [       "whatsapp_business_management",       "whatsapp_business_messaging",       "public_profile"    ],    "type" : "USER",    "user_id" : "10222270944537964"  }}
```

Cada objeto na matriz `granular_scopes` identifica os IDs da WABA específica que concedeu determinada permissão ao seu app (`scope`). Os IDs das WABAs integradas mais recentemente aparecem primeiro. Por isso, capture o primeiro ID na matriz `target_ids` para o escopo `whatsapp_business_management`.

## Consultar lista de WABAs compartilhadas

O ponto de extremidade `client_whatsapp_business_accounts` recupera uma lista de todas as WABAs atribuídas a/compartilhadas com sua conta do Gerenciador de Negócios após a conclusão do fluxo de cadastro incorporado.

É possível usar esse ponto de extremidade periodicamente para rastrear as WABAs compartilhadas com você. Assim, será possível ver as diferenças e encontrar as que foram compartilhadas com você recentemente, como fallback para a abordagem do [ponto de extremidade Debug-Token](/docs/graph-api/reference/debug_token) descrita no [guia de gerenciamento de conta do WhatsApp Business](/documentation/business-messaging/whatsapp/solution-providers/manage-accounts#shared-whatsapp-business-account-ids).

Veja uma lista com os campos de WABA que podem ser solicitados a partir desse ponto de extremidade na [referência de conta do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#fields).

### Sintaxe da solicitação

```
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_MANAGER_ACCOUNT_ID>/client_whatsapp_business_accounts
```

### Exemplo de solicitação

```
curl \
'https://graph.facebook.com/v24.0/805021500648488/client_whatsapp_business_accounts/' \
-H 'Authorization: Bearer EAAJi...'
```

### Exemplo de resposta

```
{  "data": [    {      "id": 1906385232743451,      "name": "My WhatsApp Business Account",      "currency": "USD",      "timezone_id": "1",      "message_template_namespace": "abcdefghijk_12lmnop"    },    {      "id": 1972385232742141,      "name": "My Regional Account",      "currency": "INR",      "timezone_id": "5",      "message_template_namespace": "12abcdefghijk_34lmnop"    },  ],  "paging": {    "cursors": {      "before": "abcdefghij",      "after": "klmnopqr"    }  }}
```

## Sobre WABAs compartilhadas

### Permissões

Um parceiro de soluções tem as seguintes permissões em uma WABA compartilhada:

-   Adicionar números de telefone-   Criar modelos-   Enviar mensagens aos clientes-   Atribuir usuários à conta-   Acessar as métricas-   Ver informações de pagamento

As empresas que estão sendo integradas por meio do cadastro incorporado podem ver e/ou fazer:

Categoria

O que as empresas podem ver?

Informações

Mensagens, custo e mudanças no estado de qualidade.

Qualidade

Status e classificações de qualidade.

Categoria

O que as empresas podem fazer?

Ativos

Adicionar e gerenciar números de telefone e modelos.  
As empresas não podem baixar o certificado para registrar um número de telefone. Somente parceiros de soluções podem fazer isso.

Gerenciamento de WABA

Cancelar o compartilhamento da WABA com um parceiro de soluções, excluir a WABA e alterar configurações.

Integração com outros produtos da Meta

Integrar anúncios de clique para o WhatsApp.

Os parceiros de soluções não têm permissão para desabilitar o que as empresas podem ver ou fazer, tampouco podem personalizar as visualizações delas.

As empresas podem consultar [Gerenciar as permissões do seu provedor de soluções do WhatsApp Business](https://www.facebook.com/business/help/861444384718867) para saber mais.

### Notificações

Os parceiros de soluções recebem notificações relevantes por meio de webhooks e do Gerenciador de Negócios. As notificações serão enviadas quando:

-   uma empresa compartilhar uma WABA;-   houver mudança de limite de mensagens ou classificação de qualidade da WABA de um cliente;-   houver aprovação do nome de exibição ou modelo de um número de telefone.

Se a empresa sair do fluxo de cadastro incorporado antes de concluí-lo com sucesso, a WABA poderá ter sido compartilhada, mas o certificado ainda não estará pronto para download. Se isso acontecer, entre em contato com a empresa para ajudá-la a concluir o fluxo de cadastro incorporado.

## Obter a lista de contas do WhatsApp Business da sua propriedade

Use o ponto de extremidade `owned_whatsapp_business_accounts` para consultar a lista das WABAs da sua empresa. Para a solicitação, use o token de acesso do usuário do sistema.

### Sintaxe da solicitação

```
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_MANAGER_ACCOUNT_ID>/owned_whatsapp_business_accounts
```

### Exemplo de solicitação

```
curl \
'https://graph.facebook.com/v24.0/805021500648488/owned_whatsapp_business_accounts/' \
-H 'Authorization: Bearer EAAJi...'
```

### Exemplo de resposta

```
{  "data": [    {      "id": 1906385232743451,      "name": "My WhatsApp Business Account",      "currency": "USD",      "timezone_id": "1",      "message_template_namespace": "abcdefghijk_12lmnop"    },    {      "id": 1972385232742141,      "name": "My Regional Account",      "currency": "INR",      "timezone_id": "5",      "message_template_namespace": "12abcdefghijk_34lmnop"    },  ],  "paging": {    "cursors": {      "before": "abcdefghij",      "after": "klmnopqr"    }  }}
```

## Filtrar WABAs pelo horário de criação

É possível filtrar contas do WhatsApp Business da sua propriedade e de clientes com base no horário de criação. Para a solicitação, use os parâmetros abaixo.

### Sintaxe da solicitação

```
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_MANAGER_ACCOUNT_ID>/owned_whatsapp_business_accounts
  ?filtering=<FILTERING>
```

O valor `filtering` pode ser uma matriz que contém um único objeto com as seguintes propriedades:

### Propriedades do objeto filtering

Nome

Descrição

`field`

Contém o campo que está sendo usado para filtragem. Definido como `creation_time`.

`operator`

Contém o modo que você quer usar para filtrar as contas. Valores compatíveis:  

-   `LESS_THAN`-   `GREATER_THAN`

`value`

Registro de data e hora do UNIX a ser usado para a filtragem.

### Exemplo de objeto

```
[  {    "field" : "creation_time",    "operator" : "GREATER_THAN",    "value" : "1604962813"  }]
```

### Exemplo de solicitação

```
curl \
'https://graph.facebook.com/v24.0/805021500648488/owned_whatsapp_business_accounts' \
-H 'Authorization: Bearer EAAJi...' \
-H 'Content-Type: application/json' \
-d '[{"field":"creation_time","operator":"GREATER_THAN","value":"1604962813"}]'
```

### Exemplo de resposta

```
{
  "data": [
    {
      "id": “12312321312”,
      "name": "test",
      "currency": "USD",
      "timezone_id": "1",
      "message_template_namespace": "46fe_814"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUm9",
      "after": "QVFIUklX"
    },
    "next": "https://graph.facebook.com/v24.0/“
  }
}
```

## Classificar WABAs pelo horário de criação

É possível classificar contas do WhatsApp Business compartilhadas e da sua propriedade com base no horário de criação.

### Sintaxe da solicitação

```
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_MANAGER_ACCOUNT_ID>/owned_whatsapp_business_accounts
  ?sort=<SORT>
```

O valor `sort` pode ser `creation_time_ascending` ou `creation_time_descending`.

### Exemplo de solicitação

```
curl \
'https://graph.facebook.com/v24.0/805021500648488/owned_whatsapp_business_accounts?sort=creation_time_ascending' \
-H 'Authorization: Bearer EAAJi...'
```

### Exemplo de resposta

```
{  "data": [    {      "id": 1906385232743451,      "name": "My WhatsApp Business Account",      "currency": "USD",      "timezone_id": "1",      "message_template_namespace": "abcdefghijk_12lmnop"    },    {      "id": 1972385232742141,      "name": "My Regional Account",      "currency": "INR",      "timezone_id": "5",      "message_template_namespace": "12abcdefghijk_34lmnop"    },  ],  "paging": {    "cursors": {      "before": "abcdefghij"      "after": "klmnopqr"    }  }}
```

## Recuperar o status de análise da WABA

É possível consultar o status de análise da conta do WhatsApp Business solicitando o campo `account_review_status`.

### Sintaxe da solicitação

```
GET https://graph.facebook.com/<API_VERSION>/<WABA_ID>
  ?fields=account_review_status
```

### Exemplo de solicitação

```
curl \
'https://graph.facebook.com/v24.0/106526625562206?fields=account_review_status' \
-H 'Authorization: Bearer EAAJi...' \
```

### Exemplo de resposta

```
{  "account_review_status": "APPROVED",  "id": "1111111111111"}
```

A propriedade `account_review_status` pode ter um destes valores: `PENDING`, `APPROVED` ou `REJECTED`.

## Veja também

-   [API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-business-management-api)-   Referência: [Empresas](/docs/marketing-api/reference/business)-   Referência: [Conta do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)