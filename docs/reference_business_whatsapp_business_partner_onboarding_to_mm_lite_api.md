<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-partner-onboarding-to-mm-lite-api -->
<!-- Scraped: 2025-12-20T17:57:12.091Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Integração de Parceiro do WhatsApp Business ao MM Lite API

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-partner-onboarding-to-mm-lite-api/v23.0.md/)

Version

v23.0

API para integração de parceiros ao MM Lite de negócios da WhatsApp.

  

Este endpoint permite que os parceiros de solução iniciem solicitações de integração do MM Lite para empresas finais.

A API valida a elegibilidade, cria solicitações de acordo de negócios e configura automaticamente as intenções de mobilidade OBO (Em nome de) para contas de negócios da WhatsApp elegíveis.

  

  

Funcionalidade Principal:

  

-   Valida a propriedade do negócio e aplicativo do parceiro
    
-   Verifica a elegibilidade da empresa final para parcerias do MM Lite
    
-   Identifica WABAs compartilhados e OBO WABAs elegíveis associados à parceria
    
-   Define automaticamente as intenções de mobilidade em OBO WABAs elegíveis (somente BSPs)
    
-   Cria uma solicitação de acordo de negócios do tipo MM\_LITE\_ONBOARDING
    
-   Retorna um ID de solicitação exclusivo para rastrear o processo de integração
    

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Business-ID}/onboard\_partners\_to\_mm\_lite](#post-version-business-id-onboard-partners-to-mm-lite)

* * *

## POST /{Version}/{Business-ID}/onboard\_partners\_to\_mm\_lite

Envie uma solicitação do parceiro para integrar uma empresa final ao MM Lite.

Isso cria uma solicitação de acordo comercial e define intenções de mobilidade OBO

em contas de negócios do WhatsApp elegíveis.

  

  

Fluxo de Negócios:

-   Valida as permissões de negócios e aplicativos do parceiro
    
-   Verifica a elegibilidade da empresa final para o MM Lite
    
-   Identifica WABAs compartilhados e WABAs OBO elegíveis
    
-   Define intenções de mobilidade em WABAs OBO elegíveis (somente BSPs)
    
-   Cria solicitação de acordo comercial
    
-   Retorna o ID da solicitação para rastreamento
    

  

  

Comportamento BSP vs TP:

-   BSPs (Fornecedores de Soluções de Negócios): Podem criar WABAs OBO e definir intenções de mobilidade
    
-   TPs (Parceiros de Tecnologia): Podem criar apenas solicitações de integração, sem gerenciamento de WABA OBO
    

  

  

Limitação de Taxa:

Está sujeito aos limites de uso de caso de integração de parceiros de negócios.

Use lógica de repetição apropriada com retrocesso exponencial.

  

  

Idempotência:

Se uma solicitação pendente já existir entre o mesmo parceiro e a empresa final,

o ID da solicitação existente é retornado em vez de criar uma duplicata.

### Sintaxe da solicitação

**POST** /{Version}/{Business-ID}/onboard\_partners\_to\_mm\_lite

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/onboard_partners_to_mm_lite' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "new_request": {    "summary": "New onboarding request created",    "value": {      "request_id": "1234567890123456"    }  },  "existing_request": {    "summary": "Existing pending request returned",    "value": {      "request_id": "2345678901234567"    }  }}
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

Business-IDstring·obrigatório

O ID de negócios final que receberá o pedido de integração do MM Lite.

Este é o negócio com o qual o parceiro deseja estabelecer uma relação MM Lite.

Query Parameters

* * *

solution\_idstring

ID da Solução de Negócios do WhatsApp opcional para associar ao pedido de integração. Se fornecido, a solução será vinculada ao acordo comercial e às intenções de mobilidade OBO.

Respostas

* * *

Envie uma solicitação do parceiro para integrar uma empresa final ao MM Lite.

Isso cria uma solicitação de acordo comercial e define intenções de mobilidade OBO

em contas de negócios do WhatsApp elegíveis.

  

  

Fluxo de Negócios:

-   Valida as permissões de negócios e aplicativos do parceiro
    
-   Verifica a elegibilidade da empresa final para o MM Lite
    
-   Identifica WABAs compartilhados e WABAs OBO elegíveis
    
-   Define intenções de mobilidade em WABAs OBO elegíveis (somente BSPs)
    
-   Cria solicitação de acordo comercial
    
-   Retorna o ID da solicitação para rastreamento
    

  

  

Comportamento BSP vs TP:

-   BSPs (Fornecedores de Soluções de Negócios): Podem criar WABAs OBO e definir intenções de mobilidade
    
-   TPs (Parceiros de Tecnologia): Podem criar apenas solicitações de integração, sem gerenciamento de WABA OBO
    

  

  

Limitação de Taxa:

Está sujeito aos limites de uso de caso de integração de parceiros de negócios.

Use lógica de repetição apropriada com retrocesso exponencial.

  

  

Idempotência:

Se uma solicitação pendente já existir entre o mesmo parceiro e a empresa final,

o ID da solicitação existente é retornado em vez de criar uma duplicata.

200

Solicitação de onboarding do MM Lite criada com sucesso

Tipo de conteúdo:application/json

Esquema:MMLiteOnboardingRequest

Mostrar atributos secundários

* * *

MMLiteOnboardingRequest

* * *

request\_idstring·obrigatório

Identificador único para o pedido de integração do MM Lite

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

Não Encontrado - O ID da empresa não existe ou não está acessível

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/onboard_partners_to_mm_lite' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "new_request": {    "summary": "New onboarding request created",    "value": {      "request_id": "1234567890123456"    }  },  "existing_request": {    "summary": "Existing pending request returned",    "value": {      "request_id": "2345678901234567"    }  }}
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