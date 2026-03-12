<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers -->
<!-- Scraped: 2026-03-10T21:46:11.852Z -->

# Fazer a integração de clientes empresarias

Updated: 24 de nov de 2025

A API de Mensagens de Marketing para o WhatsApp (anteriormente conhecida como API de Mensagens de Marketing Lite) agora está disponível para todos.

O processo de integração da API de Mensagens de Marketing para o WhatsApp foi desenvolvido para ser simples e fácil, permitindo que [provedores de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview) (incluindo parceiros de soluções, provedores de tecnologia e parceiros de tecnologia) façam a integração de clientes atuais da API de Nuvem para a API de Mensagens de Marketing para o WhatsApp. Se a sua empresa faz a integração direta com a API de Nuvem sem um parceiro, siga as instruções abaixo para aceitar os Termos de Serviço e fazer a integração da API de Mensagens de Marketing para o WhatsApp via Gerenciador do WhatsApp.

## Antes de começar

Seu app deve ter acesso avançado às seguintes permissões:

-   **`whatsapp_business_messaging`**: permite que o app chame a API de Mensagens de Marketing para o WhatsApp para enviar mensagens.-   **`whatsapp_business_management`**: com essa permissão, o app pode gerenciar contas d WhatsApp Business, números de telefone e modelos via [API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/analytics).-   **`ads_read`** (opcional): essa permissão concede ao app acesso à [API de Insights](/docs/marketing-api/insights), permitindo que os parceiros recuperem métricas sobre conversões.

Caso o app ainda não tenha acesso avançado a essas permissões, solicite o acesso na [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review).

## Visão geral da integração de parceiros de soluções

Para ajudar os clientes a usarem a API de Mensagens de Marketing para o WhatsApp, é preciso realizar diversas etapas:

Etapa

Notas

1: Fazer a própria integração

Inscreva-se via [Painel de Apps](https://developers.facebook.com/apps) e siga as instruções em [Integrar-se](#onboarding-yourself).

2: Enviar mensagens

Mesmo ponto de extremidade de modelo e carga de envio de mensagem que a API de Nuvem. Muda apenas o ponto de extremidade "send messages".

3: Ver as métricas

**Novo!** Faça a integração com a API de Insights para ver as métricas da API de Nuvem (enviada/lida/entregue), além de novas métricas como conversões no site e no app.

## Integração própria

### Inscrever-se na API de Mensagens de Marketing para o WhatsApp

Para se inscrever, o provedor de soluções deve seguir estas etapas:

-   Navegue até o painel **[Painel de Apps](/apps)** > **WhatsApp** > **Início rápido**-   Na página **Início rápido**, localize o cartão “Aumente o ROI com a API de Mensagens de Marketing para o WhatsApp” e clique no botão “Começar”-   Clique no botão “Solicitar permissão” para pedir as permissões de análise do app necessárias. Confira "[Enviar para Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review)" abaixo para saber mais-   Clique em "Continuar para o guia de integração" e aceite os Termos de Serviço

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/475969838_666164382411179_8539011248692952115_n.png?stp=dst-webp&_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=8tepwjOB7swQ7kNvwFLyCWC&_nc_oc=Adnhr1nAO8dm67k0mBK7v-8UgN3jdkHX0b8DMMz2HJ4XSzv_RQLYjMSNRyjAq1wjaQQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=qQy1sFsnm_y1g0iCBtIrqw&_nc_ss=8&oh=00_AfylNmUwm4yX4IQN9PMw3RSvJNRv0kc2DWouhpYMwveDPA&oe=69CAEA00)

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/540765034_1761649757794419_9069938397320792839_n.png?stp=dst-webp&_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sE9YtA3zFWIQ7kNvwEW5Cyh&_nc_oc=AdkJKnK7Fik5gqNZj1l2yBZqPrKN_RGveDaR2Ej7vPeatsIm8pBcD3G2PSKdfYzm1Ig&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=qQy1sFsnm_y1g0iCBtIrqw&_nc_ss=8&oh=00_Afy48oIZ4seE1qI-V4swvc29gJB3PA8hfymmBg2Olxkuhg&oe=69CAD819)

### Enviar para Análise do App para conferir as permissões avançadas

Os provedores de soluções devem usar um app com as permissões avançadas a seguir ao usar a API de Mensagens de Marketing para o WhatsApp.

Caso ainda não tenha um app com as seguintes permissões avançadas, será necessário realizar a [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review):

Permissão avançada do app

Obrigatória para fazer o seguinte em nome do cliente

`whatsapp_business_messaging`

Chamar o ponto de extremidade "send messages" da API de Mensagens de Marketing para o WhatsApp para enviar mensagens usando essa API

`whatsapp_business_management`

Chamar os pontos de extremidade WABA, Phone Number e Template para gerenciar contas do WhatsApp Business, números de telefone e modelos, além de recuperar métricas básicas via [API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/analytics)

`ads_read` (opcional)

Esta permissão é opcional e só é necessária para chamar a [API de Insights](/docs/marketing-api/insights), permitindo que um parceiro busque métricas avançadas sobre conversões (por exemplo, conversões da web, conversões do app)

Para o envio para a Análise do App, prepare uma gravação de tela de como cada permissão é usada. Recomendamos incluir uma amostra de cada ação na coluna "Obrigatória para fazer…" acima, para demonstrar cada permissão em uso.

## Integração de empresas finais

Existem várias maneiras de integrar uma empresa com a qual um parceiro trabalha à API de Mensagens de Marketing para o WhatsApp e obter os tokens de acesso necessários para enviar mensagens e as métricas em nome da empresa:

-   **via Gerenciador do WhatsApp** (recomendado)-   **via Cadastro Incorporado**

### Integração própria com a API de Mensagens de Marketing para o WhatsApp via Gerenciador do WhatsApp (recomendado)

Caso a integração da sua empresa com a API de Nuvem seja feita por um provedor de soluções, a [integração poderá ocorrer diretamente via Gerenciador do WhatsApp](/documentation/business-messaging/whatsapp/marketing-messages/onboarding).

### Integração de uma empresa à API de Mensagens de Marketing para o WhatsApp usando o Cadastro Incorporado

A API de Mensagens de Marketing para o WhatsApp tem um fluxo de cadastro incorporado próprio para que os provedores de soluções usem, o que:

-   permite que os clientes se inscrevam na API de Nuvem e na Marketing para o WhatsApp-   permite solicitar um token de acesso com as permissões necessárias para enviar mensagens via API de Mensagens de Marketing para o WhatsApp e recuperar métricas da API de Insights em nome dos clientes.

#### Etapa 1: fazer a integração com o SDK de Login do Facebook

Caso ainda não tenha concluído essa etapa para a API de Nuvem, configure o SDK do Facebook para JavaScript e o Login do Facebook para incorporar o fluxo de inscrição ao seu site ou portal do cliente. É possível incorporar o fluxo a vários portais e páginas da web que sejam seus.

#### Etapa 2: definir uma nova configuração de permissão

Siga as instruções da [Etapa 2 dos documentos sobre Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#step-2--create-a-facebook-login-for-business-configuration) para criar uma configuração do Login do Facebook para Empresas. Selecione o seguinte na sua configuração:

Ativos:

-   Contas do WhatsApp-   (Não selecione as outras opções: contas de anúncios, Páginas, catálogos, pixels, contas do Instagram)

Permissões:

-   `ads_read` (opcional)-   `whatsapp_business_management`-   `whatsapp_business_messaging`

#### Etapa 3: iniciar o Cadastro Incorporado

Antes de integrar usuários de PME do WhatsApp, leia o documento [Implementação do Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation) e adicione `marketing_messages_lite` à lista de recursos.

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

#### Etapa 4: aguardar o webhook de confirmação de integração

Depois que o administrador da empresa concluir o fluxo de integração à API de Mensagens de Marketing para o WhatsApp e todos os processos de integração de back-end forem finalizados com sucesso, um webhook `account_update` será enviado para cada conta do WhatsApp Business associada à identificação do Gerenciador de Negócios, indicando que a integração foi concluída.

Confira [Integração](/documentation/business-messaging/whatsapp/marketing-messages/onboarding) para saber mais sobre o webhook `account_update`.

Depois que a empresa passar pelo fluxo de Cadastro Incorporado da API de Mensagens de Marketing para o WhatsApp, o token de app do usuário do sistema terá permissão para enviar mensagens usando a API de Mensagens de Marketing para o WhatsApp e obter métricas usando a API de Insights.

## Fazer a integração de uma empresa às Mensagens de Marketing para o WhatsApp usando a API de Intenção

Os parceiros podem usar a API de Intenção para integrar uma empresa às Mensagens de Marketing para o WhatsApp (API de MM para o WhatsApp) marcando automaticamente todas as contas do WhatsApp Business "em nome de" (OBO) para serem transferidas ao seu cliente, recebendo uma notificação assíncrona (webhook) quando a integração é concluída para buscar os tokens de acesso necessários.

Se uma empresa final tiver contas do WhatsApp Business do tipo OBO que não têm um conjunto de intenções de migração OBO, essa intenção será definida automaticamente para todas as contas do WhatsApp Business do tipo OBO entre o parceiro e a empresa final usando essa chamada de API.

1) Chamar a API de Intenção

Ao chamar a API de Intenção para integrar uma identificação do Gerenciador de Negócios à API de Mensagens de Marketing para o WhatsApp, um email será enviado a todos os administradores dessa identificação do Gerenciador de Negócios, direcionando-os para um fluxo de integração no Gerenciador de Negócios. A Meta entrará em contato com os administradores da identificação do Gerenciador de Negócios até que eles aceitem ou recusem o convite para integração.

Os parceiros devem usar um token de acesso de usuário do sistema para o app com permissões avançadas para chamar a API de Intenção para cada uma das empresas finais qualificadas.

Para ser considerada qualificada, uma empresa final é aquela que:

-   Ainda não assinou os Termos de Serviço da API de Mensagens de Marketing para o WhatsApp-   É atualmente uma empresa parceira, conforme indicado por uma ou mais contas do WhatsApp Business compartilhadas ou OBO com o BSP-   Tem uma ou mais contas do WhatsApp Business em um em um país com tributação qualificada para a API de Mensagens de Marketing para o WhatsApp

Solicitação:

```
curl -i -X POST \
"https://graph.facebook.com/<API_VERSION>/<END_BUSINESS_ID>/onboard_partners_to_mm_lite?access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

Corpo opcional:

Caso um parceiro queira migrar WABAs do tipo OBO para uma solução do WhatsApp Business em vez de compartilhá-las apenas com o parceiro, é possível passar um solution\_id opcional na chamada da API.

```
{
  "solution_id": "<MULTI-PARTNER_SOLUTION_ID>"
}
```

Resposta:

```
{  "request_id": "893436979557695"}
```

-   Erro: tipo de destinatário inválido
    -   Motivo: a empresa final não está qualificada para integração à API de Mensagens de Marketing para o WhatsApp porque
        -   Já aceitou os termos de serviço-   Não está em um país permitido-   Não há contas do WhatsApp Business qualificadas por país compartilhadas com o BSP-   Erro: sua empresa já enviou essa solicitação. Para dar continuidade à solicitação, entre em contato com a empresa à qual você está solicitando acesso.
    -   Motivo: já existe uma solicitação para a integração dessa empresa final à API de Mensagens de Marketing para o WhatsApp usando esse fluxo.-   Erro: o app não tem permissões suficientes para chamar essa API.
    -   Motivo: o token de acesso do usuário do sistema usado para chamar a API deve ter acesso avançado a pelo menos whatsapp\_business\_messaging e whatsapp\_business\_management.-   Qual é o comportamento esperado para WABAs do tipo OBO e a intenção de migração definida?
    -   1 compartilhada, 4 OBO com intenção
        -   A chamada é realizada, criando uma intenção da API de Mensagens de Marketing para o WhatsApp, e não define uma nova intenção OBO-   0 compartilhada, 5 OBO com intenção
        -   A chamada é realizada, criando uma intenção da API de Mensagens de Marketing para o WhatsApp, e não define uma nova intenção OBO-   1 compartilhada, 4 OBO sem intenção
        -   A chamada é realizada, criando uma intenção da API de Mensagens de Marketing para o WhatsApp, e define uma nova intenção OBO-   0 compartilhada, 5 OBO sem intenção
        -   A chamada é bem-sucedida, criando uma intenção da API de Mensagens de Marketing para o WhatsApp, dependendo da definição da intenção OBO-   0 compartilhada, 0 OBO
        -   A chamada falha porque não há uma intenção da API de Mensagens de Marketing para o WhatsApp ou OBO definida

2) Aguardar o webhook de confirmação da integração

Quando um administrador da empresa concluir o fluxo de integração à API de Mensagens de Marketing para o WhatsApp e todos os processos de integração de back-end estiverem concluídos, um novo webhook account\_update será enviado para cada conta do WhatsApp Business na identificação do Gerenciador de Negócios para indicar que a integração foi concluída.

3) Buscar um token de acesso do usuário do sistema de integração empresarial (BISUAT) atualizado. Para fazer chamadas à API de Insights, você precisará de um token de acesso do usuário do sistema de integração empresarial no escopo da conta de anúncios vinculada à conta do WhatsApp Business gerenciada. Siga o guia na seção "API de Gerenciamento de Token de Acesso do Usuário do Sistema de Integração Empresarial" para buscar seu token atual e gerenciar as identificações de conta de anúncios recebidas no webhook.

Sintaxe da solicitação:

```
curl -i -X POST "https://graph.facebook.com/<API_VERSION>/<CLIENT_BUSINESS_ID>/system_user_access_tokens
    ?appsecret_proof="<APPSECRET_PROOF_HASH>"
    &access_token="<SYSTEM_USER_ACCESS_TOKEN>"
    &fetch_only=true
```

Objeto

Descrição

Valor de exemplo

`<API_VERSION>`

Versão da Graph API.

v23.0

`<APPSECRET_PROOF_HASH>`

Obrigatório. O appsecret\_proof é um hash sha256 do seu token de acesso que garante que as chamadas de API sejam feitas de um servidor e sejam mais seguras. [Saiba mais](/docs/graph-api/guides/secure-requests#generate-the-proof).

e3b0c...

`<CLIENT_BUSINESS_ID>`

Obrigatório. Identificação da empresa do cliente.

2780023991704

`<SYSTEM_USER_ACCESS_TOKEN>`

Obrigatório. Esse token de acesso requer a permissão business\_management.

EAAJZC...

Sintaxe da resposta

```
{
  "access_token": "<NEW_ACCESS_TOKEN>"
}
```

### Fazer a integração de usuários do app WhatsApp Business (também conhecido como "Coexistência")

Configure o Cadastro Incorporado para [permitir que os clientes façam a integração usando a conta do app WhatsApp Business e o número de telefone existentes:](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users)

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/477341352_1809983926468415_3794578338113490554_n.png?stp=dst-webp&_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=R2NVFiU_KtsQ7kNvwEgiQyW&_nc_oc=AdkpU57pZkMop0XYtViHN1HiF6hTBo8ixS6WEoz141LjyX4Z2hSDaPxEM60QG0xf6Vs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=qQy1sFsnm_y1g0iCBtIrqw&_nc_ss=8&oh=00_AfzkJTdWjmAp_m7x6ZSlt2N7dH2rmS7tssDXyT7z4yTIbQ&oe=69CADE5B)

As empresas que forem integradas depois de escolher essa opção poderão usar seu app para enviar mensagens aos clientes em grande escala, mas ainda terão a opção de enviar mensagens individualmente usando o app WhatsApp Business.

Observação: para garantir um rastreamento preciso das métricas, recomendamos que os clientes empresariais evitem clicar em links nas próprias mensagens de marketing. Clicar nesses links pode afetar os dados de rastreamento e gerar resultados distorcidos.

### Remover usuários do app WhatsApp Business

Ao remover a Coexistência, a conta será automaticamente desligada da API de Mensagens de Marketing para o WhatsApp. A conta de anúncios será desabilitada e desvinculada, o que impedirá o rastreamento das métricas de conversão.

## Ajudar a empresa a configurar a mensuração de conversões

Confira [Configurar a mensuração de conversões](/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion) para saber como as empresas podem mensurar quando uma mensagem de marketing da API de Mensagens de Marketing para o WhatsApp gera uma conversão (por exemplo, adição ao carrinho, compra).

É **altamente recomendado** que os parceiros trabalhem com os clientes para configurar os relatórios de conversão. Assim, os clientes podem acessar as mensurações de métricas e otimizações aprimoradas oferecidas pela API de Mensagens de Marketing para o WhatsApp.

## Como enviar mensagens

Para saber mais sobre como enviar mensagens e receber webhooks em nome dos seus clientes via API de Mensagens de Marketing para o WhatsApp, confira [Como enviar mensagens](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages).

## Como visualizar métricas

Confira o Guia sobre como [visualizar métricas](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics) e veja como fazer o seguinte:

-   Buscar as identificações de entidades de anúncio mapeadas a contas do WhatsApp Business e modelos de uma empresa com o objetivo de chamar as APIs de Insights.-   Buscar métricas para mensagens enviadas via API de Mensagens de Marketing para o WhatsApp.

É **altamente recomendado** que os parceiros busquem as métricas usando as APIs de Insights sobre Anúncios (e não as APIs de Gerenciamento de Negócios), porque essas APIs fornecem relatórios de métricas mais completos, incluindo relatórios de conversão de fontes, como eventos de conversão na web e no app.

Depois de fazer a integração às APIs de relatórios (recomendamos a API de Insights), exiba essas métricas nos seus painéis e nas suas APIs para que elas possam ser usadas pelos clientes.

Entre em contato com seu gerente de parceiros para receber sugestões sobre as boas práticas para métricas, incluindo uma cópia do “**Manual dos painéis de relatórios de mensagens empresariais**” da Meta para parceiros.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)