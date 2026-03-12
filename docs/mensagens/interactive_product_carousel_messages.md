<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-product-carousel-messages -->
<!-- Scraped: 2026-03-10T21:48:27.043Z -->

# Mensagens interativas de carrossel de produtos

Updated: 4 de dez de 2025

As mensagens interativas de carrossel de produtos permitem que as empresas enviem cartões de produtos com rolagem horizontal em conversas do WhatsApp, possibilitando que os usuários procurem e interajam com os itens diretamente na conversa.

Esse formato é integrado ao catálogo de produtos e é compatível com ações de mensagem de produto único (SPM) em cada cartão, proporcionando uma experiência de compra interativa e contínua por meio das APIs do WhatsApp Business e dos clientes móveis

## Como criar uma mensagem de carrossel de produtos

A mensagem do carrossel de produtos contém um objeto `card`. É preciso adicionar dois objetos de cartão à mensagem (o máximo são dez). Cada cartão existe em uma matriz `cards[]` e deve receber um valor `"card_index"` de `0` a `9`.

O tipo de cada cartão deve ser definido como `"product"`. Cada cartão deve fazer referência ao mesmo `"catalog_id"`.

É preciso adicionar um corpo à mensagem. Não são permitidos cabeçalhos, rodapés ou botões.

Por fim, cada cartão deve especificar os identificadores de produto e catálogo `"product_retailer_id"` e `"catalog_id"`.

### O objeto `card`

```
...{  "card_index": 0,  "type": "product",  "action": {    "product_retailer_id": "abc123xyz",    "catalog_id": "123456789"}...
```

## Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -d '{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "<WHATSAPP_USER_PHONE_NUMBER>",
    "type": "interactive", // must be interactive
    "interactive": {
      "type": "carousel", // must be carousel
      "body": {
        "text": "<MESSAGE_BODY_TEXT>"
      },
      "action": {
        "cards": [
          {
            "card_index": 0,
            "type": "product",
            "action": {
              "product_retailer_id": "abc123xyz",
              "catalog_id": "123456789"
            }
          }
          // additional product cards
        ]
      }
    }
  }'
```

## Parâmetros da solicitação

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

v25.0

`<MESSAGE_BODY_TEXT>`

_String_

**Obrigatório.**

Máximo de 1.024 caracteres.

`Which option do you prefer?`

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

## Parâmetros do objeto cartão

```
...
{
  "card_index": <INDEX>,
  "type": "product",
  "action": {
    "product_retailer_id": "<PRODUCT_RETAILER_ID>",
    "catalog_id": "<CATALOG_ID>"
}
...
```

Espaço reservado

Descrição

Exemplo de valor

`<INDEX>`  
_Número inteiro_

**Obrigatório**  
Índice único para cada cartão (0-9). Não pode se repetir na mensagem.

`2`

`<PRODUCT_RETAILER_ID>`  
_String_

**Obrigatório**  
A identificação única do varejista do produto no catálogo.

`"0JkSUu4qizuXv"`

`<CATALOG_ID>`  
_String_

**Obrigatório**  
A identificação única do catálogo que contém o produto.

`"Lq1ZtoWL5OkljTerAW"`

## Exemplo de solicitação

```
{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "1234567890",  "type": "interactive",  "interactive": {    "type": "carousel",    "body": {      "text": "Check out our featured products!"    },    "action": {      "cards": [        {          "card_index": 0,          "type": "product",          "action": {            "product_retailer_id": "abc123xyz",            "catalog_id": "123456789"          }        },        {          "card_index": 1,          "type": "product",          "action": {            "product_retailer_id": "def456uvw",            "catalog_id": "123456789"          }        }      ]    }  }}
```

## Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)