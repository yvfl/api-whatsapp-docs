<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override -->
<!-- Scraped: 2025-12-20T17:35:14.140Z -->

# Substituições de webhook

Updated: 7 de nov de 2025

Webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages) são enviados ao URL de retorno de chamada definido no app, mas é possível designar um URL de retorno de chamada alternativo para a conta do WhatsApp Business (WABA) ou o número de telefone comercial.

Quando um webhook de mensagens é disparado, primeiro verificamos se o seu app definiu um URL de retorno de chamada alternativo para o número de telefone comercial associado à mensagem. Se tiver definido, enviaremos o webhook ao URL de retorno de chamada alternativo. Se não houver um número de telefone alternativo, verificaremos se a WABA associada ao número tem um URL de retorno de chamada alternativo; se tiver, enviaremos para lá. Se também não houver uma WABA alternativa, faremos o fallback para o URL de retorno de chamada do app.

## Requisitos

Antes de configurar um URL de retorno de chamada alternativa, verifique se o seu app está [inscrito nos webhooks da WABA](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#subscribe-to-a-whatsapp-business-account) e verifique se o seu ponto de extremidade de retorno de chamada alternativa pode receber e processar webhooks de mensagens corretamente.

## Definir retorno de chamada alternativa da WABA

Use o ponto de extremidade [**POST /<WABA\_ID>/subscribed\_apps**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) para definir um URL de retorno de chamada alternativa em uma WABA.

### Sintaxe da solicitação

```
POST /<WABA_ID>/subscribed_apps
```

### Corpo do post

```
{
  "override_callback_uri":"<WABA_ALT_CALLBACK_URL>",
  "verify_token":"<WABA_ALT_CALLBACK_URL_TOKEN>"
}
```

### Parâmetros do corpo

Espaço reservado

Descrição

Valor de exemplo

`<WABA_ALT_CALLBACK_URL>`

**Obrigatório.**

URL de retorno de chamada alternativa para a qual os webhooks de mensagens devem ser enviados.

Máximo de 200 caracteres.

`https://my-waba-alternate-callback.com/webhook`

`<WABA_ALT_CALLBACK_URL_TOKEN>`

**Obrigatório.**

[Token de verificação](/docs/graph-api/webhooks/getting-started#verification-requests) do URL de retorno de chamada alternativa.

Sem máximo.

`myvoiceismypassport?`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

### Exemplo de solicitação

```
curl -X POST \
'https://graph.facebook.com/v24.0/102290129340398/subscribed_apps' \
-H 'Authorization: Bearer EAAJi...' \
-H 'Content-Type: application/json' \
-d '
{
  "override_callback_uri":"https://my-waba-alternate-callback.com/webhook",
  "verify_token":"myvoiceismypassport?"
}'
```

### Exemplo de resposta

```
{  "success": true}
```

## Obter retorno de chamada alternativa da WABA

Use o ponto de extremidade [**GET /<WABA\_ID>/subscribed\_apps**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#Reading) para obter uma lista de todos os apps inscritos em webhooks na WABA. A resposta deve incluir a propriedade e o valor `override_callback_uri`.

### Exemplo de resposta

```
{  "data" : [    {      "whatsapp_business_api_data" : {        "id" : "670843887433847",        "link" : "https://www.facebook.com/games/?app_id=67084...",        "name" : "Lucky Shrub"      },      "override_callback_uri" : "https://my-waba-alternate-callback.com/webhook"    }  ]}
```

## Excluir retorno de chamada alternativa da WABA

Use o ponto de extremidade [**POST /<WABA\_ID>/subscribed\_apps**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) para inscrever seu app para webhooks na WABA, [como você faria normalmente](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#subscribe) (ou seja, sem quaisquer parâmetros de publicação no corpo). Essa ação removerá o URL do ponto de extremidade alternativo da WABA, e os webhooks de mensagens da WABA voltarão a ser enviados para o URL de retorno de chamada definida no Painel de Apps.

## Definir retorno de chamada alternativa de número de telefone

Use o ponto de extremidade [**POST /<BUSINESS\_PHONE\_NUMBER\_ID>**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Creating) para definir um URL de retorno de chamada alternativa no número de telefone comercial.

### Sintaxe da solicitação

```
POST /<BUSINESS_PHONE_NUMBER_ID>
```

### Corpo do post

```
{
  "webhook_configuration": {
    "override_callback_uri": "<PHONE_ALT_CALLBACK_URL>",
    "verify_token": "<PHONE_ALT_CALLBACK_URL_TOKEN>"
  }
}
```

### Parâmetros do corpo

Espaço reservado

Descrição

Valor de exemplo

`<PHONE_ALT_CALLBACK_URL>`

**Obrigatório.**

URL de retorno de chamada alternativa para a qual os webhooks de mensagens devem ser enviados.

Máximo de 200 caracteres.

`https://my-phone-alternate-callback.com/webhook`

`<PHONE_ALT_CALLBACK_URL_TOKEN>`

**Obrigatório.**

[Token de verificação](/docs/graph-api/webhooks/getting-started#verification-requests) do URL de retorno de chamada alternativa.

Sem máximo.

`myvoiceismypassport?`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "webhook_configuration": {
    "override_callback_uri": "https://my-phone-alternate-callback.com/webhook",
    "verify_token": "myvoiceismypassport?"
  }
}'
```

### Exemplo de resposta

```
{  "success": true}
```

## Obter retorno de chamada alternativa de número de telefone

Use o ponto de extremidade [**GET /<BUSINESS\_PHONE\_NUMBER\_ID>**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) e solicite o campo `webhook_configuration` para verificar se o número de telefone comercial tem um URL de retorno de chamada alternativa.

### Sintaxe da solicitação

```
GET /<BUSINESS_PHONE_NUMBER_ID>
  ?fields=webhook_configuration
```

### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "webhook_configuration": {
    "phone_number": "<PHONE_ALT_CALLBACK_URL>",
    "whatsapp_business_account": "<WABA_ALT_CALLBACK_URL>",
    "application": "<APP_CALLBACK_URL>"
  },
  "id": "106540352242922"
}
```

Observe que `whatsapp_business_account` só será incluído se a WABA associada ao número de telefone comercial também tiver um URL de retorno de chamada alternativa definida.

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v17.0/106540352242922?fields=webhook_configuration' \-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "webhook_configuration": {    "phone_number": "https://my-phone-alternate-callback.com/webhook",    "whatsapp_business_account": "https://my-waba-alternate-callback.com/webhook",    "application": "https://my-production-callback.com/webhook"  },  "id": "106540352242922"}
```

## Excluir retorno de chamada alternativa de número de telefone

Para excluir o URL de retorno de chamada alternativa de um número de telefone comercial, use o ponto de extremidade [**POST /<BUSINESS\_PHONE\_NUMBER\_ID>**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Creating) com o conjunto de propriedades `override_callback_uri` para uma string vazia:

```
{  "webhook_configuration": {    "override_callback_uri": "",  }}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)