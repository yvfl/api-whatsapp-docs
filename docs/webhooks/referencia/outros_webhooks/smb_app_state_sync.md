<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/smb_app_state_sync -->
<!-- Scraped: 2025-12-20T17:39:45.763Z -->

# Referência do webhook smb\_app\_state\_sync

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook **smb\_app\_state\_sync** da conta do WhatsApp Business.

O webhook **smb\_app\_state\_sync** é usado para sincronizar contatos de [usuários do app WhatsApp Business que foram integrados](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por meio de um provedor de soluções.

## Gatilhos

-   Um provedor de soluções [sincroniza os contatos do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#step-1--initiate-contacts-synchronization) de um cliente comercial com um número de telefone do app WhatsApp Business que o provedor [integrou](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).-   Um cliente empresarial com um número de telefone do app WhatsApp Business que foi [integrado](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por um provedor de soluções adiciona um contato aos [contatos](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F&h=AT2dBZlDXgEah9jHgi0az93YaNTQiv2l1uLLUm_pCv-BRmoGVW39SXstlXwTb27k70Fx86UtyAehtiCzfcNCVh8uMgDRdw1gkI082OaWkVaCVBqpqG36lJRG3ZGxofJxxAT62jXpF0gbgbH5waL_ssIOFsg) do próprio app WhatsApp Business.-   Um cliente empresarial com um número de telefone do app WhatsApp Business que foi [integrado](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por um provedor de soluções remove um contato dos [contatos](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F&h=AT2dBZlDXgEah9jHgi0az93YaNTQiv2l1uLLUm_pCv-BRmoGVW39SXstlXwTb27k70Fx86UtyAehtiCzfcNCVh8uMgDRdw1gkI082OaWkVaCVBqpqG36lJRG3ZGxofJxxAT62jXpF0gbgbH5waL_ssIOFsg) do app WhatsApp Business.-   Um cliente empresarial com um número de telefone do app WhatsApp Business que foi [integrado](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por um provedor de soluções edita um contato nos [contatos](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F&h=AT2dBZlDXgEah9jHgi0az93YaNTQiv2l1uLLUm_pCv-BRmoGVW39SXstlXwTb27k70Fx86UtyAehtiCzfcNCVh8uMgDRdw1gkI082OaWkVaCVBqpqG36lJRG3ZGxofJxxAT62jXpF0gbgbH5waL_ssIOFsg) do app WhatsApp Business.

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
            "state_sync": [
              {
                "type": "contact",
                "contact": {
                  "full_name": "<CONTACT_FULL_NAME>",
                  "first_name": "<CONTACT_FIRST_NAME>",
                  "phone_number": "<CONTACT_PHONE_NUMBER>"
                },
                "action": "<ACTION>",
                "metadata": {
                  "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>"
                }
              },
              <!-- Additional contacts would follow, if any -->
            ]
          },
          "field": "smb_app_state_sync"
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

`<ACTION>`

_String_

Indica se o cliente corporativo adicionou, editou ou excluiu um contato da lista de contatos telefônicos do app WhatsApp Business.

Os valores podem ser os seguintes:

`add` – Indica que o usuário do app WhatsApp Business adicionou ou editou um contato.

`remove` – Indica que o usuário do app WhatsApp Business removeu um contato.

`add`

`<BUSINESS_DISPLAY_PHONE_NUMBER>`

_String_

Número de telefone comercial exibido.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial.

`106540352242922`

`<CONTACT_FIRST_NAME>`

_String_

O nome do contato, conforme aparece na lista de contatos telefônicos do app WhatsApp Business do cliente corporativo.

Não é incluído quando o cliente corporativo remove um contato da lista de contatos telefônicos do app WhatsApp Business.

`Pablo`

`<CONTACT_FULL_NAME>`

_String_

O nome completo do contato, conforme aparece na lista de contatos telefônicos do app WhatsApp Business do cliente corporativo.

Não é incluído quando o cliente corporativo remove um contato da lista de contatos telefônicos do app WhatsApp Business.

`Pablo Morales`

`<CONTACT_PHONE_NUMBER>`_String_

O número de telefone do WhatsApp do contato.

`16505551234`

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
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "state_sync": [              {                "type": "contact",                "contact": {                  "full_name": "Pablo Morales",                  "first_name": "Pablo",                  "phone_number": "16505551234"                },                "action": "add",                "metadata": {                  "timestamp": "1739321024"                }              }            ]          },          "field": "smb_app_state_sync"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)