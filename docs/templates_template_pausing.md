<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-pausing -->
<!-- Scraped: 2025-12-20T17:33:54.259Z -->

# Pausa no modelo

Updated: 22 de out de 2025

Se o modelo de mensagem atingir a classificação de qualidade mais baixa (status **Ativo – Qualidade baixa** no Gerenciador do WhatsApp ou `quality_score` de `RED` via API), ele será automaticamente pausado por um período para proteger a classificação de qualidade dos números de telefone que o usaram. As durações das pausas são as seguintes:

-   1ª instância: pausado por 3 horas-   2ª instância: pausado por 6 horas-   3ª instância: desabilitado

Quando um modelo de mensagem é pausado (status **Pausado**), ele não pode ser enviado aos clientes. Por isso, você precisa interromper as campanhas de mensagens automáticas que dependam desse modelo. Apesar de a tentativa de envio de um modelo pausado não ser cobrada e não contar contra o limite de mensagens, a API as rejeitará. Só retome o envio das campanhas quando o status do modelo for definido como "Ativo" novamente.

Você poderá editar um modelo pausado caso acredite que isso fará com que ele receba menos feedback negativo e melhore o índice de engajamento. Porém, ao fazer isso, o modelo ficará com o status Em análise e não poderá ser enviado aos clientes até que seja aprovado novamente e tenha o status Ativo.

Também é possível alterar a lógica dos negócios (direcionamento, parâmetros de entrega, entre outros) caso você acredite que isso esteja contribuindo para o feedback negativo ou para o baixo índice de engajamento.

Inicialmente, a pausa não afetará o número de telefone comercial do qual o modelo de mensagem foi enviado. Outros modelos de mensagem com alta qualidade podem continuar sendo enviados do número de telefone. Entretanto, se a empresa continuar usando modelos com Qualidade baixa depois de eles serem pausados, o número de telefone poderá ser afetado em algum momento.

## Notificações de pausa

Quando um modelo de mensagem for pausado, você receberá uma notificação do Gerenciador de Negócios e um e-mail, além disso, um webhook [message\_template\_status\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update).

### Como retomar

O modelo será retomado automaticamente depois da conclusão da pausa descrita acima. Depois de retomado, o modelo terá status **Ativo** e poderá ser enviado aos clientes novamente. Caso você não tenha interrompido as campanhas de mensagens automáticas que dependiam do modelo, elas voltarão a funcionar. No entanto, recomendamos que você interrompa as campanhas que dependam de modelos suspensos até que eles sejam retirados da pausa, porque nossas APIs rejeitarão as solicitações.

A [classificação de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality) do modelo também será definida para um valor baseado no feedback mais recente.

Assim como as notificações de pausa, enviaremos notificações pelo Gerenciador do WhatsApp, por email e webhook quando o status do modelo for definido como Ativo.

Esse recurso ficará disponível para empresas no Brasil, na Colômbia e em Singapura a partir de 12 de setembro de 2023 e para todas as empresas em 12 de outubro de 2023.

Com o lançamento do recurso Regularidade do Modelo, também disponibilizaremos a capacidade de retomar modelos pausados das seguintes formas:

-   Com a API, faça uma solicitação POST a `/{whats_app_message_template_id}/unpause`-   No Gerenciador do WhatsApp, clique no link para **retomar manualmente**, destacado nas capturas de tela exibidas abaixo.

Importante: os modelos pausados durante o funcionamento do mecanismo Regularidade do Modelo precisam ser retomados manualmente (via API ou Gerenciador do WhatsApp) antes de serem usados outra vez.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/554797102_3175363515964237_8084410644890844296_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=VdSb4SbAbP4Q7kNvwGhGK2G&_nc_oc=Adn7nU5_VSuF8zpiz9xTZJDLcNkQyDBCgbymz6bQR9BLh2mgs0DQ5SmIyxYolm0Gbgg&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=tg6hO77dX4aoTktwUzVIGw&oh=00_AfnrVF-VSNCqhrWILCEGYNi0uev2uN9YHRxl_ajfE1w-GA&oe=69611118)

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/554106571_1492926028278417_4141428697407616298_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=m4VMnmfK0vQQ7kNvwEA4g1_&_nc_oc=AdlTaZ1cCWWzKtz9VvA57POc2mX6PaZ9N2FJwdHS7tOrnn0CDQfusyDzlf-QPlg-w6w&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=tg6hO77dX4aoTktwUzVIGw&oh=00_AfmJZ0on3A8pUbV7yw2CUHvZyYDdf7TFemwgqSqp3BzOIA&oe=69612111)

### Apelações

Caso o envio seja rejeitado, você poderá fazer uma apelação. Lembre-se de que as apelações devem incluir uma amostra. Se um modelo aprovado for desabilitado, você também poderá editá-lo e reenviá-lo para aprovação.

No Gerenciador do WhatsApp:

-   Passe o mouse sobre o ícone de mala (**Ferramentas da conta**) e clique em **Modelos de mensagem**.-   Se você tiver várias contas do WhatsApp Business, use o menu suspenso no canto superior direito para selecionar a conta cujos modelos você quer gerenciar.-   Encontre o modelo de mensagem que você quer de editar e clique nele.-   Edite o conteúdo do modelo.-   Clique no botão **Adicionar exemplo**. Adicione as variáveis de valores e imagens.-   Clique em **Enviar**.

Analisaremos a apelação e tomaremos uma decisão dentro de 24 horas.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)