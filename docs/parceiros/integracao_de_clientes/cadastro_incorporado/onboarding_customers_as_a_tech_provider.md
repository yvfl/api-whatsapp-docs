<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider -->
<!-- Scraped: 2025-12-20T17:48:24.579Z -->

# Integrar clientes empresariais como Provedor de Tecnologia ou Parceiro de Tecnologia

Updated: 14 de nov de 2025

Este documento descreve as etapas que os Provedores e Parceiros de Tecnologia devem executar para integrar novos clientes empresariais que concluíram o fluxo de Cadastro incorporado.

Caso seja um Provedor ou Parceiro de Tecnologia, qualquer cliente empresarial que concluir sua implementação do fluxo de Cadastro incorporado não poderá usar seu app para acessar ativos do WhatsApp ou enviar e receber mensagens (se estiver oferecendo serviços de mensagens) até que você conclua estas etapas.

## O que será preciso

-   ID da WABA do cliente empresarial (retornado via [registro de sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) ou [solicitação de API](/documentation/business-messaging/whatsapp/solution-providers/manage-accounts#get-shared-waba-id-with-access-token))-   ID do número de telefone comercial do cliente empresarial (retornado via [registro de sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) ou [solicitação de API](/documentation/business-messaging/whatsapp/solution-providers/manage-phone-numbers#getting-phone-numbers))-   ID do app (exibido na parte superior do **Painel de Apps**)-   a chave secreta do app (exibida em **Painel de Apps** > **Configurações do app** > **Básico**)

Além disso, se você deseja testar os recursos de mensagens usando o número de telefone comercial do cliente, precisará de um número de telefone do WhatsApp que já possa enviar e receber mensagens de outros números do WhatsApp.

Execute todas as solicitações descritas abaixo usando solicitações de servidor para servidor. Não use solicitações do cliente.

## Etapa 1: trocar o código do token por um token da empresa

Use o ponto de extremidade **GET /oauth/access\_token** para trocar o código de token [retornado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) pelo Cadastro incorporado por um token de acesso de usuário do sistema de integração comercial ("token comercial").

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

O código [retornado pelo Cadastro incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) quando o cliente concluiu o fluxo com sucesso.

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

`<API_VERSION>`

_String_

**Opcional.**

Versão da Graph API.

v24.0

`<BUSINESS_TOKEN>`_String_

**Obrigatório.**

O [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

`<WABA_ID>`_String_

**Obrigatório.**

É a identificação da conta do WhatsApp Business.

`102290129340398`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

## Etapa 3: registrar o número de telefone do cliente

Use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/register](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api) e cadastre o número de telefone comercial do cliente para uso com a API de Nuvem.

### Solicitação

```
curl 'https://graph.facebook.com/v21.0/<BUSINESS_CUSTOMER_PHONE_NUMBER_ID>/register' \
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

`<BUSINESS_CUSTOMER_PHONE_NUMBER_ID>`_String_

**Obrigatório.**

Identificação do número de telefone comercial do cliente.

`106540352242922`

`<BUSINESS_TOKEN>`_String_

**Obrigatório.**

O [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

`<DESIRED_PIN>`_String_

**Obrigatório.**

Defina esse valor como um número de seis dígitos. Este será o PIN de confirmação em duas etapas do número de telefone comercial.

`581063`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

## Etapa 4: enviar uma mensagem de teste

_Esta etapa é opcional._

Se você quiser testar os recursos de mensagens do número de telefone comercial do cliente comercial, envie uma mensagem para o número do cliente a partir do seu próprio número do WhatsApp (isso abrirá uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows), permitindo responder com qualquer tipo de mensagem).

Depois, use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de texto como resposta.

### Solicitação

```
curl 'https://graph.facebook.com/v21.0/<BUSINESS_CUSTOMER_PHONE_NUMBER_ID>/messages' \
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

`<BODY_TEXT>`_String_

**Obrigatório.**

Texto do corpo da mensagem. Compatível com URLs.

Tamanho máximo de 4096 caracteres.

`Message received, loud and clear!`

`<BUSINESS_CUSTOMER_PHONE_NUMBER_ID>`_String_

**Obrigatório.**

Identificação do número de telefone comercial do cliente.

`106540352242922`

`<BUSINESS_TOKEN>`_String_

**Obrigatório.**

O [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

`<WHATSAPP_USER_NUMBER>`_String_

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

## Etapa 5: instruir o cliente a adicionar uma forma de pagamento

Instrua seu cliente a usar o Gerenciador do WhatsApp para adicionar uma forma de pagamento. Você pode fornecer o seguinte link da Central de Ajuda:

[https://www.facebook.com/business/help/488291839463771](https://www.facebook.com/business/help/488291839463771)

Como alternativa, você pode instruir o cliente a:

-   acessar o painel do **Gerenciador do WhatsApp** > **Visão geral** em [https://business.facebook.com/wa/manage/home/](https://business.facebook.com/wa/manage/home/)-   clicar no botão **Adicionar forma de pagamento**-   concluir o fluxo

Depois que o cliente adicionar uma forma de pagamento, ele estará totalmente integrado à plataforma do WhatsApp Business e poderá começar a usar seu app para acessar os ativos do WhatsApp, além de enviar e receber mensagens (se você estiver fornecendo esse serviço).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)