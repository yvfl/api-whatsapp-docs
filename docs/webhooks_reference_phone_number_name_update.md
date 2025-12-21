<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_name_update -->
<!-- Scraped: 2025-12-20T17:39:21.188Z -->

# Referência do webhook phone\_number\_name\_update

Updated: 22 de out de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook **phone\_number\_name\_update** da conta do WhatsApp Business.

O webhook **phone\_number\_name\_update** notifica você sobre os resultados da [verificação do nome de exibição](/documentation/business-messaging/whatsapp/display-names#display-name-verificationn) do número de telefone comercial.

## Gatilhos

-   O nome de exibição de um número de telefone comercial recém-criado é analisado.-   O nome de exibição aprovado de um número de telefone comercial é editado e analisado.

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
            "decision": "<DECISION>",
            "requested_verified_name": "<REQUESTED_DISPLAY_NAME>",
            "rejection_reason": "<REJECTION_REASON>"
          },
          "field": "phone_number_name_update"
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

`<DECISION>`

_String_

Indica o resultado do processo de [verificação do nome de exibição](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#display-name-verification) do número de telefone comercial.

`APPROVED` – Indica que o nome de exibição foi aprovado e aparecerá na parte superior do perfil do número de telefone comercial no cliente do WhatsApp.

`DEFERRED` – Indica que uma decisão foi adiada.

`PENDING` – Indica que uma decisão ainda está aguardando análise.

`REJECTED` – indica que o nome de exibição foi rejeitado. Você pode editar o nome no [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/overview/). Leia nossas [diretrizes para nomes de exibição](https://www.facebook.com/business/help/757569725593362) antes de editar.

`APPROVED`

`<REJECTION_REASON>`

_String_

O motivo pelo qual o nome de exibição do número de telefone comercial foi rejeitado, caso isso tenha acontecido. Leia nossas diretrizes para nomes de exibição e veja os motivos rejeição mais comuns.

Os valores podem ser os seguintes:

`NAME_EMPLOYEE_ISSUE` – Rejeitado porque o nome de exibição incluía o nome de uma pessoa ou um identificador de funcionário.

`NAME_ENDCLIENT_NOTRELATED` – Rejeitado porque o nome de exibição incluía o nome de uma empresa não relacionada.

`NAME_FORMAT_UNACCEPTABLE` – Rejeitado porque o nome de exibição usou um formato inaceitável.

`NAME_INDIVIDUAL_ISSUE` – Rejeitado porque o nome de exibição incluía o nome de uma pessoa ou um identificador de funcionário. `NAME_NOT_CONSISTENT` – Rejeitado porque o nome de exibição não era consistente com a marca da empresa.

`null` – Indica que o nome foi aceito.

`UNKNOWN` – Rejeitado por motivo desconhecido. Entre em contato com o suporte para obter ajuda.

`APPROVED`

`<REQUESTED_DISPLAY_NAME>`

_String_

O nome de exibição do número de telefone comercial coletado quando o número foi criado ou o nome enviado ao editar um nome de exibição já aprovado.

`Lucky Shrub`

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
{  "entry": [    {      "id": "102290129340398",      "time": 1739321024,      "changes": [        {          "value": {            "display_phone_number": "15550783881",            "decision": "APPROVED",            "requested_verified_name": "Lucky Shrub",            "rejection_reason": null          },          "field": "phone_number_name_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)