<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/changelog -->
<!-- Scraped: 2026-01-24T00:36:41.448Z -->

# Registro de alterações

Updated: 31 de out de 2025

## 31 de outubro de 2025

_API de Mensagens de Marketing Lite_

-   Adicionamos dois novos [tipos de otimização automática de criativo:](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#product-extensions) extensões de produto e otimização de formatação de texto.-   Lançamos um novo ponto de extremidade que permite a [recusa no nível da conta do WhatsApp Business](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#configure-automatic-creative-optimizations--whatsapp-business-account-level-) para otimizações automáticas de criativos.

## 20 de outubro de 2025

_API de Mensagens de Marketing Lite_

-   As [métricas de conversão fora do site](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics) agora estão disponíveis no Gerenciador de Negócios do WhatsApp e na [API de Análise de Modelos](/documentation/business-messaging/whatsapp/analytics#template-analytics).-   Adicionamos dois novos recursos de otimização automática de criativos: [extração de título](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#headline-extraction) e [extração de título do destino de toque](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#tap-target-title-extraction).

## 17 de outubro de 2025

_API de Mensagens de Marketing Lite_

Adicionamos os campos [`marketing_messages_onboarding_status`](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#if-you-want-to-check-tos-and-intent-request-status-for-the-business-manager) e [`owner_business_info`](docs/whatsapp/marketing-messages-lite-api/onboarding#if-you-want-to-check-tos-and-intent-request-status-for-the-business-manager) para verificar os Termos de Serviço e o status da solicitação de intenção para o Gerenciador de Negócios.

## 14 de outubro de 2025

_API de Mensagens de Marketing Lite_

O campo [`product_policy`](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages) foi totalmente implementado para clientes empresariais.

## 8 de outubro de 2025

_Cadastro Incorporado_

A versão 4 do Cadastro Incorporado já está disponível. Essa versão oferece uma experiência de integração simplificada e permite fazer a integração de clientes empresariais a vários produtos (API de Nuvem do WhatsApp, API de Mensagens de Marketing Lite, anúncios de clique para o WhatsApp e API de Conversões). Para saber mais, consulte a página de [versões](/documentation/business-messaging/whatsapp/embedded-signup/versions) e [v4](/documentation/business-messaging/whatsapp/embedded-signup/version-4).

_MM Lite_

Atualizamos a [página de integração](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#onboarding-business-customers) com um tutorial em vídeo sobre o processo.

## 1º de outubro de 2025

_API de Mensagens de Marketing Lite_

Atualizamos a [página de suporte](/documentation/business-messaging/whatsapp/support) com novos guias de solução de problemas.

## 29 de setembro de 2025

_API de Mensagens de Marketing Lite_

Adicionamos um [guia de integração de coexistência à API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers#onboard-whatsapp-business-app-users--aka--coexistence--). Os usuários do WhatsApp Business agora podem fazer a integração usando a conta do app WhatsApp Business e o número de telefone.

## 3 de setembro de 2025

_API de Mensagens de Marketing Lite_

-   Em 8 de setembro de 2025, lançaremos um novo [webhook "MM Lite ToS signed"](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#receive-mm-lite-terms-of-service-signed-webhook--preferred-), que será enviado sempre que uma empresa assinar os Termos de Serviço do MM Lite por qualquer método (por exemplo, Cadastro Incorporado ou no Gerenciador do WhatsApp). O webhook terá um nome mais descritivo do que o `AD_ACCOUNT_LINKED` atual. O webhook antigo ficará obsoleto a partir do dia 1º de janeiro de 2026.
    -   As [métricas de conversão](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics) também estarão disponíveis na interface do usuário do Gerenciador do WhatsApp e por meio da API de Gerenciamento do WhatsApp Business. Por esse motivo, removemos a opção de acessar métricas da API de Mensagens de Marketing Lite para contas de anúncios somente para leitura no Gerenciador de Anúncios.
    -   O ponto de extremidade `/marketing_messages` aceitará [mensagens de marketing para a API de Mensagens de Marketing Lite e a API de Nuvem](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages).
    

## 22 de agosto de 2025

_API de Mensagens de Marketing Lite_

Adicionamos uma [página de recursos](/documentation/business-messaging/whatsapp/marketing-messages/features) comparando os recursos da API de Mensagens de Marketing Lite e da API de Nuvem.

As métricas de [tempo de atividade e disponibilidade](/documentation/business-messaging/whatsapp/support/api-status-page) da API de Mensagens de Marketing Lite estão agora disponíveis em [metastatus.com](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api%3Ffbclid%3DIwY2xjawM2tbNleHRuA2FlbQIxMQBicmlkETFPWE5PUldSeE95a2tuMnA1AR66setbfmUOYwOMQ3HtM7k277dWGE5sNlomsS6qAp8WTv_DlOf4Y10k6Dhf2w_aem_ieXDJ6jqZJA6QbtWWAA2Dw&h=AT3KKlXI6PuZ3s_k8fKCk124tKaBieUnbryW8tcD-v_V-fh4duTXjvuO0Cja8794iVOfZMhq39Uj0r4iP7D_ItzjacVvaa_MJkBn4s8jedIRUODYv9FK3V77HLVdYcGy3J_Z152Iyv3_5kyPBSD_o_hLV8M), o que oferece visibilidade sobre o status do serviço.

## 6 de agosto de 2025

_API de Mensagens de Marketing Lite_

Adicionamos um campo [image background generation](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages) para otimização automática de criativos.

## 25 de julho de 2025

_API de Mensagens de Marketing Lite_

-   Atualizamos as [referências](/documentation/business-messaging/whatsapp/marketing-messages/deep-links#form-fields) de "Identificação do app para celular" para "Identificação do app da Meta" ao criar um modelo para evitar confusão.-   Adicionamos uma [diretriz de sincronização entre modelo e anúncio](/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion) para que os clientes sigam e garantam que todos os modelos sejam configurados para métricas de conversão.

## 22 de julho de 2025

_API de Mensagens de Marketing Lite_

O Armazenamento Local já está disponível para a API de Mensagens de Marketing Lite. Caso você já tenha habilitado o recurso [Armazenamento Local](/documentation/business-messaging/whatsapp/local-storage) para a API de Nuvem, suas configurações atuais serão aplicadas automaticamente à API de Mensagens de Marketing Lite.

## 16 de julho de 2025

_API de Mensagens de Marketing Lite_

Adicionamos um guia de solução de problemas sobre como identificar administradores de um portfólio empresarial usando o Meta Business Suite ou a API. Os dois métodos retornam os mesmos resultados.

-   [Meta Business Suite](https://business.facebook.com): abra as configurações do negócio para ver quais usuários têm o acesso do tipo **controle total**.-   API: use os pontos de extremidade [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) e [GET /<BUSINESS\_PORTFOLIO\_ID>/business\_users](/docs/marketing-api/reference/business/business_users) para gerar uma lista de administradores do portfólio empresarial.

## 15 de julho de 2025

_API de Mensagens de Marketing Lite_

-   Adicionamos o [campo `marketing_messages_onboarding_status`](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#checking-eligibility-status), que fornece dados mais detalhados sobre o status de qualificação. Ele substituirá o [campo `marketing_messages_api_status`](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#checking-eligibility-status--alternative-), que ficará obsoleto na versão 24.0.-   Corrigimos o campo `marketing_messages_lite_api_status` para resolver um erro que retornava `ELIGIBLE` quando o valor correto deveria ser `ONBOARDED`. Esse campo ficará obsoleto na versão 24.0. Por isso, recomendamos o uso da nova opção `marketing_onboarding_status`.-   Alteramos o campo `marketing_messages_api_status` para que o retorno de `ONBOARDED` não dependa mais da existência de um ou mais números de telefone registrados ou de modelos compatíveis com a API de Mensagens de Marketing Lite.

## 1º de julho de 2025

_API de Mensagens de Marketing Lite_

Os preços por mensagem agora se aplicam à API de Mensagens de Marketing Lite. Consulte [Preços na plataforma do WhatsApp Business](/documentation/business-messaging/whatsapp/pricing) para saber mais.

## 24 de junho de 2025

_API de Mensagens de Marketing Lite_

_Permissões_

A permissão [ads\_read](/docs/permissions#a) agora é opcional para parceiros. Essa alteração afeta o fluxo de integração via [API de Intenção](/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers#-recommended--onboard-a-business-to-mm-lite-api-using-the-intent-api) e [Cadastro Incorporado](/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers#onboard-a-business-to-mm-lite-api-using-embedded-signup). Antes da mudança, os parceiros precisavam solicitar a análise do app para receber acesso avançado a essa nova permissão, independentemente de o app ter ou não a intenção de chamar a [API de Insights](/docs/marketing-api/insights) para gerar métricas de conversão. Agora, os parceiros só precisarão solicitar acesso avançado a essa permissão via processo de análise se houver intenção do app em usar a API de Insights.

_Otimizações automáticas de criativos_

Adicionamos os recursos de [sobreposição de texto](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#text-overlays) e [animação de imagens](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#image-animation) às otimizações automáticas de criativos. Assim como outras otimizações, esses aprimoramentos automáticos são habilitados por padrão em todos os modelos, mas podem ser desabilitados durante os processos de criação ou edição.

## 20 de junho de 2025

_API de Mensagens de Marketing Lite_

As empresas na Rússia que antes não podiam enviar mensagens via API de Mensagens de Marketing Lite agora podem fazer isso. Essas empresas não terão acesso a alguns recursos avançados, mas ainda poderão aproveitar todos os outros benefícios, como os exclusivos [recursos de marketing](/documentation/business-messaging/whatsapp/marketing-messages/overview). Para saber mais, consulte este artigo sobre a [disponibilidade de recursos por região geográfica](/documentation/business-messaging/whatsapp/marketing-messages/get-started#russia).

## 10 de junho de 2025

_API de Mensagens de Marketing Lite_

Adicionamos dois novos campos à API de Insights para que você possa [ver referências de taxa de leitura e cliques via API](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics#benchmark-metrics), em vez de somente pelo Gerenciador do WhatsApp:

-   `marketing_messages_read_rate_benchmark`-   `marketing_messages_click_rate_benchmark`

## 23 de maio de 2025

_API de Mensagens de Marketing Lite_

Adicionamos compatibilidade com [deep links para Android](/documentation/business-messaging/whatsapp/marketing-messages/deep-links).

## 21 de maio de 2025

_API de Mensagens de Marketing Lite_

Adicionamos uma seção de [mensagens de erro](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics#error-metrics) ao Gerenciador do WhatsApp, que mostra um resumo dos erros encontrados pelos seus modelos em um determinado período.

## 20 de maio de 2025

_API de Mensagens de Marketing Lite_

Adicionamos [novos códigos de erro](/documentation/business-messaging/whatsapp/support#error-codes) para ajudar no diagnóstico de falhas nas mensagens. Eles estarão disponíveis a partir da versão 23.0 da Graph API.

-   `134100`-   `134101`-   `134102`-   `134103`

## 16 de abril de 2025

_API de Mensagens de Marketing Lite_

_Acesso limitado disponível para [rastreamento de eventos de clique](/documentation/business-messaging/whatsapp/marketing-messages/track-click-events)._

Estamos oferecendo um lançamento limitado do acesso a webhooks para eventos de clique em mensagens de marketing enviadas usando a API de Mensagens de Marketing Lite. [Leia a página "Rastreamento de eventos de clique" para saber mais](/documentation/business-messaging/whatsapp/marketing-messages/track-click-events)

### 11 de abril de 2025

_API de Mensagens de Marketing Lite_

_Acesso antecipado às otimizações automáticas de criativos_

Estamos realizando um piloto de uma nova funcionalidade de otimização exclusiva da API de Mensagens de Marketing Lite (não disponível na API de Nuvem), que aprimora automaticamente o apelo visual e o engajamento das mensagens de marketing. Assim como acontece no criativo Advantage+, essa solução testa pequenas variações do seu cabeçalho de imagem, com diferentes orientações de corte ou filtros de cor, e seleciona automaticamente a variante que gera a maior taxa de cliques ao longo do tempo, sem que você precise fazer nenhuma intervenção.

Um pequeno grupo de empresas terá acesso antecipado a esse recurso a partir de 5 de maio, com a possibilidade de desativar modelos por meio da API de Modelos de Mensagem. Para saber mais, consulte [Otimizações automáticas de criativos](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#automatic-creative-optimizations).

Se quiser aproveitar o acesso antecipado a esse recurso, fale com seu parceiro.

## 1º de abril de 2025

_API de Mensagens de Marketing Lite_

_A API de Mensagens de Marketing Lite já está na versão beta pública_

Confira os detalhes da atualização:

-   **Autocadastro para parceiros e empresas**: as empresas e os provedores de soluções (incluindo Parceiros de Solução, Provedores de Tecnologia e Parceiros de Tecnologia) agora podem usar fluxos de autoatendimento para fazer a integração com a API de Mensagens de Marketing Lite. Para saber mais, consulte o documento sobre [integração](/documentation/business-messaging/whatsapp/marketing-messages/onboarding).-   **Disponibilidade internacional**: a API de Mensagens de Marketing Lite agora está disponível em todas as regiões compatíveis com a API de Nuvem. Observe que, embora a API esteja disponível, algumas variações geográficas de recursos podem ser aplicadas. [Veja os detalhes aqui](/documentation/business-messaging/whatsapp/marketing-messages/get-started#geographic-availability-of-features).

## 27 de março de 2025

_API de Mensagens de Marketing Lite_

_Atualizações nos limites de caracteres e emojis em modelos_

Esta atualização se aplica a todos os modelos da API de Business Messaging e não é específica para a API de Mensagens de Marketing Lite (também afeta a API de Nuvem).

Como parte dos nossos esforços contínuos para melhorar o desempenho e a experiência do usuário na nossa plataforma de mensagens, estamos lançando mudanças no componente de corpo dos modelos de marketing via API de Nuvem e API de Mensagens de Marketing Lite. Essas mudanças impactarão os limites de caracteres e o uso de emojis no componente de corpo, dependendo do formato e das tags do modelo.

**Principais atualizações**:

-   Haverá variação nos limites de caracteres para o componente de corpo conforme o formato e as tags do modelo.-   O número de emojis permitido no componente também pode ser limitado.

Essas atualizações foram projetadas para melhorar o desempenho e a experiência do usuário na nossa plataforma de mensagens. Embora talvez exijam alguns ajustes no seu processo de criação de modelos, essas mudanças podem resultar em melhor desempenho e maior engajamento com seus clientes.

## 1º de dezembro de 2024

_API de Mensagens de Marketing Lite_

_Disponibilidade nos EUA e verificação da qualificação para a API de Mensagens de Marketing Lite via API_

As empresas nos EUA agora estão qualificadas para usar a API de Mensagens de Marketing Lite.

Além disso, um novo parâmetro de adesão permite que empresas e parceiros verifiquem programaticamente a qualificação para a API de Mensagens de Marketing Lite. Confira a documentação da API para saber mais.

## 18 de novembro de 2024

_API de Mensagens de Marketing Lite_

_Latência reduzida em operações síncronas e assíncronas_

A equipe da API de Mensagens de Marketing Lite respondeu rapidamente ao feedback sobre a latência “assíncrona” ou de “entrega”. Isso é definido como o tempo entre o recebimento de uma chamada pela API de Mensagens de Marketing Lite e o envio, pela mesma API, de um webhook do tipo “entregue”, considerando que o usuário esteja online no momento do envio da mensagem.

Anteriormente, a API de Mensagens de Marketing Lite tinha um tempo de entrega “assíncrono” p99 de 12 segundos, em comparação com o p99 de 5 segundos na API de Nuvem. Esse tempo foi reduzido para 9 segundos. Nenhuma ação é necessária por parte da empresa ou do parceiro.

## 15 de novembro de 2024

_API de Mensagens de Marketing Lite_

_Novo fluxo de integração simplificado para empresas gerenciadas por parceiros_

A MM Lite está lançando uma nova forma para que parceiros orientem as empresas na assinatura dos Termos de Serviço e na migração para a mesma.

Paralelamente ao fluxo de Cadastro Incorporado já disponível, o parceiro também poderá iniciar o seguinte processo:

-   O parceiro faz uma chamada a um ponto de extremidade da “API de Intenção” para indicar a identificação do Gerenciador de Negócios que deseja ajudar a migrar para a MM Lite. Se um ID do Gerenciador de Negócios tiver Contas do WhatsApp Business em nome de terceiros ("On-Behalf-Of"), elas deverão ser migradas para o modo "compartilhado" antes desse evento.-   Os administradores da identificação receberão uma notificação informando que foram convidados a começar a enviar mensagens de marketing com otimizações via MM Lite. Essa notificação é enviada pelo Gerenciador de Negócios e por email.-   Depois que o convite for aceito e forem concluídas a configuração da MM Lite e a sincronização da conta de anúncios, um webhook será disparado para o parceiro e todos os assinantes, indicando que a integração da MM Lite foi finalizada e incluindo as identificações de anúncios vinculadas.-   O parceiro agora pode chamar o ponto de extremidade de “envio” da API de Mensagens de Marketing Lite em nome dessa empresa e usar uma API para obter um token atualizado com permissão para acessar as métricas da conta de anúncios da empresa.

Consulte a documentação da API para saber mais sobre esse novo fluxo de integração.

## 8 de novembro de 2024

_API de Mensagens de Marketing Lite_

_Compatibilidade com relatórios de conversão no app_

As empresas agora podem usar a API de Mensagens de Marketing Lite para mensurar quando mensagens de marketing levam os usuários a executar ações no app, como comprar, pesquisar ou alcançar níveis em jogos. Consulte "Integrar com conversões no app" para saber mais detalhes.

## 1° de novembro de 2024

_API de Mensagens de Marketing Lite_

_Métricas no Gerenciador do WhatsApp_

Para representar esse novo tipo de conversa, as conversas da API de Mensagens de Marketing Lite estão disponíveis em todas as superfícies onde relatórios são oferecidos:

-   Interface do usuário do Gerenciador de Anúncios \[recomendado\]-   "API de Insights" da API de Marketing \[recomendado\]-   Páginas "Insights da conta do WhatsApp Business" e "Insights do modelo" na interface do usuário do Gerenciador do WhatsApp-   API de Gerenciamento do WhatsApp Business-   Webhooks de preços

Para ver informações completas sobre como visualizar as métricas da API de Mensagens de Marketing Lite via API e em webhooks de preços, consulte a documentação da API de Mensagens de Marketing Lite.

-   Na resposta da “API de Insights” da API de Marketing, os eventos da API de Mensagens de Marketing Lite podem ser retornados usando os campos `marketing_messages_[event]`.-   No ponto de extremidade “Análise de Modelos” da API de Gerenciamento do WhatsApp Business, os eventos da API de Mensagens de Marketing Lite podem ser retornados usando o parâmetro de consulta `MARKETING_MESSAGES_LITE_API`.-   Nos pontos de extremidade "Análise da conversa" da API de Gerenciamento do WhatsApp Business, os eventos da API de Mensagens de Marketing Lite podem ser retornados usando o parâmetro de consulta `product_type` com o valor "MARKETING\_LITE".-   Nos webhooks de status da mensagem, os campos `conversation:origin:type` e `pricing:category` serão exibidos como `marketing_lite`.

As empresas agora podem ver as métricas de MM Lite como "Marketing - lite" na interface do Gerenciador do WhatsApp:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/475969840_997283928986096_7019011551543213590_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=L91Wag7jdGwQ7kNvwGzipuP&_nc_oc=AdniaddzqidloZtO6ggXj6zImfIIcimWZko-GZjOPJ_Jzj7M544xgikJhhUHIhRJEqA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=3IkOPSz8dtHZ_pDuVAGVaQ&oh=00_AfqBGWkro-LY02J4_XE8JvHhSSw8uUYITXEZYGw0cgUuDg&oe=698E5FE3)

Recomendamos que você faça a integração com a “API de Insights” da API de Marketing para métricas da API de Mensagens de Marketing Lite e incentive as empresas finais a acessarem a interface do Gerenciador de Anúncios para visualizar as métricas, em vez de usar o Gerenciador do WhatsApp. A interface do Gerenciador de Anúncios e a API de Insights mostram métricas de conversão que não estão disponíveis nas interfaces do WhatsApp e continuarão sendo a principal plataforma de relatórios da API de Mensagens de Marketing Lite, exibindo novas métricas e funcionalidades à medida que a API evolui.

A documentação da API para parceiros foi atualizada para explicar como obter as métricas da API de Mensagens de Marketing Lite via API.

A documentação da API foi atualizada para explicar como obter métricas da API de Mensagens de Marketing Lite via API. Consulte [Como visualizar métricas](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics).

## 30 de outubro de 2024

_API de Mensagens de Marketing Lite_

_Recurso exclusivo: TTLs para mensagens de marketing_

Continuamos investindo para melhorar a experiência dos consumidores e os resultados para as empresas. Lançamos os períodos de validade personalizados (time-to-live ou TTL, pelas iniciais em inglês) na API de Mensagens de Marketing Lite para garantir que as mensagens de marketing sejam sempre oportunas e relevantes para os usuários, proporcionando melhor desempenho nos negócios. Também estamos atualizando nosso intervalo personalizado de TTL em modelos de utilidade e autenticação para oferecer mais controle e flexibilidade às empresas.

-   Marketing: de 12 horas a 30 dias para empresas na API de Mensagens de Marketing Lite-   Utilidade: de 30 segundos a 12 horas para empresas na API de Nuvem-   Autenticação: de 30 segundos a 15 minutos para empresas na API de Nuvem ou na API Local

As empresas podem personalizar o TTL dos modelos de marketing, utilidade e autenticação durante a criação do modelo no Gerenciador do WhatsApp (por meio de incrementos predefinidos) e via API (em incrementos de um segundo). Você pode encontrar essas informações na [documentação para desenvolvedores](/documentation/business-messaging/whatsapp/templates/overview#time-to-live--customization-and-defaults) e na [Central de Ajuda para Empresas](https://www.facebook.com/business/help/1305007343713790).

## 15 de outubro de 2024

_API de Mensagens de Marketing Lite_

_Novas tabelas de tarifas e categoria de preços para MM Lite_

As conversas de mensagens de marketing iniciadas por meio da API de Mensagens de Marketing Lite são contabilizadas e cobradas separadamente das iniciadas por meio da API de Nuvem. Isso inclui atualizações nos webhooks de preços. Para saber mais, consulte [Preços](/documentation/business-messaging/whatsapp/pricing).

## 25 de junho de 2024

_API de Mensagens de Marketing Lite_

_Exibição de métricas da API de Mensagens de Marketing Lite na API de Análise de Modelos_

As métricas da API de Mensagens de Marketing Lite agora estão disponíveis no ponto de extremidade da API de Análise de Modelos. Consulte a documentação para saber mais.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)