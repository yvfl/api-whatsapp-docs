<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-solutions-api -->
<!-- Scraped: 2025-12-20T17:56:20.221Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Parceiros Múltiplos do WhatsApp Business - Soluções de Aplicativos API

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/application/application-solutions-api/v23.0.md/)

Version

v23.0

API para recuperar Soluções de Parceiros Múltiplos do WhatsApp Business associadas a um aplicativo específico.

  

Este endpoint permite que os aplicativos consultem todas as Soluções de Negócios do WhatsApp que eles possuem ou com as quais são parceiros, fornecendo informações abrangentes sobre o status da solução, permissões e detalhes de configuração. Isso é essencial para gerenciar o ciclo de vida da solução e entender as atuais relações de parceria.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Application-ID}/whatsapp\_business\_solutions](#get-version-application-id-whatsapp-business-solutions)

* * *

## GET /{Version}/{Application-ID}/whatsapp\_business\_solutions

Recuperar todas as Soluções de Negócios do WhatsApp associadas ao aplicativo especificado.

Isso inclui soluções de propriedade do aplicativo e soluções em que o aplicativo atua como parceiro.

  

  

Casos de Uso:

-   Recuperar todas as soluções para gerenciamento de portfólio de um aplicativo
    
-   Filtrar soluções por papel de propriedade (proprietário vs parceiro)
    
-   Monitorar o ciclo de vida da solução e alterações de status em várias soluções
    
-   Verificar a configuração da solução antes das operações de integração comercial
    
-   Verificar solicitações de aprovação pendentes e transições de status
    

  

  

Filtragem:

Use o parâmetro role para filtrar soluções pela relação do aplicativo:

-   OWNER: Somente soluções de propriedade deste aplicativo
    
-   PARTNER: Somente soluções em que este aplicativo é parceiro
    
-   Sem parâmetro de papel: Todas as soluções (tanto de propriedade quanto parceiras)
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os detalhes da solução podem ser armazenados em cache por curtos períodos, mas as informações de status podem mudar com frequência durante as transições. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{Application-ID}/whatsapp\_business\_solutions

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Application-ID}/whatsapp_business_solutions' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_solutions": {    "summary": "Application with multiple solutions (owner and partner)",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "E-commerce Integration Solution",          "status": "ACTIVE",          "status_for_pending_request": "NONE",          "owner_app": {            "id": "9876543210987654",            "name": "Solution Partner App"          },          "owner_permissions": {            "0": "MANAGE",            "1": null,            "2": null,            "3": null          }        },        "1": {          "id": "2345678901234567",          "name": "Customer Support Solution",          "status": "DRAFT",          "status_for_pending_request": "PENDING_ACTIVATION"        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_solution?after=MTAxNTExOTQ1MjAwNzI5NDE"      }    }  },  "owner_only_solutions": {    "summary": "Application as owner only (with role=OWNER filter)",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "E-commerce Integration Solution",          "status": "ACTIVE",          "status_for_pending_request": "NONE"        }      },      "paging": {        "cursors": {}      }    }  },  "empty_results": {    "summary": "No solutions found for application",    "value": {      "data": [],      "paging": {        "cursors": {}      }    }  }}
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

Seu ID de Aplicativo da Meta. Esse ID pode ser encontrado no Painel de Aplicativos e representa o aplicativo para o qual você deseja recuperar Soluções de Parceiros Associados.

Query Parameters

* * *

roleWhatsAppBusinessSolutionApplicationRole

Filtre as soluções pelo papel de relacionamento do aplicativo. Se não especificado, todas as soluções (tanto de propriedade quanto parceiras) serão retornadas.

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (nome, status, status\_for\_pending\_request). Campos disponíveis: id, nome, status, status\_for\_pending\_request, owner\_app, owner\_permissions

limitinteger \[min: 1, max: 100\]

Número máximo de soluções a serem retornadas em uma solicitação única. O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use isso para obter a próxima página de resultados.

beforestring

Cursor para paginação. Use isso para obter a página anterior de resultados.

Respostas

* * *

Recuperar todas as Soluções de Negócios do WhatsApp associadas ao aplicativo especificado.

Isso inclui soluções de propriedade do aplicativo e soluções em que o aplicativo atua como parceiro.

  

  

Casos de Uso:

-   Recuperar todas as soluções para gerenciamento de portfólio de um aplicativo
    
-   Filtrar soluções por papel de propriedade (proprietário vs parceiro)
    
-   Monitorar o ciclo de vida da solução e alterações de status em várias soluções
    
-   Verificar a configuração da solução antes das operações de integração comercial
    
-   Verificar solicitações de aprovação pendentes e transições de status
    

  

  

Filtragem:

Use o parâmetro role para filtrar soluções pela relação do aplicativo:

-   OWNER: Somente soluções de propriedade deste aplicativo
    
-   PARTNER: Somente soluções em que este aplicativo é parceiro
    
-   Sem parâmetro de papel: Todas as soluções (tanto de propriedade quanto parceiras)
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os detalhes da solução podem ser armazenados em cache por curtos períodos, mas as informações de status podem mudar com frequência durante as transições. Implemente estratégias de invalidação de cache apropriadas.

200

Recuperadas com sucesso Soluções de Múltiplos Parceiros para o aplicativo

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolutionsResponse

Mostrar atributos secundários

* * *

WhatsAppBusinessSolutionsResponse

* * *

dataarray of WhatsAppBusinessSolution

Matriz de Soluções de Parcerias Múltiplas

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

previousstring

URL do endpoint da API do Graph para a página anterior de dados

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Application-ID}/whatsapp_business_solutions' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_solutions": {    "summary": "Application with multiple solutions (owner and partner)",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "E-commerce Integration Solution",          "status": "ACTIVE",          "status_for_pending_request": "NONE",          "owner_app": {            "id": "9876543210987654",            "name": "Solution Partner App"          },          "owner_permissions": {            "0": "MANAGE",            "1": null,            "2": null,            "3": null          }        },        "1": {          "id": "2345678901234567",          "name": "Customer Support Solution",          "status": "DRAFT",          "status_for_pending_request": "PENDING_ACTIVATION"        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_solution?after=MTAxNTExOTQ1MjAwNzI5NDE"      }    }  },  "owner_only_solutions": {    "summary": "Application as owner only (with role=OWNER filter)",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "E-commerce Integration Solution",          "status": "ACTIVE",          "status_for_pending_request": "NONE"        }      },      "paging": {        "cursors": {}      }    }  },  "empty_results": {    "summary": "No solutions found for application",    "value": {      "data": [],      "paging": {        "cursors": {}      }    }  }}
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