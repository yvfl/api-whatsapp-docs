<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/autofill-button-authentication-templates -->
<!-- Scraped: 2025-12-20T17:30:38.684Z -->

# Modelos de autenticação de preenchimento automático com um toque

Updated: 4 de nov de 2025

Os modelos de autenticação de preenchimento automático com um toque permitem que você envie aos usuários uma senha ou um código descartável e um botão de preenchimento automático com um toque. Quando um usuário do WhatsApp toca no botão de preenchimento automático, o cliente do WhatsApp dispara uma atividade que abre seu app e fornece a senha ou o código.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/544891318_1193716362844107_2249981522588832509_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=CbfjvbCCMq8Q7kNvwFqaflV&_nc_oc=AdlCvzxEsZ3jmk_4i9sE_Gv_L8yehRegI06uRPxTr5V77v828O6lzUccqeL7L7Klazs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=HPZAxWPmCU9CKphkSEb-kA&oh=00_AfnYc6J5PtqWym8DAB7H6S1q6-4KAOShgyKp5KnP03pKqQ&oe=69611001)

Os modelos de autenticação de botão de preenchimento automático com um toque são compostos pelo seguinte:

-   Um texto predefinido: _<VERIFICATION\_CODE> é seu código de verificação._-   Um aviso legal (opcional): _Para sua segurança, não compartilhe este código._-   Um aviso sobre a validade (opcional): _Este código expira em <NUM\_MINUTES> minutos._-   Um botão de preenchimento automático com um toque.

Observações:

-   O botão "Não pedi um código" está em versão beta e está sendo lançado de forma gradual para clientes comerciais.-   O Android SDK para senha descartável está disponível na versão beta e apresenta um fluxo de trabalho simplificado para implementar modelos de autenticação com um toque e sem toque. Veja como usar o recurso abaixo.

## Limitações

Os botões de preenchimento automático com um toque são compatíveis apenas com Android. Se você enviar um modelo de autenticação a um usuário cujo dispositivo não seja Android, o cliente do WhatsApp exibirá um botão de copiar código.

URLs, mídia e emojis não são compatíveis.

## Como criar modelos de autenticação

Use o ponto de extremidade [WhatsApp Business Account > Message Templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) para criar modelos de autenticação.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/v24.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d
'{
  "name": "<TEMPLATE_NAME>",
  "language": "<TEMPLATE_LANGUAGE>",
  "category": "authentication",
  "message_send_ttl_seconds": <TIME_T0_LIVE>, // Optional
  "components": [
    {
      "type": "body",
      "add_security_recommendation": <SECURITY_RECOMMENDATION> // Optional
    },
    {
      "type": "footer",
      "code_expiration_minutes": <CODE_EXPIRATION> // Optional
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "otp",
          "otp_type": "one_tap",
          "text": "<COPY_CODE_BUTTON_TEXT>",  // Optional
          "autofill_text": "<AUTOFILL_BUTTON_TEXT>", // Optional
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

### Parâmetros da solicitação

Espaço reservado

Descrição

Exemplo de valor

`<AUTOFILL_BUTTON_TEXT>`

_String_

**Opcional.**

O texto da etiqueta do botão de preenchimento automático com um toque.

Em caso de omissão, o texto de preenchimento automático será, por padrão, um valor predefinido no idioma do modelo. Por exemplo, `Autofill` para inglês (EUA).

Máximo de 25 caracteres.

`Autofill`

`<CODE_EXPIRATION>`

_Número inteiro_

**Opcional.**

A validade da senha ou do código em minutos.

Se for incluído, o aviso de expiração do código e esse valor serão exibidos na mensagem entregue. O botão será desabilitado na mensagem com base no número de minutos indicado, decorridos após o envio da mensagem.

Caso seja omitido, o aviso de expiração do código não será exibido na mensagem. Além disso, o botão será desabilitado 10 minutos após o envio da mensagem.

Mínimo 1, máximo 90.

`5`

`<COPY_CODE_BUTTON_TEXT>`

_String_

**Opcional.**

O texto da etiqueta do botão de copiar código.

Se for omitido, o texto será, por padrão, um valor predefinido no idioma do modelo. Por exemplo, `Copy Code` para português (BR).

Caso seja incluído, a mensagem do modelo de autenticação exibirá um botão de copiar código com esse texto se a mensagem não for aprovada no processo de [verificação de qualificação](#eligibility-check).

Máximo de 25 caracteres.

`Copy Code`

`<PACKAGE_NAME>`

_String_

**Obrigatório.**

O nome do pacote do app Android.

A string deve ter pelo menos dois segmentos (um ou mais pontos), e cada segmento precisa começar com uma letra.

Todos os caracteres devem ser alfanuméricos ou um sublinhado \[`a-zA-Z0-9_`\].

Ao usar a Graph API 20.0 ou versões anteriores, você poderá definir o nome do pacote do seu app fora da matriz `supported_apps`, mas isso não é recomendado. Consulte [Apps compatíveis](#supported-apps) abaixo.

Máximo de 224 caracteres.

`com.example.luckyshrub`

`<SECURITY_RECOMMENDATION>`

_Booliano_

**Opcional.**

Defina como `true` se quiser que o modelo inclua a string _Para sua segurança, não compartilhe este código_. Caso contrário, defina como `false`.

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

`verification_code`

`<TIME_TO_LIVE>`

_Número inteiro_

**Opcional.**

Valor do tempo de vida da mensagem de autenticação, em segundos. Consulte [Como personalizar o tempo de vida](/documentation/business-messaging/whatsapp/templates/overview#customizing-time-to-live).

`60`

### Exemplo de solicitação

Este exemplo cria um modelo chamado "authentication\_code\_autofill\_button" categorizado como `authentication` com todas as strings de texto opcionais habilitadas em um botão de preenchimento automático com um toque.

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "authentication_code_autofill_button",
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
      "code_expiration_minutes": 10
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "otp",
          "otp_type": "one_tap",
          "text": "Copy Code",
          "autofill_text": "Autofill",
          "package_name": "com.example.luckyshrub",
          "signature_hash": "K8a/AINcGX7"
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

## Webhooks

O [webhook de mensagens de botão](/documentation/business-messaging/whatsapp/webhooks/reference/messages/button) é disparado quando o usuário toca no botão "Não pedi um código" na mensagem.

### Exemplo de webhook

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "320580347795883",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "12345678",              "phone_number_id": "1234567890"            },            "contacts": [              {                "profile": {                  "name": "John"                },                "wa_id": "12345678"              }            ],            "messages": [              {                "context": {                  "from": "12345678",                  "id": "wamid.HBgLMTIxMTU1NTE0NTYVAgARGBJDMDEyMTFDNTE5NkFCOUU3QTEA"                },                "from": "12345678",                "id": "wamid.HBgLMTIxMTU1NTE0NTYVAgASGCBBQ0I3MjdCNUUzMTE0QjhFQkM4RkQ4MEU3QkE0MUNEMgA=",                "timestamp": "1753919111",                "from_logical_id": "131063108133020",                "type": "button",                "button": {                  "payload": "DID_NOT_REQUEST_CODE",                  "text": "I didn't request a code"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

## Hash de chave de assinatura do app

É preciso incluir o hash de chave de assinatura do seu app no corpo do post.

Para calcular o hash, siga as instruções do Google para [calcular a string de hash do app](https://l.facebook.com/l.php?u=https%3A%2F%2Fdevelopers.google.com%2Fidentity%2Fsms-retriever%2Fverify%23computing_your_apps_hash_string&h=AT01vO9pPSm9g2etzwOqPf-DEDGnrTeTALzY3O97fn-hEOuaQkijNYqhckgOt7bp6sD59c4iMAar7y0XbA7nqd3KzfV2Er6uuAvLgL2G4MR7rOkM3-pOTHRLK6CWQsup9jgd4bAn_p4czCboLVeI97wHc0A).

Como alternativa, se você seguir as instruções do Google e baixar o certificado da chave de assinatura do seu app (etapa 1), será possível usar o certificado com o script de shell [sms\_retriever\_hash\_v9.sh](https://l.facebook.com/l.php?u=http%3A%2F%2Ftinyurl.com%2F43bkdrdt&h=AT01vO9pPSm9g2etzwOqPf-DEDGnrTeTALzY3O97fn-hEOuaQkijNYqhckgOt7bp6sD59c4iMAar7y0XbA7nqd3KzfV2Er6uuAvLgL2G4MR7rOkM3-pOTHRLK6CWQsup9jgd4bAn_p4czCboLVeI97wHc0A) para calcular o hash. Por exemplo:

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

Quando um usuário do seu app solicitar uma senha ou um código de verificação descartável para ser entregue no WhatsApp, primeiro você precisará executar o handshake. Depois, faça uma chamada de API para enviar a mensagem do modelo de autenticação. Quando o cliente do WhatsApp receber a mensagem, será feita a verificação de qualificação. Se não houver erros, ele iniciará o intent e exibirá a mensagem ao usuário. Por fim, quando o usuário tocar no botão de preenchimento automático, abriremos seu app e transmitiremos a senha para ele.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/335941006_3334832200114460_5878835743521475587_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=IFp8ypI95ZMQ7kNvwE86SRK&_nc_oc=Adn0cnItohLAJDu1RG36AU0PcRzwMYh8JB_Z0kiAIhZmkP6DqlQ6Ky-5tlO9-dNSZX4&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=HPZAxWPmCU9CKphkSEb-kA&oh=00_Afm7GzpEyYTrNUeJA1aOUJld_GWcpAsdZ3twuTNQ_-ZNJA&oe=69612EAC)

Caso o handshake não seja realizado antes do envio ou a mensagem não esteja qualificada, o botão exibido será o de copiar código, em vez do botão de um toque.

### Verificação de qualificação

Ao receber uma mensagem de modelo de autenticação, o cliente do WhatsApp faz as verificações a seguir. Se alguma delas falhar, o botão de preenchimento automático com um toque será substituído pelo de copiar código.

-   O handshake foi iniciado há não mais que 10 minutos (ou não mais que o número de minutos indicado pela propriedade `code_expiration_minutes` do modelo, se o valor estiver presente).-   O nome do pacote na mensagem (definido na propriedade `package_name` na matriz `components` ao criar o modelo) é o mesmo definido na intenção. A correspondência é determinada por meio do método `getCreatorPackage` chamado no objeto `PendingIntent` fornecido pelo aplicativo.-   Nenhum dos outros apps que você incluiu na lista de `supported_apps` do modelo iniciou um handshake nos últimos 10 minutos (ou o número de minutos indicado pela propriedade `code_expiration_minutes` do modelo, se estiver presente).-   O hash da chave de assinatura do app na mensagem (definido na propriedade `signature_hash` na matriz de componentes ao criar o modelo) corresponde ao do seu app instalado.-   A mensagem inclui o texto do botão de preenchimento automático com um toque.-   Seu app definiu uma atividade para receber a senha ou o código.

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

### Atividade

Declare um filtro de atividade e intent que possa receber a senha ou o código descartável. O filtro de intent deve ter o nome da ação `com.whatsapp.otp.OTP_RETRIEVED`.

```
<activity
   android:name=".ReceiveCodeActivity"
   android:enabled="true"
   android:exported="true"
   android:launchMode="standard">
   <intent-filter><action android:name="com.whatsapp.otp.OTP_RETRIEVED" /></intent-filter></activity>
```

Essa é a atividade que o app WhatsApp ou WhatsApp Business iniciará quando a mensagem do modelo de autenticação for recebida e passar pelas [verificações de qualificação](#eligibility-checks).

### Classe de atividade

#### Usar o SDK (recomendado)

Defina a classe pública da atividade e instancie um objeto `WhatsAppOtpIncomingIntentHandler` para gerenciar o intent, validar a senha descartável e lidar com os erros.

```
public class ReceiveCodeActivity extends AppCompatActivity {

      @Override
      protected void onCreate(Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          WhatsAppOtpIncomingIntentHandler incomingIntentHandler = new WhatsAppOtpIncomingIntentHandler();
          incomingIntentHandler.processOtpCode(
                                 intent,
                                 // call your function to validate
                                 (code) -> validateCode(code),
                                 // call your function to handle errors
                                 (error, exception) -> handleError(error, exception));
    }
```

#### Sem o SDK

Defina a classe pública da atividade que pode aceitar o código depois que ele for passado para o app.

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

Este exemplo mostra uma maneira de iniciar um handshake com o cliente do WhatsApp.

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

### Verificar se o WhatsApp está instalado no Android

É possível verificar o status de instalação do WhatsApp antes de oferecê-lo como opção caso você acredite que o WhatsApp e seu app estejam presentes no mesmo dispositivo.

Primeiro, adicione o seguinte ao seu arquivo `AndroidManifest.xml`:

```
<queries><package android:name="com.whatsapp"/><package android:name="com.whatsapp.w4b"/></queries>
```

#### Usar o SDK (recomendado)

Instancie o objeto `WhatsAppOtpHandler`:

```
WhatsAppOtpHandler whatsAppOtpHandler = new WhatsAppOtpHandler();
```

Verifique se o cliente do WhatsApp está instalado passando o método `isWhatsAppInstalled` como a cláusula de uma instrução `If`:

```
If (whatsAppOtpHandler.isWhatsAppInstalled(context)) {
    // ... do something
}
```

#### Sem o SDK

```
if (this.isWhatsAppInstalled(context)) {
    // ... do something
}

public boolean isWhatsAppInstalled(final @NonNull Context context){
    return isWhatsAppInstalled(context, "com.whatsapp") ||
           isWhatsAppInstalled(context, "com.whatsapp.w4b");
  }

  public boolean isWhatsAppInstalled(final @NonNull Context context,
      final @NonNull String type){
    final Intent intent = new Intent();
    intent.setPackage(type);
    intent.setAction("com.whatsapp.otp.OTP_REQUESTED");
    PackageManager packageManager = context.getPackageManager();
    List<ResolveInfo> receivers = packageManager.queryBroadcastReceivers(intent, 0);
    return !receivers.isEmpty();
  }
}
```

### Verificar se o WhatsApp está instalado no iOS

Use o seguinte código no seu app iOS para verificar se o WhatsApp está instalado

```
let schemeURL = URL(string: "whatsapp://otp")!
let isWhatsAppInstalled = UIApplication.shared.canOpenURL(schemeURL)
```

### Sinais de erro

Consulte [Sinais de erro](/documentation/business-messaging/whatsapp/templates/authentication-templates/error-signals) para ajudar na depuração de erros.

### Exemplo de app

Veja o [exemplo de app de senha descartável do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2FWhatsApp%2FWhatsApp-OTP-Sample-App&h=AT01vO9pPSm9g2etzwOqPf-DEDGnrTeTALzY3O97fn-hEOuaQkijNYqhckgOt7bp6sD59c4iMAar7y0XbA7nqd3KzfV2Er6uuAvLgL2G4MR7rOkM3-pOTHRLK6CWQsup9jgd4bAn_p4czCboLVeI97wHc0A) para Android no GitHub. O exemplo de app demonstra como enviar e receber códigos e senhas descartáveis por meio da API, como integrar botões de preencher automaticamente com um toque e de copiar código, como criar modelos e como preparar um exemplo de servidor.

## Enviar modelos de autenticação

Este documento explica como enviar [modelos de autenticação com botões de senha descartável](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates) aprovados.

Importante: **primeiro, você precisa iniciar um handshake** entre seu app e o cliente do WhatsApp. Consulte a seção [Handshake](#handshake) acima.

### Solicitação

Use o ponto de extremidade em [WhatsApp Business Phone Number > Messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar uma [mensagem de modelo de autenticação com um botão de senha descartável](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates).

### Sintaxe da solicitação

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
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
          "index": 0,
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

### Parâmetros da solicitação

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

### Parâmetros da resposta

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

Identificação da mensagem do WhatsApp. Use o ID listado depois de "wamid." para acompanhar o status da mensagem.

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