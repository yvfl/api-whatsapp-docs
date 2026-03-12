<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api -->
<!-- Scraped: 2026-03-10T21:59:05.742Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# WhatsApp Cloud API - API de Modelos

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api/v23.0.md/)

Version

v23.0

Criar, recuperar, atualizar e excluir modelos de mensagens.

Gerenciar formatos de mensagens pré-aprovados para conversas iniciadas por empresas.

Inclui envio de modelos, localização e métricas de pontuação de qualidade.

## URL base

https://graph.facebook.com

## Pontos de extremidade

GET

[/{Version}/{TEMPLATE\_ID}](#get-version-template-id)

POST

[/{Version}/{TEMPLATE\_ID}](#post-version-template-id)

GET

[/{Version}/{WABA-ID}/message\_templates](#get-version-waba-id-message-templates)

POST

[/{Version}/{WABA-ID}/message\_templates](#post-version-waba-id-message-templates)

DELETE

[/{Version}/{WABA-ID}/message\_templates](#delete-version-waba-id-message-templates)

* * *

## GET /{Version}/{TEMPLATE\_ID}

-   Guia: [Modelos de Mensagem](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de endpoint: [Modelo de Mensagem do WhatsApp](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm/)
    

### Sintaxe da solicitação

**GET** /{Version}/{TEMPLATE\_ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{TEMPLATE_ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "category": "MARKETING",      "components": {        "0": {          "format": "TEXT",          "text": "Fall Sale",          "type": "HEADER"        },        "1": {          "example": {            "body_text": {              "0": [                "FALL25"              ]            }          },          "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",          "type": "BODY"        },        "2": {          "text": "Not interested in any of our sales? Tap Stop Promotions",          "type": "FOOTER"        },        "3": {          "buttons": {            "0": {              "text": "Stop promotions",              "type": "QUICK_REPLY"            }          },          "type": "BUTTONS"        }      },      "id": "920070352646140",      "language": "en_US",      "name": "2023_april_promo",      "status": "APPROVED"    }  }}
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

TEMPLATE\_IDstring·obrigatório

Respostas

* * *

-   Guia: [Modelos de Mensagem](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de endpoint: [Modelo de Mensagem do WhatsApp](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm/)
    

200

Resposta de exemplo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

categorystring

* * *

componentsarray of object

Mostrar atributos secundários

* * *

components\[\]object

Mostrar atributos secundários

* * *

buttonsarray of object

Mostrar atributos secundários

* * *

buttons\[\]object

Mostrar atributos secundários

* * *

textstring

* * *

typestring

* * *

exampleobject

Mostrar atributos secundários

* * *

body\_textarray of array of string

Mostrar atributos secundários

* * *

body\_text\[\]array of string

Mostrar atributos secundários

* * *

body\_text\[\]\[\]string

* * *

formatstring

* * *

textstring

* * *

typestring

* * *

idstring

* * *

languagestring

* * *

namestring

* * *

statusstring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{TEMPLATE_ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "category": "MARKETING",      "components": {        "0": {          "format": "TEXT",          "text": "Fall Sale",          "type": "HEADER"        },        "1": {          "example": {            "body_text": {              "0": [                "FALL25"              ]            }          },          "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",          "type": "BODY"        },        "2": {          "text": "Not interested in any of our sales? Tap Stop Promotions",          "type": "FOOTER"        },        "3": {          "buttons": {            "0": {              "text": "Stop promotions",              "type": "QUICK_REPLY"            }          },          "type": "BUTTONS"        }      },      "id": "920070352646140",      "language": "en_US",      "name": "2023_april_promo",      "status": "APPROVED"    }  }}
```

* * *

## POST /{Version}/{TEMPLATE\_ID}

-   Guia: [Modelos de Mensagem](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de endpoint: [Modelo de Mensagem do WhatsApp](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm/)
    

### Sintaxe da solicitação

**POST** /{Version}/{TEMPLATE\_ID}

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{TEMPLATE_ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "category": "MARKETING",  "components": {    "0": {      "format": "TEXT",      "text": "Fall Sale",      "type": "HEADER"    },    "1": {      "example": {        "body_text": {          "0": [            "FALL25"          ]        }      },      "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",      "type": "BODY"    },    "2": {      "text": "Not interested in any of our sales? Tap Stop Promotions",      "type": "FOOTER"    },    "3": {      "buttons": {        "0": {          "text": "Stop promotions",          "type": "QUICK_REPLY"        }      },      "type": "BUTTONS"    }  },  "language": "en_US",  "name": "2023_april_promo"}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "success": true    }  }}
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

TEMPLATE\_IDstring·obrigatório

Corpo da solicitaçãoOpcional

* * *

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

categorystring

* * *

componentsarray of object

Mostrar atributos secundários

* * *

components\[\]object

Mostrar atributos secundários

* * *

buttonsarray of object

Mostrar atributos secundários

* * *

buttons\[\]object

Mostrar atributos secundários

* * *

textstring

* * *

typestring

* * *

exampleobject

Mostrar atributos secundários

* * *

body\_textarray of array of string

Mostrar atributos secundários

* * *

body\_text\[\]array of string

Mostrar atributos secundários

* * *

body\_text\[\]\[\]string

* * *

formatstring

* * *

textstring

* * *

typestring

* * *

languagestring

* * *

namestring

Respostas

* * *

-   Guia: [Modelos de Mensagem](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de endpoint: [Modelo de Mensagem do WhatsApp](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm/)
    

200

Resposta de exemplo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{TEMPLATE_ID}' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "category": "MARKETING",  "components": {    "0": {      "format": "TEXT",      "text": "Fall Sale",      "type": "HEADER"    },    "1": {      "example": {        "body_text": {          "0": [            "FALL25"          ]        }      },      "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",      "type": "BODY"    },    "2": {      "text": "Not interested in any of our sales? Tap Stop Promotions",      "type": "FOOTER"    },    "3": {      "buttons": {        "0": {          "text": "Stop promotions",          "type": "QUICK_REPLY"        }      },      "type": "BUTTONS"    }  },  "language": "en_US",  "name": "2023_april_promo"}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "success": true    }  }}
```

* * *

## GET /{Version}/{WABA-ID}/message\_templates

-   Guia: [Modelos de Mensagem](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de endpoint: [Conta de Negócios do WhatsApp > Modelos de Mensagem](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)
    

### Sintaxe da solicitação

**GET** /{Version}/{WABA-ID}/message\_templates

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/message_templates' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "data": {        "0": {          "category": "MARKETING",          "components": {            "0": {              "format": "TEXT",              "text": "Hello World",              "type": "HEADER"            },            "1": {              "text": "Welcome and congratulations!! This message demonstrates your ability to send a message notification from WhatsApp Business Platform’s Cloud API. Thank you for taking the time to test with us.",              "type": "BODY"            },            "2": {              "text": "WhatsApp Business API Team",              "type": "FOOTER"            }          },          "id": "1192339204654487",          "language": "en_US",          "name": "hello_world",          "previous_category": "ACCOUNT_UPDATE",          "status": "APPROVED"        },        "1": {          "category": "MARKETING",          "components": {            "0": {              "format": "TEXT",              "text": "Fall Sale",              "type": "HEADER"            },            "1": {              "example": {                "body_text": {                  "0": [                    "FALL25"                  ]                }              },              "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",              "type": "BODY"            },            "2": {              "text": "Not interested in any of our sales? Tap Stop Promotions",              "type": "FOOTER"            },            "3": {              "buttons": {                "0": {                  "text": "Stop promotions",                  "type": "QUICK_REPLY"                }              },              "type": "BUTTONS"            }          },          "id": "920070352646140",          "language": "en_US",          "name": "2023_april_promo",          "status": "APPROVED"        }      },      "paging": {        "cursors": {          "after": "MjQZD",          "before": "MAZDZD"        }      }    }  }}
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

Query Parameters

* * *

namestring

Respostas

* * *

-   Guia: [Modelos de Mensagem](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de endpoint: [Conta de Negócios do WhatsApp > Modelos de Mensagem](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)
    

200

Resposta de exemplo / Resposta de exemplo

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

categorystring

* * *

componentsarray of object

Mostrar atributos secundários

* * *

components\[\]object

Mostrar atributos secundários

* * *

buttonsarray of object

Mostrar atributos secundários

* * *

buttons\[\]object

Mostrar atributos secundários

* * *

textstring

* * *

typestring

* * *

exampleobject

Mostrar atributos secundários

* * *

body\_textarray of array of string

Mostrar atributos secundários

* * *

body\_text\[\]array of string

Mostrar atributos secundários

* * *

body\_text\[\]\[\]string

* * *

formatstring

* * *

textstring

* * *

typestring

* * *

idstring

* * *

languagestring

* * *

namestring

* * *

statusstring

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
curl --request GET \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/message_templates' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "data": {        "0": {          "category": "MARKETING",          "components": {            "0": {              "format": "TEXT",              "text": "Hello World",              "type": "HEADER"            },            "1": {              "text": "Welcome and congratulations!! This message demonstrates your ability to send a message notification from WhatsApp Business Platform’s Cloud API. Thank you for taking the time to test with us.",              "type": "BODY"            },            "2": {              "text": "WhatsApp Business API Team",              "type": "FOOTER"            }          },          "id": "1192339204654487",          "language": "en_US",          "name": "hello_world",          "previous_category": "ACCOUNT_UPDATE",          "status": "APPROVED"        },        "1": {          "category": "MARKETING",          "components": {            "0": {              "format": "TEXT",              "text": "Fall Sale",              "type": "HEADER"            },            "1": {              "example": {                "body_text": {                  "0": [                    "FALL25"                  ]                }              },              "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",              "type": "BODY"            },            "2": {              "text": "Not interested in any of our sales? Tap Stop Promotions",              "type": "FOOTER"            },            "3": {              "buttons": {                "0": {                  "text": "Stop promotions",                  "type": "QUICK_REPLY"                }              },              "type": "BUTTONS"            }          },          "id": "920070352646140",          "language": "en_US",          "name": "2023_april_promo",          "status": "APPROVED"        }      },      "paging": {        "cursors": {          "after": "MjQZD",          "before": "MAZDZD"        }      }    }  }}
```

* * *

## POST /{Version}/{WABA-ID}/message\_templates

-   Guia: [Modelos de Autenticação com Botões OTP](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/authentication-templates/authentication-templates)
    
-   Guia: [Modelos de Mensagens](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de Endpoint: [Conta de Negócios do WhatsApp > Modelos de Mensagens](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)
    

### Sintaxe da solicitação

**POST** /{Version}/{WABA-ID}/message\_templates

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/message_templates' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "category": "MARKETING",  "components": {    "0": {      "text": "Check out this new offer",      "type": "body"    },    "1": {      "buttons": {        "0": {          "flow_action": "navigate",          "flow_json": "{\"version\":\"5.0\",\"screens\":[{\"id\":\"WELCOME_SCREEN\",\"layout\":{\"type\":\"SingleColumnLayout\",\"children\":[{\"type\":\"TextHeading\",\"text\":\"Hello World\"},{\"type\":\"Footer\",\"label\":\"Complete\",\"on-click-action\":{\"name\":\"complete\",\"payload\":{}}}]},\"title\":\"Welcome\",\"terminal\":true,\"success\":true,\"data\":{}}]}",          "navigate_screen": "WELCOME_SCREEN",          "text": "Check out this offer!",          "type": "FLOW"        }      },      "type": "BUTTONS"    }  },  "language": "en_US",  "name": "<TEMPLATE_NAME>"}'
```

Selecionar código do status

200

* * *

```
{  "Create Flow Template Message by Flow JSON": {    "value": {      "category": "MARKETING",      "id": "template-1",      "status": "PENDING"    }  },  "Create Flow Template Message by ID": {    "value": {      "category": "MARKETING",      "id": "template-1",      "status": "PENDING"    }  },  "Create Flow Template Message by Name": {    "value": {      "category": "MARKETING",      "id": "template-1",      "status": "PENDING"    }  },  "Example response": {    "value": {      "category": "UTILITY",      "id": "1689556908129832",      "status": "PENDING"    }  }}
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

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

categorystring

* * *

componentsarray of object

Mostrar atributos secundários

* * *

components\[\]object

Mostrar atributos secundários

* * *

buttonsarray of object

Mostrar atributos secundários

* * *

buttons\[\]object

Mostrar atributos secundários

* * *

flow\_actionstring

* * *

flow\_idstring

* * *

navigate\_screenstring

* * *

textstring

* * *

typestring

* * *

textstring

* * *

typestring

* * *

languagestring

* * *

namestring

Respostas

* * *

-   Guia: [Modelos de Autenticação com Botões OTP](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/authentication-templates/authentication-templates)
    
-   Guia: [Modelos de Mensagens](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de Endpoint: [Conta de Negócios do WhatsApp > Modelos de Mensagens](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)
    

200

Exemplo de resposta / Exemplo de resposta / Exemplo de resposta / Exemplo de resposta / Exemplo de resposta / Exemplo de resposta / Exemplo de resposta / Exemplo de resposta / Criar Modelo de Fluxo de Mensagem por Nome / Criar Modelo de Fluxo de Mensagem por JSON de Fluxo / Criar Modelo de Fluxo de Mensagem por ID

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

categorystring

* * *

idstring

* * *

statusstring

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/message_templates' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "category": "MARKETING",  "components": {    "0": {      "text": "Check out this new offer",      "type": "body"    },    "1": {      "buttons": {        "0": {          "flow_action": "navigate",          "flow_json": "{\"version\":\"5.0\",\"screens\":[{\"id\":\"WELCOME_SCREEN\",\"layout\":{\"type\":\"SingleColumnLayout\",\"children\":[{\"type\":\"TextHeading\",\"text\":\"Hello World\"},{\"type\":\"Footer\",\"label\":\"Complete\",\"on-click-action\":{\"name\":\"complete\",\"payload\":{}}}]},\"title\":\"Welcome\",\"terminal\":true,\"success\":true,\"data\":{}}]}",          "navigate_screen": "WELCOME_SCREEN",          "text": "Check out this offer!",          "type": "FLOW"        }      },      "type": "BUTTONS"    }  },  "language": "en_US",  "name": "<TEMPLATE_NAME>"}'
```

Selecionar código do status

200

* * *

```
{  "Create Flow Template Message by Flow JSON": {    "value": {      "category": "MARKETING",      "id": "template-1",      "status": "PENDING"    }  },  "Create Flow Template Message by ID": {    "value": {      "category": "MARKETING",      "id": "template-1",      "status": "PENDING"    }  },  "Create Flow Template Message by Name": {    "value": {      "category": "MARKETING",      "id": "template-1",      "status": "PENDING"    }  },  "Example response": {    "value": {      "category": "UTILITY",      "id": "1689556908129832",      "status": "PENDING"    }  }}
```

* * *

## DELETE /{Version}/{WABA-ID}/message\_templates

-   Guia: [Modelos de Mensagem](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de endpoint: [Conta de Negócios do WhatsApp > Modelos de Mensagem](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)
    

### Sintaxe da solicitação

**DELETE** /{Version}/{WABA-ID}/message\_templates

Testar

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/message_templates' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "success": true    }  }}
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

Query Parameters

* * *

namestring

hsm\_idstring

ID do Modelo

Respostas

* * *

-   Guia: [Modelos de Mensagem](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
    
-   Guia: [Como Monitorar Sinais de Qualidade](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
    
-   Referência de endpoint: [Conta de Negócios do WhatsApp > Modelos de Mensagem](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)
    

200

Resposta de exemplo / Resposta de exemplo

Tipo de conteúdo:application/json

Esquema:object

Mostrar atributos secundários

* * *

successboolean

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request DELETE \  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/message_templates' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{}'
```

Selecionar código do status

200

* * *

```
{  "Example response": {    "value": {      "success": true    }  }}
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