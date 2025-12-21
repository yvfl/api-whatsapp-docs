<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/reject-deactivation-request-api -->
<!-- Scraped: 2025-12-20T18:05:22.825Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Múltiplos Parceiros do WhatsApp Business - API de Rejeição de Solicitação de Desativação

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/reject-deactivation-request-api/v23.0.md/)

Version

v23.0

API para rejeitar solicitações de desativação para Soluções de Múltiplos Parceiros.

Este endpoint permite que os parceiros de solução rejeitem solicitações de desativação pendentes para suas Soluções de Múltiplos Parceiros.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Solution-ID}/reject\_deactivation\_request](#post-version-solution-id-reject-deactivation-request)

* * *

## POST /{Version}/{Solution-ID}/reject\_deactivation\_request

Rejeitar uma solicitação pendente de desativação para uma Solução de Parceria Múltipla. Este endpoint permite que os parceiros de solução recusem solicitações de desativação dos proprietários da solução, mantendo a solução em seu estado operacional ativo atual.

  

  

Casos de Uso:

-   Rejeitar solicitações de desativação dos proprietários da solução
    
-   Manter parcerias de solução ativas quando a desativação não é apropriada
    
-   Responder programaticamente às solicitações de desativação por meio de integração de API
    
-   Manter soluções operacionais quando os requisitos comerciais ou parcerias mudam
    

  

  

Lógica de Negócios:

-   O status da solução permanece ATIVO após a rejeição bem-sucedida
    
-   StatusForPendingRequest transita de PENDING\_DEACTIVATION para NONE
    
-   Todas as configurações e permissões de solução existentes são preservadas
    
-   Os parceiros de solução recebem notificações sobre a decisão de rejeição
    

  

  

Limitação de Taxa:

Aplicam-se as limitações de taxa padrão da API do Graph. Use lógica de retry apropriada com backoff exponencial.

  

  

Permissões:

Exige permissão whatsapp\_business\_management e relação de parceria de solução válida.

### Sintaxe da solicitação

**POST** /{Version}/{Solution-ID}/reject\_deactivation\_request

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/reject_deactivation_request' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_rejection": {    "summary": "Deactivation request successfully rejected",    "value": {      "id": "1234567890123456",      "name": "E-commerce Integration Solution",      "status": "ACTIVE",      "status_for_pending_request": "NONE",      "owner_app": {        "id": "9876543210987654",        "name": "Solution Partner App"      },      "owner_permissions": {        "0": "MANAGE",        "1": null,        "2": null,        "3": null      }    }  }}
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

Seu ID de Solução de Múltiplos Parceiros com um pedido de desativação pendente. Esse ID é fornecido quando você cria a solução e pode ser encontrado no Painel de Parceiros ou por meio das APIs de gerenciamento de soluções.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (nome, status, status\_for\_pending\_request). Campos disponíveis: id, nome, status, status\_for\_pending\_request, owner\_app, owner\_permissions

Corpo da solicitaçãoObrigatório

* * *

Corpo da solicitação para rejeitar solicitação de desativação

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

reject\_deactivation\_requestboolean·obrigatório

Set to true to reject the pending deactivation request

Respostas

* * *

Rejeitar uma solicitação pendente de desativação para uma Solução de Parceria Múltipla. Este endpoint permite que os parceiros de solução recusem solicitações de desativação dos proprietários da solução, mantendo a solução em seu estado operacional ativo atual.

  

  

Casos de Uso:

-   Rejeitar solicitações de desativação dos proprietários da solução
    
-   Manter parcerias de solução ativas quando a desativação não é apropriada
    
-   Responder programaticamente às solicitações de desativação por meio de integração de API
    
-   Manter soluções operacionais quando os requisitos comerciais ou parcerias mudam
    

  

  

Lógica de Negócios:

-   O status da solução permanece ATIVO após a rejeição bem-sucedida
    
-   StatusForPendingRequest transita de PENDING\_DEACTIVATION para NONE
    
-   Todas as configurações e permissões de solução existentes são preservadas
    
-   Os parceiros de solução recebem notificações sobre a decisão de rejeição
    

  

  

Limitação de Taxa:

Aplicam-se as limitações de taxa padrão da API do Graph. Use lógica de retry apropriada com backoff exponencial.

  

  

Permissões:

Exige permissão whatsapp\_business\_management e relação de parceria de solução válida.

200

Solicitação de desativação rejeitada com sucesso

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

Classificação de tipos de erros

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

Classificação de tipos de erros

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

Proibido - Permissões insuficientes ou acesso não autorizado

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

Classificação de tipos de erros

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

Não Encontrado - Solução não encontrada ou inacessível

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

Classificação de tipos de erros

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

Entidade Inprocessável - Estado de solução inválido ou violação da lógica de negócios

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

Classificação de tipos de erros

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

Classificação de tipos de erros

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

Classificação de tipos de erros

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/reject_deactivation_request' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_rejection": {    "summary": "Deactivation request successfully rejected",    "value": {      "id": "1234567890123456",      "name": "E-commerce Integration Solution",      "status": "ACTIVE",      "status_for_pending_request": "NONE",      "owner_app": {        "id": "9876543210987654",        "name": "Solution Partner App"      },      "owner_permissions": {        "0": "MANAGE",        "1": null,        "2": null,        "3": null      }    }  }}
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