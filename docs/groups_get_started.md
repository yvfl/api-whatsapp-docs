<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/get-started -->
<!-- Scraped: 2025-12-20T17:42:27.892Z -->

# Introdução à API de Grupos

Updated: 14 de nov de 2025

**Qualificação para a API de Grupos**

No caso da qualificação para recursos de grupos, a empresa deve atender ao seguinte requisito:

-   Ter um limite de mensagens de pelo menos 100 mil conversas iniciadas pela empresa em um período contínuo de 24 horas-   Ser uma [conta comercial oficial (OBA, pelas iniciais em inglês)](/documentation/business-messaging/whatsapp/official-business-accounts)

[Saiba mais sobre classificações de qualidade e limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits)

## Visão geral

Os grupos são apenas para convidados. Assim, os participantes em potencial têm o controle final sobre a entrada no grupo.

Ao criar um grupo, um link de convite único é gerado para que você possa compartilhá-lo com possíveis participantes. Esse link inclui informações sobre o grupo para que os usuários possam tomar uma decisão mais embasada sobre se querem participar dele.

Quando um usuário entrar no grupo, um webhook será disparado, sinalizando que você agora se qualifica para enviar mensagens ao grupo.

Para uma visão geral completa dos recursos disponíveis, veja os [Recursos da API de Grupos](/documentation/business-messaging/whatsapp/groups/get-started#features) abaixo.

## Como começar a usar os grupos

### Pré-requisitos

Antes de começar a usar a API de Grupos, verifique se:

-   O número comercial está em uso com a API de Nuvem (e não com o app WhatsApp Business).-   O servidor de webhook está configurado para uso com a API de Nuvem.-   Seu app está inscrito nos seguintes campos de webhook de grupos:
    -   `group_lifecycle_update`-   `group_participants_update`-   `group_settings_update`-   `group_status_update`-   Seu app está inscrito na conta do WhatsApp Business do seu número de telefone comercial.-   Seu app tem a permissão `whatsapp_business_messaging` para o número comercial.

### Etapa 2: criar um grupo

Use o ponto de extremidade [Criar grupo](/documentation/business-messaging/whatsapp/groups/reference#create-group) para criar um grupo, informando um nome e uma descrição opcional. Depois que um grupo for criado com sucesso, será retornado um webhook [`group_lifecycle_update`para confirmação](/documentation/business-messaging/whatsapp/groups/webhooks#group-create-succeed). Esse webhook incluirá um campo `invite_link` com o link de convite que você poderá compartilhar com possíveis participantes do grupo.

### Etapa 3: convidar usuários do WhatsApp para o grupo

#### 3.1 Adicione um modelo de link de convite para o grupo em [Biblioteca de modelos](https://business.facebook.com/wa/manage/template-library) à sua conta de modelos:

-   Vá até [Biblioteca de modelos](https://business.facebook.com/wa/manage/template-library).-   À esquerda, clique no menu suspenso **Link de convite para o grupo** e, depois, na caixa de seleção **Convite para o grupo mediante solicitação**.-   Selecione o modelo que você quer usar, dê um nome a ele e clique em **Enviar**

#### 3.2 Enviar o link de convite para participantes em potencial do grupo

Depois que o modelo for aprovado, use-o para convidar membros para o grupo por meio do link de convite fornecido no webhook da Etapa 2.

Você pode seguir as instruções na [referência Enviar mensagem de modelo de link de convite para grupo](/documentation/business-messaging/whatsapp/groups/reference#send-group-invite-link-template-message) a fim de enviar o link de convite com o modelo adicionado à sua conta.

#### 3.3 Notificação quando participantes entrarem no grupo

Quando alguém entra no grupo, é disparado um webhook [`group_participants_update` para informar que um participante entrou](/documentation/business-messaging/whatsapp/groups/webhooks#group-participants-update-webhook) .

### Etapa 4: enviar e receber mensagens

Agora, você pode usar o [ponto de extremidade de envio de mensagem da API de Nuvem](/documentation/business-messaging/whatsapp/groups/groups-messaging#send-group-message) para enviar mensagens ao grupo.

[Webhooks de status de mensagem enviada, entregue e lida](/documentation/business-messaging/whatsapp/groups/webhooks#group-message-status-webhooks) serão disparados quando houver atualizações no grupo. As respostas dos participantes também acionarão webhooks.

[Saiba mais sobre como enviar e receber mensagens em grupo](/documentation/business-messaging/whatsapp/groups/groups-messaging)

## Recursos

Para saber mais sobre todos os recursos disponíveis em grupos:

-   Acesse a [referência de Gerenciamento de grupo](/documentation/business-messaging/whatsapp/groups/reference) para saber mais sobre os recursos disponíveis para gerenciar grupos.-   Consulte a [referência sobre mensagens em grupo](/documentation/business-messaging/whatsapp/groups/groups-messaging) para entender o envio, o recebimento e outras funções de mensagens em grupos.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)