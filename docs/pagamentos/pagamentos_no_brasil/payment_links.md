<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/payment-links -->
<!-- Scraped: 2025-12-20T17:46:45.114Z -->

# Links de pagamento

Updated: 14 de nov de 2025

A API de Pagamentos também permite que as empresas recebam pagamentos dos clientes pelo WhatsApp usando links de pagamento.

Ao usar essa integração, o WhatsApp apenas facilita a comunicação entre comerciantes e compradores. Os comerciantes são responsáveis por fazer a integração com um provedor de serviços de pagamento (PSP), por meio do qual podem gerar links de pagamento e confirmar o pagamento.

## Antes de começar

-   Familiarize-se com a [API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders). Os pedidos são o ponto de entrada para a coleta de pagamentos no WhatsApp.-   Você precisará de uma integração existente com um PSP para gerar links de pagamento e fazer a reconciliação automática quando o pagamento for efetuado.-   É preciso atualizar o status do pedido assim que o pagamento for feito.

## Etapas de integração

O diagrama de sequência a seguir mostra a integração típica com os links de pagamento.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560047558_1339318174593500_8182680878959019679_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=hZciSfj034UQ7kNvwEeCuYK&_nc_oc=Adk7dZ8PUDipcc9HN-OUv_Bh0jn3HKfjaACOdAJxp1shbuyZc5zF16IDuhqzyNxBbgE&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=BtkfuN5b0-vfzaN4oQIdkA&oh=00_AflMmWnxOwxJ2Lvs0m9PrENhhbYlsybIju3HUnYdJxnztw&oe=69613532)

### 1\. Enviar uma mensagem com detalhes do pedido

Para saber mais, consulte a página da [API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders).

Caso o pagamento por link esteja disponível para o pedido, será necessário fornecer um `payment_link` para o atributo `payment_settings`.

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

Precisa ser `payment_link`.

`payment_link`

Obrigatório

[Objeto de link de pagamento](#paymentlinkobject)

Objeto de link de pagamento que será usado para renderizar a opção aos compradores durante o fluxo de finalização da compra.

#### Objeto de link de pagamento

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

`uri`

Obrigatório

String

URI do link de pagamento que será aberta no navegador da web quando o usuário tocar no botão de CTA desse link.

#### Exemplo de carga

```
POST: /v1/messages{ "recipient_type": "individual", "to": "[recipient-wa-id]", "type": "interactive", "interactive": {   "type": "order_details",   "body": {     "text": "Your message content"   },   "action": {     "name": "review_and_pay",     "parameters": {       "reference_id": "unique-reference-id",       "type": "digital-goods",       "payment_type": "br",       "payment_settings": [         {           "type": "payment_link",           "payment_link": {             "uri": "https://my-payment-link-url",           }         }       ],       "currency": "BRL",       "total_amount": {         "value": 50000,         "offset": 100       },       "order": {         "status": "pending",         "tax": {           "value": 0,           "offset": 100,           "description": "optional text"           },         "items": [           {             "retailer_id": "1234567",             "name": "Cake",             "amount": {               "value": 50000,               "offset": 100             },             "quantity": 1           }         ],         "subtotal": {           "value": 50000,           "offset": 100         }       }     }   } }}
```

### 2\. Enviar uma atualização de status do pedido

Após a confirmação do pagamento, você deve enviar uma atualização de status do pedido. Siga o guia de integração na [página da API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)