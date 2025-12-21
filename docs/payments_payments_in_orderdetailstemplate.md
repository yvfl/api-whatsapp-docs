<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/orderdetailstemplate -->
<!-- Scraped: 2025-12-20T17:45:52.169Z -->

# Como enviar mensagem de modelo com detalhes do pedido

Updated: 31 de out de 2025

## Visão geral

O modelo de mensagem com detalhes do pedido é um modelo com [componentes interativos](/documentation/business-messaging/whatsapp/templates/overview#components) que amplia o botão de chamada para ação para permitir o envio de detalhes do pedido e fornece uma experiência mais completa em comparação com os modelos que contêm apenas componentes de texto.

Depois que os modelos de mensagem com detalhes do pedido forem criados e aprovados, será possível usar o modelo aprovado para enviar mensagens com informações do pedido ou da fatura, incentivando os clientes a efetuar o pagamento.

Antes de enviar uma mensagem de modelo com detalhes do pedido, as empresas precisam criar um modelo com um botão de chamada para ação "Abrir detalhes do pedido". Para ver mais informações sobre os pré-requisitos e o processo de criação de um modelo, consulte [Como criar modelos de mensagem para a sua conta do WhatsApp Business](https://www.facebook.com/business/help/2055875911147364?id=2129163877102343).

## Como criar um modelo de detalhes do pedido no Gerenciador do WhatsApp

Para criar um modelo de detalhes do pedido, a empresa precisa ter um portfólio empresarial com uma conta do WhatsApp Business.

Em **Gerenciador do WhatsApp** > **Ferramentas da conta**:

-   Clique em `create template`-   Selecione a categoria `Utility` para expandir a opção `Order details message`-   Insira o `template name` desejado e o `locale` compatível
    -   Dependendo do número de `locales` selecionados, haverá um número igual de variantes de modelo, e as empresas precisarão preencher os detalhes do modelo no respectivo idioma.-   Preencha os componentes do modelo, como `Header`, `Body` e o texto opcional `footer`, e envie.-   Depois do envio, os modelos serão [categorizados conforme as diretrizes](/documentation/business-messaging/whatsapp/templates/template-categorization#template-category-guidelines) e passarão pelo [processo de aprovação](/documentation/business-messaging/whatsapp/templates/template-review#approval-process). Evite incluir [conteúdo de marketing](/documentation/business-messaging/whatsapp/templates/template-categorization#marketing-templates) como parte dos componentes do modelo.-   O modelo será aprovado ou rejeitado depois que os componentes forem verificados pelo sistema.
    -   Se a empresa acreditar que a categoria determinada não é consistente com nossas diretrizes de categorias de modelos, verifique se há [problemas comuns](/documentation/business-messaging/whatsapp/templates/template-review) que levam a rejeições. Se estiver buscando outros esclarecimentos, [peça uma análise](/documentation/business-messaging/whatsapp/templates/template-categorization#requesting-review) do modelo por meio do [suporte para empresas](https://business.facebook.com/business-support-home/)-   Após a aprovação, o [status](/documentation/business-messaging/whatsapp/templates/overview#template-status) do modelo será alterado para `ACTIVE`
    -   Informamos que o status do modelo pode mudar automaticamente de `ACTIVE` para `PAUSED` ou `DISABLED` com base no engajamento e no feedback dos clientes. Recomendamos que você [monitore as alterações de status](/documentation/business-messaging/whatsapp/templates/template-review#common-rejection-reasons) e tome as medidas apropriadas sempre que ocorrer uma alteração.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561631212_1339317814593536_2945252722681774358_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=QlBIWxBxrd0Q7kNvwFMJL1B&_nc_oc=AdmGR9atUuS3viniFCfQ5q5JSADReCNnkNvjhDlTPwDPpFdn3DwRRNYCScQC2VLzQQs&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=GR4aKZ5EbJDFhgBmCOZmVA&oh=00_Afmy0u3bzBFaoHpW0nAcg_1DFmUlfYUOxHpMBfFrhmv7UQ&oe=69610ABD)

## Como criar um modelo de detalhes de pedido usando as APIs de criação de modelo

Para criar um modelo por meio da API e entender a sintaxe geral, as categorias e os componentes necessários, consulte [API de modelos](/documentation/business-messaging/whatsapp/templates/overview#creating-templates). Todas as diretrizes descritas acima na criação de modelos também se aplicam à API.

O modelo de detalhes do pedido é categorizado como um modelo de "utilidade". Além de "nome" e "idioma", o modelo tem componentes gerais, como CABEÇALHO, CORPO, RODAPÉ e um BOTÃO fixo com o tipo "ORDER\_DETAILS" e o texto "Analisar e pagar".

```
POST https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_BUSINESS_ID>/message_templates
{
  "name": "<TEMPLATE_NAME>",
  "language": "<LANGUAGE_AND_LOCALE_CODE>",
  "category": "UTILITY",
  /* Businesses can create the order details template under marketing category by including display_format attribute */
  /* "display_format": "order_details",*/
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "<TEMPLATE_HEADER_TEXT>"
    },
    {
      "type": "BODY",
      "text": "<TEMPLATE_BODY_TEXT>"
    },
    {
      "type": "FOOTER",
      "text": "<TEMPLATE_FOOTER_TEXT>"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "ORDER_DETAILS",
          "text": "Review and Pay"
        }
      ]
    }
  ]
}
```

## Enviar um modelo de mensagem com detalhes do pedido

O modelo de mensagem com detalhes do pedido permite que as empresas enviem mensagens de fatura (order\_details) como parâmetros do componente de botão de chamada para ação `Open order details` predefinido. Permite que as empresas enviem toda a integração de pagamento (como [Intenção da UPI](/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent#step-2--assemble-the-interactive-object), [Gateway de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#step-1) ou [Links de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/payment-links#step-2--assemble-the-interactive-object)) como parâmetros de botão.

Para enviar um modelo de mensagem com detalhes do pedido, faça uma chamada `POST` ao ponto de extremidade `/PHONE_NUMBER_ID/messages` e anexe um objeto de mensagem com `type=template`. Depois, adicione um objeto de modelo com um botão de chamada para ação `Open order details` predefinido.

Por exemplo, o exemplo a seguir descreve como enviar parâmetros de mensagem de modelo de detalhes do pedido com [intenção da interface de pagamentos unificada (UPI)](/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent#step-2--assemble-the-interactive-object) para pedir que o consumidor faça um pagamento.

Veja abaixo um exemplo de carga com `upi` como tipo de pagamento. Para outras variações do bloco `payment_settings` (por exemplo, para o tipo `payment_gateway`), consulte este [documento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#step-1).

```
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
        "type": "header",
        "parameters": [
          {
            "type": "image", // Uses header with image as an example
            "image": {
              "link": "http(s)://the-url"
            }
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "order_details",
        "index": 0,
        "parameters": [
          {
            "type": "action",
            "action": {
              "order_details": {
                "currency": "INR",
                "order": {
                  "discount": {
                    "offset": 100,
                    "value": 250
                  },
                  "items": [
                    {
                      "amount": {
                        "offset": 100,
                        "value": 400
                      },
                      "name": "<ORDER_ITEM_NAME>",
                      "quantity": 1,
                      "retailer_id": "<ORDER_ITEM_RETAILER_ID>",
                      "country_of_origin": "<ORIGIN_COUNTRY>",
                      "importer_name": "<IMPORTER_NAME>",
                      "importer_address": {
                        "address_line1": "<IMPORTER_ADDRESS>",
                        "city": "<CITY>",
                        "country_code": "<COUNTRY>",
                        "postal_code": "<ZIP_CODE>"
                      }
                    }
                  ],
                  "shipping": {
                    "offset": 100,
                    "value": 0
                  },
                  "status": "pending",
                  "subtotal": {
                    "offset": 100,
                    "value": 400
                  },
                  "tax": {
                    "offset": 100,
                    "value": 500
                  }
                },
                "payment_settings": [
                  {
                    "type": "upi_intent_link",
                    "upi_intent_link": {
                      "link": "upi://pay?pa=merchant_vpa&pn=merchant%20Name&mc=mc_code&purpose=purpose_code&tr=transaction_record"
                    }
                  }
                ],
                "payment_configuration": "unique_payment_config_id",
                "payment_type": "upi",
                "reference_id": "reference_id_value",
                "total_amount": {
                  "offset": 100,
                  "value": 650
                },
                "type": "digital-goods"
              }
            }
          }
        ]
      }
    ]
  }
}
```

Depois que o modelo de mensagem com detalhes do pedido for entregue, a resposta de sucesso incluirá um objeto com um identificador prefixado com "wamid". Use a identificação listada depois de "wamid" para acompanhar o status da mensagem.

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

Após a entrega do modelo de mensagem com detalhes do pedido, o restante do fluxo de pagamento será "Enviar fatura na janela da sessão do cliente" e dependerá dos parâmetros de detalhes do pedido da [integração de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/overview) escolhida. Para saber mais, consulte os fluxos de pós-pagamento em [Intenção da UPI](/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent#step-5--consumer-pays-for-the-order), [Gateway de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#step-2--receive-webhook-about-transaction-status) e [Links de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/payment-links#step-5--consumer-pays-for-the-order).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)