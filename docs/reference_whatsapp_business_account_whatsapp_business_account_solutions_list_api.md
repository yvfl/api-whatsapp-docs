<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-solutions-list-api -->
<!-- Scraped: 2025-12-20T18:01:06.599Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Lista de Soluções de Conta de Negócios do WhatsApp

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-solutions-list-api/v23.0.md/)

Version

v23.0

API para recuperar Soluções de Múltiplos Parceiros associadas a uma Conta de Negócios do WhatsApp (WABA).

Este endpoint permite que aplicativos autorizados recuperem uma lista de Soluções de Múltiplos Parceiros

associadas a uma Conta de Negócios do WhatsApp específica.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{WABA-ID}/solutions](#get-version-waba-id-solutions)

* * *

## GET /{Version}/{WABA-ID}/solutions

Recupere uma lista paginada de Soluções de Múltiplos Parceiros associadas à Conta de Negócios do WhatsApp especificada. Este endpoint suporta seleção de campos e paginação baseada em cursor para recuperação de dados eficiente.

  

  

Casos de Uso:

-   Descubra Soluções de Múltiplos Parceiros disponíveis para integração de negócios
    
-   Monitore o status e a disponibilidade das soluções em toda a sua WABA
    
-   Recupere detalhes de propriedade e permissão da solução
    
-   Filtrar soluções por campos ou requisitos de status específicos
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

As listagens de soluções podem ser armazenadas em cache por curtos períodos, mas as informações de status podem mudar com frequência durante as transições. Implemente estratégias de invalidação de cache apropriadas.

  

  

Paginação:

Este endpoint suporta paginação baseada em cursor usando os parâmetros limit, after e before. Use o objeto paging nas respostas para navegar pelos conjuntos de resultados.

### Sintaxe da solicitação

**GET** /{Version}/{WABA-ID}/solutions

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/solutions' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_solutions": {    "summary": "Multiple solutions with different statuses",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "E-commerce Integration Solution",          "status": "ACTIVE",          "status_for_pending_request": "NONE",          "owner_app": {            "id": "9876543210987654",            "name": "Solution Partner App"          },          "owner_permissions": {            "0": "MANAGE",            "1": null,            "2": null,            "3": null          }        },        "1": {          "id": "2345678901234567",          "name": "Customer Support Solution",          "status": "DRAFT",          "status_for_pending_request": "NONE"        }      },      "paging": {        "cursors": {          "before": "FAKE_CURSOR_BEFORE_123ABC",          "after": "FAKE_CURSOR_AFTER_456DEF"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/solutions?limit=25&after=FAKE_CURSOR_AFTER_456DEF"      }    }  },  "single_solution": {    "summary": "Single solution with minimal fields",    "value": {      "data": {        "0": {          "id": "3456789012345678",          "name": "Analytics Integration Solution",          "status": "ACTIVE",          "status_for_pending_request": "NONE"        }      },      "paging": {        "cursors": {          "before": "FAKE_CURSOR_BEFORE_789GHI",          "after": "FAKE_CURSOR_AFTER_789GHI"        }      }    }  },  "empty_list": {    "summary": "No solutions found for this WABA",    "value": {      "data": [],      "paging": {        "cursors": {}      }    }  }}
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

WABA-IDstring·obrigatório

ID da Conta de Negócios do WhatsApp para o qual recuperar as Soluções de Parceiros Múltiplos.

Esse ID pode ser encontrado no Gerenciador de Negócios do WhatsApp ou por meio das APIs de gerenciamento do WABA.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (nome, status, status\_for\_pending\_request). Campos disponíveis: id, nome, status, status\_for\_pending\_request, owner\_app, owner\_permissions

limitinteger \[min: 1, max: 100\]

Número máximo de soluções para retornar por página. O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Retorna soluções após essa posição do cursor.

Use o cursor do campo paging.cursors.after da resposta anterior.

beforestring

Cursor para paginação. Retorna soluções antes desta posição do cursor.

Use o cursor do campo paging.cursors.before da resposta anterior.

Respostas

* * *

Recupere uma lista paginada de Soluções de Múltiplos Parceiros associadas à Conta de Negócios do WhatsApp especificada. Este endpoint suporta seleção de campos e paginação baseada em cursor para recuperação de dados eficiente.

  

  

Casos de Uso:

-   Descubra Soluções de Múltiplos Parceiros disponíveis para integração de negócios
    
-   Monitore o status e a disponibilidade das soluções em toda a sua WABA
    
-   Recupere detalhes de propriedade e permissão da solução
    
-   Filtrar soluções por campos ou requisitos de status específicos
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

As listagens de soluções podem ser armazenadas em cache por curtos períodos, mas as informações de status podem mudar com frequência durante as transições. Implemente estratégias de invalidação de cache apropriadas.

  

  

Paginação:

Este endpoint suporta paginação baseada em cursor usando os parâmetros limit, after e before. Use o objeto paging nas respostas para navegar pelos conjuntos de resultados.

200

Lista de Soluções de Múltiplos Parceiros recuperada com sucesso

Tipo de conteúdo:application/json

Esquema:SolutionsList

Mostrar atributos secundários

* * *

SolutionsList

* * *

dataarray of WhatsAppBusinessSolution·obrigatório

Matriz de Soluções de Parcerias Múltiplas associadas à WABA

Mostrar atributos secundários

* * *

data\[\]WhatsAppBusinessSolution

Detalhes e configuração da solução de vários parceiros

Mostrar atributos secundários

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

* * *

pagingPaging

Informações de paginação para paginação baseada em cursor

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

previousstring

URL do endpoint da API do Graph para a página de dados anterior

* * *

nextstring

URL do endpoint da API do Graph para a próxima página de dados

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

Não Encontrado - O ID WABA não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/solutions' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_solutions": {    "summary": "Multiple solutions with different statuses",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "E-commerce Integration Solution",          "status": "ACTIVE",          "status_for_pending_request": "NONE",          "owner_app": {            "id": "9876543210987654",            "name": "Solution Partner App"          },          "owner_permissions": {            "0": "MANAGE",            "1": null,            "2": null,            "3": null          }        },        "1": {          "id": "2345678901234567",          "name": "Customer Support Solution",          "status": "DRAFT",          "status_for_pending_request": "NONE"        }      },      "paging": {        "cursors": {          "before": "FAKE_CURSOR_BEFORE_123ABC",          "after": "FAKE_CURSOR_AFTER_456DEF"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/solutions?limit=25&after=FAKE_CURSOR_AFTER_456DEF"      }    }  },  "single_solution": {    "summary": "Single solution with minimal fields",    "value": {      "data": {        "0": {          "id": "3456789012345678",          "name": "Analytics Integration Solution",          "status": "ACTIVE",          "status_for_pending_request": "NONE"        }      },      "paging": {        "cursors": {          "before": "FAKE_CURSOR_BEFORE_789GHI",          "after": "FAKE_CURSOR_AFTER_789GHI"        }      }    }  },  "empty_list": {    "summary": "No solutions found for this WABA",    "value": {      "data": [],      "paging": {        "cursors": {}      }    }  }}
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