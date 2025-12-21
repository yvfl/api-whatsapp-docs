<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls -->
<!-- Scraped: 2025-12-20T17:41:00.588Z -->

# Ligações iniciadas pelo usuário

Updated: 13 de nov de 2025

## Visão geral

A API de ligações é compatível com o recebimento de ligações feitas por usuários do WhatsApp para sua empresa.

Sua empresa determina quando as ligações podem ser recebidas ao [configurar o horário de atendimento e a indisponibilidade em feriados](/documentation/business-messaging/whatsapp/calling/call-settings#parameter-details).

**Dispositivos qualificados para o consumidor**

No momento, a API de Ligações Comerciais do WhatsApp só aceita ligações originadas do dispositivo principal do consumidor. As ligações originadas em dispositivos adicionais do consumidor serão rejeitadas.

O **dispositivo principal** é o dispositivo principal do consumidor, normalmente um celular, que detém o estado autorizado da conta do usuário. Essa opção oferece acesso total ao histórico de mensagens e às funcionalidades principais. Só é possível ter um dispositivo principal por conta de usuário por vez.

Os **dispositivos adicionais** são outros dispositivos registrados na conta do usuário que podem funcionar juntamente com o dispositivo principal. Esses exemplos incluem clientes da web, apps para computador, tablets e óculos inteligentes. Os dispositivos adicionais têm acesso a alguns ou todos os recursos principais e do histórico de mensagens, mas são limitados em comparação ao dispositivo principal. Eles podem funcionar de forma independente por um período, mas não são compatíveis com as ligações no momento.

## Pré-requisitos

Antes de começar a usar as ligações iniciadas pelo usuário:

-   [Assine](/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks) o campo de webhook **ligações**-   [Habilitar os recursos da API de Ligações no número de telefone da sua empresa](/documentation/business-messaging/whatsapp/calling/call-settings)

### Diagrama da sequência de ligações

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/564599084_1339318441260140_7419920101012680111_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=42uQanaaVdQQ7kNvwFfToI8&_nc_oc=AdkPmkMmpyZxFf-DfXeDOVzxPQrPxWCJbJJiPR6Xr5d4CgZu0RBSk8IHswnzBZxj0bk&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=QToKyMfll99DqML1irHdEg&oh=00_Afn39igwckxHtoqyMDs-ZF4qRnlwBvtbAfQugO_SFYhr9g&oe=69610BFA)

## Fluxo de ligação iniciada pelo usuário

### Parte 1: um usuário do WhatsApp liga para a empresa a partir do próprio app

Quando um usuário do WhatsApp liga para a empresa, um webhook de Conexão de ligação será disparado com um `SDP Offer`:

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "366634483210360", // WhatsApp Business Account ID associated with the business phone number
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": { // ID and display number for the business phone number placing the call (caller)
              "phone_number_id": "436666719526789",
              "display_phone_number": "13175551399",
            },
            "calls": [
              {
                "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh", // The WhatsApp call ID
                "to": "16315553601", // The WhatsApp user's phone number (callee)
                "from": "13175551399",
                "event": "connect",
                "timestamp": "1671644824",
                "session": {
                  "sdp_type": "offer",
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

### Parte 2: sua empresa aceita previamente a ligação (recomendado)

Basicamente, aceitando previamente uma ligação recebida, você permite que a conexão de mídia seja estabelecida antes de tentar enviar a mídia da ligação por meio da conexão.

Recomendamos aceitar as ligações previamente, pois isso facilita o contato mais rápido e evita [problemas de clipe de áudio](/documentation/business-messaging/whatsapp/calling/troubleshooting#audio-clipping-issue-and-solution).

Para aceitar previamente, faça uma ligação ao ponto de extremidade `POST <PHONE_NUMBER_ID>/calls` com o `call_id` do webhook anterior, `action` de `pre-accept` e `SDP Answer`:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "pre_accept",
  "session": {
     "sdp_type": "answer"
     "sdp": "<<RFC 8866 SDP>>"
  }
}
```

Se não houver erros, você receberá uma resposta bem-sucedida:

```
{
  "success" : true
}
```

### Parte 3: sua empresa aceita a ligação após a conexão do WebRTC

Depois que a conexão for estabelecida, você poderá aceitar a ligação.

Depois de aceitar a chamada, aguarde até receber uma resposta `200 OK` do ponto de extremidade. A mídia começará a fluir imediatamente, já que a conexão foi estabelecida antes de a ligação ser conectada.

Agora, você pode chamar o ponto de extremidade `POST <PHONE_NUMBER_ID>/calls` com o seguinte corpo de solicitação para aceitar a ligação:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "accept",
  "session" : {
      "sdp_type" : "answer",
      "sdp" : "<<RFC 8866 SDP>>"
   },
}
```

### Parte 4: sua empresa ou o usuário do WhatsApp encerra a ligação

Tanto a empresa quanto o usuário do WhatsApp podem encerrar a ligação a qualquer momento.

Chame o ponto de extremidade `POST <PHONE_NUMBER_ID>/calls` com o seguinte corpo de solicitação para encerrar uma nova ligação:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action" : "terminate"
}
```

Se não houver erros, você receberá uma resposta bem-sucedida:

```
{
  "success" : true
}
```

Quando a empresa ou o usuário do WhatsApp encerrar a ligação, você receberá um webhook de Encerramento de ligação:

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "366634483210360", // WhatsApp Business Account ID associated with the business phone number
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": { // ID and display number for the business phone number placing the call (caller)
              "phone_number_id": "436666719526789"
              "display_phone_number": "13175551399",

            },
            "calls": [
              {
                "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
                "to": "16315553601", // The WhatsApp user's phone number (callee)
                "from": "13175551399", // The business phone number placing the call (caller)
                "event": "terminate",
                "direction": "USER_INITIATED",
                "timestamp": "1749197480",
                "status": ["Failed", "Completed"],
                "start_time": "1671644824", // Call start UNIX timestamp
                "end_time": "1671644944", // Call end UNIX timestamp
                "duration": 480 // Call duration in seconds
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

## Pontos de extremidade para ligações iniciadas pelo usuário

### Pré-aceitar ligação

Basicamente, aceitando previamente uma ligação recebida, você permite que a conexão de mídia seja estabelecida antes de tentar enviar a mídia da ligação por meio da conexão.

Quando você chamar o ponto de extremidade de aceitação de ligação, a mídia começará a fluir imediatamente, já que a conexão já foi estabelecida.

Recomendamos aceitar as ligações previamente, pois isso facilita o contato mais rápido e evita [problemas de clipe de áudio](/documentation/business-messaging/whatsapp/calling/troubleshooting#audio-clipping-issue-and-solution).

Após o envio do [webhook de conexão de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook), a empresa terá de 30 a 60 segundos para aceitar a ligação telefônica. Se a empresa não atender, a ligação será encerrada para o usuário do WhatsApp com uma notificação "Não atendida", e você receberá um [webhook de encerramento](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook).

**Observação:** como a conexão WebRTC é estabelecida antes da ligação ao [ponto de extremidade Aceitar Ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#accept-call), processe a mídia da ligação somente após receber a resposta 200 OK.

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

Para ligações recebidas, você obtém uma identificação de ligação do [webhook de conexão de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) quando um usuário do WhatsApp inicia a ligação.

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

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT0OM8mYiMxeia4jgqVROfnCu2VzgtNUr4nDEdW8WxpIra6FOgQ-KNSOVim5Lm-Xb3K_XpjnswpkhXsWAathaNGH7FdZc6tfkEhRyo-tD1yvSoCRdHD0zwTDauW5vgxAq1rCCvOr71zXEeebGjpI9Yo4xnk).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT0OM8mYiMxeia4jgqVROfnCu2VzgtNUr4nDEdW8WxpIra6FOgQ-KNSOVim5Lm-Xb3K_XpjnswpkhXsWAathaNGH7FdZc6tfkEhRyo-tD1yvSoCRdHD0zwTDauW5vgxAq1rCCvOr71zXEeebGjpI9Yo4xnk)

[Exemplo de estruturas SDP](/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)

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

-   `call-id` inválida-   `phone-number-id` inválida-   Erro relacionado à forma de pagamento-   Informações de conexão inválidas, como sdp, ice-   Aceitar/rejeitar uma ligação que já está em andamento/concluída/com falha-   Erros de permissão/autorização

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  

### Aceitar ligação

Use este ponto de extremidade para se conectar a uma ligação fornecendo o SDP de um agente de ligação.

Após o envio do [Webhook de conexão de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook), você terá de 30 a 60 segundos para aceitar a ligação. Se a empresa não atender, a ligação será encerrada para o usuário do WhatsApp com uma notificação "Não atendida", e você receberá um [webhook de encerramento](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook).

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

Para ligações recebidas, você obtém uma identificação de ligação do [webhook de conexão de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) quando um usuário do WhatsApp inicia a ligação.

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

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT0OM8mYiMxeia4jgqVROfnCu2VzgtNUr4nDEdW8WxpIra6FOgQ-KNSOVim5Lm-Xb3K_XpjnswpkhXsWAathaNGH7FdZc6tfkEhRyo-tD1yvSoCRdHD0zwTDauW5vgxAq1rCCvOr71zXEeebGjpI9Yo4xnk).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT0OM8mYiMxeia4jgqVROfnCu2VzgtNUr4nDEdW8WxpIra6FOgQ-KNSOVim5Lm-Xb3K_XpjnswpkhXsWAathaNGH7FdZc6tfkEhRyo-tD1yvSoCRdHD0zwTDauW5vgxAq1rCCvOr71zXEeebGjpI9Yo4xnk)

[Exemplo de estruturas SDP](/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)

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

Qualquer app inscrito no campo de webhook "ligações" na sua conta do WhatsApp Business pode receber essa string, pois ela está incluída no objeto `calls` dentro da carga subsequente de [encerramento do webhook](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook).

A API de Nuvem não processa esse campo; ela apenas o retorna como parte do [webhook de encerramento](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook).

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

-   `call-id` inválida-   `phone-number-id` inválida-   Erro relacionado à forma de pagamento-   Informações de conexão inválidas, como sdp, ice etc.-   Aceitar/rejeitar uma ligação que já está em andamento/concluída/com falha-   Erros de permissão/autorização-   A resposta de SDP fornecida na aceitação não corresponde à resposta de SDP dada no [ponto de extremidade de aceitação prévia](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#pre-accept-call) para o mesmo `call-id`

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  

### Rejeitar ligação

Use este ponto de extremidade para rejeitar uma ligação.

Após o envio do [Webhook de conexão de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook), você terá de 30 a 60 segundos para aceitar a ligação. Se a empresa não atender, a ligação será encerrada para o usuário do WhatsApp com uma notificação "Não atendida", e você receberá um [webhook de encerramento](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook).

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

Para ligações recebidas, você obtém uma identificação de ligação do [webhook de conexão de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) quando um usuário do WhatsApp inicia a ligação.

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

-   `call-id` inválida-   `phone-number-id` inválido-   Aceitar/rejeitar uma ligação que já está em andamento/concluída/com falha-   Erros de permissão/autorização

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  

### Encerrar ligação

Use este ponto de extremidade para encerrar uma ligação ativa.

Isso deve ser feito mesmo que exista um pacote `RTCP BYE` no caminho da mídia. Encerrar a ligação dessa forma também garante que o preço seja mais preciso.

Quando o usuário do WhatsApp encerrar a ligação, não será necessário chamar esse ponto de extremidade. Depois que a ligação for encerrada, você receberá um [Webhook de encerramento de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook).

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

Para ligações recebidas, você obtém uma identificação de ligação do [webhook de conexão de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) quando um usuário do WhatsApp inicia a ligação.

`“wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh”`

`action`

_String_

**Opcional**

  
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

-   `call-id` inválida-   `phone-number-id` inválido-   Aceitar/rejeitar uma ligação que já está em andamento/concluída/com falha-   A rejeição da ligação está em andamento-   Erros de permissão/autorização

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Webhooks para ligações iniciadas pelo usuário

Em todos os webhooks da API de Ligações, existe um objeto `”calls”` dentro do objeto `”value”` da resposta do webhook. O objeto `”calls”` contém metadados sobre a ligação, usados para ações em cada ligação recebida pela empresa.

Para receber webhooks da API de Ligações, assine o campo de webhook de ligações.

[Saiba mais sobre webhooks da API de Nuvem aqui](/documentation/business-messaging/whatsapp/webhooks/overview)

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
                "direction": "USER_INITIATED",
                "deeplink_payload": "deeplink_payload",
                "cta_payload": "cta_payload",
                "session": {
                  "sdp_type": "offer",
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

O número para o qual a ligação é feita (recebedor da ligação)

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

`USER_INITIATED`, para chamadas iniciadas por um usuário do WhatsApp.

`deeplink_payload`

_String_

Uma string arbitrária especificada no parâmetro de consulta `biz_payload` em um deep link de chamada. Só será retornado se a ligação tiver sido iniciada a partir de um link direto com esse parâmetro.

Para saber mais, consulte [Mensagens de botão de ligação e deep links](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-payload-data-in-call-deeplink).

`cta_payload`

_String_

A string arbitrária especificada no campo `payload` em um botão de chamada. Só será retornado se a ligação tiver sido iniciada em um botão de ligação com carga.

Para saber mais, consulte [Mensagens de botão de ligação e deep links](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button).

`session`

_Objeto JSON_

**Opcional**

  
Contém o tipo de protocolo de descrição de sessão (SDP) e a descrição do idioma.

Exige dois valores:

`sdp_type` – (_String_) **Obrigatório**

"oferta", para indicar a oferta de SDP

`sdp` – (_String_) **Obrigatório**

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT0OM8mYiMxeia4jgqVROfnCu2VzgtNUr4nDEdW8WxpIra6FOgQ-KNSOVim5Lm-Xb3K_XpjnswpkhXsWAathaNGH7FdZc6tfkEhRyo-tD1yvSoCRdHD0zwTDauW5vgxAq1rCCvOr71zXEeebGjpI9Yo4xnk).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT0OM8mYiMxeia4jgqVROfnCu2VzgtNUr4nDEdW8WxpIra6FOgQ-KNSOVim5Lm-Xb3K_XpjnswpkhXsWAathaNGH7FdZc6tfkEhRyo-tD1yvSoCRdHD0zwTDauW5vgxAq1rCCvOr71zXEeebGjpI9Yo4xnk)

[Exemplo de estruturas SDP](/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)

`contacts`

_Objeto JSON_

As informações de perfil do usuário que recebe a ligação.

Contém dois valores:

`name` – o nome do perfil do WhatsApp do destinatário da ligação.

`wa_id`: a identificação do WhatsApp do destinatário da ligação.

  

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
                    "direction": "USER_INITIATED",
                    "deeplink_payload": "deeplink_payload",
                    "cta_payload": "cta_payload",
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

`USER_INITIATED`, para chamadas iniciadas por um usuário do WhatsApp.

`deeplink_payload`

_String_

Uma string arbitrária especificada no parâmetro de consulta `biz_payload` em um deep link de chamada. Só será retornado se a ligação tiver sido iniciada a partir de um link direto com esse parâmetro.

Para saber mais, consulte [Mensagens de botão de ligação e deep links](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-payload-data-in-call-deeplink).

`cta_payload`

_String_

A string arbitrária especificada no campo `payload` em um botão de chamada. Só será retornado se a ligação tiver sido iniciada em um botão de ligação com carga.

Para saber mais, consulte [Mensagens de botão de ligação e deep links](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button).

`start_time`

_Número inteiro_

O registro de data e hora Unix do início da ligação.

Presente apenas quando a ligação foi atendida pela outra parte.

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

Só será retornado se fornecido por meio de uma [solicitação de início de ligação](/documentation/business-messaging/whatsapp/calling/reference#initiate-call) ou [solicitação de aceitação de ligação](/documentation/business-messaging/whatsapp/calling/user-initiated-calls#accept-call).

`errors.code`

_Número inteiro_

O objeto `errors` é exibido apenas em ligações com falha quando há informações de erro disponíveis. O código é um dos [códigos de erro de ligação](/documentation/business-messaging/whatsapp/calling/troubleshooting#calling-error-codes).

## Suporte para DTMF (sinalização por tons múltiplos)

**O teclado de discagem fornecido pela API de Ligação só é compatível com casos de uso de DTMF.**

Não são compatíveis com ligações entre consumidores e não alteram outros comportamentos de ligação. Por exemplo, o teclado numérico não pode ser usado para discar um número e iniciar uma chamada ou mensagem no WhatsApp.

A API de Ligações Comerciais do WhatsApp é compatível com tons DTMF e permite que apps de BSP sejam compatíveis com sistemas baseados em IVR.

Os usuários do WhatsApp podem pressionar botões de tom no app do cliente, e esses tons DTMF são injetados no stream de RTP do WebRTC estabelecido como parte da conexão VoIP.

Nosso stream WebRTC está em conformidade com o [RFC 4733](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc4733&h=AT0OM8mYiMxeia4jgqVROfnCu2VzgtNUr4nDEdW8WxpIra6FOgQ-KNSOVim5Lm-Xb3K_XpjnswpkhXsWAathaNGH7FdZc6tfkEhRyo-tD1yvSoCRdHD0zwTDauW5vgxAq1rCCvOr71zXEeebGjpI9Yo4xnk) para a transferência de dígitos DTMF por meio da carga do protocolo de transmissão em tempo real (RTP, pelas iniciais em inglês).

Não há webhooks para transmitir dígitos de DTMF.

### Taxa de bits do relógio de DTMF

Somente a velocidade de clock de 8.000 é compatível com nossos SDPs. Para ligações iniciadas pelo usuário, nossa oferta de SDP inclui apenas a velocidade de clock de 8.000. Para chamadas iniciadas pela sua empresa, esperamos que a velocidade de clock do SDP seja de 8.000. Mesmo que o campo esteja ausente, usaremos a velocidade de clock de 8.000 em relação ao tipo de carga 126.

Os pacotes RTP que representam eventos de DTMF usarão a mesma base de registro de data e hora e base de número de sequência que os pacotes de áudio normais. Por isso, não é necessário se preocupar com a diferença de velocidade de clock entre pacotes de áudio e de DTMF. O [campo de duração](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc4733%23section-2.3.5&h=AT0OM8mYiMxeia4jgqVROfnCu2VzgtNUr4nDEdW8WxpIra6FOgQ-KNSOVim5Lm-Xb3K_XpjnswpkhXsWAathaNGH7FdZc6tfkEhRyo-tD1yvSoCRdHD0zwTDauW5vgxAq1rCCvOr71zXEeebGjpI9Yo4xnk) do pacote DTMF é calculado usando 8.000 unidades de clock.

Não oferecemos suporte para a velocidade de clock de 48.000 para DTMF

### Envio de dígitos DTMF no cliente do WhatsApp para consumidores

Os apps de cliente do WhatsApp foram aprimorados e agora contam com um teclado numérico para ligações com os números de telefone comerciais da API de Nuvem. O usuário do WhatsApp pode pressionar os botões no teclado numérico e enviar tons DTMF.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560054137_1339318374593480_6187515005628206867_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=w7OeIJJM4zYQ7kNvwGJIPHI&_nc_oc=AdkysuTX2TkknBTCfOA-riCbrbOX3l2SyClEx1JyOfkI8M1AbSa03ubXvRU-cLiotfY&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=QToKyMfll99DqML1irHdEg&oh=00_AfmrRTWbHmTs_0rWf4IzB3RrDVbDGccJ8cRuEw_nOC5XjQ&oe=696120FF)

## Visão geral e exemplos de estruturas SDP

O Protocolo de Descrição de Sessão (SDP) é um formato baseado em texto usado para descrever as características das sessões multimídia, como ligações de voz e de vídeo, em apps de comunicação em tempo real. O SDP fornece uma maneira padronizada de transmitir informações sobre os fluxos de mídia da sessão, incluindo o tipo de mídia, codecs, protocolos e outros parâmetros necessários para estabelecer e gerenciar a sessão.

No contexto do WebRTC, o SDP é usado para negociar os parâmetros de mídia entre remetente e destinatário, permitindo que eles cheguem a um acordo sobre os detalhes da troca de mídia.

[Ver exemplos de estruturas SDP para ligações iniciadas pelo usuário](/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)