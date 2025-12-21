<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/support/api-status-page -->
<!-- Scraped: 2025-12-20T17:55:41.942Z -->

# Status da plataforma do WhatsApp Business

Updated: 17 de nov de 2025

A Meta tem uma [página de status da API do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fstatus.fb.com%2Fwhatsapp-business-api&h=AT2QBH209wv3wysCBjK5I2p_WkNCG1Eyb_tVnIgSryJskEouH399c3P6jOvTvwNmLOKmMIz2Oe3Wg_l4ebvGiDh-jk2ARHXbq0hhd4f55nO9H9dg5set2hEWJBuXib1GCfT6LURNlhlHwKlRIpuPcbUDJM4) que mostra atualizações de status em tempo real para a plataforma do WhatsApp Business. Isso inclui métricas de [disponibilidade](#availability) e [latência](#latency) detalhadas da API de Nuvem para melhorar a observabilidade da plataforma. Monitore essa página para verificar se os serviços estão sofrendo interrupções ou indisponibilidades. A página de status também mostra quando os serviços não apresentam problemas conhecidos.

Em caso de problemas com a plataforma, é importante verificar primeiro a página para determinar se ele parte da Meta ou se está relacionado à sua empresa (implementação, hardware ou rede). Para problemas com serviços que não tenham sido relatados pela Meta, entre em contato com o [Suporte Direto](/documentation/business-messaging/whatsapp/support#enterprise-developer-support) para identificar e resolvê-los.

Para monitorar o desempenho da plataforma, recomendamos assinar a página de status da API do WhatsApp Business usando o botão **Feed RSS**. Consulte [Feed RSS](#rss-feed) para saber mais.

A página de status fornece os seguintes recursos:

-   Relatório atualizado e detalhado sobre o status de serviços da Plataforma do WhatsApp Business-   Histórico das últimas interrupções ou indisponibilidades de serviços-   Métricas de disponibilidade e latência específicas da API de Nuvem-   Link para o feed RSS, que pode ser usado para notificações instantâneas

Esses recursos estão descritos com mais detalhes abaixo.

## Visão geral

A principal funcionalidade da página de status é relatar informações em tempo real sobre os serviços que são importantes para a Plataforma do WhatsApp Business e para você. Confira os serviços abaixo:

-   **API de Nuvem**-   **API de Nuvem – Armazenamento Local**-   **Gerenciamento de conta do WhatsApp Business**-   **Cadastro incorporado**-   **API de Mensagens de Marketing Lite**

A página de status fornece os seguintes recursos:

-   Relatório atualizado e detalhado sobre o status de serviços da Plataforma do WhatsApp Business-   Histórico das últimas interrupções ou indisponibilidades de serviços-   Métricas de disponibilidade e latência específicas da API de Nuvem-   Link para o feed RSS, que pode ser usado para notificações instantâneas

Esses recursos estão descritos com mais detalhes abaixo.

### Indicadores de status

A página de status da Plataforma do WhatsApp Business fornece indicadores de status para cada serviço. Como os serviços são executados de maneira independente, é possível que um deles funcione normalmente enquanto outro seja afetado por uma interrupção leve ou grave. A tabela a seguir exibe indicadores codificados por cores com base no status do serviço:

Indicador de status

Imagem de status

Descrição

Marca de seleção verde

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/559906217_1339318154593502_1924487776241144230_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=hy3i1P7fTqkQ7kNvwFwD3nF&_nc_oc=AdnWnQHFSCzE9ZAjRr47a_f4fS21dudI2TguS3YqlYCOGBQJwy8lSi6kVQXlvQz-bGE&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=9JfP0-eoR6cWwjSYqK0b4A&oh=00_AflLRme7d7znZIFUHaMHfu0YywO41KJW3lM2S0vN2fjt0g&oe=69610AD9)

O serviço está em execução sem problemas conhecidos ou um problema conhecido foi resolvido.

Triângulo amarelo

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560932715_1339318177926833_7203738193856039359_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=WUUSnWT4usEQ7kNvwGxaxUQ&_nc_oc=AdmDMBLuD6O0PISHDUCkYQEcQBo7lMoADlld5VJBy6lozjGm4I8zeuHcSaTfoEz1i2M&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=9JfP0-eoR6cWwjSYqK0b4A&oh=00_Afl4WSG0k-JDy7jOfxhCdH64IFgB7_s-MMzUdiKnbJ_USQ&oe=69611EE8)

O serviço está sofrendo ou corrigindo interrupções no momento.

Sinal vermelho de Pare

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560013461_1339318191260165_1427748895640689159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=14OnsuXeGngQ7kNvwGVmLuy&_nc_oc=AdnybvS9zeTjeFmCEnU9fTEOmuF691ZHtQY2AYMApchI3eo4L_0ffcMVjEK_fLeaEIY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=9JfP0-eoR6cWwjSYqK0b4A&oh=00_AfkFrOQGvlxe24jeByNZdxFO1soyjy991_ALjDP8qK2RHw&oe=69610F8E)

O serviço não está funcionando ou está passando por interrupções graves.

Para ver mais informações sobre a interrupção, selecione a seta para baixo. Se o status tiver uma marca de seleção verde (Resolvido), a seta para baixo fornecerá informações sobre a data, o horário e a gravidade da interrupção mais recente nos últimos 7 dias. Se o serviço não tiver sofrido uma interrupção leve ou grave nos últimos 7 dias, a mensagem refletirá isso.

### Controles de página

#### API de Nuvem

Selecione a seta suspensa da **API de Nuvem** para ver mais informações, como registro de data e hora da última verificação do serviço, além de detalhes sobre o status, se aplicável. As informações sobre esse serviço incluem, por exemplo, problemas relacionados a carregamentos e downloads de mídia, bem como taxas de troca de mensagens.

Também passamos a fornecer métricas de disponibilidade e latência mais detalhadas da API de Nuvem para melhorar a observabilidade da plataforma. Devido ao processamento, os números de disponibilidade do mês anterior serão atualizados até o 10º dia útil do novo mês. Isso é relevante apenas para a seção do mês anterior.

#### API de Nuvem – armazenamento local

Selecione a seta suspensa da **API de Nuvem – armazenamento local** para ver mais informações, como registro de data e hora da última verificação do serviço, além de detalhes sobre o status, se aplicável. As informações sobre o serviço incluem problemas relacionados ao armazenamento ou à recuperação de mensagens em um banco de dados no país. Por usarem diferentes infraestruturas de armazenamento, os números de telefone com Armazenamento Local não são incluídos nas métricas de disponibilidade e latência da API de Nuvem. Nesse caso, os alertas sobre variações de destinos da plataforma que afetam os números do Armazenamento Local serão analisados separadamente.

#### Gerenciamento de conta do WhatsApp Business

Selecione a seta suspensa do **Gerenciamento de conta do WhatsApp Business** para ver mais informações, como o registro de data e hora da última verificação do serviço, além de detalhes sobre o status, se aplicável.

#### Cadastro incorporado

Selecione a seta suspensa do **Cadastro Incorporado** para ver mais informações, como registro de data e hora da última verificação do serviço, além de detalhes sobre o status, se aplicável. As informações sobre esse serviço incluem, por exemplo, problemas relacionados à criação de contas do Gerenciador de Negócios e contas comerciais do WhatsApp.

#### API de Mensagens de Marketing Lite

Selecione a seta suspensa da **API de Mensagens de Marketing Lite** para ver mais informações, como registro de data e hora da última verificação do serviço, além de detalhes sobre o status, se aplicável. As informações sobre esse serviço incluem, por exemplo, problemas relacionados a carregamentos e downloads de mídia, bem como taxas de troca de mensagens.

Também passamos a fornecer métricas de disponibilidade e latência mais detalhadas da API de Mensagens de Marketing Lite para melhorar a observabilidade da plataforma. Devido ao processamento, os números de disponibilidade do mês anterior serão atualizados até o 10º dia útil do novo mês. Isso é relevante apenas para a seção do mês anterior.

#### Ver histórico

Clique neste botão para ver o histórico de problemas com os dois serviços nos últimos 7 dias. Se não houver problemas, o status informará isso.

#### Feed RSS

Clique neste botão para assinar o feed RSS do status de serviços da Plataforma do WhatsApp Business. Para assinar o feed RSS, é preciso usar o navegador ou um app de terceiros.

## Disponibilidade

A API de Nuvem será considerada disponível, a menos que não tenha sido possível enviar nem receber mensagens usando o serviço por pelos menos 10 minutos consecutivos.

```
Availability =  100 * (A - B)/A
```

Em que:

-   A = o número total de minutos no mês-   B = o número total de minutos no mês que a Plataforma do WhatsApp Business (API de Nuvem) fica indisponível para enviar ou receber mensagens, conforme detectado pelo WhatsApp

## Latência

A API de Nuvem calcula a latência em mensagens enviadas e recebidas, definidas assim:

-   **Enviadas**: o tempo desde o recebimento da solicitação de envio da mensagem pelos nossos servidores até o momento em que a mensagem está pronta para ser enviada pelos servidores ao dispositivo do usuário do WhatsApp.-   **Recebidas**: o tempo desde o recebimento da mensagem de um usuário do WhatsApp até o momento em que nossos sistemas fazem a primeira tentativa de enviar o [webhook de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages) relacionado ao URL de retorno de ligação da conta do WhatsApp Business.

Estes processos e mensagens são excluídos dos cálculos de latência:

-   Tempo gasto ao buscar ativos (imagens, vídeos, entre outros) hospedados em servidores da Meta. Os ativos hospedados nos servidores da empresa são excluídos do cálculo.-   Mensagens mantidas na fila quando o destinatário não está conectado.-   Mensagens mantidas na fila aguardando verificações de spam ou golpe.-   Webhooks de status de mensagens (enviadas, entregues, lidas, entre outros).-   Mensagens enviadas e recebidas de empresas com [armazenamento local](/documentation/business-messaging/whatsapp/local-storage).

Nós nos reservamos o direito de excluir dos cálculos as mensagens enviadas por empresas que possam estar violando nossos termos e políticas.

### Percentis de latência

A API de Nuvem expõe os percentis de latência P90 e P99. Por exemplo: P99 é o 99º percentil de latência. Isso significa que 99% das solicitações serão mais rápidas do que o número de latência fornecido, ou seja, apenas 1% das solicitações serão mais lentas do que isso.

Os valores de latência P90 e P99 são calculados em mensagens de entrada e saída.

## Veja também

-   [Página de status da API do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api&h=AT2QBH209wv3wysCBjK5I2p_WkNCG1Eyb_tVnIgSryJskEouH399c3P6jOvTvwNmLOKmMIz2Oe3Wg_l4ebvGiDh-jk2ARHXbq0hhd4f55nO9H9dg5set2hEWJBuXib1GCfT6LURNlhlHwKlRIpuPcbUDJM4)-   [Suporte](/documentation/business-messaging/whatsapp/support)-   [Perguntas frequentes sobre confiabilidade](/documentation/business-messaging/whatsapp/support#reliability-faqs)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)