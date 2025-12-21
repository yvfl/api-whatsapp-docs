<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates -->
<!-- Scraped: 2025-12-20T17:30:23.811Z -->

# Modelos de autenticação

Updated: 14 de nov de 2025

Caso seu app para celular ofereça aos usuários a opção de receber senhas descartáveis ou códigos de verificação via WhatsApp, você precisará usar um modelo de autenticação.

Os modelos de autenticação são compostos pelo seguinte:

-   **Texto predefinido** fixo e não personalizável: _<VERIFICATION\_CODE> é seu código de verificação._-   Um **aviso legal de segurança** opcional: _para sua segurança, não compartilhe este código._-   Um **aviso sobre validade** opcional: _Este código expirará em <NUM\_MINUTES> minutos._-   Um botão de **preencher automaticamente com um toque**, um botão de **copiar código** ou nenhum botão, caso o método usado seja [sem toque](#zero-tap-authentication-templates).

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/391704029_868992307740251_3073203578067340408_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=i3Izm86EXycQ7kNvwHirErm&_nc_oc=AdlFyLEOEZfXx930yqt0AqAdmL2OUgOkQ59vM8QOPCtMiGUfr7ZPJOEMecHORCF6LCE&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=9XoEQ39YscOhgDZImBprrQ&oh=00_Afmcm1FfJx_bdJZWPnPgQs7s4ORgDMOaT_agEmypcrhtqQ&oe=6961339E)

Recomendamos o uso desses botões porque eles oferecem a melhor experiência ao usuário. No entanto, atualmente, esse tipo de botão só é compatível com Android e exige alterações no código do app.

## Segurança para dispositivos conectados

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/458481136_1204876024064039_8216873060873003926_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=AF37nUUYvBMQ7kNvwESUZQ2&_nc_oc=AdmJPgIWN72DytCMUzjZA3OlmsDGUEHCxFgOKlQZzbxPdD-CriXoxCM0a4aS9IQquUw&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=9XoEQ39YscOhgDZImBprrQ&oh=00_AfkRAhkxrmY8ifqYaDOPnlLxkGx8NXOO4_jid510XjRNDA&oe=696136A6)

Agora, os modelos de autenticação contam com segurança para dispositivos conectados. Isso significa que as mensagens de autenticação são entregues apenas ao dispositivo principal do usuário do WhatsApp.

As mensagens de autenticação enviadas aos dispositivos vinculados de um usuário são mascaradas com um comando que instrui o usuário a visualizar a mensagem no dispositivo principal.

Esse recurso é habilitado por padrão e não requer alterações de código. Ele não pode ser configurado nem personalizado e está disponível somente na API de Nuvem.

## Modelos de autenticação de preenchimento automático com um toque

Os modelos de autenticação incluem um botão de preenchimento automático com um toque.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/393789031_872892117564016_6400271480127333734_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=hk13Qnm07Y4Q7kNvwHDrWkR&_nc_oc=Adnl7qUTkyy-BxNDlCFt4llAjkKBMz3DXsvpWfxDTbCBFim1BZPiRvUlQLeWjyAOdj8&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=9XoEQ39YscOhgDZImBprrQ&oh=00_AfkzfOybD9gEmtzYktdb9vCv1nPzpaZDS-nXre_rPdMJ_A&oe=69611168)

Quando um usuário do WhatsApp toca no botão de preenchimento automático, o cliente do WhatsApp dispara uma atividade que abre seu app e fornece a senha ou o código.

Consulte [Modelos de autenticação de preenchimento automático com um toque](/documentation/business-messaging/whatsapp/templates/authentication-templates/autofill-button-authentication-templates) para saber como usar esses modelos.

## Modelos de autenticação de copiar código

Os modelos de autenticação de cópia de código permitem que você envie aos usuários uma senha descartável ou um código de uso único junto com um botão de copiar código.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/391709210_6733218460105388_4204949555628827374_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=F6w8_nbcj-AQ7kNvwFO57jn&_nc_oc=AdkpuNZOJ_L46Ovvi9vwyoHc5yRzugusd4qdDs6hcLzLXJ0pIIEV3oHI66_TOgIkOYc&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=9XoEQ39YscOhgDZImBprrQ&oh=00_AfnDg9yOqS4W51jLGGy3cQbyazs3ijtOSNsb1BaI76bGfQ&oe=69611FBD)

Quando um usuário do WhatsApp toca no botão de copiar código, o cliente do WhatsApp copia a senha ou o código para a área de transferência do dispositivo. Depois disso, o usuário pode abrir o app e colar a senha ou o código na interface do software.

Consulte [Modelos de autenticação de cópia de código](/documentation/business-messaging/whatsapp/templates/authentication-templates/copy-code-button-authentication-templates) para saber como usar esses modelos.

## Modelos de autenticação sem toque

Os modelos de autenticação de toque zero permitem que seus usuários recebam senhas ou códigos descartáveis via WhatsApp sem que precisem sair do app.

Quando um usuário solicita uma senha ou um código e você entrega essa chave usando um modelo de autenticação sem toque, o cliente do WhatsApp transmite a senha ou o código incluído, que pode ser capturado pelo seu app usando um receptor de transmissão.

Consulte [Modelos de autenticação sem toque](/documentation/business-messaging/whatsapp/templates/authentication-templates/zero-tap-authentication-templates) para saber como usar esses modelos.

## Boas práticas

-   Antes de enviar a senha descartável ou o código de uso único, confirme o número de telefone do WhatsApp do usuário.-   Deixe claro para os usuários que a senha ou o código será enviado ao número de telefone do WhatsApp, especialmente se você oferecer diferentes métodos de recebimento. Para ver mais dicas, consulte [Obter aceitação](/documentation/business-messaging/whatsapp/getting-opt-in).-   Quando a senha ou o código for colado pelo usuário ou recebido como parte do fluxo de preenchimento automático no app, informe ao usuário que a captura foi bem-sucedida.

Veja também [Boas práticas para autenticação de usuários no WhatsApp](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-best-practices).

## Personalizar tempo de validade

Veja [Tempo de vida](/documentation/business-messaging/whatsapp/templates/time-to-live).

## Prévias do modelo

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

  
Lista separada por vírgulas dos [códigos de idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) das versões que você quer retornar.

  
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

## Gerenciamento em massa

Use o ponto de extremidade [**POST /<WABA\_ID>/upsert\_message\_templates**](/docs/graph-api/reference/whats-app-business-account/upsert_message_templates#Creating) para atualizar ou criar modelos de autenticação em massa em vários idiomas que incluam ou excluam os avisos opcionais de segurança e de expiração.

Se já houver um modelo com o nome e o idioma correspondentes, ele será atualizado com o conteúdo da solicitação. Caso contrário, um novo modelo será criado.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/upsert_message_templates
```

### Corpo do post

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

Todas as propriedades de criação de modelos são compatíveis, com estas exceções:

-   A propriedade `language` não é compatível. Como alternativa, use `languages` e defina o valor como uma matriz de strings de [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages). Por exemplo: `["en_US","es_ES","fr"]`.-   A propriedade `text` é incompatível.-   A propriedade `autofill_text` é incompatível.

### Exemplo de solicitação de cópia de código

Este exemplo cria três modelos de autenticação (em inglês, espanhol e francês) com botões de copiar código. Cada modelo recebe o nome de "authentication\_code\_copy\_code\_button" e inclui a recomendação de segurança e o tempo de expiração.

```
curl 'https://graph.facebook.com/v17.0/102290129340398/upsert_message_templates' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "name": "authentication_code_copy_code_button",  "languages": ["en_US","es_ES","fr"],  "category": "AUTHENTICATION",  "components": [    {      "type": "BODY",      "add_security_recommendation": true    },    {      "type": "FOOTER",      "code_expiration_minutes": 10    },    {      "type": "BUTTONS",      "buttons": [        {          "type": "OTP",          "otp_type": "COPY_CODE"        }      ]    }  ]}'
```

### Exemplo de solicitação para preenchimento automático com um toque

Este exemplo (1) atualiza um modelo existente com o nome "authentication\_code\_autofill\_button" e o idioma "en\_US" e (2) cria dois novos modelos de autenticação (em espanhol e francês) com botões de preenchimento automático com um toque. Os dois modelos recém-criados recebem o nome de "authentication\_code\_autofill\_button" e incluem a recomendação de segurança e o tempo de expiração.

```
curl 'https://graph.facebook.com/v17.0/102290129340398/upsert_message_templates' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "name": "authentication_code_autofill_button",  "languages": ["en_US","es_ES","fr"],  "category": "AUTHENTICATION",  "components": [    {      "type": "BODY",      "add_security_recommendation": true    },    {      "type": "FOOTER",      "code_expiration_minutes": 15    },    {      "type": "BUTTONS",      "buttons": [        {          "type": "OTP",          "otp_type": "ONE_TAP",          "supported_apps": [            {              "package_name": "com.example.luckyshrub",              "signature_hash": "K8a/AINcGX7"            }          ]        }      ]    }  ]}'
```

### Exemplo de resposta

```
{  "data": [    {      "id": "954638012257287",      "status": "APPROVED",      "language": "en_US"    },    {      "id": "969725527415202",      "status": "APPROVED",      "language": "es_ES"    },    {      "id": "969725530748535",      "status": "APPROVED",      "language": "fr"    }  ]}
```

## App de exemplo

Veja o [exemplo de app de senha descartável do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2FWhatsApp%2FWhatsApp-OTP-Sample-App&h=AT2HHOwyYuRRXTOkOnelSRP-RIWZKlxrPUU3FburpgfTVEBEObE_A6GDGeux8dkPBP0nCsLb-XRTdHiDb2Tq6v4UJRsKOYL5Y_GUAJLb6pGulSfe9fDsWm32EMOImdtHwWwBmnp2O-j1naKQ9v8tHYxbg8M) para Android no GitHub. O app de exemplo demonstra como enviar e receber códigos e senhas descartáveis por meio da API, como integrar botões de preencher automaticamente com um toque e de copiar código, como criar modelos e como preparar um exemplo de servidor.

## Saiba mais

-   [Conta comercial oficial:](/documentation/business-messaging/whatsapp/official-business-accounts) você pode querer solicitar o status de conta comercial oficial para gerar confiança nos usuários, o que reduzirá a probabilidade de eles dispensarem ou ignorarem suas mensagens.-   [Webhooks de mensagens de status:](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) recomendamos que você assine o campo de mensagens do webhook para receber notificações quando o modelo de autenticação com um botão de senha descartável for entregue e lido.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)