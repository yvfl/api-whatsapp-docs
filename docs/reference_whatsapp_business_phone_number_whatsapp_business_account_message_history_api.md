<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-message-history-api -->
<!-- Scraped: 2025-12-20T18:03:29.065Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Histórico de Mensagens da Conta de Negócios do WhatsApp

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-message-history-api/v23.0.md/)

Version

v23.0

API para recuperar o histórico de mensagens e informações de status de entrega da Conta de Negócios do WhatsApp.

Este endpoint permite que empresas recuperem o histórico de mensagens completo para os números de telefone de suas Contas de Negócios do WhatsApp, incluindo eventos de status de entrega de mensagens, carimbos de data e hora e estados de atualização de webhook.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Phone-Number-ID}/message\_history](#get-version-phone-number-id-message-history)

* * *

## GET /{Version}/{Phone-Number-ID}/message\_history

Recuperar histórico de mensagens paginadas para um número de telefone de conta de negócios do WhatsApp,

incluindo eventos de status de entrega, carimbos de data e hora e informações de atualização de webhook.

  

  

Casos de Uso:

-   Rastrear status de entrega e eventos de mensagens
    
-   Monitorar estados de entrega e atualização de webhook
    
-   Recuperar informações históricas de entrega de mensagens
    
-   Depurar problemas de entrega de mensagens e falhas de webhook
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os dados do histórico de mensagens podem ser armazenados em cache por períodos moderados, mas os eventos de status de entrega podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

  

  

Paginação:

Este endpoint suporta paginação baseada em cursor. Use os cursors after e before da resposta para navegar pelos resultados.

### Sintaxe da solicitação

**GET** /{Version}/{Phone-Number-ID}/message\_history

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_history' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "message_history_with_events": {    "summary": "Message history with delivery status events",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTRGAA==",          "events": {            "data": {              "0": {                "id": "2345678901234567",                "delivery_status": "SENT",                "timestamp": 1640995200,                "webhook_update_state": "DELIVERED",                "application": {                  "id": "9876543210987654"                },                "webhook_uri": "https://example.com/webhook"              },              "1": {                "id": "3456789012345678",                "delivery_status": "DELIVERED",                "timestamp": 1640995260,                "webhook_update_state": "DELIVERED",                "application": {                  "id": "9876543210987654"                },                "webhook_uri": "https://example.com/webhook"              }            }          }        },        "1": {          "id": "4567890123456789",          "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTJHAA==",          "events": {            "data": {              "0": {                "id": "5678901234567890",                "delivery_status": "READ",                "timestamp": 1640995320,                "webhook_update_state": "DELIVERED",                "application": {                  "id": "9876543210987654"                },                "webhook_uri": "https://example.com/webhook"              }            }          }        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",          "before": "MAZDZD"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="      }    }  },  "filtered_by_message_id": {    "summary": "Message history filtered by specific message ID",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTRGAA==",          "events": {            "data": {              "0": {                "id": "2345678901234567",                "delivery_status": "SENT",                "timestamp": 1640995200,                "webhook_update_state": "DELIVERED"              },              "1": {                "id": "3456789012345678",                "delivery_status": "DELIVERED",                "timestamp": 1640995260,                "webhook_update_state": "DELIVERED"              },              "2": {                "id": "4567890123456789",                "delivery_status": "READ",                "timestamp": 1640995320,                "webhook_update_state": "DELIVERED"              }            }          }        }      }    }  }}
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

Phone-Number-IDstring·obrigatório

O ID do número de telefone da sua Conta de Negócios do WhatsApp. Esse ID é fornecido quando você registra o número de telefone e pode ser encontrado no Gerenciador de Negócios do WhatsApp ou por meio de APIs de número de telefone.

Query Parameters

* * *

message\_idstring

Filtrar resultados por ID de mensagem específico do WhatsApp (WAMID). Quando fornecido,

somente o histórico de mensagens para essa mensagem específica será retornado.

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (id, message\_id).

Campos disponíveis: id, message\_id, events{delivery\_status,webhook\_update\_state,timestamp,application,webhook\_uri,error\_description}

limitinteger \[min: 1, max: 100\]

Número máximo de entradas de histórico de mensagens para retornar por página.

O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use isso para obter a próxima página de resultados.

Esse valor vem do campo paging.cursors.after em respostas anteriores.

beforestring

Cursor para paginação. Use isso para obter a página anterior de resultados.

Esse valor vem do campo paging.cursors.before em respostas anteriores.

Respostas

* * *

Recuperar histórico de mensagens paginadas para um número de telefone de conta de negócios do WhatsApp,

incluindo eventos de status de entrega, carimbos de data e hora e informações de atualização de webhook.

  

  

Casos de Uso:

-   Rastrear status de entrega e eventos de mensagens
    
-   Monitorar estados de entrega e atualização de webhook
    
-   Recuperar informações históricas de entrega de mensagens
    
-   Depurar problemas de entrega de mensagens e falhas de webhook
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os dados do histórico de mensagens podem ser armazenados em cache por períodos moderados, mas os eventos de status de entrega podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

  

  

Paginação:

Este endpoint suporta paginação baseada em cursor. Use os cursors after e before da resposta para navegar pelos resultados.

200

Histórico de mensagens da conta do WhatsApp Business recuperado com sucesso

Tipo de conteúdo:application/json

Esquema:MessageHistoryResponse

Mostrar atributos secundários

* * *

MessageHistoryResponse

* * *

dataarray of WhatsAppMessageHistory

Matriz de entradas de histórico de mensagens

Mostrar atributos secundários

* * *

data\[\]WhatsAppMessageHistory

Entrada do histórico de mensagens do WhatsApp com informações de status de entrega

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para a entrada do histórico de mensagens

* * *

message\_idstring·obrigatório

ID de mensagem do WhatsApp (WAMID) para a mensagem

* * *

eventsobject

Eventos e ocorrências de status de entrega de mensagens

Mostrar atributos secundários

* * *

dataarray of MessageDeliveryStatusEvent

Matriz de eventos de status de entrega

Mostrar atributos secundários

* * *

data\[\]MessageDeliveryStatusEvent

Ocorrência de evento de status de entrega de mensagem

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para o evento de status de entrega

* * *

delivery\_statusWhatsAppMessageDeliveryStatus

Status de entrega de mensagem

* * *

webhook\_update\_stateWebhookUpdateState

Estado de entrega de atualização de webhook

* * *

timestampinteger (int64)·obrigatório

Carimbo de data e hora Unix quando o evento de status de entrega ocorreu

* * *

applicationobject

Informações de inscrição para o evento

Mostrar atributos secundários

* * *

idstring

ID do aplicativo que processou o evento

* * *

webhook\_uristring (uri)

URI do Webhook onde o evento foi entregue

* * *

error\_descriptionstring

Descrição do erro se a entrega falhar

* * *

pagingPaginationInfo

Informações de paginação para navegar pelos resultados

Mostrar atributos secundários

* * *

cursorsobject

Cursors de paginação para navegação

Mostrar atributos secundários

* * *

beforestring

Cursor para a página anterior de resultados

* * *

afterstring

Cursor para a próxima página de resultados

* * *

previousstring (uri)

URL para a página anterior de resultados

* * *

nextstring (uri)

URL para a próxima página de resultados

* * *

pagingPaginationInfo

Informações de paginação para navegar pelos resultados

Mostrar atributos secundários

* * *

cursorsobject

Cursors de paginação para navegação

Mostrar atributos secundários

* * *

beforestring

Cursor para a página anterior de resultados

* * *

afterstring

Cursor para a próxima página de resultados

* * *

previousstring (uri)

URL para a página anterior de resultados

* * *

nextstring (uri)

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

Não Encontrado - O ID do número de telefone não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_history' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "message_history_with_events": {    "summary": "Message history with delivery status events",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTRGAA==",          "events": {            "data": {              "0": {                "id": "2345678901234567",                "delivery_status": "SENT",                "timestamp": 1640995200,                "webhook_update_state": "DELIVERED",                "application": {                  "id": "9876543210987654"                },                "webhook_uri": "https://example.com/webhook"              },              "1": {                "id": "3456789012345678",                "delivery_status": "DELIVERED",                "timestamp": 1640995260,                "webhook_update_state": "DELIVERED",                "application": {                  "id": "9876543210987654"                },                "webhook_uri": "https://example.com/webhook"              }            }          }        },        "1": {          "id": "4567890123456789",          "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTJHAA==",          "events": {            "data": {              "0": {                "id": "5678901234567890",                "delivery_status": "READ",                "timestamp": 1640995320,                "webhook_update_state": "DELIVERED",                "application": {                  "id": "9876543210987654"                },                "webhook_uri": "https://example.com/webhook"              }            }          }        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",          "before": "MAZDZD"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="      }    }  },  "filtered_by_message_id": {    "summary": "Message history filtered by specific message ID",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTRGAA==",          "events": {            "data": {              "0": {                "id": "2345678901234567",                "delivery_status": "SENT",                "timestamp": 1640995200,                "webhook_update_state": "DELIVERED"              },              "1": {                "id": "3456789012345678",                "delivery_status": "DELIVERED",                "timestamp": 1640995260,                "webhook_update_state": "DELIVERED"              },              "2": {                "id": "4567890123456789",                "delivery_status": "READ",                "timestamp": 1640995320,                "webhook_update_state": "DELIVERED"              }            }          }        }      }    }  }}
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