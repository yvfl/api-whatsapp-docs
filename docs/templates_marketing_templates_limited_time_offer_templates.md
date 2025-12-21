<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/limited-time-offer-templates -->
<!-- Scraped: 2025-12-20T17:32:01.737Z -->

# Modelos de oferta por tempo limitado

Updated: 4 de nov de 2025

Este documento descreve modelos de oferta por tempo limitado e explica como usá-los.

Os modelos de oferta por tempo limitado permitem exibir datas de validade e temporizadores de contagem regressiva para códigos de oferta em modelos de mensagem, facilitando a comunicação de ofertas por tempo limitado e gerando engajamento de clientes.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/385485492_1044097420371007_6435130166952753459_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=mf7oFTt284IQ7kNvwHR6Tmx&_nc_oc=AdmmWJJ3C1G_eoXPQMXa3Ev0oMp9GQgg4EQqfm-eQGniNy5e-CH41UzSQF7vucG7O30&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=H58Df_Hjp72hQ9QSGiYAnA&oh=00_AfnDbjpuvP04RnKKqewP5zPhFH_2PHIROoD8vzIfh7r6sA&oe=6961117F)

## Limitações

-   Somente modelos categorizados como `MARKETING` são compatíveis.-   Componentes de rodapé não são compatíveis.-   Os usuários que visualizarem uma mensagem de modelo de oferta por tempo limitado usando o app do WhatsApp para web ou para computador não verão a oferta, e sim um aviso indicando que receberam uma mensagem que não é compatível com o cliente usado.

## Criar modelos de oferta por tempo limitado

Use o ponto de extremidade [Conta do WhatsApp Business > Modelos de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates) para criar um modelo de oferta por tempo limitado.

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
{
    "name": "<TEMPLATE_NAME>",
    "language": "<TEMPLATE_LANGUAGE>",
    "category": "marketing",
    "components": [
      {
        "type": "header",
        "format": "<HEADER_FORMAT>",
        "example": {
          "header_handle": [
            "<HEADER_ASSET_HANDLE>"
          ]
        }
      },
      {
        "type": "limited_time_offer",
        "limited_time_offer": {
          "text": "<LIMITED_TIME_OFFER_TEXT>",
          "has_expiration": <HAS_EXPIRATION>
        }
      },
      {
        "type": "body",
        "text": "<BODY_TEXT>",
        "example": {
          "body_text": [<BODY_TEXT_VARIABLE_EXAMPLES>]
        }
      },
      {
        "type": "buttons",
        "buttons": [
          {
            "type": "copy_code",
            "example": "<OFFER_CODE_EXAMPLE>"
          },
          {
            "type": "url",
            "text": "<URL_BUTTON_TEXT>",
            "url": "<URL_BUTTON_URL>",
            "example": [
              "<URL_EXAMPLE_WITH_VARIABLE_EXAMPLE>"
            ]
          }
        ]
      }
    ]
  }'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<BODY_TEXT>`

_String_

**Obrigatório.**

  
O texto do componente de corpo. Compatível com variáveis.

  
Máximo de 600 caracteres.

`Good news, {{1}}! Use code {{2}} to get 25% off all Caribbean Destination packages!`

`<BODY_TEXT_VARIABLE_EXAMPLES>`

_Matriz de strings_

**Obrigatório se o texto do componente de corpo usar variáveis.**

  
Uma matriz de strings de variáveis de exemplo.

  
É necessário fornecer exemplos para todos os espaços reservados na string `<BODY_TEXT>`.

  
Não há limite, mas o valor é contabilizado no máximo de `<BODY_TEXT>`.

`["Pablo","CARIBE25"]`

`<HAS_EXPIRATION>`

_Booliano_

**Opcional.**

  
Defina como `true` para que os [detalhes de validade da oferta](#offer-expiration-details) apareçam na mensagem entregue.

`true`

`<HEADER_ASSET_HANDLE>`

_Identificador do ativo de mídia_

**Obrigatório se um cabeçalho de imagem ou vídeo for usado.**

  
Identificador do ativo de mídia carregado. Use a [API de Carregamento Retomável](/docs/graph-api/guides/upload) para gerar um identificador de ativo.

`4::aW...`

`<HEADER_FORMAT>`

_Enumeração_

**Obrigatório se um cabeçalho for usado.**

  
Pode ser `IMAGE` ou `VIDEO`.

`IMAGE`

`<LIMITED_TIME_OFFER_TEXT>`

_String_

**Obrigatório.**

  
O texto de detalhes da oferta.

  
Máximo de 16 caracteres.

`Expiring offer!`

`<OFFER_CODE_EXAMPLE>`

_String_

**Obrigatório.**

  
Um código de oferta de exemplo.

  
Máximo de 15 caracteres.

`CARIBE25`

`<TEMPLATE_LANGUAGE>`

_Enumeração_

**Obrigatório.**

  
O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

  
O nome do modelo.

  
Máximo de 512 caracteres.

`limited_time_offer_caribbean_pkg_2023`

`<URL_BUTTON_TEXT>`

_String_

**Obrigatório.**

  
O texto do rótulo do [botão de URL](/documentation/business-messaging/whatsapp/templates/components#url-buttons). Compatível com 1 variável.

  
Máximo de 25 caracteres.

`Book now!`

`<URL_BUTTON_URL>`

_String_

**Obrigatório.**

  
O URL do site carregado no navegador-padrão da web para celular quando o usuário do WhatsApp toca no [botão de URL](/documentation/business-messaging/whatsapp/templates/components#url-buttons).

  
Compatível com uma variável, adicionada ao final da string do URL.

  
Máximo de 2.000 caracteres.

`https://awesomedestinations.com/offers?code={{1}}`

`<URL_EXAMPLE_WITH_VARIABLE_EXAMPLE>`

_String_

**Obrigatório se o URL usar uma variável.**

  
Um URL de exemplo com uma variável de exemplo adicionada ao final.

  
Não há limite, mas o valor é contabilizado no máximo de `<URL_BUTTON_URL>`.

`https://awesomedestinations.com/offers?ref=n3mtql`

### Detalhes de validade da oferta

A mensagem entregue pode exibir uma seção de detalhes de validade da oferta com um cabeçalho, um temporizador de validade opcional e o próprio código de oferta.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/384988489_703197894993408_6289249753669812858_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=EVa--zLASoAQ7kNvwEgPxgt&_nc_oc=AdkZUJS9dA2m3erUM7cOmoSWf6JTEZRFhZm857Lp0x2EQwBndJlg5cdyZ8HUW5TceIM&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=H58Df_Hjp72hQ9QSGiYAnA&oh=00_AflWpMcVcUNM3kwFqCazVzM8Xei7Ewv_4UWJCo08p2huPA&oe=69611E21)

O temporizador de validade é uma string de texto não personalizável, mas o texto aparecerá em vermelho se a mensagem for visualizada e o código de oferta vencer na próxima hora. Ao enviar esse tipo de modelo, inclua o código de oferta e o registro de data e hora de validade.

### Exemplo de solicitação

Veja este exemplo de solicitação para criar um modelo de oferta por tempo limitado que usa:

-   um componente de cabeçalho da imagem;-   um componente de texto do corpo com variáveis;-   o componente de oferta por tempo limitado;-   um botão de copiar código;-   um botão de URL com uma variável

```
curl 'https://graph.facebook.com/v17.0/102290129340398/message_templates' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "name": "limited_time_offer_caribbean_pkg_2023",  "language": "en_US",  "category": "marketing",  "components": [    {      "type": "header",      "format": "image",      "example": {        "header_handle": [          "4::aW..."        ]      }    },    {      "type": "limited_time_offer",      "limited_time_offer": {        "text": "Expiring offer!",        "has_expiration": true      }    },    {      "type": "body",      "text": "Good news, {{1}}! Use code {{2}} to get 25% off all Caribbean Destination packages!",      "example": {        "body_text": [          [            "Pablo",            "CARIBE25"          ]        ]      }    },    {      "type": "buttons",      "buttons": [        {          "type": "copy_code",          "example": "CARIBE25"        },        {          "type": "url",          "text": "Book now!",          "url": "https://awesomedestinations.com/offers?code={{1}}",          "example": [            "https://awesomedestinations.com/offers?ref=n3mtql"          ]        }      ]    }  ]}'
```

### Exemplo de resposta

```
{  "id": "546151681022936",  "status": "PENDING",  "category": "MARKETING"}
```

## Enviar modelos de oferta por tempo limitado

Use o ponto de extremidade [Número de telefone do WhatsApp Business > Mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar um modelo aprovado de mensagem de oferta por tempo limitado em uma mensagem.

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
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
          "type": "header",
          "parameters": [
            {
              "type": "<HEADER_TYPE>",
              "<HEADER_TYPE>": {
                "id": "<HEADER_ASSET_ID>"
              }
            }
          ]
        },
        {
          "type": "body",
          "parameters": [
            <BODY_VARIABLES>
          ]
        },
        {
          "type": "limited_time_offer",
          "parameters": [
            {
              "type": "limited_time_offer",
              "limited_time_offer": {
                "expiration_time_ms": <EXPIRATION_TIME>
              }
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "copy_code",
          "index": 0,
          "parameters": [
            {
              "type": "coupon_code",
              "coupon_code": "<OFFER_CODE>"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "url",
          "index": <URL_BUTTON_INDEX>,
          "parameters": [
            {
              "type": "text",
              "text": "<URL_VARIABLE>"
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

Valor de exemplo

`<BODY_VARIABLES>`

_Matriz de objetos_

**Obrigatório se o texto do corpo do modelo usar variáveis.**

  
Os valores de variável do texto do corpo. Definem cada variável como um objeto individual.

`{"type":"text","text":"Pablo"},{"type":"text","text":"CARIBE25"}`

`<CUSTOMER_PHONE_NUMBER>`

_String_

**Obrigatório.**

  
O número de telefone do cliente a quem a mensagem de modelo deve ser enviada.

`+16505555555`

`<EXPIRATION_TIME>`

_Registro de data e hora UNIX_

**Obrigatório.**

  
O tempo de validade do código de oferta como registro de data e hora UNIX em milissegundos.

`1698562800000`

`<HEADER_ASSET_ID>`

_ID do ativo de mídia_

**Obrigatório.**

  
ID do ativo de mídia carregado. Use o ponto de extremidade [/PHONE\_NUMBER\_ID/media](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para gerar uma identificação.

`1602186516975000`

`<HEADER_TYPE>`

_String_

**Obrigatório.**

  
O tipo de cabeçalho usado pelo modelo. Pode ser `image` ou `video`.

`image`

`<OFFER_CODE>`

_String_

**Obrigatório se o modelo usar um botão de copiar código.**

  
O código de oferta.

  
Máximo de 15 caracteres.

`CARIBE25`

`<TEMPLATE_LANGUAGE_CODE>`

_Enumeração_

**Obrigatório.**

  
O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

  
O nome do modelo.

`limited_time_offer_caribbean_pkg_2023`

`<URL_BUTTON_INDEX>`

_Número inteiro_

**Obrigatório.**

  
A indexação do botão de URL. Se o modelo usar um botão de copiar código, o valor deverá ser `1`.

  
Se o modelo não usar um botão de copiar código, o valor deverá ser `0`.

`1`

`<URL_VARIABLE>`

_String_

**Obrigatório se o URL usar uma variável.**

  
O valor da variável de URL.

  
Não há limite, mas o valor é contabilizado no máximo de 2.000 caracteres da string de URL.

`n3mtql`

### Exemplo de solicitação

Veja este exemplo de solicitação para enviar um modelo de oferta por tempo limitado que usa:

-   um cabeçalho de imagem;-   variáveis de texto do corpo;-   informações de validade da oferta;-   um botão de copiar código;-   um botão de URL com uma variável

```
curl 'https://graph.facebook.com/v17.0/106540352242922/messages' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "16505555555",  "type": "template",  "template": {    "name": "limited_time_offer_caribbean_pkg_2023",    "language": {      "code": "en_US"    },    "components": [      {        "type": "header",        "parameters": [          {            "type": "image",            "image": {              "id": "1602186516975000"            }          }        ]      },      {        "type": "body",        "parameters": [          {            "type": "text",            "text": "Pablo"          },          {            "type": "text",            "text": "CARIBE25"          }        ]      },      {        "type": "limited_time_offer",        "parameters": [          {            "type": "limited_time_offer",            "limited_time_offer": {              "expiration_time_ms": 1209600000            }          }        ]      },      {        "type": "button",        "sub_type": "copy_code",        "index": 0,        "parameters": [          {            "type": "coupon_code",            "coupon_code": "CARIBE25"          }        ]      },      {        "type": "button",        "sub_type": "url",        "index": 1,        "parameters": [          {            "type": "text",            "text": "n3mtql"          }        ]      }    ]  }}'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "16505555555",      "wa_id": "16505555555"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)