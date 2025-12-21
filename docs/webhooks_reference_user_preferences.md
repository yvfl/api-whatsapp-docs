<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/user_preferences -->
<!-- Scraped: 2025-12-20T17:40:13.053Z -->

# Referência do webhook user\_preferences

Updated: 5 de nov de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook **user\_preferences** da conta do WhatsApp Business.

O webhook **user\_preferences** notifica você sobre as alterações nas [preferências de mensagens de marketing](/documentation/business-messaging/whatsapp/templates/marketing-templates#user-preferences-for-marketing-messages) de um usuário do WhatsApp.

## Gatilhos

-   Um usuário do WhatsApp interrompe as mensagens de marketing.-   Um usuário do WhatsApp retoma as mensagens de marketing.

## Sintaxe

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_NAME>"
                },
                "wa_id": "<WHATSAPP_USER_ID>"
              }
            ],
            "user_preferences": [
              {
                "wa_id": "<WHATSAPP_USER_ID>",
                "detail": "<PREFERENCE_DESCRIPTION>",
                "category": "marketing_messages",
                "value": "<PREFERENCE>",
                "timestamp": <WEBHOOK_SENT_TIMESTAMP>
              }
            ]
          },
          "field": "user_preferences"
        }
      ]
    }
  ]
}
```

## Parâmetros

Espaço reservado

Descrição

Exemplo de valor

`<BUSINESS_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial exibido.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial.

`106540352242922`

`<PREFERENCE>`

_String_

[Preferência de mensagens de marketing](/documentation/business-messaging/whatsapp/templates/marketing-templates#user-preferences-for-marketing-messages).

Os valores podem ser os seguintes:

`stop` – indica que os usuários do WhatsApp optaram por parar de receber suas mensagens de marketing.

`resume` – indica que os usuários do WhatsApp aceitaram receber suas mensagens de marketing novamente.

`stop`

`<PREFERENCE_DESCRIPTION>`

_String_

Descrição da [preferência de mensagens de marketing](/documentation/business-messaging/whatsapp/templates/marketing-templates#user-preferences-for-marketing-messages).

Os valores podem ser os seguintes:

-   `User requested to stop marketing messages`-   `User requested to resume marketing messages`

`User requested to stop marketing messages`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

`<WHATSAPP_USER_ID>`

_String_

Número de identificação do usuário do WhatsApp. Vale observar que o número de identificação de um usuário do WhatsApp nem sempre coincide com seu número de telefone.

`16505551234`

`<WHATSAPP_USER_PROFILE_NAME>`

_String_

O nome de usuário do WhatsApp exibido no perfil do cliente na plataforma.

`Sheena Nelson`

## Exemplo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "wa_id": "16505551234"              }            ],            "user_preferences": [              {                "wa_id": "16505551234",                "detail": "User requested to resume marketing messages",                "category": "marketing_messages",                "value": "resume",                "timestamp": 1731705721              }            ]          },          "field": "user_preferences"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)