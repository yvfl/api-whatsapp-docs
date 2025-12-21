<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4 -->
<!-- Scraped: 2025-12-20T17:50:23.678Z -->

# Versão 4

Updated: 17 de nov de 2025

**A versão 4 habilita o seguinte:**

-   Experiência de integração do Cadastro Incorporado simplificada ([ver capturas de tela](/documentation/business-messaging/whatsapp/embedded-signup/default-flow)).-   Adiciona suporte para a integração em vários produtos de mensagens da empresa ao mesmo tempo (API de Nuvem, API de Mensagens de Marketing Lite, API de Conversões para WhatsApp e anúncios de clique para o WhatsApp).

**Para habilitar a experiência da versão 4:** você precisa atualizar a configuração de login (ou criar uma nova) e selecionar os produtos desejados. Quando você seleciona um produto, a versão 4 é definida automaticamente. Veja as capturas de tela abaixo.

**Data de lançamento:** a versão 4 foi lançada em 8 de outubro de 2025 para todos os parceiros adotarem e incluirá as alterações a seguir. **Volte em breve para ver atualizações sobre outras APIs compatíveis.**

## A configuração do Login do Facebook agora gera o Cadastro Incorporado v4

A principal diferença entre a versão 3 e a versão 4 é que a configuração do Login do Facebook na versão 4 permite que os clientes integrem produtos, ativos e permissões adicionais por meio de um fluxo unificado. A nova abordagem implementa um fluxo unificado para a integração em várias APIs de mensagens da empresa da Meta, simplificando o processo com menos etapas e telas. Essa plataforma de integração unificada permite que as empresas configurem e gerenciem todas as APIs da Plataforma do WhatsApp Business em um único lugar, facilitando a adição de novas tecnologias ao aproveitar o fluxo de integração do Cadastro Incorporado existente.

-   A proposta de valor e os Termos de Serviço são claramente apresentados.-   A seleção de ativos, as informações da empresa e as permissões são consolidadas em uma única página.-   Os administradores de ativos podem compartilhar ativos de outros portfólios empresariais.-   Os números de telefone são automaticamente vinculados às Páginas do Facebook durante a integração de anúncios de clique para o WhatsApp por meio da API de Marketing.-   Os desenvolvedores podem selecionar as APIs desejadas na ferramenta de configuração, e o fluxo de Cadastro Incorporado será configurado de acordo.

## Outros produtos de mensagens comerciais compatíveis

O fluxo de integração unificado agora é compatível com produtos adicionais de mensagens da empresa, garantindo que as empresas possam configurar e gerenciar vários canais de comunicação em uma única plataforma. Os produtos compatíveis incluem o seguinte. Esses parâmetros são configurados e selecionados na sua configuração de login (veja as capturas de tela abaixo).

-   **API em Nuvem do WhatsApp**: uma plataforma de mensagens que permite que empresas enviem e recebam mensagens de clientes.-   **API de Mensagens de Marketing Lite**: uma plataforma de mensagens que permite que empresas enviem e recebam mensagens de clientes-   **Anúncios de clique para o WhatsApp (CTWA)**: crie anúncios que direcionem os usuários para iniciar conversas no WhatsApp com a sua empresa.-   **API de Conversões (WhatsApp)**: rastreie e otimize as interações de mensagens selecionando a plataforma de mensagens que você deseja monitorar, habilitando a mensuração e a otimização avançadas.

## Agora, ativos e permissões são necessários após a configuração

Na versão 4, você pode selecionar produtos em [**Painel de Apps**](/apps) > **Login do Facebook para Empresas** > **Configurações**. Ao selecionar produtos para o Cadastro Incorporado, o fluxo selecionará automaticamente todas as permissões e ativos necessários. Você precisará de acesso avançado para todas as permissões selecionadas automaticamente no fluxo. Se necessário, você poderá selecionar ativos e permissões adicionais.

Produto

Ativos obrigatórios

Permissões necessárias (Advanced Access)

[API de Nuvem](/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api)

Contas do WhatsApp Business

whatsapp\_business\_management

whatsapp\_business\_messaging

[Integrar usuários do app WhatsApp Business (também conhecido como "Coexistence")](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users)

Contas do WhatsApp Business

whatsapp\_business\_management

whatsapp\_business\_messaging

[Clique para o WhatsApp (CTWA na API de Marketing)](/docs/marketing-api/ad-creative/messaging-ads/click-to-whatsapp)

Contas do WhatsApp Business

Páginas do Facebook

Contas de anúncios

ads\_read

ads\_management

pages\_manage\_ads

pages\_read\_engagement

pages\_show\_list

[API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview)

Contas do WhatsApp Business

whatsapp\_business\_management

whatsapp\_business\_messaging

[API de Conversões para anúncios de clique para o WhatsApp](/docs/marketing-api/conversions-api/business-messaging#ads-that-click-to-whatsapp)

Contas do WhatsApp Business

Pixels

whatsapp\_business\_manage\_events

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)