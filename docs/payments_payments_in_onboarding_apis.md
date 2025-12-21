<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/onboarding-apis -->
<!-- Scraped: 2025-12-20T17:44:34.307Z -->

# APIs de integração

Updated: 14 de nov de 2025

Para receber pagamentos no WhatsApp, você precisa ter uma configuração de pagamento vinculada à conta do WhatsApp Business correspondente. Cada configuração de pagamento é associada a um nome único. Como parte da mensagem order\_details, você pode especificar a configuração de pagamento que será usada para determinada finalização da compra.

As APIs de integração permitem executar programaticamente determinadas operações:

-   Obtenha todas as configurações de pagamento vinculadas a uma conta do WhatsApp Business.-   Obtenha uma configuração de pagamento específica vinculada a uma conta do WhatsApp Business.-   Crie uma configuração de pagamento.-   Gere novamente o link do OAuth do gateway de pagamento para vincular a configuração de pagamento a um gateway.-   Remova uma configuração de pagamento.

## Obter todas as configurações de pagamento

Obtenha uma lista de configurações de pagamento vinculadas à conta do WhatsApp Business.

### Sintaxe da solicitação

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configurations
```

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v16.0/102290129340398/payment_configurations' \-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "data": [    {      "payment_configurations": [    {      "configuration_name": "test-payment-configuration",      "merchant_category_code": {        "code": "0000",            "description": "Test MCC Code"       },           "purpose_code": {         "code": "00",         "description": "Test Purpose Code"        },        "status": "Active",         "provider_mid": "test-payment-gateway-mid",        "provider_name": "RazorPay",        "created_timestamp": 1720203204,        "updated_timestamp": 1721088316    },          ....  ]     }  ]}
```

Campo

Descrição

`configuration_name`

string

**Obrigatório.**

O nome da configuração de pagamento que será usada na mensagem de detalhes do pedido.

`merchant_category_code`

objeto

**Obrigatório.**

Código de Categoria do Comerciante:

String `code`

-   **Obrigatório.** Será um código MCC válido.

String `description`

-   **Obrigatório.** Descrição do código MCC.

`purpose_code`

objeto

**Obrigatório.**

Código de finalidade:

String `code`

-   **Obrigatório.** Será um código de finalidade válido.

String `description`

-   **Obrigatório.** Descrição do código de finalidade.

`status`

string

**Obrigatório.**

O status da configuração de pagamento. Deve ser um destes: \["Active", "Needs\_Connecting", "Needs\_Testing"\].

`provider_mid`

string

**Opcional.**

Número de Identificação do Comerciante (MID) do Gateway de Pagamento.

`provider_name`

string

**Opcional.**

Nome do gateway de pagamento. Deve ser um destes: \[“razorpay”, “payu”, “zaakpay”\].

`merchant_vpa`

string

**Opcional.**

Nome de usuário da UPI do comerciante.

`created_timestamp`

número inteiro

**Opcional.**

O horário em que a configuração de pagamento foi criada.

`updated_timestamp`

número inteiro

**Opcional.**

O horário da última atualização da configuração de pagamento.

## Obter uma configuração de pagamento específica

Obtenha uma configuração de pagamento específica vinculada à conta do WhatsApp Business.

### Sintaxe da solicitação

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configuration/<CONFIGURATION_NAME>
```

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v16.0/102290129340398/payment_configuration/test-payment-configuration' \-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "data": [    {      "configuration_name": "test-payment-configuration",      "merchant_category_code": {        "code": "0000",        "description": "Test MCC Code"      },      "purpose_code": {        "code": "00",        "description": "Test Purpose Code"      },      "status": "Active",      "provider_mid": "test-payment-gateway-mid",      "provider_name": "RazorPay",      "created_timestamp": 1720203204,      "updated_timestamp": 1721088316     }  ]}
```

Campo

Descrição

`configuration_name`

string

**Obrigatório.**

O nome da configuração de pagamento que será usada na mensagem de detalhes do pedido.

`merchant_category_code`

objeto

**Obrigatório.**

Código de Categoria do Comerciante:

String `code`

-   **Obrigatório.** Será um código MCC válido.

String `description`

-   **Obrigatório.** Descrição do código MCC.

`purpose_code`

objeto

**Obrigatório.**

Código de finalidade:

String `code`

-   **Obrigatório.** Será um código de finalidade válido.

String `description`

-   **Obrigatório.** Descrição do código de finalidade.

`status`

string

**Obrigatório.**

O status da configuração de pagamento. Deve ser um destes: \["Active", "Needs\_Connecting", "Needs\_Testing"\].

`provider_mid`

string

**Opcional.**

Número de Identificação do Comerciante (MID) do Gateway de Pagamento.

`provider_name`

string

**Opcional.**

Nome do gateway de pagamento. Deve ser um destes: \[“razorpay”, “payu”, “zaakpay”\].

`merchant_vpa`

string

**Opcional.**

Nome de usuário da UPI do comerciante.

`created_timestamp`

número inteiro

**Opcional.**

O horário em que a configuração de pagamento foi criada.

`updated_timestamp`

número inteiro

**Opcional.**

O horário da última atualização da configuração de pagamento.

## Criar uma configuração de pagamento

Crie uma configuração de pagamento.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configuration
```

### Exemplo de solicitação

#### Configuração do tipo de gateway de pagamento

```
curl -X  POST \'https://graph.facebook.com/v15.0/102290129340398/payment_configuration' \-H 'Authorization: Bearer EAAJB...' \-H 'Content-Type: application/json' \-d '{       "configuration_name": "test-payment-configuration",       "purpose_code": "00",       "merchant_category_code": "0000",       "provider_name": "razorpay",       "redirect_url": "https://test-redirect-url.com"    }'
```

#### Configuração do tipo de VPA da UPI

```
curl -X  POST \'https://graph.facebook.com/v15.0/102290129340398/payment_configuration' \-H 'Authorization: Bearer EAAJB...' \-H 'Content-Type: application/json' \-d '{       "configuration_name": "test-payment-configuration",       "purpose_code": "00",       "merchant_category_code": "0000",       "provider_name": "upi_vpa",       "merchant_vpa": "test-upi-merchant-vpa@test"    }'
```

Campo

Descrição

`configuration_name`

string

**Obrigatório.**

O nome da configuração de pagamento que será usada na mensagem de detalhes do pedido.

`merchant_category_code`

string

**Opcional.**

Código de Categoria do Comerciante.

`purpose_code`

objeto

**Opcional.**

Código de finalidade.

`provider_name`

string

**Obrigatório.**

Nome do fornecedor da configuração de pagamento. Deve ser um destes: \[“upi\_vpa”, “razorpay”, “payu”, “zaakpay”\].

`merchant_vpa`

string

**Opcional.**

Nome de usuário da UPI do comerciante.

`redirect_url`

URI

**Opcional.**

O URL para o qual o comerciante será redirecionado depois de vincular uma configuração de pagamento com sucesso.

### Exemplo de resposta

#### Configuração do tipo de gateway de pagamento

```
{  "oauth_url": "https://www.facebook.com/payment/onboarding/init/",  "expiration": 1721687287,  "success": true}
```

#### Configuração do tipo de VPA da UPI

```
{  "success": true}
```

Campo

Descrição

`oauth_url`

string

**Opcional.**

URL de OAuth a ser usada para vincular a configuração de pagamento ao gateway de pagamento.

`expiration`

número inteiro

**Opcional.**

Tempo de validade da URL do OAuth.

`success`

booliano

**Obrigatório.**

Sinalizador booliano que indica se a criação da configuração de pagamento foi bem-sucedida.

## Associar ou atualizar um ponto de extremidade de dados

A seção a seguir explica como vincular, atualizar e excluir um ponto de extremidade de dados para habilitar cupons, endereços de entrega e inventário em tempo real oferecidos por [Modelos com botão de finalização da compra](/documentation/business-messaging/whatsapp/payments/payments-in/checkout-button-templates#enabling_coupons_inventory).

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configuration/<CONFIGURATION_NAME>
```

### Exemplo de solicitação

#### Configuração do tipo de gateway de pagamento

```
curl -X  POST \'https://graph.facebook.com/v15.0/102290129340398/payment_configuration/test-payment-configuration' \-H 'Authorization: Bearer EAAJB...' \-H 'Content-Type: application/json' \-d '{       "data_endpoint_url": "https://test-data-endpoint-url.com"    }'
```

Campo

Descrição

`data-endpoint-url`

URI

**Opcional.**

O ponto de extremidade de URL para o qual o cliente do WhatsApp envia uma solicitação HTTPS segura para fins de troca de dados na oferta de [Modelos com botão de finalização da compra](/documentation/business-messaging/whatsapp/payments/payments-in/checkout-button-templates#enabling_coupons_inventory).

## Regenerar o link do OAuth para configuração de pagamento

Regenere o link do OAuth para configuração de pagamento do tipo gateway de pagamento.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/generate_payment_configuration_oauth_link
```

### Exemplo de solicitação

```
curl -X  POST \'https://graph.facebook.com/v15.0/102290129340398/generate_payment_configuration_oauth_link' \-H 'Authorization: Bearer EAAJB...' \-H 'Content-Type: application/json' \-d '{       "configuration_name": "test-payment-configuration",       "redirect_url": "https://test-redirect-url.com"    }'
```

Campo

Descrição

`configuration_name`

string

**Obrigatório.**

O nome da configuração de pagamento que será usada na mensagem de detalhes do pedido.

`redirect_url`

URI

**Opcional.**

O URL para o qual o comerciante será redirecionado depois de vincular uma configuração de pagamento com sucesso.

### Exemplo de resposta

```
{  "oauth_url": "https://www.facebook.com/payment/onboarding/init/",  "expiration": 1721687287}
```

Campo

Descrição

`oauth_url`

string

**Opcional.**

URL de OAuth a ser usada para vincular a configuração de pagamento ao gateway de pagamento.

`expiration`

número inteiro

**Opcional.**

Tempo de validade da URL do OAuth.

## Remover uma Configuração de Pagamento

Remova uma configuração de pagamento.

### Sintaxe da solicitação

```
DELETE /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configuration
```

Campo

Descrição

`configuration_name`

string

**Obrigatório.**

O nome da configuração de pagamento que será usada na mensagem de detalhes do pedido.

### Exemplo de solicitação

```
curl -X  DELETE \'https://graph.facebook.com/v15.0/102290129340398/payment_configuration' \-H 'Authorization: Bearer EAAJB...' \-H 'Content-Type: application/json' \-d '{       "configuration_name": "test-payment-configuration"    }'
```

### Exemplo de resposta

```
{  "success": true}
```

Campo

Descrição

`success`

booliano

**Obrigatório.**

Sinalizador booliano que indica se a remoção da configuração de pagamento foi bem-sucedida.

## Webhook de configuração de pagamento

As empresas recebem atualizações por meio de webhooks do WhatsApp quando o status da configuração de pagamento é alterado.

Para receber webhooks, as empresas precisam assinar o evento "payment\_configuration\_update" do respectivo app.

O webhook contém os seguintes campos:

Campo

Descrição

`configuration_name`

string

**Obrigatório.**

O nome da configuração de pagamento que será usada na mensagem de detalhes do pedido.

`provider_name`

string

**Obrigatório.**

Nome do fornecedor da configuração de pagamento. Deve ser um destes \[“razorpay”, “payu”, “zaakpay”\].

`provider_mid`

string

**Obrigatório.**

Identificação da conta do comerciante do gateway de pagamento.

`status`

string

**Obrigatório.**

O status da configuração de pagamento. Deve ser um destes: \["Active", "Needs\_Connecting", "Needs\_Testing"\].

`created_timestamp`

número inteiro

**Obrigatório.**

O horário em que a configuração de pagamento foi criada.

`updated_timestamp`

número inteiro

**Obrigatório.**

O horário da última atualização da configuração de pagamento.

### Exemplo de webhook de configuração de pagamento

```
{  "entry": [    {      "id": "0",      "time": 1725499886,      "changes": [        {          "field": "payment_configuration_update",          "value": {            "configuration_name": "test-payment-configuration",            "provider_name": "razorpay",            "provider_mid": "test-provider-mid",            "status": "Needs Testing",            "created_timestamp": 123457678,            "updated_timestamp": 123457678          }        }      ]    }  ],  "object": "whatsapp_business_account"}
```

### Erros

##### Aceitação dos Termos de Serviço do Pagamentos no WhatsApp pendente

Caso veja o erro a seguir, aceite os Termos de Serviço do Pagamentos no WhatsApp usando o link fornecido na mensagem de erro antes de tentar novamente.

```
{  "error": {    "message": "(#131005) Access denied",    "type": "OAuthException",    "code": 131005,    "error_data": {      "messaging_product": "whatsapp",      "details": "WhatsApp Payments Terms of Service acceptance pending for this WhatsApp Business Account.Please use the following link to accept terms of service before using Business APIs: https://fb.me/12345"    }  }}
```

Para ver todos os outros erros que podem ser retornados e as orientações sobre como tratá-los, consulte [API de Nuvem do WhatsApp, Códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)