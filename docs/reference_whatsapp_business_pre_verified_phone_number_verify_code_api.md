<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api -->
<!-- Scraped: 2025-12-20T18:04:29.087Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Número de Telefone Pré-Verificado do WhatsApp Business - API de Código de Verificação

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api/v23.0.md/)

Version

v23.0

API para verificar códigos OTP para números de telefone pré-verificados do WhatsApp Business.

Este endpoint permite que empresas verifiquem códigos OTP que foram enviados para números de telefone pré-verificados durante o processo de verificação de número de telefone.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Pre-Verified-Phone-Number-ID}/verify\_code](#post-version-pre-verified-phone-number-id-verify-code)

* * *

## POST /{Version}/{Pre-Verified-Phone-Number-ID}/verify\_code

Verifique o código OTP recebido para um número de telefone pré-verificado para concluir o processo de verificação. Este endpoint valida o código e atualiza o status de verificação do número de telefone.

  

  

Casos de Uso:

-   Concluir a verificação do número de telefone durante o onboarding do WhatsApp Business
    
-   Verificar a propriedade de números de telefone para mensagens de negócios
    
-   Habilitar números de telefone para uso da API do WhatsApp Business
    

  

  

Limitação de Taxa:

Este endpoint tem limites de taxa específicos para prevenir abusos:

-   125 solicitações por hora para casos de uso de negócios
    
-   As limitações de taxa padrão da Graph API também se aplicam
    

  

  

Validação de Código:

-   Os códigos são sensíveis ao tempo e expiram após um período definido
    
-   Cada código só pode ser usado uma vez
    
-   Códigos inválidos ou expirados resultarão em falha de verificação
    

  

  

Tratamento de Erros:

-   Códigos inválidos retornam 400 Bad Request
    
-   Códigos expirados retornam 422 Unprocessable Entity
    
-   Limite de taxa excedido retorna 429 Too Many Requests
    

### Sintaxe da solicitação

**POST** /{Version}/{Pre-Verified-Phone-Number-ID}/verify\_code

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/verify_code' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "code": "123456"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_verification": {    "summary": "Code verification successful",    "value": {      "success": true    }  }}
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

Pre-Verified-Phone-Number-IDstring·obrigatório

Seu ID de Número de Telefone Pré-Verificado. Esse ID é fornecido quando você cria o número de telefone pré-verificado e pode ser encontrado no Gerenciador de Negócios do WhatsApp ou por meio de APIs de número de telefone.

Corpo da solicitaçãoObrigatório

* * *

Detalhes do código de verificação

Tipo de conteúdo:application/json

Esquema:VerifyCodeRequest

Mostrar atributos secundários

* * *

VerifyCodeRequest

* * *

codestring·obrigatório

O código de verificação numérico recebido por SMS ou chamada de voz.

Este código é fornecido após chamar o endpoint request\_code.

Respostas

* * *

Verifique o código OTP recebido para um número de telefone pré-verificado para concluir o processo de verificação. Este endpoint valida o código e atualiza o status de verificação do número de telefone.

  

  

Casos de Uso:

-   Concluir a verificação do número de telefone durante o onboarding do WhatsApp Business
    
-   Verificar a propriedade de números de telefone para mensagens de negócios
    
-   Habilitar números de telefone para uso da API do WhatsApp Business
    

  

  

Limitação de Taxa:

Este endpoint tem limites de taxa específicos para prevenir abusos:

-   125 solicitações por hora para casos de uso de negócios
    
-   As limitações de taxa padrão da Graph API também se aplicam
    

  

  

Validação de Código:

-   Os códigos são sensíveis ao tempo e expiram após um período definido
    
-   Cada código só pode ser usado uma vez
    
-   Códigos inválidos ou expirados resultarão em falha de verificação
    

  

  

Tratamento de Erros:

-   Códigos inválidos retornam 400 Bad Request
    
-   Códigos expirados retornam 422 Unprocessable Entity
    
-   Limite de taxa excedido retorna 429 Too Many Requests
    

200

Código OTP verificado com sucesso

Tipo de conteúdo:application/json

Esquema:VerifyCodeResponse

Mostrar atributos secundários

* * *

VerifyCodeResponse

* * *

successboolean·obrigatório

Indica se a verificação do código foi bem-sucedida

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

Não Encontrado - O ID do Número de Telefone Pré-Verificado não existe ou não está acessível

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

Entidade Não Processável - O código é inválido, expirou ou já foi utilizado

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/verify_code' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "code": "123456"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_verification": {    "summary": "Code verification successful",    "value": {      "success": true    }  }}
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