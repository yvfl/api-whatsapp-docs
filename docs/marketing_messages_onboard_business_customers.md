<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers -->
<!-- Scraped: 2025-12-20T17:30:01.996Z -->

# Fazer a integração de clientes empresarias

Updated: 5 de nov de 2025

Válido a partir de 1º de julho de 2025: os preços por mensagem já estão em vigor. Além disso, as taxas para mensagens de marketing na API de Nuvem e na API de MM Lite são consistentes, de acordo com as tabelas de tarifas publicadas [aqui](/documentation/business-messaging/whatsapp/pricing).

Planejamos lançar a MM Lite para o público geral no quarto trimestre de 2025.

O processo de integração da MM Lite foi desenvolvido para ser simples e fácil de usar, permitindo que [provedores de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview) (incluindo parceiros de soluções, provedores de tecnologia e parceiros de tecnologia) façam a integração de clientes atuais da API de Nuvem para a API de MM Lite. Se a sua empresa faz a integração direta com a API de Nuvem sem um parceiro, siga as instruções abaixo para aceitar os Termos de Serviço e fazer a integração da API de MM Lite no Gerenciador do WhatsApp.

## Antes de começar

Seu app precisa ter acesso avançado às seguintes permissões:

-   **`whatsapp_business_messaging`**: permite que o app chame a API de MM Lite para enviar mensagens.-   **`whatsapp_business_management`**: essa permissão possibilita que o app gerencie WABAs, números de telefone e modelos por meio da [API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/analytics).-   **`ads_read`** (opcional): essa permissão concede ao app acesso à [API de Insights](/docs/marketing-api/insights), permitindo que os parceiros recuperem métricas sobre conversões.

Caso o app ainda não tenha acesso avançado a essas permissões, solicite o acesso na [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review).

## Resumo da integração de parceiros de soluções

Para ajudar seus clientes a usar a API de MM Lite, é preciso seguir algumas etapas:

Etapa

Notas

1) Fazer sua integração

Inscreva-se por meio do [Painel de Apps](https://developers.facebook.com/apps) e siga as instruções em [Integrar a API de MM Lite por conta própria](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#self-onboard-to-mm-lite-api).

2: Enviar mensagens

Mesmo ponto de extremidade de modelo e carga de envio de mensagem que a API de Nuvem. Muda apenas o ponto de extremidade "enviar mensagem".

3) Conferir as métricas

**Novo!** Faça a integração com a API de Insights para conferir as métricas da API de Nuvem (enviada/lida/entregue), além de novas métricas como conversões no site e no app.

## Integração própria

### Registrar-se na API de MM Lite

Para se cadastrar, o provedor de soluções deve seguir estas etapas:

-   Acesse **[Painel de Apps](/apps)** > **WhatsApp** > **Início rápido**.-   Na página **Início rápido**, localize o cartão “Aumente o ROI com a API de Mensagens de Marketing Lite” e clique no botão “Começar”.-   Clique no botão “Solicitar permissão” para pedir as permissões de análise do app necessárias. Consulte "[Enviar para Análise do App](#submit-for-app-review)" abaixo para saber mais.-   Clique em "Continuar para o guia de integração" e aceite os Termos de Serviço.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/475969838_666164382411179_8539011248692952115_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=8OIFAUesRrAQ7kNvwE5uKtM&_nc_oc=AdleBoxJjRAq1N9aMbGAvk1Aghr5wFRPLUd1byyKCfZSb6UKMankSR5qlAGoiMNTaUw&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=MBT456vPz1CJqZdRYA5NYg&oh=00_AflG99DG758u4alctjmD1L0u1SD97tHQLEBY4T6uWWxV2w&oe=696139C0)

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/540765034_1761649757794419_9069938397320792839_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=hZe5fsVGpgsQ7kNvwGKThlt&_nc_oc=AdnRxzcMdamF9DpEjlzCAmLAEbhvCjs3x_Y7b4uMRxcaPdbvtfsopi-lgZG3T6e5HHY&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=MBT456vPz1CJqZdRYA5NYg&oh=00_Afle8_rZDMKtcMGyUYzLSuDkbDVBRglla4tdzu_jTKbC-w&oe=696127D9)

### Enviar para análise do app para conferir as permissões avançadas

Os provedores de soluções devem usar um app com as permissões avançadas a seguir ao usar a API de MM Lite.

Caso ainda não tenha um app com as permissões avançadas a seguir, será necessário realizar a [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review):

Permissão avançada do app

Obrigatória para fazer o seguinte em nome do cliente

`whatsapp_business_messaging`

Chamar o ponto de extremidade 'send messages' da API de MM Lite para enviar mensagens usando essa API.

`whatsapp_business_management`

Chame os pontos de extremidade WABA, Phone Number e Template para gerenciar WABAs, números de telefone e modelos, além de recuperar métricas básicas por meio da [API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/analytics).

`ads_read` (opcional)

Esta permissão é opcional e só é necessária para chamar a [API de Insights](/docs/marketing-api/insights), permitindo que um parceiro busque métricas avançadas sobre conversões (por exemplo, conversões da web, conversões do app).

Para o envio da análise do app, prepare uma gravação de tela de como cada permissão é usada. Recomendamos incluir uma amostra de cada ação na coluna "Obrigatório para fazer…" acima, para demonstrar cada permissão em uso.

## Integração de empresas finais

Existem três maneiras de integrar uma empresa com a qual um parceiro trabalha à API de MM Lite e receber os tokens de acesso necessários para enviar mensagens e obter métricas em nome da empresa:

-   **Com o Gerenciador do WhatsApp** (recomendado)-   **Com o Cadastro Incorporado**

### Integração própria com a API de MM Lite usando o Gerenciador do WhatsApp (recomendado)

Caso a integração da sua empresa com a API de Nuvem seja feita por um provedor de soluções, [entre diretamente pelo Gerenciador do WhatsApp](/documentation/business-messaging/whatsapp/marketing-messages/onboarding).

### Integração com a API de MM Lite usando o Cadastro Incorporado

A API de MM Lite tem um fluxo de cadastro incorporado próprio que pode ser usado pelos provedores de soluções, que:

-   Permite que os clientes se cadastrem na API de Nuvem e na API de MM Lite.-   Permite solicitar um token de acesso com as permissões necessárias para enviar mensagens usando a API de MM Lite e recuperar métricas da API de Insights em nome dos clientes.

#### Etapa 1: fazer a integração com o SDK de Login do Facebook

Caso ainda não tenha concluído essa etapa para a API de Nuvem, configure o SDK do Facebook para JavaScript e o Login do Facebook para incorporar o fluxo de cadastro no seu site ou portal do cliente. Você pode incorporar o fluxo em várias páginas da web ou portais próprios.

#### Etapa 2: definir uma nova configuração de permissão

Siga as instruções da [etapa 2 dos documentos sobre Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#step-2--create-a-facebook-login-for-business-configuration) para criar uma nova configuração do Login do Facebook para Empresas. Selecione as seguintes opções na configuração:

Ativos:

-   Contas do WhatsApp-   (Não selecione as outras opções de contas de anúncios, páginas, catálogos, pixels, contas do Instagram)

Permissões:

-   `ads_read` (opcional)-   `whatsapp_business_management`-   `whatsapp_business_messaging`

#### Etapa 3: iniciar o Cadastro Incorporado

Antes de integrar usuários de PME do WhatsApp, consulte o documento [Implementação do Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation) e adicione `marketing_messages_lite` à lista de recursos.

```
{
  "config_id": "<config_id>",
  "response_type": "code",
  "override_default_response_type": true,
  "extras": {
    "featureType": "whatsapp_business_app_onboarding",
    "sessionInfoVersion": "3",
    "features": [
      {
        "name": "marketing_messages_lite"
      }
    ],
    "version": "v3"
  }
}
```

#### Etapa 4: aguardar o webhook de confirmação da integração

Quando um administrador da empresa concluir o fluxo de integração da MM Lite e todos os processos de integração de back-end estiverem completos, um novo webhook `account_update` será enviado para cada WABA na BMID para indicar que a integração foi concluída.

Consulte [Integração](/documentation/business-messaging/whatsapp/marketing-messages/onboarding) para saber mais sobre o `account_update` webhook.

Depois que a empresa passar pelo fluxo de Cadastro Incorporado da API de MM Lite, o token de app do usuário do sistema terá permissão para enviar mensagens usando a API de MM Lite e obter métricas usando a API de Insights.

### Integração de usuários do app WhatsApp Business (também conhecido como "Coexistência")

Configure o Cadastro Incorporado para [permitir que os clientes empresariais façam a integração usando a conta do app WhatsApp Business e o número de telefone existente:](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users)

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/477341352_1809983926468415_3794578338113490554_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=-P3Z4_dfNugQ7kNvwHUBsMp&_nc_oc=AdlQPynWj1X9MVV6D3-74b1XS0aiMmW6OXMAOgVQV2R8kKQxqdigKk7KjvV-3maGNcs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=MBT456vPz1CJqZdRYA5NYg&oh=00_AfmFR8eA9s8LqlMM5Y5xm7Q7ZwUNtAn2zGKMMiowsq-6zg&oe=69612E1B)

As empresas que forem integradas depois de escolher essa opção poderão usar seu app para enviar mensagens aos clientes em grande escala, mas ainda terão a opção de enviar mensagens individualmente usando o app WhatsApp Business.

Observação: para garantir um rastreamento preciso das métricas, recomendamos que os clientes empresariais evitem clicar nos links das próprias mensagens de marketing. Clicar nesses links pode afetar os dados de rastreamento e gerar resultados distorcidos.

### Remover usuários do app WhatsApp Business

Ao remover a Coexistência, a conta será automaticamente desligada da MM Lite. A conta de anúncios será desabilitada e desconectada, o que impedirá o rastreamento das métricas de conversão.

## Ajudar a empresa a configurar a mensuração de conversão

Consulte [Configurar a mensuração de conversões](/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion) para saber como as empresas podem mensurar quando uma mensagem de marketing da API de MM Lite leva a uma conversão (por exemplo, adição ao carrinho, compra).

É **altamente recomendado** que os parceiros trabalhem com os clientes para configurar os relatórios de conversão. Assim, os clientes podem acessar as mensurações de métricas e otimizações aprimoradas oferecidas pela API de MM Lite.

## Enviar mensagens

Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages) para ver a documentação sobre como enviar mensagens e receber webhooks em nome dos seus clientes usando a API de MM Lite.

## Consultar métricas

Consulte o Guia para [visualizar métricas](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics) e veja como fazer o seguinte:

-   Buscar os números de identificação de entidades de anúncio vinculadas a WABAs e modelos de uma empresa com o objetivo de chamar as APIs de Insights.-   Buscar métricas para mensagens enviadas usando a API de MM Lite.

É **altamente recomendado** que os parceiros busquem as métricas usando as APIs de Insights sobre Anúncios (não APIs de Gerenciamento de Negócios), porque essas APIs fornecem relatórios de métricas mais completos, incluindo relatórios de conversão de fontes, como eventos de conversão na web e no app.

Depois de fazer a integração com as APIs de relatórios (recomendamos a API de Insights), exiba essas métricas nos seus painéis e nas suas APIs para que elas possam ser usadas pelos clientes.

Entre em contato com seu gerente de parceiros para receber sugestões sobre as boas práticas para métricas, incluindo uma cópia do “**Manual dos painéis de relatórios de mensagens comerciais**” da Meta para parceiros.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)