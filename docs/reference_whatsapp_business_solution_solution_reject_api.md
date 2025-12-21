<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-reject-api -->
<!-- Scraped: 2025-12-20T18:05:51.516Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Parceiros Múltiplos do WhatsApp Business - API de Rejeição de Solução

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-reject-api/v23.0.md/)

Version

v23.0

API para rejeitar solicitações de parceria de Solução de Múltiplos Parceiros ou solicitações de desativação.

Este endpoint permite que os parceiros de solução rejeitem solicitações de parceria pendentes ou solicitações de desativação para Soluções de Múltiplos Parceiros.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Solution-ID}/reject](#post-version-solution-id-reject)

* * *

## POST /{Version}/{Solution-ID}/reject

Rejeitar uma solicitação de parceria pendente ou solicitação de desativação para uma Solução de Múltiplos Parceiros.

Este endpoint permite que os proprietários de soluções rejeitem solicitações de entrada e mantenham o controle sobre as parcerias e o ciclo de vida de suas soluções.

  

  

Casos de Uso:

-   Rejeitar solicitações de parceria de aplicativos não autorizados ou incompatíveis
    
-   Negar solicitações de desativação para manter as soluções ativas
    
-   Manter a segurança e a qualidade da parceria da solução
    
-   Controlar os limites de acesso e colaboração da solução
    

  

  

Tipos de Solicitação:

-   PARTNERSHIP\_REQUEST: Rejeitar uma solicitação de parceria de entrada de outro aplicativo
    
-   DEACTIVATION\_REQUEST: Rejeitar uma solicitação para desativar a solução
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Lógica de Negócios:

-   Apenas os proprietários da solução podem rejeitar solicitações para suas soluções
    
-   Rejeições de parceria exigem o parâmetro partner\_app\_id
    
-   Ações de rejeição são permanentes e não podem ser desfeitas por meio dessa API
    
-   Solicitações rejeitadas podem precisar ser reenviadas por meio de canais adequados
    

### Sintaxe da solicitação

**POST** /{Version}/{Solution-ID}/reject

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/reject' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "request_type": "PARTNERSHIP_REQUEST",  "partner_app_id": "9876543210987654",  "rejection_reason": "Partnership terms do not align with our business requirements"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "partnership_rejected": {    "summary": "Partnership request rejected",    "value": {      "success": true,      "solution_id": "1234567890123456",      "rejected_request_type": "PARTNERSHIP_REQUEST",      "rejection_timestamp": "2024-01-15T10:30:00Z",      "partner_app_id": "9876543210987654"    }  },  "deactivation_rejected": {    "summary": "Deactivation request rejected",    "value": {      "success": true,      "solution_id": "1234567890123456",      "rejected_request_type": "DEACTIVATION_REQUEST",      "rejection_timestamp": "2024-01-15T10:30:00Z"    }  }}
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

Seu ID de Solução de Múltiplos Parceiros. Esse ID é fornecido quando você cria a solução e pode ser encontrado no Painel de Parceiros ou por meio de APIs de gerenciamento de soluções.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:SolutionRejectRequest

Mostrar atributos secundários

* * *

SolutionRejectRequest

* * *

request\_typeOne of "PARTNERSHIP\_REQUEST", "DEACTIVATION\_REQUEST"·obrigatório

Tipo de solicitação sendo rejeitada

* * *

rejection\_reasonstring

Motivo opcional para rejeitar o pedido

* * *

partner\_app\_idstring

O ID do aplicativo do parceiro solicitante. Obrigatório quando request\_type for PARTNERSHIP\_REQUEST, não utilizado para DEACTIVATION\_REQUEST

Respostas

* * *

Rejeitar uma solicitação de parceria pendente ou solicitação de desativação para uma Solução de Múltiplos Parceiros.

Este endpoint permite que os proprietários de soluções rejeitem solicitações de entrada e mantenham o controle sobre as parcerias e o ciclo de vida de suas soluções.

  

  

Casos de Uso:

-   Rejeitar solicitações de parceria de aplicativos não autorizados ou incompatíveis
    
-   Negar solicitações de desativação para manter as soluções ativas
    
-   Manter a segurança e a qualidade da parceria da solução
    
-   Controlar os limites de acesso e colaboração da solução
    

  

  

Tipos de Solicitação:

-   PARTNERSHIP\_REQUEST: Rejeitar uma solicitação de parceria de entrada de outro aplicativo
    
-   DEACTIVATION\_REQUEST: Rejeitar uma solicitação para desativar a solução
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Lógica de Negócios:

-   Apenas os proprietários da solução podem rejeitar solicitações para suas soluções
    
-   Rejeições de parceria exigem o parâmetro partner\_app\_id
    
-   Ações de rejeição são permanentes e não podem ser desfeitas por meio dessa API
    
-   Solicitações rejeitadas podem precisar ser reenviadas por meio de canais adequados
    

200

Solicitação de Solução de Parceria Múltipla rejeitada com sucesso

Tipo de conteúdo:application/json

Esquema:SolutionRejectResponse

Mostrar atributos secundários

* * *

SolutionRejectResponse

* * *

successboolean·obrigatório

Indica se a rejeição foi bem-sucedida

* * *

solution\_idstring·obrigatório

O ID da Solução de Múltiplos Parceiros

* * *

rejected\_request\_typeOne of "PARTNERSHIP\_REQUEST", "DEACTIVATION\_REQUEST"·obrigatório

Tipo de solicitação que foi rejeitada

* * *

rejection\_timestampstring (date-time)

Carimbo de data e hora ISO 8601 quando a rejeição foi processada

* * *

partner\_app\_idstring

ID do aplicativo do parceiro cuja solicitação foi rejeitada (para rejeições de parceria)

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

Proibido - Permissões insuficientes ou não é proprietário da solução

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

Não Encontrado - ID da Solução não existe ou solicitação não encontrada

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

Entidade Não Processável - Solicitação não pode ser processada devido a restrições de lógica de negócios

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/reject' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "request_type": "PARTNERSHIP_REQUEST",  "partner_app_id": "9876543210987654",  "rejection_reason": "Partnership terms do not align with our business requirements"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "partnership_rejected": {    "summary": "Partnership request rejected",    "value": {      "success": true,      "solution_id": "1234567890123456",      "rejected_request_type": "PARTNERSHIP_REQUEST",      "rejection_timestamp": "2024-01-15T10:30:00Z",      "partner_app_id": "9876543210987654"    }  },  "deactivation_rejected": {    "summary": "Deactivation request rejected",    "value": {      "success": true,      "solution_id": "1234567890123456",      "rejected_request_type": "DEACTIVATION_REQUEST",      "rejection_timestamp": "2024-01-15T10:30:00Z"    }  }}
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