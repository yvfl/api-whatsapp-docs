<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/image-messages -->
<!-- Scraped: 2025-12-20T17:26:03.835Z -->

# Mensagens de imagem

Updated: 3 de nov de 2025

As mensagens de imagem exibem uma única imagem e uma legenda opcional.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/440788911_1344094656981591_356280964045551612_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=CDazVHzqAysQ7kNvwHEwanP&_nc_oc=AdlNM2tNAn24ZlufpXLyw1HD_AKv6AuIyqD5sebu2krCFsRrwcIsqdU0YP5IzcJvBF4&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=afCFjns6yMqPD4oy1HplDg&oh=00_AfksMrlQ_LIbmDtofVgPhz9vzTyirZNP4iuETaTjxI_mxA&oe=69612149)

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de imagem a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "image",
  "image": {
    "id": "<MEDIA_ID>", <!-- Only if using uploaded media -->
    "link": "<MEDIA_URL>", <!-- Only if using hosted media (not recommended) -->
    "caption": "<MEDIA_CAPTION_TEXT>"
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

`<MEDIA_CAPTION_TEXT>`

_String_

**Opcional.**

Texto da legenda do ativo de mídia.

Máximo de 1.024 caracteres.

`The best succulent ever?`

`<MEDIA_ID>`

_String_

**Obrigatório para mídias carregadas. Caso contrário, omita.**

ID do [ativo de mídia carregado](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`1013859600285441`

`<MEDIA_URL>`

_String_

**Obrigatório para mídias hospedadas. Caso contrário, omita.**

URL do ativo de mídia hospedado no servidor público. Para melhor desempenho, recomendamos usar `id` e uma [identificação de ativo de mídia carregada](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`https://www.luckyshrub.com/assets/succulents/aloe.png`

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

## Formatos de imagem compatíveis

As imagens devem ser 8 bits, RGB ou RGBA.

  
  

Tipo de imagem

Extensão

Tipo MIME

Tamanho máximo

JPEG

.jpeg

image/jpeg

5 MB

PNG

.png

image/png

5 MB

## Exemplo de solicitação

Exemplo de solicitação para enviar uma mensagem de imagem com legenda a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "image",
  "image": {
    "id" : "1479537139650973",
    "caption": "The best succulent ever?"
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