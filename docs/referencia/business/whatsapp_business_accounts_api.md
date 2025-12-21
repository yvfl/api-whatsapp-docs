<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-accounts-api -->
<!-- Scraped: 2025-12-20T17:57:03.549Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Contas Empresariais do WhatsApp

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-accounts-api/v23.0.md/)

Version

v23.0

API para gerenciar contas de negócios do WhatsApp sob um portfólio de negócios.

  

Este endpoint permite que empresas recuperem e criem contas de negócios do WhatsApp (WABAs)

para fins de mensagens e comunicação empresarial. As WABAs podem ser associadas

ao portfólio de negócios especificado e configuradas com os parâmetros fornecidos.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Business-ID}/whatsapp\_business\_accounts](#get-version-business-id-whatsapp-business-accounts)

POST

[/{Version}/{Business-ID}/whatsapp\_business\_accounts](#post-version-business-id-whatsapp-business-accounts)

* * *

## GET /{Version}/{Business-ID}/whatsapp\_business\_accounts

Recuperar uma lista de contas de negócios do WhatsApp de propriedade do portfólio de negócios especificado.

  

Este endpoint fornece informações sobre contas de negócios do WhatsApp que são de propriedade do negócio, incluindo sua configuração, status e propriedades principais. Isso corresponde à funcionalidade GraphBusinessWhatsAppBusinessAccountsEdge.

  

Casos de uso:

-   Recuperar lista de contas de negócios do WhatsApp de propriedade
    
-   Monitorar status e configuração do WABA
    
-   Verificar detalhes do WABA para integrações de negócios
    
-   Gerenciar configurações de mensagens do WhatsApp para negócios
    

  

Limitação de taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

As informações do WABA podem ser armazenadas em cache por períodos moderados, mas as informações de status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{Business-ID}/whatsapp\_business\_accounts

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_accounts": {    "summary": "Multiple WhatsApp Business Accounts",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Primary Business WABA",          "account_review_status": "APPROVED",          "currency": "USD",          "country": "US",          "timezone_id": "1",          "business_verification_status": "VERIFIED",          "is_enabled_for_insights": true,          "message_template_namespace": "business_namespace_123"        },        "1": {          "id": "2345678901234567",          "name": "Secondary Business WABA",          "account_review_status": "PENDING",          "currency": "EUR",          "country": "DE",          "timezone_id": "5",          "business_verification_status": "PENDING",          "is_enabled_for_insights": false,          "message_template_namespace": "business_namespace_456"        }      },      "paging": {        "cursors": {          "after": "QVFIUjNpUWpVWmRBd0Rn"        },        "next": "https://graph.facebook.com/v23.0/1234567890/whatsapp_business_accounts?after=QVFIUjNpUWpVWmRBd0Rn"      }    }  },  "single_account": {    "summary": "Single WhatsApp Business Account",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "My Business WABA",          "account_review_status": "APPROVED",          "currency": "USD",          "country": "US",          "timezone_id": "1",          "business_verification_status": "VERIFIED",          "is_enabled_for_insights": true,          "message_template_namespace": "business_namespace_123"        }      }    }  },  "empty_response": {    "summary": "No WhatsApp Business Accounts",    "value": {      "data": []    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Versão da Graph API a ser usada para essa solicitação. Determina o comportamento da API e os recursos disponíveis.

Business-IDstring·obrigatório

Seu ID de portfólio de negócios. Esse ID pode ser encontrado no Meta Business Suite ou por meio das APIs de gerenciamento de negócios.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (id, name, currency, timezone\_id). Campos disponíveis: id, name, account\_review\_status, purchase\_order\_number, currency, timezone\_id, business\_verification\_status, country, on\_behalf\_of\_business\_info, is\_enabled\_for\_insights, message\_template\_namespace

business\_typearray of One of "ENTERPRISE", "SMB"

Filtrar resultados por tipo de conta do WhatsApp Business

limitinteger \[min: 1, max: 100\]

Número máximo de contas do WhatsApp Business para retornar por página. O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use isso para obter a próxima página de resultados.

beforestring

Cursor para paginação. Use isso para obter a página anterior de resultados.

findstring

Encontre uma Conta de Negócios do WhatsApp específica por ID

Respostas

* * *

Recuperar uma lista de contas de negócios do WhatsApp de propriedade do portfólio de negócios especificado.

  

Este endpoint fornece informações sobre contas de negócios do WhatsApp que são de propriedade do negócio, incluindo sua configuração, status e propriedades principais. Isso corresponde à funcionalidade GraphBusinessWhatsAppBusinessAccountsEdge.

  

Casos de uso:

-   Recuperar lista de contas de negócios do WhatsApp de propriedade
    
-   Monitorar status e configuração do WABA
    
-   Verificar detalhes do WABA para integrações de negócios
    
-   Gerenciar configurações de mensagens do WhatsApp para negócios
    

  

Limitação de taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

As informações do WABA podem ser armazenadas em cache por períodos moderados, mas as informações de status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

200

Contas de Negócios do WhatsApp recuperadas com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessAccountsResponse

Mostrar atributos secundários

* * *

WhatsAppBusinessAccountsResponse

* * *

dataarray of WhatsAppBusinessAccount

Matriz de Contas de Negócios do WhatsApp

Mostrar atributos secundários

* * *

data\[\]WhatsAppBusinessAccount

Detalhes e configuração da conta do WhatsApp Business

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para a Conta de Negócios do WhatsApp

* * *

namestring·obrigatório

Nome legível por humanos da Conta de Negócios do WhatsApp

* * *

account\_review\_statusAccountReviewStatus

Verificar status da Conta de Negócios do WhatsApp

* * *

purchase\_order\_numberstring

Número do pedido de compra associado à conta

* * *

currencystring

Código da moeda para a WABA (formato ISO 4217)

* * *

timezone\_idstring

Identificador de fuso horário para o WABA

* * *

business\_verification\_statusBusinessVerificationStatus

Status de verificação do negócio associado ao WABA

* * *

countrystring

Código do país onde a WABA está registrada

* * *

on\_behalf\_of\_business\_infoOnBehalfOfBusinessInfo

Informações sobre o negócio em nome do qual a WABA opera

Mostrar atributos secundários

* * *

idstring

ID da Empresa

* * *

namestring

Nome da empresa

* * *

is\_enabled\_for\_insightsboolean

Se os insights estão habilitados para esse WABA

* * *

message\_template\_namespacestring

Namespace para modelos de mensagens

* * *

pagingCursorPaging

Informações de paginação baseada em cursor

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

beforestring

Cursor apontando para o início da página de dados

* * *

afterstring

Cursor apontando para o final da página de dados

* * *

previousstring

URL para a página anterior de resultados

* * *

nextstring

URL para a próxima página de resultados

400

Requisição Inválida - Parâmetros inválidos ou requisição malformada

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

401

Não autorizado - Token de acesso inválido ou ausente

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

403

Proibido - Permissões insuficientes ou acesso negado

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

404

Não Encontrado - O ID da empresa não existe ou não está acessível

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

422

Entidade Não Processável - Parâmetros da solicitação são válidos, mas não podem ser processados

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

429

Muitos Pedidos - Limite de taxa excedido

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

500

Erro Interno do Servidor - Erro inesperado do servidor

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_accounts": {    "summary": "Multiple WhatsApp Business Accounts",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Primary Business WABA",          "account_review_status": "APPROVED",          "currency": "USD",          "country": "US",          "timezone_id": "1",          "business_verification_status": "VERIFIED",          "is_enabled_for_insights": true,          "message_template_namespace": "business_namespace_123"        },        "1": {          "id": "2345678901234567",          "name": "Secondary Business WABA",          "account_review_status": "PENDING",          "currency": "EUR",          "country": "DE",          "timezone_id": "5",          "business_verification_status": "PENDING",          "is_enabled_for_insights": false,          "message_template_namespace": "business_namespace_456"        }      },      "paging": {        "cursors": {          "after": "QVFIUjNpUWpVWmRBd0Rn"        },        "next": "https://graph.facebook.com/v23.0/1234567890/whatsapp_business_accounts?after=QVFIUjNpUWpVWmRBd0Rn"      }    }  },  "single_account": {    "summary": "Single WhatsApp Business Account",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "My Business WABA",          "account_review_status": "APPROVED",          "currency": "USD",          "country": "US",          "timezone_id": "1",          "business_verification_status": "VERIFIED",          "is_enabled_for_insights": true,          "message_template_namespace": "business_namespace_123"        }      }    }  },  "empty_response": {    "summary": "No WhatsApp Business Accounts",    "value": {      "data": []    }  }}
```

* * *

## POST /{Version}/{Business-ID}/whatsapp\_business\_accounts

Crie uma nova Conta de Negócios do WhatsApp sob o portfólio de negócios especificado.

  

Este endpoint cria uma nova WABA com a configuração fornecida e a associa ao portfólio de negócios. A conta será configurada com o método de pagamento e as configurações de negócios especificados.

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. A criação de contas pode ter limitações de taxa adicionais para prevenir abusos.

  

Lógica de Negócios:

-   O nome da conta deve ser único dentro do portfólio de negócios
    
-   O método de pagamento deve ser válido e ativo
    
-   O negócio deve ter permissões apropriadas para a criação de WABA
    
-   A conta criada estará em estado pendente até que a verificação seja concluída
    

### Sintaxe da solicitação

**POST** /{Version}/{Business-ID}/whatsapp\_business\_accounts

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "name": "My Business WhatsApp Account",  "currency": "USD",  "timezone_id": 1}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_creation": {    "summary": "Successful WABA creation",    "value": {      "id": "1234567890123456",      "payment_account_id": "9876543210987654"    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Versão da Graph API a ser usada para essa solicitação. Determina o comportamento da API e os recursos disponíveis.

Business-IDstring·obrigatório

Seu ID de portfólio de negócios. Esse ID pode ser encontrado no Meta Business Suite ou por meio das APIs de gerenciamento de negócios.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessAccountCreationRequest

Mostrar atributos secundários

* * *

WhatsAppBusinessAccountCreationRequest

* * *

namestring·obrigatório

Nome legível por humanos para a Conta de Negócios do WhatsApp

* * *

primary\_funding\_idstring

ID da fonte de financiamento primária (cartão de crédito ou crédito estendido)

* * *

purchase\_order\_numberstring

Número do pedido de compra para referência de fatura

* * *

currencystring

Código da moeda para faturamento (formato ISO 4217)

* * *

timezone\_idinteger

ID do fuso horário da conta

* * *

business\_typeWhatsAppBusinessType

Tipo de Conta de Negócios do WhatsApp

* * *

on\_behalf\_of\_business\_idstring

ID da Empresa ao criar conta em nome de outra empresa

Respostas

* * *

Crie uma nova Conta de Negócios do WhatsApp sob o portfólio de negócios especificado.

  

Este endpoint cria uma nova WABA com a configuração fornecida e a associa ao portfólio de negócios. A conta será configurada com o método de pagamento e as configurações de negócios especificados.

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. A criação de contas pode ter limitações de taxa adicionais para prevenir abusos.

  

Lógica de Negócios:

-   O nome da conta deve ser único dentro do portfólio de negócios
    
-   O método de pagamento deve ser válido e ativo
    
-   O negócio deve ter permissões apropriadas para a criação de WABA
    
-   A conta criada estará em estado pendente até que a verificação seja concluída
    

200

Conta de Negócios do WhatsApp criada com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessAccountCreationResponse

Mostrar atributos secundários

* * *

WhatsAppBusinessAccountCreationResponse

* * *

idstring·obrigatório

Identificador único para a conta do WhatsApp Business criada

* * *

payment\_account\_idstring·obrigatório

ID da conta de pagamento associada para faturamento

400

Requisição Inválida - Parâmetros inválidos ou requisição malformada

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

401

Não autorizado - Token de acesso inválido ou ausente

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

403

Proibido - Permissões insuficientes ou acesso negado

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

404

Não Encontrado - O ID da empresa não existe ou não está acessível

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

422

Entidade Não Processável - Parâmetros da solicitação são válidos, mas não podem ser processados

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

429

Muitos Pedidos - Limite de taxa excedido

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

500

Erro Interno do Servidor - Erro inesperado do servidor

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "name": "My Business WhatsApp Account",  "currency": "USD",  "timezone_id": 1}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_creation": {    "summary": "Successful WABA creation",    "value": {      "id": "1234567890123456",      "payment_account_id": "9876543210987654"    }  }}
```

## Autenticação

**Esquema**

**Tipo**

**Localização**

bearerAuth

HTTP Bearer

Header: Authorization

### Exemplos de uso

bearerAuth:

Include Authorization: Bearer your-token-here in request headers

### Requisitos de autenticação global

Todos os pontos de extremidade requerem o seguinte:

bearerAuth

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)