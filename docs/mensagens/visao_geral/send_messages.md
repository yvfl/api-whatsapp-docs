<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages -->
<!-- Scraped: 2025-12-20T17:25:09.729Z -->

# Como enviar mensagens

Updated: 4 de nov de 2025

Este documento descreve como usar a API para enviar mensagens aos usuários do WhatsApp.

## Tipos de mensagem

Você pode usar a API para enviar os tipos de mensagem a seguir.

As [mensagens de endereço](/documentation/business-messaging/whatsapp/messages/address-messages) permitem que você peça facilmente um endereço de entrega aos usuários do WhatsApp.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/441384197_454102407352120_3773045747928009795_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=OxieZvLNTmAQ7kNvwHv3ov1&_nc_oc=Adl9ZRnSNn_GQPFttFuZH0SSIO0weMPeX7oXYWHTg9P0thMqAstGT-2npPLfD8hydSA&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfkG0BDJkypCY6-vcG_OUG32KGbc9FWxdnktLRGijQd5og&oe=69611D62)

  

As [mensagens de áudio](/documentation/business-messaging/whatsapp/messages/audio-messages) mostram um ícone e um link para um arquivo de áudio. Quando o usuário do WhatsApp toca no ícone, o cliente do WhatsApp carrega e reproduz o arquivo.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/441333612_1102926104368016_6233568143947105840_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=thY2dWkOKrgQ7kNvwHrQnCU&_nc_oc=AdkKAbjoAftX2-hvufCqnVAn94N17Y5HwWsY-uJrvUVL8G7v-maGhrV2DRPJHdJepkE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfmEbBEoPa3DJ--lwgyqCJ9Jx-BtEZwzHRvO3jVk-2A3nA&oe=6961216A)

  

As [mensagens de contato](/documentation/business-messaging/whatsapp/messages/contacts-messages) permitem que você envie informações avançadas de contato diretamente aos usuários do WhatsApp, como nomes, números de telefone, endereços físicos e endereços de email.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/440790666_990559829136435_3259503667945350761_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=-cwado1CohkQ7kNvwFVJA4y&_nc_oc=Adkrg_3-b2dNtOEtbEUskn10fgEUOeF_wcS5wbGvWGJWKDYFEgaurpYEOOUZRnuGJuM&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfkKOu9xcHVm-z-O2j-RIMbTdhQVeCkxwcVD0BuGdJOkJQ&oe=69610D0E)

  

As [mensagens de documento](/documentation/business-messaging/whatsapp/messages/document-messages) exibem um ícone para o usuário do WhatsApp tocar e baixar um documento.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/440797712_455258680228442_8760882695056096687_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=wqblJCx2vNYQ7kNvwHOsctk&_nc_oc=Adm_qehqpo0Ny66_N_nkGvRH-I_0B-vehVAG1689WoC2L1Y5B-2geqpEhV61kwJ4pPY&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfkgzsYCqUfEE6vknvEkR34Y5KaN1b4G9CGhvn73B7GJkg&oe=6961150E)

  

As [mensagens de imagem](/documentation/business-messaging/whatsapp/messages/image-messages) exibem uma única imagem e uma legenda opcional.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/439831684_1373893986606126_2007013942518250478_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=W8yzrzAEmXsQ7kNvwF__iyh&_nc_oc=AdlpLkSa3dM1ZwvvMgSfmIuGNv_3PpqVsOYqsdBVCUpbBYL6pjMFNO0rBCV2sRG99ag&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfntIDw0XKawUgH9-RQ6khe6d4n2WU9YkR9MoyIROJmA_Q&oe=6961310C)

  

As [mensagens interativas com botão de URL de CTA](/documentation/business-messaging/whatsapp/messages/interactive-cta-url-messages) permitem que você associe qualquer URL a um botão para não precisar incluir URLs inteiros que são longos e obscuros no corpo da mensagem.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/499710913_741192228581303_6833492513238538123_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=n4aW7JnOmawQ7kNvwHut_dc&_nc_oc=Adk5iw8zZqfyjUHf22Zh68IYkCXCnSEXb0ne7iOgcTdf2mQVWMxDBElzCvGu8GpTmCI&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_Afno0-0KJ8JJJsluX_KdfdgYTQi61m2JYSbMM3th3ye_7g&oe=69611BCA)

  

As [mensagens de fluxo interativas](/docs/whatsapp/cloud-api/messages/interactive-flow-messages) permitem enviar mensagens estruturadas mais naturais ou agradáveis para os clientes. Por exemplo, é possível usar o WhatsApp Flows para marcar compromissos, navegar por produtos, coletar feedback dos clientes, captar novos leads de vendas ou qualquer outra ação.

As mensagens de fluxo interativas estão documentadas no nosso conjunto de documentos do [WhatsApp Flows](/docs/whatsapp/flows).

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/459207270_1257913005205310_7321941208385331189_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=hyri_nG1AbYQ7kNvwHl6CZ_&_nc_oc=AdlvsSKcwVga2LQILS98pmVpQNwJMzgJDh-pjFcfUL6c7yXRLJwoSsKQzK8ja0SqaNc&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AflH06EBfKRucUiMNa4g2UuLE6jmyhWNfOhg0uBUUy6rXA&oe=69612277)

  

As [mensagens de lista interativas](/documentation/business-messaging/whatsapp/messages/interactive-list-messages) permitem apresentar uma lista de opções para escolha dos usuários do WhatsApp.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/440871648_773297808277279_825530086722343543_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=0S5aCQ0GyikQ7kNvwGFZZfn&_nc_oc=Adn8YhFFyO_gS09YZlAyVY3y0r76nDaMr-3LeeslgrKpj_jwl1kmSg1dHvqTSF7lpzE&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfkH-ntKCW4E-cSjjSFyOp1-rKmiUTinqJg-pdCWy8D6Ag&oe=69612028)

  

As [mensagens interativas com pedido de localização](/documentation/business-messaging/whatsapp/messages/location-request-messages) exibem um corpo de texto e o botão de enviar localização. Quando o usuário do WhatsApp toca no botão, uma tela para compartilhar a localização é exibida, permitindo que ele faça o compartilhamento.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/440778444_741946064791848_335647298308114961_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=7mdpoLA4LtAQ7kNvwETbYb_&_nc_oc=AdmjSV6Mhm5XS78RnTCJugOO5qkYOqNs1wrpaPErT1h2gFpJnW-MvGoI4cl0j7vsGCA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AflHWjodH6WNruaWN7Xc-4z-hD8i6P79s9NcPD5WWb7ZVg&oe=69612191)

  

As [mensagens interativas com botões de resposta](/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages) permitem que você envie até três respostas predefinidas para o usuário escolher.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/440770231_408356378658790_997875267478158577_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=I6ajGBA_ErcQ7kNvwGYUJO-&_nc_oc=AdlG7wezcs5D0Kr8LDeMrh16WJVsL1p8IAU95DgAavlfcOMzWwvdPc_bR4nDVkd4f9U&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfkgFchayjZKvwlOTgwkAlru-Uu5sL4SH6yaBf6rbmXTQw&oe=69613358)

  

As [mensagens de localização](/documentation/business-messaging/whatsapp/messages/location-messages) permitem que você envie as coordenadas de latitude e longitude de uma localização para um usuário do WhatsApp.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/440739359_451301924241746_5496230692221042707_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=AFsJZPqEliIQ7kNvwEQLsQE&_nc_oc=AdmAK73KtVkUXoztJ2Sqg87HNN0g19Y4--RgeUqlfefyBui_11beUY8CkEH5ZSXECBA&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_Afl8N_YVS8MO0N_sFVa4PlX1A5vLYKPTWSHYcTHsvgHwtA&oe=69610394)

  

As [mensagens de figurinhas](/documentation/business-messaging/whatsapp/messages/sticker-messages) exibem imagens animadas ou estáticas de figurinhas em uma mensagem do WhatsApp.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/440786426_1111584576559135_6735562667160992382_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=gUFWGvg3wycQ7kNvwEMDYx3&_nc_oc=Admpul50M7-vtb792Ga89fxOfziPaNxTj-FLhVU9WE7t_GCBO6-5floG_U7ZbHKSLrQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfkPnXW1nD-JKI60fhD4erSj17L-Rpp688XUs6CvetuFCA&oe=6961256F)

  

As [mensagens de texto](/documentation/business-messaging/whatsapp/messages/text-messages) contêm apenas um corpo de texto e uma prévia de link opcional.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/440778097_900237625125034_93345957848876145_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=GBcQwAVA2ygQ7kNvwE5znjz&_nc_oc=AdkLdQaZw92ID_vEwddILlT7X37lCke316d0526i8gCcbsZkx5J7eESskNFlxiX9wEM&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfluA763ECDwbPGcV04d-633YwRNcqKTLDBRBLY8iMGXxQ&oe=69612C8F)

  

As [mensagens de modelo](/documentation/business-messaging/whatsapp/messages/template-messages) permitem que você envie modelos de marketing, utilidade e autenticação para usuários do WhatsApp. Ao contrário de todos os demais tipos de mensagens, as mensagens de modelo não exigem que haja uma janela de atendimento ao cliente 24 horas aberta entre você e o destinatário da mensagem antes de serem enviadas.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/442491229_25340041602306457_3685379301469303506_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=rFsjQ3Fo7NYQ7kNvwGpo8EL&_nc_oc=AdlIvnIYETWJ9DZUPu5-dY_3RLtb-FnsINRbDXlu0rJoW6aEK0EEJGbBR4MX7Wo7egg&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfnA8QQZemwbvfo3tQj03FuMVZuDnHaEcx8LCRVuSBqtyA&oe=69613019)

  

As [mensagens de vídeo](/documentation/business-messaging/whatsapp/messages/video-messages) exibem uma prévia em miniatura de uma imagem de vídeo com uma legenda opcional. Quando o usuário do WhatsApp toca na prévia, o vídeo é carregado e exibido.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/441312822_455518227141854_5770420105763186824_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=bf7TIjkNzEMQ7kNvwG20SCs&_nc_oc=AdlfjMep9Euwu8GFdB-TOMRWTaRWaLBXp-JlUYpvFECAGmrSzwzqzitvh-G4OWrcjrw&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AflQoKWBHiBcQqmF7qupRloR0n0MZYz3wA1PgCx42w9skg&oe=69610D27)

  

As [mensagens de reação](/documentation/business-messaging/whatsapp/messages/reaction-messages) são reações com emoji que você pode aplicar a uma mensagem anterior recebida de um usuário do WhatsApp.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/440758814_464628532577869_3703934471348865877_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=5BvT7t1npfgQ7kNvwH1T8Zo&_nc_oc=AdkEHY5DYAYH3_MsxgFXGjpESkIoJHFi7H9OJ8_r6wj3_bIB5QYuR6GYkEsAqOvCO58&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfkjdnOdXDulz97yiffNRS6vjeDff-0IHMOKG8ALHyRg2g&oe=69612652)

## Qualidade da mensagem

A qualidade da mensagem é baseada em como ela foi recebida pelos usuários do WhatsApp nos últimos 7 dias e ponderada pela recenticidade. Ela é determinada por uma combinação de sinais de feedback, que incluem bloqueios, denúncias, silenciamentos e arquivamentos, além dos motivos fornecidos pelos usuários quando bloqueiam sua empresa.

Diretrizes para o envio de mensagens de alta qualidade:

-   As mensagens devem seguir a [Política de Mensagens do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fpolicy&h=AT3yZBbwWRNRHvWlXs7oViQPKOS7axPzVMn7HGSukaB97qXf61brwQeO03PhI_7gIr_JqnVdkOCSrsNkOaSmLErARSNZRodGkCbmLx-0_qrSqHyg9rXnzCq2twumWH611o3XdP151ZJCWT_F8zqiTUseUy4).-   Envie mensagens apenas a usuários do WhatsApp que aceitaram receber mensagens da sua empresa.-   Crie mensagens altamente personalizadas e úteis para os usuários.-   Evite enviar mensagens introdutórias ou de boas-vindas que sejam vagas demais.-   Evite enviar muitas mensagens aos clientes por dia.-   Otimize suas mensagens em termos de conteúdo e tamanho.

O status do número de telefone comercial, a [classificação de qualidade](https://www.facebook.com/business/help/896873687365001) e os [limites de envio de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) são exibidos no painel do [Gerenciador do WhatsApp](https://business.facebook.com/wa/manage/home/) > **Ferramentas da conta** > **Números de telefone**.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/532273545_1018217176902582_4720629988037795374_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=m4MsBp9wJKAQ7kNvwE4Lo4z&_nc_oc=Adkepk847nIxlvtBWNKq6tzq3jA_jedVHUszmgJvu_2e3RLbDPgeFYATCM7DHGpCCf8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_Afm3AXMbW5PvS_gcqoa4BEBzVq2M6zADP_C61IJCCOBwCw&oe=69611FB4)

É normal que números com alto tráfego passem por alterações na qualidade em intervalos curtos (até mesmo em minutos).

## Janelas de atendimento ao cliente

Se você receber uma mensagem ou uma [ligação](/documentation/business-messaging/whatsapp/calling/pricing#how-calling-changes-the-24-hour-customer-service-window) de um usuário do WhatsApp, uma janela de atendimento de 24 horas será aberta (ou atualizada, caso já tenha sido iniciada).

Quando uma janela de atendimento ao cliente estiver aberta, você pode enviar **qualquer tipo de mensagem** ao usuário. Caso contrário, será possível enviar somente mensagens de modelo ao usuário, pois esse é o único tipo de mensagem que pode ser enviado fora da janela de atendimento ao cliente.

Só é possível fazer envios a usuários que [aceitaram](/documentation/business-messaging/whatsapp/getting-opt-in) receber suas mensagens.

**Problema conhecido**: em casos raros, talvez você receba uma mensagem de um usuário, mas não consiga respondê-la dentro do prazo da janela de atendimento ao cliente. Lamentamos o transtorno.

## Pedidos

Todos os pedidos de envio de mensagem usam o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID/messages**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api):

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```

O corpo do post varia conforme o [tipo de mensagem](#message-types), mas a carga usa a seguinte sintaxe comum:

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "<RECIPIENT_TYPE>",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "<MESSAGE_TYPE>",
  "<MESSAGE_TYPE>": {<MESSAGE_CONTENTS>}
}
```

O valor da propriedade `type` na carga do corpo indica o [tipo de mensagem](#message-types) a ser enviado. É necessário incluir uma propriedade correspondente a esse tipo que descreva o conteúdo da mensagem.

A propriedade `recipient_type` pode ser `indivudal` para mensagens individuais ou `group` para mensagens em grupo.

[Saiba mais sobre a API de Grupos](/documentation/business-messaging/whatsapp/groups)

Abaixo, há um pedido para enviar uma [mensagem de texto](/documentation/business-messaging/whatsapp/messages/text-messages) a um usuário do WhatsApp. Observe que `type` é definido como `text`, e o objeto `text` descreve o conteúdo da mensagem:

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "text",
  "text": {
    "preview_url": true,
    "body": "As requested, here'\''s the link to our latest product: https://www.meta.com/quest/quest-3/"
  }
}'
```

Se fosse entregue ao usuário, a mensagem teria esta aparência no cliente do WhatsApp:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/440778097_900237625125034_93345957848876145_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=GBcQwAVA2ygQ7kNvwE5znjz&_nc_oc=AdkLdQaZw92ID_vEwddILlT7X37lCke316d0526i8gCcbsZkx5J7eESskNFlxiX9wEM&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfluA763ECDwbPGcV04d-633YwRNcqKTLDBRBLY8iMGXxQ&oe=69612C8F)

## Respostas

A API retornará a seguinte resposta JSON ao aceitar o pedido de envio de mensagem se não houver erros. Essa resposta indica somente que a API **aceitou o pedido**, ou seja, não indica a entrega da mensagem. O status de entrega de mensagem é comunicado pelos webhooks de **mensagens**.

### Sintaxe da resposta

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<WHATSAPP_USER_PHONE_NUMBER>",
      "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>"
    }
  ],
  "messages": [
    {
      "id": "<WHATSAPP_MESSAGE_ID>",
      "group_id": "<GROUP_ID>", <!-- Only included if messaging a group -->
      "message_status": "<PACING_STATUS>" <!-- Only included if sending a template -->
    }
  ]
}
```

### Conteúdo da resposta

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

O identificador de string de um grupo feito usando a API de Grupos.

Esse campo mostra quando as mensagens são enviadas, recebidas ou lidas em um grupo.

[Saiba mais sobre a API de Grupos](/documentation/business-messaging/whatsapp/groups)

`Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD`

`<PACING_STATUS>`

_String_

Indica o status de [regularidade do modelo](/documentation/business-messaging/whatsapp/templates/template-pacing). A propriedade `message_status` é incluída nas respostas apenas quando você envia [mensagens](/documentation/business-messaging/whatsapp/messages/template-messages) com um modelo que está sendo modificado por regularidade.

`wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI4MjZGRDA0OUE2OTQ3RkEyMzcA`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

O número de telefone do WhatsApp do usuário. Pode não corresponder ao valor `wa_id`.

`+16505551234`

`<WHATSAPP_USER_ID>`

_String_

Identificação do usuário do WhatsApp. Pode não corresponder ao valor `input`.

`16505551234`

`<WHATSAPP_MESSAGE_ID>`

_String_

Identificação da mensagem do WhatsApp. Essa identificação aparece em webhooks de **mensagens** associados, como webhooks de mensagens enviadas, lidas e entregues.

`wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI4MjZGRDA0OUE2OTQ3RkEyMzcA`

## Mensagens comerciais

As mensagens comerciais são mensagens interativas usadas em conjunto com um catálogo de produtos. Consulte o artigo [Compartilhar produtos com clientes](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products) para saber como usar esses tipos de mensagem.

## Confirmações de leitura

Para confirmar a leitura, você pode [marcar uma mensagem como lida](/documentation/business-messaging/whatsapp/messages/mark-message-as-read), exibindo dois tiques azuis (chamados de "confirmações de leitura") abaixo da mensagem do usuário do WhatsApp:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/491643461_603380552708521_8284248965365504291_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=nZE53d1srOUQ7kNvwGeU_6B&_nc_oc=AdlKPw9HTLFWkBdme8pLhsyNqfRNSnJUUzpzOLIb873aahy382L8zxIHOu9zjqkkSjU&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AfklB9ZUPzf21kRKZOy3oEtEXTqsI1FaZ8IelRnxX8ftjw&oe=696129B0)

## Indicadores de digitação

Caso você leve alguns segundos ou mais para responder a um usuário, será possível informar que a resposta está sendo elaborada [usando o indicador de digitação](/documentation/business-messaging/whatsapp/typing-indicators) e as confirmações de leitura no cliente do WhatsApp:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/488360772_654124507349470_2240843625651955811_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=SOmR3VEATaIQ7kNvwFICFZM&_nc_oc=AdmEKViP8uwXabo6KNoa5gxXstpEeRWO7IW2IqlktzChF8DTaemxuW9XgyjutmuYHMA&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_Afl6cgIzX8scfPA3hX33r_UvK7u2vHOI5QiMUCbEvdVlUg&oe=6961179C)

## Respostas contextuais

Você pode enviar uma mensagem para um usuário do WhatsApp como uma [resposta contextual](/documentation/business-messaging/whatsapp/messages/contextual-replies), que cita uma mensagem anterior em um balão de contexto:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/441349069_1363509007609494_6528221959622289637_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=RxNCHcyE-4cQ7kNvwFLFuOe&_nc_oc=AdnmlhyAj0hGb8H0RsAJQcuMuNEPU173eDbJcTZT-Tds-hfRxxWJIvKC1BECoO_NcD8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=3kHLLFeRLHlXp08c3Jq6_Q&oh=00_AflO8uF-jClO1pJtDJzJNymadXzTGHe4wqx0z8im0wtgiA&oe=69612DAB)

Dessa forma, fica mais fácil para o usuário saber a qual mensagem específica você está respondendo.

## Webhooks

As mensagens enviadas a usuários do WhatsApp disparam webhooks de **mensagens**. Assine esse tópico para receber notificações relacionadas ao status de mensagens.

## Formatos de número de telefone do usuário do WhatsApp

Os sinais de adição (`+`), hifens (`-`), parênteses (`(`,`)`) e espaços são compatíveis com os pedidos de envio de mensagem.

Recomendamos que você inclua o sinal de adição e o código de ligação do país ao enviar mensagens para os clientes. Se o sinal de adição for omitido, o código de ligação do país do seu número de telefone comercial será adicionado antes do número de telefone do cliente. Isso pode resultar em mensagens não entregues ou entregues incorretamente.

Por exemplo, sua empresa está sediada na Índia (código de ligação do país `91`) e você envia uma mensagem para o seguinte número de telefone do cliente em vários formatos:

Número no pedido de envio de mensagem

Número de mensagens entregues

Resultado

`+16315551234`

`+16315551234`

Número correto

`+1 (631) 555-1234`

`+16315551234`

Número correto

`(631) 555-1234`

`+916315551234`

Número possivelmente errado

`1 (631) 555-1234`

`+9116315551234`

Número possivelmente errado

Observação: para Brasil e México, o prefixo extra adicionado ao número de telefone poderá ser modificado pela API de Nuvem. Esse é um comportamento padrão do sistema e não é considerado um bug.

## Cache de mídia

Caso esteja usando um (`link`) para um ativo de mídia no servidor (em vez do ID (`id`) de um ativo carregado nos nossos servidores), a API de Nuvem do WhatsApp armazena em cache interno o ativo por um período estático de dez minutos. O ativo em cache será usado em pedidos de envio de mensagem subsequentes se o link nas cargas posteriores de envio de mensagem for o mesmo que o da carga de envio da mensagem inicial.

Se não quiser que o ativo em cache seja reutilizado em uma mensagem subsequente no período de dez minutos, adicione uma string de consulta aleatória ao link do ativo na nova carga de pedido de envio de mensagem. Ele será tratado como um novo ativo, obtido do seu servidor e armazenado em cache por 10 minutos.

Por exemplo:

-   Link do ativo no 1º pedido de envio de mensagem: `https://link.to.media/sample.jpg` – ativo recuperado, em cache por 10 minutos-   Link do ativo no 2º pedido de envio de mensagem: `https://link.to.media/sample.jpg` – uso do ativo em cache-   Link do ativo no 3º pedido de envio de mensagem: `https://link.to.media/sample.jpg` – ativo recuperado, em cache por dez minutos

## Sequência de entrega de várias mensagens

Se você enviar várias mensagens, talvez elas não sejam entregues na mesma ordem dos pedidos da API. Caso haja uma ordem a ser seguida, verifique se cada mensagem foi entregue no status `delivered` do [webhook de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) antes de enviar a próxima.

## Tempo de vida (TTL) da mensagem

Se não conseguirmos entregar uma mensagem a um usuário do WhatsApp, faremos novas tentativas de entrega por um período conhecido como tempo de vida (TTL, nas iniciais em inglês) ou período de validade da mensagem.

### TTL padrão

-   Todas as mensagens, exceto modelos de autenticação: **30 dias**.-   Modelos de autenticação: **10 minutos**

### Como personalizar o TTL para modelos

Você pode personalizar o TTL padrão para modelos de autenticação e utilidade, assim como para modelos de marketing enviados usando a API de MM Lite. Para saber mais, consulte nosso documento [Tempo de vida](/documentation/business-messaging/whatsapp/templates/time-to-live).

### Quando o TTL é excedido: mensagens descartadas

As mensagens que não puderem ser entregues dentro do TTL padrão ou personalizado serão descartadas.

Se você não receber um webhook de mensagens de status com `status` definido como `delivered` antes da expiração do TTL, presuma que a mensagem foi descartada.

Se você enviar uma mensagem e houver uma falha (mudança de `status` para `failed`), poderá ocorrer um atraso no recebimento do webhook. Por isso, é recomendável incorporar um buffer antes de presumir o descarte.

## Solução de problemas

Se você está tendo problemas com a entrega de mensagens, consulte [Mensagem não entregue](/documentation/business-messaging/whatsapp/support#message-not-delivered).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)