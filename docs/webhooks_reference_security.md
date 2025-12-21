<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/security -->
<!-- Scraped: 2025-12-20T17:39:36.279Z -->

# Referência do webhook de segurança

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook de **segurança** da conta do WhatsApp Business.

O webhook de **segurança** notifica você sobre alterações nas configurações de segurança de um número de telefone comercial.

## Gatilhos

-   Um usuário do Meta Business Suite clica no botão **Desativar a confirmação em duas etapas** no [Gerenciador do WhatsApp](http://business.facebook.com/latest/whatsapp_manager/).-   Um usuário do Meta Business Suite conclui as instruções no email **Reiniciar verificação em duas etapas do WhatsApp** para desativar esse processo.-   Um usuário do Meta Business Suite altera ou habilita o PIN do número de telefone comercial usando o [Gerenciador do WhatsApp](http://business.facebook.com/latest/whatsapp_manager/).

## Sintaxe

```
{
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "changes": [
        {
          "value": {
            "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
            "event": "<EVENT>",
            "requester": "<META_BUSINESS_SUITE_USER_ID>"
          },
          "field": "security"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
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

`<EVENT>`

String

O evento de segurança que disparou o webhook.

Os valores podem ser os seguintes:

`PIN_CHANGED` – Indica que um usuário do Meta Business Suite alterou ou habilitou o PIN do número de telefone comercial usando o [Gerenciador do WhatsApp](http://business.facebook.com/latest/whatsapp_manager/).

`PIN_RESET_REQUEST` – Indica que um usuário do Meta Business Suite clicou no botão "Desativar a confirmação em duas etapas" no [Gerenciador do WhatsApp](http://business.facebook.com/latest/whatsapp_manager/).

`PIN_REQUEST_SUCCESS` – Um usuário do Meta Business Suite concluiu as instruções no email de redefinição da verificação em duas etapas do WhatsApp para desativar esse processo.

`PIN_RESET_REQUEST`

`<META_BUSINESS_SUITE_USER_ID>`

String

O número de identificação do usuário do Meta Business Suite que solicitou a desativação da verificação em duas etapas usando o [Gerenciador do WhatsApp](http://business.facebook.com/latest/whatsapp_manager/).

Esse parâmetro é incluído apenas em solicitações de redefinição do PIN.

`61555822107539`

`<WEBHOOK_TRIGGER_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o webhook foi disparado.

`1739321024`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

Identificação da conta do WhatsApp Business.

`102290129340398`

## Exemplo

```
{  "entry": [    {      "id": "102290129340398",      "time": 1748811473,      "changes": [        {          "value": {            "display_phone_number": "15550783881",            "event": "PIN_RESET_REQUEST",            "requester": "61555822107539"          },          "field": "security"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)