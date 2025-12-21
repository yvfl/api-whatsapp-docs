<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/block-api -->
<!-- Scraped: 2025-12-20T18:01:29.334Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Bloqueio

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/block-api/v23.0.md/)

Version

v23.0

A API do Bloqueio permite que empresas gerenciem usuários bloqueados no WhatsApp.

Use essa API para bloquear usuários de enviar mensagens para o número da sua empresa,

recuperar a lista de usuários bloqueados e desbloquear usuários quando necessário.

  

Para obter mais informações, consulte o [Guia de bloqueio de usuários](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users).

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Phone-Number-ID}/block\_users](#get-version-phone-number-id-block-users)

POST

[/{Version}/{Phone-Number-ID}/block\_users](#post-version-phone-number-id-block-users)

DELETE

[/{Version}/{Phone-Number-ID}/block\_users](#delete-version-phone-number-id-block-users)

* * *

## GET /{Version}/{Phone-Number-ID}/block\_users

-   Guia: [Bloquear usuários](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
-   Referência de endpoint: [GET WhatsApp Business Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Reading)
    

### Sintaxe da solicitação

**GET** /{Version}/{Phone-Number-ID}/block\_users

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Get blocked users": {    "value": {      "data": {        "0": {          "messaging_product": "whatsapp",          "wa_id": "16505551234"        }      },      "paging": {        "cursors": {          "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",          "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"        }      }    }  }}
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

Phone-Number-IDstring·obrigatório

Respostas

* * *

-   Guia: [Bloquear usuários](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
-   Referência de endpoint: [GET WhatsApp Business Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Reading)
    

200

Obter usuários bloqueados

Tipo de conteúdo:application/json

Esquema:GetBlockedUsersData

Mostrar atributos secundários

* * *

GetBlockedUsersData

* * *

dataarray of BlockedUser

Mostrar atributos secundários

* * *

data\[\]BlockedUser

Mostrar atributos secundários

* * *

messaging\_productstring

* * *

wa\_idstring

* * *

pagingPaging

Mostrar atributos secundários

* * *

cursorsPaginationCursors

Mostrar atributos secundários

* * *

afterstring

* * *

beforestring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Get blocked users": {    "value": {      "data": {        "0": {          "messaging_product": "whatsapp",          "wa_id": "16505551234"        }      },      "paging": {        "cursors": {          "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",          "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"        }      }    }  }}
```

* * *

## POST /{Version}/{Phone-Number-ID}/block\_users

-   Guia: [Bloquear usuários](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
-   Referência de endpoint: [POST WhatsApp Business Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Creating)
    

### Sintaxe da solicitação

**POST** /{Version}/{Phone-Number-ID}/block\_users

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "block_users": {    "0": {      "user": "+16505551234"    }  },  "messaging_product": "whatsapp"}'
```

Selecionar código do status

200

* * *

```
{  "Block user(s)": {    "value": {      "block_users": {        "added_users": {          "0": {            "input": "+16505551234",            "wa_id": "16505551234"          }        }      },      "messaging_product": "whatsapp"    }  }}
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

Phone-Number-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

block\_usersarray of object

Mostrar atributos secundários

* * *

block\_users\[\]object

Mostrar atributos secundários

* * *

userstring

* * *

messaging\_productstring

Respostas

* * *

-   Guia: [Bloquear usuários](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
-   Referência de endpoint: [POST WhatsApp Business Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Creating)
    

200

Bloquear usuário(s)

Tipo de conteúdo:application/json

Esquema:BlockUsersData

Mostrar atributos secundários

* * *

BlockUsersData

* * *

block\_usersBlockUsersResult

Mostrar atributos secundários

* * *

added\_usersarray of BlockedUserOperation

Mostrar atributos secundários

* * *

added\_users\[\]BlockedUserOperation

Mostrar atributos secundários

* * *

inputstring

* * *

wa\_idstring

* * *

messaging\_productstring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "block_users": {    "0": {      "user": "+16505551234"    }  },  "messaging_product": "whatsapp"}'
```

Selecionar código do status

200

* * *

```
{  "Block user(s)": {    "value": {      "block_users": {        "added_users": {          "0": {            "input": "+16505551234",            "wa_id": "16505551234"          }        }      },      "messaging_product": "whatsapp"    }  }}
```

* * *

## DELETE /{Version}/{Phone-Number-ID}/block\_users

-   Guia: [Bloquear usuários](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
-   Referência de endpoint: [DELETE WhatsApp Business Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Deleting)
    

### Sintaxe da solicitação

**DELETE** /{Version}/{Phone-Number-ID}/block\_users

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "block_users": {    "0": {      "user": "+16505551234"    }  },  "messaging_product": "whatsapp"}'
```

Selecionar código do status

200

* * *

```
{  "Unblock user(s)": {    "value": {      "block_users": {        "removed_users": {          "0": {            "input": "+16505551234",            "wa_id": "16505551234"          }        }      },      "messaging_product": "whatsapp"    }  }}
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

Phone-Number-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

block\_usersarray of object

Mostrar atributos secundários

* * *

block\_users\[\]object

Mostrar atributos secundários

* * *

userstring

* * *

messaging\_productstring

Respostas

* * *

-   Guia: [Bloquear usuários](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
-   Referência de endpoint: [DELETE WhatsApp Business Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Deleting)
    

200

Desbloquear usuário(s)

Tipo de conteúdo:application/json

Esquema:UnblockUsersData

Mostrar atributos secundários

* * *

UnblockUsersData

* * *

block\_usersUnblockUsersResult

Mostrar atributos secundários

* * *

removed\_usersarray of BlockedUserOperation

Mostrar atributos secundários

* * *

removed\_users\[\]BlockedUserOperation

Mostrar atributos secundários

* * *

inputstring

* * *

wa\_idstring

* * *

messaging\_productstring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "block_users": {    "0": {      "user": "+16505551234"    }  },  "messaging_product": "whatsapp"}'
```

Selecionar código do status

200

* * *

```
{  "Unblock user(s)": {    "value": {      "block_users": {        "removed_users": {          "0": {            "input": "+16505551234",            "wa_id": "16505551234"          }        }      },      "messaging_product": "whatsapp"    }  }}
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