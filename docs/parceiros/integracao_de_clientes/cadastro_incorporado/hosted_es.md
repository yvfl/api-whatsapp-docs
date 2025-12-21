<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/hosted-es -->
<!-- Scraped: 2025-12-20T17:49:48.178Z -->

# Cadastro Incorporado Hospedado

Updated: 4 de nov de 2025

Se não quiser implementar o Cadastro incorporado adicionando um código JavaScript ao seu site ou portal do cliente, você poderá usar um link que, quando clicado, exibe uma página da web descrevendo as etapas de integração e um botão que inicia o fluxo de Cadastro incorporado:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/557247008_1487309905743315_2332288243528054136_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=f4sSdPXnL-4Q7kNvwG2zyt1&_nc_oc=AdnvH-I2ZJ-qgVIxMCQe_vCa18YZWDoKyswi0lpLMIoCl2T90LHvlgXWXfDSFjtXUjw&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=a5SvKTsl6BA7cgE4izPyrw&oh=00_AflzqJKxIHn2N36_-KAO8bUVY1BFIIXEzEzx50jmss7oMQ&oe=69611CCA)

## Limitações

O Cadastro incorporado hospedado ("ES hospedado") só pode ser usado para integrar clientes empresariais à API de Nuvem, e o fluxo não pode ser personalizado.

## Requisitos

-   Você deve concluir as etapas para se tornar um Parceiro de Soluções ou Provedor de Tecnologia.-   Se o app for de mensagens, será necessário enviar mensagens, gerenciar modelos e ter um ponto de extremidade de webhook de produção devidamente configurado.-   É preciso inscrever seu app no webhook [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update).-   Os Parceiros de Soluções devem ter uma linha de crédito.

Você também precisará do seguinte:

-   Seu [token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).-   A chave secreta do app.

## Etapa 1: criar uma configuração do Login do Facebook para Empresas

Se você ainda não tiver uma configuração do Login do Facebook para Empresas, crie uma. Uma configuração do Login do Facebook para Empresas define quais permissões serão solicitadas e quais informações adicionais serão coletadas dos clientes empresariais que acessarem o Cadastro incorporado.

Navegue até **Login do Facebook para Empresas** > **Configurações** e clique no botão **\+ Criar configuração** para acessar o fluxo de configuração.

Use um nome que ajude a diferenciar essa configuração de outras que você possa criar no futuro. Ao concluir o fluxo, selecione a variação de login do Cadastro incorporado do WhatsApp:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/556678416_1155934729723662_8909215200649973782_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=SU4fbF6M0rwQ7kNvwEbsizN&_nc_oc=AdnXP8FxrrgXTofcW3n82O4wfSSsf7QP5xTSQWR68mO75-V3-B5pUSZ0_gmZCWY7DNQ&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=a5SvKTsl6BA7cgE4izPyrw&oh=00_AfmeJ4YB4i8GnYzbuuySUAuibYZj_dmgUYOuPO7QVrXFBA&oe=69611368)

Ao escolher ativos e permissões, selecione apenas aqueles que você realmente precisará dos seus clientes empresariais.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/556838067_777912301525569_1334774809437446260_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y9Gpv_F2t0AQ7kNvwHq-fEJ&_nc_oc=AdnZTqYf561hni7fXlWgzirVZ2a9EUfuZdjHUg5ecCw51xBdJKAPU14tJ2NT6JnBT0Q&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=a5SvKTsl6BA7cgE4izPyrw&oh=00_AfkxsLZNgzI8UjSNLEYVLlfV2kPUmiYQJwXC1wssQLjEtw&oe=69612661)

Por exemplo, se você selecionar o ativo **Catálogos** sem necessidade de acesso aos catálogos dos clientes, eles provavelmente abandonarão o fluxo na tela de seleção de catálogo e solicitarão esclarecimentos.

## Etapa 2: conseguir a URL do Cadastro incorporado hospedado

Navegue até o painel **WhatsApp** > **Início rápido** e clique no botão **Ver integração**.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/556820792_1873904266492750_8998264804748617024_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=P30ohxZgu_kQ7kNvwF2EDNg&_nc_oc=AdlTmreVyXosSKNVZsTcmT0XsjELKAtwmExp4FzkOmxdP5bxDmh8yJnDHPF9LRaJ7yE&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=a5SvKTsl6BA7cgE4izPyrw&oh=00_Afk0FZdLPRXW4AMr17CwoPx_BkRRxu2NI-iQ1zfXmukfeA&oe=69611829)

Encontre o cartão **Sem necessidade de integração**. A URL exibida no cartão é a URL da página de integração:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/556828984_1430417581383742_4223219994357738350_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=eGzEsXX7PkMQ7kNvwEski_0&_nc_oc=Adn0dXYNynngzxTD0kT3yb7OPoosLlSSCAclxkGbqaUMa9rriFUVrQENoGig6Ez8nyM&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=a5SvKTsl6BA7cgE4izPyrw&oh=00_Afnmacjzv4Q7I2AlMec78cMVCHXWrWkuNXM5pVZkbVovHQ&oe=696132AB)

Clique no botão **Copiar** para copiar a URL para a área de transferência. Mapeie essa URL para um botão no seu site ou portal do cliente que, quando clicado, abre a URL em uma nova janela do navegador.

Para ver como isso acontece, carregue a URL em uma nova janela ou aba do navegador ou clique no ícone azul "nova janela", que faz a mesma coisa.

A página de integração fica assim:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/557247008_1487309905743315_2332288243528054136_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=f4sSdPXnL-4Q7kNvwG2zyt1&_nc_oc=AdnvH-I2ZJ-qgVIxMCQe_vCa18YZWDoKyswi0lpLMIoCl2T90LHvlgXWXfDSFjtXUjw&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=a5SvKTsl6BA7cgE4izPyrw&oh=00_AflzqJKxIHn2N36_-KAO8bUVY1BFIIXEzEzx50jmss7oMQ&oe=69611CCA)

Clique no botão **Começar**. Esse é o fluxo que será visto pelos clientes empresariais que clicarem no botão no seu site ou portal do cliente. Conclua o fluxo, se desejar.

## Etapa 3: capturar IDs de ativos de cliente

Quando um cliente empresarial concluir o fluxo, um webhook [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) será disparado com `event` definido como `PARTNER_ADDED`. Capture a identificação da conta do WhatsApp Business e a identificação do portfólio empresarial do cliente a partir da carga do webhook.

## Etapa 4: gerar um hash HMAC-SHA256

Gere um hash HMAC-SHA256 da chave secreta do app e do token do sistema.

### Exemplo de bash para Linux e macOS

```
echo -n "<SYSTEM_TOKEN>" | openssl dgst -sha256 -hmac "<APP_SECRET>"
```

-   `<SYSTEM_TOKEN>` – Seu token do sistema.-   `<APP_SECRET>` – A chave secreta do app ([**Painel de Apps**](/apps) > **Configurações do app** > **Básico**)

## Etapa 5: conseguir um token da empresa

Use o ponto de extremidade [POST /<BUSINESS\_PORTFOLIO\_ID>/system\_user\_access\_tokens](/docs/marketing-api/reference/business/system_user_access_tokens#Creating) para obter e capturar o [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) do cliente. (Faça o direcionamento para a identificação do portfólio empresarial do cliente, não para a sua).

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PORTFOLIO_ID>/system_user_access_tokens' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>' \
-d 'appsecret_proof=<APPSECRET_PROOF>' \
-d 'fetch_only=true'
```

-   `<API_VERSION>` – Versão da API.-   `<APPSECRET_PROOF>` – Hash HMAC-SHA256 da chave secreta do app e do token do sistema.-   `<BUSINESS_PORTFOLIO_ID>` – A identificação do portfólio empresarial do cliente.-   `<SYSTEM_TOKEN>` – Seu token do sistema.

### Sintaxe da resposta

Caso a solicitação seja bem-sucedida:

```
{
  "access_token": "<BUSINESS_TOKEN>"
}
```

-   `<BUSINESS_TOKEN>` – O token empresarial do cliente.

## Etapa 6: conseguir o ID do número de telefone comercial do cliente

Use o ponto de extremidade [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/phone\_numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Reading) para obter e capturar a identificação de número de telefone comercial do cliente.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/phone_numbers' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

-   `<API_VERSION>` – Versão da API.-   `<BUSINESS_TOKEN>` – Token empresarial do cliente.-   `<WABA_ID>` – Identificação da conta do WhatsApp Business do cliente empresarial.

### Sintaxe da resposta

```
{
  "data": [
    {
      "verified_name": "<VERIFIED_NAME>",
      "code_verification_status": "<CODE_VERIFICATION_STATUS>",
      "display_phone_number": "<DISPLAY_PHONE_NUMBER>",
      "quality_rating": "<QUALITY_RATING>",
      "platform_type": "<PLATFORM_TYPE>",
      "throughput": {
        "level": "<THROUGHPUT_LEVEL>"
      },
      "last_onboarded_time": "<LAST_ONBOARDED_TIME>",
      "webhook_configuration": {
        "application": "<WEBHOOK_CALLBACK_URL>"
      },
      "id": "<BUSINESS_PHONE_NUMBER_ID>"
    }
  ]
}
```

-   `<BUSINESS_PHONE_NUMBER_ID>` – Identificação do número de telefone comercial.-   `<CODE_VERIFICATION_STATUS>` – Status de verificação do número de telefone comercial.-   `<DISPLAY_PHONE_NUMBER>` –– Número de telefone comercial para exibição.-   `<LAST_ONBOARDED_TIME>` – Registro de data e hora UNIX que indica quando o número foi adicionado à conta do WhatsApp Business do cliente empresarial (basicamente, quando o cliente concluiu o fluxo com sucesso).-   `<PLATFORM_TYPE>` – Plataforma.-   `<QUALITY_RATING>` – Classificação de qualidade do número de telefone comercial.-   `<THROUGHPUT_LEVEL>` – Nível de taxa de transferência de dados.-   `<VERIFIED_NAME>` – Nome verificado do número de telefone comercial.-   `<WEBHOOK_CALLBACK_URL>` – URL de retorno de ligação do webhook associada ao número.

## Etapa 7: integrar o cliente

Para integrar o cliente empresarial, siga as etapas descritas no guia apropriado abaixo:

-   [Integrar clientes empresariais como Provedor de Tecnologia ou Parceiro de Tecnologia](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider) (pule a etapa 1)-   [Integrar clientes empresariais como Parceiro de Soluções](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner) (pule a etapa 1)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)