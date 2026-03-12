<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api -->
<!-- Scraped: 2026-03-10T21:58:57.726Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Conta de Negócios do WhatsApp - API de Aplicativos Assinados

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api/v23.0.md/)

Version

v23.0

API para gerenciar assinaturas de aplicativos para webhooks de contas de negócios do WhatsApp e recuperar detalhes de assinatura. Esse endpoint permite que os aplicativos se inscrevam, se desinscrevam e consultem assinaturas de webhook para contas de negócios do WhatsApp.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{WABA-ID}/subscribed\_apps](#get-version-waba-id-subscribed-apps)

POST

[/{Version}/{WABA-ID}/subscribed\_apps](#post-version-waba-id-subscribed-apps)

DELETE

[/{Version}/{WABA-ID}/subscribed\_apps](#delete-version-waba-id-subscribed-apps)

* * *

## GET /{Version}/{WABA-ID}/subscribed\_apps

Recuperar uma lista de todos os aplicativos atualmente inscritos em eventos de webhook

para a Conta de Negócios do WhatsApp especificada.

  

  

Casos de Uso:

-   Monitorar quais aplicativos estão inscritos em eventos de webhook do WABA
    
-   Auditoriar configurações e permissões de assinatura
    
-   Verificar o status de assinatura antes de fazer alterações
    
-   Recuperar detalhes de assinatura para solucionar problemas
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os dados de assinatura podem ser armazenados em cache por curtos períodos, mas podem mudar quando os aplicativos se inscrevem ou cancelam a inscrição. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{WABA-ID}/subscribed\_apps

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/subscribed_apps' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_subscriptions": {    "summary": "Multiple apps subscribed to WABA",    "value": {      "data": {        "0": {          "whatsapp_business_api_data": {            "id": "1234567890123456",            "name": "Business Messaging App",            "link": "https://www.facebook.com/games/?app_id=1234567890123456"          }        },        "1": {          "whatsapp_business_api_data": {            "id": "2345678901234567",            "name": "Customer Support Bot",            "link": "https://www.facebook.com/games/?app_id=2345678901234567"          }        }      }    }  },  "no_subscriptions": {    "summary": "No apps subscribed to WABA",    "value": {      "data": []    }  }}
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

Versão da Graph API a ser usada para essa solicitação. Determina o comportamento da API e os recursos disponíveis.

WABA-IDstring·obrigatório

ID da Conta de Negócios do WhatsApp. Esse ID pode ser encontrado no seu Gerenciador do WhatsApp ou por meio de APIs de gerenciamento de negócios.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados. Campos disponíveis: id, nome, link

Respostas

* * *

Recuperar uma lista de todos os aplicativos atualmente inscritos em eventos de webhook

para a Conta de Negócios do WhatsApp especificada.

  

  

Casos de Uso:

-   Monitorar quais aplicativos estão inscritos em eventos de webhook do WABA
    
-   Auditoriar configurações e permissões de assinatura
    
-   Verificar o status de assinatura antes de fazer alterações
    
-   Recuperar detalhes de assinatura para solucionar problemas
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os dados de assinatura podem ser armazenados em cache por curtos períodos, mas podem mudar quando os aplicativos se inscrevem ou cancelam a inscrição. Implemente estratégias de invalidação de cache apropriadas.

200

Lista de aplicativos assinados recuperada com sucesso

Tipo de conteúdo:application/json

Esquema:SubscribedAppsResponse

Mostrar atributos secundários

* * *

SubscribedAppsResponse

* * *

dataarray of SubscribedApp·obrigatório

Matriz de aplicações assinadas

Mostrar atributos secundários

* * *

data\[\]SubscribedApp

Detalhes do aplicativo inscrito

Mostrar atributos secundários

* * *

whatsapp\_business\_api\_dataWhatsAppBusinessApiData·obrigatório

Dados de assinatura do aplicativo para Conta de Negócios do WhatsApp

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para o aplicativo assinado

* * *

namestring·obrigatório

Nome do aplicativo assinado

* * *

linkstring

Link da URL para o aplicativo

* * *

override\_callback\_uristring

URL de callback de webhook personalizado para esta assinatura

400

Requisição Inválida - Parâmetros inválidos ou requisição malformada

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

401

Não autorizado - Token de acesso inválido ou ausente

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

403

Proibido - Permissões insuficientes ou acesso negado

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

404

Não Encontrado - O ID WABA não existe ou não está acessível

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

422

Entidade Não Processável - Parâmetros da solicitação são válidos, mas não podem ser processados

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

429

Muitos Pedidos - Limite de taxa excedido

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

500

Erro Interno do Servidor - Erro inesperado do servidor

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/subscribed_apps' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_subscriptions": {    "summary": "Multiple apps subscribed to WABA",    "value": {      "data": {        "0": {          "whatsapp_business_api_data": {            "id": "1234567890123456",            "name": "Business Messaging App",            "link": "https://www.facebook.com/games/?app_id=1234567890123456"          }        },        "1": {          "whatsapp_business_api_data": {            "id": "2345678901234567",            "name": "Customer Support Bot",            "link": "https://www.facebook.com/games/?app_id=2345678901234567"          }        }      }    }  },  "no_subscriptions": {    "summary": "No apps subscribed to WABA",    "value": {      "data": []    }  }}
```

* * *

## POST /{Version}/{WABA-ID}/subscribed\_apps

Inscreva seu aplicativo em eventos de webhook para a Conta de Negócios do WhatsApp especificada.

Isso permite que seu aplicativo receba notificações em tempo real para eventos como entregas de mensagens, atualizações de status e outras atividades do WABA.

  

  

Casos de Uso:

-   Ativar notificações de webhook para seu aplicativo
    
-   Configurar URLs de callback personalizadas para entrega de webhook
    
-   Configurar tokens de verificação de webhook para segurança
    
-   Substituir as configurações de webhook padrão do aplicativo para WABAs específicas
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. As operações de assinatura podem ter limitação adicional para prevenir abusos.

  

  

Segurança:

Sempre use pontos de extremidade HTTPS para callbacks de webhook. Verifique a autenticidade do webhook usando os tokens de verificação fornecidos e a validação de assinatura.

### Sintaxe da solicitação

**POST** /{Version}/{WABA-ID}/subscribed\_apps

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/subscribed_apps' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "basic_subscription_success": {    "summary": "Basic subscription successful",    "value": {      "success": true    }  },  "custom_callback_success": {    "summary": "Custom callback subscription successful",    "value": {      "success": true,      "data": {        "0": {          "override_callback_uri": "https://your-webhook-endpoint.com/webhook",          "whatsapp_business_api_data": {            "id": "1234567890123456",            "name": "Business Messaging App",            "link": "https://www.facebook.com/games/?app_id=1234567890123456"          }        }      }    }  }}
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

Versão da Graph API a ser usada para essa solicitação. Determina o comportamento da API e os recursos disponíveis.

WABA-IDstring·obrigatório

ID da Conta de Negócios do WhatsApp. Esse ID pode ser encontrado no seu Gerenciador do WhatsApp ou por meio das APIs de gerenciamento de negócios.

Corpo da solicitaçãoOpcional

* * *

Configuração opcional para assinatura de webhook

Tipo de conteúdo:application/json

Esquema:SubscriptionRequest

Mostrar atributos secundários

* * *

SubscriptionRequest

* * *

override\_callback\_uristring

URL de callback de webhook personalizado para substituir o padrão do aplicativo

* * *

verify\_tokenstring

Token de verificação para segurança de webhook

Respostas

* * *

Inscreva seu aplicativo em eventos de webhook para a Conta de Negócios do WhatsApp especificada.

Isso permite que seu aplicativo receba notificações em tempo real para eventos como entregas de mensagens, atualizações de status e outras atividades do WABA.

  

  

Casos de Uso:

-   Ativar notificações de webhook para seu aplicativo
    
-   Configurar URLs de callback personalizadas para entrega de webhook
    
-   Configurar tokens de verificação de webhook para segurança
    
-   Substituir as configurações de webhook padrão do aplicativo para WABAs específicas
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. As operações de assinatura podem ter limitação adicional para prevenir abusos.

  

  

Segurança:

Sempre use pontos de extremidade HTTPS para callbacks de webhook. Verifique a autenticidade do webhook usando os tokens de verificação fornecidos e a validação de assinatura.

200

Inscrito com sucesso nos webhooks do WABA

Tipo de conteúdo:application/json

Esquema:SubscriptionResponse

Mostrar atributos secundários

* * *

SubscriptionResponse

* * *

successboolean·obrigatório

Indica se a operação de assinatura foi bem-sucedida

* * *

dataarray of SubscribedApp

Matriz contendo detalhes da assinatura

Mostrar atributos secundários

* * *

data\[\]SubscribedApp

Detalhes do aplicativo inscrito

Mostrar atributos secundários

* * *

whatsapp\_business\_api\_dataWhatsAppBusinessApiData·obrigatório

Dados de assinatura do aplicativo para Conta de Negócios do WhatsApp

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para o aplicativo assinado

* * *

namestring·obrigatório

Nome do aplicativo assinado

* * *

linkstring

Link da URL para o aplicativo

* * *

override\_callback\_uristring

URL de callback de webhook personalizado para esta assinatura

400

Requisição Inválida - Parâmetros inválidos ou requisição malformada

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

401

Não autorizado - Token de acesso inválido ou ausente

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

403

Proibido - Permissões insuficientes ou acesso negado

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

404

Não Encontrado - O ID WABA não existe ou não está acessível

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

422

Entidade Não Processável - Parâmetros da solicitação são válidos, mas não podem ser processados

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

429

Muitos Pedidos - Limite de taxa excedido

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

500

Erro Interno do Servidor - Erro inesperado do servidor

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/subscribed_apps' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "basic_subscription_success": {    "summary": "Basic subscription successful",    "value": {      "success": true    }  },  "custom_callback_success": {    "summary": "Custom callback subscription successful",    "value": {      "success": true,      "data": {        "0": {          "override_callback_uri": "https://your-webhook-endpoint.com/webhook",          "whatsapp_business_api_data": {            "id": "1234567890123456",            "name": "Business Messaging App",            "link": "https://www.facebook.com/games/?app_id=1234567890123456"          }        }      }    }  }}
```

* * *

## DELETE /{Version}/{WABA-ID}/subscribed\_apps

Desinscreva sua aplicação dos eventos de webhook para a Conta de Negócios do WhatsApp especificada.

Isso irá parar de receber notificações de webhook para essa WABA.

  

  

Casos de Uso:

-   Desativar notificações de webhook quando não forem mais necessárias
    
-   Limpar assinaturas durante a desativação da aplicação
    
-   Desativar temporariamente os webhooks para manutenção
    
-   Remover assinaturas para WABAs que não são mais gerenciadas pela sua aplicação
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. As operações de desassinatura são processadas normalmente de forma imediata.

  

  

Importante:

A desassinatura irá parar imediatamente todas as entregas de webhook para essa WABA.

Certifique-se de que sua aplicação possa lidar com a cessação dos eventos de webhook de forma elegante.

### Sintaxe da solicitação

**DELETE** /{Version}/{WABA-ID}/subscribed\_apps

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/subscribed_apps' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "unsubscribe_success": {    "summary": "Unsubscription successful",    "value": {      "success": true    }  }}
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

Versão da Graph API a ser usada para essa solicitação. Determina o comportamento da API e os recursos disponíveis.

WABA-IDstring·obrigatório

ID da Conta de Negócios do WhatsApp. Esse ID pode ser encontrado no seu Gerenciador do WhatsApp ou por meio de APIs de gerenciamento de negócios.

Respostas

* * *

Desinscreva sua aplicação dos eventos de webhook para a Conta de Negócios do WhatsApp especificada.

Isso irá parar de receber notificações de webhook para essa WABA.

  

  

Casos de Uso:

-   Desativar notificações de webhook quando não forem mais necessárias
    
-   Limpar assinaturas durante a desativação da aplicação
    
-   Desativar temporariamente os webhooks para manutenção
    
-   Remover assinaturas para WABAs que não são mais gerenciadas pela sua aplicação
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. As operações de desassinatura são processadas normalmente de forma imediata.

  

  

Importante:

A desassinatura irá parar imediatamente todas as entregas de webhook para essa WABA.

Certifique-se de que sua aplicação possa lidar com a cessação dos eventos de webhook de forma elegante.

200

Desinscrito com sucesso dos webhooks do WABA

Tipo de conteúdo:application/json

Esquema:SubscriptionResponse

Mostrar atributos secundários

* * *

SubscriptionResponse

* * *

successboolean·obrigatório

Indica se a operação de assinatura foi bem-sucedida

* * *

dataarray of SubscribedApp

Matriz contendo detalhes da assinatura

Mostrar atributos secundários

* * *

data\[\]SubscribedApp

Detalhes do aplicativo inscrito

Mostrar atributos secundários

* * *

whatsapp\_business\_api\_dataWhatsAppBusinessApiData·obrigatório

Dados de assinatura do aplicativo para Conta de Negócios do WhatsApp

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para o aplicativo assinado

* * *

namestring·obrigatório

Nome do aplicativo assinado

* * *

linkstring

Link da URL para o aplicativo

* * *

override\_callback\_uristring

URL de callback de webhook personalizado para esta assinatura

400

Requisição Inválida - Parâmetros inválidos ou requisição malformada

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

401

Não autorizado - Token de acesso inválido ou ausente

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

403

Proibido - Permissões insuficientes ou acesso negado

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

404

Não Encontrado - O ID WABA não existe ou a assinatura não foi encontrada

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

422

Entidade Não Processável - Parâmetros da solicitação são válidos, mas não podem ser processados

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

429

Muitos Pedidos - Limite de taxa excedido

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

500

Erro Interno do Servidor - Erro inesperado do servidor

Tipo de conteúdo:application/json

Esquema:GraphAPIError

Mostrar atributos secundários

* * *

GraphAPIError

* * *

errorobject·obrigatório

Mostrar atributos secundários

* * *

messagestring·obrigatório

Mensagem de erro legível por humanos

* * *

typestring·obrigatório

Tipo de categoria de erro

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Código de suberro mais específico quando disponível

* * *

fbtrace\_idstring

Identificador único para depuração e solicitações de suporte com a Meta

* * *

is\_transientboolean

Indica se este erro é temporário e a solicitação deve ser repetida

* * *

error\_user\_titlestring

Título de erro de fácil uso para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/subscribed_apps' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "unsubscribe_success": {    "summary": "Unsubscription successful",    "value": {      "success": true    }  }}
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