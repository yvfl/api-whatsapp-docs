<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview -->
<!-- Scraped: 2025-12-20T17:46:18.118Z -->

# API de Pagamentos – Brasil

Updated: 14 de nov de 2025

A API de Pagamentos permite que as empresas aceitem pagamentos dos clientes via WhatsApp. As empresas enviam mensagens de `order_details` ([API de Pedidos](/documentation/business-messaging/whatsapp/payments/payments-br/orders)) para os clientes e depois recebem atualizações de status do pagamento via notificações de webhook.

Com base no caso de uso selecionado, as empresas podem aceitar pagamentos dos clientes usando uma das seguintes integrações:

-   [Códigos dinâmicos do Pix](/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix)-   [Links de pagamento](/documentation/business-messaging/whatsapp/payments/payments-br/payment-links)-   [Boleto](/documentation/business-messaging/whatsapp/payments/payments-br/boleto)-   [Pagamento com um clique](/documentation/business-messaging/whatsapp/payments/payments-br/one-click-payments)-   [Modelo de detalhes do pedido](/documentation/business-messaging/whatsapp/payments/payments-br/orderdetailstemplate)

## Como funciona

Primeiro, a empresa escreve e envia uma mensagem de `order_details`, que é um novo tipo de mensagem interativa. Ela contém os mesmos quatro componentes principais: cabeçalho, corpo, rodapé e ação. Dentro do componente de ação, a empresa inclui todas as informações necessárias para que o cliente conclua o pagamento.

Cada mensagem de `order_details`**deve** conter um **`reference_id`exclusivo** fornecido pela empresa. Este número de identificação de referência é usado durante todo o fluxo para acompanhar o pedido.

Depois que a mensagem é enviada, a empresa aguarda por uma atualização de status de pagamento ou transação. O tipo de atualização depende do tipo de integração (por exemplo, [Pix](/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix), [Links de pagamento](/documentation/business-messaging/whatsapp/payments/payments-br/payment-links), entre outros). O WhatsApp **NÃO** faz conciliações de pagamento. A empresa deve fazer a conciliação do pagamento com seu respectivo provedor de serviços de pagamento (PSP) usando o `reference_id` do pedido.

## Fluxo de compra no app

No app para clientes do WhatsApp, o fluxo de compra tem estas etapas:

-   Os compradores se comunicam com as empresas e selecionam um produto.-   As empresas enviam uma mensagem de `order_details` ao comprador.-   Os compradores pagam pelo pedido. Para Pix, eles mudam para o app do banco e usam a função Pix copia e cola. Para Links de pagamento, o link de pagamento ou de finalização da compra é exibido no navegador da web, onde o pagamento deve ser concluído.-   As empresas enviam uma mensagem de `order_status` indicando que o pedido está em processamento (`processing`).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)