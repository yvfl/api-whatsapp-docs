<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq -->
<!-- Scraped: 2025-12-20T17:42:09.413Z -->

# Perguntas frequentes

Updated: 13 de nov de 2025

## Perguntas frequentes sobre o produto

**As ligações aparecerão na página de insights da interface do usuário do Gerenciador do WhatsApp da Meta?**

Os insights sobre as ligações ficarão disponíveis no Gerenciador do WhatsApp e na [API de Análise](/documentation/business-messaging/whatsapp/analytics).

**As ligações internacionais têm suporte como ligações entre consumidores do WhatsApp?**

Sim

#### Em quais países é possível fazer ligações?

-   A ligação iniciada pelo usuário está disponível em [todas as localizações em que a API de Nuvem está disponível](/documentation/business-messaging/whatsapp/support#country-restrictions)-   As ligações iniciadas pela empresa (BIC, nas iniciais em inglês) estão disponíveis em [todas as localizações onde a API de Nuvem está disponível](/documentation/business-messaging/whatsapp/support#country-restrictions), **exceto os seguintes países:**
    -   Estados Unidos-   Canadá-   Turquia-   Egito-   Vietnã-   Nigéria

**Observação:** o código do país no número de telefone comercial deve estar nesta lista compatível. O número de telefone do consumidor pode ser de qualquer [país em que a API de Nuvem esteja disponível](/documentation/business-messaging/whatsapp/support#country-restrictions).

**Posso usar números gratuitos para fazer ligações?**

Sim, desde que o código do país para o número gratuito esteja na lista de países compatíveis. Consulte [Números 0800 e gratuitos](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#1-800-and-toll-free-numbers) para saber mais sobre como registrar números 0800 na API de Nuvem.

**Qual é o número máximo de ligações simultâneas que um único número de telefone de conta da API de Nuvem pode receber?**

O máximo de ligações simultâneas é mil. Quando o limite de volume é excedido, o responsável pela ligação (ou seja, o usuário do WhatsApp) recebe uma mensagem genérica dizendo que não é possível fazer a ligação. Nenhuma mensagem é reproduzida e não há webhook. Esperamos aumentar esse limite e, por isso, a probabilidade de isso acontecer é baixa. Os limites de volume para a API de mensagens e a API de criação/atualização de modelo são separados e não relacionados aos limites de ligações.

**Qual é a função do BSP em relação à empresa final no fluxo de ligação geral?**

-   O BSP oferece serviços de valor agregado (por exemplo, central de contato, gravação de voz, transcrição e assim por diante) além do stream de áudio bruto fornecido pela API de Nuvem para Ligações.-   O webhook é enviado para apps que assinaram o novo campo de assinatura `calls`. Em casos normais, um BSP usa o próprio app e recebe o webhook de ligação, seguido da ligação em questão.-   A forma como a empresa final (ou seja, seu cliente) participa da ligação depende de você como BSP.

**A infraestrutura/API de voz do WhatsApp é a mesma do Facebook Messenger?**

A API de Ligação do WhatsApp é a primeira API de voz pública da Meta. A Meta poderá reutilizar a mesma API e modelo de integração para outros produtos quando e se eles oferecerem soluções de voz.

**Qual é a duração máxima da ligação compatível?**

Não há limite de duração para a ligação

**O SIP é compatível?**

Sim, consulte ["Como configurar e usar sinais de ligação por meio do protocolo de iniciação de sessão (SIP)"](/documentation/business-messaging/whatsapp/calling/sip)

**Posso enviar/receber mensagens de texto/mídia durante uma ligação?**

Sim. A [API send-message](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) pode ser usada durante uma ligação.

**A Meta oferece serviços como gravação de voz, transcrição e correio de voz?**

Não. No entanto, esses serviços são oferecidos por vários dos nossos parceiros

**Podemos adicionar metadados (por exemplo, contexto) como parte da aceitação da ligação?**

Sim. Confira o campo [biz\_opaque\_callback\_data na especificação principal da API](/documentation/business-messaging/whatsapp/calling/reference#initiate-call). Além disso, o estado da conversa fornece um contexto importante para o atendente humano da empresa. O ideal é que o subsistema de encaminhamento de ligações conecte diretamente a ligação do cliente do WhatsApp ao agente certo na empresa. Essa opção proporciona a melhor experiência ao cliente e evita o sistema de IVR padrão

**Como podemos aumentar o reconhecimento do recurso de ligação entre os usuários do WhatsApp?**

-   É possível enviar mensagens com botões de ligação de voz. Para saber mais, consulte as seções sobre [envio de mensagem interativa](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button) e [envio de mensagem de modelo](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#create-and-send-whatsapp-call-button-template-message)-   Também é possível enviar uma mensagem com um botão de ligação de voz automaticamente quando um consumidor do WhatsApp abre uma conversa com sua conta comercial pela primeira vez. Consulte [mensagem de boas-vindas](/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components#welcome-messages) para saber mais.-   É possível [adicionar um link para uma ligação do WhatsApp no seu site usando deep links](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#calling-deep-links).

**É possível que uma IA (por exemplo, um voicebot) tenha uma conversa com um cliente diretamente por meio de uma ligação do WhatsApp?**

Sim. A Meta só fornece o stream de mídia bruta. Você é responsável por processá-lo. Vários parceiros usam bots de voz automatizados, incluindo bots de IA, para responder a ligações de usuários do WhatsApp. Muitos produtos de IA no mercado oferecem RTC/APIs de voz. Alguns até são compatíveis com WebRTC nativo. O processo de integração é semelhante ao que você faria para integrar a API de Ligação do WhatsApp Business com centrais de atendimento humanas ou de IVR.

**Por que a [aceitação prévia](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#pre-accept-call) de uma ligação iniciada pelo usuário inicia o cronometragem do lado do usuário do WhatsApp?**

Talvez seja porque você está enviando mídia antes de [aceitar](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#accept-call) a ligação. Os clientes do WhatsApp consideram uma ligação como aceita por um par se receberem um pacote de mídia ou um sinal de aceitação, o que ocorrer primeiro.

Caso você não consiga controlar o momento de início da mídia, [aceite](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#accept-call) a ligação diretamente, sem usar a [pré-aceitação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#pre-accept-call). A pré-aceitação serve para preparar o estabelecimento da conexão de mídia, mas exige o controle do tempo de transmissão de mídia.

## Perguntas frequentes sobre como começar

**Qual é a versão mínima da Graph API para as APIs de Ligação?**

Versão 17.0. [Confira aqui o histórico de versões geral](/docs/graph-api/changelog)

**Podemos usar o mesmo token de acesso do usuário para enviar mensagens e fazer ligações?**

Sim. Em geral, o que funciona para mensagens também funciona para ligações.

**A WABA precisa ter uma linha de crédito anexada para usar as APIs de Ligação?**

Sim, você precisa ter uma linha de crédito associada à sua WABA para usar a API de Ligações.

**A WABA precisa ser uma empresa verificada para fazer ligações?**

Não. A [verificação da empresa](https://www.facebook.com/business/help/2058515294227817?**id=180505742745347) não é obrigatória para fazer ligações nem enviar mensagens

**Como o uso das APIs de Ligação afeta meus limites de volume?**

No momento, o uso da API de Ligações não é contabilizado no limite de volume de mensagens. No momento, o único limite aplicado para ligações é o de mil ligações simultâneas, mas isso pode mudar em breve.

**É possível que uma conta do WhatsApp Business esteja conectada ao provedor A para conversas e ao provedor B para voz (ou seja, dois apps diferentes inscritos na mesma conta/telefone do webhook do WhatsApp Business)?**

Sim, é possível que dois parceiros operem um único número de telefone da API do WhatsApp Business com duas soluções separadas, como conversa e ligações.

[Para saber mais, consulte o artigo sobre conversas com várias soluções](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations).

Outra opção é o provedor de voz usado por outro BSP. Nesse caso, você não precisa ter um app da Meta nem ser um Provedor de Tecnologia na Meta. Essa arquitetura é descrita em detalhes na seção [“Como fazer a integração usando um provedor de voz independente”](/documentation/business-messaging/whatsapp/calling/integration-patterns#integrating-using-a-third-party-voice-provider-detailed-design).

## Perguntas frequentes sobre sinalização de ligações da Graph API

**A Meta fornece servidores stun/turn ou infraestrutura de WebRTC para uso pelo BSP?**

Não.

A Meta usa [ICE-lite](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8445%23autoid-21&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410). Nossa oferta de SDP sempre possui um único endereço ipv4 e ipv6 por componente de fluxo de dados. Recomendamos que a resposta do SDP siga o mesmo

Por isso, não é obrigatório usar STUN/TURN para determinar os candidatos ICE

**A Meta recomenda servidores stun/turn ou infraestrutura de WebRTC para uso pelo BSP?**

A Meta não tem recomendações. Veja algumas ideias para reflexão, caso sejam úteis.

-   Verifique se você já tem alguma tecnologia relacionada a VoIP e, se tiver, consulte essa equipe. O WebRTC usa o protocolo SRTP/SRTCP para mídias reais, que é o padrão de mídia VoIP.-   O uso de STUN/TURN funciona bem em uma configuração de usuário final com um navegador em um dispositivo pessoal. Caso a integração com nossas APIs de Voz envolva o encerramento da mídia diretamente no dispositivo do usuário final, o processo de STUN/TURN acontecerá diretamente no dispositivo desse usuário. No entanto, com frequência, a mídia é encerrada na infraestrutura do parceiro para que serviços como IVR possam ser oferecidos. Nesses casos, a infraestrutura pode ter as próprias maneiras de alocar um IP e uma porta para conexões VoIP, por exemplo, usando VIP por trás de um balanceador de carga etc.

**Qual função do ICE o agente ICE do lado da empresa deve assumir?**

Você deve sempre assumir a função CONTROLLING, já que o agente ICE do lado da Meta usa o ICE-lite ([RFC 8445](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8445%23autoid-21&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410)). Se você começar com a função de CONTROLLED, o processo ICE poderá travar e expirar. Mesmo que funcione, demorará mais tempo devido às várias idas e vindas necessárias para resolver conflitos de função.

**É possível adicionar mais candidatos ao ICE como parte do sinal em oferta + resposta (por exemplo, usando o ICE Trickle)?**

A resposta curta é "sim". A API de Nuvem usa [ICE-lite (RFC 8445)](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8445%23autoid-21&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410) e sempre assume a [função](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8445%23autoid-26&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410) CONTROLLED no ICE. Portanto, não é necessário enviar os candidatos atualizados para a Meta. Seu agente ICE pode iniciar verificações de conectividade a partir de endereços não incluídos no seu SDP, e nosso agente ICE considerará endereços desconhecidos como candidatos válidos, desde que a integridade da mensagem STUN seja aprovada.

**Qual é a maneira recomendada de determinar o candidato do ICE?**

A Meta tem uma infraestrutura e uma presença global e escolherá o retransmissor de mídia mais próximo ao usuário do WhatsApp envolvido na ligação.

Você pode escolher o servidor/host de mídia (também conhecido como direcionamento) com base em diversos parâmetros, incluindo o IP que escolhemos, o país do número de telefone do consumidor e o número de telefone comercial. A seleção da localização do servidor de mídia é um fator importante na otimização da latência de mídia entre o IP do BSP e o IP da Meta, o que contribui para uma maior qualidade da ligação. No mínimo, recomendamos que a localização de hospedagem da ligação/mídia do BSP esteja próxima ao país do usuário do WhatsApp, conforme determinado pelo código do país do número de telefone.

As implementações de direcionamento devem otimizar para os IPs dos candidatos nos metas-SDPs e não na fonte dos pontos de extremidade de sinalização.

**Há uma API para enviar uma resposta provisória equivalente ao toque de SIP 180?** Em caso negativo, quando o dispositivo do usuário começa a tocar?

O usuário que está ligando (ou seja, o app WhatsApp de consumidor) já estaria ligando quando você recebeu o webhook. Não há necessidade de respostas provisórias

**Como as ligações são protegidas?**

A API de Nuvem usa o protocolo SRTP para a criptografia de streams de mídia [(RTP/SAVPF)](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc5124&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410). A troca de chave SRTP real é inicialmente executada de ponta a ponta com [DTLS-SRTP](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc5764&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410).

**A Meta pode enviar webhooks de ligação para um ponto de extremidade diferente com base na localização geográfica do cliente ou outros fatores, como latência de rede?**

O URL do webhook é fornecido por você. Nós usamos HTTPs para que você possa usar técnicas de balanceamento de carga e direcionamento padrão para redirecionar de acordo. Você também pode configurar um URL de webhook diferente (também conhecido como substituto ou alternativo) por [conta do WhatsApp Business](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#overriding-the-callback-url) e por [número de telefone comercial](/docs/whatsapp/embedded-signup/webhooks/override#set-phone-number-alternate-callback). O webhook é usado apenas para sinalização. Os servidores da Meta que fazem ligações para o servidor do webhook estão localizados nos EUA. Recomendamos que você selecione a localização do ponto de extremidade de mídia com base no código do país do consumidor do WhatsApp (disponível nos nossos webhooks) ou nos IPs do candidato ICE no SDP enviado pela Meta. Consulte as perguntas frequentes acima: **“Qual é a maneira recomendada de determinar o candidato do ICE?**” e **“Como reduzir a latência de mídia das ligações?”**.

**Quais são os endereços IP da Meta que ligarão para nosso servidor de Webhook, SIP ou mídia para que possamos incluí-los na lista de permissão do nosso firewall?**

Consulte nossa [documentação pública](/documentation/business-messaging/whatsapp/webhooks/overview#ip-addresses) sobre esse assunto. Ao recolher a lista de endereços IPv4, você obtém cerca de 23 prefixos. Confira abaixo um exemplo de comando e saída gerada em 11 de dezembro de 2024

```
$ src % whois -h whois.radb.net — '-i origin AS32934' | grep ^route | awk '{print $2}' | grep -iv ':' | cidrmerge
31.13.24.0/21
31.13.64.0/18
45.64.40.0/22
57.141.0.0/21
57.141.8.0/22
57.141.12.0/23
57.144.0.0/14
66.220.144.0/20
69.63.176.0/20
69.171.224.0/19
74.119.76.0/22
102.132.96.0/20
103.4.96.0/22
129.134.0.0/16
147.75.208.0/20
157.240.0.0/16
163.70.128.0/17
163.77.128.0/17
173.252.64.0/18
179.60.192.0/22
185.60.216.0/22
185.89.216.0/22
204.15.20.0/22
```

**É possível reduzir os endereços IP da Meta que ligarão para nossos servidores de webhook pelo menos para fins de teste e desenvolvimento?**

Não. Porém, veja as perguntas frequentes acima, que deduziram cerca de 23 prefixos IPv4 para cobrir completamente todo o nosso espaço de endereços para v4.

**Qual é a política de novas tentativas para webhooks relacionados a ligações?**

Recomendamos que você não faça suposições nesse aspecto. O servidor de webhook deve determinar webhooks obsoletos com base no valor do registro de data e hora e evitar chamar Graph APIs para processá-los. Os webhooks de mensagens existentes [passam por novas tentativas por até 7 dias](/documentation/business-messaging/whatsapp/webhooks/overview#webhook-delivery-failure).

Webhooks relacionados a ligações provavelmente terão uma política de nova tentativa mais curta, mas é possível que você receba webhooks obsoletos, pois essa pode ser uma informação útil para a empresa saber que alguns consumidores tentaram entrar em contato.

**Vocês garantem que os webhooks serão entregues exatamente uma vez?**

Não. Você precisa estar preparado para lidar com webhooks duplicados.

Devido à natureza distribuída da nossa arquitetura, não podemos garantir que os webhooks sejam entregues exatamente uma vez, mesmo nos casos de webhooks relacionados a mensagens. Veja alguns cenários conhecidos em que podem ocorrer duplicações.

-   Nossa solicitação https para o servidor do webhook expirou após aproximadamente 20 segundos. Nesse caso, o servidor acredita que processou com sucesso a solicitação do webhook, mas do nosso lado falhou devido ao tempo-limite. Tentamos enviar novamente o webhook, que aparece para você como duplicado.-   Seu número de telefone tem mais de um app inscrito no campo de ligações, então enviaremos webhooks para app1, app2 nesta ordem. Se o app2 falhar, tentaremos refazer todo o envio novamente e o app1 receberá um webhook duplicado. Estamos trabalhando para corrigir esse problema.-   A recuperação de falha na infraestrutura de filas da Meta pode resultar em envios duplicados de webhooks.-   Também pode haver outros motivos desconhecidos.

**Vocês garantem a ordem dos webhooks em uma determinada ligação?**

Não, devido à natureza distribuída da nossa arquitetura e às novas tentativas.

Por exemplo, o webhook de encerramento poderá ser recebido antes do webhook de conexão se o usuário do WhatsApp desligar imediatamente após iniciar a ligação. Confira outros exemplos conhecidos.

Tentamos conectar o webhook, mas o tempo de espera expira após aproximadamente 20 segundos. O "webhook de encerramento" é enviado em seguida. A nova tentativa de conexão do webhook acontece depois do "webhook de encerramento". No caso de um tempo-limite, o servidor de webhook acredita que não há falha, mas nós vemos isso como uma falha que garante uma nova tentativa.

**Posso configurar vários servidores de webhook para ligações e ter uma noção de primário e secundário para alta disponibilidade?**

Assim como com acontece com as mensagens, é possível configurar várias assinaturas com apps diferentes associados a URLs de retorno de ligação distintos. A Meta enviará todos os webhooks de ligação para os URLs de retorno de ligações configurados. Entretanto, tratamos todos os URLs como iguais e não temos uma noção de primário/secundário

**Posso configurar URLs diferentes para webhooks relacionados a mensagens e ligações?**

Sim, para fazer isso, use dois apps diferentes da Meta: um para mensagens e outro para ligações.

Inscreva o app de mensagens apenas nos campos de assinatura de webhooks relacionados a mensagens e o app de ligação nos campos de assinatura relacionados a ligações. É possível substituir o URL de retorno de ligação de cada app no nível da WABA ou do número de telefone para ter uma substituição de URL diferente para mensagens e ligações.

No entanto, também é possível ter um único app e assinar os dois campos de assinatura de webhook `messages` e `calls`. Nessa configuração, o URI de retorno de ligação é o mesmo para mensagens e webhooks relacionados a ligações, mas a carga do webhook pode ser usada para distinguir as duas categorias de webhooks.

Em geral, recomendamos o uso de um único app.

**Você pode compartilhar um exemplo de solicitação CURL para interagir com as APIs?**

Consulte a seção [Exemplo de solicitação CURL](/documentation/business-messaging/whatsapp/calling/reference#sample-curl-requests) na nossa referência da API.

**Como os parâmetros SDP devem ser serializados com retornos de carro e uma nova linha?**

O parâmetro de sessão exige que o sdp seja definido como uma string de acordo com a especificação [RFC-8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410), que requer o uso de CRLF para encerrar um registro. O parâmetro SDP em si é uma string; portanto, não deve ser serializado. No entanto, o parâmetro de conexão legado exigia que a string sdp em conformidade com [RFC-8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410) estivesse dentro de uma estrutura json e, portanto, exigia mais serialização.

Ou seja, use “\\r\\n” para o parâmetro session->sdp. **Não use o parâmetro de conexão herdada ->webrtc->sdp.**

**Como corrigir o erro "Nenhuma impressão digital encontrada no SDP"?**

Seu SDP deve ter uma linha `a=fingerprint` quando você está usando [DTLS](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc6347&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410) como o protocolo de troca de chave [SRTP](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc3711&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410). Adicione essa linha ou [configure o número de telefone comercial para usar SDES](/documentation/business-messaging/whatsapp/calling/sip#configure-sdes-for-srtp-key-exchange-protocol). Confira todas as [configurações de sinalização e mídia](/documentation/business-messaging/whatsapp/calling/sip#signaling-and-media-possible-configurations) possíveis.

## Perguntas frequentes sobre WebRTC/mídia

**A conexão ponto a ponto da Meta é para o BSP ou para a empresa final?**

Normalmente, é para o BSP. Porém, dependendo da oferta, da arquitetura e do produto, pode ser a empresa final.

Se for o cliente final, você (como BSP) precisará interagir de forma programática com ele para obter os candidato do ICE incluídos na chamada à Graph API e aceitar a ligação recebida.

**O que acontecerá se a mídia parar de fluir de um lado devido a problemas de conexão?**

Um exemplo simples seria se o [ponto de extremidade de encerramento de ligação](/documentation/business-messaging/whatsapp/calling/reference#terminate-call) falhar e o lado da empresa parar de enviar mídia.

Isso resultará na falta de pacotes RTCP, o que ajuda a detectar um agente WebRTC inativo. A ligação será desconectada e o webhook [terminate](/documentation/business-messaging/whatsapp/calling/reference#call-terminate-webhook) será enviado.

**O codec é sempre opus/48000?**

Sim. A taxa de bits do relógio de RTP é definida como 48.000 em SDP, conforme o [RFC 7587](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc7587%23autoid-17&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410). Os apps para celular do WhatsApp oferecem suporte apenas para o formato Opus.

**Além disso, há suporte para outros codecs?**

No momento, só oferecemos suporte para o codec Opus. Os apps para celular do WhatsApp oferecem suporte apenas para o formato Opus.

**Há suporte para DTMF?**

Sim. Para mais informações, consulte a seção [DTMF](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#dual-tone-multi-frequency--dtmf--support). A maioria das implementações de SIP deve oferecer suporte para o processamento de DTMF recebido por meio do fluxo de dados do RTP ([reference](https://l.facebook.com/l.php?u=https%3A%2F%2Fvoipnuggets.com%2F2023%2F06%2F12%2Fdifferent-types-of-dtmf-in-sip-and-why-dtmf-via-rfc2833-is-more-reliable%2F&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410)).

**Quantos streams o SDP aceita?**

É possível ter apenas um stream no SDP de oferta/resposta.

**Quantas faixas são compatíveis em cada stream SDP?**

É possível ter apenas uma faixa de áudio no stream SDP.

**Para uma ligação entre consumidor e empresa, os apps de consumidor do WhatsApp funcionam com uma oferta de SDP gerada pelo navegador de um agente comercial?**

Nesse caso, o agente WebRTC no navegador deve gerar uma resposta SDP, não uma oferta.

Essa resposta SDP deve ser fornecida de volta para nós usando o [ponto de extremidade de aceitação de ligação](/documentation/business-messaging/whatsapp/calling/reference#accept-call). A Meta só pode trabalhar com a oferta de SDP que foi gerada e fornecida a você no webhook.

**Qual algoritmo de certificado é recomendado para DTLS?**

Recomendamos certificados ECDSA, pois eles levam a uma geração de certificado mais rápida e a handshakes DTLS menores devido à [ausência de fragmentação](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc6347%23autoid-26&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410).

**Quem iniciaria as ligações após aceitar a ligação iniciada pelo usuário: o BSP ou a Meta?**

O BSP deve iniciar as verificações de conectividade do ICE assim que decide aceitar a ligação.

Isso pode ser feito antes mesmo de chamar nossa API de aceitação, mas o processo do ICE só converge depois que processarmos sua resposta SDP, devido à necessidade de impressão digital do certificado DTLS.

**Quais são os números de porta usados pelos candidatos do ICE no SDP da Meta para que possamos incluir essas portas na lista de permissão dos nossos firewalls?**

Os números de porta podem ser `40012`, `3482`, `3484`, `3478`, `3480`. Essas listas estão sujeitas a alterações.

**Como podemos gerar o SDP de aceitação do WebRTC?**

Consulte a documentação da biblioteca/ferramenta de webrtc que você planeja usar.

Processar uma oferta de SDP para gerar uma resposta SDP é a funcionalidade principal de qualquer pilha de tecnologia VoIP.

**Como reduzir a latência de mídia das ligações?**

Os algoritmos de direcionamento da Meta escolherão a retransmissão da meta que recebe mídia do BSP próximo à localização do consumidor do WhatsApp. Essa retransmissão de mídia é o candidato do ICE que a Meta compartilhará no SDP. Os servidores de mídia do BSP devem estar na mesma região que os consumidores para fins de direcionamento. Isso minimiza a latência em ligações na mesma região, além de diminuir as rotas de pacotes de mídia na internet pública para ligações internacionais.

**Existe um processo de reconexão em caso de perda de conexão/possível perda de mídia?**

Os apps de consumidor do WhatsApp tentarão reconectar e recuperar automaticamente essa parte da ligação assim que a conectividade de rede for restaurada.

Do lado da empresa, esperamos condições de rede relativamente mais estáveis e, no momento, não temos suporte para um novo handshake ou renegociação de SDPs. De qualquer modo, a ligação pode ser encerrada após um determinado período de inatividade. Nesse caso, você receberá um webhook de encerramento.

**Quanta largura de banda seria necessária para a central de atendimento oferecer suporte a um determinado número de ligações simultâneas?**

Por ligação, é preciso ter aproximadamente 40 kbps para codec + 20 kbps de sobrecarga = 64 kbps. No entanto, a largura de banda do codec pode variar entre 20 e 50 kbps.

O codec Opus é capaz de alterar dinamicamente a largura de banda consumida com base nas condições da rede. Em geral, pode oferecer melhor qualidade de áudio com menor consumo de largura de banda em comparação com o codec G711.

O codec G711, por exemplo, precisa de 64 kbps para codec + 20 kbps de sobrecarga = 84 kbps por ligação.

É possível multiplicar os números acima pelo número esperado de ligações simultâneas para calcular a largura de banda cumulativa necessária. Por exemplo, uma largura de banda de 1 Mbps pode gerenciar aproximadamente 15 ligações simultâneas no Opus (1000/64) em comparação com 12 ligações simultâneas no G711 (1000/84).

Para calcular o uso total de dados, multiplique a largura de banda pela duração da ligação em segundos. No caso do opus, é um pouco mais complicado porque ele tem largura de banda variável dependendo de muitos fatores, incluindo largura de banda disponível estimada usando a estimativa de largura de banda, se o grupo local está falando ou em silêncio etc. Aproximadamente, uma ligação de 1 minuto no Opus consome 3,75 MB de dados, enquanto a mesma ligação no G711 consome 4,9 MB de dados

**É possível fazer a transferência de uma ligação de um agente para outro durante uma sessão de ligação ativa? Ou seja, um cliente está falando com o Agente A e precisa ser transferido para o Agente B?**

A Meta não oferece suporte nativo para esse caso de uso.

A Meta não tem conhecimento dos diferentes agentes do parceiro/empresa; por isso, essa é uma operação que pode ser realizada somente pelo parceiro. Por exemplo, o fluxo de mídia pode ser do servidor de mídia da Meta para o servidor de mídia do parceiro para o Agente A. Quando a transferência acontece, o fluxo passa a ser do servidor de mídia da Meta para o servidor de mídia do parceiro para o Agente B. Em ambos os casos, a etapa do servidor de mídia da Meta para o servidor de mídia do parceiro permanece constante.

## Perguntas frequentes sobre o cliente do WhatsApp de consumidor

**Quando o ícone de ligação na barra de título da conversa fica visível nos apps do WhatsApp de consumidor?**

Ele fica visível quando **todas as seguintes condições são atendidas:**

-   O número de telefone comercial tem o status de ligação definido como `ENABLED` na [API de configurações de ligação](/documentation/business-messaging/whatsapp/calling/call-settings).-   O número de telefone comercial `call_icon_visibility` não é `HIDE_IN_CHAT` nem `DISABLE_ALL`-   O recurso de visibilidade do ícone de ligação é compatível com as versões 2.24.10.8 e posteriores do app WhatsApp para celular no Android e iOS.-   WhatsApp versão 2.23.14 ou posterior instalado no dispositivo do consumidor. Esperamos que todos os consumidores usem essa versão ou uma superior.

[Veja a API de configurações de ligação para saber mais](/documentation/business-messaging/whatsapp/calling/call-settings)

**Por que o ícone de ligação no app do WhatsApp de consumidor não reflete as configurações atuais de ligação?**

Depois da atualização da configuração de ligação, pode levar até 7 dias para ela ser exibida aos usuários do WhatsApp, embora, na maioria dos casos, leve menos tempo. Para forçar uma atualização imediata no WhatsApp, abra a janela de conversa com a empresa e a página de informações da conversa. Independentemente do comportamento do cliente do WhatsApp, a semântica das configurações ainda é respeitada no lado do servidor.

Para solucionar o problema do ícone de ligação não aparecer, siga as seguintes etapas:

-   Abra a janela da conversa com a empresa e clique no nome/número dela na barra de título. Isso direcionará você para a tela de informações da empresa e forçará o app a atualizar o estado da ligação para a empresa.-   Saia e depois volte para a janela de conversa da empresa.-   Se o estado esperado ainda não for exibido, encerre e reinicie o app WhatsApp.-   [Obtenha as configurações de ligação](/documentation/business-messaging/whatsapp/calling/call-settings) para confirmar as configurações esperadas.

**Quanto tempo leva para os clientes do WhatsApp terem acesso às alterações na configuração de ligação?**

Pode levar até 7 dias, embora a maioria dos usuários do WhatsApp deva ter acesso às mudanças muito antes.

Cada empresa no WhatsApp pode conversar com um número ilimitado de usuários entre os mais de 3 bilhões presentes no WhatsApp Business. As atualizações às configurações de ligação geram notificações de alteração a todos os usuários que tenham uma conversa com a empresa visível na Caixa de Entrada do WhatsApp. No entanto, a entrega de notificações é feita de forma otimizada; por isso, nem todos os usuários podem recebê-las.

Todos os clientes do WhatsApp atualizam os dados da empresa (incluindo a configuração de ligação) a cada 7 dias, independentemente de receberem notificações de alteração.

Em qualquer um dos casos (notificação ou atualização em 7 dias), assim que o estado local no cliente do WhatsApp for atualizado, essa mudança será apresentada na interface do usuário apenas no próximo acesso à tela de conversa ou de informações da conversa.

**Preciso criar uma lista de permissão com números de telefone dos consumidores para fazer ligações?**

Não.

**Podemos limitar o acesso de ligações a usuários individuais ou específicos do WhatsApp em vez de todos os usuários do WhatsApp?** Exemplo: um lead qualificado ou um cliente no nível premium

Não, não existe uma forma de controlar a visibilidade ou o acesso de ligações em uma base individual de usuários do WhatsApp. No entanto, você pode usar a [API de Configurações de Ligação](/documentation/business-messaging/whatsapp/calling/call-settings) para definir `call_icon_visibility` como `DISABLE_ALL`, o que ocultará todos os ícones de ligação de todos os usuários do WhatsApp. Para usuários qualificados do WhatsApp, você pode enviar uma mensagem com o botão de CTA de ligação. Assim, somente eles poderão ligar para você ao tocar no botão na mensagem

Para fornecer esse tipo de recurso, a Meta precisaria armazenar as configurações por usuário do WhatsApp, o que apresenta um risco de privacidade maior. Isso também gerará mais despesas operacionais para você manter grandes listas de usuários do WhatsApp incluídos de forma contínua.

**Quando o ícone de ligação é ocultado usando a API de Configurações de Ligação, os consumidores ainda conseguem ligar para a empresa?**

Sim.

O usuário ainda poderá ligar para a empresa usando outros pontos de entrada que não sejam afetados pela [API de Configurações de Ligação](/documentation/business-messaging/whatsapp/calling/call-settings), como:

-   Salvar o número comercial como um contato e usar uma nova ligação-   Registro de ligações da aba Ligações > Recentes-   CTA de ligação em mensagens enviadas pela empresa-   Balão de ligação na janela de conversa que aparece após qualquer ligação entre o usuário e a empresa

Por isso, a recomendação é tratar `DISABLE_ALL` apenas como um filtro amplo de nível 1 e garantir que os webhooks façam qualquer filtragem adicional com base na sua própria lógica de negócios.

**Como os consumidores do WhatsApp digitarão os dígitos para DTMF?**

Os apps de consumidor do WhatsApp foram estendidos para oferecer suporte a um novo teclado para ligações comerciais.

[Saiba mais sobre o suporte a DTMF na API de Ligações](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#dual-tone-multi-frequency--dtmf--support)

**Qual é a versão mínima dos apps para celular do WhatsApp que são compatíveis com o botão de ligação de voz?**

-   A versão mínima do app para iOS é 24.1-   A versão mínima do app para Android é 2.24.1

**Qual é a experiência do consumidor do WhatsApp em diferentes pontos do fluxo de configuração de ligação?**

Quando um consumidor do WhatsApp liga para uma empresa, o tom de retorno local é ouvido imediatamente se o dispositivo do consumidor tiver conexão com a internet.

A interface do usuário de ligação mostra "Ligando para BUSINESS\_NAME". Quando a API de Nuvem recebe e pré-aceita a solicitação de ligação do consumidor, a interface do usuário de ligação muda para "Chamando BUSINESS\_NAME". Depois de aceitar a ligação da Graph API, a interface do usuário é alterada para uma janela de ligação ativa que mostra o temporizador ao vivo da duração.

**Os usuários finais podem fazer ligações usando os apps WhatsApp Web ou WhatsApp Desktop?**

Não. O WhatsApp Web não oferece suporte a ligações entre consumidores ou empresas. No momento, os apps para desktop oferecem suporte apenas a ligações entre consumidores.

## Perguntas frequentes sobre ligações iniciadas pela empresa

**Quais versões do WhatsApp e plataformas de cliente oferecem suporte ao recurso de ligação iniciada pela empresa?**

As versões 2.24.14.x e posteriores do cliente do WhatsApp oferecem suporte aos pedidos de permissão de ligação e ao recurso de ligação iniciada pela empresa.

As plataformas do WhatsApp para Android e iOS oferecem suporte ao recurso.

**Como evitar 138011 em conversas iniciadas pela empresa e pelo usuário durante o desenvolvimento/integração/teste?**

Conversa iniciada pelo usuário:

-   Envie uma mensagem para o número da API de Nuvem usando a conta de consumidor do WhatsApp-   Envie qualquer mensagem, exceto a mensagem de permissão de ligação, para o usuário-   Envie um pedido de permissão de ligação para o usuário-   Aceite o pedido de permissão de ligação no dispositivo do usuário

Conversa iniciada pela empresa:

-   Envie um modelo de mensagem da empresa para o usuário-   Envie o pedido de permissão de ligação para o usuário-   Aceite o pedido de permissão de ligação no dispositivo do usuário

**Há alguma maneira de redefinir os limites do pedido de permissão para ligação?**

Uma ligação conectada redefinirá os limites de permissão para ligação.

**O que acontece se o usuário do WhatsApp tiver configurado [Silenciar números desconhecidos](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1238612517047244%2F%3F**cms_platform%3Dandroid&h=AT0oQebnLPgiwDCZK80u5D4iJNb2R12de_NRG5Zwy9-jUyqCtYb27cnJ7q9LIfPm1NpryUG_Mb8DpLD3-LPtjxaNA-64jiwG9EspAxfGgynw0fFYdP9JCwwGNOTTb4psR0E1jL6nxZ5A2P5Fu0-fLYz-410)?**

As ligações iniciadas pela empresa ignoram as configurações de "Silenciar números desconhecidos", já que a ligação só pode acontecer com a permissão explícita do usuário.

**Por que minha mensagem de solicitação de permissão para ligação é renderizada de maneira diferente?**

O WhatsApp renderiza mensagens em versões com e sem suporte do app do cliente de forma diferente.

Depois que o usuário do WhatsApp atualizar o app, a mensagem será renderizada corretamente.

**Recebi o erro 138001 depois de enviar um pedido de permissão de ligação. O que devo fazer?**

[Confira os códigos de erro na nossa página de solução de problemas](/documentation/business-messaging/whatsapp/calling/troubleshooting)

**A permissão expira após a realização de cinco ligações conectadas?** Estou vendo o erro `138012`.

O limite de 5 ligações conectadas em 24 horas é somente um limite da execução com base em um intervalo de tempo. A permissão permanece aberta por 7 dias, mesmo que o limite seja atingido. A 6ª ligação pode acontecer 24 horas após a 1ª ligação.

Podemos encarar isso como um limite para ligações iniciadas pela empresa. É permitido o número máximo de 35 ligações em 7 dias.

## Perguntas frequentes sobre o Protocolo de Iniciação de Sessão (SIP)

Consulte [Erros de SIP](/documentation/business-messaging/whatsapp/calling/troubleshooting#sip-errors) para ver erros específicos de SIP e possíveis soluções.

**Por que não recebemos um convite de SIP quando os usuários do WhatsApp ligam?**

Estes são alguns dos motivos possíveis

-   Erro de validação do certificado TLS: consulte [Como testar se você tem um certificado TLS válido](/documentation/business-messaging/whatsapp/calling/sip#how-to-test-if-you-have-a-valid-tls-certificate)-   O SIP não está configurado. [Verifique a configuração de ligações](/documentation/business-messaging/whatsapp/calling/sip#get-phone-number-calling-settings--sip-) para garantir que o SIP está habilitado-   O app que configurou o servidor SIP não tem a permissão `whatsapp_business_messaging` no número de telefone comercial. Para verificar se você tem as permissões certas, tente [enviar uma mensagem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) usando o mesmo número de telefone comercial

**Por que o nosso SIP TERMINATE para a Meta não está sendo desligado do lado do usuário do WhatsApp?**

O motivo mais comum é a falha no handshake do TLS quando o servidor do SIP está tentando estabelecer uma sessão TLS com o servidor do SIP da Meta. Faça uma captura do pacote de rede do seu tráfego de SIP ou verifique os registros do servidor do SIP para confirmar o handshake bem-sucedido do TLS

**Por que meu servidor do SIP responde com 401 Não autorizado em ligações iniciadas pelo usuário?**

A Meta oferece suporte para autenticação de digester de SIP para [ligações iniciadas pelo usuário](/documentation/business-messaging/whatsapp/calling/sip#user-initiated-calls). Quando o servidor SIP responde com 401 Não autorizado (consulte o [fluxo de exemplo](/documentation/business-messaging/whatsapp/calling/sip#user-initiated-calls-with-digest-auth--with-sdes-media-)), o servidor SIP da Meta reenvia o convite com o cabeçalho de autorização apropriado. Configure o servidor do SIP usando como nome de usuário o número de telefone comercial e, como senha, a senha gerada pela Meta para o número de telefone.

Como alternativa, é possível desabilitar a autenticação por resumo no servidor do SIP, mas isso NÃO é recomendado do ponto de vista das boas práticas de segurança.

**Por que meu servidor do SIP está respondendo com 488 Não aceitável aqui?**

Consulte a documentação do servidor do SIP ou o fornecedor. O motivo provável é que o servidor do SIP não oferece suporte ao protocolo do ICE (Interactive Connectivity Establishment) do WebRTC. Para corrigir o problema, você pode [configurar seu número de telefone comercial para usar SDES](/documentation/business-messaging/whatsapp/calling/sip#configure-sdes-for-srtp-key-exchange-protocol).

**Precisamos fazer o registro do SIP do número de telefone comercial no servidor de SIP da Meta?**

Não. Você não deve enviar solicitações de registro para o nosso servidor de SIP. Isso geraria um consumo desnecessário de recursos em ambos os lados. As solicitações de REGISTRO apresentarão falha o erro 403 Proibido. Assim, nosso servidor do SIP é proprietário apenas do domínio meta.vc. Os únicos usuários do SIP nesse domínio são os usuários comuns do WhatsApp. Os números do WhatsApp Business pertencem ao seu domínio do SIP, que você configura usando nossa [API de configurações](/documentation/business-messaging/whatsapp/calling/sip#configure-update-sip-settings-on-business-phone-number).

**Vocês oferecem suporte para novos convites do SIP?**

Não. No momento, não oferecemos suporte a novos convites. Você receberá o código 500 Erro de servidor interno do servidor do SIP da Meta.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)