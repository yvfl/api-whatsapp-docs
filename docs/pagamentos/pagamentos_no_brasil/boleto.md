<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/boleto -->
<!-- Scraped: 2025-12-20T17:46:53.510Z -->

# Boleto

Updated: 14 de nov de 2025

A API de Pagamentos também permite que as empresas recebam pagamentos dos clientes pelo WhatsApp usando boleto.

Ao usar essa integração, o WhatsApp apenas facilita a comunicação entre comerciantes e compradores. Os comerciantes são responsáveis por fazer a integração com um provedor de serviços de pagamento (PSP), por meio do qual podem gerar códigos de boleto e confirmar o pagamento.

## Antes de começar

-   Familiarize-se com a [API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders). Os pedidos são o ponto de entrada para a coleta de pagamentos no WhatsApp.-   Você precisará de uma integração existente com um PSP para gerar códigos de boleto e fazer a reconciliação automática quando o pagamento for efetuado.-   É preciso atualizar o status do pedido assim que o pagamento for feito.

## Etapas de integração

O diagrama de sequência a seguir mostra a integração típica com o Boleto.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561622607_1339318274593490_8768265383653853535_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=SnB66c6-s0AQ7kNvwFohHwL&_nc_oc=AdlQ4zTSReclsvsPbd-51iMVeTohz-ElcrAOEG_KBmoNk2eKiC0VHSkvo2RlmiLQHbI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=f8WK7bpjbUnrd_wPF7SkVg&oh=00_AfnyhIzNhwpPgcdU6ZIEkTgy52JSaHnOvgqWG-VMBBVHTQ&oe=69611B05)

### 1\. Enviar uma mensagem com detalhes do pedido

Para saber mais, consulte a página da [API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders).

Caso o pagamento com boleto esteja disponível para o pedido, será preciso fornecer um objeto `boleto` no atributo `payment_settings`.

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

Precisa ser `boleto`.

`boleto`

Obrigatório

[Objeto de boleto](#boletoobject)

Objeto de boleto que será usado para renderizar a opção aos compradores durante o fluxo de finalização da compra.

#### Objeto de boleto

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

`digitable_line`

Obrigatório

String

O código/linha do boleto digital que será copiado para a área de transferência quando o usuário tocar no botão de CTA do boleto.

#### Exemplo de carga

```
POST: /v1/messages{ "recipient_type": "individual", "to": "[recipient-wa-id]", "type": "interactive", "interactive": {   "type": "order_details",   "body": {     "text": "Your message content"   },   "action": {     "name": "review_and_pay",     "parameters": {       "reference_id": "unique-reference-id",       "type": "digital-goods",       "payment_type": "br",       "payment_settings": [         {           "type": "boleto",           "boleto": {             "digitable_line": "03399026944140000002628346101018898510000008848",           }         }       ],       "currency": "BRL",       "total_amount": {         "value": 50000,         "offset": 100       },       "order": {         "status": "pending",         "tax": {           "value": 0,           "offset": 100,           "description": "optional text"           },         "items": [           {             "retailer_id": "1234567",             "name": "Cake",             "amount": {               "value": 50000,               "offset": 100             },             "quantity": 1           }         ],         "subtotal": {           "value": 50000,           "offset": 100         }       }     }   } }}
```

### 2\. Enviar uma atualização de status do pedido

Após a confirmação do pagamento, você deve enviar uma atualização de status do pedido. Siga o guia de integração na [página da API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)