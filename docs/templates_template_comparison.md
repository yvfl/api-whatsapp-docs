<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-comparison -->
<!-- Scraped: 2025-12-20T17:32:55.063Z -->

# Comparação de modelos

Updated: 14 de nov de 2025

É possível comparar dois modelos verificando a frequência de envio de cada um, qual deles apresenta a menor taxa de bloqueios em relação aos envios, bem como o motivo principal do bloqueio de cada modelo.

## Requisitos

-   Um token de acesso de [usuário](/documentation/business-messaging/whatsapp/access-tokens#user-access-tokens) ou de [usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).-   A permissão [whatsapp\_business\_management](/docs/permissions/reference/whatsapp_business_management).

## Limitações

-   Apenas dois modelos podem ser comparados por vez.-   É preciso que os dois modelos estejam na mesma conta do WhatsApp Business.-   Os modelos devem ter sido enviados pelo menos mil vezes no intervalo de tempo especificado nas consultas.-   As janelas de retrospectiva são limitadas a 7, 30, 60 e 90 dias a partir do momento da solicitação.

## Comparação de modelos

Use o ponto de extremidade [WhatsApp Message Template > Compare](/docs/graph-api/reference/whats-app-business-hsm/compare) para especificar um modelo e compará-lo com outro.

### Sintaxe da solicitação

```
GET /<WHATSAPP_MESSAGE_TEMPLATE_ID>/compare
  ?template_ids=[<TEMPLATE_IDS]
  &start=<START>
  &end=<END>
```

### Parâmetros da consulta

Espaço reservado

Descrição

`<WHATSAPP_MESSAGE_TEMPLATE_ID>`

Identificação do modelo de mensagem do WhatsApp para direcionamento.

`<TEMPLATE_IDS>`

Identificação do modelo de mensagem do WhatsApp para comparar com o público.

`<START>`

Registro de data e hora UNIX que indica o início do período. Consulte [Períodos](#timeframes).

`<END>`

Registro de data e hora UNIX que indica o fim do período. Consulte [Períodos](#timeframes).

### Períodos

Os períodos (janelas de retrospectiva) são limitados a 7, 30, 60 e 90 dias a partir do momento da solicitação. Para definir um período, configure a data de término como o horário atual em formato de registro de data e hora UNIX e subtraia o número de dias do período desejado, em segundos, desse valor:

-   Subtraia `604800` para uma janela de 7 dias.-   Subtraia `2592000` para uma janela de 30 dias.-   Subtraia `5184000` para uma janela de 60 dias.-   Subtraia `7776000` para uma janela de 90 dias.

### Resposta

Em caso de sucesso, a API retornará uma lista de nós [WhatsApp Business Template Comparison](/docs/graph-api/reference/whats-app-business-hsm-comparison) que descrevem a taxa de bloqueio de cada modelo, o número de envios e o principal motivo do bloqueio.

```
{
  "data": [
    {
      "metric": "BLOCK_RATE",
      "type": "RELATIVE",
      "order_by_relative_metric": [<ORDER_BY_RELATIVE_METRIC>]
    },
    {
      "metric": "MESSAGE_SENDS",
      "type": "NUMBER_VALUES",
      "number_values": [<NUMBER_VALUES>]
    },
    {
      "metric": "TOP_BLOCK_REASON",
      "type": "STRING_VALUES",
      "string_values": [<STRING_VALUES>]
    }
  ]
}
```

### Conteúdo da resposta

Espaço reservado

Descrição

`<ORDER_BY_RELATIVE_METRIC>`

Matriz de strings com identificações de modelos, em ordem crescente de taxa de bloqueio (relação entre bloqueios e envios).

`<NUMBER_VALUES>`

Matriz de objetos de valor de número de envio de mensagens. Os objetos têm as seguintes propriedades:

  

-   `key` — _String._ Identificação do modelo de mensagem do WhatsApp.-   `value` – _Número inteiro._ O número de vezes que o modelo de mensagem foi enviado.

`<STRING_VALUES>`

Matriz de objetos de valor de string do principal motivo do bloqueio. Os objetos têm as seguintes propriedades:

  

-   `key` — _String._ Identificação do modelo de mensagem do WhatsApp.-   `value` – _String._ Principal motivo do bloqueio.

Os motivos do bloqueio podem ser os seguintes:

  

-   `NO_LONGER_NEEDED`-   `NO_REASON`-   `NO_REASON_GIVEN`-   `NO_SIGN_UP`-   `OFFENSIVE_MESSAGES`-   `OTHER`-   `OTP_DID_NOT_REQUEST`-   `SPAM`-   `UNKNOWN_BLOCK_REASON`

Para ver as descrições desses motivos, consulte o tópico da Central de Ajuda [Visualizar métricas do seu modelo de mensagem do WhatsApp Business](https://www.facebook.com/business/help/511126334359303/).

### Exemplo de solicitação

```
curl -X GET 'https://graph.facebook.com/v24.0/5289179717853347/compare?template_ids=[1533406637136032]&start=1674844791182&end=1674845395982' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "data": [    {      "metric": "BLOCK_RATE",      "type": "RELATIVE",      "order_by_relative_metric": [        "1533406637136032",        "5289179717853347"      ]    },    {      "metric": "MESSAGE_SENDS",      "type": "NUMBER_VALUES",      "number_values": [        {          "key": "5289179717853347",          "value": 1273        },        {          "key": "1533406637136032",          "value": 1042        }      ]    },    {      "metric": "TOP_BLOCK_REASON",      "type": "STRING_VALUES",      "string_values": [        {          "key": "5289179717853347",          "value": "UNKNOWN_BLOCK_REASON"        },        {          "key": "1533406637136032",          "value": "UNKNOWN_BLOCK_REASON"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)