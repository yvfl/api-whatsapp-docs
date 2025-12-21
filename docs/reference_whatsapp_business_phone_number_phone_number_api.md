<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-api -->
<!-- Scraped: 2025-12-20T18:02:30.039Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Número de Telefone

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-api/v23.0.md/)

Version

v23.0

[API da Nuvem do WhatsApp](https://developers.facebook.com/docs/whatsapp/cloud-api), hospedada pela Meta, é a API oficial da Plataforma de Negócios do WhatsApp usada para mensagens de negócios. Essa coleção contém consultas comuns, respostas de amostra e links para documentação de suporte que podem ajudá-lo a começar rapidamente com a API.

  

## 

## Visão Geral da API da Nuvem

  

A API da Nuvem permite que empresas de médio e grande porte comuniquem-se com os clientes em escala. Usando a API, as empresas podem criar sistemas que conectem milhares de clientes com agentes ou bots, permitindo tanto a comunicação programática quanto manual. Além disso, as empresas podem integrar a API com vários sistemas de back-end, como plataformas de CRM e marketing.

  

[https://developers.facebook.com/docs/whatsapp/cloud-api/overview](https://developers.facebook.com/docs/whatsapp/cloud-api/overview)

  

## 

## Começando com a API da Nuvem

  

Para usar a API e essa coleção, você deve ter um portfólio de negócios da Meta, uma Conta de Negócios do WhatsApp e um número de telefone de negócios. Se você completar as etapas no guia de início rápido da API da Nuvem [Começar](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started), esses ativos serão criados para você.

  

## 

## Começando como Parceiro de Solução

  

[Este guia](https://developers.facebook.com/docs/whatsapp/solution-providers/get-started-for-solution-partners) explica as etapas que os Parceiros de Solução precisam seguir para oferecer a API da Nuvem aos seus clientes.

  

## 

## Migrando da API Local para a API da Nuvem

  

[Este guia explica como migrar](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/migrating-from-onprem-to-cloud) números de telefone de negócios da API Local para a API da Nuvem.

  

## 

## Ambiente

  

Essa coleção tem um ambiente correspondente da API da Nuvem do WhatsApp Postman [ambiente](https://l.facebook.com/l.php?u=https%3A%2F%2Flearning.postman.com%2Fdocs%2Fsending-requests%2Fmanaging-environments%2F&h=AT2AWOOebp8xj72Ds1JrtBHFwQ8Yb7PAnaa7sIpo3xnFufhc1P_MM_rZx5A61Gi1-l3RvIJPVctXUsMbhGiH02vPV-FHec6eyxwf_rstZHAMZPZL2hWUZ95mOiHsWxZbyu-V92KwJq1jlbMvD3fmtmrrBWg) que você deve selecionar ao usar a coleção. Defina valores atuais para as variáveis definidas nesse ambiente se desejar usar a coleção para realizar consultas.

  

Você pode encontrar a maioria desses valores no [Gerenciador do WhatsApp](https://business.facebook.com/wa/manage/home/) ou no painel WhatsApp > Começar no [painel do aplicativo](https://developers.facebook.com/apps). No entanto, se você tiver um token de acesso e o ID do portfólio de negócios, você pode usar consultas na coleção para obter os valores restantes.

  

## 

## Tokens de Acesso

  

A API suporta tokens de acesso de usuário e de usuário do sistema. Você pode obter um token de acesso de usuário carregando seu aplicativo no [painel do aplicativo](https://developers.facebook.com/apps) e navegando até o painel WhatsApp > Começar.

  

Como os tokens de acesso de usuário expiram após 24 horas, você provavelmente desejará gerar um token de acesso de usuário do sistema, que dura até 60 dias (ou permanentemente, se desejar). Consulte [Tokens de Acesso](https://developers.facebook.com/docs/whatsapp/business-management-api/get-started#access-tokens) para saber como criar um usuário do sistema e um token de acesso de usuário do sistema.

  

Uma vez que você tenha o token, salve-o como um valor atual no ambiente.

  

## 

## ID do Portfólio de Negócios

  

Você pode obter o ID do portfólio de negócios entrando no [Meta Business Suite](https://business.facebook.com). O ID aparece na URL como o valor do parâmetro de consulta business\_id. Uma vez que você salve isso como um valor atual no ambiente, vá para a pasta da Conta de Negócios do WhatsApp (WABA) e execute a consulta Obter todas as WABAs de propriedade. Isso retornará o ID da WABA, que você pode salvar no ambiente e usar para determinar o ID do número de telefone de negócios.

  

## 

## Permissões

  

A API depende apenas de duas permissões:

  

-   whatsapp\_business\_management
    
-   whatsapp\_business\_messaging
    

  

Observe que, se você obter um token de acesso de usuário do painel do aplicativo, seu aplicativo será automaticamente concedido essas

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings](#get-version-phone-number-id-whatsapp-commerce-settings)

POST

[/{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings](#post-version-phone-number-id-whatsapp-commerce-settings)

* * *

## GET /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/sell-products-and-services) (Cloud API)
    
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

-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/sell-products-and-services) (Cloud API)
    
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

-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/sell-products-and-services) (Cloud API)
    
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

-   Guia: [Vender Produtos e Serviços](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/sell-products-and-services) (Cloud API)
    
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

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)