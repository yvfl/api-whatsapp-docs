<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids -->
<!-- Scraped: 2026-01-24T00:27:18.901Z -->

# IDs de usuário no escopo da empresa

Updated: 21 de nov de 2025

O WhatsApp vai lançar os nomes de usuário em 2026.

Os nomes de usuário são um recurso opcional para pessoas e empresas. Quando um usuário do WhatsApp adotar um nome de usuário, esse nome será exibido no app em vez do número de telefone. Entretanto, os nomes de usuário comerciais não têm o objetivo de garantir a privacidade. A adoção de um nome de usuário comercial não fará com que o número de telefone da empresa seja ocultado no app.

Para possibilitar os nomes de usuário, compartilharemos um novo identificador de usuário de back-end chamado ID do usuário no escopo da empresa (BSUID). O BSUID identifica um usuário do WhatsApp de forma exclusiva e está vinculado a uma empresa específica.

Este documento descreve como a adição de nomes de usuário afetará solicitações de API, respostas de API e cargas de webhook. As alterações adicionais para aceitar nomes de usuário antes que o recurso seja disponibilizado serão registradas aqui.

**As alterações descritas neste documento estão sujeitas a mudanças.**

## Nomes de usuário

O nome de usuário é um nome único e opcional que os usuários do WhatsApp podem definir para exibir no app em vez do número de telefone. Em vez dos nomes de perfil, é possível usar os nomes de usuário para personalizar o conteúdo de mensagens para usuários individuais.

Os usuários do WhatsApp podem ter apenas um nome de usuário, mas é possível alterá-lo periodicamente. A alteração do nome de usuário não afeta o número de telefone nem o ID do usuário no escopo da empresa. Além disso, o usuário pode continuar se comunicando com outros usuários do WhatsApp ou empresas na Plataforma do WhatsApp Business.

Os nomes de usuário são atribuídos à propriedade `username` em respostas de API e cargas de webhooks. Depois da habilitação, o nome de usuário do WhatsApp aparecerá em todos os webhooks de [mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages#incoming-messages) recebida, além de webhooks de mensagens com status **entregue** e **lida**[](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status).

## ID de usuário no escopo da empresa

O ID do usuário no escopo da empresa ("BSUID") é um identificador único que pode ser usado para enviar mensagem a um usuário do WhatsApp quando você não sabe o número de telefone dele. O BSUID será atribuído ao parâmetro `user_id` e aparecerá em todos os [webhooks de mensagens](#messages-webhooks), independentemente de o usuário ter habilitado ou não o recurso de nome de usuário.

Os BSUIDs serão:

-   gerados automaticamente-   compostos por até 256 caracteres alfanuméricos-   únicos para cada par de usuário e [portfólio empresarial](https://www.facebook.com/business/help/486932075688253)(antes chamados de Gerenciadores de Negócios)-   gerados novamente se um usuário mudar o número de telefone (o que dispara um [webhook de mensagens de status do sistema](#system-status-messages-webhooks))

Os BSUIDs podem ser usados para enviar qualquer tipo de mensagem, exceto [modelos de autenticação](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates) de um toque, sem toque e de copiar código, que exigem o número de telefone do usuário.

Como os BSUIDs são exclusivos para cada par de portfólio empresarial e usuário, caso você tenha vários portfólios, as solicitações de API falharão se tentarem enviar mensagem para um BSUID que esteja no escopo de um portfólio diferente. No entanto, pode haver casos legítimos de uso para algumas empresas compartilharem o BSUID entre portfólios empresariais. Estamos estudando uma solução para simplificar esse processo. Você pode falar com seu ponto de contato da Meta sobre o assunto.

## Números de telefone

Quando um usuário adotar um nome de usuário, o número de telefone não será incluído nos webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages) em alguns casos. Em vez disso, o BSUID será enviado em um novo campo `user_id`. O número de telefone será enviado como uma string vazia no campo `wa_id` nas versões antigas e novas da API. Embora os números de telefone ainda sejam compartilhados em alguns casos, principalmente para interações com clientes existentes, é essencial que você comece a ingerir BSUIDs assim que possível para minimizar a perda de contexto da conversa.

-   Se você enviar uma mensagem/ligar para o número de telefone de um usuário do WhatsApp ou receber uma mensagem/ligação do número de telefone dele, incluiremos o número de telefone em respostas da API e webhooks de mensagem por 30 dias a partir do momento do envio ou recebimento, independentemente de o usuário ter adotado um nome de usuário ou não. **Se o usuário receber uma mensagem ou ligação, ou enviar uma mensagem ou fazer uma ligação dentro desse período, a janela de 30 dias será reiniciada.**-   Em algumas situações, você pode receber mensagens de clientes existentes fora da janela de 30 dias que parecem ser de novos usuários, já que o número de telefone não está no webhook de mensagens (wa\_id é uma string vazia). Para garantir que você possa identificar usuários que adotaram nomes e manter o contexto da conversa após 30 dias, estamos criando um recurso que permitirá continuar recebendo o número de telefone do usuário, mesmo depois da adoção do nome, desde que você tenha enviado mensagem para o número de telefone dele no passado. O histórico de comunicação será registrado a partir do momento em que o cliente aceitar receber mensagens. Forneceremos detalhes sobre o processo e o prazo de aceitação assim que estiverem disponíveis.-   Se um usuário não tiver adotado um nome de usuário, os webhooks de mensagens incluirão o número de telefone e o BSUID.

Será possível enviar mensagens aos usuários usando o número de telefone ou o BSUID assim que os BSUIDs começarem a aparecer nas respostas da API e nas cargas do webhook.

## Códigos de país

Quando um usuário do WhatsApp tiver habilitado o recurso de nome de usuário, o número de telefone dele poderá não aparecer nos webhooks. Se não souber o número de telefone, mas precisar se comunicar com ele, envie uma mensagem para o BSUID.

O código do país será incluído em todos os webhooks de [mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages) (sujeito a alteração).

## Nomes de usuário comerciais

As empresas também poderão adotar um nome de usuário comercial. No entanto, se você adotar um nome de usuário comercial, o número de telefone da empresa não ficará oculto no cliente do WhatsApp ou do WhatsApp Business.

Cada nome de usuário comercial é mapeado para um único número de telefone comercial em todo o WhatsApp. Ou seja, um número de telefone pode ter apenas um nome de usuário por vez. Não é possível que dois números de telefone do WhatsApp (consumidor ou empresa) tenham o mesmo nome de usuário.

Os nomes de usuário comerciais devem ter o seguinte formato:

-   podem conter apenas letras (a-z), números (0-9), ponto (.) e sublinhado (\_)-   devem ter entre 3 e 35 caracteres-   devem conter pelo menos uma letra do alfabeto inglês (a-z, A-Z)-   não podem começar nem terminar com ponto nem ter dois pontos consecutivos-   não podem começar com www-   não podem terminar com um domínio (por exemplo, .com, .org, .net, .int, .edu, .gov, .mil, .us, .in, .html etc.)-   a diferença entre maiúsculas e minúsculas é ignorada ao comparar nomes de usuário, mas os caracteres de ponto e sublinhado não. Por exemplo, "meuID" e "meuid" são o mesmo \*nome de usuário, mas "meuid", "meu.id" e "meu\_id" são nomes diferentes

### Nomes de usuário reservados

Antes da disponibilização desse recurso, você terá a opção de reivindicar o nome que o WhatsApp reservou para você. Também pode adotar um nome de usuário diferente que esteja alinhado aos requisitos da sua marca. É possível reivindicar um nome de usuário reservado por meio do Gerenciador do WhatsApp, do Meta Business Suite ou [via API](#get-reserved-usernames). Os nomes de usuário reivindicados e aprovados ficarão ativos assim que o recurso for disponibilizado.

Se o nome de usuário reservado já estiver sendo usado na sua Página do Facebook ou conta do Instagram, será necessário [vincular](https://www.facebook.com/business/help/4631406400243963) o número de telefone comercial à Página do Facebook ou conta do Instagram para reivindicar o nome de usuário. Para vincular uma Página ou conta, você deve ter controle total da Página ou conta, ou acesso parcial básico com a permissão manage\_phone.

Consulte [Sobre o portfólio empresarial e as permissões de ativos de negócios](https://www.facebook.com/business/help/442345745885606) para saber mais sobre controle/acesso e permissões.

### Prioridade de exibição da janela de conversa

A prioridade a seguir será observada (em ordem decrescente de prioridade) para a exibição de informações do perfil comercial nas janelas de conversa no app. Os números de telefone comerciais sempre aparecerão no seu perfil empresarial.

-   Nome salvo do contato-   Nome comercial verificado ou nome da [conta comercial oficial](/documentation/business-messaging/whatsapp/official-business-accounts)-   Nome de usuário-   Telefone

### Suporte

-   Se tiver alguma dúvida, fale com seu gerente de parceiros.-   Você pode entrar em contato com qualquer um dos [canais de suporte padrão](/documentation/business-messaging/whatsapp/support). Para integrações de API, abra um tíquete no Suporte Direto com o tipo de pergunta **Integração da API de Nome de Usuário do WA**.-   Use o canal **Denunciar abuso**via [Suporte Direto](https://business.facebook.com/direct-support/) para denunciar um caso de falsificação de identidade.-   Use nosso [formulário de contato sobre propriedade intelectual do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Fcontact%2Fforms%2F5071674689613749&h=AT2W2v3PqI2_Bc0dANQdSP2z2SnDUl9obumW51rKWvhGXGm0r52Y_jBJJr8jbMAe1UlDQ0UFo-mySTVQytrrNb-MumGmFkRKJPeuIndbE27iJKG_JcyV5cVAS3TlF9ogv1ABw8Ds4hBb2eUJDvzpn8rgtD0) para denunciar violações.

### Como adotar ou alterar um nome de usuário comercial

Você poderá adotar ou alterar um nome de usuário comercial usando o Meta Business Suite, o Gerenciador do WhatsApp, o app WhatsApp Business ou a API.

Sintaxe da solicitação:

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/username' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "username": "<DESIRED_USERNAME>"
}'
```

Sintaxe da resposta, em caso de sucesso:

```
{
  "status": "<STATUS>",

  <!-- Only included for REJECTED status -->
  "rejection_reasons": [
    "<REJECTION_REASON>",
    <!--Additional rejection reasons would follow, if any -->
  ]
}
```

-   `status`: o status do nome de usuário mais recente solicitado. Os valores podem ser os seguintes:
    -   `APPROVED`: o nome de usuário solicitado foi aprovado e ficará ativo assim que o recurso de nomes de usuário for disponibilizado.-   `REJECTED`: o nome de usuário solicitado foi rejeitado. Caso exista um nome de usuário aprovado para o número de telefone comercial, ele continuará sendo usado. Confira `rejection_reasons` para saber mais.-   `PENDING`: o nome de usuário está em análise. Quando uma decisão for tomada, o webhook phone\_number\_username\_update será disparado, indicando o novo status.-   `rejection_reasons`: uma matriz de strings indicando o motivo ou motivos da rejeição. Incluída apenas se o nome de usuário solicitado tiver sido rejeitado. Os valores podem ser os seguintes:
    -   `REQUIRE_FB_ACCOUNT_LINKING`: o nome de usuário solicitado poderá estar disponível se você [vincular](https://www.facebook.com/business/help/4631406400243963) o número de telefone comercial do WhatsApp à Página do Facebook.-   `REQUIRE_IG_ACCOUNT_LINKING`: o nome de usuário solicitado poderá estar disponível se você vincular seu número de telefone comercial do WhatsApp à conta do Instagram.-   `EXISTING_PENDING_REQUEST`: um nome de usuário solicitado anteriormente ainda está em análise.-   `NOT_AVAILABLE`: o nome de usuário não está disponível porque está associado a outra conta ou não passou em nossas verificações internas.-   `ACCOUNT_INELIGIBLE`: a conta não está qualificada para solicitar um nome de usuário. O [nome de exibição](/documentation/business-messaging/whatsapp/display-names) do número de telefone comercial deve ser aprovado e a empresa proprietária deve ser [verificada](https://www.facebook.com/business/help/2058515294227817).-   `UNKNOWN`: rejeitado por motivo desconhecido. Entre em contato com o suporte para obter ajuda.

### Como obter o nome de usuário atual

Use o ponto de extremidade **GET /<BUSINESS\_PHONE\_NUMBER\_ID>/username** para conferir o status do nome de usuário comercial associado ao número de telefone comercial ou informações sobre o nome de usuário.

Sintaxe da solicitação:

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/username' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

Sintaxe da resposta:

```
{
  "username": "<USERNAME>",
  "status": "<STATUS>",

  <!-- Only included for phone number's with a pending username request -->
  "requested_username": "<REQUESTED_USERNAME>"
}
```

-   `username`: nome de usuário atual. Será uma string vazia se o número de telefone comercial não tiver um nome de usuário.-   `status`: status do nome de usuário. Os valores podem ser os seguintes:
    -   `ACTIVE`: o nome de usuário foi aprovado e ficará ativo assim que o recurso de nomes de usuário for disponibilizado.-   `RESERVED`: o nome de usuário está reservado para o número de telefone comercial, mas não está ativo.-   `requested_username`: nome de usuário solicitado. Essa propriedade só será incluída se um novo nome de usuário tiver sido solicitado para o número de telefone comercial, mas o nome de usuário em questão ainda estiver em análise.

### Como obter nomes de usuário reservados

Inclusão de um novo ponto de extremidade **GET /<BUSINESS\_PHONE\_NUMBER\_ID>/username\_suggestions** que retorna uma lista de nomes de usuário reservados para seu portfólio empresarial.

Chame o ponto de extremidade [**POST /<BUSINESS\_PHONE\_NUMBER\_ID>/username**](#adopt-or-change-a-business-username) para reivindicar o nome de usuário desejado da lista, que depois precisará ser aprovado. Depois que o nome de usuário for aprovado e disponibilizado no seu país, o status será definido como "ativo", e o nome de usuário da empresa começará a aparecer no seu perfil comercial. Além disso, os usuários poderão encontrá-lo usando a pesquisa por correspondência exata.

Sintaxe da solicitação:

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/username_suggestions' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

Sintaxe da resposta:

```
{
  "data": [
   {
     "username_suggestions": [
       "<RESERVED_USERNAME>",
       <!-- Additional usernames would follow, if any -->
     ]
   }
 ],
}
```

-   `username_suggestions`: uma matriz de nomes de usuário reservados, se houver. Esses nomes de usuário têm maior probabilidade de aprovação.

### Como excluir um nome de usuário

É possível usar o ponto de extremidade **DELETE /<BUSINESS\_PHONE\_NUMBER\_ID>/username** para excluir o nome de usuário comercial associado ao número de telefone.

Sintaxe da solicitação:

```
curl -X DELETE 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/username' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Sintaxe da resposta:

```
{  "success": <SUCCESS?>}
```

-   `success`: booleano. O valor será definido como `true` se o nome de usuário for excluído com sucesso. Caso contrário, será definido como `false`.

### Como cancelar solicitação de nome de usuário pendente

Você pode usar o ponto de extremidade **DELETE /<BUSINESS\_PHONE\_NUMBER\_ID>/requested\_username** para cancelar uma solicitação de nome de usuário comercial pendente.

Sintaxe da solicitação:

```
curl -X DELETE 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/requested_username' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Sintaxe da resposta:

```
{  "success": <SUCCESS?>}
```

-   `success`: booleano. O valor será definido como `true` se o nome de usuário for excluído com sucesso. Caso contrário, será definido como `false`.

### Webhook phone\_number\_username\_update

Um novo webhook **phone\_number\_username\_update** será adicionado. Esse webhook será disparado quando o status do nome de usuário de um número de telefone comercial for alterado. Inscreva seus apps no campo do webhook para receber notificações sobre alterações de nome de usuário.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "changes": [
        {
          "field": "phone_number_username_update",
          "value": {
            "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
            "decision": "<DECISION>",
            "requested_username": "<REQUESTED_USERNAME>",
            "rejection_reasons": [
              "<REJECTION_REASON>",
              <!-- Additional rejection reasons would follow, if any -->
            ]
          }
        }
      ]
    }
  ]
}
```

-   `id`: identificação da conta do WhatsApp Business.-   `time`: indica o registro de data e hora UNIX de quando o webhook foi disparado.-   `display_phone_number`: o número exibido do telefone comercial (o número mostrado no seu perfil no app).-   `decision`: indica o resultado do processo de análise do nome de usuário comercial. Os valores podem ser os seguintes:
    -   `APPROVED`: indica que o nome de usuário foi aprovado e ficará ativo assim que o recurso de nomes de usuário estiver disponível.-   `REJECTED`: indica que o nome de usuário foi rejeitado. É possível editar o nome no Gerenciador do WhatsApp. Analise o motivo da rejeição antes de editar.-   `requested_username`: o nome de usuário solicitado.-   `rejection_reasons`: indica o motivo pelo qual o nome de usuário comercial foi rejeitado, se isso tiver acontecido. Os valores podem ser os seguintes:
    -   `REQUIRE_FB_ACCOUNT_LINKING`: o nome de usuário solicitado está associado a uma Página do Facebook existente. Para reivindicar o nome de usuário, primeiro [adicione seu número de telefone comercial à Página](https://www.facebook.com/business/help/4631406400243963).-   `REQUIRE_IG_ACCOUNT_LINKING`: o nome de usuário solicitado já está associado a um nome de usuário do Instagram. Para reivindicar o nome de usuário, primeiro adicione seu número de telefone comercial à conta do Instagram.-   `NOT_AVAILABLE`: o nome de usuário não está disponível porque está associado a outra conta ou não passou em nossas verificações internas.-   `ACCOUNT_INELIGIBLE`: a conta não está qualificada para solicitar um nome de usuário. O [nome de exibição](/documentation/business-messaging/whatsapp/display-names) do número de telefone comercial deve ser aprovado e a empresa proprietária deve ser [verificada](https://www.facebook.com/business/help/2058515294227817).-   `UNKNOWN`: rejeitado por motivo desconhecido. Entre em contato com o suporte para obter ajuda.

## Mensagens

### Como enviar pedidos de contato

As alterações se aplicam a solicitações do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#Creating).

Esta sintaxe de exemplo envia uma mensagem de texto, mas as alterações se aplicam a todos os tipos de mensagens.

```
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<USER_PHONE_NUMBER>",      <!-- CHANGED -->
  "type": "text",
  "text": {
    "body": "<BODY_TEXT>"
  }
}'
```

-   `to`: aceita números de telefone de usuário do WhatsApp e BSUIDs de usuário.

### Como enviar resposta às mensagens

As alterações se aplicam às respostas do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#Creating).

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<USER_PHONE_NUMBER_OR_ID>",    <!-- CHANGED -->
      "wa_id": "<USER_PHONE_NUMBER>",          <!-- CHANGED -->
      "user_id": "<BSUID>"                     <!-- ADDED -->
    }
  ],
  "messages": [
    {
      "id": "<WHATSAPP_MESSAGE_ID>"
    }
  ]
}
```

-   `input`: retorna o BSUID do usuário se a mensagem for enviada para o respectivo BSUID. Caso contrário, o número de telefone do usuário ou a identificação do grupo (se a mensagem for enviada a um grupo) será retornado.-   `wa_id`: se você tiver enviado a mensagem para o BSUID do usuário, esse campo ficará vazio.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário se a mensagem for enviada para o BSUID dele. Caso contrário, a propriedade será omitida.

Exemplo de resposta a uma solicitação de envio de mensagem para o número de telefone de um usuário:

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234"      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

Exemplo de resposta a uma solicitação de envio de mensagem enviada ao BSUID de um usuário:

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "user.9373795779eb6441c8adb2eaee5b848e7dd174ddd302d7db62142f4722d574b6"      "wa_id": "",      "user_id": "user.9373795779eb6441c8adb2eaee5b848e7dd174ddd302d7db62142f4722d574b6"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

### Códigos de erro

Inclusão de uma nova resposta de código de erro para o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#Creating).

-   Código de erro: `131062`-   Detalhes: `You can only send authentication messages to recipients' phone numbers, not their business-scoped user IDs.`

## API de Mensagens de Marketing para o WhatsApp

### Como enviar solicitações de mensagem de marketing

A API de Mensagens de Marketing para o WhatsApp aceitará números de telefone e BSUIDs. Se você tiver os dois, recomendamos enviar mensagens para números de telefone, principalmente para continuar recebendo números de telefone em webhooks. Caso você tenha apenas o BSUID de um usuário, use-o.

As alterações serão aplicadas às solicitações do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/marketing\_messages](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages).

```
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/marketing_messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<USER_PHONE_NUMBER>",      <!-- CHANGED -->
  "type": "template",
  "template": {
    <EXPECTED_TEMPLATE_PARAMETERS>
  }
}'
```

-   `to`: aceita números de telefone de usuário do WhatsApp e BSUIDs de usuário.

### Como enviar resposta a uma mensagem de marketing

Essas alterações se aplicam às respostas do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/marketing\_messages](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages).

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<USER_PHONE_NUMBER_OR_ID>",    <!-- CHANGED -->
      "wa_id": "<USER_PHONE_NUMBER>",          <!-- CHANGED -->
      "user_id": "<BSUID>"                     <!-- ADDED -->
    }
  ],
  "messages": [
    {
      "id": "<WHATSAPP_MESSAGE_ID>",
      "message_status": "<PACING_STATUS>"
    }
  ]
}
```

-   `input`: retorna o BSUID do usuário se a mensagem for enviada para o respectivo BSUID. Caso contrário, o número de telefone do usuário ou a identificação do grupo (se a mensagem for enviada a um grupo) será retornado.-   `wa_id`: se você tiver enviado a mensagem para o BSUID do usuário, esse campo ficará vazio.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário se a mensagem for enviada para o BSUID dele. Caso contrário, a propriedade será omitida.

Exemplo de resposta ao envio de uma mensagem de modelo para o número de telefone de um usuário:

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234"      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA",      "message_status": "accepted"    }  ]}
```

Exemplo de resposta ao envio de uma mensagem de modelo para o BSUID de um usuário:

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "user.9373795779eb6441c8adb2eaee5b848e7dd174ddd302d7db62142f4722d574b6"      "wa_id": "",      "user_id": "user.9373795779eb6441c8adb2eaee5b848e7dd174ddd302d7db62142f4722d574b6"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA",      "message_status": "accepted"    }  ]}
```

## Webhooks de mensagens

### Webhooks de mensagens de status

As alterações serão aplicadas aos webhooks de [status de mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) enviada, entregue, lida e com falha.

Exceção: os webhooks de mensagens de status enviada ou com falha da API de Grupos não serão afetados.

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
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },

            <!-- Contacts will be included for sent, delivered, and read status -->
            "contacts": [
              {
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",             <!-- ADDED -->
                  "username": "<USERNAME>",                  <!-- ADDED -->
                  "country_code": "<USER_COUNTRY_CODE>"      <!-- ADDED -->
                },
                "wa_id": "<USER_PHONE_NUMBER>",              <!-- ADDED -->
                "user_id": "<BSUID>"                         <!-- ADDED -->
              }
            ],

            "statuses": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "status": "<STATUS>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "recipient_id": "<USER_PHONE_NUMBER>",       <!-- CHANGED -->
                "recipient_user_id": "<BSUID>",              <!-- ADDED --><!-- Only for status failed messages -->
                "errors": [
                  {
                    "code": <ERROR_CODE>,
                    "title": "<ERROR_TITLE>",
                    "message": "<ERROR_MESSAGE>",
                    "error_data": {
                      "details": "<ERROR_DETAILS>"
                    },
                    "href": "<ERROR_CODES_URL>"
                  }
                ]
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

-   `contacts`: nova matriz. Incluído apenas em mensagens com status enviada, entregue ou lida. Será omitido por completo para webhooks de mensagens de status com falha.
    -   `name`: nova propriedade. O valor será definido como o nome de exibição do usuário do WhatsApp.-   `username`: nova propriedade. Será definida como o nome de usuário do WhatsApp se o usuário tiver adotado um nome de usuário. Essa informação será omitida para webhooks de mensagens com status "enviada".-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).-   `wa_id`: nova propriedade. Será definida como vazia se o usuário tiver adotado um nome de usuário e (1) você tiver enviado a mensagem para o BSUID do usuário, (2) não tiver enviado mensagem para o número de telefone do usuário nos últimos 30 dias ou (3) o usuário não tiver adicionado seu número à lista de contatos do WhatsApp. Se a mensagem tiver sido enviada para o número de telefone do usuário, o valor será definido como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário do WhatsApp.-   `recipient_id`: novo valor vazio. Será definido como:
    -   o número de telefone do usuário do WhatsApp, se a mensagem foi enviada para o número de telefone do usuário.-   a identificação do grupo, se a mensagem foi enviada a um grupo.-   vazio, se você tiver enviado a mensagem para o BSUID do usuário e (1) não tiver enviado mensagens para o número de telefone do usuário nos últimos 30 dias e (2) o usuário não tiver adicionado seu número à lista de contatos do WhatsApp.-   `recipient_user_id`: nova propriedade. Será definida como o BSUID do usuário se a mensagem for enviada para o BSUID dele. Caso contrário, a propriedade será totalmente omitida.

Exemplo de webhook de mensagens com status "entregue" descrevendo uma mensagem enviada para o número de telefone de um usuário do WhatsApp que habilitou o recurso de nomes de usuário:

```
{ "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Pablo M.",                  "username": "@pablomorales",                  "country_code": "US"                },                "wa_id": "16505551234",                "user_id": "user.9373795779eb6441c8adb2eaee5b848e7dd174ddd302d7db62142f4722d574b6"              }            ],            "statuses": [              {                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "status": "delivered",                "timestamp": "1750030073",                "recipient_id": "16505551234",                "pricing": {                  "billable": true,                  "pricing_model": "PMP",                  "type": "regular",                  "category": "marketing"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Exemplo de webhook de mensagens com status "entregue" descrevendo uma mensagem enviada para o ID da empresa de um usuário do WhatsApp que habilitou o recurso de nome de usuário. Observe que `wa_id`, que normalmente seria definido como o número de telefone do usuário, está vazio:

```
{ "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Pablo M.",                  "username": "@pablomorales",                  "country_code": "US"                },                "wa_id": "",                "user_id": "user.9373795779eb6441c8adb2eaee5b848e7dd174ddd302d7db62142f4722d574b6"              }            ],            "statuses": [              {                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "status": "delivered",                "timestamp": "1750030073",                "recipient_id": "",                "recipient_user_id": "user.9373795779eb6441c8adb2eaee5b848e7dd174ddd302d7db62142f4722d574b6",                "pricing": {                  "billable": true,                  "pricing_model": "PMP",                  "type": "regular",                  "category": "marketing"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

### Webhooks de mensagens recebidas

As alterações se aplicam a webhooks de mensagens recebidas ([texto](/documentation/business-messaging/whatsapp/webhooks/reference/messages/text), [imagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/image), [interativa](/documentation/business-messaging/whatsapp/webhooks/reference/messages/interactive), entre outros), incluindo mensagens recebidas enviadas por usuários em uma conversa em grupo.

O exemplo de sintaxe abaixo é para uma mensagem de **texto** recebida, mas as alterações são as mesmas para todos os tipos de mensagem recebida.

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
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_PROFILE_NAME>",
                  "username": "<USERNAME>",                <!-- ADDED -->
                  "country_code": "<COUNTRY_CODE>"         <!-- ADDED -->
                },
                "wa_id": "<WHATSAPP_USER_ID>",             <!-- CHANGED -->
                "user_id": "<BSUID>"                       <!-- ADDED -->
              }
            ],
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",    <!-- CHANGED -->
                "from_user_id": "<BSUID>",                 <!-- ADDED -->
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "text",
                "text": {
                  "body": "<MESSAGE_TEXT_BODY>"
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. É definida como o código do país do usuário (_sujeito a alteração_).-   `wa_id`: novo valor (vazio). Se o usuário tiver habilitado o recurso de nome de usuário e você não tiver enviado mensagem para o número de telefone dele nos últimos 30 dias, ou se o seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário, o campo ficará vazio. Caso contrário, o número de telefone do usuário será definido.-   `user_id`: nova propriedade, definida como o BSUID do usuário.-   `from`: novo valor (vazio). Estará vazio se o usuário tiver habilitado o recurso de nome de usuário e você não tiver enviado mensagem para o número de telefone do usuário nos últimos 30 dias ou se o seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `from_user_id`: nova propriedade, definida como o BSUID do usuário.

Exemplo de mensagem de texto recebida de um usuário que habilitou o recurso de nome de usuário. Nesse cenário, a empresa não envia mensagens para o número de telefone do usuário nos últimos 30 dias e o usuário não adiciona o número de telefone da empresa à lista de contatos do WhatsApp. Observe que `wa_id`, que normalmente seria definido como o número de telefone do usuário, está vazio:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson",                  "username": "@realsheenanelson",                  "country_code": "US"                },                "wa_id": "",                "user_id": "user.93737..."              }            ],            "messages": [              {                "from": "",                "from_user_id": "user.93737...",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",                "timestamp": "1749416383",                "type": "text",                "text": {                  "body": "Does it come in another color?"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

### Webhooks de mensagens de status do sistema

As alterações se aplicam a webhooks de mensagens com [status do sistema](/documentation/business-messaging/whatsapp/webhooks/reference/messages/system).

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
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "system",
                "system": {
                  "body": "User...",                       <!-- CHANGED -->
                  "wa_id": "<NEW_WHATSAPP_USER_ID>",       <!-- CHANGED -->
                  "user_id": "<NEW_BSUID>",                <!-- ADDED -->
                  "type": "<SYSTEM_CHANGE_TYPE>"           <!-- CHANGED -->
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

-   `body`: nova string. Será definida como `User <WHATSAPP_USER_PROFILE_NAME> changed from <OLD_BSUID> to NEW_BSUID` se o usuário tiver alterado o número de telefone comercial.-   `wa_id`: novo valor (vazio). Ficará vazio se o usuário tiver habilitado o recurso de nome de usuário e você não tiver enviado mensagens para o número de telefone do usuário nos últimos 30 dias ou se o seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o novo BSUID do usuário.-   `type`: novo valor (`user_changed_user_id`). Será definido como `user_changed_user_id` se o usuário tiver alterado o número de telefone comercial.

### Webhooks user\_preferences

As alterações serão aplicadas aos webhooks [user\_preferences](/documentation/business-messaging/whatsapp/webhooks/reference/user_preferences).

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
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_NAME>",
                  "username": "<USERNAME>",                <!-- ADDED -->
                  "country_code": "<COUNTRY_CODE>"         <!-- ADDED -->
                },
                "wa_id": "<WHATSAPP_USER_ID>",             <!-- CHANGED -->
                "user_id": "<BSUID>"                       <!-- ADDED -->
              }
            ],
            "user_preferences": [
              {
                "wa_id": "<WHATSAPP_USER_ID>",             <!-- CHANGED -->
                "user_id": "<BSUID>",                      <!-- ADDED -->
                "detail": "<PREFERENCE_DESCRIPTION>",
                "category": "marketing_messages",
                "value": "<PREFERENCE>",
                "timestamp": <WEBHOOK_SENT_TIMESTAMP>
              }
            ]
          },
          "field": "user_preferences"
        }
      ]
    }
  ]
}
```

-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. É definida como o código do país do usuário (_sujeito a alteração_).-   `wa_id`: novo valor (vazio). Se o usuário tiver habilitado o recurso de nome de usuário e você não tiver enviado mensagem para o número de telefone dele nos últimos 30 dias, ou se o seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário, o campo ficará vazio. Caso contrário, o número de telefone do usuário será definido.-   `user_id`: nova propriedade, definida como o BSUID do usuário.

## API de Grupos

### Como obter informações do grupo

As alterações se aplicam a respostas do ponto de extremidade [GET /<GROUP\_ID>](/documentation/business-messaging/whatsapp/groups/reference#get-group-info).

```
{
  "participants": [
    {
      "wa_id": "<USER_PHONE_NUMBER>"  <!-- CHANGED -->
      "user_id": "<BSUID>",           <!-- ADDED -->
      "username": "<USERNAME>",       <!-- ADDED -->
      "country_code": "COUNTRY_CODE"  <!-- ADDED -->
    }
  ],
  "subject": "<GROUP_SUBJECT>",
  "id": "<GROUP_ID>",
  "messaging_product": "whatsapp"
}
```

-   `wa_id`: novo valor (vazio). Estará vazio se o usuário tiver habilitado o recurso de nome de usuário e você não tiver enviado mensagem para o número de telefone do usuário nos últimos 30 dias ou se o seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definido como o número de telefone do usuário. `user_id`: nova propriedade, definida como o BSUID do usuário.-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. É definida como o código do país do usuário (_sujeito a alteração_).

### Como obter as solicitações para participar de grupos

As alterações se aplicam a respostas do ponto de extremidade [GET /<GROUP\_ID>/join\_requests](/documentation/business-messaging/whatsapp/groups/reference#groups-with-join-requests).

```
{
  "data": [
    {
      "join_request_id": "<JOIN_REQUEST_ID>",
      "creation_timestamp": "<JOIN_REQUEST_TIMESTAMP>",
      "wa_id": "<USER_PHONE_NUMBER>",                    <!-- CHANGED -->
      "user_id": "<BSUID>",                              <!-- ADDED -->
      "username": "<USERNAME>",                          <!-- ADDED -->
      "country_code": "<COUNTRY_CODE>"                   <!-- ADDED -->
    }
  ],
  "paging": {
    "cursors": {
      "before": "<BEFORE_CURSOR>",
      "after": "<AFTER_CURSOR>"
    }
  }
}
```

-   `wa_id`: novo valor (vazio). Estará vazio se o usuário tiver habilitado o recurso de nome de usuário e você não tiver enviado mensagem para o número de telefone do usuário nos últimos 30 dias ou se o seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, ele será definido como o número de telefone do usuário.-   `user_id`: nova propriedade, definida como o BSUID do usuário.-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. É definida como o código do país do usuário (_sujeito a alteração_).

### Como remover participantes do grupo

As alterações se aplicam a solicitações do ponto de extremidade [DELETE /<GROUP\_ID>/participants](/documentation/business-messaging/whatsapp/groups/reference#remove-group-participants).

```
curl -g -X DELETE 'https://graph.facebook.com/<API_VERSION>/<GROUP_ID>/participants' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "participants": [
    {
      "user": "<USER_PHONE_NUMBER>"    <!-- CHANGED -->
    }
  ]
}'
```

-   `user`: aceitará o número de telefone ou o BSUID do usuário.

## Webhooks da API de Grupos

### Webhooks group\_participants\_update

Essas alterações se aplicam ao webhook [group\_participants\_update](/documentation/business-messaging/whatsapp/groups/webhooks#group-participants-update-webhooks).

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
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "groups": [
              {
                "timestamp": <WEBHOOK_TRIGGER_TIMESTAMP>,
                "group_id": "<GROUP_ID>",

                <!-- Only if business removes participant from group -->
                "type": "group_participants_remove",
                "request_id": "REQUEST_ID",
                "removed_participants": [
                  {
                    "input": "<USER_PHONE_NUMBER>",      <!-- CHANGED -->
                  }
                ],
                "initiated_by": "business"

                <!-- Only if user removes themself from group -->
                "type": "group_participants_remove",
                "request_id": "REQUEST_ID",
                "removed_participants": [
                  {
                    "wa_id": "<USER_PHONE_NUMBER>"       <!-- CHANGED -->
                    "user_id": "<BSUID>",
                    "username": "<USERNAME>",
                    "country_code": "<COUNTRY_CODE>"
                  }
                ],
                "initiated_by": "participant"

                <!-- Only if user joins group via invite link -->
                "type": "group_participants_add",
                "reason": "invite_link",
                "added_participants": [
                  {
                    "wa_id": "<USER_PHONE_NUMBER>"       <!-- CHANGED -->
                    "user_id": "<BSUID>",                <!-- ADDED -->
                    "username": "<USERNAME>",            <!-- ADDED -->
                    "country_code": "<COUNTRY_CODE>"     <!-- ADDED -->
                  }
                ]

                <!-- Only if join request created -->
                "type": "group_join_request_created",
                "join_request_id": "<JOIN_REQUEST_ID>",
                "wa_id": "<USER_PHONE_NUMBER>",          <!-- CHANGED -->
                "user_id": "<BSUID>",                    <!-- ADDED -->
                "username": "<USERNAME>",                <!-- ADDED -->
                "country_code": "<COUNTRY_CODE>"         <!-- ADDED --><!-- Only if join request revoked -->
                "type": "group_join_request_revoked",
                "join_request_id": "<JOIN_REQUEST_ID>",
                "wa_id": "<USER_PHONE_NUMBER>"           <!-- CHANGED -->
                "user_id": "<BSUID>",                    <!-- ADDED -->
                "username": "<USERNAME>",                <!-- ADDED -->
                "country_code": "<COUNTRY_CODE>"         <!-- ADDED -->

              }
            ]
          },
          "field": "group_participants_update"
        }
      ]
    }
  ]
}
```

-   `wa_id`: novo valor (vazio). Estará vazio se o usuário tiver habilitado o recurso de nome de usuário e você não tiver enviado mensagem para o número de telefone do usuário nos últimos 30 dias ou se o seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).

## API de Bloqueio de Usuários

### Como bloquear ou desbloquear solicitações de usuários

As alterações se aplicam às solicitações POST e DELETE para [bloquear usuários](/documentation/business-messaging/whatsapp/block-users). Este exemplo mostra a sintaxe de uma solicitação para bloquear um usuário, mas as alterações também se aplicam a solicitações de desbloqueio.

```
{
  "messaging_product": "whatsapp",
  "block_users": {
    "added_users": [
      {
        "input": "<USER_PHONE_NUMBER>",  <!-- CHANGED -->
        "wa_id": "<USER_PHONE_NUMBER>",  <!-- CHANGED -->
        "user_id": "<BSUID>"             <!-- ADDED -->
      }
    ]
  }
}
```

-   `input`: será definido como o BSUID do usuário se você tiver usado esse ID ao bloquear ou desbloquear a pessoa. Será definido como o número de telefone do usuário se você tiver usado o número de telefone dele ao bloqueá-lo ou desbloqueá-lo.-   `wa_id`: novo valor vazio. Ficará vazio se você tiver usado o BSUID do usuário ao bloqueá-lo ou desbloqueá-lo. Será definido como o número de telefone do usuário se você tiver usado o número de telefone dele ao bloqueá-lo ou desbloqueá-lo.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário se você tiver usado o BSUID dele ao bloqueá-lo ou desbloqueá-lo. Se você tiver usado o número de telefone do contato, a propriedade será omitida.

## API de Ligações

### Solicitações de ligações iniciadas pela empresa

As alterações se aplicam a solicitações da API de Ligações iniciadas pela empresa.

```
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "to": "<USER_PHONE_NUMBER>",    <!-- CHANGED -->
  "action": "connect",
  "session": {
    "sdp_type": "offer",
    "sdp": "<RFC_4566_SDP>"
  }
}'
```

-   `to`: aceita números de telefone de usuário do WhatsApp e BSUIDs de usuário.

### Como obter permissões de ligação

As alterações se aplicam a solicitações para [obter permissões para ligações](/documentation/business-messaging/whatsapp/calling/user-call-permissions#call-permission-request-basics). Não há alterações nas respostas.

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/call_permissions?user_wa_id=<BSUID>' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
```

-   `user_wa_id`: aceita números de telefone e BSUIDs de usuário do WhatsApp.

### Como enviar uma solicitação de permissão para ligação

Confira como [enviar pedidos de contato](#send-message-requests).

### Webhooks de solicitação de permissão para ligação

Confira os [webhooks de mensagens recebidas](#incoming-messages-webhooks).

### Webhooks de ligações conectadas iniciadas pela empresa

As alterações se aplicam a webhooks de [ligações conectadas](/documentation/business-messaging/whatsapp/calling/reference#call-connect-webhook) iniciadas pela empresa.

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "contacts": [                                  <!-- ADDED -->
              {
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",           <!-- ADDED -->
                  "country_code": "<USER_COUNTRY_CODE>"    <!-- ADDED -->
                },
                "user_id": "<BSUID>"                       <!-- ADDED -->
              }
            ],
            "calls": [
              {
                "biz_opaque_callback_data": "<data>",
                "session": {
                  "sdp_type": "answer",
                  "sdp": "<SDP>"
                },
                "from": "<BUSINESS_PHONE_NUMBER>",
                "id": "<WHATSAPP_CALL_ID>",
                "to": "<USER_PHONE_NUMBER>",               <!-- CHANGED -->
                "to_user_id": "<BSUID>",                   <!-- ADDED -->
                "event": "connect",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "direction": "BUSINESS_INITIATED"
              }
            ],
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `contacts`: um novo objeto de contatos será incluído.-   `name`: nova propriedade. Será definida como o nome do perfil do usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `to`: novo valor vazio. Se o usuário tiver adotado um nome de usuário e (1) a mensagem tiver sido enviada para o número de telefone dele, (2) o seu número de telefone comercial já estiver na lista de contatos do WhatsApp do usuário ou (3) você tiver enviado mensagem ou ligado para o número de telefone dele nos últimos 30 dias, essa propriedade será definida como o número de telefone do usuário do WhatsApp. Caso contrário, será definida como uma string vazia.-   `to_user_id`: nova propriedade. Será definida como o BSUID do usuário.

### Webhooks de ligações conectadas iniciadas pelo usuário

As alterações serão aplicadas a webhooks de [ligações conectadas](/documentation/business-messaging/whatsapp/calling/reference#call-connect-webhook) iniciadas pelo usuário.

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "calls": [
              {
                "session": {
                  "sdp_type": "offer",
                  "sdp": "<SDP>"
                },
                "from": "<USER_PHONE_NUMBER>",             <!-- CHANGED -->
                "from_user_id": "<BSUID>",                 <!-- ADDED -->
                "id": "<WHATSAPP_CALL_ID>",
                "to": "<BUSINESS_PHONE_NUMBER>",
                "event": "connect",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "direction": "USER_INITIATED"
              }
            ],
            "contacts": [
              {
                "wa_id": "<USER_PHONE_NUMBER>",            <!-- CHANGED -->
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",           <!-- ADDED -->
                  "username": "<USERNAME>",                <!-- ADDED -->
                  "country_code": "<COUNTRY_CODE>"         <!-- ADDED -->
                },
                "user_id": "<BSUID>"                       <!-- ADDED -->
              }
            ],
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `from`: novo valor vazio. Caso o usuário tenha definido um nome de usuário, ele será configurado como uma string vazia se (1) você não tiver enviado mensagem ou ligado para o número de telefone do usuário nos últimos 30 dias ou (2) seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `wa_id`: novo valor vazio. Caso o usuário tenha definido um nome de usuário, ele será configurado como uma string vazia se (1) você não tiver enviado mensagem ou ligado para o número de telefone do usuário nos últimos 30 dias ou (2) seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `name`: nova propriedade. Será definida como o nome do perfil do usuário.-   `username`: nova propriedade. Se o usuário tiver definido um nome de usuário, ele será usado para esse campo. Caso contrário, a propriedade será omitida.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.

### Webhooks de ligações iniciadas pela empresa que foram encerradas

As alterações se aplicam a webhooks de ligações iniciadas pela empresa que foram [encerradas](/documentation/business-messaging/whatsapp/calling/reference#call-terminate-webhook).

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
                "biz_opaque_callback_data": "<BUSINESS_OPAQUE_DATA>",
                "from": "<BUSINESS_PHONE_NUMBER>",
                "id": "<WHATSAPP_CALL_ID>",
                "to": "<USER_PHONE_NUMBER>",              <!-- CHANGED -->
                "to_user_id": "<BSUID>",                  <!-- ADDED -->
                "event": "terminate",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "direction": "BUSINESS_INITIATED",
                "status": "COMPLETED"
              }
            ],
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "contacts": [                                  <!-- ADDED -->
              {
                "profile": {
                  "name": "<USER_PROFILE_NAME>",           <!-- ADDED -->
                  "country_code": "<USER_COUNTRY_CODE>"    <!-- ADDED -->

                },
                "user_id": "<BSUID>"                       <!-- ADDED -->
              }
            ],
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `to`: novo valor vazio. Se o usuário tiver adotado um nome de usuário e (1) a ligação tiver sido feita para o número de telefone dele, (2) seu número de telefone comercial já estiver na lista de contatos do WhatsApp do usuário ou (3) você tiver enviado mensagem ou ligado para o número de telefone dele nos últimos 30 dias, essa propriedade será definida como o número de telefone do usuário do WhatsApp. Caso contrário, será definida como uma string vazia.-   `to_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `contacts`: um novo objeto de contatos será incluído.-   `name`: nova propriedade. Será definida como o nome do perfil do usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.

### Webhooks de ligações encerradas iniciadas pelo usuário

As alterações serão aplicadas aos webhooks de ligações iniciadas pelo usuário que foram [encerradas](/documentation/business-messaging/whatsapp/calling/reference#call-terminate-webhook).

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "calls": [
              {
                "duration": <CALL_DURATION>,
                "start_time": "<CALL_START_TIMESTAMP>",
                "biz_opaque_callback_data": "<BUSINESS_OPAQUE_DATA>",
                "end_time": "<CALL_END_TIMESTAMP>",
                "from": "<USER_PHONE_NUMBER>",             <!-- CHANGED -->
                "from_user_id": "<BSUID>",                 <!-- ADDED -->
                "id": "<WHATSAPP_CALL_ID>",
                "to": "<BUSINESS_PHONE_NUMBER>",
                "event": "terminate",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "direction": "USER_INITIATED",
                "status": "COMPLETED"
              }
            ],
            "contacts": [
              {
                "wa_id": "<USER_PHONE_NUMBER>",            <!-- CHANGED -->
                "profile": {
                  "name": "<USER_PROFILE_NAME>",           <!-- ADDED -->
                  "country_code": "<USER_COUNTRY_CODE>"    <!-- ADDED -->
                },
                "user_id": "<BSUID>"                       <!-- ADDED -->
              }
            ],
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `from`: novo valor vazio. O campo ficará vazio se o usuário tiver adotado um nome de usuário e (1) seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário e (2) você não tiver enviado mensagem ou ligado para o número de telefone do usuário nos últimos 30 dias. Caso contrário, será definida como o número de telefone do usuário.-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `wa_id`: novo valor vazio. O campo ficará vazio se o usuário tiver adotado um nome de usuário e (1) seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário e (2) você não tiver enviado mensagem ou ligado para o número de telefone do usuário nos últimos 30 dias. Caso contrário, será definida como o número de telefone do usuário.-   `name`: nova propriedade. Será definida como o nome do perfil do usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.

### Webhooks de status de ligações iniciadas pela empresa

As alterações serão aplicadas a webhooks de [status de ligações](/documentation/business-messaging/whatsapp/calling/reference#call-status-webhook) iniciadas pela empresa.

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
                "biz_opaque_callback_data": "<BUSINESS_OPAQUE_DATA>",
                "id": "<WHATSAPP_CALL_ID>",
                "type": "call",
                "status": "<STATUS>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "recipient_id": "<USER_PHONE_NUMBER>",     <!-- CHANGED -->
                "recipient_user_id": "<BSUID>"             <!-- ADDED -->
              }
            ],
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "contacts": [                                  <!-- ADDED -->
              {
                "profile": {
                  "name": "<USER_PROFILE_NAME>",           <!-- ADDED -->
                  "country_code": "<USER_COUNTRY_CODE>"    <!-- ADDED -->
                },
                "user_id": "<BSUID>"                       <!-- ADDED -->
              }
            ],
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `recipient_id`: novo valor vazio. Essa propriedade será definida como uma string vazia se o usuário do WhatsApp tiver adotado um nome de usuário e (1) a ligação tiver sido feita para o respectivo BSUID, (2) seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário e (3) você não tiver enviado mensagem ou ligado para o número de telefone do usuário nos últimos 30 dias. Caso contrário, será definida como o número de telefone do usuário.-   `recipient_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `contacts`: uma nova matriz de contatos será incluída.-   `name`: nova propriedade. Será definida como o nome do perfil do usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.

### Convites de SIP para ligações iniciadas pela empresa

As alterações se aplicam a ligações iniciadas pela empresa usando [SIP](/documentation/business-messaging/whatsapp/calling/sip).

```
<!-- BEGIN CHANGE -->
INVITE sip:<BSUID>@wa.meta.vc;transport=tls SIP/2.0
<!-- END CHANGE -->

Record-Route: <sip:+159.65.244.171:5061;transport=tls;lr;ftag=Kc9QZg4496maQ;nat=yes>
Via: SIP/2.0/TLS 159.65.244.171:5061;received=2803:6081:798c:93f8:5f9b:bfe8:300:0;branch=z9hG4bK0da2.36614b8977461b486ceabc004c723476.0;i=617261
Via: SIP/2.0/TLS 137.184.87.1:35181;rport=56533;received=137.184.87.1;branch=z9hG4bKQNa6meey5Dj2g
Max-Forwards: 69
From: <sip:+17125550259@meta-voip.example.com>;tag=Kc9QZg4496maQ

<!-- BEGIN CHANGE -->
To: <sip:<BSUID>@wa.meta.vc>
<!-- END CHANGE -->

Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
CSeq: 96743476 INVITE
Contact: <sip:mod_sofia@137.184.87.1:35181;transport=tls;swrad=137.184.87.1~56533~3>
User-Agent: SignalWire
Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, MESSAGE, INFO, UPDATE, REGISTER, REFER, NOTIFY
Supported: timer, path, replaces
Allow-Events: talk, hold, conference, refer
Session-Expires: 600;refresher=uac
Min-SE: 90
Content-Type: application/sdp
Content-Disposition: session
Content-Length: 2427
X-Relay-Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
Remote-Party-ID: <sip:+17125550259@meta-voip.example.com>;party=calling;screen=yes;privacy=off
Content-Type: application/sdp
Content-Length:  2427

<!-- SDP omitted for brevity -->
```

-   `BSUID`: será o BSUID do usuário se a ligação tiver sido feita para o BSUID do usuário ou o número de telefone do usuário se tiver sido enviada para o número de telefone.

### Convites de SIP para ligações iniciadas pelo usuário

As alterações se aplicam a ligações iniciadas pelo usuário realizadas usando [SIP](/documentation/business-messaging/whatsapp/calling/sip).

```
INVITE sip:+17015558857@meta-voip.example.com;transport=tls SIP/2.0
Via: SIP/2.0/TLS [2803:6080:e888:51aa:d4a4:c5e0:300:0]:33819;rport=33819;received=2803:6080:e888:51aa:d4a4:c5e0:300:0;branch=z9hG4bKPjNvs.IZBnUa1W4l8oHPpk3SUMmcx3MMcE;alias
Max-Forwards: 70

<!-- BEGIN CHANGE -->
From: "<BSUID>" <sip:<BSUID>@wa.meta.vc>;tag=bbf1ad6e-79bb-4d9c-8a2c-094168a10bea
<!-- END CHANGE -->

To: <sip:+17015558857@meta-voip.example.com>

<!-- BEGIN CHANGE -->
Contact: <sip:<BSUID>@wa.meta.vc;transport=tls;ob>;isfocus
<!-- END CHANGE -->

Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCAzODg1NTE5NEU1NTBEMTc1RTFFQUY5NjNCQ0FCRkEzRhwYCzE3MDE1NTU4ODU3FQIAAA==
CSeq: 2824 INVITE
Route: <sip:onevc-sip-proxy-dev.fbinfra.net:8191;transport=tls;lr>
X-FB-External-Domain: wa.meta.vc

<!-- BEGIN ADDITION -->
x-wa-meta-user-id: <BSUID>
x-wa-meta-user-name: <USERNAME>
x-wa-meta-user-country-code: <USER_COUNTRY_CODE><!-- END ADDITION -->

Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
User-Agent: Facebook SipGateway
Content-Type: application/sdp
Content-Length: 1028

<!-- SDP omitted for brevity -->
```

-   `BSUID`: será o BSUID do usuário se a ligação tiver sido feita para o respectivo BSUID ou se o usuário tiver adotado um nome de usuário e (1) você não tiver enviado mensagem ou ligado para o número de telefone do usuário nos últimos 30 dias ou (2) seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será o número de telefone do usuário.-   `USERNAME`: será o nome de usuário do usuário.-   `USER_COUNTRY_CODE`: será o código do país do usuário (_sujeito a alteração_).

### Respostas OK do SIP para ligações iniciadas pela empresa

```
SIP/2.0 200 OK
Via: SIP/2.0/TLS 54.172.60.1:5061;received=2803:6080:f934:8894:7eb5:24f9:300:0;branch=z9hG4bK1e5a.0da2ace9cc912d9e5f2595ca4acb9847.0
Via: SIP/2.0/UDP 172.25.10.217:5060;rport=5060;branch=z9hG4bK5cdada8c-cbf0-4369-b02d-cc97d3c36f2b_c3356d0b_54-457463274351249162
Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Record-Route: <sip:wa.meta.vc;transport=tls;lr>
Record-Route: <sip:54.172.60.1:5061;transport=tls;lr;r2=on>
Record-Route: <sip:54.172.60.1;lr;r2=on>
Call-ID: f304a1d2cafb8139c1f9ff93a7733586@0.0.0.0

<!-- BEGIN CHANGE -->
From: "<BSUID>" <sip:<BSUID>@meta-voip.example.com>;tag=28460006_c3356d0b_5cdada8c-cbf0-4369-b02d-cc97d3c36f2b
<!-- END CHANGE -->

To: <sip:12195550714@wa.meta.vc>;tag=0d185053-2615-46c7-8ff2-250bda494cf1
CSeq: 2 INVITE
Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
Supported: timer
X-FB-External-Domain: wa.meta.vc

<!-- BEGIN CHANGE -->
Contact: <sip:<BSUID>@wa.meta.vc;transport=tls;ob;X-FB-Sip-Smc-Tier=collaboration.sip_gateway.sip.prod>;isfocus
<!-- END CHANGE --><!-- BEGIN ADDITION -->
x-wa-meta-user-id: <BSUID>
x-wa-meta-user-name: <USERNAME>
x-wa-meta-user-country-code: <COUNTRY_CODE><!-- END ADDITION -->

Content-Type: application/sdp
Content-Length:   645

<!-- SDP omitted for brevity -->
```

-   `BSUID`: será o BSUID do usuário se a ligação tiver sido feita para o respectivo BSUID ou se o usuário tiver adotado um nome de usuário e (1) você não tiver enviado mensagem ou ligado para o número de telefone do usuário nos últimos 30 dias ou (2) seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será o número de telefone do usuário.-   `USERNAME`: será o nome de usuário do usuário.-   `USER_COUNTRY_CODE`: será o código do país do usuário (_sujeito a alteração_).

### Respostas BYE do SIP para ligações iniciadas pela empresa e pelo usuário

```
BYE sip:+12195550714@103.30.244.182:5061;transport=tls SIP/2.0
Via: SIP/2.0/TLS [2803:6080:e800:6746::]:56843;rport;branch=z9hG4bKPj65946b3e6f68128d52b6a498a8fd00a5;alias
Record-Route: <sip:wa.meta.vc;transport=tls;lr>
Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Via: SIP/2.0/TLS [2803:6080:e800:6746:3347:2251:14a4:a00]:5061;branch=z9hG4bKPj65946b3e6f68128d52b6a498a8fd00a5
Via: SIP/2.0/TLS [2803:6080:e934:3f82:b543:8a4d:1414:a00]:52767;rport=52767;received=2803:6080:e934:3f82:b543:8a4d:1414:a00;branch=z9hG4bKPj-D8BXdIVMqAUT9MIJIp78LxKUZNnjYKF;alias
Max-Forwards: 69

<!-- BEGIN CHANGE -->
From: <sip:<BSUID>@wa.meta.vc>;tag=0fb8b5f1-2703-49f4-a454-46b1bcb9bfac
<!-- END CHANGE -->

To: <sip:+12195550714@dev.moxcal.com>;tag=2c21fad0-c581-4e54-a707-3bd52abfcc3f
Call-ID: 21e38222-6fcb-4631-8e7d-5b94cf849c90
CSeq: 31641 BYE

<!-- BEGIN ADDITION -->
x-wa-meta-user-id: <BSUID>
x-wa-meta-user-name: <USERNAME>
x-wa-meta-user-country-code: <USER_COUNTRY_CODE><!-- END ADDITION -->

X-FB-External-Domain: wa.meta.vc
Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
User-Agent: Facebook SipGateway
Content-Length:  0
```

-   `BSUID`: será o BSUID do usuário se a ligação tiver sido feita para o respectivo BSUID ou se o usuário tiver adotado um nome de usuário e (1) você não tiver enviado mensagem ou ligado para o número de telefone do usuário nos últimos 30 dias ou (2) seu número de telefone comercial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será o número de telefone do usuário.-   `USERNAME`: será o nome de usuário do usuário.-   `USER_COUNTRY_CODE`: será o código do país do usuário (_sujeito a alteração_).

## Coexistência

### Webhooks de histórico

As alterações serão aplicadas aos webhooks de [histórico](/documentation/business-messaging/whatsapp/webhooks/reference/history) que descrevem o histórico de conversas do app WhatsApp Business de um cliente empresarial integrado.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<CUSTOMER_WABA_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<CUSTOMER_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<CUSTOMER_PHONE_NUMBER_ID>"
            },
            "history": [
              {
                "metadata": {
                  "phase": <PHASE>,
                  "chunk_order": <CHUNK_ORDER>,
                  "progress": <PROGRESS>
                },
                "threads": [
                  <!-- First chat history thread object -->
                  {
                    "id": "<WHATSAPP_USER_PHONE_NUMBER>",                    <!-- CHANGED -->
                    "context": {                                             <!-- ADDED -->
                      "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>",               <!-- ADDED -->
                      "user_id": "<BSUID>",                                  <!-- ADDED -->
                      "username": "<USERNAME>",                              <!-- ADDED -->
                      "country_code": "US"                                   <!-- ADDED -->
                    },
                    "messages": [
                      <!-- First message object in thread -->
                      {
                        "from": "<BUSINESS_OR_WHATSAPP_USER_PHONE_NUMBER>",  <!-- CHANGED -->
                        "from_user_id" : "<BSUID>",                          <!-- ADDED -->
                        "to": "<WHATSAPP_USER_PHONE_NUMBER>",
                        "id": "<WHATSAPP_MESSAGE_ID>",
                        "timestamp": "<DEVICE_TIMESTAMP>,
                        "type": "<MESSAGE_TYPE>",
                        "<MESSAGE_TYPE>": {
                          <MESSAGE_CONTENTS>
                        },
                        "history_context": {
                          "status": "<MESSAGE_STATUS>"
                        }
                      },
                      <!-- Additional message objects in thread would follow, if any -->
                    ]
                  },
                  <!-- Additional chat history thread objects would follow, if any -->
                ]
              }
            ]
          },
          "field": "history"
        }
      ]
    }
  ]
}
```

-   `id`: novo valor vazio. Será uma string vazia se, no momento em que o usuário enviou a mensagem para o cliente comercial, (1) o usuário já tiver habilitado nomes de usuário, (2) o cliente comercial não tiver enviado mensagem para o número de telefone do usuário em até 30 dias a partir do momento do envio da mensagem e (3) o número de telefone comercial do cliente não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `context`: um novo objeto de contexto será incluído.-   `wa_id`: nova propriedade. Será uma string vazia se, no momento em que o usuário enviou a mensagem para o cliente comercial, (1) o usuário já tiver habilitado nomes de usuário, (2) o cliente comercial não tiver enviado mensagem para o número de telefone do usuário em até 30 dias a partir do momento do envio da mensagem e (3) o número de telefone comercial do cliente não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (\_sujeito a alteração).-   `from`: novo valor vazio. Será uma string vazia se, no momento em que o usuário enviou a mensagem para o cliente comercial, (1) o usuário já tiver habilitado nomes de usuário, (2) o cliente comercial não tiver enviado mensagem para o número de telefone do usuário em até 30 dias a partir do momento do envio da mensagem e (3) o número de telefone comercial do cliente não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.

As alterações serão aplicadas a webhooks de [histórico](/documentation/business-messaging/whatsapp/webhooks/reference/history) que descrevem um ativo de mídia enviado de um usuário do WhatsApp para um cliente comercial ou vice-versa.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<CUSTOMER_WABA_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<CUSTOMER_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<CUSTOMER_PHONE_NUMBER_ID>"
            },
            "contacts": [                                              <!-- ADDED -->
              {
                "profile": {
                  "username": "<USERNAME>",                            <!-- ADDED -->
                  "country_code": "<COUNTRY_CODE>"                     <!-- ADDED -->
                },
                "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>",               <!-- ADDED -->
                "user_id": "<BSUID>"                                   <!-- ADDED -->
              },
            ],

            <!-- Only for messages sent from a user to a business -->
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",
                "from_user_id": "<BSUID>",                             <!-- ADDED -->
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<ORIGINAL_WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "<MEDIA_TYPE>",
                "<MEDIA_TYPE>": {
                  <MEDIA_METADATA>
                }
              }
            ],

            <!-- Only for messages sent from a business to a user -->
            "message_echoes": [
              {
                "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                "to": "<WHATSAPP_USER_PHONE_NUMBER>",                  <!-- CHANGED -->
                "to_user_id": "<BSUID>",                               <!-- ADDED -->
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "<MESSAGE_TYPE>",
                "<MESSAGE_TYPE>": {
                  <MESSAGE_CONTENTS>
                }
              }
            ]

          },
          "field": "history"
        }
      ]
    }
  ]
}
```

-   `contacts`: um novo objeto de contatos será incluído.-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).-   `wa_id`: nova propriedade. Será uma string vazia se, no momento em que o usuário enviou a mensagem para o cliente comercial, (1) o usuário já tiver habilitado nomes de usuário, (2) o cliente comercial não tiver enviado mensagem para o número de telefone do usuário em até 30 dias a partir do momento do envio da mensagem e (3) o número de telefone comercial do cliente não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `to`: novo valor vazio. Será uma string vazia se, no momento em que a empresa enviou a mensagem para o usuário, (1) o usuário já tiver habilitado nomes de usuário, (2) o cliente comercial não tiver enviado mensagem para o número de telefone do usuário em até 30 dias a partir do momento do envio da mensagem e (3) o número de telefone comercial do cliente não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `to_user_id`: nova propriedade. Será definida como o BSUID do usuário.

### Webhooks smb\_message\_echoes

As alterações serão aplicadas aos webhooks [smb\_message\_echoes](/documentation/business-messaging/whatsapp/webhooks/reference/smb_message_echoes).

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
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [                                     <!-- ADDED -->
              {
                "profile": {
                  "username": "<USERNAME>",                   <!-- ADDED -->
                  "country_code": "<COUNTRY_CODE>"            <!-- ADDED -->
                },
                "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>",      <!-- ADDED -->
                "user_id": "<BSUID>"                          <!-- ADDED -->
              }
            ],
            "message_echoes": [
              {
                "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                "to": "<WHATSAPP_USER_PHONE_NUMBER>",         <!-- CHANGED -->
                "to_user_id": "<BSUID>",                      <!-- ADDED -->
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "<MESSAGE_TYPE>",
                "<MESSAGE_TYPE>": {
                  <MESSAGE_CONTENTS>
                }
              }
            ]
          },
          "field": "smb_message_echoes"
        }
      ]
    }
  ]
}
```

-   `contacts`: um novo objeto de contatos será incluído.-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).-   `wa_id`: nova propriedade. Será uma string vazia se, no momento em que o usuário enviou a mensagem para o cliente comercial, (1) o usuário já tiver habilitado nomes de usuário, (2) o cliente comercial não tiver enviado mensagem para o número de telefone do usuário em até 30 dias a partir do momento do envio da mensagem e (3) o número de telefone comercial do cliente não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `to`: novo valor vazio. Será uma string vazia se, no momento em que a empresa enviou a mensagem para o usuário, (1) o usuário já tiver habilitado nomes de usuário, (2) o cliente comercial não tiver enviado mensagem para o número de telefone do usuário em até 30 dias a partir do momento do envio da mensagem e (3) o número de telefone comercial do cliente não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `to_user_id`: nova propriedade. Será definida como o BSUID do usuário.

### Webhooks smb\_app\_state\_sync

As alterações serão aplicadas aos webhooks [smb\_app\_state\_sync](/documentation/business-messaging/whatsapp/webhooks/reference/smb_app_state_sync).

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
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "state_sync": [
              {
                "type": "contact",
                "contact": {
                  "full_name": "<CONTACT_FULL_NAME>",
                  "first_name": "<CONTACT_FIRST_NAME>",
                  "phone_number": "<CONTACT_PHONE_NUMBER>",    <!-- CHANGED -->
                  "user_id": "<BSUID>",                        <!-- ADDED -->
                  "username": "<USERNAME>",                    <!-- ADDED -->
                  "country_code": "<COUNTRY_CODE>"             <!-- ADDED -->
                },
                "action": "<ACTION>",
                "metadata": {
                  "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>"
                }
              },
              <!-- Additional contacts would follow, if any -->
            ]
          },
          "field": "smb_app_state_sync"
        }
      ]
    }
  ]
}
```

-   `phone_number`: novo valor vazio. Será uma string vazia se, no momento da solicitação de sincronização, (1) o usuário já tiver habilitado nomes de usuário, (2) o cliente empresarial não tiver enviado mensagem para o número de telefone do usuário no prazo de 30 dias a partir da solicitação de sincronização e (3) o número de telefone comercial do cliente empresarial não estiver na lista de contatos do WhatsApp do usuário. Caso contrário, será definida como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `country_code`: nova propriedade. Será definida como o código do país do usuário (_sujeito a alteração_).

## Análise

Nenhuma alteração.

## Cobrança e faturamento

Nenhuma alteração

## Perguntas frequentes

**O que preciso fazer para aceitar nomes de usuário?**

As cargas de webhooks passarão a incluir o BSUID e o código do país (sujeito a alteração) antes que os nomes de usuário fiquem disponíveis para os usuários do WhatsApp. Será necessário adotar BSUIDs para processar mensagens iniciadas por usuários que tenham um nome de usuário. Para isso, você deve:

-   Atualizar suas integrações de webhook para aceitar BSUIDs, que serão atribuídos a uma nova propriedade `user_id` nos webhooks existentes.-   Desenvolver lógica para possibilitar o uso de vários identificadores (números de telefone de usuários que não são nomes de usuário; BSUIDs dos usuários que adotam nomes de usuário se o número de telefone não estiver presente nos webhooks) e mapear os campos relevantes de volta para seu CRM/banco de dados.-   Atualizar sistemas internos e externos relacionados a essas integrações para poder lidar com BSUIDs e combinar com identificadores anteriores; principalmente CRM (3P ou banco de dados interno) e quaisquer ferramentas ou fluxos de trabalho disparados do CRM (por exemplo, mensagens de campanha disparadas, gerenciamento de campanhas, mensuração, cobrança etc.).-   Caso você ainda precise do número de telefone do cliente, atualize os bots/jornadas de mensagens (se usados) para solicitar o telefone, lidar com cenários em que os usuários não compartilham o número de telefone e fazer iterações sobre essas novas jornadas de conversa. Consulte os [Termos do WhatsApp Business para Soluções](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-solution-terms&h=AT2W2v3PqI2_Bc0dANQdSP2z2SnDUl9obumW51rKWvhGXGm0r52Y_jBJJr8jbMAe1UlDQ0UFo-mySTVQytrrNb-MumGmFkRKJPeuIndbE27iJKG_JcyV5cVAS3TlF9ogv1ABw8Ds4hBb2eUJDvzpn8rgtD0) para ver as restrições gerais aos casos de uso de IA.-   Caso você tenha vários portfólios empresariais na Meta, implemente uma solução que permita o acesso central ao CRM em todos eles para minimizar as despesas operacionais relacionadas ao uso e armazenamento de BSUIDs.

**Quando receberei uma BSUID ou um número de telefone?**

Quando um usuário adota um nome de usuário, ele tem privacidade de número de telefone, ou seja, o número não será exibido no app nem será incluído em webhooks. Se o número de telefone do usuário não estiver presente (a propriedade `wa_id` estiver definida como uma string vazia), será possível usar o respectivo BSUID, que será incluído e atribuído a uma nova propriedade `user_id`.

Se um usuário não tiver adotado nomes de usuário, você receberá o número de telefone e o BSUID.

Continuaremos compartilhando o número de telefone em alguns casos, principalmente para interações com clientes existentes. Incluiremos ou retornaremos automaticamente o número de telefone do usuário em até 30 dias após qualquer interação entre você e o número de telefone do usuário ou se o número de telefone da sua empresa estiver na lista de contatos do WhatsApp do usuário.

Porém, de acordo com os Termos de Serviço da API de Nuvem, os números de telefone e os dados relacionados são armazenados por até 30 dias para compatibilidade com recursos como redirecionamento de mensagens. Em algumas situações, você pode receber mensagens de usuários existentes fora desse período de 30 dias, o que pode parecer uma nova conversa de usuário para você. Por isso, é essencial que você comece a aceitar BSUIDs assim que possível para evitar perder o contexto das conversas.

**Por que empresas e parceiros diretamente integrados que usam a API de Nuvem, incluindo anunciantes de anúncios de clique para o WhatsApp diretamente integrados, precisam adotar o BSUID?**

Para continuar processando as mensagens recebidas de usuários do WhatsApp, os parceiros e as empresas devem adotar o BSUID. Depois que o BSUID for adotado e as mensagens de usuários com nomes de usuário forem processadas, os webhooks de mensagens não incluirão mais números de telefone em alguns casos como parte do webhook, como wa\_id. Portanto, parceiros e empresas precisarão garantir que todos os sistemas conectados possam lidar com o BSUID. Elas também poderão pedir o número de telefone do usuário na conversa.

**Se uma empresa ainda não tiver adotado o BSUID e começar a receber mensagens de usuários que não consegue processar, haverá algum recurso ou ação corretiva?**

Se uma empresa ainda não tiver adotado o BSUID e não conseguir processar mensagens de usuários que fizeram a alteração, não haverá recursos ou ações corretivas.

-   Para mensagens de novos clientes da empresa: a Meta continuará enviando o webhook de uma mensagem recebida. Dependendo das especificidades da implementação, isso pode afetar sistemas que não estão preparados para lidar com uma string vazia enviada no campo wa\_id quando o número de telefone não está presente e o ID de usuário do sistema de empresa é enviado por meio de um novo campo.-   Para mensagens de clientes existentes da empresa: continuaremos compartilhando o número de telefone em alguns casos, principalmente para interações com clientes existentes.

**Qual é a diferença entre o nome de usuário e o nome de exibição da empresa? Quando o usuário verá um nome de usuário comercial ou um nome de exibição?**

Os nomes de usuário comerciais permitirão que os usuários entrem em contato com a empresa usando o nome de usuário dela. Ou seja, um usuário final pode pesquisar um nome de usuário comercial e entrar em contato com a organização. Como os usuários finais não podem pesquisar por nomes de exibição, os nomes de usuário comerciais oferecem uma clara vantagem como identificador único e pesquisável para que os usuários encontrem a empresa correta de forma confiável.

Os nomes de usuário comercial precisam seguir regras de formatação específicas em relação ao tamanho e aos caracteres permitidos, mas os nomes de exibição são mais flexíveis em termos de formatação.

Os nomes de usuário comercial são únicos e estão vinculados de forma individual aos números de telefone. Isso significa que @JaspersMarket seria vinculado a um número de telefone, enquanto @JaspersMarketCustomerSupport seria vinculado a outro. Os nomes de exibição não estão vinculados de forma individual aos números de telefone, ou seja, o nome de exibição Jasper's Market pode ter 10 números de telefone associados.

Quando a empresa tiver um nome de usuário e um de exibição, o último será mostrado primeiro (por exemplo, no perfil, na lista de conversas, nas mensagens e assim por diante). Dessa forma, as empresas poderão conquistar a confiança dos usuários e os usuários poderão reconhecer a empresa quando ela entrar em contato com eles.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)