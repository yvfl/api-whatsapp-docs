<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/add-phone-numbers-api -->
<!-- Scraped: 2025-12-20T17:56:38.297Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Gerenciamento do WhatsApp Business - Adicionar Números de Telefone API

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/business/add-phone-numbers-api/v23.0.md/)

Version

v23.0

API para adicionar números de telefone a uma Conta de Negócios do WhatsApp.

Este endpoint permite que empresas adicionem números de telefone à sua Conta de Negócios do WhatsApp para fins de mensagens.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Business-ID}/add\_phone\_numbers](#post-version-business-id-add-phone-numbers)

* * *

## POST /{Version}/{Business-ID}/add\_phone\_numbers

Adicione um número de telefone pré-verificado a uma Conta de Negócios do WhatsApp. Este endpoint é usado por Parceiros para criar um pool de números de Parceiros que os clientes finais podem comprar.

  

Casos de Uso:

-   Adicione novos números de telefone para dimensionar as operações de mensagens
    
-   Configure números de telefone para diferentes localizações de negócios
    
-   Gerencie o estoque de números de telefone para mensagens de negócios
    
-   Configure números de telefone para fluxos de trabalho de mensagens específicos
    

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Requisitos do Número de Telefone:

-   Deve estar no formato E.164 (por exemplo, +1234567890)
    
-   Não pode estar registrado em outra Conta de Negócios do WhatsApp
    
-   Deve ser capaz de receber SMS para verificação
    
-   Deve atender às políticas de mensagens de negócios do WhatsApp
    

### Sintaxe da solicitação

**POST** /{Version}/{Business-ID}/add\_phone\_numbers

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/add_phone_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "phone_number": "+1234567890"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "success": {    "summary": "Phone number successfully added",    "value": {      "id": "1234567890123456"    }  }}
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

Business-IDstring·obrigatório

Seu ID da Conta do WhatsApp Business. Esse ID pode ser encontrado no seu Gerenciador de Negócios ou por meio de APIs de gerenciamento de negócios.

Corpo da solicitaçãoObrigatório

* * *

Número de telefone para adicionar à conta comercial

Tipo de conteúdo:application/json

Esquema:AddPhoneNumbersRequest

Mostrar atributos secundários

* * *

AddPhoneNumbersRequest

* * *

phone\_numberstring·obrigatório

Número de telefone para adicionar à conta comercial. Aceita formato E.164 ou números formatados com espaços, hifens e parênteses (por exemplo, +1234567890, +1 (631) 555-1000, +1-631-555-1000). O número de telefone será normalizado e validado pelo endpoint.

Respostas

* * *

Adicione um número de telefone pré-verificado a uma Conta de Negócios do WhatsApp. Este endpoint é usado por Parceiros para criar um pool de números de Parceiros que os clientes finais podem comprar.

  

Casos de Uso:

-   Adicione novos números de telefone para dimensionar as operações de mensagens
    
-   Configure números de telefone para diferentes localizações de negócios
    
-   Gerencie o estoque de números de telefone para mensagens de negócios
    
-   Configure números de telefone para fluxos de trabalho de mensagens específicos
    

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Requisitos do Número de Telefone:

-   Deve estar no formato E.164 (por exemplo, +1234567890)
    
-   Não pode estar registrado em outra Conta de Negócios do WhatsApp
    
-   Deve ser capaz de receber SMS para verificação
    
-   Deve atender às políticas de mensagens de negócios do WhatsApp
    

200

Número de telefone adicionado com sucesso

Tipo de conteúdo:application/json

Esquema:AddPhoneNumbersResponse

Mostrar atributos secundários

* * *

AddPhoneNumbersResponse

* * *

idstring·obrigatório

Identificador único para a entidade de número de telefone pré-verificado que foi criada

400

Solicitação Inválida - Parâmetros inválidos, solicitação malformada ou número de telefone já cadastrado.

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

Não Encontrado - O ID da empresa não existe ou não está acessível

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/add_phone_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "phone_number": "+1234567890"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "success": {    "summary": "Phone number successfully added",    "value": {      "id": "1234567890123456"    }  }}
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