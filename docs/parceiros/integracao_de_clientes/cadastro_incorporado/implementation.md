<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation -->
<!-- Scraped: 2026-03-10T21:41:41.257Z -->

# Implementação

Updated: 20 de fev de 2026

Este documento explica como implementar o Cadastro Incorporado v4 e capturar os dados gerados para [integrar clientes comerciais](#onboarding-business-customers) à Plataforma do WhatsApp Business.

## Antes de começar

-   É preciso ser um [Parceiro de Soluções](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-solution-partners) ou [Provedor de Tecnologia](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers).-   Caso os clientes comerciais usem seu app para enviar e receber mensagens, você já deve saber como usar a API para fazer isso por meio da sua própria conta do WhatsApp Business e números de telefone comercial. Você também deve saber como criar e gerenciar modelos e ter um ponto de extremidade de retorno de ligação de webhooks devidamente configurado para processar webhooks.-   É preciso assinar o webhook [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update), já que ele é disparado quando um cliente conclui com sucesso o fluxo de Cadastro Incorporado e contém as informações da empresa necessárias para você.-   Caso você seja um Parceiro de Soluções, já deve ter uma [linha de crédito⁠](https://www.facebook.com/business/help/1684730811624773?id=2129163877102343).-   O servidor que hospeda o Cadastro Incorporado deve ter um certificado SSL válido.

## Etapa 1: adicionar domínios permitidos

Carregue o app no [Painel de Apps](/apps) e acesse **Login do Facebook para Empresas** > **Configurações** > **Configurações de OAuth do cliente**:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/465708937_913631386932225_3931496644600528212_n.png?stp=dst-webp&_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=PazcP-cOPLgQ7kNvwFJmhKX&_nc_oc=AdkeX5Y1QZamacIyJlbAmyYR5xH0EWJkS8jZp6jBwYmCLu9YjqWd1miheFlyoCGtxtE&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=V8LQsQsigcnZ_sqds-G4Pw&_nc_ss=8&oh=00_Afz3mPM-ay9YC2sVckvQmwKMc64vXII_YjracSeJIrQZpw&oe=69CAC94C)

Defina como **Sim** as seguintes opções:

-   **Login do cliente com OAuth**-   **Login do OAuth da web**-   **Aplicar HTTPS**-   **Login com OAuth via navegador incorporado**-   **usar o modo restrito para URIs de redirecionamento**-   **Login com o SDK do JavaScript**

O Cadastro Incorporado depende do SDK do JavaScript. Quando um cliente empresarial concluir o flow de Cadastro Incorporado, a identificação da conta do WhatsApp Business do cliente, a identificação do número de telefone comercial e um código de token que pode ser trocado serão retornados para a janela que gerou o flow, mas apenas se o domínio da página que gerou o flow estiver listado nos campos **Domínios permitidos** e **URIs de redirecionamento de OAuth válidos**.

Nesses campos, adicione todos os domínios em que você planeja hospedar o Cadastro Incorporado, incluindo domínios de desenvolvimento em que testará o flow. Apenas domínios que habilitaram **HTTPS** são compatíveis.

## Etapa 2: criar uma configuração do Login do Facebook para Empresas

Uma configuração do Login do Facebook para Empresas define quais permissões serão pedidas e quais informações adicionais serão coletadas dos clientes empresariais que acessarem o Cadastro Incorporado.

Navegue até **Login do Facebook para Empresas** > **Configurações**:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/518383927_1808192009811748_4848992549354412342_n.png?stp=dst-webp&_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=odTnqL1yt-YQ7kNvwFSOgfF&_nc_oc=AdknmEjQXHqJ_Dxw_moz8wPSjIH8xdlqsxVYLOP269_oPBw0O8v6T2Qm29uiogu2pXk&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=V8LQsQsigcnZ_sqds-G4Pw&_nc_ss=8&oh=00_AfxKE59rwXL6csio70pbakAAe4-8zJLeGTp6AeZ360Tapg&oe=69CAC9D5)

Clique no botão **Criar a partir de modelo** e crie uma configuração a partir do modelo **Configuração do cadastro incorporado do WhatsApp com token de expiração em 60 dias**. Isso gerará uma configuração para as permissões e os níveis de acesso mais usados.

Como alternativa, você pode criar uma configuração personalizada. Para isso, no painel **Configurações**, clique no botão **Criar configuração** e forneça um nome que ajudará você a diferenciar a configuração personalizada de outras que possa criar no futuro. Ao concluir o flow, selecione a variação de login do **Cadastro Incorporado do WhatsApp**:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/575115554_1146352833831127_890815455867347172_n.png?stp=dst-webp&_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=6gXKsJKiptYQ7kNvwGPhAS7&_nc_oc=Adkee2zr_OX-C_PTwZUEm35_0AtR_qOaUnV-dP44tjAKfOawNvzo9X0r7A3R1PUpqZc&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=V8LQsQsigcnZ_sqds-G4Pw&_nc_ss=8&oh=00_AfwZPjnbnoIolBQRJov49zgpu1RITYNrPBG3xClQ_ypQfA&oe=69CAB6C8)

Selecione os produtos que você quer integrar para essa configuração.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/558628910_1295959538460722_1574440641425438685_n.png?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=vQ4ILUTvhe4Q7kNvwFFlFem&_nc_oc=Adk0hr_xd-TNdfvk0PFBqO8rN1XlzVGrS0UMUI6ibspznkT5CJhcNTkOJGqIwpRACQA&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=V8LQsQsigcnZ_sqds-G4Pw&_nc_ss=8&oh=00_Afw4z9nqUk7DvQqtgyqD-f_F1q4pSIfhma6FgFE0LIX_5g&oe=69CAE2A8)

Ao escolher ativos e permissões, selecione apenas aqueles que você realmente precisará dos seus clientes empresariais. Os ativos já selecionados são adicionados por padrão.

Por exemplo, se você selecionar o ativo **Catálogos** sem necessidade de acesso aos catálogos dos clientes, eles provavelmente abandonarão o flow na tela de seleção de catálogo e pedirão esclarecimentos.

Ao concluir o flow de configuração, capture a identificação da configuração, já que você precisará dela na próxima etapa.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/557160873_831044982939103_494958342584617069_n.png?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=uGE2Qj0_VTEQ7kNvwGxoMDR&_nc_oc=AdmCk6qlUzWxYwnDt4Kuy8YSOKvSfqs53-F-HQV7-UdrPcskjolA07PVFoi4mEeG_5s&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=V8LQsQsigcnZ_sqds-G4Pw&_nc_ss=8&oh=00_AfyMKbXapVwuOiCGwyCfzC3EB_3Q5IZx1WbFxPOJM78qXA&oe=69CABF3C)

## Etapa 3: adicionar o Cadastro Incorporado ao seu site

Adicione o seguinte código HTML e JavaScript ao seu site. Esse é o código completo necessário para implementar o Cadastro Incorporado. Cada parte do código será explicada em detalhes abaixo.

```
<!-- SDK loading -->
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script><script>
  // SDK initialization
  window.fbAsyncInit = function() {
    FB.init({
      appId: '<APP_ID>', // your app ID goes here
      autoLogAppEvents: true,
      xfbml: true,
      version: '<GRAPH_API_VERSION>' // Graph API version goes here
    });
  };

  // Session logging message event listener
  window.addEventListener('message', (event) => {
    if (!event.origin.endsWith('facebook.com')) return;
    try {
      const data = JSON.parse(event.data);
      if (data.type === 'WA_EMBEDDED_SIGNUP') {
        console.log('message event: ', data); // remove after testing
        // your code goes here
      }
    } catch {
      console.log('message event: ', event.data); // remove after testing
      // your code goes here
    }
  });

  // Response callback
  const fbLoginCallback = (response) => {
    if (response.authResponse) {
      const code = response.authResponse.code;
      console.log('response: ', code); // remove after testing
      // your code goes here
    } else {
      console.log('response: ', response); // remove after testing
      // your code goes here
    }
  }

  // Launch method and callback registration
  const launchWhatsAppSignup = () => {
    FB.login(fbLoginCallback, {
      config_id: '<CONFIGURATION_ID>', // your configuration ID goes here
      response_type: 'code',
      override_default_response_type: true,
      extras: {
        setup: {},
      }
    });
  }
</script><!-- Launch button  --><button onclick="launchWhatsAppSignup()" style="background-color: #1877f2; border: 0; border-radius: 4px; color: #fff; cursor: pointer; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; height: 40px; padding: 0 24px;">Login with Facebook</button>
```

### Carregamento do SDK

Essa parte do código carrega o SDK do Facebook para JavaScript de forma assíncrona:

```
<!-- SDK loading --><script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
```

### Inicialização do SDK

Essa parte do código inicializa o SDK. Adicione a identificação do app e a versão mais recente da Graph API neste local.

```
// SDK initialization
window.fbAsyncInit = function() {
  FB.init({
    appId: '<APP_ID>', // your app ID goes here
    autoLogAppEvents: true,
    xfbml: true,
    version: '<GRAPH_API_VERSION>' // Graph API version here
  });
};
```

Substitua os espaços reservados a seguir pelos seus próprios valores.

Espaço reservado

Descrição

Valor de exemplo

`<APP_ID>`

**Obrigatório.**

A identificação do app. Essa informação é exibida na parte superior do Painel de Apps.

`21202248997039`

`<GRAPH_API_VERSION>`

**Obrigatório.**

Versão da Graph API. Indica a versão da Graph API que será chamada se você estiver usando os métodos do SDK para realizar chamadas de API.

No contexto do Cadastro Incorporado, você não dependerá dos métodos do SDK para realizar chamadas de API. Por isso, recomendamos que configure a versão mais recente da API:

v25.0

v25.0

### Ouvinte de eventos de mensagem de registro da sessão

Essa parte do código cria um ouvinte de eventos de mensagem que captura as seguintes informações essenciais:

-   As identificações de ativos recém-geradas do cliente comercial, se o flow foi concluído com sucesso-   O nome da tela que foi abandonada, se o flow tiver sido abandonado-   Uma identificação de erro, caso o usuário tenha encontrado um erro e usado o flow para denunciá-lo

```
// Session logging message event listener
window.addEventListener('message', (event) => {
  if (!event.origin.endsWith(‘facebook.com’)) return;
  try {
    const data = JSON.parse(event.data);
    if (data.type === 'WA_EMBEDDED_SIGNUP') {
      console.log('message event: ', data); // remove after testing
      // your code goes here
    }
  } catch {
    console.log('message event: ', event.data); // remove after testing
    // your code goes here
  }
});
```

Essas informações serão enviadas em um objeto de evento de mensagem para a janela que gerou o flow e serão atribuídas à constante de dados. **Adicione seu próprio código personalizado à declaração try-catch que pode enviar esse objeto para seu servidor.** A estrutura do objeto variará com base na conclusão do flow, abandono ou relatório de erros, conforme descrito abaixo.

**Estrutura de conclusão bem-sucedida do fluxo:**

Na tela final, as ações de clicar em **Concluir** e fechar o pop-up (por exemplo, clicando no botão X) são consideradas uma integração bem-sucedida. Nas duas situações, o código de token trocável e o objeto de informações da sessão que contém os IDs de ativos do cliente serão retornados. Sair da tela final não é considerado um evento de cancelamento.

```
{
  data: {
    phone_number_id: '<CUSTOMER_BUSINESS_PHONE_NUMBER_ID>',
    waba_id: '<CUSTOMER_WABA_ID>',
    business_id: '<CUSTOMER_BUSINESS_PORTFOLIO_ID>'
    ad_account_ids?: ['<CUSTOMER_AD_ACCOUNT_ID_1>', '<CUSTOMER_AD_ACCOUNT_ID_2>'],
    page_ids?: ['<CUSTOMER_PAGE_ID_1>', '<CUSTOMER_PAGE_ID_2>'],
    dataset_ids?: ['<CUSTOMER_DATASET_ID_1>', '<CUSTOMER_DATASET_ID_2>'],
  },
  type: 'WA_EMBEDDED_SIGNUP',
  event: '<FLOW_FINISH_TYPE>',
}
```

Espaço reservado

Descrição

Valor de exemplo

`<CUSTOMER_BUSINESS_PHONE_NUMBER_ID>`

Identificação do número de telefone comercial do cliente

`106540352242922`

`<CUSTOMER_WABA_ID>`

Identificação da conta do WhatsApp Business do cliente comercial.

`524126980791429`

`<CUSTOMER_BUSINESS_PORTFOLIO_ID>`

A identificação do portfólio empresarial do cliente corporativo.

`2729063490586005`

`<CUSTOMER_AD_ACCOUNT_ID>`

A identificação da conta de anúncios do cliente comercial

`4052175343162067`

`<CUSTOMER_PAGE_ID>`

A identificação da Página do Facebook do cliente comercial

`1791141545170328`

`<CUSTOMER_DATASET_ID>`

A identificação do conjunto de dados do cliente comercial

`524126980791429`

`<FLOW_FINISH_TYPE>`

Indica que o cliente concluiu o flow com sucesso.

**Valores possíveis:**

-   `FINISH`: indica a conclusão bem-sucedida do [flow da API de Nuvem](/documentation/business-messaging/whatsapp/embedded-signup/default-flow).-   `FINISH_ONLY_WABA`: indica que o usuário concluiu o flow [sem um número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition).-   `FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING`: indica que o usuário concluiu o flow [com um número do WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

`FINISH`

Estrutura de flow abandonado:

```
{
  data: {
    current_step: '<CURRENT_STEP>',
  },
  type: 'WA_EMBEDDED_SIGNUP',
  event: 'CANCEL',
}
```

Espaço reservado

Descrição

Valor de exemplo

`<CURRENT_STEP>`

Indica qual tela o cliente comercial estava visualizando quando abandonou o flow. Consulte [Erros de flow de Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/errors) para ver uma descrição de cada etapa.

`PHONE_NUMBER_SETUP`

Erros denunciados pelo usuário

```
{
  data: {
    error_message: '<ERROR_MESSAGE>',
    error_id: '<ERROR_ID>',
    session_id: '<SESSION_ID>',
    timestamp: '<TIMESTAMP>',
  },
  type: 'WA_EMBEDDED_SIGNUP',
  event: 'CANCEL',
}
```

Espaço reservado

Descrição

Valor de exemplo

`<ERROR_MESSAGE>`

O texto de descrição do erro exibido para o cliente empresarial no flow de Cadastro Incorporado. Consulte [Erros de flow de cadastro incorporado](/documentation/business-messaging/whatsapp/embedded-signup/errors) para ver uma lista de erros comuns.

Seu nome verificado não segue as diretrizes do WhatsApp. Edite esse nome e tente novamente.

`<ERROR_ID>`

A identificação do erro. Inclua esse número se entrar em contato com o suporte.

`524126`

`<SESSION_ID>`

A identificação única da sessão gerada pelo Cadastro Incorporado. Inclua essa identificação se entrar em contato com o suporte.

`f34b51dab5e0498`

`<TIMESTAMP>`

Registro de data e hora UNIX que indica quando o cliente empresarial usou o Cadastro Incorporado para relatar o erro. Inclua esse valor se entrar em contato com o suporte.

`1746041036`

Analise esse objeto no seu servidor para extrair e capturar a identificação de número de telefone do cliente e a identificação da conta do WhatsApp Business ou para determinar qual tela foi abandonada. Confira [Telas de fluxo abandonadas](/documentation/business-messaging/whatsapp/embedded-signup/errors#abandoned-flow-screens) para ver uma lista de valores `<CURRENT_STEP>` possíveis e as telas correspondentes.

A declaração try-catch no código acima tem duas declarações que podem ser usadas para fins de teste:

```
console.log('message event: ', data); // remove after testing

console.log('message event: ', event.data); // remove after testing
```

Essas declarações apenas despejam o número de telefone e as identificações da conta do WhatsApp Business retornados ou a string de tela abandonada no console do JavaScript. É possível deixar esse código e manter o console aberto para ver facilmente o que é retornado quando você testa o flow. No entanto, remova-o quando terminar o teste.

### Retorno de ligação de resposta

Quando um cliente empresarial concluir o flow de Cadastro Incorporado, enviaremos um código de token trocável em uma [resposta JavaScript⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FResponse&h=AT4MHFL2Lf1uqCBa2IimsEZFZ1Pgst-nfcZAxPhRt9NKQB5-huqSDEfQf5em02_H0w8aQN77zQG4Cfg4k-hukbr388q79ELl-JjUeKnL79FwLGxfTVAGqGSg1SdgnVi_5z8u0zyXYu3JAXDDHDUCdvCiEkM) para a janela que gerou o flow.

```
// Response callback
const fbLoginCallback = (response) => {
  if (response.authResponse) {
    const code = response.authResponse.code;
    console.log('response: ', code); // remove after testing
    // your code goes here
  } else {
    console.log('response: ', response); // remove after testing
    // your code goes here
  }
}
```

A função de retorno de ligação atribui o código do token trocável a uma constante `code`.

**Adicione um código personalizado à declaração if-else que envia esse código ao seu servidor** para que você possa trocá-lo pelo token comercial do cliente quando [integrar o cliente comercial](#onboarding-business-customers).

O código do token trocável tem um tempo de validade de 30 segundos. Por isso, faça a troca pelo token comercial do cliente antes que o código expire. Se você fizer o teste e apenas fizer um dump da resposta no seu console do JavaScript para, em seguida, trocar o código manualmente usando outro app, como o Postman, ou seu terminal com cURL, recomendamos que configure sua consulta de troca de token antes de começar a testar.

A declaração if-else no código acima tem duas declarações que podem ser usadas para fins de teste:

```
console.log('response: ', code); // remove after testing

console.log('response: ', response); // remove after testing
```

Essas declarações apenas despejam o código ou a resposta bruta no console do JavaScript. É possível deixar esse código e manter o console aberto para ver facilmente o que é retornado quando você testa o flow. No entanto, remova-o quando terminar o teste.

### Método de inicialização e registro de retorno de ligação

Essa parte do código define um método que pode ser chamado por um evento `onclick` que registra o retorno de chamada da etapa anterior e inicia o fluxo de Cadastro Incorporado.

Adicione a identificação da configuração neste local.

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '<CONFIGURATION_ID>', // your configuration ID goes here
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {},
    }
  });
}
```

### Botão de iniciar

Essa parte do código define um botão que chama o método de inicialização da etapa anterior quando clicado pelo cliente empresarial.

```
<!-- Launch button --><button onclick="launchWhatsAppSignup()" style="background-color: #1877f2; border: 0; border-radius: 4px; color: #fff; cursor: pointer; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; height: 40px; padding: 0 24px;">Login with Facebook</button>
```

## Testes

Depois de concluir todas as etapas de implementação acima, você poderá testar o flow simulando um cliente empresarial com suas próprias credenciais da Meta. Qualquer pessoa adicionada como administrador ou desenvolvedor no seu app (no painel **Painel de Apps** > **Funções do app** > **Funções**) também poderá começar a testar o flow usando as próprias credenciais da Meta.

## Como integrar clientes comerciais

O Cadastro Incorporado gera ativos para os clientes da sua empresa e concede acesso a esses ativos para seu app. No entanto, será necessário fazer uma série de chamadas de API para integrar completamente os novos clientes que concluíram o flow.

As chamadas de API necessárias para integrar clientes variam entre Parceiros de Soluções e Provedores/Parceiros de Tecnologia.

-   [Como integrar clientes como Parceiro de Soluções](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner)-   [Como integrar clientes como Provedor de Tecnologia](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)