<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-profile/whatsapp-business-profile-node-api -->
<!-- Scraped: 2025-12-20T18:04:52.540Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API do Nó de Perfil do WhatsApp Business

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-profile/whatsapp-business-profile-node-api/v23.0.md/)

Version

v23.0

Este endpoint permite que os aplicativos recuperem informações abrangentes sobre perfis de negócios do WhatsApp, incluindo detalhes do perfil, informações de contato e metadados de negócios. Isso é essencial para gerenciar o ciclo de vida do perfil de negócios e entender o estado de configuração atual.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{WhatsApp-Business-Profile-ID}](#get-version-whatsapp-business-profile-id)

POST

[/{Version}/{WhatsApp-Business-Profile-ID}](#post-version-whatsapp-business-profile-id)

* * *

## GET /{Version}/{WhatsApp-Business-Profile-ID}

Recupere detalhes abrangentes sobre um Perfil de Negócios do WhatsApp, incluindo informações de negócios, detalhes de contato e configuração de perfil.

  

Casos de Uso:

-   Recuperar informações e metadados do perfil de negócios
    
-   Verificar configuração de perfil e detalhes de contato
    
-   Verificar status do perfil e informações de negócios
    
-   Validar o estado do perfil antes das operações de negócios
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

Os detalhes do perfil podem ser armazenados em cache por períodos moderados, mas as informações de negócios podem mudar ocasionalmente. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{WhatsApp-Business-Profile-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Profile-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "complete_profile": {    "summary": "Complete business profile with all details",    "value": {      "id": "1234567890123456",      "account_name": "E-commerce Business Account",      "description": "Leading e-commerce platform for quality products",      "email": "contact@business-example.com",      "about": "Quality products delivered worldwide",      "address": "123 Business Street, Commerce City, CC 12345",      "vertical": "RETAIL",      "websites": {        "0": "https://www.business-example.com",        "1": null      },      "profile_picture_url": "https://pps.whatsapp.net/v/profile-picture-url",      "messaging_product": "whatsapp"    }  },  "minimal_profile": {    "summary": "Minimal business profile with required fields only",    "value": {      "id": "2345678901234567"    }  }}
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

WhatsApp-Business-Profile-IDstring·obrigatório

Seu ID de perfil do WhatsApp Business. Esse ID é fornecido quando o perfil é criado e pode ser encontrado no Gerenciador de Negócios do WhatsApp ou por meio de APIs de gerenciamento de negócios.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado,

os campos padrão serão retornados (id e quaisquer campos de perfil disponíveis).

Campos disponíveis: id, nome\_da\_conta, descrição, email, sobre, endereço, vertical, sites, url\_da\_foto\_do\_perfil, produto\_de\_mensagem

Respostas

* * *

Recupere detalhes abrangentes sobre um Perfil de Negócios do WhatsApp, incluindo informações de negócios, detalhes de contato e configuração de perfil.

  

Casos de Uso:

-   Recuperar informações e metadados do perfil de negócios
    
-   Verificar configuração de perfil e detalhes de contato
    
-   Verificar status do perfil e informações de negócios
    
-   Validar o estado do perfil antes das operações de negócios
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

Os detalhes do perfil podem ser armazenados em cache por períodos moderados, mas as informações de negócios podem mudar ocasionalmente. Implemente estratégias de invalidação de cache apropriadas.

200

Detalhes do Perfil do WhatsApp Business recuperados com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessProfileNode

Mostrar atributos secundários

* * *

WhatsAppBusinessProfileNode

* * *

idstring·obrigatório

Identificador único para o Perfil de Negócios do WhatsApp

* * *

account\_namestring

Nome da conta de negócios

* * *

descriptionstring

Texto de descrição da empresa

* * *

emailstring (email)

Endereço de e-mail de contato da empresa

* * *

aboutstring

Sobre - Seção de texto para o perfil da empresa

* * *

addressstring

Endereço físico da empresa

* * *

verticalWhatsAppBusinessVertical

Classificação vertical da indústria para o negócio

* * *

websitesarray of string (uri)

Lista de URLs de sites associados ao negócio

Mostrar atributos secundários

* * *

websites\[\]string (uri)

* * *

profile\_picture\_urlstring (uri)

URL da foto de perfil da empresa

* * *

profile\_picture\_handlestring

Manipulador da foto de perfil para operações de upload

* * *

messaging\_product"whatsapp"

O serviço de mensagens utilizado

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

404

Não Encontrado - O ID do Perfil do WhatsApp Business não existe ou não está acessível

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Profile-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "complete_profile": {    "summary": "Complete business profile with all details",    "value": {      "id": "1234567890123456",      "account_name": "E-commerce Business Account",      "description": "Leading e-commerce platform for quality products",      "email": "contact@business-example.com",      "about": "Quality products delivered worldwide",      "address": "123 Business Street, Commerce City, CC 12345",      "vertical": "RETAIL",      "websites": {        "0": "https://www.business-example.com",        "1": null      },      "profile_picture_url": "https://pps.whatsapp.net/v/profile-picture-url",      "messaging_product": "whatsapp"    }  },  "minimal_profile": {    "summary": "Minimal business profile with required fields only",    "value": {      "id": "2345678901234567"    }  }}
```

* * *

## POST /{Version}/{WhatsApp-Business-Profile-ID}

Atualize as informações do perfil do WhatsApp Business, como descrição da empresa, e-mail, endereço e outros detalhes do perfil. Essa operação corresponde à funcionalidade GraphWhatsAppBusinessProfilePost.

  

  

Casos de Uso:

-   Atualizar informações e metadados do perfil da empresa
    
-   Modificar detalhes de contato e descrição da empresa
    
-   Alterar classificação vertical da empresa
    
-   Atualizar URLs do site e foto do perfil
    
-   Manter as informações atuais do perfil da empresa
    

  

  

Upload de Foto do Perfil:

É recomendável usar a API de Upload Resumível para obter um ID de upload, e então usar esse ID de upload para obter o identificador da foto para o campo profile\_picture\_handle.

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

### Sintaxe da solicitação

**POST** /{Version}/{WhatsApp-Business-Profile-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Profile-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "messaging_product": "whatsapp",  "account_name": "Updated E-commerce Business",  "description": "Updated leading e-commerce platform for premium products",  "email": "updated-contact@business-example.com",  "about": "Premium products delivered worldwide with excellent service",  "address": "456 Updated Business Avenue, Commerce City, CC 54321",  "vertical": "RETAIL",  "websites": {    "0": "https://www.updated-business-example.com",    "1": null  },  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_update": {    "summary": "Successful profile update response",    "value": {      "id": "1234567890123456",      "success": true    }  }}
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

WhatsApp-Business-Profile-IDstring·obrigatório

Seu ID de perfil do WhatsApp Business. Esse ID é fornecido quando o perfil é criado e pode ser encontrado no Gerenciador de Negócios do WhatsApp ou por meio de APIs de gerenciamento de negócios.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessProfileUpdateRequest

Mostrar atributos secundários

* * *

WhatsAppBusinessProfileUpdateRequest

* * *

messaging\_product"whatsapp"·obrigatório

O serviço de mensagens usado para a solicitação

* * *

account\_namestring

Nome da conta de negócios

* * *

descriptionstring

Texto de descrição da empresa

* * *

emailstring (email)

Endereço de e-mail de contato da empresa

* * *

aboutstring

Sobre - Seção de texto para o perfil da empresa

* * *

addressstring

Endereço físico da empresa

* * *

verticalWhatsAppBusinessVertical

Classificação vertical da indústria para o negócio

* * *

websitesarray of string (uri)

Lista de URLs de sites associados ao negócio

Mostrar atributos secundários

* * *

websites\[\]string (uri)

* * *

profile\_picture\_handlestring

Manipulador da foto de perfil gerada da API de Upload Resumível

Respostas

* * *

Atualize as informações do perfil do WhatsApp Business, como descrição da empresa, e-mail, endereço e outros detalhes do perfil. Essa operação corresponde à funcionalidade GraphWhatsAppBusinessProfilePost.

  

  

Casos de Uso:

-   Atualizar informações e metadados do perfil da empresa
    
-   Modificar detalhes de contato e descrição da empresa
    
-   Alterar classificação vertical da empresa
    
-   Atualizar URLs do site e foto do perfil
    
-   Manter as informações atuais do perfil da empresa
    

  

  

Upload de Foto do Perfil:

É recomendável usar a API de Upload Resumível para obter um ID de upload, e então usar esse ID de upload para obter o identificador da foto para o campo profile\_picture\_handle.

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

200

Perfil do WhatsApp Business atualizado com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessProfileUpdateResponse

Mostrar atributos secundários

* * *

WhatsAppBusinessProfileUpdateResponse

* * *

idstring

ID do Perfil do WhatsApp Business que foi atualizado

* * *

successboolean

Indica se a atualização foi bem-sucedida

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

404

Não Encontrado - O ID do Perfil do WhatsApp Business não existe ou não está acessível

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

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

Título de erro de fácil compreensão para fins de exibição

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão para fins de exibição

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Profile-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "messaging_product": "whatsapp",  "account_name": "Updated E-commerce Business",  "description": "Updated leading e-commerce platform for premium products",  "email": "updated-contact@business-example.com",  "about": "Premium products delivered worldwide with excellent service",  "address": "456 Updated Business Avenue, Commerce City, CC 54321",  "vertical": "RETAIL",  "websites": {    "0": "https://www.updated-business-example.com",    "1": null  },  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_update": {    "summary": "Successful profile update response",    "value": {      "id": "1234567890123456",      "success": true    }  }}
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