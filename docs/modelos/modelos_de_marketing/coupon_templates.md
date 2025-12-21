<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/coupon-templates -->
<!-- Scraped: 2025-12-20T17:31:53.211Z -->

# Modelos de código de cupom

Updated: 3 de nov de 2025

Os modelos de código de cupom são modelos de marketing que mostram um botão único de copiar código. Quando o cliente toca no botão, o código é copiado para a área de transferência.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/365756533_1756280054770140_7287687181799037425_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=7J9b7DqCkzcQ7kNvwEdQCKy&_nc_oc=AdlFsU8zzdWmQPzZ3oK3R8OAOoHz6_4KE_tC91Ah__UdyDOIEQpnIN86rW96povoaMg&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=up5VHKmApG51TsF7Vkmp5w&oh=00_AfnBMfDWhFHSWHAdREhEVGhL_47v0c0aaQguIVxyjKFkAQ&oe=69613765)

## Limitações

-   Os modelos de código de cupom não são compatíveis com o WhatsApp Web para clientes.-   Os códigos têm limite de 15 caracteres.-   O texto do botão não pode ser personalizado.-   Os modelos podem ter apenas um botão de copiar código.

## Criar modelos de código de cupom

Use o ponto de extremidade [WhatsApp Business Account > Message Templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) para criar modelos de código de cupom.

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "<NAME>",
    "language": "<LANGUAGE>",
    "category": "MARKETING",
    "components": [
      {
        "type": "BODY",
        "text": "<BODY_TEXT>"
      },
      {
        "type": "BUTTONS",
        "buttons": [
          {
            "type": "COPY_CODE",
            "example": "<EXAMPLE>"
          }
        ]
      }
    ]
  }'
```

### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<NAME>`

_String_

**Obrigatório.**

  
O nome do modelo.

  
Máximo de 512 caracteres.

`fall2023_promotion`

`<LANGUAGE>`

_Enumeração_

**Obrigatório.**

  
O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<EXAMPLE>`

_String_

**Obrigatório.**

  
O código do cupom que deve ser copiado quando o cliente toca no botão.

  
Máximo de 15 caracteres.

`25OFF`

### Resposta

Se o processo for bem-sucedido, a API enviará a seguinte resposta:

```
{
   "category" : "<CATEGORY>",
   "id" : "<ID>",
   "status" : "<STATUS>"
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Exemplo de valor

`<CATEGORY>`

_Enumeração_

A categoria do modelo.

`MARKETING`

`<ID>`

_String numérica_

A identificação do modelo.

`1924084211297547`

`<STATUS>`

_Enumeração_

Status do modelo.

`PENDING`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "coupon_code_fall2023_25off",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Our Fall Sale is on!"
    },
    {
      "type": "BODY",
      "text": "Shop now through November and use code {{1}} to get {{2}} off of all merchandise!",
      "example": {
        "body_text": [
          [
            "25OFF",
            "25%"
          ]
        ]
      }
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Unsubscribe"
        },
        {
          "type": "COPY_CODE",
          "example": "250FF"
        }
      ]
    }
  ]
}'
```

### Exemplo de resposta

```
{  "category" : "MARKETING",  "id" : "1924084211297547",  "status" : "PENDING"}
```

## Enviar modelos de código de cupom

### Sintaxe da solicitação

Use o ponto de extremidade [WhatsApp Business Phone Number > Messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar um modelo de cupom aprovado em uma mensagem de modelo.

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "messaging_product": "whatsapp",
    "to": "<TO>",
    "type": "template",
    "template": {
      "name": "<NAME>",
      "language": {
        "code": "<CODE>"
      },
      "components": [
        {
          "type": "button",
          "sub_type": "COPY_CODE",
          "index": <INDEX>,
          "parameters": [
            {
              "type": "coupon_code",
              "coupon_code": "<COUPON_CODE>"
            }
          ]
        }
        // ... Add other components if needed
      ]
    }
  }'
```

### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<TO>`

_String_

**Obrigatório.**

  
A identificação do WhatsApp ou o número de telefone do cliente que deve receber a mensagem. Consulte [Formatos de número de telefone](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api).

`+16505551234`

`<NAME>`

_String_

**Obrigatório.**

  
O nome do modelo a ser enviado.

`coupon_code_fall2023_25off`

`<CODE>`

_String_

**Obrigatório.**

  
O idioma do modelo e o código de localidade.

`en_US`

`<INDEX>`

_Número inteiro_

**Obrigatório.**

  
Indica a ordem dos botões, caso o modelo tenha vários.

  
Os botões são indexados a zero. Por isso, o valor `0` indicará o primeiro botão, `1` definirá o segundo e assim por diante.

`0`

`<COUPON_CODE>`

_String_

**Obrigatório.**

  
O código do cupom que deve ser copiado quando o cliente toca no botão. Apenas caracteres alfanuméricos.

`25OFF`

### Sintaxe da resposta

Se o processo for bem-sucedido, a API enviará a seguinte resposta:

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<WHATSAPP_USER_PHONE_NUMBER>",
      "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>"
    }
  ],
  "messages": [
    {
      "id": "<WHATSAPP_MESSAGE_ID>",
      "group_id": "<GROUP_ID>", <!-- Only included if messaging a group -->
      "message_status": "<PACING_STATUS>" <!-- Only included if sending a template -->
    }
  ]
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

O identificador de string de um grupo feito usando a API de Grupos.

Esse campo mostra quando as mensagens são enviadas, recebidas ou lidas em um grupo.

[Saiba mais sobre a API de Grupos](/documentation/business-messaging/whatsapp/groups)

`Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD`

`<PACING_STATUS>`

_String_

Indica o status de [regularidade do modelo](/documentation/business-messaging/whatsapp/templates/template-pacing). A propriedade `message_status` é incluída nas respostas apenas quando você envia [mensagens](/documentation/business-messaging/whatsapp/messages/template-messages) com um modelo que está sendo modificado por regularidade.

`wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI4MjZGRDA0OUE2OTQ3RkEyMzcA`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

O número de telefone do WhatsApp do usuário. Pode não corresponder ao valor `wa_id`.

`+16505551234`

`<WHATSAPP_USER_ID>`

_String_

Identificação do usuário do WhatsApp. Pode não corresponder ao valor `input`.

`16505551234`

`<WHATSAPP_MESSAGE_ID>`

_String_

A identificação da mensagem do WhatsApp. Essa identificação aparece em webhooks de **mensagens** associados, como webhooks de mensagens enviadas, lidas e entregues.

`wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI4MjZGRDA0OUE2OTQ3RkEyMzcA`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "to": "16505551234",
  "type": "template",
  "template": {
    "name": "coupon_code_fall2023_25off",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "25OFF"
          },
          {
            "type": "text",
            "text": "25%"
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "COPY_CODE",
        "index": 1,
        "parameters": [
          {
            "type": "coupon_code",
            "coupon_code": "25OFF"
          }
        ]
      }
    ]
  }
}'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBIxRjk1REYzMDBERDE3RUI0RDYA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)