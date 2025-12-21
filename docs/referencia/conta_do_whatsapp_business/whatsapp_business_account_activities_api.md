<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-activities-api -->
<!-- Scraped: 2025-12-20T18:00:58.239Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Atividades da Conta de Negócios do WhatsApp

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-activities-api/v23.0.md/)

Version

v23.0

API para recuperar logs de atividades e rastros de auditoria da Conta de Negócios do WhatsApp.

Este endpoint permite que as empresas monitorem e rastreiem atividades realizadas em suas Contas de Negócios do WhatsApp, incluindo ações administrativas, alterações de configuração e eventos operacionais. Isso é essencial para conformidade, auditoria e monitoramento do uso da conta de negócios.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{WABA-ID}/activities](#get-version-waba-id-activities)

* * *

## GET /{Version}/{WABA-ID}/activities

Recuperar logs de atividades e rastros de auditoria para uma Conta de Negócios do WhatsApp.

Este endpoint retorna uma lista cronológica de atividades realizadas na conta,

incluindo ações administrativas, alterações de configuração e eventos operacionais.

  

Casos de Uso:

-   Monitorar alterações de configuração da conta e ações administrativas
    
-   Gerar relatórios de conformidade e auditoria para requisitos regulamentares
    
-   Rastrear atividades de usuários e modificações de permissões
    
-   Investigar incidentes de segurança e tentativas de acesso não autorizadas
    
-   Monitorar padrões de uso da API e eventos operacionais
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de retry apropriada com backoff exponencial.

  

Cache:

Os dados de atividade podem ser armazenados em cache por curtos períodos, mas as atividades recentes podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{WABA-ID}/activities

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/activities' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "recent_activities": {    "summary": "Recent account activities",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "activity_type": "PHONE_NUMBER_VERIFIED",          "timestamp": "2023-10-15T14:30:00Z",          "actor_type": "USER",          "actor_id": "9876543210987654",          "actor_name": "John Smith",          "description": "Phone number +1234567890 was successfully verified",          "details": {            "phone_number": "+1234567890",            "verification_method": "SMS"          },          "ip_address": "192.168.1.100"        },        "1": {          "id": "1234567890123457",          "activity_type": "USER_ADDED",          "timestamp": "2023-10-15T13:15:00Z",          "actor_type": "ADMIN",          "actor_id": "1111222233334444",          "actor_name": "Admin User",          "description": "New user Jane Doe was added to the account",          "details": {            "user_id": "5555666677778888",            "user_name": "Jane Doe",            "role": "DEVELOPER"          }        }      },      "paging": {        "cursors": {          "after": "NDMyNzQyODI3OTQw",          "before": "MTAxNTExOTQ1MjAwNzI5NDE="        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/activities?limit=25&after=NDMyNzQyODI3OTQw"      }    }  },  "filtered_activities": {    "summary": "Filtered activities by type",    "value": {      "data": {        "0": {          "id": "1234567890123458",          "activity_type": "TEMPLATE_CREATED",          "timestamp": "2023-10-14T16:45:00Z",          "actor_type": "USER",          "actor_id": "9876543210987654",          "actor_name": "Marketing Team",          "description": "New message template 'welcome_message' was created",          "details": {            "template_name": "welcome_message",            "template_language": "en_US",            "template_category": "MARKETING"          }        }      }    }  }}
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

Seu ID da Conta de Negócios do WhatsApp. Esse ID pode ser encontrado no Gerenciador do WhatsApp ou por meio das APIs de gerenciamento de contas de negócios.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (id, activity\_type, timestamp, actor\_type). Campos disponíveis: id, activity\_type, timestamp, actor\_type, actor\_id, actor\_name, description, details, ip\_address, user\_agent

limitinteger \[min: 1, max: 100\]

Número máximo de registros de atividade para retornar por página. O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use isso para obter a próxima página de resultados.

beforestring

Cursor para paginação. Use isso para obter a página anterior de resultados.

sincestring

Carimbo de data/hora Unix ou string de data ISO 8601. Retorna apenas atividades que ocorreram após esse tempo.

untilstring

Carimbo de data/hora Unix ou string de data ISO 8601. Retorna apenas atividades que ocorreram antes desse horário.

activity\_typestring

Filtrar atividades por tipo. Pode ser um tipo único ou uma lista de tipos separados por vírgula.

Respostas

* * *

Recuperar logs de atividades e rastros de auditoria para uma Conta de Negócios do WhatsApp.

Este endpoint retorna uma lista cronológica de atividades realizadas na conta,

incluindo ações administrativas, alterações de configuração e eventos operacionais.

  

Casos de Uso:

-   Monitorar alterações de configuração da conta e ações administrativas
    
-   Gerar relatórios de conformidade e auditoria para requisitos regulamentares
    
-   Rastrear atividades de usuários e modificações de permissões
    
-   Investigar incidentes de segurança e tentativas de acesso não autorizadas
    
-   Monitorar padrões de uso da API e eventos operacionais
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de retry apropriada com backoff exponencial.

  

Cache:

Os dados de atividade podem ser armazenados em cache por curtos períodos, mas as atividades recentes podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

200

Atividades da Conta de Negócios do WhatsApp recuperadas com sucesso

Tipo de conteúdo:application/json

Esquema:ActivityList

Mostrar atributos secundários

* * *

ActivityList

* * *

dataarray of WhatsAppBusinessAccountActivity·obrigatório

Matriz de registros de atividades

Mostrar atributos secundários

* * *

data\[\]WhatsAppBusinessAccountActivity

Registro de atividades da Conta do WhatsApp Business

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único do registro de atividade

* * *

activity\_typeActivityType

Tipo de atividade realizada na Conta de Negócios do WhatsApp

* * *

timestampstring (date-time)·obrigatório

Carimbo de data e hora ISO 8601 quando a atividade ocorreu

* * *

actor\_typeActorType

Tipo de entidade que realizou a atividade

* * *

actor\_idstring

ID do usuário ou sistema que realizou a atividade

* * *

actor\_namestring

Nome do usuário ou sistema que realizou a atividade

* * *

descriptionstring

Descrição legível por humanos da atividade

* * *

detailsobject

Detalhes estruturados adicionais sobre a atividade

* * *

ip\_addressstring

Endereço IP a partir do qual a atividade foi realizada (quando disponível)

* * *

user\_agentstring

Cadeia de agente do usuário do cliente que realizou a atividade

* * *

pagingPaging

Informações de paginação para resultados de atividades

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

URL do endpoint da API do Graph para a página anterior de resultados

* * *

nextstring

URL do endpoint da API do Graph para a próxima página de resultados

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

Não Encontrado - O ID da Conta de Negócios do WhatsApp não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/activities' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "recent_activities": {    "summary": "Recent account activities",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "activity_type": "PHONE_NUMBER_VERIFIED",          "timestamp": "2023-10-15T14:30:00Z",          "actor_type": "USER",          "actor_id": "9876543210987654",          "actor_name": "John Smith",          "description": "Phone number +1234567890 was successfully verified",          "details": {            "phone_number": "+1234567890",            "verification_method": "SMS"          },          "ip_address": "192.168.1.100"        },        "1": {          "id": "1234567890123457",          "activity_type": "USER_ADDED",          "timestamp": "2023-10-15T13:15:00Z",          "actor_type": "ADMIN",          "actor_id": "1111222233334444",          "actor_name": "Admin User",          "description": "New user Jane Doe was added to the account",          "details": {            "user_id": "5555666677778888",            "user_name": "Jane Doe",            "role": "DEVELOPER"          }        }      },      "paging": {        "cursors": {          "after": "NDMyNzQyODI3OTQw",          "before": "MTAxNTExOTQ1MjAwNzI5NDE="        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/activities?limit=25&after=NDMyNzQyODI3OTQw"      }    }  },  "filtered_activities": {    "summary": "Filtered activities by type",    "value": {      "data": {        "0": {          "id": "1234567890123458",          "activity_type": "TEMPLATE_CREATED",          "timestamp": "2023-10-14T16:45:00Z",          "actor_type": "USER",          "actor_id": "9876543210987654",          "actor_name": "Marketing Team",          "description": "New message template 'welcome_message' was created",          "details": {            "template_name": "welcome_message",            "template_language": "en_US",            "template_category": "MARKETING"          }        }      }    }  }}
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