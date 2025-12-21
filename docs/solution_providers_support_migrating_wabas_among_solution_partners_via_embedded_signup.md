<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solution-partners-via-embedded-signup -->
<!-- Scraped: 2025-12-20T17:53:16.296Z -->

# Como migrar a WABA de um parceiro de soluções para outro via cadastro incorporado

Updated: 4 de nov de 2025

Caso você seja um parceiro de soluções, os clientes empresariais poderão migrar para seus serviços deixando de compartilhar a Conta do WhatsApp Business (WABA, pelas iniciais em inglês) com o parceiro de soluções atual para compartilhar com sua empresa. Todos os números de telefone comerciais e modelos associados continuarão funcionando normalmente após a conclusão do processo.

Depois que o cliente iniciar o processo, ele não poderá enviar mensagens novamente até que você substitua a linha de crédito atual dele pela sua. Isso acontece no primeiro dia do mês seguinte ao que você usa a API para compartilhar sua linha de crédito. No entanto, não é possível usar a API para compartilhar sua linha de crédito (com um cliente que mudou de parceiro) nos últimos três dias ou nos primeiros quatro dias de qualquer mês. Por isso, para garantir o menor tempo de inatividade possível, oriente os clientes a iniciar o processo perto do final do mês, mas pelo menos três dias antes do término, para que você possa realizar a chamada de API no mesmo mês.

## Limitações

-   Os clientes precisam de ter uma WABA. As WABAs dos parceiros de soluções (o [modelo "Em nome de"](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#messaging-on-behalf-of)) não são compatíveis.-   Assim que o cliente iniciar o processo, ele será impedido de enviar mensagens até que sua linha de crédito substitua a dele. Isso acontece no primeiro dia do mês após você usar com sucesso a API para compartilhar sua linha de crédito com o cliente.-   A moeda da sua linha de crédito precisa ser igual à da WABA do cliente no momento da migração.-   Não é possível usar a API para compartilhar sua linha de crédito (com um cliente que mudou de provedor) nos últimos três dias ou nos primeiros quatro dias de qualquer mês.-   Será preciso registrar os números de telefone comercial em uso com a API Local novamente como parte do processo. Os números de telefone comercial em uso com a API de Nuvem não precisam ser registrados outra vez.

## Etapa 1: instruir o cliente a cancelar o compartilhamento da WABA

Instrua o cliente a usar o Meta Business Suite para cancelar o compartilhamento da Conta do WhatsApp Business com o parceiro atual dele. O cliente pode fazer isso navegando até:

**Configurações do negócio** > **Contas** (seção do menu) > **Contas do WhatsApp** > **Parceiros** (aba)

Na aba **Parceiros**, ele poderá selecionar o parceiro atual, clicar no ícone de exclusão (lixeira) e concluir o fluxo para cancelar o compartilhamento da WABA.

Você pode fornecer ao cliente o link a seguir para ele carregar diretamente o portfólio empresarial no painel "Configurações do negócio":

`https://business.facebook.com/settings`

Outra opção é direcionar o cliente para este artigo da Central de Ajuda:

[Como gerenciar as permissões do seu provedor de soluções do WhatsApp Business](https://www.facebook.com/business/help/861444384718867)

Depois que o cliente concluir essa etapa, ele será impedido de enviar mensagens até que sua linha de crédito substitua a opção atual. Isso acontece no primeiro dia do mês _após_ você compartilhar sua linha de crédito com o cliente.

Se o cliente tentar enviar uma mensagem durante esse período, a API retornará o código de erro `131042`. Além disso, um webhook `messages` será enviado ao parceiro de soluções atual com o mesmo código.

## Etapa 2: instruir o cliente a concluir o cadastro incorporado

Caso você não tome nenhuma medida, a Meta moverá sua conta para seu portfólio empresarial após 90 dias. Esse processo não interromperá os serviços de troca de mensagens.

Direcione o cliente para sua implementação do cadastro incorporado. Instrua-o a completar o fluxo e selecionar a WABA existente quando vir o aviso **Esta Conta do WhatsApp Business foi compartilhada anteriormente**.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/435163409_465518599131244_3999655418914952752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=06NN5n1jU6oQ7kNvwG5RLVs&_nc_oc=AdkTQuG_6TredcNwdCHJOsx73m-TovRYIjG6xYC9XL9PN95mfU9oYB9beOfIpBzXDnk&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=W_hTnkgsiKUqTp8KTqsGQg&oh=00_AfloibVC1ZRPGhb4NzARqybSdYMS_ssaChAYlA4_CHXuwQ&oe=69611E62)

Depois que o cliente selecionar a WABA e prosseguir, o fluxo será encerrado. Não será preciso selecionar um número de telefone comercial.

## Etapa 3: receber as identificações de ativos do listener de eventos de mensagem do registro da sessão

Receba a identificação da WABA do cliente e o número de telefone comercial capturado pelo [listener de eventos de mensagem do registro da sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) ao concluir o fluxo.

O número de telefone comercial do cliente não será incluído no registro da sessão por meio desse fluxo.

## Etapa 4: trocar o código do token por um token da empresa

[Troque o código do token](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner#step-1--exchange-the-token-code-for-a-business-token) capturado no [retorno de chamada da resposta](/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback) pelo [token comercial](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) do cliente.

## Etapa 5: adicionar o usuário do sistema à WABA do cliente

Se você estiver usando um [token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) (o que não é recomendado) em vez de um token comercial, adicione o usuário do sistema à WABA do cliente usando o Gerenciador de Negócios no Meta Business Suite.

[**Configurações do negócio**](https://business.facebook.com/settings) > **Contas** (seção do menu) > **Contas do WhatsApp** > \[WABA do cliente\] > **Pessoas** (aba) > **Atribuir pessoas** (botão)

## Etapa 6: compartilhar sua linha de crédito com o cliente

[Compartilhe sua linha de crédito](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#sharing-your-credit-line) com o cliente. Essa alteração não será refletida até o primeiro dia do mês seguinte. Até lá, o cliente continuará compartilhando a linha de crédito do antigo parceiro de soluções, mas ficará impedido de enviar mensagens.

No primeiro dia do próximo mês, sua linha de crédito substituirá a linha de crédito anterior e o cliente poderá retomar a troca de mensagens.

### Exemplo

-   **20 de abril**: um cliente deixa de compartilhar a WABA com um parceiro de soluções anterior. O cliente agora está impedido de trocar mensagens.-   **21 de abril:** o cliente conclui a implementação do cadastro incorporado. Você captura as credenciais e o token de acesso do cliente, compartilhando sua linha de crédito com ele. A linha de crédito do antigo parceiro de soluções ainda é compartilhada com o cliente, mas ele continua impedido de trocar mensagens.-   **1º de maio:** sua linha de crédito substitui a linha de crédito anterior. O cliente agora pode trocar mensagens novamente. Todas as [mensagens cobráveis](/documentation/business-messaging/whatsapp/pricing) enviadas pelo cliente serão cobradas da sua linha de crédito.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)