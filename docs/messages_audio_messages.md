<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/audio-messages -->
<!-- Scraped: 2025-12-20T17:25:24.359Z -->

# Mensagens de áudio

Updated: 3 de nov de 2025

É possível usar a API de Nuvem para enviar mensagens de voz e mensagens de áudio básicas.

## Mensagens de voz

Uma mensagem de voz (também chamada de recado de voz, mensagem de áudio ou apenas áudio) é uma gravação de uma ou mais pessoas falando e pode incluir sons de fundo, como música. As mensagens de voz incluem recursos como download automático, foto do perfil e ícone de voz, que não estão disponíveis em mensagens de áudio básicas. Se o usuário tiver definido a transcrição de [mensagem de voz](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F241617298315321%2F&h=AT0NVrQNzbG93oXgSVWVk7qvq0nrjtJY7XIzXHrpI-kYSSrHlT4pa751thCtC7AqZK5MNUKpPfSuzdl_YB9csPG7LZi3QzQmHz__-p15GX0QpezO1bY5SPepkia6HKkSqWMKK1cDaFcolzFDAwXZcGx2AQY) como **Automática**, uma transcrição de texto da mensagem também será incluída.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/562379210_2249057198900177_5743647093897895635_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=91sucyCpVBkQ7kNvwEKRx51&_nc_oc=Adn8MKuML-npHwmJfgIARRsBI1Hh0ceNRLEybxmJHS6voYuZPueptaVw5p5O-T4mIm8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=HLaPCQBcd8WDJe_N4elEBg&oh=00_AfloufDUH4D8AgqYxUGv9I9ZGJLHMPzS1DMjcxAlwi6Pig&oe=696123CC)

-   As mensagens de voz exigem arquivos .ogg codificados com o codec **OPUS**. Caso você envie um tipo de arquivo diferente ou um arquivo codificado com um codec diferente, a transcrição da mensagem de voz falhará.-   O ícone de reprodução só aparecerá se o arquivo tiver 512 KB ou menos. Caso contrário, ele será substituído por um ícone de download (uma seta voltada para baixo).-   A imagem do perfil da empresa é usada como imagem do perfil, acompanhada por um ícone de microfone.-   As transcrições de voz aparecem somente se o usuário tiver habilitado a opção [Transcrição **automática** de mensagens de voz](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F241617298315321%2F&h=AT0NVrQNzbG93oXgSVWVk7qvq0nrjtJY7XIzXHrpI-kYSSrHlT4pa751thCtC7AqZK5MNUKpPfSuzdl_YB9csPG7LZi3QzQmHz__-p15GX0QpezO1bY5SPepkia6HKkSqWMKK1cDaFcolzFDAwXZcGx2AQY). Se o usuário tiver definido essa opção como **Manual**, o texto "Transcrever" aparecerá e o texto transcrito será exibido ao tocar nessa opção. Se o usuário tiver definido a transcrição de mensagens de voz como **Nunca**, nenhuma transcrição será exibida.

## Mensagens de áudio básicas

As mensagens de áudio básicas exibem um ícone de download e um ícone de música. Quando o usuário do WhatsApp toca no ícone de reprodução, ele precisa baixar manualmente a mensagem de áudio para que o cliente do WhatsApp carregue e reproduza o arquivo.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561815849_2827972817396551_127160148973074084_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=nguY3m4oD34Q7kNvwGQ0RCn&_nc_oc=AdnPKHAOYzzoS0wiC-HYFFCCYFoIdfdUuP6jV3azsFteuaaMYsVsab9CZnb-91U1YxY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=HLaPCQBcd8WDJe_N4elEBg&oh=00_Afl-uAcwmoOYMcSjUgiMKBxzDy6hzf5-MeT2c2g0IjViAg&oe=69612920)

-   O ícone de download será substituído por um ícone de reprodução se o usuário do WhatsApp tiver ativado o [download automático](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F366146522333492%2F&h=AT0NVrQNzbG93oXgSVWVk7qvq0nrjtJY7XIzXHrpI-kYSSrHlT4pa751thCtC7AqZK5MNUKpPfSuzdl_YB9csPG7LZi3QzQmHz__-p15GX0QpezO1bY5SPepkia6HKkSqWMKK1cDaFcolzFDAwXZcGx2AQY) de mídias de áudio e se as condições para o download automático forem atendidas (por exemplo, o aparelho estiver conectado a uma rede Wi-Fi).-   Se você enviar um arquivo .ogg codificado com o código OPUS como uma mensagem de áudio básica, o ícone de música será substituído por um ícone de microfone. Além disso, se o usuário tiver ativado a [transcrição de mensagens de voz](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F241617298315321%2F&h=AT0NVrQNzbG93oXgSVWVk7qvq0nrjtJY7XIzXHrpI-kYSSrHlT4pa751thCtC7AqZK5MNUKpPfSuzdl_YB9csPG7LZi3QzQmHz__-p15GX0QpezO1bY5SPepkia6HKkSqWMKK1cDaFcolzFDAwXZcGx2AQY)**Automática** ou **Manual**, um texto transcrito ou o texto "Transcrever" acompanhará a mensagem.

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de áudio a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "audio",
  "audio": {
    "id": "<MEDIA_ID>", <!-- Only if using uploaded media -->
    "link": "<MEDIA_URL>", <!-- Only if using hosted media (not recommended) -->
    "voice": <IS_VOICE?> <!-- Only include if sending voice message -->
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

`<IS_VOICE?>`

_Booliano_

**Opcional.**

Defina como `true` se estiver enviando uma [mensagem de voz](#voice-messages). As mensagens de voz devem ser arquivos Ogg codificados com o codec **OPUS**.

Para enviar uma [mensagem de áudio básica](#basic-audio-message), defina como `false` ou omita totalmente.

`true`

`<MEDIA_ID>`

_String_

**Obrigatório para mídias carregadas. Caso contrário, omita.**

ID do [ativo de mídia carregado](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`1013859600285441`

`<MEDIA_URL>`

_String_

**Obrigatório para mídias hospedadas. Caso contrário, omita.**

URL do ativo de mídia hospedado no servidor público. Para melhor desempenho, recomendamos usar `id` e uma [identificação de ativo de mídia carregada](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`https://www.luckyshrub.com/media/ringtones/wind-chime.mp3`

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

## Formatos de áudio compatíveis

Tipo de áudio

Extensão

Tipo MIME

Tamanho máximo

AAC

.aac

audio/aac

16 MB

AMR

.amr

audio/amr

16 MB

MP3

.mp3

audio/mpeg

16 MB

Áudio MP4

.m4a

audio/mp4

16 MB

Áudio OGG

.ogg

audio/ogg (somente codecs OPUS; audio/ogg base não é compatível; somente entrada mono)

16 MB

Os erros mais comuns associados a arquivos de áudio são tipos MIME incompatíveis (o tipo MIME não corresponde ao tipo de arquivo indicado pelo nome do arquivo) e codificação inválida para arquivos Ogg (somente codec OPUS). Caso ocorra um erro ao enviar uma mensagem com um arquivo de mídia, verifique se o tipo MIME real do arquivo de áudio corresponde ao tipo listado acima. Para arquivos Ogg, codifique com o codec OPUS.

## Exemplo de solicitação

Exemplo de solicitação para enviar uma mensagem de imagem usando uma identificação de mídia carregada e uma legenda.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "audio",
  "audio": {
    "id" : "1013859600285441",
    "voice": true
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