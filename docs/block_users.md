<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/block-users -->
<!-- Scraped: 2025-12-20T17:54:37.288Z -->

# API de Bloqueio de Usuários

Updated: 27 de out de 2025

Com a API de Bloqueio de Usuários, sua empresa impede que indivíduos mal-intencionados entrem em contato.

## Como funciona

Quando você bloqueia um usuário do WhatsApp, acontece o seguinte:

-   O usuário não pode entrar em contato com sua empresa nem ver quando você está online.-   Sua empresa não pode enviar mensagens ao usuário. Caso envie uma mensagem, você receberá um erro.-   Não é possível usar essa API para bloquear outra empresa no WhatsApp.

Erros na API ocorrem de acordo com o número, já que os bloqueios podem funcionar em alguns números e não em outros.

A API de Bloqueio de Usuários é síncrona.

## Limitações

-   Você só pode bloquear usuários que enviaram mensagens para sua empresa nas últimas 24 horas.-   O limite da lista de bloqueio é de 64.000 usuários.

## Recursos

A API contém 3 pontos de extremidade:

```
// Block WhatsApp user numbers
POST /<PHONE_NUMBER_ID>/block_users
```

```
// Unblock WhatsApp user numbers
DELETE /<PHONE_NUMBER_ID>/block_users
```

```
// Get list of blocked WhatsApp user numbers
GET /<PHONE_NUMBER_ID>/block_users
```

## Bloquear usuários

Use este ponto de extremidade para bloquear uma lista de números de usuários do WhatsApp.

### Ponto de extremidade

```
POST /<PHONE_NUMBER_ID>/block_users
```

### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  // List of WhatsApp user numbers to be blocked
  "block_users": [
    {
      "user": "<PHONE_NUMBER> or <WA_ID>"
    }
  ]
}
```

### Parâmetros da solicitação

Parâmetro

Descrição

`messaging_product`

_String_

_Obrigatório._

O serviço de mensagens usado para a solicitação, que deve ser `"whatsapp"`.

`block_users`

_Objeto_

_Obrigatório._

A lista de usuários a serem bloqueados.

Cada elemento contém um campo `user`.

`user`

_string_

O número de telefone ou ID do WhatsApp a ser bloqueado.

### Objeto de resposta

```
SUCCESS (200)

{
  "messaging_product": "whatsapp",
  "block_users": {
    "added_users": [
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      }
    ]
  }
}
```

### Parâmetros de resposta

Parâmetro

Descrição

`block_users`

_Objeto_

Ele contém duas listas:

-   `added-users` – A lista de usuários bloqueados com sucesso.-   `failed_users` – A lista de usuários cujo bloqueio falhou.

`added_users`

_Objeto_

A lista de usuários bloqueados com sucesso.

Ela contém valores de ambos:

-   `input`
    
    _String_: número de telefone de um usuário do WhatsApp
    -   `wa_id`
    
    _String_: a identificação única de um usuário do WhatsApp
    

`failed_users`

_Objeto_

A lista de usuários cujo bloqueio falhou.

Ela contém valores de ambos:

-   `input`
    
    _String_: número de telefone de um usuário do WhatsApp
    -   `wa_id`
    
    _String_: a identificação única de um usuário do WhatsApp
    

```
MIXED SUCCESS/FAILURE (400)

{
  "messaging_product": "whatsapp",
  "block_users": {
    "added_users": [
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      },
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      },
      ...
    ],
    "failed_users": [
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      },
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      },
      ...
        "errors": [{
          "message": "<MESSAGE>",
          "code": "<CODE>",
          "error_data": {
            "details": "<DETAILS>""
          }]
        }
      }
    ]
  },
  "error": {
    "message": "(#139100) Failed to block/unblock users",
    "type": "OAuthException",
    "code": 139100,
    "error_data": {
      "details": "Failed to block some users, see the block_users response list for details"
    },
    "fbtrace_id": "<FBTRACE_ID>"
  }
}
```

## Desbloquear usuários

Use este ponto de extremidade para desbloquear uma lista de números de usuários do WhatsApp.

### Ponto de extremidade

```
DELETE /<PHONE_NUMBER_ID>/block_users
```

### Corpo da solicitação

```
{
  "messaging_product": "whatsapp",
  "block_users": [
     {
       // List of WhatsApp user numbers to be unblocked
       "user": "<PHONE_NUMBER> or <WA_ID>"
     }
   ]
}
```

### Parâmetros da solicitação

Parâmetro

Descrição

`messaging_product`

_String_

_Obrigatório._

O serviço de mensagens usado para a solicitação, que deve ser `"whatsapp"`.

Somente a [API de Nuvem](/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api).

`block_users`

_Objeto_

_Obrigatório._

A lista de usuários a serem bloqueados.

Cada elemento contém um campo `user`.

`user`

_string_

O número de telefone ou ID do WhatsApp a ser bloqueado.

### Objeto de resposta

```
SUCCESS (200)

{
  "messaging_product": "whatsapp",
  "block_users": {
    "added_users": [
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      }
    ]
  }
}
```

### Parâmetros de resposta

Parâmetro

Descrição

`block_users`

_Objeto_

Ele contém duas listas:

-   `added-users` – A lista de usuários bloqueados com sucesso.-   `failed_users` – A lista de usuários cujo bloqueio falhou.

`added_users`

_Objeto_

A lista de usuários bloqueados com sucesso.

Ela contém valores de ambos:

-   `input`
    
    _String_: número de telefone de um usuário do WhatsApp
    -   `wa_id`
    
    _String_: a identificação única de um usuário do WhatsApp
    

`failed_users`

_Objeto_

A lista de usuários cujo bloqueio falhou.

Ela contém valores de ambos:

-   `input`
    
    _String_: número de telefone de um usuário do WhatsApp
    -   `wa_id`
    
    _String_: a identificação única de um usuário do WhatsApp
    

```
MIXED SUCCESS/FAILURE (400)

{
  "messaging_product": "whatsapp",
  "block_users": {
    "added_users": [
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      },
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      },
      ...
    ],
    "failed_users": [
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      },
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      }
      ...
        "errors": [{
          "message": "<MESSAGE>",
          "code": "<CODE>",
          "error_data": {
            "details": "<DETAILS>""
          }]
        }
      }
    ]
  },
  "error": {
    "message": "(#139100) Failed to block/unblock users",
    "type": "OAuthException",
    "code": 139100,
    "error_data": {
      "details": "Failed to block some users, see the block_users response list for details"
    },
    "fbtrace_id": "<FBTRACE_ID>"
  }
}
```

## Obter a lista de números bloqueados

Use este ponto de extremidade para obter uma lista de números bloqueados no seu número do WhatsApp Business.

### Ponto de extremidade

```
GET /<PHONE_NUMBER_ID>/block_users
```

### Parâmetros da consulta

```
?limit=10, // Optional
&after=<AFTER_CURSOR>,   // Optional
&before=<BEFORE_CURSOR>  // Optional
```

### Parâmetros de resposta

Parâmetro

Descrição

`limit`

_Opcional_

O número máximo de usuários bloqueados para buscar na solicitação.

`after`

_Opcional_

Clique [aqui](/docs/graph-api/results) para saber mais sobre resultados paginados na Graph API aqui

`before`

_Opcional_

Clique [aqui](/docs/graph-api/results) para saber mais sobre resultados paginados na Graph API aqui

### Objeto de resposta

```
SUCCESS

{
  "data": [
    {
      "block_users": [
      {
        "input": "<PHONE_NUMBER> or <WA_ID>",
        "wa_id": "<WA_ID>"
      }
      ]
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxNTExOTQ1MjAwNzI5NDE=",
      "before": "NDMyNzQyODI3OTQw"
    },
    "previous": "https://graph.facebook.com/{version}/{phone-number-id}/block_users?limit=10&before=NDMyNzQyODI3OTQw",
    "next": "https://graph.facebook.com/{version}/{phone-number-id}/block_users?limit=25&after=MTAxNTExOTQ1MjAwNzI5NDE="
  }
}
```

### Parâmetros de resposta

Parâmetro

Descrição

`block_users`

_Objeto_

_Obrigatório._

A lista de usuários a serem bloqueados.

Cada elemento contém um campo `user`.

`wa_id`

_String_

O número de telefone do usuário bloqueado.

`paging`

_Objeto_

Clique [aqui](/docs/graph-api/results) para saber mais sobre resultados paginados na Graph API aqui

```
ERROR
{
  "messaging_product": "whatsapp",
  "error": {
    "message": "(#135002) Blocklist concurrent update",
    "type": "OAuthException",
    "code": 139102,
    "error_data": {
        "messaging_product": "whatsapp",
        "details": "Blocklist was updated during retrieval - retry with offset 0"
    },
    "fbtrace_id": "<FBTRACE_ID>"
  }
}
```

## Códigos de erro

Código

Descrição

`139100`

Falha ao bloquear/desbloquear alguns usuários

Ocorreu uma falha no bloqueio em massa falhou de alguns ou todos os usuários.

`139101`

Limite para a lista de bloqueio atingido

O limite para a lista de bloqueio é de 64.000 usuários.

`139102`

Atualização simultânea da lista de bloqueio

Ocorre quando a lista de bloqueio é atualizada durante a realização de uma solicitação de paginação e `version_id` não corresponde.

`139103`

Erro interno

Erro interno. Tente novamente.

`130429`

Limite de volume atingido

Ocorre quando:

-   Muitos números estão na própria solicitação,-   ou muitas solicitações estão sendo feitas durante um curto período de tempo.

`131021`

Autobloqueio

Falha ao autobloquear o número de telefone.

`131047`

Reengajamento necessário

Ocorre se a empresa não tiver recebido nenhuma mensagem desse número nas últimas 24 horas.

Esse erro também será retornado se o número for um usuário inválido do WhatsApp.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)