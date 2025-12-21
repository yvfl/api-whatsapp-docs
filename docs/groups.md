<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups -->
<!-- Scraped: 2025-12-20T17:42:19.882Z -->

# API de Grupos

Updated: 14 de nov de 2025

A API de Grupos permite criar grupos de forma programática para envio de mensagens e colaboração.

## Como funciona

Os grupos são uma experiência apenas para convidados. Os participantes entram usando um link de convite que você envia a eles. Esse link de convite fornece contexto sobre o grupo, ajudando o usuário a decidir se quer participar.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/583332263_2097826120969757_476207660850437421_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=szH0S4iYCa8Q7kNvwHBQbR9&_nc_oc=AdkIHYLECpiZonue0Btb27uflPxZZ2_yqA0Y6ENbOrAimiHCP6QSVHybvd9rZSESdM0&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=nhVY_NCGg4o8UNOiZ7b5Bw&oh=00_Afn4gaWmsWC7BzHuGpSHn48CzsKXDgI2eyLsGlq3s-pJ7g&oe=69613C3B)

## Introdução

Quando estiver tudo pronto para você começar a usar a API de Grupos, acesse nosso guia "Introdução" para obter mais informações:

[Introdução à API de Grupos](/documentation/business-messaging/whatsapp/groups/get-started)

## Fatos rápidos

-   **Número máximo de participantes do grupo:** 8-   **Tipos de mensagem compatíveis:** texto, mídia, bem como modelos baseados em texto e mídia-   **Número máximo de grupos que podem ser criados:** 10.000 por número comercial-   **Número máximo de empresas da API de Nuvem por grupo:** 1

## Análise

**As métricas de desempenho não estão disponíveis para modelos de mensagem usados ​​em grupos.**

Crie novos modelos para usar especificamente em grupos, em vez de reutilizar modelos usados ​​para mensagens individuais.

## Limites

**Qualificação para a API de Grupos**

Para se qualificar para os recursos de grupos, a empresa deve cumprir os seguintes requisitos:

-   Ter um limite de mensagens de pelo menos 100 mil conversas iniciadas pela empresa em um período contínuo de 24 horas-   Ser uma [conta comercial oficial (OBA)](/documentation/business-messaging/whatsapp/official-business-accounts)

[Saiba mais sobre classificações de qualidade e limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits)

_Os grupos **não estão disponíveis** para [usuários de coexistência](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) e números de telefone integrados às [conversas com múltiplas soluções](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations)_.

_A [API de Ligações](/documentation/business-messaging/whatsapp/calling) não é compatível com grupos._

-   **Tipos de mensagens incompatíveis:**
    -   Ligações-   Mensagens temporárias-   Visualização única-   Autenticação-   Mensagens comerciais-   Mensagens interativas  
        -   **Ações incompatíveis:**
    -   Lista de participantes oculta do grupo do administrador-   Editar mensagem-   Excluir mensagem-   Marcar uma mensagem como lida

## Preços

A API de Grupos usa [preços por mensagem](/documentation/business-messaging/whatsapp/pricing).

[Saiba mais sobre os preços da API de Grupos aqui](/documentation/business-messaging/whatsapp/groups/pricing)

## Recursos e referência

### Recursos de gerenciamento de grupos

-   [Criar e excluir um grupo](/documentation/business-messaging/whatsapp/groups/reference#create-group)-   [Grupos com pedidos de participação](/documentation/business-messaging/whatsapp/groups/reference#groups-with-join-requests)-   [Obter e redefinir o link de convite para o grupo](/documentation/business-messaging/whatsapp/groups/reference#get-and-reset-group-invite-link)-   [Enviar mensagem de modelo de link de convite para o grupo](/documentation/business-messaging/whatsapp/groups/reference#send-group-invite-link-template-message)-   [Remover participantes do grupo](/documentation/business-messaging/whatsapp/groups/reference#remove-group-participants-endpoint)-   [Obter informações do grupo](/documentation/business-messaging/whatsapp/groups/reference#get-group-info)-   [Obter grupos ativos](/documentation/business-messaging/whatsapp/groups/reference#get-active-groups)-   [Atualizar as configurações do grupo](/documentation/business-messaging/whatsapp/groups/reference#update-group-settings)

[_Ver a referência do gerenciamento de grupo_](/documentation/business-messaging/whatsapp/groups/reference)

### Recursos de mensagens de grupo

-   [Enviar mensagens para grupo](/documentation/business-messaging/whatsapp/groups/groups-messaging#send-group-message)-   [Receber mensagens de grupo](/documentation/business-messaging/whatsapp/groups/groups-messaging#receive-group-messages)-   [Fixar e desafixar mensagens de grupo](/documentation/business-messaging/whatsapp/groups/groups-messaging#pin-and-unpin-group-message)

[_Ver a referência sobre mensagens de grupo_](/documentation/business-messaging/whatsapp/groups/groups-messaging)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)