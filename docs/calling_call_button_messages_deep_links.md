<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links -->
<!-- Scraped: 2025-12-20T17:41:13.995Z -->

# Mensagens do botão Ligar e deep links

Updated: 14 de nov de 2025

## Visão geral

Depois de implementar os recursos de ligação da API de Nuvem, você tem duas opções principais para aumentar o reconhecimento entre os clientes:

-   Enviar uma mensagem com um botão Ligar do WhatsApp-   Incorporar um deep link de ligação às plataformas da sua marca (site, app etc.)

## Enviar mensagem interativa com um botão Ligar do WhatsApp

Use esse ponto de extremidade para enviar uma mensagem interativa em formato livre com um botão de ligação do WhatsApp durante uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) ou uma [janela de conversa aberta](/documentation/business-messaging/whatsapp/pricing#opening-conversations).

Quando um usuário do WhatsApp clica no botão Ligar, uma ligação do WhatsApp é iniciada para o número comercial que enviou a mensagem.

Um [webhook de status de mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) padrão será enviado em resposta a essa mensagem.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561384673_1339318434593474_5721045063886655968_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=8KRO_CFQ1J8Q7kNvwGz_AqP&_nc_oc=AdkTM4qxiWZN30zDklq-FXg5Y6mch1wk6ODc4z3vc1OzAS7DOiE0sRBvW50Z3ymYHmU&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=miQghrALnpRSSNGAIUa74w&oh=00_Afls2BhKFmKc0QM4Gas-r_aBkTpD_mWKnQf7NG3m4il_vA&oe=69611EF9)

  
  

#### Sintaxe da solicitação

```
POST <PHONE_NUMBER_ID>/messages
```

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial do qual você está enviando mensagens.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

`+12784358810`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "14085551234",
  "type": "interactive",
  "interactive" : {
    "type" : "voice_call",
    "body" : {
      "text": "You can call us on WhatsApp now for faster service!"
    },
    "action": {
      "name": "voice_call",
      "parameters": {
        "display_text": "Call on WhatsApp",
        "ttl_minutes": 100,
        "payload": "payload data"
      }
    }
  }
}
```

#### Parâmetros do corpo

[Saiba mais sobre como enviar mensagens interativas em formato livre](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

Parâmetro

Descrição

Exemplo de valor

`to`

_Número inteiro_

**Obrigatório**

  
O número de telefone do usuário do WhatsApp que está recebendo a mensagem.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api)

`“17863476655”`

`type`

_String_

**Obrigatório**

  
O tipo de mensagem interativa que você está enviando.

Nesse caso, você está enviando um `voice_call`.

[Saiba mais sobre mensagens interativas](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

`“voice_call”`

`action`

_String_

**Obrigatório**

  
A ação da mensagem interativa.

Precisa ser `voice_call`.

`"voice_call"`

`parameters`

_Objeto JSON_

**Opcional**

  

Parâmetros opcionais para o botão Ligar do WhatsApp enviado ao usuário.

Contém três valores: `display_text`, `ttl_minutes` e `payload`

`display_text` – (_String_) **Opcional**

O texto exibido no botão Ligar do WhatsApp enviado ao usuário.

O padrão é "Ligar agora"

Comprimento máximo: 20 caracteres

`ttl_minutes` – (_Número inteiro_) **Opcional**

Tempo de validade para o botão de CTA em minutos.

Deve ser entre 1 e 43.200 (30 dias)

O valor padrão é 10.080 (7 dias)

`payload` – (_String_) **Opcional**

Uma string aleatória, útil para rastreamento.

Qualquer app inscrito no campo de webhook `calls` na conta do WhatsApp Business pode obter esta string, pois ela está incluída nas cargas de webhook `connect` e `terminate` no campo `cta_payload`.

A API de Nuvem não processa esse campo; ela apenas o retorna como parte dos webhooks.

Máximo de 512 caracteres.

A carga está disponível apenas para clientes do WhatsApp a partir da versão 2.25.27.

```
"parameters": {
"display_text": "Call on WhatsApp",
"ttl_minutes": 100,
"payload": "payload data"
}
```

#### Resposta de sucesso

[Saiba mais sobre respostas bem-sucedidas de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   O envio dessa mensagem a versões mais antigas do app resultará em um webhook de erro com o código de erro `131026`

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Criar e enviar mensagem de modelo com botão Ligar do WhatsApp

Use estes pontos de extremidade para criar e enviar uma mensagem de modelo de botão Ligar do WhatsApp.

Depois que a mensagem de modelo de botão de ligação for criada, a empresa poderá enviar uma mensagem a um usuário do WhatsApp convidando-o para fazer a ligação.

[Saiba mais sobre como criar e gerenciar modelos de mensagem](/documentation/business-messaging/whatsapp/templates/overview)

### Criar um modelo de mensagem de botão Ligar

Use este ponto de extremidade para criar um modelo de mensagem para o botão Ligar.

#### Sintaxe da solicitação

```
POST/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```

Parâmetro

Descrição

Exemplo de valor

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

**Obrigatório**

  
A identificação da sua conta do WhatsApp Business.

[Saiba como encontrar a identificação da WABA](/documentation/business-messaging/whatsapp/whatsapp-business-accounts)

`“waba-90172398162498126”`

#### Corpo da solicitação

```
{
  "name": "<NAME>",
  "category": "<CATEGORY>",
  "language": "<LANGUAGE>",
  "components": [
    {
      "type": "BODY",
      "text": "You can call us on WhatsApp now for faster service!"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "voice_call",
          "text": "Call Now"
        },
        {
          "type": "URL",
          "text": "Contact Support",
          "url": "https://www.luckyshrub.com/support"
        }
      ]
    }
  ]
}
```

#### Parâmetros do corpo

As mensagens de modelo podem ser criadas e gerenciadas por meio da API de Nuvem ou da interface do Gerenciador do WhatsApp Business.

Ao criar o modelo de botão de ligação, configure `type` como `voice_call`.

[Saiba mais sobre como criar e gerenciar modelos de mensagem](/documentation/business-messaging/whatsapp/templates/overview)

Parâmetro

Descrição

Exemplo de valor

`type`

_String_

**Obrigatório**

  
O tipo de modelo de mensagem que você está criando.

Nesse caso, você está criando `voice_call`.

`“voice_call”`

#### Resposta de sucesso

```
{
  "id": "<ID>",
  "status": "<STATUS>",
  "category": "<CATEGORY>"
}
```

[_Saiba mais sobre respostas bem-sucedidas de mensagens_](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   Inválido `whatsapp-business-account-id`-   Erros de permissão/autorização-   Alertas de validação de componentes/estrutura do modelo

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

  

### Enviar modelo de mensagem com botão Ligar

Use este ponto de extremidade para **enviar** um modelo de mensagem do botão Ligar.

Veja a seguir um exemplo simplificado de solicitação de envio de modelo de mensagem. [Saiba mais sobre como enviar modelos de mensagem aqui.](/documentation/business-messaging/whatsapp/messages/template-messages)

#### Sintaxe da solicitação

```
POST/<PHONE_NUMBER_ID>/messages
```

Parâmetro

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_String_

**Obrigatório**

  
O número de telefone comercial do qual você está enviando a mensagem.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api)

`+18762639988`

#### Corpo da solicitação

```
{
  "to": "14085551234",
  "messaging_product": "whatsapp",
  "type": "template",
  "recipient_type": "individual",
  "template": {
    "name": "wa_voice_call",
    "language": {
      "code": "en"
    },
    "components": [
      {
        "type": "button",
        "sub_type" : "voice_call",
        "parameters": [
          {
            "type": "ttl_minutes",
            "ttl_minutes": 100
          },
          {
            "type": "payload",
            "payload": "payload data"
          }
        ]
      }
    ]
  }
}
```

#### Parâmetros de solicitação

Parâmetro

Descrição

Exemplo de valor

`ttl_minutes`

_Número inteiro_

**Opcional**

  
Tempo de validade para o botão de CTA em minutos.

Deve ser entre 1 e 43.200 (30 dias)

O valor padrão é 10.080 (7 dias)

`10800`

`payload`

_String_

**Opcional**

  
Uma string aleatória, útil para rastreamento.

Qualquer app inscrito no campo de webhook `calls` na conta do WhatsApp Business pode obter esta string, pois ela está incluída nas cargas de webhook `connect` e `terminate` no campo `cta_payload`.

A API de Nuvem não processa esse campo; ela apenas o retorna como parte dos webhooks.

Máximo de 512 caracteres.

A carga está disponível apenas para clientes do WhatsApp a partir da versão 2.25.27.

`payload data`

#### Resposta de sucesso

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/566207608_1339317967926854_2361800073068017276_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=S2A6Ve7iTSUQ7kNvwF23CKG&_nc_oc=AdkNAV4n3iNk-pO6OrQjVAXgNjjOd0FYtlukpxDGWaXPE_mzJfbdHzEuwfvt_Yro_lY&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=miQghrALnpRSSNGAIUa74w&oh=00_AfnN0jCtq50yU72noi4XS2MO9EpUZxyojp_qAPaZIYIRVg&oe=69613953)

[Saiba mais sobre respostas bem-sucedidas de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

## Deep links da ligação

Os deep links da ligação são hiperlinks que levam os usuários do WhatsApp a ligar para a sua empresa.

O processo para criar um deep link para ligação é semelhante ao de um [deep link para conversa](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F5913398998672934%2F%3Flocale%3Den_US&h=AT06cDnmcMi83mPXdP06RdEBIDq1P4yEMDPPDzjc-HCM9fjQioksEm7T_7mPZA21CpdbqAFkXrlJYGw_iLKZ9JB_DHKretwgzK3IlIaJti3UOIDfTblp3KvioNUNsI1OH9CEogIE0Tse6obLzmnhQv0-PqY), exceto pelo formato do deep link para ligação, que é `wa.me/call/<BUSINESS_PHONE_NUMBER>`.

Não há suporte para deep links de clientes do WhatsApp para computador.

### Incorporar deep links de ligação

É possível usar deep links de ligação para divulgar as ligações do WhatsApp para sua empresa

Use esses links em qualquer lugar onde a chamada possa ser útil, como seu site, app principal ou mesmo como um QR code para compartilhamento.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/560548572_1339317974593520_7716453845465534771_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=3Y8DgUazcJsQ7kNvwGdT7Zs&_nc_oc=AdkAYR4HSvFY6WPix2dkcch7hxDbevtCgclJOotHOVCm8u5RH1c0GSVP-lDPoTY62tE&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=miQghrALnpRSSNGAIUa74w&oh=00_AfngnAjg9RtvGXH14PcITnD2g9Re7B8Yg418WHq9awq0nw&oe=696117BA)

### Enviar deep links de ligação

Também é possível enviar mensagens a usuários do WhatsApp com um deep link de ligação.

Como os deep links podem ser criados por número de telefone comercial, você pode usar deep links de ligação para solicitar aos usuários do WhatsApp que entrem em contato com um número diferente com voz habilitada.

O formato `wa.me/call/<BUSINESS_PHONE_NUMBER>` é fácil de copiar, colar e enviar, além de não exigir que você crie um modelo no Gerenciador de Negócios.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561465638_1339317964593521_4488293728274608640_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=88-KUs7ggaUQ7kNvwFsv43K&_nc_oc=AdmFJbFPvvQCIOeLCEYNxf3eEEJHWkFfXHqhjyregG6jDdlOZvjyGU2pmorVanNsdnM&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=miQghrALnpRSSNGAIUa74w&oh=00_AfkXRi6LrtXoS3AdQpxpoJtRKSfHqvrRULNQ-6ItilwWmw&oe=6961136B)

### Enviar dados de carga em deep link de ligação

Também é possível enviar uma carga com o deep link. É possível usar a string de consulta `biz_payload` ao enviar o deep link da chamada para qualquer usuário (`wa.me/call/<BUSINESS_PHONE_NUMBER>?biz_payload=payload`).

Quando um usuário faz uma ligação usando o deep link fornecido com `biz_payload`, qualquer app inscrito no campo de webhook `calls` na conta do WhatsApp Business pode obter essa string, pois ela está incluída nas cargas de webhook `connect` e `terminate` no campo `deeplink_payload`.

A carga no deep link de ligação está disponível apenas para clientes do WhatsApp a partir da versão 2.25.27.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)