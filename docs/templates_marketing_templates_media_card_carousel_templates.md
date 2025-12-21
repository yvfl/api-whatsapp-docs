<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates -->
<!-- Scraped: 2025-12-20T17:32:08.882Z -->

# Modelos de carrossel de cartão de mídia

Updated: 4 de nov de 2025

Com modelos de carrossel de cartão de mídia, você pode enviar uma mensagem de **modelo de marketing** única acompanhada por um conjunto de até 10 cartões de mídia de produto com rolagem horizontal:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/461961248_1048610163180196_3907313698557856900_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=0nniaAUsT3UQ7kNvwEZjVRQ&_nc_oc=AdlwZsTnvC5CtU_JQagfU6j8ioGIsWl0f4xZgoBYPhlQ0yMNbrr0VgNoNIXbqA-9ciw&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=1p08giCleh6eR_i8PEOQZw&oh=00_AfmVkjYN2tLAyPFBvuegT4vLuoyJ1sWhNr0Lt-IX-Li1UA&oe=6961387C)

Quando o usuário toca no botão de **URL** de um cartão de mídia para comprar um produto, o URL mapeado para o botão é carregado no navegador padrão do dispositivo, tirando o usuário da experiência do cliente do WhatsApp. Se preferir manter o usuário no cliente do WhatsApp, consulte [Modelos de carrossel com cartões de produto](/documentation/business-messaging/whatsapp/templates/marketing-templates/product-card-carousel-templates). Os cartões de carrossel estão disponíveis apenas para mensagens de modelo de marketing.

## Cartões de mídia

Os modelos de carrossel consistem em um texto do corpo e até 10 cartões de mídia de produto. Cada cartão do modelo tem um ativo de cabeçalho com imagem ou vídeo e, opcionalmente, um texto do corpo e até dois botões. As combinações podem ser formadas por botões de [resposta rápida](/documentation/business-messaging/whatsapp/templates/components#quick-reply-buttons), [número de telefone](/documentation/business-messaging/whatsapp/templates/components#phone-number-buttons) e [URL](/documentation/business-messaging/whatsapp/templates/components#url-buttons).

Todos os cartões definidos em um modelo devem ter os mesmos componentes.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/461975373_1069581831199988_6558232856590657854_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=f_0Kz_9T4JgQ7kNvwFHXWFX&_nc_oc=Adn8Pg4DtXmAX-qulMs3r1VmFX8nvX01_h_l81qU5n3X3heJ-cXdQuyYwVvoCpuvq6Q&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=1p08giCleh6eR_i8PEOQZw&oh=00_AfnU00ChTz6Xj3u1uF9ICM7YxIwWUtYurScWN9E2dsvaIg&oe=69611953)

Os usuários do WhatsApp realizam pedidos fora do cliente do WhatsApp. Por isso, nenhum webhook é disparado para descrever o pedido.

## Como criar modelos de carrossel de cartão de mídia

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates) para criar um modelo de carrossel de cartão de mídia.

### Sintaxe da solicitação

É preciso definir o número exato de cartões de produto (no mínimo 2, máximo 10) ao criar o modelo. Os modelos aprovados podem ser usados apenas para enviar o mesmo número de cartões definido durante a criação. Se um cartão do carrossel incluir um texto do corpo, todos outros também deverão incluir, para que os cartões apresentem alturas consistentes.

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
                "format": "<CARD_HEADER_FORMAT>",
                "example": {
                  "header_handle": [
                    "<CARD_HEADER_ASSET_HANDLE>"
                  ]
                }
              },
              {
                "type": "buttons",
                "buttons": [
                  {
                    "type": "quick_reply",
                    "text": "<QUICK_REPLY_BUTTON_LABEL_TEXT>"
                  },
                  {
                    "type": "url",
                    "text": "<URL_BUTTON_LABEL_TEXT>",
                    "url": "<URL_BUTTON_URL>",
                    "example": [
                      "<URL_BUTTON_URL_VARIABLE_EXAMPLE>"
                    ]
                  },
                  {
                    "type": "phone_number",
                    "text": "<PHONE_NUMBER_BUTTON_LABEL_TEXT>",
                    "phone_number": "<PHONE_NUMBER>"
                  }
                ]
              }
            ]
          }
          // Add additional cards here, following the same structure
        ]
      }
    ]
  }'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Exemplo de valor

`<CARD_HEADER_ASSET_HANDLE>`

_String_

**Obrigatório.**

Identificador do ativo de mídia carregado. Use a [API de Carregamento Retomável](/docs/graph-api/guides/upload) para gerar um identificador de ativo.

Os ativos de mídia são automaticamente cortados na proporção ampla com base no dispositivo do usuário do WhatsApp.

`4::anBlZw==:ARa525ZJ1g0J-8egeiRvb4Z4r9RSi9qeKF7-wXsUiaDFsll5CKbu5H7h_9mTW0TDfA8LEGHC4bAeXtJJiVQADMp5Ooe2huQlhpBxMadJiu3qVg:e:1724535430:634974688087057:100089620928913:ARaQoFQMm6BlbI3MYo4`

`<CARD_HEADER_FORMAT>`

_String_

**Obrigatório.**

O formato do cabeçalho do cartão. O valor pode ser `image` ou `video`.

`image`

`<MESSAGE_BODY_TEXT>`

_String_

**Obrigatório.**

Texto do corpo da mensagem. Aceita variáveis.

Máximo de 1.024 caracteres.

`Rare succulents for sale! {{1}}, add these unique plants to your collection. Each of these rare succulents are {{2}} if you checkout using code {{3}}. Shop now and add some unique and beautiful plants to your collection!`

`<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>`

_String_

**Obrigatório se a string de texto do corpo da mensagem tiver variáveis.**

String(s) de variáveis de exemplo de texto do corpo da mensagem. O número de strings precisa corresponder ao número de espaços reservados para variáveis na string de texto do corpo da mensagem.

Se o texto do corpo da mensagem usar uma única variável, o valor `body_text` poderá ser uma string; caso contrário, deverá ser uma matriz contendo uma matriz de strings.

`20OFF`

`<PHONE_NUMBER>`

_String_

**Obrigatório ao usar um botão de número de telefone.**

String alfanumérica. O número de telefone comercial a ser contatado quando o usuário do WhatsApp toca no botão.

Máximo de 20 caracteres.

`+15550051310`

`<PHONE_NUMBER_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de número de telefone.**

Texto do botão do número de telefone.

Máximo de 25 caracteres.

`Call`

`<QUICK_REPLY_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de resposta rápida.**

O texto do botão de resposta rápida.

Máximo de 25 caracteres.

`Send more like this!`

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

`<URL_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de URL.**

Texto do rótulo do botão de URL.

Máximo de 25 caracteres.

`Shop`

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

Esta solicitação de exemplo cria um modelo de carrossel de cartão de mídia com uma mensagem que usa 3 variáveis e 3 cartões de mídia. Cada cartão de mídia tem um botão de resposta rápida e um botão de URL que usa uma variável.

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "carousel_template_media_cards_v1",
  "language": "en_US",
  "category": "marketing",
  "components": [
    {
      "type": "body",
      "text": "Rare succulents for sale! {{1}}, add these unique plants to your collection. Each of these rare succulents are {{2}} if you checkout using code {{3}}. Shop now and add some unique and beautiful plants to your collection!",
      "example": {
        "body_text": [
          [
            "Pablo",
            "30%",
            "30OFF"
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
              "format": "image",
              "example": {
                "header_handle": [
                  "4::an..."
                ]
              }
            },
            {
              "type": "buttons",
              "buttons": [
                {
                  "type": "quick_reply",
                  "text": "Send me more like this!"
                },
                {
                  "type": "url",
                  "text": "Shop",
                  "url": "https://www.luckyshrub.com/rare-succulents/{{1}}",
                  "example": [
                    "BLUE_ELF"
                  ]
                }
              ]
            }
          ]
        },
        {
          "components": [
            {
              "type": "header",
              "format": "image",
              "example": {
                "header_handle": [
                  "4::an..."
                ]
              }
            },
            {
              "type": "buttons",
              "buttons": [
                {
                  "type": "quick_reply",
                  "text": "Send me more like this!"
                },
                {
                  "type": "url",
                  "text": "Shop",
                  "url": "https://www.luckyshrub.com/rare-succulents{{1}}",
                  "example": [
                    "BUDDHA"
                  ]
                }
              ]
            }
          ]
        },
        {
          "components": [
            {
              "type": "header",
              "format": "image",
              "example": {
                "header_handle": [
                  "4::an..."
                ]
              }
            },
            {
              "type": "buttons",
              "buttons": [
                {
                  "type": "quick_reply",
                  "text": "Send me more like this!"
                },
                {
                  "type": "url",
                  "text": "Shop",
                  "url": "https://www.luckyshrub.com/rare-succulents{{1}}",
                  "example": [
                    "BLACK_PRINCE"
                  ]
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

## Como enviar modelos de carrossel de cartão de mídia

Este documento descreve como enviar [modelos de carrossel com cartão de mídia](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) aprovados para usuários do WhatsApp.

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
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
                      "type": "<MESSAGE_HEADER_FORMAT>",
                      "<MESSAGE_HEADER_FORMAT>": {
                        "id": "<MESSAGE_HEADER_ASSET_ID>"
                      }
                    }
                  ]
                },
                {
                  "type": "body",
                  "parameters": [
                    { "type": "text", "text": "<CARD_BODY_VARIABLE_1>" },
                    { "type": "text", "text": "<CARD_BODY_VARIABLE_2>" }
                  ]
                },
                {
                  "type": "button",
                  "sub_type": "quick_reply",
                  "index": 0,
                  "parameters": [
                    {
                      "type": "payload",
                      "payload": "<QUICK_REPLY_BUTTON_PAYLOAD>"
                    }
                  ]
                },
                {
                  "type": "button",
                  "sub_type": "url",
                  "index": 1,
                  "parameters": [
                    {
                      "type": "text",
                      "text": "<URL_BUTTON_URL_VARIABLE>"
                    }
                  ]
                }
              ]
            }
            // Add additional cards here, following the same structure
          ]
        }
      ]
    }
  }'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Exemplo de valor

`<BUTTON_INDEX>`

_Número inteiro_

**Obrigatório.**

A ordem indexada com zero em que um botão aparece no fim do modelo de mensagem. `0` indica o primeiro botão, `1` indica o segundo e assim por diante.

Caso algum botão use variáveis, o tipo e a ordem dos botões deverão corresponder ao tipo e à ordem definidos no modelo. Por isso, não é possível usar os valores de índice para organizar a ordem dos botões no modelo enviado.

Por exemplo, se o modelo definir primeiro um botão de número de telefone (que equivale ao índice `0`) e depois um botão de URL que aceita uma única variável (que equivale ao índice `1`), e você tentar enviar o modelo com o índice do botão de URL definido como `0`, a API retornará um erro ("Parameter value for URL was expected but was not found"/"O valor de parâmetro de URL esperado não foi encontrado"), porque ela espera que um objeto de botão com um índice de `1` esteja presente na carga do corpo do post.

`0`

`<CARD_BODY_VARIABLE>`

_Objeto_

**Obrigatório se o texto do corpo do cartão de modelo usar variáveis. Caso contrário, omitir.**

Objeto que descreve uma variável de corpo de cartão. Se o modelo usa diversas variáveis, defina um objeto para cada uma delas.

É compatível com os tipos `text`, `currency` e `date_time`. Consulte [Parâmetros de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#parameter-object).

Não há limite máximo de caracteres para este valor, mas ele é contabilizado no limite de 160 caracteres do texto do corpo do cartão.

```
{
"type":"text",
"text": "Pablo"
}
```

`<CARD_INDEX>`

_Número inteiro_

**Obrigatório.**

A ordem indexada com zero em que cada cartão aparece no carrossel de cartões. `0` indica o primeiro cartão, `1` indica o segundo e assim por diante.

`0`

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

`<MESSAGE_HEADER_ASSET_ID>`

_String_

**Obrigatório.**

A identificação do ativo de mídia carregado do ativo de cabeçalho. Use o ponto de extremidade [**POST /<BUSINESS\_PHONE\_NUMBER\_ID>/media**](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) para gerar uma identificação de ativo.

`1558081531584829`

`<MESSAGE_HEADER_FORMAT>`

_String_

**Obrigatório.**

Indica o tipo de cabeçalho e um nome de propriedade correspondente.

Observe que o espaço reservado `<MESSAGE_HEADER_FORMAT>` aparece duas vezes no exemplo de corpo do post acima, pois serve como espaço reservado para o valor da propriedade de tipo e o nome de propriedade correspondente.

O valor pode ser `image` ou `video`.

`image`

`<QUICK_REPLY_BUTTON_PAYLOAD>`

_String_

**Opcional.**

O valor será incluído em webhooks de mensagens (`messages.button.payload`) quando alguém tocar no botão.

`more-aloes`

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

`<URL_BUTTON_URL_VARIABLE>`

_String_

**Obrigatório se o URL do botão de URL usar uma variável**.

O valor da variável de botão de URL.

`blue-elf`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

### Exemplo de solicitação

Esta solicitação de exemplo envia um modelo de carrossel de cartão de mídia chamado "carousel\_template\_media\_cards\_v1". Ela fornece três variáveis de texto do corpo (que o modelo requer) e conteúdo para três cartões (que o modelo também requer). Para cada cartão, a solicitação fornece uma identificação do ativo de imagem, uma carga de botão de resposta rápida (que será incluída nos webhooks quando alguém clicar no botão) e uma string de texto que será inserida no URL mapeado para o botão de URL do cartão (definido no modelo).

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "template",
  "template": {
    "name": "carousel_template_media_cards_v1",
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
          },
          {
            "type": "text",
            "text": "20%"
          },
          {
            "type": "text",
            "text": "20OFF"
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
                    "type": "image",
                    "image": {
                      "id": "1558081531584829"
                    }
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "quick_reply",
                "index": "0",
                "parameters": [
                  {
                    "type": "payload",
                    "payload": "more-aloes"
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "url",
                "index": "1",
                "parameters": [
                  {
                    "type": "text",
                    "text": "blue-elf"
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
                    "type": "image",
                    "image": {
                      "id": "861236878885705"
                    }
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "quick_reply",
                "index": "0",
                "parameters": [
                  {
                    "type": "payload",
                    "payload": "more-crassulas"
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "url",
                "index": "1",
                "parameters": [
                  {
                    "type": "text",
                    "text": "buddhas-temple"
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
                    "type": "image",
                    "image": {
                      "id": "1587064918516321"
                    }
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "quick_reply",
                "index": "0",
                "parameters": [
                  {
                    "type": "payload",
                    "payload": "more-echeverias"
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "url",
                "index": "1",
                "parameters": [
                  {
                    "type": "text",
                    "text": "black-prince"
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