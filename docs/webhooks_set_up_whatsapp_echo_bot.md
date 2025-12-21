<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot -->
<!-- Scraped: 2025-12-20T17:35:05.455Z -->

# Criar um ponto de extremidade de webhook de teste

Updated: 7 de nov de 2025

Se ainda não estiver tudo pronto para você criar seu próprio ponto de extremidade de webhook, é possível implantar um app de webhook de teste no [Render.com](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.render.com%2F&h=AT2Ntxvyam76tk97XGFFzy9HLUT84BSwYpj5xv1eRNl6UUtc5spedCIuK7wnpexVlFzkOProwCM1LNJKfY_e0GZRqFw275yd10OJdl6LzhIYLUHXNzzUaUs5v3YR20pzMKDQX7O-GtsU6wSWkp1WYrR4eqM) que aceita solicitações de webhook e envia o conteúdo delas para o console do Render.

_Use este app apenas para fins de teste._

## Requisitos

-   Uma conta do [Render](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.render.com%2F&h=AT2Ntxvyam76tk97XGFFzy9HLUT84BSwYpj5xv1eRNl6UUtc5spedCIuK7wnpexVlFzkOProwCM1LNJKfY_e0GZRqFw275yd10OJdl6LzhIYLUHXNzzUaUs5v3YR20pzMKDQX7O-GtsU6wSWkp1WYrR4eqM).-   Uma conta do [Github](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.github.com%2F&h=AT2Ntxvyam76tk97XGFFzy9HLUT84BSwYpj5xv1eRNl6UUtc5spedCIuK7wnpexVlFzkOProwCM1LNJKfY_e0GZRqFw275yd10OJdl6LzhIYLUHXNzzUaUs5v3YR20pzMKDQX7O-GtsU6wSWkp1WYrR4eqM).

## Etapa 1: criar um repositório no GitHub

Faça login na sua conta do GitHub, crie um novo repositório (público ou privado) e defina um nome para ele. No repositório, crie um arquivo `app.js` e cole o seguinte código:

```
// Import Express.js
const express = require('express');

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set port and verify_token
const port = process.env.PORT || 3000;
const verifyToken = process.env.VERIFY_TOKEN;

// Route for GET requests
app.get('/', (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WEBHOOK VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});

// Route for POST requests
app.post('/', (req, res) => {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log(`\n\nWebhook received ${timestamp}\n`);
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).end();
});

// Start the server
app.listen(port, () => {
  console.log(`\nListening on port ${port}\n`);
});
```

## Etapa 2: implementar um app Node Express no Render

Siga as instruções do Render para [implementar um app Node Express](https://l.facebook.com/l.php?u=https%3A%2F%2Frender.com%2Fdocs%2Fdeploy-node-express-app&h=AT2Ntxvyam76tk97XGFFzy9HLUT84BSwYpj5xv1eRNl6UUtc5spedCIuK7wnpexVlFzkOProwCM1LNJKfY_e0GZRqFw275yd10OJdl6LzhIYLUHXNzzUaUs5v3YR20pzMKDQX7O-GtsU6wSWkp1WYrR4eqM), com estas diferenças:

-   Pular a etapa 1-   Use estas configurações na etapa 3:
    -   Comando para criação: `npm install express`-   Comando para iniciar: `node app.js`-   Na seção **Variáveis de ambiente**, adicione a variável `VERIFY_TOKEN` e defina-a como uma string da sua escolha (por exemplo, `vibecode`).

Quando terminar, clique no botão **Implantar seu serviço da web**. Isso direcionará você para o registro do app, que mostrará a criação do app, o que pode levar alguns minutos. O processo foi finalizado quando a mensagem "Your service is live" (O serviço está ativo) aparecer no registro.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/518314752_779138407775567_4233589617658404934_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=kUBECCdh7I0Q7kNvwHQ_awX&_nc_oc=AdmyXGVgugXorjE4ToQZT0fc5VfXqezVUyI0TkI9BuqPJD9gJMkKi4wmzfRySB6AaUQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=1tBHYu7yNKe8Qa2piefAPA&oh=00_Afl0yiCz5Qey8yDvxLq-IQl95LK4W4K7Bn8WhVyszZ1Q2w&oe=69612205)

Copie a URL do seu app de webhook de teste implantado, que é exibida na parte superior da página, sob o nome do seu repositório no GitHub. (Se você visualizar a URL, obterá um erro 403, que é esperado).

## Etapa 3: adicionar a URL do seu app de webhook de teste ao seu app da Meta

Abra uma nova janela/aba e vá até o painel (Meta) [Painel de Apps](/apps) > **WhatsApp** > **Webhooks** > **Configuração**.

Cole a URL do seu app de webhook de teste no campo **URL de retorno de chamada** e adicione a string da variável de ambiente `VERIFY_TOKEN` que você definiu anteriormente ao campo **Verificar token**. Depois, clique em **Verificar e salvar**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/518348561_1679202599393717_3427225193188619311_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=o7BNWzoTr5YQ7kNvwEZxO5O&_nc_oc=AdnZk7VdcD1BldTOV9Kl4tjVctoB4a_SAzA9iO5_4jZuVPj7DKtTL6OhmkJ0-LwaTAA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=1tBHYu7yNKe8Qa2piefAPA&oh=00_AfmvONmBANYcnLoW-e6IdJIZ2t4eCCYACIFf0scv_tSD_w&oe=696119B0)

Se a verificação for bem-sucedida, o painel de apps da Meta será atualizado e exibirá uma lista de campos de webhook que você pode assinar.

_Assine o campo de webhook **messages** caso ainda não tenha feito isso._

Além disso, no registro do app Render, a mensagem "WEBHOOK VERIFIED" indica que a URL do seu app de webhook de teste foi verificada com sucesso.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/516871315_2146397049169598_3394446764023076795_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=UHtj-a6qdjkQ7kNvwEoNwv_&_nc_oc=AdmK5_oaKWhp23OEvXUdcpj3qwuA9ux2fh9qmh_uw51_I1-fOSothHvJ32A4q8Du2Eg&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=1tBHYu7yNKe8Qa2piefAPA&oh=00_Afk-PhwtKGX3w3iHfl3pGE4BEyISURlgamoZ7HTiDBpCxQ&oe=69610A10)

## Etapa 4: enviar uma mensagem de teste

De volta ao painel **Configuração** do app da Meta, role a tela para baixo até o campo de webhook **messages** e assine o campo, caso ainda não o tenha feito. Depois, clique no link **Testar**.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/518357131_2083466912058941_6508814785021877118_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=rjW-HkvgcP0Q7kNvwHjT0sL&_nc_oc=AdnK8WzbzrQAyM77lH21C8DDze6EzITkSUYe7t49KgAilh8CMggi-VUPdsNCz37pvFs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=1tBHYu7yNKe8Qa2piefAPA&oh=00_Afk_7llNrNQXhnreyT4GTUG9bl9rv2i9FEo6sbHHDNctsg&oe=696117CB)

Isso enviará uma mensagem de teste para seu app de webhook de teste. Confirme se a mensagem "Webhook received" (Webhook recebido) aparece no log do Render, seguida de uma carga JSON de teste:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/516488905_709538035232698_4800340255912767794_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=0HMe_k8C8N8Q7kNvwGgGCmp&_nc_oc=AdnOeOEHkWqdYYbMvpZ1OG-a3mJXpkbh-J9IqWhuFIiNJqdscgrShF-6O25QsjOT_R0&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=1tBHYu7yNKe8Qa2piefAPA&oh=00_Afn2DitQqEYChyoo05Hh_B8I4cYxAO75u_r9IwT5GxK8Ow&oe=69613B01)

## Solução de problemas

Se o webhook de teste **messages** não aparecer no registro do painel do app Render:

-   Verifique se você adicionou com sucesso a URL do seu app de webhook de teste ao seu app da Meta (etapa 3).-   Verifique se o app assina o campo de webhook **messages**.-   Verifique se você está enviando um webhook de teste **messages**. Alguns webhooks de teste funcionam apenas quando o app está no modo publicado, enquanto outros funcionam apenas no modo de desenvolvimento (os webhooks de teste **messages** funcionam em ambos os modos).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)