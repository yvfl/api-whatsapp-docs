<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/location -->
<!-- Scraped: 2025-12-20T17:37:44.483Z -->

# Referência do webhook de mensagens de localização

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **mensagens** da conta do WhatsApp Business para mensagens com informações de localização.

## Gatilhos

-   Um usuário do WhatsApp envia uma mensagem de localização para uma empresa.-   Um usuário do WhatsApp envia uma localização a uma empresa por meio de um anúncio de clique para o WhatsApp.

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
                "location": {
                  "address": "<LOCATION_ADDRESS>",
                  "latitude": <LOCATION_LATITUDE>,
                  "longitude": <LOCATION_LONGITUDE>,
                  "name": "<LOCATION_NAME>",
                  "url": "<LOCATION_URL>"
                },
                "type": "location",

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
                  "ctwa_clid": "<AD_CLICK_ID>",
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

URL do vídeo de anúncio de clique para o WhatsApp. Incluído apenas em anúncios em vídeo.

`https://scontent.xx.fbcdn.net/v/t45.2...`

`<BUSINESS_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial exibido.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial.

`106540352242922`

`<IDENTITY_KEY_HASH>`

_String_

Hash de chave de identidade. Esse campo só será incluído se você tiver habilitado o recurso de [verificação de alteração de identidade](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

`DF2lS5v2W6x=`

`<LOCATION_ADDRESS>`

_String_

Endereço da localização.

`101 Forest Ave, Palo Alto, CA 94301`

`<LOCATION_LATITUDE>`

_Flutuante_

Latitude da localização em graus decimais.

`37.44221496582`

`<LOCATION_LONGITUDE>`

_Flutuante_

Longitude da localização em graus decimais.

`-122.16165924072`

`<LOCATION_NAME>`

_String_

Nome da localização.

`Philz Coffee`

`<LOCATION_URL>`

_String_

URL da localização. Geralmente incluído apenas para pontos comerciais.

`https://philzcoffee.com/`

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

Número de telefone do usuário do WhatsApp. É o mesmo valor retornado pela API como o valor de `input` ao enviar uma mensagem para um usuário do WhatsApp. Vale observar que a identificação de um usuário do WhatsApp nem sempre coincide com seu número de telefone.

`+16505551234`

`<WHATSAPP_USER_PROFILE_NAME>`

_String_

O nome de usuário do WhatsApp exibido no perfil do cliente na plataforma.

`Sheena Nelson`

## Exemplo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "timestamp": "1744344496",                "location": {                  "address": "101 Forest Ave, Palo Alto, CA 94301",                  "latitude": 37.44221496582,                  "longitude": -122.16165924072,                  "name": "Philz Coffee",                  "url": "https://philzcoffee.com/"                },                "type": "location"              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)