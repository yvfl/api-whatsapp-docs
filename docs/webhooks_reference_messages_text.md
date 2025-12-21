<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/text -->
<!-- Scraped: 2025-12-20T17:38:39.549Z -->

# Referência do webhook de mensagens de texto

Updated: 27 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **mensagens** da conta do WhatsApp Business para mensagens contendo apenas texto.

## Gatilhos

-   Um usuário do WhatsApp envia uma mensagem de texto para um número de telefone do WhatsApp Business.-   Um usuário do WhatsApp encaminha uma mensagem de texto para um número de telefone comercial.-   Um usuário do WhatsApp usa o botão **Conversar com a empresa** em uma [mensagem de catálogo, de produto único ou de vários produtos](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services) para enviar uma mensagem à empresa.-   Um usuário do WhatsApp envia um SMS para a empresa por meio de um [anúncio de clique para o WhatsApp](https://www.facebook.com/business/help/447934475640650?id=371525583593535) (um anúncio com **destino de mensagem** do WhatsApp).

## Sintaxe

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_PROFILE_NAME>"
                },
                "wa_id": "<WHATSAPP_USER_ID>",
                "identity_key_hash": "<IDENTITY_KEY_HASH>" <!-- only included if identity change check enabled -->
              }
            ],
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "text",
                "text": {
                  "body": "<MESSAGE_TEXT_BODY>"
                },

                <!-- only if message originated from a "Message business" button -->
                "context": {
                  "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                  "id": "<CONTEXTUAL_WHATSAPP_MESSAGE_ID>",
                  "referred_product": {
                    "catalog_id": "<PRODUCT_CATALOG_ID>",
                    "product_retailer_id": "<PRODUCT_ID>"
                  }
                },

                <!-- only if message forwarded to business by a user -->
                "context": {
                  "forwarded": true,            <!-- only included if forwarded 5 times or less -->
                  "frequently_forwarded": true  <!-- only included if forwarded more than 5 times -->
                },

                <!-- only included if message sent via a Click to WhatsApp ad -->
                "referral": {
                  "source_url": "<AD_URL>",
                  "source_id": "<AD_ID>",
                  "source_type": "ad",
                  "body": "<AD_PRIMARY_TEXT>",
                  "headline": "<AD_HEADLINE>",
                  "media_type": "<AD_MEDIA_TYPE>",
                  "image_url": "<AD_IMAGE_URL>",
                  "video_url": "<AD_VIDEO_URL>",
                  "thumbnail_url": "<AD_VIDEO_THUMBNAIL>",
                  "ctwa_clid": "<AD_CLICK_ID>",  <!-- omitted if message sent via a WhatsApp Status ad placement -->
                  "welcome_message": {
                    "text": "<AD_GREETING_TEXT>"
                  }
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

## Parâmetros

Espaço reservado

Descrição

Valor de exemplo

`<AD_CLICK_ID>`

_String_

Identificação do clique em um anúncio de clique para o WhatsApp.

A propriedade `ctwa_clid` é totalmente omitida para mensagens originadas de um anúncio no Status do WhatsApp ([posicionamentos de anúncio no Status do WhatsApp](https://www.facebook.com/business/help/1074444721456755)).

`Aff-n8ZTODiE79d22KtAwQKj9e_mIEOOj27vDVwFjN80dp4_0NiNhEgpGo0AHemvuSoifXaytfTzcchptiErTKCqTrJ5nW1h7IHYeYymGb5K5J5iTROpBhWAGaIAeUzHL50`

`<AD_GREETING_TEXT>`

_String_

Texto de saudação do anúncio de clique para o WhatsApp.

`Hi there! Let us know how we can help!`

`<AD_HEADLINE>`

_String_

Título do anúncio de clique para o WhatsApp.

`Chat with us`

`<AD_ID>`

_String_

Identificação do anúncio de clique para o WhatsApp.

`120226305854810726`

`<AD_IMAGE_URL>`

_String_

URL da imagem do anúncio de clique para o WhatsApp. Incluído apenas se o anúncio for do tipo imagem.

`https://scontent.xx.fbcdn.net/v/t45.1...`

`<AD_MEDIA_TYPE>`

_String_

Tipo de mídia do anúncio de clique para o WhatsApp. Os valores podem ser os seguintes:

`image` – indica um anúncio de imagem.

`video` – indica um anúncio em vídeo.

`image`

`<AD_PRIMARY_TEXT>`

_String_

Texto principal do anúncio de clique para o WhatsApp.

`Summer succulents are here!`

`<AD_URL>`

_String_

URL do anúncio de clique para o WhatsApp.

`https://fb.me/3cr4Wqqkv`

`<AD_VIDEO_THUMBNAIL>`

_String_

URL da miniatura de vídeo do anúncio de clique para o WhatsApp. Incluído apenas em anúncios em vídeo.

`https://scontent.xx.fbcdn.net/v/t45.3...`

`<AD_VIDEO_URL>`

_String_

URL do vídeo de anúncio de clique para o WhatsApp. Incluído apenas em anúncios de vídeo.

`https://scontent.xx.fbcdn.net/v/t45.2...`

`<BUSINESS_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial exibido.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial.

`106540352242922`

`<CONTEXTUAL_WHATSAPP_MESSAGE_ID>`

_String_

ID da mensagem do WhatsApp que o usuário usou para acessar o botão Conversar com a empresa.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgARGA9wcm9kdWN0X2lucXVpcnkA`

`<IDENTITY_KEY_HASH>`

_String_

Hash de chave de identidade. Esse campo só será incluído se você tiver habilitado o recurso de [verificação de alteração de identidade](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

`DF2lS5v2W6x=`

`<MESSAGE_TEXT_BODY>`

_String_

Corpo de texto da mensagem.

`Is it available in another color?`

`<PRODUCT_CATALOG_ID>`

_String_

[Identificação do catálogo de produtos](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services).

`194836987003835`

`<PRODUCT_ID>`

_String_

[Identificação do produto](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services).

`di9ozbzfi4`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_String_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

`<WHATSAPP_MESSAGE_ID>`

_String_

Identificação da mensagem do WhatsApp.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=`

`<WHATSAPP_USER_ID>`

_String_

Número de identificação do usuário do WhatsApp. Vale observar que o número de identificação de um usuário do WhatsApp nem sempre coincide com seu número de telefone.

`16505551234`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

Número de telefone do usuário do WhatsApp. É o mesmo valor retornado pela API como o valor de `input` ao enviar uma mensagem para um usuário do WhatsApp. Vale observar que o número de identificação de um usuário do WhatsApp nem sempre coincide com seu número de telefone.

`+16505551234`

`<WHATSAPP_USER_PROFILE_NAME>`

_String_

O nome de usuário do WhatsApp exibido no perfil do cliente na plataforma.

`Sheena Nelson`

## Exemplos:

### Mensagem de texto

Este exemplo descreve uma mensagem de texto enviada por um usuário do WhatsApp (que digitou algo no campo de conversa e enviou).

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",                "timestamp": "1749416383",                "type": "text"                "text": {                  "body": "Does it come in another color?"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

### Botão Enviar mensagem para a empresa

Este exemplo descreve uma mensagem de texto enviada por um usuário do WhatsApp que usou o botão **Conversar com a empresa** ao [visualizar um único produto](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services) para enviar a mensagem.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "419561257915477",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "context": {                  "from": "15550783881",                  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGA9wcm9kdWN0X2lucXVpcnkA",                  "referred_product": {                    "catalog_id": "194836987003835",                    "product_retailer_id": "di9ozbzfi4"                  }                },                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTA2NTUwRkNEMDdFQjJCRUU0NQA=",                "timestamp": "1750016800",                "text": {                  "body": "Is this still available?"                },                "type": "text"              }            ]          },          "field": "messages"        }      ]    }  ]}
```

### Anúncio de clique para o WhatsApp

Este exemplo descreve um SMS enviado por um usuário do WhatsApp que tocou em um [anúncio de clique para o WhatsApp](https://www.facebook.com/business/help/447934475640650) e enviou a mensagem gerada para a empresa.

Para mensagens originadas de um anúncio no Status do WhatsApp ([posicionamentos de anúncio no Status do WhatsApp](https://www.facebook.com/business/help/1074444721456755)) a propriedade `referral.ctwa_clid` é omitida por completo.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "referral": {                  "source_url": "https://fb.me/3cr4Wqqkv",                  "source_id": "120226305854810726",                  "source_type": "ad",                  "body": "Summer Succulents are here!",                  "headline": "Chat with us",                  "media_type": "image",                  "image_url": "https://scontent.xx.fbcdn.net/v/t45.1...",                  "ctwa_clid": "Aff-n8ZTODiE79d22KtAwQKj9e_mIEOOj27vDVwFjN80dp4_0NiNhEgpGo0AHemvuSoifXaytfTzcchptiErTKCqTrJ5nW1h7IHYeYymGb5K5J5iTROpBhWAGaIAeUzHL50",                  "welcome_message": {                    "text": "Hi there! Let us know how we can help!"                  }                },                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUQ0N0VFMDA2MTQ0RkJFNkNDNAA=",                "timestamp": "1750275992",                "text": {                  "body": "Can I get more info about this?"                },                "type": "text"              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)