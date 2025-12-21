<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/payment-links -->
<!-- Scraped: 2025-12-20T17:45:28.215Z -->

# Como aceitar pagamentos por meio de links

Updated: 14 de nov de 2025

Esse recurso ainda não está disponível para o público. Para saber mais, entre em contato com whatsappindia-bizpayments-support@meta.com.

Para permitir que os clientes paguem pelos pedidos, suas empresas podem incluir no WhatsApp todas as formas de pagamento aceitas na sua plataforma. As empresas podem enviar mensagens de fatura aos clientes (`order_details`) e, em seguida, receber notificações sobre atualizações no status de pagamento por meio de webhooks do gateway de pagamento.

## Visão geral

Atualmente, os clientes navegam pelos catálogos das empresas, adicionam produtos ao carrinho e enviam pedidos usando nosso conjunto de soluções de mensagens comerciais, que inclui [mensagem de produto única, mensagem de vários produtos e página de detalhes do produto](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products).

Com a API de Mensagens do WhatsApp, as empresas podem enviar uma fatura aos clientes para concluir o pedido com um dos instrumentos de pagamento aceitos.

## Como funciona

A empresa deve enviar uma mensagem `order_details` para o consumidor iniciar o pagamento. Essas mensagens são um novo tipo de mensagem interativa e sempre contêm os mesmos quatro componentes principais: **cabeçalho**, **corpo**, **rodapé** e **ação**. Dentro do componente de **ação**, a empresa inclui todas as informações necessárias para que o cliente conclua o pagamento.

Cada mensagem `order_details` contém um `reference_id` único fornecido pela empresa, e esse número é usado em todo o fluxo para rastrear o pedido. Esse `reference_id` é usado para gerar o link de pagamento do Gateway de Pagamento.

Depois que a mensagem é enviada, a empresa aguarda por atualizações de status de pagamento ou transação diretamente no gateway de pagamento. Ao receber o sinal de pagamento de um pedido, a empresa deve repassar esse sinal ao cliente por meio de uma mensagem interativa de status do pedido (`order_status`).

É importante informar o usuário sobre o sinal de pagamento, pois essa mensagem atualiza os detalhes e a visualização do pedido, refletindo a confirmação da compra pelo comerciante. Isso será mostrado com um exemplo nas seções subsequentes.

## Fluxo de compra no app

No app para clientes do WhatsApp, o fluxo de compra tem estas etapas:

-   O cliente envia um pedido com produtos selecionados para a empresa ou a empresa identifica os produtos nos quais o cliente demonstrou interesse em comprar.
    -   Após receber o pedido ou identificar o produto, se a empresa aceitar outras formas de pagamento, como cartões de crédito ou carteiras digitais etc., ela enviará uma mensagem ao cliente para saber qual forma de pagamento prefere usar no pedido.
    
    ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565092551_1339318041260180_6100091283875651354_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=aC-XmGocNusQ7kNvwEr6xnu&_nc_oc=AdmTocr4ZzGqDyPWt9wg9sHH_U0mijU5nlUE8dgh2OZdQQsUvQVloj6XO6QtDyfbGkw&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_AflsqywV2fCVqlv7wSQuDixW9uqQbyngtJKGvOSiDqA3BQ&oe=6961297E)
    -   Quando os consumidores optarem por usar outra forma de pagamento, a empresa deverá gerar o link de pagamento chamando o Gateway de Pagamento e fornecendo o "reference-id" único e outras informações, como valor, validade etc. Depois, a empresa poderá usar o link de pagamento gerado para elaborar a mensagem com os detalhes do pedido e enviá-la ao consumidor.
    
    ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/560743135_1339318431260141_4647602383513770880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=bdWGymrHQ7gQ7kNvwEEyl0G&_nc_oc=AdnzhIvp6nKnPb4l-QGADQ9p9b7hId6GUqecMYwk-S61ocVCaNCbVymqNqEUrUbA4Uo&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_AflCOFQHyadFx-go2OAF_7gpCMrpHtvRwjyJF7Pid2yKWQ&oe=69611BE2)![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/565660275_1339317854593532_4612206710255341597_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=RD6xIb_7HR4Q7kNvwF-KcJ5&_nc_oc=AdmadCsAv5XIt36pTC-S9g5aE-GAl9SVhPgsRL_sKpcyvJ3V5bdwh7CRMOjj_MS7WCM&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_Afmcb78chZ_eHGWASRlw7QnY1Ad_3jqFUUidhnzVU5H_vg&oe=696136E2)
    -   Quando o consumidor tocar no botão Pagar agora/Continuar, ele será redirecionado para o link de pagamento no navegador no app, que apresenta a lista de opções compatíveis, como cartão de crédito, cartão de débito, carteira ou apps de UPI. É possível escolher qualquer uma das opções da UPI para pagar o pedido.
    
    Veja a seguir um exemplo de redirecionamento de link de pagamento no navegador no app que aceita diversas formas de pagamento, como cartão de crédito, cartão de débito, carteira e apps de UPI.
    
    ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/564160491_1339318417926809_8923443632387956339_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=W2EQPuZORF0Q7kNvwFh62Tz&_nc_oc=AdnCKavXUqddVYqGnkkRA6Kr0m62TlYCZ-O_VjFDgsjasM6k5FZZRUWhQfFiDXMyqxQ&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_AfnoO4oIWd3svY-Xy8UmNDkbEATNyi2hJo6_TnrK770D1w&oe=69611DDC)![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561772090_1339318161260168_2471127466153480453_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=MGN6sZA7oSsQ7kNvwF5R8Zn&_nc_oc=AdlsaK-Ax3h0O8Y6J_XxhJabM7e693WpWf5IGe5vPiMRcwVwRgy-JvAru1EHaZCJgRI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_Afm7LY2fL0aoAmQHdGC5IvpYAc73MSMF8bztl1BIUorY4w&oe=6961356C)
    -   Após a conclusão do pagamento, a empresa recebe uma notificação do Gateway de Pagamento e precisa enviar atualizações de status do pedido para o cliente, notificando sobre o progresso do pedido. Isso atualizará as CTAs da mensagem, a tela de detalhes do pedido e o status do pedido. O status do pedido deve conter o "reference-id" correspondente aos detalhes do pedido.
    
    ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561528290_1339318227926828_5203165586545314384_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=jTdrzhJ1ssMQ7kNvwH4zSHM&_nc_oc=Adm8n_rk23fkNw-99Z8tvprVcB9iLzyTlenqx2QTlkplJ3Y2sDaTiakqWK0GsOO84sM&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_AfnF3FJYqNCFvpppFA719rufH-M138XU2EgKlyNTOcvVug&oe=69611E88)![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/564584803_1339318121260172_4660237707662893676_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=iFadvqq7Nz0Q7kNvwGIt9PS&_nc_oc=AdndJSLH1vVwMXuFyefZ4jh6F3ZYXL4bdvrmRvUUzu8ZYcjv4CSlA8dy_v6DqNdc8hk&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_Afkkyqv8xSv70I0OqdwGkPt_kia9FuYwHlkiowDzemnbhg&oe=69611934)
    

## Etapas de integração

As etapas descritas abaixo partem do pressuposto de que a empresa está prestes a enviar a mensagem de detalhes do pedido ao cliente.

O diagrama de sequência a seguir exibe o fluxo de integração típico da API de Pagamentos do WhatsApp: ![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/564616717_1339318061260178_2911403093938616620_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=u-tl3D8vk7QQ7kNvwGGifRZ&_nc_oc=AdnU3CjI549gV9PLuTywfirrWS5wljptoE74zgGR27bLegCcbQDAlypgcbjzKyJc0Yw&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_Afn7dvs27Sq_tI86FaOargBi3nZgMhoKtQa2xQ5c9AcSVg&oe=69610F09)

### Etapa 1: obter o link de pagamento do gateway de pagamento

Assim que o cliente demonstrar interesse em comprar um item usando o link de pagamento. A empresa precisa chamar o gateway de pagamento com as informações necessárias, como identificação de referência, valor e validade, para gerar o link de pagamento. Este é um exemplo de link de pagamento:

```
https://rzp.io/i/rNiAagU8y
```

A empresa precisa usar a mesma identificação de referência, valor e validade na mensagem interativa da fatura (`order_details`)

### Etapa 2: criar o objeto interativo

Para enviar uma mensagem `order_details`, as empresas precisam montar um [objeto interativo](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) do tipo `order_details` com estes componentes:

Objeto

Descrição

`type`

objeto

**Obrigatório.**

Deve ser "order\_details".

`header`

objeto

**Opcional.**

O conteúdo do cabeçalho exibido na parte superior da mensagem. Se nenhum cabeçalho for fornecido, a API usará uma imagem do primeiro produto disponível como cabeçalho

`body`

objeto

**Obrigatório.**

Um objeto com o corpo da mensagem. O objeto contém o seguinte campo:

String `text`

-   **Obrigatório** se `body` estiver presente. O conteúdo da mensagem. Há compatibilidade com emojis e Markdown. O tamanho máximo é de 1.024 caracteres

`footer`

objeto

**Opcional.**

Um objeto com o rodapé da mensagem. O objeto contém os seguintes campos:

String `text`

-   **Obrigatório** se `footer` estiver presente. O conteúdo do rodapé. É compatível com emojis, Markdown e links. O comprimento máximo é de 60 caracteres

`action`

objeto

**Obrigatório.**

Um objeto de ação que você deseja que o usuário execute após a leitura da mensagem. Esse objeto de ação contém os seguintes campos:

string `name`

-   **Obrigatório.** Deve ser "review\_and\_pay"

Objeto `parameters`

-   Para mais informações, consulte [Objeto de parâmetros](#paramobject)

#### Objeto de parâmetros

Objeto

Descrição

`reference_id`

string

**Obrigatório.**

O identificador único do pedido ou da fatura fornecido pela empresa. Essa string diferencia maiúsculas de minúsculas, não pode estar vazia e só pode conter letras, números, sublinhados, traços ou pontos, além de não ultrapassar 35 caracteres.

O `reference_id` deve ser único para cada mensagem `order_details` da mesma empresa. Se o parceiro quiser enviar várias mensagens de order\_details para o mesmo pedido, fatura ou item semelhante, recomendamos incluir um número de sequência no `reference_id` (por exemplo, <order-or-invoice-id>-<sequence-number>) para garantir a exclusividade do `reference_id`.

`type`

objeto

**Obrigatório.**

O tipo de produto a ser pago neste pedido. As opções compatíveis no momento são `digital-goods` e `physical-goods`

`beneficiaries`

matriz

**Obrigatório para mercadorias físicas enviadas.**

Uma matriz de beneficiários do pedido. O beneficiário é o destinatário designado para o envio dos produtos físicos do pedido. Contém os seguintes campos:

As informações sobre o beneficiário não são exibidas aos usuários, mas são necessárias por motivos legais e de conformidade.

string `name`

-   **Obrigatório.** Nome do indivíduo ou empresa que recebeu os produtos físicos. Não pode ter mais de 200 caracteres

String `address_line1`

-   **Obrigatório.** Endereço de entrega (número da porta/torre, nome da rua etc.). Não pode ter mais de 100 caracteres

String `address_line2`

-   **Opcional.** Endereço de entrega (ponto de referência, área, entre outros). Não pode ter mais de 100 caracteres

String `city`

-   **Obrigatório.** Nome da cidade.

String `state`

-   **Obrigatório.** Nome do estado.

String `country`

-   **Obrigatório.** Deve ser "Índia".

String `postal_code`

-   **Obrigatório.** Código postal de seis dígitos do endereço de entrega.

`payment_type`

**Obrigatório.**

Deve ser "upi".

`payment_settings`

**Obrigatório.** Consulte [Objeto de configurações de pagamento](#payment_settings) para saber mais.

`currency`

**Obrigatório.**

A moeda usada para o pedido. No momento, o único valor aceito é `INR`.

`total_amount`

objeto

**Obrigatório.**

O objeto `total_amount` contém os seguintes campos:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser `100` para `INR`.

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234.

`total_amount.value` deve ser igual a `order.subtotal.value` + `order.tax.value` + `order.shipping.value` - `order.discount.value`.

`order`

objeto

**Obrigatório.**

Consulte [Objeto de pedido](#ordobject) para saber mais.

#### Objeto de configuração de pagamento

Objeto

Descrição

String `type`

**Obrigatório.** Precisa ser `payment_link`.

Objeto `payment_link`

**Obrigatório.** Consulte [Objeto de link de pagamento](#payment_link) para saber mais.

#### Objeto de link de pagamento

Objeto

Descrição

String `uri`

**Obrigatório.** Um link de pagamento válido gerado no gateway de pagamento.

Os domínios de links de pagamento gerados precisam ser habilitados para aceitar pagamentos. Para saber mais, entre em contato com whatsappindia-bizpayments-support@meta.com.

String `success_url`

**Opcional.** O fluxo foi encerrado com status de sucesso, quando success\_url foi atingido.

String `cancel_url`

**Opcional.** O fluxo é encerrado com falha quando cancel\_url é disparado.

#### Objeto Order

Objeto

Descrição

`status`

string

**Obrigatório.**

O único valor aceito na mensagem `order_details` é `pending`.

Em uma mensagem `order_status`, `status` pode ser: `pending`, `captured` ou `failed`.

`type`

string

**Opcional.**

O único valor aceito é `quick_pay`. Quando o campo é transmitido, ocultamos o botão "Verificar e pagar" e exibimos apenas o botão "Pagar agora" no balão de detalhes do pedido.

`items`

objeto

**Obrigatório.**

Um objeto com a lista de itens do pedido, contendo os seguintes campos:

String `retailer_id`

-   **Opcional.** A identificação de conteúdo de um item do pedido do seu catálogo.

String `name`

-   **Obrigatório.** O nome do item que será exibido ao usuário. Não pode ter mais de 60 caracteres

Objeto `image`

-   **Opcional.** Imagem personalizada do item que será exibida ao usuário. Consulte [Objeto de imagem de item](#item_image_object) para saber mais

O uso desse campo de imagem limitará a matriz de itens a um máximo de 10 itens e não poderá ser usado com `retailer_id` ou `catalog_id`.

Objeto `amount` com valor e fator de ajuste — consulte o campo de valor total acima

-   **Obrigatório.** O preço por item

Objeto de quantia `sale_amount`

-   **Opcional.** O preço com desconto de cada item. Esse valor deve ser menor que o original. Se for incluído, esse campo será usado para calcular o valor do subtotal

`quantity` é um número inteiro

-   **Obrigatório.** O número de itens no pedido; este campo não pode conter valores decimais e deve ser um número inteiro.

String `country_of_origin`

-   **Obrigatório** se `catalog_id` não estiver presente. O país de origem do produto

String `importer_name`

-   **Obrigatório** se `catalog_id` não estiver presente. Nome da empresa importadora

String `importer_adress`

-   **Obrigatório** se `catalog_id` não estiver presente. Endereço da empresa importadora

`subtotal`

objeto

**Obrigatório.**

O valor **deve ser igual** à soma de `order.amount.value` \* `order.amount.quantity`. Consulte a descrição de `total_amount` para ver explicações sobre os campos `offset` e `value`

Os seguintes campos fazem parte do objeto `subtotal`:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser `100` para `INR`

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234

`tax`

objeto

**Obrigatório.**

As informações fiscais do pedido que contêm os seguintes campos:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser `100` para `INR`

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234

String `description`

-   **Opcional.** O limite máximo é de 60 caracteres

`shipping`

objeto

**Opcional.**

O custo de envio do pedido. O objeto contém os seguintes campos:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser `100` para `INR`

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234

String `description`

-   **Opcional.** O limite máximo é de 60 caracteres

`discount`

objeto

**Opcional.**

O desconto do pedido. O objeto contém os seguintes campos:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser `100` para `INR`

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234

String `description`

-   **Opcional.** O limite máximo é de 60 caracteres

String `discount_program_name`

-   **Opcional.** Texto usado para definir pedidos om incentivos. Se o pedido incluir incentivos, o comerciante precisará definir essa informação. O limite máximo é de 60 caracteres

`catalog_id`

objeto

**Opcional.**

O identificador único do catálogo do Facebook usado pela empresa.

Se o campo não for fornecido, será necessário fornecer os seguintes campos dentro do objeto "items": `country_of_origin`, `importer_name` e `importer_address`

`expiration`

objeto

**Opcional.**

Validade do pedido. A empresa deve definir os seguintes campos no objeto:

String `timestamp` – registro de data e hora UTC em segundos do momento em que o pedido deve expirar. O limite mínimo é de 300 segundos

String `description` – texto que explica a validade. O limite máximo é de 120 caracteres

#### Objeto de imagem de item

Objeto

Descrição

String `link`

**Obrigatório.** Um link para a imagem que será exibida ao usuário. Deve ser `image/jpeg` ou `image/png` e 8 bits, RGB ou RGBA. Segue os mesmos requisitos de imagem em [mídia](/documentation/business-messaging/whatsapp/business-phone-numbers/media#supported-media-types)

O valor `parameters` é um objeto JSON convertido em string.

No final do processo, o objeto interativo terá aparência semelhante a esta em uma integração baseada em catálogo:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "link": "http(s)://the-url",        "provider": {          "name": "provider-name"        }      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_type": "upi",        "payment_settings": [          {            "type": "payment_link",            "payment_link": {              "uri": "https://the-payment-link"            }          }        ],        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "catalog_id": "the-catalog_id",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "retailer_id": "1234567",              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
```

O valor `parameters` é um objeto JSON convertido em string.

Para uma integração não baseada em catálogo, ou seja, quando "catalog-id" não está presente, um exemplo de carga é o seguinte:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "id": "your-media-id"      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_type": "upi",        "payment_settings": [          {            "type": "payment_link",            "payment_link": {              "uri": "https://the-payment-link"            }          }        ],        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            },            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
```

### Etapa 3: adicionar parâmetros de mensagem comuns

Assim que o objeto interativo estiver pronto, anexe os outros parâmetros que compõem uma mensagem: `recipient_type`, `to` e `type`. Lembre-se de definir `type` como `interactive`.

```
{   "messaging_product": "whatsapp",   "recipient_type": "individual",   "to": "PHONE_NUMBER",   "type": "interactive",   "interactive": {     // interactive object here   } }
```

Estes são os [parâmetros comuns a todos os tipos de mensagem](/documentation/business-messaging/whatsapp/messages/send-messages#requests).

### Etapa 4: fazer uma chamada POST ao ponto de extremidade de mensagens

Faça uma chamada POST para o ponto de extremidade [`/[PHONE_NUMBER_ID]/messages`](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) com o objeto `JSON` criado. Caso a mensagem seja enviada com sucesso, você receberá a seguinte resposta:

```
{  "messaging_product": "whatsapp",  "contacts": [ {      "input": "[PHONE_NUMBER_ID]",      "wa_id": "[PHONE-NUMBER_ID]"  } ],  "messages": [ {      "id": "wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA"  } ]}
```

#### Erros

###### Aceitação dos Termos de Serviço do Pagamentos no WhatsApp pendente

Caso veja o erro a seguir, aceite os Termos de Serviço do Pagamentos no WhatsApp usando o link fornecido na mensagem de erro antes de tentar novamente.

```
{  "error": {    "message": "(#134011) WhatsApp Payments terms of service has not been accepted",    "type": "OAuthException",    "code": 134011,    "error_data": {      "messaging_product": "whatsapp",      "details": "WhatsApp Payments Terms of Service acceptance pending for this WhatsApp Business Account.Please use the following link to accept terms of service before using Business APIs: https://fb.me/12345"    }  }}
```

Para ver todos os outros erros que podem ser retornados e as orientações sobre como tratá-los, consulte [API de Nuvem do WhatsApp, Códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes).

### Etapa 5: o consumidor paga o pedido

Os consumidores podem pagar usando a forma de pagamento do WhatsApp ou qualquer app compatível com a UPI instalado no dispositivo.

### Etapa 6: receber notificações sobre atualizações no status da transação do gateway de pagamento

As empresas recebem atualizações sobre a fatura por meio de webhooks do gateway de pagamento, quando o status da transação iniciada pelo usuário é alterado. O identificador exclusivo (reference-id transmitido na mensagem `order_details`) pode ser usado para associar a transação à fatura do consumidor ou à mensagem interativa de detalhes do pedido.

### Etapa 7: atualizar o status do pedido

Ao receber os sinais de transação do gateway de pagamento por meio do webhook, a empresa deve atualizar o status do pedido para manter o usuário informado. No momento, aceitamos os seguintes valores de status do pedido:

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/565718019_1339318281260156_7557207642198018127_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=3bNgKUyQ0NcQ7kNvwFmocLj&_nc_oc=AdkYAoB9nGFp-tAZbEBy0FElmn9ZdjiH-bRPDvq-Bzgz0qXH33nxrs26erI85R-K6QM&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=cVBqcLPg8svnrYawlwluog&oh=00_AfmiTBIGVrYMZjA95zekBMKyThlJrQyNsYBWG22rbgwA7g&oe=69611CB5)

Valor

Descrição

`pending`

O usuário ainda não fez o pagamento

`processing`

Pagamento do usuário autorizado, o comerciante/parceiro está atendendo ao pedido, realizando o serviço, entre outros

`partially-shipped`

Uma parte dos produtos do pedido foi enviada pelo comerciante

`shipped`

Todos os produtos do pedido foram enviados pelo comerciante

`completed`

O pedido foi concluído, e nenhuma outra ação é esperada do usuário ou do parceiro/comerciante

`canceled`

O parceiro/comerciante quer cancelar a mensagem `order_details` do pedido/fatura. A atualização de status falhará se já houver um pagamento `successful` ou `pending` para esta mensagem `order_details`

Normalmente, as empresas atualizam o `order_status` usando as notificações de alteração de status de pagamento do WhatsApp ou processos internos próprios. Para atualizar `order_status`, o parceiro envia uma mensagem `order_status` ao usuário.

```
{  "recipient_type": "individual",  "to": "whatsapp-id",  "type": "interactive",  "interactive": {    "type": "order_status",    "body": {      "text": "your-text-body-content"    },    "action": {      "name": "review_order",      "parameters": {        "reference_id": "reference-id-value",        "order": {          "status": "processing | partially_shipped | shipped | completed | canceled",          "description": "optional-text"        }      }    }  }}
```

A tabela a seguir descreve os valores retornados:

Valor

Descrição

`reference_id`

A identificação fornecida pelo parceiro na mensagem `order_details`

`status`

`status` do novo pedido

`description`

Texto opcional para compartilhar informações relacionadas ao status em `order_details`. Pode ser útil ao enviar o cancelamento. O limite máximo é de 120 caracteres

Sempre que receber atualizações de transações relacionadas a um pedido, o comerciante deve enviar uma mensagem ao consumidor. já que a mensagem order\_details e a experiência na tela de detalhes do pedido dependem dessas atualizações de status.

### Etapa 8: reconciliar pagamentos

As empresas devem usar os extratos bancários para reconciliar os pagamentos com o `reference_id` fornecido nas mensagens `order_details`.

## Lista de verificação para comerciantes integrados

-   Garanta que a mensagem `order_status` seja enviada ao consumidor para informá-lo sobre as atualizações de um pedido após o recebimento das atualizações de transação correspondentes.
    -   Garanta que o comerciante esteja verificado e que o contato WABA esteja marcado com o selo de verificação.
    -   Confirme se a WABA está associada ao nível adequado de mensagens iniciadas pelo comerciante (1 mil, 10 mil ou 100 mil por dia)
    -   O comerciante deve listar as informações de suporte ao cliente na tela de perfil caso o consumidor queira relatar problemas.
    

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)