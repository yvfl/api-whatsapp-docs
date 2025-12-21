<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/overview -->
<!-- Scraped: 2025-12-20T17:44:25.222Z -->

# API de Pagamentos – Índia

Updated: 14 de nov de 2025

A API de Pagamentos permite que as empresas aceitem pagamentos dos clientes por meio de todos os apps UPI instalados no dispositivo, além de outras formas de pagamento, como cartões, NetBanking e carteiras via WhatsApp.

As empresas podem enviar mensagens de fatura (`order_details`) para os clientes e, em seguida, receber notificações sobre atualizações no status de pagamento por meio de webhooks do gateway de pagamento.

## Conhecer as diferenças nos modelos de integração

A escolha entre esses dois modelos de integração depende do Gateway de Pagamento usado pelo comerciante/empresa. Há dois modelos de integração que diferem das seguintes maneiras:

-   **[Modo de intenção da UPI](/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent)**: esse modo pode ser usado com qualquer gateway de pagamento que seja compatível com a geração de intenção da UPI.-   **[Modo de integração profunda do Gateway de Pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg)**: atualmente, compatível apenas com Razorpay, PayU, Billdesk e Zaakpay.

Experiência do usuário

Modo de intenção da UPI

Modo de integração profunda do Gateway de Pagamentos

**Suporte nativo para "Outras formas de pagamento"**

Por exemplo: Netbanking, cartões, carteiras

❌

Alternativa: enviar links de pagamento

✅

**Suporte nativo para a intenção de UPI**

✅

✅

**Notificação de status de pagamento nativo**

❌

✅

Recursos da integração

Modo de intenção da UPI

Modo de integração profunda do Gateway de Pagamentos

**Reembolsos de APIs do WhatsApp**

❌

✅

**Status do pagamento de webhooks do WhatsApp**

❌

✅

## Pré-requisitos para integração

-   **As APIs de Pagamentos essenciais estão disponíveis em SP/TP**-   **Acesso a APIs/CSVs de gatilho de pedido do comerciante** necessárias para acionar um pedido (por exemplo, valor, detalhes de produtos/serviços)-   **Acesso às APIs de publicação de pagamento** necessárias para fechar um pedido (por exemplo, APIs de geração de tíquetes para criar tíquetes assim que o pagamento for recebido)

#### Modo de integração avançada do gateway de pagamento

-   **Descubra quem é o dono da conta do PG**: isso serve para autorizar a vinculação da conta ao Gerenciador de Negócios do WhatsApp.

#### Modo de intenção da UPI

-   **Descubra IDs de VPA, MCC e PC** para empresas a partir do PG do comerciante.-   **Acesso às documentações da API de PG**:-   Ligações S2S de intenção da UPI-   Configuração de webhook para status de pagamento

## Exemplos de casos de uso e recursos necessários

Caso de uso

Conjunto de recursos essenciais

**Comprar ingressos**

Por exemplo: metrô, ônibus, ingressos para eventos

-   Mensagem com detalhes do pedido-   Webhook/API de status do pagamento-   Mensagem de status do pedido-   Reembolso

**Lembretes de pagamento**

Exemplo: pagamentos de faturas, renovações de assinatura, renovações de seguro

-   Modelo de detalhes do pedido-   Webhook/API de status do pagamento-   Mensagem de status do pedido-   Reembolso

## Suporte

-   Caso você encontre algum problema, entre em contato com o [suporte direto](https://business.facebook.com/direct-support/). _Escolha o tipo de caso correto: **“WaBiz: API de pagamentos de negócios”** para que a resolução seja mais rápida._-   [Cadastre-se para o horário de expediente](https://l.facebook.com/l.php?u=https%3A%2F%2Foutlook.office365.com%2Fowa%2Fcalendar%2FWhatsappBusinessPaymentsIndiaOfficeHourse%40meta.com%2Fbookings%2F&h=AT2uEfdgzzYyS93h3_etKiMwvKwvbAbpvATStx9qSc6SvL6A3Q78Lt4gQjGH26awIVJzSZPGMtaczOTo6-Zz72i1XbZacvV9O3iPLxecEu6FiMLbBIN0prRZpWieZiz1mP_iccmzsGaKgD6PIL3ZladanPU). _Anote seus problemas no formulário fornecido_

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)