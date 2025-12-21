<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview -->
<!-- Scraped: 2025-12-20T17:47:18.257Z -->

# Provedores de soluções

Updated: 14 de nov de 2025

Esta documentação contém informações, instruções e recursos para **provedores de soluções**, ou seja, empresas que fornecem ou querem fornecer serviços de mensagens do WhatsApp para outras empresas. Se estiver criando um app que não será usado por outras empresas, consulte o nosso guia [Introdução à API de Nuvem](/documentation/business-messaging/whatsapp/get-started).

Os provedores de soluções são entidades comerciais que implantam soluções de valor agregado como provedores de serviços autorizados do WhatsApp em nome dos seus clientes empresariais. Os provedores de soluções incluem Parceiro de Soluções, Provedores de Tecnologia e Parceiros de Tecnologia.

## Parceiros de soluções

Os Parceiros de Soluções são [Parceiros de Negócios da Meta](https://www.facebook.com/business/marketing-partners/become-a-partner) que fornecem uma variedade de serviços da Plataforma do WhatsApp Business para outras empresas, como serviços de mensagens, cobrança, suporte à integração e suporte ao cliente.

Os Parceiro de Soluções têm [linhas de crédito](https://www.facebook.com/business/help/1684730811624773?id=2129163877102343) que podem ser estendidas aos clientes comerciais que integram, eliminando a necessidade desses clientes inserirem a própria forma de pagamento durante o processo de integração. Além disso, os provedores de soluções podem cobrar diretamente os clientes pelos serviços da Plataforma do WhatsApp Business fornecidos por meio de apps.

Os Parceiro de Soluções também têm acesso ao [Suporte Direto](/documentation/business-messaging/whatsapp/support#enterprise-developer-support) e podem participar do [Programa de Aceleração para PMEs com Parceiros de Negócios da Meta](https://www.facebook.com/business/marketing-partners/mbp-smb-accelerator), que oferece incentivos, certificações e serviços de capacitação, além da possibilidade de entrar no [diretório de parceiros](https://www.facebook.com/business/partner-directory).

O processo para se tornar um Provedor de Soluções é demorado. Por isso, se você não precisar de uma linha de crédito nem de faturar diretamente os clientes comerciais pelo uso da API, considere a opção de se tornar um Provedor de Tecnologia.

Veja [Introdução para Parceiro de Soluções](docs/whatsapp/solution-providers/get-started-for-solution-partners).

## Provedores de Tecnologia

Assim como os Parceiro de Soluções, os Provedores de Tecnologia podem oferecer diversos serviços da Plataforma do WhatsApp Business a outras empresas, seja por conta própria ou por meio de uma [parceria com um Parceiro de Soluções](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) que já oferece esses serviços.

Entretanto, diferentemente dos Provedores de Soluções, os Provedores de Tecnologia não possuem linhas de crédito. Em vez disso, os clientes empresariais integrados por Provedores de Tecnologia precisam fornecer a própria forma de pagamento após a conclusão da integração. A Meta cobrará esses clientes pelo uso da API, e o Provedor de Tecnologia cobrará por outros serviços.

Além disso, os Provedores de Tecnologia não podem participar do Programa Aceleradora de PMEs com Parceiros de Negócios da Metas, a menos que façam um upgrade para a categoria de Parceiro de Tecnologia.

Os Provedores de Tecnologia também não podem participar do [Programa Aceleradora de PMEs com Parceiros de Negócios](https://www.facebook.com/business/marketing-partners/mbp-smb-accelerator) a menos que sejam atualizados para a categoria de Parceiro de Tecnologia. No entanto, os Provedores de Tecnologia têm acesso ao [Suporte Direto](/documentation/business-messaging/whatsapp/support#enterprise-developer-support).

Para saber como se tornar um Provedor de Tecnologia, clique em [Torne-se um Provedor de Tecnologia](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers).

## Parceiros de Tecnologia

Os Parceiros de Tecnologia são Provedores de Tecnologia que são ou se qualificam para se tornar [Parceiros de Negócios da Meta](https://www.facebook.com/business/marketing-partners/become-a-partner). Os Provedores de Tecnologia que se inscreverem para se tornar um Parceiro de Negócios da Meta e forem aprovados estarão qualificados para participar do [Programa Aceleradora de PMEs com Parceiros de Negócios](https://www.facebook.com/business/marketing-partners/mbp-smb-accelerator) e poderão constar no nosso [diretório de parceiros](https://www.facebook.com/business/partner-directory).

Para saber como atualizar para um parceiro de tecnologia, veja [Como atualizar para um Parceiro de Tecnologia](/documentation/business-messaging/whatsapp/solution-providers/upgrade-to-tech-partner).

## Outros parceiros

Se você quer usar o Meta Business Suite apenas para fornecer serviços relacionados de mensagens do WhatsApp a clientes comerciais (ou seja, você **não precisa de acesso à API**), é necessário apenas um portfólio empresarial verificado.

-   Acesse [https://business.facebook.com/](https://business.facebook.com/) e crie um portfólio empresarial ou entre na sua conta do Meta Business Suite, caso já tenha uma.-   Conclua as [etapas de verificação da empresa](https://www.facebook.com/business/help/2058515294227817) descritas no artigo da Central de Ajuda.

Depois que a empresa for verificada, forneça a identificação do portfólio empresarial para os clientes aos quais você quer fornecer serviço e peça que [compartilhem as respectivas contas do WhatsApp Business](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#share-your-waba-with-a-solution-provider) com você. Após o compartilhamento, você poderá usar o Meta Business Suite para acessar a conta e o serviço do provedor.

## Comparação

 

Parceiros de soluções

Provedores de Tecnologia

Parceiros de Tecnologia

Podem oferecer serviços completos da Plataforma do WhatsApp Business para clientes integrados

Sim

Sim

Sim

Tem uma linha de crédito

Sim

Não

Não

O cliente ignora a coleta da forma de pagamento

Sim

Não

Não

Cobra os clientes diretamente pelo uso da API (em vez de a Meta cobrar os clientes pelo uso)

Sim

Não

Não

É um Parceiro de Negócios da Meta

Sim

Não

Sim

Qualifica-se para o programa acelerador

Sim

Não

Sim

Acesso ao Suporte Direto

Sim

Sim

Sim

## Integrar clientes comerciais

Há várias maneiras de integrar clientes comerciais.

### Cadastro Incorporado

O [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) é uma interface de autenticação e autorização escalável que pode ser iniciada diretamente do seu site ou portal do cliente. O Cadastro Incorporado gera automaticamente todos os ativos necessários do WhatsApp para clientes empresariais que concluírem com sucesso o fluxo e autoriza o app a acessar esses ativos.

### Cadastro Incorporado Hospedado

O [Cadastro Incorporado Hospedado](/documentation/business-messaging/whatsapp/embedded-signup/hosted-es) ("CEH", pelas iniciais em inglês) é uma forma alternativa e mais simples de implementar o Cadastro Incorporado sem configurar e hospedar o código de implementação no seu site ou portal.

### Criação de conta iniciada pelo parceiro

Caso você seja um Parceiro de Soluções, poderá [iniciar a criação de contas do WhatsApp Business](/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation) para um cliente empresarial, que poderá usar o Meta Business Suite para aprovar ou recusar a criação.

### Meta Business Suite

Os clientes da sua empresa podem [usar o Meta Business Suite para criar uma conta do WhatsApp Business](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#create-a-waba-via-meta-business-suite) por conta própria e [compartilhá-la com você](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#share-your-waba-with-a-solution-provider).

## Soluções multiparceiros

Com as [soluções multiparceiros](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions), os parceiros de soluções podem gerenciar conjuntamente os ativos dos clientes comerciais integrados para oferecer serviços abrangentes de mensagens do WhatsApp. Por exemplo, se você é um Provedor de Tecnologia, talvez queira criar uma solução multiparceiro com um Parceiro de Soluções que possa compartilhar a própria linha de crédito com clientes empresariais integrados por meio da solução conjunta.

## Tokens de acesso

Se você for um Provedor de Tecnologia ou Parceiro de Tecnologia, use exclusivamente **tokens empresariais**. Caso você seja um Parceiro de Soluções, use um token do sistema apenas ao compartilhar sua linha de crédito com clientes empresariais integrados. Nos outros casos, use tokens empresariais.

### Tokens do sistema

Os tokens do sistema só devem ser usados por Parceiros de Soluções e apenas ao compartilhar linhas de crédito com clientes empresariais integrados. Em todos os outros casos, use um token empresarial.

Os tokens do sistema também são descritos na nossa documentação de API, porque são usados por parceiros que não são de soluções. Veja [Tokens de acesso do usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) para saber como criar um usuário do sistema e um token.

Ao criar o usuário do sistema, além de conceder as permissões e funções necessárias para o app, também conceda a função de **Editor financeiro**:

-   Acesse o [Meta Business Suite](https://business.facebook.com/).-   Encontre o portfólio empresarial no menu suspenso exibido no canto superior esquerdo. Depois, clique em **Configurações** (ícone de engrenagem).-   Clique em **Configurações do negócio**.-   Navegue até **Usuários** > **Usuários do sistema**.-   Edite o usuário e conceda a função de **editor financeiro**.

Isso permitirá que o app use a API para compartilhar sua linha de crédito com os clientes integrados.

### Tokens de empresa

Os [tokens de empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) são tokens de acesso com escopo para clientes empresariais individuais integrados. Use esses tokens ao acessar dados de clientes integrados, como contas do WhatsApp Business, modelos de mensagem e números de telefone comercial, bem como ao enviar e receber mensagens dos seus clientes.

Para receber um token da empresa no escopo de um cliente, é preciso trocar um código retornado para você quando o cliente concluir o fluxo de [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview). Esse processo é descrito na seção "Integração de clientes comerciais" da documentação sobre Cadastro Incorporado.

## Permissões

As [permissões](/documentation/business-messaging/whatsapp/permissions) exigidas pelo seu app de clientes integrados dependem dos serviços que você fornece. As permissões são descritas em termos gerais abaixo, mas são determinadas em grande parte pelos pontos de extremidade que o app consultará.

As permissões mais necessárias são:

-   **whatsapp\_business\_management**: necessária caso seu app precise de acesso às configurações da Conta do WhatsApp Business e aos modelos de mensagens do cliente integrado.-   **whatsapp\_business\_messaging**: necessária caso seu app precise acessar as configurações de número de telefone comercial do cliente integrado, ou se ele for usado pelos clientes para enviar e receber mensagens.

Para que os clientes empresariais possam conceder essas permissões ao seu app, elas precisam ser aprovadas por meio do processo de [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review).

## Análise do App

Antes de começar oficialmente a integrar clientes empresariais, envie seu app para [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review) e solicite a aprovação de **acesso avançado** no caso das permissões necessárias.

Se o acesso avançado não for aprovado para uma determinada permissão, ela não aparecerá no fluxo de Cadastro Incorporado, e os clientes da sua empresa não poderão concedê-la ao seu app.

## Verificação da empresa

Para se qualificarem para maiores limites de mensagens e de números de telefone, bem como para o status de conta comercial oficial, os clientes precisam verificar a empresa. Os clientes empresariais podem enviar a própria empresa para verificação seguindo as instruções descritas no artigo da Central de Ajuda abaixo:

[Como verificar a sua empresa na Meta](https://www.facebook.com/business/help/2058515294227817?id=180505742745347)

Como alternativa, caso você seja um Parceiro de Soluções de **Solução selecionada** ou **Premier**, poderá enviar uma empresa do cliente para verificação em nome dele, o que acelera muito o processo. Veja [Verificação da empresa conduzida por parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)