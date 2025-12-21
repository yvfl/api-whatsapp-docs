<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/dynamic-vpa -->
<!-- Scraped: 2025-12-20T17:44:52.873Z -->

# Receber pagamentos via UPI usando o WhatsApp (Recomendado)

Updated: 14 de nov de 2025

Para empresas que usam os portais de pagamento Razorpay ou PayU, oferecemos uma integração mais completa com esses provedores. Consulte o [Guia de integração do gateway de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg)

Sua empresa pode permitir que os clientes paguem pelos pedidos usando todos os apps da UPI instalados em seus dispositivos, diretamente pelo WhatsApp. As empresas podem enviar aos clientes mensagens de fatura (`order_details`) e, em seguida, receber notificações sobre atualizações no status de pagamento por meio de webhooks do gateway de pagamento.

## Visão geral

Atualmente, os clientes navegam nos catálogos das empresas, adicionam produtos ao carrinho e enviam pedidos usando nosso conjunto de soluções de mensagens comerciais, que inclui [mensagem de produto único, mensagem multiproduto e página de detalhes do produto](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products).

Com a API de Pagamentos do WhatsApp, as empresas podem enviar uma fatura para que o cliente conclua o pedido com todos os apps da UPI.

## Como funciona

A empresa deve enviar uma mensagem `order_details` para o consumidor iniciar o pagamento. Essas mensagens são um novo tipo de mensagem interativa e sempre contêm os mesmos quatro componentes principais: **cabeçalho**, **corpo**, **rodapé** e **ação**. Dentro do componente de **ação**, a empresa inclui todas as informações necessárias para que o cliente conclua o pagamento.

Uma mensagem do tipo order\_details inclui os seguintes campos que vale a pena observar:

-   `upi_intent_link` – Campos fornecidos pelo seu portal de pagamento que indicam o destino do pagamento.-   `reference_id` – Usado para rastrear o ciclo de vida do pedido. Os status de pagamento são publicados nessa identificação. Pode ser a identificação do pedido ou a identificação da transação usada para criar a upi-intent no portal de pagamento.

Depois que a mensagem é enviada, a empresa aguarda por atualizações de status de pagamento ou transação diretamente no portal de pagamento. Ao receber o sinal de pagamento de um pedido, a empresa deve repassar esse sinal por meio de uma mensagem interativa de status do pedido (`order_status`).

É importante informar o usuário sobre o sinal de pagamento, pois essa mensagem atualiza os detalhes e a visualização do pedido, refletindo a confirmação da compra pelo comerciante. Isso será mostrado com um exemplo nas seções subsequentes.

## Fluxo de compra no app

No app para clientes do WhatsApp, o fluxo de compra tem estas etapas:

-   O cliente envia um pedido com produtos selecionados para a empresa ou a empresa identifica os produtos nos quais o cliente demonstrou interesse em comprar.
    -   Após receber o pedido ou identificar o produto, se o comerciante aceitar outras formas de pagamento, como cartões de crédito ou carteiras digitais, ele enviará uma mensagem ao cliente para saber qual forma de pagamento prefere usar no pedido.
    
    ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/560448024_1339318301260154_7696319174732839335_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Sz8r5MTHRsAQ7kNvwGORgm2&_nc_oc=Adm0vpQB4wjvqLg_ekhoeYg9uzzl-uTh4HCXQ1vfvn4VOaC4G1egdbsKcgwyWkl6458&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_Afn8zSJripqUXXWhY-PjiwEECqPQSg4ga4alh9tVnTGong&oe=69612B28)
    -   Quando os consumidores quiserem pagar usando a forma de pagamento UPI, os comerciantes deverão recuperar a intenção de pagamento UPI chamando o portal de pagamento. O comerciante precisa usar a intenção da UPI para criar mensagens com detalhes do pedido e enviá-las ao consumidor.
    
    ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561656044_1339317951260189_5557721601792790508_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=6hsQShhABRMQ7kNvwGpcErE&_nc_oc=AdkboomwrWBMVMRp58YYWsYbmsS9G1ht4GFnrhFkuDVnezB0MSSLm81iMrxJ0pIcyZI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AfnBVE4D2YMkufOPj14T1qejxa6DMySnMQJMndLe6An_Og&oe=69610DC1)![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560512409_1339317934593524_639475970323241623_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=RWhkKG9ukAUQ7kNvwG6fsre&_nc_oc=Admlj7VMLcS4HPd3E0DfeiuPxy8mB4WHvejNHIqzfnwKokp4gT4zoQN0DJjqnG5K_ww&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_Afkuoo8Jum3jpChL8hWbJRHxTy0qqUsZ7XDGZQvjtjFLqw&oe=6961388D)
    -   Quando o cliente tocar no botão Pagar agora/Continuar, será apresentada a opção de escolher entre o WhatsApp e outros apps de pagamento da UPI. É possível escolher qualquer opção da UPI para pagar o pedido.
    
    ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565098139_1339318224593495_6825114181877692125_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=pkqYzF3bn5AQ7kNvwGR5_49&_nc_oc=Adnr3hFG8hz7jF11yk4he018lJV6HU9aQKfYY80gE4RMaUHAdPXktBSgErN5pM5GdkU&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AfmSSdz_U_59_0Ql7Ptf-i_tgakZr88nc9sRYEFNrnSRzQ&oe=696136ED)![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561624481_1339317921260192_2024095528920144172_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=pDLjVsdJL9IQ7kNvwFHkeWr&_nc_oc=AdkHqS93p3e-BjZLM3Ejt4TOZEmCSqPwngcAoUB4L5tpMYcqhScGIqwYvTSDA70stuo&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AfkDj2_ipKYykPk4IhbyZbzfsk6G_TeXLdMQkUkrPQcP1w&oe=696124AA)
    -   O cliente realiza o pagamento do pedido, e a forma de pagamento é salva para uso futuro e selecionada automaticamente na próxima transação. Além disso, a tela de detalhes do pedido continuará exibindo “Pedido pendente” até que o comerciante envie a mensagem interativa de status do pedido.
    
    ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/566231819_1339318157926835_1506879346444592490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=KAp10ofa6oAQ7kNvwESQzey&_nc_oc=Adk3f9NV6-l1VFjOGaaNyVFxrWhAI4KoUyA_Kmzefm5gOAZDm3-tDHMypefWpoqVllQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AfnqkCSIiNzwtrohAsm54aTAkvRX7Mah3QHzQNOaJ11Dvg&oe=696106C1)![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/561256871_1339318141260170_8139516040489296125_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=B5v8zENW-yMQ7kNvwH-n3L7&_nc_oc=AdmGT-FoUTnfUbTJaGGossdqtP3_EI2LjWtleVJIxYgbg4c-UwhUyyVuuQ4pGwvkm5g&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AfnNiRoE-TJHS7FMx6gL1uc5ot7bBidYQacBafBgyqTBqg&oe=696130E5)
    -   Após a conclusão do pagamento, a empresa recebe uma notificação do gateway de pagamento, e o comerciante precisa enviar atualizações de status do pedido para o cliente, notificando sobre o progresso do pedido. Isso atualizará as CTAs da mensagem e a tela de detalhes do pedido, além da descrição do status do pedido.
    
    ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561598657_1339318297926821_8076170086676362480_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=hcmtuLGhnvYQ7kNvwFeDFRm&_nc_oc=AdnPjdk1KekHnqpJVwW1mNKuFmY_YMvN8q9fHv8P7jbHZrpxzEOZDS_ctekPDj9MEkE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_Afl2FruhUdRvrv2q1Q36bwXmaa_ZWQ2Sb_v7WdmeeQkNhQ&oe=69612C60)![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561240350_1339318304593487_8250251904722624137_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=d0Dhug3kZJoQ7kNvwE8Ejvb&_nc_oc=Adn3P1DmHWDvGT_6WICGTMs6Xpz-8LRmG3xFmCGZraBYibCYo-yvTyr5NiUVgnbtI0A&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AflPbpPBOoatixBAipoHufEj1_N2DZyManU_n54cCdN8cQ&oe=69610773)![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561088360_1339318144593503_6410973170221153078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=CAaf7r7WdWMQ7kNvwGyG-1k&_nc_oc=AdmEm_7eSYhukae0MklY3jgiQ1TYVcwpBnotWNZ9u8CXGQ2snrQ5Jsoo2zoJDeIpKgc&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AfmA1koXaP2b7f_Ft7f2ODiGVd6DcIdk83Q_uKZfVIGl0Q&oe=69610DA2)
    

## Etapas de integração

As etapas descritas abaixo partem do pressuposto de que a empresa está prestes a enviar a mensagem de detalhes do pedido ao cliente.

O diagrama de sequência a seguir exibe o fluxo de integração típico da API de Pagamentos do WhatsApp: ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560183089_1339318451260139_9205236297705447401_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=gDK0-bdCFCsQ7kNvwFNDw6M&_nc_oc=AdmHWFi5vbJWsawovIgya-LDSepO3i6sb36QiMxtmZWjqZW6XawYMGAWA7Nqw5Xy9g8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AfmjtPOLxjDhlsZHy8EbbvfSpRHC51R7XUDktlvjQo7CMw&oe=69611713)

### Etapa 1: obter a intenção da UPI do portal de pagamento

Depois que o consumidor demonstrar interesse em comprar um item usando a forma de pagamento UPI, o comerciante precisará chamar o portal de pagamento para criar uma intenção de UPI. Veja o exemplo do link de intenção de UPI:

```
upi://pay?pa=abc@psp&pn=ABC&tr=877376394&  am=10.00&cu=INR&mode=00&purpose=00&mc=5399&tn=877376394
```

O comerciante/parceiro poderia enviar toda a intenção da UPI, conforme aparece na carga do tipo `upi_intent_link`. Essas alterações serão discutidas em detalhes abaixo.

### Etapa 2: criar o objeto interativo

Para enviar uma mensagem `order_details`, as empresas precisam montar um [objeto interativo](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#interactive-object) do tipo `order_details` com estes componentes:

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

-   **Obrigatório**. Deve ser "review\_and\_pay"

Objeto `parameters`

-   Para mais informações, consulte [Objeto de parâmetros](#paramobject).

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

O tipo de produto a ser pago neste pedido. As opções compatíveis no momento são `digital-goods` e `physical-goods`

`beneficiaries`

array

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

-   **Obrigatório.** Código postal de 6 dígitos do endereço de entrega.

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

É possível transmitir a intenção de UPI como está ou analisar os parâmetros da intenção de UPI, transmitindo-os em uma estrutura JSON. Aceitamos ambos os formatos. Veja as duas variantes de objetos de configurações de pagamento:

##### Objeto de configurações de pagamento para link de intenção da UPI

Objeto

Descrição

`type`

string

**Obrigatório.**

Deve ser definido como **“upi\_intent\_link”**

`upi_intent_link`

objeto

**Obrigatório.**

Um objeto que descreve as informações da conta de pagamento:

String `link`

-   **Obrigatório.** A intenção de UPI gerada a partir do portal de pagamento. A intenção da UPI oferece suporte somente aos seguintes atributos separados por "`&`": pa, pn, mc, purpose e tr

Exemplo: `upi://pay?pa=merchant_vpa&pn=Merchant_Name&mc=merchant_category_code&purpose=purpose_code&tr=pg_generated_id`

#### Objeto de pedido

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

-   **Opcional.** Imagem personalizada do item que será exibida ao usuário. Consulte [Objeto de imagem de item](#item_image_object) para saber mais.

O uso desse campo de imagem limitará a matriz de itens a um máximo de 10 itens e não poderá ser usado com `retailer_id` ou `catalog_id`.

Objeto `amount` com valor e fator de ajuste — consulte o campo de valor total acima

-   **Obrigatório.** O preço por item

Objeto de quantia `sale_amount`

-   **Opcional.** O preço com desconto de cada item. Esse valor deve ser menor que o original. Se for incluído, esse campo será usado para calcular o valor do subtotal

`quantity` é um número inteiro

-   **Obrigatório.** O número de itens no pedido, este campo não pode conter valores decimais e deve ser um número inteiro.

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

**Obrigatório.** Um link para a imagem que será exibida ao usuário. Deve ser `image/jpeg` ou `image/png` e 8 bits, RGB ou RGBA. Segue os mesmos requisitos de imagem em [mídia](/documentation/business-messaging/whatsapp/business-phone-numbers/media#supported-media-types).

No final do processo, o objeto interativo terá aparência semelhante a esta para um comerciante em uma integração baseada em catálogo de tipo de intenção de upi de comerciante:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "link": "your-media-url-link"      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_settings": [          {            "type": "upi_intent_link",            "upi_intent_link": {              "link": "upi://pay?pa=merchant_vpa&pn=merchant%20Name&mc=mc_code&purpose=purpose_code&tr=transaction_record"            }          }        ],        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            },            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
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

Consulte o nosso guia de integração do PG para ver os sinais de pagamento exatos. [Cashfree](/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree) e [CCAvenue](/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree)

### Etapa 7: atualizar o status do pedido

Ao receber os sinais de transação do gateway de pagamento por meio do webhook, a empresa deve atualizar o status do pedido para manter o usuário informado. No momento, aceitamos os seguintes valores de status do pedido:

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/565718019_1339318281260156_7557207642198018127_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=3bNgKUyQ0NcQ7kNvwFmocLj&_nc_oc=AdkYAoB9nGFp-tAZbEBy0FElmn9ZdjiH-bRPDvq-Bzgz0qXH33nxrs26erI85R-K6QM&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=4URHFgx38YBXTsJwajKoVA&oh=00_AfmyJX0ol44lfXa3AB8OpllS-pw4N-T3HEiCA3ghK8eXcg&oe=69611CB5)

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

Texto opcional para compartilhar informações relacionadas ao status em `order_details`. Pode ser útil ao enviar o cancelamento. O limite máximo é de 120 caracteres.

Sempre que receber atualizações de transações relacionadas a um pedido, o comerciante deve enviar uma mensagem ao consumidor, já que a mensagem order\_details e a experiência na tela de detalhes do pedido dependem dessas atualizações de status.

## Considerações sobre segurança

As empresas devem cumprir os requisitos obrigatórios e de segurança locais na Índia. Elas não devem confiar apenas no status da transação fornecido no webhook e devem usar a API de pesquisa de pagamento para recuperar os status diretamente do WhatsApp. As empresas sempre devem validar os dados nas respostas da API ou webhooks para se protegerem contra ataques de SSRF.

## Lista de verificação para comerciantes integrados

-   Garanta que a mensagem `order_status` seja enviada ao consumidor para informá-lo sobre as atualizações de um pedido após o recebimento das atualizações de transação correspondentes.
    -   Garanta que o comerciante esteja verificado e que o contato WABA esteja marcado com o selo de verificação.
    -   Confirme se a WABA está associada ao nível adequado de mensagens iniciadas pelo comerciante (1 mil, 10 mil ou 100 mil por dia)
    -   O comerciante deve exibir as informações do suporte ao cliente na tela do perfil caso o consumidor queira relatar problemas.
    

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)