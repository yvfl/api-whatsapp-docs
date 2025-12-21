<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/schedules-api -->
<!-- Scraped: 2025-12-20T18:00:15.975Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Conta de Negócios do WhatsApp - API de Agendamentos

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/schedules-api/v23.0.md/)

Version

v23.0

API para gerenciar horários e configurações de agendamento da Conta de Negócios do WhatsApp.

Este endpoint permite que empresas gerenciem a funcionalidade de agendamento para sua Conta de Negócios do WhatsApp,

incluindo a recuperação de horários existentes e a criação de novas configurações de agendamento para mensagens automatizadas,

horários de funcionamento e outras operações baseadas em tempo.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{WABA-ID}/schedules](#get-version-waba-id-schedules)

POST

[/{Version}/{WABA-ID}/schedules](#post-version-waba-id-schedules)

* * *

## GET /{Version}/{WABA-ID}/schedules

Recupere todos os agendamentos associados a uma Conta de Negócios do WhatsApp, incluindo sua configuração, status e detalhes de execução.

  

Casos de Uso:

-   Listar todos os agendamentos em uma Conta de Negócios do WhatsApp
    
-   Monitorar o status e o desempenho dos agendamentos
    
-   Verificar a configuração e os detalhes de tempo dos agendamentos
    
-   Recuperar o histórico de execução e métricas dos agendamentos
    

  

Filtragem:

Você pode filtrar os resultados usando o parâmetro filtragem com condições de filtro codificadas em JSON.

Os filtros suportados incluem status, schedule\_type e is\_active.

  

Ordenação:

Os resultados podem ser ordenados por created\_time ou updated\_time em ordem ascendente ou descendente.

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

Os dados de agendamento podem ser armazenados em cache por curtos períodos, mas as informações de status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{WABA-ID}/schedules

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/schedules' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_schedules": {    "summary": "Multiple schedules with various types",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Business Hours Schedule",          "status": "ACTIVE",          "schedule_type": "BUSINESS_HOURS",          "description": "Standard business operating hours",          "start_time": "09:00",          "end_time": "17:00",          "timezone": "America/New_York",          "days_of_week": {            "0": "MONDAY",            "1": null,            "2": null,            "3": null,            "4": null          },          "created_time": "2024-01-15T10:30:00Z",          "updated_time": "2024-01-20T14:45:00Z",          "is_active": true,          "recurrence_pattern": {            "frequency": "WEEKLY",            "interval": 1          }        },        "1": {          "id": "2345678901234567",          "name": "Weekend Maintenance",          "status": "INACTIVE",          "schedule_type": "MAINTENANCE_WINDOW",          "description": "System maintenance window",          "start_time": "02:00",          "end_time": "04:00",          "timezone": "UTC",          "days_of_week": {            "0": "SATURDAY",            "1": null          },          "created_time": "2024-01-10T08:00:00Z",          "updated_time": "2024-01-15T12:00:00Z",          "is_active": false        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE="        }      }    }  },  "single_schedule": {    "summary": "Single schedule response",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Business Hours Schedule",          "status": "ACTIVE",          "schedule_type": "BUSINESS_HOURS",          "start_time": "09:00",          "end_time": "17:00",          "is_active": true        }      }    }  }}
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

ID da Conta de Negócios do WhatsApp. Esse ID pode ser encontrado no seu Gerenciador do WhatsApp ou por meio das APIs de gerenciamento de negócios.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados. Os campos disponíveis incluem: id, nome, status, tipo\_de\_agendamento, descrição, hora\_de\_início, hora\_de\_fim, fuso\_horário, dias\_da\_semana, hora\_de\_criação, hora\_de\_atualização, ativo, padrão\_de\_recorrência

filteringstring

Matriz de condições de filtro codificada em JSON. Cada filtro deve especificar campo, operador e valor.

Campos suportados: status, schedule\_type, is\_active

sortOne of "created\_time.asc", "created\_time.desc", "updated\_time.asc", "updated\_time.desc"

Campo de ordenação e direção. Formato: nome\_do\_campo.asc ou nome\_do\_campo.desc

Campos suportados: created\_time, updated\_time

limitinteger \[min: 1, max: 100\]

Número máximo de horários para retornar por página

afterstring

Cursor de paginação - recuperar registros após este cursor

beforestring

Cursor de paginação - recuperar registros antes desse cursor

Respostas

* * *

Recupere todos os agendamentos associados a uma Conta de Negócios do WhatsApp, incluindo sua configuração, status e detalhes de execução.

  

Casos de Uso:

-   Listar todos os agendamentos em uma Conta de Negócios do WhatsApp
    
-   Monitorar o status e o desempenho dos agendamentos
    
-   Verificar a configuração e os detalhes de tempo dos agendamentos
    
-   Recuperar o histórico de execução e métricas dos agendamentos
    

  

Filtragem:

Você pode filtrar os resultados usando o parâmetro filtragem com condições de filtro codificadas em JSON.

Os filtros suportados incluem status, schedule\_type e is\_active.

  

Ordenação:

Os resultados podem ser ordenados por created\_time ou updated\_time em ordem ascendente ou descendente.

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

Os dados de agendamento podem ser armazenados em cache por curtos períodos, mas as informações de status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

200

Recuperou com sucesso os horários da conta do WhatsApp Business

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessAccountSchedulesConnection

Mostrar atributos secundários

* * *

WhatsAppBusinessAccountSchedulesConnection

* * *

dataarray of WhatsAppBusinessAccountSchedule·obrigatório

Matriz de registros de agendamento

Mostrar atributos secundários

* * *

data\[\]WhatsAppBusinessAccountSchedule

Configuração e detalhes de agendamento da conta do WhatsApp Business

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para o cronograma

* * *

namestring·obrigatório

Nome legível por humanos para o cronograma

* * *

statusWhatsAppScheduleStatus

Status atual do cronograma

* * *

schedule\_typeWhatsAppScheduleType

Tipo de configuração de agendamento

* * *

descriptionstring

Descrição opcional do propósito da agenda

* * *

start\_timestring (time)

Hora de início da programação no formato HH:MM

* * *

end\_timestring (time)

Hora de término agendada no formato HH:MM

* * *

timezonestring

Identificador de fuso horário para o cronograma

* * *

days\_of\_weekarray of DayOfWeek

Dias da semana em que o cronograma está ativo

Mostrar atributos secundários

* * *

days\_of\_week\[\]DayOfWeek

Dia da semana

* * *

created\_timestring (date-time)

Carimbo de data e hora ISO 8601 quando o cronograma foi criado

* * *

updated\_timestring (date-time)

Carimbo de data e hora ISO 8601 quando o cronograma foi atualizado pela última vez

* * *

is\_activeboolean

Se o cronograma está atualmente ativo

* * *

recurrence\_patternRecurrencePattern

Padrão para agendas recorrentes

Mostrar atributos secundários

* * *

frequencyOne of "DAILY", "WEEKLY", "MONTHLY", "YEARLY"

* * *

intervalinteger \[min: 1\]

Intervalo entre recorrências

* * *

end\_datestring (date)

Data de término do padrão de recorrência

* * *

pagingCursorPaging

Informações de paginação baseada em cursor

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

beforestring

Cursor apontando para o início da página

* * *

afterstring

Cursor apontando para o final da página

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/schedules' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_schedules": {    "summary": "Multiple schedules with various types",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Business Hours Schedule",          "status": "ACTIVE",          "schedule_type": "BUSINESS_HOURS",          "description": "Standard business operating hours",          "start_time": "09:00",          "end_time": "17:00",          "timezone": "America/New_York",          "days_of_week": {            "0": "MONDAY",            "1": null,            "2": null,            "3": null,            "4": null          },          "created_time": "2024-01-15T10:30:00Z",          "updated_time": "2024-01-20T14:45:00Z",          "is_active": true,          "recurrence_pattern": {            "frequency": "WEEKLY",            "interval": 1          }        },        "1": {          "id": "2345678901234567",          "name": "Weekend Maintenance",          "status": "INACTIVE",          "schedule_type": "MAINTENANCE_WINDOW",          "description": "System maintenance window",          "start_time": "02:00",          "end_time": "04:00",          "timezone": "UTC",          "days_of_week": {            "0": "SATURDAY",            "1": null          },          "created_time": "2024-01-10T08:00:00Z",          "updated_time": "2024-01-15T12:00:00Z",          "is_active": false        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE="        }      }    }  },  "single_schedule": {    "summary": "Single schedule response",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Business Hours Schedule",          "status": "ACTIVE",          "schedule_type": "BUSINESS_HOURS",          "start_time": "09:00",          "end_time": "17:00",          "is_active": true        }      }    }  }}
```

* * *

## POST /{Version}/{WABA-ID}/schedules

Criar uma nova configuração de agendamento dentro de uma Conta de Negócios do WhatsApp. Este endpoint permite que as empresas configurem agendamentos automatizados para várias operações, como horários de funcionamento, respostas automatizadas e janelas de manutenção.

  

Casos de Uso:

-   Criar horários de funcionamento para respostas automatizadas
    
-   Configurar janelas de manutenção para operações do sistema
    
-   Configurar campanhas de mensagens automatizadas com temporização
    
-   Estabelecer padrões de agendamento recorrentes para operações comerciais
    

  

Pré-requisitos:

-   A Conta de Negócios do WhatsApp deve ter a funcionalidade de agendamento habilitada
    
-   Permissões apropriadas para gerenciamento de agendamento
    
-   Especificações de fuso horário e formato de tempo válidas
    
-   A empresa deve atender aos requisitos da API do WhatsApp Business
    

  

Fluxo de Processo:

-   Enviar configuração de agendamento com detalhes de temporização e recorrência
    
-   O sistema valida os parâmetros de agendamento e conflitos
    
-   O agendamento é criado e ativado com base na flag is\_active
    
-   Monitorar o status do agendamento por meio do endpoint GET
    

  

Limitação de Taxa:

A criação de agendamento está sujeita a limites de taxa para prevenir abusos.

Os limites de taxa padrão da Graph API também se aplicam.

  

Validação:

-   O horário de início deve ser antes do horário de término
    
-   O fuso horário deve ser um identificador de fuso horário IANA válido
    
-   Os dias da semana devem ser válidos se especificados
    
-   O padrão de recorrência deve ser consistente com o tipo de agendamento
    

### Sintaxe da solicitação

**POST** /{Version}/{WABA-ID}/schedules

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/schedules' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "name": "Business Hours Schedule",  "schedule_type": "BUSINESS_HOURS",  "description": "Standard business operating hours",  "start_time": "09:00",  "end_time": "17:00",  "timezone": "America/New_York",  "days_of_week": {    "0": "MONDAY",    "1": null,    "2": null,    "3": null,    "4": null  },  "is_active": true,  "recurrence_pattern": {    "frequency": "WEEKLY",    "interval": 1  }}'
```

Selecionar código do status

200400401403404409422429500

* * *

```
{  "successful_creation": {    "summary": "Schedule successfully created",    "value": {      "id": "1234567890123456"    }  }}
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

ID da Conta de Negócios do WhatsApp onde o cronograma será criado.

Esse ID pode ser encontrado no seu Gerenciador do WhatsApp ou por meio de APIs de gerenciamento de negócios.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:ScheduleCreateRequest

Mostrar atributos secundários

* * *

ScheduleCreateRequest

* * *

namestring·obrigatório

Nome legível por humanos para o cronograma

* * *

schedule\_typeWhatsAppScheduleType

Tipo de configuração de agendamento

* * *

descriptionstring

Descrição opcional do propósito da agenda

* * *

start\_timestring (time)·obrigatório

Hora de início da programação no formato HH:MM

* * *

end\_timestring (time)·obrigatório

Hora de término agendada no formato HH:MM

* * *

timezonestring

Identificador de fuso horário para o cronograma

* * *

days\_of\_weekarray of DayOfWeek

Dias da semana em que o cronograma está ativo

Mostrar atributos secundários

* * *

days\_of\_week\[\]DayOfWeek

Dia da semana

* * *

is\_activeboolean

Se o cronograma deve estar ativo na criação

* * *

recurrence\_patternRecurrencePattern

Padrão para agendas recorrentes

Mostrar atributos secundários

* * *

frequencyOne of "DAILY", "WEEKLY", "MONTHLY", "YEARLY"

* * *

intervalinteger \[min: 1\]

Intervalo entre recorrências

* * *

end\_datestring (date)

Data de término do padrão de recorrência

Respostas

* * *

Criar uma nova configuração de agendamento dentro de uma Conta de Negócios do WhatsApp. Este endpoint permite que as empresas configurem agendamentos automatizados para várias operações, como horários de funcionamento, respostas automatizadas e janelas de manutenção.

  

Casos de Uso:

-   Criar horários de funcionamento para respostas automatizadas
    
-   Configurar janelas de manutenção para operações do sistema
    
-   Configurar campanhas de mensagens automatizadas com temporização
    
-   Estabelecer padrões de agendamento recorrentes para operações comerciais
    

  

Pré-requisitos:

-   A Conta de Negócios do WhatsApp deve ter a funcionalidade de agendamento habilitada
    
-   Permissões apropriadas para gerenciamento de agendamento
    
-   Especificações de fuso horário e formato de tempo válidas
    
-   A empresa deve atender aos requisitos da API do WhatsApp Business
    

  

Fluxo de Processo:

-   Enviar configuração de agendamento com detalhes de temporização e recorrência
    
-   O sistema valida os parâmetros de agendamento e conflitos
    
-   O agendamento é criado e ativado com base na flag is\_active
    
-   Monitorar o status do agendamento por meio do endpoint GET
    

  

Limitação de Taxa:

A criação de agendamento está sujeita a limites de taxa para prevenir abusos.

Os limites de taxa padrão da Graph API também se aplicam.

  

Validação:

-   O horário de início deve ser antes do horário de término
    
-   O fuso horário deve ser um identificador de fuso horário IANA válido
    
-   Os dias da semana devem ser válidos se especificados
    
-   O padrão de recorrência deve ser consistente com o tipo de agendamento
    

200

Agendamento criado com sucesso

Tipo de conteúdo:application/json

Esquema:ScheduleCreateResponse

Mostrar atributos secundários

* * *

ScheduleCreateResponse

* * *

idstring·obrigatório

Identificador único para o cronograma criado

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

Proibido - Permissões insuficientes ou limite de agendamento excedido

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

409

Conflito - O nome do agendamento já existe ou há um conflito de horário

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/schedules' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "name": "Business Hours Schedule",  "schedule_type": "BUSINESS_HOURS",  "description": "Standard business operating hours",  "start_time": "09:00",  "end_time": "17:00",  "timezone": "America/New_York",  "days_of_week": {    "0": "MONDAY",    "1": null,    "2": null,    "3": null,    "4": null  },  "is_active": true,  "recurrence_pattern": {    "frequency": "WEEKLY",    "interval": 1  }}'
```

Selecionar código do status

200400401403404409422429500

* * *

```
{  "successful_creation": {    "summary": "Schedule successfully created",    "value": {      "id": "1234567890123456"    }  }}
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