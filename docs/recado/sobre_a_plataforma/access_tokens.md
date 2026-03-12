<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens -->
<!-- Scraped: 2026-03-10T21:35:47.004Z -->

# Guia de tokens de acesso

Updated: 1 de mar de 2026

A plataforma é compatível com os tipos de token de acesso a seguir. O tipo de token depende de quem usará seu app e se você é um [parceiro de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview).

-   Caso você seja um **desenvolvedor direto**, ou seja, se somente você ou sua empresa acessarão os respectivos dados, use um [token de acesso de usuário do sistema](#system-user-access-tokens).-   Caso você seja um **provedor de tecnologia**, use um [token de acesso de usuário do sistema de integração comercial](#business-integration-system-user-access-tokens).-   Caso você seja um **parceiro de soluções**, use [tokens de acesso de usuário do sistema](#system-user-access-tokens) para compartilhar sua linha de crédito com clientes recém-integrados e [tokens de acesso de usuário do sistema de integração comercial](#business-integration-system-user-access-tokens) para o restante.

## Tokens de acesso de usuário do sistema

Os tokens de acesso do usuário do sistema (“tokens do sistema”) representam você, sua empresa, organização ou pessoas dentro delas. A principal vantagem desses tokens é que eles têm longa duração e podem representar serviços automatizados dentro da sua empresa que não exigem nenhuma entrada do usuário.

Os tokens do sistema dependem dos usuários do sistema. A maioria dos pontos de extremidade verifica se o usuário identificado pelo token tem acesso ao recurso consultado. Caso o usuário não tenha acesso ao recurso, o o sistema rejeita o pedido com o código de erro `200`.

Os usuários do sistema podem ser [administradores](#admin-system-users) ou [funcionários](#employee-system-users).

### Usuários do sistema com função administrativa

Por padrão, os usuários do sistema com função administrativa têm acesso total a todas as contas do WhatsApp Business (WABAs) e aos respectivos ativos que sejam pertencentes ou compartilhados com você ou seu portfólio empresarial.

Esses usuários serão úteis se o app precisar de acesso a todos os ativos do portfólio empresarial, sem precisar conceder manualmente o acesso a cada ativo de negócios que for criado ou compartilhado com seu portfólio.

É possível substituir o acesso padrão aos ativos de negócios de um usuário do sistema com função administrativa concedendo acesso parcial a WABAs. Consulte [Acesso aos ativos de negócios](#business-asset-access) para saber como configurar e substituir acessos.

### Usuários do sistema para funcionários

Os usuários do sistema para funcionários devem ter acesso a WABAs individuais pertencentes ou compartilhadas com seu portfólio empresarial. Se o app precisar acessar apenas algumas WABAs que pertencem a você, um usuário do sistema para funcionários deverá ser suficiente.

Depois de criado, conceda [acessos aos ativos de negócios](#business-asset-access) no nível **parcial** ou **total** a cada WABA que o usuário do sistema precisar acessar.

### Como gerar tokens de acesso de usuário do sistema

Para gerar um token do sistema, acesse o painel [**Configurações da empresa**⁠](https://business.facebook.com/settings/) e clique em **Usuários do sistema**:

![Business settings panel showing System Users option](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/465045103_469826065488878_468932947489962332_n.png?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=MpVNKdP1TjcQ7kNvwEoVGRi&_nc_oc=Adly8h6mGhEaqb5GEjhrepuXQeeItz8Ej7-c27fcKVoEic5yv-lEV5-uMLXG_PmBRkc&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=ltLXVVBdb89DBHDFf6herg&_nc_ss=8&oh=00_AfzgnAMQBq-OzWGrr28VrUnduTCvYRRl88beWTBTbd0oCQ&oe=69CAB77E)

Clique no botão **+Adicionar**. Na janela **Criar usuário do sistema**, digite o nome do usuário do sistema e atribua a ele a função **Administrador** ou **Funcionário**:

![Create system user dialog with name field and role selector](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465150702_510049308508353_7881035250572985544_n.png?stp=dst-webp&_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=NMZleIzm4DUQ7kNvwHuw6FT&_nc_oc=AdkoXbUIpVn3octcULi47zWI9jCktQvViOD9TzE0vrv9Uowqp60wCLTBPEKLeajxN-k&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ltLXVVBdb89DBHDFf6herg&_nc_ss=8&oh=00_AfwyDHDIpNzXam6Q00BB0KbpdZDaOmyAyS4E2Ez6erZ_8A&oe=69CABE0E)

Depois de criado, o usuário do sistema administrador aparecerá na lista de usuários do sistema. Clique no nome do usuário do sistema para exibir a sobreposição de atribuição de ativos:

![System users list showing asset assignment overlay](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465056956_862633796067178_7287331611550335065_n.png?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=skD1MyrB5LAQ7kNvwGOwIfr&_nc_oc=AdklSo8yyQWoI_AwuUF-55TSG1Ii7-1Bh3zrChwTKi31G_aFTEgtGP84v8OZg5ahi6o&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ltLXVVBdb89DBHDFf6herg&_nc_ss=8&oh=00_AfyfZ7masFPPqWk-mIxf6xfAOw0oBZGIDsQauHfKFX8CIA&oe=69CAC696)

Clique no botão **Atribuir ativos** para exibir a janela **Selecionar ativos e atribuir permissões**:

![Select assets and assign permissions dialog](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465238023_523683013888319_4402098107854849013_n.png?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=eTlkpTqMbc4Q7kNvwGQI10Y&_nc_oc=Adn2wwwIFrWQ04dyyqC6_AyK_u0v6FM_IvC3x0xBtFdGxbWMv4byo83rh1KAOIrcit4&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ltLXVVBdb89DBHDFf6herg&_nc_ss=8&oh=00_Afz52gY1wVkGU1ogDq6o3a_YdJGbMiSMVrwaLIiUhrnRJw&oe=69CAD7BF)

Selecione seu app e conceda ao usuário do sistema a permissão **Gerenciar app**. Depois, clique no botão **Atribuir ativos** para confirmar e dispensar a janela.

De volta ao painel **Usuários do sistema**, recarregue a página para confirmar que foi concedido **Controle total** do app ao seu usuário do sistema. Pode demorar alguns minutos até que as permissões sejam concedidas. Por isso, caso seu app não apareça como um ativo atribuído, recarregue a página após alguns minutos. Depois que o ativo for atribuído, o menu terá esta aparência:

![System user with full control of app displayed](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465048557_1084025226566535_5772232306997286547_n.png?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=w2x5gzv4W7gQ7kNvwEw3IaM&_nc_oc=AdkCCdv0HBzwpLV2UK3gqcka_xMgdPa2h6raGDvOOEYiERXTHBY1dZqQwdHIRCy0Giw&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ltLXVVBdb89DBHDFf6herg&_nc_ss=8&oh=00_AfyN2mlLqbMsckjsX0lO9jfj0VcxeNljRpBkK4CYGSd86g&oe=69CACD18)

Quando constatar que foi concedido o controle total do app ao usuário do sistema, clique no botão **Gerar token** na sobreposição de atribuição de ativo. Na janela que for exibida, selecione seu app, escolha uma preferência para expiração do token e atribua ao app estas três permissões da Graph API:

-   `business_management`-   `whatsapp_business_management`-   `whatsapp_business_messaging`

Você pode pesquisar o termo `business` para encontrar essas permissões rapidamente:

![Token generation dialog showing business permissions search](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/465115001_533379429601225_2797461055613545929_n.png?stp=dst-webp&_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=iEhZ-tiRO9UQ7kNvwENSooP&_nc_oc=AdmtaotMlrcmoyV-7ZTxsD4mKEIEjkUo6OP403zSMiq9D4wbriYoGu_mxw-qc8wolGk&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=ltLXVVBdb89DBHDFf6herg&_nc_ss=8&oh=00_AfyFnceXeTS6Z8iCeIwyl0c14KDvASlalKek_tvHAXgU7Q&oe=69CAE3D9)

Clique no botão **Gerar token** e copie o token que for exibido.

## Tokens de acesso do usuário do sistema de integração comercial

Os tokens de acesso de usuário do sistema de integração comercial ("tokens comerciais") têm como escopo clientes individuais e devem ser usados por Provedores de Tecnologia e parceiros de soluções ao acessar dados de clientes integrados.

Esses tokens são úteis para apps que realizam ações programáticas e automatizadas nas WABAs dos clientes, sem precisar depender da entrada de um usuário do app nem exigir uma nova autenticação no futuro.

Para gerar um token de acesso de usuário do sistema de integração comercial, será preciso implementar o Cadastro Incorporado (configurado com o Login do Facebook para Empresas) e trocar o código retornado a você quando um cliente concluir o flow.

Consulte os documentos sobre [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) e [tokens de acesso de usuário do sistema de integração comercial](/docs/facebook-login/facebook-login-for-business#business-integration-system-user-access-tokens) para saber mais sobre esses tokens e como gerá-los.

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

Ao definir o acesso aos ativos de negócios de um usuário do sistema em uma WABA como **parcial**, você poderá restringir ainda mais o acesso a determinados ativos ou ações na conta em questão. Por exemplo, se você tem uma empresa grande e quer que um departamento específico tenha apenas acesso de leitura ao modelo de uma WABA e aos dados do número de telefone comercial, crie um usuário do sistema para esse departamento e defina o acesso detalhado para somente visualização.

Para configurar o acesso a ativos de negócios em uma WABA, siga estas etapas:

-   Entre no [Meta Business Suite⁠](https://business.facebook.com).-   Encontre o portfólio empresarial no menu suspenso exibido na parte superior da página. Depois, clique em **Configurações** (ícone de engrenagem).-   Navegue até **Contas** > **Contas do WhatsApp**.-   Selecione a WABA desejada.-   Selecione a aba **Acesso à conta do WhatsApp**.-   Clique no botão **Adicionar pessoas**.-   Selecione o usuário do sistema apropriado e atribua os níveis de acesso adequados na WABA.

![WhatsApp Account Access tab with Add people button](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/458274092_845026414442989_6944264004016403962_n.png?stp=dst-webp&_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=qWvMXw5ghvEQ7kNvwFXD28c&_nc_oc=AdlQ2vKcyigcojAhySdwTNz62ZxyC6LBsbUcp9xvLInR591p9ypLI73iDvmqBe8GDiE&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=ltLXVVBdb89DBHDFf6herg&_nc_ss=8&oh=00_AfxGzzzzUQbZhmPsNw3QFODE6-DkgJcdrYQdfaHNxmVEKA&oe=69CAC9EE)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)