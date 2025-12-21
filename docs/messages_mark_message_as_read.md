<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/mark-message-as-read -->
<!-- Scraped: 2025-12-20T17:28:15.004Z -->

# Marcar mensagens como lidas

Updated: 3 de nov de 2025

Ao receber um webhook de **mensagens** indicando que uma [mensagem foi recebida](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api), você pode usar o valor `message.id` para marcar a mensagem como lida.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/491643461_603380552708521_8284248965365504291_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=nZE53d1srOUQ7kNvwGeU_6B&_nc_oc=AdlKPw9HTLFWkBdme8pLhsyNqfRNSnJUUzpzOLIb873aahy382L8zxIHOu9zjqkkSjU&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=WpCuCZXvidXyjmwB7ajg-A&oh=00_AfnMhF4pdhyRv64gpvBUO5sgz--XtYUEa-YQkzw6MjRi7A&oe=696129B0)

Uma boa prática é marcar mensagens recebidas como lidas até 30 dias após a data de recebimento. Quando uma mensagem é marcada como lida, todas as mensagens anteriores presentes no thread recebem a mesma marcação.

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para marcar uma mensagem como lida.

```
curl -X POST \
'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages'
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '
{
  "messaging_product": "whatsapp",
  "status": "read",
  "message_id": "<WHATSAPP_MESSAGE_ID>"
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

ID do número de telefone comercial do WhatsApp.

`106540352242922`

`<WHATSAPP_MESSAGE_ID>`

_String_

**Obrigatório.**

Identificação da mensagem do WhatsApp. Essa identificação é atribuída à propriedade `messages.id` nos webhooks de **mensagem recebida** e [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages).

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
  "message_id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDQjZCMzlEQUE4OTJBMTE4RTUA"
}'
```

## Exemplo de resposta

```
{  "success": true}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)