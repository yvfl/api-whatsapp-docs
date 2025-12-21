<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/business-customer-support -->
<!-- Scraped: 2025-12-20T17:54:13.499Z -->

# Suporte para clientes corporativos integrados

Updated: 14 de nov de 2025

Este documento se destina a resolver problemas comuns encontrados por clientes empresariais que foram integrados à Plataforma do WhatsApp Business por um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview).

## Entrar em contato com o suporte

Se a integração à Plataforma do WhatsApp Business foi feita por um provedor de soluções e você [inscreveu-se](/async/registration/) como desenvolvedor da Meta, abra um tíquete no Suporte Direto usando o botão **Fazer uma pergunta** em:

[https://business.facebook.com/direct-support/](https://business.facebook.com/direct-support/)

Para saber mais, consulte o artigo da Central de Ajuda sobre [informações do Suporte Direto](https://www.facebook.com/business/help/182669425521252).

## Cobrança e pagamentos

### Suporte para cobrança e pagamento

Para obter suporte especificamente relacionado a cobrança, pagamentos e formas de pagamento, abra um tíquete no [Suporte Direto](https://business.facebook.com/direct-support/) com as seguintes seleções de formulário:

-   **Tópico** – **Dev: cobrança, crédito e preços**-   **Tipo de solicitação** – **Cobrança com cartão de crédito**

Caso o tópico **Dev: cobrança, crédito e preços** não seja exibido, entre em contato com seu Provedor de Tecnologia ou Parceiro de Tecnologia e peça que um tíquete seja aberto para você.

### Adicionar forma de pagamento

Caso a integração à Plataforma do WhatsApp Business tenha sido feita por um Provedor ou Parceiro de Tecnologia, será preciso adicionar uma forma de pagamento à conta do WhatsApp Business para que o app do parceiro ou provedor possa ser usado para enviar e receber mensagens de usuários do WhatsApp.

Consulte [Como adicionar um cartão de crédito à sua conta da Plataforma do WhatsApp Business](https://www.facebook.com/business/help/488291839463771) na Central de Ajuda para saber como adicionar uma forma de pagamento à sua conta.

Para saber mais sobre como funcionam os preços na Plataforma do WhatsApp Business, consulte o artigo da Central de Ajuda [Sobre cobranças da conta do WhatsApp Business](https://www.facebook.com/business/help/2225184664363779?id=2129163877102343).

### Mudar de parceiro e remover a linha de crédito anterior

Caso o cliente corporativo tenha trabalhado com um parceiro no passado e ainda compartilhe a linha de crédito anterior, ele poderá ver um erro ao tentar mudar para um novo parceiro.

-   Faça backup das mensagens do cliente corporativo.-   Desconecte a empresa do app WhatsApp Business.-   Reconecte a empresa no app WhatsApp Business.-   Inicie o processo de integração usando o fluxo [coexistence](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#onboarding-whatsapp-business-app-users--aka--coexistence--).

### Suporte para transações

Para obter suporte para uma transação específica:

-   Acesse o painel **Cobrança e pagamentos** do Meta Business Suite em [https://business.facebook.com/billing\_hub/](https://business.facebook.com/billing_hub/).-   Localize a transação na aba **Contas > Contas do WhatsApp Business** ou no painel **Atividade de pagamento**.-   Copiar a identificação da transação inteira-   Abra um tíquete no [Suporte Direto](https://business.facebook.com/direct-support/) e inclua a identificação da transação.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/466908269_1627253861482438_5318686688053211395_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=KjsLY7mCSvQQ7kNvwG-18Jw&_nc_oc=Adnu8tijd88RArwx9VrX6Rt0ffzW7TPZ6CIxe9Ho8DeoDlhPVeXR0JiiOQmoL9IKA-Y&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=wqT0Aq7c7aO0ZhdEWRWGRA&oh=00_AflyNQpItwA8jy6E3tLcRM6_vYxTX4wQIpSKg2rdxDafEg&oe=69613A78)

### Erros de pagamento

Confira alguns erros de pagamento comuns no Meta Business Suite. Se as soluções propostas não funcionarem, [entre em contato com o suporte](#contacting-support).

Título e descrição do erro

Solução possível

**_<CARD\_TYPE><CARD\_NUMBER> não foi verificado._**

_Não foi possível concluir a verificação. Tente novamente._

-   Tente novamente e confirme se você está inserindo corretamente a senha descartável enviada pelo seu banco.-   Verifique se você é capaz de receber o código de senha descartável do seu banco.-   Entre em contato com o banco emissor do cartão para perguntar se o cartão foi bloqueado e, nesse caso, qual o motivo.-   Tente novamente após alguns dias.-   Tente outro cartão.

**Não foi possível salvar a forma de pagamento**

Não foi possível salvar a forma de pagamento. Você já salvou essa forma de pagamento no número máximo de contas de anúncios. Use outra forma de pagamento.

Use um cartão de crédito alternativo.

Não é possível aumentar o número máximo de contas que compartilham um determinado cartão de crédito. Não existem exceções a essa limitação.

**Solicitação não concluída**

Notamos algo incomum e, para sua segurança, esta solicitação não pôde ser concluída. Tente novamente mais tarde ou acesse a Central de Ajuda.

-   Verifique com o banco emissor do cartão se não há restrições associadas.-   Tente outro cartão.

**Ocorreu um erro**

Não foi possível concluir sua solicitação. Tente novamente mais tarde.

-   Tente novamente dentro de alguns dias.-   Tente outro cartão.

## Nomes de exibição

Depois que o nome de exibição de um número de telefone comercial for analisado, os clientes corporativos poderão fazer alterações usando o Gerenciador do WhatsApp. Os nomes de exibição recém-editados devem passar novamente por análise.

Para editar um nome de exibição por meio do Gerenciador do WhatsApp:

-   Acesse o Gerenciador do WhatsApp em [https://business.facebook.com/wa/manage/home/](https://business.facebook.com/wa/manage/home/).-   Navegue até **Ferramentas da conta** > **Números de telefone**.-   Clique no número de telefone.-   Clique na aba **Perfil**.-   Em **Nome de exibição**, use o botão **Editar** para enviar um novo nome.

Essa ação, assim como o resultado da análise, aciona um webhook [phone\_number\_name\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_name_update).

## Não é possível enviar mensagens de modelo

Se não for possível enviar mensagens de modelo, provavelmente você não adicionou uma forma de pagamento válida à sua conta. Consulte [Como adicionar um cartão de crédito à sua conta da Plataforma do WhatsApp Business](https://www.facebook.com/business/help/488291839463771) na Central de Ajuda para saber como adicionar uma forma de pagamento.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)