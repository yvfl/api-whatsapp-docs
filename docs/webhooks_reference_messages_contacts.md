<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/contacts -->
<!-- Scraped: 2025-12-20T17:36:57.508Z -->

# Referência de webhook de mensagens de contatos

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **mensagens** da conta do WhatsApp Business para mensagens com um ou mais contatos.

## Gatilhos

-   Um usuário do WhatsApp envia um ou mais contatos a uma empresa.-   Um usuário do WhatsApp envia um ou mais contatos a uma empresa por meio de um anúncio de clique para o WhatsApp.

## Sintaxe

Observe que muitas propriedades do objeto de contato poderão ser omitidas se o usuário do WhatsApp escolher não compartilhá-las ou se o dispositivo impedir o compartilhamento delas.

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
                "type": "contacts",
                "contacts": [
                  {
                    "addresses": [
                      {
                        "city": "<CONTACT_CITY>",
                        "country": "<CONTACT_COUNTRY>",
                        "country_code": "<CONTACT_COUNTRY_CODE>",
                        "state": "<CONTACT_STATE>",
                        "street": "<CONTACT_STREET>",
                        "type": "<CONTACT_ADDRESS_TYPE>",
                        "zip": "<CONTACT_ZIP>"
                      }
                    ],
                    "birthday": "<CONTACT_BIRTHDAY>",
                    "emails": [
                      {
                        "email": "<CONTACT_EMAIL>",
                        "type": "<CONTACT_EMAIL_TYPE>"
                      }
                    ],
                    "name": {
                      "formatted_name": "<CONTACT_FORMATTED_NAME>",
                      "first_name": "<CONTACT_FIRST_NAME>",
                      "last_name": "<CONTACT_LAST_NAME>",
                      "middle_name": "<CONTACT_MIDDLE_NAME>",
                      "suffix": "<CONTACT_NAME_SUFFIX>",
                      "prefix": "<CONTACT_NAME_PREFIX>"
                    },
                    "org": {
                      "company": "<CONTACT_ORG_COMPANY>",
                      "department": "<CONTACT_ORG_DEPARTMENT>",
                      "title": "<CONTACT_ORG_TITLE>"
                    },
                    "phones": [
                      {
                        "phone": "<CONTACT_PHONE>",
                        "wa_id": "<CONTACT_WHATSAPP_PHONE_NUMBER>",
                        "type": "<CONTACT_PHONE_TYPE>"
                      }
                    ],
                    "urls": [
                      {
                        "url": "<CONTACT_URL>",
                        "type": "<CONTACT_URL_TYPE>"
                      }
                    ]
                  }
                ],

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

URL da imagem do anúncio de clique para o WhatsApp. Incluído apenas em anúncios de imagem.

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

`<CONTACT_ADDRESS_TYPE>`

_String_

O tipo de endereço, como residencial ou comercial.

`Home`

`<CONTACT_BIRTHDAY>`

_String_

Aniversário do contato.

`1999-01-23`

`<CONTACT_CITY>`

_String_

Cidade mencionada no endereço de contato.

`Menlo Park`

`<CONTACT_COUNTRY_CODE>`

_String_

Código de país ISO no endereço de contato.

`US`

`<CONTACT_COUNTRY>`

_String_

País mencionado no endereço de contato.

`United States`

`<CONTACT_EMAIL_TYPE>`

_String_

O tipo de email, como pessoal ou profissional.

`Personal`

`<CONTACT_EMAIL>`

_String_

O endereço de email do contato.

`bjohson@socialtsunami.com`

`<CONTACT_FIRST_NAME>`

_String_

Nome do contato.

`Barbara`

`<CONTACT_FORMATTED_NAME>`

_String_

Nome do contato formatado.

`Barbara J. Johnson`

`<CONTACT_LAST_NAME>`

_String_

Sobrenome do contato.

`Johnson`

`<CONTACT_MIDDLE_NAME>`

_String_

Nome do meio do contato.

`Joana`

`<CONTACT_NAME_PREFIX>`

_String_

O prefixo do nome do contato.

`Dr.`

`<CONTACT_NAME_SUFFIX>`

_String_

Sufixo do nome do contato.

`Esq.`

`<CONTACT_ORG_COMPANY>`

_String_

Nome da empresa onde o contato trabalha.

`Social Tsunami`

`<CONTACT_ORG_DEPARTMENT>`

_String_

Nome da empresa onde o contato trabalha.

`Engineering`

`<CONTACT_ORG_TITLE>`

_String_

Cargo do contato.

`Software Engineer`

`<CONTACT_PHONE_TYPE>`

_String_

O tipo de número de telefone. Por exemplo, celular, iPhone, residencial, comercial etc.

`CELL`

`<CONTACT_PHONE>`

_String_

O número de telefone do contato.

`+14125550829`

`<CONTACT_STATE>`

_String_

Estado mencionado no endereço de contato.

`CA`

`<CONTACT_STREET>`

_String_

Rua mencionada no endereço de contato.

`1 Hacker Way`

`<CONTACT_URL_TYPE>`

_String_

O tipo de site. Por exemplo, empresa, trabalho, pessoal, Página do Facebook, Instagram etc.

`Company`

`<CONTACT_URL>`

_String_

O URL do site associado ao contato ou à empresa.

`socialtsunami.com`

`<CONTACT_WHATSAPP_PHONE_NUMBER>`

_String_

O número do WhatsApp do contato.

`14125550829`

`<CONTACT_ZIP>`

_String_

Código postal no endereço de contato.

`94025`

`<IDENTITY_KEY_HASH>`

_String_

Hash de chave de identidade. Esse campo só será incluído se você tiver habilitado o recurso de [verificação de alteração de identidade](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

`DF2lS5v2W6x=`

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

## Exemplo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",                "timestamp": "1744344496",                "type": "contacts",                "contacts": [                  {                    "name": {                      "first_name": "Barbara",                      "last_name": "Johnson",                      "formatted_name": "Barbara J. Johnson"                    },                    "org": {                      "company": "Social Tsunami"                    },                    "phones": [                      {                        "phone": "+1 (415) 555-0829",                        "wa_id": "14125550829",                        "type": "MOBILE"                      }                    ]                  }                ]              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)