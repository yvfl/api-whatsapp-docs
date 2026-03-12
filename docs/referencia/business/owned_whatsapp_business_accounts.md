<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts -->
<!-- Scraped: 2026-03-10T21:54:49.929Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Gerenciamento do WhatsApp Business - Contas de Negócios do WhatsApp de Propriedade

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts/v23.0.md/)

Version

v23.0

API para recuperar contas de negócios do WhatsApp de propriedade de um negócio específico.

Este endpoint permite que os negócios recuperem informações abrangentes sobre suas contas de negócios do WhatsApp de propriedade, incluindo detalhes da conta, status e configuração.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Business-ID}/owned\_whatsapp\_business\_accounts](#get-version-business-id-owned-whatsapp-business-accounts)

* * *

## GET /{Version}/{Business-ID}/owned\_whatsapp\_business\_accounts

Recuperar contas do WhatsApp Business de propriedade do negócio especificado. Este endpoint fornece informações abrangentes sobre todas as WABAs de propriedade do negócio, incluindo detalhes da conta, configuração e informações de status.

  

Casos de uso:

-   Recuperar todas as contas do WhatsApp Business de propriedade de um negócio
    
-   Filtrar contas por tipo de negócio
    
-   Encontrar contas específicas por ID
    
-   Monitorar carteira de negócios de contas do WhatsApp Business
    
-   Gerenciar acesso e permissões em várias WABAs
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

As informações da conta podem ser armazenadas em cache por curtos períodos, mas o status e a configuração podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{Business-ID}/owned\_whatsapp\_business\_accounts

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/owned_whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_accounts": {    "summary": "Multiple owned WhatsApp Business Accounts",    "value": {      "data": {        "0": {          "id": "104996122399160",          "name": "Lucky Shrub",          "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",          "timezone_id": "1"        },        "1": {          "id": "102290129340398",          "name": "Test WhatsApp Business Account",          "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",          "timezone_id": "1"        }      },      "paging": {        "cursors": {          "after": "QVFIUjBrRUs5QVJuUDhDSmZARMlc2dXRYNXBmMjMtRUt3SmFlbk9PRk43azdiN1VQaW1HcnRkejFzZATNoNDdTdGVWMDhjamVvY25HWnI4WjIzX0hYSk40NHhB",          "before": "QVFIUnpPVXRnY3BPN19rTVItOG51T291YURjV3BaeXRXU29adDVreS04ekhSNl9YWTlfdmN3SHlyTEk1a2FRdnlWanBqM1FuQm1uZAHhfYl9UMTNCYjM3MWV3"        }      }    }  },  "single_account": {    "summary": "Single owned WhatsApp Business Account",    "value": {      "data": {        "0": {          "id": "104996122399160",          "name": "Lucky Shrub",          "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",          "timezone_id": "1"        }      }    }  },  "empty_result": {    "summary": "No owned accounts found",    "value": {      "data": []    }  }}
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

Seu ID de Negócios. Esse ID representa o portfólio de negócios que é proprietário das Contas de Negócios do WhatsApp e pode ser encontrado nas configurações do Business Manager.

Query Parameters

* * *

business\_typearray of WhatsAppBusinessType

Filtre contas por tipo de negócio. É possível especificar vários tipos como valores separados por vírgula.

Use isso para filtrar entre contas de empresas e pequenas e médias empresas.

afterstring

Cursor para paginação para frente. Use o cursor da resposta anterior para obter a próxima página de resultados.

firstinteger \[min: 1, max: 100\]

Número de resultados a serem retornados na paginação para frente. O valor máximo é 100.

Use com o cursor 'after' para paginação para frente.

beforestring

Cursor para paginação para trás. Use o cursor da resposta anterior para obter a página anterior de resultados.

lastinteger \[min: 1, max: 100\]

Número de resultados a serem retornados na paginação reversa. O valor máximo é 100.

Use com o cursor 'before' para paginação reversa.

findstring

Encontre uma conta de negócios do WhatsApp específica por ID dentro das contas de propriedade.

Use isso para localizar rapidamente uma conta específica.

Respostas

* * *

Recuperar contas do WhatsApp Business de propriedade do negócio especificado. Este endpoint fornece informações abrangentes sobre todas as WABAs de propriedade do negócio, incluindo detalhes da conta, configuração e informações de status.

  

Casos de uso:

-   Recuperar todas as contas do WhatsApp Business de propriedade de um negócio
    
-   Filtrar contas por tipo de negócio
    
-   Encontrar contas específicas por ID
    
-   Monitorar carteira de negócios de contas do WhatsApp Business
    
-   Gerenciar acesso e permissões em várias WABAs
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

As informações da conta podem ser armazenadas em cache por curtos períodos, mas o status e a configuração podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

200

Contas de negócios do WhatsApp de propriedade recuperadas com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessAccountsConnection

Mostrar atributos secundários

* * *

WhatsAppBusinessAccountsConnection

* * *

dataarray of WhatsAppBusinessAccount·obrigatório

Matriz de registros de contas de negócios do WhatsApp de propriedade

Mostrar atributos secundários

* * *

data\[\]WhatsAppBusinessAccount

Conta do WhatsApp Business de propriedade do negócio

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para a Conta de Negócios do WhatsApp

* * *

namestring·obrigatório

Nome legível por humanos da Conta de Negócios do WhatsApp

* * *

message\_template\_namespacestring·obrigatório

Identificador de namespace para modelos de mensagem associados a esta conta

* * *

timezone\_idstring·obrigatório

Identificador de fuso horário para a Conta de Negócios do WhatsApp

* * *

pagingCursorPaging

Informações de paginação baseada em cursor

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

beforestring

Cursor apontando para o início da página de dados que foi retornada

* * *

afterstring

Cursor apontando para o final da página de dados que foi retornada

* * *

nextstring

URL para a próxima página de resultados

* * *

previousstring

URL para a página anterior de resultados

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/owned_whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_accounts": {    "summary": "Multiple owned WhatsApp Business Accounts",    "value": {      "data": {        "0": {          "id": "104996122399160",          "name": "Lucky Shrub",          "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",          "timezone_id": "1"        },        "1": {          "id": "102290129340398",          "name": "Test WhatsApp Business Account",          "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",          "timezone_id": "1"        }      },      "paging": {        "cursors": {          "after": "QVFIUjBrRUs5QVJuUDhDSmZARMlc2dXRYNXBmMjMtRUt3SmFlbk9PRk43azdiN1VQaW1HcnRkejFzZATNoNDdTdGVWMDhjamVvY25HWnI4WjIzX0hYSk40NHhB",          "before": "QVFIUnpPVXRnY3BPN19rTVItOG51T291YURjV3BaeXRXU29adDVreS04ekhSNl9YWTlfdmN3SHlyTEk1a2FRdnlWanBqM1FuQm1uZAHhfYl9UMTNCYjM3MWV3"        }      }    }  },  "single_account": {    "summary": "Single owned WhatsApp Business Account",    "value": {      "data": {        "0": {          "id": "104996122399160",          "name": "Lucky Shrub",          "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",          "timezone_id": "1"        }      }    }  },  "empty_result": {    "summary": "No owned accounts found",    "value": {      "data": []    }  }}
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