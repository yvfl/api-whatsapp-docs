<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/video-messages -->
<!-- Scraped: 2025-12-20T17:27:30.064Z -->

# Mensagens de vídeo

Updated: 3 de nov de 2025

As mensagens de vídeo mostram uma prévia em miniatura de uma imagem de vídeo com uma legenda opcional. Quando o usuário do WhatsApp toca na prévia, o vídeo é carregado e exibido.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/440793312_1179905419842171_7706273386179077435_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=iMMgyhQtNO0Q7kNvwE_TsWR&_nc_oc=AdmRG98zUub3EBXriceQm9CgKl4gKtx-sXdDThvd5hM2cbhs_Qm9VvXgp2CmR0M-GUQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=dH3KBYgpTBbG0Qdmj1ia3Q&oh=00_AfmKczeWmiJpqkrpdLxsFGEzPCNPCMlFXRA3sOEA-PBRuA&oe=69612F53)

## Como enviar mensagens de vídeo

Use o ponto de extremidade **[POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)** para enviar uma mensagem de vídeo a um usuário do WhatsApp.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```

### Corpo da publicação

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "{{wa-user-phone-number}}",
  "type": "video",
  "video": {
    "id" : "<MEDIA_ID>", /* Only if using uploaded media */
    "link": "<MEDIA_URL>", /* Only if linking to your media */
    "caption": "<VIDEO_CAPTION_TEXT>"
  }
}
```

### Parâmetros do corpo da publicação

Espaço reservado

Descrição

Valor de exemplo

`<VIDEO_CAPTION_TEXT>`

_String_

**Opcional.**

Texto da legenda do vídeo.

Máximo de 1.024 caracteres.

`A succulent eclipse!`

`<MEDIA_ID>`

_String_

**Obrigatório para usar um ativo de mídia carregado (recomendado)**.

Identificação do ativo de [mídia carregada](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`1166846181421424`

`<MEDIA_URL>`

_String_

**Obrigatório se estiver vinculado ao seu ativo de mídia (não recomendado)**

O URL do ativo de vídeo no servidor público. Para melhor desempenho, recomendamos que você [carregue o ativo de mídia](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`https://www.luckyshrub.com/assets/lucky-shrub-eclipse-viewing.mp4`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

## Formatos de vídeo compatíveis

Apenas o codec de vídeo H.264 e o codec de áudio AAC são aceitos. Somente stream de áudio único ou sem stream de áudio.

  
  

Tipo de vídeo

Extensão

Tipo MIME

Tamanho máximo

3GPP

.3gp

video/3gpp

16 MB

Vídeo no formato MP4

.mp4

video/mp4

16 MB

## Exemplo de solicitação

Exemplo de solicitação para enviar uma mensagem de vídeo com legenda a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "video",
  "video": {
    "id" : "1166846181421424",
    "caption": "A succulent eclipse!"
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