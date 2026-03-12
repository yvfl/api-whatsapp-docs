<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-bot/bot-details-api -->
<!-- Scraped: 2026-03-10T21:59:35.194Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Business Bot - Detalhes da API do Bot

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-bot/bot-details-api/v23.0.md/)

Version

v23.0

Este endpoint permite que os desenvolvedores recuperem informações abrangentes sobre seu Bot de Negócios do WhatsApp, incluindo prompts, comandos e configurações de mensagem de boas-vindas. Isso é essencial para gerenciar a configuração do bot e entender o estado atual do bot.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{WABA-Bot-ID}](#get-version-waba-bot-id)

* * *

## GET /{Version}/{WABA-Bot-ID}

Recupere detalhes abrangentes sobre um Bot de Negócios do WhatsApp, incluindo seus prompts,

comandos e configuração de mensagem de boas-vindas.

  

  

Casos de Uso:

-   Recupere a configuração do bot e as configurações de resposta automatizada
    
-   Monitore os comandos do bot disponíveis e suas descrições
    
-   Verifique o status de habilitação da mensagem de boas-vindas
    
-   Valide o estado do bot antes de implementar a automação
    
-   Audite a configuração do bot para conformidade empresarial
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os detalhes do bot podem ser armazenados em cache por períodos moderados, mas a configuração pode mudar quando as configurações do bot forem atualizadas. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{WABA-Bot-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-Bot-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "full_bot_config": {    "summary": "Complete bot configuration with all features",    "value": {      "id": "1234567890123456",      "prompts": {        "0": "Welcome to our customer service!",        "1": null,        "2": null      },      "commands": {        "0": {          "command_name": "help",          "command_description": "Display available commands and help information"        },        "1": {          "command_name": "status",          "command_description": "Check your order status"        },        "2": {          "command_name": "support",          "command_description": "Connect with customer support"        }      },      "enable_welcome_message": true    }  },  "minimal_bot_config": {    "summary": "Basic bot configuration",    "value": {      "id": "2345678901234567",      "prompts": [        "Hello! I'm here to help"      ],      "commands": [],      "enable_welcome_message": false    }  }}
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

WABA-Bot-IDstring·obrigatório

Seu ID do Bot do WhatsApp Business. Esse ID é fornecido quando você cria o bot e pode ser encontrado no Gerenciador de Negócios ou por meio de APIs de gerenciamento de bots.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (prompts, commands, enable\_welcome\_message). Campos disponíveis: id, prompts, commands, enable\_welcome\_message

Respostas

* * *

Recupere detalhes abrangentes sobre um Bot de Negócios do WhatsApp, incluindo seus prompts,

comandos e configuração de mensagem de boas-vindas.

  

  

Casos de Uso:

-   Recupere a configuração do bot e as configurações de resposta automatizada
    
-   Monitore os comandos do bot disponíveis e suas descrições
    
-   Verifique o status de habilitação da mensagem de boas-vindas
    
-   Valide o estado do bot antes de implementar a automação
    
-   Audite a configuração do bot para conformidade empresarial
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

Os detalhes do bot podem ser armazenados em cache por períodos moderados, mas a configuração pode mudar quando as configurações do bot forem atualizadas. Implemente estratégias de invalidação de cache apropriadas.

200

Detalhes do Bot do WhatsApp Business recuperados com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessBot

Mostrar atributos secundários

* * *

WhatsAppBusinessBot

* * *

idstring·obrigatório

Identificador único para o Bot do WhatsApp Business

* * *

promptsarray of string

Lista de prompts de bot e respostas automatizadas

Mostrar atributos secundários

* * *

prompts\[\]string

* * *

commandsarray of WhatsAppBusinessBotCommand

Lista de comandos de bot disponíveis e suas descrições

Mostrar atributos secundários

* * *

commands\[\]WhatsAppBusinessBotCommand

Configuração de comando de bot com nome e descrição

Mostrar atributos secundários

* * *

command\_namestring·obrigatório

Nome do comando do bot

* * *

command\_descriptionstring·obrigatório

Descrição do que o comando faz

* * *

enable\_welcome\_messageboolean

Se a mensagem de boas-vindas está habilitada para este bot

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

Não Encontrado - O ID do Bot não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-Bot-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "full_bot_config": {    "summary": "Complete bot configuration with all features",    "value": {      "id": "1234567890123456",      "prompts": {        "0": "Welcome to our customer service!",        "1": null,        "2": null      },      "commands": {        "0": {          "command_name": "help",          "command_description": "Display available commands and help information"        },        "1": {          "command_name": "status",          "command_description": "Check your order status"        },        "2": {          "command_name": "support",          "command_description": "Connect with customer support"        }      },      "enable_welcome_message": true    }  },  "minimal_bot_config": {    "summary": "Basic bot configuration",    "value": {      "id": "2345678901234567",      "prompts": [        "Hello! I'm here to help"      ],      "commands": [],      "enable_welcome_message": false    }  }}
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