<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/support/experiments -->
<!-- Scraped: 2025-12-20T17:56:04.743Z -->

# Experimentos

Updated: 13 de nov de 2025

Por vezes realizamos experimentos para avaliar o impacto das mensagens na experiência e no engajamento dos usuários do WhatsApp. Essas são práticas padrão na nossa plataforma e nos ajudam a melhorar a experiência de envio de mensagens para você e seus clientes.

Os experimentos em andamento são descritos abaixo e não têm data de término fixa. Para proteger a validade do experimento e garantir a melhor experiência comercial e de consumo possível, não podemos fornecer exceções nem desativações para esses experimentos.

## Experiência com mensagem de marketing

Uma parcela muito pequena de usuários do WhatsApp não receberá mensagens de modelo de marketing de empresas, a menos que uma destas condições seja atendida:

-   Há uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) entre o usuário e a empresa.-   Há uma [janela de ponto de entrada gratuito](/documentation/business-messaging/whatsapp/pricing#free-entry-point-windows) aberta entre o usuário e a empresa.

Se você enviar uma mensagem de modelo de marketing para um usuário que faz parte do grupo de experimento, a mensagem não será enviada, e você não receberá uma cobrança por ela. Em vez disso, um webhook de [status de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) será disparado com `status` definido como `failed` e erro `code` definido como `130472`.

Se você tentar reenviar a mensagem, verá o mesmo erro. Se for necessário entregar a mensagem de modelo de marketing ao usuário, recomendamos entrar em contato com ele por algum outro meio que não seja o WhatsApp e pedir que envie uma mensagem para você, assim será possível reenviar a mensagem dentro de uma janela aberta de atendimento ao cliente.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)