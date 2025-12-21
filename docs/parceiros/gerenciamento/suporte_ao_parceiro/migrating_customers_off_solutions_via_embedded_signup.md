<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-customers-off-solutions-via-embedded-signup -->
<!-- Scraped: 2025-12-20T17:53:23.805Z -->

# Migrar clientes de uma solução multiparceiros usando o Cadastro incorporado

Updated: 10 de nov de 2025

Caso seja um Provedor de Tecnologia, você poderá migrar um cliente empresarial de uma [Solução multiparceiros](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) marcando a Conta do WhatsApp Business ("WABA") dele para migração e instruindo-o a usar [sua implementação do Cadastro incorporado](/documentation/business-messaging/whatsapp/embedded-signup/implementation) para analisar e aceitar o pedido. Após a migração, você pode fornecer serviços de mensagens ao cliente de forma independente.

A migração de um cliente de uma solução via Cadastro incorporado não exige a verificação do número de telefone comercial, eliminando a inatividade devido à verificação.

Como parte do processo, o cliente empresarial poderá optar por criar uma nova WABA. Nesse caso, os modelos da WABA antiga (de origem) serão duplicados na WABA de destino. Consulte [Modelos](#templates) abaixo para ver uma explicação sobre o comportamento de duplicação de modelos.

## Requisitos

O app já deve estar aprovado, fornecendo acesso avançado para a permissão **whatsapp\_business\_management**

## Modelos

Os modelos são duplicados automaticamente na WABA de destino e inicialmente recebem o mesmo status que seus equivalentes de origem.

No entanto, após a duplicação, os modelos são verificados outra vez para garantir que estão corretamente categorizados de acordo com nossas [diretrizes](/documentation/business-messaging/whatsapp/pricing). Isso pode fazer com que alguns modelos duplicados tenham seu `status` alterado para `REJECTED`.

Apenas os modelos com `status` de `APPROVED` e `quality_score` de `GREEN` são qualificados para duplicação. Se a WABA de destino não conseguir acomodar todos os novos modelos, duplicaremos o maior número possível até que o limite de modelos da WABA de destino seja atingido. Para que a WABA de destino possa usar os modelos não duplicados, eles precisarão ser recriados e enviados para aprovação.

Observe que **as classificações de qualidade dos modelos não são duplicadas**. Todos os modelos duplicados terão a classificação inicial definida como `UNKNOWN`. Essa classificação será mantida nas primeiras 24 horas. Após esse período, uma nova classificação será gerada se houver dados suficientes disponíveis.

## Cobrança

As mensagens entregues antes da conclusão da migração serão cobradas do antigo Parceiro de Soluções. Já as mensagens não entregues que tiverem sido enviadas antes da conclusão da migração serão cobradas do antigo Parceiro de Soluções se a entrega for realizada após a migração.

As mensagens entregues após a conclusão da migração serão cobradas do cliente empresarial.

## Etapa 1: desabilitar a verificação em duas etapas no número de telefone comercial

Se você tiver acesso à WABA do cliente empresarial no Gerenciador do WhatsApp, desabilite a confirmação em duas etapas no número de telefone comercial associado à WABA.

Como alternativa, você pode instruir o cliente a fazer isso. Veja as instruções para fazer isso:

-   _Acesse o Gerenciador do WhatsApp em [https://business.facebook.com/latest/whatsapp\_manager/](https://business.facebook.com/latest/whatsapp_manager/)._-   _Navegue até **Ferramentas da conta** > **Números de telefone** e clique no ícone de engrenagem (configurações) do número de telefone. Caso não veja seu número de telefone comercial, clique em **Visão geral** no menu do lado esquerdo, localize o número e clique nele._-   _Clique na aba **Confirmação em duas etapas**._-   _Clique no botão **Desativar a confirmação em duas etapas** e conclua o fluxo._

## Etapa 2: marcar a WABA do cliente para migração

Use o ponto de extremidade [POST/<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) para marcar a WABA do cliente empresarial para migração. Isso gera uma [intenção de migração](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), que indica sua intenção de migrar a WABA.

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

## Etapa 3: instruir o cliente a concluir o Cadastro incorporado e adicionar uma forma de pagamento

Envie um link ao cliente empresarial para a implementação do Cadastro incorporado e instrua-o a concluir o fluxo para aceitar a solicitação e adicionar uma forma de pagamento.

Forneça ao cliente empresarial estas instruções:

-   _Na [tela de portfólio empresarial](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-portfolio-screen), insira o nome do portfólio empresarial existente._-   _Na [tela de seleção da WABA](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-selection-screen), use o menu suspenso **Escolher uma conta do WhatsApp Business** para criar uma nova WABA ou escolher uma existente._-   _Na mesma tela, use o menu suspenso **Criar ou selecionar um perfil do WhatsApp Business** para inserir ou selecionar o nome de exibição do número de telefone da sua empresa._-   _Na tela [Adicionar número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen), insira o número de telefone comercial existente. Isso deve desencadear um aviso de que o número será compartilhado com seu Provedor de Tecnologia._

Antes de adicionar uma forma de pagamento, o cliente empresarial não poderá usar o seu app para enviar modelos de mensagem aos próprios clientes. Por isso, instrua-o a adicionar uma forma de pagamento depois de concluir o fluxo.

Você pode enviar a ele o artigo da Central de Ajuda [Como adicionar um cartão de crédito à sua conta da Plataforma do WhatsApp Business](https://www.facebook.com/business/help/488291839463771), que explica como adicionar uma forma de pagamento.

## Etapa 4: trocar o código do token por um token da empresa

Use o ponto de extremidade **GET /oauth/access\_token** para trocar o código de token [retornado](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) pelo Cadastro incorporado por um token de acesso de usuário do sistema de integração comercial ("token comercial").

### Solicitação

```
curl --get 'https://graph.facebook.com/v21.0/oauth/access_token' \
-d 'client_id=<APP_ID>' \
-d 'client_secret=<APP_SECRET>' \
-d 'code=<CODE>'
```

### Resposta

Caso a solicitação seja bem-sucedida:

```
<BUSINESS_TOKEN>
```

## Etapa 5: assinar webhooks na WABA do cliente

Use o ponto de extremidade [POST/<WABA\_ID>/subscribed\_apps](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) para assinar webhooks na WABA do cliente empresarial. Se quiser que os webhooks do cliente sejam enviados para um URL de retorno de ligação diferente do definido no seu app, você terá várias opções de [substituição de webhook](/documentation/business-messaging/whatsapp/webhooks/override).

### Solicitação

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

## Etapa 6: registrar o número do cliente

Use o ponto de extremidade [POST/<BUSINESS\_PHONE\_NUMBER\_ID>/register](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#register) para registrar o número de telefone comercial do cliente para uso com a API de Nuvem.

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