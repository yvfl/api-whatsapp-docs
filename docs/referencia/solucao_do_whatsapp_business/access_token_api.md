<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api -->
<!-- Scraped: 2026-03-10T22:03:17.001Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Parceiros Múltiplos do WhatsApp Business - API de Token de Acesso

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api/v23.0.md/)

Version

v23.0

API para recuperar tokens de acesso granular BISU (Usuário do Sistema de Integração de Negócios) para parceiros de solução multi-parceiros.

Este endpoint permite que os parceiros de solução obtenham tokens de acesso granular que fornecem acesso seguro e com escopo definido às contas de negócios do WhatsApp compartilhadas com sua Solução Multi-Parceiros.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Solution-ID}/access\_token](#get-version-solution-id-access-token)

* * *

## GET /{Version}/{Solution-ID}/access\_token

Recuperar um token de acesso BISU granular para acessar recursos de negócios do cliente por meio da Solução de Múltiplos Parceiros. O token fornece acesso seguro e com escopo a contas de negócios do WhatsApp que foram compartilhadas com a solução.

  

Casos de Uso:

-   Obter tokens de acesso seguros para aplicativos de parceiros acessarem recursos de negócios do cliente
    
-   Habilitar arquiteturas de parceiros multi-inquilino com tokens dedicados por negócio do cliente
    
-   Suportar operações de API seguras em contas de negócios do WhatsApp compartilhadas
    
-   Implementar limites de segurança adequados entre diferentes negócios de clientes
    

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Gerenciamento de Tokens:

Os tokens de acesso são limitados no tempo e devem ser atualizados antes de expirar. Armazene os tokens de forma segura e implemente estratégias de rotação de tokens adequadas.

### Sintaxe da solicitação

**GET** /{Version}/{Solution-ID}/access\_token

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/access_token' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "active_token": {    "summary": "Active granular BISU access token",    "value": {      "access_token": "YOUR_GRANULAR_BISU_ACCESS_TOKEN",      "expires_at": 1735689600    }  }}
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

Query Parameters

* * *

business\_idstring·obrigatório

O ID de negócios do cliente para o qual você deseja recuperar um token de acesso. Isso deve ser um negócio que compartilhou uma Conta de Negócios do WhatsApp com sua Solução de Parceiro Múltiplo.

Respostas

* * *

Recuperar um token de acesso BISU granular para acessar recursos de negócios do cliente por meio da Solução de Múltiplos Parceiros. O token fornece acesso seguro e com escopo a contas de negócios do WhatsApp que foram compartilhadas com a solução.

  

Casos de Uso:

-   Obter tokens de acesso seguros para aplicativos de parceiros acessarem recursos de negócios do cliente
    
-   Habilitar arquiteturas de parceiros multi-inquilino com tokens dedicados por negócio do cliente
    
-   Suportar operações de API seguras em contas de negócios do WhatsApp compartilhadas
    
-   Implementar limites de segurança adequados entre diferentes negócios de clientes
    

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Gerenciamento de Tokens:

Os tokens de acesso são limitados no tempo e devem ser atualizados antes de expirar. Armazene os tokens de forma segura e implemente estratégias de rotação de tokens adequadas.

200

Token de acesso BISU granular recuperado com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolutionAccessToken

Mostrar atributos secundários

* * *

WhatsAppBusinessSolutionAccessToken

* * *

access\_tokenstring·obrigatório

Token de acesso granular BISU para acessar recursos de negócios do cliente

* * *

expires\_atinteger (int64)·obrigatório

Carimbo de data/hora Unix indicando quando o token de acesso expira

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

Não Encontrado - ID da Solução ou ID da Empresa não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/access_token' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "active_token": {    "summary": "Active granular BISU access token",    "value": {      "access_token": "YOUR_GRANULAR_BISU_ACCESS_TOKEN",      "expires_at": 1735689600    }  }}
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