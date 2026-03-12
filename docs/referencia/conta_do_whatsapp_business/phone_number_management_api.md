<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api -->
<!-- Scraped: 2026-03-10T21:58:32.284Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Business API - API de Gerenciamento de Números de Telefone

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api/v23.0.md/)

Version

v23.0

API para gerenciar números de telefone de contas do WhatsApp Business, incluindo a recuperação de detalhes do número de telefone e a criação de novos registros de números de telefone dentro de uma conta do WhatsApp Business.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{WABA-ID}/phone\_numbers](#get-version-waba-id-phone-numbers)

POST

[/{Version}/{WABA-ID}/phone\_numbers](#post-version-waba-id-phone-numbers)

* * *

## GET /{Version}/{WABA-ID}/phone\_numbers

Recupere todos os números de telefone associados a uma Conta de Negócios do WhatsApp, incluindo seu status, detalhes de verificação e informações de configuração.

  

Casos de Uso:

-   Liste todos os números de telefone em uma Conta de Negócios do WhatsApp
    
-   Monitore o status e o progresso de verificação dos números de telefone
    
-   Verifique as classificações de qualidade dos números de telefone e os limites de mensagens
    
-   Recupere detalhes de configuração dos números de telefone
    

  

Filtragem:

Você pode filtrar os resultados usando o parâmetro filtragem com condições de filtro codificadas em JSON.

Os filtros suportados incluem account\_mode, messaging\_limit\_tier e is\_official\_business\_account.

  

Ordenação:

Os resultados podem ser ordenados por creation\_time ou last\_onboarded\_time em ordem ascendente ou descendente.

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

Os dados do número de telefone podem ser armazenados em cache por curtos períodos, mas as informações de status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

### Sintaxe da solicitação

**GET** /{Version}/{WABA-ID}/phone\_numbers

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/phone_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_phone_numbers": {    "summary": "Multiple phone numbers with various statuses",    "value": {      "data": {        "0": {          "id": "1906385232743451",          "display_phone_number": "+1 631-555-5555",          "verified_name": "Jasper's Market",          "status": "LINKED",          "quality_rating": "GREEN",          "country_code": "US",          "country_dial_code": "1",          "code_verification_status": "VERIFIED",          "unified_cert_status": "APPROVED",          "account_mode": "LIVE",          "host_platform": "CLOUD_API",          "messaging_limit_tier": "TIER_1K",          "is_official_business_account": true,          "username": "jaspers_market"        },        "1": {          "id": "1913623884432103",          "display_phone_number": "+1 631-555-5556",          "verified_name": "Jasper's Ice Cream",          "status": "PENDING",          "quality_rating": "UNKNOWN",          "country_code": "US",          "country_dial_code": "1",          "code_verification_status": "NOT_VERIFIED",          "unified_cert_status": "NAME_PENDING_REVIEW",          "account_mode": "SANDBOX",          "host_platform": "CLOUD_API",          "messaging_limit_tier": "TIER_50",          "is_official_business_account": false,          "username": ""        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE="        }      }    }  },  "single_phone_number": {    "summary": "Single phone number response",    "value": {      "data": {        "0": {          "id": "1906385232743451",          "display_phone_number": "+1 631-555-5555",          "verified_name": "My Business",          "status": "LINKED",          "quality_rating": "GREEN"        }      }    }  }}
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

WABA-IDstring·obrigatório

ID da Conta de Negócios do WhatsApp. Esse ID pode ser encontrado no seu Gerenciador do WhatsApp ou por meio das APIs de gerenciamento de negócios.

Query Parameters

* * *

fieldsstring

Lista separada por vírgulas dos campos a serem incluídos na resposta. Se não especificado, os campos padrão serão retornados. Os campos disponíveis incluem: id, display\_phone\_number, verified\_name, status, quality\_rating, country\_code, country\_dial\_code, code\_verification\_status, unified\_cert\_status, account\_mode, host\_platform, messaging\_limit\_tier, is\_official\_business\_account, username

filteringstring

Matriz de condições de filtro codificada em JSON. Cada filtro deve especificar campo, operador e valor.

Campos suportados: account\_mode, messaging\_limit\_tier, is\_official\_business\_account

sortOne of "creation\_time.asc", "creation\_time.desc", "last\_onboarded\_time.asc", "last\_onboarded\_time.desc"

Ordene o campo e a direção. Formato: nome\_do\_campo.asc ou nome\_do\_campo.desc

Campos suportados: creation\_time, last\_onboarded\_time

limitinteger \[min: 1, max: 100\]

Número máximo de números de telefone para retornar por página

afterstring

Cursor para paginação - recuperar registros após este cursor

beforestring

Cursor de paginação - recuperar registros antes desse cursor

Respostas

* * *

Recupere todos os números de telefone associados a uma Conta de Negócios do WhatsApp, incluindo seu status, detalhes de verificação e informações de configuração.

  

Casos de Uso:

-   Liste todos os números de telefone em uma Conta de Negócios do WhatsApp
    
-   Monitore o status e o progresso de verificação dos números de telefone
    
-   Verifique as classificações de qualidade dos números de telefone e os limites de mensagens
    
-   Recupere detalhes de configuração dos números de telefone
    

  

Filtragem:

Você pode filtrar os resultados usando o parâmetro filtragem com condições de filtro codificadas em JSON.

Os filtros suportados incluem account\_mode, messaging\_limit\_tier e is\_official\_business\_account.

  

Ordenação:

Os resultados podem ser ordenados por creation\_time ou last\_onboarded\_time em ordem ascendente ou descendente.

  

Limitação de Taxa:

As limitações de taxa padrão da Graph API se aplicam. Use lógica de repetição apropriada com backoff exponencial.

  

Cache:

Os dados do número de telefone podem ser armazenados em cache por curtos períodos, mas as informações de status podem mudar com frequência. Implemente estratégias de invalidação de cache apropriadas.

200

Números de telefone da Conta de Negócios do WhatsApp recuperados com sucesso

Tipo de conteúdo:application/json

Esquema:WhatsAppBusinessAccountPhoneNumbersConnection

Mostrar atributos secundários

* * *

WhatsAppBusinessAccountPhoneNumbersConnection

* * *

dataarray of WhatsAppBusinessAccountPhoneNumber·obrigatório

Matriz de registros de números de telefone

Mostrar atributos secundários

* * *

data\[\]WhatsAppBusinessAccountPhoneNumber

Detalhes e informações de status do número de telefone da Conta do WhatsApp Business

Mostrar atributos secundários

* * *

idstring·obrigatório

Identificador único do registro de status do número de telefone

* * *

display\_phone\_numberstring·obrigatório

Número de telefone no formato internacional para fins de exibição

* * *

verified\_namestring

Nome da empresa verificado para este número de telefone

* * *

statusWhatsAppPhoneNumberStatus·obrigatório

Status atual do número de telefone na Conta de Negócios do WhatsApp

* * *

quality\_ratingWhatsAppPhoneNumberQualityRating

Classificação de qualidade do número de telefone com base em padrões de mensagens

* * *

country\_codestring

Código de país ISO 3166-1 alfa-2

* * *

country\_dial\_codestring

Código de discagem do país

* * *

code\_verification\_statusWhatsAppCodeVerificationStatus

Status do código de verificação do número de telefone

* * *

unified\_cert\_statusWhatsAppBusinessUnifiedCertStatus

Status de certificação unificada que combina verificação de negócios e nome

* * *

account\_modeWhatsAppBusinessSandboxEligibility

Modo de conta indicando elegibilidade de ambiente de sandbox ou ao vivo

* * *

host\_platformWhatsAppBusinessAccountHostPlatform

Plataforma de hospedagem da Conta de Negócios do WhatsApp

* * *

messaging\_limit\_tierOne of "TIER\_50", "TIER\_250", "TIER\_1K", "TIER\_10K", "TIER\_100K", "TIER\_UNLIMITED"

Nível atual do limite de mensagens para o número de telefone

* * *

is\_official\_business\_accountboolean

Se esta é uma conta de negócios oficial

* * *

usernamestring

Nome de usuário do WhatsApp para a conta de negócios (se disponível)

* * *

pagingCursorPaging

Informações de paginação baseada em cursor

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

beforestring

Cursor apontando para o início da página

* * *

afterstring

Cursor apontando para o final da página

* * *

previousstring

URL para a página anterior de resultados

* * *

nextstring

URL para a próxima página de resultados

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

Não Encontrado - O ID da Conta de Negócios do WhatsApp não existe ou não está acessível

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/phone_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200400401403404422429500

* * *

```
{  "multiple_phone_numbers": {    "summary": "Multiple phone numbers with various statuses",    "value": {      "data": {        "0": {          "id": "1906385232743451",          "display_phone_number": "+1 631-555-5555",          "verified_name": "Jasper's Market",          "status": "LINKED",          "quality_rating": "GREEN",          "country_code": "US",          "country_dial_code": "1",          "code_verification_status": "VERIFIED",          "unified_cert_status": "APPROVED",          "account_mode": "LIVE",          "host_platform": "CLOUD_API",          "messaging_limit_tier": "TIER_1K",          "is_official_business_account": true,          "username": "jaspers_market"        },        "1": {          "id": "1913623884432103",          "display_phone_number": "+1 631-555-5556",          "verified_name": "Jasper's Ice Cream",          "status": "PENDING",          "quality_rating": "UNKNOWN",          "country_code": "US",          "country_dial_code": "1",          "code_verification_status": "NOT_VERIFIED",          "unified_cert_status": "NAME_PENDING_REVIEW",          "account_mode": "SANDBOX",          "host_platform": "CLOUD_API",          "messaging_limit_tier": "TIER_50",          "is_official_business_account": false,          "username": ""        }      },      "paging": {        "cursors": {          "after": "MTAxNTExOTQ1MjAwNzI5NDE="        }      }    }  },  "single_phone_number": {    "summary": "Single phone number response",    "value": {      "data": {        "0": {          "id": "1906385232743451",          "display_phone_number": "+1 631-555-5555",          "verified_name": "My Business",          "status": "LINKED",          "quality_rating": "GREEN"        }      }    }  }}
```

* * *

## POST /{Version}/{WABA-ID}/phone\_numbers

Crie um novo registro de número de telefone dentro de uma Conta de Negócios do WhatsApp. Este endpoint inicia o processo de integração do número de telefone, incluindo verificação e aprovação do nome da empresa.

  

Casos de Uso:

-   Adicionar novos números de telefone a uma Conta de Negócios do WhatsApp
    
-   Migrar números de telefone de instalações locais para Cloud API
    
-   Registrar números de telefone pré-verificados para cenários de BSP
    
-   Iniciar o processo de verificação do número de telefone e aprovação do nome da empresa
    

  

Pré-requisitos:

-   A Conta de Negócios do WhatsApp deve ter slots de números de telefone disponíveis
    
-   O número de telefone não deve estar registrado com a Conta de Negócios do WhatsApp
    
-   A empresa deve atender aos requisitos da API do WhatsApp Business
    
-   Permissões apropriadas e conclusão da revisão do aplicativo
    

  

Fluxo de Processo:

-   Enviar o número de telefone e o nome da empresa para registro
    
-   O código de verificação do número de telefone será enviado (se não for pré-verificado)
    
-   O nome da empresa será submetido para revisão
    
-   Monitorar o status por meio do endpoint GET até a aprovação
    

  

Limitação de Taxa:

A criação de números de telefone está sujeita a limites de taxa estritos para prevenir abusos.

As limitações de taxa padrão da Graph API também se aplicam.

  

Suporte à Migração:

Defina migrate\_phone\_number=true ao migrar da API de instalações locais para a Cloud API.

Validação adicional e lógica de migração específica serão aplicadas.

### Sintaxe da solicitação

**POST** /{Version}/{WABA-ID}/phone\_numbers

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/phone_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "phone_number": "16315551000",  "verified_name": "My Business Name",  "cc": "1"}'
```

Selecionar código do status

200400401403404409422429500

* * *

```
{  "successful_creation": {    "summary": "Phone number successfully created",    "value": {      "id": "1906385232743451"    }  }}
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

WABA-IDstring·obrigatório

ID da Conta de Negócios do WhatsApp onde o número de telefone será adicionado.

Esse ID pode ser encontrado no seu Gerenciador do WhatsApp ou por meio de APIs de gerenciamento de negócios.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:PhoneNumberCreateRequest

Mostrar atributos secundários

* * *

PhoneNumberCreateRequest

* * *

phone\_numberstring·obrigatório

Número de telefone no formato E.164 sem o prefixo +

* * *

verified\_namestring·obrigatório

Nome da empresa a ser verificado para este número de telefone

* * *

ccstring

Código de país para o número de telefone

* * *

migrate\_phone\_numberboolean

Se esta for uma migração de número de telefone de local para a nuvem

* * *

preverified\_idstring

ID de número de telefone pré-verificado para cenários BSP

Respostas

* * *

Crie um novo registro de número de telefone dentro de uma Conta de Negócios do WhatsApp. Este endpoint inicia o processo de integração do número de telefone, incluindo verificação e aprovação do nome da empresa.

  

Casos de Uso:

-   Adicionar novos números de telefone a uma Conta de Negócios do WhatsApp
    
-   Migrar números de telefone de instalações locais para Cloud API
    
-   Registrar números de telefone pré-verificados para cenários de BSP
    
-   Iniciar o processo de verificação do número de telefone e aprovação do nome da empresa
    

  

Pré-requisitos:

-   A Conta de Negócios do WhatsApp deve ter slots de números de telefone disponíveis
    
-   O número de telefone não deve estar registrado com a Conta de Negócios do WhatsApp
    
-   A empresa deve atender aos requisitos da API do WhatsApp Business
    
-   Permissões apropriadas e conclusão da revisão do aplicativo
    

  

Fluxo de Processo:

-   Enviar o número de telefone e o nome da empresa para registro
    
-   O código de verificação do número de telefone será enviado (se não for pré-verificado)
    
-   O nome da empresa será submetido para revisão
    
-   Monitorar o status por meio do endpoint GET até a aprovação
    

  

Limitação de Taxa:

A criação de números de telefone está sujeita a limites de taxa estritos para prevenir abusos.

As limitações de taxa padrão da Graph API também se aplicam.

  

Suporte à Migração:

Defina migrate\_phone\_number=true ao migrar da API de instalações locais para a Cloud API.

Validação adicional e lógica de migração específica serão aplicadas.

200

Registro de número de telefone criado com sucesso

Tipo de conteúdo:application/json

Esquema:PhoneNumberCreateResponse

Mostrar atributos secundários

* * *

PhoneNumberCreateResponse

* * *

idstring·obrigatório

Identificador único do registro de status do número de telefone criado

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

Proibido - Permissões insuficientes ou limite de número de telefone excedido

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

Não Encontrado - O ID da Conta de Negócios do WhatsApp não existe ou não está acessível

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

409

Conflito - O número de telefone já existe ou está em uso

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
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/phone_numbers' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "phone_number": "16315551000",  "verified_name": "My Business Name",  "cc": "1"}'
```

Selecionar código do status

200400401403404409422429500

* * *

```
{  "successful_creation": {    "summary": "Phone number successfully created",    "value": {      "id": "1906385232743451"    }  }}
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