<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-participants-api -->
<!-- Scraped: 2026-03-10T21:56:13.012Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Business Cloud API - API de Participantes de Grupos

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/groups/groups-participants-api/v23.0.md/)

Version

v23.0

A API de Grupos fornece funções simples para controlar grupos durante todo o seu ciclo de vida.

  

Quando você cria um novo grupo, um link de convite é criado para convidar participantes para o grupo.

Como você não pode adicionar participantes ao grupo manualmente, basta enviar uma mensagem com o seu link de convite para os usuários do WhatsApp que você gostaria que se juntassem ao grupo.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{group\_id}/participants](#post-version-group-id-participants)

DELETE

[/{Version}/{group\_id}/participants](#delete-version-group-id-participants)

* * *

## POST /{Version}/{group\_id}/participants

Adicionar participantes ao grupo

### Sintaxe da solicitação

**POST** /{Version}/{group\_id}/participants

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{group_id}/participants' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
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

participantsarray of object·obrigatório

Array of phone numbers or WhatsApp IDs to remove (max 8 participants)

Mostrar atributos secundários

* * *

participants\[\]object

Mostrar atributos secundários

* * *

userstring·obrigatório

WhatsApp user phone number or WhatsApp user ID

Respostas

* * *

Adicionar participantes ao grupo

200

Solicitação de adição de participantes processada

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{group_id}/participants' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

* * *

## DELETE /{Version}/{group\_id}/participants

Remover participantes do grupo

### Sintaxe da solicitação

**DELETE** /{Version}/{group\_id}/participants

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{group_id}/participants' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
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

participantsarray of object·obrigatório

Array of phone numbers or WhatsApp IDs to remove (max 8 participants)

Mostrar atributos secundários

* * *

participants\[\]object

Mostrar atributos secundários

* * *

userstring·obrigatório

WhatsApp user phone number or WhatsApp user ID

Respostas

* * *

Remover participantes do grupo

200

Solicitação de remoção de participantes processada

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{group_id}/participants' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
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