<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/custom-marketing-templates -->
<!-- Scraped: 2025-12-20T17:31:16.777Z -->

# Modelos de marketing personalizados

Updated: 14 de nov de 2025

Aprenda a criar e enviar um modelo de marketing personalizado.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/555070362_1180641373877493_714272106387148710_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=gdKrRbNb5ssQ7kNvwFXmorj&_nc_oc=AdkpeSk6t1gCnZxL8v5HvHcNiBlGeg2k1cDBhVpc4mDoswNYEU_U-oemJlVOPY2SePg&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=-c0A6U02LAk6gwYzlRW2Pw&oh=00_Afmlr5-0D1Vd1v5kiVH8DxKND7xVn85c8-HDpPl4C69r1w&oe=69612DEA)

## Componentes com suporte

Os modelos de marketing personalizados são compatíveis com os seguintes componentes:

-   1 cabeçalho (opcional; todos os tipos aceitos)-   1 corpo (obrigatório)-   1 rodapé (opcional)-   Até 10 botões (opcional; todos os tipos são compatíveis)

## Criar um modelo de marketing personalizado

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#Creating) para criar um modelo de marketing personalizado.

### Sintaxe da solicitação

Este exemplo de sintaxe cria um modelo com cabeçalho de imagem, corpo de texto com três parâmetros nomeados, um rodapé e três botões (URL, número de telefone e resposta rápida).

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "name": "<TEMPLATE_NAME>",
  "language": "<TEMPLATE_LANGUAGE>",
  "category": "marketing",
  "parameter_format": "<PARAMETER_FORMAT>",
  "components": [
    {
      "type": "header",
      "format": "image",
      "example": {
        "header_handle": [
          "<HEADER_ASSET_HANDLE>"
        ]
      }
    },
    {
      "type": "body",
      "text": "<BODY_TEXT>",
      "example": {
        "body_text_named_params": [
          {
            "param_name": "<BODY_PARAMETER_NAME>",
            "example": "<BODY_PARAMETER_EXAMPLE_VALUE>"
          },
          <!-- additional parameters and example values go here -->
        ]
      }
    },
    {
      "type": "footer",
      "text": "<FOOTER_TEXT>"
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "url",
          "text": "<URL_BUTTON_LABEL_TEXT>",
          "url": "<URL_BUTTON_URL>"
        },
        {
          "type": "phone_number",
          "text": "<PHONE_NUMBER_BUTTON_LABEL_TEXT>",
          "phone_number": "<PHONE_NUMBER_BUTTON_PHONE_NUMBER>"
        },
        {
          "type": "quick_reply",
          "text": "<QUICK_REPLY_BUTTON_LABEL_TEXT>"
        }
      ]
    }
  ]
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Exemplo de valor

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

Token de acesso

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<API_VERSION>`

_String_

**Opcional.**

Versão da API. Em caso de omissão, o padrão será a versão da API mais recente disponível para o seu app.

`v23.0`

`<BODY_PARAMETER_EXAMPLE_VALUE>`

_String_

**Obrigatório se você usar uma string de componente de corpo que inclua um ou mais parâmetros.**

Exemplo de valor do parâmetro. É preciso fornecer um exemplo para cada parâmetro definido na string do componente do corpo.

`WELCOME20`

`<BODY_PARAMETER_NAME>`

_String_

**Obrigatório ao usar parâmetros nomeados.**

Nome do parâmetro É preciso fornecer um nome para cada parâmetro definido na string do componente do corpo. Deve ser uma string única, composta por caracteres em letra minúscula e sublinhados, expressa entre chaves.

`{{discount_code}}`

`<BODY_TEXT>`

_String_

**Obrigatório.**

Corpo de texto do modelo. Variáveis são compatíveis.

Máximo de 1.024 caracteres.

`Welcome to Lucky Shrub, {{first_name}}!\\n\\nUse code *{{discount_code}}* to get {{discount_amount}} off of your first purchase!`

`<FOOTER_TEXT>`

_String_

**Opcional.**

Texto do rodapé.

Máximo de 60 caracteres.

`Lucky Shrub: Your gateway to succulents!`

`<PARAMETER_FORMAT>`

_String_

**Opcional.**

[Formato do parâmetro](/documentation/business-messaging/whatsapp/templates/overview#parameter-formats) Os valores podem ser os seguintes:

-   `named`-   `positional`

Se a propriedade `parameter_format` for omitida, o modelo usará a formatação posicional.

`Lucky Shrub: Your gateway to succulents!`

`<HEADER_ASSET_HANDLE>`

_String_

**Obrigatório se um cabeçalho com ativo de mídia for usado.**

Cabeçalho [identificador do ativo de mídia](/docs/graph-api/guides/upload).

`4::aW1hZ2UvcG5n:ARYpf5zqqUjggwGfsZOJ2_o26Zs8ntcO2mss2vKpFb8P_IvskL043YXKpehYTD7IxqEB4t-uZcIzOTxOFRavEcN_tZLhk1WXFb3IOr4S8UKJcQ:e:1759093121:634974688087057:100089620928913:ARYyOAh63uQLhDpqOdk`

`<PHONE_NUMBER_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de número de telefone.**

Texto do botão. Máximo de 25 caracteres. Apenas caracteres alfanuméricos.

`Call us`

`<PHONE_NUMBER_BUTTON_PHONE_NUMBER>`

_String_

**Obrigatório se você estiver usando um componente de botão de número de telefone.**

O número de telefone comercial para o qual a ligação será feita no app de telefone padrão do usuário do WhatsApp quando ele tocar no botão. Alguns países têm números de telefone especiais que incluem o número zero após o código de país (por exemplo, +55-0-955-585-95436). Se você atribuir um números nesse formato, o zero à esquerda será retirado do número. Se o número não funcionar sem o zero, atribua um número alternativo ao botão ou adicione o número como texto do corpo da mensagem.

Máximo de 20 caracteres. Apenas caracteres alfanuméricos.

`15550051310`

`<QUICK_REPLY_BUTTON_LABEL_TEXT>`

**Obrigatório ao usar um botão de resposta rápida.**

Texto do botão. Máximo de 25 caracteres. Apenas caracteres alfanuméricos.

`Unsubscribe`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

O [código de idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo. Deve ser único, a menos que modelos existentes com o mesmo nome tenham outro idioma.

Máximo de 512 caracteres. Apenas caracteres alfanuméricos em letra minúscula e sublinhados.

`reservation_confirmation`

`<URL_BUTTON_URL>`

_String_

**Obrigatório se incluir um botão de URL.**

URL a ser carregado no navegador padrão do usuário do WhatsApp quando tocado.

`https://www.luckyshrubeater.com/reservations`

`<URL_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de URL.**

Texto do botão.

Máximo de 25 caracteres. Apenas caracteres alfanuméricos.

`View deals`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

**Obrigatório.**

Identificação da conta do WhatsApp Business.

`546151681022936`

### Sintaxe da resposta

Caso a solicitação seja bem-sucedida:

```
{
  "id": "<TEMPLATE_ID>",
  "status": "<TEMPLATE_STATUS>",
  "category": "<TEMPLATE_CATEGORY>"
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<TEMPLATE_CATEGORY>`

[Categoria do modelo](/documentation/business-messaging/whatsapp/templates/template-categorization).

`MARKETING`

`<TEMPLATE_ID>`

ID do modelo.

`1627019861106475`

`<TEMPLATE_STATUS>`

[Status do modelo](/documentation/business-messaging/whatsapp/templates/overview#template-status).

`PENDING`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v23.0/102290129340398/message_templates' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "name": "welcome_discount_template",  "language": "en_US",  "category": "marketing",  "parameter_format": "named",  "components": [    {      "type": "header",      "format": "image",      "example": {        "header_handle": [          "4::aW..."        ]      }    },    {      "type": "body",      "text": "Welcome to Lucky Shrub, {{first_name}}!\n\nUse code *{{discount_code}}* to get {{discount_amount}} off of your first purchase!",      "example": {        "body_text_named_params": [          {            "param_name": "first_name",            "example": "Pablo"          },          {            "param_name": "discount_code",            "example": "WELCOME20"          },          {            "param_name": "discount_amount",            "example": "20%"          }        ]      }    },    {      "type": "footer",      "text": "Lucky Shrub: Your gateway to succulents!"    },    {      "type": "buttons",      "buttons": [        {          "type": "url",          "text": "View deals",          "url": "https://www.luckyshrub.com/deals"        },        {          "type": "phone_number",          "text": "Call us",          "phone_number": "+15550051310"        },        {          "type": "quick_reply",          "text": "Unsubscribe"        }      ]    }  ]}'
```

### Exemplo de resposta

```
{  "id": "1627019861106475",  "status": "PENDING",  "category": "MARKETING"}
```

## Enviar um modelo de marketing personalizado

Use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar um modelo de marketing aprovado.

### Sintaxe da solicitação

Esta sintaxe de exemplo é para enviar o modelo descrito na [sintaxe de criação](#request-syntax) acima, que espera um ativo de imagem de cabeçalho e três valores de parâmetros de texto do corpo que substituirão os espaços reservados para parâmetros na string de texto do corpo.

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "template",
  "template": {
    "name": "<TEMPLATE_NAME>",
    "language": {
      "code": "<TEMPLATE_LANGUAGE>"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "image",
            "image": {
              "id": "<HEADER_ASSET_ID>"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "parameter_name": "<PARAMETER_NAME>",
            "text": "<PARAMETER_VALUE>"
          },
          <!-- additional parameters and values go here -->
        ]
      }
    ]
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

Token de acesso

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<API_VERSION>`

_String_

**Opcional.**

Versão da API. Em caso de omissão, o padrão será a versão da API mais recente disponível para o seu app.

`v23.0`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

**Obrigatório.**

Identificação do número de telefone do WhatsApp Business.

`106540352242922`

`<HEADER_ASSET_ID>`

_String_

**Obrigatório se o modelo usar mídia de cabeçalho.**

Cabeçalho [Identificação do ativo de mídia](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

`1339522734477770`

`<PARAMETER_NAME>`

_String_

**Obrigatório se o modelo usar um ou mais parâmetros nomeados.**

Nome do [parâmetro nomeado](/documentation/business-messaging/whatsapp/templates/overview#named-parameters).

`discount_code`

`<PARAMETER_VALUE>`

_String_

**Obrigatório se o modelo usar um ou mais parâmetros nomeados.**

Valor do [Parâmetro nomeado](/documentation/business-messaging/whatsapp/templates/overview#named-parameters).

`WELCOME25`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

[Idioma do modelo](/documentation/business-messaging/whatsapp/templates/supported-languages).

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo.

`welcome_discount_template`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`16505551234`

### Sintaxe da resposta

Caso a solicitação seja bem-sucedida:

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<WHATSAPP_USER_PHONE_NUMBER>",
      "wa_id": "<WHATSAPP_USER_ID>"
    }
  ],
  "messages": [
    {
      "id": "<WHATSAPP_MESSAGE_ID>",
      "message_status": "<PACING_STATUS>"
    }
  ]
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<PACING_STATUS>`

Modelo [status de regularidade](/documentation/business-messaging/whatsapp/templates/template-pacing).

`accepted`

`<WHATSAPP_MESSAGE_ID>`

Identificação da mensagem do WhatsApp.

Essa identificação é incluída em webhooks de status [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) para fins de verificação de entrega.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJBRkJENzExMTRFRjk2NTI1OTEA`

`<WHATSAPP_USER_ID>`

Identificação do usuário do WhatsApp. Pode não corresponder ao valor `input`.

`16505551234`

`<WHATSAPP_USER_PHONE_NUMBER>`

O número de telefone do WhatsApp do usuário. Pode não corresponder ao valor `wa_id`.

`16505551234`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v23.0/106540352242922/messages' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "16505551234",  "type": "template",  "template": {    "name": "welcome_discount_template",    "language": {      "code": "en_US"    },    "components": [      {        "type": "header",        "parameters": [          {            "type": "image",            "image": {              "id": "1339522734477770"            }          }        ]      },      {        "type": "body",        "parameters": [          {            "type": "text",            "parameter_name": "first_name",            "text": "Jessica"          },          {            "type": "text",            "parameter_name": "discount_code",            "text": "WELCOME25"          },          {            "type": "text",            "parameter_name": "discount_amount",            "text": "25%"          }        ]      }    ]  }}'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBIyQjM2RTlERTY4QjFGNzUwNDgA",      "message_status": "accepted"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)