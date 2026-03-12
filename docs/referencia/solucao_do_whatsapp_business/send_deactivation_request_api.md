<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/send-deactivation-request-api -->
<!-- Scraped: 2026-03-10T22:03:32.206Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Parceiros Múltiplos do WhatsApp Business - Enviar Solicitação de Desativação da API

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/send-deactivation-request-api/v23.0.md/)

Version

v23.0

API para envio de solicitações de desativação de Soluções de Parceria Múltipla.

Este endpoint permite que parceiros de solução solicitem a desativação de suas Soluções de Parceria Múltipla.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Solution-ID}/send\_deactivation\_request](#post-version-solution-id-send-deactivation-request)

* * *

## POST /{Version}/{Solution-ID}/send\_deactivation\_request

Envie uma solicitação de desativação para uma Solução de Parceria Múltipla. Isso inicia um fluxo de trabalho para transicionar a solução do seu estado atual para desativado, seguindo os processos de validação e aprovação de negócios adequados.

  

  

Casos de Uso:

-   Solicitar a desativação de uma Solução de Parceria Múltipla ativa
    
-   Iniciar a gestão de transição do ciclo de vida da solução
    
-   Acionar o fluxo de trabalho de negócios para aprovação de desativação da solução
    
-   Gerenciar programaticamente os estados do ciclo de vida da solução
    

  

  

Lógica de Negócios:

-   A solução deve estar no estado ATIVO ou INICIADO para ser elegível para desativação
    
-   As solicitações de desativação são processadas de forma assíncrona
    
-   O status da solução será transicionado para PENDING\_DEACTIVATION durante o processamento
    
-   A desativação final requer a conclusão do fluxo de trabalho de aprovação de negócios
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use a lógica de repetição apropriada com backoff exponencial.

  

  

Fluxo de Trabalho:

-   Validar a propriedade e as permissões da solução
    
-   Verificar a elegibilidade da solução para desativação
    
-   Enviar a solicitação de desativação para o fluxo de trabalho de negócios
    
-   Retornar confirmação com identificador de rastreamento
    

### Sintaxe da solicitação

**POST** /{Version}/{Solution-ID}/send\_deactivation\_request

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/send_deactivation_request' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "reason": "Solution no longer needed for current business operations"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_request": {    "summary": "Successful deactivation request submission",    "value": {      "success": true,      "message": "Deactivation request submitted successfully",      "request_id": "deactivation_req_1234567890"    }  }}
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

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolutionDeactivationRequest

Mostrar atributos secundários

* * *

WhatsAppBusinessSolutionDeactivationRequest

* * *

reasonstring

Motivo opcional para o pedido de desativação

Respostas

* * *

Envie uma solicitação de desativação para uma Solução de Parceria Múltipla. Isso inicia um fluxo de trabalho para transicionar a solução do seu estado atual para desativado, seguindo os processos de validação e aprovação de negócios adequados.

  

  

Casos de Uso:

-   Solicitar a desativação de uma Solução de Parceria Múltipla ativa
    
-   Iniciar a gestão de transição do ciclo de vida da solução
    
-   Acionar o fluxo de trabalho de negócios para aprovação de desativação da solução
    
-   Gerenciar programaticamente os estados do ciclo de vida da solução
    

  

  

Lógica de Negócios:

-   A solução deve estar no estado ATIVO ou INICIADO para ser elegível para desativação
    
-   As solicitações de desativação são processadas de forma assíncrona
    
-   O status da solução será transicionado para PENDING\_DEACTIVATION durante o processamento
    
-   A desativação final requer a conclusão do fluxo de trabalho de aprovação de negócios
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use a lógica de repetição apropriada com backoff exponencial.

  

  

Fluxo de Trabalho:

-   Validar a propriedade e as permissões da solução
    
-   Verificar a elegibilidade da solução para desativação
    
-   Enviar a solicitação de desativação para o fluxo de trabalho de negócios
    
-   Retornar confirmação com identificador de rastreamento
    

200

Solicitação de desativação enviada com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolutionDeactivationResponse

Mostrar atributos secundários

* * *

WhatsAppBusinessSolutionDeactivationResponse

* * *

successboolean·obrigatório

Indica se o pedido de desativação foi submetido com sucesso

* * *

messagestring·obrigatório

Mensagem legível por humanos que descreve o resultado

* * *

request\_idstring

Identificador único para rastrear o pedido de desativação

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

Não Encontrado - A ID da Solução não existe ou não está acessível

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

Entidade Inprocessável - A solução não é elegível para desativação

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/send_deactivation_request' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "reason": "Solution no longer needed for current business operations"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_request": {    "summary": "Successful deactivation request submission",    "value": {      "success": true,      "message": "Deactivation request submitted successfully",      "request_id": "deactivation_req_1234567890"    }  }}
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