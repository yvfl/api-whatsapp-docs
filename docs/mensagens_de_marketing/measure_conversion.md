<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion -->
<!-- Scraped: 2026-01-24T00:37:28.097Z -->

# Configurar a mensuração de conversão

Updated: 14 de nov de 2025

Válido a partir de 1º de julho de 2025: os preços por mensagem já estão em vigor. Além disso, as taxas para mensagens de marketing na API de Nuvem e na API de MM Lite são consistentes, de acordo com as tabelas de tarifas publicadas [neste link](/documentation/business-messaging/whatsapp/pricing).

Planejamos lançar a MM Lite para o público geral no quarto trimestre de 2025.

Com a API de MM Lite, agora você pode fazer a integração das mensagens de marketing com eventos, o que permite mensurar a taxa e o custo para que uma mensagem de marketing enviada pela API de MM Lite leve a eventos da parte inferior do funil (como compras) no site ou app.

A mensuração de conversões tem como base os mesmos eventos que você pode enviar à Meta ao usar anúncios. Assim, as empresas que já têm integração com eventos para fins de anúncios (por exemplo, via Pixel ou API de Conversões para sites ou SDK da Meta no app para celular) podem aproveitar com mais facilidade os mesmos relatórios gerados automaticamente, sem precisar de configuração.

Se uma empresa estiver usando mensagens de marketing na MM Lite e campanhas de anúncios no mesmo portfólio empresarial, os eventos de conversão relatados serão automaticamente atribuídos ao último toque da Meta (clique na mensagem de marketing ou no anúncio) antes do evento, com base nas configurações da janela de atribuição de cada um. Por exemplo, se uma empresa estiver veiculando uma campanha de anúncios no Instagram e uma campanha de mensagens de marketing na MM Lite, cada uma com um URL direcionando ao mesmo site para vendas, e o usuário fizer a compra depois de clicar no anúncio do Instagram e na mensagem de marketing, esse evento será atribuído ao clique na mensagem de marketing ou ao clique no anúncio, com base nas configurações da janela de atribuição de cada um. Assim, as empresas conseguem entender melhor o panorama geral das campanhas de anúncios e mensagens de marketing na geração de resultados.

## Entender as entidades de anúncios vinculadas

Quando uma empresa se cadastra na API de MM Lite, contas de anúncios somente para leitura são criadas no portfólio empresarial e sincronizadas com cada conta do WhatsApp Business do mesmo portfólio. As mensagens de marketing fazem parte de um recurso separado e diferentes dos anúncios. O uso do termo “anúncios” abaixo representa entidades de anúncios apenas como construções técnicas.

Nenhuma ação é necessária por parte da empresa ou do parceiro. As contas de anúncios somente para leitura vinculadas ficam sincronizadas com as mudanças feitas nos modelos de marketing. Assim, os modelos de marketing novos ou atualizados são refletidos na entidade de anúncio vinculada.

Há vários benefícios em vincular modelos de marketing a contas de anúncios:

**Interface do usuário e API comuns para equipes de marketing:** as empresas podem ver as campanhas de marketing e as métricas de campanha da API de MM Lite como "Campanhas" na aba "Mensagens de marketing" do Gerenciador de Anúncios e via API usando a "[API de Insights](/docs/marketing-api/insights)" de Marketing. Essas interfaces ajudam as equipes de marketing a visualizar as campanhas de anúncios e mensagens de marketing usando recursos e terminologia comuns, em vez de visualizar as campanhas de anúncios em um lugar e as campanhas de marketing enviadas via WhatsApp em outro.

-   **Novas métricas:** a interface do usuário do Gerenciador de Anúncios e a API de Insights relatam novas métricas de conversão (por exemplo, web, app) que não são compatíveis com a API de Nuvem e a API de Gerenciamento do WhatsApp Business. Quando as mensagens de modelo de marketing enviadas por meio da API de MM Lite levam a eventos de conversão (por exemplo, adição ao carrinho, compra) que uma empresa relata no próprio site ou app, esses eventos são atribuídos à mensagem de marketing e exibidos em métricas, o que permite uma melhor compreensão do ROI das mensagens de marketing. Os eventos são reportados por meio da integração com o Pixel ou a API de Conversões para eventos da web e de apps, bem como o SDK da Meta.

## Diretrizes de sincronização entre modelo e anúncio

-   Durante a integração inicial com a API de MM Lite, os modelos de marketing são direcionados aos anúncios apenas uma vez.-   Para que os modelos exibam as métricas de conversão do app corretas, as sincronizações devem ser concluídas.-   A sincronização dos anúncios pode levar até 10 minutos.-   Evite enviar mensagens com novos modelos antes que a sincronização seja concluída, para evitar erros ou perdas de otimização e rastreamento.-   As métricas de conversão não estarão habilitadas para modelos existentes antes da integração inicial.-   Para reativar modelos não utilizados por mais de 7 dias, envie uma mensagem usando o modelo e aguarde 10 minutos para que ele seja reativado pela sincronização do anúncio.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/476235279_4018761408406419_4409302645887282875_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=h-l-S1vDr6wQ7kNvwGzZACs&_nc_oc=AdkjV1vZmZLAsqGkqhyMz-VJoXk_7eGjeaZcvPKxULFXyCQ1JZQcDiH37fN4T5Yt8RA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=gqx4FPNsLsCUzQ4BdjsSqQ&oh=00_AfqYxmGESnWft4bdUsLIAUFyR9LO_0F3s_D2FKrKzPBtcw&oe=698E3D0B)

## Entender a configuração automática de objetivos

Para mensurar eventos de conversão, a API de MM Lite sincroniza automaticamente modelos de marketing com entidades de anúncios correspondentes (campanhas, conjuntos de mensagens e anúncios), com configurações que permitem gerar relatórios de conversão de objetivos presumidos.

Para reduzir a complexidade da integração da MM Lite para as empresas, esse processo acontece automaticamente. Para pessoas familiarizadas com o ecossistema de anúncios da Meta, é possível observar que esses parâmetros de campanha e conjunto de anúncios não mudam a maneira como as mensagens são veiculadas pela API de MM Lite. Eles são definidos apenas para que os eventos relatados possam ser atribuídos corretamente.

Consulte a tabela abaixo para entender como os modelos de marketing são direcionados a entidades de anúncios.

 

Parâmetros da campanha

Parâmetros do conjunto de mensagens

Modelos de marketing sem botão de CTA para URL

Objective:OUTCOME\_SALES

OptimizationGoal: Impression

Modelos de marketing com um botão de CTA para URL que direciona a um site ou app sem ativar os relatórios de eventos.`*`

Objective:LINK\_CLICKS

OptimizationGoal: LinkClicks

Modelos de marketing com um botão de CTA para URL que direciona a um site ou app com os relatórios de eventos ativados.`*`

Objective:LINK\_CLICKS

OptimizationGoal: OffsiteConversion

`*` Os relatórios de eventos são detectados quando o URL direciona a um site ou app que a mesma BMID ativou para relatórios de eventos via Pixel, API de Conversões ou SDK da Meta.

Embora a maioria das mudanças nos Modelos seja sincronizada automaticamente com os Anúncios (por exemplo, conteúdo de texto), os parâmetros de Mensagem e Campanha são sincronizados apenas uma vez quando a empresa faz a integração inicial com a MM Lite ou cria um novo Modelo. O objetivo é manter uma estrutura consistente de campanha e conjunto de mensagens ao relatar cliques e conversões de mensagens enviadas usando esse Modelo. Assim, se você quiser adicionar, editar ou remover um URL de um botão de CTA em um modelo, será necessário criar um novo modelo para capturar corretamente as métricas de clique e conversão do URL atualizado.

## Conferir se o URL é compatível com a mensuração de conversões

Para atribuir os eventos relatados via Pixel da Meta, API de Conversões para eventos da web ou do app ou SDK da Meta, antes do envio, a Meta anexará uma identificação de clique aos URLs enviados em botões de CTA nas mensagens de modelo de marketing.

Caso você ou o parceiro com quem trabalha use um serviço de link curto que também tenta reformatar URLs, um erro poderá ser gerado.

Por exemplo:

-   Você envia o URL `www.mybusiness.com`.-   Seu parceiro reformata o URL para `www.partnerURL.com/abc123` antes de enviá-lo à API de MM Lite.-   A API de MM Lite reformata o URL para `www.partnerURL.com/abc123?fbclid=yxz789`. Nesse caso, o serviço de URL curto do seu parceiro poderá impedir que a Meta anexe a identificação do clique.

Faça testes para garantir que os URLs sejam transmitidos corretamente e que você consegue encontrar as métricas corretas de eventos de conversão no Gerenciador de Anúncios ou na API de Insights antes de executar as cargas de trabalho de produção. Caso enfrente problemas decorrentes desse comportamento, fale com seu parceiro ou entre em contato diretamente com a Meta para mais informações.

## Mensurar conversões no site com o Pixel da Meta ou a API de Conversões

As empresas que geram relatórios de eventos do site usando o Pixel da Meta ou a API de Conversões para web agora podem mensurar quando o clique em um URL na mensagem de marketing enviada pela API de MM Lite leva a um dos três eventos de conversão.

Se a empresa ainda não estiver gerando relatórios de eventos de conversão fora do site a partir do próprio site, consulte a documentação abaixo para configurar os relatórios de eventos:

**Tutorial**: [Começar a usar o Pixel da Meta e a API de Conversões](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.facebookblueprint.com%2Fstudent%2Factivity%2F212737&h=AT3UBqS85L_wRY_JL07MUO37dOBACvOB7VDpXg8rNLjA3IhJ_mESHtg2T3DGsXXQkHx8iDYreRmgdJiK2dUbE29NnL5UAZV_W_Rslal0UCfmNll0Zzv51OQh6ga-MinEbljBvyzL_moExcZ8qDbP9dhAMbE)

Quando a empresa gera relatórios de eventos via Pixel ou API de Conversões, os três eventos padrão a seguir são automaticamente associados a visitantes que chegam ao site a partir de um CTA para URL de uma mensagem de marketing enviada pela API de MM Lite:

-   Adicionar ao carrinho-   Iniciar finalização da compra-   Compra-   Valor da compra

Quando um usuário clica em um CTA para URL de uma mensagem da API de MM Lite e realiza qualquer um dos três eventos acima, a Meta atribui automaticamente o evento de conversão à campanha da MM Lite e disponibiliza essas análises para você ou seu parceiro pela API de Insights. Seu parceiro poderá conferir essas análises nas plataformas de relatórios que você costuma usar.

Se esse evento de conversão também estiver sendo usado para mensurar a eficácia dos anúncios no Facebook ou no Instagram, a Meta atribuirá a conversão ao último toque do usuário. Por exemplo, se um usuário chegar ao site por um anúncio no Facebook, fechar a janela do navegador e, mais tarde, retornar ao site clicando em um link de uma mensagem da API de MM Lite e comprar um item, esse evento de conversão de compra será atribuído à campanha da API de MM Lite (e não ao anúncio no Facebook), já que essa é a interação mais recente.

## Mensurar conversões do app com o SDK da Meta ou a API de Conversões

As empresas podem usar a API de MM Lite para mensurar quando as mensagens de marketing levam usuários a realizar eventos no app, como compras e ativações do app. Consulte [API de Conversões para eventos do app](/docs/marketing-api/conversions-api/app-events) para saber mais sobre eventos do app.

Os seguintes eventos de conversão do app estão disponíveis para a API de MM Lite:

-   Compra do app-   Valor da compra no app-   Adição ao carrinho no app-   Finalização da compra iniciada no app-   Ativações no app

As empresas podem capturar eventos de conversão do app de três maneiras. Para mais informações, consulte [API de Conversões para eventos do app](/docs/marketing-api/conversions-api/app-events).

-   Pelo SDK da Meta-   Pela API de Conversões-   Por um Parceiro de Métricas para Aplicativos, que envia eventos à Meta em seu nome

### Como usar o SDK da Meta

-   Caso seu app esteja usando o SDK da Meta, [atualize](/docs/android/upgrading-4x) a versão do SDK para a versão 17.0.2 ou posterior do Android SDK da Meta. No momento, a mensuração de apps não está disponível no iOS.-   Caso o app use um Parceiro de Métricas para Aplicativos (MMP, pelas iniciais em inglês) compatível, consulte o seu MMP para preparar o app.-   Caso seu app esteja usando a API de Conversões, clique [neste link](/docs/marketing-api/conversions-api/parameters/app-data#campaign-ids) para saber mais sobre como enviar parâmetros campaign\_ids com eventos do app.0 Para obter campaign\_ids, será necessário analisar os `campaign_ids` de `al_applink_data parameters` do deep link em que o usuário clicou.

Exemplo de deep link:

```
exampleapp://applink/ad_landing_recommend?data={"goods_id":"39109246","page_type":"B"}&al_applink_data={"target_url":"https://www.exampleapp.com&fbclid=IwZXh0bgNhZW0BMAABHbKVD62Fa0uTdpAh6KZn16BmrnWgsTbZgiCEsKGLOcF9RDncEAsbJKWp0Q_aem_y0zBYthdxb0j9epvkZum7w","extras":{"fb_app_id":312563225523989},"referer_app_link":{"url":"fb:\/\/\/?app_id=312563225523989","app_name":"Facebook"},"campaign_ids":"IwAR2rBBgtFjvI_IUUes4nZ6FcQ0dtqujIz1w9JIwrs1YKKn7tGIIqC4kKrXk_wapm_fVVosPGBQJWpvSW8Z8emXg_aem_pyDxR3ch5qDkVdd0Y138yg","ad_id":"1234567","adgroup_id":"1234567","campaign_id":"1234567","campaign_group_id":"1234567","account_id":"1234567"}
```

-   Verifique se você também configurou o pixel/conversões para o URL alternativo do site.

### Por um Parceiro de Métricas para Aplicativos

Algumas plataformas de mensuração de apps encaminham automaticamente eventos de conversão do app para a Meta em seu nome. Nenhuma ação é necessária da sua parte.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)