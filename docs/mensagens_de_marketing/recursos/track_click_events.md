<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/track-click-events -->
<!-- Scraped: 2025-12-20T17:29:21.021Z -->

# Rastrear eventos de clique

Updated: 27 de mai de 2025

Válido a partir de 1º de julho de 2025: os preços por mensagem já estão em vigor. Além disso, as taxas para mensagens de marketing na API de Nuvem e na API de MM Lite são consistentes, de acordo com as tabelas de tarifas publicadas [neste link](/documentation/business-messaging/whatsapp/pricing).

Planejamos lançar a MM Lite para o público geral no quarto trimestre de 2025.

_Disponível apenas ao usar a API de Mensagens de Marketing Lite (MM Lite) e o Gerenciador de Anúncios_

Fornecemos uma carga de webhooks quando os usuários clicam no corpo ou na chamada para ação de uma mensagem de marketing. Você pode assinar esse webhook para capturar os dados e usá-los para tomar decisões de campanha.

## Limitações

-   No momento, esse recurso não está disponível para todos.-   Os eventos de clique estão disponíveis somente para mensagens enviadas nos últimos sete dias.

## Webhooks

Para receber o webhook, assine o tópico de webhook `whatsapp_business_account`. A carga do webhook fica no campo `messages` e é entregue da seguinte forma:

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
            "user_actions": [
              {
                "action_type": "marketing_messages_link_click",
                "timestamp": "<time_of_click>",
                "marketing_messages_link_click_data": {
                  "click_component": "cta" | "body",
                  "product_id": "sku_id",
                  "click_id": "click_id",
                  "tracking_token": "example_token"
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

Nome do campo

Tipo de campo

Descrição do campo

`action_type`

**Obrigatório**

String

Nome da ação

`timestamp`

**Obrigatório**

Carimbo de data/hora do UNIX.

Registro de data e hora do momento em que o evento ocorreu.

`click_component`

**Opcional**

Enumeração

A ação de clique.

Pode ser `cta` ou `body`.

`click_id`

**Opcional**

String

O identificador único do clique. Também é anexado ao URL original quando acessado pelo usuário.

`tracking_token`

**Opcional**

String

Token interno da Meta para processamento e rastreamento.

`product_id`

**Opcional**

String

Identificação do produto, se atribuída no Gerenciador de Anúncios ou na API de Marketing.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)