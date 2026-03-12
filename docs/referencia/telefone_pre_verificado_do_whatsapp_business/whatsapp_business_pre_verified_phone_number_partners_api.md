<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-partners-api -->
<!-- Scraped: 2026-03-10T22:02:55.978Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Parceiros de Número de Telefone Pré-Verificado do WhatsApp Business

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-partners-api/v23.0.md/)

Version

v23.0

API para recuperar empresas parceiras associadas a um número de telefone pré-verificado do WhatsApp Business.

Este endpoint permite que aplicativos autorizados recuperem a lista de empresas parceiras

que receberam acesso a um número de telefone pré-verificado específico.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Pre-Verified-Phone-Number-ID}/partners](#get-version-pre-verified-phone-number-id-partners)

* * *

## GET /{Version}/{Pre-Verified-Phone-Number-ID}/partners

Recupere a lista de empresas parceiras que receberam acesso a um número de telefone pré-verificado específico do WhatsApp Business.

  

  

Casos de Uso:

-   Monitorar relacionamentos e permissões de acesso de empresas parceiras
    
-   Verificar quais empresas têm acesso a números de telefone pré-verificados compartilhados
    
-   Recuperar informações de empresas parceiras para fins operacionais
    
-   Validar configurações de parceria antes das operações comerciais
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

As informações da parceira podem ser armazenadas em cache por períodos moderados, mas as relações de parceria podem mudar. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{Pre-Verified-Phone-Number-ID}/partners

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/partners' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_partners": {    "summary": "Multiple partner businesses with full details",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Partner Business Solutions Inc",          "verification_status": "verified",          "created_time": "2023-01-15T10:30:00Z",          "updated_time": "2023-06-20T14:45:30Z",          "primary_page": "9876543210987654",          "timezone_id": 1,          "two_factor_type": "admin_required"        },        "1": {          "id": "2345678901234567",          "name": "Global Commerce Partners LLC",          "verification_status": "verified",          "created_time": "2023-03-10T08:15:00Z",          "updated_time": "2023-07-05T16:20:45Z",          "primary_page": "8765432109876543",          "timezone_id": 1,          "two_factor_type": "admin_required"        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",          "before": "MAZDZD"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/partners?after=MTAxNTExOTQ1MjAwNzI5NDE%3D"      }    }  },  "single_partner": {    "summary": "Single partner business with minimal details",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Partner Business Solutions Inc"        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",          "before": "MAZDZD"        }      }    }  },  "empty_partners": {    "summary": "No partner businesses found",    "value": {      "data": [],      "paging": {        "cursors": {}      }    }  }}
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

Seu ID de Número de Telefone Pré-Verificado. Esse ID é fornecido quando o número de telefone pré-verificado é criado e pode ser encontrado na interface de gerenciamento da sua Conta de Negócios do WhatsApp.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados (id, name). Campos disponíveis: id, name, created\_time, updated\_time, verification\_status, primary\_page, timezone\_id, two\_factor\_type

limitinteger \[min: 1, max: 100\]

Número máximo de empresas parceiras para retornar por página. O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use o cursor 'after' de uma resposta anterior para obter a próxima página.

beforestring

Cursor para paginação. Use o cursor 'before' de uma resposta anterior para obter a página anterior.

Respostas

* * *

Recupere a lista de empresas parceiras que receberam acesso a um número de telefone pré-verificado específico do WhatsApp Business.

  

  

Casos de Uso:

-   Monitorar relacionamentos e permissões de acesso de empresas parceiras
    
-   Verificar quais empresas têm acesso a números de telefone pré-verificados compartilhados
    
-   Recuperar informações de empresas parceiras para fins operacionais
    
-   Validar configurações de parceria antes das operações comerciais
    

  

  

Limitação de Taxa:

As limitações de taxa padrão da API do Graph se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

  

Cache:

As informações da parceira podem ser armazenadas em cache por períodos moderados, mas as relações de parceria podem mudar. Implemente estratégias de invalidação de cache apropriadas.

200

Negócios parceiros recuperados com sucesso para o número de telefone pré-verificado

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse

Mostrar atributos secundários

* * *

WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse

* * *

dataarray of BusinessPartner·obrigatório

Lista de empresas parceiras com acesso ao número de telefone pré-verificado

Mostrar atributos secundários

* * *

data\[\]BusinessPartner

Entidade empresarial que tem acesso de parceiro ao número de telefone pré-verificado

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para o negócio parceiro

* * *

namestring·obrigatório

Nome do parceiro comercial

* * *

created\_timestring (date-time)

Carimbo de data e hora ISO 8601 quando a empresa foi criada

* * *

updated\_timestring (date-time)

Carimbo de data e hora ISO 8601 quando a empresa foi atualizada pela última vez

* * *

verification\_statusOne of "not\_verified", "pending", "verified"

Status de verificação de negócios

* * *

primary\_pagestring

ID da Página do Facebook Primária associada à empresa

* * *

timezone\_idinteger

Identificador de fuso horário para o local da empresa

* * *

two\_factor\_typeOne of "none", "admin\_required"

Método de autenticação de dois fatores configurado para a empresa

* * *

pagingCursorPaging

Informações de paginação baseada em cursor

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

beforestring

Cursor apontando para o início da página de dados que foi retornada

* * *

afterstring

Cursor apontando para o final da página de dados que foi retornada

* * *

nextstring

URL do endpoint da API do Graph para a próxima página de resultados

* * *

previousstring

URL do endpoint da API do Graph para a página anterior de resultados

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/partners' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_partners": {    "summary": "Multiple partner businesses with full details",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Partner Business Solutions Inc",          "verification_status": "verified",          "created_time": "2023-01-15T10:30:00Z",          "updated_time": "2023-06-20T14:45:30Z",          "primary_page": "9876543210987654",          "timezone_id": 1,          "two_factor_type": "admin_required"        },        "1": {          "id": "2345678901234567",          "name": "Global Commerce Partners LLC",          "verification_status": "verified",          "created_time": "2023-03-10T08:15:00Z",          "updated_time": "2023-07-05T16:20:45Z",          "primary_page": "8765432109876543",          "timezone_id": 1,          "two_factor_type": "admin_required"        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",          "before": "MAZDZD"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/partners?after=MTAxNTExOTQ1MjAwNzI5NDE%3D"      }    }  },  "single_partner": {    "summary": "Single partner business with minimal details",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "name": "Partner Business Solutions Inc"        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",          "before": "MAZDZD"        }      }    }  },  "empty_partners": {    "summary": "No partner businesses found",    "value": {      "data": [],      "paging": {        "cursors": {}      }    }  }}
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