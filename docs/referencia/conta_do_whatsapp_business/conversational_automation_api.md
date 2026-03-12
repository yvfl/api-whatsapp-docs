<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/conversational-automation-api -->
<!-- Scraped: 2026-03-10T21:57:44.802Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Conta do WhatsApp Business - API de Automação de Conversas

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/conversational-automation-api/v23.0.md/)

Version

v23.0

API para gerenciar configurações de automação de conversas para números de telefone da Conta de Negócios do WhatsApp.

Este endpoint permite que as empresas configurem recursos de conversa automatizados, incluindo mensagens de boas-vindas, prompts de conversa (quebra-gelo) e comandos de bot para seus números de telefone da Conta de Negócios do WhatsApp.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Phone-Number-ID}/conversational\_automation](#post-version-phone-number-id-conversational-automation)

* * *

## POST /{Version}/{Phone-Number-ID}/conversational\_automation

Configure as configurações de automação de conversas para um número de telefone de Conta de Negócios do WhatsApp,

incluindo mensagens de boas-vindas, prompts de conversa (quebra-gelo) e comandos de bot.

  

  

Casos de Uso:

-   Configure mensagens de boas-vindas automatizadas para novas conversas de clientes
    
-   Configure prompts de conversa para orientar as interações do cliente
    
-   Defina comandos de bot para cenários comuns de atendimento ao cliente
    
-   Atualize as configurações de automação existentes
    
-   Ative ou desative recursos de automação específicos
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Validação:

-   Os nomes de comando devem ser únicos dentro do mesmo número de telefone
    
-   Os prompts e as descrições de comando devem atender às políticas de negócios do WhatsApp
    
-   Limites máximos são aplicados para prompts e comandos
    

### Sintaxe da solicitação

**POST** /{Version}/{Phone-Number-ID}/conversational\_automation

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/conversational_automation' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "enable_welcome_message": true,  "prompts": {    "0": "How can I help you today?",    "1": null  },  "commands": []}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "success_response": {    "summary": "Successful configuration",    "value": {      "success": true    }  }}
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

Phone-Number-IDstring·obrigatório

Seu ID de número de telefone do WhatsApp Business. Esse ID representa a entidade do número de telefone e pode ser obtido na lista de números de telefone da sua conta do WhatsApp Business.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:ConversationalAutomationRequest

Mostrar atributos secundários

* * *

ConversationalAutomationRequest

* * *

enable\_welcome\_messageboolean

Se ativar mensagens de boas-vindas para novas conversas

* * *

promptsarray of string

Lista de prompts de conversação (quebradores de gelo) para ajudar a orientar interações com clientes

Mostrar atributos secundários

* * *

prompts\[\]string

Individual conversation prompt text

* * *

commandsarray of BotCommand

Lista de comandos de bot para respostas automatizadas

Mostrar atributos secundários

* * *

commands\[\]BotCommand

Configuração de comando de bot para respostas automatizadas

Mostrar atributos secundários

* * *

command\_namestring·obrigatório

Nome do comando do bot (sem barra inicial)

* * *

command\_descriptionstring·obrigatório

Descrição do que o comando faz

Respostas

* * *

Configure as configurações de automação de conversas para um número de telefone de Conta de Negócios do WhatsApp,

incluindo mensagens de boas-vindas, prompts de conversa (quebra-gelo) e comandos de bot.

  

  

Casos de Uso:

-   Configure mensagens de boas-vindas automatizadas para novas conversas de clientes
    
-   Configure prompts de conversa para orientar as interações do cliente
    
-   Defina comandos de bot para cenários comuns de atendimento ao cliente
    
-   Atualize as configurações de automação existentes
    
-   Ative ou desative recursos de automação específicos
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Validação:

-   Os nomes de comando devem ser únicos dentro do mesmo número de telefone
    
-   Os prompts e as descrições de comando devem atender às políticas de negócios do WhatsApp
    
-   Limites máximos são aplicados para prompts e comandos
    

200

Configurações de automação de conversação configuradas com sucesso

Tipo de conteúdo:application/json

Esquema:ConversationalAutomationResponse

Mostrar atributos secundários

* * *

ConversationalAutomationResponse

* * *

successboolean·obrigatório

Indica se a configuração de automação foi bem-sucedida

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

Não Encontrado - O ID do número de telefone não existe ou não está acessível

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/conversational_automation' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "enable_welcome_message": true,  "prompts": {    "0": "How can I help you today?",    "1": null  },  "commands": []}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "success_response": {    "summary": "Successful configuration",    "value": {      "success": true    }  }}
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