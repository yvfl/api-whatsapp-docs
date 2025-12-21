<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-connected-client-businesses -->
<!-- Scraped: 2025-12-20T17:56:12.628Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Meta Graph API - Negócios de Clientes Conectados de Aplicativos

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/application/application-connected-client-businesses/v23.0.md/)

Version

v23.0

API para recuperar empresas clientes conectadas associadas a um aplicativo do Meta.

  

Este endpoint permite que os aplicativos recuperem informações sobre empresas que estabeleceram conexões de clientes por meio do aplicativo. Isso é essencial para gerenciar relacionamentos comerciais e entender as configurações de negócios dos clientes.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Application-ID}/connected\_client\_businesses](#get-version-application-id-connected-client-businesses)

* * *

## GET /{Version}/{Application-ID}/connected\_client\_businesses

Recuperar uma lista de empresas de clientes conectadas ao aplicativo especificado.

  

  

Casos de Uso:

-   Monitorar relacionamentos de clientes de negócios-aplicativos
    
-   Verificar configurações de negócios conectados
    
-   Recuperar status e detalhes da conexão de negócios
    
-   Gerenciar acesso e permissões de negócios de clientes
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os dados de conexão de negócios podem ser armazenados em cache por períodos moderados, mas as informações de status podem mudar.

Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{Application-ID}/connected\_client\_businesses

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Application-ID}/connected_client_businesses' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_businesses": {    "summary": "Multiple connected client businesses",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Example Client Business A",          "verification_status": "VERIFIED",          "business_status": "ACTIVE",          "created_time": "2023-01-15T10:30:00Z",          "updated_time": "2023-06-20T14:45:00Z"        },        "1": {          "id": "2345678901234567",          "name": "Example Client Business B",          "verification_status": "PENDING",          "business_status": "PENDING_APPROVAL",          "created_time": "2023-03-10T09:15:00Z",          "updated_time": "2023-03-10T09:15:00Z"        }      },      "paging": {        "cursors": {          "after": "QVFIUjNpUWpVWmRBd0Rn"        },        "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"      }    }  },  "single_business": {    "summary": "Single connected client business",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Example Client Business",          "verification_status": "VERIFIED",          "business_status": "ACTIVE"        }      }    }  },  "empty_response": {    "summary": "No connected client businesses",    "value": {      "data": []    }  }}
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

Application-IDstring·obrigatório

Seu ID de Aplicativo da Meta. Esse ID é fornecido quando você cria o aplicativo e pode ser encontrado no Painel do Aplicativo.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (id, name, verification\_status, business\_status). Campos disponíveis: id, name, verification\_status, business\_status, created\_time, updated\_time

limitinteger \[min: 1, max: 100\]

Número máximo de empresas clientes conectadas para retornar por página. O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use isso para obter a próxima página de resultados.

beforestring

Cursor para paginação. Use isso para obter a página anterior de resultados.

Respostas

* * *

Recuperar uma lista de empresas de clientes conectadas ao aplicativo especificado.

  

  

Casos de Uso:

-   Monitorar relacionamentos de clientes de negócios-aplicativos
    
-   Verificar configurações de negócios conectados
    
-   Recuperar status e detalhes da conexão de negócios
    
-   Gerenciar acesso e permissões de negócios de clientes
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os dados de conexão de negócios podem ser armazenados em cache por períodos moderados, mas as informações de status podem mudar.

Implemente estratégias de invalidação de cache apropriadas.

200

Negócios de clientes conectados recuperados com sucesso

Tipo de conteúdo:application/json

Esquema:ConnectedClientBusinessesResponse

Mostrar atributos secundários

* * *

ConnectedClientBusinessesResponse

* * *

dataarray of ConnectedClientBusiness

Matriz de empresas clientes conectadas

Mostrar atributos secundários

* * *

data\[\]ConnectedClientBusiness

Informações e configuração de negócios de clientes conectados

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para o negócio do cliente conectado

* * *

namestring·obrigatório

Nome do negócio do cliente conectado

* * *

verification\_statusBusinessVerificationStatus

Status de verificação do negócio do cliente conectado

* * *

business\_statusBusinessStatus

Status atual do negócio do cliente conectado

* * *

created\_timestring (date-time)

Carimbo de data e hora em que a conexão comercial foi criada

* * *

updated\_timestring (date-time)

Carimbo de data e hora em que a conexão comercial foi atualizada pela última vez

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

Não Encontrado - O ID da Aplicação não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Application-ID}/connected_client_businesses' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_businesses": {    "summary": "Multiple connected client businesses",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Example Client Business A",          "verification_status": "VERIFIED",          "business_status": "ACTIVE",          "created_time": "2023-01-15T10:30:00Z",          "updated_time": "2023-06-20T14:45:00Z"        },        "1": {          "id": "2345678901234567",          "name": "Example Client Business B",          "verification_status": "PENDING",          "business_status": "PENDING_APPROVAL",          "created_time": "2023-03-10T09:15:00Z",          "updated_time": "2023-03-10T09:15:00Z"        }      },      "paging": {        "cursors": {          "after": "QVFIUjNpUWpVWmRBd0Rn"        },        "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"      }    }  },  "single_business": {    "summary": "Single connected client business",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Example Client Business",          "verification_status": "VERIFIED",          "business_status": "ACTIVE"        }      }    }  },  "empty_response": {    "summary": "No connected client businesses",    "value": {      "data": []    }  }}
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