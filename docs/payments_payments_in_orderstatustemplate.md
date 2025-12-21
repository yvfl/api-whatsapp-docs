<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/orderstatustemplate -->
<!-- Scraped: 2025-12-20T17:46:00.001Z -->

# Enviar mensagem do modelo com status do pedido

Updated: 14 de nov de 2025

## Visão geral

Um modelo de status do pedido é um modelo com [componentes](/documentation/business-messaging/whatsapp/templates/components) interativos que estendem o botão de chamada para ação para aceitar a atualização do status do pedido por meio de um modelo. Isso permite que as empresas atualizem o status do pedido fora da [janela de sessão do cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) em casos de uso como cobrança do cartão por um pedido anterior e atualização de envio de um pedido realizado anteriormente.

Depois de receber os sinais de pagamento, as empresas devem atualizar o status do pedido para manter o usuário informado. No momento, aceitamos os valores de status de pedidos a seguir

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/580096545_24841067635515588_5834437320752684752_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=P5L25z_187AQ7kNvwHvcjo_&_nc_oc=Adl1d12qtV8u_TzJPTnvZ7IM-uOjZveJEmgVpqwuy_yB1xmubiB-L2zLZHW1xHZgS8I&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=KEBEg6CXASkFclzZKxJr-w&oh=00_Afm9iCCia7EkxpFUbz9Ps-yeEN_e78bjPRQQbs0i12MBBA&oe=69612650)

Valor

Descrição

`pending`

O usuário ainda não fez o pagamento

`processing`

Pagamento do usuário autorizado, o comerciante/parceiro está atendendo ao pedido, realizando o serviço, entre outros

`partially-shipped`

Uma parte dos produtos do pedido foi enviada pelo comerciante

`shipped`

Todos os produtos do pedido foram enviados pelo comerciante

`completed`

O pedido foi concluído, e nenhuma outra ação é esperada do usuário ou do parceiro/comerciante

`canceled`

O parceiro/comerciante quer cancelar a mensagem `order_details` do pedido/fatura. A atualização de status falhará se já houver um pagamento `successful` ou `pending` para esta mensagem `order_details`

## Criar um modelo de status do pedido

Para criar um modelo de status do pedido, a empresa precisa ter um portfólio empresarial com uma conta do WhatsApp Business, bem como acesso ao Gerenciador do WhatsApp.

Em **Gerenciador do WhatsApp** > **Ferramentas da conta**:

-   Clique em `create template`-   Selecione a categoria `Utility` para expandir a opção `Order details message`-   Insira o `template name` desejado e o `locale` compatível
    -   Dependendo do número de `locales` selecionados, haverá um número igual de variantes de modelo, e as empresas precisarão preencher os detalhes do modelo no respectivo idioma.-   Preencha os componentes do modelo, como `Body` e o texto opcional `footer`, e envie.-   Depois do envio, os modelos serão [categorizados conforme as diretrizes](/documentation/business-messaging/whatsapp/templates/template-categorization#template-category-guidelines) e passarão pelo [processo de aprovação](/documentation/business-messaging/whatsapp/templates/template-review#approval-process). Evite incluir [conteúdo de marketing](/documentation/business-messaging/whatsapp/templates/template-categorization#marketing-templates) como parte dos componentes do modelo.-   O modelo será aprovado ou rejeitado depois que os componentes forem verificados pelo sistema.
    -   Se a empresa acreditar que a categoria determinada não é consistente com nossas diretrizes de categorias de modelos, confirme que não há [problemas comuns](/documentation/business-messaging/whatsapp/templates/template-review) que levam a rejeições e, se estiver buscando outras esclarecimentos, [solicite uma análise](/documentation/business-messaging/whatsapp/templates/template-categorization#requesting-review) do modelo por meio do [suporte para empresas](https://business.facebook.com/business-support-home/)-   Após a aprovação, o [status](/documentation/business-messaging/whatsapp/templates/overview#template-status) do modelo será alterado para `ACTIVE`.
    -   Informamos que o status do modelo pode mudar automaticamente de `ACTIVE` para `PAUSED` ou `DISABLED` com base no engajamento e no feedback dos clientes. Recomendamos que você [monitore as alterações de status](/documentation/business-messaging/whatsapp/templates/template-review#common-rejection-reasons) e tome as medidas apropriadas sempre que ocorrer uma alteração.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/580081490_1541180930238272_2112454248678172804_n.gif?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=8q2v9Cd4yJkQ7kNvwFo8X45&_nc_oc=AdnwYbrlrPCrjzeZYR1gc0u6sJAOocSluIEU5MN_5zE0Ka3jPboC8aw2MQfuWLukMRI&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=KEBEg6CXASkFclzZKxJr-w&oh=00_AfkUsSD43yd6IgZvLeE47VjcCv9vrhuTcKuBFLbSVHjEaQ&oe=69612A4D)

## Criar um modelo de status de pedido usando as APIs de criação de modelo

Para criar um modelo por meio da API e entender a sintaxe geral, as categorias e os componentes necessários, consulte nosso documento [Modelos](/documentation/business-messaging/whatsapp/templates/overview). Todas as diretrizes descritas acima na criação de modelos também se aplicam à API.

O modelo de status do pedido é categorizado como um modelo de "utilidade". Além de "nome" e "idioma", ele possui componentes gerais, como CORPO e RODAPÉ, além de uma subcategoria como "ORDER\_STATUS".

```
POST https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_BUSINESS_ID>/message_templates
{
  "name": "<TEMPLATE_NAME>",
  "language": "<LANGUAGE_AND_LOCALE_CODE>",
  "category": "UTILITY",
  "sub_category": "ORDER_STATUS",
  "components": [
    {
      "type": "BODY",
      "text": "<TEMPLATE_BODY_TEXT>"
    },
    {
      "type": "FOOTER",
      "text": "<TEMPLATE_FOOTER_TEXT>"
    }
  ]
}
```

## Enviar mensagem do modelo de status do pedido

As mensagens do modelo de status do pedido permitem que as empresas enviem atualizações sobre o status do pedido como parâmetros de componente do modelo.

Para enviar um modelo de mensagem com detalhes do pedido, faça uma chamada `POST` ao ponto de extremidade `/PHONE_NUMBER_ID/messages` e anexe um objeto de mensagem com `type=template`. Depois, adicione um [objeto de modelo](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#template-object) com um componente `order_status` e parâmetros com o status mais recente no pedido com o `reference-id` do pedido.

Por exemplo, o seguinte exemplo descreve como enviar o status `shipped` no pedido efetuado.

```
curl -X  POST \
  'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \
 -H 'Authorization: Bearer <ACCESS_TOKEN>' \
 -H 'Content-Type: application/json' \
 -d '{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "<PHONE_NUMBER>",
    "type": "template",
    "template":
    {
        "name": "<TEMPLATE_NAME>",
        "language":
        {
            "policy": "deterministic",
            "code": "<LANGUAGE_AND_LOCALE_CODE>"
        },
        "components":
        [
            {
                "type": "order_status",
                "parameters": [{
                    "type": "order_status",
                    "order_status":
                    {
                        "reference_id": "reference_id_value",
                        "order":
                        {
                            "status": "processing | partially_shipped | shipped | completed | canceled",
                            "description": "<OPTIONAL_DESCRIPTION>"
                        }
                    }
                }]
            }
        ]
    }
}
```

Ao enviar uma mensagem `order_status` com uma transição inválida, você receberá um webhook de erro com o código de erro `2046` e a mensagem `New order status was not correctly transitioned`.

## Cancelar um pedido

É possível cancelar um pedido enviando uma mensagem `order_status` com o status `canceled`. O cliente não pode pagar por um pedido cancelado. O cliente recebe uma mensagem `order_status`, a página de detalhes do pedido é atualizada para mostrar que o pedido foi cancelado e o botão `Continue` é removido. O texto opcional exibido abaixo de `Order canceled` na página de detalhes do pedido pode ser especificado usando o campo de descrição na mensagem de `order_status`.

Os pedidos só poderão ser cancelados se o usuário ainda não tiver feito o pagamento. Se o usuário tiver feito o pagamento e a empresa enviar uma mensagem do tipo "order\_status" com o status "canceled", você receberá um webhook de erro com o código `2047` e a mensagem `Could not change order status to 'canceled'`.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)