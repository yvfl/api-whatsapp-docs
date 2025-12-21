<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition -->
<!-- Scraped: 2025-12-20T17:49:22.705Z -->

# Inorar a tela de adição de número de telefone

Updated: 14 de nov de 2025

Este documento descreve como personalizar o Cadastro Incorporado para ignorar a [tela de adição do número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen) (mostrada abaixo) e a [tela de verificação do número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-verification-screen).

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/464076811_858112679765152_5952854678961541773_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=JKekqEgfu_8Q7kNvwFxLZrw&_nc_oc=Adl9ey0fZDI4FXLPhch7JzRYBUmWrv9ad-xq8J_ne-9MAZrvPyVKPfZbMUEA7cklZ9I&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=6rDiBc1AlGLCwEcMvEzcnw&oh=00_AflUFwaLmz7WYJYNHnlpGhn7Zxx2FZH459MuW8SeRfxU6g&oe=6961230E)

Se não quiser que seus clientes empresariais precisem inserir ou escolher um número de telefone comercial na tela de adição correspondente, você poderá personalizar o cadastro incorporado para ignorar essa tela. No entanto, depois que o cliente concluir o fluxo personalizado, você deverá [criar e registrar de forma programática o número de telefone comercial dele](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers) ou criar uma interface do usuário no seu app quepermita que isso seja feito.

## Habilitar o recurso

Para habilitar esse recurso, defina `featureType` como `only_waba_sharing` na parte de [método de inicialização e registro de retorno de chamada](/documentation/business-messaging/whatsapp/embedded-signup/implementation#launch-method-and-callback-registration) do código de Cadastro Incorporado:

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '<CONFIGURATION_ID>', // your configuration ID goes here
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {},
      featureType: 'only_waba_sharing', // set to only_waba_sharing
      sessionInfoVersion: '3',
    }
  });
}
```

Quando um cliente empresarial concluir o fluxo, o [evento de mensagem de registro da sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) terá `event` definido como `FINISH_ONLY_WABA`:

```
{
  data: {
    phone_number_id: "<CUSTOMER_BUSINESS_PHONE_NUMBER_ID>",
    waba_id: "<CUSTOMER_WABA_ID>"
  },
  type: "WA_EMBEDDED_SIGNUP",
  event: "FINISH_ONLY_WABA",
  version: 3
}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)