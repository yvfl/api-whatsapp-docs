<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api -->
<!-- Scraped: 2025-12-20T18:04:21.083Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Número de Telefone Pré-Verificado do WhatsApp Business - Solicitar Código de Verificação API

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api/v23.0.md/)

Version

v23.0

API para solicitar códigos de verificação para números de telefone pré-verificados na configuração da Conta de Negócios do WhatsApp.

Este endpoint permite que empresas solicitem códigos de verificação (SMS ou voz) para números de telefone pré-verificados durante o processo de integração da Conta de Negócios do WhatsApp.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Pre-Verified-Phone-Number-ID}/request\_code](#post-version-pre-verified-phone-number-id-request-code)

* * *

## POST /{Version}/{Pre-Verified-Phone-Number-ID}/request\_code

Solicite um código de verificação para um número de telefone pré-verificado por SMS ou chamada de voz.

Isso faz parte do processo de integração da Conta de Negócios do WhatsApp, onde os números de telefone pré-aprovados devem ser verificados antes de poderem ser usados para mensagens.

  

  

Fluxo de Processo:

-   Chame esse endpoint para solicitar um código de verificação
    
-   O usuário recebe o código por SMS ou chamada de voz
    
-   Use o endpoint verify\_code para concluir a verificação
    
-   O número de telefone se torna ativo para mensagens
    

  

  

Limitação de Taxa:

-   Número limitado de solicitações de código por número de telefone por período de tempo
    
-   Recomenda-se backoff exponencial para tentativas de repetição
    
-   Chamadas de voz podem ter restrições adicionais
    

  

  

Suporte a Idiomas:

Mensagens de verificação são enviadas no idioma especificado quando disponível.

Volta para o inglês (en\_US) se o idioma solicitado não for suportado.

  

  

Considerações de Segurança:

-   Os códigos expiram após um curto período de tempo
    
-   Número limitado de tentativas de verificação permitidas
    
-   O número de telefone deve ser pré-verificado e pertencer ao negócio solicitante
    

### Sintaxe da solicitação

**POST** /{Version}/{Pre-Verified-Phone-Number-ID}/request\_code

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/request_code' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "code_method": "SMS",  "language": "en_US"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "success_response": {    "summary": "Successful code request",    "value": {      "success": true    }  }}
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

Seu ID de número de telefone pré-verificado. Esse ID é fornecido quando o número de telefone é pré-verificado e pode ser encontrado nas configurações da sua Conta de Negócios do WhatsApp.

Corpo da solicitaçãoObrigatório

* * *

Parâmetros de solicitação de código de verificação

Tipo de conteúdo:application/json

Esquema:RequestCodeRequest

Mostrar atributos secundários

* * *

RequestCodeRequest

* * *

code\_methodPhoneVerificationMethodCode

Método para receber o código de verificação

* * *

languagestring·obrigatório

Código de idioma/localidade para a mensagem de verificação. Deve ser um identificador de localidade válido.

A mensagem de verificação será enviada nesse idioma, se suportado.

Suporta vários formatos, incluindo xx\_XX, xx-XX e códigos de localidade estendidos.

Respostas

* * *

Solicite um código de verificação para um número de telefone pré-verificado por SMS ou chamada de voz.

Isso faz parte do processo de integração da Conta de Negócios do WhatsApp, onde os números de telefone pré-aprovados devem ser verificados antes de poderem ser usados para mensagens.

  

  

Fluxo de Processo:

-   Chame esse endpoint para solicitar um código de verificação
    
-   O usuário recebe o código por SMS ou chamada de voz
    
-   Use o endpoint verify\_code para concluir a verificação
    
-   O número de telefone se torna ativo para mensagens
    

  

  

Limitação de Taxa:

-   Número limitado de solicitações de código por número de telefone por período de tempo
    
-   Recomenda-se backoff exponencial para tentativas de repetição
    
-   Chamadas de voz podem ter restrições adicionais
    

  

  

Suporte a Idiomas:

Mensagens de verificação são enviadas no idioma especificado quando disponível.

Volta para o inglês (en\_US) se o idioma solicitado não for suportado.

  

  

Considerações de Segurança:

-   Os códigos expiram após um curto período de tempo
    
-   Número limitado de tentativas de verificação permitidas
    
-   O número de telefone deve ser pré-verificado e pertencer ao negócio solicitante
    

200

Código de verificação solicitado com sucesso

Tipo de conteúdo:application/json

Esquema:RequestCodeResponse

Mostrar atributos secundários

* * *

RequestCodeResponse

* * *

successboolean·obrigatório

Indica se a solicitação do código de verificação foi bem-sucedida

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

Não Encontrado - O ID do número de telefone pré-verificado não existe ou não está acessível

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/request_code' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "code_method": "SMS",  "language": "en_US"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "success_response": {    "summary": "Successful code request",    "value": {      "success": true    }  }}
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