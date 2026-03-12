<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/extended-credits-api -->
<!-- Scraped: 2026-03-10T21:57:53.884Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Créditos Estendidos

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/extended-credits-api/v23.0.md/)

Version

v23.0

Recupere informações de linha de crédito estendida para contas de negócios do WhatsApp.

Retorna IDs de linha de crédito e nomes de entidades legais associadas para gerenciamento de cobrança e pagamento.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Business-ID}/extendedcredits](#get-version-business-id-extendedcredits)

* * *

## GET /{Version}/{Business-ID}/extendedcredits

Referência de endpoint: [Negócios > Créditos estendidos](https://developers.facebook.com/docs/marketing-api/reference/extended-credit/)

### Sintaxe da solicitação

**GET** /{Version}/{Business-ID}/extendedcredits

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/extendedcredits' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "data": {        "0": {          "id": "1972385232742146",          "legal_entity_name": "Lucky Shrub"        }      }    }  }}
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

Respostas

* * *

Referência de endpoint: [Negócios > Créditos estendidos](https://developers.facebook.com/docs/marketing-api/reference/extended-credit/)

200

Resposta de exemplo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

dataarray of object

Mostrar atributos secundários

* * *

data\[\]object

Mostrar atributos secundários

* * *

idstring

* * *

legal\_entity\_namestring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/extendedcredits' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "data": {        "0": {          "id": "1972385232742146",          "legal_entity_name": "Lucky Shrub"        }      }    }  }}
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