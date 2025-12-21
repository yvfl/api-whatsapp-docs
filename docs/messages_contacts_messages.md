<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contacts-messages -->
<!-- Scraped: 2025-12-20T17:25:41.083Z -->

# Mensagens de contatos

Updated: 3 de nov de 2025

As mensagens de contato permitem que você envie informações avançadas de contato diretamente aos usuários do WhatsApp, como nomes, números de telefone, endereços físicos e endereços de email.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/441381765_2668119610015051_1596469393832242771_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=UK3muBlGqC0Q7kNvwH3aDQS&_nc_oc=AdkENJem7Pka7SbRmlmaZRelO6-EvLhkHGVF8B0XCH5XBXzflTgUCLiL0WJXrlp2uLg&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=CgyJor0JACERfmLxGo4DGw&oh=00_Afk1_8EfYQJ8TwWAwCENQzAf_JekRmWWvJ6Alz_vl1HgPw&oe=69610D32)

Quando um usuário do WhatsApp toca na seta do perfil da mensagem, as informações do contato são exibidas em uma tela de perfil:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/441391825_1516000578987481_5920245070887074504_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=HIrowI5OrgcQ7kNvwGDcohO&_nc_oc=AdmWxApz0_AjGsyAk5WqhuHHT2gn1MGJ0Bzz0uI88wBOGpU-iQdjM98ihu1SdOIJ2sQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=CgyJor0JACERfmLxGo4DGw&oh=00_AfmVqKtlL-Lk43NVo4bsZTOFHafRdcpbpdRp6d7Dsx9Vxg&oe=696109E7)

Cada mensagem pode incluir informações para até 257 contatos, embora seja recomendado enviar menos para evitar problemas de usabilidade e feedback negativo.

## Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma mensagem de contato a um usuário do WhatsApp.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "contacts",
  "contacts": [
    {
      "addresses": [
        {
          "street": "<STREET_NUMBER_AND_NAME>",
          "city": "<CITY>",
          "state": "<STATE_CODE>",
          "zip": "<ZIP_CODE>",
          "country": "<COUNTRY_NAME>",
          "country_code": "<COUNTRY_CODE>",
          "type": "<ADDRESS_TYPE>"
        }
        <!-- Additional addresses objects go here, if using -->
      ],
      "birthday": "<BIRTHDAY>",
      "emails": [
        {
          "email": "<EMAIL_ADDRESS>",
          "type": "<EMAIL_TYPE>"
        }
        <!-- Additional emails objects go here, if using -->
      ],
      "name": {
        "formatted_name": "<FULL_NAME>",
        "first_name": "<FIRST_NAME>",
        "last_name": "<LAST_NAME>",
        "middle_name": "<MIDDLE_NAME>",
        "suffix": "<SUFFIX>",
        "prefix": "<PREFIX>"
      },
      "org": {
        "company": "<COMPANY_OR_ORG_NAME>",
        "department": "<DEPARTMENT_NAME>",
        "title": "<JOB_TITLE>"
      },
      "phones": [
          "phone": "<PHONE_NUMBER>",
          "type": "<PHONE_NUMBER_TYPE>",
          "wa_id": "<WHATSAPP_USER_ID>"
        }
        <!-- Additional phones objects go here, if using -->
      ],
      "urls": [
        {
          "url": "<WEBSITE_URL>",
          "type": "<WEBSITE_TYPE>"
        }
        <!-- Additional URLs go here, if using -->
      ]
    }
  ]
}'
```

## Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

[Token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ou [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<ADDRESS_TYPE>`

_String_

**Opcional.**

Tipo de endereço, como residencial ou comercial.

`Home`

`<API_VERSION>`

_String_

**Opcional.**

Versão da Graph API.

v24.0

`<BIRTHDAY>`

_String_

**Opcional.**

Data de aniversário do contato. Deve estar no formato AAAA-MM-DD.

`1999-01-23`

`<CITY>`

_String_

**Opcional.**

Cidade onde o contato reside.

`Menlo Park`

`<COMPANY_OR_ORG_NAME>`

_String_

**Opcional.**

Nome da empresa onde o contato trabalha.

`Lucky Shrub`

`<COUNTRY_CODE>`

_String_

**Opcional.**

Código de país ISO de duas letras.

`US`

`<COUNTRY_NAME>`

_String_

**Opcional.**

Nome do país.

`United States`

`<DEPARTMENT_NAME>`

_String_

**Opcional.**

Departamento dentro da empresa.

`Legal`

`<EMAIL_ADDRESS>`

_String_

**Opcional.**

Endereço de email do contato.

`bjohnson@luckyshrub.com`

`<EMAIL_TYPE>`

_String_

**Opcional.**

Tipo de email, como pessoal ou profissional.

`Work`

`<FIRST_NAME>`

_String_

**Opcional.**

Nome do contato.

`Barbara`

`<FORMATTED_NAME>`

_String_

**Obrigatório.**

Nome formatado do contato. Ele aparecerá na mensagem junto com o botão de seta do perfil.

`Barbara J. Johnson`

`<JOB_TITLE>`

_String_

**Opcional.**

Cargo do contato.

`Lead Counsel`

`<LAST_NAME>`

_String_

**Opcional.**

Sobrenome do contato.

`Johnson`

`<MIDDLE_NAME>`

_String_

**Opcional.**

Nome do meio do contato.

`Joana`

`<PHONE_NUMBER>`

_String_

**Opcional.**

Número de telefone do usuário do WhatsApp.

`+16505559999`

`<PHONE_NUMBER_TYPE>`

_String_

**Opcional.**

Tipo de número de telefone. Por exemplo, celular, iPhone, residencial, comercial etc.

`Home`

`<PREFIX>`

_String_

**Opcional.**

Título ou cargo do contato, como Sr., Sra., Dr., entre outros.

`Dr.`

`<STATE_CODE>`

_String_

**Opcional.**

Código de estado com duas letras.

`CA`

`<STREET_NUMBER_AND_NAME>`

_String_

**Opcional.**

Endereço do contato.

`1 Lucky Shrub Way`

`<SUFFIX>`

_String_

**Opcional.**

Sufixo para o nome do contato, se aplicável.

`Esq.`

`<WEBSITE_TYPE>`

_String_

**Opcional.**

Tipo de site. Por exemplo, empresa, trabalho, pessoal, Página do Facebook, Instagram etc.

`Company`

`<WEBSITE_URL>`

_String_

**Opcional.**

URL do site associado ao contato ou à empresa.

`https://www.luckyshrub.com`

`<WHATSAPP_USER_ID>`

_String_

**Opcional.**

ID do usuário do WhatsApp. Em caso de omissão, a mensagem exibirá um botão Convidar para o WhatsApp em vez dos botões-padrão.

Consulte [Comportamento do botão](#button-behavior) abaixo.

`19175559999`

`<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`

_String_

**Obrigatório.**

ID do número de telefone comercial do WhatsApp.

`106540352242922`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

`<ZIP_CODE>`

_String_

**Opcional.**

Código postal.

`94025`

## Comportamento do botão

Se você incluir o ID do WhatsApp do contato na mensagem (por meio da propriedade `wa_id`), a mensagem incluirá um **botão Enviar mensagem** e um **botão Salvar contato**:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/441399296_815661620463689_7258599973025915055_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=syoLmndORksQ7kNvwG1dACw&_nc_oc=AdkDUD0Beil1ussybJ0eTKt5EgKKovInS2u69jq0y3r53w--9tEAlelKQ_p04WiM1a0&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=CgyJor0JACERfmLxGo4DGw&oh=00_AfkCnrppvifuNSgerQW5wr2zmvsCASuA5zHVmGTKX5vWPg&oe=696113AA)

Se o usuário do WhatsApp tocar no botão **Conversar**, uma nova mensagem será aberta com o contato. Se o usuário tocar no botão **Salvar contato**, será possível salvá-lo como um novo contato ou atualizar um contato existente.

Se a propriedade `wa_id` for omitida, os dois botões serão substituídos por um botão **Convidar para o WhatsApp**:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/441366594_855962089669296_5557083162637364924_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=bB_--ZlY_SAQ7kNvwHQtSYk&_nc_oc=Adl8tgOjseySx5YYOPoWbxrdQRujZhkfq1dIH_mf4jL2hSU51YzQ4gNXSm2WrV47NHU&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=CgyJor0JACERfmLxGo4DGw&oh=00_AfnWRNUr79cfm_8xnmLlMafuVrsm2JR0PmBW6HYmQmnC2Q&oe=696131D7)

## Exemplo de solicitação

Exemplo de solicitação para enviar uma mensagem de contato com dois endereços físicos, dois endereços de email, dois números de telefone e dois URLs de site.

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "to": "+16505551234",
  "type": "contacts",
  "contacts": [
    {
      "addresses": [
        {
          "street": "1 Lucky Shrub Way",
          "city": "Menlo Park",
          "state": "CA",
          "zip": "94025",
          "country": "United States",
          "country_code": "US",
          "type": "Office"
        },
        {
          "street": "1 Hacker Way",
          "city": "Menlo Park",
          "state": "CA",
          "zip": "94025",
          "country": "United States",
          "country_code": "US",
          "type": "Pop-Up"
        }
      ],
      "birthday": "1999-01-23",
      "emails": [
        {
          "email": "bjohnson@luckyshrub.com",
          "type": "Work"
        },
        {
          "email": "bjohnson@luckyshrubplants.com",
          "type": "Work (old)"
        }
      ],
      "name": {
        "formatted_name": "Barbara J. Johnson",
        "first_name": "Barbara",
        "last_name": "Johnson",
        "middle_name": "Joana",
        "suffix": "Esq.",
        "prefix": "Dr."
      },
      "org": {
        "company": "Lucky Shrub",
        "department": "Legal",
        "title": "Lead Counsel"
      },
      "phones": [
        {
          "phone": "+16505559999",
          "type": "Landline"
        },
        {
          "phone": "+19175559999",
          "type": "Mobile",
          "wa_id": "19175559999"
        }
      ],
      "urls": [
        {
          "url": "https://www.luckyshrub.com",
          "type": "Company"
        },
        {
          "url": "https://www.facebook.com/luckyshrubplants",
          "type": "Company (FB)"
        }
      ]
    }
  ]
}'
```

## Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)