<!-- Source: https://developers.facebook.com/docs/whatsapp/support -->
<!-- Scraped: 2026-01-24T00:25:03.634Z -->

# Suporte

Updated: 19 de nov de 2025

## Termos e políticas

-   [Termos de hospedagem da Meta para a API de Nuvem](https://www.facebook.com/legal/Meta-Hosting-Terms-Cloud-API)-   [Política de Mensagens do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fpolicy&h=AT031QHaO74TYZVzxwuX16iMlMDFoLcMT_aU3cOMssdrExWad32GwSL_ej3Vw5-sOdUBTnlmQzIOtmC1IQa6CBMTbUssEORJyWOnR3BQD4aW1gEJ5hL8jA1IT_QqWvoFiuFbMXQCRRTkf1q1knjPc9KsY6w)-   [Termos de Serviço do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-terms&h=AT031QHaO74TYZVzxwuX16iMlMDFoLcMT_aU3cOMssdrExWad32GwSL_ej3Vw5-sOdUBTnlmQzIOtmC1IQa6CBMTbUssEORJyWOnR3BQD4aW1gEJ5hL8jA1IT_QqWvoFiuFbMXQCRRTkf1q1knjPc9KsY6w)-   [Política Comercial da Meta](https://www.facebook.com/policies_center/commerce)-   [Termos da Meta para o WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fmeta-terms-whatsapp-business&h=AT031QHaO74TYZVzxwuX16iMlMDFoLcMT_aU3cOMssdrExWad32GwSL_ej3Vw5-sOdUBTnlmQzIOtmC1IQa6CBMTbUssEORJyWOnR3BQD4aW1gEJ5hL8jA1IT_QqWvoFiuFbMXQCRRTkf1q1knjPc9KsY6w)

## Status da API

Consulte [Status da API do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api&h=AT031QHaO74TYZVzxwuX16iMlMDFoLcMT_aU3cOMssdrExWad32GwSL_ej3Vw5-sOdUBTnlmQzIOtmC1IQa6CBMTbUssEORJyWOnR3BQD4aW1gEJ5hL8jA1IT_QqWvoFiuFbMXQCRRTkf1q1knjPc9KsY6w) para saber mais sobre a página de status da API do WhatsApp Business e as informações disponíveis.

## Suporte para desenvolvedores

Todos os desenvolvedores da Plataforma do WhatsApp Business podem entrar em contato com o suporte da Meta em:

[https://developers.facebook.com/support/](/support/)

## Fórum da comunidade de desenvolvedores

Todos os desenvolvedores da Plataforma do WhatsApp Business podem fazer perguntas no [Fórum da Comunidade de Desenvolvedores da Meta](/community).

## Como relatar bugs

Todos os desenvolvedores da Plataforma do WhatsApp Business podem relatar bugs e enviar relatórios relacionados em:

[https://developers.facebook.com/support/bugs/](/support/bugs/)

## Suporte ao desenvolvedor empresarial

Desenvolvedores empresariais, como [provedores de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview) ou parceiros gerenciados, podem abrir tíquetes no **Suporte Direto** pelo link abaixo. Caso você tenha várias contas comerciais da Meta, selecione a correta.

[https://business.facebook.com/direct-support/](https://business.facebook.com/direct-support/)

Os clientes finais de parceiros de soluções ou parceiros gerenciados devem entrar em contato com eles para obter suporte diretamente.

Fazemos o possível para enviar uma resposta inicial dentro de 24 horas em dias úteis. Os dias úteis são de segunda a sexta-feira no país do cliente definido na conta comercial, excluindo feriados.

### Gravidade do tíquete

A gravidade do tíquete é gerada com base no tipo de problema selecionado e nas informações fornecidas no envio. Analisaremos o tíquete e investigaremos o problema conforme o nível de gravidade e o tempo do envio.

Os critérios usados para avaliar a gravidade do tíquete estão descritos na tabela abaixo.

Gravidade

Tipo de problema

**1 – Crítico**

O problema afeta gravemente o ambiente de produção, o que impede por completo o funcionamento da API. Com isso, não é possível enviar nenhuma mensagem nem adicionar/registrar números de telefone.

  
Isso suspende as operações comerciais. Não há soluções processuais.

**2 – Urgente**

O problema afeta o ambiente de produção por bloquear funções da API, o que resulta na falha do envio da maioria das mensagens.

  
Isso causa interrupções em partes significativas das operações de negócios. Não há soluções processuais.

**3 – Padrão**

O problema afeta o ambiente de produção, e a API enfrenta problemas menores ou intermitentes, o que resulta na falha do envio de algumas mensagens.

  
Isso causa pequenas interrupções em partes das operações de negócios, mas existem soluções processuais.

  
Também inclui os problemas que não foram classificados como **Críticos** nem **Urgentes**.

Quando um tíquete **Crítico** ou **Urgente** for resolvido, mas tiver pedidos pendentes, atualizaremos a gravidade para **Solucionado**.

## Solução de problemas

### Mensagem não entregue

Os cenários a seguir podem fazer com que uma mensagem apareça como "enviada", mas não "entregue". Por várias dessas razões e também por motivos de privacidade e política, **não divulgaremos a causa do erro**. Confira alguns motivos para as mensagens não entregues aparecerem como "enviadas":

-   O cliente não se conectou durante a janela de 30 dias em que mantemos mensagens para clientes offline.-   O cliente bloqueou o número de telefone comercial ou algum outro que pertence à empresa.-   O cliente está em um [país com restrições ou sanções](#country-restrictions) .

Em algumas situações, a API retorna um [código de erro](/documentation/business-messaging/whatsapp/support/error-codes) com uma mensagem que descreve a natureza do erro. Exemplos de cenários:

-   Parâmetros de pedido inválidos-   Erros de integridade-   O cliente não aceitou os novos Termos de Serviço e a nova Política de Privacidade. Envie este link [https://wa.me/tos/20210210](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa.me%2Ftos%2F20210210&h=AT031QHaO74TYZVzxwuX16iMlMDFoLcMT_aU3cOMssdrExWad32GwSL_ej3Vw5-sOdUBTnlmQzIOtmC1IQa6CBMTbUssEORJyWOnR3BQD4aW1gEJ5hL8jA1IT_QqWvoFiuFbMXQCRRTkf1q1knjPc9KsY6w) para que o usuário final aceite os Termos de Serviço mais recentes.-   O cliente está usando uma versão antiga do WhatsApp. Os clientes devem usar a seguinte versão ou uma versão superior:
    -   Android: 2.21.15.15-   SMBA: 2.21.15.15-   iOS: 2.21.170.4-   SMBI: 2.21.170.4-   KaiOS: 2.2130.10-   Web: 2.2132.6-   O cliente faz parte de um grupo [experimental](/documentation/business-messaging/whatsapp/support/experiments).

#### Soluções possíveis

Usando um método de comunicação diferente do WhatsApp, peça ao usuário do WhatsApp para fazer o seguinte:

-   confirmar que ele realmente consegue enviar uma mensagem para seu número de telefone do WhatsApp Business-   confirmar que nenhum dos seus números de telefone do WhatsApp Business está na lista de bloqueio (**Configurações** > **Privacidade** > **Bloqueados** ou **Contatos bloqueados**)-   confirmar se nossos Termos de Serviço mais recentes foram aceitos (caso contrário, será necessário acessar **Configurações** > **Ajuda**, ou **Configurações** > **Informações sobre o app**, para aceitá-los)-   atualizar para a versão mais recente do cliente do WhatsApp

### Restrições de país

Empresas em Cuba, Irã, Coreia do Norte, Síria e três regiões sancionadas da Ucrânia (Crimeia, Donetsk, Luhansk) não são qualificadas para usar a plataforma WhatsApp Business.

Os usuários do app WhatsApp Messenger (WhatsApp) e do WhatsApp Business em Cuba, Irã, Coreia do Norte, Síria e três regiões sancionadas na Ucrânia (Crimeia, Donetsk, Luhansk) não são qualificados para receber mensagens enviadas pela Plataforma do WhatsApp Business.

A partir de 15 de maio de 2024, a Turquia não estará mais restrita a mensagens comerciais da API de Nuvem. Agora, as empresas que usam a API de Nuvem podem enviar e receber mensagens de usuários do WhatsApp com números turcos.

### Webhooks

#### Status de entrega de mensagem conflituoso

Em casos raros, a mesma mensagem pode disparar webhooks de [mensagens de status](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de sucesso e de falha. Por exemplo, uma mensagem pode disparar webhooks de status com `status` definido como `delivered` e outro webhook com `status` definido como `failed`. Isso pode acontecer quando um cliente está conectado ao WhatsApp em vários dispositivos e a mensagem é entregue com sucesso para um dispositivo, mas não para outro. Qualquer mensagem que aciona um webhook de mensagens de status `delivered` foi entregue a pelo menos um dos dispositivos do usuário.

### Código de erro `2` – Serviço de API

Quando atualizarmos a API, poderá haver até 5 minutos de inatividade. Durante esse período, o serviço ficará indisponível. Nós tentamos fazer essas atualizações com o mínimo de interrupção para as empresas, mas é possível que haja impacto

#### Como depurar

Sugerimos que você espere 5 minutos e tente fazer novamente a chamada de API.

### Erros de autenticação e autorização

Esses erros são retornados quando há um problema com o token de acesso que você está usando para a chamada de API.

#### Como depurar

É possível colar o token de acesso que está sendo usado diretamente no [Depurador de Token de Acesso](/tools/debug/accesstoken). Depois, verifique se você selecionou as permissões `whatsapp_business_management` e `whatsapp_business_messaging`.

Se o token não tiver acesso às permissões, será preciso gerar um novo. Enquanto gera o token, selecione:

-   O app da Meta que você está usando para as chamadas de API-   As seguintes permissões: `whatsapp_business_management` e `whatsapp_business_messaging`

## API de Mensagens de Marketing para o WhatsApp

### Não consigo encontrar um usuário administrador na minha empresa para integrar à API de MM para o WhatsApp

Para usar a API de Mensagens de Marketing para o WhatsApp, a [integração](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#onboarding-business-customers) deve ser concluída por um usuário do seu portfólio empresarial com permissões de "controle total" (anteriormente, a função de administrador). Leia mais sobre as diversas [permissões de acesso disponíveis em um portfólio empresarial](https://business.facebook.com/business/help/442345745885606).

Caso a empresa (ou o parceiro que trabalha com a empresa) não consiga localizar um usuário com “controle total”, siga as etapas abaixo para encontrar usuários com permissão suficiente ou pedir acesso a um portfólio empresarial.

### Como encontrar ou adicionar um usuário com permissões de “controle total”

-   A maneira mais simples de aceitar os Termos de Serviço da API de MM para o WhatsApp é quando uma empresa já conhece um usuário com permissão de “controle total”. Nesse caso, o usuário pode passar pelo fluxo de integração da API de MM para o WhatsApp.
    -   **Encontre administradores no Gerenciador de Negócios**. Se a empresa (ou o parceiro) não conseguir encontrar um usuário com “controle total”, é possível acessar o Gerenciador de Negócios usando outro usuário com “acesso básico” para encontrar a lista de administradores com “controle total”.
    

-   Entre no Meta Business Suite, acesse “Configurações do negócio” e, em seguida, acesse a aba “Pessoas”
    -   Qualquer usuário do portfólio empresarial com “acesso básico” ou mais pode acessar a lista completa de usuários e encontrar uma pessoa com “controle total”.
    

-   **Encontre administradores usando uma chamada de API**. Se a empresa não conseguir encontrar o administrador do portfólio empresarial, mas o parceiro tiver um token BISU com permissões business\_management (API), será possível buscar uma lista de usuários com permissões de “controle total” com os pontos de extremidade da API a seguir

-   [Documentos sobre o ponto de extremidade da conta do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)
    -   [Documentos do ponto de extremidade de usuários da empresa](/docs/marketing-api/reference/business/business_users)
    

-   **Envie um pedido para que um novo usuário seja adicionado ao portfólio empresarial**. Uma empresa pode enviar um pedido para adicionar um usuário com acesso de "controle total" a um portfólio empresarial. **Esse processo leva em média 24 horas para que seja possível realizar uma análise de segurança minuciosa, conferindo se todos os documentos foram fornecidos e estão em ordem. Esse deve ser um último recurso, depois que todas as outras opções tiverem sido esgotadas.**

-   Um usuário da empresa pode pedir para ser adicionado ao portfólio empresarial com “acesso total”, desde que cumpra os requisitos de documentação descritos abaixo.
    -   Siga as instruções para [enviar um pedido para ter controle total de um portfólio empresarial](https://www.facebook.com/business/help/474856681929983)
    -   Colete os documentos necessários mencionados no link acima.
    

Com os ativos coletados, preencha o [formulário de suporte para contato](https://www.facebook.com/business-support-home/contact-support.)

Observação: se o administrador desejado não conseguir selecionar uma empresa na lista exibida, ele poderá selecionar qualquer ativo aleatório da lista e mencionar a identificação do Gerenciador de Negócios como parte do “texto da descrição” do pedido. Caso não consiga selecionar nenhum ativo ou não tenha ativos para selecionar, entre em contato com seu gerente de parceiros.

## Acho que minhas taxas de entrega são mais baixas na API de MM para o WhatsApp do que eram na API de Nuvem

**A Meta recomenda que todas as mensagens de marketing sejam enviadas por meio da API de MM para o WhatsApp da próxima geração para aproveitar melhorias em recursos e entrega.** A API de MM para o WhatsApp entrega um número igual ou maior de mensagens de marketing do que a API de Nuvem. A API de MM para o WhatsApp permite limites de envio mais dinâmicos, possibilitando que mensagens de marketing com alto engajamento (por exemplo, mensagens mais lidas) alcancem um número maior de clientes.

Na Índia, as mensagens de marketing enviadas pela API de MM para o WhatsApp que apresentaram maior engajamento (como taxas de leitura) registraram até 9% mais entregas em comparação com a API de Nuvem\*.

### Etapas a serem seguidas para solucionar problemas com taxas de entrega mais baixas ao mudar para a API de MM para o WhatsApp:

-   Garanta que sua equipe entenda como funciona a priorização na API de MM para o WhatsApp em relação à API de Nuvem. Na API de MM para o WhatsApp, as mensagens com maior engajamento podem alcançar mais clientes. Enquanto os limites de mensagem por usuário da API de Nuvem podem impedir que uma mensagem seja entregue a um usuário, a API de MM para o WhatsApp é capaz de reconhecer modelos de mensagem com alto engajamento (como mensagens com maiores taxas de leitura) e, quando uma mensagem é enviada, permite aplicar limites de mensagem dinâmicos.
    -   **Garanta que você esteja fazendo uma comparação adequada entre a API de MM para o WhatsApp e a API de Nuvem.** Muitas diferenças nas taxas de entrega podem ser atribuídas a variações como o uso de modelos, horários ou públicos diferentes. Antes de enviar um pedido de suporte, confira se você está fazendo uma comparação adequada considerando as diretrizes abaixo:
    

-   **Compare o mesmo período.** Para comparar a entrega de mensagens com precisão, avalie campanhas veiculadas no mesmo período de quatro a sete dias. Os limites de mensagem por usuário são dinâmicos e mudam em tempo real dependendo de fatores como volume de mensagens, feriados, atividade comercial e comportamento do usuário. Por esse motivo, comparações de resultados de diferentes períodos não são confiáveis.
    -   **Compare os mesmos modelos (ou modelos extremamente parecidos).** Muitas vezes, as comparações de entrega contrastam modelos de mensagem com textos, taxas de leitura e engajamento diferentes, o que é um erro. Use o mesmo modelo para os dois pontos de extremidade das APIs. Confira se o modelo está ativo e segue as diretrizes para mensagens de marketing de qualidade.
    -   **Compare campanhas grandes com dados demográficos de público equivalentes.** Compare campanhas com pelo menos 100 mil mensagens de marketing enviadas a coortes de públicos funcionalmente idênticos. Por exemplo, divida aleatoriamente os segmentos de usuários para evitar resultados tendenciosos (como regiões geográficas, filtros de usuários ou características de ROI e engajamento diferentes). Nenhum destinatário deve receber mensagens mais de uma vez, incluindo de outras campanhas.
    -   **Compare o mesmo horário de envio.** Envie campanhas para os dois pontos de extremidade simultaneamente, para minimizar impactos externos como bloqueios ou sinalizações.
    

-   **Não considere mensagens reenviadas na sua estatística de “entregas”.** Se uma mensagem não for entregue devido aos limites de mensagens de marketing por usuário, aguarde 24 horas antes de tentar novamente (consulte o [código de erro 131049](/documentation/business-messaging/whatsapp/support/error-codes)). Novas tentativas de envio da mesma mensagem diminuem artificialmente a taxa de entrega percebida, já que o mesmo limite por usuário ainda pode ser válido, gerando o mesmo resultado. Por exemplo, se 20 de 100 mensagens falharem devido aos limites e você tentar enviá-las novamente, a verdadeira taxa de entrega de 80% poderá cair para aproximadamente 67% após apenas uma nova tentativa.
    -   **Siga as boas práticas para criar mensagens de marketing com alto engajamento**
    

-   **Qualidade e relevância:** priorize o envio de mensagens que ofereçam um valor claro aos clientes e evite contatos não relevantes ou impessoais. As probabilidades de leitura de mensagens relevantes são maiores, o que gera mais engajamento de clientes em potencial e existentes.
    -   **Qualidade das mensagens**:
    -   **Esperadas:** os clientes escolheram receber esse tipo de mensagens e geralmente interagem com suas mensagens de marketing. Ofereça a opção de recusar.
    -   **Oportunas**: as mensagens são enviadas em um momento lógico (por exemplo, após o engajamento inicial ou com um ritmo definido) e com frequência adequada.
    -   **Relevantes:** as mensagens são personalizadas, contêm informações importantes e incluem chamadas para ação claras.
    -   **Use os recursos da API de MM para o WhatsApp**, por exemplo:
    -   Períodos personalizáveis de validade da mensagem ([tempo de vida](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#create-marketing-templates)) para garantir que as mensagens cheguem em tempo hábil
    -   Confira suas [recomendações de avaliações comparativas](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics#benchmark-metrics) para melhorar o desempenho
    

## Acho que minhas veiculações são mais baixas na API de MM para o WhatsApp do que eram na API de Nuvem

Como a API de MM para o WhatsApp prioriza a entrega de mensagens de alto engajamento para os usuários, mais entregas desse tipo de mensagem podem gerar taxas de cliques (CTR) mais altas ou outros resultados na API.

Se você observar que a taxa de cliques de uma campanha é mais baixa na API de MM para o WhatsApp em relação à API de Nuvem, confira o seguinte:

-   **Faça uma comparação A/B precisa das mesmas campanhas.** Consulte a orientação acima sobre as taxas de veiculação para configurar uma comparação A/B confiável do mesmo modelo, ao mesmo tempo, para um público grande o suficiente e que possa ser comparado, a fim de garantir que outros fatores não estejam invalidando a comparação de CTR na API de MM para o WhatsApp em relação à API de Nuvem.
    -   **Seu URL deve ser compatível com a mensuração de conversões da Meta.** As taxas de cliques serão mais baixas se os URLs não estiverem funcionando. Veja as instruções abaixo.
    -   **Avalie se as [otimizações de criativos automatizadas](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#automatic-creative-optimizations) devem ser habilitadas na sua campanha.** Algumas empresas estão participando de um piloto de otimizações automáticas de criativos, que testa pequenas variações de modelos de mensagens de marketing e seleciona automaticamente a variante que recebe a maior taxa de cliques ao longo do tempo. Trabalhe com seu parceiro para determinar se a sua empresa usa esses recursos e se a sua campanha é adequada
    

## Não estou encontrando as métricas de conversão no site ou no app para minhas mensagens de marketing

Envie um evento de teste para garantir que seu URL seja compatível com a mensuração de conversões. Alguns parceiros reformatam os URLs antes de enviá-los à API de MM para o WhatsApp, o que impede a Meta de anexar uma identificação do clique ao URL, que seria usada para mensurar as conversões.

Entre em contato com seu parceiro da Meta se estiver trabalhando com uma plataforma ou um parceiro que reformata o URL de modo a impedir a mensuração de conversões pela Meta. Caso seu app esteja usando o SDK da Meta, será necessário atualizar a versão do SDK para a versão 17.0.2 ou posterior do Android SDK da Meta.

## Ainda preciso de ajuda

Se você tiver seguido todas as etapas de solução de problemas e ainda estiver enfrentando problemas, envie uma [pergunta de suporte direto](https://business.facebook.com/direct-support/) usando o tipo de pergunta "WABiz: mensagens de marketing".

-   Em caso de entregas mais baixas na API de MM para o WhatsApp em relação à API de Nuvem para campanhas semelhantes, selecione WABiz: Mensagens de marketing > **Entrega de mensagens** e inclua detalhes sobre como as campanhas que você está comparando estão considerando fatores semelhantes, como tempo, público, modelo e normalização de novas tentativas.

## Códigos de erro

A API de MM para o WhatsApp usa os [mesmos códigos de erro que a API de Nuvem](/documentation/business-messaging/whatsapp/support/error-codes) com [códigos de erro adicionais](/documentation/business-messaging/whatsapp/support/error-codes#mm-lite-api-error-codes).

## Perguntas frequentes

### Tópicos gerais

**Qual empresa fornecerá a API de Nuvem?**

O WhatsApp desenvolve e opera a API do WhatsApp Business, que permite que as empresas se comuniquem com usuários consumidores da plataforma na sua rede. Ao usar a API de Nuvem, a Meta hospeda a API do WhatsApp Business e fornece um ponto de extremidade para o serviço do WhatsApp, facilitando comunicações recebidas e enviadas.

**Há custos adicionais para a API de Nuvem?**

O acesso à API de Nuvem é gratuito. Esperamos que ela gere economias de custo adicionais para os desenvolvedores, pois é hospedada e mantida pela Meta.

### Perguntas frequentes sobre implementação técnica

**Qual é a arquitetura da API de Nuvem?**

A arquitetura da API de Nuvem simplifica significativamente os requisitos operacionais e de infraestrutura do parceiro de soluções para a integração com a Plataforma do WhatsApp Business. Primeiro, ela elimina os requisitos de infraestrutura para executar contêineres do Docker da API do WhatsApp Business (economias de CAPEX). Em segundo lugar, ela elimina a necessidade de responsabilidades operacionais para gerenciar a implantação (economias de OPEX). ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/574916010_1357390812786236_2094506065743510683_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=sO9eSKa8mdYQ7kNvwGXA5Pf&_nc_oc=AdnNaPpkcbK7GZVo-PDAAMzQXAfHY4o4KjNyNbu88I5xEz4Wi2XnQ9cLskmqekYCuyM&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=c-7W7gScPUZMJQHuL-657Q&oh=00_AfqkM6ByfAJom4mWYqKFMofHNM3r2kH_6_5rSqqEj-qm1w&oe=698E5E14)

**Como fazer a migração da API Local para a API de Nuvem?**

A migração entre a API Local e a API de Nuvem é perfeita. Consulte [Como migrar um número de telefone comercial entre a API Local e a API de Nuvem](/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud).

**Por que a API de Nuvem retorna códigos de erro diferentes quando envio a mesma mensagem?**

A API de Nuvem valida cada pedido de mensagem por meio de diversas verificações. Se alguma verificação falhar, o envio da mensagem não será bem-sucedido. Por motivos de eficiência e integridade geral do sistema, a ordem das verificações pode mudar. Como resultado, você pode receber diferentes códigos de erro para o mesmo pedido de API, dependendo de qual validação falhar primeiro.

### Perguntas frequentes sobre confiabilidade

**Como posso monitorar as métricas de latência e disponibilidade da API de Nuvem em mais detalhes?**

Para ver as métricas de observabilidade específicas da API de Nuvem, consulte a [página de status da API do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api&h=AT031QHaO74TYZVzxwuX16iMlMDFoLcMT_aU3cOMssdrExWad32GwSL_ej3Vw5-sOdUBTnlmQzIOtmC1IQa6CBMTbUssEORJyWOnR3BQD4aW1gEJ5hL8jA1IT_QqWvoFiuFbMXQCRRTkf1q1knjPc9KsY6w).

**Como o tempo de inatividade da disponibilidade é calculado?**

Para saber mais, consulte o documento [Página de status da API](/documentation/business-messaging/whatsapp/support/api-status-page#availability).

**Com que frequência os números de disponibilidade são atualizados?**

A disponibilidade é atualizada uma vez por dia.

**Existem instâncias em que o tempo de inatividade da disponibilidade é substituído?**

Em algumas situações, certos erros do usuário podem ser contabilizados automaticamente como tempo de inatividade. Nesses casos, substituiremos o tempo de inatividade pelo tempo de atividade em até uma semana depois de uma análise minuciosa.

**A página de status da Meta não indica problemas com a API de Nuvem, mas ainda estou enfrentando problemas.**

Pode haver problemas que não afetam nossa disponibilidade global. Nesses casos, a [página de status da API do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api&h=AT031QHaO74TYZVzxwuX16iMlMDFoLcMT_aU3cOMssdrExWad32GwSL_ej3Vw5-sOdUBTnlmQzIOtmC1IQa6CBMTbUssEORJyWOnR3BQD4aW1gEJ5hL8jA1IT_QqWvoFiuFbMXQCRRTkf1q1knjPc9KsY6w) terá um status indicando que pode haver interrupções que não estão afetando a disponibilidade global. Para investigar o problema, abra um tíquete no [Suporte Direto](https://business.facebook.com/direct-support).

**Há instâncias em que o período de indisponibilidade não é monitorado?**

Há casos em que os períodos de indisponibilidade não são monitorados automaticamente:

-   Problemas de rede que fazem com que os pedidos falhem antes de atingirem a camada da Graph API (primeira camada).-   Problemas de rede que fazem com que os webhooks de saída não alcancem o ponto de extremidade do webhook da empresa.

Os problemas que surgirem antes da admissão no nosso sistema após esse ponto aparecerão como erro ou falha. Além disso, as tentativas de emitir o webhook continuarão mesmo após os problemas encontrados depois da primeira tentativa, até que a entrega ao ponto de extremidade de Webhook seja bem-sucedida.

Veja outros casos que aparecem no painel de disponibilidade após a detecção manual (que não são erro do sistema):

-   Problemas de autenticação da Meta, como token de autenticação (bibliotecas de segurança), são identificados como pedidos legítimos que falham na autenticação ou na autorização.-   Validação que rejeita pedidos legítimos.

Em ambos os casos, o WhatsApp detectará e responderá por esses problemas após o ocorrido, quase em tempo real.

**Há acordos no nível de serviço do produto disponíveis para latência e/ou tempo de atividade?**

Atualmente, não temos acordos em nível de serviço do produto disponíveis comercialmente para latência e/ou tempo de atividade.

**Como será a recuperação de desastre: se uma região estiver indisponível, quanto tempo levará para mover as mensagens para outra região?**

Teremos recuperação de desastres e replicação de dados em várias regiões. O tempo de inatividade esperado estaria dentro do nosso SLA e, em geral, na ordem de menos de um minuto a menos de cinco minutos.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)