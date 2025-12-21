<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/zero-tap-authentication-templates -->
<!-- Scraped: 2025-12-20T17:30:46.220Z -->

# Modelos de autenticação sem toque

Updated: 4 de nov de 2025

Os modelos de autenticação de toque zero permitem que seus usuários recebam senhas ou códigos descartáveis via WhatsApp sem que precisem sair do app.

Quando um usuário solicita uma senha ou um código e você entrega essa chave usando um modelo de autenticação sem toque, o cliente do WhatsApp simplesmente transmite a senha ou o código incluído, que pode ser capturado pelo seu app usando um receptor de transmissão.

Do ponto de vista do usuário, ele solicita uma senha ou um código no seu app, e o item solicitado aparece automaticamente no app. Caso o usuário do app verifique a mensagem no cliente do WhatsApp, ele verá apenas uma mensagem exibindo o texto fixo padrão: _< code > é seu código de verificação._

Assim como acontece com os modelos de autenticação com botão de preencher automaticamente com um toque, quando o cliente do WhatsApp recebe o modelo de mensagem com a senha ou o código do usuário, realizamos uma série de verificações de qualificação. Se a mensagem falhar nessa verificação e não conseguirmos transmitir a senha ou o código, ela exibirá um botão de preencher automaticamente com um toque ou um botão de copiar código. Por isso, ao criar um modelo de autenticação sem toque, será preciso incluir o botão de preencher automaticamente com um toque e copiar código na carga do corpo do post, mesmo que o usuário não veja esses botões.

Observação: o Android SDK para senha descartável está disponível na versão beta e apresenta um fluxo de trabalho simplificado para implementar modelos de autenticação com um toque e sem toque. Veja como usar o recurso abaixo.

## Limitações

O recurso de toque zero só é compatível com o Android. Se você enviar um modelo de autenticação sem toque a um usuário cujo dispositivo não seja Android, o cliente do WhatsApp exibirá um botão de copiar código.

URLs, mídia e emojis não são compatíveis.

## Boas práticas

-   Não use o WhatsApp como método de entrega de senha/código padrão.-   Deixe claro para os usuários do app que a senha ou o código será entregue automaticamente no app quando eles selecionarem o WhatsApp como opção de entrega.-   Confira o artigo da Central de Ajuda [Sobre códigos de segurança preenchidos automaticamente no WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F659113242716268%2F&h=AT3ZepR5Nalg6VDCV1Va5hdioY0kJfJ4eMMjhimJpTtEpmx5tG2WjFwzHU-pckkaFwFseihRH1bM8B6ccsUt2r1lmAsQiAGb-NOGoXECYiSfRrFllNvE4CbgRF0neeSNsKRd2sPAIaRWj4V9v5uxttTXTqM) se os seus usuários estiverem preocupados com a entrega automática da senha ou do código.-   Depois que a senha/código for usado no app, confirme ao usuário que ele foi recebido com sucesso.

Confira alguns exemplos que explicam ao usuário que o código será exibido automaticamente no app.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/391694662_849209140220804_774216131431245181_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=SHmjhJ09Y0EQ7kNvwFhGL5Z&_nc_oc=Adl8NMo7RvcdnzgiKcqe1DQZIV-CLK6332B0FHjVS5HcKlcCQgfefOqHg7WUA9qTMUI&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=wFNVqpA4YlFnZ56pbJ-OJg&oh=00_AfkIGHaCTCSTBcQ-nd6TyvSlfuuQY7on-3YKt9vcsyb_fg&oe=696125AA)

## Como criar modelos de autenticação

Use o ponto de extremidade em [Conta do WhatsApp Business > Modelos de mensagem](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) para criar um modelo de autenticação sem toque.

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/v19.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
  {
    "name": "<TEMPLATE_NAME>",
    "language": "<TEMPLATE_LANGUAGE>",
    "category": "authentication",
    "message_send_ttl_seconds": <TIME_TO_LIVE>,
    "components": [
      {
        "type": "body",
        "add_security_recommendation": <SECURITY_RECOMMENDATION>
      },
      {
        "type": "footer",
        "code_expiration_minutes": <CODE_EXPIRATION>
      },
      {
        "type": "buttons",
        "buttons": [
          {
            "type": "otp",
            "otp_type": "zero_tap",
            "text": "<CODY_CODE_BUTTON_TEXT>",
            "autofill_text": "<AUTOFILL_BUTTON_TEXT>",
            "zero_tap_terms_accepted": <TERMS_ACCEPTED>,
            "supported_apps": [
              {
                "package_name": "<PACKAGE_NAME>",
                "signature_hash": "<SIGNATURE_HASH>"
              }
            ]
          }
        ]
      }
    ]
  }'
```

Na solicitação de criação do modelo, o tipo de botão é designado como `otp`. Porém, quando ele for criado, o tipo do botão será definido como `url`. É possível confirmar isso ao executar uma solicitação GET em um modelo de autenticação recém-criado e analisar os componentes.

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<AUTOFILL_BUTTON_TEXT>`

_String_

**Opcional.**

O texto da etiqueta do botão de preencher automaticamente com um toque.

Em caso de omissão, o texto de preenchimento automático será, por padrão, um valor predefinido no idioma do modelo. Por exemplo, "Preenchimento automático para português (BR)".

Máximo de 25 caracteres.

`Autofill`

`<COPY_CODE_BUTTON_TEXT>`

_String_

**Opcional.**

O texto da etiqueta do botão de copiar código.

Se a mensagem não for aprovada na [verificação de qualificação](#eligibility-check) e exibir um botão de copiar código, o botão usará esse rótulo de texto.

Se for omitido, e a mensagem não for aprovada na verificação de qualificação e exibir um botão de copiar código, o texto padrão usará um valor predefinido localizado para o idioma do modelo. Por exemplo, `Copy Code` para português (BR).

Máximo de 25 caracteres.

`Copy Code`

`<CODE_EXPIRATION>`

_Número inteiro_

**Opcional.**

A validade da senha ou do código em minutos.

Se for incluído, o aviso de expiração do código e esse valor serão exibidos na mensagem entregue. Caso a mensagem não passe na [verificação de qualificação](#eligibility-check) e exiba um botão de preencher automaticamente com um toque, o botão será desabilitado na mensagem com base no número de minutos indicado, decorridos após o envio da mensagem.

Caso seja omitido, o aviso de expiração do código não será exibido na mensagem. Se a mensagem não for aprovada na verificação de qualificação e exibir um botão de preencher automaticamente com um toque, o botão será desabilitado dez minutos após o envio da mensagem.

Mínimo 1, máximo 90.

`5`

`<PACKAGE_NAME>`

_String_

**Obrigatório.**

O nome do pacote do app Android.

A string deve ter pelo menos dois segmentos (um ou mais pontos), e cada segmento precisa começar com uma letra.

Todos os caracteres devem ser alfanuméricos ou um sublinhado (`a-zA-Z0-9_`).

Ao usar a Graph API 20.0 ou versões anteriores, você poderá definir o nome do pacote do seu app fora da matriz `supported_apps`, mas isso não é recomendado. Consulte [Apps compatíveis](#supported-apps) abaixo.

Máximo de 224 caracteres.

`com.example.luckyshrub`

`<SECURITY_RECOMMENDATION>`

_Booliano_

**Opcional.**

Defina como `true` se quiser que o modelo inclua a string fixa, Para sua segurança, não compartilhe este código. Caso contrário, defina como `false`.

`true`

`<SIGNATURE_HASH>`

_String_

**Obrigatório.**

O hash da chave de assinatura do app. Consulte [Hash da chave de assinatura do app](#app-signing-key-hash) abaixo.

Todos os caracteres devem ser alfanuméricos, `+`, `/` ou `=` (`a-zA-Z0-9+/=`).

Ao usar a Graph API 20.0 ou versões anteriores, você poderá definir o hash de assinatura do seu app fora da matriz `supported_apps`, mas isso não é recomendado. Consulte [Apps compatíveis](#supported-apps) abaixo.

Precisa ter exatamente 11 caracteres.

`K8a/AINcGX7`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo.

  
Máximo de 512 caracteres.

`zero_tap_auth_template`

`<TERMS_ACCEPTED>`

_Booliano_

**Obrigatório.**

Defina como `true` para indicar que você entende que o uso da autenticação de toque zero está sujeito aos Termos de Serviço do WhatsApp Business e que é sua responsabilidade garantir que os clientes esperem o preenchimento automático do código em nome deles quando optarem por recebê-lo por meio do WhatsApp.

Se estiver definido como `false`, o modelo **não** será criado, já que você precisa aceitar os termos da opção sem toque antes de criar modelos de mensagem habilitados para essa opção.

`true`

`<TIME_TO_LIVE>`

_Número inteiro_

**Opcional.**

Valor do tempo de vida da mensagem de autenticação, em segundos. Consulte a seção [Tempo de vida](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#time-to-live).

`60`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "zero_tap_auth_template",
  "language": "en_US",
  "category": "authentication",
  "message_send_ttl_seconds": 60,
  "components": [
    {
      "type": "body",
      "add_security_recommendation": true
    },
    {
      "type": "footer",
      "code_expiration_minutes": 5
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "otp",
          "otp_type": "zero_tap",
          "text": "Copy Code",
          "autofill_text": "Autofill",
          "zero_tap_terms_accepted": true,
          "supported_apps": [
            {
              "package_name": "com.example.luckyshrub",
              "signature_hash": "K8a/AINcGX7"
            }
          ]
        }
      ]
    }
  ]
}'
```

### Exemplo de resposta

```
{  "id": "594425479261596",  "status": "PENDING",  "category": "AUTHENTICATION"}
```

## Hash de chave de assinatura do app

É preciso incluir o hash de chave de assinatura do seu app no corpo do post.

Para calcular o hash, siga as instruções do Google para [calcular a string de hash do app](https://l.facebook.com/l.php?u=https%3A%2F%2Fdevelopers.google.com%2Fidentity%2Fsms-retriever%2Fverify%23computing_your_apps_hash_string&h=AT3ZepR5Nalg6VDCV1Va5hdioY0kJfJ4eMMjhimJpTtEpmx5tG2WjFwzHU-pckkaFwFseihRH1bM8B6ccsUt2r1lmAsQiAGb-NOGoXECYiSfRrFllNvE4CbgRF0neeSNsKRd2sPAIaRWj4V9v5uxttTXTqM).

Como alternativa, se você seguir as instruções do Google e baixar o certificado da chave de assinatura do seu app (etapa 1), será possível usar o certificado com o script de shell [sms\_retriever\_hash\_v9.sh](https://l.facebook.com/l.php?u=http%3A%2F%2Ftinyurl.com%2F43bkdrdt&h=AT3ZepR5Nalg6VDCV1Va5hdioY0kJfJ4eMMjhimJpTtEpmx5tG2WjFwzHU-pckkaFwFseihRH1bM8B6ccsUt2r1lmAsQiAGb-NOGoXECYiSfRrFllNvE4CbgRF0neeSNsKRd2sPAIaRWj4V9v5uxttTXTqM) para calcular o hash. Por exemplo:

```
./sms_retriever_hash_v9.sh --package "com.example.myapplication" --keystore ~/.android/debug.keystore
```

## apps compatíveis

A matriz `supported_apps` permite definir pares de nomes de pacote de apps e hashes de chave de assinatura para até cinco apps. Isso pode ser útil se você tem compilações diferentes do app e quer que cada uma delas seja capaz de iniciar o handshake:

```
"buttons": [
  {
    "type": "otp",
    ...
    "supported_apps": [
      {
        "package_name": "<PACKAGE_NAME_1>",
        "signature_hash": "<SIGNATURE_HASH_1>"
      },
      {
        "package_name": "<PACKAGE_NAME_2>",
        "signature_hash": "<SIGNATURE_HASH_2>"
      },
      ...
    ]
  }
]
```

Como alternativa, se você estiver usando a Graph API versão 20.0 ou anterior e tiver apenas um app, será possível definir o nome do pacote e o hash da chave de assinatura como propriedades de objeto de `buttons`. Porém, isso não é recomendado, já que esse método não será mais compatível a partir da versão 21.0:

```
"buttons": [
  {
    "type": "otp",
    ...
    "package_name": "<PACKAGE_NAME>",
    "signature_hash": "<SIGNATURE_HASH>"
  }
]
```

## Handshake

É preciso informar ao cliente do WhatsApp sobre a possível entrega de uma senha ou um código. Você pode fazer isso iniciando um "handshake".

Um handshake é uma classe pública e um intent do Android que você implementa, mas que pode ser iniciado pelo cliente do WhatsApp.

Quando um usuário do seu app solicitar o envio de uma senha ou um código para o número do WhatsApp dele, primeiro você precisará [iniciar o handshake](#initiating-the-handshake). Depois, faça uma chamada de API para enviar a mensagem do modelo de autenticação. Quando o cliente do WhatsApp receber a mensagem, será feita a [verificação de qualificação](#eligibility-check). Se não houver erros, será iniciada uma transmissão.

Se você não iniciar o handshake antes de enviar a mensagem ou se a mensagem não for aprovada na verificação de qualificação, a transmissão não será iniciada. Em vez disso, a mensagem entregue exibirá um botão de preenchimento automático em um toque, se possível. Caso contrário, será exibido um botão de copiar código.

### Verificação de qualificação

Ao receber uma mensagem de modelo de autenticação, o cliente do WhatsApp faz as verificações a seguir. Se alguma verificação falhar, o WhatsApp tentará exibir o botão de preencher automaticamente com um toque na mensagem. Se não for possível fazer isso, o usuário verá um botão de copiar código.

-   O handshake foi iniciado há não mais que dez minutos (ou não mais que o número de minutos indicado pela propriedade `code_expiration_minutes` do modelo, se o valor estiver presente).-   O nome do pacote na mensagem (definido na propriedade `package_name` na matriz `components` ao criar o modelo) é o mesmo definido na intenção. A correspondência é determinada por meio do método `getCreatorPackage` chamado no objeto `PendingIntent` fornecido pelo app. Consulte [Classe do botão de preencher automaticamente com um toque](#one-tap-autofill-button-class--optional-).-   O hash da chave de assinatura do app na mensagem (definido na propriedade `signature_hash` na matriz de componentes ao criar o modelo) corresponde ao do seu app instalado.-   O app definiu uma atividade e classe de botão de preencher automaticamente com um toque para receber a senha ou o código.-   O app definiu uma classe e um recebedor de transmissão sem toque para receber a senha ou o código.

### Notificações no Android

As notificações que indicam o recebimento da mensagem do modelo de autenticação do WhatsApp só aparecerão no dispositivo Android do usuário se:

-   o usuário estiver conectado ao app WhatsApp ou WhatsApp Business com o número de telefone (conta) para o qual a mensagem foi enviada;-   o usuário estiver conectado ao seu app;-   o SO do Android for KitKat (4.4, API 19) ou posterior;-   **Mostrar notificações** estiver habilitado (**Configurações** > **Notificações**) no app WhatsApp ou WhatsApp Business;-   as notificações de nível do dispositivo estiverem habilitadas para o app WhatsApp ou WhatsApp Business;-   os tópicos de mensagens anteriores no app WhatsApp ou WhatsApp Business entre o usuário e sua empresa não estiverem silenciados.

### Usar o SDK (beta)

O Android SDK para senha descartável está disponível na versão beta. Ele pode ser usado para executar handshakes, bem como outras funções em modelos de autenticação de um toque e sem toque.

Para acessar a funcionalidade do SDK, adicione a seguinte configuração ao arquivo Gradle:

```
dependencies {
    …
    implementation 'com.whatsapp.otp:whatsapp-otp-android-sdk:0.1.0'
    …
}
```

Nos seus repositórios, inclua `mavenCentral()`:

```
repositories {
    …
    mavenCentral()
    …
}
```

### Destinatário da transmissão sem toque

Declare um filtro de intenção e um Destinatário que possa receber a senha ou o código descartável. O filtro de intenção deve ter o nome da ação com.whatsapp.otp.OTP\_RETRIEVED.

```
<receiver
   android:name=".app.receiver.OtpCodeReceiver"
   android:enabled="true"
   android:exported="true">
   <intent-filter><action android:name="com.whatsapp.otp.OTP_RETRIEVED" /></intent-filter></receiver>
```

Esse é o destinatário que o app WhatsApp ou WhatsApp Business iniciará quando a mensagem do modelo de autenticação for recebida e passar pelas [verificações de elegibilidade](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#eligibility-checks).

### Classe de receptores sem toque

Usar o SDK (recomendado)

Defina uma classe que estenda `BroadcastReceiver` e, depois, defina o método `onReceive`, transmitindo seu contexto e intenção. Instancie um objeto `WhatsAppOtpIncomingIntentHandler` e execute o método `.processOtpCode()`, que receberá a intenção, validará o código OTP e lidará com os erros.

```
public class OtpCodeReceiver extends BroadcastReceiver {

  @Override
  public void onReceive(Context context, Intent intent) {
    WhatsAppOtpIncomingIntentHandler whatsAppOtpIncomingIntentHandler = new WhatsAppOtpIncomingIntentHandler();
    whatsAppOtpIncomingIntentHandler.processOtpCode(intent,
      // call your function to validate
      (code) -> validateCode(code),
      // call your function to handle errors
      (error, exception) -> handleError(error, exception));
    }
}
```

#### Sem o SDK

A classe de receptores de transmissão deverá ficar assim:

```
public class OtpCodeReceiver extends BroadcastReceiver

    @Override
    public void onReceive(Context context, Intent intent) {
       PendingIntent pendingIntent =     intent.getParcelableExtra("_ci_");
       // verify source of the pendingIntent
       String pendingIntentCreatorPackage = pendingIntent.getCreatorPackage();

       String creatorPackage = pendingIntent.getCreatorPackage();
       if ("com.whatsapp".equals(creatorPackage) ||
           "com.whatsapp.w4b".equals(creatorPackage)) {
          // use OTP code
          String otpCode = intent.getStringExtra("code");
          // ...
       }
    }
}
```

### Atividade do botão de preencher automaticamente com um toque (opcional)

Se quiser que mensagem entregue seja preenchida automaticamente com um toque, caso não seja aprovada na verificação de qualificação, implemente essa atividade e filtro de intenção no seu app para receber a senha ou o código de uso único.

O filtro de intenção deve ter o nome da ação `com.whatsapp.otp.OTP_RETRIEVED`.

```
<activity
   android:name=".ReceiveCodeActivity"
   android:enabled="true"
   android:exported="true"
   android:launchMode="standard">
   <intent-filter><action android:name="com.whatsapp.otp.OTP_RETRIEVED" /></intent-filter></activity>
```

Essa é a atividade que será iniciada pelo cliente do WhatsApp se a mensagem não for aprovada na verificação de qualificação, mas ainda estiver qualificada para exibir um botão de preencher automaticamente com um toque.

### Classe de atividade do botão de preencher automaticamente com um toque (opcional)

Se você quiser que a mensagem mostre um botão de preenchimento automático com um toque em caso de falha na verificação de qualificação, defina a classe pública de atividade que aceitará o código assim que o usuário tocar no botão.

```
public class ReceiveCodeActivity extends AppCompatActivity {

   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       Intent intent = getIntent();
       // retrieve PendingIntent from extras bundle
       PendingIntent pendingIntent = intent.getParcelableExtra("_ci_");
       // verify source of the pendingIntent
       String pendingIntentCreatorPackage = pendingIntent.getCreatorPackage();
       // check if creatorPackage is "com.whatsapp" -> WA consumer app Or
       // "com.whatsapp.w4b" -> WA business app
       if ("com.whatsapp".equals(creatorPackage) || "com.whatsapp.w4b".equals(creatorPackage)) {
         // use OTP code
         String otpCode = intent.getStringExtra("code");
       }
   }
}
```

### Iniciar o handshake

#### Usar o SDK (recomendado)

Para executar um handshake, você pode instanciar o objeto `WhatsAppOtpHandler` e passar no seu contexto para o método `.sendOtpIntentToWhatsApp()`:

```
WhatsAppOtpHandler whatsAppOtpHandler = new WhatsAppOtpHandler();
whatsAppOtpHandler.sendOtpIntentToWhatsApp(context);
```

#### Sem o SDK

O exemplo abaixo demonstra uma forma de iniciar o handshake com o app WhatsApp ou WhatsApp Business.

```
public void sendOtpIntentToWhatsApp() {
   // Send OTP_REQUESTED intent to both WA and WA Business App
   sendOtpIntentToWhatsApp("com.whatsapp");
   sendOtpIntentToWhatsApp("com.whatsapp.w4b");
}

private void sendOtpIntentToWhatsApp(String packageName) {

  /**
  * Starting with Build.VERSION_CODES.S, it will be required to explicitly
  * specify the mutability of  PendingIntents on creation with either
  * (@link #FLAG_IMMUTABLE} or FLAG_MUTABLE
  */
  int flags = Build.VERSION.SDK_INT >= Build.VERSION_CODES.S ? FLAG_IMMUTABLE : 0;
  PendingIntent pi = PendingIntent.getActivity(
      getApplicationContext(),
      0,
      new Intent(),
      flags);

  // Send OTP_REQUESTED intent to WhatsApp
  Intent intentToWhatsApp = new Intent();
  intentToWhatsApp.setPackage(packageName);
  intentToWhatsApp.setAction("com.whatsapp.otp.OTP_REQUESTED");
  // WA will use this to verify the identity of the caller app.
  Bundle extras = intentToWhatsApp.getExtras();
  if (extras == null) {
     extras = new Bundle();
  }
  extras.putParcelable("_ci_", pi);
  intentToWhatsApp.putExtras(extras);
  getApplicationContext().sendBroadcast(intentToWhatsApp);
}
```

### Verificar se o WhatsApp foi instalado

É possível verificar o status de instalação do WhatsApp antes de oferecê-lo como opção caso você acredite que o WhatsApp e seu app estejam presentes no mesmo dispositivo.

Primeiro, adicione o seguinte ao seu arquivo `AndroidManifest.xml`:

```
<queries><package android:name="com.whatsapp"/><package android:name="com.whatsapp.w4b"/></queries>
```

Instancie o objeto `WhatsAppOtpHandler`:

```
WhatsAppOtpHandler whatsAppOtpHandler = new WhatsAppOtpHandler();
```

Verifique se o cliente do WhatsApp está instalado passando o método `.isWhatsAppInstalled()` como a cláusula de uma instrução `If`:

```
If (whatsAppOtpHandler.isWhatsAppInstalled(context)) {
    // ... do something
}
```

## Sinais de erro

Consulte [Sinais de erro](/documentation/business-messaging/whatsapp/templates/authentication-templates/error-signals) para ajudar na depuração de erros.

## Enviar modelos de autenticação

Importante: **primeiro, você precisa iniciar um handshake** entre seu app e o cliente do WhatsApp. Consulte a seção [Handshake](#handshake) acima.

### Solicitação

Use o ponto de extremidade em [Número de telefone do WhatsApp Business > Mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma [mensagem de modelo de autenticação com um botão de senha descartável](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates).

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "<CUSTOMER_PHONE_NUMBER>",
    "type": "template",
    "template": {
      "name": "<TEMPLATE_NAME>",
      "language": {
        "code": "<TEMPLATE_LANGUAGE_CODE>"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "<ONE-TIME PASSWORD>"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "url",
          "index": "0",
          "parameters": [
            {
              "type": "text",
              "text": "<ONE-TIME PASSWORD>"
            }
          ]
        }
      ]
    }
  }'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Exemplo de valor

`<CUSTOMER_PHONE_NUMBER>`

O número de telefone do WhatsApp do cliente.

`12015553931`

`<ONE-TIME PASSWORD>`

A senha descartável ou o código de verificação que será entregue ao cliente.

  
Esse valor precisa aparecer duas vezes na carga.

  
Máximo de 15 caracteres.

`J$FpnYnP`

`<TEMPLATE_LANGUAGE_CODE>`

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

O nome do modelo.

`verification_code`

### Resposta

Se o processo for bem-sucedido, a API enviará a seguinte resposta:

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<INPUT>",
      "wa_id": "<WA_ID>"
    }
  ],
  "messages": [
    {
      "id": "<ID>"
    }
  ]
}
```

### Parâmetros de resposta

Espaço reservado

Descrição

Exemplo de valor

`<INPUT>`

_String_

O número de telefone do cliente para quem a mensagem foi enviada. Talvez esse valor não corresponda a `wa_id`.

`+16315551234`

`<WA_ID>`

_String_

O ID do cliente para quem a mensagem foi enviada. Talvez esse valor não corresponda a `input`.

`+16315551234`

`<ID>`

_String_

ID da mensagem do WhatsApp. Use o ID listado depois de "wamid." para acompanhar o status da mensagem.

`wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI3N0EyQUJDMjFEQzZCQUMzODMA`

### Exemplo de solicitação

```
curl -L 'https://graph.facebook.com/v24.0/105954558954427/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '{
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": "12015553931",
      "type": "template",
      "template": {
        "name": "verification_code",
        "language": {
          "code": "en_US"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "J$FpnYnP"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "url",
          "index": "0",
          "parameters": [
            {
              "type": "text",
              "text": "J$FpnYnP"
            }
          ]
        }
      ]
    }
  }'
```

### Exemplo de resposta

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "12015553931",      "wa_id": "12015553931"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI4Qzc5QkNGNTc5NTMyMDU5QzEA"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)