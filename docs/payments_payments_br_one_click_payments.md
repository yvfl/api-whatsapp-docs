<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/one-click-payments -->
<!-- Scraped: 2025-12-20T17:47:02.236Z -->

# Pagamentos com um clique

Updated: 14 de nov de 2025

Esse recurso ainda não está disponível para o público em geral e só pode ser usado por empresas com sede no Brasil e seus clientes brasileiros. Para habilitar os pagamentos para sua empresa, entre em contato com seu parceiro de soluções.

A API de Pagamentos também permite que as empresas recebam pagamentos de clientes pelo WhatsApp usando os pagamentos com um clique.

Ao usar essa integração, o WhatsApp facilita a comunicação entre comerciantes e compradores. Os comerciantes são responsáveis por armazenar as credenciais de pagamento e integrar um provedor de serviços de pagamento (PSP) para enviar essas credenciais, concluir e confirmar os pagamentos.

## Antes de começar

-   Familiarize-se com a [API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders). Os pedidos são o ponto de entrada para a coleta de pagamentos no WhatsApp.-   Você precisará de uma integração existente com um PSP e deverá fazer a reconciliação automática quando o pagamento for efetuado.-   É preciso atualizar o status do pedido assim que o pagamento for feito.

## Etapas de integração

O diagrama de sequência a seguir mostra a integração típica com os pagamentos com um clique.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/560189002_1339318344593483_6488145365318201089_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=WhyYWHnb7ukQ7kNvwETfm8x&_nc_oc=AdkRb2ddT2pg3HTwsP58Zd3l4gAqm8GYL3owKuMF4pX3AvJGpjuXyuoNW_-zQloBAk0&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=HEB4GkdP4JJqeuSKIAJNkg&oh=00_AfmfCCpPL0QDlpOpA6rw2wHsXwl-aQbx3U-ogBGU0Rzl6g&oe=69613DE8)

### 1\. Enviar uma mensagem com detalhes do pedido

Para saber mais, consulte a página da [API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders).

Caso o recurso de pagamentos com um clique esteja disponível para o pedido, será necessário fornecer um objeto `offsite_card_pay` no atributo `payment_settings`.

#### Objeto de parâmetros

Nome do campo

Opcional?

Tipo

Descrição

`payment_settings`

Opcional

[Objeto de configurações de pagamento](#paymentsettingsobject)

Lista de objetos de configuração relacionados a pagamentos.

#### Configurações de pagamento

Nome do campo

Opcional?

Tipo

Descrição

`type`

Obrigatório

String

Deve ser `offsite_card_pay`.

`offsite_card_pay`

Obrigatório

[Objeto de pagamento com cartão fora do site](#offsitecardpayobject)

Objeto de pagamento com cartão fora do site que será usado para renderizar a opção aos compradores durante o fluxo de finalização da compra.

#### Objeto de pagamento com cartão fora do site

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

`last_four_digits`

Obrigatório

String

Os quatro últimos dígitos do cartão, que serão exibidos ao usuário para confirmação antes que ele aceite o pagamento (ao tocar no botão de CTA "Enviar pagamento").

`credential_id`

Obrigatório

String

A identificação da credencial associada ao cartão. Depois que o usuário tocar no botão de CTA "Enviar pagamento", o comerciante receberá um webhook da Meta notificando a confirmação do usuário. A carga do webhook terá o credential\_id, que será usado pelo comerciante para determinar o cartão ou a credencial para pagamentos.

#### Exemplo de carga de detalhes do pedido

```
POST: /v1/messages
{
 "recipient_type": "individual",
 "to": "<RECIPIENT_WHATSAPP_ID>",
 "type": "interactive",
 "interactive": {
   "type": "order_details",
   "body": {
     "text": "Your message content"
   },
   "action": {
     "name": "review_and_pay",
     "parameters": {
       "reference_id": "<UNIQUE_REFERENCE_ID>",
       "type": "digital-goods",
       "payment_type": "br",
       "payment_settings": [
         {
           "type": "offsite_card_pay",
           "offsite_card_pay": {
             "last_four_digits": "5235",
             "credential_id": "1234567"
           }
         }
       ],
       "currency": "BRL",
       "total_amount": {
         "value": 50000,
         "offset": 100
       },
       "order": {
         "status": "pending",
         "tax": {
           "value": 0,
           "offset": 100,
           "description": "optional text"
           },
         "items": [
           {
             "retailer_id": "1234567",
             "name": "Cake",
             "amount": {
               "value": 50000,
               "offset": 100
             },
             "quantity": 1
           }
         ],
         "subtotal": {
           "value": 50000,
           "offset": 100
         }
       }
     }
   }
 }
}
```

### 2\. Receber a notificação de webhook

Esse webhook confirma a intenção do comprador de efetuar um pagamento e inclui o ID da credencial a ser usada.

#### Exemplo de carga de notificação de webhook

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "[<WHATSAPP_BUSINESS_ACCOUNT_ID>]",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "[<BUSINESS_DISPLAY_PHONE_NUMBER>]",
              "phone_number_id": "[<BUSINESS_PHONE_NUMBER_ID>]"
            },
            "contacts": [
              {
                "profile": {
                  "name": "[<WHATSAPP_USER_NAME>]"
                },
                "wa_id": "[<WHATSAPP_USER_ID>]"
              }
            ],
            "messages": [
              {
                "from": "[<WHATSAPP_USER_PHONE_NUMBER>]",
                "id": "[<WHATSAPP_MESSAGE_ID>]",
                "timestamp": "[<WEBHOOK_SENT_TIMESTAMP>]",
                "from_logical_id": "64244926160970",
                "type": "interactive",
                "interactive": {
                  "type": "payment_method",
                  "payment_method": {
                    "payment_method": "offsite_card_pay",
                    "payment_timestamp": 1726170122,
                    "reference_id": "pix_test_webhook",
                    "last_four_digits": "5235",
                    "credential_id": "1234567"
                  }
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

### 3\. Enviar uma atualização de status do pedido

Após a confirmação do pagamento, você deve enviar uma atualização de status do pedido. Siga o guia de integração na [página da API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)