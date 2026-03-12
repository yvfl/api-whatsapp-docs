<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-accept-api -->
<!-- Scraped: 2026-03-10T22:03:39.075Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Parceiros Múltiplos do WhatsApp Business - API de Aceitação de Solução

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-accept-api/v23.0.md/)

Version

v23.0

API para aceitar convites de parceria de solução de vários parceiros.

Este endpoint permite que aplicativos de parceiros aceitem convites para participar de Soluções de Vários Parceiros.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Solution-ID}/accept](#post-version-solution-id-accept)

* * *

## POST /{Version}/{Solution-ID}/accept

Aceitar um convite para participar de uma Solução de Múltiplos Parceiros como aplicativo parceiro.

Este endpoint transiciona o status do parceiro de NOTIFICATION\_SENT para ACEITO,

habilitando a solução a progredir em direção ao status ATIVO assim que todos os parceiros necessários aceitarem.

  

  

Casos de Uso:

-   Aceitar convites de parceria para Soluções de Múltiplos Parceiros
    
-   Ativar a participação do parceiro em soluções existentes
    
-   Confirmar o compromisso do aplicativo parceiro com os termos e condições da solução
    
-   Habilitar a progressão do fluxo de trabalho da solução de INITIATED para ATIVO
    

  

  

Lógica de Negócios:

-   Apenas aplicativos parceiros convidados podem aceitar convites de solução
    
-   A solução deve estar no status INITIATED para aceitar parcerias
    
-   O status do parceiro transiciona de NOTIFICATION\_SENT para ACEITO
    
-   A solução pode se tornar ATIVA assim que todos os parceiros necessários aceitarem
    
-   A aceitação cria um acordo de parceria formal entre os aplicativos
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de retry apropriada com backoff exponencial.

  

  

Validação:

-   O aplicativo parceiro deve ter recebido um convite de solução válido
    
-   A solução deve existir e ser acessível ao aplicativo parceiro
    
-   O aplicativo parceiro deve ter permissões e capacidades apropriadas
    
-   O pedido de aceitação deve incluir identificação válida do aplicativo parceiro
    

### Sintaxe da solicitação

**POST** /{Version}/{Solution-ID}/accept

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/accept' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "partner_app_id": "9876543210987654",  "log_session_id": "session_12345_accept_solution"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_acceptance": {    "summary": "Successful solution acceptance",    "value": {      "solution_id": "1234567890123456",      "partner_status": "ACCEPTED",      "success": true,      "message": "Solution partnership accepted successfully",      "update_time": "2024-01-15T10:30:00Z"    }  }}
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

Solution-IDstring·obrigatório

ID da Solução de Parceria Múltipla para aceitar. Este ID é fornecido no convite original e pode ser encontrado em notificações de parceiros ou interfaces de gerenciamento de soluções.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolutionAcceptRequest

Mostrar atributos secundários

* * *

WhatsAppBusinessSolutionAcceptRequest

* * *

partner\_app\_idstring·obrigatório

ID do aplicativo parceiro que aceita o convite da solução.

Isso deve corresponder ao ID do aplicativo que recebeu o convite original.

* * *

log\_session\_idstring

Identificador de sessão opcional para fins de registro e depuração.

Usado para rastrear o fluxo de aceitação em várias chamadas de API.

Respostas

* * *

Aceitar um convite para participar de uma Solução de Múltiplos Parceiros como aplicativo parceiro.

Este endpoint transiciona o status do parceiro de NOTIFICATION\_SENT para ACEITO,

habilitando a solução a progredir em direção ao status ATIVO assim que todos os parceiros necessários aceitarem.

  

  

Casos de Uso:

-   Aceitar convites de parceria para Soluções de Múltiplos Parceiros
    
-   Ativar a participação do parceiro em soluções existentes
    
-   Confirmar o compromisso do aplicativo parceiro com os termos e condições da solução
    
-   Habilitar a progressão do fluxo de trabalho da solução de INITIATED para ATIVO
    

  

  

Lógica de Negócios:

-   Apenas aplicativos parceiros convidados podem aceitar convites de solução
    
-   A solução deve estar no status INITIATED para aceitar parcerias
    
-   O status do parceiro transiciona de NOTIFICATION\_SENT para ACEITO
    
-   A solução pode se tornar ATIVA assim que todos os parceiros necessários aceitarem
    
-   A aceitação cria um acordo de parceria formal entre os aplicativos
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de retry apropriada com backoff exponencial.

  

  

Validação:

-   O aplicativo parceiro deve ter recebido um convite de solução válido
    
-   A solução deve existir e ser acessível ao aplicativo parceiro
    
-   O aplicativo parceiro deve ter permissões e capacidades apropriadas
    
-   O pedido de aceitação deve incluir identificação válida do aplicativo parceiro
    

200

Convite de Solução de Parceria Múltipla aceito com sucesso. O status do parceiro foi atualizado para ACEITO e a solução pode progredir para o status ATIVO.

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolutionAcceptResponse

Mostrar atributos secundários

* * *

WhatsAppBusinessSolutionAcceptResponse

* * *

solution\_idstring·obrigatório

ID da Solução de Parceria Múltipla que foi aceita

* * *

partner\_statusWhatsAppBusinessSolutionPartnerStatus·obrigatório

Status atual da participação do parceiro na Solução de Múltiplos Parceiros

* * *

successboolean·obrigatório

Indica se a aceitação foi bem-sucedida

* * *

messagestring

Mensagem de confirmação legível por humanos

* * *

update\_timestring (date-time)

Carimbo de data e hora em que a aceitação foi processada

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

Proibido - Permissões insuficientes ou não convidado para a solução

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

Não Encontrado - A ID da Solução não existe ou não está acessível

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

Entidade Não Processável - A solução não pode ser aceita no estado atual.

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/accept' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "partner_app_id": "9876543210987654",  "log_session_id": "session_12345_accept_solution"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_acceptance": {    "summary": "Successful solution acceptance",    "value": {      "solution_id": "1234567890123456",      "partner_status": "ACCEPTED",      "success": true,      "message": "Solution partnership accepted successfully",      "update_time": "2024-01-15T10:30:00Z"    }  }}
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