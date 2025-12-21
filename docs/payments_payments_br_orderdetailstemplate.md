<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orderdetailstemplate -->
<!-- Scraped: 2025-12-20T17:47:10.582Z -->

# Como enviar mensagem de modelo com detalhes do pedido

Updated: 4 de nov de 2025

## Visão geral

O modelo de mensagem com detalhes do pedido é um modelo com [componentes interativos](/documentation/business-messaging/whatsapp/templates/overview#components) que amplia o botão de chamada para ação para permitir o envio de detalhes do pedido e fornece uma experiência mais completa em comparação com os modelos que contêm apenas componentes de texto.

Depois que os modelos de mensagem com detalhes do pedido forem criados e aprovados, será possível usar o modelo aprovado para enviar mensagens com informações do pedido ou da fatura, incentivando os clientes a efetuar o pagamento.

Antes de enviar uma mensagem de modelo com detalhes do pedido, as empresas precisam criar um modelo com um botão de chamada para ação "Detalhes do pedido". Para ver mais informações sobre os pré-requisitos e o processo de criação de um modelo, consulte [Como criar modelos de mensagem para a sua conta do WhatsApp Business](https://www.facebook.com/business/help/2055875911147364?id=2129163877102343).

## Como criar um modelo de detalhes do pedido no Gerenciador do WhatsApp

Para criar um modelo de detalhes do pedido, a empresa precisa ter um portfólio empresarial com uma conta do WhatsApp Business.

Em **Gerenciador do WhatsApp** > **Ferramentas da conta**:

-   Clique em `create template`.-   Selecione a categoria `Utility` ou `Marketing` para ver a opção de formato de modelo `Order details`.-   Selecione o formato de modelo `Order details` e clique em **Avançar**.-   Insira o `template name` desejado e o `locale` compatível.
    -   Dependendo do número de `locales` selecionados, haverá um número igual de variantes de modelo, e as empresas precisarão preencher os detalhes do modelo no respectivo idioma.-   Preencha os componentes do modelo, como o texto dos campos `Header`, `Body` e, opcionalmente, `footer`.
    -   Para `Header`, é possível escolher um destes três tipos de mídia: `Text`, `Image` ou `Document`. Escolha `Document` se quiser enviar **arquivos PDF** no cabeçalho deste modelo.-   Clique em Enviar.-   Depois do envio, os modelos serão [categorizados conforme as diretrizes](/documentation/business-messaging/whatsapp/templates/template-categorization#template-category-guidelines) e passarão pelo [processo de aprovação](/documentation/business-messaging/whatsapp/templates/template-review#approval-process).-   O modelo será aprovado ou rejeitado depois que os componentes forem verificados pelo sistema.
    -   Se a empresa acreditar que a categoria determinada não é consistente com nossas diretrizes de categorias de modelos, verifique se há [problemas comuns](/documentation/business-messaging/whatsapp/templates/template-review) que levam a rejeições. Se estiver buscando outros esclarecimentos, [peça uma análise](/documentation/business-messaging/whatsapp/templates/template-categorization#requesting-review) do modelo por meio do [suporte para empresas](https://business.facebook.com/business-support-home/)-   Após a aprovação, o [status](/documentation/business-messaging/whatsapp/templates/overview#template-status) do modelo será alterado para `ACTIVE`
    -   Informamos que o status do modelo pode mudar automaticamente de `ACTIVE` para `PAUSED` ou `DISABLED` com base no engajamento e no feedback dos clientes. Recomendamos que você [monitore as alterações de status](/documentation/business-messaging/whatsapp/templates/template-review#common-rejection-reasons) e tome as medidas apropriadas sempre que ocorrer uma alteração.

## Como criar um modelo de detalhes de pedido usando as APIs de criação de modelo

Para criar um modelo por meio da API e entender a sintaxe geral, as categorias e os componentes necessários, consulte [API de modelos](/documentation/business-messaging/whatsapp/templates/overview#creating-templates). Todas as diretrizes descritas acima na criação de modelos também se aplicam à API.

O modelo de detalhes do pedido pode ser categorizado como um modelo de "utilidade" ou "marketing". Além de "nome" e "idioma", o modelo tem componentes gerais, como CABEÇALHO, CORPO, RODAPÉ e um BOTÃO fixo com o tipo "ORDER\_DETAILS".

```
POST https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
{
  "name": "<TEMPLATE_NAME>",
  "language": "<LANGUAGE_CODE>",
  "category": "UTILITY or MARKETING",
  "display_format": "ORDER_DETAILS",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT" OR "IMAGE" OR "DOCUMENT",
      "text": "<HEADER_TEXT>"
    },
    {
      "type": "BODY",
      "text": "<BODY_TEXT>"
    },
    {
      "type": "FOOTER",
      "text": "<FOOTER_TEXT>"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "ORDER_DETAILS",
          "text": "<COPY_PIX_CODE>"
        }
      ]
    }
  ]
}
```

## Enviar um modelo de mensagem com detalhes do pedido

O modelo de mensagem com detalhes do pedido permite que as empresas enviem mensagens de fatura (order\_details) como parâmetros predefinidos do componente de botão de chamada para ação `order details`. Permite que as empresas enviem toda a integração de pagamento (como [Código pix dinâmico](/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix), [Links de pagamento](/documentation/business-messaging/whatsapp/payments/payments-br/payment-links), [Boleto](/documentation/business-messaging/whatsapp/payments/payments-br/boleto) etc;) como parâmetros de botão.

Para enviar um modelo de mensagem com detalhes do pedido, faça uma chamada `POST` ao ponto de extremidade `/PHONE_NUMBER_ID/messages` e anexe um objeto de mensagem com `type=template`. Depois, adicione um objeto de modelo com um botão de chamada para ação `order details` predefinido.

Como opção, é possível incluir um **arquivo PDF** como anexo no componente `header` do modelo de mensagem. Para isso, use `type=document` no objeto `parameter` do componente `header`, conforme descrito em nosso documento [Componentes](/documentation/business-messaging/whatsapp/templates/components#media-header).

Por exemplo, a amostra a seguir descreve como enviar a opção [Copiar código Pix](/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix) nos parâmetros de mensagem de modelo de detalhes do pedido para pedir que o consumidor faça um pagamento.

```
POST https://graph.facebook.com/<API_VERSION>/<PHONE_NUMBER_ID>/messages
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER>",
  "type": "template",
  "template": {
    "name": "<TEMPLATE_NAME>",
    "language": {
      "policy": "deterministic",
      "code": "<LANGUAGE_AND_LOCALE_CODE>"
    },
    "components": [
      {
        "type": "button",
        "sub_type": "order_details",
        "index": 0,
        "parameters": [
          {
            "type": "action",
            "action": {
              "order_details": {
                "reference_id": "<UNIQUE_REFERENCE_ID>",
                "type": "digital-goods",
                "payment_type": "br",
                "payment_settings": [
                  {
                    "type": "pix_dynamic_code",
                    "pix_dynamic_code": {
                      "code": "00020101021226700014br.gov.bcb.pix2548pix.example.com...",
                      "merchant_name": "Account holder name",
                      "key": "39580525000189",
                      "key_type": "CNPJ"
                    }
                  }
                ],
                "currency": "BRL",
                "total_amount": {
                  "value": 50000,
                  "offset": 100
                },
                "order": {
                  "status": "pending",
                  "tax": {
                    "value": 0,
                    "offset": 100,
                    "description": "optional text"
                  },
                  "items": [
                    {
                      "retailer_id": "1234567",
                      "name": "Cake",
                      "amount": {
                        "value": 50000,
                        "offset": 100
                      },
                      "quantity": 1
                    }
                  ],
                  "subtotal": {
                    "value": 50000,
                    "offset": 100
                  }
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

Depois que o modelo de mensagem com detalhes do pedido for entregue, a resposta de sucesso incluirá um objeto com um identificador prefixado com "wamid". Use o ID listado depois de "wamid" para acompanhar o status da mensagem.

```
{
    "messaging_product": "whatsapp",
    "contacts": [
        {
            "input": "<PHONE_NUMBER>",
            "wa_id": "<WHATSAPP_ID>"
        }
    ],
    "messages": [
        {
            "id": "wamid.ID"
        }
    ]
}
```

## Fluxo após o envio do modelo de mensagem com detalhes do pedido

Após a entrega do modelo de mensagem com detalhes do pedido, o restante do fluxo de pagamento será "Enviar fatura na janela da sessão do cliente" e dependerá dos parâmetros de detalhes do pedido da [integração de pagamento](/documentation/business-messaging/whatsapp/payments/payments-br/overview) escolhida.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)