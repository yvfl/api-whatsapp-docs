<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup -->
<!-- Scraped: 2025-12-20T17:53:57.114Z -->

# Como migrar um número de telefone comercial entre parceiros de soluções via Cadastro Incorporado

Updated: 14 de nov de 2025

Este documento descreve como usar o Cadastro Incorporado para migrar números de telefone comerciais entre parceiros de soluções e entre contas do WhatsApp Business (WABA, pelas iniciais em inglês).

Os clientes podem migrar números de telefone comercial entre Contas do WhatsApp Business e manter o nome de exibição, a classificação de qualidade, o limite de mensagens de modelo, o status de conta comercial oficial, além dos modelos aprovados com alta qualidade. Normalmente, a migração só é realizada quando um cliente deseja migrar o número de telefone comercial de um parceiro de solução para outro.

Há duas formas de migrar o número de um cliente: via Cadastro Incorporado ou migração programática.

**A migração via Cadastro Incorporado é a opção mais simples e a solução preferencial**. Isso porque ela pode ser iniciada pelos clientes, gera e concede automaticamente a propriedade de todos os ativos necessários, concede ao seu app acesso a esses ativos e exige menos chamadas de API.

Já a migração programática deve ser iniciada por você e envolve mais chamadas de API. Nesse processo, você precisa verificar se os ativos dependentes estão configurados da forma correta, bem como gerar todos os novos ativos necessários por conta própria e associá-los a outros ativos. Por esse motivo, a migração programática só será recomendada caso você trabalhe com o cliente usando o modelo "em nome de" (ou seja, você criará e terá a propriedade da WABA de destino e dos respectivos ativos e os compartilhará com o cliente).

Se você quiser migrar os números de telefone dos clientes de forma programática, consulte o documento [Migrating Numbers Between WhatsApp Business Accounts Programmatically](/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-programmatically).

## Como funciona

Os clientes podem usar a implementação do cadastro incorporado para iniciar o processo de migração. No fluxo de cadastro incorporado, os clientes precisarão fornecer o número de telefone comercial e uma nova conta do WhatsApp Business de destino.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/401509275_1483624899146347_3913430138749391948_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=8fLXJXpQGrYQ7kNvwHmKJeL&_nc_oc=AdkowjS0ibvaLrcTrEFbqCTZDQweH7YrqvSXG_kFNOtq3hm8BedKndQAYzE0LZ_K6ZI&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=b2mZ3mwmV2L-WeVYMT5ERw&oh=00_AfkzJ9eq_nXPc0_H8P4iZ209wreL9TY8XGJI1T9uBGtFBQ&oe=69610E36)

Quando o cliente conclui o fluxo, o Cadastro Incorporado gera a nova conta do WhatsApp Business, associa-a ao respectivo portfólio empresarial da Meta, concede ao seu app acesso à WABA e, depois, retorna a identificação da WABA recém-criada e do número de telefone comercial.

Você precisa armazenar esses números de identificação e usá-los com a API a fim de compartilhar sua linha de crédito, assinar webhooks e registrar o número para uso com a API de Nuvem. Depois de concluir a etapa final (registro), o número de telefone comercial será reassociado à WABA de destino e poderá ser usado para enviar e receber mensagens novamente.

Como não há alteração no número de telefone comercial do cliente, mantemos o nome de exibição, a classificação de qualidade, o limite de mensagens e o status de conta comercial oficial.

Todos os modelos qualificados são duplicados automaticamente na WABA de destino e recebem o mesmo status que os equivalentes de origem. Além disso, é possível continuar usando todas as mídias carregadas no número de telefone comercial do cliente.

### Contas do WhatsApp Business

O Cadastro Incorporado gera automaticamente a nova WABA do cliente, associa-a à respectiva conta comercial da Meta e concede ao seu app acesso à WABA.

### Modelos

Os modelos são duplicados automaticamente na WABA de destino e inicialmente recebem o mesmo status que seus equivalentes de origem.

No entanto, após a duplicação, os modelos são verificados outra vez para garantir que estão corretamente categorizados de acordo com as nossas [diretrizes](/documentation/business-messaging/whatsapp/pricing). Isso pode fazer com que alguns modelos duplicados tenham seu `status` alterado para `REJECTED`.

Apenas os modelos com `status` de `APPROVED` e `quality_score` de `GREEN` são qualificados para duplicação. Se a WABA de destino não conseguir acomodar todos os novos modelos, duplicaremos o maior número possível até que o limite de modelos da WABA de destino seja atingido. Para que a WABA de destino possa usar os modelos não duplicados, eles precisarão ser recriados e enviados para aprovação.

Observe que **as classificações de qualidade dos modelos não são duplicadas**. Todos os modelos duplicados terão a classificação inicial definida como `UNKNOWN`. Essa classificação será mantida nas primeiras 24 horas. Após esse período, uma nova classificação será gerada se houver dados suficientes disponíveis.

### Cobrança

As mensagens entregues antes da conclusão da migração serão cobradas do antigo Parceiro de Soluções. Já as mensagens não entregues que tiverem sido enviadas antes da conclusão da migração serão cobradas do antigo parceiro de solução se a entrega for realizada após a migração.

As mensagens entregues após a conclusão da migração serão cobradas do cliente corporativo.

### Período de inatividade do modelo

O registro de número de telefone comercial acontece instantaneamente, portanto, você poderá continuar enviando e recebendo mensagens sem interrupções.

Porém, a duplicação de modelos leva tempo. Por isso, você não poderá usar os modelos afetados até que eles sejam migrados.

Para evitar essa inatividade, você pode começar a migração dos modelos antes de registrar o número de telefone.

### Limites de volume

A [duplicação de modelos](#templates) disparada automaticamente como parte do processo de migração não tem impacto no limite de volume. No entanto, as chamadas de API realizadas por você serão contabilizadas no limite.

## Limitações

-   Os números de telefone comerciais de teste emitidos pelo WhatsApp não podem ser migrados.-   Os números de telefone comerciais migrados só podem ser registrados para uso com a API de Nuvem.-   Não faremos a migração do histórico de mensagens nem das mídias carregadas se a WABA de origem estiver na API Local.-   Os números de telefone comerciais devem ter um nome de exibição aprovado (`name_status` é `APPROVED`).-   Os números de telefone comerciais não podem ter solicitações pendentes de alteração do nome de exibição.-   As classificações dos modelos **NÃO** serão migradas. Todos os modelos migrados terão a classificação inicial definida como `UNKNOWN`. Essa classificação será mantida nas **primeiras 24 horas**. Após esse período, uma nova classificação será gerada se houver dados suficientes disponíveis.

## Requisitos

### Clientes

Peça para o cliente proprietário do número de telefone comercial confirmar se ele atende aos requisitos a seguir. Para isso, ele pode abrir o Gerenciador de Negócios da Meta (caso seja o proprietário da WABA) e acessar [Contas do WhatsApp](https://business.facebook.com/settings/whatsapp-business-accounts/) > (nome da WABA do cliente) > **Configurações**. Se ele não for o proprietário da WABA, será preciso solicitar a confirmação do parceiro de solução.

-   A conta comercial do cliente na Meta precisa ter o status de **verificada**.-   A WABA existente deve ter o status de **aprovada**.-   A WABA existente deve ter uma forma de pagamento válida anexada em **Configurações de pagamento**.-   O número de telefone comercial deve ter a confirmação em duas etapas desabilitada. Os clientes que forem os proprietários das WABAs poderão usar o Gerenciador do WhatsApp para [desabilitar a confirmação em duas etapas](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#disabling-two-step-verification) nos números de telefone deles. Caso contrário, eles precisarão solicitar aos parceiros de soluções que realizem essa ação.

### Provedores de soluções

É preciso que pelo menos um app já tenha assinado webhooks na WABA de destino. Consulte [Webhooks](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener). Além disso, você deve usar o Cadastro Incorporado com o [registro de sessão](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#subscribe-to-a-whatsapp-business-account) habilitado.

## Etapas de migração

### Etapa 1: instruir o cliente a desabilitar a confirmação em duas etapas

Caso ainda não tenha feito isso, oriente seu cliente a usar o Gerenciador do WhatsApp para [desabilitar a confirmação em duas etapas](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#disabling-two-step-verification) no número de telefone comercial (ou diga para ele pedir ao parceiro de solução atual que desabilite o recurso).

**Não será possível concluir os próximos passos até que a confirmação em duas etapas seja desabilitada.**

### Etapa 2: exibir o cadastro incorporado

Oriente o cliente a acessar sua implementação do cadastro incorporado, além de fornecer o número de telefone comercial e o nome de exibição associado durante o fluxo.

### Etapa 3: capturar IDs de ativos

Quando o cliente concluir o fluxo, capture o ID do número de telefone comercial e a nova WABA [retornados no evento de mensagem](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener).

### Etapa 4: compartilhar sua linha de crédito

[Compartilhe sua linha de crédito com a WABA](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#sharing-your-credit-line) como você faria normalmente depois de integrar um cliente por meio do Cadastro Incorporado.

### Etapa 5: assinar webhooks

[Assine webhooks para seu app](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#subscribe-to-a-whatsapp-business-account) na nova WABA do cliente.

### Etapa 6: registrar o número de telefone na API de Nuvem

[Registre o número de telefone comercial](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-4--register-the-number) para uso com a API de Nuvem. Não é possível registrar um número migrado para uso com a API Local.

## Solução de problemas

Se o processo de migração do modelo falhar, consulte nosso documento [Migração de modelo](/documentation/business-messaging/whatsapp/templates/template-migration) para ver instruções sobre como acionar manualmente esse processo.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)