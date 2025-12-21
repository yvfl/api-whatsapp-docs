<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-customers-off-solutions-via-meta-business-suite -->
<!-- Scraped: 2025-12-20T17:53:31.889Z -->

# Migrar clientes de uma solução multiparceiros usando o Meta Business Suite

Updated: 14 de nov de 2025

Caso seja um Provedor de Tecnologia, você poderá migrar um cliente empresarial de uma [Solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) marcando a Conta do WhatsApp Business ("WABA") dele para migração e instruindo-o a usar o [Meta Business Suite](https://business.facebook.com/) para analisar e aceitar o pedido. Após a migração, você pode fornecer serviços de mensagens ao cliente de forma independente.

A migração um cliente de uma solução via Meta Business Suite não exige a verificação do número de telefone comercial, eliminando a inatividade devido à verificação.

## Requisitos

O app já deve estar aprovado, fornecendo acesso avançado para a permissão **whatsapp\_business\_management**

## Modelos

Os modelos são duplicados automaticamente na WABA de destino e inicialmente recebem o mesmo status que seus equivalentes de origem.

No entanto, após a duplicação, os modelos são verificados outra vez para garantir que estão corretamente categorizados de acordo com nossas [diretrizes](/documentation/business-messaging/whatsapp/pricing). Isso pode fazer com que alguns modelos duplicados tenham seu `status` alterado para `REJECTED`.

Apenas os modelos com `status` de `APPROVED` e `quality_score` de `GREEN` são qualificados para duplicação. Se a WABA de destino não conseguir acomodar todos os novos modelos, duplicaremos o maior número possível até que o limite de modelos da WABA de destino seja atingido. Para que a WABA de destino possa usar os modelos não duplicados, eles precisarão ser recriados e enviados para aprovação.

Observe que **as classificações de qualidade dos modelos não são duplicadas**. Todos os modelos duplicados terão a classificação inicial definida como `UNKNOWN`. Essa classificação será mantida nas primeiras 24 horas. Após esse período, uma nova classificação será gerada se houver dados suficientes disponíveis.

## Cobrança

As mensagens entregues antes da conclusão da migração serão cobradas do antigo Parceiro de Soluções. Já as mensagens não entregues que tiverem sido enviadas antes da conclusão da migração serão cobradas do antigo Parceiro de Soluções se a entrega for realizada após a migração.

As mensagens entregues após a conclusão da migração serão cobradas do cliente corporativo.

## Etapa 1: desabilitar a verificação em duas etapas no número de telefone comercial

Se você tiver acesso à WABA do cliente empresarial no Gerenciador do WhatsApp, desabilite a confirmação em duas etapas no número de telefone comercial associado à WABA.

Como alternativa, você pode instruir o cliente a fazer isso. Forneça as instruções abaixo:

-   _Acesse o Gerenciador do WhatsApp em [https://business.facebook.com/latest/whatsapp\_manager/](https://business.facebook.com/latest/whatsapp_manager/)._-   _Navegue até **Ferramentas da conta** > **Números de telefone** e clique no ícone de engrenagem (configurações) do número de telefone. Caso não veja seu número de telefone comercial, clique em **Visão geral** no menu do lado esquerdo, localize o número e clique nele._-   _Clique na aba **Confirmação em duas etapas**._-   _Clique no botão **Desativar a confirmação em duas etapas** e conclua o fluxo._

## Etapa 2: marcar a WABA do cliente para migração

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) para marcar a WABA do cliente empresarial para migração. Isso gera uma [intenção de migração](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), que indica sua intenção de migrar a WABA.

#### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/set_solution_migration_intent' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "app_id": "<YOUR_APP_ID>"
}'
```

#### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "id": "<MIGRATION_INTENT_ID>"
}
```

Capture a identificação da intenção de migração.

## Etapa 3: instruir o cliente a aceitar a solicitação e adicionar uma forma de pagamento

Instrua o cliente a usar o Meta Business Suite para analisar e aceitar a solicitação. Antes de adicionar uma forma de pagamento, o cliente corporativo não poderá usar seu app para enviar mensagens de modelo para os clientes dele.

Forneça as instruções abaixo:

-   _Acesse o painel **Configurações do negócio** do Meta Business Suite em [https://business.facebook.com/settings/](https://business.facebook.com/settings/)._-   _Navegue até **Pedidos** > **Recebidos**._-   _Localize o pedido e clique no botão **Analisar**._-   _Conclua o fluxo._

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/468478543_895393666016721_7634462766366671655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=k1aTUZS3BNMQ7kNvwGBVCUM&_nc_oc=AdmTDhE8B49G_rLiMqXwvklYlpDbjoPSyk5iKvmfa_SvgbyLm25IHy_oJJXwMAoOw7M&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=T3hOIcDWvl1OYRzV4HKImw&oh=00_AfknuyH3z4V77FK_jEo7SzEIRvTSIYvgLwfFlyPU0v4Lww&oe=69613D1E)

Os usuários administradores da WABA também receberão um email do **WhatsApp para Empresas** (notification@facebookmail.com), pedindo a análise e a aceitação do pedido. O botão no email apenas carrega o painel de configurações do negócio em uma nova janela para que qualquer administrador da WABA possa analisar e aceitar a solicitação.

## Etapa 4: obter o status de migração e a identificação da WABA

Use o ponto de extremidade [GET /<SOLUTION\_MIGRATION\_INTENT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api#Reading) para obter o status da intenção de migração, bem como o novo ID da WABA do cliente comercial.

#### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<MIGRATION_INTENT_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

#### Resposta

Caso a solicitação seja bem-sucedida:

```
{
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

Capture a identificação da WABA de destino do cliente corporativo (`<BUSINESS_CUSTOMER_WABA_ID>`).

Se `<MIGRATION_INTENT_STATUS>` for `ACCEPTED`, isso significa que o cliente analisou e aceitou a intenção de migração. Dessa forma, você pode prosseguir para a próxima etapa. **Se for qualquer outro valor, não prossiga.**

## Etapa 5: obter o token da empresa do cliente

Use o ponto de extremidade **POST /<BUSINESS\_PORTFOLIO\_ID>/system\_user\_access\_tokens** para [obter o token da empresa do cliente](/docs/facebook-login/facebook-login-for-business#business-integration-system-user-access-tokens).

## Etapa 6: assinar webhooks na WABA do cliente

Use o ponto de extremidade [POST /<WABA\_ID>/subscribed\_apps](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) para assinar webhooks na WABA do cliente empresarial. Se quiser que os webhooks do cliente sejam enviados para um URL de retorno de ligação diferente do definido no seu app, você terá várias opções de [substituição de webhook](/documentation/business-messaging/whatsapp/webhooks/override).

Observe que `<WABA_ID>` deve ser a identificação da WABA de **destino** do cliente.

#### Solicitação

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

#### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

## Etapa 7: obter a identificação do número de telefone conectado do cliente

Use o ponto de extremidade [GET /<WABA\_ID>/phone\_numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Reading) e solicite o campo `status` para obter uma lista de números de telefone comerciais e seus status de registro na API de Nuvem na WABA de **origem** do cliente empresarial.

#### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers?fields=status' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

#### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "data": [
    {
      "status": "<STATUS>",
      "id": "<BUSINESS_PHONE_NUMBER_ID>"
    }
  ],
  "paging": {
    "cursors": {
      "before": "<PAGING_BEFORE_CURSOR>",
      "after": "<PAGE_AFTER_CURSOR>"
    }
  }
}
```

Um `status` de `CONNECTED` indica que o número de telefone comercial do cliente está registrado e em uso com a API de Nuvem.

## Etapa 8: migrar o número de telefone do cliente para a nova WABA

Use o ponto de extremidade [POST /<WABA\_ID>/phone\_numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Creating) para migrar o número de telefone comercial do cliente para a WABA de **destino**.

#### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "migrate_phone_number": true,
  "cc": "<BUSINESS_PHONE_NUMBER_COUNTRY_CALLING_CODE>",
  "phone_number": "<BUSINESS_PHONE_NUMBER>",
  "display_phone_number": "<BUSINESS_PHONE_NUMBER_DISPLAY_NUMBER>",
  "verified_name": "<BUSINESS_PHONE_NUMBER_VERIFIED_NAME>"
}'
```

-   Defina `<BUSINES_PHONE_NUMBER_COUNTRY_CALLING_CODE>` como o código de ligação do país do número de telefone comercial.-   Defina `<BUSINESS_PHONE_NUMBER>` como o número de telefone comercial sem o sinal de adição ou código de ligação do país.-   Defina `<BUSINESS_PHONE_NUMBER_DISPLAY_NUMBER>` como o número de telefone comercial, com ou sem o sinal de adição e código de ligação do país.-   Defina `<BUSINESS_PHONE_NUMBER_VERIFIED_NAME>` como o nome de exibição existente do número de telefone comercial.

#### Resposta

Em caso de sucesso, a API retorna um ID de número de telefone comercial. Capture essa identificação para usar na próxima etapa.

```
{
  "id": "<BUSINESS_PHONE_NUMBER_ID>"
}
```

## Etapa 9: registrar o número do cliente

Use o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/register](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#register) para registrar o número de telefone comercial do cliente para uso com a API de Nuvem.

#### Solicitação

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

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)