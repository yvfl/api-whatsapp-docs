<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/payment_configuration_update -->
<!-- Scraped: 2025-12-20T17:39:12.588Z -->

# Referência do webhook payment\_configuration\_update

Updated: 28 de jun de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **payment\_configuration\_update** da conta do WhatsApp Business.

O webhook de **payment\_configuration\_update** notifica você sobre alterações nas configurações de pagamento da [API de Pagamentos Índia](/documentation/business-messaging/whatsapp/payments/payments-in/overview) e [da API de Pagamentos Brasil](/documentation/business-messaging/whatsapp/payments/payments-br/overview).

## Gatilhos

-   A configuração de pagamento associada a uma conta do WhatsApp Business foi conectada a uma conta do gateway de pagamento.-   A configuração de pagamento associada a uma conta do WhatsApp Business foi desconectada de uma conta do gateway de pagamento.-   A configuração de pagamento associada à conta do WhatsApp Business está ativa.

## Sintaxe

```
{
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "changes": [
        {
          "field": "payment_configuration_update",
          "value": {
            "configuration_name": "<PAYMENT_CONFIGURATION_NAME>",
            "provider_name": "PAYMENT_GATEWAY_PROVIDER_NAME",
            "provider_mid": "<PAYMENT_GATEWAY_MERCHANT_ACCOUNT_ID>",
            "status": "<PAYMENT_CONFIGURATION_STATUS>",
            "created_timestamp": <PAYMENT_CONFIGURATION_CREATION_TIMESTAMP>,
            "updated_timestamp": <PAYMENT_CONFIGURATION_UPDATE_TIMESTAMP>
          }
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

## Parâmetros

Espaço reservado

Descrição

Exemplo de valor

`<PAYMENT_CONFIGURATION_CREATION_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando a configuração de pagamento foi criada.

`1748827100`

`<PAYMENT_CONFIGURATION_NAME>`

_String_

O nome da configuração de pagamento que será usado nas mensagens de detalhes do pedido.

`razorpay-prod`

`<PAYMENT_CONFIGURATION_STATUS>`

_String_

O status da configuração de pagamento.

Os valores podem ser os seguintes:

`Active` – Indica que a configuração de pagamento foi testada no Gerenciador do WhatsApp e pode ser usada com a API de Pagamentos.

`Needs Connecting` – Indica que a configuração de pagamento foi desconectada do gateway de pagamento e precisa ser conectada novamente.

`Needs Testing` – Indica que a configuração de pagamento foi conectada ao gateway de pagamento, mas ainda precisa ser testada no Gerenciador do WhatsApp.

`Needs Connecting`

`<PAYMENT_CONFIGURATION_UPDATE_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando a configuração de pagamento foi atualizada.

`1749320300`

`<PAYMENT_GATEWAY_MERCHANT_ACCOUNT_ID>`

_String_

Identificação da conta do comerciante do gateway de pagamento.

`acc_GP4lfNA0iIMn5B`

`<PAYMENT_GATEWAY_PROVIDER_NAME>`

_String_

O nome do provedor do gateway de pagamento associado à configuração de pagamento. Os valores podem ser os seguintes:

-   `billdesk`-   `payu`-   `razorpay`-   `zaakpay`

`razorpay`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

## Exemplo de carga

```
{  "entry": [    {      "id": "102290129340398",      "time": 1739321024,      "changes": [        {          "field": "payment_configuration_update",          "value": {            "configuration_name": "razorpay-prod",            "provider_name": "razorpay",            "provider_mid": "acc_GP4lfNA0iIMn5B",            "status": "Needs Testing",            "created_timestamp": 1748827100,            "updated_timestamp": 1749320300          }        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)