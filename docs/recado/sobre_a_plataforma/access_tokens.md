<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens -->
<!-- Scraped: 2026-01-24T00:25:33.004Z -->

# Tokens de acesso

Updated: 20 de nov de 2025

A plataforma é compatível com os tipos de token de acesso a seguir. O tipo de token depende de quem usará seu app e se você é ou não um [parceiro de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview).

-   Caso você seja um **desenvolvedor direto**, ou seja, somente você ou sua empresa acessarão os respectivos dados, use um [token de acesso de usuário do sistema](#system-user-access-tokens).-   Caso você seja um **provedor de tecnologia**, use um [token de acesso de usuário do sistema de integração comercial](#business-integration-system-user-access-tokens).-   Caso você seja um **parceiro de soluções**, use [tokens de acesso de usuário do sistema](#system-user-access-tokens) para compartilhar sua linha de crédito com clientes recém-integrados e [tokens de acesso de usuário do sistema de integração comercial](#business-integration-system-user-access-tokens) para o restante.

## Tokens de acesso de usuário do sistema

Os tokens de acesso de usuário do sistema ("tokens do sistema") representam você, sua empresa ou organização ou pessoas dentro da sua empresa ou organização. A principal vantagem desses tokens é que eles têm longa duração e podem representar serviços automatizados dentro da sua empresa que não exigem nenhuma entrada do usuário.

Os tokens do sistema dependem dos usuários do sistema. A maioria dos pontos de extremidade verifica se o usuário identificado pelo token tem acesso ao recurso consultado. Caso o usuário não tenha acesso ao recurso, o pedido será rejeitado com o código de erro `200`.

Os usuários do sistema podem ser [administradores](#admin-system-users) ou [funcionários](#employee-system-users).

### Usuários do sistema com função administrativa

Por padrão, os usuários do sistema com função administrativa têm acesso total a todas as WABAs e aos respectivos ativos que sejam pertencentes ou compartilhados com você ou seu portfólio empresarial.

Esses usuários serão úteis se o app precisar de acesso a todos os ativos do portfólio empresarial, sem precisar conceder manualmente o acesso a cada ativo de negócios que for criado ou compartilhado com seu portfólio.

É possível substituir o acesso padrão aos ativos de negócios de um usuário do sistema com função administrativa concedendo acesso parcial a WABAs. Consulte [Acesso aos ativos de negócios](#business-asset-access) para saber como configurar e substituir acessos.

### Usuários do sistema para funcionários

Os usuários do sistema para funcionários devem ter acesso a WABAs individuais pertencentes ou compartilhadas com seu portfólio empresarial. Se o app precisar acessar apenas algumas WABAs que pertencem a você, um usuário do sistema para funcionários deverá ser suficiente.

Depois de criado, conceda [acessos aos ativos de negócios](#business-asset-access) no nível **parcial** ou **total** a cada WABA que o usuário do sistema precisar acessar.

### Como gerar tokens de acesso de usuário do sistema

Para gerar um token do sistema, acesse o painel [**Configurações do negócio**](https://business.facebook.com/settings/) e clique em **Usuários do sistema**:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/465045103_469826065488878_468932947489962332_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=nva_-rjLLMoQ7kNvwHcnIub&_nc_oc=AdlLFExsG_Mpfyk9oC0ECPpcyesinC6qENV8_dc8z0Pe8igYmC3rhIvfCKRnJieNidg&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=q_z0shgw4QkKLtLsMZ0-aA&oh=00_AfoJJqerk2848fjSNZd50sf44U9YTPmhBSo0iNEVawcO0A&oe=698E4ABE)

Clique no botão **+Adicionar**. Na janela **Criar usuário do sistema**, digite o nome do usuário do sistema e atribua a ele a função **Administrador** ou **Funcionário**:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465150702_510049308508353_7881035250572985544_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=5_szq47GTjgQ7kNvwEF6yp6&_nc_oc=AdkGc9qyS3K3s6wItf1AbezTMqLSKnWBu480-B8gkkVn7ynz4GtxXCclwCzDgw_eqj8&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=q_z0shgw4QkKLtLsMZ0-aA&oh=00_AfoQKajJZ6G0misvY6lBnfxJDFRrBb24QJMwaq6czTBblA&oe=698E514E)

Depois de criado, o usuário do sistema administrador aparecerá na lista de usuários do sistema. Clique no nome do usuário do sistema para exibir a sobreposição de atribuição de ativos:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465056956_862633796067178_7287331611550335065_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=4nrZQKWCv2IQ7kNvwElO54z&_nc_oc=Adn0oan8C6WUpUsAsXgynvuOG54HKzMlXBGHuGv-ubHbr25cFDPLCkjelyjjnNAfhOY&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=q_z0shgw4QkKLtLsMZ0-aA&oh=00_Afp8G5bV6At5qHZrbcE5_wPKEqnZOBHSqnsNN5eQn1CB-A&oe=698E59D6)

Clique no botão **Atribuir ativos** para exibir a janela **Selecionar ativos e atribuir permissões**:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465238023_523683013888319_4402098107854849013_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=fj3Pxsoiw-4Q7kNvwEJVu1W&_nc_oc=AdnEfPEGyVOWtUDNuCsbzLU-DcEUrKUw2DaVnB_MAaBJWzLzOx9xPOLHI4fOeDVEVz0&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=q_z0shgw4QkKLtLsMZ0-aA&oh=00_AfrrgQ1qYzgsF1-U2gvxPyO2c4N6IrM2hKcbNFDA47K-NQ&oe=698E6AFF)

Selecione seu app e conceda ao usuário do sistema a permissão **Gerenciar app**. Depois, clique no botão **Atribuir ativos** para confirmar e dispensar a janela.

De volta ao painel **Usuários do sistema**, recarregue a página para confirmar que foi concedido **Controle total** do app ao seu usuário do sistema. Pode demorar alguns minutos até que as permissões sejam concedidas. Por isso, caso seu app não apareça como um ativo atribuído, recarregue a página após alguns minutos. Depois que o ativo for atribuído, o menu terá esta aparência:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465048557_1084025226566535_5772232306997286547_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=uk2n05vHEG8Q7kNvwEWl0Cy&_nc_oc=Adk42oyJeLOkMetM4Mr8J01u9o7BXKCo-qVeQJeVIolf8-6sRX0wceklAW91lTtUOeg&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=q_z0shgw4QkKLtLsMZ0-aA&oh=00_AfrI7yZJD7TnFHnHmnQcbre2GJLWd-CWyYMHRh0lD-7gGA&oe=698E6058)

Quando constatar que foi concedido o controle total do app ao usuário do sistema, clique no botão **Gerar token** na sobreposição de atribuição de ativo. Na janela que for exibida, selecione seu app, escolha uma preferência para expiração do token e atribua ao app estas três permissões da Graph API:

-   `business_management`-   `whatsapp_business_management`-   `whatsapp_business_messaging`

Você pode pesquisar o termo "empresas" para encontrar essas permissões rapidamente:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/465115001_533379429601225_2797461055613545929_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=tXjnNGWEbtMQ7kNvwEgr5mD&_nc_oc=Adkmo3UVyxz9mZ3eDD2cdgGV_CxRm3ejbn4BUo3AGrWDpcnxBE1o49EPz2DdE1AeaCQ&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=q_z0shgw4QkKLtLsMZ0-aA&oh=00_Afrpd2l3kEsbCq9Y7PMONB_Pamus94UUuSd8KqrL1rlCpw&oe=698E3ED9)

Clique no botão **Gerar token** e copie o token que for exibido.

## Tokens de acesso do usuário do sistema de integração comercial

Os tokens de acesso de usuário do sistema de integração comercial ("tokens comerciais") têm como escopo clientes individuais e devem ser usados por Provedores de Tecnologia e parceiros de soluções ao acessar dados de clientes integrados.

Esses tokens são úteis para apps que realizam ações programáticas e automatizadas nas WABAs dos clientes, sem precisar depender da entrada de um usuário do app nem exigir uma nova autenticação no futuro.

Para gerar tokens de acesso de usuário do sistema de integração comercial, será preciso implementar o Cadastro Incorporado (configurado com o Login do Facebook para Empresas) e trocar o código retornado a você quando um cliente concluir o flow.

Consulte os documentos sobre [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) e [tokens de acesso de usuário do sistema de integração comercial](/docs/facebook-login/facebook-login-for-business#business-integration-system-user-access-tokens) para saber mais sobre esses tokens e entender como eles são gerados.

## Tokens de acesso do usuário

Embora os tokens de acesso do usuário sejam compatíveis e possam ser usados por todos os desenvolvedores de apps, você provavelmente vai usá-los apenas quando acessar o Painel de Apps pela primeira vez para [enviar sua primeira mensagem](/documentation/business-messaging/whatsapp/get-started). No entanto, ao desenvolver seu app, a tendência é que você mude para um token de acesso de usuário do sistema (e, posteriormente, para um token de acesso de usuário do sistema de integração comercial, caso você seja um provedor de tecnologia ou parceiro de soluções). Isso ocorre porque os tokens de acesso do usuário expiram rapidamente, o que significa que você terá que gerar um novo em intervalos de poucas horas.

Existem várias maneiras de gerar um token de acesso do usuário:

-   Acesse **Painel de Apps** > **WhatsApp** > **Configuração da API**. Esse painel gera um novo token de acesso do usuário sempre que você o visita. O token tem escopo automático para seu usuário, já que você fez login com sua conta de desenvolvedor ao acessar o painel.-   Use o [Explorador da Graph API](/tools/explorer).-   Implemente o [Login do Facebook](/docs/facebook-login).

## Como usar tokens em solicitações

Ao fazer solicitações de API, inclua o token no cabeçalho da solicitação de autorização, antecedido por `Bearer`. Por exemplo:

```
curl 'https://graph.facebook.com/v18.0/102290129340398/message_templates' \-H 'Authorization: Bearer EAAJB...' \
```

## Acesso aos ativos de negócios

Depois de criar um usuário do sistema, você precisa definir os níveis de acesso aos ativos de negócios. Muitos pontos de extremidade exigem que o usuário do sistema com o token incluído nas solicitações de API tenha acesso **parcial** ou **total** aos ativos de negócios da WABA consultada (ou aos ativos relacionados). Caso não tenha acesso, os pontos de extremidade retornarão o código de erro `200`.

Lembre-se de que, ao definir o acesso aos ativos de negócios de um usuário do sistema em uma WABA como **parcial**, você poderá restringir ainda mais o acesso a determinados ativos ou ações na conta em questão. Por exemplo, se você tem uma empresa grande e quer que um departamento específico tenha apenas acesso de leitura ao modelo de uma WABA e aos dados do número de telefone comercial, crie um usuário do sistema para esse departamento e defina o acesso detalhado para somente visualização.

Para definir o acesso a ativos de negócios em uma WABA:

-   Entre no [Meta Business Suite](https://business.facebook.com).-   Encontre o portfólio empresarial no menu suspenso exibido no canto superior esquerdo. Depois, clique em **Configurações** (ícone de engrenagem).-   Navegue até **Contas** > **Contas do WhatsApp**.-   Selecione a WABA desejada.-   Selecione a aba **Acesso à conta do WhatsApp**.-   Clique no botão **Adicionar pessoas**.-   Selecione o usuário do sistema apropriado e atribua os níveis de acesso adequados na WABA.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/458274092_845026414442989_6944264004016403962_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=n61VK6bJOdUQ7kNvwGd6kJZ&_nc_oc=AdnK7bg-E4OBbCuo6dtK-BB9GBFfjTW0Awi1VOH3cYNPJtLHzuOKNAewvmTeudjURzs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=q_z0shgw4QkKLtLsMZ0-aA&oh=00_Afrjh50EvO-j_KodDnq_qZRdxJd-PU0PHPYRkNs84iFAPg&oe=698E5D2E)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)