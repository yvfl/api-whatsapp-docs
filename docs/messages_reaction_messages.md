<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/reaction-messages -->
<!-- Scraped: 2025-12-20T17:26:59.044Z -->

# Mensagens de reação

Updated: 3 de nov de 2025

As mensagens de reação são reações com emojis que você pode aplicar a uma mensagem recebida anteriormente no WhatsApp.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/440791676_2613895758778914_1777908069161322734_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=FUioFWm7xCIQ7kNvwFkRCUn&_nc_oc=Adnh18hOTJOqyeMuvx-5_TesLX6x3glnBudr7eh-Z9UGUS8kPkMMcwm9lJjT6WwDVBY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=UFg21IpadDojHzYm2OISxg&oh=00_Aflrl5UrmReSCxBzq-5Az7MkTRpVj5dz87jNCpNLbh1Dmg&oe=69610C71)

## Limitações

Ao enviar uma mensagem de reação, apenas um [webhook de mensagem enviada](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) (com `status` definido como `sent`) será disparado. O disparo não ocorrerá para webhooks de mensagens entregues e lidas.

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para aplicar uma reação de emoji a uma mensagem que você recebeu de um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "reaction",
  "reaction": {
    "message_id": "<WHATSAPP_MESSAGE_ID>",
    "emoji": "<EMOJI>"
  }
}'
```

## Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

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

`<EMOJI>`

_String_

**Obrigatório.**

A sequência de escape Unicode do emoji, ou o próprio emoji, a ser aplicado à mensagem do usuário.

Exemplo de sequência de escape Unicode:

`\uD83D\uDE00`

Exemplo de emoji:

😀

`<WHATSAPP_MESSAGE_ID>`

_String_

**Obrigatório.**

A identificação da mensagem do WhatsApp para aplicação do emoji.

Se a mensagem à qual se destina a reação tiver mais de 30 dias, não corresponder a nenhuma mensagem na conversa, tiver sido excluída ou já for uma mensagem de reação, sua reação não será entregue e você receberá um webhook de **mensagens** com o código de erro `131009`.

`wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQUZCMTY0MDc2MUYwNzBDNTY5MAA=`

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

Exemplo de solicitação para aplicar o emoji de rosto sorridente (😀) a uma mensagem recebida anteriormente.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "reaction",
  "reaction": {
    "message_id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQUZCMTY0MDc2MUYwNzBDNTY5MAA=",
    "emoji": "\uD83D\uDE00"
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