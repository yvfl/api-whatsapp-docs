<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/spm-templates -->
<!-- Scraped: 2025-12-20T17:32:31.892Z -->

# Modelos de mensagem de produto único

Updated: 4 de nov de 2025

Este documento descreve os modelos de mensagem de produto único (MPM), os usos deles e como criá-los.

Com os modelos de mensagem de produto único, você pode apresentar um produto único do seu catálogo de comércio eletrônico, acompanhado de imagem, título e preço (todas essas informações retiradas do seu catálogo de produtos), com corpo de texto personalizável, texto opcional do rodapé e um botão interativo de **visualização**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/456611074_369667709517740_8197750041061962345_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=RM6PZFsv8rEQ7kNvwFlGepY&_nc_oc=AdkEGpni-Q2F-MHL2D455O-dIeSSE0By60OpejUYhxpMU-4ab0TEqYf5IcvwWiVAbNc&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=i07V1yh53yVu3Wxc5OuiDw&oh=00_AfmMyXpJcl5K6nGUwlU96vHATHqNNfWNkPGHaXh-Y8uJCA&oe=696110CA)

Ao tocar no botão, os usuários do WhatsApp podem ver detalhes sobre o produto e adicionar ou removê-lo do carrinho de compras do WhatsApp:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/455731119_491422670275236_7231575948344280249_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=DQRC7ShTix4Q7kNvwEHqEZ-&_nc_oc=AdmfgiuJt-1BRNRiWbJhGtsVr00fB-uQ3J5gXypLfGK_6CkZbIJFu64w6WIx2DvKcoU&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=i07V1yh53yVu3Wxc5OuiDw&oh=00_AfnX1EqHyHchIDhgQhMi8G28FXVsRTM1qkOY_LK5SQmQyw&oe=69612C7F)

Se o usuário do WhatsApp adicionar o produto ao carrinho e enviar um pedido, você receberá uma notificação por meio do webhook, e o usuário verá que o pedido foi feito:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/455346606_8499522813412387_6714135406583255031_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=-8sf8UklbLEQ7kNvwG0QUfW&_nc_oc=Adn6csndtWBJ2mDa3NcXFp5wOvvnj5Y0Blre320U6g6tjzDVknRPQ2vUUnADoCPzSRw&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=i07V1yh53yVu3Wxc5OuiDw&oh=00_AfnwCPqLOkgBz7x-G0v-cpGz1npbUVq4DJNT1anT5XZTHg&oe=69611BC5)

Os usuários que fazem pedidos também podem usar o botão "Ver detalhes" para consultar informações sobre o pedido:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/455798578_1140213730376391_4808743486596066303_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=6QkwiPi8YkwQ7kNvwEzJA6f&_nc_oc=AdmBRw0GNOposyjKYhYUQgi1BWUq-Ew_cXqQq9pLYdFq1hJwZyGCBcoULIYfUB_Whqo&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=i07V1yh53yVu3Wxc5OuiDw&oh=00_AfnK-qpPONpy7c-_vOS0QGtnT5IG0JrI2vvfpF_NHHIPcQ&oe=69610A3F)

## Limitações

-   Os clientes devem estar usando a versão 2.22.24 ou posterior do WhatsApp.-   O encaminhamento de mensagens está desabilitado para modelos de SPM.

## Catálogos

É preciso ter um catálogo de produtos de comércio eletrônico com inventário conectado à sua conta do WhatsApp Business. Para saber mais sobre como conectar um catálogo à sua conta, consulte o guia de [comércio](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services) da API de Nuvem.

## Webhooks

Quando o cliente adiciona um ou mais produtos ao carrinho e envia um pedido, um webhook de [mensagens de pedido](/documentation/business-messaging/whatsapp/webhooks/reference/messages/order) é disparado, descrevendo o pedido.

## Criar modelos de SPM

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates) para criar um modelo de SPM.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "name": "<TEMPLATE_NAME>",
  "language": "<TEMPLATE_LANGUAGE>",
  "category": "marketing",
  "parameter_format": "<PARAMETER_FORMAT>",
  "components": [
    {
      "type": "header",
      "format": "product"
    },
    {
      "type": "body",
      "text": "<CARD_BODY_TEXT>",

      <!-- Example parameter values required, if body text contains parameters -->
      "example": {
        "body_text_named_params": [
          {
            "param_name": "<PARAMETER_NAME>",
            "example": "<PARAMETER_EXAMPLE>"
          },
          <!-- Additional parameters would follow -->
        ]
      }

    },
    {
      "type": "footer",
      "text": "<CARD_FOOTER_TEXT>"
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
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

Token de acesso.

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<API_VERSION>`

_String_

**Opcional.**

Versão da API. Em caso de omissão, o padrão será a versão da API mais recente disponível para o seu app.

`v23.0`

`<CARD_BODY_TEXT>`

_String_

**Obrigatório.**

Corpo do texto do cartão. Aceita variáveis.

Máximo de 160 caracteres.

`Use code {{1}} to get {{2}} off our newest succulent!`

`<CARD_FOOTER_TEXT>`

_String_

**Opcional.**

Texto do rodapé.

Máximo de 60 caracteres.

`September 30, 2024`

`<PARAMETER_NAME>`

_String_

**Obrigatório se o texto do corpo usar parâmetros.**

Exemplo de strings de valor do parâmetro. É preciso incluir um exemplo para cada parâmetro no texto do corpo.

`25OFF`

`<PARAMETER_FORMAT>`

_String_

**Opcional.**

[Formato do parâmetro](/documentation/business-messaging/whatsapp/templates/overview#parameter-formats) Os valores podem ser os seguintes:

-   `named`-   `positional`

Se a propriedade `parameter_format` for omitida, o modelo usará a formatação posicional.

`Lucky Shrub: Your gateway to succulents!`

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

`abandoned_cart_offer`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

**Obrigatório.**

Identificação da conta do WhatsApp Business.

`546151681022936`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/161311403722088/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "spm_template_named_params",
  "language": "en_US",
  "category": "marketing",
  "parameter_format": "named",
  "components": [
    {
      "type": "header",
      "format": "product"
    },
    {
      "type": "body",
      "text": "Use code {{code}} to get {{percent}} off our newest succulent!",
      "example": {
        "body_text_named_params": [
          {
            "param_name": "code",
            "example": "15OFF"
          },
          {
            "param_name": "percent",
            "example": "15%"
          }
        ]
      }
    },
    {
      "type": "footer",
      "text": "Offer ends September 22, 2024"
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
}'
```

## Enviar modelos de mensagem de produto único

### Sintaxe da solicitação

Use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de modelo SPM.

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
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
        "type": "header",
        "parameters": [
          {
            "type": "product",
            "product": {
              "product_retailer_id": "<PRODUCT_ID>",
              "catalog_id": "<CATALOG_ID>"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "parameter_name": "<PARAMETER_NAME>",
            "text": "<PARAMETER_VALUE>"
          },
          <!-- Additional parameter values would follow, if required by template -->
        ]
      }
    ]
  }
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

Token de acesso

`EAAAN...`

`<API_VERSION>`

_String_

**Opcional.**

Versão da API. Em caso de omissão, o padrão será a versão da API mais recente disponível para o seu app.

`v23.0`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

**Obrigatório.**

Identificação do número de telefone do WhatsApp Business.

`106540352242922`

`<CATALOG_ID>`

_String_

**Obrigatório.**

ID do [catálogo de comércio eletrônico conectado](https://www.facebook.com/business/help/158662536425974) que contém o produto.

`194836987003835`

`<PARAMETER_NAME>`

_String_

**Obrigatório se o modelo usar um ou mais parâmetros nomeados.**

Nome do [parâmetro nomeado](/documentation/business-messaging/whatsapp/templates/overview#named-parameters).

`code`

`<PARAMETER_VALUE>`

_String_

**Obrigatório se o modelo usar um ou mais parâmetros nomeados.**

Valor do [Parâmetro nomeado](/documentation/business-messaging/whatsapp/templates/overview#named-parameters).

`10OFF`

`<PRODUCT_ID>`

_String_

**Obrigatório.**

Identificação do produto.

`nqryix03ez`

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

`spm_template_named_params`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

### Exemplo de solicitação

Este exemplo envia o modelo aprovado "spm\_template\_named\_params", que injeta parâmetros (um código de desconto e a porcentagem de desconto) no corpo do modelo e inclui um rodapé. A imagem do produto é extraída do catálogo e exibida no cabeçalho da mensagem.

```
curl 'https://graph.facebook.com/v24.0/179776755229976/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "16505551234",
  "type": "template",
  "template": {
    "name": "spm_template_named_params",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "product",
            "product": {
              "product_retailer_id": "nqryix03ez",
              "catalog_id": "194836987003835"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "parameter_name": "code",
            "text": "25OFF"
          },
          {
            "type": "text",
            "parameter_name": "percent",
            "text": "25%"
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