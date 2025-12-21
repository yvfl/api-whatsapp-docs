<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/receive-responses -->
<!-- Scraped: 2025-12-20T17:44:16.422Z -->

# Como receber respostas dos clientes

Updated: 22 de out de 2025

Depois de receber mensagens sobre um ou vários itens, os usuários do WhatsApp podem pedir mais informações sobre um produto ou fazer um pedido. Essas ações são comunicadas por meio do webhook de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages).

## Status de mensagem enviada

Os status de mensagens enviadas (enviada, entregue, lida) são descritos em [webhooks de mensagens de status](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status).

## Como pedir informações

Ao receber uma mensagem de produto único ou de vários produtos, os usuários do WhatsApp podem pedir mais informações enviando um SMS em uma conversa do WhatsApp existente ou tocando no botão **Enviar mensagem para a empresa** ou **Enviar mensagem** ao visualizar um produto específico.

As mensagens enviadas depois de tocar no botão **Conversar com a empresa** ou **Conversar** são descritas em [webhooks de mensagens de texto](/documentation/business-messaging/whatsapp/webhooks/reference/messages/text) e incluirão uma propriedade `context`, cujo valor é um objeto que descreve o produto que o usuário estava visualizando quando tocou no botão.

## Pedidos

Quando um usuário adiciona um ou mais produtos ao carrinho de compras e faz um pedido, um [webhook de mensagens de pedido](/documentation/business-messaging/whatsapp/webhooks/reference/messages/order) é disparado, descrevendo o conteúdo do pedido. Use o conteúdo do pedido para atendê-lo.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)