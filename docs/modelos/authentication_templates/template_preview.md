<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/template-preview -->
<!-- Scraped: 2026-01-24T01:02:33.370Z -->

# Prévias do modelo

Updated: 4 de nov de 2025

Você pode gerar prévias do texto do modelo de autenticação em vários idiomas que incluem ou excluem as strings de recomendação de segurança e de expiração de código usando o ponto de extremidade [**GET /<WABA\_ID>/message\_template\_previews**](/docs/graph-api/reference/whats-app-business-account/message_template_previews#Reading).

### Sintaxe da solicitação

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_template_previews
  ?category=AUTHENTICATION,
  &language=<LANGUAGE>, // Optional
  &add_security_recommendation=<ADD_SECURITY_RECOMMENDATION>, // Optional
  &code_expiration_minutes=<CODE_EXPIRATION_MINUTES>, // Optional
  &button_types=<BUTTON_TYPES> // Optional
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<LANGUAGE>`

_Lista separada por vírgulas_

**Opcional.**

  
Lista separada por vírgulas dos [códigos de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) das versões que você quer retornar.

  
Em caso de omissão, as versões em todos os idiomas aceitos serão retornadas.

`en_US,es_ES`

`<ADD_SECURITY_RECOMMENDATION>`

_Booliano_

**Opcional.**

  
Defina como `true` se quiser que a string do corpo da recomendação de segurança seja incluída na resposta.

  
Em caso de omissão, a string não será incluída.

`true`

`<CODE_EXPIRATION_MINUTES>`

_Int64_

**Opcional.**

  
Defina como um número inteiro se quiser que a string de rodapé da expiração do código seja incluída na resposta.

  
Em caso de omissão, a string não será incluída.

  
O valor indica o número de minutos até a expiração do código.

Mínimo `1`, máximo `90`.

`10`

`<BUTTON_TYPES>`

_Lista de strings separadas por vírgulas_

**Obrigatório.**

  
Lista separada por vírgulas de strings que indicam o tipo de botão.

  
Em caso de inclusão, a resposta exibirá o texto de cada botão.

  
Nos modelos de autenticação, esse valor deve ser `OTP`.

`OTP`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v17.0/102290129340398/message_template_previews?category=AUTHENTICATION&languages=en_US,es_ES&add_security_recommendation=true&code_expiration_minutes=10&button_types=OTP' \-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "data": [    {      "body": "*{{1}}* is your verification code. For your security, do not share this code.",      "buttons": [        {          "autofill_text": "Autofill",          "text": "Copy code"        }      ],      "footer": "This code expires in 10 minutes.",      "language": "en_US"    },    {      "body": "Tu código de verificación es *{{1}}*. Por tu seguridad, no lo compartas.",      "buttons": [        {          "autofill_text": "Autocompletar",          "text": "Copiar código"        }      ],      "footer": "Este código caduca en 10 minutos.",      "language": "es_ES"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)