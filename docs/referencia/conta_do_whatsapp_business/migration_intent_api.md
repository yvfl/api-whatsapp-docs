<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api -->
<!-- Scraped: 2026-03-10T21:58:17.329Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Conta de Negócios do WhatsApp - API de Intenção de Migração

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api/v23.0.md/)

Version

v23.0

API para gerenciamento de operações de intenção de migração para contas de negócios do WhatsApp.

  

  

Este endpoint permite que aplicativos autorizados gerenciem operações de intenção de migração para contas de negócios do WhatsApp, facilitando migrações de contas sem interrupções entre diferentes contextos de gerenciamento de negócios e provedores de soluções.

  

  

Pré-requisitos:

  

-   A conta de negócios do WhatsApp deve existir e estar acessível ao aplicativo solicitante
    
-   O aplicativo solicitante deve ter permissão whatsapp\_business\_management com revisão de aplicativo concluída
    
-   Token de acesso do usuário do sistema com permissões de gerenciamento de negócios apropriadas
    
-   ID de WABA válido que pertença ao seu aplicativo ou parceria
    
-   Configuração de solução válida para operações de migração
    

  

  

Casos de uso:

  

-   Facilitar migrações de contas de negócios do WhatsApp entre provedores de soluções
    
-   Gerenciar transições de contas de um contexto de negócios para outro
    
-   Coordenar operações de migração para ambientes de solução multi-parceiros
    
-   Tratar transições de propriedade e gerenciamento de contas de negócios
    
-   Suportar migrações de provedores de soluções e transferências de dados
    

  

  

Segurança e Privacidade:

  

-   As operações de migração respeitam as fronteiras de propriedade e parceria dos aplicativos
    
-   Apenas aplicativos autorizados podem realizar operações de migração
    
-   Todas as operações de migração são registradas e auditáveis
    
-   Todas as solicitações exigem tokens de autenticação válidos com permissões apropriadas
    
-   As operações estão sujeitas a fluxos de validação e aprovação de negócios
    

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Migration-Intent-ID}](#get-version-migration-intent-id)

POST

[/{Version}/{WABA-ID}/migration\_intent](#post-version-waba-id-migration-intent)

* * *

## GET /{Version}/{Migration-Intent-ID}

Recuperar detalhes de um nó de intenção de migração específico. Este endpoint fornece informações abrangentes sobre a intenção de migração, incluindo o status atual, detalhes da WABA de origem e destino, informações da solução e histórico de operações.

  

  

Casos de Uso:

-   Monitorar o status de operações de migração em andamento
    
-   Recuperar detalhes de configuração da intenção de migração
    
-   Auditoria do progresso da operação de migração
    
-   Verificar parâmetros e configurações de migração
    

  

  

Campos de Resposta:

A resposta inclui o nó de intenção de migração completo com todos os campos disponíveis, incluindo id, waba, destination\_waba, solução, status e carimbos de data e hora.

### Sintaxe da solicitação

**GET** /{Version}/{Migration-Intent-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Migration-Intent-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404429500

* * *

```
{  "pending_migration": {    "summary": "Pending migration intent",    "value": {      "id": "1234567890123456",      "waba": {        "id": "1234567890123456",        "name": "Source Business Account",        "status": "ACTIVE",        "timezone_id": "1",        "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea"      },      "destination_waba": {        "id": "2345678901234567",        "name": "Destination Business Account",        "status": "ACTIVE",        "timezone_id": "1",        "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9"      },      "solution": {        "id": "3456789012345678",        "name": "My Business Solution",        "partner_id": "4567890123456789",        "status": "ACTIVE"      },      "status": "PENDING",      "created_time": "2024-01-15T10:30:00Z",      "updated_time": "2024-01-15T14:45:00Z"    }  }}
```

Header Parameters

* * *

User-Agentstring

Identifica o aplicativo cliente, SDK e a versão da especificação sendo usada. Este cabeçalho é usado para rastrear a adoção da especificação OpenAPI de mensagens comerciais e suas versões específicas. Ele permite que a Meta monitore o uso da API, as taxas de adoção e os prazos de descontinuação.

Padrões de formatação: - Especificação OpenAPI: Meta-Business-Messaging-SDK/{ver};spec={spec-ver} - SDK de terceiros: {Generator}/{ver} Meta-Business-Messaging-SDK/{spec-ver} - SDK Nativo da Meta: Meta-Business-Messaging-SDK-{Lang}/{version}

Exemplos: - Meta-Business-Messaging-SDK/1.0.0;spec=2025-09-30 - Swagger-Codegen/1.0.0 Meta-Business-Messaging-SDK/2025-09-30 - Meta-Business-Messaging-SDK-Python/2.1.0

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Versão da Graph API a ser usada para essa solicitação. Determina o comportamento da API e os recursos disponíveis.

Migration-Intent-IDstring·obrigatório

ID do Nó de Intenção de Migração. Este ID identifica a configuração específica de intenção de migração a ser recuperada.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão (id, waba, destination\_waba, solution, status) serão retornados.

Respostas

* * *

Recuperar detalhes de um nó de intenção de migração específico. Este endpoint fornece informações abrangentes sobre a intenção de migração, incluindo o status atual, detalhes da WABA de origem e destino, informações da solução e histórico de operações.

  

  

Casos de Uso:

-   Monitorar o status de operações de migração em andamento
    
-   Recuperar detalhes de configuração da intenção de migração
    
-   Auditoria do progresso da operação de migração
    
-   Verificar parâmetros e configurações de migração
    

  

  

Campos de Resposta:

A resposta inclui o nó de intenção de migração completo com todos os campos disponíveis, incluindo id, waba, destination\_waba, solução, status e carimbos de data e hora.

200

Detalhes de intenção de migração recuperados com sucesso

Tipo de conteúdo:application/json

Esquema:MigrationIntentNode

Mostrar atributos secundários

* * *

MigrationIntentNode

* * *

idstring·obrigatório

Identificador único para o Nó de Intenção de Migração

* * *

wabaWhatsAppBusinessAccount·obrigatório

Informações da Conta do WhatsApp Business

Mostrar atributos secundários

* * *

idstring·obrigatório

ID da Conta do WhatsApp Business

* * *

namestring·obrigatório

Nome da conta empresarial

* * *

statusOne of "ACTIVE", "INACTIVE", "PENDING"

Status atual da conta empresarial

* * *

timezone\_idstring

ID do fuso horário para a conta comercial

* * *

message\_template\_namespacestring

Namespace de modelo de mensagem para a conta comercial

* * *

destination\_wabaWhatsAppBusinessAccount·obrigatório

Informações da Conta do WhatsApp Business

Mostrar atributos secundários

* * *

idstring·obrigatório

ID da Conta do WhatsApp Business

* * *

namestring·obrigatório

Nome da conta empresarial

* * *

statusOne of "ACTIVE", "INACTIVE", "PENDING"

Status atual da conta empresarial

* * *

timezone\_idstring

ID do fuso horário para a conta comercial

* * *

message\_template\_namespacestring

Namespace de modelo de mensagem para a conta comercial

* * *

solutionWhatsAppBusinessSolution·obrigatório

Informações sobre a Solução de Negócios do WhatsApp

Mostrar atributos secundários

* * *

idstring·obrigatório

ID da Solução

* * *

namestring·obrigatório

Nome da solução

* * *

partner\_idstring

ID do parceiro associado à solução

* * *

statusOne of "ACTIVE", "INACTIVE", "PENDING"

Status atual da solução

* * *

statusMigrationStatus·obrigatório

Status da intenção de migração

* * *

created\_timestring (date-time)

Carimbo de data e hora em que a intenção de migração foi criada (formato ISO 8601)

* * *

updated\_timestring (date-time)

Carimbo de data e hora em que a intenção de migração foi atualizada pela última vez (formato ISO 8601)

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

Não Encontrado - ID de Intenção de Migração não existe ou não é acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Migration-Intent-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404429500

* * *

```
{  "pending_migration": {    "summary": "Pending migration intent",    "value": {      "id": "1234567890123456",      "waba": {        "id": "1234567890123456",        "name": "Source Business Account",        "status": "ACTIVE",        "timezone_id": "1",        "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea"      },      "destination_waba": {        "id": "2345678901234567",        "name": "Destination Business Account",        "status": "ACTIVE",        "timezone_id": "1",        "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9"      },      "solution": {        "id": "3456789012345678",        "name": "My Business Solution",        "partner_id": "4567890123456789",        "status": "ACTIVE"      },      "status": "PENDING",      "created_time": "2024-01-15T10:30:00Z",      "updated_time": "2024-01-15T14:45:00Z"    }  }}
```

* * *

## POST /{Version}/{WABA-ID}/migration\_intent

Crie uma nova intenção de migração para uma Conta de Negócios do WhatsApp.

Este endpoint permite que provedores de soluções autorizados iniciem operações de migração

para contas de negócios, facilitando transferências entre diferentes provedores de soluções

ou contextos de negócios.

  

  

Casos de Uso:

-   Iniciar o processo de migração de conta entre provedores de soluções
    
-   Solicitar transferência de gerenciamento de conta de negócios
    
-   Agendar operações de migração para execução futura
    
-   Coordenar transições de migração multi-parceiro
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Processo de Migração:

-   Crie a intenção de migração com parâmetros apropriados
    
-   O sistema valida a elegibilidade e permissões de migração
    
-   A intenção entra no status PENDING aguardando aprovações
    
-   Notificações de negócios e parceiros são acionadas
    
-   Após a aprovação, a operação de migração é agendada ou executada
    
-   Atualizações de status são fornecidas ao longo do processo
    

### Sintaxe da solicitação

**POST** /{Version}/{WABA-ID}/migration\_intent

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/migration_intent' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "destination_waba_id": "2345678901234567",  "solution_id": "3456789012345678",  "migration_reason": "Migrating account to new solution provider for better service",  "preserve_data": true,  "metadata": {    "business_approval_id": "approval_789012",    "migration_type": "solution_transfer"  }}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "migration_initiated": {    "summary": "Migration intent successfully initiated",    "value": {      "success": true,      "migration_intent_id": "migration_123456789",      "status": "PENDING",      "estimated_completion_time": "2024-12-01T12:00:00Z",      "approval_required": true,      "next_steps": {        "0": "Await business approval",        "1": null,        "2": null      }    }  },  "migration_scheduled": {    "summary": "Migration intent successfully scheduled",    "value": {      "success": true,      "migration_intent_id": "migration_987654321",      "status": "APPROVED",      "estimated_completion_time": "2024-12-01T10:00:00Z",      "approval_required": false,      "next_steps": [        "Automatic execution at scheduled time"      ]    }  }}
```

Header Parameters

* * *

User-Agentstring

Identifica o aplicativo cliente, SDK e a versão da especificação sendo usada. Este cabeçalho é usado para rastrear a adoção da especificação OpenAPI de mensagens comerciais e suas versões específicas. Ele permite que a Meta monitore o uso da API, as taxas de adoção e os prazos de descontinuação. Padrões de formato: - Especificação OpenAPI: Meta-Business-Messaging-SDK/{ver};spec={spec-ver} - SDK de terceiros: {Generator}/{ver} Meta-Business-Messaging-SDK/{spec-ver} - SDK nativo da Meta: Meta-Business-Messaging-SDK-{Lang}/{version} Exemplos: - Meta-Business-Messaging-SDK/1.0.0;spec=2025-09-30 - Swagger-Codegen/1.0.0 Meta-Business-Messaging-SDK/2025-09-30 - Meta-Business-Messaging-SDK-Python/2.1.0

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Versão da Graph API a ser usada para essa solicitação. Determina o comportamento da API e os recursos disponíveis.

WABA-IDstring·obrigatório

ID da Conta de Negócios do WhatsApp. Este ID identifica a WABA de origem para a qual a intenção de migração está sendo criada.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:MigrationIntentRequest

Mostrar atributos secundários

* * *

MigrationIntentRequest

* * *

destination\_waba\_idstring·obrigatório

ID da Conta de Negócios do WhatsApp de Destino para Migração

* * *

solution\_idstring·obrigatório

Identificador único para a Solução de Negócios do WhatsApp

* * *

migration\_reasonstring·obrigatório

Motivo da migração

* * *

scheduled\_execution\_timestring (date-time)

Horário agendado para execução da migração (formato ISO 8601)

* * *

preserve\_databoolean

Se preservar os dados da conta existente durante a migração

* * *

metadataobject

Metadados adicionais para a operação de migração

Respostas

* * *

Crie uma nova intenção de migração para uma Conta de Negócios do WhatsApp.

Este endpoint permite que provedores de soluções autorizados iniciem operações de migração

para contas de negócios, facilitando transferências entre diferentes provedores de soluções

ou contextos de negócios.

  

  

Casos de Uso:

-   Iniciar o processo de migração de conta entre provedores de soluções
    
-   Solicitar transferência de gerenciamento de conta de negócios
    
-   Agendar operações de migração para execução futura
    
-   Coordenar transições de migração multi-parceiro
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Processo de Migração:

-   Crie a intenção de migração com parâmetros apropriados
    
-   O sistema valida a elegibilidade e permissões de migração
    
-   A intenção entra no status PENDING aguardando aprovações
    
-   Notificações de negócios e parceiros são acionadas
    
-   Após a aprovação, a operação de migração é agendada ou executada
    
-   Atualizações de status são fornecidas ao longo do processo
    

200

Intenção de migração criada com sucesso

Tipo de conteúdo:application/json

Esquema:MigrationIntentResponse

Mostrar atributos secundários

* * *

MigrationIntentResponse

* * *

successboolean·obrigatório

Indica se a operação de intenção de migração foi bem-sucedida

* * *

migration\_intent\_idstring·obrigatório

Identificador único para o pedido de intenção de migração

* * *

statusMigrationStatus

Status da intenção de migração

* * *

estimated\_completion\_timestring (date-time)

Tempo estimado de conclusão da operação de migração (formato ISO 8601)

* * *

approval\_requiredboolean

Indica se é necessária aprovação adicional para a operação

* * *

next\_stepsarray of string

Lista das próximas etapas necessárias para concluir a operação de migração

Mostrar atributos secundários

* * *

next\_steps\[\]string

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

Não Encontrado - O ID WABA, o ID de Destino WABA ou o ID da Solução não existe ou não está acessível

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/migration_intent' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "destination_waba_id": "2345678901234567",  "solution_id": "3456789012345678",  "migration_reason": "Migrating account to new solution provider for better service",  "preserve_data": true,  "metadata": {    "business_approval_id": "approval_789012",    "migration_type": "solution_transfer"  }}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "migration_initiated": {    "summary": "Migration intent successfully initiated",    "value": {      "success": true,      "migration_intent_id": "migration_123456789",      "status": "PENDING",      "estimated_completion_time": "2024-12-01T12:00:00Z",      "approval_required": true,      "next_steps": {        "0": "Await business approval",        "1": null,        "2": null      }    }  },  "migration_scheduled": {    "summary": "Migration intent successfully scheduled",    "value": {      "success": true,      "migration_intent_id": "migration_987654321",      "status": "APPROVED",      "estimated_completion_time": "2024-12-01T10:00:00Z",      "approval_required": false,      "next_steps": [        "Automatic execution at scheduled time"      ]    }  }}
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