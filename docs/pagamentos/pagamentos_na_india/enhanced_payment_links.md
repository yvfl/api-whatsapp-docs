<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/enhanced-payment-links -->
<!-- Scraped: 2025-12-20T17:45:36.397Z -->

# Links de pagamento aprimorados

Updated: 14 de nov de 2025

Sua empresa pode permitir que os clientes paguem usando os apps de UPI favoritos ou outras formas de pagamento aceitas pelos portais de pagamento compatíveis sem sair do WhatsApp.

No momento, a experiência de link de pagamento aprimorada é compatível com os principais portais de pagamento, como **PayU**, **RazorPay** e **Cashfree**.

Esse recurso ainda não está disponível para o público. Para saber mais, entre em contato com **whatsappindia-bizpayments-support@meta.com**.

A experiência de links de pagamento aprimorados está habilitada para os tipos de mensagens a seguir

-   [Modelos de mensagem interativa](#interactive_message_template)-   [Botões de URL de chamada para ação interativos](#interactive_cta_url_button)

## Modelos de mensagem interativa

Você pode continuar usando modelos com [componentes](/documentation/business-messaging/whatsapp/templates/components) interativos existentes com mensagens de chamada para ação como hoje e aceitar a experiência aprimorada. É possível aceitar a experiência aprimorada na hora de **criar um modelo** ou de **enviar um modelo existente**.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/564690767_1339318147926836_7876647427034457125_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=RxC1blQJlKMQ7kNvwGfUCTe&_nc_oc=Adlv_oKzGoIISo389aNCa2ddvfBYLWRvQURKjvcA08O9bx6U-7n7L4QL0j6qg7N0orY&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=lK9nTANeR8jzvPw3AJVrGg&oh=00_AflHocIvOljLyHN9WuGYE-hInZJiijvMN2DIUqSmkmFfPw&oe=696130D3)

No momento, você pode habilitar essa experiência para os modelos existentes com componentes interativos ou criar um modelo com os parâmetros listados abaixo.

-   Modelo sem cabeçalhos

A experiência aprimorada não está disponível para modelos com [componentes](/documentation/business-messaging/whatsapp/templates/components) de mídia, [carrossel](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) e [outros modelos especializados](/documentation/business-messaging/whatsapp/templates/marketing-templates#specialty-templates)

Você pode continuar usando seus modelos sem cabeçalho e começar a [enviar a mensagem de modelo](#sending-a-template-message). Caso contrário, siga as etapas para [criar um modelo](#creating-a-template) com parâmetros específicos

### Como enviar um modelo de mensagem

Para enviar um modelo de mensagem, faça uma ligação `POST` ao ponto de extremidade `/PHONE_NUMBER_ID/messages` e anexe um objeto mensagem com `type=template`. Em seguida, adicione um componente de botão de modelo com subtipo como botão de chamada para ação de URL e `payment_link_preview` definido como `true` em parâmetros. Veja a carga de mensagem a seguir.

#### Exemplo de carga de mensagem de modelo com experiência aprimorada

```
{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "PHONE_NUMBER",  "type": "template",  "template": {    "name": "{templateName}",    "language": {      "policy": "deterministic",      "code": "LANGUAGE_AND_LOCALE_CODE"    },    "components": [      {        "type": "body",        "parameters": [          {            "type": "text",            "text": "₹100"          },          {            "type": "text",            "text": "Jan 2029"          },          {            "type": "text",            "text": "penalty!"          }        ]      },      {        "type": "button",        "sub_type": "URL",        "index": 0,        "parameters": [          {            "type": "text",            "text": "unique_identifier",            "payment_link_preview": true          }        ]      }    ]  }}
```

### Criar um modelo

Há algumas maneiras de criar um modelo com parâmetros específicos:

-   Criar um modelo usando a biblioteca de utilidade-   Criar um modelo no Gerenciador do WhatsApp-   Criar um modelo usando a API de criação de modelo

#### Criar um modelo usando a biblioteca de modelos `(Recommended)`

Com a biblioteca, você pode escolher entre `pre-approved` modelos listados na categoria `payments` para criar um modelo com os parâmetros necessários de maneira mais rápida e fácil. Consulte o [guia da biblioteca de modelos](/documentation/business-messaging/whatsapp/templates/template-library) para saber como criar um modelo.

#### Criar um modelo no Gerenciador do WhatsApp

Para criar um modelo, você precisa ter um portfólio empresarial com uma Conta do WhatsApp Business.

Em Gerenciador do WhatsApp > Ferramentas de conta:

-   Clique em `create template`.-   Escolha a categoria de modelo `Utility` ou `Marketing`.-   Selecionar modelo personalizado-   Insira o nome desejado para o modelo e a localidade compatível
    -   Dependendo do número de `locales` selecionados, haverá um número igual de variantes de modelo, e as empresas precisarão preencher os detalhes do modelo no respectivo idioma.-   Preencha o `Body` dos componentes do modelo e o texto de `footer` opcional. Deixe o componente `Header` como `None`.-   Depois do envio, os modelos serão [categorizados conforme as diretrizes](/documentation/business-messaging/whatsapp/templates/template-categorization#template-category-guidelines) e passarão pelo [processo de aprovação](/documentation/business-messaging/whatsapp/templates/template-review#approval-process). Evite incluir [conteúdo de marketing](/documentation/business-messaging/whatsapp/templates/template-categorization#marketing-templates) como parte dos componentes do modelo.-   O modelo será aprovado ou rejeitado depois que os componentes forem verificados pelo sistema.
    -   Se a empresa acreditar que a categoria determinada não é consistente com nossas diretrizes de categorias de modelos, verifique se há problemas comuns que levam a rejeições. Se estiver buscando outros esclarecimentos, [peça uma análise](/documentation/business-messaging/whatsapp/templates/template-categorization#requesting-review) do modelo por meio do [suporte para empresas](https://business.facebook.com/business-support-home/)-   Após a aprovação, o status do modelo será alterado para `ACTIVE`
    -   Informamos que o status do modelo pode mudar automaticamente de `ACTIVE` para `PAUSED` ou `DISABLED` com base no engajamento e no feedback dos clientes. Recomendamos que você [monitore as alterações de status](/documentation/business-messaging/whatsapp/templates/template-review#common-rejection-reasons) e tome as medidas apropriadas sempre que ocorrer uma alteração.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/565124678_1339318001260184_6879565339340357099_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=anButxHMpCgQ7kNvwHSyHdO&_nc_oc=AdmIbn0ERWLKAC8HxzkCtWKxy2FpOgeK_whdc1V3mxnbzC9NGNVQDj_YVSsvSdqSIeE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=lK9nTANeR8jzvPw3AJVrGg&oh=00_AfmRUnTOfFUrvn49SWw2esY7g53yaYkaGX0rRxqcJYsFFw&oe=69612A1C)

#### Criar um modelo usando a API de criação de modelo

Para criar um modelo por meio da API e entender a sintaxe geral, as categorias e os componentes necessários, consulte nosso documento [Modelos](/documentation/business-messaging/whatsapp/templates/overview). Além disso, você precisará especificar `payment_link_preview` como `true` para habilitar a experiência avançada de link de pagamento.

Todas as diretrizes descritas acima na criação de modelos também se aplicam à API.

```
POST https://graph.facebook.com/v19.0/WABA_ID/message_templates{    "name": "{templateName}",    "language": "LANGUAGE_AND_LOCALE_CODE",    "category": "TEMPLATE_CATEGORY",    "components":    [        {            "type": "BODY",            "text": "Your payment of {{1}} is due on {{2}}.Pay now to avoid {{3}}. If you already paid, please ignore this message.",            "example":            {                "body_text":                [                    [                        "₹12.34",                        "Jan 1, 2029",                        "late fees"                    ]                ]            }        },        {            "type": "BUTTONS",            "buttons":            [                {                    "type": "URL",                    "text": "Pay now",                    "url": "https://payment_link_domain/{{1}}",                    "example":                    [                        "https://payment_link_domain/unique_identifier"                    ],"payment_link_preview": true                }            ]        }    ]}
```

## Botão de URL de chamada para ação interativo

É possível continuar enviando a mensagem com [botão URL de chamada para ação interativo](/documentation/business-messaging/whatsapp/messages/interactive-cta-url-messages) e ativar a experiência de link de pagamento aprimorada ao definir `payment_link_preview` como "true" nos parâmetros de ação.

No momento, assim como os modelos com [componentes](/documentation/business-messaging/whatsapp/templates/components) interativos \[modelo de mensagem interativa\], a experiência avançada de link de pagamento só é compatível com mensagens de botão de chamada para ação sem cabeçalho.

### Enviar uma mensagem de chamada para ação interativa

Para enviar uma mensagem de chamada para ação interativa, faça uma chamada `POST` ao ponto de extremidade `/PHONE_NUMBER_ID/messages` e anexe um objeto mensagem com `type=interactive`. Em seguida, adicione um componente de botão de modelo com subtipo como botão de chamada para ação de `URL` e `payment_link_preview` definido como `true` em parâmetros.

```
{  "messaging_product": "whatsapp",  "recipient_type": "individual",  "to": "PHONE_NUMBER",  "type": "interactive",  "interactive": {    "type": "cta_url",    "body": {      "text": "Your payment of 2.00 is due on Jan 1, 2026.\nPay now to avoid penalty!.\n If you already paid, please ignore this message."    },    "action": {      "name": "cta_url",      "parameters": {        "display_text": "Pay now",        "url": "https://payment_link_domain/unique_identifier"        "payment_link_preview": true      }    }  }}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)