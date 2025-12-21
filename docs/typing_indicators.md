<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/typing-indicators -->
<!-- Scraped: 2025-12-20T17:28:32.563Z -->

# Indicadores de digitação

Updated: 21 de out de 2025

Quando você recebe um webhook de **mensagens** indicando uma [mensagem recebida](/documentation/business-messaging/whatsapp/webhooks/reference/messages), é possível usar o valor `message.id` para marcar a mensagem como lida e exibir um indicador de digitação. Dessa forma, o usuário do WhatsApp saberá que você está escrevendo uma resposta. Essa é uma boa prática quando você leva alguns segundos para responder.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/488360772_654124507349470_2240843625651955811_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=SOmR3VEATaIQ7kNvwFICFZM&_nc_oc=AdmEKViP8uwXabo6KNoa5gxXstpEeRWO7IW2IqlktzChF8DTaemxuW9XgyjutmuYHMA&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=Yy_6Bs5Hnba6LTP3X7hJkw&oh=00_Afkl5rWPVXizmdtXPQRBws7_vYYStOXQVOuVLFctdmDmxw&oe=6961179C)

O indicador de digitação será removido depois que você responder ou após 25 segundos, o que ocorrer primeiro. Para evitar uma experiência ruim para o usuário, só exiba o indicador de digitação se você for responder.

## Sintaxe da solicitação

```
curl -X POST \
'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages'
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '
{
  "messaging_product": "whatsapp",
  "status": "read",
  "message_id": "<WHATSAPP_MESSAGE_ID>",
  "typing_indicator": {
    "type": "text"
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

`<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`

_String_

**Obrigatório.**

Identificação do número de telefone do WhatsApp Business.

`106540352242922`

`<WHATSAPP_MESSAGE_ID>`

_String_

**Obrigatório.**

Identificação da mensagem do WhatsApp. Essa identificação é atribuída à propriedade `messages.id` nos webhooks de **mensagem recebida**[mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages).

`wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDQjZCMzlEQUE4OTJBMTE4RTUA`

## Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

## Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "status": "read",
  "message_id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDQjZCMzlEQUE4OTJBMTE4RTUA",
  "typing_indicator": {
    "type": "text"
  }
}'
```

## Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)