<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-list-messages -->
<!-- Scraped: 2025-12-20T17:26:18.551Z -->

# Mensagens de lista interativa

Updated: 3 de nov de 2025

As mensagens de lista interativa permitem que você apresente aos usuários do WhatsApp uma lista de opções para escolher (as opções são definidas como linhas na carga da solicitação):

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/439906651_815131396632137_2393939757123941379_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=LAghR57dL30Q7kNvwGbsZWi&_nc_oc=AdmXDXWr6VAW5-yZoeLPORFrAJpZKBK9LAy1wP6haFfpxO2ce1ADt2of732o1H36dlI&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=bfBNPoQSUIMBBRaTXpSIkw&oh=00_AfnjzDpflHhMiM_lcUmHsh_PtsA4lZJn_Kj_5ZNpPlqtEw&oe=69610E11)

Quando o usuário toca no botão da mensagem, é exibido um modal que lista as opções disponíveis:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/440772174_1215031642793437_4263879536705453309_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=fnU9yygqKl4Q7kNvwFy9yh_&_nc_oc=Adkwmcn0uql7B2I1zvVcQtwrldvGW6xloH9_yCLvpCyksYDycDUc41FfZO6Mhag_aOE&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=bfBNPoQSUIMBBRaTXpSIkw&oh=00_AfnRweMxoxE3GStkVQe5hfM88zcXhYwME_eEgZ9D-FJbAg&oe=69612F83)

Depois disso, o usuário poderá escolher uma opção, e a seleção será enviada como resposta:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/440751989_956441365805448_2344471884869029846_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=oSS-uU7HtrAQ7kNvwG8Wy94&_nc_oc=Adm59aCaPxO0gN_1JMWRNWeVBkMy-t3F8EZnS5ehBMVq5NPpCsUEcDbGZFP6tBOll-I&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=bfBNPoQSUIMBBRaTXpSIkw&oh=00_AfmhBE21zoEbmpfaHAVgONWQVd8a-TlOaPPkjx4KLSyFUA&oe=69611013)

Isso aciona um webhook, que identifica a opção selecionada pelo usuário.

As mensagens de lista interativa aceita até dez seções, com até dez linhas para todas as seções combinadas, além de cabeçalho e rodapé opcionais.

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de lista interativa a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "list",
    "header": {
      "type": "text",
      "text": "<MESSAGE_HEADER_TEXT>"
    },
    "body": {
      "text": "<MESSAGE_BODY_TEXT>"
    },
    "footer": {
      "text": "<MESSAGE_FOOTER_TEXT>"
    },
    "action": {
      "button": "<BUTTON_TEXT>",
      "sections": [
        {
          "title": "<SECTION_TITLE_TEXT>",
          "rows": [
            {
              "id": "<ROW_ID>",
              "title": "<ROW_TITLE_TEXT>",
              "description": "<ROW_DESCRIPTION_TEXT>"
            }
            <!-- Additional rows would go here -->
          ]
        }
        <!-- Additional sections would go here -->
      ]
    }
  }
}'
```

## Parâmetros de solicitação

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

`<BUTTON_TEXT>`

_String_

**Obrigatório.**

Texto do botão. Toque nele para exibir as linhas (opções em que o usuário do WhatsApp pode tocar). Compatível com um único botão.

Máximo de 20 caracteres.

`Shipping Options`

`<MESSAGE_BODY_TEXT>`

_String_

**Obrigatório.**

Texto do corpo da mensagem. Compatível com URLs.

Tamanho máximo de 4.096 caracteres.

`Which shipping option do you prefer?`

`<MESSAGE_FOOTER_TEXT>`

_String_

**Opcional.**

Texto do rodapé da mensagem.

Máximo de 60 caracteres.

`Lucky Shrub: Your gateway to succulents™`

`<MESSAGE_HEADER_TEXT>`

_String_

**Opcional.**

O objeto `header` é opcional. Aceita somente o tipo de cabeçalho `text`.

Máximo de 60 caracteres.

`Choose Shipping Option`

`<ROW_DESCRIPTION_TEXT>`

_String_

**Opcional.**

Descrição da linha.

Máximo de 72 caracteres.

`Next Day to 2 Days`

`<ROW_ID>`

_String_

**Obrigatório.**

Uma string arbitrária que identifica a linha. Esse ID será incluído na carga do webhook se o usuário enviar a seleção.

É necessária pelo menos uma linha. Aceita até dez linhas.

Máximo de 200 caracteres.

`priority_express`

`<ROW_TITLE_TEXT>`

_String_

**Obrigatório.**

Título da linha. É necessária pelo menos uma linha. Aceita até dez linhas.

Máximo de 24 caracteres.

`Priority Mail Express`

`<SECTION_TITLE_TEXT>`

_String_

**Obrigatório.**

O texto do título da seção. É necessária pelo menos uma seção. Aceita até dez seções.

Máximo de 24 caracteres.

`I want it ASAP!`

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

## Exemplo de solicitação

Exemplo de solicitação para enviar uma mensagem de lista interativa com cabeçalho, corpo, rodapé e duas seções contendo duas linhas cada.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "interactive",
  "interactive": {
    "type": "list",
    "header": {
      "type": "text",
      "text": "Choose Shipping Option"
    },
    "body": {
      "text": "Which shipping option do you prefer?"
    },
    "footer": {
      "text": "Lucky Shrub: Your gateway to succulents™"
    },
    "action": {
      "button": "Shipping Options",
      "sections": [
        {
          "title": "I want it ASAP!",
          "rows": [
            {
              "id": "priority_express",
              "title": "Priority Mail Express",
              "description": "Next Day to 2 Days"
            },
            {
              "id": "priority_mail",
              "title": "Priority Mail",
              "description": "1–3 Days"
            }
          ]
        },
        {
          "title": "I can wait a bit",
          "rows": [
            {
              "id": "usps_ground_advantage",
              "title": "USPS Ground Advantage",
              "description": "2–5 Days"
            },
            {
              "id": "media_mail",
              "title": "Media Mail",
              "description": "2–8 Days"
            }
          ]
        }
      ]
    }
  }
}'
```

## Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

## Webhooks

Quando um usuário do WhatsApp seleciona uma opção e envia a mensagem, é disparado um webhook de **mensagens** com a identificação (`id`) da opção escolhida.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Pablo Morales"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "context": {                  "from": "15550783881",                  "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIwMjg0RkMxOEMyMkNEQUFFRDgA"                },                "from": "16505551234",                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQTZDMzFGRUFBQjlDMzIzMzlEQwA=",                "timestamp": "1712595443",                "type": "interactive",                "interactive": {                  "type": "list_reply",                  "list_reply": {                    "id": "priority_express",                    "title": "Priority Mail Express",                    "description": "Next Day to 2 Days"                  }                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)