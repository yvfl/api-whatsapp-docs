<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers -->
<!-- Scraped: 2026-01-24T00:57:06.150Z -->

# Tornar-se um Provedor de Tecnologia

Updated: 20 de nov de 2025

Este documento descreve as etapas que você deve seguir para se tornar um [Provedor de Tecnologia](/documentation/business-messaging/whatsapp/solution-providers/overview#tech-providers).

Como Provedor de Tecnologia, você pode fornecer de forma independente todos os serviços de mensagens do WhatsApp aos clientes empresariais que integrou. Outra opção é trabalhar com um [Parceiro de Soluções](/documentation/business-messaging/whatsapp/solution-providers/overview#solution-partners) para oferecer esses serviços em conjunto. Caso você tenha parceria com um Parceiro de Soluções, peça a identificação do app dele, já que você precisará dessa informação para concluir estas etapas.

## Antes de começar

Você precisará do seguinte:

-   Um [app da Meta](/docs/development/create-an-app) com o caso de uso do WhatsApp e um [portfólio empresarial](https://www.facebook.com/business/help/486932075688253) conectado

Durante o processo de criação do app, é possível criar um portfólio empresarial.

Caso você prefira integrar com um Parceiro de Soluções, será necessário fornecer a identificação do app dele.

## Acesse o Painel de Apps.

No [Painel de Apps da Meta](/apps), acesse **Casos de uso > Personalizar** (ícone de lápis) e clique no botão **Personalizar** referente ao caso de uso do WhatsApp. Em seguida, selecione **Integração do Provedor de Tecnologia** no menu do lado esquerdo.

Nesta página do painel, você encontrará links para a [documentação para desenvolvedores sobre Cadastro Incorporado do WhatsApp](/documentation/business-messaging/whatsapp/embedded-signup/overview), [Suporte ao Desenvolvedor](/support/) e [Casos de sucesso](/success-stories/), além de etapas para concluir o processo de integração do Provedor de Tecnologia.

## Etapa 1: verificar a empresa

Para se tornar um Provedor de Tecnologia, você precisa [verificar sua empresa junto à Meta](https://www.facebook.com/business/help/2058515294227817). Caso você já tenha uma empresa verificada e a tenha vinculado ao seu app durante o processo de criação, essa etapa será marcada como concluída e você poderá [iniciar o processo de análise do app](/documentation/business-messaging/whatsapp/solution-providers/app-review).

Clique em **Iniciar verificação** para verificar a empresa. Você precisará das seguintes informações:

-   Verifique os dados da empresa: forneça o nome, endereço, número de telefone, email e site da empresa para verificação.-   Confirme a conexão: selecione uma forma para entrarmos em contato e confirmarmos a conexão com a empresa.-   Carregar documentos: talvez seja necessário carregar documentos aceitos para confirmar esses dados se a empresa não for encontrada.

Sua empresa deve ser verificada antes de você iniciar o processo de análise do app.

## Etapa 2: Análise do App

Depois de concluir a verificação da empresa, você poderá enviar seu app para a Análise do App. Você precisará concluir as seguintes tarefas:

-   Analisar as configurações do app-   Criar e enviar vídeos do seu app-   Enviar documentação para a Análise do App

### Analisar as configurações do app

O app precisará de [configurações básicas](/docs/development/create-an-app/app-dashboard/basic-settings), como ícone, política de privacidade e categoria.

### Vídeos

Para passar na Análise do App, você precisará enviar vídeos que comprovem a capacidade do app de enviar mensagens e gerenciar modelos.

-   O primeiro vídeo deve mostrar uma mensagem criada e enviada do seu app e recebida no cliente do WhatsApp (app para celular ou web).-   O segundo vídeo deve mostrar o app sendo usado para criar um modelo de mensagem.

Como alternativa, faça uma gravação de tela do script cURL de **configuração da API** sendo usado por você para enviar uma mensagem ao número de um usuário do WhatsApp que foi adicionado como destinatário de teste, em vez de enviar uma mensagem usando seu app ou o app do parceiro. Da mesma forma, você pode capturar uma gravação de tela do **Gerenciador do WhatsApp** sendo usado por você para criar uma mensagem de modelo, em vez do seu app ou do app do seu parceiro.

Caso você tenha parceria com um Parceiro de Soluções, será possível usar a integração atual com ele para demonstrar essas ações.

### Enviar documentação para a Análise do App

Obtenha aprovação para acessar permissões e recursos avançados para gerenciar as contas e informações dos seus clientes.

A Análise do App é o processo que concede acesso avançado às permissões necessárias para se tornar um Provedor de Tecnologia.

-   O acesso avançado a `whatsapp_business_messaging` permitirá que você envie mensagens aos clientes.-   O acesso avançado a `whatsapp_business_management` permite integrar clientes e gerenciar os respectivos ativos.

Clique no botão **Iniciar Análise do App** para enviar o app para análise.

[Saiba mais sobre a Análise do App](/docs/resp-plat-initiatives/individual-processes/app-review).

## Integrar com um Parceiro de Soluções existente

Se preferir integrar com um Parceiro de Soluções, clique no botão **Integrar com um Parceiro de Soluções** na parte inferior da página.

Depois de clicar no botão **Integrar com um Parceiro de Soluções**, a página de integração do Provedor de Tecnologia será atualizada para esse fluxo. O fluxo é idêntico ao do Provedor de Tecnologia, com uma etapa adicional de Análise do App para **Criar uma solução de parceiro** inserindo a identificação do app.

Para fazer a integração sem um parceiro, clique no botão **Integrar sem um parceiro** na parte inferior da página.

## Suporte

Os Provedores de Tecnologia confirmados têm acesso a todos os canais de suporte. Consulte [Suporte](/documentation/business-messaging/whatsapp/support).

## Próximas etapas

-   Integração de clientes empresariais: integração de clientes empresariais via [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview).-   Webhooks: antes que os usuários possam usar seu app para enviar e receber mensagens ou gerenciar modelos, será necessário configurar [Webhooks](/documentation/business-messaging/whatsapp/webhooks/overview).-   Cobrança: os clientes empresariais integrados devem [adicionar um cartão de crédito à sua conta na Plataforma do WhatsApp Business](https://www.facebook.com/business/help/488291839463771).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)