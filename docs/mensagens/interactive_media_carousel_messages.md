<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-media-carousel-messages -->
<!-- Scraped: 2026-01-24T00:40:00.698Z -->

# Mensagens de carrossel de mídia interativa

Updated: 22 de dez de 2025

As mensagens de carrossel de mídia interativa exibem um conjunto de cartões de mídia com rolagem horizontal. Cada cartão pode exibir um cabeçalho de imagem ou vídeo, texto do corpo e botões de resposta rápida ou um botão de URL.

Por exemplo, esta é uma mensagem de carrossel de cartão de mídia interativa que mostra três cartões em uma área de rolagem (delimitada por um retângulo pontilhado), cada um com um cabeçalho de imagem, corpo de texto e botão de URL:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/600343323_2167777830292496_5403577751834566910_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=LIgiBrad-i4Q7kNvwHWJjL1&_nc_oc=AdmtvsRiGnB5gceskbYgKCRiHik3BU_4HjzoER5Z3OJj9faW2Nk3ERrCvAeIkv7fU04&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=iQb6lMVPlWmBRLQseaYWCA&oh=00_AfqUwbekbP3AZIEX8Ebk3KSgCTH-nxpUcrehVI-ZAa5RZw&oe=698E7039)

Esta é a mesma mensagem, mas usando botões de resposta rápida em vez de botões de URL:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/600325826_4096765807302684_4781899173713977844_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=HlyreT5ta9sQ7kNvwHRPnlb&_nc_oc=Adm50Rt7Q-qXcnhLRE9ww3ZGETUIBiUnUVKT0RarYcek1Gha2HFMJLKtLEfTE4X8jpY&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=iQb6lMVPlWmBRLQseaYWCA&oh=00_AfqbFtMRBlKK-pOlouHf1ESDwcL3ncyjTytXqUPMfsxeEQ&oe=698E69A0)

## Componentes

-   As mensagens devem incluir entre 2 e 10 cartões.-   É necessário adicionar o corpo de texto da mensagem principal.-   Não há compatibilidade com cabeçalhos/rodapés de mensagens principais nem com componentes interativos.-   Os cartões devem incluir um cabeçalho com imagem ou vídeo. Outros tipos de cabeçalho não são compatíveis.-   O texto do corpo do cartão é opcional.-   Os cartões devem incluir um botão de URL ou um ou mais botões de resposta rápida. Os tipos e números de botões devem corresponder em todos os cartões (por exemplo, se você definir um cartão com dois botões de resposta rápida, todos os cartões deverão definir exatamente dois botões de resposta rápida).

## Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<USER_PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "carousel",
    "body": {
      "text": "<MESSAGE_BODY_TEXT>"
    },
    "action": {

      <!-- First card object -->
      "cards": [
        {
          "card_index": <CARD_INDEX>,
          "type": "cta_url",
          "header": {
            "type": "<HEADER_TYPE>",
            "<HEADER_TYPE>": {
              "link": "<MEDIA_ASSET_URL>"
            }
          },

          <!-- Card body text is optional -->
          "body": {
            "text": "<CARD_BODY_TEXT>"
          },

          "action": {
            <!-- Only if using a URL button -->
            "name": "cta_url",
            "parameters": {
              "display_text": "<URL_BUTTON_LABEL>",
              "url": "<URL_BUTTON_URL>"
            }
            <!-- Only if using one or more quick-reply buttons -->
            "buttons": [
              {
                "type": "quick_reply",
                "quick_reply": {
                  "id": "<QUICK_REPLY_BUTTON_ID>",
                  "title": "<QUICK_REPLY_BUTTON_LABEL>"
                }
              },
              <!-- Additional quick-reply buttons would follow -->
          }
        },
        <!-- Additional card objects would follow -->
      ]
    }
  }
}'
```

## Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`  
  
_String_

**Obrigatório.**  
  
Token de acesso.

`EAAJB...`

`<API_VERSION>`  
  
_String_

**Opcional.**  
  
Versão da API.

`v23.0`

`<BUSINESS_PHONE_NUMBER_ID>`  
  
_Número inteiro_

**Obrigatório.**  
  
Identificação do número de telefone comercial.

`106540352242922`

`<CARD_BODY_TEXT>`  
  
_String_

**Opcional.**  
  
Corpo do texto do cartão. Máximo de 160 caracteres e até 2 quebras de linha.

`*Blue Echeveria*\n\nA rosette-shaped succulent with powdery blue leaves, perfect for brightening up any space.`

`<CARD_INDEX>`  
  
_Número inteiro_

**Obrigatório.**  
  
Índice de cartões com base zero. Os cartões aparecerão da esquerda para a direita em uma visualização de rolagem, começando com 0.

`0`

`<HEADER_TYPE>`  
  
_String_

**Obrigatório.**  
  
Tipo de cabeçalho. Os valores podem ser os seguintes:  
  
`image`: Indica um cabeçalho de imagem do cartão.  
  
`video`: indica um cabeçalho de vídeo do cartão.  
  
Consulte [Tipos de mídia compatíveis](/documentation/business-messaging/whatsapp/business-phone-numbers/media).

`image`

`<MEDIA_ASSET_URL>`  
  
_String_

**Obrigatório.**  
  
O URL do ativo de mídia disponível publicamente.

`https://www.luckyshrub.com/assets/blue-echeveria.jpeg`

`<MESSAGE_BODY_TEXT>`  
  
_String_

**Obrigatório.**  
  
Texto do corpo da mensagem principal. Máximo de 1.024 caracteres.

`Of course! Here are three of our latest arrivals, each under $25:`

`<QUICK_REPLY_BUTTON_ID>`  
  
_String_

**Obrigatório ao usar um botão de resposta rápida.**  
  
ID do botão de resposta rápida. Máximo de 20 caracteres.

`learn-blue-echeveria`

`<QUICK_REPLY_BUTTON_LABEL>`  
  
_String_

**Obrigatório ao usar um botão de resposta rápida.**  
  
Texto do rótulo do botão de resposta rápida. Máximo de 20 caracteres.

`Learn more`

`<URL_BUTTON_LABEL>`  
  
_String_

**Obrigatório ao usar um botão de URL.**  
  
Texto do rótulo do botão de URL. Máximo de 20 caracteres.

`Buy now`

`<URL_BUTTON_URL>`  
  
_String_

**Obrigatório ao usar um botão de URL.**  
  
O URL que será carregado no navegador da web padrão do dispositivo após o toque do usuário. Máximo de 20 caracteres.

`https://shop.luckyshrub.com/latest/blue-echeveria`

`<USER_PHONE_NUMBER>`  
  
_String_

**Obrigatório.**  
  
Número de telefone do usuário do WhatsApp.

`16505551234`

## Exemplos de solicitação

### Exemplo de botões de URL

Esse exemplo de solicitação envia uma mensagem de carrossel de mídia composta por três cartões, cada um com um cabeçalho de imagem, texto do corpo do cartão e um botão de URL.

```
curl 'https://graph.facebook.com/v23.0/106540352242922/messages' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "16505551234",  "type": "interactive",  "interactive": {    "type": "carousel",    "body": {      "text": "Of course! Here are three of our latest arrivals, each under $25:"    },    "action": {      "cards": [        {          "card_index": 0,          "type": "cta_url",          "header": {            "type": "image",            "image": {              "link": "https://www.luckyshrub.com/assets/blue-echeveria.jpeg"            }          },          "body": {            "text": "*Blue Echeveria*\n\nA rosette-shaped succulent with powdery blue leaves, perfect for brightening up any space."          },          "action": {            "name": "cta_url",            "parameters": {              "display_text": "Buy now",              "url": "https://shop.luckyshrub.com/latest/blue-echeveria"            }          }        },        {          "card_index": 1,          "type": "cta_url",          "header": {            "type": "image",            "image": {              "link": "https://www.luckyshrub.com/assets/zebra-haworthia.jpeg"            }          },          "body": {            "text": "*Zebra Haworthia*\n\nStriking white stripes on deep green leaves give this compact succulent a bold, modern look."          },          "action": {            "name": "cta_url",            "parameters": {              "display_text": "Buy now",              "url": "https://shop.luckyshrub.com/latest/zebra-haworthia"            }          }        },        {          "card_index": 2,          "type": "cta_url",          "header": {            "type": "image",            "image": {              "link": "https://www.luckyshrub.com/assets/panda-plant.jpeg"            }          },          "body": {            "text": "*Panda Plant*\n\nSoft, fuzzy leaves with chocolate-brown edges—adorable and easy to care for."          },          "action": {            "name": "cta_url",            "parameters": {              "display_text": "Buy now",              "url": "https://shop.luckyshrub.com/latest/panda-plant"            }          }        }      ]    }  }}'
```

### Exemplo de botões de resposta rápida

Esse exemplo de solicitação envia uma mensagem de mídia de carrossel composta por três cartões, cada um com um cabeçalho de imagem, texto do corpo do cartão e dois botões de resposta rápida.

```
curl 'https://graph.facebook.com/v23.0/106540352242922/messages' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "16505551234",  "type": "interactive",  "interactive": {    "type": "carousel",    "body": {      "text": "Of course! Here are three of our latest arrivals, each under $25:"    },    "action": {      "cards": [        {          "card_index": 0,          "type": "cta_url",          "header": {            "type": "image",            "image": {              "link": "https://www.luckyshrub.com/assets/blue-echeveria.jpeg"            }          },          "body": {            "text": "*Blue Echeveria*\n\nA rosette-shaped succulent with powdery blue leaves, perfect for brightening up any space."          },          "action": {            "buttons": [              {                "type": "quick_reply",                "quick_reply": {                  "id": "learn-blue-echeveria",                  "title": "Learn more"                }              },              {                "type": "quick_reply",                "quick_reply": {                  "id": "fav-blue-echeveria",                  "title": "Add to favorites"                }              }            ]          }        },        {          "card_index": 1,          "type": "cta_url",          "header": {            "type": "image",            "image": {              "link": "https://www.luckyshrub.com/assets/zebra-haworthia.jpeg"            }          },          "body": {            "text": "*Zebra Haworthia*\n\nStriking white stripes on deep green leaves give this compact succulent a bold, modern look."          },          "action": {            "buttons": [              {                "type": "quick_reply",                "quick_reply": {                  "id": "learn-zebra-haworthia",                  "title": "Learn more"                }              },              {                "type": "quick_reply",                "quick_reply": {                  "id": "fav-zebra-haworthia",                  "title": "Add to favorites"                }              }            ]          }        },        {          "card_index": 2,          "type": "cta_url",          "header": {            "type": "image",            "image": {              "link": "https://www.luckyshrub.com/assets/panda-plant.jpeg"            }          },          "body": {            "text": "*Panda Plant*\n\nSoft, fuzzy leaves with chocolate-brown edges—adorable and easy to care for."          },          "action": {            "buttons": [              {                "type": "quick_reply",                "quick_reply": {                  "id": "learn-panda-plant",                  "title": "Learn more"                }              },              {                "type": "quick_reply",                "quick_reply": {                  "id": "fav-panda-plant",                  "title": "Add to favorites"                }              }            ]          }        }      ]    }  }}'
```

## Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)