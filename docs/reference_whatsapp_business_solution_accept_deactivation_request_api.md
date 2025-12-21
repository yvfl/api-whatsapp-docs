<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/accept-deactivation-request-api -->
<!-- Scraped: 2025-12-20T18:05:00.590Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Parceiros Múltiplos do WhatsApp Business - API de Aceitação de Solicitação de Desativação

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/accept-deactivation-request-api/v23.0.md/)

Version

v23.0

API para aceitar solicitações de desativação para Soluções de Negócios do WhatsApp Multi-Parceiros.

Este endpoint permite que parceiros de solução aceitem solicitações de desativação pendentes para suas Soluções de Negócios Multi-Parceiros.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Solution-ID}/accept\_deactivation\_request](#post-version-solution-id-accept-deactivation-request)

* * *

## POST /{Version}/{Solution-ID}/accept\_deactivation\_request

Aceita um pedido pendente de desativação para uma solução de negócios do WhatsApp Multi-Parceiro.

  

  

Este endpoint completa o fluxo de trabalho de aprovação do parceiro aceitando um pedido de desativação

que foi iniciado anteriormente por outro parceiro de solução. Após a aceitação bem-sucedida,

o status da solução muda de ATIVO para DESATIVADO, e o status do pedido pendente muda de PENDING\_DEACTIVATION para NENHUM.

  

  

Lógica de Negócios Importante:

  

-   A solução deve estar no status ATIVO com status pendente PENDING\_DEACTIVATION
    
-   Todos os pagamentos e faturas pendentes devem ser liquidados antes da aceitação
    
-   As campanhas de marketing ativas devem ser concluídas ou transferidas
    
-   Notificações de webhook serão enviadas a todos os parceiros de solução após a conclusão
    
-   Os recursos e permissões da solução serão limpos de acordo com a política
    

### Sintaxe da solicitação

**POST** /{Version}/{Solution-ID}/accept\_deactivation\_request

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/accept_deactivation_request' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "id": "12345678901234567",  "name": "Sample Business Solution Partnership",  "status": "DEACTIVATED",  "status_for_pending_request": "NONE",  "owner_permissions": {    "0": "MANAGE",    "1": null  }}
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

Versão da API do Graph

Solution-IDstring·obrigatório

Identificador único para a Solução de Negócios do WhatsApp

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem retornados na resposta.

  

  

Campos Disponíveis: id, nome, status, status\_for\_pending\_request, owner\_permissions

  

  

Campos Padrão: nome, status, status\_for\_pending\_request

Corpo da solicitaçãoOpcional

* * *

Corpo da solicitação vazio - nenhum parâmetro é necessário para esse endpoint

Tipo de conteúdo:application/json

Esquema:object

Respostas

* * *

Aceita um pedido pendente de desativação para uma solução de negócios do WhatsApp Multi-Parceiro.

  

  

Este endpoint completa o fluxo de trabalho de aprovação do parceiro aceitando um pedido de desativação

que foi iniciado anteriormente por outro parceiro de solução. Após a aceitação bem-sucedida,

o status da solução muda de ATIVO para DESATIVADO, e o status do pedido pendente muda de PENDING\_DEACTIVATION para NENHUM.

  

  

Lógica de Negócios Importante:

  

-   A solução deve estar no status ATIVO com status pendente PENDING\_DEACTIVATION
    
-   Todos os pagamentos e faturas pendentes devem ser liquidados antes da aceitação
    
-   As campanhas de marketing ativas devem ser concluídas ou transferidas
    
-   Notificações de webhook serão enviadas a todos os parceiros de solução após a conclusão
    
-   Os recursos e permissões da solução serão limpos de acordo com a política
    

200

Solicitação de desativação aceita com sucesso. Status da solução atualizado para DESATIVADO.

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolution

Mostrar atributos secundários

* * *

WhatsAppBusinessSolution

* * *

idstring·obrigatório

Identificador único para a Solução de Negócios do WhatsApp

* * *

namestring·obrigatório

Nome legível por humanos para a solução (texto UGC, 2-75 caracteres)

* * *

statusWhatsAppBusinessSolutionStatus

Status atual da Solução de Negócios do WhatsApp

Mostrar atributos secundários

* * *

status\_for\_pending\_requestWhatsAppBusinessSolutionPendingStatus

Status de quaisquer solicitações pendentes para a solução

* * *

owner\_permissionsarray of WhatsAppBusinessAccountPermissionTask

Matriz de permissões concedidas ao proprietário da solução

Mostrar atributos secundários

* * *

owner\_permissions\[\]WhatsAppBusinessAccountPermissionTask

Tarefas de permissão granular para acesso à conta do WhatsApp Business

400

Solicitação Inválida - Parâmetros de solicitação inválidos ou formato de ID de solução malformado.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·obrigatório

Classificação de tipos de erros

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Subcódigo de erro mais específico

* * *

fbtrace\_idstring

ID de rastreamento interno para depuração

* * *

is\_transientboolean

Se este erro pode ser resolvido tentando novamente

* * *

error\_user\_titlestring

Título de erro de fácil compreensão

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão

401

Não autorizado - Token de acesso inválido, ausente ou expirado.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·obrigatório

Classificação de tipos de erros

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Subcódigo de erro mais específico

* * *

fbtrace\_idstring

ID de rastreamento interno para depuração

* * *

is\_transientboolean

Se este erro pode ser resolvido tentando novamente

* * *

error\_user\_titlestring

Título de erro de fácil compreensão

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão

403

Proibido - Permissões insuficientes ou aplicativo não autorizado para essa solução.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·obrigatório

Classificação de tipos de erros

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Subcódigo de erro mais específico

* * *

fbtrace\_idstring

ID de rastreamento interno para depuração

* * *

is\_transientboolean

Se este erro pode ser resolvido tentando novamente

* * *

error\_user\_titlestring

Título de erro de fácil compreensão

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão

404

Não Encontrado - A ID da Solução não existe ou não está acessível ao aplicativo solicitante.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·obrigatório

Classificação de tipos de erros

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Subcódigo de erro mais específico

* * *

fbtrace\_idstring

ID de rastreamento interno para depuração

* * *

is\_transientboolean

Se este erro pode ser resolvido tentando novamente

* * *

error\_user\_titlestring

Título de erro de fácil compreensão

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão

422

Entidade Não Processável - Parâmetros válidos, mas a lógica de negócios impede o processamento (por exemplo, estado de solução incorreto, pagamentos pendentes).

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·obrigatório

Classificação de tipos de erros

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Subcódigo de erro mais específico

* * *

fbtrace\_idstring

ID de rastreamento interno para depuração

* * *

is\_transientboolean

Se este erro pode ser resolvido tentando novamente

* * *

error\_user\_titlestring

Título de erro de fácil compreensão

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão

429

Muitos Pedidos - Limite de taxa excedido. Use retrocesso exponencial para novas tentativas.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·obrigatório

Classificação de tipos de erros

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Subcódigo de erro mais específico

* * *

fbtrace\_idstring

ID de rastreamento interno para depuração

* * *

is\_transientboolean

Se este erro pode ser resolvido tentando novamente

* * *

error\_user\_titlestring

Título de erro de fácil compreensão

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão

500

Erro Interno do Servidor - Erro inesperado do servidor. Tente novamente com backoff exponencial se is\_transient for verdadeiro.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·obrigatório

Classificação de tipos de erros

* * *

codeinteger·obrigatório

Código de erro numérico

* * *

error\_subcodeinteger

Subcódigo de erro mais específico

* * *

fbtrace\_idstring

ID de rastreamento interno para depuração

* * *

is\_transientboolean

Se este erro pode ser resolvido tentando novamente

* * *

error\_user\_titlestring

Título de erro de fácil compreensão

* * *

error\_user\_msgstring

Mensagem de erro de fácil compreensão

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/accept_deactivation_request' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "id": "12345678901234567",  "name": "Sample Business Solution Partnership",  "status": "DEACTIVATED",  "status_for_pending_request": "NONE",  "owner_permissions": {    "0": "MANAGE",    "1": null  }}
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