<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent -->
<!-- Scraped: 2025-12-20T17:44:44.067Z -->

# Receber pagamentos via UPI usando o WhatsApp

Updated: 14 de nov de 2025

Para empresas que usam os gateways de pagamento Razorpay, PayU, Billdesk e Zaakpay, oferecemos uma integração mais completa com esses provedores. Consulte o [Guia de integração do gateway de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg)

Sua empresa pode permitir que os clientes paguem pelos pedidos usando todos os apps da UPI instalados em seus dispositivos, diretamente pelo WhatsApp. As empresas podem enviar aos clientes mensagens de fatura (`order_details`) e, em seguida, receber notificações sobre atualizações no status de pagamento por meio de webhooks do gateway de pagamento.

## Visão geral

Atualmente, os clientes navegam nos catálogos das empresas, adicionam produtos ao carrinho e enviam pedidos usando nosso conjunto de soluções de mensagens comerciais, que inclui [mensagem de produto único, mensagem multiproduto e página de detalhes do produto](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products).

Com a API de Pagamentos do WhatsApp, as empresas podem enviar uma fatura para que o cliente conclua o pedido com todos os apps da UPI.

## Como funciona

A empresa deve enviar uma mensagem `order_details` para o consumidor iniciar o pagamento. Essas mensagens são um novo tipo de mensagem interativa e sempre contêm os mesmos quatro componentes principais: **cabeçalho**, **corpo**, **rodapé** e **ação**. Dentro do componente de **ação**, a empresa inclui todas as informações necessárias para que o cliente conclua o pagamento.

Cada mensagem `order_details` contém um `reference_id` único fornecido pela empresa, e esse número é usado em todo o fluxo para rastrear o pedido. O `reference_id` é recuperado do link de intenção da UPI (valor da intenção de pagamento da UPI **tr**) gerado pelo gateway de pagamento para um pedido comercial.

Depois que a mensagem é enviada, a empresa aguarda por atualizações de status de pagamento ou transação diretamente no gateway de pagamento. Ao receber o sinal de pagamento de um pedido, a empresa deve repassar esse sinal ao cliente por meio de uma mensagem interativa de status do pedido (`order_status`).

É importante informar o usuário sobre o sinal de pagamento, pois essa mensagem atualiza os detalhes e a visualização do pedido, refletindo a confirmação da compra pelo comerciante. Isso será mostrado com um exemplo nas seções subsequentes.

## Fluxo de compra no app

No app para clientes do WhatsApp, o fluxo de compra tem estas etapas:

-   O cliente envia um pedido com produtos selecionados para a empresa ou a empresa identifica os produtos nos quais o cliente demonstrou interesse em comprar.
    -   Após receber o pedido ou identificar o produto, se o comerciante aceitar outras formas de pagamento, como cartões de crédito ou carteiras digitais, ele enviará uma mensagem ao cliente para saber qual forma de pagamento prefere usar no pedido.
    
    ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/560448024_1339318301260154_7696319174732839335_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Sz8r5MTHRsAQ7kNvwGORgm2&_nc_oc=Adm0vpQB4wjvqLg_ekhoeYg9uzzl-uTh4HCXQ1vfvn4VOaC4G1egdbsKcgwyWkl6458&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_Afnb8QCAaGwMqJfAUWhCLxLd8hsitfi41kvXshP9bEdL0A&oe=69612B28)
    -   Quando os consumidores quiserem pagar usando a forma de pagamento UPI, os comerciantes deverão recuperar a intenção de pagamento UPI chamando o gateway de pagamento. O comerciante precisa usar a intenção da UPI para criar mensagens com detalhes do pedido e enviá-las ao consumidor.
    
    ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561656044_1339317951260189_5557721601792790508_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=6hsQShhABRMQ7kNvwGpcErE&_nc_oc=AdkboomwrWBMVMRp58YYWsYbmsS9G1ht4GFnrhFkuDVnezB0MSSLm81iMrxJ0pIcyZI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_AfmC7c5oHiCoiYFDDy_vLTjtfCVGeLpFWsTmlhHSSBGwHA&oe=69610DC1)![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560512409_1339317934593524_639475970323241623_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=RWhkKG9ukAUQ7kNvwG6fsre&_nc_oc=Admlj7VMLcS4HPd3E0DfeiuPxy8mB4WHvejNHIqzfnwKokp4gT4zoQN0DJjqnG5K_ww&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_AfkR0r7LdKg4baNFs1sbUxc6tF0cKFN8CU1PT47pVK0RDQ&oe=6961388D)
    -   Quando o cliente tocar no botão Pagar agora/Continuar, será apresentada a opção de escolher entre o WhatsApp e outros apps de pagamento da UPI. É possível escolher qualquer opção da UPI para pagar o pedido.
    
    ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565098139_1339318224593495_6825114181877692125_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=pkqYzF3bn5AQ7kNvwGR5_49&_nc_oc=Adnr3hFG8hz7jF11yk4he018lJV6HU9aQKfYY80gE4RMaUHAdPXktBSgErN5pM5GdkU&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_AfkCD2lDbeBQ_ChAJVM4s7lHbeYlKxTDhrlFj88fvyW6NA&oe=696136ED)![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561624481_1339317921260192_2024095528920144172_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=pDLjVsdJL9IQ7kNvwFHkeWr&_nc_oc=AdkHqS93p3e-BjZLM3Ejt4TOZEmCSqPwngcAoUB4L5tpMYcqhScGIqwYvTSDA70stuo&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_AfnH6tpvpDNH7T1ZaC5ObdqmFJUThMiPS5v2zNAD8Fuo7Q&oe=696124AA)
    -   O cliente realiza o pagamento do pedido, e a forma de pagamento é salva para uso futuro e selecionada automaticamente na próxima transação. Além disso, a tela de detalhes do pedido continuará exibindo “Pedido pendente” até que o comerciante envie a mensagem interativa de status do pedido.
    
    ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/566231819_1339318157926835_1506879346444592490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=KAp10ofa6oAQ7kNvwESQzey&_nc_oc=Adk3f9NV6-l1VFjOGaaNyVFxrWhAI4KoUyA_Kmzefm5gOAZDm3-tDHMypefWpoqVllQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_Aflk9JarbGpSsjRe1WTFOmKt9nRb9pTUAKqVvdqv_6sFUg&oe=696106C1)![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/561256871_1339318141260170_8139516040489296125_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=B5v8zENW-yMQ7kNvwH-n3L7&_nc_oc=AdmGT-FoUTnfUbTJaGGossdqtP3_EI2LjWtleVJIxYgbg4c-UwhUyyVuuQ4pGwvkm5g&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_AfnS7NFjfNsUwSK_oczWJlLK6Hnl92vmBY0GY9b3ItJEUw&oe=696130E5)
    -   Após a conclusão do pagamento, a empresa recebe uma notificação do gateway de pagamento, e o comerciante precisa enviar atualizações de status do pedido para o cliente, notificando sobre o progresso do pedido. Isso atualizará as CTAs da mensagem e a tela de detalhes do pedido, além da descrição do status do pedido.
    
    ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561598657_1339318297926821_8076170086676362480_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=hcmtuLGhnvYQ7kNvwFeDFRm&_nc_oc=AdnPjdk1KekHnqpJVwW1mNKuFmY_YMvN8q9fHv8P7jbHZrpxzEOZDS_ctekPDj9MEkE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_Afn7M9Us-WcvywawjDEklsF5tSg6Lu6WwMGZjaVpdjubKA&oe=69612C60)![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561240350_1339318304593487_8250251904722624137_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=d0Dhug3kZJoQ7kNvwE8Ejvb&_nc_oc=Adn3P1DmHWDvGT_6WICGTMs6Xpz-8LRmG3xFmCGZraBYibCYo-yvTyr5NiUVgnbtI0A&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_Afl2Y5UwYFPKrJzSq4qEVvcQU8TFq4Aohw9KjYVx2faBkQ&oe=69610773)![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561088360_1339318144593503_6410973170221153078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=CAaf7r7WdWMQ7kNvwGyG-1k&_nc_oc=AdmEm_7eSYhukae0MklY3jgiQ1TYVcwpBnotWNZ9u8CXGQ2snrQ5Jsoo2zoJDeIpKgc&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_AfnGcf5xit_FA8GIKq_gGDopc2M1w6mTpnGTLhsHH_iTow&oe=69610DA2)
    

## Antes de começar

Para receber pagamentos via UPI no WhatsApp, os comerciantes precisam configurar o VPA no Gerenciador do WhatsApp Business usando a opção de forma de pagamento direta.

Cada configuração deve ter um nome exclusivo, um código de categorização do comerciante (MCC), um código de finalidade e identificadores VPA, conforme mostrado abaixo. Uma empresa pode ter várias configurações de pagamento, mas, para cada pedido, o comerciante deve especificar qual configuração será usada para o pagamento. Veja o campo `payment_configuration` na mensagem `order_details`.

```
[  {    "name": "unique name 1",    "merchantVpa": "handle_1@paytm",    "merchantMcc": "merchant categorization code",    "merchantPurposeCode": "purpose code"  },  {    "name": "unique name 2",    "merchantVpa": "handle_2@paytm",    "merchantMcc": "merchant categorization code",    "merchantPurposeCode": "purpose code"  },]
```

O `name` de cada tipo de pagamento deve ser único. O `name` será usado para fazer referência às configurações específicas de cada tipo de pagamento. Se o WhatsApp não conseguir encontrar o nome da configuração de pagamento, o usuário não poderá efetuar o pagamento ao receber a mensagem `order_details`. `mcc` refere-se a um [código de categorização do comerciante](https://l.facebook.com/l.php?u=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMerchant_category_code&h=AT3FJy5yTDCnJy6TKa4haIxBPJnPokCVLbJA1ivQhCxDOa8gbu3mEOAcD99dYWsZiBYu6NaJ--F4Ji0g-hA3fiPni1eUOAw-fhptN8U7sOtFyjJUKHQ7oAJo2XOZnrYzOBNfubw9WXpmOKcb8jCmtY8JZ3g) para os itens no pedido. `upi_pc` refere-se à finalidade da transação. Confira alguns exemplos de código abaixo:

Código

Título

00

Padrão

01

SEMI

02

AMC

03

Viagem

04

Hotelaria

05

Hospital

06

Telecomunicações

07

Seguros

08

Educação

09

Presentes

10

Outros

Se o comerciante ou parceiro não souber o código MCC e o código de finalidade, poderá entrar em contato com o gateway de pagamento para obter essas informações, pois é o próprio gateway que define esses valores com base no tipo de empresa ao gerar os VPAs comerciais.

## Gerenciar suas formas de pagamento (recurso beta)

A configuração de pagamento por autoatendimento permite adicionar várias configurações de pagamento ao seu perfil do Gerenciador do WhatsApp. Cada configuração de pagamento terá seu próprio identificador UPI (VPA), código MCC e código de finalidade (para produtos físicos), permitindo que os comerciantes recebam pagamentos de diferentes categorias em contas UPI distintas. Após a configuração, o comerciante pode enviar aos clientes mensagens de fatura (`order_details`) usando a configuração de pagamento correspondente para receber os valores.

### Pré-requisitos

O recurso Gerenciar formas de pagamento está em versão beta. Por isso, entre em contato com a equipe de Business Engineering para permitir que comerciantes/parceiros acessem a página no portal do Gerenciador do WhatsApp Business.

### Etapas para vincular a configuração de pagamento de um provedor de serviços comerciais

Você pode criar uma configuração de pagamento para uma conta do WhatsApp Business na página "Configurações de pagamento", na seção "Índia", do [Gerenciador de Negócios do WhatsApp](https://business.facebook.com/wa/manage/home).

Depois de vincular a configuração de pagamento, faça a integração com as APIs de Pagamentos abaixo. Isso permitirá que você envie uma mensagem `order_details` aos clientes com a configuração para receber pagamentos.

### Etapas para desvincular a configuração de pagamento

Observação: antes de realizar a desvinculação, verifique se nenhuma nova mensagem de pedido solicitando pagamento ao cliente foi enviada usando a configuração de pagamento que você pretende remover.

## Etapas de integração

As etapas descritas abaixo partem do pressuposto de que a empresa está prestes a enviar a mensagem de detalhes do pedido ao cliente.

O diagrama de sequência a seguir exibe o fluxo de integração típico da API de Pagamentos do WhatsApp: ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/565726178_1339318457926805_1081112689465053218_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=7Ljj55JrRUoQ7kNvwH7g0Sc&_nc_oc=AdnKZJcp58urDcWIOPI4fR02bqQrHJg54b-H8DhC0pc8RnSRoTDOQ5HekqgtQ7r92QA&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_Afn6jeb5WcuOoMXY3sUvNeFfk3HMjViV6WReMnPkqY7LGA&oe=69613BBF)

### Etapa 1: obter a intenção da UPI do gateway de pagamento

Assim que o cliente demonstrar interesse em comprar um item e fazer o pagamento com a UPI, o comerciante deverá chamar o gateway de pagamento para criar uma intenção de pagamento da UPI. Confira um exemplo de link de intenção da UPI:

```
upi://pay?pa=cfsukoonaa@yesbank&pn=Sukoon&tr=877376394&  am=10.00&cu=INR&mode=00&purpose=00&mc=5399&tn=877376394
```

O comerciante deve extrair o valor `tr` do URI acima e usá-lo como identificador de referência na mensagem interativa da fatura (`order_details`).

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

O identificador único do pedido ou da fatura fornecido pela empresa. Essa string não pode estar vazia e só pode conter letras em inglês, números, sublinhados, traços ou pontos, além de não poder exceder 35 caracteres.

O `reference_id` deve ser único para cada mensagem `order_details` da mesma empresa. Se o parceiro quiser enviar várias mensagens de order\_details para o mesmo pedido, fatura ou item semelhante, recomendamos incluir um número de sequência no `reference_id` (por exemplo, <order-or-invoice-id>-<sequence-number>) para garantir a exclusividade do `reference_id`.

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

-   **Obrigatório.** Código postal de seis dígitos do endereço de entrega.

`payment_type`

**Obrigatório.**

Deve ser "upi".

`payment_configuration`

**Obrigatório.**

O nome da configuração de pagamento predefinida a ser usada neste pedido, que não deve exceder 60 caracteres.

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

object

**Obrigatório.**

Consulte [Objeto de pedido](#ordobject) para saber mais.

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

object

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

string `country_of_origin`

-   **Opcional** se `catalog_id` não estiver presente. O país de origem do produto

string `importer_name`

-   **Opcional** se `catalog_id` não estiver presente. Nome da empresa importadora

string `importer_adress`

-   **Opcional** se `catalog_id` não estiver presente. Endereço da empresa importadora

`subtotal`

object

**Obrigatório.**

O valor **deve ser igual** a `order.amount.value` multiplicado por `order.amount.quantity`.

Consulte a descrição de `total_amount` para ver explicações sobre os campos `offset` e `value`

Os seguintes campos fazem parte do objeto `subtotal`:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser `100` para `INR`

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234

`tax`

object

**Obrigatório.**

As informações fiscais do pedido que contêm os seguintes campos:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser `100` para `INR`

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234

String `description`

-   **Opcional.** O limite máximo é de 60 caracteres

`shipping`

object

**Opcional.**

O custo de envio do pedido. O objeto contém os seguintes campos:

`offset` é um número inteiro

-   **Obrigatório.** Deve ser `100` para `INR`

`value` é um número inteiro

-   **Obrigatório.** Número inteiro positivo que representa o valor do montante multiplicado pelo fator de ajuste. Por exemplo, ₹12,34 tem o valor 1234

String `description`

-   **Opcional.** O limite máximo é de 60 caracteres

`discount`

object

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

object

**Opcional.**

O identificador único do catálogo do Facebook usado pela empresa.

`expiration`

object

**Opcional.**

Validade do pedido. A empresa deve definir os seguintes campos no objeto:

String `timestamp` – registro de data e hora UTC em segundos do momento em que o pedido deve expirar. O limite mínimo é de 300 segundos

String `description` – texto que explica a validade. O limite máximo é de 120 caracteres.

#### Objeto de imagem de item

Objeto

Descrição

String `link`

**Obrigatório.** Um link para a imagem que será exibida ao usuário. Deve ser `image/jpeg` ou `image/png` e 8 bits, RGB ou RGBA. Segue os mesmos requisitos de imagem em [mídia](/documentation/business-messaging/whatsapp/business-phone-numbers/media#supported-media-types)

No final do processo, o objeto interativo terá aparência semelhante a esta em uma integração baseada em catálogo:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "link": "http(s)://the-url",        "provider": {          "name": "provider-name"        }      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_type": "upi",        "payment_configuration": "unique-payment-config-id",        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "catalog_id": "the-catalog_id",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "retailer_id": "1234567",              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
```

Para uma integração não baseada em catálogo, ou seja, quando o catálogo-id não está presente, um exemplo de carga é o seguinte:

```
{  "interactive": {    "type": "order_details",    "header": {      "type": "image",      "image": {        "id": "your-media-id"      }    },    "body": {      "text": "your-text-body-content"    },    "footer": {      "text": "your-text-footer-content"    },    "action": {      "name": "review_and_pay",      "parameters": {        "reference_id": "reference-id-value",        "type": "digital-goods",        "payment_type": "upi",        "payment_configuration": "unique-payment-config-id",        "currency": "INR",        "total_amount": {          "value": 21000,          "offset": 100        },        "order": {          "status": "pending",          "expiration": {            "timestamp": "utc_timestamp_in_seconds",            "description": "cancellation-explanation"          },          "items": [            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            },            {              "name": "Product name, for example bread",              "amount": {                "value": 10000,                "offset": 100              },              "quantity": 1,              "sale_amount": {                "value": 100,                "offset": 100              },              "country_of_origin": "country-of-origin",              "importer_name": "name-of-importer-business",              "importer_address": {                "address_line1": "B8/733 nand nagri",                "address_line2": "police station",                "city": "East Delhi",                "zone_code": "DL",                "postal_code": "110093",                "country_code": "IN"              }            }          ],          "subtotal": {            "value": 20000,            "offset": 100          },          "tax": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "shipping": {            "value": 1000,            "offset": 100,            "description": "optional_text"          },          "discount": {            "value": 1000,            "offset": 100,            "description": "optional_text",            "discount_program_name": "optional_text"          }        }      }    }  }}
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

Para ver todos os outros erros que podem ser retornados e as orientações sobre como tratá-los, consulte [API de Nuvem do WhatsApp, Códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes).

### Etapa 5: o consumidor paga o pedido

Os consumidores podem pagar usando a forma de pagamento do WhatsApp ou qualquer app compatível com a UPI instalado no dispositivo.

### Etapa 6: receber notificações sobre atualizações no status da transação do gateway de pagamento

As empresas recebem atualizações sobre a fatura por meio de webhooks do gateway de pagamento, quando o status da transação iniciada pelo usuário é alterado. O identificador exclusivo (reference-id transmitido na mensagem `order_details`) pode ser usado para associar a transação à fatura do consumidor ou à mensagem interativa de detalhes do pedido.

Consulte a documentação do seu gateway de pagamento para verificar os sinais de pagamento exatos. Caso não esteja recebendo webhooks do seu gateway de pagamento, entre em contato com ele para ativar esse recurso.

### Etapa 7: atualizar o status do pedido

Ao receber os sinais de transação do gateway de pagamento por meio do webhook, a empresa deve atualizar o status do pedido para manter o usuário informado. No momento, aceitamos os seguintes valores de status do pedido:

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/565718019_1339318281260156_7557207642198018127_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=3bNgKUyQ0NcQ7kNvwFmocLj&_nc_oc=AdkYAoB9nGFp-tAZbEBy0FElmn9ZdjiH-bRPDvq-Bzgz0qXH33nxrs26erI85R-K6QM&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7iwJtW3PKX0IaYe4hR9rzw&oh=00_AfmsGG9wwJUjCFu4Lc3IIA_derjt_e66_u7MXowSjerPrA&oe=69611CB5)

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

Sempre que receber atualizações de transações relacionadas a um pedido, o comerciante deve enviar uma mensagem ao consumidor. já que a mensagem order\_details e a experiência na tela de detalhes do pedido dependem dessas atualizações de status.

### Etapa 8: reconciliar pagamentos

As empresas devem usar os extratos bancários para reconciliar os pagamentos com o `reference_id` fornecido nas mensagens `order_details`.

## Forma de pagamento via UPI preferida do comerciante

Agora, os comerciantes podem especificar até `one` app de pagamento da UPI para ser exibido no fluxo de finalização da compra. O app de pagamento preferido do comerciante aparecerá no topo da lista de apps da UPI disponíveis na tela "Escolher forma de pagamento". Para ativar esse recurso, é necessário que os parceiros especifiquem o app-id externo na mensagem order details ou order-invoice.

Observação: esse recurso está disponível em apps para consumidores na versão 2.24.21.0 e posteriores

### Atualizações na carga de detalhes do pedido

```
{  "messaging_product": "whatsapp",  "interactive": {    "action": {      "name": "review_and_pay",      "parameters": {         "preferred_payment_methods": [             {                "method": "Application-ID"             }          ]          ....      }      "order": ..      }    }  }}
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

Amazon Pay

amazonpay

CRED

cred

Mobikwik

mobikwik

## Lista de verificação para comerciantes integrados

-   Garanta que a mensagem `order_status` seja enviada ao consumidor para informá-lo sobre as atualizações de um pedido após o recebimento das atualizações de transação correspondentes.
    -   Garanta que o comerciante esteja verificado e que o contato WABA esteja marcado com o selo de verificação.
    -   Confirme se a WABA está associada ao nível adequado de mensagens iniciadas pelo comerciante (1 mil, 10 mil ou 100 mil por dia)
    -   O comerciante deve listar as informações de suporte ao cliente na tela de perfil caso o consumidor queira relatar problemas.
    

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)