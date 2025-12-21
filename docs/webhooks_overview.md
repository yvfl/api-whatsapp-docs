<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview -->
<!-- Scraped: 2025-12-20T17:34:58.443Z -->

# Webhooks

Updated: 7 de nov de 2025

Este documento descreve o que são webhooks e como eles são usados ​​pela Plataforma do WhatsApp Business.

Os webhooks são pedidos HTTP com cargas JSON enviados dos servidores da Meta para um servidor indicado por você. A Plataforma do WhatsApp Business usa webhooks para informar você sobre mensagens recebidas, o status de mensagens enviadas e outras informações importantes, como alterações no status da conta, atualizações de recursos de mensagens e mudanças nas pontuações de qualidade de modelos.

Por exemplo, este é um webhook que descreve uma mensagem enviada por um usuário do WhatsApp para uma empresa:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            ],            "messages": [              {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",                "timestamp": "1749416383",                "type": "text"                "text": {                  "body": "Does it come in another color?"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

## Como criar um ponto de extremidade de webhook

Para receber webhooks, é preciso criar e configurar um ponto de extremidade de webhook. Para criar seu próprio ponto de extremidade, consulte nosso documento [Como criar um ponto de extremidade de webhook](/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint)

Caso você ainda não queira criar seu próprio ponto de extremidade, é possível [criar um ponto de extremidade de webhook de teste](/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot) que registra as cargas do webhook no console. No entanto, antes de usar o app em ambiente de produção, você precisa criar seu próprio ponto de extremidade.

## Permissões

Você precisará das seguintes permissões para receber webhooks:

-   **whatsapp\_business\_messaging**: para webhooks de **mensagens**-   **whatsapp\_business\_management**: para todos os outros webhooks

Caso você seja um desenvolvedor direto, use o usuário do sistema para conceder essas permissões ao app ao gerar o [token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens)).

Caso seja um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview) e precise dessas permissões para fornecer serviços adequados aos clientes, você deverá receber aprovação para acesso avançado às permissões por meio da [Análise do App](/docs/app-review). Depois disso, os clientes empresariais poderão conceder essas permissões ao seu app durante a integração.

## Campos

Depois de criar e configurar o ponto de extremidade do webhook, você pode assinar os campos de webhook a seguir.

Nome do campo

Descrição

[account\_alerts](/documentation/business-messaging/whatsapp/webhooks/reference/account_alerts)

O webhook **account\_alerts** notifica você sobre alterações no [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits), [perfil empresarial](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#business-profiles) e status da [](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#official-business-account)conta comercial oficial de um número de telefone comercial.

[account\_review\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_review_update)

O webhook **account\_review\_update** envia uma notificação quando uma conta do WhatsApp Business é analisada em relação às nossas diretrizes de política.

[account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update)

O webhook **account\_update** notifica sobre alterações no envio da [verificação da empresa conduzida pelo parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) de uma conta do WhatsApp Business, na qualificação para a [taxa internacional de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) ou no ponto comercial principal, quando é compartilhado com um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview), em caso de [violações de políticas ou termos](/documentation/business-messaging/whatsapp/policy-enforcement) ou quando é excluída.

[automatic\_events](/documentation/business-messaging/whatsapp/webhooks/reference/automatic_events)

O webhook **automatic\_events** envia uma notificação quando detectamos um evento de compra ou lead em uma conversa entre você e um usuário do WhatsApp que entrou em contato por meio do seu anúncio de clique para o WhatsApp, se você tiver aceitado a geração de relatórios de [Eventos automáticos](/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api).

[business\_capability\_update](/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update)

O webhook **business\_capability\_update** notifica você sobre alterações de capacidade da conta do WhatsApp Business ou do portfólio empresarial ([limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits#increasing-your-limit), [limites de número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#registered-number-cap) etc.).

[history](/documentation/business-messaging/whatsapp/webhooks/reference/history)

O webhook de **history** é usado para sincronizar o [histórico de conversas do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) de um cliente empresarial integrado por um provedor de soluções.

[message\_template\_components\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_components_update)

O webhook **message\_template\_components\_update** notifica você sobre as alterações nos componentes de um modelo.

[message\_template\_quality\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_quality_update)

O webhook **message\_template\_quality\_update** notifica você sobre alterações na [pontuação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality) de um modelo.

[message\_template\_status\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update)

O webhook **message\_template\_status\_update** notifica você sobre as alterações no status de um modelo existente.

[messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages)

O webhook **messages** descreve as mensagens enviadas de um usuário do WhatsApp para uma empresa, bem como o status das mensagens enviadas por uma empresa para um usuário do WhatsApp.

[partner\_solutions](/documentation/business-messaging/whatsapp/webhooks/reference/partner_solutions)

O **webhook partner\_solutions** descreve as alterações no status de uma [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions).

[payment\_configuration\_update](/documentation/business-messaging/whatsapp/webhooks/reference/payment_configuration_update)

O webhook **payment\_configuration\_update** envia uma notificação sobre as alterações nas configurações de pagamento da [API de Pagamentos Índia](/documentation/business-messaging/whatsapp/payments/payments-in/overview) e da [API de Pagamentos Brasil](/documentation/business-messaging/whatsapp/payments/payments-br/overview).

[phone\_number\_name\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_name_update)

O webhook **phone\_number\_name\_update** notifica você sobre os resultados da [verificação do nome de exibição](/documentation/business-messaging/whatsapp/display-names#display-name-verificationn) do número de telefone comercial.

[phone\_number\_quality\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update)

O webhook **phone\_number\_quality\_update** fornece notificações sobre as alterações de [nível de taxa de transferência de dados](/documentation/business-messaging/whatsapp/throughput) de um número de telefone comercial.

[security](/documentation/business-messaging/whatsapp/webhooks/reference/security)

O webhook **security** notifica você sobre alterações nas configurações de segurança de um número de telefone comercial.

[smb\_app\_state\_sync](/documentation/business-messaging/whatsapp/webhooks/reference/smb_app_state_sync)

O webhook **smb\_app\_state\_sync** é usado para sincronizar contatos de [usuários do app WhatsApp Business que foram integrados](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por meio de um provedor de soluções.

[smb\_message\_echoes](/documentation/business-messaging/whatsapp/webhooks/reference/smb_message_echoes)

O webhook **smb\_message\_echoes** avisa você sobre as mensagens enviadas por meio do app WhatsApp Business ou um [dispositivo adicional ("conectado")](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#linked-devices) por um cliente empresarial que fez a [integração com a API de Nuvem](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) por meio de um provedor de soluções.

[template\_category\_update](/documentation/business-messaging/whatsapp/webhooks/reference/template_category_update)

O webhook **template\_category\_update** envia uma notificação sobre as alterações na [categoria](/documentation/business-messaging/whatsapp/templates/template-categorization) do modelo.

[user\_preferences](/documentation/business-messaging/whatsapp/webhooks/reference/user_preferences)

O webhook **user\_preferences** notifica você sobre as alterações nas [preferências de mensagens de marketing](/documentation/business-messaging/whatsapp/templates/marketing-templates#user-preferences-for-marketing-messages) de um usuário do WhatsApp.

## Como substituir webhooks

É possível usar um ponto de extremidade de webhook alternativo para webhooks de mensagens na sua conta do WhatsApp Business (WABA, nas iniciais em inglês) ou número de telefone comercial. Isso pode ser útil para fins de teste ou se você for um provedor de soluções e quiser usar pontos de extremidade de webhook únicos para cada um dos seus clientes integrados.

Consulte o documento [Substituições de webhook](/docs/whatsapp/embedded-signup/webhooks/override) para saber como substituir webhooks.

## Tamanho da carga

As cargas de webhook podem ter até 3 MB.

## Falha na entrega do webhook

Se enviarmos um pedido de webhook para seu ponto de extremidade e o servidor responder com um código de status HTTP que não seja 200, ou se não pudermos enviar o webhook por outro motivo, continuaremos fazendo tentativas diminuindo a frequência durante 7 dias.

Essas tentativas serão enviadas a todos os apps que assinaram os webhooks (e os campos relacionados) na conta do WhatsApp Business. Isso pode fazer com que as notificações de webhook sejam duplicadas.

## Endereços IP

É possível receber endereços IP dos nossos servidores de webhook ao executar este comando no seu terminal:

```
whois -h whois.radb.net — '-i origin AS32934' | grep '^route' | awk '{print $2}' | sort
```

De tempo em tempo, alteramos os endereços IP. Por isso, se você estiver fazendo uma lista de permissão de servidores, será preciso gerar a lista de novo periodicamente para atualizar a lista de permissão.

## Solução de problemas

Se você não estiver recebendo webhooks:

-   Verifique se o seu ponto de extremidade está aceitando pedidos.-   Envie uma carga de teste ao ponto de extremidade via **[Painel de Apps](/apps)** > **WhatsApp** > **Configurações**.-   Verifique se o app está no modo **Publicado**. Alguns webhooks não serão enviados se o app estiver no modo **Desenvolvimento**.

## Saiba mais

-   Consulte o post de blog do WhatsApp Business [Como usar o Node.js para implementar webhooks](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fblog%2Fhow-to-use-webhooks-from-whatsapp-business-api&h=AT2V3QFhWGaWgFDiGCjJlbsJ9khPclL_2vLVnYBE87alUy6nNuyQ8_cvKBXljhKqJ08ES0Qqpm5c_oWqVjloEfXRceJ8KISWw0mibA1mK9OznPQfhuY3enwygkAzu7M9oBMG8yngZWh4EZcpMRZLp8cxQnM).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)