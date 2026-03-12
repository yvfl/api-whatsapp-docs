<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions -->
<!-- Scraped: 2026-03-10T22:05:23.608Z -->

# Soluções multiparceiro

Updated: 12 de dez de 2025

Este documento explica como configurar soluções multiparceiros ("soluções") e como usá-las com o [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview).

As soluções multiparceiros permitem que parceiros de soluções e provedores de tecnologia gerenciem conjuntamente os ativos do WhatsApp dos clientes para oferecer serviços de mensagens da plataforma a eles. Por exemplo, caso você seja provedor de tecnologia e não consiga oferecer serviços de mensagens personalizados ou completos do WhatsApp aos seus clientes, será possível trabalhar com um parceiro de solução para oferecer os serviços dele.

Depois de criada e aceita via API ou Painel de Apps, o ID da solução poderá ser usado para personalizar o fluxo de Cadastro Incorporado. Os clientes integrados por meio do fluxo personalizado poderão conceder acesso a ativos para todos os parceiros de soluções.

As soluções também podem ser configuradas por meio de um botão incorporado que aciona uma interface que reúne informações de apps de Provedores de Tecnologia. Esse fluxo e as chamadas de API envolvidas são descritos no documento [Solução multiparceiros – criação incorporada](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solution-embedded-creation). Porém, as informações abaixo ainda são relevantes e devem ser lidas primeiro.

## Requisitos

Você precisa ser um [Parceiro de Soluções](/documentation/business-messaging/whatsapp/solution-providers/overview#solution-partners) aprovado, um Provedor de Tecnologia que concluiu as etapas apropriadas para o uso pretendido descritas no nosso documento [Começar como Provedor de Tecnologia](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers) ou um Provedor de Tecnologia que tenha sido atualizado para a categoria de [Parceiro de Tecnologia](/documentation/business-messaging/whatsapp/solution-providers/overview#tech-partners).

Caso seu app faça chamadas de API para acessar dados de clientes integrados:

-   O app deverá ser o mesmo cujo token será usado nas solicitações de API.-   O app precisou passar pelo processo de análise e receber aprovação para as permissões [whatsapp\_business\_management](/docs/permissions#w) e [whatsapp\_business\_messaging](/docs/permissions#w).-   O app precisará ter assinado o campo de webhooks **account\_updates** e ser capaz de processar webhooks com sucesso para clientes integrados.

## Como criar soluções multiparceiros

Acesse **Painel de Apps** > **WhatsApp** > **Soluções para parceiros** para criar, aceitar e gerenciar soluções.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/387755976_1054085509106646_2627484372064430460_n.png?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=jKotJI7b9hAQ7kNvwFr2nWl&_nc_oc=AdlX4Ul99dqWHJSk2fL0sbUj3MDDhdQK5pI7O_8_GP4UZDqCQo1OmPizEZHtx27Go40&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=onwkzvit9YUub24pS2SAhA&_nc_ss=8&oh=00_Afz7GWuHVs8rfqGgJuPgi1Tsno8VvpVf2OZH2QUwp5i6yg&oe=69CAE560)

As soluções podem ser criadas por qualquer parceiro da solução. Depois de criada, uma solicitação de solução é enviada ao parceiro convidado, que pode usar o Painel para aceitar ou recusar. Uma vez aceita, qualquer parceiro poderá usar o ID da solução para personalizar o fluxo de Cadastro Incorporado e integrar clientes empresariais.

### Estados da solução

Os estados das soluções são exibidos no painel **Soluções de parceiros**. As soluções podem ter os seguintes estados:

Estado

Descrição

**Ativo**

A solução foi aceita pelo convidado e pode ser usada ao configurar o Cadastro Incorporado para integração do cliente.

**Desativada**

A solução foi desativada.

  
Os clientes que tentarem acessar o Cadastro Incorporado configurado para uma solução nesse estado verão um erro informando que não é possível usá-la para integração no momento.

**Rascunho**

A solução foi iniciada e salva, mas você ainda não a enviou ao seu parceiro.

  
Os clientes que tentarem acessar o Cadastro Incorporado configurado para uma solução nesse estado verão um erro informando que não é possível usá-la para integração no momento.

**Inativo**

A solicitação de solução foi recusada pelo seu parceiro.

  
Os clientes que tentarem acessar o Cadastro Incorporado configurado para uma solução nesse estado verão um erro informando que não é possível usá-la para integração no momento.

**Pendente**

A solução não foi aceita nem recusada pelo seu parceiro.

  
Os clientes que tentarem acessar o Cadastro Incorporado configurado para uma solução nesse estado verão um erro informando que não é possível usá-la para integração no momento.

**Desativação pendente**

Seu parceiro solicitou a desativação da solução. Você pode aceitar ou recusar a solicitação.

### Limites de integração

Os provedores de tecnologia que fazem parte de uma solução podem integrar até 200 novos clientes em um período contínuo de uma semana. Apenas clientes novos na Plataforma do WhatsApp Business são contabilizados nesse limite.

## Cadastro Incorporado

O [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) pode ser configurado e hospedado por um dos parceiros da solução ou por ambos. Depois da implementação, os clientes que acessarem o Cadastro Incorporado verão uma versão personalizada, explicando que, ao concluírem o fluxo, eles estarão concedendo acesso aos dados do WhatsApp a ambos os parceiros:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/387758256_729453148995242_4492854088232630406_n.png?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Mze7okszKxQQ7kNvwG6eGfj&_nc_oc=Admid079_rmLhPLI-N4nmvjd-r39U_5MFw4xPpWKo9wouUqNrFLKVsHyY2fZFMCeFVU&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=onwkzvit9YUub24pS2SAhA&_nc_ss=8&oh=00_AfwAxO4yNhCFl4u2ILo3OC0C9RUjxrB4sUsYxikNQYq_Aw&oe=69CAC175)

Quando um cliente conclui o fluxo, todos os respectivos ativos do WhatsApp necessários são gerados automaticamente e o acesso a eles é concedido a ambos os parceiros da solução.

## Cobrança

Os clientes integrados via Cadastro Incorporado configurado com um ID de solução compartilham a linha de crédito do parceiro de solução associado.

## Etapa 1: determinar os detalhes da solução

Entre em contato com seu parceiro em potencial e trabalhem juntos para definir o seguinte:

-   O nome da solução. O nome da solução aparecerá no painel de **Soluções do Parceiro** exibido no Painel de Apps. Por isso, você e seu parceiro devem escolher um nome que diferencie a solução de outras que possam ser iniciadas ou aceitas.-   Quem criará e iniciará a solicitação de solução. Qualquer parceiro pode fazer isso. Se você estiver iniciando a solicitação, será necessário ter o ID do app do parceiro.-   O host do Cadastro Incorporado configurado com a identificação da solução. Essa ação pode ser realizada por um ou ambos os parceiros.-   Outros. Isso inclui contratos, acordos do nível de serviço, serviços prestados, processos de cobrança e assim por diante. Essas determinações ficam a critério de você e do seu parceiro e estarão sujeitas aos seus acordos firmados separadamente com a Meta.

## Etapa 2: assinar webhooks

Assine os campos de webhook **account\_update** e **partner\_solutions**. Esses webhooks informarão quando novos clientes comerciais forem integrados e quando soluções de parceiros associadas a você forem criadas ou editadas.

Consulte a seção [Webhooks](#webhooks) abaixo para ver exemplos de cargas e saber o que procurar ao receber um desses webhooks.

## Etapa 3: criar uma solução

Se você estiver criando a solução, navegue até o **Painel de Apps** > **WhatsApp** > **Soluções para parceiros** e clique no botão **Criar uma solução para parceiros**.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/387766072_815168047024704_8866666397602417825_n.png?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=0wQzHP3sMeEQ7kNvwEHswMc&_nc_oc=AdkGCBVgyN0CGfrvCigizMv1bpCJlzPzJ7Fgopg-UEbC_zAluVij0d3_3RymxMDPHc8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=onwkzvit9YUub24pS2SAhA&_nc_ss=8&oh=00_Afzer3t9IftAHcoBcmugUaXGdjoE6DSCiuSSjsKKVxMjUw&oe=69CACAD1)

Use o ID do app do seu parceiro para concluir o fluxo. Como parte do fluxo de criação, é possível designar quais apps de parceiros de soluções podem ser usados por clientes empresariais integrados para enviar mensagens (**Somente eu**, **Somente meu parceiro**).

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/466044298_1209676256996747_5273108359679787011_n.png?stp=dst-webp&_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=77NIUU56fMUQ7kNvwG5NSs6&_nc_oc=AdndmRz4Ng0bNl3_XophsoKKy4tsGwBlK5TV4N945KEAO2WympNOHeqBUIr-FyJJlIA&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=onwkzvit9YUub24pS2SAhA&_nc_ss=8&oh=00_Afy84ntMGzGMnjZ6-TX1VIMYqBP8zC1qDROVDcMul2YLjA&oe=69CAC21A)

Após a criação, um email e uma notificação do Meta Business Suite serão enviados ao seu parceiro. Além disso, um webhook **partner\_solutions** será disparado.

A solução aparecerá no painel **Soluções para parceiros** com o status **Pendente** até que receba o aceite do parceiro. Se for aceita, o status mudará para **Ativa**. Caso seja recusada, o status exibido será **Inativa**.

## Etapa 4: aceitar a solicitação de solução

Todos com privilégios de administrador (**controle total**) no seu portfólio empresarial serão informados por email e via notificação do Meta Business Suite quando o parceiro enviar uma solicitação de solução.

Além disso, um webhook [**partner\_solutions**](#partner-solutions-webhook) será disparado com `event` definido como `SOLUTION_CREATED` e `solution_status` como `INITIATED`. Capture o ID da solução (`solution_id`) se você for aceitar/rejeitar e gerenciar a solução via API.

É possível usar o Painel de Apps ou a API para aceitar a solicitação de solução do parceiro.

### Via Painel de Apps

A solicitação será exibida no painel **Painel de Apps** > **WhatsApp** > **Soluções para parceiros** com o status **Pendente**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/465912134_539074672234606_4001016335689190990_n.png?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=R74o8Cw20JAQ7kNvwEabQnH&_nc_oc=Admw5XoqfJT6G8SjJyZ-S84Cg04AxQZ6X6JaLFQcmrrKLTHUTKd60rfwruB0rAV4a58&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=onwkzvit9YUub24pS2SAhA&_nc_ss=8&oh=00_Afy1lgxGPWgPrs4A-3rO_h6PrhfSnGwU9iM-d3D2OoRM0w&oe=69CACFB1)

Se você tiver várias soluções e estiver enfrentando problemas para localizar a solicitação, use o menu suspenso no canto superior direito do painel e filtre por **Pendente**.

Verifique se tudo está correto antes de confirmar o aceite, já que as soluções não poderão ser recusadas depois que forem aceitas.

Depois que a solução for aceita, o status dela será definido como **Ativa** e você e seu parceiro poderão usar a identificação dela para [configurar o Cadastro Incorporado](#step-5-configure-embedded-signup).

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/465996567_886269830277358_6720016141752033956_n.png?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=SLDEf3-rBJcQ7kNvwHgz7Cf&_nc_oc=AdlCHyYTzr0_Qi-scDrbYc2wUA1li6ztnWjHZB0vgRpSKm2NkzzEmos7yq-cAgpAM2s&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=onwkzvit9YUub24pS2SAhA&_nc_ss=8&oh=00_AfzStSJ3bHaN3MxsZTQL4IuW6xfAJedatxmms7Duatznsg&oe=69CAEA79)

Se alguma informação estiver incorreta, recuse a solicitação e peça ao seu parceiro para fazer um novo envio com as configurações apropriadas. Caso você recuse a solicitação, seu parceiro será informado automaticamente por email e via notificação do Meta Business Suite.

### Via API

Antes de aceitar a solução, use o ponto de extremidade [**GET /<SOLUTION\_ID>**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api#get-version-solution-id) para conferir os detalhes e confirmar que tudo está correto, já que as soluções não poderão ser recusadas após o aceite.

Inclua estes campos na sua consulta:

-   `name`-   `owner_permissions`-   `partners{partner_permissions,partner_app}`

#### Exemplo de solicitação

```
curl -g 'https://graph.facebook.com/v25.0/795033096057724&fields=name,owner_permissions,partners{partner_permissions,partner_app}' \
-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

```
{  "name": "Social OVD with Lucky Shrub",  "owner_permissions": [    "MANAGE",    "DEVELOP",    "MANAGE_TEMPLATES",    "MANAGE_PHONE",    "VIEW_COST",    "MANAGE_EXTENSIONS",    "VIEW_PHONE_ASSETS",    "MANAGE_PHONE_ASSETS",    "VIEW_TEMPLATES",    "VIEW_INSIGHTS"  ],  "partners": {    "data": [      {        "partner_permissions": [          "MANAGE",          "DEVELOP",          "MANAGE_TEMPLATES",          "MANAGE_PHONE",          "VIEW_COST",          "MANAGE_EXTENSIONS",          "VIEW_PHONE_ASSETS",          "MANAGE_PHONE_ASSETS",          "VIEW_TEMPLATES",          "VIEW_INSIGHTS"        ],        "partner_app": {          "link": "https://www.facebook.com/games/?app_id=21202248997039",          "name": "Lucky Shrub",          "id": "21202248997039"        },        "id": "795033099391057"      }    ],    "paging": {      "cursors": {        "before": "QVFIUl9hX0RqLUZAPemJQVWdsYTl5WlBsY0lCb0FNTExOY2N2NzJtRENZAbDd3azBNXzhPZAndqaU5sSXdfWWJaSXJ1S2pqMi0tQUdUdm1LTGZATUDNIdGRNNE1B",        "after": "QVFIUl9hX0RqLUZAPemJQVWdsYTl5WlBsY0lCb0FNTExOY2N2NzJtRENZAbDd3azBNXzhPZAndqaU5sSXdfWWJaSXJ1S2pqMi0tQUdUdm1LTGZATUDNIdGRNNE1B"      }    }  },  "id": "795033096057724"}
```

-   `name`: o nome da solução, conforme exibido no Painel de Apps.-   `owner_permissions`: as permissões do app do seu parceiro que serão concedidas pelos clientes comerciais integrados por meio do Cadastro Incorporado.-   `partner_permissions`: as permissões do seu app que serão concedidas pelos clientes comerciais integrados por meio do Cadastro Incorporado.-   `partner_app`: o app (seu app) que receberá as permissões identificadas em `partner_permissions`.

Se todas as informações estiverem corretas, use o ponto de extremidade [**POST /<SOLUTION\_ID>/accept**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-accept-api#Updating) para aceitar a solicitação de solução. Caso contrário, use [**POST /<SOLUTION\_ID>/reject**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api#Updating) para rejeitá-la.

#### Exemplo de resposta de aceitação

```
curl -X POST 'https://graph.facebook.com/v25.0/795033096057724/accept' \
-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de solicitação de rejeição

```
curl -X POST 'https://graph.facebook.com/v25.0/795033096057724/reject' \
-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

## Etapa 5: configurar o Cadastro Incorporado

Atribua o ID da solução à propriedade `solutionID` no objeto `extras.setup` no [método de inicialização e parte de registro de retorno de ligação](/documentation/business-messaging/whatsapp/embedded-signup/implementation#launch-method-and-callback-registration) do código de Cadastro Incorporado.

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '<CONFIGURATION_ID>', // your configuration ID goes here, ensure it is in quotes
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {
        solutionID: '<SOLUTION_ID>' // add solution ID here, ensure it is in quotes
      },
      featureType: '',
      sessionInfoVersion: '3',
    }
  });
}
```

Portfólios empresariais pertencentes a você e seu parceiro (**Configurações do negócio** > **Informações da empresa**) aparecerão em todo o fluxo de Cadastro Incorporado.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/387758256_729453148995242_4492854088232630406_n.png?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Mze7okszKxQQ7kNvwG6eGfj&_nc_oc=Admid079_rmLhPLI-N4nmvjd-r39U_5MFw4xPpWKo9wouUqNrFLKVsHyY2fZFMCeFVU&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=onwkzvit9YUub24pS2SAhA&_nc_ss=8&oh=00_AfwAxO4yNhCFl4u2ILo3OC0C9RUjxrB4sUsYxikNQYq_Aw&oe=69CAC175)

Depois de configurado, exiba o fluxo de Cadastro Incorporado personalizado aos clientes na sua plataforma sempre que achar apropriado. Se você tiver várias soluções de parceiros ativas, é sua responsabilidade incluir o ID da solução correto na configuração do Cadastro Incorporado para exibir o fluxo aos clientes desejados. Caso contrário, um cliente poderá ser integrado usando a solução incorreta.

## Etapa 6: detectar clientes comerciais integrados

Para detectar clientes integrados, seu app precisará ter assinado o campo de webhook [**account\_update**](#account-update-webhook).

Quando um cliente conclui o fluxo de Cadastro Incorporado configurado com sua solução, um webhook de atualização de conta é disparado com um evento `PARTNER_ADDED` ou `PARTNER_APP_INSTALLED`. Capture os valores da propriedade `waba_id`, `solution_id` e `owner_business_id` contidos na carga do webhook, além de outros valores que você possa precisar para fornecer serviços de mensagens do WhatsApp ao cliente.

Além disso, enviaremos um email aos administradores do portfólio empresarial proprietário do app e uma notificação no Meta Business Suite ao portfólio empresarial proprietário do app.

## Etapa 7: compartilhar sua linha de crédito (somente para parceiros de soluções)

Se você for um Parceiro de Soluções, [compartilhe sua linha de crédito](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#sharing-your-credit-line) com todos os clientes comerciais recém-integrados por meio da solução do parceiro.

**Observação**: caso seja um parceiro de soluções e esteja tentando adicionar um usuário a uma conta do WhatsApp Business compartilhada com você, é preciso levar em conta os seguintes cenários:

-   Caso você não tenha a permissão para `MESSAGING` na solução, será necessário escolher quais tarefas granulares são necessárias ao adicionar o usuário à conta do WhatsApp Business compartilhada: `DEVELOP`, `MANAGE_TEMPLATES`, `MANAGE_PHONE`, `VIEW_COST`, `MANAGE_EXTENSIONS`, `VIEW_PHONE_ASSETS`, `MANAGE_PHONE_ASSETS`, `VIEW_TEMPLATES`, `VIEW_INSIGHTS`, `MANAGE_USERS` e `MANAGE_BILLING`.-   Nesse cenário, também é preciso ter `MANAGE_BILLING` para compartilhar uma linha de crédito.-   `MANAGE` só funcionará se você receber **acesso total** à solução, ou seja, incluindo `MESSAGING`.

## Webhooks

### account\_update

Quando um novo cliente comercial concluir o fluxo de Cadastro Incorporado, um webhook **account\_update** será disparado com a propriedade `event` definida como `PARTNER_ADDED`.

```
{
  "entry": [
    {
      "id": "<BUSINESS_PORTFOLIO_ID>",
      "time": <TIMESTAMP>,
      "changes": [
        {
          "value": {
            "event": "<EVENT>",
            "waba_info": {
              "waba_id": "<BUSINESS_CUSTOMER_WABA_ID>",
              "owner_business_id": "<BUSINESS_CUSTOMER_BUSINESS_PORTFOLIO_ID>",
              "solution_id": "<SOLUTION_ID>",
              "solution_partner_business_ids": [<SOLUTION_BUSINESS_PORTFOLIO_IDS>]
            }
          },
          "field": "account_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

#### Propriedades de carga

  

Espaço reservado

Descrição

Exemplo

`<BUSINESS_PORTFOLIO_ID>`

A identificação do portfólio empresarial.

`506914307656634`

`<BUSINESS_CUSTOMER_BUSINESS_PORTFOLIO_ID>`

A identificação do portfólio empresarial do cliente integrado.

`6143763655652543`

`<BUSINESS_CUSTOMER_WABA_ID>`

A identificação da conta do WhatsApp Business do cliente integrado.

`102290129340398`

`<EVENT>`

Quando definido como `PARTNER_ADDED`, indica que o cliente comercial concluiu com êxito o fluxo de Cadastro Incorporado.

`PARTNER_ADDED`

`<SOLUTION_BUSINESS_PORTFOLIO_IDS>`

As strings com identificações de portfólios empresariais pertencentes ao provedor de tecnologia (ou parceiro de tecnologia) e ao parceiro de solução associado.

`"506914307656634","116133292427920"`

`<SOLUTION_ID>`

O ID da solução.

`303610109049230`

`<TIMESTAMP>`

Registro de data e hora UNIX que indica quando o cliente concluiu com sucesso o fluxo de Cadastro Incorporado.

`1690592557`

### partner\_solutions

Quando uma solução multiparceiros for criada ou modificada, um webhook **partner\_solutions** descrevendo a alteração será disparado.

```
{
  "entry": [
    {
      "id": "<BUSINESS_PORTFOLIO_ID>",
      "time": <TIMESTAMP>,
      "changes": [
        {
          "value": {
            "event": "SOLUTION_CREATED",
            "solution_id": "<SOLUTION_ID>",
            "solution_status": "INITIATED"
          },
          "field": "partner_solutions"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

#### Propriedades de carga

  

Espaço reservado

Descrição

Exemplo

`<BUSINESS_PORTFOLIO_ID>`

A identificação do portfólio empresarial.

`506914307656634`

`<EVENT>`

Descrição do evento. Os valores podem ser os seguintes:

-   `SOLUTION_CREATED`: a solução foi criada.-   `SOLUTION_UPDATED`: o `solution_status` foi alterado.

`SOLUTION_CREATED`

`<SOLUTION_ID>`

O ID da solução.

`774485461512159`

`<SOLUTION_STATUS>`

O status da solução. Os valores podem ser os seguintes:

-   `ACTIVE`: o parceiro aceitou a solicitação de solução. Ela pode ser usada com o Cadastro Incorporado.-   `DEACTIVATED`: a solução foi desativada e não pode ser usada com o Cadastro Incorporado para integrar clientes comerciais.-   `DRAFT`: o rascunho da solução foi concluído, mas o convite não foi enviado ao parceiro.-   `INITIATED`: o parceiro foi convidado a aceitar a solução, mas ainda não aceitou nem rejeitou a solicitação.-   `PENDING`: o parceiro de solução ainda não aceitou nem rejeitou a solicitação.-   `PENDING_DEACTIVATION`: o proprietário solicitou a desativação de uma solução ativa, mas o parceiro ainda não aceitou a solicitação.-   `REJECTED`: o parceiro rejeitou a solicitação de solução.

`INITIATED`

`<TIMESTAMP>`

Registro de data e hora UNIX que indica quando o cliente concluiu com sucesso o fluxo de Cadastro Incorporado.

`1718143652`

## Como editar ou desativar soluções

Você pode usar o Painel de Apps ou a API para editar ou desativar uma solução.

Ao solicitar a desativação, o status da solução mudará para **Desativação pendente**.Seu parceiro será informado por email e via notificação do Meta Business Suite. Além disso, um webhook [**partner\_solutions**](#partner-solutions-webhook) será disparado com `event` definido como `SOLUTION_UPDATED` e `solution_status` como `PENDING_DEACTIVATION`. Seu parceiro poderá então aceitar ou rejeitar a solicitação feita por você.

As soluções de parceiros poderão continuar sendo usadas para integrar clientes até que seu parceiro aceite a solicitação de desativação.

Caso a solicitação de desativação seja rejeitada, a solução permanecerá no estado **Ativa** e poderá continuar a ser usada para integrar clientes.

Se for aceita, o status da solução mudará para **Desativada** e ela não poderá mais ser usada em novas integrações. Isso também significa que nem você nem seu parceiro poderão exibir a solução aos clientes comerciais.

### Limitações

-   Só será possível editar soluções que tiverem sido criadas por você.-   É possível solicitar a desativação de qualquer solução que tenha sido criada por você e que esteja no estado **Ativa**.

### Via Painel de Apps

Use o painel **Painel de Apps** > **WhatsApp** > **Soluções para parceiros** para editar ou desativar uma solução. Importante: nenhuma outra pessoa poderá editar soluções que tiverem sido iniciadas por você.

Estado

Ações permitidas

**Ativo**

É possível editar o nome da solução ou desativá-la.

**Desativada**

As soluções nesse estado não podem ser editadas.

**Rascunho**

É possível editar o nome da solução.

**Inativo**

É possível editar o nome da solução.

**Pendente**

As soluções nesse estado não poderão ser editadas até que sejam aceitas ou recusadas pelo seu parceiro.

**Desativação pendente**

É possível aceitar ou recusar a solicitação de desativação do parceiro.

### Via API

### Como enviar uma solicitação de desativação

Use o ponto de extremidade [**POST /<SOLUTION\_ID>/send\_deactivation\_request**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/send-deactivation-request-api) para enviar uma solicitação de desativação da solução. É preciso ser o proprietário da solução para enviar essa solicitação.

#### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v20.0/795033096057724/send_deactivation_request \-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
{    "success": true}
```

### Como aceitar uma solicitação de desativação

Use o ponto de extremidade [**POST /<SOLUTION\_ID>/accept\_deactivation\_request**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/accept-deactivation-request-api#Updating) para aceitar uma solicitação de desativação da solução. É preciso ser o proprietário da solução para enviar essa solicitação.

#### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v20.0/795033096057724/accept_deactivation_request \-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
{    "success": true}
```

### Como rejeitar uma solicitação de desativação

Use o ponto de extremidade [**POST /<SOLUTION\_ID>/reject\_deactivation\_request**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/reject-deactivation-request-api#Updating) para rejeitar uma solicitação de desativação da solução. É preciso ser o proprietário da solução para enviar essa solicitação.

#### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v20.0/795033096057724/reject_deactivation_request \-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
{    "success": true}
```

## Como verificar manualmente clientes integrados

Como alternativa em caso de problemas com o webhook, você pode verificar manualmente se há clientes integrados. Para isso, use o ponto de extremidade [**GET /<BUSINESS\_PORTFOLIO\_ID>/client\_whatsapp\_business\_accounts**](/docs/marketing-api/reference/business/client_whatsapp_business_accounts#Reading), que retornará identificações das contas do WhatsApp Business (WABA) de todos os clientes recém-integrados por meio da solução.

### Sintaxe do pedido

```
GET /<BUSINESS_PORTFOLIO_ID>/client_whatsapp_business_accounts
  ?filtering=[
    {
      "field":"partners",
      "operator":"ALL",
      "value":[
        "<PARTNER_BUSINESS_PORTFOLIO_ID>"
      ]
    }
  ]
```

Substitua `<PARTNER_BUSINESS_PORTFOLIO_ID>` pela identificação do portfólio empresarial do parceiro.

### Resposta

```
{
  "data": [
    {
      "id": "<CUSTOMER_WABA_ID>",
      "name": "<CUSTOMER_WABA_NAME>",
      "timezone_id": "<CUSTOMER_WABA_TIMEZONE_ID>",
      "business_type": "ent",
      "message_template_namespace": "<MESSAGE_TEMPLATE_NAMESPACE>"
    },
    ...
  ],
  "paging": {
    "cursors": {
      "before": "<BEFORE>",
      "after": "<AFTER>"
    },
    "next": "<NEXT>"
  }
}
```

Espaço reservado

Descrição

Valor de exemplo

`<CUSTOMER_WABA_ID>`

A identificação da conta do WhatsApp Business do cliente.

`102290129340398`

`<CUSTOMER_WABA_NAME>`

O nome da conta do WhatsApp Business do cliente.

`Cool New Customer 2`

`<CUSTOMER_WABA_TIMEZONE_ID>`

O ID do fuso horário da conta do WhatsApp Business do cliente.

`7`

`<MESSAGE_TEMPLATE_NAMESPACE>`

**Obsoleta.**

O namespace do modelo de conta do WhatsApp Business do cliente na API Local (obsoleto).

`0add05f3_abbe_4a55_b6f5_e751fa4e1244`

`<BEFORE>`

O cursor de resultados paginados. Consulte [Resultados paginados](/docs/graph-api/results).

`QVFIU...`

`<AFTER>`

O cursor de resultados paginados. Consulte [Resultados paginados](/docs/graph-api/results).

`QVFIU...`

`<NEXT>`

O link para resultados paginados. Consulte [Resultados paginados](/docs/graph-api/results).

`https://graph.facebook.com/v18.0/50691...`

### Exemplo de solicitação

```
curl -g 'https://graph.facebook.com/v25.0/506914307656634/client_whatsapp_business_accounts?filtering=[{%22field%22%3A%22partners%22%2C%20%22operator%22%3A%20%22ALL%22%2C%20%22value%22%3A%20[%22520744086200222%22]}]' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{
  "data": [
    {
      "id": "102290129340398",
      "name": "Cool New Customer 2",
      "timezone_id": "7",
      "business_type": "ent",
      "message_template_namespace": "0add05f3_abbe_4a55_b6f5_e751fa4e1244"
    },
    {
      "id": "112077945305052",
      "name": "Cool New Customer 1",
      "timezone_id": "7",
      "business_type": "ent",
      "message_template_namespace": "b2d0c901_b542_46a0_ab99_5939b75267d8"
    },
    ...
  ],
  "paging": {
    "cursors": {
      "before": "QVFIU...",
      "after": "QVFIU..."
    },
    "next": "https://graph.facebook.com/v25.0/50691..."
  }
}
```

## Como obter dados da solução

### Como obter campos em uma solução

Use o ponto de extremidade [**GET /<SOLUTION\_ID>**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api#get-version-solution-id) para obter campos padrão em uma solução ou use o parâmetro da string de consulta `fields` para solicitar campos específicos.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v25.0/17602267745700?fields=name,status,partners' \
-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

```
{  "name": "Social OVD with Lucky Shrub",  "status": "ACTIVE",  "partners": {    "data": [      {        "partner_app": {          "link": "https://www.socialoverdrive.com/",          "name": "Social Overdrive",          "id": "637576208107267"        },        "status": "ACCEPTED",        "id": "17602267745704"      }    ],    "paging": {      "cursors": {        "before": "QVFIUmxnSE9LUFliNzlUTWdhTlYzQjBtekprSC0wQUdoZAGRYbFlzeUpDMG9yNkF1OHYyel9tcUlBbGhFckxJQ1Y3UFZA4dUkycEk0WDJwRGYzT2JYbVhEdFdB",        "after": "QVFIUmxnSE9LUFliNzlUTWdhTlYzQjBtekprSC0wQUdoZAGRYbFlzeUpDMG9yNkF1OHYyel9tcUlBbGhFckxJQ1Y3UFZA4dUkycEk0WDJwRGYzT2JYbVhEdFdB"      }    }  },  "id": "17602267745700"}
```

### Como obter soluções associadas ao seu app

Use o ponto de extremidade [**GET /<APP\_ID>/whatsapp\_business\_solutions**](/docs/graph-api/reference/application/whatsapp_business_solutions#Reading) para obter uma lista das soluções associadas ao seu app.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v25.0/21202248997039/whatsapp_business_solutions' \
-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

```
{  "data": [    {      "name": "Social OVD with Lucky Shrub",      "status": "INITIATED",      "status_for_pending_request": "PENDING_ACTIVATION",      "id": "19702253086782"    },    {      "name": "Social OVD with Social Brew",      "status": "ACTIVE",      "status_for_pending_request": "NONE",      "id": "17602267745700"    }  ],  "paging": {    "cursors": {      "before": "QVFIUkxlbkhTZA1VleGwyWHd3SmlSMnlnelhlbUVSSjVYQmU2aXVmb1YyWk9JTkx3b2gwNE9FS3J2ejMzNENxbmh1bWZAqSkZAJUzNfbmF4NmtPaFYxQldaaXR3",      "after": "QVFIUlgyLTlQYWV0eTNGWXVhcTJnOEhzY1lvUDloVV8wUUxVQk9YMVJ5UGlBZAmx1Q1BjaEVwd0tWdmNvRU9jdGRiNnlrc193alRNaDV2SXZAfN1kybDBibEFR"    }  }}
```

### Como obter soluções que integraram uma WABA

Use o ponto de extremidade [**GET /<WABA\_ID>/solutions**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-solutions-list-api#Reading) para obter uma lista das soluções que integraram uma WABA específica.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v25.0/102290129340398/solutions' \
-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

```
{  "data": [    {      "name": "Social OVD with Social Brew",      "status": "ACTIVE",      "status_for_pending_request": "NONE",      "id": "17602267745700"    }  ],  "paging": {    "cursors": {      "before": "QVFIUjZACTFNmWURVTHN2NFVaM2ZApd2RaOGIxOU5wenpQZADFkbVdtSEJDSGFDelhDOU5hT28xcmJLS05TM3U0UUFmdVNGUWFfdjdJb1o2OTVNY083ZAHYtc2x3",      "after": "QVFIUjZACTFNmWURVTHN2NFVaM2ZApd2RaOGIxOU5wenpQZADFkbVdtSEJDSGFDelhDOU5hT28xcmJLS05TM3U0UUFmdVNGUWFfdjdJb1o2OTVNY083ZAHYtc2x3"    }  }}
```

### Como obter parceiros de uma solução

Use o ponto de extremidade [**GET /<SOLUTION\_ID>/partners**](/docs/graph-api/reference/whats-app-business-solution/partners#Reading) para obter uma lista dos parceiros de uma solução.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v25.0/17602267745700/partners' \
-H 'Authorization: Bearer EAAAT...'
```

#### Exemplo de resposta

```
{  "data": [    {      "partner_app": {        "link": "https://www.socialoverdrive.com",        "name": "Social Overdrive",        "id": "637576208107267"      },      "status": "ACCEPTED",      "id": "17602267745704"    }  ],  "paging": {    "cursors": {      "before": "QVFIUmxnSE9LUFliNzlUTWdhTlYzQjBtekprSC0wQUdoZAGRYbFlzeUpDMG9yNkF1OHYyel9tcUlBbGhFckxJQ1Y3UFZA4dUkycEk0WDJwRGYzT2JYbVhEdFdB",      "after": "QVFIUmxnSE9LUFliNzlUTWdhTlYzQjBtekprSC0wQUdoZAGRYbFlzeUpDMG9yNkF1OHYyel9tcUlBbGhFckxJQ1Y3UFZA4dUkycEk0WDJwRGYzT2JYbVhEdFdB"    }  }}
```

## Como obter os tokens comerciais dos clientes

Se você não estiver hospedando o Cadastro Incorporado, mas quiser obter o [token de acesso do usuário do sistema de integração comercial](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) ("token da empresa") de um cliente empresarial integrado, será possível fazer isso usando a identificação do portfólio empresarial e a identificação da solução contidas no webhook [account\_update](#account-update-webhook) que foi disparado quando o cliente concluiu o fluxo de Cadastro Incorporado.

### Solicitação

Use o ponto de extremidade [GET /<SOLUTION\_ID>/access\_token](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api#Reading) e peça o parâmetro `business_id` para obter o [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) de um cliente empresarial integrado.

```
curl 'https://graph.facebook.com/<API_VERSION>/<SOLUTION_ID>/access_token?business_id=<CUSTOMER_BUSINESS_PORTFOLIO_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<API_VERSION>`

_String_

**Opcional.**

Versão da Graph API.

v25.0

`<CUSTOMER_BUSINESS_PORTFOLIO_ID>`

**Obrigatório.**

A identificação do portfólio empresarial do cliente empresarial integrado.

Essa informação é incluída nos webhooks [account\_update](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#onboarded-business-customer) quando o cliente empresarial conclui o Cadastro Incorporado.

`2729063490586005`

`<SOLUTION_ID>`

**Obrigatório.**

A identificação da solução multiparceiros.

`303610109049230`

`<SYSTEM_TOKEN>`

**Obrigatório.**

Seu [token de acesso de usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "data": [
    {
      "access_token": "<CUSTOMER_BUSINESS_TOKEN>"
    }
  ]
}
```

## Como migrar ativos de clientes comerciais entre soluções

Você tem várias opções para migrar ativos de clientes comerciais para e a partir de Soluções Multiparceiros. Consulte o artigo [Como migrar ativos de clientes empresariais](/documentation/business-messaging/whatsapp/solution-providers/support#migrating-business-customer-assets).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)