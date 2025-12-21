<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products -->
<!-- Scraped: 2025-12-20T17:44:07.101Z -->

# Compartilhar produtos com usuários do WhatsApp

Updated: 6 de nov de 2025

Há várias formas de compartilhar produtos com os clientes.

## Mensagens de catálogo

Com as mensagens de catálogo, é possível mostrar todo o seu inventário de produtos no WhatsApp.

Essas mensagens exibem uma imagem de cabeçalho da miniatura do produto à sua escolha, um texto personalizado, um título fixo, um subtítulo fixo e um botão **Ver catálogo**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/353831413_931793014769642_1489938023342123500_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=8_I9WmzCeqUQ7kNvwG8b2iN&_nc_oc=AdkX1eGuBBixp4gGVVRfnKHXhRDNYvYA9O3OEWu7gCDwAZzclpJ_NYLAsbFhnU3iKvo&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AflZpevE6h2VW7isx5FsnoPDd-ISRx5GQeCfd6X2n2GK8g&oe=69612815)

Quando um cliente toca no botão **Ver catálogo**, seu catálogo de produtos aparece no WhatsApp.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/353808079_9331603410246288_3629219693038191737_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Da759WHP77YQ7kNvwF9y-UB&_nc_oc=Adll81mvza4Baf2pIiiqNzSFtDK2SW5j7AL9zqCYrv-YedeMgyIypTNUHLyOy2JOkEA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AfmZYW3q_Xy33iCLeovEWJKszeCf5DAzJdT-6mI_KMLjmA&oe=69611D28)

### Requisitos

Você precisa ter um [inventário carregado na Meta](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/upload-inventory) em um catálogo de comércio eletrônico [conectado à sua conta do WhatsApp Business](https://www.facebook.com/business/help/158662536425974).

### Sintaxe da solicitação

Use o ponto de extremidade **WhatsApp Business Phone Number > Messages** para enviar uma mensagem de catálogo.

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```

### Corpo do post

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<TO>",
  "type": "interactive",
  "interactive" : {
    "type" : "catalog_message",
    "body" : {
      "text": "<BODY_TEXT>"
    },
    "action": {
      "name": "catalog_message",

      /* Parameters object is optional */
      "parameters": {
        "thumbnail_product_retailer_id": "<THUMBNAIL_PRODUCT_RETAILER_ID>"
      }
    },

    /* Footer object is optional */
    "footer": {
      "text": "<FOOTER_TEXT>"
  }
}
```

### Propriedades

Espaço reservado

Descrição

Exemplo de valor

`<BODY_TEXT>`

_String_

**Obrigatório.**

  
Texto a ser exibido no corpo da mensagem.

  
Máximo de 1.024 caracteres.

`Hello! Thanks for your interest. Ordering is easy. Just visit our catalog and add items to purchase.`

`<FOOTER_TEXT>`

_String_

**Opcional.**

  
Texto a ser exibido no rodapé da mensagem.

  
Máximo de 60 caracteres.

`Best grocery deals on WhatsApp!`

`<THUMBNAIL_PRODUCT_RETAILER_ID>`

_String_

**Opcional.**

  
Número SKU do item. Marcado como **identificação do conteúdo** no Gerenciador de Comércio.

  
A miniatura deste item será usada como a imagem de cabeçalho da mensagem.

  
Se o objeto `parameters` for omitido, será usada a imagem do primeiro item do seu catálogo.

`2lc20305pt`

`<TO>`

_String_

Número de telefone do cliente.

`+16505551234`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v17.0/106540352242922/messages' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "+16505551234",  "type": "interactive",  "interactive": {    "type": "catalog_message",    "body": {      "text": "Hello! Thanks for your interest. Ordering is easy. Just visit our catalog and add items to purchase."    },    "action": {      "name": "catalog_message",      "parameters": {        "thumbnail_product_retailer_id": "2lc20305pt"      }    },    "footer": {      "text": "Best grocery deals on WhatsApp!"    }  }}'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI0ODVEREUwQzEzQkVBRjQ1RUUA"    }  ]}
```

## Mensagens de modelo de catálogo

As mensagens de modelo de catálogo contêm um botão que, quando tocado, exibe seu catálogo de produtos no WhatsApp.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/354047426_125269187252102_7173148343631613735_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ercU4R82IO8Q7kNvwHIDRV2&_nc_oc=AdntBmh_C-dk_ym_1iQMDenpdKHh4_99UjES6YE9gVOGPu7mWg9aldTWt743UBMTPhc&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AfnYDeyJRpTCEqlygQ2y3wHlqs8o8f_WzsrfS_B9Lw1iow&oe=69611766)

Consulte [Modelos de catálogo](/documentation/business-messaging/whatsapp/templates/marketing-templates/catalog-templates) para saber como criar e enviar esses modelos.

## Mensagens com link para o catálogo

Você pode direcionar o usuário para o catálogo completo de produtos ao criar um link wa.me e incluí-lo em uma [mensagem de texto](/documentation/business-messaging/whatsapp/messages/send-messages#text-messages) padrão. Ao enviar uma mensagem de texto, você pode usar a `preview_url` opcional definida como `true` para renderizar um conjunto de miniaturas do catálogo de produtos de qualquer URL na string `body` da mensagem.

Se você [desabilitar o catálogo](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/set-commerce-settings#enable-disable-catalog), os links wa.me e o botão **Ver catálogo** nas mensagens com um link para os produtos exibirão o aviso **Link de catálogo inválido** quando tocados.

Para criar um link wa.me, anexe o número de telefone comercial da empresa, incluindo o código do país, ao final da string a seguir:

```
https://wa.me/c/
```

Por exemplo:

```
https://wa.me/c/15555455657
```

## Modelos com botão de finalização da compra

Os modelos de botão de finalização de compra permitem que empresas sediadas na Índia apresentem um ou mais produtos que os usuários do WhatsApp na Índia (com códigos de chamada desse país) podem comprar, sem precisar sair do WhatsApp.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/461864193_1053025166222560_1984323495828319066_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Dewt7_RiaqwQ7kNvwHJpwB2&_nc_oc=AdnU7zHhkbqN--vtS6CDywyubSm7O1oC-4va413YXEUyIE-PAVMrf5gZY5wVeZw46_s&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AflfXxcOB0GjXJp6eEhL7dv1Z_nczbEu2fnVNfhcPSVSWw&oe=69611FBC)

Consulte [Modelos com botão de finalização da compra](/documentation/business-messaging/whatsapp/payments/payments-in/checkout-button-templates) para saber como criar e enviar esses modelos.

## Modelos de carrossel de cartão de mídia

Com modelos de carrossel com cartão de mídia, você pode enviar uma mensagem de texto única acompanhada por um conjunto de até 10 cartões com rolagem horizontal:​

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/461961248_1048610163180196_3907313698557856900_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=0nniaAUsT3UQ7kNvwEZjVRQ&_nc_oc=AdlwZsTnvC5CtU_JQagfU6j8ioGIsWl0f4xZgoBYPhlQ0yMNbrr0VgNoNIXbqA-9ciw&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AfmKsNeX_iijCBPUcSmEuZmFyI7f6sHVRpz6EbOAlQDLxg&oe=6961387C)

Consulte [Modelos de cartão de carrossel de mídia](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) para saber como criar e enviar esses modelos.

## Modelos de mensagem multiprodutos

Com os modelos de mensagem multiproduto, você pode apresentar informações sobre até 30 produtos do seu catálogo de comércio eletrônico, organizados por seções personalizáveis.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/345336924_1476472873159435_9050004394387774321_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=P7MSZx1P57wQ7kNvwGVyoyc&_nc_oc=Adk6GxA7zcMK8LeQCQYXNdCzxdZHmiEwYEYYyVNZ2HU91pxqh754Jelz90n5AV3Rt3E&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AflQ_2VQsJ1DJuviJ8bF1qieu_rNZJg-w9yyCCpaqExkoQ&oe=69613B1C)

Consulte [Modelos de mensagem multiprodutos](/documentation/business-messaging/whatsapp/templates/marketing-templates/mpm-templates) para saber como criar e enviar esses modelos.

## Modelos de carrossel de cartão de produto

Com os modelos de carrossel com cartão de produto, você pode enviar uma mensagem de texto única acompanhada por um conjunto de até 10 cartões de produto com rolagem horizontal.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/456451243_832660229062364_6760679807399209749_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=eiusPkvTXxgQ7kNvwFCKIzm&_nc_oc=AdnyT_Ku1EYGMzGEv9j0Dwyr9k2YmDWTMJVwxyxa4S-hZuAurs0yJGx_zItaqRxS10Q&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AfkV2snoFfXs1542Jjk8aT6ltI0xwnVmuV9tVoIcaCJt1g&oe=69611F63)

Consulte [Modelos de carrossel de cartão de produto](/documentation/business-messaging/whatsapp/templates/marketing-templates/product-card-carousel-templates) para saber como criar e enviar esses modelos.

## Mensagens de produto

As mensagens de produto único e de multiproduto são interativas.

_Exemplo de mensagem multiproduto:_

_Exemplo de mensagem de produto único:_

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/561539953_1339318271260157_5511864003041128459_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=qrvk6E1hkx0Q7kNvwELlFfW&_nc_oc=AdnzjwJ0PLcrNt5w7bJO6uxXbJ4DtYdvjQWHGRH9h3iR2cltoH4sQSQ39_tHGZDC1dk&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AfnEUfRVg5br_US0UXlMmwg7V5SE_jBc2xCOfm9rCm13vg&oe=69610FC9)

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/562349137_1339318264593491_6364230190870639769_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=-9PNFT6DuK4Q7kNvwHn-ewu&_nc_oc=AdlNUOS3f8GXUxk53XZ020greOGMZS1kOvSAtsWBXNP08qwnKgXlwt9oyW7JUz9wKOg&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_Afl6SxREqQfnypHyfjkdFNTeSnAW9l9QPdDGHEQaeLN5cw&oe=69612191)

_Menu exibido quando o usuário clica em Começar a comprar:_

_Exemplo de página de detalhes do produto:_

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560927761_1339318294593488_1812605316660293832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=hofPvJOnnK0Q7kNvwE9ddeX&_nc_oc=Adkb-bMzKbXQt5uas6NdWCEuJmGaGdLNnM4SiIfTqqst9ai6bk14yH9fuPgCik8W7I8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_Aflh0ggWus3JfozyI-d9bbaj4ijUSDkdK22akwl3HmoYzQ&oe=69613857)

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/561725167_1339318251260159_1382680862902739848_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=GHzT39q_Z8wQ7kNvwGB1O-k&_nc_oc=Adl_a2bCGG9LaOcQDuuYxdHp0b0VrG9xH5Ojl3IurK00eRUxtRzhqQReExFiDbjUV4w&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_Afl9IPFo50aZ9BDBY68Lg3JXz2r6WiqYEkY57IGl-mVvvw&oe=6961330A)

### Visão geral

Os clientes que recebem mensagens multiproduto ou de produto único podem realizar três ações principais:

-   Ver produtos: os clientes podem ver uma lista de itens ou apenas um produto. Quando um cliente clica em um produto específico, buscamos as informações mais recentes sobre o item e exibimos uma página de detalhes do produto (PDP). No momento, as PDPs são compatíveis apenas com imagens. Ou seja, vídeos e/ou GIFs adicionados ao produto não serão exibidos nesse tipo de página.-   Adicionar produtos ao carrinho: sempre que um usuário adiciona um produto ao carrinho de compras, buscamos as informações mais recentes sobre o item. Caso haja uma mudança de status relacionada a um dos itens, exibiremos um diálogo com a mensagem "Um ou mais itens do seu carrinho foram atualizados". Consulte [Atualizações de produtos](#product-updates) para saber mais. Um carrinho é mantido em um tópico da conversa com o cliente até ser enviado a você. Consulte [Experiência do carrinho de compras](#shopping-cart-experience) para saber mais.-   Enviar o carrinho de compras para você: depois de adicionar todos os itens necessários, os clientes podem enviar o carrinho para você. Depois disso, você pode definir os próximos passos, como solicitar informações para a entrega ou oferecer opções de pagamento.

Se um cliente tiver diferentes aparelhos vinculados à mesma conta, as mensagens multiproduto e de produto único serão sincronizadas entre eles. No entanto, o carrinho de compras é configurado localmente para cada dispositivo específico. Consulte [Experiência do carrinho de compras](#shopping-cart-experience) para saber mais.

No momento, é possível receber esses tipos de mensagem nas seguintes plataformas:

-   iOS: 2.21.100 (multiproduto) e 2.21.210 (produto único).-   Android: 2.21.9.15 (multiproduto) e 2.21.19 (produto único).-   Web: o cliente web compatível com esses recursos já foi lançado.

Se a versão do app do cliente não for compatível com as mensagens multiproduto e de produto único, será enviado um aviso explicando que o usuário não conseguiu receber a mensagem porque está usando uma versão desatualizada do WhatsApp. Você também receberá uma notificação de webhook para informar que a mensagem não pôde ser entregue porque o cliente está usando uma versão desatualizada do app.

### Comportamento esperado das mensagens

As mensagens multiproduto e de produto único podem ser:

-   encaminhadas de um usuário para outro.-   reabertas por um usuário na mesma conversa.

As mensagens multiproduto e de produto único não podem ser:

-   enviadas como notificações. (só podem ser enviadas como parte de tópicos de conversas existentes).

### Limitações

Ao contrário das mensagens de produto enviadas por meio do app WhatsApp Business, as enviadas com a API de Nuvem não exibem um ícone de carrinho de compras no cabeçalho do tópico da conversa.

### Atualizações de produtos

Pode ser que você precise atualizar as propriedades de itens no seu catálogo. Veja abaixo as propriedades atualizadas e a forma como lidamos com qualquer mensagem que mencione o produto em questão:

Propriedade atualizada

Processo de atualização

Preço, título, descrição e imagem do produto.

-   Você envia uma mensagem multiproduto ou de produto único contendo o produto A.-   Você atualiza as propriedades do produto A no catálogo.-   As telas que exibem o produto em questão são atualizadas assim que o cliente do usuário toma conhecimento da mudança pelo servidor.

Alteração na disponibilidade

-   Você envia a um cliente uma mensagem multiproduto ou de produto único contendo o produto B.-   Você vende todas as unidades do produto B disponíveis. Depois, você atualiza o catálogo para informar que o produto B não está mais disponível.-   Se o cliente já tiver adicionado o produto B ao carrinho, o item será removido de lá. O carrinho de compras exibirá um diálogo com a mensagem "Um ou mais itens do seu carrinho foram atualizados".-   Caso o cliente não tenha adicionado o produto B ao carrinho, a mensagem multiproduto ou de produto único mostrará o item como indisponível.

### Experiência do carrinho de compras

Depois de visualizar os produtos, um cliente poderá adicioná-los ao carrinho de compras e enviar esse carrinho para você. Em atividades de comércio realizadas no WhatsApp, um carrinho de compras precisa ter as seguintes características:

-   Ser exclusivo de um tópico da conversa entre o cliente e a empresa em um aparelho específico: somente um carrinho é criado por tópico de conversa entre você e o cliente. Além disso, os carrinhos não são mantidos em diferentes aparelhos. Assim que um carrinho é enviado, o cliente pode abrir outro e iniciar o processo novamente.-   Não ter data de validade: o carrinho fica disponível no tópico da conversa até ser enviado para você. Após o envio, os itens são removidos do carrinho.

Os clientes podem colocar até 99 unidades de um mesmo item do catálogo em um carrinho de compras, mas não há um limite para a inclusão de itens diferentes.

Não será possível fazer edições após o envio do carrinho. Os clientes poderão enviar um novo carrinho se precisarem de outros itens ou quiserem alterar o pedido. Não é permitido enviar carrinhos para os clientes.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561408347_1339318044593513_2061068222102028456_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=XKluw-akuMwQ7kNvwFCjCpX&_nc_oc=AdkZHVSm5is3tidHPkRduHBghnzxaWD7qQJUPIFpBRgwl__R-omgpNWD6IW_6ebmLKs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_AflzLFaXLbHRB4ObjdbJdtCz9swKWvMDw3r5dVu-E70shg&oe=69613706)

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/560133096_1339318051260179_4704152617818003366_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZT8EAv7sKwAQ7kNvwHSjgqx&_nc_oc=AdkynokONux2Kq8eNtK8DRzSNb3brG0KGuevfrCehuN55YfIlZRuGBpMN8P5ld-YzjA&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_Afmx_ln2yK6VG3IL6FLYhqp0mNBrKzKIFc89hUTYBdtu_g&oe=69612017)

_Exemplo de experiência do carrinho de compras e comportamento esperado para a alteração de estado do item._

### Por que usar

As mensagens multiproduto e de produto único ajudam a oferecer experiências de usuário simples e personalizadas. Isso porque é melhor para o cliente ser direcionado a um subconjunto de itens relevantes para ele do que navegar por todo o seu inventário de produtos.

#### Simples e eficiente

Combinar esses recursos com ferramentas de navegação (como PLN, pesquisa de texto ou lista de mensagens e botões de resposta) permite à empresa chegar rapidamente ao que o cliente está procurando.

#### Pessoal

Com um preenchimento dinâmico, as mensagens podem ser personalizadas para cada cliente ou situação. Por exemplo, você pode mostrar uma mensagem multiproduto com os itens mais pedidos por um cliente.

#### Resultados de negócios

É um canal de alto desempenho para impulsionar os pedidos. Durante a fase de testes, as empresas tiveram uma conversão média de 7% de mensagens multiproduto enviadas para carrinhos recebidos.

#### Sem modelos

Para usar as mensagens interativas, não é preciso aplicar modelos nem receber aprovações prévias. Elas são geradas em tempo real e sempre incluem os detalhes mais recentes de itens, preços e níveis de estoque do seu inventário.

### Por que usar

As mensagens multiproduto são a melhor opção para direcionar os clientes a um subconjunto específico do seu inventário. Confira os casos de uso:

-   Comprar por meio de conversas. Por exemplo, usar a funcionalidade de pesquisa para permitir que os clientes digitem uma lista de compras e enviar uma mensagem multiproduto como resposta.-   Navegar para uma categoria específica. Por exemplo, roupas de ginástica.-   Enviar ofertas ou recomendações personalizadas.-   Repetir pedidos de itens realizados anteriormente. Por exemplo, um usuário pode repetir um pedido de menos de 30 itens feito regularmente.

As mensagens de produto único são a melhor opção para direcionar os clientes a um item específico do seu inventário porque oferecem respostas rápidas a partir de um conjunto limitado de opções. Confira os casos de uso:

-   Responder a um pedido específico do cliente.-   Enviar uma recomendação.-   Repetir o pedido de um item realizado anteriormente.

Os dois recursos também podem ser usados como parte de um fluxo de agente humano. Contudo, será preciso criar ferramentas para permitir que o agente humano gere uma mensagem multiproduto ou de produto único na conversa.

### Como enviar mensagens de produtos

Antes de enviar mensagens de produto, siga as orientações mais adequadas às suas necessidades:

-   [Desenvolvedores diretos](/documentation/business-messaging/whatsapp/get-started)-   [Provedores de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview)

Todas as chamadas de API mencionadas neste guia precisam ser autenticadas com um token de acesso. Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado em **Painel de Apps** > **WhatsApp** > **Configuração da API**. Os parceiros de soluções devem fazer a autenticação usando um token de acesso com a permissão [whatsapp\_business\_messaging](/docs/permissions/reference/whatsapp_business_messaging).

### Etapa 1: criar o objeto interativo

#### Mensagens de produto único

Para enviar uma mensagem de produto único, crie um objeto `interactive` do tipo `product` com estes componentes:

Componentes obrigatórios

Componentes opcionais

-   Objeto de ação: deve incluir catalog\_id e product\_retailer\_id.

-   Objeto de corpo-   Objeto de rodapé

Para ver mais informações, consulte [Mensagens, objeto interativo](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api). Ao final do processo, o objeto interativo deverá ter esta aparência:

```
{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "PHONE_NUMBER",  "type": "interactive",  "interactive": {    "type": "product",    "body": {      "text": "BODY_TEXT"    },    "footer": {      "text": "FOOTER_TEXT"    },    "action": {      "catalog_id": "CATALOG_ID",      "product_retailer_id": "ID_TEST_ITEM_1"    }  }}
```

#### Mensagens multiproduto

Para enviar mensagens multiproduto, crie um objeto `interactive` do tipo `product_list` com estes componentes:

Componentes obrigatórios

Componentes opcionais

-   Objeto de cabeçalho: o tipo de cabeçalho precisa ser definido como texto. Não se esqueça de adicionar um objeto de texto com o conteúdo desejado.-   Objeto de corpo-   Objeto de ação: deve incluir catalog\_id e seções.
    -   As seções precisam ser uma matriz de objetos que descrevem cada seção usando título e product\_items.
        -   O valor product\_items da seção deve ser uma matriz que descreve cada produto usando product\_retailer\_id e o número de SKU.

-   Objeto de rodapé

Para ver mais informações, consulte [Mensagens, objeto interativo](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api). Ao final do processo, o objeto interativo deverá ter esta aparência:

```
{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "PHONE_NUMBER",  "type": "interactive",  "interactive": {    "type": "product_list",    "header":{      "type": "text",      "text": "HEADER_CONTENT"    },    "body": {      "text": "BODY_CONTENT"    },    "footer": {      "text": "FOOTER_CONTENT"    },    "action": {      "catalog_id": "CATALOG_ID",      "sections": [        {          "title": "SECTION_TITLE",          "product_items": [            { "product_retailer_id": "PRODUCT-SKU" },            { "product_retailer_id": "PRODUCT-SKU" },            ...          ]        },        {          "title": "SECTION_TITLE",          "product_items": [            { "product_retailer_id": "PRODUCT-SKU" },            { "product_retailer_id": "PRODUCT-SKU" },            ...          ]        }      ]    }  }}
```

#### Itens ausentes

Se nenhum dos itens fornecidos nas chamadas de API acima corresponder a um produto do seu catálogo, encaminharemos um aviso de erro, e a mensagem multiproduto ou de produto único não será enviada ao usuário.

Em mensagens multiproduto, pelo menos um item da lista de produtos deve corresponder a um item do seu catálogo. Então:

-   as mensagens serão enviadas com sucesso;-   itens sem correspondência serão descartados;-   você receberá uma mensagem de erro solicitando a atualização do catálogo.

### Etapa 2: adicionar parâmetros comuns de mensagem

Assim que o objeto interativo estiver pronto, anexe os outros parâmetros que compõem uma mensagem: `recipient_type`, `to`, `messaging_product` e `type`. Lembre-se de definir `type` como `interactive`.

```
curl -X  POST https://graph.facebook.com/v24.0/FROM_PHONE_NUMBER/messages \
 -H 'Authorization: Bearer ACCESS_TOKEN' \
 - d '{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "PHONE_NUMBER",
  "type": "interactive",
  "interactive": {
  // INTERACTIVE OBJECT GOES HERE
}'
```

Para ver todos os parâmetros disponíveis, consulte [Referência, Mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api).

### Etapa 3: enviar uma solicitação ao ponto de extremidade de mensagens

Envie uma chamada POST para o ponto de extremidade [`/PHONE_NUMBER_ID/messages`](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) com o objeto JSON criado nas etapas 1 e 2. Caso a mensagem seja enviada com sucesso, você receberá a seguinte resposta:

```
{  "messaging_product": "whatsapp",  "contacts": [{      "input": "PHONE_NUMBER",      "wa_id": "WHATSAPP_ID",    }]  "messages": [{      "id": "wamid.ID",    }]}
```

## Modelos de mensagem de produto único

Com os modelos de mensagem de produto único, você pode apresentar um produto único do seu catálogo de comércio eletrônico, acompanhado de imagem, título e preço (todas essas informações retiradas do seu catálogo de produtos), com corpo de texto personalizável, texto opcional do rodapé e um botão interativo **Visualizar**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/456334558_1165670014537761_4619872146080155046_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ellClApiqLoQ7kNvwHAH5Ao&_nc_oc=AdlAa7tsUHo46nMddDGBTtPBcQZhzHOhW-joUo0RI5hP5FnPLUwYg14llThpqcEaycU&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=MxfXwIrM3zLiMQINT8_GIg&oh=00_Afk6nC0eGkNKp0jqeggIZLisMCtMxp7n6GwOqRvsTmlWNA&oe=69610D4E)

Consulte [Modelos de mensagem de produto único](/documentation/business-messaging/whatsapp/templates/marketing-templates/spm-templates) para saber como criar e enviar esses modelos.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)