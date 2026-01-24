<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview -->
<!-- Scraped: 2026-01-24T00:33:16.413Z -->

# Cadastro Incorporado

Updated: 25 de nov de 2025

O Cadastro Incorporado é uma interface compatível com computador e com dispositivos móveis para autenticação e autorização que ajuda ainda mais os clientes da sua empresa a gerarem os ativos necessários para integrá-los com sucesso à Plataforma do WhatsApp Business.

O flow de Cadastro Incorporado reúne informações relacionadas com o negócio dos clientes da sua empresa, gera automaticamente todos os ativos do WhatsApp necessários para a plataforma e concede ao seu app acesso a esses ativos para que você possa fornecer de modo rápido serviços de mensagens do WhatsApp aos seus clientes empresariais.

## Como funciona

O Cadastro Incorporado faz uso do Login do Facebook para Empresas e do SDK do JavaScript. Depois de configurado, você pode adicionar um link ou botão ao seu site ou portal que lança o flow.

Os clientes empresariais que clicarem no link ou botão verão uma nova janela onde poderão:

-   autenticar sua identidade usando as Credenciais de Negócios do Facebook ou da Meta-   aceitar os Termos de Serviço da API de Nuvem, do WhatsApp Business, da Meta, da API de Mensagens de Marketing Lite e das Ferramentas da Meta para Empresas-   selecionar várias APIs do WhatsApp e aceitar os Termos de Serviço-   conceder acesso aos ativos do WhatsApp para seu app-   selecionar um portfólio empresarial existente ou criar um novo-   selecionar uma Conta do WhatsApp Business (WABA) ou criar uma nova-   inserir e verificar seu número de telefone comercial (informado por eles ou fornecido por você)-   inserir um nome de exibição que pode aparecer no lugar do número no cliente do WhatsApp

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/531995822_1112262264200439_63249353490863536_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=qI4_Yp_UdrwQ7kNvwHlvoAu&_nc_oc=AdkM83VeyerCswYW8t6QO0GWP6BZKGJoy7v_uF1EoqBCQJfF6cSsxoRA2xKe5jNu0OY&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=YvgGmeivPQJVfqVo7sWK7g&oh=00_AfqVjm0Iz6b3GoOwmWLZwqMi5b2cHQAbFnjazaxdnVVb2A&oe=698E41C0)

Após a conclusão bem-sucedida, o Cadastro Incorporado fornecerá a identificação da WABA do cliente, o número de telefone comercial e um código de token fungível na janela que gerou o flow. Você deve enviar esses dados para seu servidor e usá-los em uma chamada entre servidores para:

-   trocar o código por um token empresarial no escopo do cliente-   registrar o número de telefone comercial do cliente para uso da API de Nuvem-   inscrever seu app em webhooks na WABA do cliente-   compartilhar sua linha de crédito com o cliente (apenas parceiros de soluções)

Quando essas etapas estiverem concluídas, se você for um parceiro de soluções ou tiver uma parceria com um, o cliente poderá começar a usar seu app ou o do seu parceiro para enviar mensagens imediatamente. Se você não for um parceiro de soluções ou não tem parceria com um, o cliente deverá primeiro adicionar uma forma de pagamento à WABA antes de poder começar a enviar mensagens.

Estamos testando uma nova experiência no flow de Cadastro Incorporado para todas as versões. O flow em si não foi alterado, mas, depois da conclusão, você poderá ver um novo botão **Ver seu guia de configuração**. Ao clicar nessa opção, você acessará uma nova página de orientação de configuração no Gerenciador do WhatsApp, que oferece as próximas etapas sobre:

-   Verificação da empresa-   Resolver problemas de integridade e acessar a Página Inicial do Suporte para Empresas-   Enviar a primeira mensagem por meio de uma solução de parceiro-   Enviar mensagens iniciadas pela empresa usando modelos

## Propriedade de ativo

Os clientes empresariais integrados via Cadastro Incorporado são proprietários dos respectivos ativos do WhatsApp e podem utilizar esses ativos com outras soluções da Meta, como [Anúncios de clique para o WhatsApp](https://www.facebook.com/business/help/447934475640650).

Também têm acesso total ao [Gerenciador do WhatsApp](https://business.facebook.com/wa/manage/), que pode ser usado para acessar os ativos. Não é possível restringir o acesso. Consulte os ativos disponíveis [neste link](/documentation/business-messaging/whatsapp/embedded-signup/version-4).

## Limitações

### Limites da integração

Por padrão, você pode integrar até 10 novos clientes empresariais em uma janela de 7 dias consecutivos. Somente clientes recém-integrados contam para esse limite. É possível ver a contagem atual de clientes integrados em **Gerenciador do WhatsApp** > **Visão geral do parceiro**. Você receberá uma notificação por email se chegar perto desse limite.

Se você concluir a verificação da empresa, a análise do app e a verificação de acesso, aumentaremos automaticamente seu limite para 200 novos clientes empresariais em uma janela de 7 dias consecutivos. Caso seja preciso integrar mais de 200 clientes por semana, inscreva-se para se tornar um [Parceiro de Negócios da Meta](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fpartners%2Fbecome-a-partner&h=AT0zoQbdNxaFN9g-A0XoJ2ghPxqgwUyor3H77Je5hCMoikGionTLztYd4fs5fAxdi6o84-Sa87A5Z9t-jB5TqFStZFZCU624_Q29iRt9oSOK8ykYV9yj8E_I3-QahoQgyX7lkzrSFCugkv-rkYIhMQ6xfFw).

**Observação:** contas do WhatsApp Business (WABAs) existentes que foram criadas originalmente por meio do app do desenvolvedor não podem ser selecionadas ou integradas diretamente por meio do flow de Cadastro Incorporado.

### Limites de mensagens para clientes empresariais

Os clientes empresariais integrados via Cadastro Incorporado começam com [limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) padrão, que podem ser aumentados por meio do uso da API.

### Limites de número de telefone comercial de clientes

-   Números de telefone comercial só poderão ser registrados para uso com a API de Nuvem.-   Números de telefone comerciais já registrados para uso com a API Local ou usados no WhatsApp não são aceitos.-   Números de telefone comercial já em uso com o [app WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fproducts%2Fbusiness-app&h=AT0zoQbdNxaFN9g-A0XoJ2ghPxqgwUyor3H77Je5hCMoikGionTLztYd4fs5fAxdi6o84-Sa87A5Z9t-jB5TqFStZFZCU624_Q29iRt9oSOK8ykYV9yj8E_I3-QahoQgyX7lkzrSFCugkv-rkYIhMQ6xfFw) são aceitos, mas exigem que você personalize o flow para habilitar a [integração de usuários do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) (também conhecida como "coexistência").-   Os clientes empresariais integrados por meio do Cadastro Incorporado começam com [limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) padrão.

## Flow da API de Nuvem

Consulte [Flow da API de Nuvem](/documentation/business-messaging/whatsapp/embedded-signup/default-flow) para ver a descrição de cada tela que será apresentada aos seus clientes empresariais como parte da implementação padrão do Cadastro Incorporado.

Se você souber informações sobre a empresa do cliente, poderá [inserir esses dados](/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data), o que pode reduzir significativamente o número de telas com as quais os clientes têm que interagir.

## Tokens de acesso

O Cadastro Incorporado gera [tokens comerciais](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). Quando um cliente empresarial conclui o flow de Cadastro Incorporado, um código de token fungível será retornado como um evento de mensagem e capturado pelo SDK do JavaScript. Você precisará trocar o código por um token empresarial fazendo uma chamada de servidor para servidor.

Se você for um Provedor de Tecnologia, usará exclusivamente tokens empresariais.

Caso você seja um parceiro de soluções, usará seu [token de acesso de usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ("token do sistema") para compartilhar sua linha de crédito com os clientes empresariais integrados, além de tokens empresariais para todo o resto. Observe que o usuário do sistema representado pelo token deve ter concedido ao seu app a permissão **business\_management** e deve ter recebido a função de **administrador** ou **editor financeiro** no seu portfólio empresarial para poder compartilhar sua linha de crédito.

## Permissões

O Cadastro Incorporado pode ser configurado para oferecer suporte a produtos de mensagens da empresa para seus clientes. Caso você tenha interesse apenas no flow da API de Nuvem, precisará provavelmente apenas das seguintes permissões:

-   **whatsapp\_business\_management**: necessária caso seu app precise de acesso às configurações da Conta do WhatsApp Business e aos modelos de mensagens do cliente integrado.-   **whatsapp\_business\_messaging**: necessária caso seu app precise acessar as configurações de número de telefone comercial do cliente integrado ou se ele for usado pelos clientes para enviar e receber mensagens.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/557723935_1324509125987117_1998262003463700459_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=b8H7I9aOJI0Q7kNvwHVtF6B&_nc_oc=Adk9W6gzDmhSzZd4RHIR_J1lzutBrT4SZhcCdGar1BmY-P4o-dVBHekPPyV4_Eey7Fo&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=YvgGmeivPQJVfqVo7sWK7g&oh=00_AfoU-cVCqwoXELuXWnCZOXF0X8cgmSBy7xVc2Iqm9v8Ziw&oe=698E409F)

Você pode especificar de quais permissões seu app precisa durante o processo de [implementação](/documentation/business-messaging/whatsapp/embedded-signup/implementation).

Enquanto seu app estiver em modo de desenvolvimento, essas permissões aparecerão na [tela de autorização](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#authorization-screen) do Cadastro Incorporado para qualquer pessoa que tenha uma função de**admin**, **desenvolvedor** ou **testador** no seu app. No entanto, assim que mudar seu app para o modo publicado, apenas as permissões que foram aprovadas para acesso avançado no processo de [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review) aparecerão no flow.

## Cobrança

### Parceiros de soluções

Se você for um parceiro de soluções, já deverá ter uma [linha de crédito](https://www.facebook.com/business/help/1684730811624773?id=2129163877102343) e ter aceitado os termos da API de Alocação de Crédito no painel **Configurações do negócio** > **Pagamentos** na Meta Business Suite. Além disso, você deve compartilhar sua linha de crédito com qualquer cliente como parte do processo de integração.

### Provedores e parceiros de tecnologia

Se você for um provedor ou parceiro de tecnologia, os clientes empresariais integrados deverão adicionar uma forma de pagamento à conta do WhatsApp Business deles. Eles podem fazer isso seguindo as etapas descritas no artigo [Como adicionar um cartão de crédito à sua conta da Plataforma do WhatsApp Business](https://www.facebook.com/business/help/488291839463771) da Central de Ajuda.

## Contas de sandbox

É possível testar o flow Cadastro incorporado usando sua própria conta do Facebook, mas isso pode gerar portfólios empresariais, WABAs e números de telefone comerciais adicionais. Caso você não queira sobrecarregar sua conta do Facebook com dados de teste, solicite uma conta de teste de sandbox para simular um cliente empresarial concluindo o flow.

Quando você concluir o flow usando a conta de sandbox, a [identificação da WABA e do número de telefone comercial](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener), além de um [código de token que pode ser trocado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback), serão retornados, como se fosse um cliente real.

### Limitações da conta de sandbox

-   Elas são válidas por 30 dias. Depois desse período, serão desativadas e deverão ser recuperadas para serem usadas novamente.-   Esse tipo de conta não pode ser usado para criar portfólios empresariais de sandbox, WABAs ou números de telefone comerciais adicionais. Os ativos são gerados automaticamente e aparecerão no flow Cadastro Incorporado.-   A conta de sandbox está associada ao administrador do app. Para que os ativos da conta de sandbox apareçam no flow Cadastro Incorporado, o administrador do app deve estar conectado à conta de desenvolvedor da Meta.-   O portfólio empresarial da conta de sandbox não aparecerá no Meta Business Suite nem no Gerenciador do WhatsApp.-   Você pode trocar o código de token retornado pelo token empresarial da conta de sandbox e usá-lo para consultar dados sobre a identificação da WABA, mas o número de telefone comercial não pode ser utilizado para enviar nem receber mensagens.

### Reivindicar contas de sandbox

Para reivindicar uma conta de sandbox:

-   Acesse [Painel de Apps](/apps) > **WhatsApp** > **Início rápido**.-   Encontre a seção **Integrações de teste**.-   Clique no botão **Reivindicar conta de sandbox**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/513080744_1153803566552470_4289383978669775503_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=1NZc4V-7DHgQ7kNvwHlBeT1&_nc_oc=AdlHGpUVtXGhllROPVPC0tiHBLc1DdCsTaGxfRxuuzO6sIi77_RW8FhieEUMHmT-XsU&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=YvgGmeivPQJVfqVo7sWK7g&oh=00_Afr6x-wowhspaqeMKBWKRjdevJJkpYlYPNta5LIGzyDUAQ&oe=698E65D3)

### Excluir contas de sandbox

A funcionalidade de exclusão de contas de sandbox será lançada de forma gradual nas próximas semanas, a partir de 25 de junho de 2025.

Caso você tenha encerrado os testes e queira manter seu ambiente de teste limpo, será possível excluir a conta de sandbox. A exclusão é irreversível e removerá todos os dados de teste associados. Se você excluir sua conta de sandbox por engano, mas precisar testar novamente, será necessário solicitar uma nova.

Para excluir uma conta de sandbox:

-   Acesse [Painel de Apps](/apps) > **WhatsApp** > **Início rápido**.-   Encontre a seção **Integrações de teste** para localizar sua conta de sandbox.-   Clique no botão **Excluir conta** da sua conta de sandbox.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/511293188_1404444270796306_3723440624353556557_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=LQQfGNaScUsQ7kNvwG6j2tT&_nc_oc=AdlpItnveJOUm2szutpjuYdNE-fPceFJFCCAQLa4GC3fOWQcJgVq_H2iwCoyW1kY6yE&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=YvgGmeivPQJVfqVo7sWK7g&oh=00_Afp4wSqEsNQ-aqHGstll5H5B1Rm15jvDn-Gexsje-HsI1A&oe=698E552C)

## Números de telefone comerciais 555

Clientes empresariais podem receber até dois números de telefone comerciais 555. Esses números têm o mesmo comportamento de telefones comerciais tradicionais (sujeitos às regras de preços, afetados pelas classificações de qualidade, entre outros), mas precisam receber aprovação do nome de exibição antes de enviar mensagens. Além disso, os números 555:

-   Têm um código de chamada de país dos Estados Unidos (+1)-   Têm um código de área 555-   São verificados automaticamente-   Não podem ser migrados para outra conta do WhatsApp Business nem usados fora da plataforma

Se os seus clientes empresariais estiverem qualificados, a [tela para adicionar números de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen) mostrará de forma automática a opção de escolher um número 555:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/557624038_1991414544970922_7818680630707794930_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=BN4QsCh67tAQ7kNvwFsA3sP&_nc_oc=AdkjTUWPO1LBvgBMa8ZCnzd9xsT7EQZh87Teo6sXfZRaI_9zLny4_oPgVgD72yj9E1E&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=YvgGmeivPQJVfqVo7sWK7g&oh=00_Afog6bbieFZmvQH8B_kZ7DcWRipnQAwPvOhmLi_FIqfpsw&oe=698E3BA0)

## Migração de ativos do WhatsApp

O Cadastro Incorporado pode ser usado de diversas maneiras para migrar ativos de clientes empresariais integrados. Consulte o artigo [Como migrar ativos de clientes empresariais](/documentation/business-messaging/whatsapp/solution-providers/support#migrating-business-customer-assets).

## Análise do App

Você não conseguirá integrar clientes empresariais até que seu app tenha sido aprovado para **acesso avançado** para cada uma das permissões necessárias.

Consulte [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review) para saber mais sobre esse tópico e o que você deve fornecer para concluir o processo com sucesso.

## Auxiliar de integração de Cadastro Incorporado

O Auxiliar de integração de Cadastro Incorporado é uma ferramenta de configuração e teste no Painel de Apps. Com a ferramenta, você pode:

-   lançar o Cadastro Incorporado em várias configurações de flow-   ver dados que são retornados quando um cliente empresarial conclui o flow-   gerar um código de implementação e consultas de integração, que você pode copiar e colar no seu site, portal de clientes empresariais e servidor-   enviar consultas de API para pontos de extremidade que você precisará usar ao integrar clientes que concluem o flow

Você pode acessar o auxiliar de integração navegando até **Painel de Apps** > **WhatsApp** > **Configurador de Cadastro Incorporado**.

**Observação:** o Auxiliar de integração de Cadastro Incorporado está disponível apenas para apps empresariais. Veja o tipo de app na parte superior do Painel de Apps.

## Webhooks

Como parte do processo de integração, você deve inscrever seu app no webhook na WABA de cada cliente empresarial que concluir o flow de Cadastro Incorporado.

Webhooks serão disparados e enviados para o URL de retorno de chamada configurado no seu app, de acordo com os campos de webhook que você assinou. Isso significa que todos os webhooks para todos seus clientes empresariais integrados serão enviados para o URL de retorno de ligação do seu app. Contudo, você pode substituir o URL de retorno de ligação em uma Conta do WhatsApp Business ou número de telefone comercial individual. Consulte [Substituições de webhook](/documentation/business-messaging/whatsapp/webhooks/override) para saber como fazer isso.

## Localização

O flow de Cadastro Incorporado está disponível em 30 idiomas. O flow localizado é disparado automaticamente com base no idioma em que o cliente empresarial usa o Facebook.

Árabe, tcheco, dinamarquês, grego, inglês (Reino Unido), espanhol (Espanha), espanhol, finlandês, francês (França), hebraico, hindi, húngaro, indonésio, italiano, japonês, coreano, norueguês (bokmal), holandês, polonês, português (Brasil), português (Portugal), romeno, russo, sueco, tailandês, turco, vietnamita, chinês simplificado (China), chinês tradicional (Hong Kong), chinês tradicional (Taiwan).

## Próximas etapas

Saiba como [implementar o Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation) no seu site ou portal.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)