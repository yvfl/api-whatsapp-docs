<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls -->
<!-- Scraped: 2025-12-20T17:40:45.821Z -->

# Ligações iniciadas pela empresa

Updated: 13 de nov de 2025

## Visão geral

A API de ligações oferece suporte para realizar ligações a usuários do WhatsApp a partir da sua empresa.

O usuário determina quando as empresas podem receber ligações ao [conceder permissões de ligação ao número de telefone comercial](/documentation/business-messaging/whatsapp/calling/user-call-permissions).

### Diagrama da sequência de ligações

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/561795972_1339317917926859_882777793042649890_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=QGXRLWxcDN0Q7kNvwGbUdnF&_nc_oc=AdnhEt1CiRxeV1cYwXmmb8yTUUb_Og2t0Y2L5ara8tEZn10QPkAdqXTWNa30PnehiGs&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=WZmQfVN2Pa5sF27N_--rOA&oh=00_AflD-LWDoRL6Fgk7p6al40XhKYWrRItiXhWu0JS6f5R3rQ&oe=6961314D) (_Clique com o botão direito do mouse na imagem e escolha "Abrir em uma nova aba" para ampliar a imagem_)

_Observação: o `ACCEPTED`geralmente, o webhook de status da ligação chega depois que a ligação é estabelecida. Ele é enviado principalmente para auditoria de eventos de ligação._

## Pré-requisitos

Antes de começar a usar as ligações iniciadas pela empresa:

-   [Assine](/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks) o campo de webhook "ligações"-   [As APIs de Ligações estão habilitadas para seu número de telefone comercial](/documentation/business-messaging/whatsapp/calling/call-settings)

Por fim, **antes de poder ligar para um usuário do WhatsApp, você deve obter a permissão dele para isso**.

[Saiba como obter as permissões de ligação de usuários do WhatsApp aqui](/documentation/business-messaging/whatsapp/calling/user-call-permissions)

## Fluxo de ligação iniciada pela empresa

### Parte 1: obter permissão para ligar ao usuário do WhatsApp

Existem duas maneiras de obter permissão para ligação do usuário do WhatsApp:

#### Envie uma mensagem de pedido de permissão para ligação

Para solicitar permissões de ligação, envie um pedido de permissão ao usuário do WhatsApp, seja como uma mensagem de formato livre durante uma janela aberta de atendimento ao cliente, seja usando uma mensagem de modelo que contenha o pedido.

-   [Saiba como enviar uma solicitação de permissão para ligação de **formato livre**](/documentation/business-messaging/whatsapp/calling/user-call-permissions#how-to-send-a-free-form-call-permission-request-message)-   [Aprenda a enviar um **modelo** de permissão para ligação](/documentation/business-messaging/whatsapp/calling/user-call-permissions#how-to-create-and-send-call-permission-request-template-messages)

#### Habilite `callback_permission_status` nas configurações de ligação

Quando `callback_permission_status` está habilitado, o usuário fornece automaticamente permissão para ligações à empresa.

[Saiba como habilitar o recurso `callback_permission_status`](/documentation/business-messaging/whatsapp/calling/call-settings#configure-update-business-phone-number-calling-settings)

#### O usuário do WhatsApp concede permissões permanentes

O usuário também pode conceder permissões permanentes para a empresa a qualquer momento por meio do próprio perfil comercial.

### Parte 2: a empresa inicia uma nova ligação para o usuário do WhatsApp

Agora que você tem a permissão do usuário do WhatsApp, é possível iniciar uma nova ligação para ele.

Agora, você pode chamar o ponto de extremidade `POST <PHONE_NUMBER_ID>/calls` com o seguinte corpo de solicitação para iniciar uma nova ligação:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "to":"12185552828", // The WhatsApp user's phone number (callee)
  "action":"connect",
  "session" : {
      "sdp_type" : "offer",
      "sdp" : "<<RFC 8866 SDP>>"
  }
}
```

Se não houver erros, você receberá uma resposta bem-sucedida:

```
{
  "messaging_product": "whatsapp",
  "calls" : [
     "id" : "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA", // The WhatsApp call ID
   ]
}
```

_Observação: a resposta com o código de erro `138006` indica que o número comercial não tem permissão de pedido para ligação deste usuário do WhatsApp._

### Parte 3: você estabelece a conexão da ligação usando o sinal do webhook

Após o início de uma nova ligação, você receberá uma resposta de webhook de conexão da ligação que contém um `SDP Answer` da API de Nuvem. Depois, a empresa aplicará o `SDP Answer` desse webhook à pilha WebRTC para iniciar a conexão de mídia.

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
                                "biz_opaque_callback_data": "TRx334DUDFTI4Mj", // Arbitrary string passed by business for tracking purposes
                                "session": {
                                    "sdp_type": "answer",
                                    "sdp": "<RFC 8866 SDP>"
                                },
                                "from": "13175551399", // The business phone number placing the call (caller)
                                "connection": {
                                    "webrtc": {
                                        "sdp": "<RFC 8866 SDP>"
                                    }
                                },
                                "id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA", // The WhatsApp call ID
                                "to": "12185552828", // The WhatsApp user's phone number (callee)
                                "event": "connect",
                                "timestamp": "1749196895",
                                "direction": "BUSINESS_INITIATED"
                            }
                        ],
                        "metadata": { // ID and display number for the business phone number placing the call (caller)
                            "phone_number_id": "436666719526789",
                            "display_phone_number": "13175551399"
                        },
                        "messaging_product": "whatsapp"
                    }
                }
            ],
            "id": "366634483210360" // WhatsApp Business Account ID associated with the business phone number
        }
    ],
    "object": "whatsapp_business_account"
},
```

Depois, você receberá um webhook de status apropriado, indicando que a ligação é `RINGING`, `ACCEPTED` ou `REJECTED`:

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "statuses": [
              {
                "id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA", // The WhatsApp call ID
                "type": "call",
                "status": "[RINGING|ACCEPTED|REJECTED]", // The current call status
                "timestamp": "1749197000",
                "recipient_id": "12185552828" // The WhatsApp user's phone number (callee)
              }
            ],
            "metadata": { // ID and display number for the business phone number placing the call (caller)
              "phone_number_id": "436666719526789",
              "display_phone_number": "13175551399"
            },
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "366634483210360" // WhatsApp Business Account ID associated with the business phone number
    }
  ],
  "object": "whatsapp_business_account"
}
```

### Parte 4: sua empresa ou o usuário do WhatsApp encerra a ligação

Você ou o usuário do WhatsApp podem encerrar a ligação a qualquer momento.

Chame o ponto de extremidade `POST <PHONE_NUMBER_ID>/calls` com o seguinte corpo de solicitação para encerrar uma nova ligação:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA", // The WhatsApp call ID
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
                "id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA",
                "to": "12185552828", // The WhatsApp user's phone number (callee)
                "from": "13175551399", // The business phone number placing the call (caller)
                "event": "terminate",
                "direction": "BUSINESS_INITIATED",
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

## Pontos de extremidade para ligações iniciadas pela empresa

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

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT3nQdKtq9X7DeoHbLDq3UbC77neT_Ww1AgG1Rd2Fo2VZDgvzdHZ4s2CY-D4nP45TZhKKGU6xDeTZKnxjeikdJh7ZfnqMvgYVpswtTLmN0rU-jI8eo-cjEB_D1IZ50VJLuh5vZBnffmC0tWkCZDqg2L9o4I).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT3nQdKtq9X7DeoHbLDq3UbC77neT_Ww1AgG1Rd2Fo2VZDgvzdHZ4s2CY-D4nP45TZhKKGU6xDeTZKnxjeikdJh7ZfnqMvgYVpswtTLmN0rU-jI8eo-cjEB_D1IZ50VJLuh5vZBnffmC0tWkCZDqg2L9o4I)

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

Qualquer app inscrito no campo de webhook "ligações" na sua conta do WhatsApp Business pode receber essa string, pois ela está incluída no objeto `calls` dentro da carga subsequente de [encerramento do webhook](/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-terminate-webhook).

A API de Nuvem não processa esse campo.

Máximo de 512 caracteres

`“0fS5cePMok”`

#### Resposta bem-sucedida

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

-   Inválido `phone-number-id`-   Erros de permissão/autorização-   Erros de validação de formato de solicitação, por exemplo, informações de conexão, sdp, ice-   Erros de validação do SDP-   Erros de restrição de ligações

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

#### Resposta bem-sucedida

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

## Webhooks para ligações iniciadas pela empresa

Em todos os webhooks da API de Ligações, existe um objeto `”calls”` dentro do objeto `”value”` da resposta do webhook. O objeto `”calls”` contém metadados sobre a ligação, usados para ações em cada ligação feita ou recebida pela empresa.

Para receber webhooks da API de Ligações, assine o campo de webhook "ligações".

[Saiba mais sobre webhooks da API de Nuvem aqui](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)

### Chamar webhook de conexão

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

As informações do SDP do dispositivo do outro lado da ligação. O SDP deve estar em conformidade com o [RFC 8866](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc8866&h=AT3nQdKtq9X7DeoHbLDq3UbC77neT_Ww1AgG1Rd2Fo2VZDgvzdHZ4s2CY-D4nP45TZhKKGU6xDeTZKnxjeikdJh7ZfnqMvgYVpswtTLmN0rU-jI8eo-cjEB_D1IZ50VJLuh5vZBnffmC0tWkCZDqg2L9o4I).

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT3nQdKtq9X7DeoHbLDq3UbC77neT_Ww1AgG1Rd2Fo2VZDgvzdHZ4s2CY-D4nP45TZhKKGU6xDeTZKnxjeikdJh7ZfnqMvgYVpswtTLmN0rU-jI8eo-cjEB_D1IZ50VJLuh5vZBnffmC0tWkCZDqg2L9o4I)

[Exemplo de estruturas SDP](/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)

`contacts`

_Objeto JSON_

As informações de perfil do usuário que recebe a ligação.

Contém dois valores:

`name` – o nome do perfil do WhatsApp do destinatário da ligação.

`wa_id` – a identificação do WhatsApp do destinatário da ligação.

  

### Webhook de status da ligação

Esse webhook é enviado durante os seguintes eventos de ligações:

-   Chamando: quando o dispositivo do usuário do WhatsApp começa a tocar-   Aceita: quando o usuário do WhatsApp aceita a ligação-   Rejeitada: quando a ligação é rejeitada pelo usuário do WhatsApp. Nesse caso, você também receberá o webhook de encerramento da ligação

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

Só será retornado se fornecido por meio de uma [solicitação à API de Início de Ligação](/documentation/business-messaging/whatsapp/calling/business-initiated-calls#initiate-call) ou [solicitação de Aceitação de Ligação](/documentation/business-messaging/whatsapp/calling/reference#accept-call)

`errors.code`

_Número inteiro_

O objeto `errors` é exibido apenas em ligações com falha quando há informações de erro disponíveis. O código é um dos [códigos de erro de ligação](/documentation/business-messaging/whatsapp/calling/troubleshooting#calling-error-codes)

## Visão geral e exemplos de estruturas SDP

O Protocolo de Descrição de Sessão (SDP) é um formato baseado em texto usado para descrever as características das sessões multimídia, como ligações de voz e de vídeo, em apps de comunicação em tempo real. O SDP fornece uma maneira padronizada de transmitir informações sobre os fluxos de mídia da sessão, incluindo o tipo de mídia, codecs, protocolos e outros parâmetros necessários para estabelecer e gerenciar a sessão.

No contexto do WebRTC, o SDP é usado para negociar os parâmetros de mídia entre remetente e destinatário, permitindo que eles cheguem a um acordo sobre os detalhes da troca de mídia.

[Ver exemplos de estruturas SDP para ligações iniciadas pela empresa](/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)