<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud -->
<!-- Scraped: 2026-01-24T01:01:34.236Z -->

# Como migrar da API Local para a API de Nuvem

Updated: 5 de nov de 2025

Este documento explica como migrar números de telefone comercial da API Local para a API de Nuvem.

Importante: migrar um número de telefone comercial de uma API para outra não equivale a [migrar um número de uma conta do WhatsApp Business (WABA) para outra](/docs/whatsapp/business-management-api/guides/migrate-phone-to-different-waba).

## Como funciona

O processo de migração envolve a geração de metadados sobre o número de telefone comercial e o uso desses dados ao registrar o número para uso com a API de Nuvem. Essas ações cancelam o registro do número na API Local, já que ele só pode ser registrado para uso com uma API por vez.

A migração NÃO afeta:

-   o nome de exibição, o status de verificação nem a classificação de qualidade do número de telefone comercial-   os modelos usados pelo número de telefone comercial nem os respectivos status-   a propriedade, o status de conta comercial oficial nem o limite de mensagens da WABA

Porém, para apoiar o processo de migração, você deve estar ciente das [diferenças entre as APIs](#api-differences) e precisa tomar as medidas adequadas antes de executar as etapas descritas neste documento.

## Requisitos

### App da Meta

É preciso ter um app de empresa da Meta que seja capaz de usar a API de Nuvem e a API de Gerenciamento do WhatsApp Business com dados de clientes integrados e que possa processar [webhooks](#webhooks) dessas APIs. O app também precisa estar associado à sua conta comercial da Meta que foi verificada ou ter sido obtido por ela.

Caso você não tenha um App de Negócios da Meta, ou possua um, mas não tenha configurado o produto WhatsApp, conclua as etapas descritas no guia [Introdução](/documentation/business-messaging/whatsapp/get-started) da API de Nuvem. A conclusão dessas etapas resultará na geração de todos os ativos necessários para você testar a API de Nuvem e a API de Gerenciamento do WhatsApp Business.

### Análise do App

Seu app da Meta precisa passar pela [Análise do App](/documentation/business-messaging/whatsapp/solution-providers/app-review) e ser aprovado (ou seja, ter acesso avançado) para as permissões **whatsapp\_business\_messaging** e **whatsapp\_business\_management**.

## Boas práticas

Depois de garantir que seu app possa lidar com todas as diferenças entre as APIs, recomendamos começar a migração com um número de telefone comercial de baixo volume e verificar se todas as funcionalidades que você pretende oferecer com a API de Nuvem funcionam corretamente. Quando terminar essa verificação, migre os outros números.

Também recomendamos que você faça a migração quando o tráfego para sua implantação da API Local estiver baixo.

## Diferenças entre as APIs

Os recursos da API Local a seguir não são compatíveis com a API de Nuvem ou são tratados por ela de maneira diferente. Confirme que seu app é capaz de lidar com essas diferenças antes de iniciar o processo de migração.

### Webhooks

As estruturas de carga dos webhooks da API de Nuvem e da API de Gerenciamento do WhatsApp Business são diferentes das estruturas da API Local. Recomendamos que você crie um novo ponto de extremidade de webhook que possa gerenciar ambas. Consulte [Webhooks](/documentation/business-messaging/whatsapp/webhooks/overview).

Depois de migrar um número de telefone comercial para a API de Nuvem, use o ponto de extremidade [Conta do WhatsApp Business > Apps inscritos](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api) para **assinar webhooks para seu app da Meta na WABA** associada ao número comercial:

#### Sintaxe da solicitação

```
curl -X POST 'https://graph.facebook.com/v17.0/<WABA_ID>/subscribed_apps' \
-H 'Authorization: Bearer EAAJB...'
```

Quando a migração para a API de Nuvem for concluída, os webhooks da API Local do número de telefone comercial não serão mais entregues e a entrega dos webhooks da API de Nuvem será iniciada.

### Mídia

Não será possível usar os IDs de mídias que foram carregadas na API Local ao enviar mensagens com a API de Nuvem. Por isso, [carregue novamente a mídia usando a API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) para gerar novos IDs ou use os respectivos URLs caso a mídia esteja hospedada em um servidor público. Consulte [Mensagens de mídia](/documentation/business-messaging/whatsapp/messages/send-messages#media-messages) e [Modelos de mensagem de mídia](/documentation/business-messaging/whatsapp/templates/overview#media).

Para garantir a integridade da mensagem, alguns domínios de hospedagem de mídia permitidos na API Local não são aceitos pela API de Nuvem. Caso você use um serviço de hospedagem para mídia, recomendamos testar os URLs de mídia em mensagens em formato livre e mensagens de modelo antes da migração. Se você acredita que seu host foi bloqueado por engano, [entre em contato com o suporte](/documentation/business-messaging/whatsapp/support).

### Códigos de erro

Os códigos de erro da API de Nuvem e da API de Gerenciamento do WhatsApp Business são diferentes dos da API Local. Consulte nosso documento [Códigos de erro](/documentation/business-messaging/whatsapp/support/error-codes).

### Validação de propriedade

-   A API Local pode aceitar propriedades desconhecidas em cargas do corpo do post de mensagem, mas a API de Nuvem rejeitará essas solicitações. Por isso, use apenas propriedades compatíveis nas suas solicitações de envio de mensagem.-   A API Local permite a omissão de índices de botões quando você envia mensagens com apenas um botão, mas a API de Nuvem rejeitará essas solicitações. Por isso, as solicitações de envio de mensagens que incluam botões também precisam incluir índices e os respectivos valores.-   A API Local aceita strings de texto que contenham espaços iniciais ou finais (ou apenas espaços) nas propriedades de objeto de botão e ação quando você envia mensagens interativas, mas a API de Nuvem rejeitará essas solicitações.

### Mensagens push-to-talk

A API Local identifica mensagens push-to-talk (PTT) em webhooks definindo `messages.type` como `voice`, já a API de Nuvem as identifica definindo `messages.audio.voice` como `true`.

### Pacotes de figurinhas

A API de Nuvem não é compatível com pacotes de figurinhas.

## Inatividade

O tempo de inatividade começa assim que você conclui a etapa final da migração (cadastrar o número para uso com a API de Nuvem) e deve durar apenas alguns segundos. Durante esse período, as mensagens enviadas por usuários do WhatsApp ao número de telefone serão descartadas silenciosamente.

Recomendamos que você faça a migração durante um período em que o número apresente baixa atividade para reduzir esses impactos.

## Taxa de transferência

Se o número de telefone comercial da API Local tiver multiconexão executando 2 ou mais fragmentos, ele será atualizado automaticamente para uma [taxa de transferência de dados alta](/documentation/business-messaging/whatsapp/throughput) na API de Nuvem.

## Contas comerciais oficiais

Caso esteja migrando um número de telefone comercial que tem um status de [conta comercial oficial (OBA)](/documentation/business-messaging/whatsapp/official-business-accounts) , o status dele será preservado se incluir seus metadados (gerados na etapa 2) ao registrar o número (etapa 3). Se omitir esses dados, o número perderá seu status de OBA.

## Suporte à migração

Se você tiver dúvidas ou precisar de ajuda com a migração, envie um tíquete ao Suporte Direto com estas informações:

-   Tópico: **WABiz: API de Nuvem**-   Tipo de solicitação: **API Local-> Problemas com a migração da API de Nuvem**

## Passo 1: desabilitar a confirmação em duas etapas

Se você souber o PIN do número de telefone comercial, pule esta etapa.

É preciso ter o PIN para concluir a etapa 3. Por isso, caso você não tenha essa informação, primeiro [desabilite a confirmação em duas etapas](/docs/whatsapp/on-premises/reference/settings/two-step-verification#disable) no número de telefone comercial. Se o número de telefone comercial não for seu, peça ao proprietário para desabilitar o recurso de verificação para você.

## Etapa 2: gerar os metadados do número de telefone

Use a [API de Restauração e Backup](/docs/whatsapp/on-premises/reference/settings/backup-and-restore) para gerar os metadados sobre seu número de telefone comercial.

### Sintaxe da solicitação

```
POST /v1/settings/backup
{
  "password": "<PASSWORD>"
}
```

A `<PASSWORD>` pode ser qualquer string. Esse valor será usado para codificar os metadados. Guarde o código, já que você precisará dele para concluir a próxima etapa.

### Resposta

```
{
  "settings": {
    "data": "<METADATA>"
  },
  "meta": {
    "api_status": "<API_STATUS>",
    "version": "<API_VERSION>"
  }
}
```

A API retornará uma string codificada atribuída à propriedade `data` que descreve seu número de telefone comercial e as respectivas configurações. Guarde esse valor, já que você precisará dele para concluir a próxima etapa.

-   `<METADATA>`: a string codificada que descreve seu número de telefone comercial e as respectivas configurações. Guarde esse valor, já que você precisará dele para concluir a próxima etapa.-   `<API_STATUS>`: o status da implantação da API Local.-   `<API_VERSION>`: o número da versão da API Local que você está executando.

### Exemplo de solicitação

```
curl 'https://localhost:9090/v1/settings/backup' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "password": "tacocat"}'
```

### Exemplo de resposta

```
{  "settings": {    "data": "V0FCS..."  },  "meta": {    "api_status": "stable",    "version": "2.49.3"  }}
```

## Etapa 3: registrar o número

Não será necessária uma senha descartável se os metadados de backup da **Etapa 2** acima forem enviados corretamente e sem modificações à API de Nuvem durante a **Etapa 3** (esta etapa).

Use o ponto de extremidade [Número de telefone do WhatsApp Business > Registrar](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api) para registrar o número para uso com a API de Nuvem.

Inclua o valor de metadados do número de telefone comercial codificado e a senha da etapa anterior. Embora seja possível registrar o número sem esses dados, os dados de perfil do número de telefone comercial serão perdidos se não forem incluídos, o que pode afetar o status de conta comercial oficial da conta do WhatsApp Business.

### Sintaxe da solicitação

```
POST /<BUSINESS_PHONE_NUMBER_ID>/register
```

### Corpo do post

```
{
  "messaging_product": "whatsapp",
  "pin": "<NEW_OR_EXISTING_PIN>",
  "backup": {
    "password": "<PASSWORD>",
    "data": "<METADATA>"
  }
}
```

-   `<NEW_OR_EXISTING_PIN`: o PIN existente ou o PIN que você quer definir no número de telefone comercial.-   `<PASSWORD`: a senha que você usou para gerar os metadados do número de telefone comercial na etapa anterior.-   `<METADATA`: a string codificada gerada na etapa anterior que descreve seu número de telefone comercial e as respectivas configurações.

### Resposta

```
{
  "success": <SUCCESS>
}
```

A API responderá com `success` definido como `true` (se o registro for bem-sucedido) ou `false` (se ocorrer um erro).

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/110200345501442/register' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "134568",
  "backup": {
    "password": "tacocat",
    "data": "V0FCS..."
  }
}'
```

### Exemplo de resposta

```
{  "success": true}
```

## Etapa 4: verificar o status de integridade de envio de mensagens (opcional)

Solicite o campo `health_status` no número de telefone comercial e verifique se ele pode ser usado para enviar mensagens com a API de Nuvem. Consulte [Status de integridade de envio de mensagens](/documentation/business-messaging/whatsapp/support/health-status).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)