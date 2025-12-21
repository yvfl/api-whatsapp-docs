<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/integration-patterns -->
<!-- Scraped: 2025-12-20T17:41:24.950Z -->

# Padrões de integração

Updated: 22 de out de 2025

## Possíveis abordagens de alto nível

Abordagem

Configuração de número

Responsabilidades do provedor de soluções de negócios

Responsabilidades do Provedor de Tecnologia da Ligação

Responsabilidades da empresa final

**BSP da mensagem capaz de realizar chamadas**

Número de telefone existente estendido para ligação ou novo número

-   O BSP de mensagens reutiliza o próprio app e inscreve-o em webhooks de ligações. A criação de um novo app específico para ligações também funciona, mas [não é recomendada](/documentation/business-messaging/whatsapp/calling/integration-patterns#single-app-vs--multiple-apps)-   Processar webhooks de ligações e coordene com infraestruturas de mídia em tempo real-   As chamadas relacionadas à Graph API são semelhantes às chamadas à Graph API para mensagens

Não se aplica porque envolve apenas um parceiro.

-   Habilitar e usar ligações-   Continue pagando a fatura do BSP, que agora inclui ligações relacionadas a itens de linha de uso

[**Conversas multisoluções**](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations)

Número único operado de forma independente pelo BSP de mensagens e pelo BSP/provedor de tecnologia de ligações

-   O BSP de mensagens não faz alterações

-   Hosts de BSP/provedor de tecnologia de ligações do Cadastro incorporado no próprio site apontando para o próprio app-   Recebe a empresa final para passar pelo Cadastro incorporado

-   Integrar usando o Cadastro incorporado do parceiro de ligação-   Pague as faturas ao BSP de mensagens como antes-   Para atividades incorridas por parceiros de ligação, pague a fatura ao parceiro se ele for um BSP ou para a Meta se ele não for um BSP

ISV de ligação exclusiva

Novo número para ligações

Não aplicável porque não há BSP de mensagens

-   Chamada de host do ISV para o Cadastro Incorporado no site que aponta para o próprio app-   Recebe a empresa final para passar pelo Cadastro incorporado-   Se o ISV for um parceiro/provedor de tecnologia, a Meta cobrará diretamente a empresa final. O ISV e a empresa final devem resolver a própria cobrança-   Se o ISV for um BSP, ele poderá estender a própria linha de crédito para a empresa final

-   Integração com Cadastro incorporado no TP-   Se o ISV for um parceiro ou provedor de tecnologia, pague diretamente à Meta
    -   Nesse caso, a empresa final precisa ter uma relação de pagamento direta com a Meta. A configuração dessa relação pode levar várias semanas-   Se o ISV for um BSP, pague a fatura do BSP

[Solução multiplataforma](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) usando o ISV de ligações registrado como Provedor de Tecnologia (TP)

Novo número de ligação exclusivo atendido (**apenas**) pelo TP de ligação

-   O BSP e o TP trabalham juntos para criar/aprovar uma solução multiparceiro. O BSP e o provedor de tecnologia têm os próprios apps-   Relação comercial entre BSP de mensagens e ISV de ligações-   Estender linha de crédito para a empresa final-   Pode receber mensagens ou ligações, mas não pode enviar mensagens ou fazer ligações, porque é possível selecionar apenas um dos dois parceiros para enviar mensagens/fazer ligações em uma solução multiplataforma

-   O BSP e o TP trabalham juntos para criar/aprovar uma solução multiparceiro. O BSP e o provedor de tecnologia têm os próprios apps-   Organizar a relação comercial entre BSP de mensagens e ISV de ligações-   Integrar clientes finais usando o Cadastro incorporado e indicando a solução criada-   Enviar/receber mensagens ou ligações

-   Integração com Cadastro incorporado no TP-   A empresa é informada sobre o TP no Cadastro incorporado-   Pague a fatura do BSP

## Conversas multisoluções (MSC)

A API de MM Lite oferece suporte a Conversas com Múltiplas Soluções, permitindo que diferentes parceiros e soluções compartilhem o mesmo número de telefone, com mensagens e ligações reunidas em uma única conversa.

[Saiba mais sobre as Conversas multisoluções](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations)

## Integração por meio de um design detalhado do provedor de ligações

Veja abaixo uma arquitetura lógica ilustrativa da integração das ligações comerciais do WhatsApp por meio de um provedor de ligações de terceiros (3p).

Nesse cenário, você usaria o fornecedor terceirizado por trás das câmeras, e esse fornecedor não ficaria visível para a Meta. Esse padrão é semelhante ao de qualquer outro serviço SaaS que você possa estar usando.

O diagrama também mostra como essa arquitetura pode ser opcionalmente estendida para se integrar à infraestrutura de SIP do seu lado.

**Nossos termos não permitem o uso de PSTN em _qualquer_ parte da ligação do WhatsApp no fluxo geral da ligação.**

Mesmo que você transforme a ligação do WhatsApp em uma ligação do mundo do SIP, ela deve permanecer exclusivamente no VoIP e nunca chegar à PSTN. O tronco SIP por si só não é proibido porque, tecnicamente, é possível usá-lo sem PSTN.

  
![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565132736_1339318364593481_1182320683426712488_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=1nrIZPVzxZ4Q7kNvwGQStKq&_nc_oc=AdnjxUxAK49JUWrlh4QmIhD6ffQiSkMwYWqDfbY-c3voJOqeVnKkPoERQURlHZka9r0&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=dRZy3m7ZO1dK3dpn5hvKQQ&oh=00_Afk_D30-g9flR2XEo6y-1a_zOCfGwXoBNl5javMnD-wc0g&oe=696116D8) (_Clique com o botão direito do mouse na imagem e escolha "Abrir em uma nova aba" para ampliar a imagem_)

## Um app vs. vários apps

Esta seção abrange algumas diretrizes e considerações sobre reutilizar o seu app de mensagens atual para fazer ligações ou criar um novo app especificamente para usar os recursos da API de Ligações

Para integrar com a API de Ligação do WhatsApp, é preciso chamar [pontos de extremidade da Graph API](/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api) e processar Webhooks da Meta. Para isso, [é preciso ter um app](/docs/development/create-an-app), e, na maioria dos casos, você já tem um app que serve para enviar mensagens.

Resumindo: é possível reutilizar um app existente para [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) e para um caso de uso de mensagens.

Nessa configuração, o URI de retorno de webhook é o mesmo para webhooks relacionados a mensagens e ligações, mas a carga do webhook pode ser usada para distinguir as duas categorias de funções (mensagem e ligação). Portanto, você ainda pode encaminhar webhooks específicos da API de Ligações para um componente relacionado a ligações da lógica comercial principal do seu webhook.

Confira abaixo as vantagens de reutilizar o mesmo app

-   Redução de despesas operacionais (por exemplo, análise do app, manutenção contínua)-   Presença simplificada dos parceiros na Meta-   Igualdade entre o app usado para o cadastro incorporado e aquele usado para invocar Graph APIs e receber webhooks-   Isso não afetaria a funcionalidade existente de usar o app para fazer ligações. Você só precisa ter certeza de que o servidor de webhook consiga lidar corretamente com webhooks relacionados a "ligações".

Ainda é possível ter apps separados. Para saber mais, consulte [Perguntas frequentes sobre como começar](/documentation/business-messaging/whatsapp/calling/faq#getting-started-faq).

## Diretrizes para integração do caminho de mídia

A pilha de VoIP para ligações do WhatsApp Business foi desenvolvida para oferecer suporte ao WebRTC. No entanto, para garantir uma integração eficaz com o protocolo do WhatsApp, estamos restringindo as funcionalidades com suporte. Como resultado, publicamos os seguintes requisitos e algumas recomendações.

### Requisitos obrigatórios

Se um requisito obrigatório não for atendido, a ligação falhará. Essa falha pode ocorrer durante a fase de sinalização da ligação, resultando em uma ligação rejeitada, ou durante a fase de decodificação do pacote de mídia.

-   Use apenas o codec de áudio Opus.-   Defina a taxa de relógio de mídia para 48 kHz.-   Defina a frequência de relógio de DTMF para 8 kHz.-   Use um ptime de 20 ms.

### Recomendações

Os aspectos a seguir não são obrigatórios, mas são recomendados para garantir a alta qualidade e a confiabilidade da ligação.

-   **Processo do ICE**
    -   Nossa pilha de VoIP é ICE-LITE; por isso, recomendamos que a pilha de VoIP dos BSPs seja ICE-FULL. ([RFC 5245, seção 2.7](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc5245%23section-2.7&h=AT3-iGSHocR-Ip60_nTZsqnoUH2UWYpC1TASfhECkmxsZYCKeqq9w4Sbu6fUKKRIDVRq-Xf3rVOdIiD1_bJFO1oNIzI73OuF1lKBJ7AXMRZs4gDWrTatb14QiSe9XL5ejL4FL7vLiOL50PEh_A6lcYUSYA4))-   A pilha VoIP dos BSPs deve iniciar o processo do ICE enviando verificações de conectividade STUN.-   A pilha de VoIP dos BSPs deve assumir a função de "CONTROLADOR" do ICE, já que a Meta assumirá apenas a função de "CONTROLADO".-   Use a indicação regular em vez da indicação agressiva. ([RFC 5245, Seção 8.1.1.2](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc5245%23section-8.1.1.2&h=AT3-iGSHocR-Ip60_nTZsqnoUH2UWYpC1TASfhECkmxsZYCKeqq9w4Sbu6fUKKRIDVRq-Xf3rVOdIiD1_bJFO1oNIzI73OuF1lKBJ7AXMRZs4gDWrTatb14QiSe9XL5ejL4FL7vLiOL50PEh_A6lcYUSYA4))-   Aguarde o término do processo ICE antes de indicar o candidato e iniciar o DTLS.-   Não troque o candidato no meio da ligação.-   **DTLS**
    -   Use chaves ECDH para os certificados DTLS a fim de evitar a fragmentação de pacotes durante a transmissão.-   O BSP deve atuar como um cliente DTLS. ([RFC 6347, seção 4.2](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc6347%23section-4.2&h=AT3-iGSHocR-Ip60_nTZsqnoUH2UWYpC1TASfhECkmxsZYCKeqq9w4Sbu6fUKKRIDVRq-Xf3rVOdIiD1_bJFO1oNIzI73OuF1lKBJ7AXMRZs4gDWrTatb14QiSe9XL5ejL4FL7vLiOL50PEh_A6lcYUSYA4))-   **Como resolver o corte de áudio**
    -   Atrase o áudio do segmento do SIP até que a conexão de mídia com a Meta seja estabelecida.-   Integre com a [API de pré-aceitação](/documentation/business-messaging/whatsapp/calling/reference#pre-accept-call) para ajudar a mitigar o corte de áudio em ligações iniciadas pelo usuário.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)