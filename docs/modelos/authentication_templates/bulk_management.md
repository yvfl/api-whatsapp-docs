<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/bulk-management -->
<!-- Scraped: 2026-01-24T01:02:11.148Z -->

# Gerenciamento em massa

Updated: 10 de nov de 2025

Use o ponto de extremidade [POST /<WABA\_ID>/upsert\_message\_templates](/docs/graph-api/reference/whats-app-business-account/upsert_message_templates#Creating) para atualizar ou criar modelos de autenticação em massa em vários idiomas que incluam ou excluam os avisos opcionais de segurança e de expiração.

Se já houver um modelo com o nome e o idioma correspondentes, ele será atualizado com o conteúdo da solicitação. Caso contrário, um novo modelo será criado.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/upsert_message_templates
```

### Corpo da publicação

```
{
  "name": "<NAME>",
  "languages": [<LANGUAGES>],
  "category": "AUTHENTICATION",
  "components": [
    {
      "type": "BODY",
      "add_security_recommendation": <ADD_SECURITY_RECOMMENDATION> // Optional
    },
    {
      "type": "FOOTER",
      "code_expiration_minutes": <CODE_EXPIRATION_MINUTES> // Optional
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "OTP",
          "otp_type": "<OTP_TYPE>",
          "supported_apps": [
            {
              "package_name": "<PACKAGE_NAME>", // One-tap and zero-tap buttons only
              "signature_hash": "<SIGNATURE_HASH>" // One-tap and zero-tap buttons only
            }
          ]
        }
      ]
    }
  ]
}
```

### Propriedades

Todas as [propriedades de criação de modelos](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#properties) são compatíveis, exceto estas:

-   A propriedade `language` é incompatível. Como alternativa, use `languages` e defina o valor como uma matriz de strings de [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages). Por exemplo: `["en_US","es_ES","fr"]`.-   A propriedade `text` é incompatível.-   A propriedade `autofill_text` é incompatível.

### Exemplo de solicitação de cópia de código

Este exemplo cria três modelos de autenticação (em inglês, espanhol e francês) com botões de copiar código. Cada modelo recebe o nome de "authentication\_code\_copy\_code\_button" e inclui a recomendação de segurança e o tempo de expiração.

```
curl 'https://graph.facebook.com/v24.0/102290129340398/upsert_message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "authentication_code_copy_code_button",
  "languages": ["en_US","es_ES","fr"],
  "category": "AUTHENTICATION",
  "components": [
    {
      "type": "BODY",
      "add_security_recommendation": true
    },
    {
      "type": "FOOTER",
      "code_expiration_minutes": 10
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "OTP",
          "otp_type": "COPY_CODE"
        }
      ]
    }
  ]
}'
```

### Exemplo de solicitação para preenchimento automático com um toque

Este exemplo (1) atualiza um modelo existente com o nome "authentication\_code\_autofill\_button" e o idioma "en\_US" e (2) cria dois novos modelos de autenticação (em espanhol e francês) com botões de preenchimento automático com um toque. Os dois modelos recém-criados recebem o nome de "authentication\_code\_autofill\_button" e incluem a recomendação de segurança e o tempo de expiração.

```
curl 'https://graph.facebook.com/v24.0/102290129340398/upsert_message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "authentication_code_autofill_button",
  "languages": ["en_US","es_ES","fr"],
  "category": "AUTHENTICATION",
  "components": [
    {
      "type": "BODY",
      "add_security_recommendation": true
    },
    {
      "type": "FOOTER",
      "code_expiration_minutes": 15
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "OTP",
          "otp_type": "ONE_TAP",
          "supported_apps": [
            {
              "package_name": "com.example.luckyshrub",
              "signature_hash": "K8a/AINcGX7"
            }
          ]
        }
      ]
    }
  ]
}'
```

### Exemplo de resposta

```
{  "data": [    {      "id": "954638012257287",      "status": "APPROVED",      "language": "en_US"    },    {      "id": "969725527415202",      "status": "APPROVED",      "language": "es_ES"    },    {      "id": "969725530748535",      "status": "APPROVED",      "language": "fr"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)