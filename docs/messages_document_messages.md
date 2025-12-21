<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/document-messages -->
<!-- Scraped: 2025-12-20T17:25:48.980Z -->

# Mensagens de documento

Updated: 3 de nov de 2025

As mensagens de documento exibem um ícone de documento para o usuário do WhatsApp clicar e baixar.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/441287424_3695370760733536_48188157634176922_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=RFnCevaRfIAQ7kNvwGt010D&_nc_oc=AdkCw4oFwRXtsylODBeHOAa1EklxxsnfiFJ2ksHQDlLqRnda1O-s3UKyrxPeCZy7u-U&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=GrFWYFgUJpZwjfkdeGkFOw&oh=00_Afn93SorN8bk32ifabQWvmEHJPgEs5vzZAJMhLfRNzu0Vw&oe=69612FC8)

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de documento a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "document",
  "document": {
    "id": "<MEDIA_ID>", <!-- Only if using uploaded media -->
    "link": "<MEDIA_URL>", <!-- Only if using hosted media (not recommended) -->
    "caption": "<MEDIA_CAPTION_TEXT>",
    "filename": "<MEDIA_FILENAME>",
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

`Lucky Shrub Invoice`

`<MEDIA_FILENAME>`

_String_

**Opcional.**

Nome do arquivo do documento, com extensão. O cliente do WhatsApp usará um ícone de tipo de arquivo apropriado com base na extensão.

`lucky-shrub-invoice.pdf`

`<MEDIA_ID>`

_String_

**Obrigatório para mídias carregadas. Caso contrário, omita.**

ID do [ativo de mídia carregado](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`1013859600285441`

`<MEDIA_URL>`

_String_

**Obrigatório para mídias hospedadas. Caso contrário, omita.**

URL do ativo de mídia hospedado no servidor público. Para melhor desempenho, recomendamos usar `id` e uma [identificação de ativo de mídia carregada](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`https://www.luckyshrub.com/invoices/FmOzfD9cKf/lucky-shrub-invoice.pdf`

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

## Tipos de documentos aceitos

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

## Exemplo de solicitação

Exemplo de solicitação para enviar um PDF em uma mensagem de documento com legenda a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "document",
  "document": {
    "id": "1376223850470843",
    "filename": "order_abc123.pdf",
    "caption": "Your order confirmation (PDF)"
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