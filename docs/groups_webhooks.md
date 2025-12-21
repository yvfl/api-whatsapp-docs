<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks -->
<!-- Scraped: 2025-12-20T17:42:51.174Z -->

# Webhooks para a API de Grupos

Updated: 22 de out de 2025

Para receber notificações de webhook com metadados sobre seus grupos, assine os seguintes campos de webhook:

-   `group_lifecycle_update`-   `group_participants_update`-   `group_settings_update`-   `group_status_update`

## webhooks `group_lifecycle_update`

Um webhook `group_lifecycle_update` é disparado quando um grupo é criado ou excluído.

### Criação do grupo concluída com sucesso

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "DISPLAY_PHONE_NUMBER",              "phone_number_id": "PHONE_NUMBER_ID"            },            "groups": [              {                "timestamp": "TIMESTAMP",                "group_id": "GROUP_ID",                "type": "group_create",                "request_id": "REQUEST_ID",                "subject": "test invite link",                "invite_link": "https://chat.whatsapp.com/LINK_ID"                "join_approval_mode": "JOIN_APPROVAL_MODE"              }            ]          },          "field": "group_lifecycle_update"        }      ]    }  ]}
```

### Falha na criação do grupo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {              "messaging_product": "whatsapp",              "metadata": {                   "display_phone_number": "DISPLAY_PHONE_NUMBER",                   "phone_number_id": "PHONE_NUMBER_ID",              },               "groups": [          {                    "timestamp": "TIMESTAMP",                    "type": "group_create",                    "subject": "GROUP_SUBJECT",                    "description": "GROUP_DESCRIPTION",                    "request_id": "REQUEST_ID",                    "group_id": "GROUP_ID",                    "errors": [                      {                        "code": "ERROR_CODE",                        "message": "ERROR_MESSAGE",                        "title": "ERROR_TITLE",                        "error_data": {                          "details": "ERROR_DETAILS"                        }                      }                    ]          }               ]            },          "field": "group_lifecycle_update"        }      ]    }  ]}
```

### Exclusão de grupo concluída com sucesso

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {              "messaging_product": "whatsapp",              "metadata": {                   "display_phone_number": "DISPLAY_PHONE_NUMBER",                   "phone_number_id": "PHONE_NUMBER_ID",              },               "groups": [                  {                    "timestamp": "TIMESTAMP",                    "group_id": "GROUP_ID",                    "type": "group_delete"                    "request_id": "REQUEST_ID",                 }               ]          },          "field": "group_lifecycle_update"        }      ]    }  ]}
```

### Falha ao excluir grupo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {              "messaging_product": "whatsapp",              "metadata": {                   "display_phone_number": "DISPLAY_PHONE_NUMBER",                   "phone_number_id": "PHONE_NUMBER_ID",              },               "groups": [                  {                    "timestamp": "TIMESTAMP",                    "group_id": "GROUP_ID",                    "type": "group_delete",                    "request_id": "REQUEST_ID",                    "errors": [                      {                        "code": "ERROR_CODE",                        "message": "ERROR_MESSAGE",                        "title": "ERROR_TITLE",                        "error_data": {                          "details": "ERROR_DETAILS"                        }                      }                    ]                 }               ]          },          "field": "group_lifecycle_update"        }      ]    }  ]}
```

## webhooks `group_participants_update`

Um webhook `group_participants_update` é disparado quando um usuário do WhatsApp entra em um grupo com um link de convite, solicita a participação em um grupo, cancela a solicitação ou quando uma ou mais solicitações de participação são aprovadas.

### O usuário entrou no grupo usando um link de convite

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {              "messaging_product": "whatsapp",              "metadata": {                   "display_phone_number": "DISPLAY_PHONE_NUMBER",                   "phone_number_id": "PHONE_NUMBER_ID",              },               "groups": [                  {                    "timestamp": "TIMESTAMP",                    "group_id": "GROUP_ID",                    "type": "group_participants_add",                    "reason": "invite_link",                    "added_participants": [                        {                          "wa_id": "WHATSAPP_ID",                        },                    ]                 }              ]          },          "field": "group_participants_update"        }      ]    }  ]}
```

### O usuário aceita ou cancela a solicitação de participação

-   **Para solicitações de participação:**`GROUP_REQUEST_TYPE` é definido como `group_join_request_created`.-   **Para solicitações de cancelamento:**`GROUP_REQUEST_TYPE` é definido como `group_join_request_revoked`.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "BUSINESS_DISPLAY_PHONE_NUMBER",              "phone_number_id": "BUSINESS_PHONE_NUMBER_ID"            },            "groups": [              {                "timestamp": "WEBHOOK_TRIGGER_TIMESTAMP",                "group_id": "GROUP_ID",                "type": "GROUP_REQUEST_TYPE",                "reason": "REASON_FOR_REQUEST_OUTCOME"                "join_request_id": "JOIN_REQUEST_ID",                "wa_id": "WHATSAPP_USER_ID"              }            ]          },          "field": "group_participants_update"        }      ]    }  ]}
```

### Solicitação de participação aprovada

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "BUSINESS_DISPLAY_PHONE_NUMBER",              "phone_number_id": "BUSINESS_PHONE_NUMBER_ID"            },            "groups": [              {                "timestamp": WEBHOOK_TRIGGER_TIMESTAMP,                "group_id": "GROUP_ID",                "type": "group_participants_add",                "reason": "invite_link",                "added_participants": [                  {                    "input": "WHATSAPP_USER_PHONE_NUMBER",                    "wa_id": "WHATSAPP_USER_ID"                  },                  //Additional added participants here, if approved in bulk.                ]              }            ]          },          "field": "group_participants_update"        }      ]    }  ]}
```

### Remoção de participantes do grupo concluída com sucesso

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {              "messaging_product": "whatsapp",              "metadata": {                   "display_phone_number": "DISPLAY_PHONE_NUMBER",                   "phone_number_id": "PHONE_NUMBER_ID",              },               "groups": [                  {                    "timestamp": "TIMESTAMP",                    "group_id": "GROUP_ID",                    "type": "group_participants_remove",                    "request_id": "REQUEST_ID",                    "removed_participants": [                        // User 1 removed successfully                        {                          "input": "PHONE_NUMBER or WHATSAPP_ID"                        },                        {                          "input": "PHONE_NUMBER or WHATSAPP_ID"                        },                        ...                    ]                 }                 "initiated_by": "business"              ]          },          "field": "group_participants_update"        }      ]    }  ]}
```

### Falha parcial na remoção de participantes do grupo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {              "messaging_product": "whatsapp",              "metadata": {                   "display_phone_number": "DISPLAY_PHONE_NUMBER",                   "phone_number_id": "PHONE_NUMBER_ID",              },               "groups": [                  {                    "timestamp": "TIMESTAMP",                    "group_id": "GROUP_ID",                    "type": "group_participants_remove",                    "request_id": "REQUEST_ID",                    "initiated_by": business,                    "removed_participants": [                      // User 1 removed successfully                      {                        "input": "PHONE_NUMBER or WHATSAPP_ID"                      },                      // Additional users removed successfully                      ...                    ],                    "failed_participants": [                      // User 2 not removed due to errors                      {                        "input": "PHONE_NUMBER or WHATSAPP_ID"                        "errors": [                          {                            "code": "ERROR_CODE",                            "message": "ERROR_MESSAGE",                            "title": "ERROR_TITLE",                            "error_data": {                              "details": "ERROR_DETAILS"                            }                          }                        ]                      }                    ],                    "errors": [                      {                        "code": "ERROR_CODE",                        "message": "Failed to remove some participants from the group",                        "title": "Not All Participants Remove Succeeded",                        "error_data": {                          "details": "ERROR_DETAILS"                        }                      }                    ]                 }                 "initiated_by": "business"              ]          },          "field": "group_participants_update"        }      ]    }  ]}
```

### Falha ao remover participantes do grupo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {              "messaging_product": "whatsapp",              "metadata": {                   "display_phone_number": "DISPLAY_PHONE_NUMBER",                   "phone_number_id": "PHONE_NUMBER_ID",              },               "groups": [                  {                    "timestamp": "TIMESTAMP",                    "group_id": "GROUP_ID",                    "type": "group_participants_remove",                    "request_id": "REQUEST_ID",                    "failed_participants": [                      {                        "input": "PHONE_NUMBER or WHATSAPP_ID"                      },                      {                        "input": "PHONE_NUMBER or WHATSAPP_ID"                      },                      // Additional users failed to be removed                      ...                    ],                    "errors": [                      {                        "code": "ERROR_CODE",                        "message": "ERROR_MESSAGE",                        "title": "ERROR_TITLE",                        "error_data": {                          "details": "ERROR_DETAILS"                        }                      }                    ]                 }                 "initiated_by": "business"              ]          },          "field": "group_participants_update"        }      ]    }  ]}
```

### Webhook de saída de participantes do grupo

Esse webhook é enviado quando um participante sai do grupo. O campo `initiated_by` e apenas a `wa_id` na lista de `removed_participants` apontarão para o participante que deixou o grupo.

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_ACCOUNT_ID",      "changes": [        {          "value": {              "messaging_product": "whatsapp",              "metadata": {                   "display_phone_number": "DISPLAY_PHONE_NUMBER",                   "phone_number_id": "PHONE_NUMBER_ID",              },               "groups": [                  {                    "timestamp": "TIMESTAMP",                    "group_id": "GROUP_ID",                    "type": "group_participants_remove",                    "removed_participants": [                      {                        "wa_id": "WHATSAPP_ID",                      }                    ]                 }                 "initiated_by": "participant"               ]          },          "field": "group_participants_update"        }      ]    }  ]}
```

## webhooks `group_settings_update`

### Configurações do grupo atualizadas com sucesso

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "DISPLAY_NUMBER",
              "phone_number_id": "PHONE_NUMBER_ID"
            },
            "groups": [
              {
                "timestamp": "TIMESTAMP",
                "group_id": "GROUP_ID",
                "type": "group_settings_update",
                "request_id": "REQUEST_ID",
                "profile_picture": {
                  "mime_type": "image/jpeg",
                  "update_successful": true,
                  "sha256": "PHOTO_HASH",
                },
                "group_subject": {
                  "text": "Test Subject",
                  "update_successful": true,
                },
                "group_description": {
                  "text": "Test Description",
                  "update_successful": true,
                }
              }
            ]
          },
          "field": "group_settings_update"
        }
      ]
    }
  ]
}
```

### Falha parcial na atualização das configurações do grupo

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "DISPLAY_PHONE_NUMBER",              "phone_number_id": "PHONE_NUMBER_ID"            },            "groups": [              {                "timestamp": "TIMESTAMP",                "group_id": "GROUP_ID",                "type": "group_settings_update",                "request_id": "REQUEST_ID",                "profile_picture": {                  "mime_type": "image/jpeg",                  "update_successful": true                  "sha256": "PHOTO_HASH",                },                "group_subject": {                  "text": "Test Subject",                  "update_successful": false,                  "errors": [                    {                      "code": "ERROR_CODE",                      "message": "ERROR_MESSAGE",                      "title": "ERROR_TITLE",                      "error_data": {                        "details": "ERROR_DETAILS"                      }                    }                  ]                },                "group_description": {                  "text": "Test Description",                  "update_successful": false,                  "errors": [                    {                      "code": "ERROR_CODE",                      "message": "ERROR_MESSAGE",                      "title": "ERROR_TITLE",                      "error_data": {                        "details": "ERROR_DETAILS"                      }                    }                  ]                },                "errors": [                  {                    "code": "ERROR_CODE",                    "message": "ERROR_MESSAGE",                    "title": "ERROR_TITLE",                    "error_data": {                      "details": "ERROR_DETAILS"                    }                  }                ]              }            ]          },          "field": "group_settings_update"        }      ]    }  ]}
```

### Falha total na atualização das configurações do grupo

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "DISPLAY_PHONE_NUMBER",
              "phone_number_id": "PHONE_NUMBER"
            },
            "groups": [
              {
                "timestamp": "TIMESTAMP",
                "group_id": "GROUP_ID",
                "request_id": "REQUEST_ID",
                "type": "group_settings_update",
                "profile_picture": {
                  "mime_type": "image/jpeg",
                    "sha256": "PHOTO_HASH",
                  "update_successful": false,
                  "errors": [
                    {
                      "code": "ERROR_CODE",
                      "message": "ERROR_MESSAGE",
                      "title": "ERROR_TITLE",
                      "error_data": {
                        "details": "ERROR_DETAILS"
                      }
                    }
                  ]
                },
                "group_subject": {
                  "text": "Test Subject",
                  "update_successful": false,
                  "errors": [
                    {
                      "code": "ERROR_CODE",
                      "message": "ERROR_MESSAGE",
                      "title": "ERROR_TITLE",
                      "error_data": {
                        "details": "ERROR_DETAILS"
                      }
                    }
                  ]
                },
                "group_description": {
                  "text": "Test Description",
                  "update_successful": false,
                  "errors": [
                    {
                      "code": "ERROR_CODE",
                      "message": "ERROR_MESSAGE",
                      "title": "ERROR_TITLE",
                      "error_data": {
                        "details": "ERROR_DETAILS"
                      }
                    }
                  ]
                },
                "errors": [
                  {
                    "code": "ERROR_CODE",
                    "message": "ERROR_MESSAGE",
                    "title": "ERROR_TITLE",
                    "error_data": {
                      "details": "ERROR_DETAILS"
                    }
                  }
                ]
              }
            ]
          },
          "field": "group_settings_update"
        }
      ]
    }
  ]
}
```

## webhooks `group_status_update`

O WhatsApp usa uma tecnologia avançada de machine learning que analisa dados de grupos, como nomes, fotos do perfil e descrições. Nossos usuários também podem fazer denúncias usando opções simples que estão disponíveis em todas as conversas.

Podemos suspender conversas em grupo para cumprir nossas obrigações legais. Também podemos impedir outras atividades de conversa quando um administrador do grupo viola os [Termos de Serviço](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fterms-of-service&h=AT2ESChLqdOSfIfqHA0Sd6hT8hz2NAo6C_srlHJ8j-LeaT-K_HiTJUgoJxMxt2HDcbyNa_HWsCAwA4gxI7bFEcyR6KFKmXAMszVUTuiMq8zjmYqbbLvnzdElUBI9AFSKBx_PZEnyNz2SyD1sWOeV3aVssDM).

Você poderá receber um webhook se um grupo que gerencia for suspenso. Da mesma forma, você poderá receber um webhook se um grupo suspenso que gerencia seja reativado.

### Grupo suspenso

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "DISPLAY_PHONE_NUMBER",              "phone_number_id": "PHONE_NUMBER_ID"            },            "groups": [              {                "timestamp": "TIMESTAMP",                "type": "group_suspend",                "group_id": "GROUP_ID"              }            ]          },          "field": "group_status_update"        }      ]    }  ]}
```

### Suspensão do grupo cancelada

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "DISPLAY_PHONE_NUMBER",              "phone_number_id": "PHONE_NUMBER_ID"            },            "groups": [              {                "timestamp": "TIMESTAMP",                "type": "group_suspend_cleared",                "group_id": "GROUP_ID"              }            ]          },          "field": "group_status_update"        }      ]    }  ]}
```

## Webhooks de status de mensagens de grupo

Ao enviar mensagens para um grupo, você receberá um webhook de status quando a mensagem for enviada, entregue e lida.

Em vez de enviar vários webhooks para cada atualização de status, enviaremos um webhook agregado.

Isso significa que, se você enviar uma mensagem e tiver definido o recebimento de vários status `read` ou `delivered`, enviaremos um único webhook agregado com vários objetos `status`.

Cada webhook que você recebe faz referência apenas a uma mensagem única enviada a um grupo único e a um tipo de status único.

### Status de mensagens do grupo agregadas

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "BUSINESS_DISPLAY_PHONE_NUMBER",              "phone_number_id": "BUSINESS_PHONE_NUMBER_ID"            },            "statuses": [              {                "id": "WHATSAPP_MESSAGE_ID",                "status": "delivered",                "timestamp": "WEBHOOK_TRIGGER_TIMESTAMP",                "recipient_id": "GROUP_ID",                "recipient_type": "group",                "recipient_participant_id": "GROUP_PARTICIPANT_PHONE_NUMBER",                "conversation": {                  "id": "CONVERSATION_ID",                  "origin": {                    "type": "CONVERSATION_CATEGORY"                  },                  "pricing": {                    "billable": "IS_BILLABLE",                    "pricing_model": "PRICING_MODEL",                    "category": "CONVERSATION_CATEGORY"                  }                }              },              {                "id": "WHATSAPP_MESSAGE_ID",                "status": "delivered",                "timestamp": "WEBHOOK_TRIGGER_TIMESTAMP",                "recipient_id": "GROUP_ID",                "recipient_type": "group",                "recipient_participant_id": "GROUP_PARTICIPANT_PHONE_NUMBER",                "conversation": {                  "id": "CONVERSATION_ID",                  "origin": {                    "type": "CONVERSATION_CATEGORY"                  },                  "pricing": {                    "billable": IS_BILLABLE,                    "pricing_model": "PRICING_MODEL",                    "category": "CONVERSATION_CATEGORY"                  }                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

### Mensagem de grupo entregue

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "BUSINESS_DISPLAY_PHONE_NUMBER",              "phone_number_id": "BUSINESS_PHONE_NUMBER_ID"            },            "statuses": [              {                "id": "WHATSAPP_MESSAGE_ID",                "status": "delivered",                "timestamp": "WEBHOOK_TRIGGER_TIMESTAMP",                "recipient_id": "GROUP_ID",                "recipient_type": "group",                "participant_recipient_id": "GROUP_PARTICIPANT_PHONE_NUMBER",                "conversation": {                "id": "CONVERSATION_ID",                "origin": {                  "type": "CONVERSATION_CATEGORY"                }              },                "pricing": {                  "billable": IS_BILLABLE,                  "pricing_model": "PRICING_MODEL",                  "category": "CONVERSATION_CATEGORY"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

### Informações sobre preços

Veja abaixo as especificações para webhooks de mensagens de status que contêm informações sobre preços:

-   Definição de `CONVERSATION_CATEGORY` como uma destas opções:
    -   `group_marketing` – Indica uma conversa de marketing.-   `group_utility` – Indica uma conversa de utilidade.-   `group_service` – Indica uma conversa de serviço.-   Definição de `IS_BILLABLE` como uma destas opções:
    -   `true` – Indica uma conversa faturável.-   `false` – indica uma conversa não faturável.-   `PRICING_MODEL` definido como `PMP`.

[Saiba mais sobre os preços da API de Grupos](/documentation/business-messaging/whatsapp/groups/pricing)

#### Mensagem de grupo lida (_com preços_)

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "BUSINESS_DISPLAY_PHONE_NUMBER",              "phone_number_id": "BUSINESS_PHONE_NUMBER_ID"            },            "statuses": [              {                "id": "WHATSAPP_MESSAGE_ID",                "status": "read",                "timestamp": "WEBHOOK_TRIGGER_TIMESTAMP",                "recipient_id": "GROUP_ID",                "recipient_type": "group",                "participant_recipient_id": "GROUP_PARTICIPANT_PHONE_NUMBER",                "conversation": {                "id": "CONVERSATION_ID",                "origin": {                  "type": "CONVERSATION_CATEGORY"                }              },                "pricing": {                  "billable": IS_BILLABLE,                  "pricing_model": "PRICING_MODEL",                  "category": "CONVERSATION_CATEGORY"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

#### Mensagem de grupo lida (_sem preços_)

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "BUSINESS_DISPLAY_PHONE_NUMBER",              "phone_number_id": "BUSINESS_PHONE_NUMBER_ID"            },            "statuses": [              {                "id": "WHATSAPP_MESSAGE_ID",                "status": "read",                "timestamp": "WEBHOOK_TRIGGER_TIMESTAMP",                "recipient_id": "GROUP_ID",                "recipient_type": "group"                "participant_recipient_id": "GROUP_PARTICIPANT_PHONE_NUMBER"              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)