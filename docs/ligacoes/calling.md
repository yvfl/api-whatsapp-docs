<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling -->
<!-- Scraped: 2026-01-24T00:27:32.928Z -->

# Ligações da API de Nuvem

Updated: 10 de dez de 2025

## Visão geral

Com a API de Ligações Comerciais do WhatsApp, você pode iniciar e receber ligações de usuários do WhatsApp usando o protocolo de voz via IP (VoIP).

### Arquitetura

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/564723412_1339317954593522_7943224529857744756_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=0oJBi0Xcr6YQ7kNvwHpQIo7&_nc_oc=AdkGYMyGAzfMTG5C2WoNzm_8TsfNprrt_40AeedRqwrz_fn-P0uOVvK-F1KmpQ_ZCmw&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=tce5ezUy3Mx6gLBkNH6rWg&oh=00_AfoGloFNhQipvnKS0leGQpCHZhTDtwhNrRP0xKPgp6yLKw&oe=698E5405) (_Clique com o botão direito do mouse na imagem e escolha "Abrir em uma nova aba" para ampliar a imagem_)

## Começar

### Etapa 1. Pré-requisitos

Antes de começar a usar a API de Ligações, verifique o seguinte:

-   [O número comercial está em uso com a API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) (e não com o app WhatsApp Business)-   Inscreva o app no campo de webhook `calls` (a menos que você planeje usar [SIP](/documentation/business-messaging/whatsapp/calling/sip))-   O mesmo app deve estar [inscrito na conta do WhatsApp Business](/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks) do seu número de telefone comercial.-   Esse app deve ter permissões de mensagens (`whatsapp_business_messaging`) para o número comercial-   A empresa precisa ter um limite de mensagens de pelo menos [duas mil conversas iniciadas pela empresa](/documentation/business-messaging/whatsapp/messaging-limits) em um período contínuo de 24 horas. Para saber mais, leia sobre [como ampliar os recursos da sua conta](https://www.facebook.com/business/help/595597942906808).-   [Habilitar recursos de ligação no número de telefone comercial](/documentation/business-messaging/whatsapp/calling/call-settings)

### Etapa 2. Configurar recursos de ligação opcionais

A API de Ligações Comerciais do WhatsApp oferece diversos recursos que afetam quando e como os recursos de ligação são exibidos para os usuários no seu perfil do WhatsApp

-   O controle de ligações recebidas permite impedir que usuários façam ligações usando o seu perfil empresarial-   Com o horário de ligação da empresa, você não perde ligações nem direciona os usuários a enviar mensagens quando a central de atendimento está fechada-   As solicitações de retorno de ligação oferecem aos usuários a opção de pedir um retorno quando você não atende ou a central de atendimento está fechada

[Saiba mais sobre as configurações de controle de ligação](/documentation/business-messaging/whatsapp/calling/call-settings#parameter-details)

### Etapa 3. Fazer e receber ligações

Você pode testar a integração de Ligações do WhatsApp usando números de teste público e uma conta do WhatsApp Business no sandbox.

[Saiba mais sobre como testar a integração da API de Ligações do WhatsApp](/documentation/business-messaging/whatsapp/calling#testing-and-sandbox-accounts)

A ligação da API de Nuvem oferece dois caminhos de iniciação:

-   **Ligações iniciadas pelo usuário:** ligações feitas de um usuário do WhatsApp para a empresa-   **Ligações iniciadas pela empresa:** ligações feitas da sua empresa para um usuário do WhatsApp

## Contas de teste e de sandbox

As contas de sandbox estão disponíveis apenas para Parceiros de Tecnologia.

Com as [contas de sandbox](/documentation/business-messaging/whatsapp/calling/sandbox) e os números de teste público, você pode testar a integração da API de Ligações o do WhatsApp com limitações de ligação flexíveis. Especificamente para contas de sandbox e números de teste públicos, o limite de ligações iniciadas pela empresa é menos rigoroso a fim de facilitar a integração e os testes.

#### Limites (por par de empresa + usuário do WhatsApp)

-   As contas de sandbox podem enviar **25 permissões de ligação por dia** e **100 por semana** (em comparação com 1 por dia e 2 por semana para contas de produção)-   Quando as ligações iniciadas pela empresa ficam sem resposta ou são recusadas
    -   **5 ligações não respondidas consecutivas** resultam em uma mensagem do sistema para reconsiderar uma permissão aprovada (em comparação com 2 ligações não respondidas consecutivas para contas de produção)-   **10 ligações consecutivas sem resposta** resultam na revogação automática de uma permissão aprovada (em vez de 4 ligações consecutivas sem resposta para contas de produção)

Você pode receber um número de teste público depois de concluir o [flow Começar.](/documentation/business-messaging/whatsapp/get-started)

Além disso, não é necessário ter um limite de mensagens de pelo menos [duas mil conversas iniciadas pela empresa](/documentation/business-messaging/whatsapp/messaging-limits) em um período contínuo de 24 horas para testar os recursos da API de Ligações ao usar números de teste públicos e contas de sandbox.

As ligações estão desabilitadas por padrão nos números de teste. Você deve [configurar os recursos de ligação nas definições de ligação do número de telefone](/documentation/business-messaging/whatsapp/calling/call-settings#configure-call-settings) antes de usar a API de Ligações em um número de teste.

[Saiba mais sobre contas de sandbox para fazer ligações](/documentation/business-messaging/whatsapp/embedded-signup/overview#sandbox-accounts)

## Disponibilidade

#### Ligações iniciadas pelo usuário

As ligações iniciadas pelo usuário estão disponíveis em [todas as localizações em que a API de Nuvem está disponível](/documentation/business-messaging/whatsapp/support#country-restrictions)

#### Ligações iniciadas pela empresa

As ligações iniciadas pela empresa estão disponíveis em [todas as localizações onde a API de Nuvem está disponível](/documentation/business-messaging/whatsapp/support#country-restrictions), **exceto os seguintes países:**

-   EUA-   Canadá-   Turquia-   Egito-   Vietnã-   Nigéria

**Observação:** o código do país no número de telefone comercial deve estar nesta lista com suporte. O número de telefone do consumidor pode ser de qualquer [país em que a API de Nuvem esteja disponível.](/documentation/business-messaging/whatsapp/support#country-restrictions)

## Próximas etapas

Use nossos guias abaixo para começar a integrar e usar recursos de ligação no seu app:

-   [Saiba como receber ligações iniciadas pelo usuário](/documentation/business-messaging/whatsapp/calling/user-initiated-calls)-   [Saiba como fazer ligações iniciadas pela empresa](/documentation/business-messaging/whatsapp/calling/business-initiated-calls)-   [Saiba como aumentar o reconhecimento do cliente sobre a disponibilidade de ligações na sua empresa](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links)

## Registro de alterações

Use esta tabela como um local central para acompanhar as atualizações de recursos relacionadas à API de Ligações Comerciais do WhatsApp

Data

Título

Descrição

19 de dezembro de 2025

Atualização no limite de ligações iniciadas pela empresa

O número de ligações iniciadas pela empresa por usuário foi aumentado de 10 para 100 por dia.

[Saiba mais sobre os limites de ligações iniciadas pela empresa](/documentation/business-messaging/whatsapp/calling/user-call-permissions#limits--per-business---whatsapp-user-pair-)

Introduzimos `restrict_to_user_countries` para as configurações de ícone de ligação

Agora, é possível controlar em quais países o ícone de ligação deve ficar visível. Saiba mais [neste link](/documentation/business-messaging/whatsapp/calling/call-settings#call-icons).

13 de outubro de 2025

-   Atualização no limite de ligações iniciadas pela empresa-   Adição da seção "Teste e sandbox" à documentação

O número de ligações iniciadas pela empresa por usuário foi aumentado de 5 para 10 por dia.

[Saiba mais sobre os limites de ligações iniciadas pela empresa](/documentation/business-messaging/whatsapp/calling/user-call-permissions#limits--per-business---whatsapp-user-pair-)

As [contas de teste e de sandbox](/documentation/business-messaging/whatsapp/calling#testing-and-sandbox-accounts) foram adicionadas à documentação

29 de setembro de 2025

Guia de integração do Asterisk

Novo guia para [integração do Asterisk](/documentation/business-messaging/whatsapp/calling/integration-examples#asterisk-using-sip)

24 de setembro de 2025

Propagação de contexto de botões de ligação e deep links

Especifique uma string opaca em botões de ligação ou deep links de ligação para ajudar a rastrear a origem das ligações iniciadas pelo usuário. [Saiba mais](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links)

8 de setembro de 2025

Atualização sobre ligações da API de Status de Integridade

[A API de Status de Integridade](/documentation/business-messaging/whatsapp/support/health-status) agora inclui um novo campo `can_receive_call_sip` para ajudar você a fazer o autodiagnóstico de problemas relacionados à configuração de [SIP](/documentation/business-messaging/whatsapp/calling/sip)

5 de setembro de 2025

Incluímos novas restrições para baixa taxa de atendimento de ligações

As restrições para baixa taxa de atendimento de ligações entram em vigor hoje. Para saber mais, consulte [Restrições de ligação para baixas taxas de ligações atendidas](/documentation/business-messaging/whatsapp/calling/call-settings#calling-restrictions-for-low-call-pickup-rates)

21 de julho de 2025

Webhooks de atualização de configurações da conta

Receba webhooks quando as configurações forem atualizadas. [Saiba mais](/documentation/business-messaging/whatsapp/calling/call-settings#settings-update-webhooks).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)