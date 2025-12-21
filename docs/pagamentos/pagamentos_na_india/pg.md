<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg -->
<!-- Scraped: 2025-12-20T17:45:44.467Z -->

# Receber pagamentos por meio de portais de pagamento no WhatsApp

Updated: 14 de nov de 2025

Sua empresa pode permitir que os clientes paguem os pedidos por meio dos nossos portais de pagamento parceiros sem sair do WhatsApp. As empresas podem enviar aos clientes mensagens order\_details e, em seguida, receber notificações sobre atualizações no status de pagamento por meio de webhooks.

## Visão geral

Atualmente, os clientes navegam nos catálogos das empresas, adicionam produtos ao carrinho e enviam pedidos usando nosso conjunto de soluções de mensagens comerciais, que inclui [mensagem de produto único, mensagem multiproduto e página de detalhes do produto](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products). Agora, com a API de Pagamentos, as empresas podem enviar aos clientes uma _fatura_, para que eles concluam o pedido pagando sem precisar sair do WhatsApp.

No momento, nossa solução de pagamentos é habilitada por BillDesk, Razorpay, PayU e Zaakpay, um provedor de serviços de pagamento de terceiros. É preciso ter uma conta do BillDesk, Razorpay, PayU ou Zaakpay para receber pagamentos no WhatsApp.

Esperamos que mais provedores de pagamento sejam adicionados no futuro.

## Como funciona

Primeiro, a empresa compõe e envia uma mensagem `order_details`. A mensagem `order_details` é um novo tipo de mensagem `interactive` que sempre contém os mesmos 4 componentes principais: **cabeçalho**, **corpo**, **rodapé** e **ação**. Dentro do componente `action`, a empresa inclui todas as informações necessárias para que o cliente conclua o pagamento.

Cada mensagem `order_details` contém um `reference_id` único fornecido pela empresa, e essa identificação única é usada em todo o fluxo para rastrear o pedido.

Depois que a mensagem é enviada, a empresa aguarda por uma atualização de status de pagamento via webhooks. As empresas recebem uma notificação quando o status do pagamento é alterado, mas não devem depender somente dessas notificações de webhooks por questões de segurança. O WhatsApp também fornece uma API de consulta de pagamentos que pode ser usada para recuperar os status de pagamento a qualquer momento.

## Fluxo de compra no app

No app de mensagens do WhatsApp, o fluxo de compra tem estas etapas:

-   Os clientes enviam um pedido com produtos selecionados para a empresa por meio de mensagens de texto simples ou usando outras mensagens interativas, como [mensagem de produto único, mensagem multiproduto e detalhes do produto.](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products)
    -   Depois de receber o pedido, a empresa envia uma mensagem `order_details` ao usuário. Ao tocar em **Analisar e pagar**, o usuário vê os detalhes do pedido e o valor total a ser pago.
    -   Ao tocar no botão **Continuar**, o usuário pode optar por pagar de forma nativa no WhatsApp ou em qualquer outro app de UPI.  
      
    Finalização da compra com o WhatsApp Pay:
    
    ![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571153290_847708537732068_1114245616221778284_n.gif?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=stv8vff4K9UQ7kNvwG5y_xJ&_nc_oc=AdkMEZoEwgMe1IMMxHf8_VMyfKRS561sBGtcjGPUW-JF7JPy_0oUk6pf1hXd4p5f4No&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_Aflgb-4urIb5d7_XIipWFrL1w53M5wirv5YTSQIYy_ZCGw&oe=69612CA6)
    
      
      
    Finalização da compra em outros apps de UPI:
    
    ![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571162926_1314244496589753_2685997247719512396_n.gif?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=g6TOIknnezkQ7kNvwEOOENo&_nc_oc=AdmyAEpWPceqPHWdBxY7iunQsv0YtHqnYwb_EKUoxstlxHO2sLMkmmypjbaTx4GSgBs&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_AfkrGSczsJYSssJXoqJHMoVaIRMKV_4oC-Qnrl3syBnTSQ&oe=696124F4)
    -   Depois que o pagamento for confirmado pelo portal de pagamento (PG) ou provedor de serviços de pagamento, a empresa poderá iniciar o processamento do pedido.
    -   Depois, as empresas podem enviar uma mensagem `order_status` ao consumidor com informações sobre o status do pedido. Cada mensagem resultará em um balão de mensagem (conforme mostrado abaixo), que se refere à mensagem original com detalhes do pedido e também atualiza o status exibido na página de detalhes do pedido.
    

## Vincular a conta de pagamento

Para receber pagamentos no WhatsApp, é preciso adicionar uma _configuração de pagamento_ à conta do WhatsApp Business correspondente. A configuração de pagamento permite vincular uma conta do portal de pagamento ao WhatsApp. Cada configuração de pagamento é associada a um _nome único_. Como parte da mensagem `order_details`, você pode especificar a configuração de pagamento que será usada para determinada finalização da compra. O WhatsApp gerará um fluxo de finalização da compra usando a conta do portal de pagamento associado.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571120266_771781145862776_2768065542923604342_n.gif?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=DNdM5YigG58Q7kNvwGdVR1a&_nc_oc=AdmHXstXWzo7B09SKUAQwaHQs6Se8FRhMG9as9SX1rdZh6ZnLs3cyv6CYTjstDK9PM0&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_AflgDpc0lR8QhNwGejWCPXuv3vjRAuEKgbaHeFsa__ZK6A&oe=69610E38)

Depois de vincular a conta do parceiro de pagamento, faça a integração com as APIs de Pagamentos abaixo. Isso permitirá que você envie uma mensagem `order_details` aos clientes com a configuração para receber pagamentos.

### Etapas para desvincular a configuração de pagamento

Observação: antes de realizar a desvinculação, verifique se nenhuma nova mensagem de pedido solicitando pagamento ao cliente foi enviada usando a configuração de pagamento que você pretende remover.

## Etapas de integração

As etapas descritas abaixo pressupõem que a empresa já sabe no que o usuário está interessado por meio de conversas anteriores. A API de Pagamentos é uma API independente e, portanto, pode funcionar com várias mensagens, como [mensagens de lista, botões de resposta, mensagens de produto único ou multiproduto](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api).

### Diagrama de sequência

O diagrama de sequência a seguir exibe o fluxo de integração típico da API de Pagamentos. As etapas destacadas em verde são as principais etapas de integração.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/571217223_783482261180609_2685234002113988131_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=HlIkAkCd7w8Q7kNvwGwR_dT&_nc_oc=AdnH1Cmf9QqZnKahtGazYaGEUwKhHD2qJOtUy9dhpdtx9AoTJTFlofCiJoBUMVgZO38&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_AfnMbl8QpnGb4G5qv3Aoj4NBq7faxQqlYhAm85WvssOkhw&oe=69613453)

### Etapa 1: enviar mensagem interativa com detalhes do pedido

Para enviar uma mensagem `order_details`, as empresas precisam montar um objeto interativo do tipo `order_details` com estes componentes:

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

String `name`

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

O reference\_id deve ser único para cada mensagem de order\_details de determinada empresa. Se houver necessidade de enviar várias mensagens de order\_details para o mesmo pedido, recomendamos incluir um número de sequência no reference\_id (por exemplo, “BM345A-12”) para garantir a exclusividade do reference\_id.

`type`

objeto

**Obrigatório.**

O tipo de produto a ser pago neste pedido. As opções compatíveis no momento são `digital-goods` e `physical-goods`.

`beneficiaries`

matriz

**Obrigatório para mercadorias físicas enviadas.**

Uma matriz de beneficiários do pedido. O beneficiário é o destinatário designado para o envio dos produtos físicos do pedido. Contém os seguintes campos:

Observação: as informações sobre o beneficiário não são exibidas aos usuários, mas são necessárias por motivos legais e de conformidade.

String `name`

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

`payment_settings`

objeto

**Obrigatório.**

Consulte [Objeto de configurações de pagamento](#paymentsettingsobject) para saber mais.

`order`

objeto

**Obrigatório.**

Consulte [Objeto de pedido](#ordobject) para saber mais.

#### Objeto de configurações de pagamento

Objeto

Descrição

`type`

string

**Obrigatório.**

Deve ser definido como **“payment\_gateway”**

`payment_gateway`

objeto

**Obrigatório.**

Um objeto que descreve as informações da conta de pagamento:

String `type`

-   **Obrigatório.** O identificador único de um item do pedido. Defina como **“billdesk”**, **“razorpay”**, **“payu”** ou **zaakpay** se tiver vinculado o portal de pagamento BillDesk, Razorpay, PayU ou Zaakpay para aceitar pagamentos

String `configuration_name`

-   **Obrigatório.** O nome da configuração de pagamento predefinida a ser usada neste pedido, que não deve exceder 60 caracteres. Esse valor deve corresponder a uma configuração de pagamento definida no Gerenciador do WhatsApp Business conforme exibido [aqui](/docs/whatsapp/on-premises/payments-api/payments-sg#before-you-start).

Quando `configuration_name` for inválido, o cliente não poderá pagar pelo pedido. Recomendamos que as empresas realizem testes abrangentes dessa configuração durante a fase de integração.

Objeto `billdesk/razorpay/payu/zaakpay`

-   **Opcional.** Os comerciantes/parceiros que querem usar additional\_info1/7 (para BillDesk), "notes" e "receipt"(para Razorpay) e "UDF" (para PayU) e "extra1/2" (para Zaakpay) agora podem transmitir esses valores na mensagem de Detalhes do pedido, e nós usaremos esses campos para criar transações/pedidos nos respectivos PGs.

Para saber mais, consulte [Objeto UDF específico do portal de pagamento](#paymentsettingsudfobject).

#### Campos de BillDesk, RazorPay, PayU e Zaakpay

Agora, oferecemos suporte para que parceiros e comerciantes enviem os campos `notes`, `receipt` e `udf` na mensagem de detalhes do pedido e recebam esses dados de volta em sinais de pagamento. Aqui, veremos como os comerciantes podem enviar "additional\_info" para o BillDesk, "notes" e "receipt" para o Razorpay, "udf" para o PayU, "extra" para PGs do Zaakpay.

Objeto

Descrição

`notes`

objeto

**Opcional.**

-   Oferece suporte apenas ao portal de pagamento Razorpay

O objeto pode ser pares de chave-valor com no máximo 15 chaves e cada valor limitado a 256 caracteres.

`receipt`

String

**Opcional.**

-   Oferece suporte apenas ao portal de pagamento Razorpay

O número do recibo correspondente ao pedido, definido para sua referência interna. Suporte para número máximo de 40 caracteres, com comprimento mínimo maior que 0 caractere.

`udf1-4`

String

**Opcional.**

-   Oferece suporte apenas ao portal de pagamento PayU

Os campos definidos pelo usuário (UDF, pela sigla em inglês) são usados para armazenar informações relacionadas a um pedido específico. Cada campo de UDF tem um limite máximo de 255 caracteres.

`extra1-2`

String

**Opcional.**

-   Oferece suporte apenas ao portal de pagamento Zaakpay

Os campos definidos pelo usuário (extra) são usados para armazenar informações relacionadas a um pedido específico. Cada campo extra tem um limite máximo de 180 caracteres.

`additional_info1-7`

String

**Opcional.**

-   Oferece suporte apenas ao portal de pagamento BillDesk

Os campos definidos pelo usuário (extra) são usados para armazenar informações relacionadas a um pedido específico. Cada campo extra tem um limite máximo de 120 caracteres.

#### Objeto de pedido

Objeto

Descrição

`status`

string

**Obrigatório.**

O único valor aceito na mensagem `order_details` é `pending`.

Em uma mensagem `order_status`, `status` pode ser: `pending`, `captured` ou `failed`.

String `type`

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

-   **Opcional.** O preço com desconto de cada item. Esse valor deve ser menor que o original. Se for incluído, esse campo será usado para calcular o valor subtotal.

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

String `description` – texto que explica a validade. O limite máximo é de 120 caracteres.

#### Objeto de imagem de item

Objeto

Descrição

String `link`

**Obrigatório.** Um link para a imagem que será exibida ao usuário. Deve ser `image/jpeg` ou `image/png` e 8 bits, RGB ou RGBA. Segue os mesmos requisitos de imagem em [mídia](/documentation/business-messaging/whatsapp/business-phone-numbers/media#supported-media-types)

O valor `parameters` é um objeto JSON convertido em string.

No final do processo, o objeto interativo terá aparência semelhante a esta em uma integração baseada em catálogo no BillDesk:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "link": "http(s)://the-url",        "provider": {          "name": "provider-name"        }      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_settings": [          {            "type": "payment_gateway",            "payment_gateway": {              "type": "billdesk",              "configuration_name": "payment-config-id",              "billdesk": {                "additional_info1": "additional_info1-value",                "additional_info2": "additional_info2-value",                "additional_info3": "additional_info3-value",                "additional_info4": "additional_info4-value",                "additional_info5": "additional_info5-value",                "additional_info6": "additional_info6-value",                "additional_info7": "additional_info7-value",              }            }          }        ],        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "catalog_id": "the-catalog_id",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "retailer_id": "1234567",              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
```

O valor `parameters` é um objeto JSON convertido em string.

No final do processo, o objeto interativo terá aparência semelhante a esta em uma integração baseada em catálogo no RazorPay:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "link": "http(s)://the-url",        "provider": {          "name": "provider-name"        }      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_settings": [          {            "type": "payment_gateway",            "payment_gateway": {              "type": "razorpay",              "configuration_name": "payment-config-id",              "razorpay": {                "receipt": "receipt-value",                "notes": {                  "key1": "value1"                }              }            }          }        ],        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "catalog_id": "the-catalog_id",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "retailer_id": "1234567",              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
```

O valor `parameters` é um objeto JSON convertido em string.

Para uma integração não baseada em catálogo do PayU, ou seja, quando "catálogo-id" não está presente, um exemplo de carga é o seguinte:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "link": "your-media-url-link"      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_settings": [          {            "type": "payment_gateway",            "payment_gateway": {              "type": "payu",              "configuration_name": "payment-config-id",              "payu": {                "udf1": "value1",                "udf2": "value2",                "udf3": "value3",                "udf4": "value4"              }            }          }        ],        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            },            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
```

Para uma integração não baseada em catálogo do Zaakpay, ou seja, quando "catálogo-id" não está presente, um exemplo de carga é o seguinte:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "link": "your-media-url-link"      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_settings": [          {            "type": "payment_gateway",            "payment_gateway": {              "type": "zaakpay",              "configuration_name": "payment-config-id",              "zaakpay": {                "extra1": "value1",                "extra2": "value2"              }            }          }        ],        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            },            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
```

### Etapa 2: adicionar parâmetros de mensagem comuns

Assim que o objeto interativo estiver pronto, anexe os outros parâmetros que compõem uma mensagem: `recipient_type`, `to` e `type`. Lembre-se de definir `type` como `interactive`.

```
{   "messaging_product": "whatsapp",   "recipient_type": "individual",   "to": "PHONE_NUMBER",   "type": "interactive",   "interactive": {     // interactive object here   } }
```

Estes são os [parâmetros comuns a todos os tipos de mensagem](/documentation/business-messaging/whatsapp/messages/send-messages#requests).

### Etapa 3: fazer uma chamada POST ao ponto de extremidade de mensagens

Faça uma chamada POST para o ponto de extremidade [`/[PHONE_NUMBER_ID]/messages`](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) com o objeto `JSON` criado. Caso a mensagem seja enviada com sucesso, você receberá a seguinte resposta:

```
{  "messaging_product": "whatsapp",  "contacts": [ {      "input": "[PHONE_NUMBER_ID]",      "wa_id": "[PHONE_NUMBER_ID]"  } ],  "messages": [ {      "id": "wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA"  } ]}
```

Para ver todos os outros erros que podem ser retornados e as orientações sobre como tratá-los, consulte [API de Nuvem do WhatsApp, Códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes).

#### Experiência de produto

O cliente recebe uma mensagem `order_details` semelhante à exibida abaixo (esquerda). Ao clicar em "Analisar e pagar", a tela com os detalhes do pedido será aberta, conforme exibido abaixo (no meio). O cliente pode pagar o pedido usando o botão "Continuar", que abre uma folha inferior com as opções de pagamento (à direita).

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560571516_1339317914593526_2781071619819376161_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=tDQ8S3eEg3IQ7kNvwFRrvEZ&_nc_oc=Adm6lDKETx6GYEr1uC3PhNix9buKYU0PoY1VoOJSSHwefLjZXNmF_PiUYhdB_C5nq2Y&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_AflOPkfbZHSxH32-DL-sqqN-LiKaHMElwA40QVBr1OP82A&oe=6961345C)

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560071360_1339318024593515_5292229863238867668_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=8nGnZ-vN4ZYQ7kNvwGumEbr&_nc_oc=AdmeQufUpUmgWvTm82kNjl2wmM8C9eDkSptL5U7hZpM3zhZgcK88iO4zofTswwzgyxM&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_AfmvO2MsLXQGe6_fQf7GHhxYUonZKzj19D9E8qyn8aElKg&oe=69610B2C)

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/564832679_1339318067926844_5442920966964103492_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=ke1bFb-43i0Q7kNvwFuob3s&_nc_oc=AdkMETlz4nPewHQB7z4y-1yYlh7juqshHfqZcJ7D449bSszOs4mzszx9kM7mklWPxtE&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_AfmwwgCYyMYMyq8MtT3zC5PBhw48VSfACkejA0ekEvQabw&oe=696117FA)

### Etapa 4: receber um webhook sobre o status da transação

As empresas recebem atualizações por meio de [webhooks do WhatsApp](/docs/whatsapp/on-premises/guides/webhooks) quando o status da transação iniciada pelo usuário é alterado para um status do tipo "pagamento". Contém os seguintes campos:

Objeto

Descrição

`id`

string

**Obrigatório.**

Identificação do webhook para a notificação.

`recipient_id`

string

**Obrigatório.**

Identificação do WhatsApp do cliente.

`type`

string

**Obrigatório.**

Para webhooks de atualização de status de pagamento, o tipo é "payment".

`status`

string

**Obrigatório.**

`captured`/`pending`: `captured` – quando o pagamento é concluído com sucesso; `pending` quando o usuário tenta realizar a ação, mas ainda não recebeu o sinal de transações bem-sucedidas.

`payment`

objeto

**Obrigatório.**

Contém o seguinte campo:  
String `reference_id`

-   Identificação de referência única para o pedido enviado na mensagem `order_details`.  
    Objeto `amount`
    -   Tem campos de valor e deslocamento que correspondem ao valor total pago pelo usuário.  
    String `currency`
    -   a moeda é sempre INR.  
    Objeto `transaction` de tentativa de transação para o pagamento. O objeto de transação contém os seguintes campos:
    -   String `id`**Obrigatório.** A identificação do pedido no portal de pagamento alfanumérica.
    -   String `pg_transaction_id`**Opcional.** A identificação do pagamento no portal de pagamento alfanumérica.
    -   String `type`**Obrigatório.** O tipo de pagamento dessas transações. Apenas `billdesk`, `razorpay`, `payu` ou `zaakpay` têm suporte.
    -   String `status`**Obrigatório.** O status da transação. Pode ser `pending`, `success` ou `failed`.
    -   Número inteiro `created_timestamp`**Obrigatório.** O horário em que a transação foi criada, medido em segundos epoch.
    -   Número inteiro `updated_timestamp`**Obrigatório.** O horário da última atualização da transação em segundos epcoh.
    -   Objeto `method` (**Opcional.** As informações da forma de pagamento podem não estar disponíveis para pagamentos com falha)-   String `type`**Obrigatório.** Descreve a forma de pagamento usada pelo consumidor para pagar o pedido. Pode ser `upi`, `card`, `wallet` ou `netbanking`.
    -   Objeto `error` ( **Opcional.** Os detalhes de erro de pagamento podem não estar disponíveis para todas as tentativas de pagamento.)-   String `code`**Obrigatório.** Descreve o motivo da falha no pagamento que é gerado pelo portal de pagamento e a Meta retorna para os parceiros.-   String `reason`**Obrigatório.** Descreve o motivo da falha no pagamento em texto sem formatação, que é gerado pelo portal de pagamento e a Meta retorna para os parceiros.  
    String `additional_info1-7`**Opcional.**
    -   Enviado apenas para o portal de pagamento Billdesk quando o valor é enviado na mensagem de detalhes do pedido. Cada uma das chaves additional\_info1-4 tem valores de string.  
    Objeto `notes` **Opcional.**
    -   Enviado apenas para o portal de pagamento Razorpay quando o valor é enviado na mensagem de detalhes do pedido. Contém o par de chave-valor transmitido na mensagem de detalhes do pedido.  
    String `receipt`**Opcional.**
    -   Enviado apenas para o portal de pagamento Razorpay quando o valor é enviado na mensagem de detalhes do pedido.  
    String `udf1-4`**Opcional.**
    -   Enviado apenas para o portal de pagamento Payu quando o valor é enviado na mensagem de detalhes do pedido. Cada uma das chaves udf1-4 tem valores de string.

  
String `extra1-2`**Opcional.**

-   Enviado apenas para o portal de pagamento Zaakpay quando o valor é enviado na mensagem de detalhes do pedido. Cada uma das chaves extra1-2 tem valores de string.  
    Matriz `refunds`**Opcional.**

Lista de reembolsos para o pedido. Cada objeto de reembolso contém os seguintes campos:

-   String `id`**Obrigatório.** A identificação alfanumérica do reembolso.-   Objeto `amount`**Obrigatório.** O valor total do reembolso.-   String `speed_processed`**Obrigatório.** Velocidade com que o reembolso foi processado. Pode ser `instant` ou `normal`.-   String `status`**Obrigatório.** O status do reembolso. Pode ser `pending`, `success` ou `failed`.-   Número inteiro `created_timestamp`**Obrigatório.** O horário em que o reembolso foi criado, medido em segundos epoch.-   Número inteiro `updated_timestamp`**Obrigatório.** O horário da última atualização do reembolso em segundos epoch.

`timestamp`

string

**Obrigatório.**

Registro de data e hora do webhook.

Veja um exemplo de webhook de status do tipo `payment`:

```
{  "object": "whatsapp_business_account",  "entry": [{    "id": "WHATSAPP-BUSINESS-ACCOUNT-ID",    "changes": [{      "value": {         "messaging_product": "whatsapp",         "metadata": {           "display_phone_number": "[PHONE_NUMBER]",           "phone_number_id": "[PHONE_NUMBER_ID]"         },         "contacts": [{...}],         "errors": [{...}],         "messages": [{...}],         "statuses": [{            "id": "gBGGFlB5YjhvAgnhuF1qIUvCo7A",            "recipient_id": "[PHONE_NUMBER]",            "type": "payment",            "status": "[TRANSACTION_STATUS]",            "payment": {               "reference_id": "[REFERENCE_ID]",               "amount": {                 "value": 21000,                 "offset": 100               },               "transaction": {                 "id": "[PG-ORDER-ID]",                 "pg_transaction_id": "[PG-PAYMENT-ID]",                 "type": "billdesk/razorpay/payu/zaakpay",                 "status": "success/failed",                 "created_timestamp": "CREATED_TIMESTAMP",                 "updated_timestamp": "UPDATED_TIMESTAMP",                 "method": {                   "type": "upi/card/netbanking/wallet"                 },                 "error": {                   "code": "pg-generated-error-code",                   "reason": "pg-generated-descriptive-reason"                 }               },               "currency": "INR",               "receipt": "receipt-value",               "notes": {                 "key1": "value1",                 "key2": "value2"               },               "udf1": "udf1-value",               "udf2": "udf2-value",               "udf3": "udf3-value",               "udf4": "udf4-value",               "additional_info1": "additional_info1-value",               "additional_info2": "additional_info2-value",               "additional_info3": "additional_info3-value",               "additional_info4": "additional_info4-value",               "additional_info5": "additional_info5-value",               "additional_info6": "additional_info6-value",               "additional_info7": "additional_info7-value",               "refunds": [{                 "id": "[REFUND-ID]",                 "amount": {                   "value": 100,                   "offset": 100                 },                 "speed_processed": "instant/normal",                 "status": "success",                 "created_timestamp": "CREATED_TIMESTAMP",                 "updated_timestamp": "UPDATED_TIMESTAMP",              }],            },            "timestamp": "notification_timestamp"         }]      },      "field": "messages"    }]  }]}
```

Para saber mais sobre outros status, consulte [Componentes, objeto de status](/docs/whatsapp/on-premises/webhooks/components#statuses-object).

### Etapa 5: confirmar o pagamento

Depois de receber o webhook de status do pagamento, ou a qualquer momento, a empresa pode consultar o status do pagamento referente ao pedido. Para tal, as empresas devem fazer uma chamada GET para o ponto de extremidade de pagamentos, conforme mostrado aqui:

```
GET <PHONE_NUMBER_ID>/payments/<PAYMENT_CONFIGURATION>/<REFERENCE_ID>
```

onde `payment_configuration` e `reference_id` são iguais ao que foi enviado na mensagem `order_details`.

As empresas devem esperar uma resposta na mesma sessão HTTP (não em uma notificação de webhook) que contenha os seguintes campos:

Campo

Descrição

`reference_id`

string

**Obrigatório.**

A identificação enviada pela empresa na mensagem `order_details`

`status`

string

**Obrigatório.**

O status do pagamento do pedido. Pode ser `pending` ou `captured`  

Consulte a tabela abaixo para saber o que esses status significam.

`currency`

string

**Obrigatório.**

A moeda usada para o pagamento. No momento, o único valor aceito é `INR`.

`total_amount`

objeto

**Obrigatório.**

O valor total desse pagamento. Contém os seguintes campos:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser 100.

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234.

`transactions`

matriz

**Obrigatório.**

A lista de transações para esse pagamento. Cada objeto contém os seguintes campos:

String `id`

-   **Obrigatório.** A identificação do pedido no portal de pagamento alfanumérica.

String `pg_transaction_id`

-   **Obrigatório.** A identificação do pagamento no portal de pagamento alfanumérica.

String `type`

-   **Obrigatório.** O tipo de pagamento dessas transações. Apenas `billdesk`, `razorpay`, `payu` ou `zaakpay` têm suporte.

String `status`

-   **Obrigatório.** O status da transação. Pode ser `pending`, `success` ou `failed`.

No máximo uma transação pode ter o status `success`.

Número inteiro `created_timestamp`

-   **Obrigatório.** O horário em que a transação foi criada, medido em segundos epoch.

Número inteiro `updated_timestamp`

-   **Obrigatório.** O horário da última atualização da transação em segundos epcoh.

Objeto `method`

**Opcional.** As informações da forma de pagamento podem não estar disponíveis para pagamentos com falha

-   String `type`**Obrigatório.** Descreve a forma de pagamento usada pelo consumidor para pagar o pedido. Pode ser `upi`, `card`, `wallet` ou `netbanking`.

Objeto `error`

**Opcional.** Os detalhes de erro de pagamento podem não estar disponíveis para todas as tentativas de pagamento

-   String `code`**Obrigatório.** Descreve o motivo da falha no pagamento que é gerado pelo portal de pagamento e a Meta retorna para os parceiros.-   String `reason`**Obrigatório.** Descreve o motivo da falha no pagamento em texto sem formatação, que é gerado pelo portal de pagamento e a Meta retorna para os parceiros.

Matriz `refunds`

**Opcional.** Lista de reembolsos para o pedido. Cada objeto de reembolso contém os seguintes campos:

-   String `id`**Obrigatório.** A identificação alfanumérica do reembolso.-   Objeto `amount`**Obrigatório.** O valor total do reembolso.-   String `speed_processed`**Obrigatório.** Velocidade com que o reembolso foi processado. Pode ser `instant` ou `normal`.-   String `status`**Obrigatório.** O status do reembolso. Pode ser `pending`, `success` ou `failed`.-   Número inteiro `created_timestamp`**Obrigatório.** O horário em que o reembolso foi criado, medido em segundos epoch.-   Número inteiro `updated_timestamp`**Obrigatório.** O horário da última atualização do reembolso em segundos epoch.

`additional_info1-7`

string

**Opcional.**

Oferece suporte apenas ao PG do BillDesk, contém valores de string enviados como parte da mensagem de detalhes do pedido.

`receipt`

string

**Opcional.**

Oferece suporte apenas ao PG do Razorpay, contém o valor do recibo enviado como parte da mensagem de detalhes do pedido.

`notes`

objeto

**Opcional.**

Oferece suporte apenas ao PG do Razorpay, contém os pares de chave-valor enviados como parte da mensagem de detalhes do pedido.

`udf1-4`

string

**Opcional.**

Oferece suporte apenas ao PG do PayU, contém valores de string enviados como parte da mensagem de detalhes do pedido.

`extra1-2`

string

**Opcional.**

Oferece suporte apenas ao PG do Zaakpay, contém valores de string enviados como parte da mensagem de detalhes do pedido.

#### Status do pagamento

Status

Descrição

`pending`

O usuário iniciou o processo de pagamento e o objeto de pagamento foi criado

`captured`

O pagamento foi capturado

Veja um exemplo de resposta bem-sucedida:

```
{  "payments": [{    "reference_id": "reference-id-value",    "status": "status-of-payment",    "currency": "INR",    "total_amount": {      "value": 21000,      "offset": 100    },    "transactions": [      {        "id": "[PG-ORDER-ID]",        "pg_transaction_id": "[PG-TXN-ID]",        "type": "billdesk/razorpay/payu/zaakpay",        "status": "success/failed",        "created_timestamp": "CREATED_TIMESTAMP",        "updated_timestamp": "UPDATED_TIMESTAMP",        "method": {           "type": "upi/card/netbanking/wallet"        },        "error": {           "code": "pg-generated-error-code",           "reason": "pg-generated-descriptive-reason"        },        "refunds": [          {            "id": "[REFUND-ID]",            "amount": {              "value": 100,              "offset": 100            },            "speed_processed": "instant/normal",            "status": "success",            "created_timestamp": "CREATED_TIMESTAMP",            "updated_timestamp": "UPDATED_TIMESATMP",          }        ],      }    ],    "receipt": "receipt-value",    "notes": {      "key1": "value1",      "key2": "value2"    },    "udf1": "udf1-value",    "udf2": "udf2-value",    "udf3": "udf3-value",    "udf4": "udf4-value"    "additional_info1": "additional_info1-value",    "additional_info2": "additional_info2-value",    "additional_info3": "additional_info3-value",    "additional_info4": "additional_info4-value",    "additional_info5": "additional_info5-value",    "additional_info6": "additional_info6-value",    "additional_info7": "additional_info7-value",  }]}
```

Em caso de erro, a resposta será semelhante a uma resposta de erro para o ponto de extremidade `/v1/messages`. Para ver todos os erros que podem ser retornados e orientações sobre como lidar com eles, consulte [API Local do WhatsApp: Erros](/docs/whatsapp/on-premises/errors). Veja um exemplo de erro genérico:

```
{  "errors": [{    "code": 500,    "title": "Generic error",    "details": "System error. Please try again."  }]}
```

### Etapa 6: atualizar o status do pedido

As empresas _devem_ enviar atualizações sobre o pedido usando a mensagem de `order_status` em vez de mensagem de texto, já que o status mais recente de um pedido exibido na página de detalhes é baseado apenas em mensagens de `order_status`.

Para enviar notificações de atualização sobre um pedido, use uma mensagem do tipo `interactive``order_status` conforme o exemplo abaixo.

```
{  "recipient_type": "individual",  "to": "whatsapp-id",  "type": "interactive",  "interactive": {    "type": "order_status",    "body": {      "text": "your-text-body-content"    },    "action": {      "name": "review_order",      "parameters": {        "reference_id": "reference-id-value",        "order": {          "status": "processing | partially_shipped | shipped | completed | canceled",          "description": "optional-text"        }      }    }  }}
```

Esta tabela descreve os campos da mensagem interativa `order_status`:

Objeto

Descrição

`type`

string

**Obrigatório.** Deve ser "order\_status".

`body`

objeto

**Obrigatório.**

Um objeto com o corpo da mensagem. O objeto contém o seguinte campo:

String `text`

-   **Obrigatório** se `body` estiver presente. O conteúdo da mensagem. Há compatibilidade com emojis e Markdown. O tamanho máximo é de 1.024 caracteres

`footer`

objeto

**Opcional.**

Um objeto com o rodapé da mensagem. O objeto contém o seguinte campo:

String `text`

-   **Obrigatório** se `footer` estiver presente. O conteúdo do rodapé. É compatível com emojis, Markdown e links. O comprimento máximo é de 60 caracteres

`action`

objeto

**Obrigatório.**

Um objeto de ação que você deseja que o usuário execute após a leitura da mensagem. Esse objeto de ação contém os seguintes campos:

String `name`

-   **Obrigatório.** Deve ser "review\_order".

Objeto `parameters`

-   Para mais informações, consulte [Objeto de parâmetros](#paramobject-orderstatus).

O objeto `parameters` contém os seguintes campos:

Valor

Descrição

`reference_id`

string

**Obrigatório.**

A identificação enviada pela empresa na mensagem `order_details`

`order`

objeto

**Obrigatório.** Esse objeto contém os seguintes campos:

String `status`

-   **Obrigatório.** O novo pedido `status`. Deve ser uma das opções: `processing`, `partially_shipped`, `shipped`, `completed`, `canceled`.

String `description`

-   **Opcional.** Texto para compartilhar informações relacionadas ao status em `order_details`. Pode ser útil ao enviar o cancelamento. O limite máximo é de 120 caracteres.

A mensagem `order_status` apresenta dois novos erros que são resumidos abaixo.

Código de erro

Descrição

`2046` – Transição de status inválida

A transição de status do pedido não é permitida. Para saber mais, clique [aqui](/docs/whatsapp/on-premises/payments-api/p2m-lite#valid-order-status-transition).

`2047` – Não é possível cancelar o pedido

Não é possível cancelar o pedido, pois o usuário já o pagou. Para saber mais, clique [aqui](/docs/whatsapp/on-premises/payments-api/p2m-lite#canceling-order).

Para saber mais sobre outros erros que podem ser retornados e como lidar com eles, consulte [API Local do WhatsApp, Erros](/docs/whatsapp/on-premises/errors).

#### Experiência de produto

Os clientes recebem cada atualização `order_status` como uma mensagem separada no tópico de conversa, que faz referência à mensagem `order_details` original conforme mostrado abaixo (à esquerda). A página de detalhes do pedido sempre mostra o status válido mais recente comunicado ao cliente usando a mensagem `order_status` conforme mostrado abaixo (à direita).

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/562339381_1339318407926810_4795669147224444480_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=EZGn_9QAVq8Q7kNvwHJkNHd&_nc_oc=AdmelVbiY6vXsJ82-qXxMEVk_3413k_ij485L9L9PLQtZjcbk0wWPTUn0jy3bQ7Ayno&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_Afn_mbyE-y3RMbpXKl4JhmIp7oEg36kEkHnSS2-Nitk0kA&oe=69610F09)

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/560623753_1339318321260152_7892260061446227056_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=KCa_oQHRWWcQ7kNvwExNPgh&_nc_oc=Adm2u4dXJErHF_mJ2s_QpscdN1gmIzM629XUByiCZn5twZLBstLJiA0dPxblNzH1Ds8&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_AfmTM9VSraO3I88lgYybR9OwYujQoI2QRT_OHOYwtde0Qw&oe=69610ABF)

#### Status e transições de pedidos com suporte

No momento, aceitamos os seguintes valores de status do pedido:

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

As transições de status do pedido são restritas para garantir a consistência da experiência do consumidor. As transições de status permitidas estão resumidas abaixo:

-   O status inicial de um pedido é sempre `pending`, que é enviado na mensagem `order_details`.-   `canceled` e `completed` são o status do terminal e não podem ser atualizados para qualquer outro status.-   O status `pending` pode mudar para qualquer um dos outros, incluindo `processing`, `shipped` e `partially-shipped`.-   `processing`, `shipped` e `partially-shipped` são status equivalentes e podem alternar entre si ou para um dos status terminal.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/564186195_1339318097926841_2291536531212610046_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=oSVGFJypd5QQ7kNvwERtp99&_nc_oc=AdkNJ7O0f__xiANdWoOKU-SlzinhfFFqJzVHZ9wjKVIzrOvJbbbIhylqPOh_R7tK4NY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=OS7jXrC7KbJQ8kXQPWqWqg&oh=00_AfmUM9ZfcDWLg9yQMMkc4wUTdqr-1J1bcvdFuybg0PPWow&oe=6961242D)

Ao enviar uma mensagem `order_status` com uma transição inválida, você receberá um webhook de erro com o código de erro `2046` e a mensagem "New order status was not correctly transitioned" ("Houve falha na transição do novo status do pedido").

#### Cancelar um pedido

É possível `canceled` um pedido enviando uma mensagem `order_status` com o status `canceled`. O cliente não pode pagar por um pedido cancelado. O cliente recebe uma mensagem `order_status`, a página de detalhes do pedido é atualizada para mostrar que o pedido foi cancelado e o botão "Continuar" é removido. O texto _opcional_ exibido abaixo de "Pedido cancelado" na página de detalhes do pedido pode ser especificado usando o campo `description` na mensagem `order_status`.

Os pedidos só poderão ser cancelados se o usuário ainda não tiver feito o pagamento. Se o usuário tiver feito o pagamento e a empresa enviar uma `order_status` com o status `canceled`, você receberá um webhook de erro com o código de erro `2047` e a mensagem "Não foi possível alterar o status do pedido para 'cancelado'".

### Etapa 7: reconciliar pagamentos

O WhatsApp não oferece suporte para reconciliações de pagamento. As empresas devem usar a conta do portal de pagamento para reconciliar os pagamentos usando o `reference_id` fornecido nas mensagens `order_details` e o `id` das transações retornadas como parte da consulta de pesquisa de pagamento.

### Etapa 8: reembolsos

A empresa pode iniciar um reembolso para um pedido. Para tal, as empresas devem fazer uma chamada POST para o ponto de extremidade `/[PHONE_NUMBER_ID]/payments_refund` com o seguinte objeto `JSON`:

```
{  "reference_id": "reference-id-value",  "speed": "normal",  "payment_config_id": "payment-config-id",  "amount": {    "currency": "INR",    "value": "100",    "offset": "100"  }}
```

A tabela a seguir descreve os campos do objeto de solicitação do ponto de extremidade de reembolsos:

Campo

Descrição

`reference_id`

string

**Obrigatório.**

Identificação de referência única para o pedido enviado na mensagem `order_details`.

`speed`

string

**Opcional.**

Velocidade pela qual o reembolso deve ser processado. Pode ser `instant` ou `normal`.  

`payment_config_id`

string

**Obrigatório.**

A configuração de pagamento do pedido enviada na mensagem `order_details`.

`amount`

objeto

**Obrigatório.**

O objeto `amount` contém os seguintes campos:

String `offset`

-   **Obrigatório.** Deve ser `100` para `INR`.

String `value`

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234.

String `currency`

-   **Obrigatório.** A moeda usada para o reembolso. No momento, o único valor aceito é INR.

As empresas devem esperar uma resposta na mesma sessão HTTP (não em uma notificação de webhook) que contenha os seguintes campos:

Campo

Descrição

`id`

string

**Obrigatório.**

A identificação única que representa o reembolso iniciado.

`status`

string

**Obrigatório.**

O status do reembolso. Pode ser `pending`, `failed` ou `completed`  

`speed_processed`

string

**Obrigatório.**

Velocidade com que o reembolso foi processado. Pode ser `instant` ou `normal`. Os PGs são os principais árbitros do modo de velocidade em que o reembolso será realizado. Isso pode NÃO corresponder sempre ao que foi incluído nos parâmetros da solicitação.

Veja um exemplo de resposta bem-sucedida:

```
{  "id": "refund-id",  "status": "pending",  "speed_processed": "normal"}
```

## Forma de pagamento via UPI preferida do comerciante

Agora, os comerciantes podem especificar até `one` app de pagamento da UPI para ser exibido no fluxo de finalização da compra. O app de pagamento preferido do comerciante aparecerá no topo da lista de apps da UPI disponíveis na tela "Escolher forma de pagamento". Para ativar esse recurso, é necessário que os parceiros especifiquem o app-id externo na mensagem order details ou order-invoice.

Observação: esse recurso está disponível em apps para consumidores na versão 2.24.21.0 e posteriores

### Atualizações na carga de detalhes do pedido

```
{  "messaging_product": "whatsapp",  "interactive": {    "action": {      "name": "review_and_pay",      "parameters": {        "payment_settings": [           {             "type": "payment_gateway",             "payment_gateway": {               "preferred_payment_methods": [                 {                   "method": "Application-ID"                 }               ]             }           }        ],      "order": ..      }    }  }}
```

### Lista de apps compatíveis:

App da UPI

Identificação do app a ser transmitido na carga de detalhes do pedido

Google Pay

gpay

PhonePe

phonepe

PayTm

paytm

BHIM

bhim

Amazon Pay

amazonpay

CRED

cred

Mobikwik

mobikwik

## Restringir opções de pagamento disponíveis

Os comerciantes podem especificar quais opções de pagamento serão exibidas no fluxo de finalização da compra entre UPI e opções da web. Isso permitirá que os comerciantes habilitem apenas a UPI ou o cartão de crédito (qualquer opção de pagamento disponível) para aceitar pagamentos de faturas.

Observação: esse recurso está disponível em apps para consumidores na versão 2.24.22.4 e posteriores

### Atualizações na carga de detalhes do pedido

```
{  "messaging_product": "whatsapp",  "interactive": {    "action": {      "name": "review_and_pay",      "parameters": {        "payment_settings": [           {             "type": "payment_gateway",             "payment_gateway": {                "enabled_payment_options": ["upi"/"web"]             },           }        ],      "order": ...      }    }  }}
```

### Lista de opções de pagamento

Opção habilitada

Experiência no fluxo de finalização da compra

upi

Apenas apps de UPI são exibidos no fluxo de finalização da compra

web

A página do portal de pagamento é carregada, e as opções de pagamento configuradas na conta do portal do comerciante serão exibidas no fluxo de finalização da compra.

Alguns portais de pagamento permitem a personalização das opções de pagamento exibidas no link de pagamento ou no fluxo de finalização da compra baseado na web. Entre em contato com o portal de pagamento para restringir as opções de pagamento no link ou página da web.

## Validação de terceiros com os portais de pagamento Razorpay e PayU

Agora, oferecemos suporte para TPV no RazorPay e no PayU. Isso permite que os comerciantes especifiquem as contas de consumidores para as quais os pedidos precisam ser pagos. Como as informações bancárias do consumidor são sensíveis, trabalhe com os portais de pagamento para obter a chave de criptografia pública e transmitir as informações de criptografia como parte da mensagem de detalhes do pedido.

Para usar esse recurso que está em fase alfa de testes, entre em contato com a equipe de pagamentos da Meta: whatsappindia-bizpayments-support@meta.com

### Atualizações na carga de detalhes do pedido para dar suporte a TPV para comerciantes do Razorpay

```
{  "messaging_product": "whatsapp",  "interactive": {    "action": {      "name": "review_and_pay",      "parameters": {        "payment_settings": [          {            "type": "razorpay",            "razorpay": {              "encrypted_payment_gateway_data": "encrypted-data"            }          }        ],        "order": {}      }    }  }}
```

O valor bruto antes da criptografia deve ficar assim:

```
{  "bank_account": {    "account_number": "account-no",    "name": "consumer-cbs-name",    "ifsc": "ifsc-code"  }}
```

### Atualizações na carga de detalhes do pedido para dar suporte a TPV para comerciantes do PayU

```
{  "messaging_product": "whatsapp",  "interactive": {    "action": {      "name": "review_and_pay",      "parameters": {        "payment_settings": [          {            "type": "payu",            "payu": {              "encrypted_payment_gateway_data": "encrypted-data"            }          }        ],        "order": {}      }    }  }}
```

O valor bruto antes da criptografia deve ficar assim:

```
{  "beneficiaryDetail" : {    "beneficiaryAccountNumber" : "account_number1|account_number2",    "ifscCode" : "ifsc1|ifsc2",  }}
```

Trabalhe com as equipes da Meta e do portal de pagamento (RazorPay ou PayU) para habilitar esse recurso, já que ainda estamos na fase de testes alfa.

## Considerações sobre segurança

As empresas devem cumprir os requisitos obrigatórios e de segurança locais na Índia. Elas não devem confiar apenas no status da transação fornecido no webhook e devem usar a API de pesquisa de pagamento para recuperar os status diretamente do WhatsApp. As empresas sempre devem validar os dados nas respostas da API ou webhooks para se protegerem contra ataques de SSRF.

## Lista de verificação para comerciantes integrados

-   Garanta que a mensagem `order_status` seja enviada ao consumidor para informá-lo sobre as atualizações de um pedido após o recebimento das atualizações de transação correspondentes.
    -   Garanta que o comerciante esteja verificado e que o contato WABA esteja marcado com o selo de verificação.
    -   Confirme se a WABA está associada ao nível adequado de mensagens iniciadas pelo comerciante (1 mil, 10 mil ou 100 mil por dia)
    -   O comerciante deve listar as informações de suporte ao cliente na tela de perfil caso o consumidor queira relatar problemas.
    -   Migre para "payment\_settings" em vez de "payment\_type" e "payment\_configuration". Essa é a forma recomendada e permite o acesso a recursos como campos de "notes" e "udf". Para ver um exemplo, [visualize as cargas acima](#step-1).
    

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)