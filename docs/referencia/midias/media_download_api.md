<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-download-api -->
<!-- Scraped: 2025-12-20T17:58:15.330Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Download de Mídia

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/media/media-download-api/v23.0.md/)

Version

v23.0

Baixe arquivos de mídia usando URLs obtidas de endpoints de recuperação de mídia.

Retorna conteúdo de mídia binária com cabeçalhos de tipo MIME apropriados.

As URLs de mídia expiram após 5 minutos e devem ser reobtidas se expiradas.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Media-URL}](#get-version-media-url)

* * *

## GET /{Version}/{Media-URL}

Baixe arquivos de mídia usando URLs obtidas dos endpoints de recuperação de mídia.

Exige Token de Acesso do Usuário com permissão whatsapp\_business\_messaging.

As URLs de mídia expiram após 5 minutos e devem ser reobtidas se expiradas.

Retorna conteúdo binário com cabeçalhos de tipo MIME apropriados.

### Sintaxe da solicitação

**GET** /{Version}/{Media-URL}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Media-URL}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Download Media": {    "value": ""  }}
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

Media-URLstring·obrigatório

Respostas

* * *

Baixe arquivos de mídia usando URLs obtidas dos endpoints de recuperação de mídia.

Exige Token de Acesso do Usuário com permissão whatsapp\_business\_messaging.

As URLs de mídia expiram após 5 minutos e devem ser reobtidas se expiradas.

Retorna conteúdo binário com cabeçalhos de tipo MIME apropriados.

200

Baixar Mídia

Tipo de conteúdo:text/plain

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Media-URL}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Download Media": {    "value": ""  }}
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