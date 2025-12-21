<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contextual-replies -->
<!-- Scraped: 2025-12-20T17:28:24.006Z -->

# Respostas contextuais

Updated: 21 de out de 2025

As respostas contextuais são uma forma especial de responder a mensagens de usuários do WhatsApp. Ao citar a mensagem anterior em um balão, a resposta contextual deixa claro qual mensagem está sendo respondida:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/441349069_1363509007609494_6528221959622289637_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=RxNCHcyE-4cQ7kNvwFLFuOe&_nc_oc=AdnmlhyAj0hGb8H0RsAJQcuMuNEPU173eDbJcTZT-Tds-hfRxxWJIvKC1BECoO_NcD8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=zHqveJLoRPuPFYdnej46Dg&oh=00_AfkatYOgbRcSkrA6-Sh_DLncczO7rtcft9lvOg_lqfdsoA&oe=69612DAB)

## Limitações

-   Não é possível enviar uma [mensagem de reação](/documentation/business-messaging/whatsapp/messages/reaction-messages) como resposta contextual.

A bolha contextual não aparecerá acima da mensagem entregue se:

-   a mensagem anterior tiver sido excluída ou movida para o armazenamento de longo prazo. As mensagens são normalmente movidas para esse armazenamento após 30 dias, a menos que você tenha habilitado o [armazenamento local](/documentation/business-messaging/whatsapp/local-storage);-   você tiver respondido com [áudio](/documentation/business-messaging/whatsapp/messages/audio-messages), [imagem](/documentation/business-messaging/whatsapp/messages/image-messages) ou [mensagem em vídeo](/documentation/business-messaging/whatsapp/messages/video-messages), e o usuário do WhatsApp estiver executando o KaiOS;-   você usar o cliente do WhatsApp para responder com uma mensagem [push-to-talk](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F657157755756612%2F%3Fcms_platform%3Dweb&h=AT0zQydl4tFYwAGPF2fBXKgOICbcaYkV03L6yYU4zTL2O4jNo1bRGdGWoG6BDPSUJXeB7lQEj_rHRjY5jaVDpgHWWlj2bIzJyH77YS02pWlI-w9X8dBWWyb82ovW9oFHdNwWVPWQ_4rl8wdTFdAOaC_DHvg), e o usuário do WhatsApp estiver executando o KaiOS;-   você responder com um [modelo de mensagem](/documentation/business-messaging/whatsapp/messages/template-messages).

## Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```

### Corpo da publicação

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "context": {
    "message_id": "WAMID_TO_REPLY_TO"
  },

  /* Message type and type contents goes here */

}
```

### Parâmetros do corpo da publicação

Espaço reservado

Descrição

Valor de exemplo

`<WAMID_TO_REPLY_TO>`

_String_

**Obrigatório.**

O ID da mensagem do WhatsApp (wamid) da mensagem anterior a ser respondida.

`wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQTdCNTg5RjY1MEMyRjlGMjRGNgA=`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

## Exemplo de solicitação

Exemplo de uma mensagem de texto enviada como resposta a uma mensagem anterior.

```
curl 'https://graph.facebook.com/v19.0/106540352242922/messages' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "+16505551234",  "context": {    "message_id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQTdCNTg5RjY1MEMyRjlGMjRGNgA="  },  "type": "text",  "text": {    "body": "You'\''re welcome, Pablo!"  }}'
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)