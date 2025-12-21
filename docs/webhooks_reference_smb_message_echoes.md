<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/smb_message_echoes -->
<!-- Scraped: 2025-12-20T17:39:53.896Z -->

# Referência de webhook smb\_message\_echoes

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook **smb\_message\_echoes** da conta do WhatsApp Business.

O webhook **smb\_message\_echoes** avisa você sobre as mensagens enviadas por meio do app WhatsApp Business ou um [dispositivo adicional ("conectado")](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#linked-devices) por um cliente empresarial que fez a [integração com a API de Nuvem](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por meio de um provedor de soluções.

## Gatilhos

-   Um cliente empresarial com um número de telefone do app WhatsApp Business, que fez a [integração por meio de um provedor de soluções](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users), envia uma mensagem usando o app WhatsApp Business ou um [dispositivo adicional](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#linked-devices) para um usuário do WhatsApp ou outra empresa.

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
            "message_echoes": [
              {
                "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                "to": "<WHATSAPP_USER_PHONE_NUMBER>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "<MESSAGE_TYPE>",
                "<MESSAGE_TYPE>": {
                  <MESSAGE_CONTENTS>
                }
              }
            ]
          },
          "field": "smb_message_echoes"
        }
      ]
    }
  ]
}
```

## Parâmetros

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial exibido.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial.

`106540352242922`

`<MESSAGE_CONTENTS>`

_Objeto_

Um objeto que descreve o conteúdo da mensagem.

Esse valor variará com base na mensagem `type`, bem como no conteúdo da mensagem.

Por exemplo, se uma empresa enviar uma mensagem `image` sem legenda, o objeto não incluirá a propriedade `caption`.

Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/messages/send-messages) para ver exemplos de carga de cada tipo de mensagem.

`{"body":"Here's the info you requested! https://www.meta.com/quest/quest-3/"}`

`<MESSAGE_TYPE>`

_String_

[Tipo de mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages). Esse espaço reservado aparece duas vezes na sintaxe acima, pois serve para o valor da propriedade `type` e o nome correspondente da propriedade.

`text`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business do cliente corporativo.

`102290129340398`

`<WHATSAPP_MESSAGE_ID>`

_String_

Identificação da mensagem do WhatsApp.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

Número de telefone do usuário do WhatsApp. É o mesmo valor retornado pela API como o valor de `input` ao enviar uma mensagem para um usuário do WhatsApp. Vale observar que o número de identificação de um usuário do WhatsApp nem sempre coincide com seu número de telefone.

`+16505551234`

## Exemplo

Esta carga de exemplo descreve uma mensagem de texto (`type` é `text`) enviada a um usuário do WhatsApp por um cliente corporativo usando o app WhatsApp Business.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "message_echoes": [              {                "from": "15550783881",                "to": "16505551234",                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA",                "timestamp": "1739321024",                "type": "text"                "text": {                  "body": "Here's the info you requested! https://www.meta.com/quest/quest-3/"                }              }            ]          },          "field": "smb_message_echoes"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)