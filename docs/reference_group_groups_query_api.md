<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/group/groups-query-api -->
<!-- Scraped: 2025-12-20T17:57:58.669Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Business Cloud API - API de Consulta de Grupos

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/group/groups-query-api/v23.0.md/)

Version

v23.0

A API de Grupos fornece funções simples para controlar grupos durante todo o seu ciclo de vida.

  

Quando você cria um novo grupo, um link de convite é criado para convidar participantes para o grupo.

Como você não pode adicionar participantes ao grupo manualmente, basta enviar uma mensagem com o seu link de convite para os usuários do WhatsApp que você gostaria que se juntassem ao grupo.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{group\_id}](#get-version-group-id)

POST

[/{Version}/{group\_id}](#post-version-group-id)

DELETE

[/{Version}/{group\_id}](#delete-version-group-id)

* * *

## GET /{Version}/{group\_id}

Recuperar metadados sobre um único grupo

### Sintaxe da solicitação

**GET** /{Version}/{group\_id}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{group_id}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
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

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem retornados

Respostas

* * *

Recuperar metadados sobre um único grupo

200

Informações do grupo

Tipo de conteúdo:application/json

Esquema:GroupInfo

Mostrar atributos secundários

* * *

GroupInfo

* * *

idstring

ID do Grupo

* * *

messaging\_productstring

* * *

join\_approval\_modeOne of "approval\_required", "auto\_approve"

Entrar no modo de aprovação para o grupo

* * *

subjectstring

Assunto do grupo

* * *

descriptionstring

Descrição do grupo

* * *

suspendedboolean

Retorna verdadeiro se o grupo foi suspenso pelo WhatsApp

* * *

creation\_timestampinteger

Carimbo de data e hora UNIX em segundos em que o grupo foi criado

* * *

participantsarray of object

Lista de participantes do grupo

Mostrar atributos secundários

* * *

participants\[\]object

Mostrar atributos secundários

* * *

wa\_idstring

WhatsApp user ID

* * *

total\_participant\_countinteger

Número total de participantes no grupo, excluindo sua empresa

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{group_id}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

* * *

## POST /{Version}/{group\_id}

Atualizar o assunto, descrição e foto de um grupo

### Sintaxe da solicitação

**POST** /{Version}/{group\_id}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{group_id}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
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

subjectstring

The new subject for the group

* * *

descriptionstring

The new description for the group

* * *

profile\_picture\_filestring

Path to an image file for group profile picture

Tipo de conteúdo:multipart/form-data

Esquema:object

Mostrar atributos secundários

* * *

messaging\_product"whatsapp"

* * *

filestring (binary)

Image file for group profile picture (JPEG, max 5MB, square format, min 192x192)

Respostas

* * *

Atualizar o assunto, descrição e foto de um grupo

200

Configurações do grupo atualizadas com sucesso

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{group_id}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

* * *

## DELETE /{Version}/{group\_id}

Excluir o grupo e remover todos os participantes, incluindo a empresa

### Sintaxe da solicitação

**DELETE** /{Version}/{group\_id}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{group_id}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "success": "true"}
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

Respostas

* * *

Excluir o grupo e remover todos os participantes, incluindo a empresa

200

Exclusão de grupo realizada com sucesso

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{group_id}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "success": "true"}
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