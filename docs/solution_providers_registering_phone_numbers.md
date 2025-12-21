<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers -->
<!-- Scraped: 2025-12-20T17:52:10.102Z -->

# Como registrar números de telefone comerciais

Updated: 14 de nov de 2025

Este documento descreve as etapas para registrar de forma programática números de telefone comerciais em contas do WhatsApp Business (WABA, pelas iniciais em inglês).

O **cadastro incorporado executa automaticamente as etapas 1 a 3** (a menos que você [ignore a tela de adição de número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition)). Por isso, é necessário executar apenas a etapa 4 quando um cliente empresarial concluir o fluxo. No entanto, se a seleção de número de telefone estiver desabilitada, será preciso executar todas as quatro etapas.

O processo de registro de números de telefone comerciais é composto de quatro etapas:

-   Criar o número em uma WABA.-   Obter um código de verificação para o número em questão.-   Usar o código para verificar o número.-   Registrar o número verificado para uso com a API de Nuvem ou Local.

Essas etapas estão descritas abaixo.

Também é possível executar as quatro etapas repetidas vezes para registrar números de telefone comerciais em massa.

## Limitações

Os números de telefone comerciais devem atender aos nossos [requisitos de número de telefone](/docs/whatsapp/phone-numbers#requirements).

## Etapa 1: criar o número de telefone

Envie uma solicitação POST ao ponto de extremidade [Conta do WhatsApp Business > Números de telefone](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Creating) para criar um número de telefone comercial em uma WABA.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/phone_numbers
```

### Corpo do post

```
{
  "cc": "<CC>",
  "phone_number": "<PHONE_NUMBER>",
  "verified_name": "<VERIFIED_NAME>"
}
```

### Propriedades do corpo

Espaço reservado

Descrição

Valor de exemplo

`<CC>`

_String_

**Obrigatório.**

  
O código de chamada do país do número de telefone.

`1`

`<PHONE_NUMBER>`

_String_

**Obrigatório.**

  
O número de telefone, com ou sem o código de chamada do país.

`15551234`

`<VERIFIED_NAME>`

_String_

**Obrigatório.**

  
O [nome de exibição](https://www.facebook.com/business/help/338047025165344) do número de telefone.

`Lucky Shrub`

### Resposta

Em caso de sucesso, a API retorna um ID de número de telefone comercial. Capture essa identificação para usar na próxima etapa.

```
{
  "id": "<ID>"
}
```

### Propriedades de resposta

Espaço reservado

Descrição

Valor de exemplo

`<ID>`

Uma identificação de [número de telefone do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) não verificada.

`106540352242922`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/102290129340398/phone_numbers' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAH7...' \
-d '{
    "cc": "1",
    "phone_number": "14195551518",
    "verified_name": "Lucky Shrub"
}'
```

### Exemplo de resposta

```
{  "id": "110200345501442"}
```

## Etapa 2: solicitar um código de verificação

Envie uma solicitação POST ao ponto de extremidade [Número de telefone do WhatsApp Business > Solicitar código](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api) para que um código de verificação seja enviado ao número de telefone comercial.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/request_code
  ?code_method=<CODE_METHOD>
  &language=<LANGUAGE>
```

### Parâmetros de cadeia de caracteres de consulta

Espaço reservado

Descrição

Valor de exemplo

`<CODE_METHOD>`

**Obrigatório.**

  
Indica como você quer que o código de verificação seja enviado ao número de telefone comercial. Pode ser `SMS` ou `VOICE`.

`SMS`

`<LANGUAGE>`

**Obrigatório.**

  
Indica o idioma usado no código de verificação enviado.

`en_US`

### Resposta

```
{
  "success": <SUCCESS>
}
```

### Propriedades de resposta

Espaço reservado

Descrição

Valor de exemplo

`<SUCCESS>`

Booliano para indicar sucesso ou fracasso.

  
Em caso de sucesso, a API responderá com `true` e um código de verificação será enviado para o número de telefone comercial por meio do método especificado na solicitação.

`true`

### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/110200345501442/request_code?code_method=SMS&language=en_US' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "success": true}
```

### Exemplo de entrega de SMS

Exemplo de mensagem SMS em inglês com um código de verificação, entregue a um número de telefone comercial:

```
WhatsApp code 123-830
```

## Etapa 3: verificar o número

Envie uma solicitação POST ao ponto de extremidade [Número de telefone do WhatsApp Business > Verificar código](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/verify-code-api) para verificar o número de telefone comercial, usando o código de verificação do SMS ou da mensagem de voz entregue no número.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/verify_code
  ?code=<CODE>
```

### Parâmetros de cadeia de caracteres de consulta

Espaço reservado

Descrição

Valor de exemplo

`<CODE>`

_String_

**Obrigatório.**

  
O código de verificação sem o hífen.

`123830`

### Resposta

```
{
  "success": <SUCCESS>
}
```

### Propriedades de resposta

Espaço reservado

Descrição

Valor de exemplo

`<SUCCESS>`

Booliano para indicar sucesso ou fracasso.

  
Em caso de sucesso, a API responderá com `true`, indicando que o número de telefone comercial foi verificado.

`true`

### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/110200345501442/verify_code?code=123830' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "success": true}
```

## Etapa 4: registrar o número

Envie uma solicitação POST ao ponto de extremidade [Número de telefone do WhatsApp Business > Registrar](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api) para registrar o número de telefone comercial e usá-lo com a **API de Nuvem**.

Para registrar o número de telefone comercial na API Local, consulte a referência de ponto de extremidade [Conta](/docs/whatsapp/on-premises/reference/account) da API Local para ver instruções.

### Sintaxe da solicitação

```
POST /<BUSINESS_PHONE_NUMBER_ID>/register
```

### Corpo do post

```
{
  "messaging_product": "whatsapp",
  "pin": "<PIN>"
}
```

### Propriedades do corpo

Espaço reservado

Descrição

Valor de exemplo

`<PIN>`

_String_

**Obrigatório.**

  
Se a confirmação em duas etapas estiver habilitada no número de telefone comercial, defina esse valor como o PIN de verificação com seis dígitos. Se não lembrar o PIN, você poderá [atualizá-lo](/documentation/business-messaging/whatsapp/business-phone-numbers/two-step-verification#updating-verification-code).

  
Se a confirmação em duas etapas não estiver habilitada, defina esse valor como um número de seis dígitos. Este será o PIN de confirmação em duas etapas do número de telefone comercial.

`123456`

### Resposta

Em caso de sucesso, a API responderá com `true`, indicando que o registro foi concluído.

```
{
  "success": <SUCCESS>
}
```

### Propriedades de resposta

Espaço reservado

Descrição

Valor de exemplo

`<SUCCESS>`

Booliano para indicar sucesso ou fracasso.

  
Em caso de sucesso, a API responderá com `true`, indicando que o registro foi concluído.

`true`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/110200345501442/register' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "123456"
}'
```

### Exemplo de resposta

```
{  "success": true}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)