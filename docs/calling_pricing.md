<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/pricing -->
<!-- Scraped: 2025-12-20T17:42:00.606Z -->

# Preços da API de Ligações

Updated: 4 de nov de 2025

**Todas as ligações iniciadas pelo usuário são gratuitas.**

## Visão geral

As ligações iniciadas pela empresa são cobradas com base em:

-   Duração da ligação (calculada em pulsações de seis segundos)-   O código do país do número de telefone que recebe a ligação.-   Nível de volume (com base nos minutos de ligação no mês)

Observação: nossos sistemas contam pulsações fracionárias como uma pulsação. Por exemplo, uma ligação de 56 segundos (9,33 pulsações) seria contada como 10 pulsações.

Para chamadas que ultrapassam os níveis de preços (por exemplo, do nível 0–50.000 para o nível 50.001–250.000), a ligação inteira é cobrada pela tarifa mais baixa (ou seja, a tarifa do nível de volume mais alto).

É necessária ter uma forma de pagamento válida para fazer ligações.

**Observação:** as mensagens de solicitação de permissão de ligação estão sujeitas aos [preços por mensagem](/documentation/business-messaging/whatsapp/pricing).

## Tabelas de tarifas de preços baseados em volume (VBP)

As tabelas de tarifas a seguir representam as tarifas atuais do VBP para a API de Ligações Comerciais do WhatsApp em vigor a partir de 1º de agosto de 2025:

-   [Tabela de tarifas em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F520671944_623223040377923_7736077446508180620_n.csv%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DQDzbN-OPYBYQ7kNvwHhaIXr%26_nc_oc%3DAdk8IiwPIYq-TpNQBdoPTJsSpR5wOYgbG-0o_I-jp0JuoT33HTSHzej0jiKF-DJbSeM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3Dde4XIdQLbsbLQs_66xSw8Q%26oh%3D00_AfmWSodMtOkxLu7lN2wWBLglnSJ20vuaHsNqGVbPKLcxLQ%26oe%3D694CA551&h=AT3tYsHQV1cOyjvcUb1apvgMohF2rVqd8OnwrCwAvtrNIo_RCDwhygWcqz4hzzEiAK4zxvdX8GpttsgaGe6b_tlgwVsL79qOP7dyGra6ahTkqkiN7DbjAJxscvVMncpDh9r_kpeeU_gRKTKGiQ3vVd9Fk5M)-   [Tabela de tarifas em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F520297017_2631484657208999_4027192314064932495_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DBJEu9aZ6uLEQ7kNvwGW6Nqk%26_nc_oc%3DAdmZy7PUHPY8q_kEElDWqvmZRiAmkz3NmEK-S31bnR9f2R38iopUvz8f0vlIqzPKaLg%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3Dde4XIdQLbsbLQs_66xSw8Q%26oh%3D00_Afmo1NuWDW8yNwQ6itvPnNeuZX5tXzGR3_olmEtw2BaNoQ%26oe%3D694CB6E7&h=AT3tYsHQV1cOyjvcUb1apvgMohF2rVqd8OnwrCwAvtrNIo_RCDwhygWcqz4hzzEiAK4zxvdX8GpttsgaGe6b_tlgwVsL79qOP7dyGra6ahTkqkiN7DbjAJxscvVMncpDh9r_kpeeU_gRKTKGiQ3vVd9Fk5M)-   [Tabela de tarifas em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F522403360_1317814323248646_3679642822059879321_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D7_xC3xP7GdQQ7kNvwEkG3Jp%26_nc_oc%3DAdmwiotVmcNew9q6hJiHGe996xxWRjsQPxWcXnrO1bPNNrxhntyfQPJK5PdIrI2m1n4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3Dde4XIdQLbsbLQs_66xSw8Q%26oh%3D00_Afm6JeEFH7Q2c1QKfjQVC4rT-lhfo5h0zBgGCR3cJ5WQ7w%26oe%3D694CC72E&h=AT3tYsHQV1cOyjvcUb1apvgMohF2rVqd8OnwrCwAvtrNIo_RCDwhygWcqz4hzzEiAK4zxvdX8GpttsgaGe6b_tlgwVsL79qOP7dyGra6ahTkqkiN7DbjAJxscvVMncpDh9r_kpeeU_gRKTKGiQ3vVd9Fk5M)-   [Tabela de tarifas em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F521916945_1437343154178501_4307701949709939168_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DCj2ymKwOt30Q7kNvwFeFT2d%26_nc_oc%3DAdn3xUPUqz16B_870C0o3DLApvGFMqWlCbF3CJ35oS0W-cx1AmBeNOxxECmQEIwZ2m0%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3Dde4XIdQLbsbLQs_66xSw8Q%26oh%3D00_AfkUOsivycXzZTc4VPXPn_WL7q18DpJzsUGqQBRmr3RzRw%26oe%3D694CA265&h=AT3tYsHQV1cOyjvcUb1apvgMohF2rVqd8OnwrCwAvtrNIo_RCDwhygWcqz4hzzEiAK4zxvdX8GpttsgaGe6b_tlgwVsL79qOP7dyGra6ahTkqkiN7DbjAJxscvVMncpDh9r_kpeeU_gRKTKGiQ3vVd9Fk5M)-   [Tabela de tarifas em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F523820415_1707220083238148_129381165576389329_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DBbEOZmV5dKoQ7kNvwHDBH7Q%26_nc_oc%3DAdm8IowZcaM94BuETO11jmMPwNFeJzHnA7TNelGt9kj0RQDDAGp0JLgHMDkDaeEWsWQ%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3Dde4XIdQLbsbLQs_66xSw8Q%26oh%3D00_AfkZlyafYuRuZi8sXJYDE4EXwIFMQkI5rV7Dv29QGxr0ZQ%26oe%3D694C9E76&h=AT3tYsHQV1cOyjvcUb1apvgMohF2rVqd8OnwrCwAvtrNIo_RCDwhygWcqz4hzzEiAK4zxvdX8GpttsgaGe6b_tlgwVsL79qOP7dyGra6ahTkqkiN7DbjAJxscvVMncpDh9r_kpeeU_gRKTKGiQ3vVd9Fk5M)-   [Tabela de tarifas em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F518358957_1395180011780140_6900177198446866717_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DOhIRZURwsgUQ7kNvwFEeTik%26_nc_oc%3DAdmcIqNOXcUzvjiFeNIs9ZOBZDUxgXidW4SVWNluJo0BlotSyqVQKpYp3aTP5NKkHC8%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3Dde4XIdQLbsbLQs_66xSw8Q%26oh%3D00_Afm7BY_EvO53lCI3Es5Cs_0WHddtXFSBbvrAc0g-G9nVEQ%26oe%3D694CC086&h=AT3tYsHQV1cOyjvcUb1apvgMohF2rVqd8OnwrCwAvtrNIo_RCDwhygWcqz4hzzEiAK4zxvdX8GpttsgaGe6b_tlgwVsL79qOP7dyGra6ahTkqkiN7DbjAJxscvVMncpDh9r_kpeeU_gRKTKGiQ3vVd9Fk5M)

## Como as ligações alteram a janela de atendimento ao cliente de 24 horas

Disponível desde 1º de outubro de 2024

Atualmente, quando um usuário do WhatsApp envia uma mensagem para você, uma [janela de atendimento ao cliente de 24 horas](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) começa ou é atualizada.

Durante esse período, a empresa pode enviar ao usuário do WhatsApp qualquer tipo de mensagem que não seria permitida fora da janela.

Com a introdução da API de Ligações, a janela de atendimento ao cliente agora também é iniciada ou atualizada para ligações:

-   Quando um usuário do WhatsApp liga para você, independentemente de você aceitar a ligação ou não-   Quando um usuário do WhatsApp aceita a ligação.

## Obter análises de custo e de ligações

É possível chamar o ponto de extremidade `GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>` com um parâmetro de consulta `?fields=call_analytics` a fim de obter análises de ligações para a sua conta do WhatsApp Business (WABA).

Os pontos de extremidade podem fornecer informações úteis, como custo, contagem de ligações concluídas e duração média da ligação.

### Obter análise de ligações

Use esse ponto de extremidade para receber análises das suas ligações, como custo, contagem de ligações concluídas e duração média.

#### Sintaxe da solicitação

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=call_analytics
  .<FILTERING_PARAMETERS>
  &access_token=<ACCESS_TOKEN>
```

Parâmetro

Descrição

Exemplo de valor

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

**Obrigatório**

  
A identificação da sua conta do WhatsApp Business.

[Saiba como encontrar a identificação da WABA](/documentation/business-messaging/whatsapp/whatsapp-business-accounts)

`102290129340398`

`<FILTERING_PARAMETERS>`

_Vários_

**Obrigatório**

  
Parâmetros de filtragem para dados de análise de ligações.

[Consulte Parâmetros de filtragem abaixo](/documentation/business-messaging/whatsapp/calling/pricing#filtering-parameters)

[Consulte Parâmetros de filtragem abaixo](/documentation/business-messaging/whatsapp/calling/pricing#filtering-parameters)

`<ACCESS_TOKEN>`

_String_

**Obrigatório**

  
Seu token de acesso.

#### Exemplo de resposta

```
{
  "call_analytics": {
    "data": [
      {
        "data_points": [
          {
            "start": 1676361600,
            "end": 1676448000,
            "cost": 10,
            "count": 10,
            "average_duration": 1
          }
        ]
      }
    ]
  },
  "id": "114525791557199"
}
```

#### Parâmetros de filtragem

Parâmetro

Descrição

Exemplo de valor

`start`

_Número inteiro_

**Obrigatório**

  
A data de início do registro de data e hora UNIX do intervalo para o qual você quer consultar as análises de ligações.

`1676361600`

`end`

_Número inteiro_

**Obrigatório**

  
A data de término do registro de data e hora UNIX do intervalo para o qual você quer consultar as análises de ligações.

`1676448000`

`granularity`

_Enumeração_

**Obrigatório**

  
A amostragem desejada das análises que você quer recuperar.

Opções com suporte: `HALF_HOUR` | `DAILY` | `MONTHLY`

`MONTHLY`

`country_codes`

_Matriz de strings_

**Opcional**

  
Filtre dados por códigos dose países aos quais você fez ligações.

Forneça uma matriz com códigos de duas letras para os países a serem incluídos.

Se `country_codes` não for fornecido nos seus parâmetros de filtro, as análises de todos aos quais você ligou serão retornadas.

[Ver lista de códigos de país aprovados](/documentation/business-messaging/whatsapp/calling/faq#supported-codes)

`["011","55"]`

`phone_numbers`

_Matriz de strings_

**Opcional**

  
Filtre dados por números de telefone comercial específicos na sua WABA.

Caso `phone_numbers` não seja fornecido, todos os números de telefone adicionados à sua WABA serão incluídos.

`["550987659923","17862258930"]`

`metric_types`

_Lista de enumeração_

**Opcional**

  
É a lista de métricas que você quer receber.

Se metric\_types não for fornecido, retornaremos resultados para todos os tipos de métrica.

Opções aceitas:

`COST` – Para calcular o custo da duração total da ligação, aplica-se a tabela de tarifas com base na direção da ligação e no código do país do consumidor.

`COUNT` – O número total de ligações concluídas.

`AVERAGE_DURATION` – Duração média das ligações concluídas computada pela soma da duração de todas as ligações dividida pelo número de ligações

`[COST, COUNT]`

`directions`

_Enumeração_

**Opcional**

  
Filtre os dados pela direção da ligação realizada.

Caso `directions` não seja fornecido, todos os números de telefone adicionados à sua WABA serão incluídos.

Opções com suporte: `USER_INITIATED` | `BUSINESS_INITIATED`

`BUSINESS_INITIATED`

`dimensions`

_Enumeração_

**Obrigatório**

  
É a lista de detalhamentos que você quer aplicar às suas métricas.

Se `dimensions` não for fornecido, retornaremos resultados sem detalhamentos.

Opções com suporte: `DIRECTION` | `COUNTRY` | `PHONE`

`DIRECTION`

#### Resposta de erro

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Exemplo de solicitações de custo e análise de ligações

### Apenas parâmetros obrigatórios

#### Solicitação

```
GET /{whatsapp-business-account-id}?fields=call_analytics
      .start(1643702400).end(1646121600)
      .granularity(MONTHLY)
      .phone_numbers([])
  &access_token={access-token}
```

#### Resposta

```
{
  "call_analytics": {
    "data": [
      {
        "data_points": [
          {
            "start": 1676361600,
            "end": 1676448000,
            "cost": 10,
            "count": 10,
            "average_duration": 1
          }
        ]
      }
    ]
  },
  "id": "114525791557199"
}
```

### Com detalhamentos

#### Solicitação

```
GET /{whatsapp-business-account-id}?fields=call_analytics
      .start(1643702400).end(1646121600)
      .granularity(MONTHLY)
      .dimensions([DIRECTION])
  &access_token={access-token}
```

#### Resposta

```
{
  "call_analytics": {
    "data": [
      {
        "data_points": [
          {
            "start": 1676361600,
            "end": 1676448000,
            "direction":"USER_INITIATED",
            "cost": 0.6,
            "count": 5,
            "average_duration": 1
          },
          {
            "start": 1676361600,
            "end": 1676448000,
            "direction": "BUSINESS_INITIATED",
            "cost": 0.4,
            "count": 5,
            "average_duration": 1
          }
        ]
      }
    ]
  },
  "id": "114525791557199"
}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)