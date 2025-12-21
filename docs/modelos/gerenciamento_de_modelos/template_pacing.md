<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-pacing -->
<!-- Scraped: 2025-12-20T17:33:46.364Z -->

# Regularidade do modelo

Updated: 22 de out de 2025

Esse recurso permite aos clientes dar feedback antecipado sobre os modelos. Com ele, é possível identificar e [pausar os modelos](/documentation/business-messaging/whatsapp/templates/template-pausing) que receberam feedback insatisfatório ou que apresentarem baixo engajamento. Dessa forma, você tem tempo suficiente para ajustar o conteúdo antes que ele seja enviado a uma grande quantidade de clientes, reduzindo a probabilidade de um feedback negativo afetar seus negócios.

O mecanismo de regularidade é válido para modelos de marketing e de utilidade. Modelos recém-criados, modelos pausados que são retomados e modelos que podem ter sido criados anteriormente mas que não têm uma classificação de qualidade `GREEN` estão potencialmente sujeitos ao mecanismo de regularidade. O histórico de qualidade do modelo (por exemplo, uma pausa resultante de baixa qualidade) é um dos principais motivos para acionar a regularidade, e você poderá ver outros modelos sujeitos ao mecanismo. Quando um modelo é sujeito ao mecanismo de regularidade, as mensagens são enviadas normalmente até que um limite não especificado seja atingido. Quando o limite for atingido, as mensagens subsequentes que usarem esse modelo serão retidas a fim de garantir tempo suficiente para o feedback do cliente. Assim que recebermos um sinal de boa qualidade, as mensagens subsequentes usando esse modelo serão enviadas para todo o público-alvo. Se recebermos um sinal de má qualidade, as mensagens subsequentes usando esse modelo serão descartadas para que você tenha a oportunidade de ajustar o conteúdo, o direcionamento e assim por diante.

## Regularidade do modelo de utilidade

Os modelos de utilidade estarão sujeitos à regularidade somente se um modelo de utilidade tiver sido pausado. Depois que um modelo de utilidade for pausado, os modelos recém-criados, os modelos pausados que são retomados e os modelos que podem ter sido criados anteriormente, mas que não têm classificação de qualidade VERDE, estarão potencialmente sujeitos ao mecanismo de regularidade nos próximos 7 dias.

## Comportamento da API

A resposta imediata do ponto de extremidade de mensagens indicará se a mensagem foi enviada ou retida com a nova propriedade `message_status` no objeto `message`. Esta resposta estará disponível em todas as versões da API.

-   A API de Nuvem sempre incluirá uma propriedade `message_status` que terá o valor `accepted` para mensagens processadas e `held_for_quality_assessment` para mensagens retidas. As mensagens aceitas dispararão os webhooks `sent` e `delivered` quando tiverem de fato sido enviadas. Esse é o mesmo comportamento que existia antes do mecanismo de regularidade. Confira um exemplo completo de resposta na documentação da API de Nuvem.

Se o feedback for positivo e alterar a classificação do modelo para alta qualidade, as mensagens retidas serão liberadas e enviadas normalmente. O campo `message_template_quality_update` enviará a atualização de qualidade, e o webhook `messages` encaminhará as atualizações enviadas e entregues.

Se o feedback for negativo e alterar a qualidade do modelo para baixa:

-   o `status` do modelo será definido como `PAUSED`-   `message_template_status_update` será enviado com o valor do evento `paused`-   Cada mensagem retida será descartada e acionará um webhook `messages` com `"status":"failed"` e `"code":"132015"` (usuários da API de Nuvem).-   Um webhook `message_template_quality_update` será acionado com a alteração de qualidade;-   Os administradores da empresa proprietária da conta do WhatsApp Business serão informados sobre as mensagens descartadas por meio de uma notificação no Meta Business Suite, banner do Gerenciador do WhatsApp e email.

Consulte [Pausa no modelo](/documentation/business-messaging/whatsapp/templates/template-pausing) para saber como retomar um modelo que foi pausado devido à regularidade.

Temos proteções internas em vigor a fim de garantir que nossos processos de avaliação e decisão em relação à regularidade sejam concluídos em um prazo razoável para evitar impacto em campanhas urgentes. Nosso objetivo é que, mesmo com a regularidade, as mensagens de campanha de maior taxa de transferência de dados ainda sejam entregues em até uma hora (percentil 99).

Por isso, se os nossos limites internos forem atingidos antes de o modelo receber feedback suficiente para alterar a qualidade para alta ou baixa, as mensagens retidas serão liberadas normalmente com os webhooks apropriados.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)