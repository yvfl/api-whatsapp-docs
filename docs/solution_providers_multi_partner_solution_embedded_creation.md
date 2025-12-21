<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solution-embedded-creation -->
<!-- Scraped: 2025-12-20T17:51:21.228Z -->

# Solução multiparceiros – Criação incorporada

Updated: 4 de nov de 2025

As [soluções multiparceiros](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) (MPS) permitem que parceiros de soluções e provedores de tecnologia gerenciem conjuntamente os ativos do WhatsApp dos clientes para oferecer a eles serviços de mensagens da plataforma.

Caso você seja um parceiro de soluções, em vez de usar o Painel de Apps para criar uma MPS, faça isso usando um trecho de JavaScript e um botão HTML que pode ser incorporado ao seu site. Os Provedores de Tecnologia que quiserem fazer uma parceria com você poderão usar o botão para conceder ao seu app permissão para gerenciar soluções para um ou mais dos apps deles, o que você pode fazer usando uma série de solicitações de API.

## Fluxo

Os Provedores de Tecnologia que visitarem seu site e clicarem no botão de criação de solução incorporada deverão fazer a autenticação. Depois disso, uma interface será apresentada para que eles escolham um app existente:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/458542138_1146317889773905_7397800002017796139_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=IPNXvM8n354Q7kNvwF057XS&_nc_oc=AdktFm561ZSlDrqipCaWNXN7VqFFN3DN78ZZQCapLQ46lW62JjwJkvewyC5z0gZxdE0&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=kWoJgDCChm7Pq9cG7I9aMw&oh=00_AfnlKgHVVspkPFaYP35dd7Bd09LvUKz7bnkj5bVRqRUcLA&oe=69611F3C)

Depois de escolher um app, é possível analisar e confirmar que será concedida ao seu app a permissão para gerenciar as soluções multiparceiros.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/458977093_1267404221307200_5854548995664421217_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=sJu1CVQxVZMQ7kNvwFQbN25&_nc_oc=AdnkUAmhbY2sKEi12QI0i2ugdlgFOG7XHGgss8nuO5FlzizdI5xTdz7ogNGhbj2GlQE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=kWoJgDCChm7Pq9cG7I9aMw&oh=00_AflYqdPBsnnVTFHqKCEvmPhYp2WQKxw9msildVGTYMA2iw&oe=6961332B)

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/458647670_1843654972790451_9197042182528031487_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=P2K2TbSQhiEQ7kNvwFIJYqp&_nc_oc=Adn0L3gjE18v1UB1fNZ_XHq-vFx09QGiDKrcX6B_XrQT_KW9q7ehYdX9hRx-cXk8y18&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=kWoJgDCChm7Pq9cG7I9aMw&oh=00_AfkKNFSuEb09e6GyhfpiEj3_aBXnkklBKhP3EmozxyWSWA&oe=69613E3B)

Depois que o Provedor de Tecnologia ignorar a interface, um token de acesso do usuário será gerado e retornado para o fluxo, onde você poderá capturá-lo. Dessa forma, você pode usar o token em uma série de chamadas à API para obter as identificações dos apps escolhidos pelo Provedor de Tecnologia, bem como criar e aceitar uma solução.

## Requisitos

-   O Login do Facebook para Empresas deve ser [configurado no seu app](/documentation/business-messaging/whatsapp/embedded-signup/implementation#step-2--create-a-facebook-login-for-business-configuration), com **URIs válidos de redirecionamento de OAuth** e **domínios permitidos para o SDK do JavaScript** definidos. Você já deve ter definido esses valores ao configurar o Cadastro incorporado.-   Seu app deve passar pelo processo de análise e receber aprovação para acesso avançado à permissão **manage\_app\_solution**.

## Botão de criação incorporada

### Etapa 1: conceder permissão ao app

Acesse o Meta Business Suite e use seu usuário do sistema para conceder ao app a permissão **manage\_app\_solution**.

-   Entre em [business.facebook.com](https://business.facebook.com).-   Use o menu suspenso do portfólio empresarial à esquerda para localizar seu portfólio empresarial e clique no ícone de engrenagem (para configurações).-   Navegue até **Usuários** > **Usuários do sistema**.-   Clique no usuário do sistema que tem acesso a ativos de negócios no seu app e conta do WhatsApp Business.-   Clique no botão **Gerar token**.-   Selecione seu app.-   Defina uma data de validade para o token.-   Selecione a permissão **manage\_app\_solution**.-   Gere um token.

Use esse token ao [aceitar](#step-4--accept-the-solution) todas as soluções multiparceiros criadas para seus parceiros.

### Etapa 2: adicionar o código do botão incorporado

Adicione o seguinte código ao seu site ou portal ou onde você planeja direcionar os Provedores de Tecnologia que trabalharão com você como parte de uma MPS. Substitua `<SOLUTION_PARTNER_APP_ID>` pela identificação do seu app.

```
<!-- Load JavaScript SDK asynchronously -->
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script><script>
  // Configure JavaScript SDK
  window.fbAsyncInit = function() {
    FB.init({
      appId: "<SOLUTION_PARTNER_APP_ID>", // Replace with your app ID
      cookie: true,
      xfbml: true,
      version: "v20.0"
    });
  };

  // Launch MPS creation flow
  function launchSolutionCreationFlow() {
    FB.login(
      function (response) {
        if (response.authResponse) {
          const accessToken = response.authResponse.accessToken;
          console.log(accessToken); // Replace with your code that captures access token
        } else {
          console.log("User failed to authorize"); // Replace with your code that logs auth failure
        }
      },
      {
        scope: "manage_app_solution"
      }
    );
  }
</script><button onclick="launchSolutionCreationFlow()" style="background-color: #1877f2; border: 0; border-radius: 4px; color: #fff; cursor: pointer; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; height: 40px; padding: 0 24px;">Launch Solution Creation</button>
```

Direcione os parceiros Provedores de Tecnologia em potencial a essa localização e instrua-os a concluir o fluxo. Informe ao cliente que a conclusão do fluxo não cria a solução (é preciso fazer algumas chamadas à API) e que você fornecerá a identificação da solução assim que ela for criada.

## Criação de soluções

### Etapa 1: capturar o token de usuário

Sempre que um Provedor de Tecnologia usar o botão de criação de solução incorporada e concluir o fluxo, o fluxo retornará um objeto `authResponse` (`response.authResponse`) que tem uma propriedade `accessToken`:

```
{
  status: 'connected',
  authResponse: {
    accessToken: '<USER_ACCESS_TOKEN>',
    expiresIn:'<TOKEN_EXPIRATION_TIMESTAMP>',
    reauthorize_required_in:'<SECONDS_UNTIL_REAUTH_REQUIRED>',
    signedRequest:'<SIGNED_PARAMETER>',
    userID:'<USER_ID>'
  }
}
```

Capture o valor da propriedade `accessToken`. Este é o token de acesso do usuário do Provedor de Tecnologia, que será necessário na próxima etapa.

### Etapa 2: obter detalhes do app

Use o token de acesso do usuário do Provedor de Tecnologia e o ponto de extremidade **[GET /me/assigned\_applications](/docs/graph-api/reference/user/assigned_applications)** para obter uma lista de identificações do app que o Provedor de Tecnologia selecionou quando concluiu o fluxo.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v20.0/me/application_details' \-H 'Authorization: Bearer EAAJB'
```

#### Exemplo de resposta

Exemplo de resposta de um Provedor de Tecnologia que selecionou um único app no fluxo.

```
{  "data": [    {      "link": "www.mediamonsoon.com",      "name": "media_monsoon_prod",      "id": "634974688087057"    }  ]}
```

Cada objeto na resposta descreve um app que o Provedor de Tecnologia selecionou ao concluir o fluxo. Capture o valor da propriedade `id` de cada app para a próxima etapa.

### Etapa 3: criar uma solução para o Provedor de Tecnologia

Use o token de acesso do Provedor de Tecnologia e a identificação do app da etapa anterior para fazer uma solicitação ao ponto de extremidade **[POST/<APP\_ID>/whatsapp\_business\_solution](/documentation/business-messaging/whatsapp/reference/application/solution-creation-api#Creating)**.

Repita essa solicitação para cada identificação de app retornada na etapa anterior.

#### Sintaxe da solicitação

```
POST /<APP_ID>/whatsapp_business_solution
```

```
{
  "owner_permissions": ["MESSAGING"],
  "partner_app_id": "<SOLUTION_PARTNER_APP_ID>",
  "partner_permissions": ["MESSAGING"],
  "solution_name": "<SOLUTION_NAME>"
}
```

-   `<SOLUTION_PARTNER_APP_ID>` – identificação do app.-   `<SOLUTION_NAME>` – nome da solução. Esse nome aparecerá no Painel de Apps para você e para o Provedor de Tecnologia. Por isso, ele deve ser único e diferente de outras soluções que vocês possam iniciar ou aceitar mais tarde.

#### Resposta

Em caso de sucesso, a API criará uma solução e associará seu app e o app do Provedor de Tecnologia a ela.

```
{
  "solution_id": "<SOLUTION_ID>"
}
```

Capture o valor `solution_id`. Esta é a identificação da solução, que será necessária na próxima etapa.

### Etapa 4: aceitar a solução

Use o token de acesso do usuário do sistema da etapa [Conceder permissão ao app](#step-1--grant-permission-to-app) e a identificação da solução para fazer uma solicitação ao ponto de extremidade **[POST/<SOLUTION\_ID>/accept](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-accept-api#Creating)** para qualquer solução criada por você para provedores de tecnologia.

#### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v20.0/795033096057724/accept' \-H 'Authorization: Bearer EAAAT...
```

#### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

Depois de aceitar a solução, informe ao Parceiro de Tecnologia que a solução foi criada com sucesso e forneça as identificações criadas e aceitas.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)