<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/business-account-api -->
<!-- Scraped: 2026-03-10T21:54:36.493Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Conta de Negócios

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/business/business-account-api/v23.0.md/)

Version

v23.0

Recupere informações do portfólio de negócios da Meta pelo ID do negócio.

Retorna o nome do negócio, fuso horário e outros detalhes da conta para gerenciar configurações da conta de negócios do WhatsApp.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Business-ID}](#get-version-business-id)

* * *

## GET /{Version}/{Business-ID}

Referência de endpoint: [Negócios](https://developers.facebook.com/docs/marketing-api/reference/business/)

### Sintaxe da solicitação

**GET** /{Version}/{Business-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "id": "506914307656634",      "name": "Lucky Shrub",      "timezone_id": 0    }  }}
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

Business-IDstring·obrigatório

Query Parameters

* * *

fieldsstring

Respostas

* * *

Referência de endpoint: [Negócios](https://developers.facebook.com/docs/marketing-api/reference/business/)

200

Resposta de exemplo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

idstring

* * *

namestring

* * *

timezone\_idnumber

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "id": "506914307656634",      "name": "Lucky Shrub",      "timezone_id": 0    }  }}
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