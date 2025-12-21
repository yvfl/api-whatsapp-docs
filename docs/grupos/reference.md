<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference -->
<!-- Scraped: 2025-12-20T17:42:35.220Z -->

# Gerenciamento de grupos

Updated: 14 de nov de 2025

## Visão geral

A API de Grupos oferece funções simples para controlar os grupos durante o ciclo de vida.

Ao criar um novo grupo, um link de convite é gerado para convidar participantes.

Como não é possível adicionar participantes manualmente, envie uma mensagem com o link de convite aos usuários do WhatsApp que você quer que entrem no grupo.

## Recursos de gerenciamento de grupos

-   [Criar e excluir um grupo](#create-group)-   [Grupos com pedidos de participação habilitados](#groups-with-join-requests)-   [Obter e redefinir o link de convite para o grupo](#get-and-reset-group-invite-link)-   [Enviar mensagem de modelo de link de convite para o grupo](#send-group-invite-link-template-message)-   [Remover participantes do grupo](#remove-group-participants)-   [Obter informações do grupo](#get-group-info)-   [Obter grupos ativos](#get-active-groups)-   [Atualizar as configurações do grupo](#update-group-settings)

Para saber como enviar mensagens para grupos, consulte a [referência sobre mensagens em grupo](/documentation/business-messaging/whatsapp/groups/groups-messaging).

## Assinar webhooks de metadados de grupos

Para receber notificações de webhook com metadados sobre seus grupos, assine os seguintes campos de webhook:

-   `group_lifecycle_update`-   `group_participants_update`-   `group_settings_update`-   `group_status_update`

Para ver uma referência completa de webhooks para a API de Grupos, acesse [Webhooks para a referência da API de Grupos](/documentation/business-messaging/whatsapp/groups/webhooks).

## Criar grupo

Use este ponto de extremidade para criar um novo grupo e gerar um link de convite para o grupo.

Após a criação do grupo, você receberá um webhook com um parâmetro `invite_link` que contém um link de convite para o grupo. Você pode enviar esse link de convite para usuários do WhatsApp que tenham interesse em entrar no grupo.

Você também pode criar um grupo que exija aprovação para participar. Isso significa que, se um usuário do WhatsApp quiser entrar no seu grupo, você poderá aprovar ou rejeitar o pedido.

[Saiba mais sobre grupos com pedidos de participação habilitados](#groups-with-join-requests).

### Sintaxe da solicitação

Crie um grupo com um link de convite inicial:

`POST /<BUSINESS_PHONE_NUMBER_ID>/groups`

### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "subject": "<GROUP_SUBJECT>",
  "description": "<GROUP_DESCRIPTION>",
  "join_approval_mode": "<JOIN_APPROVAL_MODE>"
}
```

### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<BUSINESS_PHONE_NUMBER_ID>`

_String_

**Obrigatório**

Identificação do número de telefone comercial.

`12784358810`

`<GROUP_SUBJECT>`

_String_

**Obrigatório**

Nome do grupo.

Máximo de 128 caracteres. Os espaços em branco serão cortados.

`New Purchase Inquiry`

`<GROUP_DESCRIPTION>`

_String_

**Opcional**

Descrição do grupo.

Máximo de 2.048 caracteres.

`Jim, an existing client, would like to learn about new car purchase options for current year models.`

`<JOIN_APPROVAL_MODE>`

_String_

**Opcional**

Indica se os usuários do WhatsApp que clicarem no link de convite poderão entrar no grupo com ou sem aprovação prévia.

Os valores podem ser os seguintes:

-   `approval_required` – indica que os usuários do WhatsApp precisam ser aprovados por meio de um [pedido de participação](#groups-with-join-requests) para acessar o grupo.-   `auto_approve` – indica que os usuários do WhatsApp podem entrar no grupo sem aprovação.

Em caso de omissão, `join_approval_mode` será definido como `auto_approve` por padrão.

`auto_approve`

### Webhooks

Um webhook `group_lifecycle_update` é disparado.

#### Criação do grupo concluída com sucesso

[Consulte o exemplo de webhook "Criação do grupo concluída com sucesso"](/documentation/business-messaging/whatsapp/groups/webhooks#group-create-succeed)

#### Falha na criação do grupo

[Consulte o exemplo de webhook "Falha na criação do grupo"](/documentation/business-messaging/whatsapp/groups/webhooks#group-create-fail)

#### Usuário entra no grupo usando um link de convite

[Consulte o exemplo de webhook "Usuário entra no grupo usando um link de convite"](/documentation/business-messaging/whatsapp/groups/webhooks#user-joined-group-using-invite-link-succeed)

## Grupos com pedidos de participação

Você pode criar grupos que exijam aprovação de pedidos de participação. Após habilitar essa opção, os usuários do WhatsApp que clicarem no link do convite poderão enviar um pedido para participar do grupo ou cancelar um pedido anterior:

Quando um usuário do WhatsApp entra no grupo por meio de um pedido de participação, é disparado um \[webhook `group_participants_update` para um usuário que aceitou o pedido de participação\] (/documentation/business-messaging/whatsapp/groups/webhooks#user-accepts-or-cancels-join-request). Você também pode [obter uma lista de pedidos de participação abertos na API](#get-join-requests). Use o conteúdo do webhook ou da resposta da API para aprovar ou rejeitar pedidos.

### Receber pedidos de participação

#### Sintaxe da solicitação

`GET /<GROUP_ID>/join_requests`

#### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

**Obrigatório.**

Identificação do grupo.

`Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD`

#### Sintaxe da resposta

Caso a solicitação seja bem-sucedida:

```
{
  "data": [
    {
      "join_request_id": "<JOIN_REQUEST_ID>",
      "wa_id": "<WHATSAPP_USER_ID>",
      "creation_timestamp": "<JOIN_REQUEST_CREATION_TIMESTAMP">
    },
    //Additional join request objects would follow, if any
  ],
  "paging": {
    "cursors": {
      "before": "<BEFORE_CURSOR>",
      "after": "<AFTER_CURSOR>"
    }
  }
}
```

#### Parâmetros da resposta

  

Espaço reservado

Descrição

Exemplo de valor

`<JOIN_REQUEST_ID>`

_String_

Identificação do pedido de participação.

`MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw`

`<WHATSAPP_USER_ID>`

_String_

Número de identificação do usuário do WhatsApp.

`16505551234`

`<JOIN_REQUEST_CREATION_TIMESTAMP>`

_Número inteiro_

Registro de data e hora Unix que indica quando o pedido de participação foi criado.

`1755548877`

`<BEFORE_CURSOR>`

_String_

Cursor anterior. Consulte [Resultados paginados](/docs/graph-api/results).

`eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3NTU1NTM3MDUxNzUwNTQ1MTAifQZDZD`

`<AFTER_CURSOR>`

_String_

Cursor posterior. Consulte [Resultados paginados](/docs/graph-api/results).

`eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3NTU1NTM3MDUxNzUwNTQ1MTAifQZDZD`

### Aprovar pedidos de participação

#### Sintaxe da solicitação

`POST /<GROUP_ID>/join_requests`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "join_requests": [
    "<JOIN_REQUEST_ID>",
    // Additional join request IDs would go here, if approving in bulk
  ]
}
```

#### Parâmetros da solicitação

  

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

**Obrigatório.**

Identificação do grupo.

`Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD`

#### Sintaxe da resposta

Em caso de sucesso, a API responderá com a seguinte carga JSON, e os usuários do WhatsApp cujos pedidos de participação foram aprovados poderão acessar o grupo tocando no link de convite.

```
{
  "messaging_product": "whatsapp",
  "approved_join_requests": [
    "<JOIN_REQUEST_ID>",
    // Additional join request IDs would go here, it approved in bulk
  ],

  //Only included if unable to approve one or more join requests

  "failed_join_requests": [
    {
      "join_request_id": "<JOIN_REQUEST_ID>",
      "errors": [
        {
          "code": "<ERROR_CODE>",
          "message": "<ERROR_MESSAGE>",
          "title": "<ERROR_TITLE>",
          "error_data": {
            "details": "<ERROR_DETAILS>"
          }
        }
      ]
    }
  ],
  "errors": [
    {
      "code": "<ERROR_CODE>",
      "message": "<ERROR_MESSAGE>",
      "title": "<ERROR_TITLE>",
      "error_data": {
        "details": "<ERROR_DETAILS>"
      }
    }
  ]
}
```

#### Parâmetros da resposta

  

Espaço reservado

Descrição

Exemplo de valor

`<JOIN_REQUEST_ID>`

_String_

Identificação do pedido de participação aprovado ou, se não for possível aprovar, identificação do pedido que falhou.

`MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw`

`<ERROR_CODE>`

_Número inteiro_

Código de erro, caso não seja possível aprovar.

`131203`

`<ERROR_MESSAGE>`

_String_

Mensagem de erro, caso não seja possível aprovar.

`(#131203) Recipient has not accepted our new Terms of Service and Privacy Policy.`

`<ERROR_TITLE>`

_String_

Título do erro, caso não seja possível aprovar.

`Unable to add participant to group`

`<ERROR_DETAILS>`

_String_

Detalhes do erro, caso não seja possível aprovar.

`Recipient has not accepted our new Terms of Service and Privacy Policy.`

#### Webhook

Um webhook `group_participants_update` é disparado.

[Consulte o exemplo de webhook "Usuário aceita pedido de participação"](/documentation/business-messaging/whatsapp/groups/webhooks#user-accepts-or-cancels-join-request)

### Rejeitar pedidos de participação

#### Sintaxe da solicitação

`DELETE /<GROUP_ID>/join_requests`

#### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "join_requests": [
    "<JOIN_REQUEST_ID>",
    //Additional join request IDs would go here, it rejecting in bulk
  ]
}
```

#### Parâmetros da solicitação

  

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

**Obrigatório.**

Identificação do grupo.

`Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD`

`<JOIN_REQUEST_ID>`

_String_

**Obrigatório.**

Identificação do pedido de participação a ser rejeitado.

`MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw`

#### Sintaxe da resposta

Em caso de sucesso, a API responderá com a seguinte carga JSON, e o usuário do WhatsApp verá novamente o botão **Pedir para participar** ao acessar o link de convite para o grupo.

```
{
  "messaging_product": "whatsapp",
  "rejected_join_requests": [
    "<JOIN_REQUEST_ID>",
    //Additional join request IDs would go here, it rejecting in bulk
  ],

  //Only included if unable to reject one or more join requests
  "failed_join_requests": [
    {
      "join_request_id": "<JOIN_REQUEST_ID>",
      "errors": [
        {
          "code": "<ERROR_CODE>",
          "message": "<ERROR_MESSAGE>",
          "title": "<ERROR_TITLE>",
          "error_data": {
            "details": "<ERROR_DETAILS>"
          }
        }
      ]
    }
  ],
  "errors": [
    {
      "code": "<ERROR_CODE>",
      "message": "<ERROR_MESSAGE>",
      "title": "<ERROR_TITLE>",
      "error_data": {
        "details": "<ERROR_DETAILS>"
      }
    }
  ]
}
```

#### Parâmetros da resposta

Espaço reservado

Descrição

Exemplo de valor

`<JOIN_REQUEST_ID>`

_String_

Identificação do pedido de participação rejeitado ou, se não for possível rejeitar, identificação do pedido que falhou.

`MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw`

`<ERROR_CODE>`

_Número inteiro_

Código de erro, caso não seja possível rejeitar.

`131203`

`<ERROR_MESSAGE>`

_String_

Mensagem de erro, caso não seja possível rejeitar.

`(#131203) Recipient has not accepted our new Terms of Service and Privacy Policy.`

`<ERROR_TITLE>`

_String_

Título do erro, caso não seja possível rejeitar.

`Unable to add participant to group`

`<ERROR_DETAILS>`

_String_

Detalhes do erro, caso não seja possível rejeitar.

`Recipient has not accepted our new Terms of Service and Privacy Policy.`

### Webhook

Nenhum.

## Obter e redefinir o link de convite para o grupo

Após a redefinição de um link de convite, todos os links de convite anteriores ficarão inválidos.

Um link de convite para o grupo é gerado quando o grupo é criado. Use estes pontos de extremidade para obter e redefinir links de convite para o grupo.

Para cada ponto de extremidade, você precisará da identificação do grupo a fim de obter ou redefinir um link para o grupo correto, conforme mostrado a seguir:

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

**Obrigatório**

A identificação do grupo do qual você quer obter ou redefinir um link de convite.

`Y2FwaV9ncm91cDoxOTUwNTU1MDA3OToxMjAzNjMzOTQzMjAdOTY0MTUZD`

### Obter o link de convite para o grupo

#### Sintaxe da solicitação

`GET /<GROUP_ID>/invite_link`

#### Corpo da resposta

```
{
  "messaging_product": "whatsapp",
  "invite_link": "https://chat.whatsapp.com/<LINK_ID>"
}
```

Observe que `invite_link` começa sempre com o prefixo `https://chat.whatsapp.com/`. A única parte variável é `<LINK_ID>`.

### Redefinir o link de convite para o grupo

#### Sintaxe da solicitação

`POST /<GROUP_ID>/invite_link`

#### Corpo da solicitação

```
{  "messaging_product": "whatsapp",}
```

#### Corpo da resposta

```
{
  "messaging_product": "whatsapp",
  "invite_link": "https://chat.whatsapp.com/<LINK_ID>"
}
```

## Enviar mensagem de modelo de link de convite para o grupo

A [Biblioteca de modelos](https://business.facebook.com/wa/manage/template-library) contém um modelo de mensagem de utilidade para enviar links de convite para o grupo aos usuários do WhatsApp. Use esses modelos predefinidos para enviar convites para o grupo como mensagens de utilidade.

**Para manter o modelo com a categoria `utility`, ele não pode ser modificado ao ser copiado da biblioteca de modelos para sua conta do WhatsApp Business.**

Para enviar o modelo de mensagem:

#### Etapa 1. Adicione um modelo de link de convite para o grupo da biblioteca de modelos aos modelos da sua conta:

_No Gerenciador do WhatsApp_

-   Vá até [Biblioteca de modelos](https://business.facebook.com/wa/manage/template-library).-   À esquerda, clique no menu suspenso **Link de convite para o grupo** e, depois, na caixa de seleção **Convite para o grupo mediante solicitação**.-   Selecione o modelo que você quer usar, dê um nome a ele e clique em **Enviar**.

_Usando a API_

É possível consultar bibliotecas de modelos aplicáveis a links de convite para o grupo usando a solicitação abaixo:

`GET /message_template_library?category=utility&topic=group_invite_link&language=en`

[Leia mais sobre como encontrar e adicionar o modelo à sua conta do WhatsApp Business usando a API](/documentation/business-messaging/whatsapp/templates/template-library#using-the-api)

A aprovação do modelo pode levar até 24 horas. Você poderá enviar mensagens com esse modelo após a aprovação.

#### Etapa 2. Envie a mensagem de modelo

-   Envie o modelo usando a sintaxe e o corpo da solicitação abaixo, substituindo a identificação do grupo, o nome que você deu ao modelo e outros valores aplicáveis.

Quando você fornece a identificação do grupo na solicitação da API, ela é automaticamente convertida no link de convite correspondente quando a mensagem é entregue.

### Sintaxe da solicitação

`POST /<BUSINESS_PHONE_NUMBER_ID>/messages`

### Parâmetros do ponto de extremidade

Espaço reservado

Descrição

Exemplo de valor

`<BUSINESS_PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

Identificação do número de telefone comercial.

`13057863445`

### Corpo da solicitação

```
curl --location 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/messages?access_token=' \
      --header 'Content-Type: application/json' \
      --data '{
        "messaging_product": "whatsapp",
        "to": "<WHATSAPP_USER_PHONE_NUMBER>",
        "type": "template",
        "template": {
          "name": "<TEMPLATE_NAME>",
          "language": {
            "code": "<TEMPLATE_LANGUAGE>"
          },
          "components": [
            {
              "type": "body",
              "parameters": [
                {
                  "type": "group_id",
                  "group_id": "<GROUP_ID>"
                },
                {
                  ...additional parameters
                }
              ]
            }
          ]
        }
      }'
```

[Saiba mais sobre a biblioteca de modelos](/documentation/business-messaging/whatsapp/templates/template-library)

### Webhooks

#### Usuário entra no grupo usando um link de convite

[Consulte o exemplo de webhook "Usuário entra no grupo usando um link de convite"](/documentation/business-messaging/whatsapp/groups/webhooks#user-joined-group-using-invite-link-succeed)

## Excluir grupo

Este ponto de extremidade exclui o grupo e remove todos os participantes, incluindo a empresa. O corpo da solicitação não é necessário.

### Sintaxe da solicitação

`DELETE /<GROUP_ID>`

### Propriedades da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

**Obrigatório**

  
A identificação do grupo que você quer excluir.

`Y2FwaV9ncm91cDoxOTUwNTU1MDA3OToxMjAzNjMzOTQzMjAdOTY0MTUZD`

### Webhooks

Um webhook `group_lifecycle_update` é disparado.

#### Exclusão de grupo concluída com sucesso

[Consulte o exemplo de webhook "Exclusão de grupo concluída com sucesso"](/documentation/business-messaging/whatsapp/groups/webhooks#delete-group-succeed)

#### Falha ao excluir grupo

[Consulte o exemplo de webhook "Falha ao excluir grupo"](/documentation/business-messaging/whatsapp/groups/webhooks#delete-group-fails)

## Remover participantes do grupo

Use este ponto de extremidade para remover participantes do grupo.

**Observação: se um participante for removido de um grupo, ele não poderá mais entrar no grupo por meio de um link de convite.**

### Sintaxe da solicitação

`DELETE /<GROUP_ID>/participants`

### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "participants": [
    { "user": "<WHATSAPP_USER_PHONE_NUMBER> or <WHATSAPP_USER_ID>" },
    { "user": "<WHATSAPP_USER_PHONE_NUMBER> or <WHATSAPP_USER_ID>"" },
    ...
  ]
}
```

### Propriedades da solicitação

Espaço reservado

Descrição

Exemplo de valor

`"participants": []`

_Matriz_

**Opcional**

Especifica uma matriz de números de telefone ou de identificações de contas do WhatsApp. O número de telefone comercial usado para criar o grupo é sempre adicionado como criador e administrador.

-   Máximo de 8 participantes.-   A matriz não pode estar vazia.

```
{ "user": "+17865347866" },
{ "user": "+7669992245" },
...
```

### Webhooks

Um webhook `group_participants_update` é disparado.

#### Saída de participantes do grupo

[Consulte o exemplo de webhook "Saída de participantes do grupo"](/documentation/business-messaging/whatsapp/groups/webhooks#delete-group-succeed)

## Obter informações do grupo

Use este ponto de extremidade para recuperar metadados sobre um único grupo.

**Observação:** se você não especificar nenhum campo nos parâmetros de consulta, o sistema retornará apenas a identificação do grupo e o produto de mensagem.

### Sintaxe da solicitação

`GET /<GROUP_ID>?fields=<FIELDS>`

### Parâmetros do ponto de extremidade

Espaço reservado

Descrição

Exemplo de valor

`<GROUP_ID>`

_String_

**Obrigatório**

  
A identificação do grupo do qual você está consultando informações.

`Y2FwaV9ncm91cDoxOTUwNTU1MDA3OToxMjAzNjMzOTQzMjAdOTY0MTUZD`

`<FIELDS>`

_String_

**Opcional**

  
Uma lista de campos a serem retornados, separada por vírgulas. Se nenhum campo for informado, apenas a identificação do grupo será retornada.

`"subject,description,participants,join_approval_mode"`

[Clique aqui para saber mais sobre os campos da Graph API](/docs/graph-api/overview#fields)

### Campos disponíveis

Campo

Descrição

Exemplo de valor de retorno

`join_approval_mode`

_String_

Indica se os usuários do WhatsApp que clicarem no link de convite poderão entrar no grupo com ou sem aprovação prévia.

Os valores podem ser os seguintes:

-   `approval_required` – indica que os usuários do WhatsApp precisam ser aprovados por meio de um [pedido de participação](#groups-with-join-requests) para acessar o grupo.-   `auto_approve` – indica que os usuários do WhatsApp podem entrar no grupo sem aprovação.

`auto_approve`

`subject`

_String_

O nome do grupo.

`"Artificial Intelligence Insights"`

`description`

_String_

A descrição do grupo, se tiver sido definida durante a criação.

`"Explore AI developments, share knowledge, and discuss the future of artificial intelligence with fellow enthusiasts and experts."`

`suspended`

_Booliano_

Retorna `true` se o grupo tiver sido suspenso pelo WhatsApp.

`false`

`creation_timestamp`

_Número inteiro_

Registro de data e hora Unix em segundos da criação do grupo.

`683731200`

`participants`

_Lista_

Uma lista de objetos `{"wa_id": "<WA_ID>"}`, em que `<WA_ID>` é um participante do grupo que está sendo consultado.

`[{"wa_id": "2228675309"}, {"wa_id": "7693349922"}]`

`total_participant_count`

_Número inteiro_

O número total de participantes do grupo, excluindo sua empresa.

`6`

### Exemplo de resposta

```
{
  "messaging_product": "whatsapp",
  "id": "<GROUP_ID>",
  "subject": "<SUBJECT>",
  "creation_timestamp": "<TIMESTAMP>",
  "suspended": "<SUSPENDED>",
  "description": "<DESCRIPTION>",
  "total_participant_count": "<TOTAL_PARTICIPANT_COUNT>",
  "participants": [
    {
      "wa_id": "<WA_ID>"
    },
    {
      "wa_id": "<WA_ID>"
    }
  ],
  "join_approval_mode": "<JOIN_APPROVAL_MODE>"
}
```

## Obter grupos ativos

Use este ponto de extremidade para recuperar uma lista de grupos ativos associados a determinado número de telefone comercial.

### Sintaxe da solicitação

`GET /<BUSINESS_PHONE_NUMBER_ID>/groups`

### Parâmetros da consulta

```
?limit=<LIMIT>, // Optional
&after=<AFTER_CURSOR>, // Optional
&before=<BEFORE_CURSOR> // Optional
```

Parâmetro

Descrição

`<LIMIT>`

_Opcional_

O número de grupos para buscar na solicitação.

Mínimo: 1 | Padrão: 25 | Máximo: 1.024

`<BEFORE_CURSOR>`

_Opcional_

Cursor que aponta para o início de uma página de dados. Clique [aqui](/docs/graph-api/results) para saber mais sobre resultados paginados na Graph API aqui

`<AFTER_CURSOR>`

_Opcional_

Cursor que aponta para o fim de uma página de dados. Clique [aqui](/docs/graph-api/results) para saber mais sobre resultados paginados na Graph API aqui

### Objeto de resposta

```
{  "data": {    "groups": [      {"id": "GROUP_ID", "subject": SUBJECT, "created_at": "TIMESTAMP"},      {"id": "GROUP_ID", "subject": SUBJECT, "created_at": "TIMESTAMP"}      …    ]  },  "paging": {    "cursors": {      "after": "MTAxNTExOTQ1MjAwNzI5NDE=",      "before": "NDMyNzQyODI3OTQw"    },    "previous": "https://graph.facebook.com/VERSION/PHONE_NUMBER_ID/groups?limit=10&before=NDMyNzQyODI3OTQw",    "next": "https://graph.facebook.com/VERSION/PHONE_NUMBER_ID/groups?limit=25&after=MTAxNTExOTQ1MjAwNzI5NDE="  }}
```

### Parâmetros da resposta

Parâmetro

Descrição

`data[groups]`

_Lista_

Uma lista de grupos, cada um com a identificação, o nome, o registro de data e hora Unix da criação do grupo.

`paging`

_Objeto_

Um objeto de paginação.

Clique [aqui](/docs/graph-api/results) para saber mais sobre resultados paginados na Graph API aqui

## Atualizar as configurações do grupo

Use este webhook para atualizar o nome, a descrição e a foto do grupo.

### Sintaxe da solicitação

`POST /<GROUP_ID>`

### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "subject": "<GROUP_SUBJECT>",
  "profile_picture_file": "<FILE_PATH>",
  "description": "<GROUP_DESCRIPTION>",
}
```

### Propriedades da solicitação

  

**Observação**

Espaço reservado

Descrição

Exemplo de valor

`<FILE_PATH>`

_String_

**Opcional**

O caminho para um arquivo de imagem armazenado no diretório local.

**Para carregar um arquivo**: siga a mesma estrutura de solicitação do ponto de extremidade [Upload Media](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media).

Exemplo de carregamento de arquivo com cURL:

```
curl 'https://graph.facebook.com/v23.0/<GROUP_ID> \
          -X POST \
          -H 'Authorization: Bearer ...' \
          -F 'messaging_product=whatsapp' \
          -F 'file=@/media/pictures/square_pic.png'
```

Requisitos para foto do perfil do grupo:

-   Compatível apenas com imagens do tipo mime/jpeg-   Tamanho máximo: 5 MB-   Imagem de formato quadrado (altura = largura)-   Tamanho mínimo: 192 x 192

`/local/path/file.jpg`

`<GROUP_SUBJECT>`

_String_

**Opcional**

O novo nome do grupo.

-   Tamanho máximo: 128 caracteres.-   Se fornecido, não pode ficar vazio.

`"Watch Enthusiasts"`

`<GROUP_DESCRIPTION>`

_String_

**Opcional**

A nova descrição do grupo.

-   Tamanho máximo: 2.048 caracteres

`"Join our community to discuss the latest timepieces, share watch reviews, and connect with fellow horology enthusiasts."`

### Webhooks

Um webhook `group_settings_update` é disparado.

#### Configurações do grupo atualizadas com sucesso

[Consulte o exemplo de webhook "Configurações do grupo atualizadas com sucesso"](/documentation/business-messaging/whatsapp/groups/webhooks#group-settings-update-succeed).

#### Falha parcial na atualização das configurações do grupo

[Consulte o exemplo de webhook "Falha parcial na atualização das configurações do grupo"](/documentation/business-messaging/whatsapp/groups/webhooks#group-settings-update-partial-fail).

#### Falha total na atualização das configurações do grupo

[Consulte o exemplo de webhook "Falha total na atualização das configurações do grupo"](/documentation/business-messaging/whatsapp/groups/webhooks#group-settings-update-total-fail).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)