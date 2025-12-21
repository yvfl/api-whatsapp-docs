<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/identity-change -->
<!-- Scraped: 2025-12-20T17:55:24.629Z -->

# Alteração de identidade

Updated: 24 de out de 2025

Talvez a empresa queira comunicar informações privadas a um cliente pelo WhatsApp. Para fazer isso com segurança, primeiro ela precisa ter certeza de que está se comunicando com a pessoa certa por meio da autenticação (esse processo é feito fora do WhatsApp no momento).

Uma vez estabelecida a confiança entre uma empresa e uma conta do WhatsApp, a empresa não sabe quando há alteração da pessoa com acesso à conta do WhatsApp.

As empresas que usam a Plataforma do WhatsApp Business podem optar por serem notificadas quando houver uma provável atualização na identidade de um cliente. Isso oferece às empresas um sinal de que a pessoa por trás da conta pode ter mudado.

Nesse caso, a boa prática seria interromper a confiança e autenticar o usuário novamente para restabelecer a confiança antes de continuar a enviar informações pessoais.

Se uma empresa optar por esse recurso, ela será informada quando receber mensagens de usuários cuja propriedade da conta pode ter sido alterada. Nesse caso, a empresa será impedida de enviar mensagens para tais usuários até confirmar que isso é seguro. Esse procedimento protege a empresa e os clientes dela contra o vazamento de informações sensíveis.

## Gatilho

O gatilho para notificar uma empresa é a alteração da identidade de uma conta do WhatsApp.

Quando recebe esse sinal, a empresa pode invocar um fluxo de reautenticação para garantir que as informações pessoais sejam sempre trocadas de maneira segura.

## Fluxo de trabalho recomendado

-   A empresa aceita receber notificações quando o WhatsApp identifica que uma conta com quem a empresa está se comunicando está potencialmente sob o controle de outra pessoa.-   Quando o WhatsApp detecta uma possível mudança na identidade criptográfica do usuário, ele envia uma notificação à empresa.-   A empresa interrompe a confiança com o usuário (por exemplo, desvinculando o WhatsApp como canal confiável no CRM).-   A empresa inicia o fluxo de trabalho de reautenticação (normalmente feito fora do WhatsApp).-   A empresa confirma o recebimento da notificação e continua se comunicando com a conta quando julga ser seguro fazer isso (normalmente após uma autenticação bem-sucedida).

Todas as mensagens para o usuário serão bloqueadas até que a empresa confirme o recebimento da notificação que sinaliza possível mudança da pessoa que controla a conta do WhatsApp. Como é responsabilidade da empresa estabelecer a confiança com o usuário antes de compartilhar informações sensíveis, recomendamos que ela reautentique o usuário (fora do WhatsApp) antes de confirmar a notificação, o que permitiria que a empresa e o usuário continuassem trocando informações pessoais no WhatsApp. O reconhecimento da notificação _não_ implica que o usuário seja "de confiança".

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)