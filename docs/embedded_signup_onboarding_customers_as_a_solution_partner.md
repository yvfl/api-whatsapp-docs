<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner -->
<!-- Scraped: 2025-12-20T17:48:33.512Z -->

# Integrar clientes empresariais como Parceiro de Soluções

Updated: 14 de nov de 2025

Este documento descreve as etapas que os Parceiros de Soluções devem executar para integrar novos clientes corporativos que concluíram o fluxo de Cadastro incorporado.

Caso você seja um Parceiro de Soluções, os clientes corporativos que concluírem sua implementação do fluxo de Cadastro incorporado não poderão usar seu app para acessar ativos do WhatsApp nem enviar e receber mensagens até que você conclua estas etapas.

## O que será preciso

-   ID da WABA do cliente empresarial (retornado via [registro de sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) ou [solicitação de API](/documentation/business-messaging/whatsapp/solution-providers/manage-accounts#get-shared-waba-id-with-access-token))-   ID do número de telefone comercial do cliente empresarial (retornado via [registro de sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) ou [solicitação de API](/documentation/business-messaging/whatsapp/solution-providers/manage-phone-numbers#getting-phone-numbers))-   ID do app (exibido na parte superior do **Painel de Apps**)-   a chave secreta do app (exibida em **Painel de Apps** > **Configurações do app** > **Básico**)-   a identificação da linha de crédito (exibida em **Gerenciador de Negócios** > **Configurações do negócio** > **Informações da empresa** ou retornada por meio de uma [solicitação à API](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#get-your-credit-line-id))-   o [token de acesso do usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ("token do sistema")

Além disso, se você deseja testar os recursos de mensagens usando o número de telefone comercial do cliente, precisará de um número de telefone do WhatsApp que já possa enviar e receber mensagens de outros números do WhatsApp.

Execute todas as solicitações descritas abaixo usando solicitações de servidor para servidor. Não use solicitações do cliente.

## Etapa 1: trocar o código do token por um token da empresa

Use o ponto de extremidade **GET /oauth/access\_token** para trocar o código de token [retornado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback) pelo Cadastro incorporado por um token de acesso de usuário do sistema de integração comercial ("token comercial").

### Solicitação

```
curl --get 'https://graph.facebook.com/v21.0/oauth/access_token' \
-d 'client_id=<APP_ID>' \
-d 'client_secret=<APP_SECRET>' \
-d 'code=<CODE>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<APP_ID>`

**Obrigatório.**

O ID do app. Exibido na parte superior do **Painel de Apps**.

`236484624622562`

`<APP_SECRET>`

**Obrigatório.**

A chave secreta do app. Você pode encontrá-la em **Painel de Apps** > **Chave secreta do app** > **Básico**.

`614fc2afde15eee07a26b2fe3eaee9b9`

`<CODE>`

**Obrigatório.**

O código [retornado pelo Cadastro incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback) quando o cliente concluiu o fluxo com sucesso.

`AQBhlXsctMxJYbwbrpybxlo9tLPGy-QAmjBJA03jxLos43wxlBlrYozY5C33BXJULd133cOJf_5y6EkJZYMrAmW-EMj3Wdap9-NUM2nS4s8tC-ES7slBhh6QpCFM7-SzpI-iqsjqTGyxbUUW3AeaEyLkeZFIkBgcQ_SOxo9HShm20SDR5_n7AT9ZJ5dcgpqBQykNT-pQ8V7Ne9-sr6RLAWtJMF7-Zx6ABudRcWIN53tUTtquDVNuq3lrco4BlVQAv-54tR83Ae0ODN9Uet6j-BVLuetXhQCM3sz9RdgedlbxkidMbkztvYX1j7baOrJxyLyYGWYgbnUrKRQKCtWTsO5ekIGFgtbpS8UPJNqV6j8E5XKPJ8QA7ZFqzkB0s2O__J5FrjHzc_rDo1EuRbw98ihHDzQnvuXeHapEyfhLDJct0A`

### Resposta

Caso a solicitação seja bem-sucedida:

```
<BUSINESS_TOKEN>
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_TOKEN>`

O [token comercial](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

## Etapa 2: assinar webhooks na WABA do cliente

Use o ponto de extremidade [POST /<WABA\_ID>/subscribed\_apps](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) para assinar webhooks na WABA do cliente comercial. Se quiser que os webhooks do cliente sejam enviados para um URL de retorno de ligação diferente do definido no seu app, você terá várias opções de [substituição de webhook](/documentation/business-messaging/whatsapp/webhooks/override).

### Solicitação

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_TOKEN>`

**Obrigatório.**

O [token comercial](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

`<WABA_ID>`

**Obrigatório.**

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

## Etapa 3: compartilhar sua linha de crédito com o cliente

No momento, estamos testando novos métodos para compartilhar sua linha de crédito com clientes empresariais integrados. Essas etapas substituirão este passo no futuro. Se você quiser implementá-las agora, consulte [Método alternativo para compartilhar sua linha de crédito](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#alternate-method-for-sharing-your-credit-line).

**Observação:** se você estiver usando a API abaixo, ou seja, `whatsapp_credit_sharing_and_attach`, será necessário adicionar o usuário do sistema às contas compartilhadas do WhatsApp Business como pré-requisito. Consulte [este documento para ver as etapas do processo](/documentation/business-messaging/whatsapp/solution-providers/manage-system-users).

Depois de adicionar o usuário do sistema à conta do WhatsApp Business, use o ponto de extremidade [POST /<EXTENDED\_CREDIT\_LINE\_ID>/whatsapp\_credit\_sharing\_and\_attach](/docs/marketing-api/reference/extended-credit/whatsapp_credit_sharing_and_attach#Creating) para compartilhar sua linha de crédito com um cliente empresarial integrado.

### Solicitação

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach?waba_currency=<CUSTOMER_BUSINESS_CURRENCY>&waba_id=<CUSTOMER_WABA_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<CUSTOMER_BUSINESS_CURRENCY>`

**Obrigatório.**

A moeda da empresa, representada por um código de três letras. Valores compatíveis:

-   `AUD`-   `EUR`-   `GBP`-   `IDR`-   `INR`-   `USD`

Esta moeda é usada para fins de faturamento e corresponde às taxas de [precificação](/documentation/business-messaging/whatsapp/pricing).

`USD`

`<CUSTOMER_WABA_ID>`

**Obrigatório.**

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

`<EXTENDED_CREDIT_LINE_ID>`

**Obrigatório.**

A identificação da sua linha de crédito estendida.

`1972385232742146`

`<SYSTEM_TOKEN>`

**Obrigatório.**

Seu token do sistema.

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "allocation_config_id": "<ALLOCATION_CONFIGURATION_ID>",
  "waba_id": "<CUSTOMER_WABA_ID>"
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<ALLOCATION_CONFIGURATION_ID>`

ID de configuração para alocação da linha de crédito estendida.

Salve esse ID para [verificar](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#verifying-shared-status) se a linha de crédito foi realmente compartilhada com o cliente.

`58501441721238`

`<CUSTOMER_WABA_ID>`

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

## Etapa 4: registrar o número de telefone do cliente

Use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/register](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api) para registrar o número de telefone comercial do cliente para uso com a API de Nuvem.

### Solicitação

```
curl 'https://graph.facebook.com/v21.0/<BUSINESS_PHONE_NUMBER_ID>/register' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "<DESIRED_PIN>"
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_PHONE_NUMBER_ID>`

**Obrigatório.**

A identificação do número de telefone comercial do cliente retornada.

`106540352242922`

`<BUSINESS_TOKEN>`

**Obrigatório.**

O token da empresa do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

`<DESIRED_PIN>`

**Obrigatório.**

Defina esse valor como um número de seis dígitos. Este será o PIN de confirmação em duas etapas do número de telefone comercial.

`581063`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

## Etapa 5: enviar uma mensagem de teste

_Esta etapa é opcional._

Se você quiser testar os recursos de mensagens do número de telefone comercial do cliente comercial, envie uma mensagem para o número do cliente a partir do seu próprio número do WhatsApp (isso abrirá uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows), permitindo responder com qualquer tipo de mensagem).

Depois, use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de texto como resposta.

### Solicitação

```
curl 'https://graph.facebook.com/v21.0/<BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_NUMBER>",
  "type": "text",
  "text": {
    "body": "<BODY_TEXT>"
  }
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<BODY_TEXT>`

**Obrigatório.**

Texto do corpo da mensagem. Compatível com URLs.

Tamanho máximo de 4096 caracteres.

`Message received, loud and clear!`

`<BUSINESS_PHONE_NUMBER_ID>`

**Obrigatório.**

A identificação do número de telefone comercial do cliente.

`106540352242922`

`<BUSINESS_TOKEN>`

**Obrigatório.**

O token da empresa do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

`<WHATSAPP_USER_NUMBER>`

**Obrigatório.**

Seu número de telefone do WhatsApp que pode enviar e receber mensagens de outros números do WhatsApp.

Não pode ser um número de telefone comercial já registrado para uso com a API de Nuvem ou a API Local.

`+16505551234`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<WHATSAPP_USER_NUMBER>",
      "wa_id": "<WHATSAPP_USER_ID>"
    }
  ],
  "messages": [
    {
      "id": "<WHATSAPP_MESSAGE_ID>"
    }
  ]
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<WHATSAPP_MESSAGE_ID>`

ID da mensagem do WhatsApp.

`wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA`

`<WHATSAPP_USER_ID>`

Seu número de identificação do usuário do WhatsApp.

`16505551234`

`<WHATSAPP_USER_NUMBER>`

Seu número de telefone do WhatsApp para o qual a mensagem foi enviada.

`+16505551234`

Se você conseguiu enviar e receber mensagens com sucesso usando o número de telefone comercial do cliente e se os webhooks das **mensagens** foram disparados [descrevendo a mensagem inicial que você enviou](/documentation/business-messaging/whatsapp/webhooks/reference/messages), bem como o [status de entrega](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) da mensagem enviada em resposta, o número de telefone comercial do cliente está funcionando corretamente.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)