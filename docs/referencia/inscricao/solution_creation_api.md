<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/solution-creation-api -->
<!-- Scraped: 2026-03-10T21:54:21.019Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Soluções de Parceiros Múltiplos do WhatsApp Business - API de Criação de Soluções

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/application/solution-creation-api/v23.0.md/)

Version

v23.0

API para criar Soluções Multi-Parceiros que permitem mensagens colaborativas de negócios do WhatsApp

entre os proprietários da solução e os aplicativos parceiros.

  

Este endpoint permite que os proprietários da solução criem Soluções Multi-Parceiros definindo a distribuição de permissões entre o aplicativo proprietário e um aplicativo parceiro. As soluções habilitam parcerias estruturadas onde as capacidades de mensagens podem ser delegadas mantendo controles de acesso e limites comerciais adequados.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Application-ID}/whatsapp\_business\_solution](#post-version-application-id-whatsapp-business-solution)

* * *

## POST /{Version}/{Application-ID}/whatsapp\_business\_solution

Crie uma nova Solução Multi-Parceiro que define a distribuição de permissões entre

um aplicativo proprietário da solução e um aplicativo parceiro para colaboração de mensagens do WhatsApp Business.

  

  

Lógica de Permissão:

-   Apenas um parceiro (aplicativo proprietário ou parceiro) pode ter permissão de MESSAGING
    
-   Pelo menos um parceiro deve ter permissão de MESSAGING
    
-   Ambos os parceiros recebem automaticamente as permissões padrão de parceiro da solução
    
-   Matrizes de permissões vazias indicam que não há permissões configuráveis para esse parceiro
    

  

  

Ciclo de Vida da Solução:

-   As soluções são criadas com status INICIADO
    
-   Requerem um fluxo de ativação subsequente por meio do gerenciamento de soluções
    
-   Podem ser gerenciadas por meio do Painel de Parceiros ou APIs de gerenciamento de soluções
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam com limitação de throttling do WhatsApp Business.

Use a lógica de repetição apropriada com backoff exponencial para solicitações com limitação de taxa.

  

  

Validação:

-   O aplicativo parceiro deve estar acessível e ter capacidades apropriadas
    
-   As combinações de permissões são validadas contra regras de lógica de negócios
    
-   Os nomes das soluções devem atender aos requisitos de comprimento e conteúdo
    

### Sintaxe da solicitação

**POST** /{Version}/{Application-ID}/whatsapp\_business\_solution

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Application-ID}/whatsapp_business_solution' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "owner_permissions": [    "MESSAGING"  ],  "partner_app_id": "9876543210987654",  "partner_permissions": [],  "solution_name": "Owner-Managed Messaging Solution"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_creation": {    "summary": "Successful solution creation",    "value": {      "solution_id": "1234567890123456"    }  }}
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

Use a versão estável mais recente para novas integrações.

Application-IDstring·obrigatório

Seu ID de Aplicativo do Facebook que servirá como proprietário da solução.

Este aplicativo será o proprietário principal da solução criada.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolutionCreateRequest

Mostrar atributos secundários

* * *

WhatsAppBusinessSolutionCreateRequest

* * *

owner\_permissionsarray of WhatsAppBusinessAccountConfigurablePermissionTask·obrigatório

Permissões configuráveis concedidas ao aplicativo proprietário da solução. Atualmente, suporta apenas a permissão MESSAGING. Use uma matriz vazia se o proprietário não deve ter permissões configuráveis.

Mostrar atributos secundários

* * *

owner\_permissions\[\]WhatsAppBusinessAccountConfigurablePermissionTask

Tarefas de permissão configuráveis para acesso à Conta de Negócios do WhatsApp em Soluções de Múltiplos Parceiros.

Atualmente, apenas a permissão MESSAGING é configurável por meio dessa API.

* * *

partner\_app\_idstring·obrigatório

ID do aplicativo do Facebook do aplicativo parceiro que participará dessa solução.

Deve ser um ID de aplicativo válido acessível à entidade solicitante.

* * *

partner\_permissionsarray of WhatsAppBusinessAccountConfigurablePermissionTask·obrigatório

Permissões configuráveis concedidas ao aplicativo parceiro. Atualmente, suporta apenas a permissão MESSAGING. Use uma matriz vazia se o parceiro não deve ter permissões configuráveis.

Mostrar atributos secundários

* * *

partner\_permissions\[\]WhatsAppBusinessAccountConfigurablePermissionTask

Tarefas de permissão configuráveis para acesso à Conta de Negócios do WhatsApp em Soluções de Múltiplos Parceiros.

Atualmente, apenas a permissão MESSAGING é configurável por meio dessa API.

* * *

solution\_namestring·obrigatório

Nome legível por humanos para a Solução de Múltiplos Parceiros. Usado para fins de identificação e gerenciamento em painéis de parceiros e interfaces de gerenciamento de soluções.

Respostas

* * *

Crie uma nova Solução Multi-Parceiro que define a distribuição de permissões entre

um aplicativo proprietário da solução e um aplicativo parceiro para colaboração de mensagens do WhatsApp Business.

  

  

Lógica de Permissão:

-   Apenas um parceiro (aplicativo proprietário ou parceiro) pode ter permissão de MESSAGING
    
-   Pelo menos um parceiro deve ter permissão de MESSAGING
    
-   Ambos os parceiros recebem automaticamente as permissões padrão de parceiro da solução
    
-   Matrizes de permissões vazias indicam que não há permissões configuráveis para esse parceiro
    

  

  

Ciclo de Vida da Solução:

-   As soluções são criadas com status INICIADO
    
-   Requerem um fluxo de ativação subsequente por meio do gerenciamento de soluções
    
-   Podem ser gerenciadas por meio do Painel de Parceiros ou APIs de gerenciamento de soluções
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam com limitação de throttling do WhatsApp Business.

Use a lógica de repetição apropriada com backoff exponencial para solicitações com limitação de taxa.

  

  

Validação:

-   O aplicativo parceiro deve estar acessível e ter capacidades apropriadas
    
-   As combinações de permissões são validadas contra regras de lógica de negócios
    
-   Os nomes das soluções devem atender aos requisitos de comprimento e conteúdo
    

200

Solução de Parceria Múltipla criada com sucesso. A solução é criada com status INICIADO e pode ser gerenciada por meio de chamadas de API subsequentes ou Painel de Parceiros.

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessSolutionCreateResponse

Mostrar atributos secundários

* * *

WhatsAppBusinessSolutionCreateResponse

* * *

solution\_idstring·obrigatório

Identificador exclusivo para a solução de Parceiros Múltiplos recém-criada.

Use esse ID para operações de gerenciamento de solução subsequentes.

400

Solicitação Inválida - Parâmetros inválidos fornecidos. Isso inclui falhas de validação para lógica de permissão, IDs malformados ou violações de restrição.

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

Mensagem de erro legível por humanos que descreve o problema

* * *

typestring·obrigatório

Classificação de tipos de erro para tratamento programático

* * *

codeinteger·obrigatório

Código de erro numérico para identificação de erro específico

* * *

error\_subcodeinteger

Código de suberro mais específico quando aplicável

* * *

fbtrace\_idstring

ID de rastreamento do Facebook para fins de depuração e suporte

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

Não autorizado - Autenticação necessária ou token de acesso inválido fornecido.

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

Mensagem de erro legível por humanos que descreve o problema

* * *

typestring·obrigatório

Classificação de tipos de erro para tratamento programático

* * *

codeinteger·obrigatório

Código de erro numérico para identificação de erro específico

* * *

error\_subcodeinteger

Código de suberro mais específico quando aplicável

* * *

fbtrace\_idstring

ID de rastreamento do Facebook para fins de depuração e suporte

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

Proibido - Permissões insuficientes ou capacidades necessárias ausentes.

O aplicativo pode não ter a permissão whatsapp\_business\_management ou os escopos granulares necessários.

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

Mensagem de erro legível por humanos que descreve o problema

* * *

typestring·obrigatório

Classificação de tipos de erro para tratamento programático

* * *

codeinteger·obrigatório

Código de erro numérico para identificação de erro específico

* * *

error\_subcodeinteger

Código de suberro mais específico quando aplicável

* * *

fbtrace\_idstring

ID de rastreamento do Facebook para fins de depuração e suporte

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

Não Encontrado - ID da Aplicação não encontrado ou não acessível à entidade solicitante.

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

Mensagem de erro legível por humanos que descreve o problema

* * *

typestring·obrigatório

Classificação de tipos de erro para tratamento programático

* * *

codeinteger·obrigatório

Código de erro numérico para identificação de erro específico

* * *

error\_subcodeinteger

Código de suberro mais específico quando aplicável

* * *

fbtrace\_idstring

ID de rastreamento do Facebook para fins de depuração e suporte

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

Entidade Inprocessável - A solicitação está bem formada, mas contém violações de lógica de negócios.

Isso inclui casos em que ambos os parceiros têm permissão de MESSAGING ou nenhum deles a tem.

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

Mensagem de erro legível por humanos que descreve o problema

* * *

typestring·obrigatório

Classificação de tipos de erro para tratamento programático

* * *

codeinteger·obrigatório

Código de erro numérico para identificação de erro específico

* * *

error\_subcodeinteger

Código de suberro mais específico quando aplicável

* * *

fbtrace\_idstring

ID de rastreamento do Facebook para fins de depuração e suporte

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

Muitos Pedidos - Limite de taxa de limitação excedido.

Implemente lógica de repetição com backoff exponencial.

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

Mensagem de erro legível por humanos que descreve o problema

* * *

typestring·obrigatório

Classificação de tipos de erro para tratamento programático

* * *

codeinteger·obrigatório

Código de erro numérico para identificação de erro específico

* * *

error\_subcodeinteger

Código de suberro mais específico quando aplicável

* * *

fbtrace\_idstring

ID de rastreamento do Facebook para fins de depuração e suporte

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

Erro Interno do Servidor - Ocorreu um erro inesperado no lado do servidor.

Esses erros são geralmente transitórios e devem ser tentados novamente.

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

Mensagem de erro legível por humanos que descreve o problema

* * *

typestring·obrigatório

Classificação de tipos de erro para tratamento programático

* * *

codeinteger·obrigatório

Código de erro numérico para identificação de erro específico

* * *

error\_subcodeinteger

Código de suberro mais específico quando aplicável

* * *

fbtrace\_idstring

ID de rastreamento do Facebook para fins de depuração e suporte

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Application-ID}/whatsapp_business_solution' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "owner_permissions": [    "MESSAGING"  ],  "partner_app_id": "9876543210987654",  "partner_permissions": [],  "solution_name": "Owner-Managed Messaging Solution"}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "successful_creation": {    "summary": "Successful solution creation",    "value": {      "solution_id": "1234567890123456"    }  }}
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