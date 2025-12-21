<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders -->
<!-- Scraped: 2025-12-20T17:46:27.398Z -->

# Pedidos

Updated: 14 de nov de 2025

A API de Pagamentos apresenta dois novos tipos de [mensagens interativas](/documentation/business-messaging/whatsapp/messages/send-messages#interactive-messages): `order_details` e `order_status`. Elas são o ponto de entrada para coletar pagamentos no WhatsApp.

-   As mensagens de `order_details` são enviadas para criar um pedido no app do WhatsApp do comprador. Elas incluem uma lista dos itens que estão sendo comprados, as taxas cobradas e as configurações usadas para a coleta do pagamento. As configurações de pagamento variam conforme o tipo de integração ([Pix](/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix), [links de pagamento](/documentation/business-messaging/whatsapp/payments/payments-br/payment-links), [Boleto](/documentation/business-messaging/whatsapp/payments/payments-br/boleto)).-   As mensagens de `order_status` são enviadas quando a empresa atualiza o status do pedido com base na notificação de alteração do status de pagamento do WhatsApp ou em processos internos.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/565718019_1339318281260156_7557207642198018127_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=3bNgKUyQ0NcQ7kNvwFmocLj&_nc_oc=AdkYAoB9nGFp-tAZbEBy0FElmn9ZdjiH-bRPDvq-Bzgz0qXH33nxrs26erI85R-K6QM&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=B3M0bL5VzIj3Cri6G57J1A&oh=00_Afn6cLPKUtJraiDSY-_aqce7kOmTqPjFH8pn-c8Y1eKuQg&oe=69611CB5)

O status inicial dos pedidos é `pending`. Quando o comerciante tiver concluído totalmente o pedido e o comprador não esperar mais atualizações, o status deve ser marcado como `completed`.

## Enviar mensagens de pedidos

Ambos os tipos de mensagem contêm os mesmos quatro componentes principais de uma mensagem interativa: _cabeçalho_, _corpo_, _rodapé_ e _ação_. Os parâmetros no componente _action_ vão variar conforme o tipo de mensagem.

Depois que o objeto da mensagem interativa estiver pronto, faça uma chamada POST para o [ponto de extremidade de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#messages). Lembre-se de definir o tipo como `interactive`.

### Exemplo de detalhes do pedido

```
{ "recipient_type": "individual", "to": "[recipient-wa-id]", "type": "interactive", "interactive": {   "type": "order_details",   "body": {     "text": "Your message content"   },   "action": {     "name": "review_and_pay",     "parameters": {       "reference_id": "unique-reference-id",       "type": "digital-goods",       "payment_type": "br",       "payment_settings": [         {           "type": "payment_link",           "payment_link": {             "uri": "https://my-payment-link-url"           }         }       ],       "currency": "BRL",       "total_amount": {         "value": 50000,         "offset": 100       },       "order": {         "status": "pending",         "tax": {           "value": 0,           "offset": 100,           "description": "optional text"           },         "items": [           {             "retailer_id": "1234567",             "name": "Cake",             "amount": {               "value": 50000,               "offset": 100             },             "quantity": 1           }         ],         "subtotal": {           "value": 50000,           "offset": 100         }       }     }   } }}
```

### Exemplo de status do pedido

```
{  "recipient_type": "individual",  "to": "whatsapp-id",  "type": "interactive",  "interactive": {    "type": "order_status",    "body": {      "text": "your-mandatory-text-body-content"    },    "footer": {      "text": "your-optional-text-footer-content"    },    "action": {      "name": "review_order",      "parameters": {        "reference_id": "unique-reference-id",        "order": {          "status": "processing"        }        "payment": {          "status": "captured",          "timestamp": 1722445231        }      }    }  }}
```

### Resposta à mensagem

Seja qual for o tipo, se a mensagem for enviada com sucesso, você receberá a seguinte resposta:

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "[PHONE_NUMBER_ID]",      "wa_id": "[PHONE-NUMBER_ID]"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA"    }  ]}
```

Para ver todos os outros erros que podem ser retornados e as orientações sobre como tratá-los, consulte [Códigos de erro da API de Nuvem](/documentation/business-messaging/whatsapp/support/error-codes).

## Referência completa da API

### Detalhes do pedido

Para enviar uma mensagem "order\_details", as empresas precisam criar um objeto interativo "order\_details" com estes componentes:

#### Objeto interactive

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

type

Obrigatório

String

Deve ser `order_details`.

header

Opcional

Objeto

Imagem em miniatura para mensagens com detalhes do pedido. Contém os seguintes campos:

-   `type`: deve ser `image`.-   `image`: consulte [Objeto de imagem](#imageobject).

Na ausência do cabeçalho, a API encontrará o primeiro produto com uma imagem e usará essa opção como a imagem de miniatura.

body

Obrigatório

Objeto

Um objeto com o corpo da mensagem. Contém o seguinte campo:

-   string `text`: o conteúdo da mensagem. Há compatibilidade com emojis e Markdown. O tamanho máximo é de 1.024 caracteres.

footer

Opcional

Objeto

Um objeto com o rodapé da mensagem. Contém o seguinte campo:

-   string `text`: **obrigatório** se o rodapé estiver presente. O conteúdo do rodapé. É compatível com emojis, Markdown e links. O tamanho máximo é de 60 caracteres.

action

Obrigatório

Objeto de ação

Consulte [Objeto de ação](#actionobject) abaixo.

#### Objeto de imagem

Nome do campo

Opcional?

Tipo

Descrição

link

Obrigatório

String

URL da imagem.

provider

Opcional

String

Nome do provedor da URL.

#### Objeto de ação

Nome do campo

Opcional?

Tipo

Descrição

name

Obrigatório

String

Deve ser `review_and_pay`.

parameters

Obrigatório

Objeto de parâmetros

Consulte [Objeto de parâmetros](#paramsobject).

#### Objeto de parâmetros

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

reference\_id

Obrigatório

String

Identificador único do pedido ou da fatura fornecido pela empresa. Essa string não pode estar vazia e só pode conter letras, números, sublinhados, traços ou pontos, além de não ultrapassar 60 caracteres.

O reference\_id deve ser único para cada mensagem de order\_details da mesma empresa. Se o parceiro quiser enviar várias mensagens de order\_details para o mesmo pedido, fatura ou item semelhante, recomendamos incluir um número de sequência no reference\_id para garantir a exclusividade desse campo.

type

Obrigatório

String

Deve ser `digital-goods` ou `physical-goods`.

payment\_type

Obrigatório

String

Deve ser `br`.

payment\_settings

Opcional

[Objeto de configurações de pagamento](#paymentsettingsobject)

Lista de objetos de configuração relacionados a pagamentos.

currency

Obrigatório

String

Código de moeda ISO 4217 do pedido. Deve ser `BRL` (real brasileiro).

total\_amount

Obrigatório

Objeto de valor

Consulte [Objeto de valor](#amountobject).

`total_amount.value` deve ser igual a `order.subtotal.value` + `order.tax.value` + `order.shipping.value` - `order.discount.value`

order

Obrigatório

Objeto de pedido

Consulte [Objeto de pedido](#orderobject).

#### Configurações de pagamento

Nome do campo

Opcional?

Tipo

Descrição

`type`

Obrigatório

String

Uma das opções: `pix_dynamic_code`, `payment_link`, `boleto`.

Um dos objetos a seguir: `pix_dynamic_code`, `payment_link`, `boleto`.

Obrigatório

Objeto

As instruções de pagamento exibidas aos compradores durante o processo de finalização da compra.

#### Objeto de pedido

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

status

Obrigatório

String

O status do pedido. O único valor aceito é `pending`.

catalog\_id

Opcional

String

O identificador único do catálogo do Facebook usado pela empresa.

expiration

Opcional

Objeto de expiração

Validade do pedido. A CTA de pagamento será desabilitada após o prazo expirar para o usuário. Consulte [Objeto de expiração](#expirationobject).

items

Obrigatório

Lista de objetos de item

A lista deve ter pelo menos um item. Consulte [Objeto de item](#itemobject).

subtotal

Obrigatório

Objeto de valor

Consulte [Objeto de valor](#amountobject).

O valor **deve ser igual** à soma de (`item.amount.value` ou `item.sale_amount.value`) \* `item.quantity`.

Os seguintes campos fazem parte do objeto `subtotal`:

string `offset`

-   **Obrigatório.** Deve ser `100` para `BRL`.

string `value`

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, S$12,34 tem o valor 1234.

tax

Obrigatório

Objeto de valor com descrição

As informações fiscais do pedido. Mesmo que o objeto seja obrigatório, o valor pode ser zero. Quando o valor usado é zero, a linha de imposto não será exibida ao cliente. Consulte [Objeto de valor com descrição](#amountdescriptionobject).

shipping

Opcional

Objeto de valor com descrição

Consulte [Objeto de valor](#amountdescriptionobject).

discount

Opcional

Objeto de desconto

O desconto do pedido. Consulte [Objeto de desconto](#discountobject).

#### Objeto de expiração

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

timestamp

Obrigatório

String

Horário UTC em segundos. O limite mínimo é de 300 segundos.

description

Obrigatório

String

Explicação em texto sobre quando o pedido expirará. O limite máximo é de 120 caracteres.

#### Objeto item

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

retailer\_id

Obrigatório

String

A ID de conteúdo de um item do pedido do seu catálogo.

name

Obrigatório

String

O nome do item que será exibido ao usuário. Não pode ter mais de 60 caracteres.

amount

Obrigatório

Objeto de valor

O preço por item. Consulte [Objeto de valor](#amountobject).

quantity

Obrigatório

Número inteiro

O número de itens no pedido.

sale\_amount

Opcional

Objeto de valor

O preço com desconto de cada item. Esse valor deve ser menor que o original. Se for incluído, esse campo será usado para calcular o valor subtotal. Consulte [Objeto de valor](#amountobject).

#### Objeto de desconto

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

value

Obrigatório

Número inteiro

Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, R$ 12,34 tem o valor 1234.

offset

Obrigatório

Número inteiro

Deve ser `100` para `BRL`.

description

Opcional

String

O limite máximo é de 60 caracteres.

discount\_program\_name

Opcional

String

Texto usado para definir pedidos com incentivos. Se o pedido incluir incentivos, o comerciante precisará definir essa informação. O limite máximo é de 60 caracteres.

#### Objeto de valor

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

value

Obrigatório

Número inteiro

Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, R$ 12,34 tem o valor 1234.

offset

Obrigatório

Número inteiro

Deve ser `100` para `BRL`.

#### Objeto amount (com descrição)

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

value

Obrigatório

Número inteiro

Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, R$ 12,34 tem o valor 1234.

offset

Obrigatório

Número inteiro

Deve ser `100` para `BRL`.

description

Opcional

String

O limite máximo é de 60 caracteres.

### Status do pedido

Para enviar uma mensagem "order\_status", as empresas precisam criar um objeto interativo "order\_details" com estes componentes:

#### Objeto interactive

**Nome do campo**

**Opcional?**

**Tipo**

**Descrição**

type

Obrigatório

String

Deve ser `order_details`.

header

Opcional

Objeto

Objeto opcional para o cabeçalho da mensagem.

body

Obrigatório

Objeto

Um objeto com o corpo da mensagem. Contém o seguinte campo:

-   string `text`: o conteúdo da mensagem. Há compatibilidade com emojis e Markdown. O tamanho máximo é de 1.024 caracteres.

footer

Opcional

Objeto

Um objeto com o rodapé da mensagem. Contém o seguinte campo:

-   string `text`: **obrigatório** se o rodapé estiver presente. O conteúdo do rodapé. É compatível com emojis, Markdown e links. O tamanho máximo é de 60 caracteres.

action

Obrigatório

Objeto de ação

Consulte [Objeto de ação](#statusactionobject) abaixo.

#### Objeto de ação

Nome do campo

Opcional?

Tipo

Descrição

name

Obrigatório

String

Deve ser `review_order`.

parameters

Obrigatório

Objeto de parâmetros

Consulte [Objeto de parâmetros](#statusparamsobject).

#### Objeto de parâmetros

Nome do campo

Opcional?

Tipo

Descrição

reference\_id

Obrigatório

String

O ID único fornecido na mensagem `order_details`.

order

Obrigatório

Objeto de pedido

Consulte [Objeto de pedido](#statusorderobject).

payment

Opcional

Objeto de pagamento

Consulte [Objeto de pagamento](#statuspaymentobject).

#### Objeto de pedido

Nome do campo

Opcional?

Tipo

Descrição

status

Obrigatório

String

O novo status do pedido. [Confira os status de pedidos compatíveis](#orderstatussupported).

description

Opcional

String

Texto opcional para compartilhar informações relacionadas ao status na página de detalhes do pedido. Pode ser útil ao enviar o cancelamento. Não deve exceder 120 caracteres.

#### Objeto de pagamento

Nome do campo

Opcional?

Tipo

Descrição

status

Obrigatório

String

O novo status do pagamento. [Confira os status de pagamento compatíveis](#paymentstatussupported).

timestamp

Opcional

Número inteiro

Registro de data e hora opcional em formato epoch, em segundos

#### Status de pedidos aceitos

No momento, aceitamos os seguintes valores de status do pedido:

Valor

Descrição

`pending`

O pedido está pendente/não foi processado ainda.

`processing`

O comerciante/parceiro está processando o pedido, realizando o serviço, entre outros.

`partially-shipped`

Uma parte dos produtos do pedido foi enviada pelo comerciante.

`shipped`

Todos os produtos do pedido foram enviados pelo comerciante.

`completed`

O pedido foi concluído, e nenhuma outra ação é esperada do usuário ou do parceiro/comerciante.

`canceled`

O parceiro/comerciante gostaria de cancelar a mensagem "order\_details" referente ao pedido/fatura. A atualização de status falhará se já houver um pagamento pendente ou concluído para a mensagem "order\_details".

#### Status de pagamento aceitos

No momento, aceitamos os seguintes valores de status de pagamento:

Valor

Descrição

`pending`

O pagamento está pendente.

`captured`

O pagamento foi capturado com sucesso. Se esse status de pagamento for recebido, o balão do pedido será atualizado para incluir a etiqueta "pago" (com uma marca de seleção verde).

`failed`

O pagamento falhou.

## Erros e status

Estes são os erros relevantes para a API de Pagamentos do WhatsApp:

Código de erro

Descrição

`2040 - Message is not supported`

A mensagem que você está tentando enviar não pode ser recebida por esse usuário

`2046 - Order status invalid transition`

Não é possível atualizar o status do pedido do valor existente para o novo

`2047 - Order cancellation failure`

Não foi possível cancelar o pedido

Para ver uma lista abrangente com descrições detalhadas dos códigos de erro e de status HTTP, consulte nosso documento [Códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)