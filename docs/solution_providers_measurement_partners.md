<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/measurement-partners -->
<!-- Scraped: 2025-12-20T17:47:43.187Z -->

# Parceiros de Mensuração

Updated: 14 de nov de 2025

O Parceiro de Mensuração é uma empresa terceirizada que ajuda outras empresas a mensurar a eficácia das campanhas de marketing na nossa plataforma.

Os Parceiros de Mensuração recebem acesso somente leitura aos dados de análise e webhooks da conta do WhatsApp Business (WABA, pelas iniciais em inglês). Especificamente, eles podem visualizar números de telefone, modelos de mensagem e mensagens recebidas, bem como acessar dados de análise da WABA.

Para compartilhar dados de análise com um Parceiro de Mensuração, a empresa já deve ter uma WABA. Os Parceiros de Mensuração não podem criar WABAs nem enviar mensagens em nome de clientes.

## Visão geral do fluxo de integração

Siga estas etapas para fazer a integração como Parceiro de Mensuração:

-   [Conclua a integração do Provedor de Tecnologia.](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers)-   Crie o botão Entrar do Facebook usando as instruções do modelo ES do Parceiro de Mensuração abaixo-   Incorpore o botão Entrar no Facebook no seu site

## Como criar um botão Entrar no Facebook usando o modelo ES do Parceiro de Métrica

Siga as etapas abaixo para criar o botão Entrar no Facebook que mostrará o fluxo Cadastro incorporado do Parceiro de Mensuração aos seus clientes.

## Etapa 1: carregar o SDK do Facebook para JavaScript

Veja instruções para carregar a versão básica do SDK do Facebook para JavaScript com as opções configuradas como os padrões mais comuns em [Configuração básica](/docs/javascript/quickstart#loading).

A função `fbAsyncInit` deve ser anexada ao objeto `window` antes da linha de código que carrega o SDK do JavaScript, porque o SDK faz uma chamada a essa função para configurar as informações do Login do Facebook.

A configuração usa os seguintes parâmetros:

-   `appId`: ID do app da Meta.-   `cookie`: habilita cookies para permitir que o servidor acesse a sessão.-   `xfbml`: analisa os plugins sociais na página.-   `version`: a versão da Graph API a ser usada.

#### Exemplo

```
<script>
  window.fbAsyncInit = function () {
    // JavaScript SDK configuration and setup
    FB.init({
      appId:    '<i>facebook-app-id</i>', // Meta App ID
      cookie:   true, // enable cookies
      xfbml:    true, // parse social plugins on this page
      version:  'v24.0' //Graph API version
    });
  };
</script>
```

## Etapa 2: criar a configuração do Login do Facebook para Empresas

### Pré-requisitos

-   Você deve ter criado um app no Painel de Apps em [https://developers.facebook.com/](https://developers.facebook.com/).-   Adicione o produto **[Login do Facebook para Empresas](/docs/facebook-login/facebook-login-for-business)** ao seu app.-   Siga as [boas práticas](/docs/facebook-login/security#enablejssdk) sobre como definir as **Configurações de OAuth do cliente**, incluindo _URIs de redirecionamento de OAuth válidos_ e _Domínios permitidos para o SDK do JavaScript_.

### Processo

-   Em **Painel de Apps**, em **Login do Facebook para Empresas**, clique em **Modelos**-   Clique no botão **Usar modelo** para o modelo de **Parceiro de Mensuração do WhatsApp**.-   Como todos os detalhes de configuração do modelo foram definidos, clique em **Criar do modelo**-   Copie e mantenha a **identificação de configuração** e defina esse valor no script do botão Entrar no Facebook na próxima etapa.

## Etapa 3: configurar o Login do Facebook

O [Login do Facebook](/docs/facebook-login) permite que você coloque um botão no seu site ou portal para iniciar uma conexão com o Facebook. Para facilitar a integração, as empresas podem usar esse fluxo de login para associar os próprios perfis do Facebook à presença empresarial (por exemplo, o Gerenciador de Negócios).

Implemente o botão do Login do Facebook em um local escolhido por você (portal da plataforma, página de destino etc.) seguindo as instruções abaixo para disparar o OAuth do fluxo de Cadastro Incorporado.

Depois de carregar o SDK do JavaScript e iniciá-lo com as informações corretas, configure a função `FB.login()` para disparar o fluxo de Cadastro Incorporado.

Verifique se os seguintes itens estão incluídos:

-   A função de retorno de chamada `response`-   O parâmetro `config_id`-   O objeto `extras` com:
    -   o parâmetro `setup` para [dados de formulários preenchidos automaticamente](/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data).

#### Exemplo

```
<script>
  window.fbAsyncInit = function () {
    // JavaScript SDK configuration and setup
    FB.init({
      appId:    '<i>your-facebook-app-id</i>', // Facebook App ID
      cookie:   true, // enable cookies
      xfbml:    true, // parse social plugins on this page
      version:  'v24.0' //Graph API version
    });
  };

  // Load the JavaScript SDK asynchronously
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Facebook Login with JavaScript SDK
  function launchWhatsAppSignup() {
    // Conversion tracking code
    fbq && fbq('trackCustom', 'WhatsAppOnboardingStart', {appId: '<i>your-facebook-app-id</i>', feature: 'whatsapp_embedded_signup'});

    // Launch Facebook login
    FB.login(function (response) {
      if (response.authResponse) {
        const code = response.authResponse.code;
        // The returned code must be transmitted to your backend,
  // which will perform a server-to-server call from there to our servers for an access token
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {
      config_id: '<CONFIG_ID>', // configuration ID goes here
      response_type: 'code',    // must be set to 'code' for System User access token
      override_default_response_type: true, // when true, any response types passed in the "response_type" will take precedence over the default types
      extras: {
        setup: {
          ... // Prefilled data can go here
        }
      }
    });
  }
</script>
```

## Etapa 4: criar um botão Entrar

Crie um botão ou um link no seu site para iniciar o fluxo de Cadastro Incorporado. Use a função `onClick` para chamar `launchWhatsAppSignup()` configurada na [Etapa 3](#step-3--set-up-facebook-login).

#### Exemplo

```
<button onclick="launchWhatsAppSignup()" style="background-color: #1877f2; border: 0; border-radius: 4px; color: #fff; cursor: pointer; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; height: 40px; padding: 0 24px;">Login with Facebook</button>
```

## Incorporar o novo botão Entrar do Facebook

Copie o código do botão para a localização desejada no seu site.

## Como testar o fluxo Cadastro incorporado para Parceiros de Mensuração

-   Na barra lateral, em **WhatsApp**, clique em **Integrações ES** e role a tela para baixo até **Iniciar Cadastro Incorporado**.-   Em **Diálogo de Cadastro Incorporado**, escolha a configuração do seu Parceiro de Mensuração e clique em **Entrar com Facebook**.-   Siga as instruções para testar o fluxo de cadastro.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)