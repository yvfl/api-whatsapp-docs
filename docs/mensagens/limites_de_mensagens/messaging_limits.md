<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits -->
<!-- Scraped: 2025-12-20T17:27:40.761Z -->

# Limites de mensagens

Updated: 30 de out de 2025

Este documento descreve os limites de mensagens para a plataforma do WhatsApp Business.

Os limites de mensagens representam o número máximo de telefones de usuários únicos do WhatsApp para os quais sua empresa pode entregar mensagens, fora de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows), em um período móvel de 24 horas.

Esses limites são calculados e definidos no nível do portfólio empresarial, sendo compartilhados por todos os números de telefone comerciais do portfólio. Isso significa que, se um portfólio empresarial tiver vários números de telefone comerciais, pode ser que um deles consuma toda a capacidade de envio de mensagens do portfólio em determinado período.

Os novos portfólios empresariais têm um limite de 250 mensagens, mas ele pode ser aumentado para:

-   2.000 (com a conclusão de um [caminho de ajuste](#scaling-paths))-   10.000 (via [ajuste automático](#automatic-scaling))-   100.000 (via ajuste automático)-   Ilimitado (via ajuste automático)

## Aumentar o limite

Você pode aumentar seu limite de mensagens para 2.000 concluindo um dos [caminhos de ajuste](#scaling-paths) descritos abaixo. Depois disso, aumentaremos automaticamente seu limite para o próximo nível superior se você atender aos nossos [critérios de ajuste automático](#automatic-scaling).

### Caminhos de ajuste

-   [Como verificar sua empresa](https://www.facebook.com/business/help/2058515294227817)-   Peça ao [provedor de soluções para verificar sua empresa](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) (caso ela tenha sido integrada por um)-   Envie 2.000 mensagens entregues fora das janelas de atendimento ao cliente para números de telefone únicos de usuários do WhatsApp, em um período móvel de 30 dias, usando modelos com uma alta [classificação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality).

Após a conclusão de um desses caminhos, analisaremos a [qualidade das suas mensagens](/documentation/business-messaging/whatsapp/messages/send-messages#message-quality). Com base nessa análise, a qualificação do seu número para o ajuste automático será aprovada ou negada.

### Aprovações

Se a qualificação for aprovada, aumentaremos imediatamente o limite de mensagens do número de telefone comercial para 2.000 e enviaremos uma notificação por email e alertas do desenvolvedor. Além disso, um webhook [business\_capability\_update](/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update) será acionado com `max_daily_conversations_per_business` (para webhooks v24.0 e posteriores) e `max_daily_conversation_per_phone` (para a versão 23.0 e anteriores, até fevereiro de 2026) definidos como o novo limite.

Agora os aumentos adicionais do limite de mensagens podem ocorrer automaticamente por meio do [ajuste automático](#automatic-scaling).

### Negações

Se a qualificação for negada, manteremos o limite do número de telefone comercial no nível atual e enviaremos uma notificação por email e alertas do desenvolvedor. Além disso, um webhook [account\_alerts](/documentation/business-messaging/whatsapp/webhooks/reference/account_alerts) será acionado com as propriedades `alert_type` e `alert_description`, indicando métodos alternativos para aumentar seu limite.

Valor de "alert\_type"

O que você pode fazer

`INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED`

Enviar 2.000 mensagens entregues fora das janelas de atendimento ao cliente para números de telefone únicos de usuários do WhatsApp, em um período móvel de 30 dias, usando modelos com uma alta [classificação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality).

`INCREASED_CAPABILITIES_ELIGIBILITY_FAILED`

Envie 2.000 mensagens entregues fora das janelas de atendimento ao cliente para números de telefone únicos de usuários do WhatsApp, em um período móvel de 30 dias, usando modelos com uma alta [classificação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality).

`INCREASED_CAPABILITIES_ELIGIBILITY_NEED_MORE_INFO`

[Verificar sua identidade](https://www.facebook.com/business/help/587323819101032), ou enviar 2.000 mensagens entregues fora das janelas de atendimento ao cliente para números de telefone únicos de usuários do WhatsApp, em um período móvel de 30 dias, usando modelos com uma alta [classificação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality).

## Ajuste automático

Depois que o limite de mensagens do portfólio empresarial chegar a 2.000, determinaremos se ele deverá ser aumentado ainda mais de acordo com os seguintes critérios:

-   Você envia [mensagens de alta qualidade](/documentation/business-messaging/whatsapp/messages/send-messages#message-quality) com todos os seus modelos e números de telefone comerciais.-   Nos últimos sete dias, sua empresa usou pelo menos metade do limite de mensagens atual

Se esses critérios forem atendidos, aumentaremos o limite do seu portfólio em um nível dentro de seis horas.

## Como verificar seu limite

### Via Meta Business Suite

O atual limite de mensagens do seu número de telefone comercial aparece no painel [Gerenciador do WhatsApp](https://business.facebook.com/wa/manage/home/) > **Ferramentas da conta** > **Limites de mensagens**:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/535132607_2167690997071606_2519788358245522587_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=UYubGzjD7CkQ7kNvwH797T2&_nc_oc=AdlOkAh9lDKFTwRhREVnkqV5kT-5O50x8V2X7BRRfGL37HjmchWEii780z5z2nCxvwU&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=2cFVgWlRp4yxk49VYLBt-A&oh=00_Afmr_l16cSKv9HG-3w1PD9rCZkuno3X48Ypq893vWhrmNQ&oe=69612A99)

### Via API

Use o ponto de extremidade [GET /<BUSINESS\_PHONE\_NUMBER\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) e peça o campo `whatsapp_business_manager_messaging_limit` (para a versão v24.0 e posteriores) ou o campo `messaging_limit_tier` (para a versão 23.0 e anteriores) para obter o limite de mensagens atual de um número de telefone comercial.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922?fields=whatsapp_business_manager_messaging_limit' \
-H 'Authorization: Bearer EAAJB...'
```

#### Exemplo de resposta

```
{  "whatsapp_business_manager_messaging_limit": "TIER_250",  "id": "106540352242922"}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)