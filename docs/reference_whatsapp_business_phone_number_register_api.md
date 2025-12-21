<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api -->
<!-- Scraped: 2025-12-20T18:03:07.554Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - Registrar API

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api/v23.0.md/)

Version

v23.0

[API da Nuvem do WhatsApp](https://developers.facebook.com/docs/whatsapp/cloud-api), hospedada pela Meta, é a API oficial da Plataforma de Negócios do WhatsApp usada para mensagens de negócios. Essa coleção contém consultas comuns, respostas de amostra e links para documentação de suporte que podem ajudá-lo a começar rapidamente com a API.

  

## 

## Visão Geral da API da Nuvem

  

A API da Nuvem permite que empresas de médio e grande porte comuniquem-se com os clientes em escala. Usando a API, as empresas podem criar sistemas que conectem milhares de clientes com agentes ou bots, permitindo tanto a comunicação programática quanto manual. Além disso, as empresas podem integrar a API com vários sistemas de back-end, como plataformas de CRM e marketing.

  

[https://developers.facebook.com/docs/whatsapp/cloud-api/overview](https://developers.facebook.com/docs/whatsapp/cloud-api/overview)

  

## 

## Começando com a API da Nuvem

  

Para usar a API e essa coleção, você deve ter um portfólio de negócios da Meta, uma Conta de Negócios do WhatsApp e um número de telefone de negócios. Se você completar as etapas no guia de início rápido da API da Nuvem [Começar](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started), esses ativos serão criados para você.

  

## 

## Começando como Parceiro de Solução

  

[Este guia](https://developers.facebook.com/docs/whatsapp/solution-providers/get-started-for-solution-partners) explica as etapas que os Parceiros de Solução precisam seguir para oferecer a API da Nuvem aos seus clientes.

  

## 

## Migrando da API Local para a API da Nuvem

  

[Este guia explica como migrar](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/migrating-from-onprem-to-cloud) números de telefone de negócios da API Local para a API da Nuvem.

  

## 

## Ambiente

  

Essa coleção tem um ambiente correspondente da API da Nuvem do WhatsApp Postman [ambiente](https://l.facebook.com/l.php?u=https%3A%2F%2Flearning.postman.com%2Fdocs%2Fsending-requests%2Fmanaging-environments%2F&h=AT3Jl6xfHqHw5A-AkJw-SlhGwz5tLs7TDwuPZywAgKXJdFKOBPCcmPqWVGPUbMl3Yuihuh20rCP4wyF_pibpczkbdeTwuAOeGAmoVWuV4stDmtuEKMA3L1vLLmxcZp4RGtOKAxcepKr2LtOp1WMsTIo8YSU) que você deve selecionar ao usar a coleção. Defina valores atuais para as variáveis definidas nesse ambiente se desejar usar a coleção para realizar consultas.

  

Você pode encontrar a maioria desses valores no [Gerenciador do WhatsApp](https://business.facebook.com/wa/manage/home/) ou no painel WhatsApp > Começar no [painel do aplicativo](https://developers.facebook.com/apps). No entanto, se você tiver um token de acesso e o ID do portfólio de negócios, você pode usar consultas na coleção para obter os valores restantes.

  

## 

## Tokens de Acesso

  

A API suporta tokens de acesso de usuário e de usuário do sistema. Você pode obter um token de acesso de usuário carregando seu aplicativo no [painel do aplicativo](https://developers.facebook.com/apps) e navegando até o painel WhatsApp > Começar. Alternativamente, você pode usar o [Explorador da API do Graph](https://developers.facebook.com/tools/explorer/) para gerar um.

  

Como os tokens de acesso de usuário expiram após 24 horas, você provavelmente desejará gerar um token de acesso de usuário do sistema, que dura até 60 dias (ou permanentemente, se desejar). Consulte [Tokens de Acesso](https://developers.facebook.com/docs/whatsapp/business-management-api/get-started#access-tokens) para saber como criar um usuário do sistema e um token de acesso de usuário do sistema.

  

Uma vez que você tenha seu token, salve-o como um valor atual no ambiente.

  

## 

## ID do Portfólio de Negócios

  

Você pode obter o ID do portfólio de negócios entrando no [Meta Business Suite](https://business.facebook.com). O ID aparece na URL como o valor do parâmetro de consulta business\_id. Uma vez que você salve isso como um valor atual no ambiente, vá para a pasta da Conta de Negócios do WhatsApp (WABA) e execute a consulta Obter todas as WABAs de propriedade. Isso retornará o ID da WABA, que você pode salvar no ambiente e, em seguida, usar para determinar o ID do número de telefone de negócios.

  

## 

## Permissões

  

A API depende apenas de duas permissões:

  

-   whatsapp\_business\_management
    

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Phone-Number-ID}/register](#post-version-phone-number-id-register)

POST

[/{Version}/{Phone-Number-ID}/deregister](#post-version-phone-number-id-deregister)

* * *

## POST /{Version}/{Phone-Number-ID}/register

Com o ID do seu número de telefone em mãos, você pode registrá-lo. Na chamada de API de registro, você realiza duas ações ao mesmo tempo:

-   Registra o telefone.
    
-   Ativa a [verificação em duas etapas](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2Fgeneral%2Fverification%2Fabout-two-step-verification&h=AT3Jl6xfHqHw5A-AkJw-SlhGwz5tLs7TDwuPZywAgKXJdFKOBPCcmPqWVGPUbMl3Yuihuh20rCP4wyF_pibpczkbdeTwuAOeGAmoVWuV4stDmtuEKMA3L1vLLmxcZp4RGtOKAxcepKr2LtOp1WMsTIo8YSU) definindo um código de registro de 6 dígitos — você deve definir esse código em seu lado. Salve e memorize esse código, pois ele pode ser solicitado posteriormente. Configurar a autenticação de dois fatores é um requisito para usar a Cloud API.
    

  

Usuários de Cadastro Incorporado

Um número de telefone deve ser registrado dentro de 14 dias após passar pelo fluxo de Cadastro Incorporado. Se o número de telefone não for registrado durante essa janela, o número de telefone deve passar pelo fluxo de Cadastro Incorporado novamente antes do registro.

### Sintaxe da solicitação

**POST** /{Version}/{Phone-Number-ID}/register

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/register' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "backup": {    "data": "BACKUP_DATA",    "password": "P455w0rd##"  },  "messaging_product": "whatsapp",  "pin": "123678"}'
```

Selecionar código do status

200

* * *

```
{  "Migrate Account": {    "value": {      "success": "true"    }  },  "Register Phone": {    "value": {      "success": true    }  },  "Register Phone Number": {    "value": {      "success": "true"    }  }}
```

Header Parameters

* * *

User-Agentstring

Identifica o aplicativo cliente, SDK e a versão da especificação sendo usada. Este cabeçalho é usado para rastrear a adoção da especificação OpenAPI de mensagens comerciais e suas versões específicas. Ele permite que a Meta monitore o uso da API, as taxas de adoção e os prazos de descontinuação.

Padrões de formatação: - Especificação OpenAPI: Meta-Business-Messaging-SDK/{ver};spec={spec-ver} - SDK de terceiros: {Generator}/{ver} Meta-Business-Messaging-SDK/{spec-ver} - SDK nativo da Meta: Meta-Business-Messaging-SDK-{Lang}/{version}

Exemplos: - Meta-Business-Messaging-SDK/1.0.0;spec=2025-09-30 - Swagger-Codegen/1.0.0 Meta-Business-Messaging-SDK/2025-09-30 - Meta-Business-Messaging-SDK-Python/2.1.0

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Phone-Number-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

backupobject

Mostrar atributos secundários

* * *

datastring

* * *

passwordstring

* * *

messaging\_productstring

* * *

pinstring

Respostas

* * *

Com o ID do seu número de telefone em mãos, você pode registrá-lo. Na chamada de API de registro, você realiza duas ações ao mesmo tempo:

-   Registra o telefone.
    
-   Ativa a [verificação em duas etapas](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2Fgeneral%2Fverification%2Fabout-two-step-verification&h=AT3Jl6xfHqHw5A-AkJw-SlhGwz5tLs7TDwuPZywAgKXJdFKOBPCcmPqWVGPUbMl3Yuihuh20rCP4wyF_pibpczkbdeTwuAOeGAmoVWuV4stDmtuEKMA3L1vLLmxcZp4RGtOKAxcepKr2LtOp1WMsTIo8YSU) definindo um código de registro de 6 dígitos — você deve definir esse código em seu lado. Salve e memorize esse código, pois ele pode ser solicitado posteriormente. Configurar a autenticação de dois fatores é um requisito para usar a Cloud API.
    

  

Usuários de Cadastro Incorporado

Um número de telefone deve ser registrado dentro de 14 dias após passar pelo fluxo de Cadastro Incorporado. Se o número de telefone não for registrado durante essa janela, o número de telefone deve passar pelo fluxo de Cadastro Incorporado novamente antes do registro.

200

Cadastrar Número de Telefone / Cadastrar Telefone / Migrar Conta

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successMust be any of: string, boolean, string

Mostrar atributos secundários

* * *

string

* * *

boolean

* * *

string

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/register' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "backup": {    "data": "BACKUP_DATA",    "password": "P455w0rd##"  },  "messaging_product": "whatsapp",  "pin": "123678"}'
```

Selecionar código do status

200

* * *

```
{  "Migrate Account": {    "value": {      "success": "true"    }  },  "Register Phone": {    "value": {      "success": true    }  },  "Register Phone Number": {    "value": {      "success": "true"    }  }}
```

* * *

## POST /{Version}/{Phone-Number-ID}/deregister

Para cancelar o registro do seu telefone, faça uma chamada POST para {{Phone-Number-ID}}/deregister. Cancelar registro de telefone remove um telefone previamente registrado. Você sempre pode re-registrar seu telefone repetindo o processo de registro.

  

#### 

Resposta

  

Uma resposta bem-sucedida retorna:

  

```
{
    "success": true
}
```

### Sintaxe da solicitação

**POST** /{Version}/{Phone-Number-ID}/deregister

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/deregister' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: text/plain' \  --data '""'
```

Header Parameters

* * *

User-Agentstring

Identifica o aplicativo cliente, SDK e a versão da especificação sendo usada. Este cabeçalho é usado para rastrear a adoção da especificação OpenAPI de mensagens comerciais e suas versões específicas. Ele permite que a Meta monitore o uso da API, as taxas de adoção e os prazos de descontinuação.

Padrões de formatação: - Especificação OpenAPI: Meta-Business-Messaging-SDK/{ver};spec={spec-ver} - SDK de terceiros: {Generator}/{ver} Meta-Business-Messaging-SDK/{spec-ver} - SDK Nativo da Meta: Meta-Business-Messaging-SDK-{Lang}/{version}

Exemplos: - Meta-Business-Messaging-SDK/1.0.0;spec=2025-09-30 - Swagger-Codegen/1.0.0 Meta-Business-Messaging-SDK/2025-09-30 - Meta-Business-Messaging-SDK-Python/2.1.0

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Phone-Number-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:text/plain

Respostas

* * *

Para cancelar o registro do seu telefone, faça uma chamada POST para {{Phone-Number-ID}}/deregister. Cancelar registro de telefone remove um telefone previamente registrado. Você sempre pode re-registrar seu telefone repetindo o processo de registro.

  

#### 

Resposta

  

Uma resposta bem-sucedida retorna:

  

```
{
    "success": true
}
```

200

Número de telefone especificado desregistrado com sucesso.

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/deregister' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: text/plain' \  --data '""'
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)