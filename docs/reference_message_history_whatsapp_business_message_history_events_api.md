<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/message-history/whatsapp-business-message-history-events-api -->
<!-- Scraped: 2025-12-20T17:58:24.308Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Histórico de Eventos de Mensagens do WhatsApp Business

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/message-history/whatsapp-business-message-history-events-api/v23.0.md/)

Version

v23.0

API para recuperar eventos de histórico de mensagens e ocorrências de status de entrega do WhatsApp Business.

Este endpoint permite que empresas recuperem eventos detalhados de status de entrega de mensagens para entradas específicas de histórico de mensagens, incluindo transições de status de entrega, carimbos de data e hora e informações de aplicativos.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Message-History-ID}/events](#get-version-message-history-id-events)

* * *

## GET /{Version}/{Message-History-ID}/events

Recupere eventos de status de entrega de mensagens paginados para uma entrada de histórico de mensagens específica,

incluindo ocorrências de status de entrega, carimbos de data e hora e informações do aplicativo.

  

  

Casos de Uso:

-   Acompanhe eventos de status de entrega de mensagens detalhados e transições
    
-   Monitore os carimbos de data e hora das ocorrências de status de entrega
    
-   Recupere informações do aplicativo para eventos de entrega
    
-   Depure problemas de entrega de mensagens e alterações de status
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os eventos de histórico de mensagens podem ser armazenados em cache por curtos períodos, mas os eventos de status de entrega podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

  

  

Paginação:

Este endpoint suporta paginação baseada em cursor. Use os cursors after e before da resposta para navegar pelos resultados.

### Sintaxe da solicitação

**GET** /{Version}/{Message-History-ID}/events

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Message-History-ID}/events' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "message_history_events": {    "summary": "Message history events with delivery status occurrences",    "value": {      "data": {        "0": {          "cursor": "MTAxNTExOTQ1MjAwNzI5NDE=",          "node": {            "id": "2345678901234567",            "delivery_status": "SENT",            "occurrence_timestamp": 1640995200,            "status_timestamp": 1640995205,            "application": {              "id": "9876543210987654",              "name": "WhatsApp Business API Client"            }          }        },        "1": {          "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",          "node": {            "id": "3456789012345678",            "delivery_status": "DELIVERED",            "occurrence_timestamp": 1640995260,            "status_timestamp": 1640995265,            "application": {              "id": "9876543210987654",              "name": "WhatsApp Business API Client"            }          }        },        "2": {          "cursor": "MTAxNTExOTQ1MjAwNzI5NDM=",          "node": {            "id": "4567890123456789",            "delivery_status": "READ",            "occurrence_timestamp": 1640995320,            "status_timestamp": 1640995325,            "application": {              "id": "9876543210987654",              "name": "WhatsApp Business API Client"            }          }        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDM=",          "before": "MTAxNTExOTQ1MjAwNzI5NDE="        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/events?after=MTAxNTExOTQ1MjAwNzI5NDM"      }    }  },  "filtered_by_status": {    "summary": "Message history events filtered by delivery status",    "value": {      "data": {        "0": {          "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",          "node": {            "id": "3456789012345678",            "delivery_status": "DELIVERED",            "occurrence_timestamp": 1640995260,            "status_timestamp": 1640995265,            "application": {              "id": "9876543210987654",              "name": "WhatsApp Business API Client"            }          }        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDI=",          "before": "MTAxNTExOTQ1MjAwNzI5NDI="        }      }    }  }}
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

Message-History-IDstring·obrigatório

Seu ID de Histórico de Mensagens do WhatsApp Business. Esse ID é fornecido quando você recupera o histórico de mensagens e pode ser encontrado por meio das APIs de histórico de mensagens.

Query Parameters

* * *

status\_filterWhatsAppMessageDeliveryStatus

Filtrar resultados por status de entrega específico. Quando fornecido, apenas eventos com esse status de entrega serão retornados.

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (cursor, node{id,delivery\_status,occurrence\_timestamp}). Campos disponíveis: cursor, node{id,delivery\_status,error\_description,occurrence\_timestamp,status\_timestamp,application}

limitinteger \[min: 1, max: 100\]

Número máximo de eventos de histórico de mensagens para retornar por página.

O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use isso para obter a próxima página de resultados.

Esse valor vem do campo paging.cursors.after em respostas anteriores.

beforestring

Cursor para paginação. Use isso para obter a página anterior de resultados.

Esse valor vem do campo paging.cursors.before em respostas anteriores.

Respostas

* * *

Recupere eventos de status de entrega de mensagens paginados para uma entrada de histórico de mensagens específica,

incluindo ocorrências de status de entrega, carimbos de data e hora e informações do aplicativo.

  

  

Casos de Uso:

-   Acompanhe eventos de status de entrega de mensagens detalhados e transições
    
-   Monitore os carimbos de data e hora das ocorrências de status de entrega
    
-   Recupere informações do aplicativo para eventos de entrega
    
-   Depure problemas de entrega de mensagens e alterações de status
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os eventos de histórico de mensagens podem ser armazenados em cache por curtos períodos, mas os eventos de status de entrega podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

  

  

Paginação:

Este endpoint suporta paginação baseada em cursor. Use os cursors after e before da resposta para navegar pelos resultados.

200

Histórico de eventos de mensagens do WhatsApp recuperado com sucesso

Tipo de conteúdo:application/json

Esquema:MessageHistoryEventsResponse

Mostrar atributos secundários

* * *

MessageHistoryEventsResponse

* * *

dataarray of WhatsAppMessageHistoryEventsEdge

Matriz de bordas de eventos de histórico de mensagens

Mostrar atributos secundários

* * *

data\[\]WhatsAppMessageHistoryEventsEdge

Borda contendo ocorrência de status de entrega de mensagem com cursor de paginação

Mostrar atributos secundários

* * *

cursorstring

Cursor de paginação para essa borda

* * *

nodeWhatsAppBusinessMessageDeliveryStatusOccurrence

Ocorrência de status de entrega de mensagem com informações detalhadas do evento

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para a ocorrência do status de entrega da mensagem

* * *

delivery\_statusWhatsAppMessageDeliveryStatus

Status de entrega de mensagem

* * *

error\_descriptionstring

Descrição do erro se a entrega encontrou um erro

* * *

occurrence\_timestampinteger (int64)·obrigatório

Carimbo de data e hora Unix quando a ocorrência do status de entrega aconteceu

* * *

status\_timestampinteger (int64)

Carimbo de data e hora Unix quando o status foi registrado

* * *

applicationApplicationNode

Aplicativo da Meta que processou o evento de status de entrega

Mostrar atributos secundários

* * *

idstring

Identificador único para o aplicativo Meta

* * *

namestring

Nome do aplicativo Meta

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

Não Encontrado - O ID do Histórico de Mensagens não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Message-History-ID}/events' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "message_history_events": {    "summary": "Message history events with delivery status occurrences",    "value": {      "data": {        "0": {          "cursor": "MTAxNTExOTQ1MjAwNzI5NDE=",          "node": {            "id": "2345678901234567",            "delivery_status": "SENT",            "occurrence_timestamp": 1640995200,            "status_timestamp": 1640995205,            "application": {              "id": "9876543210987654",              "name": "WhatsApp Business API Client"            }          }        },        "1": {          "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",          "node": {            "id": "3456789012345678",            "delivery_status": "DELIVERED",            "occurrence_timestamp": 1640995260,            "status_timestamp": 1640995265,            "application": {              "id": "9876543210987654",              "name": "WhatsApp Business API Client"            }          }        },        "2": {          "cursor": "MTAxNTExOTQ1MjAwNzI5NDM=",          "node": {            "id": "4567890123456789",            "delivery_status": "READ",            "occurrence_timestamp": 1640995320,            "status_timestamp": 1640995325,            "application": {              "id": "9876543210987654",              "name": "WhatsApp Business API Client"            }          }        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDM=",          "before": "MTAxNTExOTQ1MjAwNzI5NDE="        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/events?after=MTAxNTExOTQ1MjAwNzI5NDM"      }    }  },  "filtered_by_status": {    "summary": "Message history events filtered by delivery status",    "value": {      "data": {        "0": {          "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",          "node": {            "id": "3456789012345678",            "delivery_status": "DELIVERED",            "occurrence_timestamp": 1640995260,            "status_timestamp": 1640995265,            "application": {              "id": "9876543210987654",              "name": "WhatsApp Business API Client"            }          }        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDI=",          "before": "MTAxNTExOTQ1MjAwNzI5NDI="        }      }    }  }}
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