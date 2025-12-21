<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/error-signals -->
<!-- Scraped: 2025-12-20T17:31:00.765Z -->

# Sinais de erro

Updated: 21 de out de 2025

O Android SDK para senha descartável está disponível na versão beta e apresenta um fluxo de trabalho simplificado para implementar modelos de autenticação com um toque e sem toque. Veja como usar o recurso abaixo.

Este documento descreve apenas sinais de erro do Android que podem ajudar você a depurar [modelos de autenticação de preenchimento automático com um toque](/documentation/business-messaging/whatsapp/templates/authentication-templates/autofill-button-authentication-templates) e [modelos de autenticação de preenchimento automático sem toque](/documentation/business-messaging/whatsapp/templates/authentication-templates/zero-tap-authentication-templates).

Caso a mensagem falhe na verificação de qualificação, o botão de preencher automaticamente com um toque será substituído pelo de copiar código. Além disso, talvez as configurações do dispositivo ou do cliente do WhatsApp estejam impedindo as notificações de mensagens. Para ajudar na depuração, os nossos apps exibem algumas informações de erro pela intenção `com.whatsapp.OTP_ERROR`. Nessas situações, você receberá uma chave de erro e uma mensagem em vez de senhas descartáveis ou códigos de verificação do usuário.

Alguns sinais de erro só serão exibidos na execução do WhatsApp no emulador do Android.

Chave

Descrição

`ambiguous_delivery_destination`

_Somente emulador_

**Destino de entrega ambíguo**

Há várias solicitações de senha descartável ativas para os pacotes especificados por este modelo, e não foi possível determinar a qual pacote entregar o código.

Isso pode acontecer quando vários apps especificados na matriz `supported_apps` do modelo iniciaram o handshake (enviaram a intenção `com.whatsapp.otp.OTP_REQUESTED`) nos últimos dez minutos.

`incompatible_os_version`

**Versão do Android incompatível**

  
Isso pode acontecer quando você inicia o handshake (envia o intent `com.whatsapp.otp.OTP_REQUESTED`), mas o dispositivo está executando uma versão do Android anterior à 19.

`incorrect_signature_hash`

_Somente emulador_

**Hash de assinatura incorreto**

  
Isso pode acontecer quando você inicia o handshake (envia a intenção `com.whatsapp.otp.OTP_REQUESTED`) e o nosso app recebe uma mensagem de modelo de autenticação com um botão de preencher automaticamente com um toque, mas o nome do pacote na mensagem não produz o hash de assinatura.

`missing_handshake_or_disorder`

**Handshake/Ordem das operações ausente**

  
Isso pode acontecer quando o nosso app recebe uma mensagem de modelo de autenticação com um botão de preencher automaticamente com um toque sem que o handshake tenha sido iniciado.

`otp_request_expired`

**A solicitação de senha descartável expirou**

  
Isso pode acontecer quando um modelo de autenticação que usa um botão de preencher automaticamente com um toque foi entregue ao usuário, mas mais de dez minutos se passaram (ou o número de minutos indicado na propriedade `code_expiration_minutes` do modelo, se o valor estiver presente) desde que você iniciou o handshake. Nessa situação, exibimos o botão de copiar código.

`whatsapp_message_notification_disabled`

_Somente emulador_

**Notificação de mensagem desabilitada nas configurações do WA**

  
Isso pode acontecer quando você inicia o handshake (envia o intent `com.whatsapp.otp.OTP_REQUESTED`), mas o usuário desabilitou as notificações no WhatsApp ou WhatsApp Business (nas configurações do app).

`whatsapp_notification_disabled`

_Somente emulador_

**Notificação do WA desabilitada no dispositivo**

  
Isso pode acontecer quando você inicia o handshake (envia o intent `com.whatsapp.otp.OTP_REQUESTED`), mas o usuário desabilitou as notificações dos nossos apps (nas configurações do dispositivo).

### Integração

Os sinais de erro são entregues por meio do intent transmitido. Por isso, implemente [`BroadcastReceiver`](https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.android.com%2Freference%2Fandroid%2Fcontent%2FBroadcastReceiver&h=AT2meknL-ljdhr2eZ6OFPzM5Mid-4t6AOtKMkXHtqkMvRC8N4U3XQWrjcLFrQpyI-DM65GNLfzgMYULFestGFZzDpyhUpt35I9qzWkUf_qBiBqY-vgblK1BLxE1OcDqiwlmQXad4EtQrjQ9X2NAJcr7Ujkc) para detectar esses sinais.

#### No manifest.xml

```
<receiver
 android:name=".app.otp.OtpErrorReceiver"
 android:enabled="true"
 android:exported="true" >
   <intent-filter><action android:name="com.whatsapp.otp.OTP_ERROR"/></intent-filter></receiver>
```

#### Classe do destinatário – Usando o SDK (preferencial)

Implemente `onReceive` e use um objeto `WhatsAppOtpIncomingIntentHandler` para processar os sinais de depuração.

```
public class OtpErrorReceiver extends BroadcastReceiver {

 @Override
 public void onReceive(Context context, Intent intent) {
     WhatsAppOtpIncomingIntentHandler whatsAppOtpIncomingIntentHandler = new WhatsAppOtpIncomingIntentHandler();
     whatsAppOtpIncomingIntentHandler.processOtpDebugSignals(
                          whatsAppIntent,
                          // your function to handle the signal
                          (debugSignal) -> handleSignal(debugSignal),
                          // your function to handle any error
                          (error, exception) -> handleError(error, exception));
 }
}
```

#### Classe do destinatário – sem o SDK

```
public class OtpErrorReceiver extends BroadcastReceiver {
 public static final String OTP_ERROR_KEY = "error";
 public static final String OTP_ERROR_MESSAGE_KEY = "error_message";

 @Override
 public void onReceive(Context context, Intent intent) {
   try {
     PendingIntent pendingIntent = intent.getParcelableExtra("_ci_");
     if (pendingIntent != null) {
       String packageName = pendingIntent.getCreatorPackage();
       if (packageName.equalsIgnoreCase("com.whatsapp")
           || packageName.equalsIgnoreCase("com.whatsapp.w4b")) {
         String otpErrorKey = intent.getStringExtra(OTP_ERROR_KEY);
         String otpErrorMessage = intent.getStringExtra(OTP_ERROR_MESSAGE_KEY);
         // Handle errors
       }
     }
   } catch (BadParcelableException e) {
     Log.e("OtpErrorReceiver", e.getLocalizedMessage());
   }
 }
}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)