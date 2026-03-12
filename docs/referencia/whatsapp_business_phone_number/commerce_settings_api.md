<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/commerce-settings-api -->
<!-- Scraped: 2026-03-10T22:00:11.704Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Configurações de Comércio

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/commerce-settings-api/v23.0.md/)

Version

v23.0

Configure as configurações de comércio do WhatsApp Business, incluindo visibilidade de catálogo e ativação de carrinho de compras. Recupere e atualize as configurações de comércio para números de telefone comerciais.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings](#get-version-phone-number-id-whatsapp-commerce-settings)

POST

[/{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings](#post-version-phone-number-id-whatsapp-commerce-settings)

* * *

## GET /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
    
-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
    
-   Referência de endpoint: [Número de Telefone do Negócio do WhatsApp > Configurações do Comércio do WhatsApp](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)
    

### Sintaxe da solicitação

**GET** /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_commerce_settings' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "data": {        "0": {          "id": "527759822865714",          "is_cart_enabled": true,          "is_catalog_visible": true        }      }    }  }}
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

Phone-Number-IDstring·obrigatório

Respostas

* * *

-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
    
-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
    
-   Referência de endpoint: [Número de Telefone do Negócio do WhatsApp > Configurações do Comércio do WhatsApp](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)
    

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

is\_cart\_enabledboolean

* * *

is\_catalog\_visibleboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_commerce_settings' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "data": {        "0": {          "id": "527759822865714",          "is_cart_enabled": true,          "is_catalog_visible": true        }      }    }  }}
```

* * *

## POST /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
    
-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
    
-   Referência de endpoint: [Número de Telefone do Negócio do WhatsApp > Configurações do Comércio do WhatsApp](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)
    

### Sintaxe da solicitação

**POST** /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_commerce_settings' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "success": true    }  }}
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

Phone-Number-IDstring·obrigatório

Query Parameters

* * *

is\_cart\_enabledstring

is\_catalog\_visiblestring

Respostas

* * *

-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
    
-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
    
-   Referência de endpoint: [Número de Telefone do Negócio do WhatsApp > Configurações do Comércio do WhatsApp](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)
    

200

Resposta de exemplo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_commerce_settings' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "success": true    }  }}
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