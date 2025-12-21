<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/copy-code-button-authentication-templates -->
<!-- Scraped: 2025-12-20T17:30:53.376Z -->

# Modelos de autenticação de cópia de código

Updated: 4 de nov de 2025

Os modelos de autenticação de cópia de código permitem que você envie aos usuários uma senha descartável ou um código de uso único junto com um botão de copiar código. Quando um usuário do WhatsApp toca no botão de copiar código, o cliente do WhatsApp copia a senha ou o código para a área de transferência do dispositivo. Depois disso, o usuário pode abrir o app e colar a senha ou o código na interface do software.

Observação: o botão "Não pedi um código" está em versão beta e está sendo lançado de forma gradual para clientes comerciais.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/545560391_1347895570098676_5955248492889407175_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=oL5Jq6Pk-qsQ7kNvwGbxR-m&_nc_oc=AdkQ-SVumGLpw1MRzH8x6dr1IDvN5zQ47dfiSY4JCmwCxIlAHW1Q3RGTUl3x7wPnFh8&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=Ovzz40uNaxpihOWZlZS8Dg&oh=00_AfmRi_YsyaqYY1twOgTep78sAiF0Qe2h8J9tTA2cxX2fwg&oe=69611677)

Os modelos de autenticação com botão de copiar código consistem no seguinte:

-   Um texto predefinido: _<VERIFICATION\_CODE> é seu código de verificação._-   Um aviso legal (opcional): _Para sua segurança, não compartilhe este código._-   Um aviso sobre a validade (opcional): _Este código expira em <NUM\_MINUTES> minutos._-   Um botão de copiar código.

## Limitações

URLs, mídia e emojis não são compatíveis.

## Como criar modelos de autenticação

Use o ponto de extremidade [Conta do WhatsApp Business > Modelos de mensagem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) para criar modelos de autenticação.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer EAAJB...' \
  -d '
{
    "name": "<TEMPLATE_NAME>",
    "language": "<TEMPLATE_LANGUAGE>",
    "category": "authentication",
    "message_send_ttl_seconds": <TIME_TO_LIVE>,  // Optional
    "components": [
      {
        "type": "body",
        "add_security_recommendation": <SECURITY_RECOMMENDATION>  // Optional
      },
      {
        "type": "footer",
        "code_expiration_minutes": <CODE_EXPIRATION>  // Optional
      },
      {
        "type": "buttons",
        "buttons": [
          {
            "type": "otp",
            "otp_type": "copy_code",
            "text": "<COPY_CODE_BUTTON_TEXT>"  // Optional
          }
        ]
      }
    ]
  }'
```

Na solicitação de criação de modelo, o botão `type` está designado como `OTP`. Porém, ao fazer a criação, o botão `type` será definido como `URL`. É possível confirmar isso ao executar uma solicitação GET em um modelo de autenticação recém-criado e analisar os componentes.

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<CODE_EXPIRATION>`

_Número inteiro_

**Opcional.**

  
A validade da senha ou do código em minutos.

  
Se for incluído, o aviso de expiração do código e esse valor serão exibidos na mensagem entregue.

  
Caso seja omitido, o aviso de expiração do código não será exibido na mensagem.

  
Mínimo 1, máximo 90.

`5`

`<COPY_CODE_BUTTON_TEXT>`

_String_

**Opcional.**

  
O texto da etiqueta do botão de copiar código.

  
Se for omitido, o texto será, por padrão, um valor predefinido no idioma do modelo. Por exemplo, `Copy Code` para inglês (EUA).

  
Máximo de 25 caracteres.

`Copy Code`

`<SECURITY_RECOMMENDATION>`

_Booliano_

**Opcional.**

  
Defina como `true` se quiser que o modelo inclua a string _Para sua segurança, não compartilhe este código_. Caso contrário, defina como `false`.

`true`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

  
O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

  
O nome do modelo.

  
Máximo de 512 caracteres.

`verification_code`

`<TIME_TO_LIVE>`

_Número inteiro_

**Opcional.**

  
Valor do tempo de vida da mensagem de autenticação, em segundos. Consulte a seção [Tempo de vida](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#time-to-live) abaixo.

`60`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "authentication_code_copy_code_button",
  "language": "en_US",
  "category": "authentication",
  "message_send_ttl_seconds": 60,
  "components": [
    {
      "type": "body",
      "add_security_recommendation": true
    },
    {
      "type": "footer",
      "code_expiration_minutes": 5
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "otp",
          "otp_type": "copy_code",
          "text": "Copy Code"
        }
      ]
    }
  ]
}'
```

### Exemplo de resposta

```
{  "id": "594425479261596",  "status": "PENDING",  "category": "AUTHENTICATION"}
```

## Webhooks

O [webhook de mensagens de botão](/documentation/business-messaging/whatsapp/webhooks/reference/messages/button) é disparado quando o usuário toca no botão "Não pedi um código" na mensagem.

### Exemplo de webhook

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "320580347795883",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "12345678",              "phone_number_id": "1234567890"            },            "contacts": [              {                "profile": {                  "name": "John"                },                "wa_id": "12345678"              }            ],            "messages": [              {                "context": {                  "from": "12345678",                  "id": "wamid.HBgLMTIxMTU1NTE0NTYVAgARGBJDMDEyMTFDNTE5NkFCOUU3QTEA"                },                "from": "12345678",                "id": "wamid.HBgLMTIxMTU1NTE0NTYVAgASGCBBQ0I3MjdCNUUzMTE0QjhFQkM4RkQ4MEU3QkE0MUNEMgA=",                "timestamp": "1753919111",                "from_logical_id": "131063108133020",                "type": "button",                "button": {                  "payload": "DID_NOT_REQUEST_CODE",                  "text": "I didn't request a code"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

## App de exemplo

Consulte o [exemplo de app de senha descartável do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2FWhatsApp%2FWhatsApp-OTP-Sample-App&h=AT01QlSH-leLszSHkJS3zenfvSAgEFDDjW4oU4c1k5Cq9jt8VeWsazzGhFeDgMF_v94XGZMYJ7D02W5czYeSpq50rpW8ebgiVYP8yjM9nzoCONicPB1falm0YvZ1VVf48j2JFrE27Ss4wrL211AEKAyvKCE) para Android no GitHub. O app de exemplo demonstra como enviar e receber códigos e senhas descartáveis por meio da API, como integrar botões de preencher automaticamente com um toque e de copiar código, como criar modelos e como preparar um exemplo de servidor.

## Enviar modelos de autenticação

Este documento explica como enviar [modelos de autenticação com botões de senha descartável](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates) aprovados.

Importante: **primeiro, você precisa iniciar um handshake** entre seu app e o cliente do WhatsApp. Consulte a seção [Handshake](#handshake) acima.

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "<CUSTOMER_PHONE_NUMBER>",
    "type": "template",
    "template": {
      "name": "<TEMPLATE_NAME>",
      "language": {
        "code": "<TEMPLATE_LANGUAGE_CODE>"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "<ONE-TIME PASSWORD>"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "url",
          "index": "0",
          "parameters": [
            {
              "type": "text",
              "text": "<ONE-TIME PASSWORD>"
            }
          ]
        }
      ]
    }
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Exemplo de valor

`<CUSTOMER_PHONE_NUMBER>`

O número de telefone do WhatsApp do cliente.

`12015553931`

`<ONE-TIME PASSWORD>`

A senha descartável ou o código de verificação que será entregue ao cliente.

  
Esse valor precisa aparecer duas vezes na carga.

  
Máximo de 15 caracteres.

`J$FpnYnP`

`<TEMPLATE_LANGUAGE_CODE>`

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

O nome do modelo.

`verification_code`

### Resposta

Se o processo for bem-sucedido, a API enviará a seguinte resposta:

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<INPUT>",
      "wa_id": "<WA_ID>"
    }
  ],
  "messages": [
    {
      "id": "<ID>"
    }
  ]
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Exemplo de valor

`<INPUT>`

_String_

O número de telefone do cliente para quem a mensagem foi enviada. Talvez esse valor não corresponda a `wa_id`.

`+16315551234`

`<WA_ID>`

_String_

O ID do cliente para quem a mensagem foi enviada. Talvez esse valor não corresponda a `input`.

`+16315551234`

`<ID>`

_String_

Identificação da mensagem do WhatsApp. Use o ID listado depois de "wamid." para acompanhar o status da mensagem.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI3N0EyQUJDMjFEQzZCQUMzODMA`

### Exemplo de solicitação

```
curl -L 'https://graph.facebook.com/v24.0/105954558954427/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '{
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": "12015553931",
      "type": "template",
      "template": {
        "name": "verification_code",
        "language": {
          "code": "en_US"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "J$FpnYnP"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "url",
          "index": "0",
          "parameters": [
            {
              "type": "text",
              "text": "J$FpnYnP"
            }
          ]
        }
      ]
    }
  }'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "12015553931",      "wa_id": "12015553931"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI4Qzc5QkNGNTc5NTMyMDU5QzEA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)