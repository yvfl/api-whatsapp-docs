<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/mpm-templates -->
<!-- Scraped: 2025-12-20T17:32:17.081Z -->

# Modelos de mensagem multiproduto

Updated: 4 de nov de 2025

Este documento descreve os modelos de mensagem multiproduto ("MPM"), seus usos e como utilizá-los.

Os modelos de MPM são modelos de marketing que permitem mostrar até 30 produtos do seu catálogo de comércio eletrônico, organizados em até 10 seções, em uma única mensagem.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/345336924_1476472873159435_9050004394387774321_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=P7MSZx1P57wQ7kNvwGVyoyc&_nc_oc=Adk6GxA7zcMK8LeQCQYXNdCzxdZHmiEwYEYYyVNZ2HU91pxqh754Jelz90n5AV3Rt3E&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=JEKyfUzNB4zJukVsYHkTbg&oh=00_AfnO5avhOc70gGPgRHnqjqZVHuge6w8T4t1uqDf_tZ5UVw&oe=69613B1C)

Os clientes podem navegar pelos produtos e seções da mensagem, ver detalhes de cada artigo, adicionar e remover itens do carrinho e enviar o carrinho para fazer o pedido. Depois disso, os pedidos são enviados a você por meio de um webhook.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/345301814_777009393786308_8675106872073624223_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=aV75mMm16HIQ7kNvwFkwj4o&_nc_oc=AdkQoC9PCZoKmGOaVf-1GR6L5LvsvZcZRNsRMnK9tEf6eBxNuUeNBOuzVf9uMuK_Uv8&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=JEKyfUzNB4zJukVsYHkTbg&oh=00_AfmgjG_a2TZKzCnmH1B9JwZHtxp2c67CXzwR8p39F1psvg&oe=696121E9)

Consulte nosso artigo da Central de Ajuda [Sobre modelos de mensagem multiproduto no WhatsApp](https://www.facebook.com/business/help/978451836847222) para ver casos de uso comuns e dicas sobre como aproveitar ao máximo os modelos de MPM.

## Requisitos

Para criar e usar modelos de MPM, você precisa ter um catálogo de produtos de comércio eletrônico com inventário conectado à sua conta do WhatsApp Business. Consulte o guia [Comércio](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services) da API de Nuvem.

## Limitações

-   Os clientes devem estar usando a versão 2.22.24 ou posterior do WhatsApp.-   Os modelos de MPM não podem ser encaminhados para outros clientes.

## Como criar modelos de MPM

Você pode criar modelos de MPM usando o ponto de extremidade [Conta do WhatsApp Business > Modelos de mensagem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) ou o painel [**Gerenciador do WhatsApp**](https://business.facebook.com/wa/manage/home/) > **Ferramentas da conta** > **Modelos de mensagem**. Depois que o modelo for aprovado, você poderá usar a API de Nuvem ou a API Local para enviá-lo em uma mensagem de modelo.

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "<NAME>",
    "category": "<CATEGORY>",
    "language": "<LANGUAGE>",
    "components": [<COMPONENTS>]
  }'
```

### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<CATEGORY>`

**Obrigatório.**

  
A categoria do modelo. Defina como `MARKETING`.

`MARKETING`

`<COMPONENTS>`

**Obrigatório.**

  
Matriz de objetos que descreve os componentes que formam o modelo. Consulte [Componentes](#components) abaixo.

Consulte [Componentes](#components) abaixo.

`<LANGUAGE>`

**Obrigatório.**

  
O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<NAME>`

**Obrigatório.**

  
O nome do modelo.

  
Máximo de 512 caracteres.

`abandoned_cart`

### Componentes

O valor de `components` deve ser uma matriz de objetos que descreve cada componente do modelo. Os modelos de MPM devem ter os seguintes componentes:

-   um único componente de cabeçalho-   um único componente de corpo-   um único componente de rodapé único (opcional)-   um único componente do botão de MPM

```
[
  {
    "type": "HEADER",
    "format": "TEXT",
    "text": "<HEADER_TEXT>",

    /* Example required if header uses a variable */
    "example": {
      "header_text": [
        "<HEADER_EXAMPLE_TEXT>"
      ]
    }
  },
  {
    "type": "BODY",
    "text": "<BODY_TEXT>",

    /* Example required if body uses variables */
​​    "example": {
      "body_text": [
        [
          "<BODY_EXAMPLE_TEXT>"
        ]
      ]
    }
  },
  {
    "type": "FOOTER",
    "text": "<FOOTER_TEXT>"
  },
  {
    "type":"BUTTONS",
    "buttons": [
      {
        "type": "MPM",
        "text": "View items"
      }
    ]
  }
]
```

### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<BODY_EXAMPLE_TEXT>`

Uma string ou matriz de strings. Exemplo de valor(es) de variável do corpo.

`10OFF`

`<BODY_TEXT>`

Corpo de texto do modelo. Compatível com mais de uma variável.

  
Se a string contiver variáveis, você deverá incluir a propriedade de exemplo e valores de exemplo.

  
Máximo de 1.024 caracteres.

`Forget something, {{1}}?`

`<FOOTER_TEXT>`

Texto de rodapé do modelo.

  
Máximo de 60 caracteres.

`Lucky Shrub, 1 Hacker Way, Menlo Park, CA 94025`

`<HEADER_EXAMPLE_TEXT>`

Exemplo de valor da variável de cabeçalho.

`Pablo`

`<HEADER_TEXT>`

Texto do cabeçalho do modelo. Compatível com 1 variável.

  
Se a string contiver variáveis, você deverá incluir a propriedade de exemplo e um valor de exemplo.

  
Máximo de 60 caracteres.

`Looks like you left these items in your cart, still interested? Use code {{1}} to get 10% off!`

### Resposta

Se o processo for bem-sucedido, a API enviará a seguinte resposta:

```
{
  "id": "<ID>",
  "status": "<STATUS>",
  "category": "MARKETING"
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Exemplo de valor

`<ID>`

A identificação do modelo.

`546151681022936`

`<STATUS>`

Status do modelo. Apenas modelos com status `APPROVED` podem ser enviados em mensagens de modelo.

`PENDING`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "abandoned_cart",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Forget something, {{1}}?",
      "example": {
        "header_text": [
          "Pablo"
        ]
      }
    },
    {
      "type": "BODY",
      "text": "Looks like you left these items in your cart, still interested? Use code {{1}} to get 10% off!",
      "example": {
        "body_text": [
          [
            "10OFF"
          ]
        ]
      }
    },
    {
      "type":"BUTTONS",
      "buttons": [
        {
          "type": "MPM",
          "text": "View items"
        }
      ]
    }
  ]
}'
```

### Exemplo de resposta

```
{  "id": "546151681022936",  "status": "PENDING",  "category": "MARKETING"}
```

## Webhooks

Quando o cliente adiciona um ou mais produtos ao carrinho e envia um pedido, você recebe um webhook com a descrição do pedido.

### Sintaxe do webhook

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<ENTRY.ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<NAME>"
                },
                "wa_id": "<WA_ID>"
              }
            ],
            "messages": [
              {
                "from": "<FROM>",
                "id": "<MESSAGES.ID>",
                "timestamp": "<TIMESTAMP>",
                "type": "order",
                "order": {
                  "catalog_id": "<CATALOG_ID>",
                  "product_items": [
                    {
                      "product_retailer_id": "<PRODUCT_RETAILER_ID>",
                      "quantity": <QUANTITY>,
                      "item_price": <ITEM_PRICE>,
                      "currency": "<CURRENCY>"
                    }
                  ]
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

### Conteúdos do webhook

Espaço reservado

Descrição

Exemplo de valor

`<CATALOG_ID>`

Identificação do catálogo de produtos de comércio eletrônico.

`1537566713439863`

`<CURRENCY>`

Moeda do item.

`USD`

`<DISPLAY_PHONE_NUMBER>`

Número de telefone comercial exibido.

`15550051310`

`<ENTRY.ID>`

Identificação da conta do WhatsApp Business.

`102290129340398`

`<ITEM_PRICE>`

O preço do item.

`99.99`

`<MESSAGES.ID>`

Identificação da mensagem do WhatsApp.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDOEI3ODgxNzQzMjJBQTdEQTcA`

`<NAME>`

Nome do cliente.

`Pablo Morales`

`<PHONE_NUMBER_ID>`

Identificação do número de telefone comercial.

`106540352242922`

`<PRODUCT_RETAILER_ID>`

O número SKU do item. Marcado como **identificação do conteúdo** no Gerenciador de Comércio.

`2lc20305pt`

`<QUANTITY>`

O número de itens pedidos (desse item específico).

`1`

`<TIMESTAMP>`

Registro de data e hora UNIX que indica quando enviamos o webhook para você.

`1677522117`

`<WA_ID>`

O número de telefone do WhatsApp do cliente.

`16505551234`

### Exemplo de webhook

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550051310",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Pablo Morales"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTMxNzA1QzNENEI4ODY0OTY2MAA=",                "timestamp": "1683223069",                "type": "order",                "order": {                  "catalog_id": "1537566713439863",                  "product_items": [                    {                      "product_retailer_id": "n6k6x0y7oe",                      "quantity": 1,                      "item_price": 99.99,                      "currency": "USD"                    }                  ]                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

## Como enviar mensagens de modelo de MPM

Este documento explica como enviar [modelos de mensagem multiproduto (MPM)](/documentation/business-messaging/whatsapp/templates/marketing-templates/mpm-templates) em mensagens de modelo.

### Componentes

As mensagens de modelo de MPM devem ter:

-   um componente de **cabeçalho** (somente necessário se o modelo usar uma variável de cabeçalho);-   um componente de **corpo** (somente necessário se o modelo usar uma variável de corpo);-   um único componente de **botão de MPM**.

Use o botão de MPM para definir as seções e os respectivos títulos que aparecerão quando o cliente tocar no botão **Ver itens**, assim como para designar quais produtos aparecem em cada seção.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/345454978_257502929976881_8980265032321705247_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=XSaHyvrpWXsQ7kNvwEnHHDS&_nc_oc=AdkNrbr2u9DmNPMvI_0yWDqVK8Htc27sCgF53UouYrDTkGisUY-HtXTq1OAGkNjr3VE&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=JEKyfUzNB4zJukVsYHkTbg&oh=00_Afn8T2qlNwR3pgSe9zOESQ7VP0Gz03O6NwFBPHsJmrjCPw&oe=69610ECB)

Para enviar um modelo de MPM aprovado em uma mensagem de modelo, envie uma solicitação POST ao ponto de extremidade [WhatsApp Business Phone Number > Messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api). Use o corpo da solicitação POST para definir o conteúdo da mensagem e descrever variáveis para injeção no modelo.

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/v23.0/<BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "<TO>",
    "type": "template",
    "template": {
      "name": "<NAME>",
      "language": {
        "code": "<CODE>"
      },
      "components": [
        {
          "type": "header",
          "parameters": [
            {
              "type": "text",
              "text": "<HEADER_TEXT>"
            }
          ]
        },
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "<BODY_TEXT>"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "mpm",
          "index": 0,
          "parameters": [
            {
              "type": "action",
              "action": {
                "thumbnail_product_retailer_id": "<THUMBNAIL_PRODUCT_RETAILER_ID>",
                "sections": [
                  {
                    "title": "<TITLE>",
                    "product_items": [
                      {
                        "product_retailer_id": "<PRODUCT_RETAILER_ID_1>"
                      },
                      {
                        "product_retailer_id": "<PRODUCT_RETAILER_ID_2>"
                      }
                      // ... Add up to 30 product items per section
                    ]
                  }
                  // ... Add up to 10 section objects as needed
                ]
              }
            }
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

`<BODY_TEXT>`

**Obrigatório se o modelo usar variáveis.**

  
Uma string ou matriz de strings. O texto a substituir as variáveis do corpo definidas no modelo.

`10OFF`

`<CODE>`

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<HEADER_TEXT>`

**Obrigatório se o modelo usar uma variável.**

  
O texto a substituir a variável de cabeçalho definida no modelo.

`Pablo`

`<NAME>`

O nome do modelo.

`abandoned_cart`

`<PRODUCT_RETAILER_ID>`

O número SKU do item que você quer que apareça na seção.

  
Os números SKU são marcados como **identificação do conteúdo** no Gerenciador de Comércio.

  
Compatível com até 30 produtos (somando todas as seções).

`2lc20305pt`

`<THUMBNAIL_PRODUCT_RETAILER_ID>`

Número SKU do item. Marcado como **identificação do conteúdo** no Gerenciador de Comércio.

  
A miniatura deste item será usada como a imagem de cabeçalho da mensagem de modelo.

`2lc20305pt`

`<TITLE>`

O texto do título da seção.

  
Você pode definir até 10 seções.

  
Máximo de 24 caracteres. Não há compatibilidade com Markdown.

`Popular Bundles`

`<TO>`

Número de telefone do cliente.

`16505551234`

### Resposta

Se o processo for bem-sucedido, a API enviará a seguinte resposta:

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<INPUT>",
      "wa_id": "<WA_ID>"
    }
  ],
  "messages": [
    {
      "id": "<ID>"
    }
  ]
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Exemplo de valor

`<ID>`

Identificação da mensagem do WhatsApp.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDOEI3ODgxNzQzMjJBQTdEQTcA`

`<INPUT>`

O número de telefone do WhatsApp do cliente.

`16505551234`

`<WA_ID>`

A identificação do WhatsApp do cliente.

`16505551234`

### Exemplo de solicitação

Este exemplo envia o modelo aprovado "abandoned\_cart", injetando uma variável (o nome do cliente) no cabeçalho e um código de desconto no corpo. Ele também define duas seções ("Popular Bundles" – pacotes populares – e "Premium Packages" – pacotes premium) e identifica os produtos (3 no total) que devem ser injetados nas seções.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "16505551234",
  "type": "template",
  "template": {
    "name": "abandoned_cart",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "text",
            "text": "Pablo"
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "10OFF"
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "mpm",
        "index": 0,
        "parameters": [
          {
            "type": "action",
            "action": {
              "thumbnail_product_retailer_id": "2lc20305pt",
              "sections": [
                {
                  "title": "Popular Bundles",
                  "product_items": [
                    {
                      "product_retailer_id": "2lc20305pt"
                    },
                    {
                      "product_retailer_id": "nseiw1x3ch"
                    }
                  ]
                },
                {
                  "title": "Premium Packages",
                  "product_items": [
                    {
                      "product_retailer_id": "n6k6x0y7oe"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  }
}'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDOEI3ODgxNzQzMjJBQTdEQTcA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)