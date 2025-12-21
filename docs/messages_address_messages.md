<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/address-messages -->
<!-- Scraped: 2025-12-20T17:25:16.954Z -->

# Mensagens de endereço

Updated: 7 de nov de 2025

Esse recurso está disponível apenas para empresas com sede na Índia e os respectivos clientes locais.

Por meio de mensagens de endereço, os usuários podem compartilhar endereços de envio com as empresas no WhatsApp de um jeito mais simples.

As mensagens de endereço são mensagens interativas com quatro partes principais: `header`, `body`, `footer` e `action`. Dentro do componente de ação, a empresa especifica o nome “address\_message” e os parâmetros relevantes.

A tabela abaixo apresenta os campos compatíveis com as mensagens de endereço.

Nome do campo

Etiqueta de exibição

Tipo de entrada

Países com suporte

Limitações

`name`

Nome

texto

Índia

Nenhum

`phone_number`

Número de telefone

tel

Índia

Somente números de telefone válidos

`in_pin_code`

Código PIN

texto

Índia

Comprimento máximo: 6

`house_number`

Número do apartamento/casa

texto

Índia

Nenhum

`floor_number`

Número do andar

texto

Índia

Nenhum

`tower_number`

Número da torre

texto

Índia

Nenhum

`building_name`

Nome do edifício/condomínio

texto

Índia

Nenhum

`address`

Endereço

texto

Índia

Nenhum

`landmark_area`

Ponto de referência/área

texto

Índia

Nenhum

`city`

Cidade

texto

Índia

Nenhum

`state`

Estado

texto

Índia

Nenhum

## Exemplo de chamada de API

Este é um exemplo da chamada de API para mensagem de endereço. O atributo `country` é um campo obrigatório nos parâmetros de ação. Se ele não for incluído, ocorrerá um erro de validação.

```
curl -X  POST \
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "address_message",
    "body": {
      "text": "Thanks for your order! Tell us what address you’d like this order delivered to."
    },
    "action": {
      "name": "address_message",
      "parameters": {
        "country": "<COUNTRY_ISO_CODE>"
      }
    }
  }
}'
```

## Solução de erros

Se o código de área do número de telefone do país em questão não estiver correto, as empresas não conseguirão solicitar a mensagem de endereço ao destinatário. Por exemplo, as empresas não conseguirão solicitar uma mensagem de endereço a um destinatário cujo país seja "Índia", mas cujo número de telefone tenha código de área "65".

Após o envio da mensagem de endereço, a empresa aguarda o usuário preencher o endereço e enviá-lo de volta. O endereço inserido pelo usuário é compartilhado por meio do [webhook](/documentation/business-messaging/whatsapp/webhooks/overview) registrado no [processo de configuração](/documentation/business-messaging/whatsapp/webhooks/overview).

## Etapas da mensagem de endereço

Estas são as etapas da mensagem de endereço:

-   A empresa envia uma mensagem de endereço ao usuário com o nome de ação `address_message`.-   O usuário interage com a mensagem clicando na CTA, que exibe a tela da mensagem de endereço. O usuário preenche o endereço e envia o formulário.-   Depois disso, o parceiro recebe uma notificação de webhook com os detalhes do endereço enviado pelo usuário.

**Exemplo de mensagem de endereço na Índia**

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565829166_1339318437926807_3659527486531714210_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=uBuydZ9CoYwQ7kNvwHJEbhM&_nc_oc=AdkZVczlTJ7EGXN4DMEdGTxD7okVX-gqpI0QlrT-612NWxfjrbG7ddkjwFD5adZXj6c&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=fZIISxQarkg8CjFHFNmoWA&oh=00_Afl-y3oQgUcBCkDiVVSMNu2sx9hwEhMb9NqQkWNYak8YMA&oe=696114F3)![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/560182401_1339318284593489_3917170764968888761_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=kz1lOpnNvLwQ7kNvwF7fv-a&_nc_oc=AdlyCogITZGR8hUecr-jUsVz_AcRUOzJQ6tEgreJwtqhmjX5z9I6U6kxhoNRUem56Wg&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=fZIISxQarkg8CjFHFNmoWA&oh=00_AflKf9Zbq6PLaAT3cZETVooRasR_v5DnutvxCVwDpA5ZZQ&oe=696127E3)![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561656043_1339318467926804_8340276620740620111_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=qQW9YafGWzkQ7kNvwF2XDRx&_nc_oc=Adl4TLNyT1DrVq7nPtMiazuMkelO7EBoCHmHAuesFOKdQ-OOOXpibcfqFTViKw10ApE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=fZIISxQarkg8CjFHFNmoWA&oh=00_Afk6gBtf72v4TN34mEgQRZp6y-CStweD7VF5Sit2TenhLA&oe=696113D3)![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/561778150_1339318131260171_5843569977396603182_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=kLJIq1wX9T0Q7kNvwEG0UWK&_nc_oc=AdkMnpIFtP55PYqpQzQF9rlmx7wADq7c4fiBTNKs4B_boUTGqtWAKgh4VH126rI1I9w&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=fZIISxQarkg8CjFHFNmoWA&oh=00_Afm6sEQdrXHHbQBMA3DRLy8268kX2j0Gq4Z0eqJghxJs2g&oe=69610D92)

O diagrama de sequência a seguir mostra um fluxo de integração típico de uma mensagem de endereço.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/564006097_1339318367926814_6312454230710951737_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=p_lKJxI_wR8Q7kNvwHmtk3m&_nc_oc=AdnMtnufPy2Z7_fCrv1ABn6qYgWX4OIKtR3VcJO5jLq4-1kpkpzp8y-STjyOugRlnAU&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=fZIISxQarkg8CjFHFNmoWA&oh=00_AfmRNXrRS4FrobZw2NbpAIpIbv3y9c62QmhKjrqUPEisLg&oe=69613413)

## Parâmetros de ação adicionais

A empresa pode passar atributos adicionais (por exemplo, `values`, `validation_errors` ou `saved_addresses`) como parte dos parâmetros de ação interativos. Veja abaixo mais informações sobre o uso de cada um deles.

Parâmetro de ação

Uso

`values`

As empresas preenchem automaticamente os campos de endereço (por exemplo, preenchem automaticamente o campo "cidade" com "Índia").

`saved_addresses`

Para empresas, elas podem passar endereços salvos anteriormente associados ao usuário.

Para usuários, eles terão a opção de escolher o endereço salvo em vez de preenchê-lo manualmente.

`validation_errors`

As empresas podem indicar erros nos campos de endereço, e o WhatsApp impedirá que o usuário envie o formulário antes que os problemas sejam corrigidos.

### Enviar mensagem de endereço para um usuário

Faça uma chamada `POST` a `/<PHONE_NUMBER_ID/messages` usando a API do WhatsApp para enviar mensagens de endereço criptografadas de ponta a ponta para o usuário:

```
curl -X  POST \
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "address_message",
    "body": {
      "text": "Thanks for your order! Tell us what address you’d like this order delivered to."
    },
    "action": {
      "name": "address_message",
      "parameters": "JSON Payload"
    }
  }
}'
```

Para enviar uma mensagem de endereço sem endereços salvos, o WhatsApp exibirá ao usuário ou à empresa um formulário de endereço a ser preenchido com um novo endereço.

```
curl -X  POST \
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+91xxxxxxxxxx",
  "type": "interactive",
  "interactive": {
    "type": "address_message",
    "body": {
      "text": "Thanks for your order! Tell us what address you’d like this order delivered to."
    },
    "action": {
      "name": "address_message",
      "parameters": {
        "country": "IN",
        "values": {
          "name": "<CUSTOMER_NAME>",
          "phone_number": "+91xxxxxxxxxx"
        }
      }
    }
  }
}'
```

Para enviar uma mensagem de endereço com endereços salvos, o WhatsApp apresentará ao usuário ou à empresa a opção de selecionar um dos endereços salvos ou adicionar um novo. Os usuários podem ignorar o endereço salvo e inserir um novo.

```
curl -X  POST \
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "91xxxxxxxxxx",
  "type": "interactive",
  "interactive": {
    "type": "address_message",
    "body": {
      "text": "Thanks for your order! Tell us what address you’d like this order delivered to."
    },
    "action": {
      "name": "address_message",
      "parameters": {
        "country": "IN",
        "saved_addresses": [
          {
            "id": "address1",
            "value": {
              "name": "<CUSTOMER_NAME>",
              "phone_number": "+91xxxxxxxxxx",
              "in_pin_code": "400063",
              "floor_number": "8",
              "building_name": "",
              "address": "Wing A, Cello Triumph,IB Patel Rd",
              "landmark_area": "Goregaon",
              "city": "Mumbai"
            }
          }
        ]
      }
    }
  }
}'
```

## Verificar a resposta

Uma resposta bem-sucedida inclui um objeto `messages` com um ID para a mensagem recém-criada.

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<PHONE_NUMBER>",
      "wa_id": "<WHATSAPP_ID>"
    }
  ],
  "messages": [
    {
      "id": "wamid.ID"
    }
  ]
}
```

Respostas com falha conterão uma mensagem de erro. Veja [Mensagens de erro e status](/documentation/business-messaging/whatsapp/support/error-codes) para mais informações.

## Enviar uma mensagem de endereço com erros de validação

Uma mensagem de endereço será reenviada ao usuário caso ocorra um erro de validação no servidor da empresa. A empresa deverá devolver o conjunto de valores previamente inseridos pelo usuário com os respectivos erros de validação de cada campo inválido, conforme mostrado no exemplo de carga abaixo.

```
curl -X  POST \
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d
'{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "91xxxxxxxxxx",
  "type": "interactive",
  "interactive": {
    "type": "address_message",
    "body": {
      "text": "Thanks for your order! Tell us what address you’d like this order delivered to."
    },
    "action": {
      "name": "address_message",
      "parameters": {
          "country": "IN",
          "values": {
             "name": "CUSTOMER_NAME",
             "phone_number": "+91xxxxxxxxxx",
             "in_pin_code": "666666",
             "address": "Some other location",
             "city": "Delhi"
          },
          "validation_errors": {
             "in_pin_code": "We could not locate this pin code."
          }
       }
    }
  }
}'
```

## Receber notificações sobre o envio de endereços

As empresas receberão notificações de envio de endereço por meio de [webhooks](/documentation/business-messaging/whatsapp/webhooks/overview), como o exemplo abaixo.

```
{  "messages": [    {      "id": "gBGGFlAwCWFvAgmrzrKijase8yA",      "from": "<PHONE_NUMBER>",      "interactive": {        "type": "interactive",        "action": "address_message",        "nfm_reply": {          "name": "address_message",          "response_json": "<response_json from client>",          "body": "<body text from client>"        },        "timestamp": "1670394125"      }    }  ]}
```

A notificação de webhook tem os valores a seguir.

Nome do campo

Tipo

Descrição

`interactive`

Objeto

Contém a resposta do cliente.

`type`

String

Seria `nfm_reply`, indicando que se trata de uma resposta do fluxo nativo (NFM, pelas iniciais em inglês) do cliente.

`nfm_reply`

Objeto

Contém os dados recebidos do cliente.

`response_json`

String

Os valores dos campos de endereço preenchidos pelo usuário no formato JSON que sempre estão presentes.

`body` (opcional)

String

O corpo do texto do cliente, o que o usuário vê.

`name` (opcional)

String

Seria `address_message`, indicando o tipo de resposta de ação NFM do cliente.

Veja abaixo uma resposta do tipo NFM enviada na solicitação de mensagem de endereço na Índia.

```
{
  "messages": [
    {
      "context": {
        "from": "FROM_PHONE_NUMBER_ID",
        "id": "wamid.HBgLMTIwNjU1NTAxMDcVAgARGBI3NjNFN0U5QzMzNDlCQjY0M0QA"
      },
      "from": "<PHONE_NUMBER>",
      "id": "wamid.HBgLMTIwNjU1NTAxMDcVAgASGCA5RDhBNENEMEQ3RENEOEEzMEI0RUExRDczN0I1NThFQwA=",
      "timestamp": "1671498855",
      "type": "interactive",
      "interactive": {
        "type": "nfm_reply",
        "nfm_reply": {
          "response_json": "{\"saved_address_id\":\"address1\",\"values\":{\"in_pin_code\":\"400063\",\"building_name\":\"\",\"landmark_area\":\"Goregaon\",\"address\":\"Wing A, Cello Triumph, IB Patel Rd\",\"city\":\"Mumbai\",\"name\":\"CUSTOMER_NAME\",\"phone_number\":\"+91xxxxxxxxxx\",\"floor_number\":\"8\"}}",
          "body": "CUSTOMER_NAME\n +91xxxxxxxxxx\n 400063, Goregaon, Wing A, Cello Triumph,IB Patel Rd, Mumbai, 8",
          "name": "address_message"
        }
      }
    }
  ]
}
```

## Recurso não compatível

Caso o cliente não ofereça suporte para `address_message`, as mensagens serão removidas silenciosamente. Além disso, a empresa receberá uma mensagem de erro por meio do webhook. Veja abaixo a notificação enviada por webhook:

```
{  "statuses": [    {      "errors": [        {          "code": 1026,          "href": "/docs/whatsapp/api/errors",          "title": "Receiver Incapable"        }      ],      "id": "gBGGFlAwCWFvAgkyHMGKnRu4JeA",      "message": {        "recipient_id": "+91xxxxxxxxxx"      },      "recipient_id": "91xxxxxxxxxx",      "status": "failed",      "timestamp": "1670394125",      "type": "message"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)