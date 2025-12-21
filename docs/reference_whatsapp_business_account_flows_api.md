<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/flows-api -->
<!-- Scraped: 2025-12-20T17:59:32.885Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Fluxos

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/flows-api/v23.0.md/)

Version

v23.0

Criar, atualizar, publicar, depreciar e excluir Fluxos do WhatsApp.

Gerenciar experiências interativas baseadas em formulários dentro de conversas do WhatsApp.

Recuperar metadados de fluxo, definições JSON e métricas de uso.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{WABA-ID}/flows](#get-version-waba-id-flows)

POST

[/{Version}/{WABA-ID}/flows](#post-version-waba-id-flows)

POST

[/{Version}/{WABA-ID}/migrate\_flows](#post-version-waba-id-migrate-flows)

GET

[/{Version}/{Flow-ID}](#get-version-flow-id)

POST

[/{Version}/{Flow-ID}](#post-version-flow-id)

DELETE

[/{Version}/{Flow-ID}](#delete-version-flow-id)

GET

[/{Version}/{Flow-ID}/assets](#get-version-flow-id-assets)

POST

[/{Version}/{Flow-ID}/assets](#post-version-flow-id-assets)

POST

[/{Version}/{Flow-ID}/publish](#post-version-flow-id-publish)

POST

[/{Version}/{Flow-ID}/deprecate](#post-version-flow-id-deprecate)

* * *

## GET /{Version}/{WABA-ID}/flows

Listar Fluxos

### Sintaxe da solicitação

**GET** /{Version}/{WABA-ID}/flows

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/flows' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "List Flows": {    "value": {      "data": {        "0": {          "categories": [            "SIGN_UP"          ],          "id": "flow-1",          "name": "my first flow",          "status": "DRAFT",          "validation_errors": []        },        "1": {          "categories": {            "0": "SIGN_UP",            "1": null          },          "id": "flow-2",          "name": "my second flow",          "status": "DRAFT",          "validation_errors": {            "0": {              "column_end": 30,              "column_start": 17,              "error": "INVALID_PROPERTY",              "error_type": "JSON_SCHEMA_ERROR",              "line_end": 46,              "line_start": 46,              "message": "The property \"initial-text\" cannot be specified at \"$root/screens/0/layout/children/2/children/0\"."            }          }        },        "2": {          "categories": [            "CONTACT_US"          ],          "id": "flow-3",          "name": "another flow",          "status": "PUBLISHED",          "validation_errors": []        }      },      "paging": {        "cursors": {          "after": "QVFIUnZAWV...",          "before": "QVFIUnpKT..."        }      }    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

WABA-IDstring·obrigatório

Respostas

* * *

Listar Fluxos

200

Listar Fluxos

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

dataarray of object

Mostrar atributos secundários

* * *

data\[\]object

Mostrar atributos secundários

* * *

categoriesarray of string

Mostrar atributos secundários

* * *

categories\[\]string

* * *

idstring

* * *

namestring

* * *

statusstring

* * *

validation\_errorsarray of unknown

Mostrar atributos secundários

* * *

validation\_errors\[\]unknown

* * *

pagingobject

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

afterstring

* * *

beforestring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/flows' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "List Flows": {    "value": {      "data": {        "0": {          "categories": [            "SIGN_UP"          ],          "id": "flow-1",          "name": "my first flow",          "status": "DRAFT",          "validation_errors": []        },        "1": {          "categories": {            "0": "SIGN_UP",            "1": null          },          "id": "flow-2",          "name": "my second flow",          "status": "DRAFT",          "validation_errors": {            "0": {              "column_end": 30,              "column_start": 17,              "error": "INVALID_PROPERTY",              "error_type": "JSON_SCHEMA_ERROR",              "line_end": 46,              "line_start": 46,              "message": "The property \"initial-text\" cannot be specified at \"$root/screens/0/layout/children/2/children/0\"."            }          }        },        "2": {          "categories": [            "CONTACT_US"          ],          "id": "flow-3",          "name": "another flow",          "status": "PUBLISHED",          "validation_errors": []        }      },      "paging": {        "cursors": {          "after": "QVFIUnZAWV...",          "before": "QVFIUnpKT..."        }      }    }  }}
```

* * *

## POST /{Version}/{WABA-ID}/flows

Cria um novo fluxo. Para clonar um fluxo existente, você pode adicionar o parâmetro "clone\_flow\_id": "id-do-fluxo-original"

### Sintaxe da solicitação

**POST** /{Version}/{WABA-ID}/flows

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/flows' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Create Flow": {    "value": {      "id": "flow-1"    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

WABA-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:multipart/form-data

Esquema:object

Mostrar atributos secundários

* * *

categoriesstring

* * *

clone\_flow\_idstring

* * *

endpoint\_uristring

* * *

namestring

Respostas

* * *

Cria um novo fluxo. Para clonar um fluxo existente, você pode adicionar o parâmetro "clone\_flow\_id": "id-do-fluxo-original"

200

Criar Fluxo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

idstring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/flows' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Create Flow": {    "value": {      "id": "flow-1"    }  }}
```

* * *

## POST /{Version}/{WABA-ID}/migrate\_flows

Cria uma cópia de fluxos existentes da WABA de origem para a WABA de destino com os mesmos nomes.

### Sintaxe da solicitação

**POST** /{Version}/{WABA-ID}/migrate\_flows

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/migrate_flows' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Migrate Flows": {    "value": {      "failed_flows": {        "0": {          "error_code": "4233041",          "error_message": "Flows Migration Error: Flow name not found in source WABA.",          "source_name": "leadgen"        }      },      "migrated_flows": {        "0": {          "migrated_id": "dest-flow-1",          "source_id": "source-flow-1",          "source_name": "appointment"        }      }    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

WABA-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:multipart/form-data

Esquema:object

Mostrar atributos secundários

* * *

source\_flow\_namesstring

\[Optional\] The names of the flows that will be copied from the source WABA. If not specified, all flows in the source WABA will be copied

* * *

source\_waba\_idstring

The ID of the source WABA from which the flows will be copied

Respostas

* * *

Cria uma cópia de fluxos existentes da WABA de origem para a WABA de destino com os mesmos nomes.

200

Migrar Fluxos

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

failed\_flowsarray of object

Mostrar atributos secundários

* * *

failed\_flows\[\]object

Mostrar atributos secundários

* * *

error\_codestring

* * *

error\_messagestring

* * *

source\_namestring

* * *

migrated\_flowsarray of object

Mostrar atributos secundários

* * *

migrated\_flows\[\]object

Mostrar atributos secundários

* * *

migrated\_idstring

* * *

source\_idstring

* * *

source\_namestring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/migrate_flows' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Migrate Flows": {    "value": {      "failed_flows": {        "0": {          "error_code": "4233041",          "error_message": "Flows Migration Error: Flow name not found in source WABA.",          "source_name": "leadgen"        }      },      "migrated_flows": {        "0": {          "migrated_id": "dest-flow-1",          "source_id": "source-flow-1",          "source_name": "appointment"        }      }    }  }}
```

* * *

## GET /{Version}/{Flow-ID}

É possível solicitar campos específicos habilitando o parâmetro de consulta 'fields'.

### Sintaxe da solicitação

**GET** /{Version}/{Flow-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Get Endpoint Availability Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "succeeded",                "value": 713              },              "1": {                "key": "failed",                "value": 335              }            },            "timestamp": "2024-01-28T08:00:00+0000"          },          "1": {            "data": {              "0": {                "key": "succeeded",                "value": 623              },              "1": {                "key": "failed",                "value": 2              }            },            "timestamp": "2024-01-29T08:00:00+0000"          }        },        "granularity": "DAY",        "name": "ENDPOINT_AVAILABILITY"      }    }  },  "Get Endpoint Request Count Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "value",                "value": 138              }            },            "timestamp": "2024-01-28T08:00:00+0000"          },          "1": {            "data": {              "0": {                "key": "value",                "value": 361              }            },            "timestamp": "2024-01-29T08:00:00+0000"          }        },        "granularity": "DAY",        "name": "ENDPOINT_REQUEST_COUNT"      }    }  },  "Get Endpoint Request Error Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "timeout_error",                "value": 25              }            },            "timestamp": "2024-01-28T08:00:00+0000"          },          "1": {            "data": {              "0": {                "key": "timeout_error",                "value": 64              }            },            "timestamp": "2024-01-29T08:00:00+0000"          }        },        "granularity": "DAY",        "name": "ENDPOINT_REQUEST_ERROR"      }    }  },  "Get Endpoint Request Error Rate Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "value",                "value": "0.12625250501002"              }            },            "timestamp": "2024-01-28T08:00:00+0000"          }        },        "granularity": "LIFETIME",        "name": "ENDPOINT_REQUEST_ERROR_RATE"      }    }  },  "Get Endpoint Request Latencies Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "1",                "value": 106              }            },            "timestamp": "2024-01-28T08:00:00+0000"          },          "1": {            "data": {              "0": {                "key": "1",                "value": 328              },              "1": {                "key": "2",                "value": 2              }            },            "timestamp": "2024-01-29T08:00:00+0000"          }        },        "granularity": "DAY",        "name": "ENDPOINT_REQUEST_LATENCY_SECONDS_CEIL"      }    }  },  "Get Flow": {    "value": {      "application": {        "id": "app-1",        "link": "https://www.facebook.com/games/?app_id=app-1",        "name": "My Awesome App"      },      "categories": [        "OTHER"      ],      "data_api_version": "3.0",      "data_channel_uri": "https://example.com",      "health_status": {        "can_send_message": "BLOCKED",        "entities": {          "0": {            "can_send_message": "AVAILABLE",            "entity_type": "FLOW",            "id": "flow-1"          },          "1": {            "can_send_message": "BLOCKED",            "entity_type": "WABA",            "errors": {              "0": {                "error_code": 141006,                "error_description": "There is an error with the payment method. This will block business initiated conversations.",                "possible_solution": "There was an error with your payment method. Please add a new payment method to the account."              },              "1": {                "error_code": 141014,                "error_description": "The WABA is banned.",                "possible_solution": "Please visit Business Support Home for more details (https://business.facebook.com/accountquality) on how to appeal the ban."              }            },            "id": "waba-1"          },          "2": {            "can_send_message": "LIMITED",            "entity_type": "BUSINESS",            "errors": {              "0": {                "error_code": 141010,                "error_description": "The Business has not passed business verification.",                "possible_solution": "Visit business settings and start or resolve the business verification request."              }            },            "id": "business-1"          },          "3": {            "can_send_message": "AVAILABLE",            "entity_type": "APP",            "id": "app-1"          }        }      },      "id": "flow-1",      "json_version": "2.1",      "name": "my first flow",      "preview": {        "expires_at": "2023-05-21T11:18:09+0000",        "preview_url": "https://business.facebook.com/wa/manage/flows/55000..../preview/?token=b9d6....."      },      "status": "DRAFT",      "validation_errors": [],      "whatsapp_business_account": {        "business_type": "ent",        "id": "waba-1",        "message_template_namespace": "namespace-1",        "name": "My Awesome WABA",        "timezone_id": "54"      }    }  },  "Get Preview URL": {    "value": {      "id": "flow-1",      "preview": {        "expires_at": "2023-05-21T11:18:09+0000",        "preview_url": "https://business.facebook.com/wa/manage/flows/550.../preview/?token=b9d6...."      }    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Flow-IDstring·obrigatório

Query Parameters

* * *

fieldsstring

Retornar campos específicos na resposta

date\_formatstring

Retorna a data como carimbo de data/hora Unix em segundos

Respostas

* * *

É possível solicitar campos específicos habilitando o parâmetro de consulta 'fields'.

200

Obter Fluxo / Obter URL de Visualização / Obter Métrica de Contagem de Solicitações de Endpoint / Obter Métrica de Erro de Solicitação de Endpoint / Obter Métrica de Taxa de Erro de Solicitação de Endpoint / Obter Métrica de Latências de Solicitação de Endpoint / Obter Métrica de Disponibilidade de Endpoint

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

applicationobject

Mostrar atributos secundários

* * *

idstring

* * *

linkstring

* * *

namestring

* * *

categoriesarray of string

Mostrar atributos secundários

* * *

categories\[\]string

* * *

data\_api\_versionstring

* * *

data\_channel\_uristring

* * *

health\_statusobject

Mostrar atributos secundários

* * *

can\_send\_messagestring

* * *

entitiesarray of object

Mostrar atributos secundários

* * *

entities\[\]object

Mostrar atributos secundários

* * *

can\_send\_messagestring

* * *

entity\_typestring

* * *

errorsarray of object

Mostrar atributos secundários

* * *

errors\[\]object

Mostrar atributos secundários

* * *

error\_codenumber

* * *

error\_descriptionstring

* * *

possible\_solutionstring

* * *

idstring

* * *

idstring

* * *

json\_versionstring

* * *

metricobject

Mostrar atributos secundários

* * *

data\_pointsarray of object

Mostrar atributos secundários

* * *

data\_points\[\]object

Mostrar atributos secundários

* * *

dataarray of object

Mostrar atributos secundários

* * *

data\[\]object

Mostrar atributos secundários

* * *

keystring

* * *

valuenumber

* * *

timestampstring

* * *

granularitystring

* * *

namestring

* * *

namestring

* * *

previewobject

Mostrar atributos secundários

* * *

expires\_atstring

* * *

preview\_urlstring

* * *

statusstring

* * *

validation\_errorsarray of unknown

Mostrar atributos secundários

* * *

validation\_errors\[\]unknown

* * *

whatsapp\_business\_accountobject

Mostrar atributos secundários

* * *

business\_typestring

* * *

idstring

* * *

message\_template\_namespacestring

* * *

namestring

* * *

timezone\_idstring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Get Endpoint Availability Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "succeeded",                "value": 713              },              "1": {                "key": "failed",                "value": 335              }            },            "timestamp": "2024-01-28T08:00:00+0000"          },          "1": {            "data": {              "0": {                "key": "succeeded",                "value": 623              },              "1": {                "key": "failed",                "value": 2              }            },            "timestamp": "2024-01-29T08:00:00+0000"          }        },        "granularity": "DAY",        "name": "ENDPOINT_AVAILABILITY"      }    }  },  "Get Endpoint Request Count Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "value",                "value": 138              }            },            "timestamp": "2024-01-28T08:00:00+0000"          },          "1": {            "data": {              "0": {                "key": "value",                "value": 361              }            },            "timestamp": "2024-01-29T08:00:00+0000"          }        },        "granularity": "DAY",        "name": "ENDPOINT_REQUEST_COUNT"      }    }  },  "Get Endpoint Request Error Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "timeout_error",                "value": 25              }            },            "timestamp": "2024-01-28T08:00:00+0000"          },          "1": {            "data": {              "0": {                "key": "timeout_error",                "value": 64              }            },            "timestamp": "2024-01-29T08:00:00+0000"          }        },        "granularity": "DAY",        "name": "ENDPOINT_REQUEST_ERROR"      }    }  },  "Get Endpoint Request Error Rate Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "value",                "value": "0.12625250501002"              }            },            "timestamp": "2024-01-28T08:00:00+0000"          }        },        "granularity": "LIFETIME",        "name": "ENDPOINT_REQUEST_ERROR_RATE"      }    }  },  "Get Endpoint Request Latencies Metric": {    "value": {      "id": "flow-1",      "metric": {        "data_points": {          "0": {            "data": {              "0": {                "key": "1",                "value": 106              }            },            "timestamp": "2024-01-28T08:00:00+0000"          },          "1": {            "data": {              "0": {                "key": "1",                "value": 328              },              "1": {                "key": "2",                "value": 2              }            },            "timestamp": "2024-01-29T08:00:00+0000"          }        },        "granularity": "DAY",        "name": "ENDPOINT_REQUEST_LATENCY_SECONDS_CEIL"      }    }  },  "Get Flow": {    "value": {      "application": {        "id": "app-1",        "link": "https://www.facebook.com/games/?app_id=app-1",        "name": "My Awesome App"      },      "categories": [        "OTHER"      ],      "data_api_version": "3.0",      "data_channel_uri": "https://example.com",      "health_status": {        "can_send_message": "BLOCKED",        "entities": {          "0": {            "can_send_message": "AVAILABLE",            "entity_type": "FLOW",            "id": "flow-1"          },          "1": {            "can_send_message": "BLOCKED",            "entity_type": "WABA",            "errors": {              "0": {                "error_code": 141006,                "error_description": "There is an error with the payment method. This will block business initiated conversations.",                "possible_solution": "There was an error with your payment method. Please add a new payment method to the account."              },              "1": {                "error_code": 141014,                "error_description": "The WABA is banned.",                "possible_solution": "Please visit Business Support Home for more details (https://business.facebook.com/accountquality) on how to appeal the ban."              }            },            "id": "waba-1"          },          "2": {            "can_send_message": "LIMITED",            "entity_type": "BUSINESS",            "errors": {              "0": {                "error_code": 141010,                "error_description": "The Business has not passed business verification.",                "possible_solution": "Visit business settings and start or resolve the business verification request."              }            },            "id": "business-1"          },          "3": {            "can_send_message": "AVAILABLE",            "entity_type": "APP",            "id": "app-1"          }        }      },      "id": "flow-1",      "json_version": "2.1",      "name": "my first flow",      "preview": {        "expires_at": "2023-05-21T11:18:09+0000",        "preview_url": "https://business.facebook.com/wa/manage/flows/55000..../preview/?token=b9d6....."      },      "status": "DRAFT",      "validation_errors": [],      "whatsapp_business_account": {        "business_type": "ent",        "id": "waba-1",        "message_template_namespace": "namespace-1",        "name": "My Awesome WABA",        "timezone_id": "54"      }    }  },  "Get Preview URL": {    "value": {      "id": "flow-1",      "preview": {        "expires_at": "2023-05-21T11:18:09+0000",        "preview_url": "https://business.facebook.com/wa/manage/flows/550.../preview/?token=b9d6...."      }    }  }}
```

* * *

## POST /{Version}/{Flow-ID}

Atualizar Metadados do Fluxo

### Sintaxe da solicitação

**POST** /{Version}/{Flow-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Update Flow Metadata": {    "value": {      "success": true    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Flow-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:multipart/form-data

Esquema:object

Mostrar atributos secundários

* * *

categoriesstring

* * *

endpoint\_uristring

* * *

namestring

Respostas

* * *

Atualizar Metadados do Fluxo

200

Atualizar Metadados do Fluxo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Update Flow Metadata": {    "value": {      "success": true    }  }}
```

* * *

## DELETE /{Version}/{Flow-ID}

Exclui o fluxo por completo. Essa ação não é reversível. Somente um fluxo RASCUNHO pode ser excluído.

### Sintaxe da solicitação

**DELETE** /{Version}/{Flow-ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Delete Flow": {    "value": {      "success": true    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Flow-IDstring·obrigatório

Respostas

* * *

Exclui o fluxo por completo. Essa ação não é reversível. Somente um fluxo RASCUNHO pode ser excluído.

200

Excluir Fluxo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Delete Flow": {    "value": {      "success": true    }  }}
```

* * *

## GET /{Version}/{Flow-ID}/assets

Retorna todos os ativos anexados ao fluxo. Atualmente, apenas o ativo FLOW\_JSON é suportado.

### Sintaxe da solicitação

**GET** /{Version}/{Flow-ID}/assets

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}/assets' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "List Assets": {    "value": {      "data": {        "0": {          "asset_type": "FLOW_JSON",          "download_url": "https://scontent.xx.fbcdn.net/m1/v/t0.57323-24/An_Hq0jnfJ...",          "name": "flow.json"        }      },      "paging": {        "cursors": {          "after": "QVFIU...",          "before": "QVFIU..."        }      }    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Flow-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:multipart/form-data

Esquema:object

Respostas

* * *

Retorna todos os ativos anexados ao fluxo. Atualmente, apenas o ativo FLOW\_JSON é suportado.

200

Listar Ativos

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

dataarray of object

Mostrar atributos secundários

* * *

data\[\]object

Mostrar atributos secundários

* * *

asset\_typestring

* * *

download\_urlstring

* * *

namestring

* * *

pagingobject

Mostrar atributos secundários

* * *

cursorsobject

Mostrar atributos secundários

* * *

afterstring

* * *

beforestring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}/assets' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "List Assets": {    "value": {      "data": {        "0": {          "asset_type": "FLOW_JSON",          "download_url": "https://scontent.xx.fbcdn.net/m1/v/t0.57323-24/An_Hq0jnfJ...",          "name": "flow.json"        }      },      "paging": {        "cursors": {          "after": "QVFIU...",          "before": "QVFIU..."        }      }    }  }}
```

* * *

## POST /{Version}/{Flow-ID}/assets

Usado para fazer o upload de um arquivo JSON de fluxo com o conteúdo do fluxo. Consulte a documentação do JSON de fluxo aqui [https://developers.facebook.com/docs/whatsapp/flows/reference/flowjson](https://developers.facebook.com/docs/whatsapp/flows/reference/flowjson)

  

O arquivo deve ser anexado como dados. A resposta incluirá quaisquer erros de validação no arquivo JSON.

### Sintaxe da solicitação

**POST** /{Version}/{Flow-ID}/assets

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}/assets' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Upload Flow JSON Asset": {    "value": {      "success": true,      "validation_errors": {        "0": {          "column_end": 30,          "column_start": 17,          "error": "INVALID_PROPERTY",          "error_type": "JSON_SCHEMA_ERROR",          "line_end": 46,          "line_start": 46,          "message": "The property \"initial-text\" cannot be specified at \"$root/screens/0/layout/children/2/children/0\"."        }      }    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Flow-IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:multipart/form-data

Esquema:object

Mostrar atributos secundários

* * *

asset\_typestring

* * *

filestring (binary)

* * *

namestring

Respostas

* * *

Usado para fazer o upload de um arquivo JSON de fluxo com o conteúdo do fluxo. Consulte a documentação do JSON de fluxo aqui [https://developers.facebook.com/docs/whatsapp/flows/reference/flowjson](https://developers.facebook.com/docs/whatsapp/flows/reference/flowjson)

  

O arquivo deve ser anexado como dados. A resposta incluirá quaisquer erros de validação no arquivo JSON.

200

Carregar Ativo JSON do Fluxo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

* * *

validation\_errorsarray of object

Mostrar atributos secundários

* * *

validation\_errors\[\]object

Mostrar atributos secundários

* * *

column\_endnumber

* * *

column\_startnumber

* * *

errorstring

Mostrar atributos secundários

* * *

error\_typestring

* * *

line\_endnumber

* * *

line\_startnumber

* * *

messagestring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}/assets' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: multipart/form-data' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Upload Flow JSON Asset": {    "value": {      "success": true,      "validation_errors": {        "0": {          "column_end": 30,          "column_start": 17,          "error": "INVALID_PROPERTY",          "error_type": "JSON_SCHEMA_ERROR",          "line_end": 46,          "line_start": 46,          "message": "The property \"initial-text\" cannot be specified at \"$root/screens/0/layout/children/2/children/0\"."        }      }    }  }}
```

* * *

## POST /{Version}/{Flow-ID}/publish

Atualiza o status do fluxo como "PUBLICADO". Essa ação não é reversível. O fluxo e seus ativos se tornam imutáveis após a publicação. Para atualizar o fluxo, você deve criar um novo fluxo e especificar o ID do fluxo anterior como o parâmetro 'clone\_flow\_id'.

### Sintaxe da solicitação

**POST** /{Version}/{Flow-ID}/publish

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}/publish' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Publish Flow": {    "value": {      "success": true    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Flow-IDstring·obrigatório

Respostas

* * *

Atualiza o status do fluxo como "PUBLICADO". Essa ação não é reversível. O fluxo e seus ativos se tornam imutáveis após a publicação. Para atualizar o fluxo, você deve criar um novo fluxo e especificar o ID do fluxo anterior como o parâmetro 'clone\_flow\_id'.

200

Publicar Fluxo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}/publish' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Publish Flow": {    "value": {      "success": true    }  }}
```

* * *

## POST /{Version}/{Flow-ID}/deprecate

Atualiza o status do fluxo como "DEPRECATED". Essa ação não é reversível. Somente um fluxo publicado pode ser depreciado para evitar enviá-lo ou abri-lo.

### Sintaxe da solicitação

**POST** /{Version}/{Flow-ID}/deprecate

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}/deprecate' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Deprecate Flow": {    "value": {      "success": true    }  }}
```

Header Parameters

* * *

User-Agentstring

A string do agente do usuário que identifica o software do cliente que faz a solicitação.

Authorizationstring·obrigatório

Token de portador para autenticação de API. Isso deve ser um token de acesso válido obtido por meio do fluxo OAuth apropriado ou token de usuário do sistema.

Path Parameters

* * *

Versionstring·obrigatório

Flow-IDstring·obrigatório

Respostas

* * *

Atualiza o status do fluxo como "DEPRECATED". Essa ação não é reversível. Somente um fluxo publicado pode ser depreciado para evitar enviá-lo ou abri-lo.

200

Descontinuar Flow

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{Flow-ID}/deprecate' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Deprecate Flow": {    "value": {      "success": true    }  }}
```

## Autenticação

**Esquema**

**Tipo**

**Localização**

bearerAuth

HTTP Bearer

Header: Authorization

### Exemplos de uso

bearerAuth:

Include Authorization: Bearer your-token-here in request headers

### Requisitos de autenticação global

Todos os pontos de extremidade requerem o seguinte:

bearerAuth

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)