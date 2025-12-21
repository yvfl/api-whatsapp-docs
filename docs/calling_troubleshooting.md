<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting -->
<!-- Scraped: 2025-12-20T17:41:43.304Z -->

# Solução de problemas e códigos de erro

Updated: 13 de nov de 2025

## Resposta de erro padrão

Quando você recebe um erro, na maioria dos casos, terá o seguinte formato:

```
{
  "error": {
    "message": "<Error Message>",
    "type": "<Exception Type>",
    "code": <Exception Code>,
    "fbtrace_id": "<Trace ID>"
  }
}
```

Use a lista de códigos de erro da API de Ligações abaixo para identificar e resolver problemas com ligações.

## Códigos de erro de ligações

Código

Descrição

Soluções possíveis

Código de status HTTP

`100`

Parâmetro inválido

A chamada à Graph API que você está fazendo tem um parâmetro inválido.

Os detalhes exatos do erro serão listados na seção `error_data` da carga de resposta.

Se o erro for relacionado à validação de SDP, o problema específico será incluído nos detalhes.

`400`

Solicitação incorreta

`613`

O limite da API de Buscar permissão de ligação para número de telefone do consumidor foi atingido

Limite atingido para solicitações à API de status de permissão de ligação busca.

Tente novamente mais tarde ou reduza a frequência ou a quantidade de solicitações à API que o app está fazendo.

`429`

Número excessivo de solicitações

`131009`

O tipo de mensagem interativa, `voice_call` não é compatível. Tipos compatíveis \[`button`, `list`\]

Verifique se o remetente está em um dos [países compatíveis](/documentation/business-messaging/whatsapp/calling/faq#product-faq).

`400`

Solicitação incorreta

`131030`

O número de telefone do destinatário não está na lista de permissão.

O erro é gerado para tentativas de ligações e solicitações de permissão de ligação.

Isso só acontece quando você usa números de teste público (PTNs).

Adicione um número de telefone do destinatário à lista de destinatários e tente novamente.

`400`

Solicitação incorreta

`138000`

Ligações não habilitadas

As APIs de Ligações não estão habilitadas para esse número de telefone.

As ligações não estão habilitadas no número de telefone comercial.

[Defina as configurações de ligação para habilitar os recursos da API de Ligações](/documentation/business-messaging/whatsapp/calling/call-settings)

`401`

Não autorizado

`138001`

Não é possível ligar para o destinatário

O destinatário não consegue receber ligações.

Os motivos podem ser os seguintes:

-   O número de telefone do destinatário não está registrado no WhatsApp.-   O destinatário não aceitou os novos Termos de Serviço e a nova Política de Privacidade.-   O destinatário está usando um cliente incompatível. No momento, os clientes compatíveis são Android, iOS, SMB Android e SMB iOS.

Verifique com o destinatário se ele permitiu que você entre em contato com ele por WhatsApp e está usando a versão mais recente do app.

`400`

Solicitação incorreta

`138002`

Limite de ligações simultâneas

Limite atingido para o máximo de ligações simultâneas (1.000) para o número fornecido.

Tente novamente mais tarde ou reduza a frequência ou a quantidade de chamadas à API que o app está fazendo.

`429`

Número excessivo de solicitações

`138003`

Ligação duplicada

Uma ligação já está em andamento com o destinatário.

Tente novamente quando a chamada em ligação for encerrada.

`400`

Solicitação incorreta

`138004`

Erro de conexão

Erro ao conectar a ligação

Tente novamente mais tarde ou investigue os parâmetros de conexão fornecidos à API.

`500`

Erro no servidor

`138005`

Limite de taxas de ligações excedido

O limite de ligações que podem ser iniciadas pelo número de telefone comercial foi atingido.

Tente novamente mais tarde ou reduza a frequência ou a quantidade de chamadas à API que o app está fazendo.

`429`

Número excessivo de solicitações

`138006`

Nenhuma permissão de ligação aprovada encontrada

Nenhuma permissão de [ligação](/documentation/business-messaging/whatsapp/calling/user-call-permissions) aprovada do destinatário

Verifique se o consumidor aceitou a permissão de ligação.

`401`

Não autorizado

`138007`

Erro de tempo limite de conexão

Não foi possível completar a ligação devido ao tempo limite.

A empresa não aplicou a oferta/resposta SDP da API de Nuvem a tempo. A API de Conexão não foi invocada com o SDP de resposta a tempo.

`500`

Erro no servidor

`138009`

O limite de solicitações de permissão de ligação foi atingido

O limite de envios de solicitações de permissão de ligação foi atingido para o par de empresas e consumidor fornecido.

Quando uma empresa envia mais solicitações de permissão de ligação do que o limite permitido por período, essas solicitações são submetidas à limitação de volume. Uma ligação conectada com um consumidor redefinirá os limites.

`400`

Solicitação incorreta

`138012`

O limite de ligações iniciadas pela empresa foi atingido

O limite máximo de ligações iniciadas pela empresa em 24 horas foi atingido. No momento, cinco ligações iniciadas pela empresa conectada são permitidas em 24 horas.

Os detalhes exatos do erro serão listados na seção `error_data` da carga de resposta.

Esses detalhes incluirão um registro de data e hora de quando a próxima ligação for permitida.

`400`

Solicitação incorreta

`138013`

As ligações iniciadas pela empresa não estão disponíveis.

Não é possível fazer ligações iniciadas pela empresa usando esse número de telefone comercial.

Confirme se as ligações iniciadas pela empresa estão disponíveis para este número de telefone comercial na [seção Disponibilidade aqui](/documentation/business-messaging/whatsapp/calling#availability).

`400`

Solicitação incorreta

`138014`

As ligações estão temporariamente desabilitadas

As APIs de Ligações desse número do WhatsApp Business foram temporariamente desabilitadas por apresentarem baixa qualidade.

Garanta que seu contato com os usuários seja relevante e não spam.

Tente realizar a ação novamente depois que as restrições da conta forem suspensas.

`400`

Solicitação incorreta

`138015`

Não é possível habilitar as ligações

As APIs de Ligações não podem ser habilitadas para esse número de telefone.

Verifique se o [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) do seu número de telefone é igual ou superior a 2 mil.

`400`

Solicitação incorreta

`138017`

Não é possível enviar o pedido de permissão para ligação porque já existe uma permissão permanente.

Não é possível enviar o pedido de permissão para ligação porque o usuário já aprovou uma permissão permanente para o número de telefone da conta comercial.

Não é necessário enviar pedidos de permissão para ligação.

`400`

Solicitação incorreta

`138018`

Não é possível habilitar as ligações do WhatsApp Business porque os pré-requisitos técnicos não foram atendidos.

Consulte [pré-requisitos](/documentation/business-messaging/whatsapp/calling#step-1--prerequisites) para saber mais.

[Configure o SIP](/documentation/business-messaging/whatsapp/calling/sip) ou verifique se existe pelo menos um app inscrito na conta do WhatsApp Business que também tenha assinatura do campo `calls` do webhook.

`400`

Solicitação incorreta

`138019`

Falha na configuração da ligação

O cliente do WhatsApp não conseguiu configurar a ligação.

Esse erro é enviado no webhook de encerramento da ligação.

Tente novamente mais tarde.

`400`

Solicitação incorreta

`138020`

Falha na conexão de retransmissão

O cliente do WhatsApp não estabeleceu uma conexão com o servidor de retransmissão.

Esse erro é enviado no webhook de encerramento da ligação.

Tente novamente mais tarde.

`400`

Solicitação incorreta

`138021`

Tempo limite de recebimento de mídia

O cliente do WhatsApp encerrou a ligação porque não recebeu mídia por um longo período.

Esse erro é enviado no webhook de encerramento da ligação.

Verifique se a mídia da ligação está sendo enviada para o servidor de retransmissão e tente novamente.

`400`

Solicitação incorreta

`138022`

Tempo limite de transmissão de mídia

O cliente do WhatsApp encerrou a ligação porque não transmitiu mídia por um longo período.

Esse erro é enviado no webhook de encerramento da ligação.

Tente novamente mais tarde.

`400`

Solicitação incorreta

`138023`

Ligação aceita, mas encerrada sem sinais de mídia

A ligação foi aceita, mas encerrada sem sinal de conexão de mídia.

A API de Nuvem não conseguiu determinar se a ligação foi conectada.

Esse erro é enviado no webhook de encerramento da ligação.

Tente novamente mais tarde.

`400`

Solicitação incorreta

`131044`

Um webhook de erro é enviado em ligações iniciadas pelo usuário quando não há nenhuma forma de pagamento válida anexada.

Isso é semelhante ao erro [“Problema de pagamento referente à qualificação da empresa”](/documentation/business-messaging/whatsapp/support/error-codes) em mensagens.

`400`

Solicitação incorreta

`131055`

Método não permitido. As chamadas à Graph API não são permitidas para números habilitados para SIP.

Use [SIP](/documentation/business-messaging/whatsapp/calling/sip) para números comerciais habilitados para SIP.

`400`

Solicitação incorreta

## Erros de SIP

Para ver mais informações sobre solução de problemas, consulte [perguntas frequentes específicas sobre o SIP](/documentation/business-messaging/whatsapp/calling/faq#session-initiation-protocol--sip--faq).

Origem da ligação

Erro

Descrição

Soluções possíveis

Iniciadas pela empresa

O servidor de SIP `foo.com` do INVITE não corresponde a nenhum servidor de SIP configurado para a identificação de número de telefone \[ID\]

Seu SIP INVITE (convite SIP) para a Meta tem "foo.com" no cabeçalho `From` (por exemplo, `15555551234@foo.com`). Entretanto, não há servidor SIP com esse nome de host [configurado](/documentation/business-messaging/whatsapp/calling/sip#configure-update-sip-settings-on-business-phone-number) no número de telefone comercial.

Verifique a [configuração do SIP](/documentation/business-messaging/whatsapp/calling/sip#get-phone-number-calling-settings--sip-) e confirme que ela corresponde ao domínio usado no cabeçalho `From`. O `hostname` na [configuração do SIP](/documentation/business-messaging/whatsapp/calling/sip#get-phone-number-calling-settings--sip-) deve corresponder ao domínio no cabeçalho `From` do seu SIP INVITE. Também é válido que a configuração de SIP `hostname` seja um subdomínio do domínio no cabeçalho `From`. Por exemplo: o servidor de SIP configurado é `bar.foo.com`, e o cabeçalho De é `15555551234@foo.com`.

Iniciadas pela empresa

Nenhuma permissão de ligação aprovada encontrada: nenhuma permissão de ligação aprovada do destinatário

As empresas precisam da permissão do usuário do WhatsApp para poderem fazer uma ligação

Há várias maneiras de obter a permissão do usuário. Para mais informações, consulte [Obter permissões de ligação do usuário](/documentation/business-messaging/whatsapp/calling/user-call-permissions) .

Iniciadas pela empresa

O app \[APP\_ID\] configurado para o servidor de SIP `example.com` não está autorizado para a identificação de número de telefone \[ID\]

Quando você configura o servidor de SIP em um telefone comercial, extraímos a identificação do app do token de acesso e armazenamos um mapeamento do servidor de SIP para essa identificação do app. Quando você envia um SIP INVITE, consultamos esse mapeamento para saber qual app está fazendo a solicitação. Esse erro significa que o app não tem permissão `whatsapp_business_messaging` no telefone comercial.

Verifique se você está usando o app certo e confira se ele tem permissões no telefone comercial. Se você conseguir [enviar uma mensagem](/documentation/business-messaging/whatsapp/messages/send-messages#requests) usando o token de acesso do app, isso significa que o app tem a permissão certa. Caso contrário, pode ser necessário excluir e adicionar o servidor de SIP com o app correto e tentar fazer novamente o SIP INVITE. Consulte [Como configurar as definições do SIP](/documentation/business-messaging/whatsapp/calling/sip#configure-update-sip-settings-on-business-phone-number).

Iniciadas pela empresa

O limite diário de ligações iniciadas pela empresa conectada foi atingido

O limite máximo de ligações iniciadas pela empresa em 24 horas foi atingido. No momento, cinco ligações iniciadas pela empresa conectada são permitidas em 24 horas.

Saiba mais sobre os [limites](/documentation/business-messaging/whatsapp/calling/user-call-permissions#limits--per-business---whatsapp-user-pair-) e ajuste sua taxa de ligações de acordo.

## Problemas relacionados a mídias

Problema

Descrição

Soluções possíveis

A ligação é encerrada após 20 segundos

No início da ligação, se não houver mídia fluindo da empresa para o usuário do WhatsApp por 20 segundos, o cliente do WhatsApp desconectará a ligação devido à falta de mídia

-   Verifique se o servidor de mídia está iniciando a sessão de mídia e enviando pacotes de mídia-   Verifique o firewall para descartar quaisquer perdas de pacotes na borda-   Capture o tráfego de rede usando um comando "pcap" ou uma ferramenta semelhante e anexe-o ao tíquete de suporte para que a Meta faça uma análise mais detalhada

Não é possível ouvir o áudio, e a ligação é encerrada após 30 segundos

Depois que a ligação for conectada e estabelecida, se não houver um pacote de mídia da empresa para o usuário do WhatsApp por 30 segundos, o cliente do WhatsApp desconectará a ligação devido à falta de recepção de mídia

-   Pelo menos os pacotes RTCP devem ser enviados mesmo quando há silêncio ou quando se está aguardando a entrada do usuário (por exemplo, IVR)-   Verifique o servidor de mídia para entender por que ele para de enviar pacotes de mídia para a Meta-   Capture o tráfego de rede usando um comando "pcap" ou uma ferramenta semelhante e anexe-o ao tíquete de suporte para que a Meta faça uma análise mais detalhada

## Problema e solução para cortes de áudio

Ao transpor a mídia do consumidor do WhatsApp via WebRTC para outra mídia, como [SIP](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc3261&h=AT02CIVy22F2xm3rUqvsf2DOI4cgpFNpE-Mz-U0rwP8dmI0SIbVYAvESZtfphVmrN26tvDwoPXNOj1z4WftEHZR5ZLT1FeAgsqo8DzCDhxePqKECO3rfd0qBqywJFskRD1eSFr2Y0g7c6E6qMyu9n_5N7cU), é importante estar ciente de possíveis problemas de corte de áudio e de como evitá-los. Um sintoma comum desse problema é o consumidor do WhatsApp perder cerca de um segundo do áudio da empresa. Por exemplo, se o sistema de IVR reproduzir uma sequência como "1-2-3", o consumidor poderá ouvir apenas "2" ou "3". O quanto o áudio é afetado varia conforme a integração e a gravidade do problema.

O diagrama de sequência abaixo ilustra esse problema usando um exemplo em que o segmento do WebRTC da API de Nuvem é conectado a um segmento de mídia de SIP. Dependendo do fornecedor e da implementação do SIP, a mídia do agente do usuário do SIP pode começar a ser reproduzida na etapa 11, mas só chegará ao consumidor do WhatsApp na etapa 18.

### Diagrama de sequência

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561141851_1339317947926856_17978718883724747_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=vjIlOT5yKLgQ7kNvwEw5x4J&_nc_oc=Adm9unAMnRTlPF6OrfdyOHUS-zTQ-6pQD9Qez1BkfONCeW7OlAvyNSpWPAS5umvJjUQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=Wl6zRheGg981vCBa9GYlzQ&oh=00_Afm50y6KHH_Ix4u18tlpXolhQaiq3xKyrmQqJ_WERfmq_A&oe=69612FEA) (_Clique com o botão direito do mouse na imagem e escolha "Abrir em uma nova aba" para ampliar a imagem_)

  
  

#### Componentes do diagrama de sequência

-   _WAConsumer_ é um usuário do WhatsApp que liga para o número de telefone comercial usando o app WhatsApp para celular-   _Meta_ é o produto API de Nuvem-   _MetaWebrtcEndpoint_ é o agente WebRTC na infraestrutura da Meta-   _BizIntegration_ é o servidor de webhook que recebe ligações relacionadas a webhooks e o servidor do app com lógica de negócios para invocar Graph APIs da API de Nuvem-   _BizWebrtcEndpoint_ é o ponto de terminação webrtc, assim como o UAC do SIP normalmente em um servidor de mídia do seu lado-   _BizSipEndpoint_ é o agente do usuário (UA) do SIP que normalmente representa o IVR ou o agente comercial

### Causa raiz

Ao transpor dois segmentos de mídia, é fundamental que o servidor de mídia sincronize a prontidão deles para evitar o corte de áudio. Nesse cenário, o BizWebrtcEndpoint está permitindo que o agente do usuário (UA) do SIP transmita mídia muito antes de o segmento do WebRTC estar preparado para recebê-la. Como resultado, os pacotes estão sendo descartados no servidor de mídia, o que leva a problemas de corte de áudio.

### Solução sugerida

De acordo com a [recomendação RFC](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8839%23name-offer-in-invite&h=AT02CIVy22F2xm3rUqvsf2DOI4cgpFNpE-Mz-U0rwP8dmI0SIbVYAvESZtfphVmrN26tvDwoPXNOj1z4WftEHZR5ZLT1FeAgsqo8DzCDhxePqKECO3rfd0qBqywJFskRD1eSFr2Y0g7c6E6qMyu9n_5N7cU), um agente WebRTC, como BizWebrtcEndpoint, não deve transmitir mídia até que o processo ICE esteja quase concluído. No nosso contexto, isso significa adotar uma estratégia de "aceitação otimista" ao invocar a [chamada de API pre-accept](/documentation/business-messaging/whatsapp/calling/reference#pre-accept-call) mesmo antes de enviar o SIP INVITE. De acordo com os RFCs do SIP, um cliente de agente do usuário (UA) deve estar preparado para receber mídia imediatamente depois de enviar o convite. Portanto, recomendamos iniciar o processo de configuração da conexão do WebRTC antes do envio do SIP INVITE.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/506003031_1707201813250165_1375490555963610314_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=TQ8EGIfi1KgQ7kNvwHmSGHM&_nc_oc=Adm4-bYhWpKlhDJqkMevGVemGDhSQ7C985g0l87d5ClThUQFm7NEvIqhIAU6nfT0M9M&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=Wl6zRheGg981vCBa9GYlzQ&oh=00_AfnLRnUMY06VGFjoJ2nhHoyJXfMOZQMrdHkPhUQ9E1JeJw&oe=69612507)

(_Clique com o botão direito do mouse na imagem e escolha "Abrir em uma nova aba" para ampliar a imagem_)

  
  

#### Principais pontos para observar

-   Depois de receber o webhook de conexão (etapa 5 acima), inicialize o agente WebRTC, prepare a resposta SDP e faça a chamada à API Graph de pré-aceitação com a resposta SDP. Isso estabelece previamente a conexão do WebRTC, antecipando uma resposta do tipo "aceitar/ok" do agente do usuário (UA) do SIP. Na maioria dos casos, a ligação do cliente é atendida por uma gravação automatizada ou por um sistema de IVR.-   Na etapa 11 acima, aguarde o processo ICE concluir a criação de listas válidas, indicando a conclusão iminente do estabelecimento da conexão do ICE (referência RFC).-   Se o UA do SIP rejeitar a ligação em vez de retornar uma resposta 200 OK, use a Graph API de encerramento para finalizar a ligação.-   Se a conexão do consumidor estiver pronta antes da conexão do SIP, o consumidor poderá ouvir alguns milissegundos de silêncio, o que é preferível à perda do áudio inicial da empresa.

### Outras soluções possíveis

Veja abaixo um resumo de alto nível das abordagens alternativas para a questão do corte de áudio, com o objetivo de estimular a discussão e a consideração. Cada opção apresenta desvantagens. Por isso, avalie a viabilidade de acordo com os requisitos específicos do seu caso.

-   **Reprodução de áudio atrasada:** instrua o agente do usuário (UA) do SIP a aguardar uma confirmação (ACK) do BizWebrtcEndpoint antes de reproduzir o áudio. A ACK só seria enviada depois do recebimento de uma resposta bem-sucedida da API de Aceitação, seguida por um atraso artificial. Essa abordagem garante que a conexão do WebRTC seja estabelecida antes do início da reprodução de áudio.-   **Atraso baseado no estado da conexão:** instrua o UA do SIP a aguardar até que o estado da conexão do WebRTC seja "Conectado" antes de reproduzir o áudio. Esse método exige que a conexão do WebRTC esteja totalmente estabelecida antes do início da reprodução de áudio.-   **Pacotes de mídia armazenados em buffer:** armazene em buffer pacotes de mídia de SIP e envie-os apenas depois que a conexão do WebRTC for estabelecida. Essa abordagem garante que nenhum pacote de áudio seja perdido devido à reprodução prematura.-   **Inserção de silêncio:** insira um breve período de silêncio no áudio de IVR antes do conteúdo de áudio real. Esse método permite que a conexão do WebRTC seja estabelecida enquanto o IVR reproduz silêncio, reduzindo a probabilidade de corte de áudio.

Essas alternativas podem ter diferentes níveis de complexidade e impacto no seu sistema. É importante avaliar a viabilidade e as possíveis combinações no contexto do seu caso de uso específico.

## Suporte

Para obter suporte relacionado à API de Ligações Comerciais do WhatsApp, selecione o tópico **WaBiz: API de Ligações** ao abrir um tíquete de [Suporte Direto](https://business.facebook.com/direct-support/).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)