<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solutions-via-embedded-signup -->
<!-- Scraped: 2025-12-20T17:52:59.911Z -->

# Como migrar uma WABA de uma solução multiparceiros para outra via Cadastro incorporado

Updated: 10 de nov de 2025

Os Provedores de Tecnologia podem usar a API e o [Cadastro incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) para migrar a Conta do WhatsApp Business (WABA, pelas iniciais em inglês) de um cliente empresarial de uma solução multiparceiros (a "solução de origem") para outra (a "solução de destino").

Como parte desse processo, uma nova conta do WhatsApp Business (WABA) será criada para o cliente empresarial, os modelos da WABA de origem serão duplicados na WABA de destino, e o acesso à WABA e aos respectivos ativos será concedido ao Parceiro de Soluções de destino.

## Requisitos

O app (ou apps, se você estiver usando apps separados) usado para criar ou aceitar as soluções multiparceiros de origem e destino deve estar associado ao mesmo portfólio empresarial. A solução de destino também deve estar em estado "Ativo".

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

#### Solicitação

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

Caso a solicitação seja bem-sucedida:

```
{
  "id": "<MIGRATION_INTENT_ID>"
}
```

Capture o ID da intenção de migração.

### Etapa 2: desabilitar a confirmação em duas etapas no número de telefone comercial

Se você tiver acesso à WABA do cliente empresarial no Gerenciador do WhatsApp, desabilite a confirmação em duas etapas no número de telefone comercial associado à WABA.

Como alternativa, você pode instruir o cliente a fazer isso. Veja as instruções para fazer isso:

-   _Acesse o Gerenciador do WhatsApp em [https://business.facebook.com/latest/whatsapp\_manager/](https://business.facebook.com/latest/whatsapp_manager/)._-   _Navegue até **Ferramentas da conta** > **Números de telefone** e clique no ícone de engrenagem (configurações) do número de telefone. Caso não veja seu número de telefone comercial, clique em **Visão geral** no menu do lado esquerdo, localize o número e clique nele._-   _Clique na aba **Confirmação em duas etapas**._-   _Clique no botão **Desativar a confirmação em duas etapas** e conclua o fluxo._

### Etapa 3: instruir o cliente a concluir o Cadastro incorporado

Instrua o cliente a concluir a implementação do Cadastro incorporado pelo parceiro de solução.

Direcione o cliente para a implementação do cadastro incorporado configurada corretamente com o ID da solução multiparceiros de destino. Caso contrário, o cliente poderá ser integrado por meio da solução errada.

Forneça ao cliente estas instruções:

-   _Insira o nome do seu portfólio empresarial existente na [tela do portfólio empresarial](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-portfolio-screen)._-   _Crie uma nova Conta do WhatsApp Business na [tela de seleção da WABA](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-selection-screen)._-   _Insira seu número de telefone comercial existente na [tela de adição de número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen). Isso disparará um aviso de que o número será movido para uma nova Conta do WhatsApp Business._

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/466392707_1274428157316091_5418623531369238611_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=SzV5WYPGNfIQ7kNvwH78MfV&_nc_oc=AdlYZ6YDEGlglz9U0fgh9cFZAtL6d0WoZAeyKrACBybH6JtldZG8NswPQ0B7c-_GGsA&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=iLM0ts6aG1bvkwASXbJiRw&oh=00_Aflfm2EhysU3-y1xzOvwIZ19Ru1ePbJt_wjr_pRtjNi9Ug&oe=696118B5)

## Etapas do parceiro de solução

Forneça ao Provedor de Tecnologia um link para sua implementação do Cadastro incorporado configurada com o ID da solução multiparceiros. Quando um cliente empresarial concluir o fluxo de implementação, [faça a integração](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner) como faria normalmente.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)