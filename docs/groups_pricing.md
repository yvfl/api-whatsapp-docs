<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/pricing -->
<!-- Scraped: 2025-12-20T17:43:07.824Z -->

# Preços da API de Grupos

Updated: 22 de out de 2025

## Preços por mensagem na API de Grupos

A API de Grupos usa o [modelo de preços por mensagem](/documentation/business-messaging/whatsapp/pricing#per-message-pricing) da API de Nuvem para determinar se uma mensagem específica é faturável. No entanto, **você receberá uma cobrança sempre que uma mensagem faturável for entregue a alguém do grupo.**

Por exemplo, se você enviar uma mensagem de modelo de marketing (faturável) para um grupo com cinco usuários do WhatsApp e ela for entregue a todos os cinco, você receberá uma cobrança pelas cinco mensagens entregues conforme a tarifa de mensagens de marketing vigente para o código de chamada do país de cada destinatário.

Se a mensagem fosse entregue apenas para quatro dos cinco usuários, você receberia uma cobrança somente pelas quatro mensagens entregues.

## Como funcionam as janelas de atendimento ao cliente com a API de Grupos

As janelas de atendimento ao cliente funcionam de forma diferente ao usar a API de Grupos.

Quando um usuário do WhatsApp no grupo envia uma mensagem para você, é aberta uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) entre você e todo o grupo (ou é atualizada, se já existir uma). Isso permite enviar mensagens de modelo de utilidade e de marketing ou mensagens em formato livre gratuitamente.

Esse processo é diferente do que acontece nas conversas individuais, em que uma janela de [atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) é aberta (ou é atualizada, se já existir uma) quando um usuário do WhatsApp envia uma mensagem para você.

Todo o restante sobre as [janelas de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) permanece igual.

## Informações de preços no webhook de status da mensagem

As informações de preços para mensagens enviadas usando a API de Grupos estão incluídas em [webhooks de status de mensagens](/documentation/business-messaging/whatsapp/groups/webhooks#pricing-information).

### Como são processados os webhooks de status de mensagens `read` e `delivered`

Para que o status de uma mensagem seja considerado `read`, ele deve ter sido pelo menos `delivered`.

Em algumas situações, como quando um usuário está presente na conversa e uma mensagem é recebida, ela será marcada como `delivered` e `read` quase simultaneamente. Nesse e em outros casos semelhantes, o webhook `delivered` não será enviado de volta. Isso acontece porque, quando uma mensagem é lida, fica implícito que ela também foi entregue.

### Como os dados de preços são exibidos no webhook de status da mensagem

Nem todos os webhooks de status da mensagem incluem informações de preço.

Com a implementação dos [Preços por mensagem](/documentation/business-messaging/whatsapp/pricing#per-message-pricing), os dados de preço podem estar presentes em webhooks de status `sent`, `delivered` ou `read`. Caso uma mensagem seja **cobrada**, pelo menos um webhook (`delivered` ou `read`) conterá as informações de preços.

### Webhook de status de mensagem enviada

```
// All versions

"pricing": {
  "billable": "<IS_BILLABLE>",
  "pricing_model": "<PRICING_MODEL>",  // new value, see table below
  "type": "<PRICING_TYPE>",            // new property, see table below
  "category": "<CONVERSATION_CATEGORY>"
}
```

### Webhook de status de mensagem entregue/lida

```
// Version 24.0 and higher

"pricing": {
  "billable": "<IS_BILLABLE?>",
  "pricing_model": "<PRICING_MODEL>",  // new value, see table below
  "type": "<PRICING_TYPE>",            // new property, see table below
  "category": "<CONVERSATION_CATEGORY>"
}
// Version 23.0 and lower
"conversation": {
  "id": "<CONVERSATION_ID>",           // new behavior, see table below
  "expiration_timestamp": "<CONVERSATION_EXPIRATION_TIMESTAMP>",
  "origin": {
    "type": "<CONVERSATION_CATEGORY>"
  }
},

"pricing": {
  "billable": "<IS_BILLABLE?>",
  "pricing_model": "PMP",              // Value is now "PMP" instead of "CBP"
  "type": "<PRICING_TYPE>",            // new property, see table below
  "category": "<PRICING_CATEGORY>"
}
```

### Parâmetros

Espaço reservado

Descrição

`<CONVERSATION_ID>`

Versão 24.0 e posteriores:

-   O objeto `conversation` será totalmente omitido

Versão 23.0 e anteriores:

-   O valor será definido como um ID única por mensagem, em vez de por conversa.

`<CONVERSATION_CATEGORY>`

Sem alterações.

`<CONVERSATION_EXPIRATION_TIMESTAMP>`

Sem alterações.

`<IS_BILLABLE?>`

Sem alterações.

No entanto, a propriedade `billable` será descontinuada em um futuro [lançamento com controle de versão](/docs/graph-api/guides/versioning#calling_older_versions). Por isso, recomendamos que você comece a usar `pricing.type` e `pricing.category` juntos para determinar se uma mensagem é faturável e, em caso afirmativo, definir a [tarifa de cobrança](#identifying-billable-messages).

`<PRICING_TYPE>`

Nova propriedade. Os valores podem ser os seguintes:

-   `regular`: indica que a mensagem é faturável.-   `free_group_customer_service`: indica que não houve cobrança porque se tratava de uma mensagem de modelo de utilidade ou de uma mensagem sem modelo enviada durante a [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows).

`<PRICING_CATEGORY>`

Os valores não serão alterados, mas agora podem ser interpretados da seguinte forma:

-   `group_marketing`: indica uma mensagem de modelo de marketing.-   `group_utility`: indica uma mensagem de modelo de utilidade.-   `group_service`: indica uma mensagem que não pertence a um modelo.

### Como identificar mensagens faturáveis

Para as mensagens faturáveis, o campo `pricing.type` é definido como regular. O valor `pricing.category` indica a taxa (`group_marketing` ou `group_utility`).

### Como identificar mensagens gratuitas

As mensagens gratuitas têm `pricing.type` definido como `free_group_customer_service`. O valor `pricing.category` indica o motivo pelo qual o campo estava livre:

-   `group_utility` – A mensagem foi enviada dentro da janela aberta de atendimento ao cliente em grupo.-   `group_service` – Todas as mensagens que não são de modelos são gratuitas.

## Análise de mensagens para a API de Grupos

O campo `analytics` fornece o número e o tipo de mensagens enviadas e entregues por números de telefone associados a uma WABA específica. Para saber mais sobre métricas de conversa, consulte Análise de conversas.

É possível usar o seguinte ponto de extremidade para recuperar análises de mensagens enviadas por meio da API de Grupos:

```
/<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=analytics.<FILTER_PARAMETER>.<FILTER_PARAMETER>...
```

### Parâmetros de filtro para análise de mensagens

Para ver uma lista completa dos parâmetros de filtro de análise de mensagens, consulte a [Referência de análise de mensagens](/documentation/business-messaging/whatsapp/analytics#conversation-analytics).

### Alterações nos parâmetros de filtro da API de Grupos

  

Nome

Descrição

`product_types`

tipo: matriz

_Opcional._

São os tipos de mensagens referentes à análise que você quer recuperar (mensagens de notificação e/ou de suporte ao cliente).

Forneça uma matriz e inclua:

-   `101` para mensagens de notificação de grupo-   `102` para mensagens de suporte ao cliente em grupo.-   `103` para mensagens de grupo recebidas

Se os valores mencionados não forem fornecidos, a chamada de API retornará análises para todas as mensagens.

O tipo de produto de entrada não pode ser consultado com outros tipos de produtos. Caso contrário, você verá um erro parecido com este:

```
{
 "error": {
   "message": "Invalid parameter",
   "type": "OAuthException",
   "code": 100,
   "error_subcode": 2388077,
   "is_transient": false,
   "error_user_title": "Insight Invalid Product Type Combination",
   "error_user_msg": "Unable to query this combination of product types. Please query individually and try again.",
 }
}
```

### Valor da resposta

As respostas bem-sucedidas à API de análise ao consultar os dados de mensagem da API de Grupos retornarão um objeto semelhante ao seguinte:

**Observação: o filtro de código do país não é compatível com mensagens enviadas em grupo.**

```
With Country code filter
{
  "analytics": {
    "phone_numbers": [
      "16505550111",
      "16505550112",
      "16505550113"
    ],
    "country_codes": [
      "US",
      "BR"
    ],
    "granularity": "DAY",
    "data_points": [
      {
        "start": 1543543200,
        "end": 1543629600,
        "sent": 196093,
        "delivered": 179715,
        "groups_delivered": 4
      },
      {
        "start": 1543629600,
        "end": 1543716000,
        "sent": 147649,
        "delivered": 139032
      }
      # more data points
    ]
  },
  "id": "102290129340398"
}

Without Country code filter
{
  "analytics": {
    "phone_numbers": [
      "16505550111",
      "16505550112",
      "16505550113"
    ],
    "granularity": "DAY",
    "data_points": [
      {
        "start": 1543543200,
        "end": 1543629600,
        "sent": 196093,
        "delivered": 179715,
        "groups_sent": 2,
        "groups_delivered": 4
      },
      {
        "start": 1543629600,
        "end": 1543716000,
        "sent": 147649,
        "delivered": 139032
      }
      # more data points
    ]
  },
  "id": "102290129340398"
}
```

## Análise de preços para a API de Grupos

Com o campo `pricing_analytics`, é possível consultar detalhamentos de preços para mensagens entregues em um intervalo de datas específico.

```
GET /<WABA_ID>
?fields=pricing_analytics
.start(<START>)
.end(<END>)
.granularity(<GRANULARITY>)
.phone_numbers(<PHONE_NUMBERS>)
.country_codes(<COUNTRY_CODES>)
.metric_types(<METRIC_TYPES>)
.pricing_types(<PRICING_TYPES>)
.pricing_categories(<PRICING_CATEGORIES>)
.dimensions(<DIMENSIONS>)
```

### Parâmetros de filtro para análise de preços

Para ver uma lista completa dos parâmetros de filtro de análise de mensagens, consulte a [Referência de análise de mensagens](/documentation/business-messaging/whatsapp/analytics#pricing-analytics).

### Alterações nos parâmetros de filtro da API de Grupos

Nome

Descrição

`<PRICING_CATEGORIES>`

_Matriz de strings_

_Opcional._

É a matriz de categorias de preços. Se você enviar uma matriz vazia, retornaremos resultados para todas as categorias de preços.

Os valores podem ser os seguintes:

-   `GROUP_MARKETING`: mensagens de grupo cobradas por taxa de marketing.-   `GROUP_SERVICE`: mensagens de grupo que não foram cobradas. Inclui todas as mensagens sem modelo e mensagens de utilidade enviadas na janela de atendimento ao cliente.-   `GROUP_UTILITY`: mensagens de grupo cobradas por taxa de utilidade.

`<PRICING_TYPES>`

_Matriz de strings_

_Opcional._

É a matriz de tipos de preços. Se você enviar uma matriz vazia, retornaremos resultados para todos os tipos de preços.

Os valores podem ser os seguintes:

-   `FREE_GROUP_CUSTOMER_SERVICE`: mensagens gratuitas de grupo. Inclui mensagens sem modelo e mensagens de utilidade enviadas na janela de atendimento ao cliente do grupo.-   `REGULAR`: mensagens faturáveis. Inclui todas as mensagens de modelo de autenticação e marketing e mensagens de modelo de utilidade enviadas fora da janela de atendimento ao cliente.

## Tabelas de tarifas

As mensagens de utilidade de grupo não são qualificadas para níveis de volume.

As tarifas de mensagens para a API de Grupos são as mesmas que as tarifas de preços por mensagem para mensagens individuais.

[Ver tabelas de tarifas de preços por mensagem](/documentation/business-messaging/whatsapp/pricing#rate-cards-and-volume-tiers)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)