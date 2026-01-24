<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sandbox -->
<!-- Scraped: 2026-01-24T00:29:14.746Z -->

# Como usar uma conta de sandbox para fazer ligações

Updated: 31 de out de 2025

As contas de sandbox estão disponíveis apenas para parceiros de tecnologia.

## Visão geral

As contas de sandbox do WhatsApp fornecem aos parceiros de soluções uma conta simulada do WhatsApp Business para testar a integração. As contas de sandbox podem ser usadas para diversos testes, inclusive para testar a integração de ligações. Use uma conta de sandbox de ligações para:

-   Iniciar e receber ligações usando a API de Ligações-   Validar eventos de webhook de ligações-   Simular fluxos de integração sem criar ativos de negócios reais

## Diferenças nos limites de ligações ao usar uma conta de sandbox

Limite

Descrição

Limite de números de produção

Limite de números de teste público

Limite de ligações conectadas

O número de ligações que uma empresa pode fazer dentro das permissões aprovadas.

10 ligações conectadas por 24 horas

100 ligações por dia

Limites de mensagem de pedido de permissão para ligação

Limita o número de mensagens de pedido de permissão para ligação que podem ser enviadas para o mesmo consumidor

1 solicitação por dia  
2 solicitações por semana

25 solicitações por dia  
100 solicitações por semana

Limites de ligações não respondidas

Quando uma ligação iniciada pela empresa fica sem resposta (ou seja, é rejeitada ou perdida pelo usuário).

Cutucar em 2 ligações consecutivas não respondidas  
Revogar permissão em 4 ligações consecutivas não respondidas

Cutucar em 5 ligações consecutivas não respondidas  
Revogar após 10 ligações consecutivas não respondidas

Duração da ligação temporária

O período durante o qual a empresa pode ligar para o usuário após a permissão ser aprovada.

7 dias

Nenhuma alteração

## Como configurar a conta de sandbox de ligações

### Etapa 1. Acesse o sandbox do WhatsApp para desenvolvedores

-   Navegue até o [Painel de Apps](https://developers.facebook.com/apps).-   Clique no app que você está usando com o WhatsApp.-   Selecione **Casos de uso** (ícone de lápis) na barra lateral.-   Em **Conectar-se com clientes pelo WhatsApp**, clique em **Personalizar**.-   No menu à esquerda, selecione **Ferramentas para parceiros**.-   Na seção **Obter conta de sandbox**, em **Recursos**, clique no menu suspenso. Selecione **API de Nuvem e ligações**.-   Clique em **Obter conta de sandbox**.-   Em **Habilitar funcionalidade de ligação**, clique no menu suspenso e depois em **Gerenciar lista de números de telefone**.-   Adicione seu número de telefone como destinatário.

### Etapa 2. Obtenha as credenciais e os identificadores da sua conta de sandbox

-   Na mesma página, em **Personalize um novo fluxo de integração**, clique em **Começar** para abrir a experiência de Cadastro Incorporado.
    -   **Observação: mantenha esta aba aberta e disponível, pois você a usará várias vezes ao longo do processo.**-   Na seção **Início do Cadastro Incorporado**, verifique se o menu suspenso **Recursos** está vazio e clique em **Entrar com o Facebook**.-   Uma notificação pop-up com a experiência de Cadastro Incorporado será exibida. Em **Portfólio empresarial**, selecione **Sandbox Business**.-   Preencha o restante das informações necessárias e clique em **Avançar**.-   Na próxima tela, no menu suspenso **Crie ou selecione um perfil do WhatsApp Business**, selecione **Número de teste**.-   Quando o fluxo de login for concluído, na seção **Trocar token**, clique em **Obter token**.
    -   **Observação: guarde esse token para uso futuro com a API da conta de sandbox.**-   Na seção **Obtenha a conta do WhatsApp Business compartilhada**, clique em **Obter detalhes da conta do WhatsApp Business**.-   Em **Campo da conta do WhatsApp Business**, copie o **valor** da linha `id`.
    -   **Observação: guarde essa identificação, pois ela é a identificação da conta do WhatsApp Business do sandbox.**-   Na seção **Obter números de telefone**, clique em **Obter números de telefone**.-   Em **Identificação**, copie o valor.
    -   **Observação: guarde essa identificação, pois ela é a identificação do número de telefone usado como número de teste da sua conta de sandbox.**

### Etapa 3. Registre seu número de telefone de teste e inscreva-o na sua conta do WhatsApp Business

_Pré-requisitos_

_Verifique se você tem as seguintes informações das etapas anteriores:_

-   _A string do token da sua conta de sandbox_-   _A identificação da conta do WhatsApp Business da sua conta de sandbox_-   _A identificação do seu número de telefone de teste_

Para concluir as próximas etapas, você usará a [ferramenta Explorador da Graph API](https://developers.facebook.com/tools/explorer/).

-   **Observação: mantenha esta janela aberta, pois você usará novamente a configuração criada nas etapas posteriores deste guia.**

-   Navegue até a ferramenta [Explorador da Graph API](https://developers.facebook.com/tools/explorer/).-   Verifique se você está usando a versão mais recente da API.-   Clique em **Gerar token de acesso** e siga as instruções.-   Em **Permissões**, adicione as permissões `whatsapp_business_management` e `whatsapp_business_messaging`.-   No configurador de ponto de extremidade, insira `/<YOUR_SANDBOX_WABA_ID>/subscribed_apps` e clique em **Enviar**.

```
{  "success": true}
```

-   Depois, registre o número de telefone de teste inserindo `/<YOUR_SANDBOX_TEST_PHONE_NUMBER_ID>/register` no configurador de ponto de extremidade.-   Na barra lateral esquerda, clique em JSON e insira o seguinte corpo JSON. Depois, clique em Enviar:

```
{  "messaging_product": "whatsapp",  "pin": "123456"}
```

-   Você receberá uma resposta padrão `success`:

```
{  "success": true}
```

### Etapa 4. Teste a funcionalidade de mensagens

-   Na [ferramenta Explorador da Graph API](https://developers.facebook.com/tools/explorer/), insira `/<YOUR_SANDBOX_TEST_PHONE_NUMBER_ID>/messages` no configurador de ponto de extremidade.-   Na barra lateral esquerda, clique em **JSON** e insira o seguinte corpo JSON. Depois, clique em **Enviar**:

```
{  "messaging_product": "whatsapp",  "to": "YOUR_NUMBER", // Replace this value with phone number of your device.  "type": "template",  "template": {    "name": "hello_world",    "language": { "code": "en_US" }  }}
```

-   Você receberá uma resposta com o valor `"message_status": "accepted"` e deverá receber uma mensagem de texto no seu dispositivo.

### Etapa 5. Configure webhooks e permissões

-   Navegue até o [Painel de Apps](https://developers.facebook.com/apps).-   Clique no app que você está usando com o WhatsApp.-   Selecione **Casos de uso** (ícone de lápis) na barra lateral.-   Em **Conectar-se com clientes pelo WhatsApp**, clique em **Personalizar**.-   Na barra lateral esquerda, clique em **Configuração**.-   Em **URL de retorno de chamada**, adicione o URL de retorno de chamada do servidor do webhook.
    -   Se você não tiver um servidor de webhook, siga as nossas [instruções para criar um servidor de webhook de teste](/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot).-   Em **Verificar token**, adicione uma string de verificação arbitrária.-   Clique em **Verificar e salvar**.-   Na próxima página, no menu suspenso **Selecionar produto**, clique em **Conta do WhatsApp Business**.-   Em **Campos de webhook**, na linha **Ligações**, clique no botão de alternância para se inscrever no campo de webhook `calls`.

### Conclua: habilitar recursos de ligação no número de telefone de teste

-   Na [ferramenta Explorador da Graph API](https://developers.facebook.com/tools/explorer/), insira `/<YOUR_SANDBOX_TEST_PHONE_NUMBER_ID>/settings` no configurador de ponto de extremidade.-   Na barra lateral esquerda, clique em **JSON** e insira o seguinte corpo JSON. Depois, clique em **Enviar**:

```
{  "calling": {    "status": "ENABLED",    "call_icon_visibility": "DEFAULT",    "callback_permission_status": "ENABLED"  }}
```

-   Você receberá uma resposta padrão `success`:

```
{  "success": true}
```

-   Por fim, em **Token de acesso**, copie o token de acesso para uso futuro.
    -   **Observação: guarde esse token de acesso, pois você o usará para fazer chamadas de API ao testar a integração da API de Ligações.**

## Como testar ligações iniciadas pela empresa (BIC)

Antes de testar ligações iniciadas pela empresa, você deve conceder permissões de ligação de usuário à sua conta de sandbox.

É possível fazer isso no dispositivo cliente que você está usando para testar da seguinte maneira:

-   No dispositivo cliente, abra o WhatsApp.-   Navegue até a conversa que você criou com o número de telefone comercial da sua conta de sandbox.-   Na parte superior da tela, toque no número de telefone comercial da sua conta de sandbox.-   Role a tela para baixo e toque em **Permissão para ligações da empresa**.-   Toque em **Permitir ligações**.

Agora você pode testar sua integração da API de Ligações ligando para o dispositivo cliente.

[Saiba mais sobre como fazer ligações iniciadas pela empresa.](/documentation/business-messaging/whatsapp/calling/business-initiated-calls)

## Como testar ligações iniciadas pelo usuário (UIC)

-   No dispositivo cliente, abra o WhatsApp.-   Navegue até a conversa que você criou com o número de telefone comercial da sua conta de sandbox.-   Toque no ícone de telefone no canto superior direito da tela para ligar para o número de telefone comercial da sua conta de sandbox.-   Confirme que a ligação foi estabelecida com sucesso.

[Saiba mais sobre como gerenciar ligações iniciadas pelo usuário.](/documentation/business-messaging/whatsapp/calling/user-initiated-calls)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)