<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-review -->
<!-- Scraped: 2025-12-20T17:34:26.426Z -->

# Análise do modelo

Updated: 31 de out de 2025

A API de Nuvem usa machine learning para analisar os modelos e os parâmetros variáveis, além de proteger a segurança e a integridade dos serviços. Durante essa análise, nenhuma informação é compartilhada com o WhatsApp.

Quando você envia uma solicitação de criação de modelo, o conteúdo passa por validação por meio de uma combinação de sistemas automatizados e análises manuais. Esse processo garante que o modelo esteja em conformidade com as políticas e os padrões de qualidade do WhatsApp. Modelos que contenham spam, conteúdo semelhante a golpe ou que violem as políticas do WhatsApp são rejeitados durante esse processo de análise.

## Processo de aprovação

Depois de criar o modelo, você poderá enviá-lo para aprovação. Pode levar até 24 horas para que uma decisão de aprovação seja tomada. Assim que a decisão for tomada, uma notificação aparecerá no Gerenciador do WhatsApp. Além disso, enviaremos um email para os administradores do Gerenciador de Negócios. Além disso, enviaremos um webhook [message\_template\_status\_change](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update).

Caso seja aprovado, o modelo de mensagem ficará com o status **Ativo – Qualidade pendente** (`APPROVED` na API). Com isso, você poderá começar a enviá-lo aos clientes. Caso seja rejeitado, você poderá editar e reenviá-lo para aprovação, ou apelar da decisão.

### Exemplos

Se o seu modelo usa variáveis, o envio deve conter valores variáveis de exemplo (ativos de mídia, strings de texto etc.). Com isso, fica mais fácil visualizarmos como o modelo aparecerá para os clientes.

Para incluir uma amostra no envio no Gerenciador do WhatsApp, primeiro crie o modelo, adicionando as variáveis necessárias, depois clique no botão Adicionar amostra. O painel de pré-visualização renderizará os exemplos de ativos de mídia ou valores de texto fornecidos.

## Motivos comuns para rejeição

Estes são os erros mais comuns que levam à rejeição do envio e devem ser evitados:

### Formatação de parâmetros

-   Os parâmetros variáveis estão ausentes ou apresentam chaves incompatíveis. O formato correto é `{{1}}` para parâmetros posicionais.-   Os parâmetros variáveis têm caracteres especiais, como `#`, `$` ou `%`.-   Os parâmetros variáveis não são sequenciais. Por exemplo, `{{1}}`, `{{2}}`, `{{5}}`, `{{4}}`.-   O modelo contém muitos parâmetros variáveis em relação ao tamanho da mensagem. Você precisa diminuir o número de parâmetros variáveis ou aumentar o tamanho da mensagem.-   O modelo de mensagem não pode começar nem terminar com um parâmetro, ou seja, parâmetros pendentes não são permitidos.

### Violações à política e ao conteúdo

-   O modelo de mensagem apresenta conteúdo que viola a Política Comercial do WhatsApp: quando você promove a venda de bens e serviços, todas as mídias e mensagens relacionadas aos seus produtos são consideradas transações. Isso inclui descrições, preços, tarifas, impostos e/ou divulgações legais obrigatórias. As transações precisam estar em conformidade com a Política Comercial do WhatsApp.-   O modelo de mensagem tem conteúdo que viola a Política do WhatsApp Business: não solicite identificadores sensíveis aos usuários. Por exemplo, não peça aos clientes que compartilhem números completos de cartões de crédito e débito individuais, números de contas bancárias, números de identificação nacional nem outras informações confidenciais. Isso inclui não solicitar aos usuários documentos que possam conter identificadores sensíveis. Solicitar identificadores parciais (por exemplo, os últimos 4 dígitos do CPF) é aceitável.-   O conteúdo é potencialmente abusivo ou ameaçador. Por exemplo, ameaça o cliente com ações legais ou constrangimento público.

### Limites de caracteres e formato de texto

O componente de corpo tem diferentes limites de caracteres conforme o formato e a tag de modelo. O número de emojis permitido no componente também pode ser limitado.

### Duplicação

O modelo de mensagem é uma duplicata de um existente. Se um modelo for enviado com o mesmo texto de um existente no corpo e no rodapé, a duplicata será rejeitada.

### Notificações de rejeição

Uma notificação de rejeição com o motivo da recusa será exibida na Página Inicial do Suporte para Empresas. Você pode ver as rejeições na Página Inicial do Suporte para Empresas, basta navegar até **Visão geral da conta** > **Ver minhas contas** (botão) > (sua conta comercial da Meta) > (sua WABA) > **Modelos de mensagem rejeitados**.

As informações sobre a rejeição também serão enviadas por email.

Na notificação da Página Inicial do Suporte para Empresas, é possível consultar o nome e o idioma do modelo existente que tem o mesmo conteúdo do duplicado rejeitado. Você também pode editar e reenviar o modelo.

Observação: a verificação não se aplica a modelos categorizados como `AUTHENTICATION`.

## Apelações

Caso o envio seja rejeitado, você poderá fazer uma apelação. Lembre-se de que as apelações devem incluir uma amostra. Se um modelo aprovado for desabilitado, você também poderá editá-lo e reenviá-lo para aprovação.

### No Gerenciador do WhatsApp:

-   Passe o mouse sobre o ícone de mala (Ferramentas da conta) e clique em Modelos de mensagem. Se você tiver várias contas do WhatsApp Business, use o menu suspenso no canto superior direito para selecionar a conta cujos modelos você quer gerenciar.-   Encontre o modelo de mensagem que você quer de editar e clique nele.-   Edite o conteúdo do modelo.-   Clique no botão **Adicionar exemplo**. Adicione as variáveis de valores e imagens.-   Clique em **Enviar**.

Analisaremos a apelação e tomaremos uma decisão dentro de 24 horas.

## Webhooks de análise de modelo

É possível receber atualizações por meio do webhook [message\_template\_status\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update), que notifica se o modelo foi aprovado, rejeitado ou está pendente.

Se o seu modelo for rejeitado e você não concordar com a decisão, será possível fazer uma apelação para que ele seja reconsiderado.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)