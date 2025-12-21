<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions -->
<!-- Scraped: 2025-12-20T17:40:52.691Z -->

# Obter permissões para ligação do usuário

Updated: 13 de nov de 2025

Em 3 de novembro de 2025, as permissões permanentes ficaram disponíveis. Os usuários agora podem conceder permissão contínua a uma empresa para fazer ligações. Os usuários podem analisar e alterar as permissões de ligação para uma empresa a qualquer momento no perfil comercial.

Os recursos relacionados à permissão de ligação estão disponíveis apenas em regiões onde a [ligação iniciada pela empresa está disponível](/documentation/business-messaging/whatsapp/calling#availability).

## Visão geral

Para fazer uma ligação para um usuário do WhatsApp, a empresa precisa receber a permissão do usuário primeiro. Quando um usuário do WhatsApp concede permissões para ligação, elas podem ser temporárias ou permanentes.

A empresa não tem controle sobre essa permissão, pois ela é concedida apenas pelo usuário e só pode ser revogada por ele a qualquer momento. Os dados de permissão permanente serão armazenados até a revogação.

É possível obter a permissão para ligação de um usuário do WhatsApp das seguintes maneiras:

-   **Envie uma solicitação de permissão para ligação ao usuário** – envie uma mensagem de formato livre ou com modelo pedindo permissão para ligação ao usuário. O usuário pode escolher entre as opções temporário ou permanente.-   **A permissão de retorno de ligação é fornecida pelo usuário do WhatsApp** – o usuário do WhatsApp fornece automaticamente permissões para ligação temporárias ao fazer uma ligação para a empresa. A [configuração de retorno de ligação deve estar habilitada](/documentation/business-messaging/whatsapp/calling/call-settings#configure-update-business-phone-number-calling-settings) no número de telefone comercial.-   **O usuário do WhatsApp concede permissão para ligação por meio do perfil empresarial**: o usuário do WhatsApp concede permissão para ligação à empresa por meio do próprio perfil empresarial.

### Limites (por par de empresas + usuários do WhatsApp)

-   As permissões temporárias são **concedidas por sete dias corridos (168 horas)**
    -   Calculado como o número de segundos em um dia multiplicado por sete, a partir do momento de aprovação do usuário.-   As permissões permanentes não expiram, mas têm o mesmo limite de ligações conectadas.-   A empresa pode fazer apenas **dez ligações conectadas a cada 24 horas**-   Esses limites se aplicam ao **número de telefone comercial**

Esses limites são impostos para proteger os usuários do WhatsApp contra ligações indesejadas.

Quando você testa a integração da API de Ligação do WhatsApp usando números de teste públicos (PTNs) e contas de sandbox, as restrições da API de Ligações são flexibilizadas.

[Teste a integração da API de Ligação do WhatsApp](/documentation/business-messaging/whatsapp/calling#testing-and-sandbox-accounts)

## Noções básicas sobre a solicitação de permissão para ligação

Você pode solicitar permissão para ligação de um usuário do WhatsApp de forma proativa por meio do envio de uma mensagem de solicitação de permissão como:

-   Mensagem interativa de formato livre-   Mensagem de modelo

O usuário do WhatsApp pode aprovar (de forma temporária ou permanente), recusar ou simplesmente não responder a uma solicitação de permissão para ligação.

**Com as permissões, o usuário do WhatsApp está no controle.** Mesmo que o usuário conceda permissão para realizar a ligação, ele pode revogá-la a qualquer momento. Por outro lado, se o usuário recusar uma solicitação, ele ainda poderá conceder permissão para fazer ligações até o vencimento da solicitação.

**Uma solicitação de permissão para ligação expira** quando ocorre um dos seguintes casos:

-   O usuário do WhatsApp interage com uma nova solicitação de permissão para ligação subsequente da empresa-   Sete dias após a permissão ter sido aceita ou recusada pelo consumidor-   Sete dias depois da entrega da permissão, se o consumidor não responder à solicitação

[Veja o comportamento da interface do usuário do cliente em relação às solicitações de permissão expiradas](/documentation/business-messaging/whatsapp/calling/user-call-permissions#call-permission-request-expiration-scenarios)

Para garantir uma experiência do usuário ideal em ligações iniciadas pela empresa, aplicamos os seguintes limites:

-   **Ao enviar uma mensagem de solicitação de permissão para ligação**
    
    -   Máximo de uma solicitação de permissão em 24 horas-   Máximo de duas solicitações de permissão em sete dias
    
    -   _Esses limites são reiniciados quando uma ligação conectada (iniciada pela empresa/iniciada pelo usuário) é feita entre a empresa e o usuário do WhatsApp._-   _Esses limites se aplicam a solicitações de permissão enviadas como mensagens de formato livre ou de modelo._-   **Quando a empresa iniciou a ligação, mas não recebeu uma resposta ou a ligação foi recusada**
    -   Duas ligações não respondidas consecutivas resultam em uma mensagem do sistema para reconsiderar uma permissão aprovada.-   Se houver quatro ligações não respondidas consecutivas, a permissão aprovada será revogada automaticamente. O usuário poderá atualizar isso novamente se quiser.

[Observe o comportamento da interface do usuário do cliente em relação a ligações não respondidas consecutivas](/documentation/business-messaging/whatsapp/calling/user-call-permissions#consecutive-unanswered-calls)

## Comparação entre mensagem de solicitação de permissão para ligação de modelo e de formato livre

As mensagens de solicitação de permissão para ligação estão sujeitas a [taxas de mensagens](/documentation/business-messaging/whatsapp/pricing)

É possível enviar uma mensagem de solicitação de permissão para ligação a usuários de uma das seguintes maneiras:

**Envie uma mensagem de formato livre**

-   Quando você estiver em uma janela de atendimento ao cliente com um usuário do WhatsApp, será possível enviar uma mensagem de formato livre com uma solicitação de permissão para ligação.-   Embora o corpo de texto seja opcional, envie um para criar contexto com o usuário. No caso das mensagens de solicitação de permissão para ligação de formato livre, as seções de cabeçalho e rodapé não são compatíveis.-   Como a janela de atendimento ao cliente está aberta, não é preciso criar uma janela de conversa.

**Crie e envie uma mensagem de modelo**

-   Com o envio de mensagem de modelo, você inicia uma conversa com o usuário por meio de uma solicitação de permissão para ligação.-   O contexto (ou seja, um corpo de texto) é necessário ao enviar uma mensagem de modelo com uma solicitação de permissão para ligação.-   Com as mensagens de modelo, é possível personalizar ainda mais a solicitação de permissão ao adicionar cabeçalho e rodapé.

![Criteria for sending call permission request messages](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/565169286_1339318287926822_4224200115246538359_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q3aHBCX2i0YQ7kNvwEbQSri&_nc_oc=Adk0Om8VI_ZyEty2ffkfH-yB1UuwxpyhsYyXF_5ykNUXxSjLvaEkPsGZYVCT6PKq4EE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AfnU_4JO3auyUVHhuD-N608zWVvGdDSZm_eAsmbB_LVh9Q&oe=69613CA8)

## Experiência na interface do usuário do app do cliente

### Fluxo de solicitação de permissão para ligação e exemplos de mensagens

#### Permitir ligações

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/569920259_1349837820208202_5589372317839283055_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=yWscp61QzMkQ7kNvwGPMvHt&_nc_oc=Adny-oAzvXEYJS3g4nwtepw-XbOkcEBlw-xUbc5XjvYpOfBcbvhHi0sg4V3CWVR9Yl0&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AfnMKBoygOxjCqPPXTtbOGr5uh-MRL1PjQ238b1cdNKbCg&oe=696138CB)

#### Permitir ligações temporariamente

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/571212662_1349837823541535_8439494695603356474_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=XpfwLOQNxnsQ7kNvwEtzSfP&_nc_oc=AdlnO3uGUCytNKc-sUoFRPurwyB6e-St212Tv8AHG-SHBhG9BrvYzamKZWmxkvvomp4&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AfklaxLuXpZshFpN6sW6_5FLpyvf5x35OsGjZrAy4FAmAA&oe=69612845)

### Mensagem de modelo

Com cabeçalho, rodapé e corpo ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/571144430_1349837860208198_1480615658143744665_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=oXECOax0nD8Q7kNvwEUPVo0&_nc_oc=AdnnZ3mjXhiDKM-2a1erUZscEfTcybx0I8gH2eDx-p9NTcWZ1Xx3S6TBAVpnRAqSGK0&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AfnR8M5PYgdwKKMRV9uiHH7VNVUrKLM1NXH1wFUWebtbuA&oe=696107D5)

Somente com corpo ![Free form message with body only](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/571213506_1349837833541534_3400449897824410954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=8TejYyc3bo8Q7kNvwFP8vcC&_nc_oc=Adk1NG4_wLOlzAHe6UwyK6jq7pHp469-MNqBQ1OSegYNnb8EMcvNYzMg_MFLUCjLeto&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AflHwvPmnGB3sIyK_v7c6Mm8o3Wf_vjqiAYVwW0qipu-NA&oe=69610D41)

Sem corpo de texto ![Free form message with no text body](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571762588_1349837766874874_7988101620410646138_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=fHiHD9PO3aUQ7kNvwH-5X9-&_nc_oc=AdnyMdm5w6Oo0sycWwPYqts2_tIkHeP_PnZKlhUcXRpVLDf9szuXbtlML7RKSf5xH6E&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AflQtIr2rdPNRIotiXEcpercOxyATuRuhqTuj4cxP0VSbg&oe=69612B49)

#### Tipos de mensagens de formato livre

Sem corpo de texto ![Template message with no text body](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571762588_1349837766874874_7988101620410646138_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=fHiHD9PO3aUQ7kNvwH-5X9-&_nc_oc=AdnyMdm5w6Oo0sycWwPYqts2_tIkHeP_PnZKlhUcXRpVLDf9szuXbtlML7RKSf5xH6E&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AflQtIr2rdPNRIotiXEcpercOxyATuRuhqTuj4cxP0VSbg&oe=69612B49)

Somente com corpo de texto ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/571213506_1349837833541534_3400449897824410954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=8TejYyc3bo8Q7kNvwFP8vcC&_nc_oc=Adk1NG4_wLOlzAHe6UwyK6jq7pHp469-MNqBQ1OSegYNnb8EMcvNYzMg_MFLUCjLeto&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AflHwvPmnGB3sIyK_v7c6Mm8o3Wf_vjqiAYVwW0qipu-NA&oe=69610D41)

### Atualizar a permissão para ligação no perfil empresarial

Os usuários sempre têm a opção de alterar a permissão usando uma nova opção no perfil empresarial.

Atualizar a permissão para ligação no perfil empresarial

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571034903_1349837813541536_6048092876982828292_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=I72vPZhRnMAQ7kNvwEISWDI&_nc_oc=AdkkI4-rJC_bcvmv7mQT7syeuWDwuPIWvTdFHCQBCIYhqXpug_fGps-PFAKtNdT2NJw&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AfmsliD6h6NmNVezng5KrdTc5q8zYgMpHeIMOCRb8-4gJQ&oe=69612C41)

### Ligações não respondidas consecutivas

Ligações não respondidas consecutivas

Duas ligações não respondidas consecutivas – mensagem do sistema para o usuário atualizar a permissão

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571296922_1349837800208204_1367855784989927722_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=9-vNxe7CT9EQ7kNvwGm0uy7&_nc_oc=AdmcoaMajqloxwmW7pofXNEDtJpeSTbd7G7M9YDI2oHx3suV8CzUTKLggwJ6qbId9W0&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_Afl5IGNDJ_-Zt5_LcquBDvawwia2byFRW9cqGUBzlJ32fA&oe=696134D6)

Quatro ligações não respondidas consecutivas – permissões revogadas automaticamente

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/571213183_1349837840208200_3862806014736476146_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=aIQJPO4xixAQ7kNvwHqwoEr&_nc_oc=AdkiZYhtZRtjlWCC0HSxFDJmTQH4gINmE5CDODyhgcY9jMJ4mq_sA36tQTrbwiDk9JI&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AflYJIMKp34AhMm8hStKltXnm9tdL0CeyCs0CpCl_Lp_XQ&oe=696117BB)

### Cenários de expiração da solicitação de permissão para ligação

A solicitação de permissão expira após sete dias – o usuário interage com a solicitação ![Permission request expires after 7 days — User interacts with request](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/571301842_1349837853541532_6081659828181485282_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=OQHXg5fh7UYQ7kNvwFhFbZe&_nc_oc=Adm0jffANLb2bG-PVrwJItJCxrgylwu3_yw3onsfHHtVmZ8kQwV5KHEfYTRmpb2_JAw&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_Afk9Rkr4BqC7uyj9Yx667TBQNg65TvB4UN9TYO7B4yxFgg&oe=6961140F)

A solicitação de permissão expira após sete dias – o usuário não interage ![Permission request expires after 7 days — User does not interact](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/572387488_1349837806874870_6917394151589767244_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=aEPT7TDeuXoQ7kNvwEYjedh&_nc_oc=AdmmPc7ZDDHbIyaphCCXQRHihqUc82jQPMwteOk0-bC1qjetIF3ZoizMzbWRgcFI1EQ&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AfnbXfUnlrgfFaP_kvzbfIh2Guuw-_c5jM5uERjRatpuSQ&oe=69611C5A)

A permissão anterior expira imediatamente – o usuário não interage/uma nova solicitação de permissão para ligação é recebida ![Previous permission request expires immediately — User does not interact / New call permission request is received](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/574278576_1349837836874867_6096441569227206157_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=dGNAU79f2uMQ7kNvwGdXR-3&_nc_oc=AdlSIon8M6lI1NHWXS2k6GhpbrOtVqyPK4PgpAGa-NKkXJ2WcLWx50c2QU3FZSUvCQw&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AflAFMcMvzwDH4SL-T7sD37j9m_oXaj635C5OiGQXXNvjA&oe=69610963)

A solicitação de permissão anterior expira imediatamente – o usuário permite/interage com a nova solicitação ![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/571174456_1349837843541533_5439194533822125836_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZtvgjeNwVKMQ7kNvwFWFeQb&_nc_oc=AdmIRLYWH1nt7_FAjN4YnAqD-HBDcMWtTdR9kyX1p0trTBLTfaQ9qHKTkC9U46uZ-74&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=ho-qu1sw-UjdS2YdYrp0DQ&oh=00_AfnFHaDwNnYcmnVFDtk5flpAsW5bO7AEKY29w_MFH03Kdg&oe=69613653)

## Enviar mensagem de solicitação de permissão de ligação de formato livre

As mensagens de solicitação de permissão para ligação estão sujeitas a [taxas de mensagens](/documentation/business-messaging/whatsapp/pricing)

Use este ponto de extremidade para enviar uma mensagem interativa em formato livre com uma solicitação de permissão de ligação durante uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows). Um [webhook de status de mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) padrão será enviado em resposta a essa mensagem.

**Observação:** o objeto interativo de solicitação de permissão para ligação não pode ser editado pela empresa. Apenas o corpo da mensagem pode ser personalizado.

[Veja como a mensagem é renderizada no cliente do WhatsApp](/documentation/business-messaging/whatsapp/calling/user-call-permissions#call-permission-request-flow-and-sample-messages)

#### Sintaxe da solicitação

```
POST <PHONE_NUMBER_ID>/messages
```

Parâmetro

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial do qual você está enviando mensagens.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api)

`+18274459827`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER_ID> or <WHATSAPP_ID>",
  "type": "interactive",
  "interactive": {
    "type": "call_permission_request",
    "action": {
      "name": "call_permission_request"
    },
    "body": {
      "text": "We would like to call you to help support your query on Order No: ON-12853."
    }
  }
}
```

#### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`to`

_Número inteiro_

**Obrigatório**

  
O número de telefone do usuário do WhatsApp que está recebendo a mensagem.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api)

`+17863476655`

`type`

_String_

**Obrigatório**

  
O tipo de mensagem interativa que você está enviando.

Nesse caso, você está enviando uma `call_permission_request`.

[Saiba mais sobre mensagens interativas](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

`“call_permission_request”`

`action`

_String_

**Obrigatório**

  
A ação da mensagem interativa.

Deve ser `call_permission_request`.

`“call_permission_request”`

`body`

_String_

**Opcional**

  
O corpo da mensagem.

Embora o campo seja opcional, recomendamos que você informe o contexto ao usuário do WhatsApp quando solicitar permissão para fazer a ligação.

`“Allow us to call you so we can support you with your order.`

#### Resposta de sucesso

```
{  "messaging_product": "whatsapp",  "contacts": [{      "input": "+1-408-555-1234",      "wa_id": "14085551234",    }]  "messages": [{      "id": "wamid.gBGGFlaCmZ9plHrf2Mh-o",    }]}
```

[_Saiba mais sobre respostas bem-sucedidas de mensagens_](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   `phone-number-id` inválido-   Erros de permissão/autorização-   Limite de volume atingido-   O envio dessa mensagem a versões mais antigas do app resultará em um webhook de erro com o código de erro [131026](/documentation/business-messaging/whatsapp/support/error-codes)-   Ligações não habilitadas-   Erros de restrição de ligações

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Criar e enviar mensagens de modelo de solicitação de permissão para ligação

As mensagens de solicitação de permissão para ligação estão sujeitas a [taxas de mensagens](/documentation/business-messaging/whatsapp/pricing)

Use estes pontos de extremidade para criar e enviar um modelo de mensagem de solicitação de permissão para ligação.

Depois que o modelo de solicitação de permissão for criado, a empresa poderá enviá-lo ao usuário como uma solicitação de permissão para ligação fora da janela de atendimento ao cliente.

[Saiba mais sobre como criar e gerenciar modelos de mensagem](/documentation/business-messaging/whatsapp/templates/overview)

### Criar modelo de mensagem

Use este ponto de extremidade para criar um modelo de mensagem de solicitação de permissão para ligação.

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

[Saiba como encontrar a identificação da sua WABA](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)

`“waba-90172398162498126”`

#### Corpo da solicitação

```
{  "name": "sample_cpr_template",  "language": "en",  "category": "[MARKETING|UTILITY]",  "components": [     {      "type": "HEADER",      "text": "Support of Order No: {{1}}",      "example": {        "body_text": [          [            "ON-12345"          ]        ]      }    },    {      "type": "BODY",      "text": "We would like to call you to help support your query on Order No: {{1}} for the item {{2}}.",      "example": {        "body_text": [          [            "ON-12345",            "Avocados"          ]        ]      }    },    {      "type": "FOOTER",      "text": "Talk to you soon!"    },    {      "type": "call_permission_request"    }  ]}
```

#### Parâmetros do corpo

As mensagens de modelo podem ser criadas e gerenciadas por meio da API de Nuvem ou da interface do Gerenciador do WhatsApp Business.

Ao criar seu modelo de solicitação de permissão para ligação, configure `type` como `call_permission_request`.

[Saiba mais sobre como criar e gerenciar modelos de mensagem](/documentation/business-messaging/whatsapp/templates/overview)

Parâmetro

Descrição

Exemplo de valor

`type`

_String_

**Obrigatório**

  
O tipo de modelo de mensagem que você está criando.

Nesse caso, você está criando uma `call_permission_request`.

`“call_permission_request”`

#### Resposta de status do modelo

```
{
  "id": "<ID>",
  "status": "<STATUS>",
  "category": "<CATEGORY>"
}
```

[_Saiba mais sobre a resposta ao status do modelo_](/documentation/business-messaging/whatsapp/templates/overview#template-status)

#### Resposta de erro

Veja os problemas que podem ocorrer:

-   ID da WABA inválido-   Erros de permissão/autorização-   Alertas de validação de componentes/estrutura do modelo

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

### Enviar modelo de mensagem

Use este ponto de extremidade para enviar um modelo de mensagem de solicitação de permissão para ligação

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
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+13287759822", // The WhatsApp user who will receive the template message
  "type": "template",
  "template": {
    "name": "sample_cpr_template", // The call permission request template name
    "language": {
      "code": "en"
    },
    "components": [ // Body text parameters such as customer name and order number
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "John Smith"
          },
          {
            "type": "text",
            "text": "order #1522"
          }
        ]
      }
    ]
  }
}
```

[Saiba mais sobre como enviar mensagens de modelo](/documentation/business-messaging/whatsapp/messages/template-messages)

## Verificar o estado atual da permissão para ligações

Use este ponto de extremidade para verificar o estado da permissão para ligação entre um número comercial e um único número de telefone de usuário do WhatsApp.

### Sintaxe da solicitação

```
GET /<PHONE_NUMBER_ID>/call_permissions?user_wa_id=<CONSUMER_WHATSAPP_ID>
```

### Parâmetros de solicitação

Parâmetro

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_String_

**Obrigatório**

  
O número de telefone comercial para o qual você está buscando permissões.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api)

`+18762639988`

`<CONSUMER_WHATSAPP_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone do usuário do WhatsApp de quem você está solicitando permissões para ligação.

[Saiba mais sobre a formatação de números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api)

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

-   `“no_permission”`-   `"temporary"`-   `“permanent”`

`expiration`_(Número inteiro)_ – o horário Unix em que a permissão expirará no fuso horário UTC.

Se a permissão for permanente, o campo não aparecerá.

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

-   `phone-number-id` inválido-   Se não for possível ligar para o número de telefone do consumidor, a resposta da API será `no_permission`.-   Erros de permissão/autorização.-   O limite de volume foi atingido. É possível fazer um máximo de cinco solicitações em uma janela de um segundo à API.-   As ligações não estão habilitadas para o número de telefone comercial.

[Consulte Códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Webhook de solicitação de permissão para ligação do usuário

Esse webhook é retornado após solicitar as permissões para ligação do usuário.

O webhook muda dependendo do que o usuário faz:

-   aceita ou rejeita a solicitação-   concede permissão respondendo a uma solicitação ou ligando para a empresa

Por fim, o usuário pode conceder permissão permanente para ligação à empresa, o que é representado no parâmetro `is_permanent` abaixo.

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

`is_permanent`

_Booliano_

Indica se a permissão é permanente ou não. Para permissão temporária, o valor será sempre "false".

`expiration_timestamp`

_Número inteiro_

Tempo, em segundos, até que a permissão desta ligação expire, caso o usuário do WhatsApp a tenha aprovado.

`response_source`

_String_

A fonte da permissão

Os valores possíveis para permissões para ligação aceitas são:

-   `user_action`: o usuário aprovou ou rejeitou a permissão-   `automatic`: aprovação automática de permissão devido ao usuário do WhatsApp ter iniciado a ligação

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)