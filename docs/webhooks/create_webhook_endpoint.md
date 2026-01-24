<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint -->
<!-- Scraped: 2026-01-24T01:07:25.530Z -->

# Como criar um ponto de extremidade de webhook

Updated: 7 de nov de 2025

Conheça as solicitações e respostas de webhook para configurar seu próprio ponto de extremidade de webhook em um servidor público.

Antes de poder usar o app em capacidade de produção, você deve criar e configurar seu próprio ponto de extremidade de webhook em um servidor público capaz de aceitar e responder a solicitações GET e POST, bem como validar e capturar cargas de webhook.

## TLS/SSL

O servidor do ponto de extremidade de webhook deve ter um certificado de segurança digital TLS ou SSL válido, configurado e instalado corretamente. Não são aceitos certificados autoatribuídos.

## mTLS

Os webhooks são compatíveis com o protocolo TLS mútuo (mTLS) para aumentar a segurança. Para saber como habilitar e usar o mTLS, consulte o documento [mTLS para webhooks](/docs/graph-api/webhooks/getting-started#mtls-for-webhooks) da Graph API.

Não é possível habilitar e desabilitar o mTLS no nível da WABA ou do número de telefone comercial. Se houver mais de um app acessando a plataforma, será necessário habilitar o mTLS para cada um deles.

## Solicitações GET

As solicitações GET são usadas para verificar o ponto de extremidade do webhook. Sempre que você [definir ou editar o campo **URL de retorno de ligação** ou o campo **Verificar token**](#configure-webhooks) no Painel de Apps, enviaremos uma solicitação GET para seu ponto de extremidade de webhook. É necessário validar e responder a essa solicitação.

### Sintaxe da solicitação

```
GET <CALLBACK_URL>
  ?hub.mode=subscribe
  &hub.challenge=<HUB.CHALLENGE>
  &hub.verify_token=<HUB.VERIFY_TOKEN>
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<CALLBACK_URL>`

O URL do ponto de extremidade do webhook.

Adicione esse URL ao campo **URL de retorno de chamada** no Painel de Apps quando você [configurar webhooks](#configure-webhooks) mais tarde.

`https://www.luckyshrub.com/webhooks`

`<HUB.CHALLENGE>`

Uma string aleatória que será gerada por nós.

`1158201444`

`<HUB.VERIFY_TOKEN>`

Uma string de verificação da sua escolha. Armazene essa string no seu servidor.

Adicione essa string ao campo **Verificar token** no Painel de Apps quando você [configurar webhooks](#configure-webhooks) mais tarde.

`vibecoding`

### Validação

Para validar as solicitações GET, compare o valor `hub.verify_token` na solicitação com a string de verificação armazenada no seu servidor. Se os valores corresponderem, a solicitação será válida. Caso contrário, ela será inválida.

### Resposta

Se a solicitação for válida, responda com o status HTTP `200` e o valor `hub.challenge`. Se a solicitação for inválida, responda com um código de status HTTP do nível 400 ou com qualquer outra opção que não seja o status `200`.

Quando você [configurar webhooks](docs/whatsapp/cloud-api/guides/set-up-webhooks#configure-webhooks), enviaremos uma solicitação GET para o ponto de extremidade do webhook. Se retornar o status `200` e o valor `hub.challenge` incluído na solicitação, consideraremos o ponto de extremidade do seu webhook verificado e começaremos a enviar webhooks para você. Se o ponto de extremidade do webhook responder de outra forma, consideraremos o ponto de extremidade não verificado. Nesse caso, os webhooks não serão enviados.

## Solicitações POST

Sempre que um evento de webhook for disparado em qualquer campo do webhook que você tiver assinado, uma solicitação POST será enviada para seu ponto de extremidade do webhook, contendo uma carga JSON que descreve o evento.

### Sintaxe da solicitação

```
POST <CALLBACK_URL>
Content-Type: application/json
X-Hub-Signature-256: sha256=<SHA256_PAYLOAD_HASH>
Content-Length: <CONTENT_LENGTH><JSON_PAYLOAD>
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<CALLBACK_URL>`

O URL do ponto de extremidade do webhook.

`https://www.luckyshrub.com/webhooks`

`<CONTENT_LENGTH>`

Comprimento do conteúdo em bytes.

`492`

`<JSON_PAYLOAD>`

A carga do corpo do post, formatada em JSON.

Consulte as referências sobre [campos](/documentation/business-messaging/whatsapp/webhooks/overview#fields) para ver exemplos de cargas.

`<SHA256_PAYLOAD_HASH>`

Hash HMAC-SHA256 calculado usando a carga do corpo do post e a [chave secreta do app](/docs/development/create-an-app/app-dashboard/basic-settings#app-secret) como a chave secreta.

`b63bb356dff0f1c24379efea2d6ef0b2e2040853339d1bcf13f9018790b1f7d2`

### Validação

Para validar a solicitação:

Gere um hash HMAC-SHA256 usando a carga JSON como entrada de mensagem e a [chave secreta do app](/docs/development/create-an-app/app-dashboard/basic-settings#app-secret) como a chave secreta. Compare o hash gerado com o atribuído ao cabeçalho `X-Hub-Signature-256` (tudo que aparece depois de `sha256=`).

Se os hashes coincidirem, a carga será válida. Capture a carga e processe o conteúdo conforme as necessidades da empresa. Caso não haja correspondência, considere a carga como inválida.

Não oferecemos APIs para buscar dados históricos de webhooks. Por isso, capture e armazene a carga de webhooks adequadamente.

### Resposta

Se a solicitação for válida, responda com o status HTTP 200. Caso contrário, responda com um status HTTP 400 ou outro diferente de 200.

### Envio em lote

As solicitações POST são agregadas e enviadas em lote com um máximo de mil atualizações. No entanto, a criação de lotes não pode ser garantida. Por isso, ajuste seus servidores para lidar com cada solicitação POST individualmente.

Se o envio de um solicitação POST para o servidor falhar, tentaremos outra vez imediatamente e depois mais algumas vezes, diminuindo a frequência nas 36 horas seguintes. Seu servidor deverá lidar com a desduplicação nesses casos.

As respostas não reconhecidas serão descartadas após 36 horas.

## Configurar webhooks

Depois de criar o ponto de extremidade de webhook, navegue até o painel **[Painel de Apps](/apps)** > **WhatsApp** > **Configuração** e adicione o URL do ponto de extremidade de webhook no campo **URL de retorno de chamada** e a string de verificação no campo **Verificar token**.

Se você criou o app usando o caso de uso **Conectar-se com clientes pelo WhatsApp**, navegue até **[Painel de Apps](/apps)** > **Casos de uso** > **Personalizar** > **Configuração**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/518348561_1679202599393717_3427225193188619311_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=UQpgMszmHO4Q7kNvwF44f6D&_nc_oc=AdmawGYkMCd5C1CtTCLbaC086-bEkjbC6wqwA5feN-B4Mo9BQDDAPhGnODCcJvZlNJs&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=hA8DuR5V7XzvB9L1oTlotw&oh=00_AfqtPSSgm78Cw_R7XXg3SLjlg8-bHcOYTHWVq6zCxLpekw&oe=698E5D30)

Se o ponto de extremidade do webhook estiver respondendo corretamente às solicitações GET de verificação, o painel salvará as alterações e será exibida uma lista de campos que podem ser assinados. Dessa forma, você pode [assinar os campos](/documentation/business-messaging/whatsapp/webhooks/overview#fields) que atendem às suas necessidades comerciais.

Você pode usar o ponto de extremidade [POST Application Subscriptions](https/docs/graph-api/reference/app/subscriptions#creating) para configurar webhooks como um método alternativo, mas isso exige o uso de um [token do app](/docs/facebook-login/guides/access-tokens#apptokens). Para saber como fazer isso, consulte o documento da borda [Assinaturas](/docs/graph-api/webhooks/subscriptions-edge) da Graph API e use whatsapp\_business\_account como o valor do objeto.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)