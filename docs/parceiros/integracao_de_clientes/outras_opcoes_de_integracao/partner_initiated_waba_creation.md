<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation -->
<!-- Scraped: 2025-12-20T17:51:06.095Z -->

# Criação da WABA iniciada pelo parceiro

Updated: 14 de nov de 2025

Caso seja um Parceiro de soluções e não queira integrar um cliente empresarial com o [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview), use o Meta Business Suite para iniciar a criação de uma WABA para o cliente. Isso gera uma solicitação de criação de WABA que seu cliente empresarial pode analisar no Meta Business Suite. O cliente pode aceitar (ou recusar) a solicitação e, se quiser, adicionar um número de telefone comercial.

Se for aceita, a WABA será criada e atribuída ao cliente. Você também terá acesso à WABA com base nas permissões definidas quando iniciou a solicitação. Depois, você pode usar o [token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) para adicionar um número de telefone comercial à WABA do cliente (se ele tiver optado por não criar um) e compartilhar sua linha de crédito com o cliente, o que conclui o processo de integração.

Caso você use esse método para criar uma WABA para um cliente empresarial, e o cliente aceite, será necessário usar o token do seu sistema ao acessar a WABA (um [token comercial](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) não funcionará). Além disso, será preciso usar a API para compartilhar sua linha de crédito com o cliente (ela não pode ser compartilhada como parte do processo de iniciação ou aceitação).

## Iniciar a criação da WABA

-   Acesse o [Meta Business Suite](https://business.facebook.com/).-   Se você tiver vários portfólios empresariais, selecione o apropriado no menu suspenso exibido na parte superior esquerda da página.-   Vá para o painel **Configurações** (ícone de engrenagem) > **Contas** > **Contas do WhatsApp**.-   Clique no botão suspenso azul **Adicionar** e selecione **Solicitar uma nova conta do WhatsApp Business para um cliente**.-   Conclua o fluxo preenchendo todos os campos de forma adequada.-   Navegue até o painel **Configurações** > **Solicitações** > **Outras solicitações** e clique na aba **Enviados** para verificar se o convite foi enviado ao cliente empresarial.-   Instrua o cliente para aceitar a solicitação. Veja as [instruções para clientes comerciais](#business-customer-instructions) abaixo para saber mais sobre o conteúdo que pode ser enviado.

## Integrar clientes comerciais

-   Ouça um webhook **account\_update** com a propriedade `event` definida como `PARTNER_ADDED` ou `PARTNER_APP_INSTALLED` ou procure uma notificação ou um alerta do desenvolvedor indicando que o cliente aceitou sua solicitação.-   Se o cliente tiver aceitado a solicitação, navegue até o painel **Configurações** (ícone de engrenagem) > **Contas** > **Contas do WhatsApp** e confirme se você vê a WABA do cliente na lista de WABAs.-   Se a WABA não tiver um número de telefone comercial, clique no menu de três pontos no canto direito do nome da WABA, selecione **Adicionar número de telefone** e conclua o fluxo. Como alternativa, é possível [adicionar um número de telefone de forma programática](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers) por meio da API.-   [Compartilhe sua linha de crédito](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#alternate-method-for-sharing-your-credit-line) com o cliente.

Isso conclui o processo de integração. Agora, você pode usar o token do sistema para fornecer serviços de mensagens do WhatsApp ao cliente.

## Instruções para clientes empresariais

Depois de confirmar que o convite foi enviado, instrua o cliente empresarial a analisar e aceitar a solicitação no Meta Business Suite. Os convites que não forem aceitos em até 90 dias serão cancelados automaticamente.

Você pode enviar as seguintes instruções:

-   _Acesse o Meta Business Suite em [https://business.facebook.com](https://business.facebook.com)._-   _Se você tiver vários portfólios empresariais, selecione o apropriado no menu suspenso exibido na parte superior esquerda da página._-   _Navegue até o painel **Configurações** (ícone de engrenagem) > **Solicitações** > **Outras Solicitações** e clique na aba **Recebido**._-   _Localize o convite e analise o conteúdo (ou recuse o convite)._-   _Adicione e verifique um número de telefone comercial (opcional)._-   _Confirme o convite._-   _Navegue até o painel **Contas** > **Conta do WhatsApp** e confirme que a conta do WhatsApp Business foi criada e compartilhada com seu parceiro de solução._

## Adicionar números de telefone

Depois que o cliente empresarial compartilhar a WABA com você, será possível registrar um número de telefone comercial para ele de duas maneiras:

-   **Via Gerenciador do WhatsApp**: navegue até o painel [**Gerenciador do WhatsApp**](https://business.facebook.com/latest/whatsapp_manager/) > **Visão geral** e localize a WABA na seção da conta do WhatsApp. Clique no menu de três pontos exibidos à esquerda do nome da WABA, depois em **Adicionar número de telefone** e conclua o fluxo.-   **Via API**: consulte [Registrar números de telefone comercial.](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers)

Como alternativa, você pode orientar o cliente a adicionar um número por conta própria usando o Gerenciador do WhatsApp.

### Cancelar convites

Para cancelar um convite que ainda não foi aceito, navegue até o painel **Configurações** (ícone de engrenagem) > **Solicitações** e clique na aba **Enviados**. Encontre o convite e clique no botão **Cancelar**.

### Formas de pagamento

Os clientes corporativos não podem adicionar a própria forma de pagamento a uma WABA criada por meio do processo de criação de WABA iniciado pelo parceiro. Você deve usar a API para [compartilhar sua linha de crédito](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#alternate-method-for-sharing-your-credit-line) com qualquer cliente empresarial que aceitar sua solicitação de criação.

### Soluções multiparceiros

Caso você faça parte de uma [Solução Multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) (MPS, pelas iniciais em inglês), será possível compartilhar uma WABA criada por meio do processo de criação de WABA iniciado pelo parceiro com outros participantes da MPS depois de [integrar a WABA](#onboarding-business-customers) com sucesso.

Há duas maneiras de compartilhar a WABA com outros participantes da MPS:

-   **Recomendada**: direcione o cliente para a implementação do Cadastro Incorporado configurada de acordo com a MPS (ou do seu parceiro) e oriente-o a concluir o fluxo usando o nome da WABA, o portfólio empresarial e o telefone comercial existentes.-   Use a API para [adicionar a WABA ao seu MPS](/documentation/business-messaging/whatsapp/solution-providers/support/adding-waba-to-mps).

## Modelo de compartilhamento da WABA

No modelo de compartilhamento da WABA, um cliente empresarial cria e concede acesso à própria WABA a um provedor de soluções usando o Cadastro Incorporado.

Quando um cliente conclui com sucesso o flow Cadastro Incorporado de um provedor de solução, uma WABA é criada no portfólio empresarial do cliente (e, assim, pertence a ele). Além disso, um webhook é disparado, notificando o parceiro. A seguir, o parceiro poderá usar o conteúdo do webhook e o [token comercial](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens) do cliente para fazer a integração e fornecer serviços de mensagens por meio da API.

## Integrar clientes ao modelo de compartilhamento da WABA

Para integrar um cliente empresarial ao modelo de compartilhamento da WABA, é preciso usar o Cadastro Incorporado. Consulte a documentação sobre [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview) para saber como implementar o Cadastro Incorporado e integrar clientes corporativos como provedor de soluções.

## Modelo "Em nome de"

O modelo de propriedade da WABA "Em nome de" está obsoleto e não é mais possível. Para saber mais, consulte [Descontinuação do modelo de propriedade da conta "Em nome de"](/documentation/business-messaging/whatsapp/solution-providers/obo-model-deprecation).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)