<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates -->
<!-- Scraped: 2025-12-20T17:23:34.171Z -->

# Tarifas de autenticação internacional

Updated: 14 de nov de 2025

Países específicos têm uma taxa **authentication-international** em nossas [tabelas de tarifas](/documentation/business-messaging/whatsapp/pricing#rate-cards). Se você enviar uma mensagem de modelo de autenticação para um usuário do WhatsApp cujo código de ligação do país tenha uma taxa internacional de autenticação, a mensagem entregue será cobrada por essa taxa se:

-   sua empresa está [qualificada](#eligibility) para as taxas internacionais de autenticação-   se a empresa tiver sede em outro país (consulte [Localização principal da empresa](#primary-business-location))-   a mensagem foi entregue na [hora de início](#start-times) ou depois desse horário no país especificado

Por exemplo, se a sua empresa estiver sediada na Indonésia e você enviar uma mensagem de modelo de autenticação para um usuário do WhatsApp que tenha um código de ligação de país +62 (Indonésia), e a mensagem for entregue, a taxa internacional de autenticação não será cobrada, porque você e o usuário estão no mesmo país. No entanto, se a sua empresa for sediada na Índia, a taxa internacional de autenticação será cobrada de você caso todos os critérios acima sejam atendidos.

Consulte [Exemplos](#examples) para ver outros exemplos de cenários.

Webhooks de status [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) (que incluem detalhes de preços) e [análise de preços](/documentation/business-messaging/whatsapp/analytics#pricing-analytics) indicarão se uma mensagem ou um conjunto de mensagens foi cobrado por uma taxa internacional de autenticação.

## Qualificação

Se a sua empresa enviar mais de 750 mil mensagens fora das janelas de atendimento ao cliente em um período de 30 dias, em todas as suas contas do WhatsApp Business, com usuários únicos do WhatsApp com códigos de ligação de um país que tem uma taxa internacional de autenticação, ela será considerada qualificada para taxas internacionais de autenticação.

Depois que a qualificação for aprovada, definiremos as [horas de início](#start-times) em 30 dias para cada país com uma taxa internacional de autenticação. Além disso, tentaremos determinar o [ponto comercial principal](#primary-business-location) usando informações disponíveis publicamente.

Depois, enviaremos um [email de qualificação](#eligibility-email) com essas horas de início e o país que definimos como a localização principal da sua empresa (caso seja possível determinar o país). Assim, você terá 30 dias de aviso antes da aplicação das taxas internacionais de autenticação. [Webhooks](#webhooks) também serão disparados incluindo os horários de início e a localização principal da empresa (se definida).

A qualificação é permanente. Uma vez que a empresa for considerada qualificada, todas as mensagens de modelo de autenticação enviadas a partir da hora de início serão cobradas por taxa internacional de autenticação nos mercados onde essa taxa for aplicável.

## Países com tarifas de autenticação internacional

Os países a seguir estão sujeitos a taxas internacionais de autenticação:

-   Egito-   Índia-   Indonésia-   Malásia-   Nigéria-   Paquistão-   Arábia Saudita-   África do Sul-   Emirados Árabes Unidos

Consulte [Tabela de tarifas](/documentation/business-messaging/whatsapp/pricing#rate-cards) para saber mais sobre as tarifas.

## Horas de início

As horas de início são registros de data e hora específicos para empresas e países. Essas registros indicam quando as mensagens de modelo de autenticação recém-entregues estão sujeitas a taxas internacionais de autenticação. Apenas as mensagens de modelo de autenticação enviadas pela empresa e entregues a usuários do WhatsApp nesses países **nas datas especificadas ou depois** serão cobradas pelas taxas internacionais de autenticação.

As horas de início são definidas quando a empresa é considerada qualificada para as taxas internacionais de autenticação, e são contadas a partir da data de qualificação, ou seja, sempre 30 dias antes da aplicação da taxa internacional de autenticação.

As horas de início são incluídas no seu [email de qualificação](#eligibility-email) e [webhooks](#webhooks). Você também pode obter esses horários solicitando o campo `auth_international_rate_eligibility` em qualquer uma das contas da sua empresa:

### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>?fields=auth_international_rate_eligibility' \
-H 'Authorization: <ACCESS_TOKEN>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

[Token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ou [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<API_VERSION>`

_String_

**Opcional.**

Versão da Graph API.

v24.0

`<WABA_ID>`_String_

**Obrigatório.**

É a identificação da conta do WhatsApp Business.

`102290129340398`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "id": "<WABA_ID>",
  "auth_international_rate_eligibility": {
    "start_time": <START_TIME>,
    "exception_countries": [
      <EXCEPTION_COUNTRY>,
      <EXCEPTION_COUNTRY>,
      ...
    ]
  }
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<WABA_ID>`

ID da conta do WhatsApp Business (WABA).

`102290129340398`

`<START_TIME>`

Registro de data e hora UNIX que indica a hora de início para todos os países com preços de autenticação internacional para os quais você não tem uma [exceção](#exception-countries).

`1732057507`

`<EXCEPTION_COUNTRY>`

É um objeto único que descreve um país com uma hora de início de exceção. Veja [país com exceção](#exception-countries).

Para a maioria das contas do WhatsApp Business, a matriz `exception_countries` ficará vazia.

```
{
"country_code": "ID",
"start_time": 1742450707
}
```

## Ponto comercial principal

O ponto comercial principal é o país em que a empresa está localizada. Ele aparecerá no Gerenciador de Negócios no campo **Localização principal da empresa** a partir de 1º de maio de 2024, caso seja possível determinar a localização da sua empresa usando informações disponíveis publicamente.

As informações disponíveis publicamente abaixo são usadas para determinar a localização da empresa:

-   Indica se a empresa é de capital aberto e está listada em bolsa.-   A estrutura corporativa da empresa (onde a controladora pode estar sediada ou ter ações negociadas publicamente).

Tentaremos determinar a localização da sua empresa quando:

-   For considerada [não qualificada](#eligibility) para as taxas internacionais de autenticação.-   Você [editar o ponto comercial principal](#editing-your-primary-business-location) usando o Gerenciador de Negócios.

Esse processo pode levar até três dias úteis. O resultado dessa determinação pode ser o seguinte:

-   **Verificada**: determinamos o lugar onde a empresa está sediada e definimos o ponto comercial principal para esse país (o que também dispara um webhook).-   **Precisamos de mais informações**: exigimos mais informações para tomar uma decisão.-   **Rejeitado**: discordamos do país que você designou no Gerenciador de Negócios (se ele foi usado para editar o campo **Localização principal da empresa**).

Você receberá uma notificação sobre o resultado no seu [email de qualificação](#eligibility-email) inicial ou em um email separado se tiver usado o Gerenciador de Negócios para editar a sua localização.

Caso a solicitação seja rejeitada, se precisarmos de mais informações ou se você discordar do país que determinamos como localização principal da empresa, será possível editar a localização por meio do Gerenciador de Negócios.

Caso o status do seu ponto comercial principal não seja verificado, mas a hora de início para um determinado país já tenha passado, qualquer mensagem de autenticação enviada a um usuário do WhatsApp nesse país será cobrada com a taxa internacional.

[](#editing-your-primary-business-location)

### Definir ou editar seu ponto comercial principal

Para definir ou editar seu ponto comercial principal:

-   [Clique aqui para acessar as configurações do negócio](https://business.facebook.com/settings/info?edit_pbl=true)-   Selecione o país do ponto comercial principal de operação da empresa no menu suspenso ou insira-o no campo de texto. Esse é o local onde a empresa tem sede e mantém os registros contabilísticos.-   Clique em **Avançar**.-   Responda às perguntas na tela. Essas respostas ajudarão a Meta a verificar seu ponto comercial principal.-   Clique em **Avançar**.-   Clique em **Enviar para análise**

_Observação: não será possível fazer alterações enquanto a verificação estiver em análise._

### Status do ponto comercial principal

O campo **Localização principal da empresa** no Gerenciador de Negócios também exibirá um status:

-   **Verificado**: verificamos a localização principal da empresa.-   **Verificação pendente**: estamos determinando a localização principal da sua empresa.-   **Rejeitado**: discordamos do país que você designou com base em informações disponíveis publicamente e no que você incluiu ao editar a localização. É possível editar de forma manual sua localização novamente e incluir informações diferentes como parte do envio.

### Obter a localização via API

É possível usar a API para verificar se o ponto comercial principal da empresa está definido solicitando o campo `primary_business_location` na conta do WhatsApp Business (WABA):

#### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>?fields=primary_business_location' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Resposta:

Caso a solicitação seja bem-sucedida:

```
{
  "id": "<WABA_ID>",
  "primary_business_location": "<COUNTRY_CODE>"
}
```

-   `<WABA_ID>` – Identificação da conta do WhatsApp Business.-   `<COUNTRY_CODE>` – Código do país com dois caracteres que indica o país onde determinamos que a empresa está sediada.

## Email de qualificação

Ao enviar mensagens de autenticação pelo WhatsApp, você reconhece e concorda que, quando sua empresa for considerada qualificada para taxas internacionais de autenticação, um email será enviado para todos os endereços de email associados aos administradores das suas contas e para todos os terceiros com que suas contas do WhatsApp Business foram compartilhadas (por exemplo, administradores de Parceiros de Solução que têm acesso às suas contas do WhatsApp Business) para alertá-los de que o limite de qualificação foi atingido.

O email incluirá o seguinte:

-   As [horas de início](#start-times) exatas para cada país com uma taxa internacional de autenticação.-   O país que definimos como [localização principal do negócio](#primary-business-location).

## Países com exceção

As taxas internacionais de autenticação para os países aplicáveis começarão a ser cobradas na mesma data, exceto se indicado em outro email, na matriz `exception_countries` em [webhooks de qualificação](#eligibility-webhook), ou na matriz `exception_countries` retornada ao [solicitar](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#request) o `auth_international_rate_eligibility`campo na sua conta do WhatsApp Business (WABA).

Sempre cobraremos a taxa doméstica referente ao seu principal ponto comercial, mesmo que ele apareça na matriz `exception_countries`.

### Exemplo de cenário

Nos exemplos a seguir, considere o seguinte cenário:

-   Há três países, identificados por três códigos de país fictícios: A, B e C.-   Os países A e B têm tarifas de autenticação internacional.-   O país C não tem uma taxa internacional de autenticação.-   O portfólio empresarial tem uma WABA com o ID 12345.

A solicitação do campo `auth_international_rate_eligibility` na WABA 12345 retorna:

```
{  "id": "12345",  "auth_international_rate_eligibility": {    "start_time": 1717225200, // Indicates country A start time: June 1, 2024    "exception_countries": [      {        "country_code": "B",        "start_time": 1719817200 // Indicates country B start time: July 1, 2024      }    ]  }}
```

O país C não aparece na resposta porque não tem uma taxa internacional de autenticação.

### Situação 1

O ponto comercial principal da empresa é o país C.

-   Em 1º de junho de 2024, o país A passa a ser cobrado conforme a taxa internacional de autenticação.-   Em 1º de julho de 2024, o país B passa a ser cobrado conforme a taxa internacional de autenticação.

### Situação 2

O ponto comercial principal da empresa é o país B.

-   Em 1º de junho de 2024, o país A passa a ser cobrado conforme a taxa internacional de autenticação.

A taxa internacional de autenticação do país B não se aplica porque o ponto comercial principal da empresa também é o país B.

## Webhooks

### Webhook de qualificação

Um webhook `account_update` será disparado se a sua empresa for considerada qualificada para taxas internacionais. O webhook incluirá o horário de início para cada país com uma taxa internacional de autenticação.

Consulte [Tabela de tarifas](/documentation/business-messaging/whatsapp/pricing#rate-cards) para ver a lista de países com tarifas de autenticação internacional.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WABA_ID>",
      "time": <WEBHOOK_SENT_TIMESTAMP>,
      "changes": [
        {
          "field": "account_update",
          "value": {
            "auth_international_rate_eligibility": {
              "exception_countries": [
                {
                  "country_code": "<EXCEPTION_COUNTRY_CODE>",
                  "start_time": <EXCEPTION_START_TIME>
                }
              ],
              "start_time": <START_TIME>
            },
            "event": "AUTH_INTL_PRICE_ELIGIBILITY_UPDATE"
          }
        }
      ]
    }
  ]
}
```

-   `<WABA_ID>` – Identificação da conta do WhatsApp Business.-   `<WEBHOOK_SENT_TIMESTAMP>` – Registro de data e hora UNIX que indica quando o webhook foi enviado.-   `<EXCEPTION_COUNTRY_CODE>` – Código do país com duas letras (por exemplo, `ID` para Indonésia) referente ao país com uma exceção de hora de início.-   `<EXCEPTION_START_TIME>` – Registro de data e hora UNIX que indica o horário de início da taxa internacional de autenticação para o país com exceção.-   `<START_TIME_INDIA>` – Registro de data e hora UNIX que indica a hora de início para todos os países com preços de autenticação internacional **para os quais você não tem uma exceção**.

### Webhook de atualização do ponto comercial principal

Assine o webhook `account_update` para receber uma notificação quando o [ponto comercial principal](#primary-business-location) da empresa for definido. Se conseguirmos determinar o país em que a empresa está sediada, definiremos a localização como esse país e dispararemos um webhook `account_update` com o código do país de dois caracteres atribuído à propriedade `BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE`.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WABA_ID>",
      "time": <TIMESTAMP>,
      "changes": [
        {
          "field": "account_update",
          "value": {
            "country": "<COUNTRY_CODE>",
            "event": "BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE"
          }
        }
      ]
    }
  ]
}
```

-   `<WABA_ID>` – Identificação da conta do WhatsApp Business.-   `<TIMESTAMP>` – Registro de data e hora UNIX que indica quando o webhook foi enviado.-   `<COUNTRY_CODE>` – Código de país ISO 3166-1 alfa-2, indicando o país onde determinamos que a empresa está sediada.

### Webhook de preços em mensagens

Se uma mensagem de modelo de autenticação for cobrada por uma taxa internacional de autenticação, o objeto `pricing` nos webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de status terá `category` definido como `authentication_international`.

```
"pricing": {"billable": true,"pricing_model": "PMP","type": "regular","category": "authentication_international"}
```

## Exemplos

Veja o que acontece quando uma empresa com **Indonésia** como o [ponto comercial principal](#primary-business-location) envia uma mensagem de modelo de autenticação a um usuário do WhatsApp:

Localização do usuário

A empresa se qualifica?

Está ativo/foi iniciado?

Taxa cobrada

Indonésia

\-

\-

Autenticação

Índia

Não

\-

Autenticação

Índia

Sim

Não

Autenticação

Índia

Sim

Sim

Autenticação internacional

Veja o que acontece quando uma empresa com sede na Índia envia um modelo de autenticação a um usuário do WhatsApp:

Localização do usuário

A empresa se qualifica?

Está ativo/foi iniciado?

Taxa cobrada

Índia

\-

\-

Autenticação

Indonésia

Não

\-

Autenticação

Indonésia

Sim

Não

Autenticação

Indonésia

Sim

Sim

Autenticação internacional

Veja o que acontece quando uma empresa com um ponto comercial principal sem taxa internacional de autenticação envia uma mensagem de modelo de autenticação a um usuário do WhatsApp:

Localização do usuário

A empresa se qualifica?

Está ativo/foi iniciado?

Taxa cobrada

Indonésia

Não

\-

Autenticação

Indonésia

Sim

Não

Autenticação

Indonésia

Sim

Sim

Autenticação internacional

Índia

Não

\-

Autenticação

Índia

Sim

Não

Autenticação

Índia

Sim

Sim

Autenticação internacional

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)