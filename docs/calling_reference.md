<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference -->
<!-- Scraped: 2025-12-20T17:41:33.529Z -->

# Referência de API e webhook

Updated: 13 de nov de 2025

## Chamar pontos de extremidade da API

### Configurar/atualizar as configurações de ligação

Chame o ponto de extremidade de atualização das configurações do número de telefone e inclua os parâmetros específicos da API de Ligações para configurar ou atualizar as definições dessa API em um número de telefone comercial específico indicado na solicitação.

#### Sintaxe da solicitação

```
POST /<PHONE_NUMBER_ID>/settings
```

#### Parâmetros do ponto de extremidade

  

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial cujas configurações da API de Ligações estão sendo atualizadas.

`+12784358810`

#### Corpo da solicitação

```
{  "calling": {    "status": "ENABLED",    "call_icon_visibility": "DEFAULT",    "call_hours": {      "status": "ENABLED",      "timezone_id": "America/Manaus",      "weekly_operating_hours": [        {          "day_of_week": "MONDAY",          "open_time": "0400",          "close_time": "1020"        },        {          "day_of_week": "TUESDAY",          "open_time": "0108",          "close_time": "1020"        }      ],      "holiday_schedule": [        {          "date": "2026-01-01",          "start_time": "0000",          "end_time": "2359"        }      ]    },    "callback_permission_status": "ENABLED",    "sip": {      "status": "ENABLED | DISABLED (default)",      "servers": [        {          "hostname": SIP_SERVER_HOSTNAME,          "port": SIP_SERVER_PORT,          "request_uri_user_params": {            "KEY1": "VALUE1",            "KEY2": "VALUE2"          }        }      ]    }  }}
```

#### Parâmetros do corpo

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

[Veja abaixo os detalhes do comportamento de visibilidade do ícone de ligação](#configure-call-settings-parameter-details)

[Veja abaixo os detalhes do comportamento de visibilidade do ícone de ligação](#configure-call-settings-parameter-details)

`call_hours`

_Objeto JSON_

**Opcional**

  
Permite que você especifique e acione configurações para ligações recebidas com base no seu fuso horário, no horário de funcionamento da empresa e em feriados.

Todos os valores configurados anteriormente em `call_hours` serão substituídos pelos valores transmitidos no corpo da solicitação desta chamada à API.

[Veja abaixo os detalhes do comportamento do horário de atendimento](#configure-call-settings-parameter-details)

[Veja abaixo os detalhes do comportamento do horário de atendimento](#configure-call-settings-parameter-details)

`callback_permission_status`

_String_

**Opcional**

  
Ajuste a configuração para decidir se o usuário do WhatsApp receberá um pedido de permissão para ligação após ligar para sua empresa.

Observação: o pedido de permissão para ligação é acionado após uma ligação perdida ou conectada.

[Veja abaixo os detalhes do comportamento de status da permissão de retorno de ligação](#configure-call-settings-parameter-details)

`“ENABLED”`

`“DISABLED”`

`sip`

_Objeto JSON_

**Opcional**

  
Configure o sinalizador de ligação por meio do protocolo de iniciação de sinal (SIP).

**Observação: quando o SIP está habilitado, não é possível usar pontos de extremidade relacionados a ligações, e você não receberá webhooks relacionados a ligações.**

[Saiba como configurar e usar o sinalizador de ligação de SIP](/documentation/business-messaging/whatsapp/calling/sip)

```
"sip": {   "status": "ENABLED | DISABLED (default)",   "servers": [// one server per app]     {       "hostname": SIP_SERVER_HOSTNAME       "port": SIP_SERVER_PORT,       "request_uri_user_params": {         "KEY1": "VALUE1", // for cases like TGRP         "KEY2": "VALUE2",       }     }   ] }
```

#### Detalhes do parâmetro

  

##### Status da ligação

Quando o parâmetro `status` é definido como `“ENABLED”`, os recursos de ligação são habilitados para o número de telefone comercial. Os apps de cliente do WhatsApp renderizam o ícone de botão de ligação tanto na conversa comercial quanto no perfil da conversa comercial.

Quando o parâmetro `status` é definido como `“DISABLED”`, os recursos de ligação são **desabilitados**. Além disso, a conversa comercial e o perfil da conversa comercial **não exibem o ícone de botão de ligação.**

As atualizações de `status` serão aplicadas ao ícone do botão de ligação nas conversas comerciais existentes quase em tempo real quando o número de telefone comercial estiver nos contatos do usuário do WhatsApp.

Caso contrário, as atualizações são feitas em tempo real para um número limitado de usuários em conversa com a empresa e são casuais para o restante das conversas.

##### Exibição do ícone do botão de ligação

Quando os recursos da API de Ligações estão habilitados para um número comercial, você ainda pode escolher se quer mostrar o ícone do botão de ligação ou não usando o parâmetro `call_icon_visibility`. Observação: desabilitar a visibilidade do ícone do botão de ligação **não** impede que um usuário do WhatsApp faça ligações não solicitadas para sua empresa.

O comportamento das opções compatíveis é o seguinte:

`DEFAULT`

O ícone do botão de ligação será exibido na barra de menu da conversa e na página de informações da empresa, permitindo ligações não solicitadas para a empresa por usuários do WhatsApp.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560917504_1339317971260187_5308835930412534329_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=JitLUYLGCysQ7kNvwGPX0E8&_nc_oc=AdmyutZWs68kI-x-ZgIvD-dGG3y4-8rfQYVV9_ZtVuyKfSNUvIaAL7Ih-qtr_RWCvFY&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=_EpGQU3v6o46EOv8FX-t2w&oh=00_AfkjYgWh4LywyY4lSEG5_5D_tLA4spwoLBq70r3cPUij8Q&oe=69611D81)  
  
  

`DISABLE ALL`

O ícone do botão de ligação fica oculto na barra de menu da conversa e na página de informações da empresa. Além disso, todos os outros pontos de entrada externos à conversa são desabilitados. Os consumidores não podem fazer ligações não solicitadas para a empresa.

Sua empresa ainda pode [enviar mensagens interativas](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button) ou [mensagens de modelo](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#create-and-send-whatsapp-call-button-template-message) com um botão de CTA da API de Ligações.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560585020_1339317941260190_3863205212606668279_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=YOjubMCCriwQ7kNvwFzKbMC&_nc_oc=Admo1okP-nga-wQ6Cxwu966UUvyvSP2KBC71ZbgGsTarBdVWR-UQqqL1_WxMU8QQtXo&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=_EpGQU3v6o46EOv8FX-t2w&oh=00_AfkXkhrh21HgN-b4ov05NAwxa-TBT3ek3tPheG8tUYHHpg&oe=69612B04)  
  
  

##### Permissões de retorno de ligação

Para fazer uma ligação a um usuário do WhatsApp, é preciso ter permissão explícita dele. Uma forma de obter permissão para ligação é solicitá-la quando o usuário do WhatsApp liga para a empresa.

É possível configurar a interface do usuário da permissão para ligação, assim ela será exibida automaticamente no app do cliente do usuário do WhatsApp quando ele ligar para seu número comercial. O usuário pode alterar a seleção de permissão a qualquer momento.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560469128_1339318254593492_7311592232673295325_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=HS-AyP2Mt5oQ7kNvwF3fXLQ&_nc_oc=AdlFWfch6epPAvJdhoRPvgSGobhztCEKjCRgYYsmdeK1MkwEVhNa_8gkRQ26Ev7GQaY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=_EpGQU3v6o46EOv8FX-t2w&oh=00_Aflq-ZAV8rsZxPsU-7x-SF9iGzswkEnXXc1VCuvIwBKxCQ&oe=6961353A)  
  
  

#### Horário de atendimento

Com a configuração `call_hours`, é possível especificar o fuso horário, o horário de funcionamento da empresa e os feriados que serão aplicados a todas as ligações iniciadas pelo usuário.

Ao definir essa configuração, você restringe as ligações aos horários semanais disponíveis que configurar. As ligações iniciadas pelo usuário ficam indisponíveis fora do horário semanal e dos feriados que você definir.

O app do cliente do WhatsApp mostrará aos usuários a opção de conversar com a empresa ou solicitar um retorno de ligação se `callback_permission_status` for `ENABLED`. O usuário também verá o próximo horário para ligação disponível na tela de opções.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561822470_1339317924593525_4183355843280485487_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=mH4gEwcGYasQ7kNvwHOdTIx&_nc_oc=AdlWyIHoadsbWby1CVr8ZUgHyEUb9MWUCqPmCw4QIg1T7-sbvHQkXArW4w6XEANrRwI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=_EpGQU3v6o46EOv8FX-t2w&oh=00_Afnt3RZ6XfPjZorqdE9YmMPb5-wl_FGw-zLkuSuFeYzfCQ&oe=696137A7)  
  
  

```
"call_hours": {  "status": "ENABLED",  "timezone_id": "America/Manaus",  "weekly_operating_hours": [    {      "day_of_week": "MONDAY",      "open_time": "04:00",      "close_time": "10:20"    },    {      "day_of_week": "TUESDAY",      "open_time": "01:08",      "close_time": "10:20"    }  ],  "holiday_schedule": [    {      "date": "2026-01-01",      "start_time": "00:00",      "end_time": "23:59"    }  ]}
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

#### Resposta de sucesso

```
{  "success": true}
```

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   Erros de permissão/autorização-   Status inválido-   Programação inválida para `call_hours`-   O feriado fornecido em `call_hours` é uma data anterior à atual-   O fuso horário é inválido em `call_hours`-   `weekly_operating_hours` em `call_hours` não pode estar vazio-   O formato de data em `holiday_schedule` para call\_hours é inválido-   Não são permitidas mais de duas entradas na programação `weekly_operating_hours` em `call_hours`-   Não é permitida a sobreposição de programação em `call_hours`

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  
  
  

### Obter as configurações de ligação do número de telefone

Chame o ponto de extremidade de obtenção das configurações do número de telefone para recuperar as configurações da API de Ligações em um número de telefone comercial individual indicado na solicitação.

Esse ponto de extremidade pode retornar informações sobre as configurações de outros recursos da API de Nuvem.

#### Sintaxe da solicitação

```
POST /<PHONE_NUMBER_ID>/settings
```

#### Parâmetros do ponto de extremidade

  

Parâmetro

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial cujas configurações da API de Ligações estão sendo obtidas.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

#### Permissão do app necessária

`whatsapp_business_management`: é necessário ter acesso avançado para atualizar o uso da API para clientes empresariais finais

#### Corpo da resposta

```
{  "calling": {    "status": "ENABLED",    "call_icon_visibility": "DEFAULT",    "call_hours": {      "status": "ENABLED",      "timezone_id": "America/Manaus",      "weekly_operating_hours": [        {          "day_of_week": "MONDAY",          "open_time": "0400",          "close_time": "1020"        },        {          "day_of_week": "TUESDAY",          "open_time": "0108",          "close_time": "1020"        }      ],      "holiday_schedule": [        {          "date": "2026-01-01",          "start_time": "0000",          "end_time": "2359"        }      ]    },    "callback_permission_status": "ENABLED",    "sip": {      "status": "ENABLED | DISABLED (default)",      "servers": [        {          "hostname": SIP_SERVER_HOSTNAME,          "port": SIP_SERVER_PORT,          "request_uri_user_params": {            "KEY1": "VALUE1",            "KEY2": "VALUE2"          }        }      ]    }  }}
```

#### Incluir senha de usuário do SIP

Como opção, você pode incluir credenciais de usuário do SIP no corpo da resposta. Para isso, basta adicionar o parâmetro de consulta de credenciais do SIP na solicitação POST:

```
POST /<PHONE_NUMBER_ID>/settings?include_sip_credentials=true
```

A resposta será semelhante a esta:

```
{  "calling": {    ... // other calling api settings    "sip": {      "status": "ENABLED",      "servers": [        {          "hostname": "sip.example.com",          "sip_user_password": "{SIP_USER_PASSWORD}"        }      ]    }  }}
```

#### Detalhes da resposta

O ponto de extremidade `GET /<PHONE_NUMBER_ID>/settings` retorna as configurações da API de Ligações, além de outras informações de configuração do seu número de telefone comercial do WhatsApp.

[Saiba mais sobre as configurações da API de Ligações e os respectivos valores](/documentation/business-messaging/whatsapp/calling/call-settings#body-parameters)

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   Erros de permissão/autorização

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

### Aceitar ligações previamente

Basicamente, aceitando previamente uma ligação recebida, você permite que a conexão de mídia seja estabelecida antes de tentar enviar a mídia da ligação por meio da conexão.

Quando você chamar o ponto de extremidade de aceitação de ligação, a mídia começará a fluir imediatamente, já que a conexão já foi estabelecida.

Recomendamos aceitar as ligações previamente, pois isso facilita o contato mais rápido e evita [problemas de clipe de áudio](/documentation/business-messaging/whatsapp/calling/troubleshooting#audio-clipping-issue-and-solution).

Após o envio do [webhook de conexão de ligação](/#call-connect-webhook), a empresa terá de 30 a 60 segundos para aceitar a ligação telefônica. Se a empresa não atender, a ligação será encerrada para o usuário do WhatsApp com uma notificação "Não atendida", e você receberá um [webhook de encerramento](/#call-terminate-webhook).

**Observação:** como a conexão WebRTC é estabelecida antes da ligação ao [ponto de extremidade Aceitar Ligação](/#accept-call), processe a mídia da ligação somente após receber a resposta 200 OK.

Se o fluxo de mídia da ligação começar muito cedo, a pessoa que está ligando não ouvirá as primeiras palavras. Se o fluxo de mídia da ligação começar muito tarde, a pessoa que está ligando não ouvirá nada.

#### Sintaxe da solicitação

```
POST <PHONE_NUMBER_ID/calls
```

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial do qual você está usando os recursos da API de Ligações.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "pre_accept",
  "session" : {
      "sdp_type" : "answer",
      "sdp" : "<<RFC 8866 SDP>>"
   }
}
```

#### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`call_id`

_String_

**Obrigatório**

  
O ID da ligação telefônica.

Para ligações recebidas, você obtém uma identificação de ligação do [webhook de conexão de ligação](/#call-connect-webhook) quando um usuário do WhatsApp inicia a ligação.

`“wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh”`

`action`

_String_

**Opcional**

  
A ação sendo realizada na ligação em questão.

Os valores podem ser `connect` | `pre_accept` | `accept` | `reject` | `terminate`

`“pre_accept”`

`session`

_Objeto JSON_

**Opcional**

  
Contém o tipo de protocolo de descrição de sessão (SDP) e a descrição do idioma.

Exige dois valores:

`sdp_type` – (_String_) **Obrigatório**

"oferta", para indicar a oferta de SDP

`sdp` – (_String_) **Obrigatório**

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT3G1PDlCyqFbV34w6YnoDjeRd0oO0qH7x-c0NKTRYAk0TFNOUJ8UFhCqQ7Ly2GvucDD3eD8uOd-Ysl2FXX0YGAtMcdhqgzq9uyG3zUxCHE1AynC8KCSegvC7WThNDUKrngJIQ45hclXKn-dm5bBMfVwwzo).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT3G1PDlCyqFbV34w6YnoDjeRd0oO0qH7x-c0NKTRYAk0TFNOUJ8UFhCqQ7Ly2GvucDD3eD8uOd-Ysl2FXX0YGAtMcdhqgzq9uyG3zUxCHE1AynC8KCSegvC7WThNDUKrngJIQ45hclXKn-dm5bBMfVwwzo)

[Exemplo de estruturas SDP](/#sdp-overview-and-sample-sdp-structures)

```
"session" :
{
"sdp_type" : "offer",
"sdp" : "<<RFC 8866 SDP>>"
}
```

#### Resposta de sucesso

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   `call-id` inválida-   `phone-number-id` inválido-   Erro relacionado à forma de pagamento-   Informações de conexão inválidas, como sdp, ice-   Aceitar/rejeitar uma ligação que já está em andamento/concluída/com falha-   Erros de permissão/autorização

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  
  
  

### Aceitar ligação

Use este ponto de extremidade para se conectar a uma ligação fornecendo o SDP de um agente de ligação.

Após o envio do [Webhook de conexão de ligação](/#call-connect-webhook), você terá de 30 a 60 segundos para aceitar a ligação. Se a empresa não atender, a ligação será encerrada para o usuário do WhatsApp com uma notificação "Não atendida", e você receberá um [webhook de encerramento](/#call-terminate-webhook).

#### Sintaxe da solicitação

```
POST <PHONE_NUMBER_ID/calls
```

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial do qual você está usando os recursos da API de Ligações.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "accept",
  "session" : {
      "sdp_type" : "answer",
      "sdp" : "<<RFC 8866 SDP>>"
   },
   "biz_opaque_callback_data": "random_string",
  }
}
```

#### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`call_id`

_String_

**Obrigatório**

  
O ID da ligação telefônica.

Para ligações recebidas, você obtém uma identificação de ligação do [webhook de conexão de ligação](/#call-connect-webhook) quando um usuário do WhatsApp inicia a ligação.

`“wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh”`

`action`

_String_

**Opcional**

  
A ação sendo realizada na ligação em questão.

Os valores podem ser `connect` | `pre_accept` | `accept` | `reject` | `terminate`

`“accept”`

`session`

_Objeto JSON_

**Opcional**

  
Contém o tipo de protocolo de descrição de sessão (SDP) e a descrição do idioma.

Exige dois valores:

`sdp_type` – (_String_) **Obrigatório**

"oferta", para indicar a oferta de SDP

`sdp` – (_String_) **Obrigatório**

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT3G1PDlCyqFbV34w6YnoDjeRd0oO0qH7x-c0NKTRYAk0TFNOUJ8UFhCqQ7Ly2GvucDD3eD8uOd-Ysl2FXX0YGAtMcdhqgzq9uyG3zUxCHE1AynC8KCSegvC7WThNDUKrngJIQ45hclXKn-dm5bBMfVwwzo).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT3G1PDlCyqFbV34w6YnoDjeRd0oO0qH7x-c0NKTRYAk0TFNOUJ8UFhCqQ7Ly2GvucDD3eD8uOd-Ysl2FXX0YGAtMcdhqgzq9uyG3zUxCHE1AynC8KCSegvC7WThNDUKrngJIQ45hclXKn-dm5bBMfVwwzo)

[Exemplo de estruturas SDP](/#sdp-overview-and-sample-sdp-structures)

```
"session" :
{
"sdp_type" : "offer",
"sdp" : "<<RFC 8866 SDP>>"
}
```

`biz_opaque_callback_data`

_String_

**Opcional**

  
Uma string arbitrária que você pode incluir e que é útil para rastreamento e registro.

Qualquer app inscrito no campo de webhook "ligações" na sua conta do WhatsApp Business pode receber essa string, pois ela está incluída no objeto `calls` dentro da carga subsequente do [webhook de encerramento](#call-terminate-webhook).

A API de Nuvem não processa esse campo; ela apenas o retorna como parte do [Webhook de encerramento](#call-terminate-webhook).

Máximo de 512 caracteres

`“8huas8d80nn”`

#### Resposta de sucesso

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   `call-id` inválida-   `phone-number-id` inválido-   Erro relacionado à forma de pagamento-   Informações de conexão inválidas, como sdp, ice etc.-   Aceitar/rejeitar uma ligação que já está em andamento/concluída/com falha-   Erros de permissão/autorização-   A resposta de SDP fornecida na aceitação não corresponde à resposta de SDP dada no [ponto de extremidade de aceitação prévia](/#pre-accept-call) para o mesmo `call-id`

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  
  
  

### Rejeitar ligação

Use este ponto de extremidade para rejeitar uma ligação.

Após o envio do [webhook de conexão de ligação](/#call-connect-webhook), você terá de 30 a 60 segundos para aceitar a ligação. Se a empresa não atender, a ligação será encerrada para o usuário do WhatsApp com uma notificação "Não atendida", e você receberá um [webhook de encerramento](/#call-terminate-webhook).

#### Sintaxe da solicitação

```
POST <PHONE_NUMBER_ID/calls
```

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial do qual você está usando os recursos da API de Ligações.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "reject"
}
```

#### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`call_id`

_String_

**Obrigatório**

  
O ID da ligação telefônica.

Para ligações recebidas, você obtém uma identificação de ligação do [webhook de conexão de ligação](/#call-connect-webhook) quando um usuário do WhatsApp inicia a ligação.

`“wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh”`

`action`

_String_

**Opcional**

  
A ação sendo realizada na ligação em questão.

Os valores podem ser `connect` | `pre_accept` | `accept` | `reject` | `terminate`

`“reject”`

#### Resposta de sucesso

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   `call-id` inválida-   `phone-number-id` inválida-   Aceitar/rejeitar uma ligação que já está em andamento/concluída/com falha-   Erros de permissão/autorização

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  
  
  

### Iniciar uma ligação

Use este ponto de extremidade para iniciar uma ligação para um usuário do WhatsApp. Para isso, basta fornecer um número de telefone e uma oferta de ligação WebRTC.

#### Sintaxe da solicitação

```
POST <PHONE_NUMBER_ID>/calls
```

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial do qual você está iniciando uma nova ligação.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "to": "14085551234",
  "action": "connect",
  "session": {
    "sdp_type": "offer",
    "sdp": "<<RFC 8866 SDP>>"
  },
  "biz_opaque_callback_data": "0fS5cePMok"
}
```

#### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`to`

_Número inteiro_

**Obrigatório**

  
O número para o qual a ligação é feita (recebedor da ligação)

`“17863476655”`

`action`

_String_

**Obrigatório**

  
A ação sendo realizada na ligação em questão.

Os valores podem ser `connect` | `pre_accept` | `accept` | `reject` | `terminate`

`“connect”`

`session`

_Objeto JSON_

**Opcional**

  
Contém o tipo de protocolo de descrição de sessão (SDP) e a descrição do idioma.

Exige dois valores:

`sdp_type` – (_String_) **Obrigatório**

"oferta", para indicar a oferta de SDP

`sdp` – (_String_) **Obrigatório**

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT3G1PDlCyqFbV34w6YnoDjeRd0oO0qH7x-c0NKTRYAk0TFNOUJ8UFhCqQ7Ly2GvucDD3eD8uOd-Ysl2FXX0YGAtMcdhqgzq9uyG3zUxCHE1AynC8KCSegvC7WThNDUKrngJIQ45hclXKn-dm5bBMfVwwzo).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT3G1PDlCyqFbV34w6YnoDjeRd0oO0qH7x-c0NKTRYAk0TFNOUJ8UFhCqQ7Ly2GvucDD3eD8uOd-Ysl2FXX0YGAtMcdhqgzq9uyG3zUxCHE1AynC8KCSegvC7WThNDUKrngJIQ45hclXKn-dm5bBMfVwwzo)

[Exemplo de estruturas SDP](/#sdp-overview-and-sample-sdp-structures)

```
"session" :
{
"sdp_type" : "offer",
"sdp" : "<<RFC 8866 SDP>>"
}
```

`biz_opaque_callback_data`

_String_

**Opcional**

  
Uma string arbitrária que você pode incluir e que é útil para rastreamento e registro.

Qualquer app inscrito no campo de webhook "ligações" na sua conta do WhatsApp Business pode receber essa string, pois ela está incluída no objeto `calls` dentro da carga subsequente do [Webhook de encerramento de ligação](/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-terminate-webhook).

A API de Nuvem não processa esse campo.

Máximo de 512 caracteres

`“0fS5cePMok”`

#### Resposta de sucesso

```
{
  "messaging_product": "whatsapp",
  "calls" : [{
     "id" : "wacid.ABGGFjFVU2AfAgo6V",
   }]
}
```

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   Inválido `phone-number-id`-   Erros de permissão/autorização-   Erros de validação de formato de solicitação, por exemplo, informações de conexão, sdp, ice-   Erros de validação do SDP

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  
  
  

### Encerrar ligação

Use este ponto de extremidade para encerrar uma ligação ativa.

Isso deve ser feito mesmo que exista um pacote `RTCP BYE` no caminho da mídia. Encerrar a ligação dessa forma também garante que o preço seja mais preciso.

Quando o usuário do WhatsApp encerrar a ligação, não será necessário chamar esse ponto de extremidade. Depois que a ligação for encerrada, você receberá um [Webhook de encerramento de ligação](/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-terminate-webhook).

#### Sintaxe da solicitação

```
POST <PHONE_NUMBER_ID/calls
```

Parâmetro

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial do qual você está encerrando uma ligação.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`18274459827`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "terminate"
}
```

#### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`call_id`

_String_

**Obrigatório**

  
O ID da ligação telefônica.

Para ligações recebidas, você obtém uma identificação de ligação do [webhook de conexão de ligação](/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-connect-webhook) quando um usuário do WhatsApp inicia a ligação.

`“wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh”`

`action`

_String_

**Obrigatório**

  
A ação sendo realizada na ligação em questão.

Os valores podem ser `connect` | `pre_accept` | `accept` | `reject` | `terminate`

`“terminate”`

#### Resposta de sucesso

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   `call-id` inválida-   `phone-number-id` inválida-   O usuário do WhatsApp já encerrou a ligação-   A rejeição da ligação já está em andamento-   Erros de permissão/autorização

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  
  
  

### Verificar o estado atual da permissão para ligações

Use este ponto de extremidade para verificar o estado da permissão para ligação entre um número comercial e um único número de telefone de usuário do WhatsApp.

#### Sintaxe da solicitação

```
GET /<PHONE_NUMBER_ID>/call_permissions?user_wa_id=<CONSUMER_WHATSAPP_ID>
```

#### Parâmetros de solicitação

Parâmetro

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_String_

**Obrigatório**

  
O número de telefone comercial para o qual você está buscando permissões.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+18762639988`

`<CONSUMER_WHATSAPP_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone do usuário do WhatsApp de quem você está solicitando permissões para ligação.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+13057765456`

#### Corpo da resposta

```
{
  "messaging_product": "whatsapp",
  "permission": {
    "status": "temporary",
    "expiration_time": 1745343479
  },
  "actions": [
    {
      "action_name": "send_call_permission_request",
      "can_perform_action": true,
      "limits": [
        {
          "time_period": "PT24H",
          "max_allowed": 1,
          "current_usage": 0,
        },
        {
          "time_period": "P7D",
          "max_allowed": 2,
          "current_usage": 1,
        }
      ]
    },
    {
      "action_name": "start_call",
      "can_perform_action": false,
      "limits": [
        {
          "time_period": "PT24H",
          "max_allowed": 5,
          "current_usage": 5,
          "limit_expiration_time": 1745622600,
        }
      ]
    }
  }
}
```

#### Parâmetros da resposta

Parâmetro

Descrição

`permission`

_Objeto JSON_

O objeto de permissão contém dois valores:

`status`_(String)_ – o status atual da permissão.

Pode ser:

-   `“no_permission”`-   `"temporary"`

`expiration`_(Número inteiro)_ – o horário Unix em que a permissão expirará no fuso horário UTC.

`actions`

_Objeto JSON_

É a lista de ações que um número de telefone comercial pode realizar para facilitar uma permissão de ligação ou uma ligação iniciada pela empresa.

As ações atuais são:

`send_call_permission_request`: representa a ação de envio de novas mensagens de solicitação de permissão de ligação para o usuário do WhatsApp.

`start_call`: representa a ação de estabelecer uma nova ligação com o usuário do WhatsApp. Estabelecer uma nova ligação indica que a ligação foi atendida pelo consumidor.

Por exemplo, se `send_call_permission_request` tiver `can_perform_action` definido como `true`, isso significa que a empresa pode enviar uma solicitação de permissão para ligação ao usuário do WhatsApp em questão.

`can_perform_action` (_Booleano_) –

uma sinalização que indica se a ação pode ser realizada agora, levando em consideração todos os limites.

`limits`

_Objeto JSON_

Uma lista de restrições com limite de tempo para determinada ação `action_name`.

Cada `action_name` tem uma ou mais restrições, dependendo do período.

Por exemplo, uma empresa só pode enviar duas solicitações de permissão em um período de 24 horas.

`limits` contém os seguintes campos:

`time_period` (_String_) – o período em que o limite se aplica, representado no formato ISO 8601.

`max_allowed` (_Número inteiro_) – o número máximo de ações permitidas no período especificado.

`current_usage` (_Número inteiro_) – o número atual de ações realizadas pela empresa no período especificado.

`limit_expiration_time` (_Número inteiro_) – o horário Unix em que o limite expirará no fuso horário UTC.

Se `current_usage` estiver abaixo do limite máximo permitido, o campo não aparecerá.

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   `phone-number-id` inválida-   Se não for possível ligar para o número de telefone do consumidor, a resposta da API será `no_permission`.-   Erros de permissão/autorização.-   O limite de volume foi atingido. É possível fazer um máximo de cinco solicitações em uma janela de um segundo à API.-   As ligações não estão habilitadas para o número de telefone comercial.

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Webhooks da API de Ligações

### Webhook de conexão de ligação

Uma notificação de webhook é enviada quase em tempo real quando uma ligação iniciada pela empresa está pronta para ser conectada ao usuário do WhatsApp (uma `SDP Answer`).

É importante destacar que o webhook contém informações necessárias para estabelecer uma conexão de chamada por meio do WebRTC.

Depois de receber o webhook de conexão de ligação, você pode aplicar a `SDP Answer` recebida no webhook à pilha de WebRTC para iniciar a conexão de mídia.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "16315553601",
              "phone_number_id": "<PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<CALLEE_NAME>"
                },
                "wa_id": "16315553602"
              }
            ],
            "calls": [
              {
                "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
                "to": "16315553601",
                "from": "16315553602",
                "event": "connect",
                "timestamp": "1671644824",
                "direction": "BUSINESS_INITIATED",
                "session": {
                  "sdp_type": "answer",
                  "sdp": "<<RFC 8866 SDP>>"
                }
              }
            ]
          },
          "field": "calls"
        }
      ]
    }
  ]
}
```

#### Valores de webhook para `"calls"`

Espaço reservado

Descrição

`id`

_String_

Uma identificação única para a ligação

`to`

_Número inteiro_

O número que está sendo chamado (recebedor da chamada)

`from`

_Número inteiro_

O número de telefone da pessoa realizando a ligação

`event`

_Número inteiro_

Evento de ligação sobre o qual esse webhook está notificando o assinante

`timestamp`

_Número inteiro_

O registro de data e hora UNIX do evento de webhook

`direction`

_String_

A direção da ligação que está sendo feita.

Pode conter:

`BUSINESS_INITIATED`, para ligações iniciadas pela empresa.

`USER_INITIATED`, para ligações iniciadas por um usuário do WhatsApp.

`session`

_Objeto JSON_

**Opcional**

  
Contém o tipo de protocolo de descrição de sessão (SDP) e a descrição do idioma.

Exige dois valores:

`sdp_type` – (_String_) **Obrigatório**

"oferta", para indicar a oferta de SDP

`sdp` – (_String_) **Obrigatório**

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT3G1PDlCyqFbV34w6YnoDjeRd0oO0qH7x-c0NKTRYAk0TFNOUJ8UFhCqQ7Ly2GvucDD3eD8uOd-Ysl2FXX0YGAtMcdhqgzq9uyG3zUxCHE1AynC8KCSegvC7WThNDUKrngJIQ45hclXKn-dm5bBMfVwwzo).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT3G1PDlCyqFbV34w6YnoDjeRd0oO0qH7x-c0NKTRYAk0TFNOUJ8UFhCqQ7Ly2GvucDD3eD8uOd-Ysl2FXX0YGAtMcdhqgzq9uyG3zUxCHE1AynC8KCSegvC7WThNDUKrngJIQ45hclXKn-dm5bBMfVwwzo)

[Exemplo de estruturas SDP](/#sdp-overview-and-sample-sdp-structures)

`contacts`

_Objeto JSON_

As informações de perfil do usuário que recebe a ligação.

Contém dois valores:

`name` – o nome do perfil do WhatsApp do destinatário da ligação.

`wa_id` – a identificação do WhatsApp do destinatário da ligação.

  
  
  

### Webhook de status da ligação

Esse webhook é enviado durante os seguintes eventos de ligações:

-   Chamando: quando o dispositivo do usuário do WhatsApp começa a tocar-   Aceita: quando o usuário do WhatsApp aceita a ligação-   Rejeitada: quando a ligação é rejeitada pelo usuário do WhatsApp

A estrutura de webhook aqui é semelhante aos webhooks de status usados para as mensagens da API de Nuvem.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
              "messaging_product": "whatsapp",
              "metadata": {
                   "display_phone_number": "16315553601",
                   "phone_number_id": "<PHONE_NUMBER_ID>",
              },
              "statuses": [{
                    "id": "wacid.ABGGFjFVU2AfAgo6V",
                    "timestamp": "1671644824",
                    "type": "call"
                    "status": "[RINGING|ACCEPTED|REJECTED]",
                    "recipient_id": "163155536021",
                    "biz_opaque_callback_data": "random_string",
               }]
          },
          "field": "calls"
        }
      ]
    }
  ]
}
```

[_Saiba mais sobre webhooks de status da API de Nuvem_](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)

#### Valores de webhook para `"statuses"`

Espaço reservado

Descrição

`id`

_String_

Uma identificação única para a ligação

`timestamp`

_Número inteiro_

O registro de data e hora Unix do evento de webhook

`recipient_id`

_Número inteiro_

O número de telefone do usuário do WhatsApp que está recebendo a ligação

`status`

_Número inteiro_

O status atual da ligação.

Valores possíveis:

`RINGING`: o usuário está recebendo uma ligação da empresa

`ACCEPTED`: a ligação iniciada pela empresa é aceita pelo usuário

`REJECTED`: a ligação iniciada pela empresa é rejeitada pelo usuário

`biz_opaque_callback_date`

_String_

Uma string arbitrária que a empresa inclui na ligação para rastreamento e registro.

Só será retornado se fornecido por meio de solicitações à [API de Iniciação de Nova Ligação](/documentation/business-messaging/whatsapp/calling/business-initiated-calls#initiate-a-new-call)

  

### Webhook de encerramento de ligação

Uma notificação de webhook é enviada sempre que a ligação é encerrada por qualquer motivo, como quando o usuário do WhatsApp desliga ou quando a empresa faz uma chamada ao ponto de extremidade `POST /<PHONE_NUMBER_ID>/calls` com uma ação de `terminate` ou `reject`.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
              "messaging_product": "whatsapp",
              "metadata": {
                   "display_phone_number": "16505553602",
                   "phone_number_id": "<PHONE_NUMBER_ID>",
              },
               "calls": [
                {
                    "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
                    "to": "16315553601",
                    "from": "16315553602",
                    "event": "terminate"
                    "direction": "BUSINESS_INITIATED",
                    "biz_opaque_callback_data": "random_string",
                    "timestamp": "1671644824",
                    "status" : [FAILED | COMPLETED],
                    "start_time" : "1671644824",
                    "end_time" : "1671644944",
                    "duration" : 120
                }
              ],
              "errors": [
                {
                    "code": INT_CODE,
                    "message": "ERROR_TITLE",
                    "href": "ERROR_HREF",
                    "error_data": {
                        "details": "ERROR_DETAILS"
                    }
                }
              ]
          },
          "field": "calls"
        }
      ]
    }
  ]
}
```

#### Valores de webhook para `"calls"`

Espaço reservado

Descrição

`id`

_String_

Uma identificação única para a ligação

`to`

_Número inteiro_

O número que está sendo chamado (recebedor da chamada)

`from`

_Número inteiro_

O número de telefone da pessoa realizando a ligação

`event`

_Número inteiro_

Evento de ligação sobre o qual esse webhook está notificando o assinante

`timestamp`

_Número inteiro_

O registro de data e hora UNIX do evento de webhook

`direction`

_String_

A direção da ligação que está sendo feita.

Pode conter:

`BUSINESS_INITIATED`, para ligações iniciadas pela empresa.

`USER_INITIATED`, para ligações iniciadas por um usuário do WhatsApp.

`start_time`

_Número inteiro_

O registro de data e hora Unix do início da ligação.

Apenas quando a chamada foi atendida pela outra parte.

`end_time`

_Número inteiro_

O registro de data e hora Unix do término da ligação.

Presente apenas quando a ligação foi atendida pela outra parte.

`duration`

_Número inteiro_

Duração da ligação em segundos.

Apenas quando a chamada foi atendida pela outra parte.

`biz_opaque_callback_date`

_String_

Uma string arbitrária que a empresa inclui na ligação para rastreamento e registro.

Só será retornado se fornecido por meio de solicitações à [Nova API de Ligação](/documentation/business-messaging/whatsapp/calling/reference#initiate-call) ou [Solicitações de aceitação de ligação](/documentation/business-messaging/whatsapp/calling/reference#accept-call).

  
  
  

### Webhook de solicitação de permissão para ligação do usuário

Esse webhook é retornado após solicitar as permissões para ligação do usuário.

O webhook muda dependendo do que o usuário faz:

-   aceita ou rejeita a solicitação-   concede permissão respondendo a uma solicitação ou ligando para a empresa

#### Exemplo de webhook

```
{
. . .

"messages": [{
    "from": "{customer_phone_number}",
    "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",
    "timestamp": "{timestamp}",
    "context": {
          "from": "{customer_phone_number}",
          "id": "wacid.gBGGFlaCmZ9plHrf2Mh-o"
    },
    "interactive": {
       "type":  "call_permission_reply",
        "call_permission_reply": {
            "response":"accept",
            "is_permanent":false,
            "expiration_timestamp": "{timestamp}",
            "response_source": "[user_action|automatic]"
       }
    }
 ],
. . .
}
```

#### Exemplo de webhook (com permissões permanentes)

```
"messages": [{
    "from": "{customer_phone_number}",
    "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",
    "timestamp": "{timestamp}",
    "context": {
          "from": "{customer_phone_number}",
          "id": "wacid.gBGGFlaCmZ9plHrf2Mh-o"
    },
    "interactive": {
       "type":  "call_permission_reply",
        "call_permission_reply": {
            "response":"accept",
            "is_permanent":false,
            "expiration_timestamp": "{timestamp}",
            "response_source": "[user_action|automatic]"
       }
    }
 ],
. . .
}
```

#### Valores de webhook

Espaço reservado

Descrição

`customer_phone_number`

_String_

O número de telefone do cliente

`context.id`

_String_

Pode ser um dos dois valores

-   A identificação da mensagem de solicitação de permissão enviada pela empresa para o número do cliente. Mostra quando uma decisão de permissão é tomada pelo usuário em resposta a uma solicitação de permissão para ligação.-   A identificação da ligação perdida feita pela empresa para o número do cliente. Mostra quando a permissão de retorno de ligação está habilitada nas configurações e o usuário faz uma ligação para a empresa.

`response`

_String_

A resposta dos usuários do WhatsApp à mensagem de solicitação de permissão para ligação.

Pode ser `accept` ou `reject`.

`expiration_timestamp`

_Número inteiro_

Tempo, em segundos, até que a permissão desta ligação expire, caso o usuário do WhatsApp a tenha aprovado.

`response_source`

_String_

A fonte da permissão

Os valores possíveis para permissões para ligação aceitas são:

-   `user_action`: o usuário aprovou ou rejeitou a permissão-   `automatic`: aprovação automática de permissão devido ao usuário do WhatsApp ter iniciado a ligação

## Visão geral e exemplos de estruturas SDP

O Protocolo de Descrição de Sessão (SDP) é um formato baseado em texto usado para descrever as características das sessões multimídia, como ligações de voz e de vídeo, em apps de comunicação em tempo real. O SDP fornece uma maneira padronizada de transmitir informações sobre os fluxos de mídia da sessão, incluindo o tipo de mídia, codecs, protocolos e outros parâmetros necessários para estabelecer e gerenciar a sessão.

No contexto do WebRTC, o SDP é usado para negociar os parâmetros de mídia entre remetente e destinatário, permitindo que eles cheguem a um acordo sobre os detalhes da troca de mídia.

### Exemplos de estruturas SDP iniciadas pela empresa

#### Exemplo de estrutura de oferta SDP

```
v=0
o=- 3626166318745852955 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0
a=extmap-allow-mixed
a=msid-semantic: WMS d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e
m=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:4g1c
a=ice-pwd:qY/Bb+jQzg5ICn6X4fhJQetk
a=ice-options:trickle
a=fingerprint:sha-256 35:47:24:24:9F:93:C4:3E:DB:37:7F:BB:ED:F8:20:B5:AD:AC:DC:35:C2:7D:67:EE:6C:35:54:DF:A6:00:5C:4A
a=setup:actpass
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=sendrecv
a=msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:63 red/48000/2
a=fmtp:63 111/111
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:126 telephone-event/8000
a=ssrc:2220762577 cname:w/zwpg3jXNiTFTdZ
a=ssrc:2220762577 msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc
```

#### Exemplo de estrutura de resposta SDP

```
v=0
o=- 741807839102053725 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0
a=extmap-allow-mixed
a=msid-semantic: WMS 798a9670-c0d6-47a8-925e-5f082ef4d8a0
a=ice-lite
m=audio 3482 UDP/TLS/RTP/SAVPF 111 9 0 8 110 126
c=IN IP4 31.13.65.130
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:2754936280 1 udp 2113937151 31.13.65.130 3482 typ host generation 0 network-cost 50 ufrag JHqAXFH4HcAY/8
a=candidate:1581496399 1 udp 2113939711 2a03:2880:f211:d1:face:b00c:0:699c 3482 typ host generation 0 network-cost 50 ufrag JHqAXFH4HcAY/8
a=ice-ufrag:JHqAXFH4HcAY/8
a=ice-pwd:dNNMmR8wUcGezvfBZOO0Qgcwl2m86GP/
a=ice-options:trickle
a=fingerprint:sha-256 9C:97:5C:4C:A9:BE:9E:2F:06:94:F5:BB:38:2C:A1:29:B5:69:B8:FA:94:10:56:1D:0B:5D:80:28:C1:FD:F0:F6
a=setup:active
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=sendrecv
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:126 telephone-event/8000
a=ssrc:3407645770 cname:bg8KQDoIk2UJa6sf
a=ssrc:3407645770 msid:798a9670-c0d6-47a8-925e-5f082ef4d8a0 audio#nuxVMf9EAJX
a=ssrc:3407645770 mslabel:798a9670-c0d6-47a8-925e-5f082ef4d8a0
a=ssrc:3407645770 label:audio#nuxVMf9EAJX
```

### Exemplo de estruturas SDP iniciadas pelo usuário

#### Exemplo de estrutura de oferta SDP

```
v=0
o=- 7602563789789945080 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS 6932bc1c-db1a-4abe-b437-0c4168be8a13
a=ice-lite
m=audio 40012 UDP/TLS/RTP/SAVPF 111 126
c=IN IP4 31.13.65.60
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:1972637320 1 udp 2113937151 31.13.65.60 40012 typ host generation 0 network-cost 50 ufrag 6k2qP1R6kBfI/2
a=candidate:1652262791 1 udp 2113939711 2a03:2880:f211:cf:face:b00c:0:6443 40012 typ host generation 0 network-cost 50 ufrag 6k2qP1R6kBfI/2
a=ice-ufrag:6k2qP1R6kBfI/2
a=ice-pwd:UApvJw3NcwFRDvIMKdM0vWCdlXah25E9
a=fingerprint:sha-256 1B:B6:6B:40:A5:0B:8C:75:0D:8C:CB:90:2F:99:74:1E:26:45:AE:AF:45:C1:51:60:8F:73:C9:2D:10:6D:8A:88
a=setup:actpass
a=mid:audio
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=sendrecv
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=ssrc:4208138518 cname:gAXq2V9TKltrnapv
a=ssrc:4208138518 msid:6932bc1c-db1a-4abe-b437-0c4168be8a13 audio#R5wfXFcdmT6
a=ssrc:4208138518 mslabel:6932bc1c-db1a-4abe-b437-0c4168be8a13
a=ssrc:4208138518 label:audio#R5wfXFcdmT6
```

#### Exemplo de estrutura de resposta SDP

```
v=0
o=- 2822644248144643933 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS eb909cf0-87f0-4358-a4c9-7861680d9431
m=audio 9 UDP/TLS/RTP/SAVPF 111 126
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:X1ho
a=ice-pwd:7fJSbV2N5qWiA5QiDKwK3vuh
a=fingerprint:sha-256 2E:35:9F:21:9E:63:72:E5:42:74:76:2D:B3:70:F7:CB:24:14:9B:14:52:71:05:48:DA:4D:67:31:09:58:2A:ED
a=setup:active
a=mid:audio
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=sendrecv
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=ssrc:330833028 cname:EDc1JutBl8rwHQc2
a=ssrc:330833028 msid:eb909cf0-87f0-4358-a4c9-7861680d9431 ea478c16-d9f7-493c-8cec-19bfac750a36
```

## Exemplo de solicitações cURL

#### Nova ligação

```
curl -i -X POST 'https://graph.facebook.com/v14.0/1234567890/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAADUMAze4GIBO1B7B.....<REPLACE_WITH_YOUR_TOKEN>' \
-d '{
   "messaging_product": "whatsapp",
   "to": "14085550000",
   "session": {
       "sdp": "v=0\r\no=- 7669997803033704573 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 3c28addc-03b7-4170-b5cd-535bfe767e75\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:6O0H\r\na=ice-pwd:TYCbtfOrBMPpfxFRgSbYnuTI\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9F:45:2C:A8:C3:C0:CC:9B:59:4F:D1:02:56:52:FA:36:00:BE:C0:79:87:B3:D9:9C:3E:BF:60:98:25:B4:26:FC\r\na=setup:active\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:3c28addc-03b7-4170-b5cd-535bfe767e75 38c455bc-3727-4129-b336-8cd2c6a68486\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:2430753100 cname:MPddPt/R2ioP4vCm\r\na=ssrc:2430753100 msid:3c28addc-03b7-4170-b5cd-535bfe767e75 38c455bc-3727-4129-b336-8cd2c6a68486\r\n",
       "sdp_type": "answer"
   }
}'
```

#### Encerrar ligação

```
curl -i -X POST 'https://graph.facebook.com/v14.0/1234567890/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAADUMAze4GIBO1B7B.....<REPLACE_WITH_YOUR_TOKEN>' \
-d '{
   "messaging_product": "whatsapp",
   "action": "terminate",
   "call_id": "wacid.HBgLMTY1MDMxMzM5NzQVAgARGCBFRjNEODRBM0Q3NDZDM0Q0QzI4MzAwQjZBRkZGODM3NhwYCzEyMjQ1NTU0NDg5FQIAAA"
}'
```

#### Aceitar ligação

```
curl -i -X POST 'https://graph.facebook.com/v14.0/1234567890/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAADUMAze4GIBO1B7B.....<REPLACE_WITH_YOUR_TOKEN>' \
-d '{
 "messaging_product": "whatsapp",
 "to": "14085550000",
 "action": "accept",
 "call_id": "wacid.HBgLMTY1MDMxMzM5NzQVAgASGCA5ODkyMDk2RkM2NUM1QTYwRkM4NjFDQzk0NkQwNDBCRRwYCzEyMjQ1NTU0NDg5FQIAAA==",
 "session": {
     "sdp": "v=0\r\no=- 7669997803033704573 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 3c28addc-03b7-4170-b5cd-535bfe767e75\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:6O0H\r\na=ice-pwd:TYCbtfOrBMPpfxFRgSbYnuTI\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9F:45:2C:A8:C3:C0:CC:9B:59:4F:D1:02:56:52:FA:36:00:BE:C0:79:87:B3:D9:9C:3E:BF:60:98:25:B4:26:FC\r\na=setup:active\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:3c28addc-03b7-4170-b5cd-535bfe767e75 38c455bc-3727-4129-b336-8cd2c6a68486\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:2430753100 cname:MPddPt/R2ioP4vCm\r\na=ssrc:2430753100 msid:3c28addc-03b7-4170-b5cd-535bfe767e75 38c455bc-3727-4129-b336-8cd2c6a68486\r\n",
     "sdp_type": "answer"
 }
}'
```

#### Nova ligação (usando o parâmetro de conexão legado)

```
curl -i -X POST 'https://graph.facebook.com/v14.0/123456789/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAADUMAze4GIBO1B7B.....<REPLACE_WITH_YOUR_TOKEN>' \
-d '{
   "messaging_product": "whatsapp",
   "to": "14085550000",
   "connection": {
       "webrtc": {
           "sdp": "{\"sdp\":\"v=0\\r\\no=- 6314352886888624490 2 IN IP4 127.0.0.1\\r\\ns=-\\r\\nt=0 0\\r\\na=group:BUNDLE 0\\r\\na=extmap-allow-mixed\\r\\na=msid-semantic: WMS ccd3f422-8d7d-49c9-936c-a152979ee4fa\\r\\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\\r\\nc=IN IP4 0.0.0.0\\r\\na=rtcp:9 IN IP4 0.0.0.0\\r\\na=ice-ufrag:/PSS\\r\\na=ice-pwd:buBIz+JlbmakiCT7JdJIq/j0\\r\\na=ice-options:trickle\\r\\na=fingerprint:sha-256 43:08:34:16:67:E3:D9:A2:F5:AA:6A:AE:03:97:C8:D5:B8:F2:4B:40:79:C8:1A:44:53:69:4B:9C:89:88:D7:22\\r\\na=setup:active\\r\\na=mid:0\\r\\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\\r\\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\\r\\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\\r\\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\\r\\na=sendrecv\\r\\na=msid:ccd3f422-8d7d-49c9-936c-a152979ee4fa 4e58b2a9-c864-4752-8f4f-23f9ced35971\\r\\na=rtcp-mux\\r\\na=rtcp-rsize\\r\\na=rtpmap:111 opus/48000/2\\r\\na=rtcp-fb:111 transport-cc\\r\\na=fmtp:111 minptime=10;useinbandfec=1\\r\\na=rtpmap:63 red/48000/2\\r\\na=fmtp:63 111/111\\r\\na=rtpmap:9 G722/8000\\r\\na=rtpmap:0 PCMU/8000\\r\\na=rtpmap:8 PCMA/8000\\r\\na=rtpmap:110 telephone-event/48000\\r\\na=rtpmap:126 telephone-event/8000\\r\\na=ssrc:3354317731 cname:zgqSj/r4rlErlW23\\r\\na=ssrc:3354317731 msid:ccd3f422-8d7d-49c9-936c-a152979ee4fa 4e58b2a9-c864-4752-8f4f-23f9ced35971\\r\\n\",\"type\":\"offer\"}"
       }
   }
}'
```

## Exemplo de webhook de conexão de ligação

#### Chamar webhook de conexão

```
{
   "entry": [
       {
           "changes": [
               {
                   "field": "calls",
                   "value": {
                       "calls": [
                           {
                               "session": {
                                   "sdp_type": "answer",
                                   "sdp": "v=0\r\no=- 8076734947255960322 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 68a296ba-41cc-41db-8edb-3ddf4dbbb483\r\na=ice-lite\r\nm=audio 3482 UDP/TLS/RTP/SAVPF 111 9 0 8 110 126\r\nc=IN IP4 31.13.65.130\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:2754936280 1 udp 2113937151 31.13.65.130 3482 typ host generation 0 network-cost 50 ufrag kv6Jn8vBmEds/8\r\na=candidate:1581496399 1 udp 2113939711 2a03:2880:f211:d1:face:b00c:0:699c 3482 typ host generation 0 network-cost 50 ufrag kv6Jn8vBmEds/8\r\na=ice-ufrag:kv6Jn8vBmEds/8\r\na=ice-pwd:OhY8sT7v6PJe3bbs0Yx2TC/oPb5oatnK\r\na=ice-options:trickle\r\na=fingerprint:sha-256 46:14:2B:31:B1:9D:AF:15:81:E2:EF:45:B1:2B:96:3D:64:0E:63:F1:CC:9A:BD:88:D6:32:8F:E9:2A:13:3A:38\r\na=setup:active\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=sendrecv\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:433528572 cname:VBDcSNi/cg1Wg6D3\r\na=ssrc:433528572 msid:68a296ba-41cc-41db-8edb-3ddf4dbbb483 audio#wx3mq6BITjB\r\na=ssrc:433528572 mslabel:68a296ba-41cc-41db-8edb-3ddf4dbbb483\r\na=ssrc:433528572 label:audio#wx3mq6BITjB\r\n"
                               },
                               "from": "15551112222",
                               "connection": {
                                   "webrtc": {
                                       "sdp": "{\"sdp\":\"v=0\\r\\no=- 8076734947255960322 2 IN IP4 127.0.0.1\\r\\ns=-\\r\\nt=0 0\\r\\na=group:BUNDLE 0\\r\\na=extmap-allow-mixed\\r\\na=msid-semantic: WMS 68a296ba-41cc-41db-8edb-3ddf4dbbb483\\r\\na=ice-lite\\r\\nm=audio 3482 UDP/TLS/RTP/SAVPF 111 9 0 8 110 126\\r\\nc=IN IP4 31.13.65.130\\r\\na=rtcp:9 IN IP4 0.0.0.0\\r\\na=candidate:2754936280 1 udp 2113937151 31.13.65.130 3482 typ host generation 0 network-cost 50 ufrag kv6Jn8vBmEds/8\\r\\na=candidate:1581496399 1 udp 2113939711 2a03:2880:f211:d1:face:b00c:0:699c 3482 typ host generation 0 network-cost 50 ufrag kv6Jn8vBmEds/8\\r\\na=ice-ufrag:kv6Jn8vBmEds/8\\r\\na=ice-pwd:OhY8sT7v6PJe3bbs0Yx2TC/oPb5oatnK\\r\\na=ice-options:trickle\\r\\na=fingerprint:sha-256 46:14:2B:31:B1:9D:AF:15:81:E2:EF:45:B1:2B:96:3D:64:0E:63:F1:CC:9A:BD:88:D6:32:8F:E9:2A:13:3A:38\\r\\na=setup:active\\r\\na=mid:0\\r\\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\\r\\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\\r\\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\\r\\na=sendrecv\\r\\na=rtcp-mux\\r\\na=rtpmap:111 opus/48000/2\\r\\na=rtcp-fb:111 transport-cc\\r\\na=fmtp:111 minptime=10;useinbandfec=1\\r\\na=rtpmap:9 G722/8000\\r\\na=rtpmap:0 PCMU/8000\\r\\na=rtpmap:8 PCMA/8000\\r\\na=rtpmap:110 telephone-event/48000\\r\\na=rtpmap:126 telephone-event/8000\\r\\na=ssrc:433528572 cname:VBDcSNi/cg1Wg6D3\\r\\na=ssrc:433528572 msid:68a296ba-41cc-41db-8edb-3ddf4dbbb483 audio#wx3mq6BITjB\\r\\na=ssrc:433528572 mslabel:68a296ba-41cc-41db-8edb-3ddf4dbbb483\\r\\na=ssrc:433528572 label:audio#wx3mq6BITjB\\r\\n\",\"type\":\"answer\"}"
                                   }
                               },
                               "id": "wacid.HBgLMTY1MDMxMzM5NzQVAgARGCAwQTJCRDYwNkEzQUNCQUVCMEFGMzYzRTYxNjMxMDdFMxwYCzE0MDg1NTUyODk5FQIAAA==",
                               "to": "16501230000",
                               "event": "connect",
                               "timestamp": "1724467313",
                               "direction": "BUSINESS_INITIATED"
                           }
                       ],
                       "metadata": {
                           "phone_number_id": "105615555715855",
                           "display_phone_number": "15551112222"
                       },
                       "messaging_product": "whatsapp"
                   }
               }
           ],
           "id": "112735964992110"
       }
   ],
   "object": "whatsapp_business_account"
}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)