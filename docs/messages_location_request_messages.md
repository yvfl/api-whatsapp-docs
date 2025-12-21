<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/location-request-messages -->
<!-- Scraped: 2025-12-20T17:26:44.639Z -->

# Mensagens de solicitação de localização

Updated: 3 de nov de 2025

As mensagens de solicitação de localização exibem um **texto principal** e um **botão "Enviar localização"**. Quando o usuário do WhatsApp toca no botão, uma tela para compartilhar a localização é exibida, permitindo que ele faça o compartilhamento.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/411712787_1346691626211128_4092487602815472288_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=cx5cde495L8Q7kNvwGa5J1-&_nc_oc=AdnpjiCdVlhPdW_3PIwlaj2GBsVhvFtMpoZjn1z-wXqIUI_3YieiyNblm9c-UmJ-8t8&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=YCZCvgOKxqWHMd7YavLBBQ&oh=00_AfmBAPoDB7aFfBcCaJmafk-Sc37nTpt46Z9A_5KB27fBsA&oe=696122AA)

  
Após o compartilhamento, será disparado um webhook de **mensagens** com detalhes da localização do usuário.

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de solicitação de localização a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "type": "interactive",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "interactive": {
    "type": "location_request_message",
    "body": {
      "text": "<BODY_TEXT>"
    },
    "action": {
      "name": "send_location"
    }
  }
}'
```

## Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

[Token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ou [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<API_VERSION>`

_String_

**Opcional.**

Versão da Graph API.

v24.0

`<BODY_TEXT>`

_String_

**Obrigatório.**

Texto do corpo da mensagem. Compatível com URLs.

Máximo de 1.024 caracteres.

`Let's start with your pickup. You can either manually *enter an address* or *share your current location*.`

`<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`

_String_

**Obrigatório.**

Identificação do número de telefone do WhatsApp Business.

`106540352242922`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

## Sintaxe do webhook

Quando um usuário do WhatsApp compartilha a localização em resposta à sua mensagem, um webhook de **mensagens** com os detalhes da localização é disparado.

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
              "display_phone_number": "<WHATSAPP_BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_NAME>"
                },
                "wa_id": "<WHATSAPP_USER_ID>"
              }
            ],
            "messages": [
              {
                "context": {
                  "from": "<WHATSAPP_BUSINESS_PHONE_NUMBER>",
                  "id": "<WHATSAPP_CONTEXT_MESSAGE_ID>"
                },
                "from": "<WHATSAPP_USER_ID>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<TIMESTAMP>",
                "location": {
                  "address": "<LOCATION_ADDRESS>",
                  "latitude": <LOCATION_LATITUDE>,
                  "longitude": <LOCATION_LONGITUDE>,
                  "name": "<LOCATION_NAME>"
                },
                "type": "location"
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

## Parâmetros de webhook

Espaço reservado

Descrição

Valor de exemplo

`<LOCATION_ADDRESS>`

_String_

Endereço da localização.

Este parâmetro será exibido apenas se o usuário do WhatsApp decidir compartilhá-lo.

`1071 5th Ave, New York, NY 10128`

`<LOCATION_LATITUDE>`

_Número_

Latitude da localização em graus decimais.

`40.782910059774`

`<LOCATION_LONGITUDE>`

_Número_

Longitude da localização em graus decimais.

`-73.959075808525`

`<LOCATION_NAME>`

_String_

Nome da localização.

Este parâmetro será exibido apenas se o usuário do WhatsApp decidir compartilhá-lo.

`Solomon R. Guggenheim Museum`

`<TIMESTAMP>`

_String_

Registro de data e hora UNIX indicando quando os servidores processaram a mensagem do usuário do WhatsApp.

`1702920965`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

`<WHATSAPP_BUSINESS_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial do WhatsApp exibido.

`15550783881`

`<WHATSAPP_BUSINESS_PHONE_NUMBER>`

_String_

Número de telefone comercial do WhatsApp.

`15550783881`

`<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`

_String_

ID do número de telefone comercial do WhatsApp.

`106540352242922`

`<WHATSAPP_CONTEXT_MESSAGE_ID>`

_String_

ID da mensagem do WhatsApp que o usuário está respondendo.

`wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1QjJGRjI1RDY0RkE4Nzg4QzcA`

`<WHATSAPP_MESSAGE_ID>`

_String_

ID da mensagem do usuário no WhatsApp.

`wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQTRCRDcwNzgzMTRDNTAwRTgwRQA=`

`<WHATSAPP_USER_ID>`

_String_

Identificação do usuário do WhatsApp.

`16505551234`

`<WHATSAPP_USER_NAME>`

_String_

Nome do usuário do WhatsApp.

`Pablo Morales`

## Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "type": "interactive",
  "to": "+16505551234",
  "interactive": {
    "type": "location_request_message",
    "body": {
      "text": "Let'\''s start with your pickup. You can either manually *enter an address* or *share your current location*."
    },
    "action": {
      "name": "send_location"
    }
  }
}'
```

## Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBJCNUQ5RUNBNTk3OEQ2M0ZEQzgA"    }  ]}
```

## Exemplo de webhook

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Pablo Morales"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "context": {                  "from": "15550783881",                  "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1QjJGRjI1RDY0RkE4Nzg4QzcA"                },                "from": "16505551234",                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQTRCRDcwNzgzMTRDNTAwRTgwRQA=",                "timestamp": "1702920965",                "location": {                  "address": "1071 5th Ave, New York, NY 10128",                  "latitude": 40.782910059774,                  "longitude": -73.959075808525,                  "name": "Solomon R. Guggenheim Museum"                },                "type": "location"              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)