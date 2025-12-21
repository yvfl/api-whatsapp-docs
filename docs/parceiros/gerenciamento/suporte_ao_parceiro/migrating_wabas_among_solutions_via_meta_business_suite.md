<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solutions-via-meta-business-suite -->
<!-- Scraped: 2025-12-20T17:53:07.916Z -->

# Como migrar uma WABA de uma solução multiparceiro para outra via Meta Business Suite

Updated: 14 de nov de 2025

Você pode usar a API e o painel **Configurações do negócio** do Meta Business Suite para migrar a Conta do WhatsApp Business de um cliente empresarial de uma [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) (a “solução de origem”) para outra (a “solução de destino”).

Como parte desse processo, uma nova conta do WhatsApp Business (WABA) será criada para o cliente empresarial, os modelos da WABA de origem serão duplicados na WABA de destino, e o acesso à WABA e aos respectivos ativos será concedido ao Parceiro de Soluções de destino.

Você e o Parceiro de Soluções de destino devem executar um ou mais pedidos de API para concluir o processo.

## Requisitos

O app (ou apps, se você estiver usando apps separados) usado para criar ou aceitar cada solução deve estar associado ao mesmo portfólio empresarial e a solução de destino deve estar em um estado ativo.

## Modelos

Os modelos são duplicados automaticamente na WABA de destino e inicialmente recebem o mesmo status que seus equivalentes de origem.

No entanto, após a duplicação, os modelos são verificados outra vez para garantir que estão corretamente categorizados de acordo com nossas [diretrizes](/documentation/business-messaging/whatsapp/pricing). Isso pode fazer com que alguns modelos duplicados tenham seu `status` alterado para `REJECTED`.

Apenas os modelos com `status` de `APPROVED` e `quality_score` de `GREEN` são qualificados para duplicação. Se a WABA de destino não conseguir acomodar todos os novos modelos, duplicaremos o maior número possível até que o limite de modelos da WABA de destino seja atingido. Para que a WABA de destino possa usar os modelos não duplicados, eles precisarão ser recriados e enviados para aprovação.

Observe que **as classificações de qualidade dos modelos não são duplicadas**. Todos os modelos duplicados terão a classificação inicial definida como `UNKNOWN`. Essa classificação será mantida nas primeiras 24 horas. Após esse período, uma nova classificação será gerada se houver dados suficientes disponíveis.

## Cobrança

As mensagens entregues antes da conclusão da migração serão cobradas do antigo Parceiro de Soluções. Já as mensagens não entregues que tiverem sido enviadas antes da conclusão da migração serão cobradas do antigo Parceiro de Soluções se a entrega for realizada após a migração.

As mensagens entregues após a conclusão da migração serão cobradas do cliente corporativo.

## Etapas do Provedor de Tecnologia

### Etapa 1: marcar a WABA do cliente para migração

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) para marcar a WABA do cliente empresarial para migração. Isso gera uma [intenção de migração](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), que indica sua intenção de migrar a WABA.

#### Pedido

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/set_solution_migration_intent' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "solution_id": "<DESTINATION_MULTI-PARTNER_SOLUTION_ID>"
}'
```

#### Resposta

Caso o pedido seja bem-sucedido:

```
{
  "id": "<MIGRATION_INTENT_ID>"
}
```

Capture o ID da intenção de migração.

### Etapa 2: enviar o ID da intenção de migração e o número de telefone para seu parceiro de soluções

Envie o ID da intenção de migração que você acabou de capturar para o parceiro de soluções da sua solução de destino. Esse ID será necessário para determinar se o cliente aceitou o pedido de migração.

Além disso, compartilhe o número de telefone da WABA antiga que você quer migrar para a nova conta. Ele será usado na etapa 5 do processo destinado ao parceiro de soluções abaixo.

### Etapa 3: desabilitar a confirmação em duas etapas no número de telefone comercial

Se você tiver acesso à WABA do cliente empresarial no Gerenciador do WhatsApp, desabilite a confirmação em duas etapas no número de telefone comercial associado a ela.

Você também pode instruir o cliente empresarial a fazer isso. Forneça as instruções abaixo:

-   _Acesse o Gerenciador do WhatsApp em [https://business.facebook.com/latest/whatsapp\_manager/](https://business.facebook.com/latest/whatsapp_manager/)._-   _Navegue até **Ferramentas da conta** > **Números de telefone** e clique no ícone de engrenagem (configurações) do número de telefone. Caso não veja seu número de telefone comercial, clique em **Visão geral** no menu do lado esquerdo, localize o número e clique nele._-   _Clique na aba **Confirmação em duas etapas**._-   _Clique no botão **Desativar a confirmação em duas etapas** e conclua o fluxo._

### Etapa 4: instruir o cliente a aceitar o pedido

Instrua o cliente a usar o Meta Business Suite para analisar e aceitar o pedido. Forneça as instruções abaixo:

-   _Acesse o painel **Configurações do negócio** do Meta Business Suite em [https://business.facebook.com/settings/](https://business.facebook.com/settings/)._-   _Navegue até **Pedidos** > **Recebidos**._-   _Localize o pedido e clique no botão **Analisar**._-   _Conclua o fluxo._

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/468478543_895393666016721_7634462766366671655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=k1aTUZS3BNMQ7kNvwGBVCUM&_nc_oc=AdmTDhE8B49G_rLiMqXwvklYlpDbjoPSyk5iKvmfa_SvgbyLm25IHy_oJJXwMAoOw7M&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=y0GQeoZW2Qb7nKx5HyGV0Q&oh=00_AfmXf49_Qy1VyAp60vDCIDEXrC7wWgovWaS6dhhzVO9k6g&oe=69613D1E)

Quando o cliente concluir essa etapa, um [webhook account\_update](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#onboarded-business-customer) indicando que um cliente foi integrado será acionado e enviado a você e ao Parceiro de Soluções de destino.

Os usuários administradores da WABA também receberão um email do **WhatsApp para Empresas** (notification@facebookmail.com), pedindo a análise e a aceitação do pedido. O botão no email apenas carrega o painel de configurações comerciais em uma nova janela para que qualquer administrador da WABA possa analisar e aceitar o pedido.

## Etapas do Parceiro de Soluções

### Etapa 1: obter o token da empresa do cliente

Use o ponto de extremidade [GET /<SOLUTION\_ID>/access\_token](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api#Reading) e peça o parâmetro `business_id` para obter o [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) de um cliente empresarial integrado.

#### Pedido

```
curl 'https://graph.facebook.com/<API_VERSION>/<SOLUTION_ID>/access_token?business_id=<CUSTOMER_BUSINESS_PORTFOLIO_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

A identificação do portfólio empresarial do cliente está incluída no [webhook account\_update](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#onboarded-business-customer) acionado quando o cliente aceita a intenção de migração.

#### Resposta

Caso o pedido seja bem-sucedido:

```
{
  "data": [
    {
      "access_token": "<CUSTOMER_BUSINESS_TOKEN>"
    }
  ]
}
```

### Etapa 2: obter o status da intenção de migração

Use o ponto de extremidade [GET /<SOLUTION\_MIGRATION\_INTENT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api#Reading) para obter o status da intenção de migração que o Provedor de Tecnologia criou. Seu Provedor de Tecnologia deve fornecer essa identificação.

#### Pedido

```
curl 'https://graph.facebook.com/<API_VERSION>/<MIGRATION_INTENT_ID>' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

#### Resposta

Caso o pedido seja bem-sucedido:

```
{
  "solution": {
    "name": "<DESTINATION_SOLUTION_NAME>",
    "status": "<DESTINATION_SOLUTION_STATUS>",
    "status_for_pending_request": "<DESTINATION_SOLUTION_PENDING_REQUEST_STATUS>",
    "id": "<DESTINATION_SOLUTION_ID>"
  },
  "status": "<MIGRATION_INTENT_STATUS>",
  "destination_waba": {
    "id": "<BUSINESS_CUSTOMER_WABA_ID>",
    "name": "<BUSINESS_CUSTOMER_WABA_NAME>",
    "currency": "<BUSINESS_CUSTOMER_WABA_CURRENCY>",
    "timezone_id": "<BUSINESS_CUSTOMER_WABA_TIMEZONE>",
    "business_type": "ent",
    "message_template_namespace": "<BUSINESS_CUSTOMER_WABA_TEMPLATE_NAMESPACE>"
  },
  "id": "<MIGRATION_INTENT_ID>"
}
```

Se `<MIGRATION_INTENT_STATUS>` for `ACCEPTED`, isso significa que o cliente analisou e aceitou a intenção de migração. Dessa forma, você pode avançar para a próxima etapa. **Se for qualquer outro valor, não prossiga.**

Quando um cliente aceita a intenção de migração no Meta Business Suite, um [webhook account\_update](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#onboarded-business-customer) é acionado com `status` definido como `PARTNER_ADDED`. Embora o webhook não informe se o cliente foi integrado por meio do Meta Business Suite, talvez você queira realizar essa consulta ao obter um desses webhooks.

### Etapa 3: assinar webhooks na WABA do cliente

Use o ponto de extremidade [POST /<WABA\_ID>/subscribed\_apps](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) para assinar webhooks na WABA do cliente empresarial. Se quiser que os webhooks do cliente sejam enviados para um URL de retorno de ligação diferente do definido no seu app, você terá várias opções de [substituição de webhook](/documentation/business-messaging/whatsapp/webhooks/override).

Observe que `<WABA_ID>` deve ser a identificação da WABA de **destino** do cliente.

#### Pedido

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

#### Resposta

Caso o pedido seja bem-sucedido:

```
{  "success": true}
```

### Etapa 4: compartilhar sua linha de crédito com o cliente

No momento, estamos testando novos métodos para compartilhar sua linha de crédito com clientes empresariais integrados. Essas etapas substituirão este passo no futuro. Se você quiser implementá-las agora, consulte [Método alternativo para compartilhar sua linha de crédito](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#alternate-method-for-sharing-your-credit-line).

Use o ponto de extremidade [POST /<EXTENDED\_CREDIT\_LINE\_ID>/whatsapp\_credit\_sharing\_and\_attach](/docs/marketing-api/reference/extended-credit/whatsapp_credit_sharing_and_attach#Creating) para compartilhar sua linha de crédito com um cliente empresarial integrado.

#### Pedido

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach?waba_currency=<CUSTOMER_BUSINESS_CURRENCY>&waba_id=<CUSTOMER_WABA_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

Observe que `<CUSTOMER_WABA_ID>` deve ser a identificação da WABA de **destino** do cliente.

#### Resposta

Caso o pedido seja bem-sucedido:

```
{
  "allocation_config_id": "<ALLOCATION_CONFIGURATION_ID>",
  "waba_id": "<CUSTOMER_WABA_ID>"
}
```

### Etapa 5: migrar o número de telefone do cliente para a nova WABA

Use o ponto de extremidade [POST /<WABA\_ID>/phone\_numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Creating) e migre o número de telefone comercial do cliente para a WABA de destino. Você deve ter recebido essa informação na etapa 2 do processo para Provedores de Tecnologia.

Observe que `<WABA_ID>` deve ser a identificação da WABA de **destino** do cliente.

#### Pedido

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "migrate_phone_number": true,
  "cc": "<BUSINESS_PHONE_NUMBER_COUNTRY_CALLING_CODE>",// e.g. "91"
  "phone_number": "<BUSINESS_PHONE_NUMBER_WITHOUT_COUNTRY_CODE>", e.g. "8888888888"
}'
```

#### Resposta

Caso o pedido seja bem-sucedido:

```
{
  "id": "<BUSINESS_PHONE_NUMBER_ID>"
}
```

### Etapa 6: registrar o número de telefone do cliente para uso com a API de Nuvem

Use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/register](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#register) para registrar o número de telefone comercial do cliente para uso com a API de Nuvem.

#### Pedido

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/register' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "<DESIRED_PIN>"
}'
```

#### Resposta

Caso o pedido seja bem-sucedido:

```
{  "success": true}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)