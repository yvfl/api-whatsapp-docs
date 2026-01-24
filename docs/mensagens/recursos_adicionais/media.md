<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media -->
<!-- Scraped: 2026-01-24T00:26:30.521Z -->

# Mídia

Updated: 11 de dez de 2025

Os webhooks de mensagens de mídia recebidas ([mensagens de imagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/image), [mensagens de vídeo](/documentation/business-messaging/whatsapp/webhooks/reference/messages/video) etc.) agora incluem o URL de download da mídia (atribuída à propriedade `url`), que pode ser consultado diretamente com seu token de acesso para baixar o ativo de mídia da mensagem recebida.

Você usa quatro pontos de extremidade diferentes para gerenciar mídias:

Ponto de extremidade

Usos

[`POST /PHONE_NUMBER_ID/media`](#upload-media)

Carregar mídias.

[`GET /MEDIA_ID`](#get-media-url)

Recuperar o URL de uma mídia específica.

[`DELETE /MEDIA_ID`](#delete-media)

Excluir uma mídia específica.

[`GET /MEDIA_URL`](#download-media)

Baixar mídias de um URL.

Consulte [Tipos de mídias compatíveis](#supported-media-types) para ver os tipos e os limites de tamanho compatíveis.

## Obter ID de mídia

Algumas solicitações de API descritas neste documento exigem um ID de mídia. Os IDs de mídia são retornados pela API ao [carregar mídias](#upload-media) e incluídos em webhooks de mensagens de mídia recebidas ([mensagens de imagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/image), [mensagens de vídeo](/documentation/business-messaging/whatsapp/webhooks/reference/messages/video) etc.)

Os IDs de mídia retornados pela API expiram após 30 dias. Os IDs de mídia nos webhooks expiram após sete dias.

## Carregar mídias

Para carregar mídia, faça uma chamada `POST` para `/PHONE_NUMBER_ID/media` e inclua os parâmetros listados abaixo. Todos os arquivos de mídia enviados por meio desse ponto de extremidade são criptografados e permanecem por 30 dias, a menos que sejam excluídos antes.

Ponto de extremidade

Autenticação

`/PHONE_NUMBER_ID/media`

(Consulte [Obter o ID do número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#get-all-phone-numbers))

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado em **Painel de Apps** > **WhatsApp** > **Configuração da API**.

  

Os parceiros de soluções devem fazer a autenticação usando um token de acesso com a permissão `whatsapp_business_messaging`.

### Parâmetros

Nome

Descrição

`file`

**Obrigatório.**

O caminho para o arquivo armazenado no diretório local. Por exemplo: "@/local/path/file.jpg".

`type`

**Obrigatório.**

O tipo de arquivo de mídia que está sendo carregado. Consulte a seção [Tipos de mídia compatíveis](#supported-media-types) para saber mais.

`messaging_product`

**Obrigatório.**

Serviço de mensagens usado para a solicitação. Nesse caso, use `whatsapp`.

### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<PHONE_NUMBER_ID>/media' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-F 'messaging_product=whatsapp' \
-F 'file=@<FILE_PATH_AND_NAME>;type=<MIME_TYPE>'
```

### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "id": "<MEDIA_ID>"
}
```

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/media' \
-H 'Authorization: Bearer EAAJB...' \
-F 'messaging_product=whatsapp' \
-F 'file=@/media/template_assets/black_friday_2025.mp4;type=video/mp4'
```

### Exemplo de resposta

```
{  "id": "1037543291543636"}
```

## Obter o URL de mídia

É possível consultar diretamente um [ID de mídia](#get-media-id) para obter um URL de mídia, que pode ser usado com seu token de acesso para [baixar o ativo de mídia](#download-media). Os webhooks de mensagens de mídia recebidas ([mensagens de imagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/image), [mensagens de vídeo](/documentation/business-messaging/whatsapp/webhooks/reference/messages/video) etc.) entre outros) incluem o URL da mídia, que é atribuída à propriedade `url`.

Os URLs de mídia **expiram após cinco minutos**. Você deve consultar o ID novamente para ter um novo URL.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<MEDIA_ID>?phone_number_id=<BUSINESS_PHONE_NUMBER_ID>' \
-H 'Authorization: Bearer EAAJB'
```

Observe que `phone_number_id` é opcional. Se incluída, a solicitação será processada apenas se a identificação do número de telefone comercial incluída na consulta corresponder à identificação do número de telefone comercial na qual a mídia foi carregada.

### Sintaxe da resposta

A resposta bem-sucedida inclui um objeto com o URL da mídia. O URL só é válido por cinco minutos. Para usar esse URL, consulte [Baixar mídia](#download-media).

```
{
  "messaging_product": "whatsapp",
  "url": "<MEDIA_URL>",
  "mime_type": "<MEDIA_MIME_TYPE>",
  "sha256": "<SHA_256_HASH>",
  "file_size": "<MEDIA_FILE_SIZE>",
  "id": "<MEDIA_ID>"
}
```

## Excluir mídia

Use o ponto de extremidade **DELETE /<MEDIA\_ID>** para excluir um ativo de mídia.

### Sintaxe da solicitação

```
curl -X DELETE 'https://graph.facebook.com/<API_VERSION>/<MEDIA_ID>?phone_number_id=<BUSINESS_PHONE_NUMBER_ID>' \
-H 'Authorization: Bearer EAAJB...'
```

Observe que `phone_number_id` é opcional. Se incluída, a solicitação será processada apenas se a identificação do número de telefone comercial incluída na consulta corresponder à identificação do número de telefone comercial na qual a mídia foi carregada.

### Exemplo de resposta

```
{  "success": true}
```

## Baixar mídia

Para baixar mídias, faça uma solicitação `GET` no URL da mídia e inclua seu token de acesso. **Se o token for omitido, a solicitação falhará.**

Ao recuperar uma mídia a partir de uma identificação de mídia recebida via webhook, a identificação de mídia só estará disponível para baixar por sete dias.

### Sintaxe da solicitação

```
curl '<MEDIA_URL>' \
-H 'Authorization: Bearer EAAJB...' \
-o '<DESIRED_FILE_NAME>'
```

Em caso de sucesso, a API responderá com os dados binários do ativo de mídia. Os cabeçalhos de resposta contêm um cabeçalho de tipo de conteúdo para indicar o tipo MIME dos dados retornados. Confira os [tipos de mídia compatíveis](#supported-media-types).

Se a tentativa de download falhar, você receberá um código de resposta `404 Not Found`. Nesse caso, recomendamos que tente [recuperar um novo URL de mídia](#get-media-url) e baixá-lo novamente. Se isso não resolver o problema, renove seu token de acesso e tente baixar o ativo de mídia novamente.

## Tipos de mídia compatíveis

### Áudio

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

### Documento

Tipo de documento

Extensão

Tipo MIME

Tamanho máximo

Texto

.txt

text/plain

100 MB

Microsoft Excel

.xls

application/vnd.ms-excel

100 MB

Microsoft Excel

.xlsx

application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

100 MB

Microsoft Word

.doc

application/msword

100 MB

Microsoft Word

.docx

application/vnd.openxmlformats-officedocument.wordprocessingml.document

100 MB

Microsoft PowerPoint

.ppt

application/vnd.ms-powerpoint

100 MB

Microsoft PowerPoint

.pptx

application/vnd.openxmlformats-officedocument.presentationml.presentation

100 MB

PDF

.pdf

application/pdf

100 MB

### Imagem

As imagens devem ser de 8 bits, RGB ou RGBA.

  
  

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

### Figurinha

As imagens WebP só podem ser enviadas em [mensagens de figurinha](/documentation/business-messaging/whatsapp/messages/sticker-messages).

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

### Vídeo

Apenas o codec de vídeo H.264 e o codec de áudio AAC são aceitos. Somente stream de áudio único ou sem stream de áudio.

Vídeos codificados com o perfil H.264 "High" e B-frames não são compatíveis com os clientes do WhatsApp para Android. Recomendamos que você use o perfil H.264 "Main" sem B-frames ou o perfil H.264 "Baseline" ao codificar (ou recodificar com uma ferramenta como ffmpeg) e posicione caixas moov antes de caixas mdat para garantir uma compatibilidade mais ampla. Caso você esteja usando o ffmpeg, utilize a sinalização -movflags faststart para inserir caixas moov antes das caixas mdata.

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

Observe que um tipo MIME incompatível (`131053`) é um erro comum. Recomendamos que você inspecione os arquivos de mídia para verificar o tipo MIME e confirme que as extensões do nome do arquivo reflitam os tipos deles. Por exemplo, se estiver usando UNIX, você pode inspecionar um arquivo por meio da linha de comando para determinar seu tipo MIME:

`file -I your-image-asset.png`

## Restrições de download de mensagens de mídia

O tamanho máximo de arquivo aceito para mensagens de mídia na API de Nuvem é de 100 MB. Caso o cliente envie um arquivo com mais de 100 MB, você receberá um webhook com o código de erro [131052](/documentation/business-messaging/whatsapp/support/error-codes#other-errors) e `title`:

_“O arquivo de mídia é muito grande. Tamanho máximo do arquivo aceito atualmente: 100 MB. Peça ao cliente para enviar um arquivo de mídia com tamanho inferior a 100 MB"_.

Recomendamos que você envie aos clientes uma mensagem de aviso informando que o arquivo de mídia excede o tamanho máximo permitido quando esse evento de webhook for disparado.

## Saiba mais

Blog do WhatsApp Business – [Como enviar mensagens de mídia pelo WhatsApp em um app](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fblog%2Fmedia-messages-via-app&h=AT0mZT57Tz_t_gCcZY6rmBHEjosuDQaCWAFIgVtzlkhH7ULfbhsKSnwQg73pmqW2yNB65rdZcybuVcvGaSgZ3y9blUo4coqKo5-lhKt8JOjypz59VyPSqwFodyMbjIWuiIo6U_8v1qoNekWOHHJK8ablq0c)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)