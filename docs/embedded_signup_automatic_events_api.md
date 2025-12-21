<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api -->
<!-- Scraped: 2025-12-20T17:49:56.379Z -->

# API de Eventos Automáticos

Updated: 14 de nov de 2025

Os clientes empresariais que acessam o cadastro incorporado têm a opção de aceitar a identificação automática de eventos:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/503425036_1029531339304862_7305936950282438326_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=BoS4FY64_REQ7kNvwFyiXeY&_nc_oc=Adl95GSzyFcDFfJC9pyD-21_Lm3AJ6Vy41RmWwiR35vuF8SrurIvT5hiPD-CfyF_73k&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=xMCf1UPwuUdPEFagj-UVRw&oh=00_Afm5ggG6ygvLAMpg_wkMWVpXm2BdJeV-EYcb6D65TMFCRw&oe=69610BCD)

Quando um cliente empresarial aceita, usamos uma combinação de expressões regulares e processamento de linguagem natural para analisar as novas conversas que são originadas por anúncios de clique para o WhatsApp. Se a nossa análise determinar que houve um evento de geração de lead ou de compra, você poderá receber uma notificação ao assinar o campo de webhook **automatic\_events**. Depois, você pode registrar o evento para o cliente usando a [API de Conversões](/docs/marketing-api/conversions-api) para que ele possa ser aproveitado pelo cliente usando uma plataforma da Meta (em 2026, consulte [Limitações](#limitations) abaixo).

Para saber mais sobre como esse recurso funciona, veja estes [recursos adicionais](https://l.facebook.com/l.php?u=https%3A%2F%2Fmeta.highspot.com%2Fitems%2F6839e4fecd0bb354418ee7ec&h=AT2hVvDEJgRNcaJ-KenZxS6qDgk24Q5cu598D0DXYwvhGwSeqbQ62CMEB-b8Jbddj8UzW7tnrglYs7cgHVKR46oXr4kdKfnZSULI4hZrjWl8NQ1sbAlHZOs0EF-5FAZ4uLWgIAgLpL6dWG5a_gKRhCxrVvA).

## Limitações

-   A identificação automática de eventos é um recurso novo, portanto, seus clientes empresariais não poderão visualizar nem usar os eventos automáticos reportados por meio da API de Conversões em nenhuma superfície da Meta até 2026. No entanto, se quiser, você poderá exibir essas informações para seus clientes usando a própria solução antes disso, para que eles possam entender melhor as necessidades, preferências e o desempenho dos anúncios dos respectivos clientes.-   A identificação automática de eventos não está disponível para clientes empresariais na União Europeia, no Reino Unido ou no Japão.

## Requisitos

-   Você já [implementou](/documentation/business-messaging/whatsapp/embedded-signup/implementation) o Cadastro Incorporado e pode integrar clientes empresariais que concluírem o fluxo.-   Seu [servidor de webhook](/docs/graph-api/webhooks/getting-started/webhooks-for-whatsapp) está processando webhooks.

## Configuração

A identificação automática de eventos está disponível como recurso opcional para todos os clientes empresariais. Para receber notificações sobre um evento, você deve inscrever seu app no campo de webhook **automatic\_events**. No entanto, assim que fizer isso, talvez você comece a receber esses webhooks antes de conseguir processá-los. Sendo assim, recomendamos concluir essas etapas usando um app de teste antes de mover o código para a produção e inscrever o app de produção no campo de webhook.

### Etapa 1: assinar o campo de webhook automatic\_events

Navegue até [Painel de Apps](/apps) > **Webhooks** > **Configuração** e assine o campo de webhook **automatic\_events**.

### Etapa 2: ajustar o retorno de chamada do webhook

Ajuste o código de retorno de chamada do webhook para que ele possa processar cargas de webhook **automatic\_events**.

#### Estrutura do evento de geração de leads

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "automatic_events": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "event_name": "LeadSubmitted",
                "timestamp": <WEBHOOK_TRIGGER_TIMESTAMP>,
                "ctwa_clid": "<CLICK_ID>"
              }
            ]
          },
          "field": "automatic_events"
        }
      ]
    }
  ]
}
```

#### Exemplo de evento de geração de leads

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "automatic_events": [              {                "id": "wamid.HBgLMTIwNjY3NzQ3OTgVAgASGBQzQUY3MDVCQzFBODE5ODU4MUZEOQA=",                "event_name": "LeadSubmitted",                "timestamp": 1749069089,                "ctwa_clid": "Afc3nYt4TTydumlFFsatFz8bR2yHCtVA92Veu_zDE4DgAI-QqCwM6eC3-K3lTGHRiLxRTVXFEsdyKQQSa-2obZyuGBq_EYypt_OwbMihBV0pbUoRmrGnEjwFTHop-Px0TfA"              }            ]          },          "field": "automatic_events"        }      ]    }  ]}
```

#### Estrutura do evento de compra

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "automatic_events": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "event_name": "Purchase",
                "timestamp": <WEBHOOK_TRIGGER_TIMESTAMP>,
                "ctwa_clid": "<CLICK_ID>",
                "custom_data": {
                  "currency": "<CURRENCY_CODE>",
                  "value": <AMOUNT>
                }
              }
            ]
          },
          "field": "automatic_events"
        }
      ]
    }
  ]
}
```

#### Exemplo de evento de compra

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "automatic_events": [              {                "id": "wamid.HBgLMTIwNjY3NzQ3OTgVAgARGBIwRkU4NDI5Nzk3RjZDMzE2RUMA",                "event_name": "Purchase",                "timestamp": 1749069131,                "ctwa_clid": "Afc3nYt4TTydumlFFsatFz8bR2yHCtVA92Veu_zDE4DgAI-QqCwM6eC3-K3lTGHRiLxRTVXFEsdyKQQSa-2obZyuGBq_EYypt_OwbMihBV0pbUoRmrGnEjwFTHop-Px0TfA",                "custom_data": {                  "currency": "USD",                  "value": 25000                }              }            ]          },          "field": "automatic_events"        }      ]    }  ]}
```

### Etapa 3: acionar webhooks

Para acionar um webhook **automatic\_events**:

-   Acesse a implementação de teste do cadastro incorporado-   Autentique o fluxo usando uma empresa que já tenha um anúncio de clique para o WhatsApp configurado.-   Na tela da seção WABA, marque a caixa de seleção **Instrua a Meta a identificar automaticamente eventos de pedidos e de leads** e conclua o fluxo.-   Acesse o anúncio de clique para o WhatsApp e clique nele para enviar uma mensagem à empresa.-   Use a empresa para responder à mensagem com uma das strings abaixo (deve ser exatamente igual).

-   **Para um evento de compra:**_seu código de rastreamento é AB123456789BR_-   **Para um evento de geração de leads:**_Quero saber mais sobre o produto_

Depois de disparar as cargas de webhook **automatic\_events**, confirme que o retorno de chamada do webhook processou cada webhook de acordo com as suas necessidades comerciais.

### Etapa 4: registrar cada evento usando a API de Conversões (opcional)

Se desejar, você pode registrar cada evento usando a [API de Conversões](/docs/marketing-api/conversions-api/business-messaging). Inclua valores relevantes do webhook de evento, conforme aplicável.

Para saber mais sobre como registrar eventos, consulte [Enviar eventos por meio da API de Conversões](/docs/marketing-api/conversions-api/business-messaging#send-events-via-the-conversions-api-2).

#### Sintaxe da geração de leads

```
curl 'https://graph.facebook.com/<API_VERSION>/<DATASET_ID>/events' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "data": [
    {
      "event_name": "LeadSubmitted",
      "event_time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "action_source": "business_messaging",
      "messaging_channel": "whatsapp",
      "user_data": {
        "ctwa_clid": "<CLICK_ID>"
      },
      "messaging_outcome_data": {
        "outcome_type": "automatic_events"
      }
    }
  ]
}
'
```

#### Sintaxe do evento de compra

```
curl 'https://graph.facebook.com/<API_VERSION>/<DATASET_ID>/events' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "action_source": "business_messaging",
      "messaging_channel": "whatsapp",
      "user_data": {
        "ctwa_clid": "<CLICK_ID>"
      },
      "custom_data": {
        "currency": "<CURRENCY_CODE>",
        "value": <AMOUNT>
      },
      "messaging_outcome_data": {
        "outcome_type": "automatic_events"
      }
    }
  ]
}
'
```

## Habilitar e desabilitar via Meta Business Suite

Os clientes empresariais já integrados por meio do cadastro incorporado podem habilitar a identificação automática de eventos usando o Meta Business Suite.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/503429874_596845240111750_4726469615509960636_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=iZbrDlEPKjsQ7kNvwGg45Zk&_nc_oc=AdklAZzf9yMNmSLmBaTsoxFgUoZWHcAKGfKuYIjV-TldXuns1PWdUsgB9OIcP7GkCpE&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=xMCf1UPwuUdPEFagj-UVRw&oh=00_Afn4GlzAb-mAhZeiDBRcGqfmtBeJQZLyzB_dmXx-W7FlSQ&oe=696133AB)

Se um cliente empresarial que você já integrou quiser habilitar esse recurso, envie as seguintes instruções:

-   Acesse o Meta Business Suite em [https://business.facebook.com](https://business.facebook.com).-   Navegue até **Configurações** > **Contas** > **Contas do WhatsApp** e clique na sua conta do WhatsApp Business.-   Na aba **Resumo**, role a tela para baixo até **Privacidade e compartilhamento de dados**.-   Use o botão "**Identificar automaticamente**..." para habilitar ou desabilitar a identificação automática de eventos conforme desejado.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)