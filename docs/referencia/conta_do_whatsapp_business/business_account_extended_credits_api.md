<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/business-account-extended-credits-api -->
<!-- Scraped: 2026-03-10T21:57:36.420Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Créditos Estendidos para Contas Empresariais

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/business-account-extended-credits-api/v23.0.md/)

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

  

Essa coleção tem um ambiente correspondente da API da Nuvem do WhatsApp Postman [ambiente](https://l.facebook.com/l.php?u=https%3A%2F%2Flearning.postman.com%2Fdocs%2Fsending-requests%2Fmanaging-environments%2F&h=AT5jOuFGTZqdsRFVLlATE2bpOcYxL-aMvv667azSKIHvxzWvJ9ulUy5L-Ior6jzosHo1ec97ObKUp478ruRw8sBugEMwTDgbA6U-QnEysxNVEddgeUk_yvZCk1JdncGAuPnG_O-JAuSQbno54SzicgN_F8o) que você deve selecionar ao usar a coleção. Defina valores atuais para as variáveis definidas nesse ambiente se desejar usar a coleção para realizar consultas.

  

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