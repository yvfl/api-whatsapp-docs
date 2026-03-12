<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-best-practices -->
<!-- Scraped: 2026-03-10T22:08:52.026Z -->

# Boas práticas para autenticação de usuários via WhatsApp

Updated: 21 de nov de 2025

## Segurança

Para se inscrever no WhatsApp, os usuários devem usar o próprio número de telefone. Durante [esse processo de cadastro⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Fcoronavirus%2Fget-started&h=AT4z7iFhvOVQmnynXn4IdUqjKMN8s9tCixgpPNLpdmJMpCBWTSM17hJPytel9Sl8UwUbjCAsXAtyg10ZvIVe6R37vxAy5WAhzNFbT3vJz_gZeCID8m8bDbTAxAjHPQuwz5h-GeN5JnDfI0fjNiQxmGLA8TY), o WhatsApp verifica se o usuário tem a propriedade do número de telefone enviando um código de confirmação de seis dígitos por SMS ou ligação telefônica.

Muitos usuários do WhatsApp manterão número de telefone que já usam no app. No entanto, o WhatsApp não impõe a propriedade do número de telefone após a inscrição inicial. Por isso, não há garantia de que o número de telefone e a conta do WhatsApp associada a ele pertencem à mesma pessoa. Em especial, como os números de telefone são reciclados pelas operadoras de telefonia móvel, é possível que, se o seu usuário for o atual proprietário do número de telefone e não usar o WhatsApp, [o proprietário anterior desse número de telefone ainda tenha acesso à conta do WhatsApp associada a ele⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F3347469605523961&h=AT4z7iFhvOVQmnynXn4IdUqjKMN8s9tCixgpPNLpdmJMpCBWTSM17hJPytel9Sl8UwUbjCAsXAtyg10ZvIVe6R37vxAy5WAhzNFbT3vJz_gZeCID8m8bDbTAxAjHPQuwz5h-GeN5JnDfI0fjNiQxmGLA8TY).

Por isso, em casos de uso de autenticação sensível, como a recuperação de conta (em que um código enviado pelo WhatsApp pode ser o único fator de autenticação), não é possível substituir um número de telefone por uma conta do WhatsApp associada a ele. Nesses casos, algumas das seguintes boas práticas podem ser aplicadas:

-   Verifique explicitamente se o usuário é proprietário da conta do WhatsApp, assim como você faria com qualquer outro canal de autenticação novo. Por exemplo, envie uma senha descartável inicial e peça que o usuário a insira no seu app durante a inscrição ou quando forem entrar.-   Exiba um desafio adicional para verificar o usuário, além do código enviado via WhatsApp.

Com o primeiro método, você pode aproveitar nossos sistemas de verificação de alteração de identidade na [API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) e na [API Local](/docs/whatsapp/on-premises/reference/contacts/users-whatsapp-id/identity) para "vincular" a conta do WhatsApp à conta do seu usuário, garantindo que as mensagens futuras só cheguem ao usuário do WhatsApp que recebeu a senha descartável inicial. Por exemplo, na API de Nuvem, você deve armazenar o hash de identidade recebido após enviar a senha descartável inicial e (presumindo que a verificação tenha sido bem-sucedida) incluí-lo em todas as solicitações de envio de mensagens subsequentes. Essa configuração aumenta a segurança em relação ao SMS, já que a entrega da mensagem falharia se o número de telefone fosse reciclado e o novo proprietário se inscrevesse no WhatsApp. Além disso, os códigos com senha descartável não seriam enviados por acidente a um destinatário não pretendido.

Para combater o phishing, o WhatsApp desabilita o [encaminhamento⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F887468535575482%2F&h=AT4z7iFhvOVQmnynXn4IdUqjKMN8s9tCixgpPNLpdmJMpCBWTSM17hJPytel9Sl8UwUbjCAsXAtyg10ZvIVe6R37vxAy5WAhzNFbT3vJz_gZeCID8m8bDbTAxAjHPQuwz5h-GeN5JnDfI0fjNiQxmGLA8TY) de mensagens de autenticação. As mensagens são protegidas com a criptografia de ponta a ponta entre a [API de Nuvem e o usuário](/documentation/business-messaging/whatsapp/data-privacy-and-security) ou com a criptografia de ponta a ponta entre o gerenciador do ponto de extremidade da API do WhatsApp Business e o usuário da [API Local](/docs/whatsapp/on-premises/faq#faq_188619461766385).

O WhatsApp não tem suporte nem consegue validar as práticas de segurança de [apps não oficiais⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1217634902127718&h=AT4z7iFhvOVQmnynXn4IdUqjKMN8s9tCixgpPNLpdmJMpCBWTSM17hJPytel9Sl8UwUbjCAsXAtyg10ZvIVe6R37vxAy5WAhzNFbT3vJz_gZeCID8m8bDbTAxAjHPQuwz5h-GeN5JnDfI0fjNiQxmGLA8TY). Não há garantias de que a autenticação via WhatsApp seja segura para usuários que usam esses apps.

## Experiência do usuário

### Obter aceitação

De acordo com a [Política de Mensagens do WhatsApp Business⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F&h=AT4z7iFhvOVQmnynXn4IdUqjKMN8s9tCixgpPNLpdmJMpCBWTSM17hJPytel9Sl8UwUbjCAsXAtyg10ZvIVe6R37vxAy5WAhzNFbT3vJz_gZeCID8m8bDbTAxAjHPQuwz5h-GeN5JnDfI0fjNiQxmGLA8TY), é necessário obter a aceitação do usuário do WhatsApp antes de enviar uma mensagem para ele. Uma implementação comum é oferecer aos usuários a escolha entre canais de autenticação (WhatsApp, email, SMS etc.), conforme mostrado no [nosso app de exemplo](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#sample-app).

### Solucionar problemas de entrega de mensagens

Se você estiver enfrentando problemas em que os usuários escolhem o WhatsApp, mas as mensagens acabam não sendo entregues, é possível que os usuários estejam selecionando o WhatsApp por engano, quando, na verdade, não estão se inscrevendo na plataforma. Para solucionar esse problema, você pode verificar se o WhatsApp está instalado no Android e exibir apenas o WhatsApp nesse caso.

```
fun isWhatsAppAvailable(context: Context){
   return isAppAvailable(context, "com.whatsapp") ||
          isAppAvailable(context, "com.whatsapp.w4b")
}

fun isAppAvailable(
   context: Context,
   packageName: String
): Boolean {
 val intent = Intent()
 intent.setPackage(packageName)
 intent.action = "com.whatsapp.otp.OTP_REQUESTED"
 val packageManager = context.packageManager
 val listActivities = packageManager.queryBroadcastReceivers(intent, 0)
 return listActivities.isNotEmpty()
}
```

Se você ainda está com problemas em que os usuários selecionam o WhatsApp, mas as mensagens acabam não sendo entregues, também é possível que o número de telefone do WhatsApp não esteja correto. Isso pode acontecer devido a um erro de digitação do usuário ou porque o app está presumindo incorretamente que o número de telefone da inscrição inicial é o mesmo que o número de telefone do WhatsApp. Os usuários podem ter um número de telefone para SMS e outro para o WhatsApp, no caso de terem vários chips SIM para viagens. Se o WhatsApp for escolhido como canal de autenticação, o usuário terá a chance de confirmar o próprio número de telefone do WhatsApp.

Se as mensagens estiverem sendo entregues, mas você notar taxas de conversão mais baixas do que o esperado nos seus fluxos de autenticação, considere a adoção da [nossa funcionalidade de "preenchimento automático de um toque"](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#example-request--one-tap-autofill-), disponível para Android.

### Compatibilidade com todos os apps

Seus usuários podem estar prontos para receber mensagens pelo WhatsApp ou pelo app WhatsApp Business (ou por ambos). Se você tiver seguido [nosso guia de implementação de cliente Android](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#client-implementation), as mensagens de "preenchimento automático de um toque" funcionarão com qualquer combinação de instalações. Porém, recomendamos testar um toque no app do consumidor e no app de empresa.

### Prepare-se para receber o código do WhatsApp

Ao integrar com a funcionalidade de preencher automaticamente com um toque, você poderá gerenciar o código assim que o [handshake](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#handshake) for enviado. O WhatsApp enviará o código quando for recebido, independentemente da tela que estiver sendo mostrada no seu app. Por exemplo, em situações de baixa conectividade de rede, talvez você receba o código antes de conseguir carregar a tela de entrada do código no seu app. Para lidar com esses casos, uma opção é armazenar o código recebido de forma que o app possa recuperá-lo quando a próxima tela for totalmente carregada. Dessa forma, o código poderá ser preenchido automaticamente assim que for recebido pelo seu app.

## Contas e números de telefone comerciais

Cada empresa deve ter a própria conta do WhatsApp Business e enviar modelos de autenticação por meio do próprio número de telefone, em vez de compartilhar contas do WhatsApp Business e telefones com outras pessoas jurídicas. O compartilhamento de uma conta do WhatsApp Business entre várias empresas viola a política, pois está em conflito com os [Termos de Serviço do WhatsApp Business⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-terms&h=AT4z7iFhvOVQmnynXn4IdUqjKMN8s9tCixgpPNLpdmJMpCBWTSM17hJPytel9Sl8UwUbjCAsXAtyg10ZvIVe6R37vxAy5WAhzNFbT3vJz_gZeCID8m8bDbTAxAjHPQuwz5h-GeN5JnDfI0fjNiQxmGLA8TY) e a [Política de Mensagens do WhatsApp Business⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F&h=AT4z7iFhvOVQmnynXn4IdUqjKMN8s9tCixgpPNLpdmJMpCBWTSM17hJPytel9Sl8UwUbjCAsXAtyg10ZvIVe6R37vxAy5WAhzNFbT3vJz_gZeCID8m8bDbTAxAjHPQuwz5h-GeN5JnDfI0fjNiQxmGLA8TY), além de criar experiências ruins para usuários e empresas no WhatsApp.

## Como verificar se o WhatsApp está instalado no Android e no iOS

### Como verificar no Android

É possível verificar o status de instalação do WhatsApp antes de oferecê-lo como opção caso você acredite que o WhatsApp e seu app estejam presentes no mesmo dispositivo.

Primeiro, adicione o seguinte ao seu arquivo `AndroidManifest.xml`:

```
<queries><package android:name="com.whatsapp"/><package android:name="com.whatsapp.w4b"/></queries>
```

#### Usando o SDK (preferencial)

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

### Verificação no iOS

Use o seguinte código no seu app para iOS para verificar se o WhatsApp está instalado

```
let schemeURL = URL(string: "whatsapp://otp")!
let isWhatsAppInstalled = UIApplication.shared.canOpenURL(schemeURL)
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)