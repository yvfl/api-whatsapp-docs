<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/sticker-messages -->
<!-- Scraped: 2025-12-20T17:27:07.479Z -->

# Mensagens com figurinhas

Updated: 3 de nov de 2025

As mensagens com figurinhas exibem imagens animadas ou estáticas de figurinhas em uma mensagem do WhatsApp.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/441292863_1203428507688350_9164958282076997505_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=XXUWWD8578QQ7kNvwG0Fn5R&_nc_oc=AdkFi_LQBKC2oeWNUmG__r1wV28gVr5PEwl1BRLSZpkdvnNkBnZYJ5bgB8PexFDNUOw&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=-MGhOmSHgt71kQAuSWY15A&oh=00_Afk7dtA356q4VRgCodOtLZJ1lJ8h_cry48KJhixfPaSNbg&oe=696112BC)

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem com figurinha a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "sticker",
  "sticker": {
    "id": "<MEDIA_ID>", <!-- Only if using uploaded media -->
    "link": "<MEDIA_URL>", <!-- Only if using hosted media (not recommended) -->
  }
}'
```

### Parâmetros do corpo do post

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

`<MEDIA_ID>`

_String_

**Obrigatório para mídias carregadas. Caso contrário, omita.**

Identificação do [ativo de mídia carregado](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`1013859600285441`

`<MEDIA_URL>`

_String_

**Obrigatório para mídias hospedadas. Caso contrário, omita.**

URL do ativo de mídia hospedado no servidor público. Para melhor desempenho, recomendamos usar `id` e uma [identificação de ativo de mídia carregado](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`https://www.luckyshrub.com/assets/animated-smiling-plant.webp`

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

## Formatos de figurinha compatíveis

Tipo de figurinha

Extensão

Tipo MIME

Tamanho máximo

Figurinha animada

.webp

image/webp

500 KB

Figurinha estática

.webp

image/webp

100 KB

## Exemplo de solicitação

Exemplo de solicitação para enviar uma imagem de figurinha animada a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "sticker",
  "sticker": {
    "id" : "798882015472548"
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