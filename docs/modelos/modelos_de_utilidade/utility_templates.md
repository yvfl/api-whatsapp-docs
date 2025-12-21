<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/utility-templates/utility-templates -->
<!-- Scraped: 2025-12-20T17:32:38.248Z -->

# Modelos de utilidade

Updated: 14 de nov de 2025

Este documento descreve como criar e enviar modelos de utilidade.

Normalmente, os modelos de utilidade são enviados em resposta a uma ação ou solicitação do usuário, como uma atualização ou confirmação de pedido.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/555914197_770920925705616_2187359258791538369_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=R_84Uj3bCAsQ7kNvwFGPuwt&_nc_oc=AdkYl6q6okSIdLK6lHO_tMxNS6K32YPj3w_o_uBLdR8O2zNjIOFOP_Bwhrh5K-moY_o&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=umVYGtfYNmK2ZdB_P_xlTQ&oh=00_Afmdd30oKzQ0gJprCFs0qF2B5CWY15Ou3sWMJq5HwcTgrQ&oe=69612C6F)

Os modelos de utilidade têm requisitos de conteúdo rigorosos, sobretudo em relação a materiais de marketing. Se você tentar criar ou atualizar um modelo de utilidade com material de marketing, ele será automaticamente recategorizado como modelo de marketing.

Para ver as diretrizes de conteúdo, consulte a documentação sobre [categorização de modelos](/documentation/business-messaging/whatsapp/templates/template-categorization#utility-template-guidelines).

## Componentes compatíveis

Os modelos de utilidade oferecem suporte para os seguintes componentes:

-   1 cabeçalho (opcional; todos os tipos aceitos)-   1 corpo-   1 rodapé (opcional)-   Até 10 botões (opcional). Tipos com suporte:
    -   Solicitação de ligação-   Copiar código-   Número de telefone-   Respostas rápidas-   URL

## Criar um modelo de utilidade

### Sintaxe da solicitação

Use o ponto de extremidade `POST/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates` para criar um modelo de utilidade.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "name": "<TEMPLATE_NAME>",
  "language": "<TEMPLATE_LANGUAGE>",
  "category": "utility",
  "parameter_format": "<PARAMETER_FORMAT>",
  "components": [

    <!-- header component optional -->
    {
      "type": "header",
      "format": "<HEADER_TYPE>",
      "example": {
        "header_handle": [
          "<HEADER_HANDLE>"
        ]
      }
    },

    <!-- body component required -->
    {
      "type": "body",
      "text": "<BODY_TEXT>",

      <!-- example required if <BODY_TEXT> contains one or more parameters -->
      "example": {
        "body_text_named_params": [
          {
            "param_name": "<PARAMETER_NAME>",
            "example": "<PARAMETER_EXAMPLE_VALUE>"
          },

          <!-- additional parameters would follow, if using multiple parameters -->
        ]
      }
    },

    <!-- footer component optional -->
    {
      "type": "footer",
      "text": "<FOOTER_TEXT>"
    },

    <!-- button components optional -->
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "url",
          "text": "<URL_BUTTON_LABEL_TEXT>",
          "url": "<URL>"
        },
        {
          "type": "phone_number",
          "text": "<PHONE_BUTTON_LABEL_TEXT>",
          "phone_number": "<PHONE_NUMBER>"
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

### Parâmetros da solicitação

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

  
Corpo de texto do modelo. Variáveis são compatíveis.

  
Máximo de 1.024 caracteres.

`You're all set! Your reservation for {{number_of_guests}} at Lucky Shrub Eatery on {{day}}, {{date}}, at {{time}}, is confirmed. See you then!`

`<FOOTER_TEXT>`

_String_

**Opcional.**

Texto de rodapé do modelo. Variáveis têm suporte

Máximo de 60 caracteres.

`Lucky Shrub Eatery: The Luckiest Eatery in Town!`

`<HEADER_ASSET_HANDLE>`

_String_

**Obrigatório se um cabeçalho com ativo de mídia for usado.**

O nome de usuário do ativo de mídia de exemplo carregado na sua conta do WhatsApp Business.

Máximo de 60 caracteres.

`4::aW1hZ2UvcG5n:ARYpf5zqqUjggwGfsZOJ2_o26Zs8ntcO2mss2vKpFb8P_IvskL043YXKpehYTD7IxqEB4t-uZcIzOTxOFRavEcN_tZLhk1WXFb3IOr4S8UKJcQ:e:1759093121:634974688087057:100089620928913:ARYyOAh63uQLhDpqOdk\n4::aW1hZ2UvcG5n:ARZW8t9-cBNjpdmxV5Z9wcRAMhfmw4ATpJcJiHT0nY62hXq4ppOeBaTWaGI0IwX-twF2IkeKo-_MyW2pEDuBAE5vyw2oHTNgPZQkntclrgWMGg:e:1759093121:634974688087057:100089620928913:ARZE4NC5MrxnZUe5GRw`

`<HEADER_TYPE>`

_String_

**Obrigatório se um cabeçalho for usado.**

Formato do cabeçalho. Os valores podem ser os seguintes:

-   documentação-   imagem-   localização-   texto-   vídeo

`image`

`<PARAMETER_EXAMPLE_VALUE>`

_String_

**Obrigatório se você usar uma string de componente de corpo que inclua um ou mais parâmetros.**

Exemplo de valor do parâmetro. É preciso fornecer um exemplo para cada parâmetro definido na string do componente do corpo.

`Saturday`

`<PARAMETER_NAME>`

_String_

**Obrigatório ao usar parâmetros nomeados.**

Deve ser uma string única, composta por caracteres em letra minúscula e sublinhados, expressa entre chaves.

`{{day}}`

`<PHONE_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de número de telefone.**

Texto do botão.

Máximo de 25 caracteres. Apenas caracteres alfanuméricos.

`Change reservation`

`<PHONE_NUMBER>`

_String_

**Obrigatório se você estiver usando um componente de botão de número de telefone.**

O número de telefone comercial para o qual a ligação será feita no app de telefone padrão do usuário do WhatsApp quando ele tocar no botão.

Alguns países têm números de telefone especiais que incluem o número zero após o código de país (por exemplo, +55-0-955-585-95436). Se você atribuir um números nesse formato, o zero à esquerda será retirado do número. Se o número não funcionar sem o zero, atribua um número alternativo ao botão ou adicione o número como mensagem

Máximo de 20 caracteres. Apenas caracteres alfanuméricos.

`15550051310`

`<QUICK_REPLY_BUTTON_LABEL_TEXT>`

**Obrigatório ao usar um botão de resposta rápida.**

Texto do botão.

Máximo de 25 caracteres. Apenas caracteres alfanuméricos.

`Cancel reservation`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

[O código de idioma do modelo](/documentation/business-messaging/whatsapp/templates/supported-languages).

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo. Deve ser único, a menos que modelos existentes com o mesmo nome tenham outro idioma.

Máximo de 512 caracteres. Apenas caracteres alfanuméricos em letra minúscula e sublinhados.

`reservation_confirmation`

`<URL>`

_String_

**Obrigatório se incluir um botão de URL.**

URL a ser carregado no navegador padrão do usuário do WhatsApp quando tocado.

`https://www.luckyshrubeater.com/reservations`

`<URL_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de URL.**

Texto do botão.

Máximo de 25 caracteres. Apenas caracteres alfanuméricos.

`Change reservation`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

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

`UTILITY`

`<TEMPLATE_ID>`

ID do modelo.

`546151681022936`

`<TEMPLATE_STATUS>`

[Status do modelo](/documentation/business-messaging/whatsapp/templates/overview#template-status).

`PENDING`

### Exemplo de solicitação

Este exemplo de solicitação cria um modelo de utilidade com as seguintes características:

-   um componente de cabeçalho da imagem-   um componente de corpo com uma string contendo 4 parâmetros nomeados-   um componente de rodapé-   um componente de botão de URL-   um componente de botão de número de telefone-   um componente de botão de resposta rápida

```
curl 'https://graph.facebook.com/v23.0/102290129340398/message_templates' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "name": "reservation_confirmation",  "language": "en_US",  "category": "utility",  "parameter_format": "named",  "components": [    {      "type": "header",      "format": "image",      "example": {        "header_handle": [          "4::aW..."        ]      }    },    {      "type": "body",      "text": "*You're all set!*\n\nYour reservation for {{number_of_guests}} at Lucky Shrub Eatery on {{day}}, {{date}}, at {{time}}, is confirmed. See you then!",      "example": {        "body_text_named_params": [          {            "param_name": "number_of_guests",            "example": "4"          },          {            "param_name": "day",            "example": "Saturday"          },          {            "param_name": "date",            "example": "August 30th, 2025"          },          {            "param_name": "time",            "example": "7:30 pm"          }        ]      }    },    {      "type": "footer",      "text": "Lucky Shrub Eatery: The Luckiest Eatery in Town!"    },    {      "type": "buttons",      "buttons": [        {          "type": "url",          "text": "Change reservation",          "url": "https://www.luckyshrubeater.com/reservations"        },        {          "type": "phone_number",          "text": "Call us",          "phone_number": "+15550051310"        },        {          "type": "quick_reply",          "text": "Cancel reservation"        }      ]    }  ]}'
```

### Exemplo de resposta

```
{  "id": "546151681022936",  "status": "PENDING",  "category": "UTILITY"}
```

## Enviar um modelo de utilidade

### Sintaxe da solicitação

Use o ponto de extremidade [`POST/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/message`](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar um modelo de utilidade aprovado em uma mensagem de modelo.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESSS_PHONE_NUMBER_ID>/messages' \
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

      <!-- Only required if the template uses a media header component -->
      {
        "type": "header",
        "parameters": [
          {
            "type": "<MEDIA_HEADER_TYPE>",
            "<MEDIA_HEADER_TYPE>": {
              "id": "<MEDIA_HEADER_ASSET_ID>"
            }
          }
        ]
      },

      <!-- Only required if the template uses body component parameters -->
      {
        "type": "body",
        "parameters": [
          {
            "type": "<NAMED_PARAM_TYPE>",
            "parameter_name": "<NAMED_PARAM_NAME>",
            "text": "<NAMED_PARAM_VALUE>"
          },

          <!-- Additional parameters values would follow, if needed -->

        ]
      }
    ]
  }
}'
```

### Parâmetros da solicitação

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

**Opcional**

Versão da API. Em caso de omissão, o padrão será a versão da API mais recente disponível para o seu app.

v24.0

`<MEDIA_HEADER_ASSET_ID>`

_String_

**Obrigatório se o modelo usar um componente de cabeçalho com mídia.**

`2871834006348767`

`<MEDIA_HEADER_TYPE>`

_String_

**Obrigatório se o modelo usar um componente de cabeçalho com mídia.**

Tipo de cabeçalho com mídia. Os valores podem ser os seguintes:

-   documento-   imagem-   vídeo

Observe que esse espaço reservado aparece duas vezes na sintaxe da solicitação acima.

`image`

`<NAMED_PARAM_NAME>`

**Obrigatório se o modelo usar parâmetros de componente de corpo.**

O nome do parâmetro conforme definido na string de texto do componente do corpo do modelo.

`number_of_guests`

`<NAMED_PARAM_TYPE>`

**Obrigatório se o modelo usar parâmetros de componente de corpo.**

Tipo de parâmetro. Defina como texto.

`text`

`<NAMED_PARAM_VALUE>`

**Obrigatório se o modelo usar parâmetros de componente de corpo.**

Valor do parâmetro.

`4`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

[O código de idioma do modelo](/documentation/business-messaging/whatsapp/templates/supported-languages).

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo. Deve ser único, a menos que modelos existentes com o mesmo nome tenham outro idioma.

Máximo de 512 caracteres. Apenas caracteres alfanuméricos em letra minúscula e sublinhados.

`reservation_confirmation`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

**Obrigatório.**

Identificação da conta do WhatsApp Business.

`546151681022936`

`<WHATSAPP_USER_PHONE_NUMBER>`

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

[Status de regularidade](/documentation/business-messaging/whatsapp/templates/template-pacing) do modelo.

`accepted`

`<WHATSAPP_MESSAGE_ID>`

Identificação da mensagem do WhatsApp.

Essa identificação é incluída em webhooks de status [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) para fins de verificação de entrega.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJBRkJENzExMTRFRjk2NTI1OTEA`

`<WHATSAPP_USER_ID>`

Identificação do usuário do WhatsApp. Pode não corresponder ao valor de entrada.

`16505551234`

`<WHATSAPP_USER_PHONE_NUMBER>`

O número de telefone do WhatsApp do usuário. Pode não corresponder ao valor de wa\_id.

`16505551234`

### Exemplo de solicitação

Veja um exemplo de solicitação que envia o modelo criado no exemplo de solicitação de criação de modelo exibida acima.

```
curl 'https://graph.facebook.com/v23.0/106540352242922/messages' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "16505551234",  "type": "template",  "template": {    "name": "reservation_confirmation",    "language": {      "code": "en_US"    },    "components": [      {        "type": "header",        "parameters": [          {            "type": "image",            "image": {              "id": "2871834006348767"            }          }        ]      },      {        "type": "body",        "parameters": [          {            "type": "text",            "parameter_name": "number_of_guests",            "text": "4"          },          {            "type": "text",            "parameter_name": "day",            "text": "Saturday"          },          {            "type": "text",            "parameter_name": "date",            "text": "August 30th, 2025"          },          {            "type": "text",            "parameter_name": "time",            "text": "7:30 pm"          }        ]      }    ]  }}'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJBRkJENzExMTRFRjk2NTI1OTEA",      "message_status": "accepted"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)