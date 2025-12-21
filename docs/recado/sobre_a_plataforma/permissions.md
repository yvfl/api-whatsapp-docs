<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions -->
<!-- Scraped: 2025-12-20T17:23:09.562Z -->

# Permissões

Updated: 5 de nov de 2025

Os pontos de extremidade da plataforma são protegidos por permissões. As referências de cada ponto de extremidade indicam quais permissões são necessárias. Em geral, você precisará do seguinte:

-   [whatsapp\_business\_management](/docs/permissions#whatsapp_business_management): necessário para acessar os metadados da sua conta comercial do WhatsApp, gerenciar modelos, obter os números de telefone comerciais associados à sua WABA, consultar todas as análises e receber webhooks que notificam sobre alterações na sua conta comercial do WhatsApp.-   [whatsapp\_business\_messaging](/docs/permissions#whatsapp_business_messaging): necessário para enviar qualquer tipo de mensagem a usuários do WhatsApp, bem como para receber webhooks de mensagem recebida e de status da mensagem.

Dependendo das suas necessidades comerciais, talvez você precise destas permissões:

-   [business\_management](/docs/permissions#business_management): necessária apenas se você precisar acessar o portfólio empresarial de forma programática (isso é raramente necessário, já que é possível acessar o portfólio usando o [Meta Business Suite](https://business.facebook.com/)).-   [whatsapp\_business\_manage\_events](/docs/permissions#whatsapp_business_manage_events): necessária apenas se você estiver enviando modelos de marketing com a [API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview), em conjunto com a [API de Conversões](/docs/marketing-api/conversions-api), para rastreamento de eventos.-   [ads\_read](/docs/permissions#ads_read): necessária apenas se você estiver usando a [API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview) em conjunto com a [API de Insights](/docs/marketing-api/insights) para receber métricas de conversão.

## Análise do App

Caso você seja um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview) e outras empresas usem seu app para acessar os próprios dados, o app precisará passar pelo [processo de análise](/documentation/business-messaging/whatsapp/solution-providers/app-review), e você deverá receber aprovação para **acesso avançado** a todas as permissões necessárias. Se o acesso avançado a determinada permissão não for aprovado, os usuários não poderão conceder essa permissão ao seu app.

Se você for desenvolvedor direto e acessar apenas os dados da sua própria empresa, não será necessário realizar a Análise do App nem ter acesso avançado a permissões.

## Como obter permissões

Os usuários devem conceder permissões individuais ao app. Caso seja um desenvolvedor direto e estiver usando um token do sistema, quando criar um [token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens), você deverá criar um usuário do sistema e usá-lo para conceder permissões individuais ao seu app como parte do processo de criação do token do sistema:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/465115001_533379429601225_2797461055613545929_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=lpIsdVX_IQoQ7kNvwEUWlG1&_nc_oc=AdmZtYG4DX9M_G9ZTXLKdHcubAe_tLA4nyDXtHO5lKwkLTmUGOxEjXGBlyToboJFcSE&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=gydEzmV7nGrD9HtkPvxd8Q&oh=00_AfnmrVcqJjjLpqLXXYtDAWMBinoEFdmsBbWZ1HVHZdxerg&oe=69613399)

Caso seja um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview) que usa [tokens comerciais](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens), a [tela de autorização](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#authorization-screen) do Cadastro incorporado permitirá que o usuário conceda ao seu app as permissões para as quais você tem aprovação de acesso avançado:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/464191580_1337884324044562_8279151817864174578_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=nDDrvqzrvxAQ7kNvwF3ADL9&_nc_oc=AdmVu6rD_VwVStlwMgwitBPtvZ1ayL1gipe2X1OsAiIQDyKNh0FQCSvJC0cTeKNCVSY&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=gydEzmV7nGrD9HtkPvxd8Q&oh=00_AfnyewCmn56soglXKnBBQ5L7BcrOauWfEtzE8DJFCH6pRw&oe=696128D7)

## Como verificar as permissões concedidas

Use o ponto de extremidade **debug\_token** para ver quais permissões foram concedidas ao seu app pelo detentor do token. Como alternativa, use a ferramenta [depurador de token de acesso](/tools/debug/accesstoken/), que retorna as mesmas informações.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/debug_token?input_token=<ACCESS_TOKEN_TO_CHECK>' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Sintaxe da resposta

As permissões concedidas são atribuídas à propriedade `scopes`.

```
{    "data": {        "app_id": "634974688087057",        "type": "SYSTEM_USER",        "application": "Lucky Shrub",        "data_access_expires_at": 0,        "expires_at": 0,        "is_valid": true,        "issued_at": 1712099387,        "scopes": [            "whatsapp_business_management",            "whatsapp_business_messaging"        ],        "granular_scopes": [            {                "scope": "whatsapp_business_management"            },            {                "scope": "whatsapp_business_messaging"            }        ],        "user_id": "104169029247128"    }}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)