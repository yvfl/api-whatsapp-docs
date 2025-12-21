<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api -->
<!-- Scraped: 2025-12-20T18:05:44.706Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Parceiros Múltiplos do WhatsApp Business - Detalhes da API de Soluções

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api/v23.0.md/)

Version

v23.0

API para recuperar detalhes e informações de configuração da Solução de Parceria Múltipla.

Este endpoint permite que os parceiros de solução recuperem informações abrangentes sobre suas Soluções de Parceria Múltipla, incluindo status, permissões e detalhes de propriedade.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Solution-ID}](#get-version-solution-id)

* * *

## GET /{Version}/{Solution-ID}

Recupere detalhes abrangentes sobre uma Solução de Múltiplos Parceiros, incluindo seu status atual,

transições de status pendentes, informações de propriedade e permissões concedidas.

  

  

Casos de Uso:

-   Monitorar o ciclo de vida da solução e alterações de status
    
-   Verificar a configuração da solução antes do onboarding comercial
    
-   Verificar solicitações de aprovação pendentes e transições de status
    
-   Recuperar detalhes de propriedade e permissão da solução
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os detalhes da solução podem ser armazenados em cache por curtos períodos, mas as informações de status podem mudar com frequência durante as transições. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{Solution-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "active_solution": {    "summary": "Active solution with full details",    "value": {      "id": "1234567890123456",      "name": "E-commerce Integration Solution",      "status": "ACTIVE",      "status_for_pending_request": "NONE",      "owner_app": {        "id": "9876543210987654",        "name": "Solution Partner App"      },      "owner_permissions": {        "0": "MANAGE",        "1": null,        "2": null,        "3": null      }    }  },  "draft_solution": {    "summary": "Draft solution with minimal details",    "value": {      "id": "2345678901234567",      "name": "Customer Support Solution",      "status": "DRAFT",      "status_for_pending_request": "NONE"    }  }}
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

Solution-IDstring·obrigatório

Seu ID de Solução de Múltiplos Parceiros. Esse ID é fornecido quando você cria a solução e pode ser encontrado no Painel do Parceiro ou por meio de APIs de gerenciamento de soluções.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (nome, status, status\_for\_pending\_request). Campos disponíveis: id, nome, status, status\_for\_pending\_request, owner\_app, owner\_permissions

Respostas

* * *

Recupere detalhes abrangentes sobre uma Solução de Múltiplos Parceiros, incluindo seu status atual,

transições de status pendentes, informações de propriedade e permissões concedidas.

  

  

Casos de Uso:

-   Monitorar o ciclo de vida da solução e alterações de status
    
-   Verificar a configuração da solução antes do onboarding comercial
    
-   Verificar solicitações de aprovação pendentes e transições de status
    
-   Recuperar detalhes de propriedade e permissão da solução
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os detalhes da solução podem ser armazenados em cache por curtos períodos, mas as informações de status podem mudar com frequência durante as transições. Implemente estratégias de invalidação de cache apropriadas.

200

Detalhes da Solução de Múltiplos Parceiros recuperados com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolution

Mostrar atributos secundários

* * *

WhatsAppBusinessSolution

* * *

idstring·obrigatório

Identificador único para a Solução de Múltiplos Parceiros

* * *

namestring·obrigatório

Nome legível por humanos da Solução de Múltiplos Parceiros

* * *

statusWhatsAppBusinessSolutionStatus

Status atual efetivo da Solução de Múltiplos Parceiros

Mostrar atributos secundários

* * *

status\_for\_pending\_requestWhatsAppBusinessSolutionPendingStatus

Status de quaisquer solicitações de transição de status de solução pendentes

* * *

owner\_appApplicationNode

Aplicativo da Meta que é proprietário da Solução de Múltiplos Parceiros

Mostrar atributos secundários

* * *

idstring

Identificador único para o aplicativo Meta

* * *

namestring

Nome do aplicativo Meta

* * *

owner\_permissionsarray of WhatsAppBusinessAccountPermissionTask

Lista de permissões da conta comercial do WhatsApp concedidas ao proprietário da solução

Mostrar atributos secundários

* * *

owner\_permissions\[\]WhatsAppBusinessAccountPermissionTask

Tarefas de permissão granular para acesso à conta do WhatsApp Business

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

Não Encontrado - A ID da Solução não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "active_solution": {    "summary": "Active solution with full details",    "value": {      "id": "1234567890123456",      "name": "E-commerce Integration Solution",      "status": "ACTIVE",      "status_for_pending_request": "NONE",      "owner_app": {        "id": "9876543210987654",        "name": "Solution Partner App"      },      "owner_permissions": {        "0": "MANAGE",        "1": null,        "2": null,        "3": null      }    }  },  "draft_solution": {    "summary": "Draft solution with minimal details",    "value": {      "id": "2345678901234567",      "name": "Customer Support Solution",      "status": "DRAFT",      "status_for_pending_request": "NONE"    }  }}
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