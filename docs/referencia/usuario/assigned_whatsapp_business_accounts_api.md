<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/user/assigned-whatsapp-business-accounts-api -->
<!-- Scraped: 2026-03-10T21:56:50.447Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Business - Contas da API do WhatsApp Business atribuídas

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/user/assigned-whatsapp-business-accounts-api/v23.0.md/)

Version

v23.0

API para recuperar contas de negócios do WhatsApp atribuídas a um usuário específico.

Este endpoint permite que os aplicativos recuperem contas de negócios do WhatsApp atribuídas a usuários específicos.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{User-ID}/assigned\_whatsapp\_business\_accounts](#get-version-user-id-assigned-whatsapp-business-accounts)

* * *

## GET /{Version}/{User-ID}/assigned\_whatsapp\_business\_accounts

Recuperar contas do WhatsApp Business atribuídas a um usuário específico.

Este endpoint fornece informações sobre atribuições de contas, permissões e status atual correspondentes ao nó GraphAssignedWhatsAppBusinessAccountsEdge.

  

  

Casos de uso:

-   Recuperar todas as contas do WhatsApp Business atribuídas a um usuário
    
-   Verificar permissões do usuário para contas específicas
    
-   Monitorar o status de atribuição de contas e alterações
    
-   Validar o acesso do usuário antes de realizar operações comerciais
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

As informações de atribuição podem ser armazenadas em cache por curtos períodos, mas as permissões e o status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{User-ID}/assigned\_whatsapp\_business\_accounts

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{User-ID}/assigned_whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_accounts": {    "summary": "User with multiple assigned accounts",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Primary Business Account",          "status": "ACTIVE",          "assignment_date": "2023-10-15T14:30:00Z",          "permissions": {            "0": "MANAGE",            "1": null,            "2": null          },          "business_id": "9876543210987654",          "phone_numbers": {            "0": {              "id": "1234567890",              "display_phone_number": "+1 (555) 123-4567",              "verified_name": "Primary Business",              "status": "CONNECTED"            }          }        },        "1": {          "id": "2345678901234567",          "name": "Secondary Business Account",          "status": "ACTIVE",          "assignment_date": "2023-10-20T09:15:00Z",          "permissions": {            "0": "VIEW_INSIGHTS",            "1": null          },          "business_id": "8765432109876543"        }      }    }  },  "single_account": {    "summary": "User with single assigned account",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Business Account",          "status": "ACTIVE",          "assignment_date": "2023-10-15T14:30:00Z",          "permissions": [            "FULL_CONTROL"          ],          "business_id": "9876543210987654"        }      }    }  },  "no_accounts": {    "summary": "User with no assigned accounts",    "value": {      "data": []    }  }}
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

User-IDstring·obrigatório

O ID do usuário para o qual recuperar contas do WhatsApp Business atribuídas.

Isso deve ser um ID de usuário válido dentro da sua solução ou parceria.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado,

os campos padrão serão retornados (id, nome, status).

Campos disponíveis: id, nome, status, data\_de\_atribuição, permissões, id\_da\_empresa, números\_de\_telefone

limitinteger \[min: 1, max: 100\]

Número máximo de contas para retornar por página. O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use isso para obter a próxima página de resultados.

beforestring

Cursor para paginação. Use isso para obter a página anterior de resultados.

Respostas

* * *

Recuperar contas do WhatsApp Business atribuídas a um usuário específico.

Este endpoint fornece informações sobre atribuições de contas, permissões e status atual correspondentes ao nó GraphAssignedWhatsAppBusinessAccountsEdge.

  

  

Casos de uso:

-   Recuperar todas as contas do WhatsApp Business atribuídas a um usuário
    
-   Verificar permissões do usuário para contas específicas
    
-   Monitorar o status de atribuição de contas e alterações
    
-   Validar o acesso do usuário antes de realizar operações comerciais
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

As informações de atribuição podem ser armazenadas em cache por curtos períodos, mas as permissões e o status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

200

Contas de negócios do WhatsApp atribuídas recuperadas com sucesso

Tipo de conteúdo:application/json

Esquema:AssignedAccountsResponse

Mostrar atributos secundários

* * *

AssignedAccountsResponse

* * *

dataarray of AssignedWhatsAppBusinessAccount·obrigatório

Lista de contas do WhatsApp Business atribuídas

Mostrar atributos secundários

* * *

data\[\]AssignedWhatsAppBusinessAccount

Conta do WhatsApp Business atribuída a um usuário

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para a Conta de Negócios do WhatsApp

* * *

namestring·obrigatório

Nome de exibição da Conta de Negócios do WhatsApp

* * *

statusWhatsAppBusinessAccountStatus·obrigatório

Status atual da Conta de Negócios do WhatsApp

* * *

assignment\_datestring (date-time)

Data e hora em que a conta foi atribuída ao usuário

* * *

permissionsarray of WhatsAppBusinessAccountPermission

Lista de permissões concedidas ao usuário para essa conta

Mostrar atributos secundários

* * *

permissions\[\]WhatsAppBusinessAccountPermission

Nível de permissão para acesso à conta do WhatsApp Business

* * *

business\_idstring

ID da Empresa que é proprietária dessa Conta de Negócios do WhatsApp

* * *

phone\_numbersarray of PhoneNumberInfo

Números de telefone associados a essa Conta de Negócios do WhatsApp

Mostrar atributos secundários

* * *

phone\_numbers\[\]PhoneNumberInfo

Informações do número de telefone para Conta de Negócios do WhatsApp

Mostrar atributos secundários

* * *

idstring

ID do número de telefone

* * *

display\_phone\_numberstring

Número de telefone formatado para exibição

* * *

verified\_namestring

Nome de negócio verificado para este número de telefone

* * *

statusOne of "CONNECTED", "DISCONNECTED", "MIGRATED", "PENDING", "DELETED"

Status do número de telefone

* * *

pagingPagingInfo

Informações de paginação para a resposta

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

beforestring

Cursor para a página anterior

* * *

afterstring

Cursor para a próxima página

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

Não Encontrado - O ID do usuário não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{User-ID}/assigned_whatsapp_business_accounts' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_accounts": {    "summary": "User with multiple assigned accounts",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Primary Business Account",          "status": "ACTIVE",          "assignment_date": "2023-10-15T14:30:00Z",          "permissions": {            "0": "MANAGE",            "1": null,            "2": null          },          "business_id": "9876543210987654",          "phone_numbers": {            "0": {              "id": "1234567890",              "display_phone_number": "+1 (555) 123-4567",              "verified_name": "Primary Business",              "status": "CONNECTED"            }          }        },        "1": {          "id": "2345678901234567",          "name": "Secondary Business Account",          "status": "ACTIVE",          "assignment_date": "2023-10-20T09:15:00Z",          "permissions": {            "0": "VIEW_INSIGHTS",            "1": null          },          "business_id": "8765432109876543"        }      }    }  },  "single_account": {    "summary": "User with single assigned account",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Business Account",          "status": "ACTIVE",          "assignment_date": "2023-10-15T14:30:00Z",          "permissions": [            "FULL_CONTROL"          ],          "business_id": "9876543210987654"        }      }    }  },  "no_accounts": {    "summary": "User with no assigned accounts",    "value": {      "data": []    }  }}
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