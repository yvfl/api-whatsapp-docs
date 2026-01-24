<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/obo-model-deprecation -->
<!-- Scraped: 2026-01-24T00:58:19.225Z -->

# Descontinuação do modelo de propriedade da conta "Em nome de"

Updated: 14 de nov de 2025

Tornamos obsoleto o modelo de propriedade de conta "em nome de" (OBO, pelas iniciais em inglês) e o substituímos pela [criação de WABA iniciada pelo parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation). Todas as WABAs existentes criadas de acordo com o modelo OBO deverão ser transferidas para os clientes comerciais até 1º de outubro de 2025. A partir de 1º de outubro de 2025, todas as contas OBO qualificadas serão migradas automaticamente em lotes até o final de outubro de 2025.

## Linha do tempo de descontinuação

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/485146176_691212949947759_244674574159890376_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=oo3-8jkKjl0Q7kNvwHSrl07&_nc_oc=Admmgi7idWAtcjHcD9TA43MODb0U0QjQDCHf2RwuesG9hGF7_tIgeqj7qku-WNz1FjE&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=V4R-afnRTAmr2ga-BKdACg&oh=00_Afr9OG196NIFCeAHfltAzge3I3M1olDxQ-kS4WGqvtX8ew&oe=698E7182)

-   **24 de março de 2025**: a [criação de WABA iniciada pelo parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation) será disponibilizada para todos os provedores de soluções.-   **29 de setembro de 2025**: último dia para integrar clientes empresariais ao modelo OBO.-   **1º de outubro de 2025**: último dia para transferir a propriedade das WABAs do modelo OBO para clientes empresariais.

## Formas de pagamento

A criação de WABAs iniciada pelo parceiro não é compatível com a configuração automática de pagamento. Em vez disso, você deve compartilhar sua linha de crédito com o cliente empresarial por meio da API. Consulte [Criação da WABA iniciada pelo parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation) para saber mais.

## Soluções multiparceiros

Os clientes comerciais não podem ser integrados a uma solução multiparceiros como parte do processo de criação da WABA iniciado pelo parceiro, mas podem ser adicionados a uma MPS depois. Consulte [Criação da WABA iniciada pelo parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation) para saber mais.

## API de Mensagens de Marketing Lite

As WABAs existentes que usam esse modelo precisarão ser transferidas para clientes empresariais se você quiser usá-las com a API de Mensagens de Marketing Lite. Isso pode ser feito como parte do [processo de integração da API de MM Lite](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#onboard-via-a-partner-using-whatsapp-manager).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)