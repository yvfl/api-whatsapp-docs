# SMS

Updated: 3 de nov de 2025

Os SMS contêm somente um corpo de texto e uma prévia de link opcional.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/440742591_797870012016470_1123226266833971975_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=0og1R4bzYQsQ7kNvwFDM9TH&_nc_oc=Adn8MCGzE9i_5kN91aW1k6pJPGgLHQuEwT7hTqBNVLXvvFN3Y9HMAwQ0pmywHbuWSGg&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=iWgzZk6S1ZypZLNKhPKNJg&oh=00_AfkK34vO4nYFqSiUP0DKEaivvIydhgvfk6YXYUEnz-scaQ&oe=696117AB)

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de texto a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "text",
  "text": {
    "preview_url": <ENABLE_LINK_PREVIEW>,
    "body": "<BODY_TEXT>"
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

Corpo de texto. Os URLs são automaticamente inseridos como hiperlink.

Tamanho máximo de 4.096 caracteres.

`As requested, here's the link to our latest product: https://www.meta.com/quest/quest-3/`

`<ENABLE_LINK_PREVIEW>`

_Booliano_

**Opcional.**

Defina para `true` para que o cliente do WhatsApp tente renderizar uma prévia de link de qualquer URL na string de texto do corpo.

Veja [Prévia do link](#link-preview) abaixo.

`true`

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

## Prévia do link

O cliente do WhatsApp pode tentar renderizar uma prévia do primeiro URL na string de texto do corpo, caso contenha um. URLs devem começar com `http://` ou `https://`. Se vários URLs estiverem na string de texto do corpo, apenas o primeiro URL será renderizado.

Caso seja omitido, ou não seja possível recuperar uma prévia do link, um link clicável será renderizado.

## Exemplo de solicitação

Exemplo de solicitação para enviar uma mensagem de texto com prévias de link habilitadas e uma string de texto do corpo contendo um link.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "text",
  "text": {
    "preview_url": true,
    "body": "As requested, here'\''s the link to our latest product: https://www.meta.com/quest/quest-3/"
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