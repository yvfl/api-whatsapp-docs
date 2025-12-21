<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/client-whatsapp-business-accounts-api -->
<!-- Scraped: 2025-12-20T17:56:47.442Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Plataforma WhatsApp Business - Contas de Negócios do WhatsApp API

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/business/client-whatsapp-business-accounts-api/v23.0.md/)

Version

v23.0

API para recuperar contas de negócios do WhatsApp (WABAs) compartilhadas com um negócio.

Este endpoint permite que os negócios recuperem informações sobre contas de negócios do WhatsApp que foram compartilhadas com eles por outros negócios ou parceiros de solução.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Business-ID}/client\_whatsapp\_business\_accounts](#get-version-business-id-client-whatsapp-business-accounts)

* * *

## GET /{Version}/{Business-ID}/client\_whatsapp\_business\_accounts

Recuperar uma lista de contas de negócios do WhatsApp que foram compartilhadas com o negócio especificado.

  

Casos de Uso:

-   Monitorar relacionamentos e permissões de WABA compartilhados
    
-   Verificar informações de configuração e status do WABA
    
-   Recuperar detalhes do WABA para integrações de negócios
    
-   Gerenciar configurações de mensagens do WhatsApp para vários negócios
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

As informações do WABA podem ser armazenadas em cache por períodos moderados, mas as informações de status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{Business-ID}/client\_whatsapp\_business\_accounts

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/client_whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_accounts": {    "summary": "Multiple client WhatsApp Business Accounts",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Client Business WABA A",          "account_review_status": "APPROVED",          "currency": "USD",          "country": "US",          "timezone_id": "1",          "business_verification_status": "VERIFIED",          "ownership_type": "CLIENT_OWNED",          "is_enabled_for_insights": true        },        "1": {          "id": "2345678901234567",          "name": "Client Business WABA B",          "account_review_status": "PENDING",          "currency": "EUR",          "country": "DE",          "timezone_id": "5",          "business_verification_status": "PENDING",          "ownership_type": "AGENCY_OWNED",          "is_enabled_for_insights": false        }      },      "paging": {        "cursors": {          "after": "QVFIUjNpUWpVWmRBd0Rn"        },        "next": "https://graph.facebook.com/v23.0/1234567890/client_whatsapp_business_accounts?after=QVFIUjNpUWpVWmRBd0Rn"      }    }  },  "single_account": {    "summary": "Single client WhatsApp Business Account",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Client Business WABA",          "account_review_status": "APPROVED",          "currency": "USD",          "country": "US",          "timezone_id": "1",          "business_verification_status": "VERIFIED",          "ownership_type": "CLIENT_OWNED"        }      }    }  },  "empty_response": {    "summary": "No client WhatsApp Business Accounts",    "value": {      "data": []    }  }}
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

Seu ID de Negócios. Esse ID pode ser encontrado na URL da sua Meta Business Suite ou por meio das APIs de gerenciamento de negócios.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (id, name, currency, timezone\_id).

Campos disponíveis: id, name, account\_review\_status, purchase\_order\_number, audiences, ownership\_type, subscribed\_apps, business\_verification\_status, country, currency, timezone\_id, on\_behalf\_of\_business\_info, schedules, is\_enabled\_for\_insights, dcc\_config, message\_templates, phone\_numbers

business\_typearray of One of "STANDARD", "PREMIUM", "ENTERPRISE"

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

Recuperar uma lista de contas de negócios do WhatsApp que foram compartilhadas com o negócio especificado.

  

Casos de Uso:

-   Monitorar relacionamentos e permissões de WABA compartilhados
    
-   Verificar informações de configuração e status do WABA
    
-   Recuperar detalhes do WABA para integrações de negócios
    
-   Gerenciar configurações de mensagens do WhatsApp para vários negócios
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

As informações do WABA podem ser armazenadas em cache por períodos moderados, mas as informações de status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

200

Contas de negócios do WhatsApp do cliente recuperadas com sucesso

Tipo de conteúdo:application/json

Esquema:ClientWhatsAppBusinessAccountsResponse

Mostrar atributos secundários

* * *

ClientWhatsAppBusinessAccountsResponse

* * *

dataarray of WhatsAppBusinessAccount

Matriz de contas de negócios do WhatsApp de clientes

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

audiencesarray of string

Lista de segmentos de público associados à conta

Mostrar atributos secundários

* * *

audiences\[\]string

* * *

ownership\_typeOwnershipType

Tipo de propriedade para a Conta de Negócios do WhatsApp

* * *

subscribed\_appsarray of SubscribedApp

Lista de aplicações assinadas para esse WABA

Mostrar atributos secundários

* * *

subscribed\_apps\[\]SubscribedApp

Aplicativo inscrito no WABA

Mostrar atributos secundários

* * *

idstring

ID do Aplicativo

* * *

namestring

Nome do aplicativo

* * *

business\_verification\_statusBusinessVerificationStatus

Status de verificação do negócio associado ao WABA

* * *

countrystring

Código do país onde a WABA está registrada

* * *

currencystring

Código da moeda para a WABA

* * *

timezone\_idstring

Identificador de fuso horário para o WABA

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

schedulesarray of BusinessSchedule

Horário de funcionamento e informações de agendamento

Mostrar atributos secundários

* * *

schedules\[\]BusinessSchedule

Informações de horário de funcionamento

Mostrar atributos secundários

* * *

day\_of\_weekOne of "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"

* * *

open\_timestring

Horário de abertura no formato HH:MM

* * *

close\_timestring

Hora de fechamento no formato HH:MM

* * *

is\_enabled\_for\_insightsboolean

Se os insights estão habilitados para esse WABA

* * *

dcc\_configDCCConfig

Configuração de Controle de Dados e Conteúdo

Mostrar atributos secundários

* * *

enabledboolean

Se o DCC está habilitado

* * *

policy\_urlstring

URL para a política de DCC

* * *

message\_templatesarray of MessageTemplate

Modelos de mensagem associados ao WABA

Mostrar atributos secundários

* * *

message\_templates\[\]MessageTemplate

Informações de modelo de mensagem

Mostrar atributos secundários

* * *

idstring

ID do Modelo

* * *

namestring

Nome do modelo

* * *

statusOne of "APPROVED", "PENDING", "REJECTED", "DISABLED"

* * *

phone\_numbersarray of PhoneNumber

Números de telefone associados à WABA

Mostrar atributos secundários

* * *

phone\_numbers\[\]PhoneNumber

Número de telefone associado à WABA

Mostrar atributos secundários

* * *

idstring

ID do número de telefone

* * *

display\_phone\_numberstring

Número de telefone formatado para exibição

* * *

verified\_namestring

Nome de negócio verificado para o número de telefone

* * *

pagingCursorPaging

Informações de paginação baseadas em cursor

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/client_whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_accounts": {    "summary": "Multiple client WhatsApp Business Accounts",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Client Business WABA A",          "account_review_status": "APPROVED",          "currency": "USD",          "country": "US",          "timezone_id": "1",          "business_verification_status": "VERIFIED",          "ownership_type": "CLIENT_OWNED",          "is_enabled_for_insights": true        },        "1": {          "id": "2345678901234567",          "name": "Client Business WABA B",          "account_review_status": "PENDING",          "currency": "EUR",          "country": "DE",          "timezone_id": "5",          "business_verification_status": "PENDING",          "ownership_type": "AGENCY_OWNED",          "is_enabled_for_insights": false        }      },      "paging": {        "cursors": {          "after": "QVFIUjNpUWpVWmRBd0Rn"        },        "next": "https://graph.facebook.com/v23.0/1234567890/client_whatsapp_business_accounts?after=QVFIUjNpUWpVWmRBd0Rn"      }    }  },  "single_account": {    "summary": "Single client WhatsApp Business Account",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Client Business WABA",          "account_review_status": "APPROVED",          "currency": "USD",          "country": "US",          "timezone_id": "1",          "business_verification_status": "VERIFIED",          "ownership_type": "CLIENT_OWNED"        }      }    }  },  "empty_response": {    "summary": "No client WhatsApp Business Accounts",    "value": {      "data": []    }  }}
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