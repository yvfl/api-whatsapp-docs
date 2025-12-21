<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix -->
<!-- Scraped: 2025-12-20T17:46:36.090Z -->

# Pagamentos com Pix fora do site

Updated: 14 de nov de 2025

A API de Pagamentos também permite que as empresas recebam pagamentos dos clientes pelo WhatsApp usando códigos de Pix dinâmicos.

Ao usar essa integração, o WhatsApp apenas facilita a comunicação entre comerciantes e compradores. Os comerciantes são responsáveis por fazer a integração com um banco ou um provedor de serviços de pagamento (PSP) para gerar códigos Pix dinâmicos e confirmar o pagamento.

## Antes de começar

-   Familiarize-se com a [API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders). Os pedidos são o ponto de entrada para a coleta de pagamentos no WhatsApp.-   Você precisará de uma integração existente com um banco ou PSP para gerar códigos de Pix dinâmicos e fazer a reconciliação automática quando o pagamento for efetuado. É preciso atualizar o status do pedido assim que o pagamento for feito.

## Etapas de integração

O diagrama de sequência a seguir mostra a integração típica com o Pix.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/559928787_1339318127926838_2798974158408097525_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=mVnXNLaZjf4Q7kNvwFpuMc3&_nc_oc=AdkraLHPG0L-wad_njnzYQdsnU50MbqR2cB9vI6umzUEEdj7-TZXg_xgKsneOIEnCm4&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=fBCKmvTFlo7HeFT5qQxzPQ&oh=00_AfmnEgvocmRfLfZQG7k60fiRAc3iTrjTAdA_csYSYIbV2Q&oe=69610B2D)

### 1\. Enviar uma mensagem com detalhes do pedido

Para saber mais, consulte a página da [API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders).

Caso o Pix esteja disponível para o pedido, será necessário fornecer um `pix_dynamic_code` para o atributo `payment_settings`.

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

Deve ser `pix_dynamic_code`.

`pix_dynamic_code`

Obrigatório

[Objeto dinâmico do Pix](#dynamicpixobject)

Objeto de código Pix dinâmico que será usado para renderizar a opção aos compradores durante o fluxo de finalização da compra.

#### Objeto do código Pix dinâmico

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

`code`

Obrigatório

String

O código Pix dinâmico que será copiado pelo comprador.

`merchant_name`

Obrigatório

String

Nome do titular da conta. Exibido no app para o comprador para fins informativos.

`key`

Obrigatório

String

Chave Pix. Exibido no app para o comprador para fins informativos.

`key_type`

Obrigatório

String

Tipo de chave Pix. Uma das opções: `CPF`, `CNPJ`, `EMAIL`, `PHONE` ou `EVP`.

#### Exemplo de carga

```
POST: /v1/messages{ "recipient_type": "individual", "to": "[recipient-wa-id]", "type": "interactive", "interactive": {   "type": "order_details",   "body": {     "text": "Your message content"   },   "action": {     "name": "review_and_pay",     "parameters": {       "reference_id": "unique-reference-id",       "type": "digital-goods",       "payment_type": "br",       "payment_settings": [         {           "type": "pix_dynamic_code",           "pix_dynamic_code": {             "code": "00020101021226700014br.gov.bcb.pix2548pix.example.com...",             "merchant_name": "Account holder name",             "key": "39580525000189",             "key_type": "CNPJ"           }         }       ],       "currency": "BRL",       "total_amount": {         "value": 50000,         "offset": 100       },       "order": {         "status": "pending",         "tax": {           "value": 0,           "offset": 100,           "description": "optional text"           },         "items": [           {             "retailer_id": "1234567",             "name": "Cake",             "amount": {               "value": 50000,               "offset": 100             },             "quantity": 1           }         ],         "subtotal": {           "value": 50000,           "offset": 100         }       }     }   } }}
```

### 2\. Enviar uma atualização de status do pedido

Após a confirmação do pagamento, você deve enviar uma atualização de status do pedido. Siga o guia de integração na [página da API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)