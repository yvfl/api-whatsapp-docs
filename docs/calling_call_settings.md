<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings -->
<!-- Scraped: 2025-12-20T17:40:35.846Z -->

# Definir configurações de ligação

Updated: 7 de nov de 2025

**As ligações não estão habilitadas por padrão em um número de telefone comercial**

Use o ponto de extremidade `POST /&lt;PHONE_NUMBER_ID&gt;/settings` para habilitar os recursos da API de Ligações em um número de telefone comercial.

**Qualificação para ligação**

Para se qualificar para os recursos da API de Ligações, sua empresa precisa ter um limite de mensagens de pelo menos 2 mil conversas iniciadas pela empresa em um período contínuo de 24 horas.

[Saiba mais sobre classificações de qualidade e limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits)

Quando você testa a integração da API de Ligação do WhatsApp usando números de teste públicos (PTNs) e contas de sandbox, as restrições da API de Ligações são flexibilizadas.

[Teste a integração da API de Ligação do WhatsApp](/documentation/business-messaging/whatsapp/calling#testing-and-sandbox-accounts)

## Visão geral

Use estes pontos de extremidade para ver e configurar as definições de ligação da API de Ligações Comerciais do WhatsApp.

Você também pode [configurar o protocolo de iniciação de sessão (SIP)](/documentation/business-messaging/whatsapp/calling/sip) para sinalização de chamadas em vez de usar chamadas de ponto de extremidade da Graph API e webhooks.

## Definir/atualizar as configurações de ligação de número de telefone comercial

Use este ponto de extremidade para atualizar as configurações de ligação para um número de telefone comercial individual.

**Clientes do WhatsApp com a configuração de ligação mais recente**

Depois da atualização da configuração de ligação, pode levar até 7 dias para ela ser exibida aos usuários do WhatsApp, embora, na maioria dos casos, leve menos tempo. Para forçar uma atualização imediata no WhatsApp, abra a janela de conversa com a empresa e a página de informações da conversa. Independentemente do comportamento do cliente do WhatsApp, a semântica das configurações ainda é respeitada no lado do servidor.

### Sintaxe da solicitação

```
POST /<PHONE_NUMBER_ID>/settings
```

### Parâmetros do ponto de extremidade

  

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial cujas configurações da API de Ligações estão sendo atualizadas.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

### Corpo da solicitação

```
{  "calling": {    "status": "ENABLED",    "call_icon_visibility": "DEFAULT",    "call_hours": {      "status": "ENABLED",      "timezone_id": "America/Manaus",      "weekly_operating_hours": [        {          "day_of_week": "MONDAY",          "open_time": "0400",          "close_time": "1020"        },        {          "day_of_week": "TUESDAY",          "open_time": "0108",          "close_time": "1020"        }      ],      "holiday_schedule": [        {          "date": "2026-01-01",          "start_time": "0000",          "end_time": "2359"        }      ]    },    "callback_permission_status": "ENABLED",    "sip": {      "status": "ENABLED | DISABLED (default)",      "servers": [        {          "hostname": SIP_SERVER_HOSTNAME,          "port": SIP_SERVER_PORT,          "request_uri_user_params": {            "KEY1": "VALUE1",            "KEY2": "VALUE2"          }        }      ]    }  }}
```

### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`status`

_String_

**Opcional**

  
Habilite ou desabilite a API de Ligações para o número de telefone comercial em questão.

`“ENABLED”`

`“DISABLED”`

`call_icon_visibility`

_String_

**Opcional**

  
Defina se o ícone do botão de ligação do WhatsApp será mostrado aos usuários enquanto eles conversam com a empresa.

[Veja abaixo os detalhes do comportamento de visibilidade do ícone de ligação](/documentation/business-messaging/whatsapp/calling/call-settings#parameter-details)

[Veja abaixo os detalhes do comportamento de visibilidade do ícone de ligação](/documentation/business-messaging/whatsapp/calling/call-settings#parameter-details)

`call_hours`

_Objeto JSON_

**Opcional**

  
Permite que você especifique e acione configurações para ligações recebidas com base no seu fuso horário, no horário de funcionamento da empresa e em feriados.

Todos os valores configurados anteriormente em `call_hours` serão substituídos pelos valores transmitidos no corpo da solicitação desta chamada à API.

[Veja abaixo os detalhes do comportamento do horário de atendimento](/documentation/business-messaging/whatsapp/calling/call-settings#parameter-details)

[Veja abaixo os detalhes do comportamento do horário de atendimento](/documentation/business-messaging/whatsapp/calling/call-settings#parameter-details)

`callback_permission_status`

_String_

**Opcional**

  
Ajuste a configuração para decidir se o usuário do WhatsApp receberá um pedido de permissão para ligação após ligar para sua empresa.

Observação: o pedido de permissão para ligação é acionado após uma ligação perdida ou conectada.

[Veja abaixo os detalhes do comportamento de status da permissão de retorno de ligação](/documentation/business-messaging/whatsapp/calling/call-settings#parameter-details)

`“ENABLED”`

`“DISABLED”`

`sip`

_Objeto JSON_

**Opcional**

  
Configure o sinalizador de ligação por meio do protocolo de iniciação de sinal (SIP).

**Observação: quando o SIP está habilitado, não é possível usar pontos de extremidade relacionados a ligações, e você não receberá webhooks relacionados a ligações.**

[Saiba como configurar e usar o sinalizador de chamada de SIP](/documentation/business-messaging/whatsapp/calling/sip)

```
"sip": {  "status": "ENABLED | DISABLED (default)",  "servers": [// one server per app]    {      "hostname": SIP_SERVER_HOSTNAME      "port": SIP_SERVER_PORT,      "request_uri_user_params": {        "KEY1": "VALUE1", // for cases like TGRP        "KEY2": "VALUE2",      }    }  ]}
```

### Detalhes do parâmetro

#### Status da ligação

Quando o parâmetro `status` é definido como `“ENABLED”`, os recursos de ligação são habilitados para o número de telefone comercial. Os apps de cliente do WhatsApp renderizam o ícone de botão de ligação tanto na conversa comercial quanto no perfil da conversa comercial.

Quando o parâmetro `status` é definido como `“DISABLED”`, os recursos de ligação são **desabilitados**. Além disso, a conversa comercial e o perfil da conversa comercial **não exibem o ícone de botão de ligação.**

As atualizações de `status` serão aplicadas ao ícone do botão de ligação nas conversas comerciais existentes quase em tempo real quando o número de telefone comercial estiver nos contatos do usuário do WhatsApp.

Caso contrário, as atualizações são feitas em tempo real para um número limitado de usuários em conversa com a empresa e são casuais para o restante das conversas.

#### Exibição do ícone do botão de ligação

Quando os recursos da API de Ligações estão habilitados para um número comercial, você ainda pode escolher se quer mostrar o ícone do botão de ligação ou não usando o parâmetro `call_icon_visibility`. Observação: desabilitar a visibilidade do ícone do botão de ligação **não** impede que um usuário do WhatsApp faça ligações não solicitadas para sua empresa.

O comportamento das opções compatíveis é o seguinte:

`DEFAULT`

O ícone do botão de ligação será exibido na barra de menu da conversa e na página de informações da empresa, permitindo ligações não solicitadas para a empresa por usuários do WhatsApp.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560917504_1339317971260187_5308835930412534329_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=JitLUYLGCysQ7kNvwGPX0E8&_nc_oc=AdmyutZWs68kI-x-ZgIvD-dGG3y4-8rfQYVV9_ZtVuyKfSNUvIaAL7Ih-qtr_RWCvFY&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=Ns6czkq3hj9nkiszPX0KIQ&oh=00_AfkyxaidMZfsfVxdOQwxQSBnFoPmuII_6SlUw5oOsFfgIA&oe=69611D81)  
  
  

`DISABLE_ALL`

O ícone do botão de ligação fica oculto na barra de menu da conversa e na página de informações da empresa. Além disso, todos os outros pontos de entrada externos à conversa são desabilitados. Os consumidores não podem fazer ligações não solicitadas para a empresa.

Sua empresa ainda pode [enviar mensagens interativas](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button) ou [mensagens de modelo](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#create-and-send-whatsapp-call-button-template-message) com um botão de CTA da API de Ligações.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560585020_1339317941260190_3863205212606668279_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=YOjubMCCriwQ7kNvwFzKbMC&_nc_oc=Admo1okP-nga-wQ6Cxwu966UUvyvSP2KBC71ZbgGsTarBdVWR-UQqqL1_WxMU8QQtXo&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=Ns6czkq3hj9nkiszPX0KIQ&oh=00_AfkxKjOjQHcjlEMbE_Jc1nmg2s1KR-zTEKEl9GyBhJ1leQ&oe=69612B04)  
  
  

#### Permissões de retorno de ligação

Para fazer uma ligação a um usuário do WhatsApp, é preciso ter permissão explícita dele. Uma forma de obter permissão para ligação é solicitá-la quando o usuário do WhatsApp liga para a empresa.

É possível configurar a interface do usuário da permissão para ligação, assim ela será exibida automaticamente no app do cliente do usuário do WhatsApp quando ele ligar para seu número comercial. O usuário pode alterar a seleção de permissão a qualquer momento.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560469128_1339318254593492_7311592232673295325_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=HS-AyP2Mt5oQ7kNvwF3fXLQ&_nc_oc=AdlFWfch6epPAvJdhoRPvgSGobhztCEKjCRgYYsmdeK1MkwEVhNa_8gkRQ26Ev7GQaY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=Ns6czkq3hj9nkiszPX0KIQ&oh=00_AfkHhg0xCWWw5CPP-WAvxUEXdM0btGEfiHAHo4fav4Q75Q&oe=6961353A)  
  
  

#### Horário de atendimento

Com a configuração `call_hours`, é possível especificar o fuso horário, o horário de funcionamento da empresa e os feriados que serão aplicados a todas as ligações iniciadas pelo usuário.

Ao definir essa configuração, você restringe as ligações aos horários semanais disponíveis que configurar. As ligações iniciadas pelo usuário ficam indisponíveis fora do horário semanal e dos feriados que você definir.

O app do cliente do WhatsApp mostrará aos usuários a opção de conversar com a empresa ou solicitar um retorno de ligação se `callback_permission_status` for `ENABLED`. O usuário também verá o próximo horário para ligação disponível na tela de opções.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561822470_1339317924593525_4183355843280485487_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=mH4gEwcGYasQ7kNvwHOdTIx&_nc_oc=AdlWyIHoadsbWby1CVr8ZUgHyEUb9MWUCqPmCw4QIg1T7-sbvHQkXArW4w6XEANrRwI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=Ns6czkq3hj9nkiszPX0KIQ&oh=00_Afk0BtuArXKH573fzuvllNQNEGZSCK_mD6_qvAHcG2Fkxg&oe=696137A7)  
  
  

```
"call_hours": {  "status": "ENABLED",  "timezone_id": "America/Manaus",  "weekly_operating_hours": [    {      "day_of_week": "MONDAY",      "open_time": "0400",      "close_time": "1020"    },    {      "day_of_week": "TUESDAY",      "open_time": "0108",      "close_time": "1020"    }  ],  "holiday_schedule": [    {      "date": "2026-01-01",      "start_time": "0000",      "end_time": "2359"    }  ]}
```

Parâmetro

Descrição

Exemplo de valores

`status`

_String_

**Obrigatório**

  
Habilite ou desabilite o horário de atendimento da empresa.

Se o horário de atendimento estiver desabilitado, a empresa será considerada aberta 24 horas por dia, 7 dias por semana.

`“ENABLED”`

`“DISABLED”`

`timezone_id`

_String_

**Obrigatório**

  
O fuso horário em que a empresa está operando.

[Saiba mais sobre os valores compatíveis com `timezone_id`](/docs/facebook-business-extension/fbe/reference#time-zones)

`“America/Menominee”`

`“Asia/Singapore”`

`weekly_operating_hours`

_Lista de objetos JSON_

**Obrigatório**

  

O horário de funcionamento para cada dia da semana.

Cada entrada é um objeto JSON com três pares de chave/valor:

`day_of_week` — (_Enumeração_) **\[Obrigatório\]**

O dia da semana.

Pode conter um destes sete valores: `"MONDAY"`, `“TUESDAY”`, `“WEDNESDAY”`, `“THURSDAY”`, `“FRIDAY”`, `“SATURDAY”`, `“SUNDAY”`

`open_time`

`close_time` — (_Número inteiro_) **\[Obrigatório\]**

Horários de abertura e fechamento no formato de 24 horas, por exemplo, `”1130”` = 11:30

-   Máximo de duas entradas permitidas por dia da semana-   `open_time` deve ser anterior a `close_time`-   Não são permitidas entradas sobrepostas

```
```

`holiday_schedule`

_String_

**Opcional**

  
Uma substituição opcional para a programação semanal.

É possível especificar até 20 substituições.

Observação: se `holiday_schedule` não for enviada na solicitação, a `holiday_schedule` existente será excluída e substituída por uma programação vazia.

`date` – (_String_) **\[Obrigatório\]**

Data para a qual você deseja especificar a substituição.

Formato DD-MM-AAAA.

`open_time`

`close_time` — (_Número inteiro_) **\[Obrigatório\]**

Horários de abertura e fechamento no formato de 24 horas, por exemplo, `”1130”` = 11:30

-   Máximo de duas entradas permitidas por dia da semana-   `open_time` deve ser anterior a `close_time`-   Não são permitidas entradas sobrepostas

```
```

### Resposta de sucesso

```
{  "success": true}
```

### Resposta de erro

Veja os problemas que podem ocorrer:

-   Erros de permissão/autorização-   Status inválido-   Programação inválida para `call_hours`-   O feriado fornecido em `call_hours` é uma data anterior à atual-   O fuso horário é inválido em `call_hours`-   `weekly_operating_hours` em `call_hours` não pode estar vazio-   O formato de data em `holiday_schedule` para call\_hours é inválido-   Não são permitidas mais de duas entradas na programação `weekly_operating_hours` em `call_hours`-   Não é permitida a sobreposição de programação em `call_hours`-   Erros de restrição de ligações

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Obter as configurações de ligação do número de telefone

Use este ponto de extremidade para verificar a configuração dos recursos da API de Ligações.

Esse ponto de extremidade pode retornar informações sobre as configurações de outros recursos da API de Nuvem.

### Sintaxe da solicitação

```
GET /<PHONE_NUMBER_ID>/settings
```

### Parâmetros do ponto de extremidade

  

Parâmetro

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial cujas configurações da API de Ligações estão sendo obtidas.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`124545784358810`

### É necessário obter permissão do app

`whatsapp_business_management`: é necessário ter acesso avançado para atualizar o uso da API para clientes empresariais finais

### Corpo da resposta

```
{  "calling": {    "status": "ENABLED",    "call_icon_visibility": "DEFAULT",    "callback_permission_status": "ENABLED",    "call_hours": {      "status": "ENABLED",      "timezone_id": "[REDACTED]",      "weekly_operating_hours": [        {          "day_of_week": "MONDAY",          "open_time": "0400",          "close_time": "1020"        },        {          "day_of_week": "TUESDAY",          "open_time": "0108",          "close_time": "1020"        }      ],      "holiday_schedule": [        {          "date": "2026-01-01",          "start_time": "0000",          "end_time": "2359"        }      ]    },    "sip": {      "status": "ENABLED",      "servers": [        {          "hostname": "[REDACTED]",          "sip_user_password": "[REDACTED]"        }      ]    }  },  <Other non-calling feature configuration...>}
```

### Incluir senha de usuário do SIP

Como opção, você pode incluir credenciais de usuário do SIP no corpo da resposta. Para isso, basta adicionar o parâmetro de consulta de credenciais do SIP na solicitação POST:

```
GET /<PHONE_NUMBER_ID>/settings?include_sip_credentials=true
```

A resposta será semelhante a esta:

```
{  "calling": {    ... // other calling api settings    "sip": {      "status": "ENABLED",      "servers": [        {          "hostname": "sip.example.com",          "sip_user_password": "{SIP_USER_PASSWORD}"        }      ]    }  }}
```

### Detalhes da resposta

O ponto de extremidade `GET /<PHONE_NUMBER_ID>/settings` retorna as configurações da API de Ligações, além de outras informações de configuração do seu número de telefone comercial do WhatsApp.

[Saiba mais sobre as configurações da API de Ligações e os respectivos valores](/documentation/business-messaging/whatsapp/calling/call-settings#body-parameters)

#### Resposta com restrições de ligação

Se a sua empresa for afetada pela aplicação de uma política, o corpo da resposta conterá informações sobre a restrição e outras configurações da API de Ligações, conforme exemplo abaixo.

```
{   "calling": {     ... // other calling api settings     "restrictions": {       "restrictions_list": [         {           "type": "RESTRICTED_BIZ_INITIATED_AND_USER_INITIATED_CALLING",           "reason": "Calling capability has been temporarily disabled for this phone number due to high negative feedback from users.",           "expiration": 1754072386         }       ]     }   }}
```

Parâmetro

Descrição

`<restrictions>`

_Objeto JSON_

O objeto de restrições contém estes valores: `restriction_list`_(objeto JSON)_: lista de restrições aplicadas atualmente com os seguintes valores  
`type`_(string)_ – para a restrição de ligação, esse campo teria o valor de `RESTRICTED_BIZ_INITIATED_AND_USER_INITIATED_CALLING`

`reason`_(string)_ – descrição da restrição

`expiration`_(Número inteiro)_ – O horário UNIX de expiração da restrição no fuso horário UTC

### Resposta de erro

Veja os problemas que podem ocorrer:

-   Erros de permissão/autorização

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Configurações de ligação no Gerenciador do WhatsApp

Também é possível controlar as configurações de ligação por meio do [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/).

Para acessar os controles de ligação no Gerenciador do WhatsApp:

-   Clique no painel **Ferramentas de conta** > **Números de telefone**-   Clique no ícone de engrenagem ao lado do número de telefone que você está usando para fazer a ligação-   Clique na aba **Ligações**

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/560806366_1339318237926827_2957205066303057693_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=uM_keCAA4D8Q7kNvwElolCS&_nc_oc=Adm00IjR51MiKF_h5dmG1OTvcck9VEymbauT8If01_K_3Ey3z9KUMAy7n8NNNjaBog4&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=Ns6czkq3hj9nkiszPX0KIQ&oh=00_Afl-4v4b7ykEXEEun5I6OJfuMOUfAKHPsSTtyN7ywak2qA&oe=69610D7A)

## Configurar e usar sinais de ligação por meio do Protocolo de Iniciação de Sessão (SIP)

O Protocolo de Iniciação de Sessão (SIP) é um protocolo de sinalização usado para iniciar, manter, modificar e encerrar sessões de comunicação em tempo real entre dois ou mais pontos de extremidade. É possível enviar e receber sinais de ligação usando o SIP em vez dos pontos de extremidade da Graph API.

[Saiba mais sobre como usar e configurar o SIP](/documentation/business-messaging/whatsapp/calling/sip)

## Webhooks de atualização das configurações

É possível se inscrever em um novo campo de assinatura de webhook `account_settings_update` para receber notificações sobre atualizações nas configurações de número de telefone.

-   Você receberá uma notificação mesmo para as suas próprias atualizações.-   No momento, apenas alterações nas configurações de ligação são compatíveis. Abaixo do objeto de ligação, apenas as alterações no subconjunto de campos são observadas: status, call\_icon\_visibility, callback\_permission\_status, sip.status, srtp\_key\_exchange\_protocol.

### Etapas para começar

-   [Configure a assinatura de webhook](/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks) e assine o campo `account_settings_update`.-   O mesmo app deve estar inscrito na conta do WhatsApp Business do seu número de telefone comercial.-   O app precisa ter permissão `whatsapp_business_management` para receber webhooks. Ao usar o token de acesso para o mesmo app, se você conseguir [obter as configurações](/documentation/business-messaging/whatsapp/calling/call-settings#get-phone-number-calling-settings) com sucesso, seu app também poderá receber webhooks.

### Carga do webhook

```
{
    "object": "whatsapp_business_account",
    "entry": [
        {
            "id": "whatsapp-business-account-id",
            "changes": [
                {
                    "value": {
                        "messaging_product": "whatsapp",
                        "timestamp": "1671644824",
                        "type": "[phone_number_settings]",
                        "phone_number_settings": {
                            "phone_number_id": "phone-number-id",
                            "calling": {
                                "status": "ENABLED",
                                "call_icon_visibility": "DEFAULT",
                                "callback_permission_status": "ENABLED",
                                "call_hours": {
                                    "status": "ENABLED",
                                    "timezone_id": "[REDACTED]",
                                    "weekly_operating_hours": [
                                        {
                                            "day_of_week": "MONDAY",
                                            "open_time": "0400",
                                            "close_time": "1020"
                                        },
                                        {
                                            "day_of_week": "TUESDAY",
                                            "open_time": "0108",
                                            "close_time": "1020"
                                        }
                                    ],
                                    "holiday_schedule": [
                                        {
                                            "date": "2026-01-01",
                                            "start_time": "0000",
                                            "end_time": "2359"
                                        }
                                    ]
                                },
                                "sip": {
                                    "status": "ENABLED",
                                    "servers": [
                                        {
                                            "hostname": "[REDACTED]",
                                            "port": SIP_SERVER_PORT
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "field": "account_settings_update"
                }
            ]
        }
    ]
}
```

### Valores de webhook

Espaço reservado

Descrição

`messaging_product`

_String_

Sempre `whatsapp` por enquanto

`timestamp`

_Número inteiro_

O horário em que as configurações foram atualizadas

`type`

_String_

O tipo de alteração. No momento, apenas `PHONE_NUMBER_SETTINGS`

`phone_number_settings`

_Objeto_

Este campo está presente se o tipo for `PHONE_NUMBER_SETTINGS`. No momento, apenas o subcampo `calling` é compatível.

`phone_number_settings.phone_number_id`

_String_

A identificação do número de telefone, com configurações atualizadas

`phone_number_settings.calling`

_Objeto_

Ele é exibido apenas se os campos relacionados a `calling` forem atualizados. Caso contrário, o valor será nulo. Quando presente, a carga é a mesma que a da [API de obtenção de configurações](/documentation/business-messaging/whatsapp/calling/call-settings#get-phone-number-calling-settings)

## Restrições de ligação para feedback do usuário

Se as suas chamadas receberem um alto índice de feedback negativo dos usuários (por exemplo, bloqueios e denúncias), a funcionalidade de ligação no seu número de telefone poderá ser restrita.

### Aviso antecipado

Você receberá uma notificação quando o número de telefone comercial estiver prestes a ser pausado como um aviso antecipado. Os avisos de notificações antecipadas serão comunicados pelos canais abaixo

#### Email

Essas mensagens são enviados aos endereços de e-mail de todos os usuários e administradores associados à empresa. Se você não tiver recebido a mensagem, confirme qual e-mail foi designado como e-mail de contato do app e verifique se ele está ativo, se pode receber novas mensagens e se não sinaliza a mensagem como lixo eletrônico ou spam.

#### Webhook

Um webhook será enviado no campo `account_update`:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "0",      "time": 1623862418,      "changes": [        {          "field": "account_update",          "value": {            "phone_number": "PN",            "event": "ACCOUNT_VIOLATION",            "violation_info": {               "violation_type": "LOW_CALLING_QUALITY",            }          }        }      ]    }  ]}
```

Consulte [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) para ver mais informações sobre o webhook.

### Pausa na funcionalidade de ligação

Quando o feedback negativo atingir um limite, a API de Nuvem restringirá automaticamente a funcionalidade de ligação do seu número de telefone por um período de 7 dias. Durante a pausa, o número de telefone não poderá fazer o seguinte

-   _Fazer ligações iniciadas pela empresa para usuários_-   _Receber ligações de usuários_-   _Exibir o ícone de ligação_-   _Enviar pedidos de permissão de ligação_-   _Alterar as configurações de ligação para o número desta conta_

Depois que o número de telefone for pausado, as notificações serão comunicadas por meio dos canais abaixo.

#### Email

Essas mensagens são enviados aos endereços de e-mail de todos os usuários e administradores associados à empresa. Se você não tiver recebido a mensagem, confirme qual e-mail foi designado como e-mail de contato do app e verifique se ele está ativo, se pode receber novas mensagens e se não sinaliza a mensagem como lixo eletrônico ou spam.

#### Webhook

Um webhook será enviado no campo `account_update`:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "0",      "time": 1641848059,      "changes": [        {          "field": "account_update",          "value": {            "phone_number": "PN",            "event": "ACCOUNT_RESTRICTION",            "violation_info": {               "violation_type": "LOW_CALLING_QUALITY",            },            "restriction_info": [              {                "restriction_type": "RESTRICTED_BIZ_INITIATED_AND_USER_INITIATED_CALLING",                "expiration": 1641848057              }            ]          }        }      ]    }  ]}
```

Consulte [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) para ver mais informações sobre o webhook.

## Restrições de ligação para baixas taxas de ligações atendidas

Quando a ligação está habilitada no seu número de telefone comercial, você deve atender às ligações recebidas dos usuários.

Se um número considerável de ligações feitas para seu número de telefone comercial habilitado não for atendido, você receberá uma notificação e deverá fazer algo para mudar.

### O que acontece se você não atende às ligações

-   **Aviso por email:** primeiro, enviaremos uma notificação por e-mail e forneceremos opções para você alterar a forma de atender às ligações recebidas.-   **As ligações ficarão restritas no número de telefone comercial:** o botão de ligação ficará oculto para os usuários.

### Como mitigar a situação

#### _Se você receber um aviso_  

-   **Continue permitindo que os usuários façam ligações:**
    -   Identifique e resolva o problema que está impedindo o atendimento das ligações e verifique se você tem recursos suficientes para lidar com o volume esperado de ligações.-   **Ocultar botões de ligação para ligações iniciadas pelo usuário:**
    -   Para isso, fale com seu parceiro ou acesse [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/overview/) > Ferramentas de conta > Números de telefone > selecione Número de telefone \[número de telefone do WhatsApp\] > Ligações > desative a opção Exibir botões de ligação.-   **Desativar as ligações:**
    -   Para isso, fale com seu parceiro ou acesse [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/overview/) > Ferramentas de conta > Números de telefone > selecione Número de telefone \[número de telefone do WhatsApp\] > Ligações > desative Permitir ligações de voz.

#### _Se o botão de ligação estiver oculto para o número de telefone comercial_  

-   **Exibir novamente os botões de ligação:**
    -   Identifique e resolva o problema que está impedindo o atendimento das ligações e verifique se você tem recursos suficientes para lidar com o volume esperado de ligações.-   Depois, mostre os botões de ligação. Para isso, trabalhe com seu parceiro ou acesse [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/overview/) > Ferramentas de conta > Números de telefone > selecione Número de telefone \[número de telefone do WhatsApp\] > Ligações e ative a opção Exibir botões de ligação.-   **Desativar as ligações:**
    -   Para isso, fale com seu parceiro ou acesse [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/overview/) > Ferramentas de conta > Números de telefone > selecione Número de telefone \[número de telefone do WhatsApp\] > Ligações > desative Permitir ligações de voz.

### Webhooks

#### Webhook de aviso

```
[  {    "object": "whatsapp_business_account",    "entry": [      {        "id": "0",        "time": 1641848059,        "changes": [          {            "field": "account_update",            "value": {              "phone_number": "16505552771",              "event": "ACCOUNT_VIOLATION",              "violation_info": {                "violation_type": "USER_INITIATED_CALLS_LOW_PICKUP_RATE",                "remediation": "Please identify and address the cause of user-initiated calls not being picked up and make sure the business is properly resourced to handle expected call volumes."              }            }          }        ]      }    ]  }]
```

#### Webhook de aplicação

```
[  {    "object": "whatsapp_business_account",    "entry": [      {        "id": "0",        "time": 1641848059,        "changes": [          {            "field": "account_update",            "value": {              "phone_number": "16505552771",              "event": "ACCOUNT_RESTRICTION",              "restriction_info": [                {                  "restriction_type": "RESTRICTED_USER_INITIATED_CALLING_CALL_BUTTON_HIDDEN",                  "remediation": "The call button has been hidden due to low pickup rates. Please identify and address the cause of user-initiated calls not being picked up.  Next, display the calling buttons by either working with your partner or going to WhatsApp Manager > Account tools > Phone numbers > select Phone number > Calls > toggle on Display call buttons"                }              ]            }          }        ]      }    ]  }]
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)