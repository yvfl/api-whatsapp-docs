<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/group/groups-invite-link-api -->
<!-- Scraped: 2025-12-20T17:57:36.918Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Business Cloud API - API de Convite de Grupo

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/group/groups-invite-link-api/v23.0.md/)

Version

v23.0

A API de Grupos fornece funções simples para controlar grupos durante todo o seu ciclo de vida.

  

Quando você cria um novo grupo, um link de convite é criado para convidar participantes para o grupo.

Como você não pode adicionar participantes ao grupo manualmente, basta enviar uma mensagem com o seu link de convite para os usuários do WhatsApp que você gostaria que se juntassem ao grupo.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{group\_id}/invite\_link](#post-version-group-id-invite-link)

DELETE

[/{Version}/{group\_id}/invite\_link](#delete-version-group-id-invite-link)

* * *

## POST /{Version}/{group\_id}/invite\_link

Criar novo link de convite de grupo

### Sintaxe da solicitação

**POST** /{Version}/{group\_id}/invite\_link

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{group_id}/invite_link' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "messaging_product": "\"whatsapp\"",  "invite_link": "\"https:\\/\\/chat.whatsapp.com\\/LINK_ID\""}
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

Respostas

* * *

Criar novo link de convite de grupo

200

Link de convite do grupo criado com sucesso

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

messaging\_productstring

* * *

invite\_linkstring

Group invite link

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{group_id}/invite_link' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "messaging_product": "\"whatsapp\"",  "invite_link": "\"https:\\/\\/chat.whatsapp.com\\/LINK_ID\""}
```

* * *

## DELETE /{Version}/{group\_id}/invite\_link

Excluir um link de convite de grupo existente

### Sintaxe da solicitação

**DELETE** /{Version}/{group\_id}/invite\_link

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{group_id}/invite_link' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "messaging_product": "\"whatsapp\"",  "success": "\"true\""}
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

Respostas

* * *

Excluir um link de convite de grupo existente

200

Link de convite do grupo excluído com sucesso

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

messaging\_productstring

* * *

successstring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{group_id}/invite_link' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "messaging_product": "\"whatsapp\"",  "success": "\"true\""}
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