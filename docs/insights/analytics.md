<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics -->
<!-- Scraped: 2026-03-10T21:36:00.296Z -->

# Análise

Updated: 12 de fev de 2026

A partir de 1º de dezembro de 2025, a janela máxima de retrospectiva para análises de mensagens, conversas e preços será alterada de dez anos para um ano. A janela de retrospectiva para análises de modelos e grupos de modelos não será afetada e continuará sendo de 90 dias.

Este documento descreve como consultar análises de mensagens, conversas, modelos e grupos. Isso inclui o número de mensagens enviadas de um número de telefone comercial, o número de conversas e os respectivos custos para uma conta do WhatsApp Business (WABA) ou o número de vezes que determinado modelo foi lido.

Somente métricas de números de telefone comerciais e modelos associados à sua WABA no momento da solicitação serão incluídas nas respostas.

## Consultar dados

Use o ponto de extremidade [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#Reading) para consultar análises.

### Sintaxe da solicitação

```
curl -g 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=<FIELD>.<FILTERS>' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<FIELD>`

**Obrigatório.**

Métrica. O valor pode ser um destes:

-   [`analytics`](#messaging-analytics)-   [`conversation_analytics`](#conversation-analytics)-   [`pricing_analytics`](#pricing-analytics)-   [`template_analytics`](#template-analytics)-   [`template_group_analytics`](#template-group-analytics)-   [`call_analytics`](#call-analytics)-   [`group_analytics`](#group-analytics)

`analytics`

`<FILTERS>`

**Obrigatório.**

Parâmetro de filtragem de métricas. Inclua parâmetros adicionais de filtragem usando pontos.

Consulte possíveis valores nestas seções:

-   [Parâmetros de análise de mensagens](#messaging-analytics-parameters)-   [Parâmetros de análise de conversas](#conversation-analytics-parameters)-   [Parâmetros de análise de modelos](#template-analytics-parameters)-   [Parâmetros de análise de grupo de modelos](#template-group-analytics-parameters)-   [Parâmetros de análise de ligações](#call-analytics-parameters)-   [Parâmetros de análise de grupos](#group-analytics-parameters)

`.start(1543543200).end(1544148000).granularity(DAY)`

## Análise de mensagens

O campo `analytics` fornece o número e o tipo de mensagens enviadas e entregues por números de telefone associados a uma WABA específica. Para saber mais sobre métricas de conversa, consulte [Análise de conversas](#conversation-analytics). Quando você chamar `/<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=analytics.{filtering-parameters}`, será possível anexar os parâmetros a seguir.

### Parâmetros de análise de mensagens

Nome

Descrição

`start`

Tipo: registro de data e hora UNIX

**Obrigatório.**

A data de início do intervalo para o qual você está recuperando análises.

`end`

Tipo: registro de data e hora UNIX

**Obrigatório.**

É a data de término do intervalo para o qual você está recuperando análises.

`granularity`

Tipo: string

**Obrigatório.**

É o detalhamento desejado para a análise. Opções compatíveis:

-   `HALF_HOUR`-   `DAY`-   `MONTH`

`phone_numbers`

Tipo: matriz

**Opcional.**

É a matriz de números de telefone referentes à análise que você quer recuperar. Caso não seja fornecida, todos os números de telefone adicionados à sua WABA serão incluídos.

`product_types`

Tipo: matriz

**Opcional.**

São os tipos de mensagens (mensagens de notificação e/ou de suporte ao cliente) para os quais você quer recuperar notificações. Caso a matriz não seja fornecida, retornaremos análises para todas as mensagens.

Valores compatíveis:

-   `0` – para mensagens de modelo enviadas a usuários do WhatsApp-   `2` – para mensagens que não são de modelo enviadas a usuários do WhatsApp-   `100` – para mensagens recebidas enviadas por usuários do WhatsApp para você

`country_codes`

Tipo: matriz

**Opcional.**

São os países referentes à análise que você quer recuperar. Forneça uma matriz com códigos de duas letras para os países a serem incluídos. Caso a matriz não seja fornecida, retornaremos análises para todos os países com os quais você se comunicou.

### Exemplo

**Cenário**: você precisa do número de mensagens enviadas e entregues por todos os números de telefone associados à sua WABA.

**Solução sugerida:** use os seguintes parâmetros de filtragem: `start`, `end`, `granularity`.

```
curl -i -X GET "https://graph.facebook.com/v25.0/102290129340398
  ?fields=analytics
  .start(1543543200)
  .end(1544148000)
  .granularity(DAY)
  &access_token=BLI8lkj..."
```

Uma resposta bem-sucedida retornará um objeto `analytics` com os dados solicitados:

```
{  "analytics": {    "phone_numbers": [      "16505550111",      "16505550112",      "16505550113"    ],    "country_codes": [      "US",      "BR"    ],    "granularity": "DAY",    "data_points": [      {        "start": 1543543200,        "end": 1543629600,        "sent": 196093,        "delivered": 179715      },      {        "start": 1543629600,        "end": 1543716000,        "sent": 147649,        "delivered": 139032      },      {        "start": 1543716000,        "end": 1543802400,        "sent": 61988,        "delivered": 58830      },      {        "start": 1543802400,        "end": 1543888800,        "sent": 132465,        "delivered": 124392      }      # more data points    ]  },  "id": "102290129340398"}
```

## Análise de conversas

O campo `conversation_analytics` fornece [informações de custo e conversa](/documentation/business-messaging/whatsapp/pricing#conversations) para uma WABA específica. Quando você chamar `/<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=conversation_analytics.{filtering-parameters}`, será possível anexar os parâmetros a seguir.

### Parâmetros de análise de conversas

Nome

Descrição _(clique na seta da coluna à esquerda para ver as opções compatíveis)_

`start`

Tipo: registro de data e hora UNIX

**Obrigatório.**

A data de início do intervalo para o qual você está recuperando análises.

`end`

Tipo: registro de data e hora UNIX

**Obrigatório.**

É a data de término do intervalo para o qual você está recuperando análises.

`granularity`

Tipo: string

**Obrigatório.**

É o detalhamento desejado para a análise. Opções compatíveis:

-   `HALF_HOUR`-   `DAILY`-   `MONTHLY`

`phone_numbers`

Tipo: matriz

**Opcional.**

É a matriz de números de telefone referentes à análise que você quer recuperar. Caso não seja fornecida, todos os números de telefone adicionados à sua WABA serão incluídos.

`metric_types`

**Opcional.**

É a lista de métricas que você quer receber. Se você enviar uma lista vazia, retornaremos resultados para todos os tipos de métrica.

Opções compatíveis: {#supported}

-   `COST`: inclui cobranças aproximadas para esse período, na moeda da WABA.-   `CONVERSATION`: inclui a contagem de conversas para esse período.

**Exceção:**

**`COST` não será retornado para WABAs que compartilham a linha de crédito de um parceiro de solução. Caso sua WABA compartilhe a linha de crédito de um parceiro de solução, entre em contato com ele para entender as cobranças.** Saiba o que acontece se você consultar uma WABA que compartilha a linha de crédito de um parceiro de solução:

-   Se nenhum `metric_types` for especificado na solicitação, somente `CONVERSATION` será retornado.-   Se apenas `CONVERSATION` for especificado, somente `CONVERSATION` será retornado.-   Caso somente `COST` seja especificado, a seguinte exceção será retornada:
    -   Título: "Custo não disponível"-   Mensagem: "O custo não é mais exibido para empresas que cobram por meio de um parceiro (ou seja, BSP). Para entender as cobranças, entre em contato com seu parceiro."

Se você consultar um período que inclua 1º de julho de 2023 (por exemplo, 1º de maio a 1º de agosto de 2023), a resposta incluirá a exceção acima.

Isso não se aplica se a consulta for sobre o ponto de extremidade `conversation_analytics`.

`conversation_categories`

**Opcional.**

Lista de [categorias de conversa](/documentation/business-messaging/whatsapp/pricing#conversation-categories). Se você enviar uma lista vazia, retornaremos resultados para todas as categorias de conversa.

Opções compatíveis:

-   `AUTHENTICATION`-   `MARKETING`-   `SERVICE`-   `UTILITY`

`conversation_types`

**Opcional.**

É uma lista de tipos de conversa. Se você enviar uma lista vazia, retornaremos resultados para todos os tipos de conversa. Opções compatíveis:

-   `FREE_ENTRY`: conversas que têm origem em um [ponto de entrada gratuito](/documentation/business-messaging/whatsapp/pricing#free-entry-point-windows).-   `FREE_TIER`: conversas realizadas dentro do [período gratuito](/documentation/business-messaging/whatsapp/pricing#free-entry-point-windows) mensal.-   `REGULAR`: qualquer conversa que não tenha sido originada em um [ponto de entrada gratuito](/documentation/business-messaging/whatsapp/pricing#free-entry-point-windows) ou que ultrapasse a cota mensal do período gratuito.

`conversation_directions`

**Opcional.**

É uma lista de direções de conversa. Se você enviar uma lista vazia, retornaremos resultados para todas as direções de conversa. Opções compatíveis:

-   `BUSINESS_INITIATED`: conversas iniciadas pela empresa.-   `USER_INITIATED`: conversas iniciadas por um usuário final/cliente.-   `UNKNOWN`: o sistema não consegue determinar a direção.

`dimensions`

**Opcional.**

É a lista de detalhamentos que você quer aplicar às suas métricas. Se você enviar uma lista vazia, retornaremos os resultados sem detalhamentos. Opções compatíveis:

-   `CONVERSATION_CATEGORY`-   `CONVERSATION_DIRECTION`-   `CONVERSATION_TYPE`-   `COUNTRY`-   `PHONE`

Os dados de análise são aproximados e podem ser diferentes do que aparece nas faturas devido a pequenas variações no processamento.

### Exemplos

Ao definir um período, você pode consultar informações de conversas e custos associadas à sua WABA. É possível filtrar e detalhar os resultados. Consulte os exemplos de código abaixo.

#### Consultar dados mensais usando todos os detalhamentos

**Cenário**: em um determinado mês, você quer recuperar informações de conversa e custo de todos os números de telefone associados a uma WABA.

**Solução sugerida:** use os seguintes parâmetros de filtragem:

-   `start`: indica o início do período. Nesse caso, é o início do mês referente às métricas que você quer ver.-   `end`: indica o término do período. Nesse caso, é o início do mês referente às métricas que você quer ver.-   `granularity`: representa o detalhamento desejado para os pontos de dados. No exemplo abaixo, usamos `MONTHLY` para que cada ponto represente o valor de um mês de dados.-   `phone_numbers`: ao enviar uma matriz vazia, retornaremos informações para todos os números de telefone associados à WABA.-   `dimensions`: defina todos os detalhamentos disponíveis: `"CONVERSATION_CATEGORY"`, `"CONVERSATION_TYPE"`, `"COUNTRY"` e `"PHONE"`.

Nesse caso, não é preciso especificar `country_codes`, `metric_types`, `conversation_types` nem `conversation_categories`. Se você não enviar um valor para esses campos, retornaremos todas as opções disponíveis. Depois de configurar o URL, faça uma solicitação GET:

```
curl -i -X GET
"https://graph.facebook.com/v25.0/102290129340398
  ?fields=conversation_analytics
  .start(1685602800).end(1688194800)
  .granularity(MONTHLY)
  .phone_numbers([])
  .dimensions(["CONVERSATION_CATEGORY","CONVERSATION_TYPE","COUNTRY","PHONE"])
  &access_token=BLI8lkj..."
```

Uma resposta bem-sucedida retornará um objeto `conversation_analytics` com os dados solicitados. No exemplo a seguir, a WABA contém apenas um número de telefone.

```
{  "conversation_analytics": {    "data": [      {        "data_points": [          {            "start": 1685602800,            "end": 1688194800,            "conversation": 1558,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "REGULAR",            "conversation_direction": "UNKNOWN",            "conversation_category": "AUTHENTICATION",            "cost": 15.58          },          {            "start": 1685602800,            "end": 1688194800,            "conversation": 2636,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "REGULAR",            "conversation_category": "MARKETING",            "cost": 26.36          },          {            "start": 1685602800,            "end": 1688194800,            "conversation": 2238,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "REGULAR",            "conversation_category": "SERVICE",            "cost": 22.38          },          {            "start": 1685602800,            "end": 1688194800,            "conversation": 1782,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "REGULAR",            "conversation_category": "UTILITY",            "cost": 17.82          },          {            "start": 1685602800,            "end": 1688194800,            "conversation": 1568,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "FREE_TIER",            "conversation_category": "AUTHENTICATION",            "cost": 15.68          },          {            "start": 1685602800,            "end": 1688194800,            "conversation": 2716,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "FREE_TIER",            "conversation_category": "MARKETING",            "cost": 27.16          },          {            "start": 1685602800,            "end": 1688194800,            "conversation": 2180,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "FREE_TIER",            "conversation_category": "SERVICE",            "cost": 21.8          },          {            "start": 1685602800,            "end": 1688194800,            "conversation": 1465,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "FREE_TIER",            "conversation_category": "UTILITY",            "cost": 14.65          },          {            "start": 1685602800,            "end": 1688194800,            "conversation": 1433,            "phone_number": "15550458206",            "country": "US",            "conversation_type": "FREE_ENTRY_POINT",            "conversation_category": "SERVICE",            "cost": 14.33          }        ]      }    ]  },  "id": "102290129340398",}
```

#### Como consultar dados de um número específico usando todos os detalhamentos e a granularidade de meia hora

**Cenário**: em um determinado período, você quer recuperar informações de conversas e custos de um número de telefone específico associado a uma WABA. Sua intenção é usar todos os detalhamentos possíveis nos resultados. É preciso que cada ponto represente meia hora de dados.

**Solução sugerida**: use os seguintes parâmetros de filtragem:

-   `start`: indica o início do período.-   `end`: indica o término do período.-   `granularity`: representa o detalhamento desejado para os pontos de dados. No exemplo abaixo, usamos `HALF_HOUR` para que cada ponto represente o valor de meia hora de dados.-   `phone_numbers`: o número de telefone sobre o qual você precisa de informações.-   `dimensions`: defina todos os detalhamentos disponíveis: `CONVERSATION_CATEGORY`, `CONVERSATION_TYPE`, `COUNTRY` e `PHONE`.

Nesse caso, não é preciso especificar `country_codes`, `metric_types`, `conversation_types` nem `conversation_categories`. Se você não enviar um valor para esses campos, retornaremos todas as opções disponíveis. Depois de configurar o URL, faça uma solicitação GET:

```
curl -i -X GET \
"https://graph.facebook.com/v25.0/102290129340398
  ?fields=conversation_analytics
  .start(1685602800)
  .end(1685689200)
  .granularity(HALF_HOUR)
  .phone_numbers(["19195552584"])
  .dimensions(["CONVERSATION_CATEGORY","CONVERSATION_TYPE","COUNTRY,PHONE"])
  &access_token=BLI8lkj..."
```

Uma resposta bem-sucedida retornará um objeto `conversation_analytics` com os dados solicitados:

```
{  "conversation_analytics": {    "data": [      {        "data_points": [          {            "start": 1685602800,            "end": 1685604600,            "conversation": 4,            "phone_number": "19195552584",            "country": "US",            "conversation_type": "REGULAR",            "conversation_direction": "UNKNOWN",            "conversation_category": "SERVICE",            "cost": 0.0232          },          {            "start": 1685602800,            "end": 1685604600,            "conversation": 4,            "phone_number": "19195552584",            "country": "US",            "conversation_type": "REGULAR",            "conversation_direction": "UNKNOWN",            "conversation_category": "MARKETING",            "cost": 0.0232          },         # ... more data points        ]      }    ]  },  "id": "102290129340398"}
```

#### Consultar dados mensais usando detalhamentos de tipo de conversa

**Cenário**: em um determinado período, você quer recuperar as informações de conversa e custo de todos os números de telefone associados a uma WABA. Sua intenção é detalhar os resultados por tipo de conversa.

**Solução sugerida**: use os seguintes parâmetros de filtragem:

-   `start`: indica o início do período.-   `end`: indica o término do período.-   `granularity`: representa o detalhamento desejado para os pontos de dados. No exemplo abaixo, usamos `MONTHLY` para que cada ponto represente o valor de meio mês de dados.-   `phone_numbers`: se você enviar uma matriz vazia, retornaremos informações sobre todos os números de telefone associados à WABA.-   `dimensions`: defina como `CONVERSATION_TYPE`.

Nesse caso, não é preciso especificar `country_codes`, `metric_types`, `conversation_types`, `conversation_directions` nem `conversation_categories`. Se você não enviar um valor para esses campos, retornaremos todas as opções disponíveis. Depois de configurar o URL, faça uma solicitação GET:

```
curl -i -X GET "https://graph.facebook.com/v25.0/102290129340398
      ?fields=conversation_analytics
      .start(1643702400).end(1646121600)
      .granularity(MONTHLY)
      .phone_numbers([])
      .dimensions([CONVERSATION_TYPE])
      &access_token=BLI8lkj..."
```

Uma resposta bem-sucedida retornará um objeto `conversation_analytics` com os dados solicitados:

```
{  "data": [    {      "data_points": [        {          "start": 1643702400,          "end": 1646121600,          "conversation": 8500,          "conversation_type": "REGULAR",          "cost": 88.1010        },        {          "start": 1643702400,          "end": 1646121600,          "conversation”: 1000,          "conversation_type": "FREE_TIER",          "cost": 0.0000        }        {          "start": 1643702400,          "end": 1646121600,          "conversation”: 250,          "conversation_type": "FREE_ENTRY_POINT",          "cost": 0.0000        }      ]    }  ]}
```

#### Consultar dados de meia hora detalhados por categoria de conversa

Solicitação:

```
curl -i -X GET "https://graph.facebook.com/v25.0/102290129340398
  ?fields=conversation_analytics
  .start(1685527200)
  .end(1685613600)
  .granularity(HALF_HOUR)
  .conversation_categories(["MARKETING","AUTHENTICATION"])
  .dimensions(["CONVERSATION_CATEGORY"])
  &access_token=BLI8lkj..."
```

Resposta:

```
{  "conversation_analytics": {    "data": [      {        "data_points": [          {            "start": 1685529000,            "end": 1685530800,            "conversation": 2,            "conversation_category": "AUTHENTICATION",            "cost": 0.0128          },          {            "start": 1685527200,            "end": 1685529000,            "conversation": 3,            "conversation_category": "MARKETING",            "cost": 0.0432          }        ]      }    ]  },  "id": "102290129340398"}
```

#### Consultar dados de meia hora detalhados por tipo e categoria de conversa

Solicitação:

```
curl -i -X GET \
 "https://graph.facebook.com/v25.0/102290129340398
  ?fields=conversation_analytics
  .start(1685527200)
  .end(1685613600)
  .granularity(HALF_HOUR)
  .conversation_categories(["MARKETING","AUTHENTICATION"])
  .dimensions(["CONVERSATION_CATEGORY","CONVERSATION_TYPE"])
  &access_token=BLI8lkj..."
```

Resposta:

```
{  "conversation_analytics": {    "data": [      {        "data_points": [          {            "start": 1685527200,            "end": 1685529000,            "conversation": 3,            "conversation_type": "REGULAR",            "conversation_category": "MARKETING",            "cost": 0.0432          },          {            "start": 1685529000,            "end": 1685530800,            "conversation": 2,            "conversation_type": "REGULAR",            "conversation_category": "AUTHENTICATION",            "cost": 0.0128          }        ]      }    ]  },  "id": "102290129340398"}
```

## Análise de preços

Com o campo `pricing_analytics`, é possível consultar detalhamentos de preços para mensagens entregues em um intervalo de datas específico.

### Sintaxe da solicitação

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>
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

### Parâmetros de análise de preços

Filtro

Descrição

Valor de exemplo

`<COUNTRY_CODES>`

_Matriz de strings_

**Opcional.**

São os países referentes à análise que você quer recuperar. Forneça uma matriz com códigos de duas letras para os países a serem incluídos. Caso a matriz não seja fornecida, retornaremos análises para todos os países com os quais você se comunicou.

`[ US, BR ]`

`<DIMENSIONS>`

_Matriz de strings_

**Opcional.**

É a lista de detalhamentos que você quer aplicar às suas métricas. Se você enviar uma lista vazia, retornaremos os resultados sem detalhamentos.

Os valores podem ser os seguintes:

-   `COUNTRY`-   `PHONE`-   `PRICING_CATEGORY`-   `PRICING_TYPE`-   `TIER`

`[ PRICING_CATEGORY, PRICING_TYPE, COUNTRY ]`

`<END>`

_Registro de data e hora UNIX_

**Obrigatório.**

É o registro de data e hora UNIX indicando a data de término do intervalo para o qual você está recuperando análises.

`1728581152`

`<GRANULARITY>`

_String_

**Obrigatório.**

É o detalhamento desejado para a análise. O valor pode ser um destes:

-   `DAILY`-   `HALF_HOUR`-   `MONTHLY`

`DAILY`

`<METRIC_TYPES>`

_Matriz de strings_

**Opcional.**

É a matriz de métricas que você quer receber. Se você enviar uma matriz vazia, retornaremos resultados para todos os tipos de métrica.

Os valores podem ser os seguintes:

-   `COST`: cobranças aproximadas por mensagens entregues nesse período, na moeda da WABA.-   `VOLUME`: inclui o número de mensagens entregues nesse período.

**Informamos que `COST` não será retornado para WABAs que compartilham a linha de crédito de um parceiro de soluções. Caso sua WABA compartilhe a linha de crédito de um parceiro de solução, entre em contato com ele para entender as cobranças.**

`[COST, VOLUME]`

`<PHONE_NUMBERS>`

_Matriz de strings_

**Opcional.**

É a matriz de números de telefone referentes à análise que você quer recuperar. Caso não seja fornecida, os dados de todos os números de telefone comerciais associados à sua WABA serão incluídos.

`[ 15550783881, 15550783882, 15550783883 ]`

`<PRICING_CATEGORIES>`

_Matriz de strings_

**Opcional.**

É a matriz de categorias de preços. Se você enviar uma matriz vazia, retornaremos resultados para todas as categorias de preços.

Os valores podem ser os seguintes:

-   `AUTHENTICATION`: mensagens cobradas por taxa de autenticação.-   `AUTHENTICATION_INTERNATIONAL`: mensagens cobradas por taxa internacional de autenticação.-   `MARKETING`: mensagens cobradas por taxa de marketing.-   `SERVICE`: mensagens que não foram cobradas. Inclui todas as mensagens sem modelo e mensagens de utilidade enviadas na janela de atendimento ao cliente.-   `UTILITY`: mensagens cobradas por taxa de utilidade.-   `REFERRAL_CONVERSION`: mensagens que foram recebidas por meio de um [ponto de entrada gratuito](/documentation/business-messaging/whatsapp/pricing#free-entry-point-windows)

`[ AUTHENTICATION, MARKETING, UTILITY ]`

`<PRICING_TYPES>`

_Matriz de strings_

**Opcional.**

É a matriz de tipos de preços. Se você enviar uma matriz vazia, retornaremos resultados para todos os tipos de preços.

Os valores podem ser os seguintes:

-   `FREE_CUSTOMER_SERVICE`: mensagens gratuitas. Inclui mensagens sem modelo e mensagens de utilidade enviadas na janela de atendimento ao cliente.-   `FREE_ENTRY_POINT`: todas as mensagens enviadas na janela de atendimento ao cliente com ponto de entrada gratuito.-   `REGULAR`: mensagens faturáveis. Inclui todas as mensagens de modelo de autenticação e marketing e mensagens de modelo de utilidade enviadas fora da janela de atendimento ao cliente. Exclui todas as mensagens enviadas na janela de atendimento ao cliente com ponto de entrada gratuito.

`[ REGULAR, FREE_CUSTOMER_SERVICE ]`

`<START>`

_Registro de data e hora UNIX_

**Obrigatório.**

É o registro de data e hora UNIX indicando a data de início do intervalo para o qual você está recuperando análises.

`1726014453`

`<WABA_ID>`

_String_

**Obrigatório.**

Identificação da conta do WhatsApp Business.

`102290129340398`

### Informações sobre o nível de volume

Inclua os parâmetros `TIER`, `PRICING_CATEGORY` e `COUNTRY` na matriz `dimensions` para receber informações sobre o nível de volume. Os pontos de dados que representam mensagens afetadas pelo preço por nível de volume terão a propriedade `tier` na resposta.

#### Exemplo de sintaxe da resposta com informações sobre nível

```
{
  "start": <START_TIMESTAMP>,
  "end": <END_TIMESTAMP>,
  "phone_number": "<BUSINESS_PHONE_NUMBER>",
  "country": "<COUNTRY_CODE>",
  "tier": "<LOWER>:<UPPER>",
  "pricing_type": "<PRICING_TYPE>",
  "pricing_category": "<PRICING_CATEGORY>",
  "volume": <VOLUME>,
  "cost": <COST>
}
```

O valor da propriedade `tier` representa uma concatenação dos limites inferior e superior para o nível específico do par mercado e categoria (`country` e `pricing_category`) que esse ponto de dados representa.

-   `<LOWER>`: é um número inteiro que representa o limite inferior do nível (inclusivo).-   `<UPPER>`: é um número inteiro que representa o limite superior do nível (inclusivo) ou a string `MAX`.

**Observações**

-   Para verificar o nível de volume atual, leia os valores `tier`, `country` e `pricing_category`. O número inteiro `tier` de `<UPPER>` (o número inteiro depois dos dois pontos) indica seu nível atual para `country` e `pricing_category` (por exemplo, Índia e utilidade, respectivamente).-   Se quiser saber quantas mensagens você precisa enviar para atingir o próximo nível em um `country` e uma `pricing_category`, subtraia o número inteiro de `volume` do número inteiro `<UPPER>` do valor do nível.-   Os níveis de volume estarão disponíveis somente para mensagens de modelo de autenticação e utilidade. Para mensagens de modelo de marketing (às quais os níveis de volume não serão aplicados), o nível será definido como `0:MAX`.-   A propriedade `tier` será omitida em pontos de dados que representam mensagens gratuitas, já que elas não contribuem para a contagem dos níveis.-   Os níveis de volume serão determinados exclusivamente pela Meta. Todos os dados de insights são aproximados devido a pequenas variações no processamento de dados. Não se deve depositar confiança excessiva nos dados de insights.

### Exemplo de pedido

```
curl 'https://graph.facebook.com/v25.0/161311403722088?fields=pricing_analytics.start(1748761200).end(1749687703).granularity(DAILY).dimensions(PRICING_CATEGORY,PRICING_TYPE,TIER,COUNTRY).country_codes(US,IN)' \
-H 'Authorization: Bearer EAAJB'
```

### Exemplo de resposta

```
{  "pricing_analytics": {    "data": [      {        "data_points": [          {            "start": 1749193200,            "end": 1749279600,            "country": "IN",            "pricing_type": "FREE_CUSTOMER_SERVICE",            "pricing_category": "SERVICE",            "volume": 2,            "cost": 0          },          {            "start": 1749106800,            "end": 1749193200,            "country": "IN",            "tier": "0:750000",            "pricing_type": "REGULAR",            "pricing_category": "AUTHENTICATION_INTERNATIONAL",            "volume": 2,            "cost": 4.6          },          {            "start": 1749106800,            "end": 1749193200,            "country": "IN",            "pricing_type": "FREE_CUSTOMER_SERVICE",            "pricing_category": "SERVICE",            "volume": 2,            "cost": 0          },          {            "start": 1748934000,            "end": 1749020400,            "country": "US",            "tier": "0:MAX",            "pricing_type": "REGULAR",            "pricing_category": "MARKETING",            "volume": 1,            "cost": 10          },          {            "start": 1748847600,            "end": 1748934000,            "country": "US",            "pricing_type": "FREE_CUSTOMER_SERVICE",            "pricing_category": "SERVICE",            "volume": 1,            "cost": 0          },          {            "start": 1748847600,            "end": 1748934000,            "country": "US",            "pricing_type": "FREE_ENTRY_POINT",            "pricing_category": "SERVICE",            "volume": 6,            "cost": 0          },          {            "start": 1748847600,            "end": 1748934000,            "country": "US",            "tier": "0:2",            "pricing_type": "REGULAR",            "pricing_category": "AUTHENTICATION",            "volume": 1,            "cost": 10          },          {            "start": 1748847600,            "end": 1748934000,            "country": "IN",            "tier": "0:750000",            "pricing_type": "REGULAR",            "pricing_category": "AUTHENTICATION_INTERNATIONAL",            "volume": 1,            "cost": 2.3          },          {            "start": 1748761200,            "end": 1748847600,            "country": "US",            "pricing_type": "FREE_CUSTOMER_SERVICE",            "pricing_category": "SERVICE",            "volume": 2,            "cost": 0          },          {            "start": 1748761200,            "end": 1748847600,            "country": "US",            "tier": "0:2",            "pricing_type": "REGULAR",            "pricing_category": "AUTHENTICATION",            "volume": 1,            "cost": 10          },          {            "start": 1748761200,            "end": 1748847600,            "country": "US",            "pricing_type": "FREE_CUSTOMER_SERVICE",            "pricing_category": "UTILITY",            "volume": 1,            "cost": 0          },          {            "start": 1748761200,            "end": 1748847600,            "country": "US",            "tier": "0:2",            "pricing_type": "REGULAR",            "pricing_category": "UTILITY",            "volume": 1,            "cost": 10          },          {            "start": 1748761200,            "end": 1748847600,            "country": "US",            "tier": "0:MAX",            "pricing_type": "REGULAR",            "pricing_category": "MARKETING",            "volume": 4,            "cost": 40          },          {            "start": 1748761200,            "end": 1748847600,            "country": "US",            "tier": "0:MAX",            "pricing_type": "REGULAR",            "pricing_category": "MARKETING_LITE",            "volume": 1,            "cost": 10          }        ]      }    ]  }}
```

## Análise de modelos

A análise de modelos descreve o número de vezes que um modelo foi enviado, entregue e lido, além da quantidade de cliques que os botões de [URL](/documentation/business-messaging/whatsapp/templates/components#url-buttons) ou de [resposta rápida](/documentation/business-messaging/whatsapp/templates/components#quick-reply-buttons) receberam no modelo. Além disso, as empresas [integradas à API de Mensagens de Marketing para o WhatsApp](/documentation/business-messaging/whatsapp/marketing-messages/overview) podem rastrear métricas de conversão fora do site.

Os dados são retornados com granularidade diária no fuso horário padrão UTC e no fuso horário da WABA, com uma janela de retrospectiva de até 90 dias. Para mostrar dados no fuso horário configurado da WABA, transmita o parâmetro use\_waba\_timezone com um valor true.

Exibir dados no fuso horário configurado da WABA transmitindo o parâmetro `use_waba_timezone` com um valor de `true`.

```
{ "data": [   {     "waba_timezone": "America/Los_Angeles",     "granularity": "DAILY",     "product_type": "cloud_api",     "data_points": [         ...     ]   }}
```

### Limitações

-   A análise de cliques no botão está disponível apenas para modelos categorizados como `MARKETING` ou `UTILITY`.-   Não há compatibilidade com WABAs pertencentes ou compartilhadas com contas empresariais da Meta na União Europeia, no Reino Unido ou no Japão, tampouco com WABAs que tenham um número de telefone comercial com código do país desses locais.-   As métricas de conversão fora do site estão disponíveis apenas para empresas integradas à API de Mensagem de Marketing para o WhatsApp.-   Os dados de eventos de leitura e clique em mensagens de modelo do WhatsApp estão disponíveis por até sete dias a partir da data de envio da mensagem. Depois desse período, o número de leituras/cliques correspondente será redefinido para zero e nenhuma outra atualização será registrada para essas mensagens.

### Como confirmar as análises de modelos

Antes de consultar as análises de modelos, é preciso confirmar esse tipo de análise na conta do WhatsApp Business. Isso pode ser feito por meio do Gerenciador do WhatsApp ou da API.

Ao confirmar o acesso via API, você instrui a Meta a adicionar insights à sua conta do WhatsApp Business. Esses insights incluem rastreamento de link para relatar os cliques no site. É possível desativar o rastreamento de links em cada modelo de mensagem. Você também instrui a Meta a coletar e anonimizar dados de conversas com clientes. A Meta anonimizará esses dados para melhorar os serviços que fornece a você e a outras empresas.

Na API, envie esta solicitação:

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>?is_enabled_for_insights=true
```

Após isso, começaremos a capturar as análises desse tipo na conta do WhatsApp Business. Depois da confirmação, não é possível desabilitar as análises de modelos.

Caso a solicitação seja bem-sucedida, a API responderá com a identificação da conta do WhatsApp Business. Por exemplo:

```
{  "id": 102290129340398}
```

### Parâmetros de análise de modelos

Nome

Descrição

Valor de exemplo

`start`

_Registro de data e hora UNIX ou string de data_

**Obrigatório.**

É a hora de início do intervalo para o qual você está recuperando análises. Pode ser representado como um número inteiro de registro de data e hora UNIX ou como uma string de data no formato AAAA-MM-DD. Como as análises de modelos são fornecidas com detalhamento diário no fuso horário UTC, os registros de data e hora de início em outros horários ou fusos serão ajustados para a 00:00 UTC do dia vigente.

Se o parâmetro `use_waba_timezone` tiver um valor "true", esse valor deverá ser uma string de data no formato AAAA-MM-DD.

`1543536000`

`end`

_Registro de data e hora UNIX ou string de data_

**Obrigatório.**

É a hora de término do intervalo para o qual você está recuperando análises. Pode ser representado como um número inteiro de registro de data e hora UNIX ou como uma string de data no formato AAAA-MM-DD. Como as análises de modelos são fornecidas com detalhamento diário no fuso horário UTC, os registros de data e hora de término em outros horários ou fusos serão ajustados para a 00:00 UTC do dia vigente.

Se o parâmetro `use_waba_timezone` tiver um valor "true", esse valor deverá ser uma string de data no formato AAAA-MM-DD.

`1543708800`

`granularity`

_Enumeração_

**Obrigatório.**

É o detalhamento desejado para a análise. O valor deve ser `DAILY`.

`DAILY`

`template_ids`

_Matriz de IDs_

**Obrigatório.**

É a matriz de IDs de modelos referentes à análise que você quer recuperar.

Máximo de 10.

`[1924084211297547,954638012257287,969725530748535]`

`metric_types`

_Matriz de enumerações_

**Opcional.**

Os tipos de métricas a serem recuperadas. Se a matriz for omitida ou estiver vazia, serão retornadas as análises de todos os tipos de métricas.

Valores possíveis:

-   `COST`-   `CLICKED`-   `DELIVERED`-   `READ`-   `SENT`-   `APP_ACTIVATIONS (MM API for WhatsApp only)`-   `APP_ADD_TO_CART (MM API for WhatsApp only)`-   `APP_CHECKOUTS_INITIATED (MM API for WhatsApp only)`-   `APP_PURCHASES (MM API for WhatsApp only)`-   `APP_PURCHASES_CONVERSION_VALUE (MM API for WhatsApp only)`-   `WEBSITE_ADD_TO_CART (MM API for WhatsApp only)`-   `WEBSITE_CHECKOUTS_INITIATED (MM API for WhatsApp only)`-   `WEBSITE_PURCHASES (MM API for WhatsApp only)`-   `WEBSITE_PURCHASES_CONVERSION_VALUE (MM API for WhatsApp only)`

[Acesse este link para saber mais sobre as métricas de custo e clique](#template-analytics-cost-and-click-metrics).

**Informamos que `COST` não será retornado para WABAs que compartilham a linha de crédito de um parceiro de soluções. Caso sua WABA compartilhe a linha de crédito de um parceiro de solução, entre em contato com ele para entender as cobranças.**

`[SENT,DELIVERED,READ]`

`product_type`

_Enumeração_

**Opcional.**

O tipo de produto das métricas a serem recuperadas. Se omitido, serão retornadas somente análises da API de Nuvem.

Valores possíveis:

-   `CLOUD_API`: para filtrar métricas de modelos enviados por meio da API de Nuvem-   `MARKETING_MESSAGES_API_FOR_WHATSAPP`: para filtrar métricas de modelos enviados por meio da API de Mensagens de Marketing para WhatsApp

`MARKETING_MESSAGES_API_FOR_WHATSAPP`

`<USE_WABA_TIMEZONE>`

_Booliano_

**Opcional.**

Indica se as métricas devem ser exibidas no fuso horário configurado da WABA. Se forem "false" ou omitidas, as métricas serão exibidas no formato UTC.

Se forem"true", os parâmetros de início e término deverão estar no formato AAAA-MM-DD.

`true`

### Exemplos

#### Como consultar todas as análises de modelos

**Cenário:** consulte todos os tipos de métricas de análise de modelos para um modelo de autenticação e um modelo de marketing com um botão de URL, considerando um período de um dia.

Exemplo de solicitação:

```
curl -g 'https://graph.facebook.com/v25.0/109259195336416/template_analytics?start=1718064000&end=1718122745&granularity=daily&metric_types=cost%2Cclicked%2Cdelivered%2Cread%2Csent&template_ids=[1421988012088524%2C2632273056924580]' \
-H 'Authorization: Bearer EAAJB...'
```

Exemplo de resposta:

```
{  "data": [    {      "granularity": "DAILY",      "product_type": "cloud_api", // Only available to businesses in the Marketing Messages API for WhatsApp alpha      "data_points": [        {          "template_id": "1421988012088524",          "start": 1718064000,          "end": 1718150400,          "sent": 1,          "delivered": 1,          "read": 1,          "cost": [            {              "type": "amount_spent",              "value": 0.01            },            {              "type": "cost_per_delivered",              "value": 0.01            }          ]        },        {          "template_id": "2632273056924580",          "start": 1718064000,          "end": 1718150400,          "sent": 1,          "delivered": 1,          "read": 1,          "clicked": [            {              "type": "quick_reply_button",              "button_content": "Contact Support",              "count": 108            },            {              "type": "unique_url_button",              "button_content": "Tell me more",              "count": 16            }          ],          "cost": [            {              "type": "amount_spent",              "value": 0.03            },            {              "type": "cost_per_delivered",              "value": 0.03            },            {              "type": "cost_per_url_button_click",              "value": 0.03            }          ]        }      ]    }  ],  "paging": {    "cursors": {      "before": "MAZDZD",      "after": "MjQZD"    }  }}
```

### Custo de análise de modelos e métricas de cliques

As **métricas de custo** são retornadas como uma matriz de objetos de custo, cada um com um tipo e valor. Os tipos podem ser:

-   `amount_spent`: o valor total gasto em conversas abertas no período entre `start` e `end` como resultado do envio do modelo. Consulte a seção [Preços baseados em conversas](/documentation/business-messaging/whatsapp/pricing#opening-conversations).-   `cost_per_delivered`: o valor `amount_spent` dividido pelo número de vezes que o modelo foi entregue no período entre `start` e `end`.-   `cost_per_url_button_click`: o valor `amount_spent` dividido pelo número de cliques no botão de URL do modelo no período entre `start` e `end`. Cliques no botão de resposta rápida não são incluídos. Objeto omitido se o modelo não tiver um botão de URL.

As **métricas de clique** são retornadas como uma matriz de objetos JSON, cada um com um tipo e valor. Os cliques são retornados apenas para botões de URL e de resposta rápida em modelos categorizados como `MARKETING` ou `UTILITY`.

Os tipos podem ser:

-   `url_button`: o número total de cliques no botão de URL.-   `unique_url_button`: cliques únicos acompanham o número de contas distintas do WhatsApp que clicaram em um botão. Essa métrica ajuda você a compreender quantos usuários individuais estão interagindo com seus CTAs, eliminando cliques duplicados do mesmo destinatário e proporcionando uma mensuração precisa do engajamento.

### Como desabilitar a análise de cliques no botão

Para desabilitar o rastreamento de cliques no botão, defina o campo `cta_url_link_tracking_opted_out` de um modelo específico como `true`. Depois que o recurso for desabilitado, a API não retornará mais a propriedade "clicked" na análise do modelo nem exibirá dados de engajamento/cliques no botão no Gerenciador do WhatsApp quando você estiver visualizando os insights do modelo.

#### Sintaxe da solicitação

```
POST /<TEMPLATE_ID>
  ?cta_url_link_tracking_opted_out=<OPT_OUT>
  &category=<TEMPLATE_CATEGORY>
```

#### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<WHATSAPP_TEMPLATE_ID>`

_ID do modelo_

**Obrigatório.**

ID do modelo.

`245435364965041`

`<OPT_OUT>`

_Booliano_

**Obrigatório.**

Indica se o rastreamento de cliques no botão do modelo foi desabilitado. Defina como `true` para desabilitar o rastreamento de cliques no botão ou como `false` para habilitá-lo.

Esse valor será definido como `false` após a criação do modelo.

`true`

`<TEMPLATE_CATEGORY>`

_String_

**Obrigatório.**

A categoria atual do modelo.

Se você definir a categoria do modelo como um valor diferente da opção atual, o status do modelo será definido como `PENDING`, indicando que ele precisa passar pelo processo de análise para ser aprovado.

`marketing`

#### Exemplo de pedido

```
curl -X POST 'https://graph.facebook.com/v25.0/245435364965041?cta_url_link_tracking_opted_out=true&category=marketing' \
-H 'Authorization: Bearer EAAJB...'
```

#### Exemplo de resposta

Se o processo for bem-sucedido, a API enviará a seguinte resposta:

```
{    "success": true}
```

## Análise de grupo de modelos

No campo `template_group_analytics`, é possível saber quantas vezes os modelos dentro de um [grupo de modelos](/documentation/business-messaging/whatsapp/templates/template-groups) foram enviados, entregues e lidos, além de quantas vezes os respectivos botões de [URL](/documentation/business-messaging/whatsapp/templates/components#url-buttons) ou de [resposta rápida](/documentation/business-messaging/whatsapp/templates/components#quick-reply-buttons) foram clicados.

Os dados são retornados com granularidade diária no fuso horário padrão UTC e no fuso horário da WABA, com uma janela de retrospectiva de até 90 dias. Para mostrar dados no fuso horário configurado da WABA, transmita o parâmetro use\_waba\_timezone com um valor true.

```
{ "data": [   {     "waba_timezone": "America/Los_Angeles",     "granularity": "DAILY",     "product_type": "cloud_api",     "data_points": [         ...     ]   }}
```

### Limitações

A análise de cliques no botão está disponível apenas para modelos categorizados como `marketing` ou `utility`. Não há compatibilidade com WABAs pertencentes ou compartilhadas com contas empresariais da Meta na União Europeia, no Reino Unido ou no Japão, tampouco com WABAs que tenham um número de telefone comercial com código do país desses locais.

### Como habilitar a análise de modelos

Antes de consultar as análises de grupo de modelos, é preciso habilitar esse tipo de análise na conta do WhatsApp Business. Isso pode ser feito por meio do Gerenciador do WhatsApp ou da API.

Ao confirmar o acesso via API, você instrui a Meta a adicionar insights à sua conta do WhatsApp Business. Esses insights incluem rastreamento de link para relatar os cliques no site. É possível desativar o rastreamento de links em cada modelo de mensagem. Você também instrui a Meta a coletar e anonimizar dados de conversas com clientes. A Meta anonimizará esses dados para melhorar os serviços que fornece a você e a outras empresas.

Para confirmar a ativação via API, envie a seguinte solicitação:

`POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>?is_enabled_for_insights=true`

Se o processo for bem-sucedido, a API responderá com a identificação da sua conta do WhatsApp Business. Além disso, começaremos a capturar as análises do grupo de modelos para essa conta.

Após a ativação, não será possível desabilitar as análises de modelos.

### Sintaxe da solicitação

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/template_group_analytics
  ?granularity=daily
  &start=<START_TIME>
  &end=<END_TIME>
  &metric_types=<METRIC_TYPES>
  &template_group_ids=[<TEMPLATE_GROUP_IDS>]
```

### Parâmetros de análise de grupo de modelos

Espaço reservado

Descrição

Valor de exemplo

`<WABA_ID>`_String_

**Obrigatório.**

Identificação da conta do WhatsApp Business.

`102290129340398`

`<START_TIME>`

_Registro de data e hora UNIX ou string de data_

**Obrigatório.**

É a hora de início do intervalo para o qual você está recuperando análises. Pode ser representado como um número inteiro de registro de data e hora UNIX ou como uma string de data no formato AAAA-MM-DD.

Como as análises de grupo de modelos são fornecidas com detalhamento diário no fuso horário UTC, os registros de data e hora de início em outros horários ou fusos serão ajustados para a 00:00 UTC do dia vigente.

Se o parâmetro `use_waba_timezone` tiver um valor "true", esse valor deverá ser uma string de data no formato AAAA-MM-DD.

`1738465116`

`<END_TIME>`

_Registro de data e hora UNIX ou string de data_

**Obrigatório.**

É a hora de término do intervalo para o qual você está recuperando análises. Pode ser representado como um número inteiro de registro de data e hora UNIX ou como uma string de data no formato AAAA-MM-DD.

Como as análises de grupo de modelos são fornecidas com detalhamento diário no fuso horário UTC, os registros de data e hora de término em outros horários ou fusos serão ajustados para a 00:00 UTC do dia vigente.

Se o parâmetro `use_waba_timezone param` tiver um valor "true", esse valor deverá ser uma string de data no formato AAAA-MM-DD.

`1739559516`

`<METRIC_TYPES>`

_Matriz de strings_

**Opcional.**

É a matriz de métricas que você quer receber. Se você enviar uma matriz vazia, a API retornará resultados para todos os tipos de métricas.

Os valores podem ser os seguintes:

-   `cost`-   `clicked`-   `delivered`-   `read`-   `sent`

`COST` não está disponível para clientes empresariais que recebem cobranças por meio de um parceiro de solução.

Consulte [Métricas de custo e clique](#template-group-cost-and-click-metrics) para saber mais sobre esses tipos de métricas.

```
[
  sent,
  delivered,
  read
]
```

`<TEMPLATE_GROUP_IDS>`

**Obrigatório.**

É a matriz de IDs de grupo de modelos para os quais você quer consultar métricas.

É compatível com até 10 IDs.

`102290129340398`

`<USE_WABA_TIMEZONE`\>\`

_Booliano_

**Opcional.**

Indica se as métricas devem ser exibidas no fuso horário configurado da WABA. Se forem "false" ou omitidas, as métricas serão exibidas no formato UTC.

Se forem"true", os parâmetros de início e término deverão estar no formato AAAA-MM-DD.

`true`

### Exemplo de pedido

```
curl -g 'https://graph.facebook.com/v25.0/102290129340398/template_group_analytics?granularity=daily&start=1738465116&end=1739559516&metric_types=sent,delivered,read&template_group_ids=[1044106240855852]' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

O exemplo abaixo foi truncado com uma elipse (`...`) para fins de concisão.

```
{  "data": [    {      "granularity": "DAILY",      "data_points": [        {          "template_group_id": "1044106240855852",          "start": 1739491200,          "end": 1739577600,          "sent": 1460,          "delivered": 1460,          "read": 1399        },        {          "template_group_id": "1044106240855852",          "start": 1739404800,          "end": 1739491200,          "sent": 673,          "delivered": 673,          "read": 645        },        ...      ]    }  ],  "paging": {    "cursors": {      "before": "MAZDZD",      "after": "MjQZD"    }  }}
```

### Custo de grupo de modelos e métricas de cliques

As **métricas de custo** são retornadas como uma matriz de objetos de custo, cada um com um tipo e valor. Os tipos podem ser:

-   `amount_spent`: o valor total gasto em conversas abertas no período entre `start` e `end` como resultado do envio do modelo. Consulte a seção [Preços baseados em conversas](/documentation/business-messaging/whatsapp/pricing#opening-conversations).-   `cost_per_delivered`: o valor `amount_spent` dividido pelo número de vezes que o modelo foi entregue no período entre `start` e `end`.-   `cost_per_url_button_click`: o valor `amount_spent` dividido pelo número de cliques no botão de URL do modelo no período entre `start` e `end`. Cliques no botão de resposta rápida não são incluídos. Objeto omitido se o modelo não tiver um botão de URL.

As **métricas de clique** são retornadas como uma matriz de objetos JSON, cada um com um tipo e valor. Os cliques são retornados apenas para botões de URL e de resposta rápida em modelos categorizados como `marketing` ou `utility`.

Os tipos podem ser:

-   `url_button`: o número total de cliques no botão de URL.-   `unique_url_button`: cliques únicos acompanham o número de contas distintas do WhatsApp que clicaram em um botão. Essa métrica ajuda você a compreender quantos usuários individuais estão interagindo com seus CTAs, eliminando cliques duplicados do mesmo destinatário e proporcionando uma mensuração precisa do engajamento.

## Análise das ligações

O campo `call_analytics` fornece o número e o tipo de ligações feitas e recebidas por números de telefone associados a uma WABA específica. Quando você chamar `/<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=call_analytics.{filtering-parameters}`, será possível anexar os parâmetros a seguir.

### Parâmetros de análise de ligações

Nome

Descrição

Valor de exemplo

`start`

Tipo: registro de data e hora UNIX

**Obrigatório.**

A data de início do intervalo para o qual você está recuperando análises.

`1728581152`

`end`

Tipo: registro de data e hora UNIX

**Obrigatório.**

É a data de término do intervalo para o qual você está recuperando análises.

`1728581152`

`granularity`

Tipo: string

**Obrigatório.**

É o detalhamento desejado para a análise. Opções compatíveis:

-   `HALF_HOUR`-   `DAILY`-   `MONTHLY`

`DAILY`

`phone_numbers`

Tipo: matriz

**Opcional.**

É a matriz de números de telefone referentes à análise que você quer recuperar. Caso não seja fornecida, todos os números de telefone adicionados à sua WABA serão incluídos.

`[15550783881,15550783882]`

`country_codes`

Tipo: matriz

**Opcional.**

São os países referentes à análise que você quer recuperar. Forneça uma matriz com códigos de duas letras para os países a serem incluídos. Caso a matriz não seja fornecida, retornaremos análises para todos os países com os quais você se comunicou.

`[US,BR]`

`directions`

_Matriz de enumerações_

**Opcional.**

É a direção da ligação referente à análise que você quer recuperar. Opções compatíveis:

-   `USER_INITIATED`-   `BUSINESS_INITIATED`

`USER_INITIATED`

`dimensions`

_Matriz de enumerações_

**Opcional.**

É a lista de detalhamentos que você quer aplicar às suas métricas. Se você enviar uma lista vazia, retornaremos os resultados sem detalhamentos. Opções compatíveis:

-   `phone`-   `direction`-   `country`

`direction`

`metric_types`

_Matriz de enumerações_

**Opcional.**

É a matriz de métricas que você quer receber. Se você enviar uma matriz vazia, a API retornará resultados para todos os tipos de métricas. Opções compatíveis:

-   `COUNT`-   `COST`-   `AVERAGE_DURATION`

`AVERAGE_DURATION`

### Exemplo

**Cenário**: você precisa do número de ligações iniciadas pelo usuário e recebidas por todos os números de telefone associados à sua WABA com granularidade por dia.

**Solução sugerida:** use estes parâmetros de filtragem: `start`, `end`, `granularity`, `directions`.

```
curl -i -X GET "https://graph.facebook.com/v25.0/102290129340398
  ?fields=call_analytics
  .start(1759302000)
  .end(1767168000)
  .granularity(DAILY)
  .directions(USER_INITIATED)
  &access_token=BLI8lkj..."
```

Uma resposta bem-sucedida retornará um objeto `call_analytics` com os dados solicitados:

```
{  "call_analytics": {    "granularity": "DAILY",    "directions": "USER_INITIATED",    "data_points": [      {          "start": 1765958400,          "end": 1766044800,          "cost": 0.47795,          "count": 35,          "average_duration": 106      },      {          "start": 1760943600,          "end": 1761030000,          "cost": 0,          "count": 20,          "average_duration": 103      },      {          "start": 1760857200,          "end": 1760943600,          "cost": 0,          "count": 24,          "average_duration": 103      },      # more data points    ]  },  "id": "102290129340398"}
```

## Análise de grupo

A API de Análise de Grupo permite obter o número de mensagens enviadas, entregues e lidas nos grupos do WhatsApp, assim como o número de participantes que entraram ou saíram.

Os dados são retornados com granularidade diária, com uma janela de histórico de até 90 dias.

### Sintaxe da solicitação

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/group_analytics
  ?granularity=daily
  &start=<START_TIME>
  &end=<END_TIME>
  &metric_types=[<METRIC_TYPES>]
  &group_ids=[<GROUP_IDS>]
```

### Parâmetros de análise de grupo

Espaço reservado

Descrição

Valor de exemplo

`<START_TIME>`

_Registro de data e hora UNIX_

**Obrigatório.**

É a hora de início do intervalo para o qual você está recuperando análises. Não pode ser maior que 90 dias a partir da data atual.

`1685548801`

`<END_TIME>`

_Registro de data e hora UNIX_

**Obrigatório.**

É a hora de término do intervalo para o qual você está recuperando análises.

`1685721600`

`<GROUP_IDS>`

_Matriz de strings_

**Obrigatório.**

É a matriz de IDs de grupo para os quais você quer consultar métricas.

No momento, só é compatível com um ID.

`["GROUP_ID"]`

`<GRANULARITY>`

_String_

**Opcional.**

É o detalhamento desejado para a análise.

Os valores podem ser os seguintes:

-   `DAILY`

Padrão: `DAILY`.

`DAILY`

`<METRIC_TYPES>`

_Matriz de strings_

**Obrigatório.**

É a matriz de métricas que você quer receber.

Os valores podem ser os seguintes:

-   `SENT` – O número de mensagens enviadas pela empresa ao grupo.-   `DELIVERED` – Refere-se ao número de vezes que uma mensagem foi entregue a um participante do grupo.-   `READ` – Refere ao número de vezes que uma mensagem foi lida por um participante no grupo.-   `PARTICIPANTS_JOINED` – Refere-se ao número de vezes que um participante entrou no grupo.-   `PARTICIPANTS_LEFT` – Refere-se ao número de vezes que um participante saiu do grupo.

`["SENT","READ","PARTICIPANTS_JOINED"]`

### Exemplo de pedido

```
curl -g 'https://graph.facebook.com/v25.0/102290129340398/group_analytics?start=1764662400&end=1764921600&granularity=DAILY&group_ids=['GROUP_ID']&metric_types=['SENT','DELIVERED', 'READ','PARTICIPANTS_JOINED','PARTICIPANTS_LEFT']' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

O exemplo abaixo foi truncado com uma elipse (`...`) para fins de concisão.

```
{  "data": [    {      "granularity": "DAILY",      "data_points": [          {            "group_id": "GROUP_ID",            "start": 1685548801,            "end": 1685635200,            "sent": 100,            "delivered": 250,            "read": 200,            "joined": 3,            "left": 1          },          {            "group_id": "GROUP_ID",            "start": 1685635201,            "end": 1685721600,            "sent": 80,            "delivered": 200,            "read": 150,            "joined": 1,            "left": 0          },          ...        ]    }  ],  "paging": {    "cursors": {      "before": "MAZDZD",      "after": "MjQZD"    }  }}
```

## Referência

Para ver uma lista de todos os possíveis valores de um campo, consulte a referência da Graph API no [campo Análise da conta do WhatsApp Business](/docs/graph-api/reference/waba-analytics).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)