<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/group/groups-join-requests-api -->
<!-- Scraped: 2026-03-10T21:55:34.283Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Business Cloud API - API de Solicitações de Entrada em Grupos

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/group/groups-join-requests-api/v23.0.md/)

Version

v23.0

A API de Grupos fornece funções simples para controlar grupos durante todo o seu ciclo de vida.

  

Quando você cria um novo grupo, um link de convite é criado para convidar participantes para o grupo.

Como você não pode adicionar participantes ao grupo manualmente, basta enviar uma mensagem com o seu link de convite para os usuários do WhatsApp que você gostaria que se juntassem ao grupo.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{group\_id}/join\_requests](#get-version-group-id-join-requests)

POST

[/{Version}/{group\_id}/join\_requests](#post-version-group-id-join-requests)

DELETE

[/{Version}/{group\_id}/join\_requests](#delete-version-group-id-join-requests)

* * *

## GET /{Version}/{group\_id}/join\_requests

Obter uma lista de solicitações de adesão abertas para um grupo

### Sintaxe da solicitação

**GET** /{Version}/{group\_id}/join\_requests

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
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

group\_idstring·obrigatório

ID do Grupo

Respostas

* * *

Obter uma lista de solicitações de adesão abertas para um grupo

200

Lista de solicitações de junção

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

join\_request\_idstring

Join request ID

* * *

wa\_idstring

WhatsApp user ID

* * *

creation\_timestampinteger

Unix timestamp indicating when the join request was created

* * *

pagingPagingInfo

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

beforestring

Antes do cursor

* * *

afterstring

Após cursor

* * *

previousstring

URL da página anterior

* * *

nextstring

URL da próxima página

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

* * *

## POST /{Version}/{group\_id}/join\_requests

Aprovar uma ou mais solicitações de associação

### Sintaxe da solicitação

**POST** /{Version}/{group\_id}/join\_requests

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "messaging_product": "\"whatsapp\""}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·obrigatório

Tipo de mídia do corpo da solicitação

Path Parameters

* * *

Versionstring·obrigatório

group\_idstring·obrigatório

ID do Grupo

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

messaging\_product"whatsapp"·obrigatório

* * *

join\_requestsarray of string·obrigatório

Array of join request IDs to approve

Mostrar atributos secundários

* * *

join\_requests\[\]string

Join request ID

Respostas

* * *

Aprovar uma ou mais solicitações de associação

200

Resposta de aprovação de solicitações de adesão

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

messaging\_productstring

* * *

approved\_join\_requestsarray of string

Mostrar atributos secundários

* * *

approved\_join\_requests\[\]string

ID of approved join request

* * *

failed\_join\_requestsarray of object

Mostrar atributos secundários

* * *

failed\_join\_requests\[\]object

Mostrar atributos secundários

* * *

join\_request\_idstring

* * *

errorsarray of Error

Mostrar atributos secundários

* * *

errors\[\]Error

Mostrar atributos secundários

* * *

codeinteger

Código de erro

* * *

messagestring

Mensagem de erro

* * *

titlestring

Título do erro

* * *

error\_dataobject

Mostrar atributos secundários

* * *

detailsstring

Detalhes do erro

* * *

errorsarray of Error

Mostrar atributos secundários

* * *

errors\[\]Error

Mostrar atributos secundários

* * *

codeinteger

Código de erro

* * *

messagestring

Mensagem de erro

* * *

titlestring

Título do erro

* * *

error\_dataobject

Mostrar atributos secundários

* * *

detailsstring

Detalhes do erro

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "messaging_product": "\"whatsapp\""}
```

* * *

## DELETE /{Version}/{group\_id}/join\_requests

Rejeitar uma ou mais solicitações de junção

### Sintaxe da solicitação

**DELETE** /{Version}/{group\_id}/join\_requests

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "messaging_product": "\"whatsapp\""}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·obrigatório

Tipo de mídia do corpo da solicitação

Path Parameters

* * *

Versionstring·obrigatório

group\_idstring·obrigatório

ID do Grupo

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

messaging\_product"whatsapp"·obrigatório

* * *

join\_requestsarray of string·obrigatório

Array of join request IDs to reject

Mostrar atributos secundários

* * *

join\_requests\[\]string

Join request ID

Respostas

* * *

Rejeitar uma ou mais solicitações de junção

200

Resposta de rejeição de solicitações de adesão

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

messaging\_productstring

* * *

rejected\_join\_requestsarray of string

Mostrar atributos secundários

* * *

rejected\_join\_requests\[\]string

ID of rejected join request

* * *

failed\_join\_requestsarray of object

Mostrar atributos secundários

* * *

failed\_join\_requests\[\]object

Mostrar atributos secundários

* * *

join\_request\_idstring

* * *

errorsarray of Error

Mostrar atributos secundários

* * *

errors\[\]Error

Mostrar atributos secundários

* * *

codeinteger

Código de erro

* * *

messagestring

Mensagem de erro

* * *

titlestring

Título do erro

* * *

error\_dataobject

Mostrar atributos secundários

* * *

detailsstring

Detalhes do erro

* * *

errorsarray of Error

Mostrar atributos secundários

* * *

errors\[\]Error

Mostrar atributos secundários

* * *

codeinteger

Código de erro

* * *

messagestring

Mensagem de erro

* * *

titlestring

Título do erro

* * *

error\_dataobject

Mostrar atributos secundários

* * *

detailsstring

Detalhes do erro

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "messaging_product": "\"whatsapp\""}
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