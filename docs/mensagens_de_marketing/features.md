<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/features -->
<!-- Scraped: 2026-03-10T21:45:39.563Z -->

# Recursos

Updated: 10 de fev de 2026

A API de Mensagens de Marketing para o WhatsApp (anteriormente conhecida como API de Mensagens de Marketing Lite) agora está disponível para todos.

A API de Mensagens de Marketing para o WhatsApp oferece recursos adicionais que não estão disponíveis na API de Nuvem, como referências de desempenho e recomendações, tempo de vida útil e otimizações de criativos automatizadas (em fase de testes).

Para saber mais, confira a tabela comparativa abaixo.

## Recursos de otimização

Descrição

API de Mensagens de Marketing para o WhatsApp (compatível com mensagens de marketing)

API de Nuvem (compatível com mensagens de autenticação, utilidade, serviço e marketing)

**Entrega baseada em qualidade:** melhoramos as entregas de mensagens de alto engajamento.

**Sim:** a API de Mensagens de Marketing para o WhatsApp leva em consideração o alto engajamento de uma mensagem nas decisões de entrega, oferecendo até 9% mais entregas em comparação com a API de Nuvem (consulte o rodapé abaixo). As mensagens de marketing de alto engajamento são esperadas pelos usuários, relevantes e em tempo hábil. Por isso, é mais provável que sejam lidas e que os usuários cliquem nelas.

**Não:** a qualidade da mensagem não é considerada nos limites de mensagens de marketing por usuário. Não permite o aumento na entrega de mensagens de alto engajamento.

**Otimizações automatizadas de criativos:** aprimoramentos automáticos no criativo para melhorar o desempenho das mensagens.

**Sim (piloto):** aprimore automaticamente o apelo visual e o engajamento das mensagens de modelo de marketing. Consulte uma lista com todas as funcionalidades [neste link](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#automatic-creative-optimizations).

**Não**

## Formatos de mensagens de marketing

Descrição

API de Mensagens de Marketing para o WhatsApp (compatível com mensagens de marketing)

API de Nuvem (compatível com mensagens de autenticação, utilidade, serviço e marketing)

**Cabeçalho com imagem animada (GIF):** os modelos de mensagens de marketing são compatíveis com o [tipo de mídia GIF no cabeçalho](/documentation/business-messaging/whatsapp/templates/components#media-headers).

**Sim**

**Não**

**Deep links de apps no Android:**[links](/documentation/business-messaging/whatsapp/marketing-messages/deep-links) que abrem o app diretamente no smartphone do cliente.

**Sim**

**Não**

**Períodos de validade personalizados para mensagens:** defina um [tempo de vida para mensagens](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#create-marketing-templates) que devem expirar se não puderem ser entregues em tempo hábil.

**Sim:** o TTL pode variar de 12 horas a 30 dias.

**Limitado:** é compatível apenas com mensagens de autenticação e utilidade.

**Formatos básicos de mensagens de marketing:**[mídia, carrossel, catálogo de produtos, flow, lista interativa, resposta interativa, entre outros.](/documentation/business-messaging/whatsapp/templates/marketing-templates)

**Sim**

**Sim**

## Orientações

Descrição

API de Mensagens de Marketing para o WhatsApp (compatível com mensagens de marketing)

API de Nuvem (compatível com mensagens de autenticação, utilidade, serviço e marketing)

**Referências:** a comparação das taxas de leitura e de cliques em relação a modelos semelhantes de empresas na sua região.

**Sim**

**Não**

**Recomendações:** recomendações baseadas em evidência para melhorar o desempenho do seu modelo.

**Sim**

**Não**

## Métricas

Descrição

API de Mensagens de Marketing para o WhatsApp (compatível com mensagens de marketing)

API de Nuvem (compatível com mensagens de autenticação, utilidade, serviço e marketing)

**Métricas de conversão:** conversões na web e no app.

**Sim:** mensure as [mensagens de marketing](/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion#measure-app-conversions-with-meta-sdk-or-app-events-api) que levam os usuários a realizar eventos no app, como "Adição ao carrinho", "Finalização da compra iniciada" e "Compra"'.

**Não**

**Métricas de custo:**[gasto por modelo, custo por clique, custo por entrega.](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics)

**Sim**

**Sim**

**Métricas básicas:**[envio, entrega, leitura, clique e erros.](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics)

**Sim**

**Sim**

## Recursos corporativos, de segurança 5 e conformidade

Descrição

API de Mensagens de Marketing para o WhatsApp (compatível com mensagens de marketing)

API de Nuvem (compatível com mensagens de autenticação, utilidade, serviço e marketing)

**Compatibilidade com armazenamento local:** números de telefone com [armazenamento local habilitado.](/documentation/business-messaging/whatsapp/local-storage)

**Sim**

**Sim**

**Certificação de conformidade:** confira os recursos de conformidade disponíveis na [Central de Conformidade para Business Messaging⁠](https://www.facebook.com/business/business-messaging/compliance).

**Sim:** certificação para LGPD, RGPD, relatório de auditoria do sistema, SOC e ISO27001.

**Sim:** certificação para LGPD, RGPD, relatório de auditoria do sistema, SOC e ISO27001.

**Atualizações automáticas da taxa de transferência:** atualizações automáticas (e notificações de webhook) para a [taxa de transferência de mensagens](/documentation/business-messaging/whatsapp/throughput) de um número de telefone.

**Sim**

**Sim**

**Atualizações de status do serviço em tempo real:** as [métricas de disponibilidade e tempo de atividade](/documentation/business-messaging/whatsapp/support/api-status-page) estão disponíveis em [metastatus.com⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api%3Ffbclid%3DIwY2xjawM2uLNleHRuA2FlbQIxMQBicmlkETFPWE5PUldSeE95a2tuMnA1AR4r-Af63nidsmVRDdEJ4WtriGpxdlenOA60_uzhuqXHr06lE0-d2S9pnJm_Ww_aem_WtrDEZEwN2EZflsD4vmusQ&h=AT652Be3xi0RrToSgzRGknoFsZqrY7Y4NSx6I9SsSX8K5UyRLmg9H2t0QORpnAzsAQwHjMtBM_uUgzqhzvMDhhsAEYaCc779EJYK68NHLYM4feJDsdyMmTsxWKJZ-zmZgbpWYDN2Wb0m4PWENJpXovUEJJs).

**Sim**

**Sim**

## Integração

Descrição

API de Mensagens de Marketing para o WhatsApp (compatível com mensagens de marketing)

API de Nuvem (compatível com mensagens de autenticação, utilidade, serviço e marketing)

**Integração otimizada:**[faça a integração via Cadastro Incorporado, API de Intenção e Interface do usuário de intenção](/documentation/business-messaging/whatsapp/marketing-messages/onboarding).

**Sim**

**Limitado:** apenas Cadastro Incorporado.

**Códigos de erro:**[códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes#marketing-messages-api-for-whatsapp-error-codes) da Graph API.

**Sim:**[Códigos de erro específicos da API de Mensagens de Marketing para o WhatsApp](/documentation/business-messaging/whatsapp/support/error-codes#marketing-messages-api-for-whatsapp-error-codes).

**Sim**

**Status de integração via API:**[dados detalhados de status de qualificação e códigos de erro](/documentation/business-messaging/whatsapp/marketing-messages/changelog#july-15--2025).

**Sim:** lançamos um [novo campo de status de qualificação](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#eligibility-requirements) para informar o status de integração da API.

**Limitado**

**Coexistência:**[integração de usuários do app WhatsApp Business.](/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers#onboard-whatsapp-business-app-users--aka--coexistence--)

**Sim**

**Sim**

## Nota de rodapé

O teste A/B foi conduzido com cerca de 12 milhões de mensagens de marketing entregues, enviadas por anunciantes na Índia, entre 1º de janeiro de 2025 e 31 de janeiro de 2025. O estudo comparou a entrega otimizada da API de Mensagens de Marketing para o WhatsApp com a entrega padrão da API de Nuvem apenas entre mensagens de alto engajamento (ou seja, mais leituras, cliques e assim por diante). A análise consistiu em um teste t com 95% de confiança.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)