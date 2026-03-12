<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api -->
<!-- Scraped: 2026-03-10T21:55:19.934Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# API de Números de Telefone Pré-Verificados do WhatsApp Business

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api/v23.0.md/)

Version

v23.0

API para recuperar números de telefone pré-verificados associados a uma Conta de Negócios do WhatsApp.

Este endpoint permite que empresas recuperem informações sobre números de telefone pré-verificados

disponíveis para uso com sua Conta de Negócios do WhatsApp.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{Business-ID}/preverified\_numbers](#get-version-business-id-preverified-numbers)

* * *

## GET /{Version}/{Business-ID}/preverified\_numbers

Recuperar números de telefone pré-verificados disponíveis para uso com o negócio especificado.

Este endpoint fornece informações sobre números de telefone que foram pré-verificados

e estão prontos para uso imediato com operações de mensagens do WhatsApp Business.

  

Casos de Uso:

-   Recuperar números de telefone pré-verificados disponíveis para configuração de mensagens de negócios
    
-   Verificar o status de verificação e disponibilidade de números de telefone
    
-   Monitorar o estoque de números de telefone pré-verificados
    
-   Validar opções de números de telefone antes da configuração da Conta de Negócios do WhatsApp
    
-   Facilitar a configuração rápida de mensagens de negócios com números pré-verificados
    

  

Filtragem e Paginação:

-   Os resultados podem ser filtrados por status de verificação, disponibilidade e país
    
-   A paginação baseada em cursor é suportada para conjuntos de resultados grandes
    
-   O tamanho padrão da página é de 25 itens, máximo é de 100 itens por página
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de retry apropriada com backoff exponencial.

  

Cache:

As informações do número de telefone podem ser armazenadas em cache por curtos períodos, mas o status de disponibilidade pode mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{Business-ID}/preverified\_numbers

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/preverified_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "basic_response": {    "summary": "Basic response with pre-verified phone numbers",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "display_phone_number": "+1 (555) 123-4567",          "country_prefix": 1,          "verification_status": "VERIFIED",          "availability_status": "AVAILABLE",          "created_time": "2024-01-15T10:30:00Z",          "last_updated": "2024-01-20T14:45:00Z",          "supported_features": {            "0": "MESSAGING",            "1": null,            "2": null          },          "country_code": "US",          "region": "North America"        },        "1": {          "id": "2345678901234567",          "display_phone_number": "+44 20 1234 5678",          "country_prefix": 44,          "verification_status": "VERIFIED",          "availability_status": "AVAILABLE",          "created_time": "2024-01-10T08:15:00Z",          "last_updated": "2024-01-18T16:20:00Z",          "supported_features": {            "0": "MESSAGING",            "1": null,            "2": null          },          "country_code": "GB",          "region": "Europe"        }      },      "paging": {        "cursors": {          "after": "QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/preverified_numbers?after=QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"      }    }  },  "filtered_response": {    "summary": "Filtered response by country and status",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "display_phone_number": "+1 (555) 123-4567",          "country_prefix": 1,          "verification_status": "VERIFIED",          "availability_status": "AVAILABLE",          "country_code": "US",          "region": "North America"        }      },      "paging": {        "cursors": {}      }    }  },  "empty_response": {    "summary": "Empty response when no phone numbers are available",    "value": {      "data": [],      "paging": {        "cursors": {}      }    }  }}
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

Seu ID de negócios para recuperar números de telefone pré-verificados.

Esse ID pode ser encontrado no seu Gerenciador de Negócios da Meta ou por meio de APIs de gerenciamento de negócios.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado,

os campos padrão serão retornados (id, display\_phone\_number, verification\_status).

Campos disponíveis: id, display\_phone\_number, country\_prefix, verification\_status,

availability\_status, created\_time, last\_updated, supported\_features, country\_code, region

limitinteger \[min: 1, max: 100\]

Número máximo de números de telefone para retornar por página. O padrão é 25, o máximo é 100.

afterstring

Cursor para paginação. Use isso para recuperar a próxima página de resultados.

Esse valor é fornecido no objeto 'paging' das respostas anteriores.

beforestring

Cursor para paginação. Use isso para recuperar a página anterior de resultados.

Esse valor é fornecido no objeto 'paging' das respostas anteriores.

verification\_statusPhoneNumberVerificationStatus

Filtrar resultados por status de verificação. Somente números de telefone com o status de verificação especificado serão retornados.

availability\_statusPhoneNumberAvailabilityStatus

Filtrar resultados por status de disponibilidade. Somente números de telefone com o status de disponibilidade especificado serão retornados.

country\_codestring

Filtrar resultados por código de país. Somente números de telefone do país especificado serão retornados. Use códigos de país ISO 3166-1 alfa-2.

Respostas

* * *

Recuperar números de telefone pré-verificados disponíveis para uso com o negócio especificado.

Este endpoint fornece informações sobre números de telefone que foram pré-verificados

e estão prontos para uso imediato com operações de mensagens do WhatsApp Business.

  

Casos de Uso:

-   Recuperar números de telefone pré-verificados disponíveis para configuração de mensagens de negócios
    
-   Verificar o status de verificação e disponibilidade de números de telefone
    
-   Monitorar o estoque de números de telefone pré-verificados
    
-   Validar opções de números de telefone antes da configuração da Conta de Negócios do WhatsApp
    
-   Facilitar a configuração rápida de mensagens de negócios com números pré-verificados
    

  

Filtragem e Paginação:

-   Os resultados podem ser filtrados por status de verificação, disponibilidade e país
    
-   A paginação baseada em cursor é suportada para conjuntos de resultados grandes
    
-   O tamanho padrão da página é de 25 itens, máximo é de 100 itens por página
    

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de retry apropriada com backoff exponencial.

  

Cache:

As informações do número de telefone podem ser armazenadas em cache por curtos períodos, mas o status de disponibilidade pode mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

200

Números de telefone pré-verificados recuperados com sucesso

Tipo de conteúdo:application/json

Esquema:PreVerifiedPhoneNumbersResponse

Mostrar atributos secundários

* * *

PreVerifiedPhoneNumbersResponse

* * *

dataarray of PreVerifiedPhoneNumber·obrigatório

Lista de números de telefone pré-verificados

Mostrar atributos secundários

* * *

data\[\]PreVerifiedPhoneNumber

Detalhes e informações de status de número de telefone pré-verificado

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único para o número de telefone pré-verificado

* * *

display\_phone\_numberstring·obrigatório

Versão de exibição formatada do número de telefone

* * *

country\_prefixinteger \[min: 1, max: 999\]

Prefixo de código de país para o número de telefone

* * *

verification\_statusPhoneNumberVerificationStatus·obrigatório

Status de verificação atual do número de telefone pré-verificado

* * *

availability\_statusPhoneNumberAvailabilityStatus

Status de disponibilidade atual do número de telefone pré-verificado

* * *

created\_timestring (date-time)

Carimbo de data e hora em que o número de telefone foi pré-verificado

* * *

last\_updatedstring (date-time)

Carimbo de data e hora em que as informações do número de telefone foram atualizadas pela última vez

* * *

supported\_featuresarray of WhatsAppBusinessFeature

Lista de recursos do WhatsApp Business suportados por este número de telefone

Mostrar atributos secundários

* * *

supported\_features\[\]WhatsAppBusinessFeature

Recursos do WhatsApp Business suportados pelo número de telefone

* * *

country\_codestring

Código de país ISO 3166-1 alfa-2 para o número de telefone

* * *

regionstring

Região geográfica ou área para o número de telefone

* * *

pagingCursorPaging

Informações de paginação baseadas em cursor

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

Não Encontrado - A empresa não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Business-ID}/preverified_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "basic_response": {    "summary": "Basic response with pre-verified phone numbers",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "display_phone_number": "+1 (555) 123-4567",          "country_prefix": 1,          "verification_status": "VERIFIED",          "availability_status": "AVAILABLE",          "created_time": "2024-01-15T10:30:00Z",          "last_updated": "2024-01-20T14:45:00Z",          "supported_features": {            "0": "MESSAGING",            "1": null,            "2": null          },          "country_code": "US",          "region": "North America"        },        "1": {          "id": "2345678901234567",          "display_phone_number": "+44 20 1234 5678",          "country_prefix": 44,          "verification_status": "VERIFIED",          "availability_status": "AVAILABLE",          "created_time": "2024-01-10T08:15:00Z",          "last_updated": "2024-01-18T16:20:00Z",          "supported_features": {            "0": "MESSAGING",            "1": null,            "2": null          },          "country_code": "GB",          "region": "Europe"        }      },      "paging": {        "cursors": {          "after": "QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"        },        "next": "https://graph.facebook.com/v23.0/1234567890123456/preverified_numbers?after=QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"      }    }  },  "filtered_response": {    "summary": "Filtered response by country and status",    "value": {      "data": {        "0": {          "id": "1234567890123456",          "display_phone_number": "+1 (555) 123-4567",          "country_prefix": 1,          "verification_status": "VERIFIED",          "availability_status": "AVAILABLE",          "country_code": "US",          "region": "North America"        }      },      "paging": {        "cursors": {}      }    }  },  "empty_response": {    "summary": "Empty response when no phone numbers are available",    "value": {      "data": [],      "paging": {        "cursors": {}      }    }  }}
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