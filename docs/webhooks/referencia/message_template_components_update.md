<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_components_update -->
<!-- Scraped: 2025-12-20T17:36:11.743Z -->

# Referência do webhook message\_template\_components\_update

Updated: 14 de nov de 2025

Esta referência descreve os eventos de gatilho e o conteúdo da carga do webhook `message_template_components_update` da conta do WhatsApp Business.

O webhook **message\_template\_components\_update** notifica você sobre as alterações nos componentes de um modelo.

## Gatilhos

-   Um modelo é editado.

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
            "message_template_id": <TEMPLATE_ID>,
            "message_template_name": "<TEMPLATE_NAME>",
            "message_template_language": "<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>",
            "message_template_element": "<TEMPLATE_BODY_TEXT>,

            <!-- only included if template has a text header -->
            "message_template_title": "<TEMPLATE_HEADER_TEXT>",

            <!-- only included if template has a footer -->
            "message_template_footer": "<TEMPLATE_FOOTER_TEXT>",

            <!-- only included if template has a url or phone number button -->
            "message_template_buttons": [
              {
                "message_template_button_type": "<BUTTON_TYPE>",
                "message_template_button_text": "<BUTTON_LABEL_TEXT>",

                <!--only included for url buttons -->
                "message_template_button_url": "<BUTTON_URL>",

                <!--only included for phone number buttons -->
                "message_template_button_phone_number": "<BUTTON_PHONE_NUMBER>"
              }
            ]
          },
          "field": "message_template_components_update"
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

`<BUTTON_LABEL_TEXT>`

_String_

Texto do botão.

`Email support`

`<BUTTON_PHONE_NUMBER>`

_String_

Botão do número de telefone.

`+15550783881`

`<BUTTON_TYPE>`

_String_

[Tipo de botão](/documentation/business-messaging/whatsapp/templates/components#buttons).

Os valores podem incluir:

-   `CATALOG`-   `COPY_CODE`-   `EXTENSION`-   `FLOW`, `MPM`-   `ORDER_DETAILS`-   `OTP`-   `PHONE_NUMBER`-   `POSTBACK`-   `REMINDER`-   `SEND_LOCATION`-   `SPM`-   `QUICK_REPLY`-   `URL`-   `VOICE_CALL`

`URL`

`<BUTTON_URL>`

_String_

URL do botão.

`https://www.luckyshrub.com/support`

`<TEMPLATE_BODY_TEXT>`

_String_

Corpo de texto do modelo.

`Thank you for your order, {{1}}! Your order number is {{2}}. If you have any questions, contact support using the buttons below. Thanks again!`

`<TEMPLATE_FOOTER_TEXT>`

_String_

Texto do rodapé do modelo.

`Lucky Shrub: the Succulent Specialists!`

`<TEMPLATE_HEADER_TEXT>`

_String_

Texto do cabeçalho do modelo.

`Your order is confirmed!`

`<TEMPLATE_ID>`

_Número inteiro_

ID do modelo.

`1315502779341834`

`<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>`

_String_

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

O nome do modelo.

`order_confirmation`

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
{  "entry": [    {      "id": "102290129340398",      "time": 1751250234,      "changes": [        {          "value": {            "message_template_id": 1315502779341834,            "message_template_name": "order_confirmation",            "message_template_language": "en_US",            "message_template_title": "Your order is confirmed!",            "message_template_element": "Thank you for your order, {{1}}! Your order number is {{2}}. If you have any questions, contact support using the buttons below. Thanks again!",            "message_template_footer": "Lucky Shrub: the Succulent Specialists!",            "message_template_buttons": [              {                "message_template_button_type": "PHONE_NUMBER",                "message_template_button_text": "Phone support",                "message_template_button_phone_number": "+15550783881"              },              {                "message_template_button_type": "URL",                "message_template_button_text": "Email support",                "message_template_button_url": "https://www.luckyshrub.com/support"              }            ]          },          "field": "message_template_components_update"        }      ]    }  ],  "object": "whatsapp_business_account"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)