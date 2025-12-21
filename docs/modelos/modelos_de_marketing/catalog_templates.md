<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/catalog-templates -->
<!-- Scraped: 2025-12-20T17:31:45.828Z -->

# Modelos de catálogo

Updated: 14 de nov de 2025

Este documento explica como criar modelos de catálogo. Consulte [Vender produtos e serviços](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services) para saber mais sobre catálogos e formas de mostrar seus produtos.

Os modelos de catálogo são modelos de marketing que permitem exibir o catálogo de produtos no WhatsApp. Eles mostram uma imagem de cabeçalho em miniatura do produto da sua escolha e um texto de corpo personalizado, com um cabeçalho e um subcabeçalho de texto fixos.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/354047426_125269187252102_7173148343631613735_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ercU4R82IO8Q7kNvwHIDRV2&_nc_oc=AdntBmh_C-dk_ym_1iQMDenpdKHh4_99UjES6YE9gVOGPu7mWg9aldTWt743UBMTPhc&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=SAP-KB3ftwPr1vsWhui2ZA&oh=00_AfmodDV66M8NxRvHgXAJKuawbZH87te7joIhIf1X2aA3Ng&oe=69611766)

Quando o cliente toca no botão **Ver catálogo** em uma mensagem desse tipo, seu catálogo de produtos aparece no WhatsApp.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/353808079_9331603410246288_3629219693038191737_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Da759WHP77YQ7kNvwF9y-UB&_nc_oc=Adll81mvza4Baf2pIiiqNzSFtDK2SW5j7AL9zqCYrv-YedeMgyIypTNUHLyOy2JOkEA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=SAP-KB3ftwPr1vsWhui2ZA&oh=00_Afn5pL1Wi0LpgbOz9JjglGDeIiV9I2Vp7H6NGJegq0-1iQ&oe=69611D28)

## Criar modelos de catálogo

### Requisitos

Você precisa ter um [inventário carregado na Meta](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/upload-inventory) em um catálogo de comércio eletrônico [conectado à sua conta do WhatsApp Business](https://www.facebook.com/business/help/158662536425974).

### Sintaxe da solicitação

Use o ponto de extremidade [Conta do WhatsApp Business > Modelos de mensagem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) para criar um modelo de catálogo. Depois que seu modelo for aprovado, você poderá usar a API de Nuvem para enviá-lo em uma mensagem.

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
{
    "name": "<NAME>",
    "language": "<LANGUAGE>",
    "category": "MARKETING",
    "components": [
      {
        "type": "BODY",
        "text": "<BODY_TEXT>",
        "example": {
          "body_text": [
            [
              "<EXAMPLE_BODY_TEXT>"
            ]
          ]
        }
      },
      {
        "type": "FOOTER",
        "text": "<FOOTER_TEXT>"
      },
      {
        "type": "BUTTONS",
        "buttons": [
          {
            "type": "CATALOG",
            "text": "View catalog"
          }
        ]
      }
    ]
  }'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Exemplo de valor

`<BODY_TEXT>`

_String_

**Obrigatório.**

  
Corpo de texto do modelo. Variáveis são compatíveis.

  
Máximo de 1.024 caracteres.

`Now shop for your favorite products right here on WhatsApp! Get Rs {{1}} off on all orders above {{2}}Rs! Valid for your first {{3}} orders placed on WhatsApp!`

`<EXAMPLE_BODY_TEXT>`

_String (de uma matriz de strings)_

**Obrigatório se o texto do corpo usar variáveis.**

  
Strings de amostra para substituir os espaços reservados variáveis na string `<BODY_TEXT>`.

  
Máximo de 1.024 caracteres.

`100`

`<FOOTER_TEXT>`

_String_

**Opcional.**

  
Texto de rodapé do modelo. Variáveis são compatíveis.

  
Máximo de 60 caracteres.

`Best grocery deals on WhatsApp!`

`<LANGUAGE>`

_String_

**Obrigatório.**

  
O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<NAME>`

_String_

**Obrigatório.**

  
O nome do modelo.

  
Máximo de 512 caracteres.

`intro_catalog_offer`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v17.0/102290129340398/message_templates' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "name": "intro_catalog_offer",  "language": "en_US",  "category": "MARKETING",  "components": [    {      "type": "BODY",      "text": "Now shop for your favorite products right here on WhatsApp! Get Rs {{1}} off on all orders above {{2}}Rs! Valid for your first {{3}} orders placed on WhatsApp!",      "example": {        "body_text": [          [            "100",            "400",            "3"          ]        ]      }    },    {      "type": "FOOTER",      "text": "Best grocery deals on WhatsApp!"    },    {      "type": "BUTTONS",      "buttons": [        {          "type": "CATALOG",          "text": "View catalog"        }      ]    }  ]}'
```

### Exemplo de resposta

```
{  "id": "546151681022936",  "status": "PENDING",  "category": "MARKETING"}
```

## Enviar mensagens de modelo de catálogo

Este documento explica como enviar [modelos de catálogo](/documentation/business-messaging/whatsapp/templates/marketing-templates/catalog-templates) aprovados em uma mensagem. Consulte [Vender produtos e serviços](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services) para saber mais sobre catálogos e formas de mostrar seus produtos.

### Requisitos

Você precisa ter um [inventário carregado na Meta](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/upload-inventory) em um catálogo de comércio eletrônico [conectado à sua conta do WhatsApp Business](https://www.facebook.com/business/help/158662536425974).

### Sintaxe da solicitação

Use o ponto de extremidade [Número de telefone do WhatsApp Business > Mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem usando um modelo de catálogo com o status `APPROVED`.

```
curl -X POST "https://graph.facebook.com/v19.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
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
          "type": "body",
          "parameters": [
            {
              "type": "<TYPE>",
              "text": "<TEXT>"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "CATALOG",
          "index": 0,
          "parameters": [
            {
              "type": "action",
              "action": {
                "thumbnail_product_retailer_id": "<THUMBNAIL_PRODUCT_RETAILER_ID>"
              }
            }
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

`<CODE>`

_String_

**Obrigatório.**

  
O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<NAME>`

_String_

**Obrigatório.**

  
O nome do modelo.

`intro_catalog_offer`

`<THUMBNAIL_PRODUCT_RETAILER_ID>`

_String_

**Opcional.**

  
Número SKU do item. Rotulado como identificação de conteúdo no Gerenciador de Comércio.

  
A miniatura deste item será usada como a imagem de cabeçalho da mensagem.

  
Se o objeto `parameters` for omitido, será usada a imagem do primeiro item do seu catálogo.

`2lc20305pt`

`<TEXT>`

_String_

**Obrigatório se o modelo usar variáveis.**

  
Variável do modelo.

`100`

`<TO>`

_String_

**Obrigatório.**

  
Número de telefone do cliente.

`+16505551234`

`<TYPE>`

_String_

**Obrigatório se o modelo usar variáveis.**

  
Tipo de variável do modelo.

`text`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v17.0/106540352242922/messages' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "+16505551234",  "type": "template",  "template": {    "name": "intro_catalog_offer",    "language": {      "code": "en_US"    },    "components": [      {        "type": "body",        "parameters": [          {            "type": "text",            "text": "100"          },          {            "type": "text",            "text": "400"          },          {            "type": "text",            "text": "3"          }        ]      },      {        "type": "button",        "sub_type": "CATALOG",        "index": 0,        "parameters": [          {            "type": "action",            "action": {              "thumbnail_product_retailer_id": "2lc20305pt"            }          }        ]      }    ]  }}'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI5RkEwM0EyODFEQzQ2NDYzQTMA"    }  ]}
```

## Veja também

-   [Vender produtos e serviços](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services)-   [Mensagens de catálogo](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products#catalog-messages)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)