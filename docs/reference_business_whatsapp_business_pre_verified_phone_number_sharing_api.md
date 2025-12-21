<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-number-sharing-api -->
<!-- Scraped: 2025-12-20T17:57:20.791Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Compartilhamento de Número de Telefone Pré-Verificado do WhatsApp Business

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-number-sharing-api/v23.0.md/)

Version

v23.0

API para compartilhar números de telefone pré-verificados do WhatsApp Business entre entidades comerciais,

habilitando a gestão colaborativa de números de telefone e fluxos de trabalho de parceria.

  

Este endpoint permite que empresas autorizadas compartilhem números de telefone pré-verificados com

empresas parceiras, facilitando integrações do WhatsApp em várias empresas, mantendo controles de acesso

adequados e limites de propriedade. Números de telefone compartilhados podem ser usados por empresas

parceiras para operações de mensagens do WhatsApp Business.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Business-ID}/share\_preverified\_numbers](#post-version-business-id-share-preverified-numbers)

* * *

## POST /{Version}/{Business-ID}/share\_preverified\_numbers

Compartilhe um número de telefone pré-verificado com outra entidade empresarial, concedendo permissões específicas para operações de mensagens colaborativas do WhatsApp Business.

  

  

Casos de Uso:

-   Permitir que empresas parceiras usem seus números de telefone pré-verificados para mensagens
    
-   Compartilhar recursos de números de telefone entre empresas mãe e filiais
    
-   Facilitar integrações do WhatsApp com vários negócios com acesso a números de telefone compartilhados
    
-   Estabelecer relações de compartilhamento de números de telefone temporárias ou permanentes
    

  

  

Lógica de Negócios:

-   Apenas empresas com propriedade ou direitos de compartilhamento apropriados podem compartilhar números de telefone
    
-   Números de telefone compartilhados mantêm a propriedade original, concedendo permissões de uso
    
-   Várias empresas podem ter acesso ao mesmo número de telefone com diferentes níveis de permissão
    
-   Relações de compartilhamento podem ter limite de tempo com expiração automática
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de retry apropriada com backoff exponencial.

  

  

Validação:

-   O número de telefone pré-verificado deve existir e estar acessível à empresa solicitante
    
-   A empresa de destino deve ser uma entidade empresarial válida e acessível
    
-   As permissões solicitadas devem ser válidas e dentro do escopo das permissões de compartilhamento permitidas
    
-   A operação de compartilhamento deve estar em conformidade com as políticas de relacionamento e controle de acesso empresarial
    

### Sintaxe da solicitação

**POST** /{Version}/{Business-ID}/share\_preverified\_numbers

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/share_preverified_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "preverified_id": "1234567890123456",  "partner_business_id": "9876543210987654"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_sharing": {    "summary": "Successful phone number sharing operation",    "value": {      "success": true    }  }}
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

Seu ID de negócios que é proprietário ou tem direitos de compartilhamento do número de telefone pré-verificado.

Esse ID pode ser encontrado no seu Gerenciador de Negócios da Meta ou por meio de APIs de gerenciamento de negócios.

Corpo da solicitaçãoObrigatório

* * *

Configuração de compartilhamento de número de telefone e detalhes do negócio de destino

Tipo de conteúdo:application/json

Esquema:PreVerifiedPhoneNumberShareRequest

Mostrar atributos secundários

* * *

PreVerifiedPhoneNumberShareRequest

* * *

preverified\_idstring·obrigatório

Identificador exclusivo do número de telefone pré-verificado a ser compartilhado.

Deve ser um ID de número de telefone válido que o negócio solicitante possui ou tem direitos de compartilhamento.

* * *

partner\_business\_idstring·obrigatório

ID da empresa do parceiro que receberá acesso ao número de telefone pré-verificado.

Deve ser uma entidade empresarial válida acessível ao aplicativo solicitante.

Respostas

* * *

Compartilhe um número de telefone pré-verificado com outra entidade empresarial, concedendo permissões específicas para operações de mensagens colaborativas do WhatsApp Business.

  

  

Casos de Uso:

-   Permitir que empresas parceiras usem seus números de telefone pré-verificados para mensagens
    
-   Compartilhar recursos de números de telefone entre empresas mãe e filiais
    
-   Facilitar integrações do WhatsApp com vários negócios com acesso a números de telefone compartilhados
    
-   Estabelecer relações de compartilhamento de números de telefone temporárias ou permanentes
    

  

  

Lógica de Negócios:

-   Apenas empresas com propriedade ou direitos de compartilhamento apropriados podem compartilhar números de telefone
    
-   Números de telefone compartilhados mantêm a propriedade original, concedendo permissões de uso
    
-   Várias empresas podem ter acesso ao mesmo número de telefone com diferentes níveis de permissão
    
-   Relações de compartilhamento podem ter limite de tempo com expiração automática
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de retry apropriada com backoff exponencial.

  

  

Validação:

-   O número de telefone pré-verificado deve existir e estar acessível à empresa solicitante
    
-   A empresa de destino deve ser uma entidade empresarial válida e acessível
    
-   As permissões solicitadas devem ser válidas e dentro do escopo das permissões de compartilhamento permitidas
    
-   A operação de compartilhamento deve estar em conformidade com as políticas de relacionamento e controle de acesso empresarial
    

200

Número de telefone pré-verificado compartilhado com sucesso com o negócio de destino

Tipo de conteúdo:application/json

Esquema:PreVerifiedPhoneNumberShareResponse

Mostrar atributos secundários

* * *

PreVerifiedPhoneNumberShareResponse

* * *

successboolean·obrigatório

Indica se a operação de compartilhamento foi bem-sucedida

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

Não Encontrado - O recurso não existe ou não está acessível

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/share_preverified_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "preverified_id": "1234567890123456",  "partner_business_id": "9876543210987654"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_sharing": {    "summary": "Successful phone number sharing operation",    "value": {      "success": true    }  }}
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