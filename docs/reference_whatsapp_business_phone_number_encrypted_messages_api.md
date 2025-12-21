<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/encrypted-messages-api -->
<!-- Scraped: 2025-12-20T18:01:58.706Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Mensagens Criptografadas

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/encrypted-messages-api/v23.0.md/)

Version

v23.0

Envie mensagens criptografadas usando o formato JWE (JSON Web Encryption).

Adiciona criptografia de nível de carga útil em cima do TLS/SSL para segurança aprimorada.

Suporta criptografia de conteúdo A128GCM/A256GCM e criptografia de chave RSA-OAEP.

## URL base

https://graph.facebook.com

## Pontos de extremidade

POST

[/{Version}/{Phone-Number-ID}/messages\_encrypted](#post-version-phone-number-id-messages-encrypted)

* * *

## POST /{Version}/{Phone-Number-ID}/messages\_encrypted

Envie mensagens criptografadas usando o formato JWE (JSON Web Encryption). Este endpoint fornece uma camada adicional de segurança em cima do padrão TLS/SSL existente, aceitando payloads de mensagens pré-criptografadas e retornando respostas criptografadas.

  

Observações Importantes:

-   Somente respostas bem-sucedidas serão criptografadas
    
-   Respostas de erro serão retornadas não criptografadas se o JSON subjacente estiver mal formatado
    
-   A criptografia de payload deve ser habilitada para o número de telefone usando o endpoint POST /<WABA\_ID>/settings
    
-   O payload criptografado deve seguir a mesma estrutura do endpoint /messages original
    

  

Pré-requisitos:

-   Token de Acesso do Usuário com permissão whatsapp\_business\_messaging
    
-   Phone-Number-ID válido para sua conta de negócios do WhatsApp registrada
    
-   Criptografia de payload habilitada para o número de telefone
    
-   Token JWE formatado corretamente contendo payload de mensagem criptografada usando algoritmos suportados
    

  

Algoritmos Suportados:

-   Criptografia de Conteúdo: A128GCM, A256GCM...
    

### Sintaxe da solicitação

**POST** /{Version}/{Phone-Number-ID}/messages\_encrypted

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/messages_encrypted' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "messaging_product": "whatsapp",  "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ..."}'
```

Selecionar código do status

200400401403429500

* * *

```
{  "Encrypted Message Success Response": {    "summary": "Successful encrypted message response",    "value": {      "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ.encrypted_response_payload..."    }  },  "Encrypted Text Message Response": {    "summary": "Response for encrypted text message",    "value": {      "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ..."    }  },  "Encrypted Media Message Response": {    "summary": "Response for encrypted media message",    "value": {      "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ.media_response..."    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·obrigatório

Tipo de mídia do corpo da solicitação

Path Parameters

* * *

Versionstring·obrigatório

Versão da API (por exemplo, v21.0, v22.0)

Phone-Number-IDstring·obrigatório

O ID do número de telefone usado para enviar a mensagem. Recuperado da Conta de Negócios do WhatsApp.

Corpo da solicitaçãoObrigatório

* * *

Tipo de conteúdo:application/json

Esquema:EncryptedMessageRequest

Mostrar atributos secundários

* * *

EncryptedMessageRequest

* * *

messaging\_product"whatsapp"·obrigatório

Serviço de mensagens usado para o pedido. Use o whatsapp.

* * *

encrypted\_contentsstring·obrigatório

Carga de payload JWE com estrutura de mensagens criptografadas. Isso deve ser um token JWE válido contendo a carga de payload da mensagem criptografada.

Respostas

* * *

Envie mensagens criptografadas usando o formato JWE (JSON Web Encryption). Este endpoint fornece uma camada adicional de segurança em cima do padrão TLS/SSL existente, aceitando payloads de mensagens pré-criptografadas e retornando respostas criptografadas.

  

Observações Importantes:

-   Somente respostas bem-sucedidas serão criptografadas
    
-   Respostas de erro serão retornadas não criptografadas se o JSON subjacente estiver mal formatado
    
-   A criptografia de payload deve ser habilitada para o número de telefone usando o endpoint POST /<WABA\_ID>/settings
    
-   O payload criptografado deve seguir a mesma estrutura do endpoint /messages original
    

  

Pré-requisitos:

-   Token de Acesso do Usuário com permissão whatsapp\_business\_messaging
    
-   Phone-Number-ID válido para sua conta de negócios do WhatsApp registrada
    
-   Criptografia de payload habilitada para o número de telefone
    
-   Token JWE formatado corretamente contendo payload de mensagem criptografada usando algoritmos suportados
    

  

Algoritmos Suportados:

-   Criptografia de Conteúdo: A128GCM, A256GCM...
    

200

Mensagem criptografada enviada com sucesso

Tipo de conteúdo:application/json

Esquema:EncryptedMessageResponse

Mostrar atributos secundários

* * *

EncryptedMessageResponse

* * *

encrypted\_contentsstring·obrigatório

Estrutura de resposta de carga JWE com mensagens criptografadas. Contém a resposta criptografada da API do WhatsApp Business.

400

Solicitação Inválida - Token JWE inválido ou solicitação malformada. Observação: As respostas de erro são retornadas sem criptografia, mesmo quando a criptografia de carga útil está habilitada.

Tipo de conteúdo:application/json

Esquema:ErrorResponse

Mostrar atributos secundários

* * *

ErrorResponse

* * *

errorobject

Mostrar atributos secundários

* * *

messagestring

Mensagem de erro descrevendo o que deu errado

* * *

typestring

Tipo de erro

* * *

codeinteger

Código de erro

* * *

error\_subcodeinteger

Código de suberro para identificação de erro mais específica

401

Não autorizado - Token de acesso inválido. Observação: As respostas de erro são retornadas sem criptografia.

Tipo de conteúdo:application/json

Esquema:ErrorResponse

Mostrar atributos secundários

* * *

ErrorResponse

* * *

errorobject

Mostrar atributos secundários

* * *

messagestring

Mensagem de erro descrevendo o que deu errado

* * *

typestring

Tipo de erro

* * *

codeinteger

Código de erro

* * *

error\_subcodeinteger

Código de suberro para identificação de erro mais específica

403

Proibido - Permissões insuficientes. Observação: As respostas de erro são retornadas sem criptografia.

Tipo de conteúdo:application/json

Esquema:ErrorResponse

Mostrar atributos secundários

* * *

ErrorResponse

* * *

errorobject

Mostrar atributos secundários

* * *

messagestring

Mensagem de erro descrevendo o que deu errado

* * *

typestring

Tipo de erro

* * *

codeinteger

Código de erro

* * *

error\_subcodeinteger

Código de suberro para identificação de erro mais específica

429

Muitos Pedidos - Limite de taxa excedido. Observação: Respostas de erro são retornadas não criptografadas.

Tipo de conteúdo:application/json

Esquema:ErrorResponse

Mostrar atributos secundários

* * *

ErrorResponse

* * *

errorobject

Mostrar atributos secundários

* * *

messagestring

Mensagem de erro descrevendo o que deu errado

* * *

typestring

Tipo de erro

* * *

codeinteger

Código de erro

* * *

error\_subcodeinteger

Código de suberro para identificação de erro mais específica

500

Erro Interno do Servidor. Observação: As respostas de erro são retornadas sem criptografia.

Tipo de conteúdo:application/json

Esquema:ErrorResponse

Mostrar atributos secundários

* * *

ErrorResponse

* * *

errorobject

Mostrar atributos secundários

* * *

messagestring

Mensagem de erro descrevendo o que deu errado

* * *

typestring

Tipo de erro

* * *

codeinteger

Código de erro

* * *

error\_subcodeinteger

Código de suberro para identificação de erro mais específica

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/messages_encrypted' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "messaging_product": "whatsapp",  "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ..."}'
```

Selecionar código do status

200400401403429500

* * *

```
{  "Encrypted Message Success Response": {    "summary": "Successful encrypted message response",    "value": {      "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ.encrypted_response_payload..."    }  },  "Encrypted Text Message Response": {    "summary": "Response for encrypted text message",    "value": {      "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ..."    }  },  "Encrypted Media Message Response": {    "summary": "Response for encrypted media message",    "value": {      "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ.media_response..."    }  }}
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