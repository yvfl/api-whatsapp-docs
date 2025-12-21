<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-programmatically -->
<!-- Scraped: 2025-12-20T17:54:05.156Z -->

# Como migrar um número de telefone comercial entre Parceiros de Soluções de forma programática

Updated: 14 de nov de 2025

Este documento descreve como os parceiros de soluções podem migrar números de telefone comerciais de um parceiro de soluções e Conta do WhatsApp Business (WABA) para outro parceiro de soluções e WABA usando a API. Siga este método somente se você for trabalhar com o cliente empresarial usando o modelo "em nome de" (ou seja, você criará e terá a propriedade da WABA de destino, bem como dos respectivos ativos e os compartilhará com o cliente).

Para migrar números de telefone de clientes via cadastro incorporado (recomendado), consulte o documento [Como migrar números de telefone entre contas comerciais do WhatsApp via Cadastro incorporado](/docs/whatsapp/business-management-api/guides/migrate-phone-to-different-waba).

## Visão geral

Os parceiros de soluções e as empresas integradas à plataforma do WhatsApp Business podem migrar um número de telefone registrado de uma WABA para outra. Os números de telefone migrados mantêm o nome de exibição, a classificação de qualidade, o [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits), o status de [conta comercial oficial](/documentation/business-messaging/whatsapp/official-business-accounts) e os modelos de mensagem de [alta qualidade](/documentation/business-messaging/whatsapp/templates/template-quality) aprovados anteriormente.

Na prática, migração significa que uma empresa pode manter o mesmo número de telefone nos seguintes casos:

-   Estiver usando a plataforma com um dos nossos parceiros de soluções **e** quiser mudar para um fornecedor diferente.-   Estiver usando uma implementação própria **e** quiser mudar para um parceiro de solução.

Apenas os parceiros de soluções e as empresas integradas à plataforma do WhatsApp Business podem realizar a migração de números de telefone.

O processo de migração envolve três ativos principais:

Uma WABA de origem

Um número de telefone

Uma WABA de destino

A conta em que o número de telefone está registrado atualmente.

O número que será migrado.

A conta para a qual o número será migrado.

A migração de telefone sempre é iniciada pelo parceiro de solução ou pela empresa proprietária da WABA de destino.

As WABAs são contas criadas dentro de uma empresa no Gerenciador de Negócios. Cada empresa tem uma identificação, também conhecida como identificação do Gerenciador de Negócios.

Tanto as WABAs de origem como as de destino podem ser associadas às empresas de duas maneiras diferentes:

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/565331603_1339318201260164_1404407423147875823_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=g34bcUe4m9EQ7kNvwF5Fyyc&_nc_oc=Adljwtf0Sy4UTwfer__yq7p34lD3NgdkWzw5sCYtTX4Gd7lVQAwJ0JMTeCT2W-qOVUU&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=T-HBdH4Dd1Gv1OheB98BCQ&oh=00_AflRZJAEKKmhE8Rf6Mqyfmwjnp_63STpfGnjlo634ZHIaw&oe=696109DC)

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/561215785_1339318267926824_6000455041075810602_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=lpxDa0xzna4Q7kNvwGw8Mcd&_nc_oc=Adkm86-HBqpKUi3TAdl-p67StscAMe2p8WKm1X2Yoadvc-tRL8kAWduXzD_cX8QUGuw&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=T-HBdH4Dd1Gv1OheB98BCQ&oh=00_AfnnVTtVQPXiSykswxVnAT-eED7gYkqePDNisFo_UYGoEw&oe=69612C3A)

### Como funciona a migração

#### Inatividade

A API não é compatível com a migração em massa. Os números de telefone comercial precisam ser migrados individualmente.

#### Modelos de mensagem

Todos os modelos de mensagem de [alta qualidade](/documentation/business-messaging/whatsapp/templates/template-quality) na WABA de origem serão duplicados e automaticamente aprovados na WABA de destino desde que a WABA de destino possa acomodar novos modelos. Isso não afetará os modelos de mensagem existentes na WABA de destino. Os modelos de baixa qualidade, rejeitados ou pendentes não serão duplicados.

Os modelos duplicados serão sujeitos às verificações das [Diretrizes de Categorização de Modelos](/documentation/business-messaging/whatsapp/templates/template-categorization) para garantir a categorização correta. Com isso, alguns dos modelos duplicados poderão ser `REJECTED`.

Se a WABA de destino não conseguir acomodar todos os novos modelos, duplicaremos o maior número possível até que o limite de modelos da WABA de destino seja atingido. Para que a WABA de destino possa usar os modelos não duplicados, eles precisarão ser recriados e enviados para aprovação.

As classificações de qualidade dos modelos **NÃO** serão migradas. Todos os modelos migrados terão a classificação inicial definida como `UNKNOWN`. Essa classificação será mantida nas **primeiras 24 horas**. Após esse período, uma nova classificação será gerada se houver dados suficientes disponíveis.

#### Migração de cobrança

As mensagens enviadas antes da migração serão cobradas da empresa de origem. As mensagens enviadas após a migração serão cobradas da empresa de destino. As mensagens enviadas da fonte e não entregues antes da migração ainda serão cobradas da empresa de origem quando forem entregues.

#### Limites de volume

Os [limites de volume padrão da Graph API](/docs/graph-api/overview/rate-limiting) se aplicam à migração.

#### Limitações

-   Os números de telefone comerciais de teste emitidos pelo WhatsApp não podem ser migrados.
    -   Os números de telefone comercial em uso com o app WhatsApp Business não podem ser migrados usando esse processo. Para migrar um número do app WhatsApp Business, consulte [Como migrar um número existente para a API Local](/docs/whatsapp/on-premises/get-started/migrate-existing-whatsapp-number-to-a-business-account) e [Como migrar um número existente para a API de Nuvem](/documentation/business-messaging/whatsapp/solution-providers/migrate-existing-whatsapp-number-to-a-business-account).
    -   O histórico de mídias e mensagens não será migrado se a WABA de origem ou de destino estiver na API Local. Se as WABAs de origem e de destino estiverem na API de Nuvem, as identificações de mídia e de mensagem carregadas poderão continuar a ser usadas.
    -   A API não é compatível com a migração em massa. Os números de telefone comercial precisam ser migrados individualmente.
    -   Os números de telefone comerciais devem ter um nome de exibição aprovado (`name_status` é `APPROVED`).
    -   Os números de telefone comerciais não podem ter solicitações pendentes de alteração do nome de exibição.
    -   As classificações de qualidade dos modelos **NÃO** serão migradas. Todos os novos modelos migrados iniciarão com a classificação `APPROVED`, e a nova classificação de modelos migrados será determinada usando dados das últimas 24h.
    

#### Resumo

  

Migram:

-   Nome de exibição-   Classificação de qualidade do número de telefone-   Limites de mensagem-   Status de conta comercial oficial-   Todos os modelos de mensagem de qualidade alta aprovados anteriormente

Não migram:

-   Modelos de mensagem de baixa qualidade, rejeitados ou pendentes.-   Classificação de qualidade do modelo

## Antes de começar

Para se qualificarem para migração, os ativos de uma empresa precisam cumprir os seguintes critérios:

Ativo

Requisitos para migração

Número de telefone

-   Deve estar registrado na WABA de origem.-   Caso a confirmação em duas etapas tenha sido habilitada para o número em questão, o proprietário da WABA de origem precisará [desabilitá-la](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#disabling-two-step-verification).

O dono do número de telefone é responsável por entrar em contato com o dono da WABA de origem.

WABA de origem

-   Deve ter a verificação da empresa concluída e aprovada.-   O status de análise da WABA deve ser `Approved`.

WABA de destino

-   É necessário ter a Verificação de Negócios e a análise da WABA concluída e aprovada.-   É preciso ter uma [forma de pagamento](https://www.facebook.com/business/help/1684730811624773) definida.

Webhooks

**Somente números de telefone na API de Nuvem**  
Pelo menos um app deve estar inscrito no webhook para a WABA de destino. Consulte [Webhooks na API de Nuvem](/documentation/business-messaging/whatsapp/webhooks/overview).

### Permissões

Todas as chamadas de API para migração de telefone devem ser feitas com um app que tenha a permissão `whatsapp_business_management`. Consulte a seção sobre [como usar a API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/get-started) para saber mais sobre a análise do app, tokens de acesso e como fazer chamadas de API. A migração de telefone sempre é iniciada pelo parceiro de solução ou pela empresa proprietária da WABA de destino.

### Como preparar a WABA de destino

O tipo de WABA de destino determina o que precisa ser feito para que a conta esteja pronta para migração:

Tipo de WABA

Considerações para parceiros de soluções que fazem migração

WABA existente

Confirme se a WABA existente (de destino) tem uma forma de pagamento configurada.

Se a WABA de origem estiver na API de Nuvem, verifique se pelo menos um app assinou os webhooks para a WABA de destino.

Nova WABA criada por um parceiro de solução para enviar mensagem a clientes

Ao criar uma nova WABA no Gerenciador de Negócios, um parceiro de solução deve fazer o seguinte:

-   Inserir o nome de uma conta para o cliente (Nome da WABA)-   Selecionar uma [forma de pagamento](https://www.facebook.com/business/help/1684730811624773?id=2129163877102343)-   Selecionar **Conta do cliente** no campo **Enviando mensagens em nome de**-   Inserir a identificação do Gerenciador de Negócios do cliente. Consulte [Como encontrar a identificação da empresa no Gerenciador de Negócios da Meta](https://www.facebook.com/business/help/1181250022022158?id=180505742745347).

Os parceiros de soluções podem então instruir os clientes a aceitar a solicitação de **Enviando mensagem em nome de** enviada para o Gerenciador de Negócios. Para orientar os clientes, consulte [Criar conta do WhatsApp Business com provedores de soluções de negócios do WhatsApp: Approve messaging on behalf of your business](https://www.facebook.com/business/help/524220081677109). Assim que a solicitação for aceita, a WABA de destino estará pronta para a migração de telefone.

Se a WABA de origem estiver na API de Nuvem, verifique se pelo menos um app assinou os webhooks para a WABA de destino.

Nova WABA criada por um cliente e compartilhada com um parceiro de solução via cadastro incorporado

Esse tipo de WABA é criado assim que um cliente passa pelo fluxo de cadastro incorporado no site do parceiro de solução. Para orientar os clientes, consulte [Como criar conta do WhatsApp Business com provedores de soluções de negócios do WhatsApp: cadastro incorporado](https://www.facebook.com/business/help/524220081677109). Durante o fluxo de cadastro incorporado, instrua o cliente a fazer o seguinte:

-   Selecionar a empresa que é dona da sua WABA existente-   Não adicionar um número de telefone por meio do fluxo de cadastro, pois vamos usar a API de migração para isso. Os clientes podem concluir o fluxo de cadastro incorporado depois de criarem a conta do WhatsApp Business.

Use APIs de cadastro incorporado para [obter a WABA criada pelo cliente](/documentation/business-messaging/whatsapp/solution-providers/manage-accounts#get-list-of-shared-wabas), [adicionar usuários do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) e [configurar uma forma de pagamento para a WABA](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#sharing-your-credit-line).

Como a WABA já foi compartilhada com o parceiro de solução, ela está pronta para a migração de telefone. **Lembrete:** a migração só acontecerá se a empresa do cliente tiver concluído o processo de verificação.

Se a WABA de origem estiver na API de Nuvem, verifique se pelo menos um app assinou os webhooks para a WABA de destino.

### Exclusão da WABA de origem

Depois da migração, verifique se todos os modelos necessários foram duplicados na WABA de destino **antes de excluir a de origem** (se você pretende fazer isso).

## Começar

Todas as chamadas de migração são feitas para o ponto de extremidade com a identificação da WABA de destino. A migração de telefone sempre é iniciada pelo parceiro de solução ou pela empresa proprietária da WABA de destino.

### Passo 1: desabilitar a confirmação em duas etapas

A confirmação em duas etapas precisa ser desabilitada no número de telefone antes de a migração ser iniciada. Para usuários da API de Nuvem, isso pode ser feito pelo [Gerenciador de Negócios da Meta](https://business.facebook.com). Para usuários da API Local, isso pode ser feito por meio de uma chamada para o ponto de extremidade em [Confirmação em duas etapas](/docs/whatsapp/on-premises/reference/settings/two-step-verification#disable).

Se você for dono da WABA de origem e o dono do número de telefone pedir a você para migrar seu número, você mesmo pode desabilitar a confirmação em duas etapas. Se você não for dono da WABA de origem, o dono do número de telefone deve pedir ao dono da WABA de origem para desabilitar a confirmação em duas etapas no seu número de telefone.

### Passo 2: iniciar migração do telefone

Faça uma chamada `POST` para o ponto de extremidade `/WHATSAPP_BUSINESS_ACCOUNT_ID/phone_numbers`. Lembre-se de que `WHATSAPP_BUSINESS_ACCOUNT_ID` representa a identificação da WABA de destino. Na chamada, especifique os seguintes campos:

Nome

Descrição

`cc`

**Obrigatório.**

Código numérico do país do número de telefone registrado.

`phone_number`

**Obrigatório.**

Número de telefone sendo migrado, sem o código do país ou o símbolo de mais (`+`).

`migrate_phone_number`

**Obrigatório.**

Para migrar um número de telefone, defina isso como `true`.

Para encontrar a identificação de uma conta do WhatsApp Business, acesse [**Gerenciador de Negócios**](https://business.facebook.com/) > **Configurações do negócio** > **Contas** > **Contas do WhatsApp Business**. Encontre a conta que você quer usar e clique nela. Um painel é aberto, contendo as informações sobre a conta, inclusive a identificação.

  

Exemplo de chamada de API:

```
curl -X POST \
  'https://graph.facebook.com/v24.0/<DESTINATION_WHATSAPP_BUSINESS_ACCOUNT_ID>/phone_numbers' \
  -d 'cc=1' \
  -d 'phone_number=<PHONE_NUMBER>' \
  -d 'migrate_phone_number=true' \
  -d 'access_token=<ACCESS_TOKEN>'
```

Uma chamada de API bem-sucedida retorna:

```
{
  'id': '<PHONE_NUMBER_ID>'
}
```

### Passo 3: verificar a propriedade do telefone

Depois de solicitar a migração, você precisa confirmá-la verificando a propriedade do número de telefone. Para fazer isso, solicite um código de registro com uma chamada `POST` para `/PHONE_NUMBER_ID/request_code`. Aqui, `PHONE_NUMBER_ID` representa a identificação retornada no Passo 1.

Na chamada, especifique os seguintes campos:

Nome

Descrição

`code_method`

**Obrigatório.**

Método para receber o código de registro. Valores compatíveis: `SMS` e `VOICE`.

`language`

**Obrigatório.**

Idioma em que você deseja receber o código de registro. Confira os [códigos de idioma](/documentation/business-messaging/whatsapp/templates/supported-languages).

Veja um exemplo de chamada:

```
curl -X POST \
'https://graph.facebook.com/v24.0/<PHONE_NUMBER_ID>/request_code' \
  -d 'code_method=SMS' \
  -d 'language=en_US' \
  -d 'access_token=<ACCESS_TOKEN>'
```

Se a sua chamada de API retornar `success: true`, você deve obter o código por meio do `code_method` selecionado para o número de telefone a ser migrado. A entrega do código pode demorar alguns minutos. O dono do número de telefone precisa fornecer esse código antes que você possa confirmá-lo.

Para confirmar o código, faça uma chamada de API para o ponto de extremidade `/PHONE_NUMBER_ID/verify_code`. Especifique o seguinte campo:

Nome

Descrição

`code`

**Obrigatório.**

Código de registro de 6 dígitos recebido após fazer a chamada `/PHONE_NUMBER_ID/request_code`.

Por exemplo:

```
curl -X POST \
'https://graph.facebook.com/v24.0/<PHONE_NUMBER_ID>/verify_code' \
  -d 'code=<6-DIGIT-CODE>' \
  -d 'access_token=<ACCESS_TOKEN>'
```

Se a sua chamada de API retornar `{"success":true}`, a propriedade do seu número de telefone foi confirmada.

### Passo 4: registrar número de telefone

Envie uma solicitação POST com o PIN de seis dígitos para o ponto de extremidade em [Número de telefone do WhatsApp Business > Registrar](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api) para registrar o número de telefone novamente. Consulte [Como registrar um número de telefone comercial](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#register-phone).

## Solução de problemas

Se a migração do modelo falhar, consulte a documentação a seguir para instruções sobre como disparar manualmente esse processo: [Migração de modelo](/documentation/business-messaging/whatsapp/templates/template-migration).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)