<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/location-messages -->
<!-- Scraped: 2025-12-20T17:26:36.872Z -->

# Mensagens de localização

Updated: 3 de nov de 2025

As mensagens de localização permitem que você envie as coordenadas de latitude e longitude de uma localização para um usuário do WhatsApp.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/440753150_1614554799358194_4095127988263974385_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=BrEe0AmvDfcQ7kNvwH8IONX&_nc_oc=AdlQ1FCAhhAinXadDtpVYk3Y28NuMeaZSFJgreyojjcjGjCb8eLcfRdObpE8017bIuY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=wDhCC1mgQHUWV4v7IPHsnA&oh=00_AfntkRvpiGwHP1HpJHWVrjjOtD3j8eLZAMb0bQSHyUnQcw&oe=69612821)

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
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "location",
  "location": {
    "latitude": "<LOCATION_LATITUDE>",
    "longitude": "<LOCATION_LONGITUDE>",
    "name": "<LOCATION_NAME>",
    "address": "<LOCATION_ADDRESS>"
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

`<LOCATION_ADDRESS>`

_String_

**Opcional.**

Endereço da localização.

`101 Forest Ave, Palo Alto, CA 94301`

`<LOCATION_LATITUDE>`

_String_

**Obrigatório.**

Latitude da localização em graus decimais.

`37.44216251868683`

`<LOCATION_LONGITUDE>`

_String_

**Obrigatório.**

Longitude da localização em graus decimais.

`-122.16153582049394`

`<LOCATION_NAME>`

_String_

**Opcional.**

Nome da localização.

`Philz Coffee`

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

## Exemplo de solicitação

Exemplo de solicitação para enviar uma mensagem de localização com nome e endereço.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "location",
  "location": {
    "latitude": "37.44216251868683",
    "longitude": "-122.16153582049394",
    "name": "Philz Coffee",
    "address": "101 Forest Ave, Palo Alto, CA 94301"
  }
}'
```

## Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)