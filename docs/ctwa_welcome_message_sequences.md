<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/ctwa/welcome-message-sequences -->
<!-- Scraped: 2025-12-20T17:43:31.148Z -->

# Sequências de mensagens de boas-vindas

Updated: 30 de out de 2025

Permissão necessária: `WHATSAPP_BUSINESS_MANAGEMENT` para a WABA que está sendo acessada.

Ao criar anúncios de clique para o WhatsApp, você pode conectar uma sequência de mensagens de boas-vindas usando o app de um parceiro de mensagens. Uma sequência pode incluir texto, mensagens preenchidas automaticamente e perguntas frequentes.

Este guia explica como gerenciar sequências de mensagens de boas-vindas pelo ponto de extremidade da API.

## Pontos de extremidade

```
// Create a new sequence / Change an existing sequence
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/welcome_message_sequences
```

```
// Get a list of sequences / Get a specific sequence
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/welcome_message_sequences
```

```
// Delete a sequence
DELETE /<WHATSAPP_BUSINESS_ACCOUNT_ID>/welcome_message_sequences
```

## Criar uma sequência

Para carregar uma nova sequência de mensagens de boas-vindas, envie uma solicitação `POST` ao ponto de extremidade `WHATSAPP_BUSINESS_ACCOUNT_ID/welcome_message_sequences`.

### Ponto de extremidade

```
// Create a new sequence
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/welcome_message_sequences
```

### Exemplo de solicitação

```
curl -X POST\
-F 'welcome_message_sequence=
      {
       "text":"This is a welcome message authored in a 3P tool",
"autofill_message": {"content": "Hello! Can I get more info on this!"},
"ice_breakers":[
        ]
      }' \
-F 'name="Driver sign-up"' \
"https://graph.facebook.com/v14.0/WhatsappBusinessAccount/welcome_message_sequences"
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Exemplo de resposta

Em resposta, é retornado um ID da sequência de mensagens de boas-vindas.

```
```

### Parâmetros

Parâmetro

Descrição

Exemplo de valor

`sequence_id`

_String_

**Obrigatório**

  
O identificador da sequência.

`186473890`

`name`

_String_

**Obrigatório**

  
O nome da sequência.

`Driver sign-up`

`welcome_message_sequence`

_Objeto JSON_

**Obrigatório**

  
O JSON da mensagem de boas-vindas que será enviado após o clique no anúncio.

```
{  "text":"This is a welcome message authored in a 3P tool",  "autofill_message": {"content": "Hello! Can I get more info on this!"},  "ice_breakers":[    {"title":"Quick reply 1"},    {"title":"Quick reply 2"},    {"title":"Quick reply 3"}  ]}
```

## Alterar uma sequência existente

Não é possível excluir uma sequência vinculada a um anúncio ativo.

Para atualizar uma sequência existente, envie uma solicitação `POST` ao ponto de extremidade `WHATSAPP_BUSINESS_ACCOUNT_ID/welcome_message_sequences` com:

-   O parâmetro `sequence_id` definido como a identificação da sequência que está sendo atualizada.-   Outros parâmetros, como `name` ou `welcome_message_sequence`, que precisam ser atualizados.

### Ponto de extremidade

```
// Change an existing sequence
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/welcome_message_sequences
```

### Exemplo de solicitação

```
curl -X POST\-F 'sequence_id="186473890"'\-F 'name="Driver sign-up updated name"' \"https://graph.facebook.com/v14.0/395394933592466/welcome_message_sequences"-H 'Authorization: Bearer BEAiil...'
```

### Exemplo de resposta

Em resposta, é retornada uma mensagem de sucesso ou de erro.

```
```

### Parâmetros

Espaço reservado

Descrição

Exemplo de valor

`sequence_id`

_String_

**Obrigatório**

  
O identificador da sequência.

`186473890`

`name`

_String_

**Opcional**

  
O nome da sequência.

`Driver sign-up`

`welcome_message_sequence`

_Objeto JSON_

**Opcional**

  
O JSON da mensagem de boas-vindas que será enviado após o clique no anúncio.

```
{  "text":"This is a welcome message authored in a 3P tool",  "autofill_message": {"content": "Hello! Can I get more info on this!"},  "ice_breakers":[    {"title":"Quick reply 1"},    {"title":"Quick reply 2"},    {"title":"Quick reply 3"}  ]}
```

## Obter uma lista de sequências

Para obter uma sequência existente, envie uma solicitação `GET` ao ponto de extremidade `WHATSAPP_BUSINESS_ACCOUNT_ID/welcome_message_sequences` com:

### Ponto de extremidade

```
// Update an existing sequence
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/welcome_message_sequences
```

### Exemplo de solicitação

```
curl -X GET "https://graph.facebook.com/v14.0/395394933592466/welcome_message_sequences"     -H 'Authorization: Bearer BEAiil...'
```

### Exemplo de resposta

Se a solicitação for bem-sucedida, uma lista de sequências será retornada para o app em questão.

```
[
  {
    "sequence_id":"8716291",
    "name":"Driver Sign up",
    "welcome_message_sequence":"<JSON_OBJECT>",
    "is_used_in_ad": true,
  },
  {
    "sequence_id":"4362",
    "name":"Basic Triage",
    "welcome_message_sequence":"<JSON_OBJECT>",
    "is_used_in_ad": false
  },
  {
    "sequence_id":"0139138",
    "name":"Appointment Schedule",
    "welcome_message_sequence":"<JSON_OBJECT>",
    "is_used_in_ad": true
  }
  ...
  ...
  ...,
  {
    "sequence_id":"6987565",
    "name":"Car Leads",
    "welcome_message_sequence":"<JSON_OBJECT>",
    "is_used_in_ad": false
  },
]
```

## Obter uma sequência específica

Para obter uma sequência específica, envie uma solicitação `GET` para `WHATSAPP_BUSINESS_ACCOUNT_ID/welcome_message_sequences` com o parâmetro `sequence_id` definido como a identificação da sequência que você deseja consultar.

### Ponto de extremidade

```
// Update an existing sequence
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/welcome_message_sequences
```

### Exemplo de solicitação

```
curl -X GET \-F 'sequence_id="6987565"'"https://graph.facebook.com/v14.0/395394933592466/welcome_message_sequences"-H 'Authorization: Bearer BEAiil...'
```

### Exemplo de resposta

Se a solicitação for bem-sucedida, uma lista de sequências será retornada para o app em questão.

```
[
  {
    "sequence_id":"6987565",
    "name":"Driver Sign up",
    "welcome_message_sequence":"<JSON_OBJECT>",
    "is_used_in_ad": false
  },
]
```

Espaço reservado

Descrição

Exemplo de valor

`sequence_id`

_String_

**Opcional**

  
O identificador da sequência.

`186473890`

`limit`

_int_

**Opcional**

  
Número de sequências a serem buscadas.

`5`

## Excluir uma sequência

Não é possível excluir uma sequência vinculada a um anúncio ativo.

Para excluir uma sequência, envie uma solicitação `DELETE` para `WHATSAPP_BUSINESS_ACCOUNT_ID/welcome_message_sequences` com o parâmetro `sequence_id` definido como a identificação da sequência que você deseja excluir.

### Ponto de extremidade

```
// Update an existing sequence
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/welcome_message_sequences
```

### Exemplo de solicitação

```
curl -X DELETE \-F 'sequence_id="1234567890"'"https://graph.facebook.com/v14.0/395394933592466/welcome_message_sequences"-H 'Authorization: Bearer BEAiil...'
```

### Exemplo de resposta

Se a solicitação for bem-sucedida, uma lista de sequências será retornada para o app em questão.

```
```

Espaço reservado

Descrição

Exemplo de valor

`sequence_id`

_String_

**Opcional**

  
O identificador da sequência.

`186473890`

## Webhook

O webhook a seguir é disparado quando uma conversa é iniciada depois que o usuário clica em um anúncio com uma chamada para ação Clique para o WhatsApp.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "PHONE_NUMBER",              "phone_number_id": "PHONE_NUMBER_ID"            },            "contacts": [              {                "profile": {                  "name": "NAME"                },                "wa_id": "ID"              }            ],            "messages": [              {                "referral": {                  "source_url": "AD_OR_POST_FB_URL",                  "source_id": "ADID",                  "source_type": "ad or post",                  "headline": "AD_TITLE",                  "body": "AD_DESCRIPTION",                  "media_type": "image or video",                  "image_url": "RAW_IMAGE_URL",                  "video_url": "RAW_VIDEO_URL",                  "thumbnail_url": "RAW_THUMBNAIL_URL",                  "ctwa_clid": "CTWA_CLID",                  "ref": "REF_ID",  // New field in referral                },                "from": "SENDER_PHONE_NUMBERID",                "id": "wamid.ID",                "timestamp": "TIMESTAMP",                "type": "text",                "text": {                  "body": "BODY"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

## Experiência da API de Marketing

Depois que as sequências de mensagens de boas-vindas tiverem sido enviadas por meio da API, a identificação da sequência poderá ser usada para configurar anúncios por meio da API de Marketing.

No criativo do anúncio, a identificação da sequência pode ser definida da seguinte forma:

```
{
  "name": "creative",
  "object_story_spec": {...},
  "asset_feed_spec": {
    "additional_data": {
      "partner_app_welcome_message_flow_id": "<SEQUENCE_ID_RETURNED_FROM_POST_REQUEST>"
    }
  }
}
```

Para saber mais sobre anúncios de mensagens, consulte [Anúncios de mensagens](/docs/marketing-api/ad-creative/messaging-ads) na documentação da API de Marketing.

## Visão detalhada da experiência do Gerenciador de Anúncios

1\. Na seção **Modelo de mensagem** do criativo do anúncio, selecione **App do parceiro**.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561087025_1339318031260181_8367304189521626982_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=xxRIKp-fj-0Q7kNvwGApAPJ&_nc_oc=AdkwA5Fr7yvEuJEz9Joyo8ZQrHVV0zgsVBU_FPbqH6y6UNahxyAQ2yRAho7OCRCU4ro&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=dn8pE2uZVPa_VlxJd9f5Bg&oh=00_Afl8Ooivz-pqlmw1hTDwMjjVRdPlNca2pUnSqVGOGOM_lw&oe=69613CDB)

2\. Em **App do parceiro**, clique no menu suspenso e selecione o app de parceiro de mensagens apropriado.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560623753_1339318387926812_2606718298067002828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=uhYqAu39ta0Q7kNvwE7kLqU&_nc_oc=Adlrp_ri66NrLjv3uY2G5Wl-aUMx1pSQLwmYz5nb3fIwZomh28YSBbTi9XqtR926pz8&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=dn8pE2uZVPa_VlxJd9f5Bg&oh=00_AfkH27vsoqDlJY8F8CQ8w4NgNNLnfXvidHw56wfZch_Alw&oe=696127BC)

3\. Em **Sequência de mensagens**, selecione a sequência de mensagens de boas-vindas que você enviou por meio da API.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/561309659_1339318247926826_482558811705806996_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=LJLqDD18vJgQ7kNvwHjjQa4&_nc_oc=Adm2k66S6UcIOrfxRFN1F0NZqod_Z1rE9niJHqF6nobG3UgGccWS-J1vQTQgEBx1wWw&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=dn8pE2uZVPa_VlxJd9f5Bg&oh=00_AfnSZ-o17XR5w244UKeb1OX8ZMATkCD9FMahxLm72AXeXw&oe=69613DBC)

4\. Veja uma prévia da sequência de mensagens e clique no botão **Salvar**.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561695479_1339317887926862_4327881879631440625_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=8mgbAOLUVPMQ7kNvwE6kB_3&_nc_oc=AdmRFVhOcd4AB6PDlur7vFIV80mrun5CTmYxahIIwdgSWVZtEvBVcrKK_kNEmk658ks&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=dn8pE2uZVPa_VlxJd9f5Bg&oh=00_Afmm2VWSE28MQGWTToOpFXCxrGeYyfRSXVw7kUSdCGjSEw&oe=6961228A)

## Códigos de erro

Código

Descrição

Soluções possíveis

`4027001`

Dados inseridos inválidos

Alguns ou todos os dados inseridos não estão no formato exigido.

Verifique se todos os campos e parâmetros transmitidos na solicitação são do tipo e formato corretos e se todos os parâmetros obrigatórios estão presentes.

`4027005`

Não foi possível criar uma sequência de mensagens de boas-vindas

Ocorreu um erro ao tentar criar uma nova sequência de mensagens de boas-vindas.

Verifique se o token de acesso tem todas as permissões necessárias para a conta do WhatsApp Business.

`4027006`

Não foi possível atualizar uma sequência de mensagens de boas-vindas

Não foi possível atualizar a sequência de mensagens de boas-vindas.

Verifique se todos os campos e a identificação da sequência estão corretos. Verifique se o token de acesso tem as permissões necessárias para a conta do WhatsApp Business.

`4027007`

API indisponível

A API que está sendo acessada ainda não está disponível para uso.

Aguarde um ou dois dias até que a API fique disponível e tente novamente.

`4027010`

Parâmetro ausente

Um ou mais parâmetros necessários estão ausentes.

Verifique toda a documentação e confira se os parâmetros necessários estão presentes.

`4027012`

Sequência usada em um anúncio

A sequência de mensagens de boas-vindas está vinculada a um anúncio ativo e não pode ser atualizado ou excluída.

Desconecte a sequência do anúncio e tente novamente.

`4027017`

Não foi possível carregar a sequência

Não foi possível carregar a sequência que está sendo atualizada ou excluída.

A sequência de mensagens de boas-vindas não existe ou você não tem permissão para acessá-la. Verifique o token de acesso e confirme que você tem as permissões necessárias.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)