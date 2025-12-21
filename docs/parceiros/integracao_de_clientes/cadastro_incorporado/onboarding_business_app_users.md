<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users -->
<!-- Scraped: 2025-12-20T17:48:59.384Z -->

# Como integrar usuários do app WhatsApp Business (também conhecido como "Coexistência")

Updated: 14 de nov de 2025

Você pode configurar o Cadastro Incorporado para permitir que os clientes empresariais façam a integração usando a conta do [app WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fproducts%2Fbusiness-app&h=AT24k-icRRGXIU9-xCKhbZ-aJmURa-CT8nYYgjmUn6fJ60gpPMGVEHyl7g-YU6QwgivG7m-__7OPnj-lJ--xFlWJY4JV3kuUlHUeoF1y5cydFaXSRcp62KQv-5D0hd9qyuZQKzyVDbnntoSPsQw2Q0wSeNQ) e o número de telefone. Depois de escolher essa opção e concluir a integração, os clientes poderão usar o app para enviar mensagens aos clientes em escala, além de enviar mensagens individuais pelo app WhatsApp Business. Além disso, o histórico de mensagens será sincronizado entre ambos os apps.

## Como funciona

Se você configurar o Cadastro Incorporado para números de telefone do app WhatsApp Business, os clientes que passarem pelo fluxo terão a opção de conectar uma conta existente do app WhatsApp Business à API de Nuvem:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/477341352_1809983926468415_3794578338113490554_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=-P3Z4_dfNugQ7kNvwHUBsMp&_nc_oc=AdlQPynWj1X9MVV6D3-74b1XS0aiMmW6OXMAOgVQV2R8kKQxqdigKk7KjvV-3maGNcs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7F2Tu9qNmA97srPxw_WPJA&oh=00_Afm2KwXRTsjqxwzOU_mXOmi21Jbux-isGlMhCYZDT96hOw&oe=69612E1B)

As empresas que escolherem essa opção e inserirem o número de telefone do app WhatsApp Business verão um QR code e instruções para verificar se há uma nova mensagem no app:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/476874241_1103155901556528_14057604674080564_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=IsG1P5Ml-AAQ7kNvwFq-Tqz&_nc_oc=AdltbONQpvyE8vfIx-CaIxE3hUpkE9Q31PuZMb0xQoTIJ-AqU0AZqZEQZ3G5QprqR18&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=7F2Tu9qNmA97srPxw_WPJA&oh=00_AfnNMNrM9W1BRW_rERkk_pfRbpp5DQiNsyOSMUVYMA0U5Q&oe=69613C7A)

A mensagem instrui a empresa a usar o app para ler o QR code exibido no Cadastro Incorporado:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/476873473_616116514348816_8673957842559211679_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=kAl_2KKRNGsQ7kNvwHFOrMH&_nc_oc=AdmlM8chf5fPTEsu-znsjUMTBAe4IXPjFHbfIZSefRy0W2dauIvzm8G4Ot_-xVl-1Ng&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=7F2Tu9qNmA97srPxw_WPJA&oh=00_AfkRg-UJihqinw84nCc9t_ZGPOoaWQKRhM7RIY7ATSBfzQ&oe=696129CD)

Ao tocar no botão da mensagem, a empresa sabe que terá a opção de compartilhar o histórico de mensagens do app WhatsApp Business com você:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/477590274_9196294333760175_2201939451536422781_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=jr-noVaPj3wQ7kNvwHn7tmp&_nc_oc=AdkfJ5aS0kNw4SjBg2fVj_vA_AZEj0xkisJI-ISUGVKKY3KCCE7LmpHpSqf36xcY5Sw&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7F2Tu9qNmA97srPxw_WPJA&oh=00_AflRHNXH2ArxOxt_yqjnb7CGKP-8L0h3Q62ox_0jul1kiA&oe=6961385B)

Ao tocar no botão **Ler QR code** no app, a empresa terá a opção de compartilhar o histórico de conversas com você.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/476778869_1320577675644293_7907818991070430153_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=z3IMj5t9zqoQ7kNvwHL7FYw&_nc_oc=AdnoQShuRnrhfYnT2oSILkbFEKjSVs4ZPPbAHJxLPw46ZMmFA8e-8Q04VMwIoRCY4Vg&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=7F2Tu9qNmA97srPxw_WPJA&oh=00_AfkkhygoAJEu19HsuTvuAmOpqmfLBwpw625NvLxCNPgiiw&oe=69612C71)

Depois de escolher uma opção e ler o código, ela poderá concluir o fluxo de Cadastro Incorporado. Isso retorna o [número de identificação do ativo](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) e o [código de token trocável](/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback) para a janela de criação, como de costume. Depois, você pode usar essas informações em chamadas de API para (1) integrar o cliente empresarial da mesma forma que faria com qualquer outro cliente empresarial e (2) sincronizar os respectivos contatos e histórico de mensagens (se a empresa permitir) para que você possa preencher essas informações no seu app.

## Requisitos

-   O cliente comercial deve usar o app WhatsApp Business versão **2.24.17** ou posterior;-   O código de país do número de telefone do cliente comercial deve ser compatível-   É preciso ser um [Parceiro de Soluções](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-solution-partners) ou [Provedor de Tecnologia](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers)-   É necessário saber como usar a [API de Nuvem](/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api)-   O retorno de chamada do webhook deve ser capaz de aceitar e processar webhooks-   É necessário usar o Cadastro Incorporado com [registro de sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener)

## Limitações

-   Para manter a compatibilidade com o app WhatsApp Business, os números de telefone comercias que estão em uso no app WhatsApp Business e na API de Nuvem têm a taxa de transferência fixa de 20 mps.-   Caso o cliente corporativo tenha trabalhado com um parceiro no passado e ainda compartilhe a linha de crédito anterior, ele poderá ver um erro ao tentar mudar para um novo parceiro. Siga o [guia](/documentation/business-messaging/whatsapp/solution-providers/support/business-customer-support) para resolver o erro.

## Países incompatíveis

Números de telefone de contas do WhatsApp Business com códigos dos seguintes países não são compatíveis:

-   Nigéria-   África do Sul

## Preços

Depois que um cliente empresarial tiver sido integrado à API de Nuvem, as mensagens enviadas pela empresa por meio do app WhatsApp Business continuarão sendo gratuitas, mas as mensagens enviadas por meio da API estarão sujeitas aos preços da [API de Nuvem](/documentation/business-messaging/whatsapp/pricing).

Confira o PDF de detalhamento de preços [Soluções de API para usuários do WhatsApp Business App](https://developers.facebook.com/resources/API-solutions-for-WhatsApp-Business-App-users.pdf) para ver detalhamentos de cenários comuns.

## Janela de atendimento ao cliente

As [janelas de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) serão abertas apenas quando um usuário do WhatsApp enviar mensagem a um cliente empresarial que já tenha feito a integração à API de Nuvem. Se um usuário do WhatsApp enviar uma mensagem para a empresa antes da integração da API de Nuvem, a empresa só poderá responder com um modelo de mensagem, já que nenhum atendimento ao cliente foi aberto. Se o usuário enviar uma mensagem à empresa depois da integração da API de Nuvem, uma janela de atendimento ao cliente será aberta normalmente, e a empresa poderá responder com uma mensagem que não seja um modelo.

## Comparação de recursos

A tabela a seguir descreve os recursos disponíveis para clientes empresariais que fizeram a integração à API de Nuvem, bem como quaisquer alterações na funcionalidade do app WhatsApp Business após a integração.

Recurso existente no app WhatsApp Business

Alterações de recursos do app WhatsApp Business APÓS a integração à API de Nuvem

O recurso do app WhatsApp Business é compatível com a API de Nuvem?

Conversas individuais (1:1)

A edição ou revogação de mensagens não é mais compatível.

Com suporte.

É possível sincronizar todas as mensagens de conversas dos últimos seis meses.

As mensagens enviadas e recebidas são espelhadas entre a API de Nuvem e o app WhatsApp Business.

Contatos

Nenhuma alteração.

Com suporte.

Todos os contatos com um número do WhatsApp podem ser sincronizados.

Conversas em grupo

Nenhuma alteração.

Não há suporte.

As conversas em grupo não serão sincronizadas.

Mensagens temporárias

O recurso de mensagens temporárias será desativado para todas as conversas individuais

Não há suporte.

[Mensagem de visualização única](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1077018839582332&h=AT24k-icRRGXIU9-xCKhbZ-aJmURa-CT8nYYgjmUn6fJ60gpPMGVEHyl7g-YU6QwgivG7m-__7OPnj-lJ--xFlWJY4JV3kuUlHUeoF1y5cydFaXSRcp62KQv-5D0hd9qyuZQKzyVDbnntoSPsQw2Q0wSeNQ)

O recurso de visualização única será desabilitado para todas as conversas individuais

Não há suporte.

Mensagem de localização em tempo real

As mensagens de localização em tempo real serão desabilitadas para todas as conversas individuais

Não há suporte.

Listas de transmissão

A lista de transmissão será desabilitada.

As empresas não poderão criar novas listas de transmissão.

As listas de transmissão existentes se tornarão de somente leitura.

Não há suporte.

Ligações de voz e de vídeo

Nenhuma alteração.

Não há suporte.

Ferramentas comerciais (por exemplo, catálogo, pedidos e status)

Nenhuma alteração.

Não há suporte.

Ferramentas de mensagens (por exemplo, mensagens de marketing, mensagem de saudação, mensagem de ausência, respostas rápidas e rótulos)

Nenhuma alteração.

Não há suporte.

Perfil empresarial (por exemplo, nome comercial, endereço, site)

Nenhuma alteração.

Não há suporte.

Canais

Nenhuma alteração.

Não há suporte.

## Dispositivos conectados

As empresas podem conectar até quatro clientes "companheiros" do WhatsApp à conta do app WhatsApp Business em outros dispositivos (descrito como "[dispositivos conectados](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F378279804439436%2F&h=AT24k-icRRGXIU9-xCKhbZ-aJmURa-CT8nYYgjmUn6fJ60gpPMGVEHyl7g-YU6QwgivG7m-__7OPnj-lJ--xFlWJY4JV3kuUlHUeoF1y5cydFaXSRcp62KQv-5D0hd9qyuZQKzyVDbnntoSPsQw2Q0wSeNQ)" na Central de Ajuda).

Todos os clientes complementares são compatíveis, exceto [WhatsApp para Windows](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1317564962315842%2F%3Fcms_platform%3Dwindows-desktop&h=AT24k-icRRGXIU9-xCKhbZ-aJmURa-CT8nYYgjmUn6fJ60gpPMGVEHyl7g-YU6QwgivG7m-__7OPnj-lJ--xFlWJY4JV3kuUlHUeoF1y5cydFaXSRcp62KQv-5D0hd9qyuZQKzyVDbnntoSPsQw2Q0wSeNQ) e [WhatsApp para WearOS](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F564431798835071%2F&h=AT24k-icRRGXIU9-xCKhbZ-aJmURa-CT8nYYgjmUn6fJ60gpPMGVEHyl7g-YU6QwgivG7m-__7OPnj-lJ--xFlWJY4JV3kuUlHUeoF1y5cydFaXSRcp62KQv-5D0hd9qyuZQKzyVDbnntoSPsQw2Q0wSeNQ).

Quando um cliente empresarial integrar a API de Nuvem com uma conta existente do app WhatsApp Business e um número de telefone, todos os apps complementares serão desvinculados da conta. Em seguida, a empresa poderá vincular novamente os apps complementares compatíveis.

Os usuários do WhatsApp que utilizam um cliente complementar incompatível para enviar mensagens a uma empresa integrada poderão fazer isso, mas a mensagem não acionará webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages). Por isso, a empresa não conseguirá espelhar a mensagem no próprio app.

As mensagens enviadas por uma empresa integrada (por qualquer meio) e visualizadas em um dispositivo adicional incompatível aparecerão com um espaço reservado para texto, instruindo o usuário do WhatsApp a visualizar a mensagem no dispositivo principal.

## Como configurar seu app

### Etapa 1: assinar webhooks

Vá até o painel [**Painel de Apps**](/apps) > **WhatsApp** > **Configuração** e inscreva seu app nos seguintes campos de tópicos de webhook da conta do WhatsApp Business. Além disso, verifique se o código de retorno de ligação do app é capaz de processar as cargas de cada um deles. Esses campos são adicionais aos que você já assina como provedor de soluções.

-   [history](#history): descreve mensagens anteriores que o cliente empresarial enviou/recebeu-   [smb\_app\_state\_sync](#smb-app-state-sync): descreve os contatos novos e atuais do cliente comercial-   [smb\_message\_echoes](#smb-message-echoes): descreve as novas mensagens que o cliente empresarial envia com o app WhatsApp Business após a integração

### Etapa 2: personalizar o Cadastro Incorporado

Adicione uma propriedade `featureType` definida como `whatsapp_business_app_onboarding` ao objeto `extras` no método de inicialização e parte de [registro de retorno de chamada do código de implementação do Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#launch-method-and-callback-registration).

```
// Launch method and callback registration
  {
  "config_id": "<CONFIGURATION_ID>",
  "response_type": "code",
  "override_default_response_type": true,
  "extras": {
    setup: {},
    "featureType": "whatsapp_business_app_onboarding", // set to 'whatsapp_business_app_onboarding'
    "sessionInfoVersion": "3"
  }
}
```

Para verificar se você habilitou o recurso corretamente, acesse sua implementação do Cadastro Incorporado. Se a tela de seleção de [conta do WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-selection-screen) for substituída por uma tela que oferecer a opção de conectar sua conta do WhatsApp Business existente, o recurso será habilitado:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/477341352_1809983926468415_3794578338113490554_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=-P3Z4_dfNugQ7kNvwHUBsMp&_nc_oc=AdlQPynWj1X9MVV6D3-74b1XS0aiMmW6OXMAOgVQV2R8kKQxqdigKk7KjvV-3maGNcs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7F2Tu9qNmA97srPxw_WPJA&oh=00_Afm2KwXRTsjqxwzOU_mXOmi21Jbux-isGlMhCYZDT96hOw&oe=69612E1B)

### Etapa 3: exibir o Cadastro Incorporado para os clientes

Depois de confirmar que o recurso foi habilitado, mostre o Cadastro Incorporado aos clientes da sua empresa.

Quando uma empresa concluir o fluxo e você [integrar o cliente](#onboarding-business-customers), será necessário [sincronizar o histórico de mensagens](#synchronizing-whatsapp-business-app-data) em até 24 horas. Caso contrário, será necessário desligar o cliente e concluir o fluxo novamente. Por isso, recomendamos:

-   integrar e sincronizar assim que a empresa concluir o fluxo;-   informar à empresa que você está sincronizando os dados do app WhatsApp Business dela;-   orientá-los a manter o app WhatsApp Business aberto para facilitar o processo de sincronização.

A integração e a sincronização podem levar vários minutos, dependendo de diversos fatores, como o tamanho do histórico de mensagens da empresa, a velocidade da internet, a rapidez de processamento de webhooks, entre outros.

Quando você concluir o **processo de integração**, o app WhatsApp Business será atualizado automaticamente e indicará à empresa que o número de telefone agora está conectado à API:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/476788868_1168860751914222_5506074718266109385_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ev7MBcAWYmUQ7kNvwH9Tlzl&_nc_oc=AdmI3QYXyyFS5hwm8GHibJsq3rK_N9Q0JtiukLm139f7CL2FoJeL1_XwKQ8DdvSUC94&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=7F2Tu9qNmA97srPxw_WPJA&oh=00_Afkhw9S82bI00NoVMwANjNLn5KkNLvXttUpgpveOC3ApqA&oe=69610CD0)

Depois de concluir a sincronização do histórico de mensagens da empresa, informe ao cliente que o processo foi finalizado.

## Integrar clientes comerciais

Quando um cliente empresarial concluir com sucesso o fluxo de Cadastro Incorporado, as identificações de ativos e um código de token trocável serão retornados para a janela que gerou o fluxo, como de costume. Entretanto, a carga de [evento da sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) terá `event` definido como `FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING`:

```
{
  data: {
    waba_id: "<CUSTOMER_WABA_ID>"
  },
  type: "WA_EMBEDDED_SIGNUP",
  event: "FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING",
  version: 3
}
```

Capture o ID de ativo e o código de token trocável do cliente e use-os para integrá-lo como faria normalmente. Porém, **pule a etapa de registro do número de telefone**, uma vez que ele já está registrado.

-   [Integrar clientes empresariais como provedor de soluções](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner)-   [Integrar clientes empresariais como Provedor de Tecnologia](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider)

Depois de concluir essas etapas de integração, você poderá começar o processo de [sincronização do histórico de mensagens](#synchronizing-messaging-history).

### Verificar o status da integração (opcional)

Se quiser, você pode verificar se o número de telefone comercial do cliente está registrado para uso da API de Nuvem e do app WhatsApp Business. Para isso, solicite os campos `is_on_biz_app` e `platform_type` na identificação do número de telefone comercial:

Exemplo de solicitação:

```
curl 'https://graph.facebook.com/v24.0/106540352242922?fields=is_on_biz_app,platform_type' \
-H 'Authorization: Bearer EAAJB...'
```

Exemplo de resposta:

Se `is_on_biz_app` for `true` e `platform_type` for `CLOUD_API`, o número de telefone comercial poderá usar a API de Nuvem e o app WhatsApp Business:

```
{  "is_on_biz_app": true,  "platform_type": "CLOUD_API",  "id": "106540352242922"}
```

## Como sincronizar os dados do app WhatsApp Business

Depois de integrar o cliente empresarial, você terá 24 horas para sincronizar os respectivos contatos e histórico de mensagens. Caso contrário, será necessário desligar o cliente e concluir o fluxo novamente. Por esse motivo, recomendamos que você inicie o processo de sincronização assim que concluir a integração da empresa.

Verifique se você assinou a WABA da empresa quando [a integrou](#onboarding-business-customers) e se [assinou os campos de webhook adicionais](#step-1--subscribe-to-webhooks) para não perder webhooks importantes.

### Etapa 1: iniciar a sincronização de contatos

Use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/smb\_app\_data](/docs/graph-api/reference/whats-app-business-account-to-number-current-status/smb_app_data#Creating) para solicitar as informações de contato do cliente empresarial.

Se a solicitação for bem-sucedida, um conjunto de webhooks [smb\_app\_state\_sync](#smb-app-state-sync) será disparado descrevendo os contatos do WhatsApp no app WhatsApp Business da empresa. Adições ou alterações futuras aos [contatos](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F&h=AT24k-icRRGXIU9-xCKhbZ-aJmURa-CT8nYYgjmUn6fJ60gpPMGVEHyl7g-YU6QwgivG7m-__7OPnj-lJ--xFlWJY4JV3kuUlHUeoF1y5cydFaXSRcp62KQv-5D0hd9qyuZQKzyVDbnntoSPsQw2Q0wSeNQ) do WhatsApp da empresa acionarão um webhook smb\_app\_state\_sync correspondente.

Essa etapa pode ser realizada apenas uma vez. Se for necessário executá-lo novamente, o cliente precisará cancelar a integração e, depois, concluir o fluxo de Cadastro Incorporado outra vez.

#### Exemplo de solicitação

```
curl -X  POST \
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/smb_app_data \
-H 'Authorization: <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '
{
  "messaging_product": "whatsapp",
  "sync_type": "smb_app_state_sync"
}'
```

#### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
{
  "messaging_product": "whatsapp",
  "request_id" : "<REQUEST_ID>"
}
```

Recomendamos que você armazene o valor `request_id` caso precise entrar em contato com o suporte.

### Etapa 2: iniciar a sincronização do histórico de mensagens

Use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/smb\_app\_data](/docs/graph-api/reference/whats-app-business-account-to-number-current-status/smb_app_data#Creating) novamente, dessa vez para iniciar a sincronização do histórico de mensagens.

Em caso de sucesso, um ou mais webhooks de histórico serão disparados, dependendo de se a empresa optou por compartilhar o histórico de mensagens com você.

Essa etapa pode ser realizada apenas uma vez. Se for necessário executá-lo novamente, o cliente precisará cancelar a integração e, depois, concluir o fluxo de Cadastro Incorporado outra vez.

#### Histórico de mensagens compartilhado

Caso a empresa tenha optado por compartilhar o histórico de mensagens com você, uma série de webhooks de histórico será disparada, descrevendo cada mensagem enviada para ou recebida de usuários do WhatsApp em um determinado período.

Confira [history](#history) para ver uma descrição do conteúdo desses webhooks e como eles são organizados.

#### Histórico de mensagens não compartilhado

Caso a empresa opte por não compartilhar o histórico de mensagens, um webhook [history](#history) com o código de erro `2593109` será disparado.

#### Exemplo de solicitação

```
curl -X  POST \
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/smb_app_data \
-H 'Authorization: <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '
{
  "messaging_product": "whatsapp",
  "sync_type": "history"
}'
```

#### Exemplo de resposta

Se a solicitação for bem-sucedida, a API responderá com a seguinte carga JSON. Observe que essa resposta indica apenas a aceitação da solicitação com sucesso; ela não indica se a empresa compartilhou o histórico de mensagens com você.

```
{
  "messaging_product": "whatsapp",
  "request_id" : "<REQUEST_ID>"
}
```

Recomendamos que você armazene o valor `request_id` caso precise entrar em contato com o suporte.

### Etapa 3: espelhar novas mensagens do app WhatsApp Business

As empresas integradas ainda poderão usar o app WhatsApp Business e os [dispositivos adicionais](#linked-devices) compatíveis para enviar e receber mensagens. Sempre que uma empresa envia uma mensagem com um desses apps, é disparado um webhook [smb\_message\_echoes](#smb-message-echoes), que você deve processar e exibir no histórico de conversas do contato no app.

## Relatórios de atividades de conversão

Os clientes empresariais integrados podem veicular anúncios de clique para o WhatsApp. Por isso, recomendamos que você registre os sinais de geração de cadastros/compra em nome da empresa por meio da API de Conversões. Veja [API de Conversões para mensagens da empresa](/docs/marketing-api/conversions-api/business-messaging).

## Remover clientes comerciais

Não é possível usar o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/deregister](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-deregister-api#Updating) para cancelar o registro de um número de telefone comercial que esteja em uso com a API de Nuvem e o app WhatsApp Business.

Em vez disso, os clientes empresariais podem usar o app WhatsApp Business para se desconectar da API de Nuvem. Para isso, basta acessar **Configurações** > **Conta** > **Plataforma comercial** e clicar no botão **Desconectar conta**. Quando um cliente empresarial se desconecta da API de Nuvem, um webhook [account\_update](#account-update) com um evento `PARTNER_REMOVED` é disparado.

## Erros

Se você integrar um cliente comercial com um número de telefone do app WhatsApp Business, poderá receber mais tarde um webhook de **mensagens** com o código de erro `131060`. Isso pode acontecer quando um usuário do WhatsApp com um [dispositivo adicional](#linked-devices) não compatível envia ou recebe uma mensagem da empresa. Se você receber esse webhook, instrua a empresa a verificar a mensagem no app WhatsApp Business.

## Webhooks

### account\_update

Descreve as alterações feitas em uma conta do WhatsApp Business ("WABA").

#### Eventos de gatilho

-   O número de telefone comercial associado às alterações da WABA-   O status da WABA é alterado

#### Sintaxe da carga

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WABA_ID>",
      "time": <WEBHOOK_TIMESTAMP>,
      "changes": [
        {
          "value": {
              "phone_number": "<BUSINESS_PHONE_NUMBER>",
              "event": "<EVENT>",
           },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

#### Exemplo de carga

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1739212624,      "changes": [        {          "value": {              "phone_number": "15550783881",              "event": "PARTNER_REMOVED",           },          "field": "account_update"        }      ]    }  ]}
```

### Histórico

Descreve o histórico de conversas do app WhatsApp Business de uma empresa que escolheu compartilhar o próprio histórico de conversas com um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview) ou a decisão da empresa de recusar o compartilhamento do histórico de conversas.

#### Eventos de gatilho

-   um provedor de soluções [sincronizar o histórico de conversas do app WhatsApp Business](#step-2--initiate-message-history-synchronization) de um cliente corporativo integrado com um número de telefone do app WhatsApp Business e que tenha aceitado compartilhar o histórico de conversas-   um provedor de soluções [sincronizar o histórico de conversas do app WhatsApp Business](#step-2--initiate-message-history-synchronization) de um cliente comercial integrado com um número de telefone do app WhatsApp Business, mas o cliente recusou compartilhar o histórico de conversas

#### Conteúdo do histórico de conversas

Se a empresa já tiver aprovado o compartilhamento do histórico de conversas quando o provedor de soluções solicitar o histórico de conversas da empresa, uma série de webhooks de histórico será disparada, descrevendo todas as mensagens enviadas ou recebidas em até 180 dias a partir do momento da integração da empresa na API de Nuvem.

-   As mensagens que fazem parte de uma conversa em grupo não serão incluídas-   As mensagens de mídia não incluirão identificações de ativos de mídia; em vez disso, webhooks adicionais de histórico contendo identificações de ativos de mensagem de mídia serão enviados separadamente, mas somente para mensagens de mídia enviadas dentro de 14 dias após a integração

Observe que, para fins de eficiência, um único webhook pode descrever milhares de mensagens. Por isso, recomendamos que você capture o conteúdo primeiro e depois o processe de forma assíncrona.

#### Fases e partes

Os webhooks são divididos em três fases do histórico, sendo o dia 0 o momento em que a empresa foi integrada à API de Nuvem:

-   Fase 0: do dia 0 ao dia 1-   Fase 1: do dia 1 ao dia 90-   Fase 2: do dia 90 até o dia 180

Para cada fase, os webhooks do histórico de conversas podem ser enviados em partes separadas, dependendo do número total de mensagens que compõem a conversa.

-   É possível usar o valor do parâmetro `chunk_order` para organizar essas partes na ordem sequencial, já que elas podem não ser entregues de maneira sequencial.-   É possível usar o valor do parâmetro `phase` para monitorar o progresso da fase. O valor `2` indica que a fase atual foi concluída.-   É possível usar o valor do parâmetro `progress` para monitorar o progresso geral. O valor `100` indica que a sincronização foi concluída.

Se não houver histórico de conversas disponível para determinada fase, nenhum webhook correspondente será enviado.

#### Sintaxe da carga – compartilhamento do histórico de conversas aprovado

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WABA_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "history": [
              {
                "metadata": {
                  "phase": <PHASE>,
                  "chunk_order": <CHUNK_ORDER>,
                  "progress": <PROGRESS>
                },
                "threads": [
                  /* First chat history thread object */
                  {
                    "id": "<WHATSAPP_USER_PHONE_NUMBER>",
                    "messages": [
                      /* First message object in thread */
                      {
                        "from": "<BUSINESS_OR_WHATSAPP_USER_PHONE_NUMBER>",
                        "to": "<WHATSAPP_USER_PHONE_NUMBER>", // only included if SMB message echo
                        "id": "<WHATSAPP_MESSAGE_ID>",
                        "timestamp": "<DEVICE_TIMESTAMP>,
                        "type": "<MESSAGE_TYPE>",
                        "<MESSAGE_TYPE>": {
                          <MESSAGE_CONTENTS>
                        },
                        "history_context": {
                          "status": "<MESSAGE_STATUS>"
                        }
                      },
                      /* Additional message objects in thread would follow, if any */
                    ]
                  },
                  /* Additional chat history thread objects would follow, if any */
                ]
              }
            ]
          },
          "field": "history"
        }
      ]
    }
  ]
}
```

#### Conteúdo da carga – compartilhamento do histórico de conversa aprovado

  

Espaço reservado

Descrição

Valor de exemplo

`<WABA_ID>`

_String_

Identificação da conta do WhatsApp Business do cliente corporativo.

`102290129340398`

`<BUSINESS_PHONE_NUMBER>`

_String_

Número de telefone comercial do cliente.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial do cliente.

`106540352242922`

`<PHASE>`

_Número inteiro_

Indica a [fase](#phases-and-chunks) do histórico. Os valores podem ser os seguintes:

-   `0`: indica que as mensagens são do dia 0 (tempo de integração da empresa) até o dia 1-   `1` – indica que as mensagens são do dia 1 até o dia 90-   `2` – indica que as mensagens são do dia 90 até o dia 180

`1`

`<CHUNK_ORDER>`

_Número inteiro_

Indica o número de [fragmento](#phases-and-chunks), que pode ser usado para ordenar conjuntos de webhooks de forma sequencial.

`1`

`<PROGRESS>`

_Número inteiro_

Indica a porcentagem total do progresso da sincronização.

Mínimo `0`, máximo `100`.

`55`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

O número de telefone do usuário do WhatsApp.

`16505551234`

`<BUSINESS_OR_WHATSAPP_USER_PHONE_NUMBER>`

_String_

O número de telefone do cliente corporativo ou do usuário do WhatsApp.

Se o valor for o número de telefone da empresa, o objeto da mensagem descreverá uma mensagem enviada pela empresa a um usuário do WhatsApp.

Se o valor for o número de telefone do usuário do WhatsApp, o objeto da mensagem descreverá uma mensagem enviada pelo usuário do WhatsApp à empresa.

`15550783881`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

O número de telefone do usuário do WhatsApp.

A propriedade `to` é incluída apenas se o objeto da mensagem representar um [eco de mensagem de PME](#step-3--mirror-new-whatsapp-business-app-messages).

`16505551234`

`<WHATSAPP_MESSAGE_ID>`

_String_

Identificação da mensagem do WhatsApp.

`wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA`

`<DEVICE_TIMESTAMP>`

_String_

Registro de data e hora UNIX que indica quando a mensagem foi recebida pelo dispositivo do destinatário.

`1738796547`

`<MESSAGE_TYPE>`

_String_

[Tipo de mensagem](/documentation/business-messaging/whatsapp/messages/send-messages#message-types). Esse espaço reservado aparece duas vezes na sintaxe acima, pois serve para o valor da propriedade `type` e o nome correspondente da propriedade. Confira [abaixo um exemplo de carga](#example-history-approved) de uma conversa com vários tipos de mensagens.

Se esse valor for definido como `media_placeholder`, o objeto da mensagem descreverá uma mensagem com um ativo de mídia. Nesse caso, o conteúdo da mensagem será omitido. Em vez disso, um webhook do histórico separado será enviado, descrevendo o conteúdo da mensagem e a identificação do ativo de mídia, mas somente se a mensagem tiver sido enviada nas duas últimas semanas da sua consulta. Confira [abaixo um exemplo de carga](#example-media-asset) descrevendo o conteúdo de uma mensagem de mídia.

`text`

`<MESSAGE_CONTENTS>`

_Objeto_

Um objeto que descreve o conteúdo da mensagem. Esse valor variará com base no tipo de mensagem, assim como no conteúdo da mensagem.

Por exemplo, se uma empresa enviar uma mensagem `image` sem legenda, o objeto não incluirá a propriedade `caption`.

Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/messages/send-messages) para ver exemplos de carga de cada tipo de mensagem.

`{"body":"Here's the info you requested! https://www.meta.com/quest/quest-3/"}`

`<MESSAGE_STATUS>`

_String_

Indica as estatísticas de entrega mais recentes da mensagem. Os valores podem ser os seguintes:

-   `DELIVERED`-   `ERROR`-   `PENDING`-   `PLAYED`-   `READ`-   `SENT`

`READ`

#### Exemplo de carga: compartilhamento de histórico de conversa aprovado

Exemplo de carga para duas conversas por mensagens: (1) uma contendo uma mensagem de texto e uma mensagem de vídeo enviadas a um usuário do WhatsApp e a resposta desse usuário, e (2) uma contendo uma mensagem de texto enviada a um usuário do WhatsApp, agradecendo o pedido.

Observe que o conteúdo da mensagem de mídia na primeira conversa não é descrito. Em vez disso, um segundo webhook será disparado, descrevendo o conteúdo da mensagem de mídia.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "history": [              {                "metadata": {                  "phase": 0,                  "chunk_order": 1,                  "progress": 55                },                "threads": [                  {                    "id": "16505551234",                    "messages": [                      {                        "from": "15550783881",                        "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA",                        "timestamp": "1739230955",                        "type": "text",                        "text": {                          "body": "Here's the info you requested! https://www.meta.com/quest/quest-3/"                        },                        "history_context": {                          "status": "READ"                        }                      },                      {                        "from": "15550783881",                        "id": "wamid.QyNUEHBgLMTY0NjcwNDM1OTUVAgARGBI1Rj3NEYxMzAzMzQ5MkEA",                        "timestamp": "1739230970",                        "type": "media_placeholder",                        "history_context": {                          "status": "PLAYED"                        }                      },                      {                        "from": "16505551234",                        "id": "wamid.N0FCNjMAHBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0",                        "timestamp": "1739230970",                        "type": "text",                        "text": {                          "body": "Thanks!"                        },                        "history_context": {                          "status": "READ"                        }                      }                    ]                  },                  {                    "id": "12125557890",                    "messages": [                      {                        "from": "15550783881",                        "id": "wamid.BIyNDlBOEI5N0FCNjMAHBgLMTY0NjcwNDM1OTUVAgARGQUQ4NDc0",                        "timestamp": "1739230970",                        "type": "text",                        "text": {                          "body": "Thanks for your order! As a thank you, use code THANKS30 to get 30% of your next order."                        },                        "history_context": {                          "status": "DELIVERED"                        }                      }                    ]                  }                ]              }            ]          },          "field": "history"        }      ]    }  ]}
```

#### Exemplo de carga de ativo de mensagem de mídia

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "messages": [              {                "from": "16505551234",                "id": "wamid.QyNUEHBgLMTY0NjcwNDM1OTUVAgARGBI1Rj3NEYxMzAzMzQ5MkEA",                "timestamp": "1738796547",                "type": "image",                "image": {                  "caption": "Black Prince echeveria",                  "mime_type": "image/jpeg",                  "sha256": "3f9d94d399fa61c191bc1d4ca71375a035cd9b9f5b1128e1f0963a415c16b0cc",                  "id": "24230790383178626"                }              }            ]          },          "field": "history"        }      ]    }  ]}
```

#### Sintaxe da carga: compartilhamento do histórico de conversas recusado

```
{
  "messaging_product": "whatsapp",
  "metadata": {
    "display_phone_number": "<BUSINESS_PHONE_NUMBER>",
    "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
  },
  "history": [
    {
      "errors": [
        {
          "code": 2593109,
          "title": "History sync is turned off by the business from the WhatsApp Business App",
          "message": "History sync is turned off by the business from the WhatsApp Business App",
          "error_data": {
            "details": "History sharing is turned off by the business"
          }
        }
      ]
    }
  ]
}
```

#### Exemplo de carga: compartilhamento do histórico de conversa recusado

```
{  "messaging_product": "whatsapp",  "metadata": {    "display_phone_number": "15550783881",    "phone_number_id": "106540352242922"  },  "history": [    {      "errors": [        {          "code": 2593109,          "title": "History sync is turned off by the business from the WhatsApp Business App",          "message": "History sync is turned off by the business from the WhatsApp Business App",          "error_data": {            "details": "History sharing is turned off by the business"          }        }      ]    }  ]}
```

### smb\_app\_state\_sync

Descreve um ou mais [contatos](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F&h=AT24k-icRRGXIU9-xCKhbZ-aJmURa-CT8nYYgjmUn6fJ60gpPMGVEHyl7g-YU6QwgivG7m-__7OPnj-lJ--xFlWJY4JV3kuUlHUeoF1y5cydFaXSRcp62KQv-5D0hd9qyuZQKzyVDbnntoSPsQw2Q0wSeNQ) do WhatsApp no app WhatsApp Business de um cliente comercial.

#### Eventos de gatilho:

-   um provedor de soluções [sincroniza os contatos do WhatsApp](#step-1--initiate-contacts-synchronization) de um cliente empresarial que foi integrado com um número de telefone do app WhatsApp Business-   um cliente empresarial, integrado por um provedor de soluções, com um número de telefone do app WhatsApp Business adiciona, edita ou remove um [contato do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F&h=AT24k-icRRGXIU9-xCKhbZ-aJmURa-CT8nYYgjmUn6fJ60gpPMGVEHyl7g-YU6QwgivG7m-__7OPnj-lJ--xFlWJY4JV3kuUlHUeoF1y5cydFaXSRcp62KQv-5D0hd9qyuZQKzyVDbnntoSPsQw2Q0wSeNQ)

#### Sintaxe da carga

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WABA_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "state_sync": [
              {
                "type": "contact",
                "contact": {
                  "full_name": "<CONTACT_FULL_NAME>",
                  "first_name": "<CONTACT_FIRST_NAME>",
                  "phone_number": "<CONTACT_PHONE_NUMBER>"
                },
                "action": "<ACTION>",
                "metadata": {
                  "timestamp": "<WEBHOOK_TIMESTAMP>"
                }
              },
              * Additional contacts would follow, if any */
            ]
          },
          "field": "smb_app_state_sync"
        }
      ]
    }
  ]
}
```

#### Conteúdo da carga

  

Espaço reservado

Descrição

Valor de exemplo

`<WABA_ID>`_String_

Identificação da conta do WhatsApp Business do cliente corporativo.

`102290129340398`

`<BUSINESS_PHONE_NUMBER>`_String_

Número de telefone comercial do cliente.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`_String_

Identificação do número de telefone comercial do cliente.

`106540352242922`

`<CONTACT_FULL_NAME>`_String_

O nome completo do contato, conforme aparece na lista de contatos telefônicos do app WhatsApp Business do cliente corporativo.

Não é incluído quando o cliente corporativo remove um contato da lista de contatos telefônicos do app WhatsApp Business.

`Pablo Morales`

`<CONTACT_FIRST_NAME>`_String_

O nome do contato, conforme aparece na lista de contatos telefônicos do app WhatsApp Business do cliente corporativo.

Não é incluído quando o cliente corporativo remove um contato da lista de contatos telefônicos do app WhatsApp Business.

`Pablo`

`<CONTACT_PHONE_NUMBER>`_String_

O número de telefone do WhatsApp do contato.

`16505551234`

`<ACTION>`_String_

Indica se o cliente corporativo adicionou, editou ou excluiu um contato da lista de contatos telefônicos do app WhatsApp Business. Os valores podem ser os seguintes:

-   `add` – a empresa adicionou ou editou um contato-   `remove` – a empresa removeu um contato

`add`

`<CONTACT_CHANGE_TIMESTAMP>`_String_

Registro de data e hora UNIX indicando quando o contato foi adicionado, editado ou removido.

`1738346006`

### smb\_message\_echoes

Descreve uma mensagem enviada por um cliente comercial para um usuário do WhatsApp com o app WhatsApp Business ou um [dispositivo adicional](#linked-devices) compatível.

#### Eventos de gatilho

-   Um cliente empresarial usa o app WhatsApp Business ou um dispositivo adicional compatível para enviar mensagem a um usuário do WhatsApp.

#### Sintaxe da carga

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WABA_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "message_echoes": [
              {
                "from": "<BUSINESS_PHONE_NUMBER>",
                "to": "<WHATSAPP_USER_PHONE_NUMBER>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TIMESTAMP>",
                "type": "<MESSAGE_TYPE>",
                "<MESSAGE_TYPE>": {
                  <MESSAGE_CONTENTS>
                }
              }
            ]
          },
          "field": "smb_message_echoes"
        }
      ]
    }
  ]
}
```

#### Conteúdo da carga

  

Espaço reservado

Descrição

Valor de exemplo

`<WABA_ID>`

_String_

Identificação da conta do WhatsApp Business do cliente corporativo.

`102290129340398`

`<BUSINESS_PHONE_NUMBER>`

_String_

Número de telefone comercial do cliente.

`15550783881`

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

Identificação do número de telefone comercial do cliente.

`106540352242922`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

O número de telefone do usuário do WhatsApp.

`16505551234`

`<WHATSAPP_MESSAGE_ID>`

_String_

Identificação da mensagem do WhatsApp.

`wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA`

`<WEBHOOK_TIMESTAMP>`

_String_

Registro de data e hora UNIX indicado quando o webhook foi disparado.

`1738796547`

`<MESSAGE_TYPE>`

_String_

[Tipo de mensagem](/documentation/business-messaging/whatsapp/messages/send-messages#message-types). Esse espaço reservado aparece duas vezes na sintaxe acima, pois serve para o valor da propriedade `type` e o nome correspondente da propriedade.

`text`

`<MESSAGE_CONTENTS>`

_Objeto_

Um objeto que descreve o conteúdo da mensagem.

Esse valor variará com base na mensagem `type`, bem como no conteúdo da mensagem.

Por exemplo, se uma empresa enviar uma mensagem `image` sem legenda, o objeto não incluirá a propriedade `caption`.

Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/messages/send-messages) para ver exemplos de carga de cada tipo de mensagem.

`{"body":"Here's the info you requested! https://www.meta.com/quest/quest-3/"}`

#### Exemplo de carga

Esta carga de exemplo descreve uma mensagem de texto (`type` é `text`) enviada a um usuário do WhatsApp por um cliente corporativo com o app WhatsApp Business.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "message_echoes": [              {                "from": "15550783881",                "to": "16505551234",                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA",                "timestamp": "1700255121",                "type": "text"                "text": {                  "body": "Here's the info you requested! https://www.meta.com/quest/quest-3/"                }              }            ]          },          "field": "smb_message_echoes"        }      ]    }  ]}
```

## Precisa de ajuda?

Para a integração de _Coexistência_, escolha:

-   Tópico da pergunta: “WABiz: integração” e “TechProvider: integração”-   Tipo de solicitação: "Cadastro incorporado – Integração de coexistência"

Para _problemas da API_ de Coexistência, escolha:

-   Tópico da pergunta: “WABiz: API de nuvem”-   Tipo de solicitação: "Webhooks e APIs de sincronização de dados de coexistência"

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)