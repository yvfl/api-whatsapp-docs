<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/get-started-for-solution-partners -->
<!-- Scraped: 2026-01-24T00:56:53.781Z -->

# Primeiros passos como parceiro de soluções

Updated: 12 de dez de 2025

Este guia descreve as etapas para [parceiros de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview#solution-partners) oferecerem a API de Nuvem aos clientes. Estas são as quatro etapas principais:

-   [Preparar e planejar](#prepare-plan)-   [Configurar ativos](#set-up-assets)-   [Assinar contratos](#sign-contracts)-   [Criar integração](#build-integration)

Depois de concluir o processo, [acompanhe as atualizações mensais](#keep-up-with-monthly-updates).

## Preparar e planejar

### Ler a documentação

Antes de começar, leia a [documentação para desenvolvedores](/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api) e a [coleção do Postman](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.postman.com%2Fmeta%2Fworkspace%2Fwhatsapp-business-platform%2Fcollection%2F13382743-84d01ff8-4253-4720-b454-af661f36acc2&h=AT2AyH7J6bKWTS-sOnrCZAjuE1liG_EPGqpikOGvUwQe3LQg1TkFGMFW_nPKCYdhHnZgeHSXC29y4J5N6awhI_oJY7fxedG1U_AiEYzy7D14rUaiPuIjSBrofr_ftDsFbRIy2lMFmzVubDuj96UTLFAhkC8). Dessa forma, você pode entender o funcionamento da API de Nuvem e aprender sobre os primeiros passos e a migração de números.

### Planejar a integração e a migração

**Recomendamos usar o Cadastro incorporado para integrar novos clientes comerciais à API de Nuvem.** Implemente o [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) caso ainda não tenha feito isso. O Cadastro Incorporado é o modo mais rápido e fácil de registrar clientes, que podem começar a enviar mensagens em menos de cinco minutos.

## Configurar ativos

Para usar a API de Nuvem, os parceiros de soluções precisam ter os seguintes ativos:

Ativo

Instruções específicas

**Portfólio empresarial**

É possível usar um existente ou [configurar um novo](https://www.facebook.com/business/help/1710077379203657). Salve a identificação do portfólio empresarial.

**Conta do WhatsApp Business** (WABA)

Para saber mais, consulte [Como criar uma conta na plataforma do WhatsApp Business](https://www.facebook.com/business/help/2087193751603668).

[**App da Meta**](/apps/)

Se você não tiver um app, será necessário [criar um](/docs/development/create-an-app) do tipo **Empresa**. Lembre-se de adicionar um nome de exibição e um email de contato ao app.

Ao atuar como um parceiro de soluções, você precisa concluir a [análise do app](/docs/app-review) e solicitar acesso avançado às seguintes permissões:

-   [`whatsapp_business_management`](/docs/permissions/reference/whatsapp_business_management): usada para gerenciar números de telefone, modelos de mensagem, inscrições e o perfil comercial de uma conta do WhatsApp Business. Para receber essa permissão, o app precisa passar pela [Análise do App](/docs/app-review).-   [`whatsapp_business_messaging`](/docs/permissions/reference/whatsapp_business_messaging): usada para enviar/receber mensagens de usuários do WhatsApp, além de carregar/baixar mídia em uma conta do WhatsApp Business. Para receber essa permissão, o app precisa passar pela [Análise do App](/docs/app-review).-   [`whatsapp_business_manage_events`](/docs/permissions#whatsapp_business_manage_events): usada para registrar eventos, como compras, adições ao carrinho, leads e muito mais, em uma conta do WhatsApp Business. Solicite essa permissão somente se estiver usando a [API de Mensagens de Marketing Lite](/docs/whatsapp/marketing-messages-lite-api) com a [API de Conversões](/docs/marketing-api/conversions-api). Para receber essa permissão, o app precisa passar pela [Análise do App](/docs/app-review).

Os parceiros de soluções podem usar o mesmo app da Meta para diferentes clientes e WABAs. No entanto, é importante lembrar que cada app precisa passar pela Análise do App e pode ter apenas um ponto de extremidade de webhook.

**Usuário do sistema**

Consulte [Como adicionar usuários do sistema ao portfólio empresarial](https://www.facebook.com/business/help/503306463479099) para saber mais.

No momento, um app da Meta com as permissões `whatsapp_business_messaging`, `whatsapp_business_management`, `whatsapp_business_manage_events` e `business_messaging` tem acesso a até:

-   Um administrador usuário do sistema-   Um funcionário usuário do sistema

Recomendamos que você use o usuário administrador do sistema para a implantação da produção. Para saber mais, veja [Sobre o acesso ao portfólio empresarial](https://www.facebook.com/business/help/442345745885606).

**Número de telefone comercial**

Esse é o número de telefone que a empresa usará para enviar mensagens. Esses números de telefone precisam ser verificados por meio de SMS ou ligação de voz.

Para parceiros de soluções e empresas diretas: se você quiser usar o próprio número, será preciso [adicionar um telefone](https://www.facebook.com/business/help/456220311516626) no Gerenciador do WhatsApp e verificá-lo com o ponto de extremidade por meio da [Graph API](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#verify-phone-numbers).

Para empresas que usam parceiros de soluções: se você quiser usar o próprio número, será preciso adicionar e verificar o telefone por meio do [fluxo de Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) do parceiro de soluções.

Não há limite para a quantidade de telefones comerciais que podem ser integrados à API de Nuvem.

**Número de telefone do consumidor**

O número de telefone usado pelo app do WhatsApp do consumidor no momento. Esse número receberá as mensagens enviadas pelo telefone comercial.

## Assinar contratos

### Aceitação dos Termos de Serviço

Para acessar a API de Nuvem de Mensagens do WhatsApp Business, é necessário primeiro aceitar os Termos de Serviço do WhatsApp Business em nome da sua empresa.

Para isso, acesse o [Gerenciador do WhatsApp](https://business.facebook.com/wa/manage/) e aceite os Termos de Serviço no banner informativo.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/573027894_844716734562313_3897613670462505628_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=yvVqJT5GgXAQ7kNvwGuM5B3&_nc_oc=AdkKHU8hFi_dXAKf_fAjKLvps-scBBRqgLRUjami-15E3CEuVswFG7Iowljz83t__S0&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=OhJd-uV9tf6nPirccfifAg&oh=00_AfpNqhea5UM-UwJXvwdxynLqOw1dMGuzshu0umq5XN171Q&oe=698E6399)

As novas empresas que usarem a API de Nuvem precisarão aceitar os Termos de Serviço antes de começarem a usar essa API. Até que você aceite os Termos de Serviço, ocorrerá falha nas chamadas de registro.

É preciso aceitar os Termos de Serviço como desenvolvedor. Se você for um parceiro de soluções, não será necessário que o cliente os aceite.

## Criar a integração

### Etapa 1: receber token de acesso do usuário do sistema

As chamadas da Graph API usam tokens de acesso para autenticação. Para saber mais, consulte [Tokens de acesso](/docs/facebook-login/access-tokens). Recomendamos que você use o usuário do sistema para gerar o token.

Para gerar um token de acesso do usuário do sistema:

-   Para ver o usuário que você criou, acesse [**Portfólio empresarial**](https://business.facebook.com/) > **Configurações do negócio** > **Usuários** > **Usuários do sistema**.
    -   Clique no usuário e selecione **Adicionar ativos**. Essa ação abre uma nova janela.
    -   No painel lateral esquerdo, em **Selecionar tipo de ativo**, escolha **Apps**. Em **Selecionar ativos**, escolha o app da Meta que quer usar. Seu app precisa ter as permissões corretas. Habilite a opção **Desenvolver app** correspondente.
    -   Selecione **Salvar alterações** para salvar as configurações e retornar à tela principal do usuário do sistema.
    -   Agora, está tudo pronto para gerar o token. Na tela principal do usuário do sistema, clique em **Gerar token** e selecione o app da Meta.
    -   Depois de selecionar o app, você verá uma lista de permissões disponíveis. Selecione `whatsapp_business_management`, `whatsapp_business_messaging` e `whatsapp_business_manage_events`. Clique em **Gerar token**.
    -   Uma nova janela abrirá com o usuário do sistema, o app atribuído e o token de acesso. Salve o token.
    -   Se você quiser, será possível clicar no token para ver o depurador de token. No depurador, você verá as permissões selecionadas. Também é possível colar o token diretamente no [Depurador de Token de Acesso](/tools/debug/accesstoken).
    

### Etapa 2: configurar webhooks

Com webhooks configurados, você recebe notificações HTTP em tempo real da Plataforma do WhatsApp Business. Isso significa que você receberá uma notificação quando um cliente enviar uma mensagem ou quando houver mudanças na sua conta do WhatsApp Business (WABA), por exemplo.

Para configurar o ponto de extremidade do webhook, é necessário criar um servidor da web que usa a internet com um URL que atenda aos requisitos da Meta e do WhatsApp. Para ver mais informações, consulte nosso documento [Webhooks](/documentation/business-messaging/whatsapp/webhooks/overview). Se precisar de um ponto de extremidade para fins de teste, [implemente um app de teste](/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot) que descarrega as cargas do webhook no seu console.

#### Configuração do app

Quando o ponto de extremidade estiver pronto, configure-o para ser usado pelo seu app da Meta:

No Painel de Apps, acesse **WhatsApp** > **Configuração** e clique no botão **Editar**.

-   URL de retorno de chamada: o URL para o qual a Meta enviará os eventos. Consulte o guia de [introdução aos webhooks](/docs/graph-api/webhooks/getting-started) para ver mais informações sobre como criar o URL.-   Token de verificação: essa string é configurada por você ao criar o ponto de extremidade de webhook.

Depois de adicionar essas informações, clique em **Verificar e salvar**.

Depois de salvar, volte ao painel **Configuração**, clique no botão **Gerenciar** e assine os campos específicos do webhook. Para receber notificações de mensagens de clientes, assine o campo de webhook **messages**.

O Webhooks precisa ser configurado apenas uma vez em cada app. É possível usar o mesmo Webhook para receber diferentes tipos de evento de várias contas do WhatsApp Business ou configurar uma substituição. Para saber mais, consulte a seção sobre Webhooks.

### Etapa 3: cadastrar sua WABA

Para garantir que você receberá as notificações referentes à conta correta, cadastre seu app:

```
curl -X POST \
'https://graph.facebook.com/v24.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

Se você receber a resposta abaixo, todos os eventos de webhook referentes aos números de telefone da conta serão enviados para o ponto de extremidade de webhook que foi configurado.

```
{  "success": true}
```

### Etapa 4: receber a identificação do número de telefone

Para enviar mensagens, é preciso registrar o número de telefone que você quer usar. Para registrar o número, é preciso obter a identificação dele. Para isso, faça a seguinte chamada de API:

```
curl -X GET \
'https://graph.facebook.com/v24.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/phone_numbers' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

Se o pedido for bem-sucedido, a resposta incluirá todos os números de telefone conectados à sua WABA:

```
{  "data": [    {      "verified_name": "Jasper's Market",      "display_phone_number": "+1 631-555-5555",      "id": "1906385232743451",      "quality_rating": "GREEN"    },    {      "verified_name": "Jasper's Ice Cream",      "display_phone_number": "+1 631-555-5556",      "id": "1913623884432103",      "quality_rating": "NA"    }  ]}
```

Salve a identificação do número de telefone que você quer registrar. Para mais informações sobre esse ponto de extremidade, consulte [Ler números de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

#### Exceção na migração

Se você estiver migrando um número de telefone da API Local para a API de Nuvem, precisará cumprir etapas adicionais antes de registrar um número com a API de Nuvem. Leia [Migrar da API Local para a API de Nuvem](/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud) e confira o processo completo.

### Etapa 5: registrar um número de telefone

É possível fazer o registro com a identificação do número de telefone em mãos. Na chamada de API de registro, você realiza duas ações ao mesmo tempo:

-   Registrar o telefone.-   [Habilitar a confirmação em duas etapas](/documentation/business-messaging/whatsapp/business-phone-numbers/two-step-verification) por meio de um código de cadastro de seis dígitos. Esse código deve ser configurado por você. Salve e memorize esse código, pois ele pode ser solicitado posteriormente.

**A configuração da autenticação de dois fatores é obrigatória para usar a API de Nuvem. Se não fizer isso, você receberá uma mensagem de falha na integração:**

![Onboard Failure: To continue working in your account, please refresh the page to authenticate. Or navigate to the business settings page and authenticate when prompted.](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561060937_1339318307926820_7669657060757741637_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=qFrRTm6_SAUQ7kNvwEqHZV1&_nc_oc=AdlNw6Arb0GjFEDOXkYiKmaypdclcodfrrVz5ttx-6yD2QZVszY6EGyh24H19Vfwi-g&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=OhJd-uV9tf6nPirccfifAg&oh=00_Afoctrtdi9Z5P19NkkZQycwFpyFqMuQbxHpLurAf9LS41w&oe=698E5950)

Exemplo de solicitação:

```
curl -X POST \
'https://graph.facebook.com/v24.0/<FROM_PHONE_NUMBER_ID>/register' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '{"messaging_product": "whatsapp","pin": "<6_DIGIT_PIN>"}'
```

Exemplo de resposta:

```
{  "success": true}
```

#### Usuários do Cadastro Incorporado

**É necessário** registrar um número de telefone até 14 dias após o flow Cadastro Incorporado. Se o número não for cadastrado nesse período, será preciso realizar o flow novamente antes de fazer o registro.

### Etapa 6: receber uma mensagem do app do consumidor

Quando um cliente participante envia uma mensagem para a empresa, você tem **24 horas de mensagens gratuitas com ele**. Esse espaço de tempo é chamado de janela de atendimento ao cliente. Para fins de teste, queremos habilitar essa janela para que você envie quantas mensagens quiser.

A partir de um app iOS ou Android, envie uma mensagem ao número de telefone que você acabou de cadastrar. Quando ela for enviada, você receberá uma mensagem no seu webhook com uma notificação no formato abaixo.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "16315551234",              "phone_number_id": "PHONE_NUMBER_ID"            },            "contacts": [              {                "profile": {                  "name": "Kerry Fisher"                },                "wa_id": "16315555555"              }            ],            "messages": [              {                "from": "16315555555",                "id": "wamid.ABGGFlA5FpafAgo6tHcNmNjXmuSf",                "timestamp": "1602139392",                "text": {                  "body": "Hello!"                },                "type": "text"                }            ]          },        "field": "messages"        }      ]    }  ]}
```

### Etapa 7: enviar uma mensagem de teste

Depois de habilitar a janela de atendimento ao cliente, envie uma mensagem de teste para o número de telefone do consumidor usado na etapa anterior. Para isso, faça a seguinte chamada de API:

```
curl -X  POST \
'https://graph.facebook.com/v24.0/<FROM_PHONE_NUMBER_ID>/messages' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '{"messaging_product": "whatsapp", "to": "16315555555","text": {"body" : "hello world!"}}'
```

Se a chamada for bem-sucedida, a resposta incluirá uma identificação da mensagem. Use essa identificação para acompanhar o progresso das mensagens por meio de Webhooks. A identificação pode ter até 128 caracteres.

Exemplo de resposta:

```
{  "id":"wamid.gBGGFlaCGg0xcvAdgmZ9plHrf2Mh-o"}
```

Com a API de Nuvem, não há uma forma de verificar de forma explícita se um número de telefone tem uma identificação do WhatsApp. Para enviar uma mensagem usando essa API, envie-a diretamente para o número de telefone do cliente do WhatsApp depois que ele [aceitar receber mensagens](/documentation/business-messaging/whatsapp/getting-opt-in). Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/messages/send-messages).

## Acompanhar as atualizações mensais

Lançaremos atualizações da API de Nuvem na primeira terça-feira de cada mês. Essas atualizações incluem novos recursos e melhorias. A API de Nuvem é atualizada de forma automática. Por isso, não é necessária nenhuma ação adicional para usar os novos recursos.

## Perguntas frequentes

### Tópicos gerais

**Qual empresa fornecerá a API de Nuvem?**

O WhatsApp desenvolve e opera a API do WhatsApp Business, que permite que as empresas se comuniquem com usuários consumidores da plataforma na sua rede. Ao usar a API de Nuvem, a Meta hospeda a API do WhatsApp Business e fornece um ponto de extremidade para o serviço do WhatsApp, facilitando comunicações recebidas e enviadas.

**Há custos adicionais para a API de Nuvem?**

O acesso à API de Nuvem é gratuito. Esperamos que ela gere economias de custo adicionais para os desenvolvedores, pois é hospedada e mantida pela Meta.

### Perguntas frequentes sobre implementação técnica

**Qual é a arquitetura da API de Nuvem?**

A arquitetura da API de Nuvem simplifica significativamente os requisitos operacionais e de infraestrutura do parceiro de soluções para a integração com a Plataforma do WhatsApp Business. Primeiro, ela elimina os requisitos de infraestrutura para executar contêineres do Docker da API do WhatsApp Business (economias de CAPEX). Em segundo lugar, ela elimina a necessidade de responsabilidades operacionais para gerenciar a implantação (economias de OPEX). ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/574916010_1357390812786236_2094506065743510683_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=sO9eSKa8mdYQ7kNvwGXA5Pf&_nc_oc=AdnNaPpkcbK7GZVo-PDAAMzQXAfHY4o4KjNyNbu88I5xEz4Wi2XnQ9cLskmqekYCuyM&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=OhJd-uV9tf6nPirccfifAg&oh=00_Afox9aLMAl3stiDOIoRNt-yrmIburVrDQGrsA537Y3qgfg&oe=698E5E14)

**Como será a recuperação de desastre: se uma região estiver indisponível, quanto tempo levará para mover as mensagens para outra região?**

Teremos recuperação de desastres e replicação de dados em várias regiões. O tempo de inatividade esperado estaria dentro do nosso SLA e, em geral, na ordem de menos de um minuto a menos de cinco minutos.

### Perguntas frequentes sobre privacidade e segurança de dados

**Onde ficam os servidores da API de Nuvem?**

A API de Nuvem processa mensagens em servidores dos data centers da Meta, que estão localizados [neste link](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatacenters.atmeta.com%2Fall-locations%2F&h=AT2AyH7J6bKWTS-sOnrCZAjuE1liG_EPGqpikOGvUwQe3LQg1TkFGMFW_nPKCYdhHnZgeHSXC29y4J5N6awhI_oJY7fxedG1U_AiEYzy7D14rUaiPuIjSBrofr_ftDsFbRIy2lMFmzVubDuj96UTLFAhkC8). Se a empresa optar por usar o Armazenamento Local da API de Nuvem, os dados de mensagens serão armazenados em data centers localizados em outro país designado. Uma lista de locais compatíveis com o Armazenamento Local é fornecida [neste link](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#limitations).

**A API de Nuvem é criptografada de ponta a ponta? Qual é o modelo de criptografia?**

Consulte [Visão geral da API de Nuvem, Criptografia](/documentation/business-messaging/whatsapp/about-the-platform#encryption).

**O que acontece com os dados de mensagens em repouso? Por quanto tempo eles são armazenados?**

As mensagens da API de Nuvem em repouso são criptografadas. As mensagens são retidas por no máximo 30 dias para fornecer recursos básicos e funcionalidades do serviço da API de Nuvem (como retransmissões).

**A Meta tem acesso a chaves de criptografia?**

Para enviar e receber mensagens por meio da API de Nuvem, essa API gerencia as chaves de criptografia/descriptografia em nome da empresa. Para saber mais, leia o [Relatório técnico Visão Geral da Criptografia do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Fsecurity%2FWhatsApp-Security-Whitepaper.pdf&h=AT2AyH7J6bKWTS-sOnrCZAjuE1liG_EPGqpikOGvUwQe3LQg1TkFGMFW_nPKCYdhHnZgeHSXC29y4J5N6awhI_oJY7fxedG1U_AiEYzy7D14rUaiPuIjSBrofr_ftDsFbRIy2lMFmzVubDuj96UTLFAhkC8).

### Perguntas frequentes sobre conformidade regulatória

**Como a API de Nuvem cumpre as leis regionais de proteção de dados (como o RGPD, a LGPD e a PDPB)?**

A Meta leva a proteção dos dados e a privacidade das pessoas muito a sério e cumpre todos os requisitos legais, regulamentares e do setor aplicáveis que regem a proteção de dados, bem como as boas práticas do setor. Os clientes da API de Nuvem devem cumprir as próprias obrigações de acordo com as leis de proteção de dados, como o Regulamento Geral sobre a Proteção de Dados (RGPD). Para saber mais, acesse a [Central de Conformidade para Meta Business Messaging](https://www.facebook.com/business/business-messaging/compliance).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)