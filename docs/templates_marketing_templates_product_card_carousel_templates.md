<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/product-card-carousel-templates -->
<!-- Scraped: 2025-12-20T17:32:24.199Z -->

# Modelos de carrossel de cartão de produto

Updated: 4 de nov de 2025

Com os modelos de carrossel de cartão de produto, você pode enviar uma mensagem de texto única acompanhada por um conjunto de até dez cartões de produto com rolagem horizontal:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/456451243_832660229062364_6760679807399209749_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=eiusPkvTXxgQ7kNvwFCKIzm&_nc_oc=AdnyT_Ku1EYGMzGEv9j0Dwyr9k2YmDWTMJVwxyxa4S-hZuAurs0yJGx_zItaqRxS10Q&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=2GJywGdkIWl4qgQFW42Q9A&oh=00_Afl5RNO4YYPm7CI-qbiS-4OiWsKKvRv-BB148s1sljd-pg&oe=69611F63)

Quando um usuário do WhatsApp toca no botão **Visualizar**, ele pode ver mais informações sobre o produto, adicionar o produto ao carrinho de compras e fazer um pedido, tudo sem sair da experiência do cliente do WhatsApp. Se preferir direcionar o usuário para o seu site quando ele clicar no botão, consulte [Modelos de carrossel de cartão de mídia](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates).

## Cartões de produto

Os modelos de carrossel são compatíveis com até dez cartões de produto, compostos por texto do corpo da mensagem, uma imagem, título e preço do produto, e o botão Visualizar ou o botão de URL. Todos os cartões definidos em um modelo devem ter os mesmos componentes.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/456183425_819329683713319_8287896812760303277_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=AeEhyBbUIswQ7kNvwHb0KFL&_nc_oc=AdlngvYwiusQ3OvHjaZhJRYzTv0LeZOFHn6fUd9_94TnnjTEgS5kJkDSLF5iGVlWsho&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=2GJywGdkIWl4qgQFW42Q9A&oh=00_AfnjdkyMNod8AtwtcKM2Lc2Jl7EnylfCaoP9OVWD011mXg&oe=696129BA)

## Botão de visualização

Quando um usuário do WhatsApp toca no botão, a visualização de detalhes do produto é exibida, mostrando informações extraídas do seu catálogo.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/456536571_1403706086934453_4366317090049712342_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=9I0HVxVwct8Q7kNvwHOSyek&_nc_oc=Adm9AVaDGSn9BWlzIdBmCT8T7S_KToLitVVbA52hgXXhFtSTmTVOh-SClcm6YnPMn_Q&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=2GJywGdkIWl4qgQFW42Q9A&oh=00_AfkVu8j7BCCyjdZgrRNMWqhDDh0NLi3wOd7seZGEqvhc3Q&oe=6961303A)

Os usuários podem então adicionar o produto ao carrinho de compras e fazer o pedido.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/456294794_1915042982315160_3191620650033958999_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=atDtmYMpUTkQ7kNvwFSXLdC&_nc_oc=AdkVKlXcbtJ4uHD5hiU_BknBYgG-cjZBaBrrSCaKPl6--YVlIvKfYB2DezaT1ZpkpjM&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=2GJywGdkIWl4qgQFW42Q9A&oh=00_AfkJIviLqstgn3m0i2Lh9DrFyjF2T4wJA0CGlEaxK435Kw&oe=6961286E)

Quando o usuário envia o carrinho, um [webhook](#webhooks) é disparado descrevendo o pedido, e uma mensagem de confirmação da compra é exibida na conversa.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/456482022_473045605708419_6165153125141611284_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=tUzsZWsDx3YQ7kNvwFFrYah&_nc_oc=Adnk5sT61c0FyGHcLVgGGJYGObx-A_8kBbnWId2CnbeaDWgo9-skSEZQXbk4KIVD3do&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=2GJywGdkIWl4qgQFW42Q9A&oh=00_AflQvVSMG0MUSG5JfHc9pbQVcSB5N6sIFIHPw5HPLp8THA&oe=69610621)

Os usuários que fizeram um pedido podem ver o conteúdo dele tocando no botão **Ver detalhes**.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/456576172_505851605146576_6951890413402171834_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Du0uNkJCJrMQ7kNvwHwmBq5&_nc_oc=AdkNKm_DfShfev5z8Q95rjHWBl9nMxET3sYa7E5K0Z9AXoGtQRwPqtlwkRjIcWaovoY&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=2GJywGdkIWl4qgQFW42Q9A&oh=00_AflVFZ1NeqltEnTkJ17S_2_95DusxsmfPKlIBXzHGUyCQA&oe=69611341)

## Botões de URL

Em vez de botões de **visualização**, use os botões de **URL**. Quando um usuário do WhatsApp toca em um botão de URL para comprar um produto, o URL mapeado para o botão é carregado no navegador da web padrão do dispositivo, tirando o usuário da experiência do cliente do WhatsApp. Isso pode ser útil, por exemplo, se você quiser carregar o produto na sua página de finalização da compra móvel, onde os usuários podem adicionar códigos promocionais e encontrar produtos relacionados.

Nos fluxos com botões de URL, como o pedido é feito fora do cliente do WhatsApp, os webhooks descrevendo o pedido não são disparados.

## Catálogos

Para usar modelos de carrossel de cartão de produto, você precisa ter um catálogo de produtos de comércio eletrônico com inventário conectado à sua conta do WhatsApp Business. Para saber mais sobre como conectar um catálogo à sua conta, consulte o guia de [comércio](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services) da API de Nuvem.

## Webhooks

Se você enviar um modelo de carrossel composto por cartões de produto que usam um botão **Visualizar** e um cliente adicionar um ou mais itens ao carrinho e enviar um pedido, um webhook de [mensagens do pedido](/documentation/business-messaging/whatsapp/webhooks/reference/messages/order) será disparado, descrevendo o pedido.

## Criar modelos de carrossel de cartão de produto

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates) para criar um modelo de carrossel de cartão de produto.

### Sintaxe da solicitação

Apenas dois cartões de produto são necessários para a criação do modelo. É possível usar um modelo aprovado com dois cartões de produto para enviar até dez cartões em uma mensagem de modelo.

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
{
    "name": "<TEMPLATE_NAME>",
    "language": "<TEMPLATE_LANGUAGE>",
    "category": "marketing",
    "components": [
      {
        "type": "body",
        "text": "<MESSAGE_BODY_TEXT>",
        "example": {
          "body_text": [
            [
              "<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE_1>",
              "<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE_2>"
            ]
          ]
        }
      },
      {
        "type": "carousel",
        "cards": [
          {
            "components": [
              {
                "type": "header",
                "format": "product"
              },
              {
                "type": "buttons",
                "buttons": [
                  {
                    "type": "spm",
                    "text": "View"
                  }
                  // OR, for a URL button, use the following instead:
                  // {
                  //   "type": "url",
                  //   "text": "<URL_BUTTON_LABEL_TEXT>",
                  //   "url": "<URL_BUTTON_URL>",
                  //   "example": [
                  //     "<URL_BUTTON_URL_VARIABLE_EXAMPLE>"
                  //   ]
                  // }
                ]
              }
            ]
          }
          // Add a second product card here, following the same structure as above
        ]
      }
    ]
  }'
```

### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<MESSAGE_BODY_TEXT>`

_String_

**Obrigatório.**

Texto do corpo da mensagem. Aceita variáveis.

Máximo de 1.024 caracteres.

`Rare succulents for sale! {{1}}, add these unique plants to your collection.`

`<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>`

_String_

**Obrigatório se a string de texto do corpo da mensagem tiver variáveis.**

String(s) de variáveis de exemplo de texto do corpo da mensagem. O número de strings precisa corresponder ao número de espaços reservados para variáveis na string de texto do corpo da mensagem.

Se o texto do corpo da mensagem usar uma única variável, o valor `body_text` poderá ser uma string; caso contrário, deverá ser uma matriz contendo uma matriz de strings.

`Pablo`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo.

Máximo de 512 caracteres.

`carousel_template_product_cards_v1`

`<URL_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de URL.**

Texto do rótulo do botão de URL.

Máximo de 25 caracteres.

`Buy now`

`<URL_BUTTON_URL>`

_String_

**Obrigatório ao usar um botão de URL.**

URL que será carregado no navegador padrão do dispositivo quando o usuário do WhatsApp tocar no botão.

Compatível com 1 variável. O espaço reservado para variáveis deve ser adicionado ao final da string de URL.

Máximo de 2.000 caracteres.

`https://www.luckyshrub.com/rare-succulents/{{1}}`

`<URL_BUTTON_URL_VARIABLE_EXAMPLE>`

_String_

**Obrigatório se o botão de URL usar uma variável.**

String de variável de exemplo de URL do botão de URL.

Máximo de 2.000 caracteres.

`BUDDHA`

### Exemplo de solicitação

Esta solicitação de exemplo cria um modelo de carrossel de cartão de produto com um corpo de mensagem que usa uma variável única e dois cartões de produto. Depois dessa aprovação, será possível usá-lo para enviar até dez cartões de produto em uma mensagem de modelo.

```
curl 'https://graph.facebook.com/v24.0/161311403722088/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "carousel_template_product_cards_v1",
  "language": "en_US",
  "category": "marketing",
  "components": [
    {
      "type": "body",
      "text": "Rare succulents for sale! {{1}}, add these unique plants to your collection. All three of these rare succulents are available for purchase on our website, and they come with a 100% satisfaction guarantee. Whether you're a seasoned succulent enthusiast or just starting your plant collection, these rare succulents are sure to impress. Shop now and add some unique and beautiful plants to your collection!",
      "example": {
        "body_text": "Pablo"
      }
    },
    {
      "type": "carousel",
      "cards": [
        {
          "components": [
            {
              "type": "header",
              "format": "product"
            },
            {
              "type": "buttons",
              "buttons": [
                {
                  "type": "spm",
                  "text": "View"
                }
              ]
            }
          ]
        },
        {
          "components": [
            {
              "type": "header",
              "format": "product"
            },
            {
              "type": "buttons",
              "buttons": [
                {
                  "type": "spm",
                  "text": "View"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}'
```

## Enviar modelos de carrossel de cartão de produto

### Sintaxe da solicitação

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar um modelo de carrossel com cartão de produto aprovado a um usuário do WhatsApp.

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "<WHATSAPP_USER_PHONE_NUMBER>",
    "type": "template",
    "template": {
      "name": "<TEMPLATE_NAME>",
      "language": {
        "code": "<TEMPLATE_LANGUAGE>"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            { "type": "text", "text": "<MESSAGE_BODY_TEXT_VARIABLE_1>" },
            { "type": "text", "text": "<MESSAGE_BODY_TEXT_VARIABLE_2>" }
          ]
        },
        {
          "type": "carousel",
          "cards": [
            {
              "card_index": 0,
              "components": [
                {
                  "type": "header",
                  "parameters": [
                    {
                      "type": "product",
                      "product": {
                        "product_retailer_id": "<PRODUCT_ID_1>",
                        "catalog_id": "<CATALOG_ID>"
                      }
                    }
                  ]
                }
                // Add additional components (e.g., buttons) here if your template defines them
              ]
            }
            // Add additional cards here, incrementing card_index for each
          ]
        }
      ]
    }
  }'
```

### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<CARD_INDEX>`

_Número inteiro_

**Obrigatório.**

A ordem indexada com zero em que cada cartão aparece no carrossel de cartões. `0` indica o primeiro cartão, `1` indica o segundo e assim por diante.

`0`

`<CATALOG_ID>`

_String_

**Obrigatório.**

Identificação do [catálogo de comércio eletrônico conectado](https://www.facebook.com/business/help/158662536425974) que contém o produto.

`194836987003835`

`<MESSAGE_BODY_TEXT_VARIABLE>`

_Objeto_

**Obrigatório se o texto do corpo da mensagem de modelo usar variáveis; caso contrário, omita.**

Objeto que descreve uma variável de mensagem. Se o modelo usa diversas variáveis, defina um objeto para cada uma delas.

É compatível com os tipos `text`, `currency` e `date_time`. Consulte [Parâmetros de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#parameter-object).

Não há um limite máximo de caracteres para esse valor, mas ele é contabilizado no limite de 1.024 caracteres do texto do corpo da mensagem.

```
{
"type":"text",
"text": "Pablo"
}
```

`<PRODUCT_ID>`

_String_

**Obrigatório.**

Identificação do produto.

`vrpj01fvwp`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo.

Máximo de 512 caracteres.

`carousel_template_media_cards_v1`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

### Exemplo de solicitação

Esta solicitação de exemplo envia um modelo aprovado chamado "carousel\_template\_product\_cards\_v1". Ele fornece um único valor de variável de texto do corpo (que o modelo requer) e três cartões de produto. Cada cartão identifica o lugar onde ele deve aparecer no carrossel (card\_index), assim como a identificação do produto e do catálogo onde os detalhes do produto do cartão (título, descrição, preço etc.) podem ser encontrados.

```
curl 'https://graph.facebook.com/v24.0/179776755229976/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "template",
  "template": {
    "name": "carousel_template_product_cards_v1",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "Pablo"
          }
        ]
      },
      {
        "type": "carousel",
        "cards": [
          {
            "card_index": 0,
            "components": [
              {
                "type": "header",
                "parameters": [
                  {
                    "type": "product",
                    "product": {
                      "product_retailer_id": "vrpj01fvwp",
                      "catalog_id": "194836987003835"
                    }
                  }
                ]
              }
            ]
          },
          {
            "card_index": 1,
            "components": [
              {
                "type": "header",
                "parameters": [
                  {
                    "type": "product",
                    "product": {
                      "product_retailer_id": "va2l5ioeat",
                      "catalog_id": "194836987003835"
                    }
                  }
                ]
              }
            ]
          },
          {
            "card_index": 2,
            "components": [
              {
                "type": "header",
                "parameters": [
                  {
                    "type": "product",
                    "product": {
                      "product_retailer_id": "sqpjv0mgde",
                      "catalog_id": "194836987003835"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}'
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)