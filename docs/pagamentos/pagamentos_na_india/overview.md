<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/overview -->
<!-- Scraped: 2026-03-10T21:52:00.726Z -->

# API de Pagamentos — Índia

Updated: 26 de nov de 2025

A API de Pagamentos permite que as empresas aceitem pagamentos dos clientes por meio de todos os apps UPI instalados no dispositivo, além de outras formas de pagamento, como cartões, Netbanking e carteiras via WhatsApp.

As empresas podem enviar mensagens de fatura (`order_details`) para os clientes e, em seguida, receber notificações sobre atualizações no status de pagamento por meio de webhooks do Gateway de Pagamento.

## Saiba as diferenças nos modelos de integração

A escolha entre esses dois modelos de integração depende do Gateway de Pagamento usado pelo comerciante/empresa. Há dois modelos de integração com as seguintes diferenças entre eles:

-   **[Modo de intenção da UPI](/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent)**: esse modo pode ser usado com qualquer Gateway de Pagamento compatível com a geração de intenção da UPI.-   **[Modo de integração profunda do gateway de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg)**: compatível no momento apenas com Razorpay, PayU, Billdesk e Zaakpay.

Experiência do usuário

Modo de intenção da UPI

Modo de integração profunda do Gateway de Pagamento

**Suporte nativo para "Outras formas de pagamento"**

Por exemplo: Netbanking, cartões, carteiras

❌

Alternativa: enviar links de pagamento

✅

**Suporte nativo para a intenção do UPI**

✅

✅

**Notificação de status de pagamento nativo**

❌

✅

Recursos de integração

Modo de intenção da UPI

Modo de integração profunda do Gateway de Pagamento

**Reembolsos de APIs do WhatsApp**

❌

✅

**Status do pagamento de webhooks do WhatsApp**

❌

✅

## Pré-requisitos para a integração

-   **As APIs de Pagamentos essenciais estão disponíveis em SP/TP**-   **Acesso a APIs/CSVs de gatilho de pedido do comerciante** necessárias para disparar um pedido (por exemplo, valor, detalhes de produtos/serviços)-   **Acesso às APIs de lançamento de pagamentos** necessárias para fechar um pedido (por exemplo, APIs de geração de tíquetes para criar tíquetes assim que o pagamento for recebido)

#### Modo de integração avançada do gateway de pagamento

-   **Descubra o proprietário da conta do Gateway de Pagamento**: isso serve para autorizar a vinculação da conta ao Gerenciador de Negócios do WhatsApp.

#### Modo de intenção da UPI

-   **Descubra as identificações de VPA, MCC e PC** para empresas a partir do Gateway de Pagamento do comerciante.-   **Acesso à documentação da API do Gateway de Pagamento**:-   Ligações S2S de intenção da UPI-   Configuração de webhook para status de pagamento

## Exemplo de casos de uso e recursos necessários

Caso de uso

Conjunto de recursos essenciais

**Comprar de tíquetes ou ingressos**

Por exemplo: tíquetes de metrô/ônibus e ingressos para eventos

-   Mensagem com detalhes do pedido-   Webhook/API de status do pagamento-   Mensagem de status do pedido-   Reembolso

**Lembretes de pagamento**

Exemplo: pagamentos de conta, renovações de assinatura, renovações de seguro

-   Modelo de detalhes do pedido-   Webhook/API de status do pagamento-   Mensagem de status do pedido-   Reembolso

## Suporte

-   Se você encontrar algum problema, entre em contato com o [Suporte Direto⁠](https://business.facebook.com/direct-support/). _Escolha o tipo de caso correto: **“WhatsApp Business: API de Pagamentos para Empresas”** para que a resolução seja mais rápida._-   [Cadastre-se para o horário de funcionamento⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Foutlook.office365.com%2Fowa%2Fcalendar%2FWhatsappBusinessPaymentsIndiaOfficeHourse%40meta.com%2Fbookings%2F&h=AT7kRUBCGViKonHnHxv5gHkgFHfVNzWDAUWDz6_RBG-Lql0n--7KFpLGe-6ShNKV1N6AHv7yF1IxcodY-nYzB1k4Gp7Vg7Jq5JkAp--2nTFv4xKmEZfyZwQ389I1UrLzyB5-MDFf_NKcnTu97fCGke0IJsw). _Anote seus problemas no formulário fornecido_

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)