<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-api -->
<!-- Scraped: 2025-12-20T17:58:06.803Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Mídia

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/media/media-api/v23.0.md/)

Version

v23.0

Recuperar e excluir arquivos de mídia carregados por ID de mídia.

Obter URLs de mídia com metadados de arquivo, incluindo tamanho, tipo MIME e hash SHA256.

As URLs de mídia são válidas por 5 minutos após a recuperação.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Media-ID}](#get-version-media-id)

DELETE

[/{Version}/{Media-ID}](#delete-version-media-id)

* * *

## GET /{Version}/{Media-ID}

Para recuperar a URL da mídia, faça uma chamada GET para /{{Media-ID}}. Use a URL retornada para baixar o arquivo de mídia. Observe que clicar nessa URL (ou seja, realizar um GET genérico) não retornará a mídia; você deve incluir um token de acesso. Para obter mais informações, consulte [Baixar Mídia](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

  

Você também pode usar a consulta opcional ?phone\_number\_id para Recuperar URL da Mídia e Excluir Mídia. Esse parâmetro verifica se a mídia pertence ao número de telefone antes da recuperação ou exclusão.

  

#### 

Resposta

  

Uma resposta bem-sucedida inclui um objeto com uma URL de mídia. A URL é válida por apenas 5 minutos. Para usar essa URL, consulte [Baixar Mídia](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

### Sintaxe da solicitação

**GET** /{Version}/{Media-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Media-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Retrieve Media URL": {    "value": {      "file_size": "303833",      "id": "2621233374848975",      "messaging_product": "whatsapp",      "mime_type": "image/jpeg",      "sha256": "<HASH>",      "url": "<URL>"    }  }}
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

Media-IDstring·obrigatório

Query Parameters

* * *

phone\_number\_idstring

Especifica que essa ação só seja realizada se a mídia pertencer ao número de telefone fornecido.

Respostas

* * *

Para recuperar a URL da mídia, faça uma chamada GET para /{{Media-ID}}. Use a URL retornada para baixar o arquivo de mídia. Observe que clicar nessa URL (ou seja, realizar um GET genérico) não retornará a mídia; você deve incluir um token de acesso. Para obter mais informações, consulte [Baixar Mídia](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

  

Você também pode usar a consulta opcional ?phone\_number\_id para Recuperar URL da Mídia e Excluir Mídia. Esse parâmetro verifica se a mídia pertence ao número de telefone antes da recuperação ou exclusão.

  

#### 

Resposta

  

Uma resposta bem-sucedida inclui um objeto com uma URL de mídia. A URL é válida por apenas 5 minutos. Para usar essa URL, consulte [Baixar Mídia](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

200

Recuperar URL da Mídia

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

file\_sizestring

* * *

idstring

* * *

messaging\_productstring

* * *

mime\_typestring

* * *

sha256string

* * *

urlstring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Media-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Retrieve Media URL": {    "value": {      "file_size": "303833",      "id": "2621233374848975",      "messaging_product": "whatsapp",      "mime_type": "image/jpeg",      "sha256": "<HASH>",      "url": "<URL>"    }  }}
```

* * *

## DELETE /{Version}/{Media-ID}

Para excluir mídia, faça uma chamada DELETE para o ID da mídia que você deseja excluir.

  

## 

## Pré-requisitos

-   [Token de Acesso do Usuário](https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens) com permissão whatsapp\_business\_messaging
    
-   ID do objeto de mídia de endpoint de upload de mídia ou Webhooks de mensagem de mídia
    

### Sintaxe da solicitação

**DELETE** /{Version}/{Media-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{Media-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Delete Media": {    "value": {      "success": true    }  }}
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

Media-IDstring·obrigatório

Query Parameters

* * *

phone\_number\_idstring

Especifica que a exclusão da mídia só seja realizada se a mídia pertencer ao número de telefone fornecido.

Respostas

* * *

Para excluir mídia, faça uma chamada DELETE para o ID da mídia que você deseja excluir.

  

## 

## Pré-requisitos

-   [Token de Acesso do Usuário](https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens) com permissão whatsapp\_business\_messaging
    
-   ID do objeto de mídia de endpoint de upload de mídia ou Webhooks de mensagem de mídia
    

200

Excluir Mídia

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{Media-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Delete Media": {    "value": {      "success": true    }  }}
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