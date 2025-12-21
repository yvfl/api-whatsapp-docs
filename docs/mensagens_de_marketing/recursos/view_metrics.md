<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/view-metrics -->
<!-- Scraped: 2025-12-20T17:29:28.335Z -->

# Consultar métricas

Updated: 29 de out de 2025

Válido a partir de 1º de julho de 2025: os preços por mensagem já estão em vigor. Além disso, as taxas para mensagens de marketing na API de Nuvem e na API de MM Lite são consistentes, de acordo com as tabelas de tarifas publicadas [neste link](/documentation/business-messaging/whatsapp/pricing).

Planejamos lançar a MM Lite para o público geral no quarto trimestre de 2025.

As métricas de conversão estarão disponíveis somente em outubro de 2025, na interface do usuário do Gerenciador do WhatsApp e na API de Gerenciamento do WhatsApp Business usadas com a API de Nuvem.

Como resultado, as seguintes métricas de conversão serão descontinuadas:

-   Métricas de conversão na interface do usuário do Gerenciador de Anúncios (**8 de setembro de 2025**).-   Métricas de conversão na API de Insights sobre Anúncios (**1º trimestre de 2026**).

As empresas que usam a API de MM Lite podem encontrar métricas em quatro ferramentas:

-   Na Plataforma do WhatsApp Business
    -   Interface do usuário do Gerenciador do WhatsApp-   [API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-business-management-api)-   Nas ferramentas de anúncios (opcional)
    -   Aba "Mensagens de marketing" da interface do usuário do Gerenciador de Anúncios-   API de Marketing "[API de Insights](/docs/marketing-api/insights)"

Relatórios de ROI

Plataformas de gerenciamento do WhatsApp Business

Ferramentas de anúncios

Mensagens enviadas, entregues e lidas

S

S

Valor total gasto

S

S

Custo por entrega

S

S

Cliques no link de CTA para URL

S

S

Custo por clique

S

S

Taxa de cliques no link de CTA para URL

N

S

Adição ao carrinho (web + app)

S

S`*`

Finalização da compra iniciada (web + app)

S

S`*`

Compra, valor da compra (web + app)

S

S`*`

Ativações no app

S

S`*`

Respostas rápidas

N

N

`*` A empresa precisa relatar esse evento de conversão por meio do Pixel da Meta ou da API de Conversões para eventos do app. [Consulte o artigo Como começar a usar o Pixel da Meta e a API de Conversões](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.facebookblueprint.com%2Fstudent%2Factivity%2F212737&h=AT3uo6QZ_B20jvF9r_fxy_qbiQ9Tu09KQ2D3fiGmJQK9m1S8xFuVlhc508RfCx13BakFzCg19a4yQitQYyEdDD3S7QaxjvLC-1F72YZUBWP3ull0cXrMx2PXf1L_KqLGMH8U3elEFXTQ-B9QmfYM0dJTAYg).

## Consultar métricas via interfaces do usuário

Depois de enviar mensagens de marketing pela API de MM Lite, é possível consultar as métricas somente de leitura sobre envios, cliques e conversões de duas interfaces do usuário:

-   Gerenciador do WhatsApp (não inclui conversões).-   Aba "Mensagens de marketing" do Gerenciador de Anúncios (inclui conversões).

As métricas da MM Lite (não incluindo conversões) podem ser encontradas no Gerenciador do WhatsApp nas telas Telefone e Modelo:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/476092006_1150702876444748_6174975982108219980_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=A4Fu0-RzQkUQ7kNvwEAGL4d&_nc_oc=AdmQISr7QhWGOo6f6aelJ7LAHavLe-YsKUeGjBN69QpWs6FvgMAicNuXk-uO9bIZeW0&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=QPFpnA1np0wVOvGqnZSV7g&oh=00_Afm6UXLG6jIpNJ0vVIIiDAoKf-78dtzfcqFJ4dhTEgPQZQ&oe=6961386C)

### Métricas de referência e recomendações

As métricas de referência fornecem insights sobre o desempenho da sua empresa comparada a empresas semelhantes no seu setor. Essas métricas têm como base dados dos últimos 30 dias e tomam em consideração vários fatores que definem empresas semelhantes. Com base nas métricas de referência, fornecemos recomendações personalizadas para ajudar você a melhorar o desempenho do seu modelo. Se a taxa de leitura ou a taxa de cliques do seu modelo estiver abaixo da referência, forneceremos sugestões para turbinar o engajamento.

### Calcular referências

Para calcular as métricas de referência, consideramos as seguintes características:

-   **País ou região da empresa:** usamos o país da empresa como coorte padrão. Se o tamanho da coorte for muito pequeno, mudamos para a região da empresa.-   **Setor da empresa:** comparamos sua empresa com outras do mesmo setor ou área para fornecer referências relevantes.-   **Categorias de modelos:** comparamos apenas modelos dentro da mesma categoria (por exemplo, modelos de marketing com outros modelos de marketing) para garantir referências precisas e relevantes.

Em seguida, calculamos duas métricas de referência importantes:

-   **Referência da taxa de leitura:** calculamos essa métrica como o 75º percentil das taxas de leitura em empresas semelhantes. Representa a porcentagem de mensagens lidas do total de mensagens entregues.-   **Referência da taxa de cliques:** calculamos essa métrica como o 75º percentil das taxas de cliques em empresas semelhantes. Representa a porcentagem de cliques no link em relação ao total de mensagens entregues.

### Entender sua classificação e usar as métricas de referência

Ao consultar as métricas de referência, você encontrará uma classificação que indica o desempenho do seu modelo em comparação a modelos da mesma categoria. Essa classificação é calculada comparando o desempenho do seu modelo com a taxa de leitura ou a taxa de cliques de modelos semelhantes que tiveram alto engajamento nos últimos 30 dias.

Use as métricas de referência para comparar o desempenho do seu modelo com modelos de empresas semelhantes nos últimos 30 dias. As referências são calculadas diariamente, com um atraso de até dois dias. Dessa forma, você tem acesso a dados atualizados e relevantes para tomar decisões comerciais.

Para consultar as métricas de referência e recomendações:

-   Acesse o Gerenciador do WhatsApp e selecione "Gerenciar modelos".-   Escolha o modelo que deseja visualizar.-   Selecione a opção "API de Mensagens de Marketing Lite" no menu suspenso destacado em vermelho.-   As métricas de referência e os cartões de recomendação serão exibidos abaixo do cartão de prévia no painel à esquerda.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/489606125_1614641949479830_5793009593844219233_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wkn8Niu_tiMQ7kNvwGDKAz8&_nc_oc=AdmE6uyaZ2VuwLW31QSmVQVfWknSKId6Qk5Oy2H9sgdnwmHtpFo8sC9EzSf8EWLt9A4&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=QPFpnA1np0wVOvGqnZSV7g&oh=00_Afmu4dd7y9omB5Z1DZsI3Z3ApCNBvQsmW_8IR-jnXeD3LA&oe=6961230B)

### Métricas de erro

Para ver um resumo das mensagens de erro encontradas no seu modelo em determinado período, acesse o painel [**Gerenciador do WhatsApp**](https://business.facebook.com/latest/whatsapp_manager/) > **Modelos de mensagem** > **Gerenciar modelos** e clique no modelo em questão. Os erros serão exibidos na seção **Mensagens de erro**.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/494916197_1372780987177522_8462538949406730249_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=awAn9e-I3aEQ7kNvwH9axAp&_nc_oc=AdnPMlUKClexfnjHNswYDp8CkdStMhlHs9McvHIaZkmBVxGn47GUhUYBRqABfnyNV9E&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=QPFpnA1np0wVOvGqnZSV7g&oh=00_Afk0hG7tpxp7XjIZQOUyLG4pe9GVq0qSmEnQJOBGWFi3xA&oe=696106A3)

Para definir o período, use o seletor de datas na parte superior da página. Consulte [Códigos de erro da API de Nuvem](/documentation/business-messaging/whatsapp/support/error-codes) para ver a lista de códigos de erro e as respectivas descrições.

Os erros de entrega de mensagens mais frequentes são exibidos na aba **Resumo**:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/494939750_1018419840401159_1265335467156200602_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Iv8ujZffFQgQ7kNvwFRPO_a&_nc_oc=Adm_ehhyEMTz4-QhNGcATvzYf0atcCdnPePyzq_E9nlTf0itKvnE3v1499X1u30J0wA&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=QPFpnA1np0wVOvGqnZSV7g&oh=00_AfnOdOoyzn76sCvQSyEzrNo0hvohDrqviYruc7lD3s0MzA&oe=69611D16)

Essas informações também são exibidas como linhas de tendência na aba **Trend**:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/495675967_1251270636408181_5159031297095990508_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=k-A_GEROJ0IQ7kNvwE5ugVV&_nc_oc=AdlssvZTFLR1CsrYBDX8DgKlL19YhFJdQoz43xagX8bl593XKseLOsCxHLC3FlNIV98&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=QPFpnA1np0wVOvGqnZSV7g&oh=00_AfkaK9GxX9VFOL-VfzqaFbUvaQ5NFPR1mbinU_YTWZc_Jw&oe=69610FA8)

## Consultar métricas via APIs

Quando cadastrada na API de MM Lite, as análises dos modelos de mensagens de marketing da empresa envidas pela API ficarão disponíveis em duas APIs:

-   API de Gerenciamento do WhatsApp Business (não inclui conversões)-   "API de Insights" da API de Marketing (inclui conversões)

### Métricas de referência

Você pode consultar métricas de referência na API de Insights relacionadas a taxas de leitura e taxas de clique. Solicite os campos a seguir:

-   `marketing_messages_read_rate_benchmark`-   `marketing_messages_click_rate_benchmark`

#### Sintaxe

```
curl
'https://graph.facebook.com/<API_VERSION>/<AD_GROUP_ID>/insights?fields=<METRICS>' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

#### Exemplo de consulta

Esta consulta de exemplo retorna o número de mensagens lidas, a taxa de leitura e a taxa de leitura da avaliação comparativa, bem como o número de cliques no link do botão, a taxa de cliques e a taxa de cliques da avaliação comparativa, em um prazo padrão de 30 dias:

```
curl 'https://graph.facebook.com/v17.0/120229306178900226/insights?fields=marketing_messages_read,marketing_messages_read_rate,marketing_messages_read_rate_benchmark,marketing_messages_link_btn_click,marketing_messages_link_btn_click_rate,marketing_messages_click_rate_benchmark' \-H 'Authorization: Bearer EAACE...'
```

#### Exemplo de resposta

```
{  "data": [    {      "date_start": "2025-05-11",      "date_stop": "2025-06-09",      "marketing_messages_read": "265",      "marketing_messages_read_rate": "481.818182",      "marketing_messages_read_rate_benchmark": "70.27",      "marketing_messages_link_btn_click": "59",      "marketing_messages_link_btn_click_rate": "107.272727",      "marketing_messages_click_rate_benchmark": "18.74"    }  ],  "paging": {    "cursors": {      "after": "MAZDZD",      "before": "MAZDZD"    }  }}
```

### Mensurar o ROI com o ponto de extremidade "API de Insights" da API de Marketing (análises mais detalhadas, recomendado)

As empresas podem usar o [Pixel da Meta](https://www.facebook.com/business/tools/meta-pixel) e a [API de Conversões de Eventos do App](/docs/marketing-api/conversions-api/app-events) para enviar sinais à Meta quando os clientes realizam uma ação no site ou app depois de clicar em uma mensagem de marketing. As otimizações de conversão na conversa e os relatórios ainda não estão disponíveis para a API de MM Lite.

A [API de Insights](/docs/marketing-api/insights) é uma interface para recuperar estatísticas de anúncios. Dessa forma, a empresa pode consultar todas as métricas de análise de modelo, além de outras métricas relacionadas a quando as mensagens de marketing enviadas pela API de MM Lite geraram um evento relatado no site com o Pixel da Meta ou a API de Conversões, como quando um usuário adiciona um item ao carrinho ou finaliza a compra. **A empresa proprietária do Pixel deve ser a mesma proprietária da WABA.**.

#### Etapa 1: buscar identificações de anúncios para modelos usando o ponto de extremidade de modelos

Quando uma empresa se cadastra na API de MM Lite, uma conta de anúncios somente para leitura é criada para cada conta do WhatsApp Business (WABA, pelas iniciais em inglês) na respectiva identificação do Gerenciador de Negócios (BMID, pelas iniciais em inglês). Além disso, os modelos de mensagem de marketing da WABA são vinculados a um objeto de anúncio nessa conta. Cada modelo de mensagem de marketing na WABA também é vinculado a um conjunto de anúncios. Essas identificações são necessárias ao chamar a API de Insights para recuperar métricas relacionadas a campanhas de marketing enviadas pela API de MM Lite.

Quando a empresa está cadastrada nas APIs de MM Lite, o ponto de extremidade de modelo da API de Gerenciamento de Negócios retorna um parâmetro adicional que reflete as identificações dos anúncios.

-   `ad_id`-   `ad_account_id`-   `ad_campaign_id`-   `ad_adset_id`

Esses campos indicam a identificação do anúncio do objeto de anúncios vinculado para cada modelo de mensagem de marketing.

Chame o ponto de extremidade do modelo para recuperar as identificações dos anúncios de cada entidade de anúncio vinculada aos modelos de mensagem de marketing, para depois chamar a API de Insights.

Ponto de extremidade

Autenticação

`/WHATSAPP_BUSINESS_ACCOUNT_ID/message_templates`

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado no **Painel de Apps > WhatsApp > Configuração da API**.

Os parceiros de troca de mensagens empresariais precisam se autenticar usando um token de acesso com a permissão `whatsapp_business_messaging`.

Sintaxe da solicitação

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
  ?fields=category,ad_id,ad_adset_id,ad_campaign_id,ad_account_id
```

Consulte os documentos sobre [Modelos de mensagens GET](/documentation/business-messaging/whatsapp/templates/overview#retrieve-templates)

Caso queira buscar somente um modelo por vez, busque os campos de identificação do anúncio no nível do modelo.

Ponto de extremidade

Autenticação

`/<TEMPLATE_ID>/`

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado no **Painel de Apps > WhatsApp > Configuração da API**.

Os parceiros de troca de mensagens comerciais precisam fazer a autenticação usando um token de acesso com a permissão `whatsapp_business_management`.

Sintaxe da solicitação

```
GET /<TEMPLATE_ID>
  ?fields=category,ad_id,ad_adset_id,ad_campaign_id,ad_account_id
```

Consulte os documentos sobre [Modelos de mensagens GET](/documentation/business-messaging/whatsapp/templates/overview#retrieve-templates)

#### Etapa 2: chamar a API de Insights usando as identificações dos anúncios

Os integradores diretos ou parceiros de mensagens empresariais recuperam esses objetos de campanha somente para leitura usando os pontos de extremidade da API de Insights existentes:

Ponto de extremidade

Autenticação

`/AD_CAMPAIGN_ID/insights`

Os parceiros devem fazer a autenticação usando um token de acesso com a permissão `ads_read`.

Confira as métricas especificadas no nível de objeto do anúncio (ou seja, conta de anúncios, campanha, conjunto de anúncios ou identificação do anúncio) com base na identificação:

### Exemplo de solicitação

```
curl --verbose -s -G -d "access_token=${ACCESS_TOKEN}" https://graph.facebook.com/v19.0/${AD_ACCOUNT_ID|CAMPAIGN_ID|AD_SET_ID|AD_ID}/insights?fields=marketing_messages_sent%2Cmarketing_messages_read"
```

### Exemplo de solicitação

```
{  "data": [    {      "marketing_messages_sent": "2",      "marketing_messages_read": "1",      "date_start": "2023-09-24",      "date_stop": "2023-10-23"    }  ],  "paging": {    "cursors": {      "before": "MAZDZD",      "after": "MAZDZD"    }  }}
```

Esse é apenas um exemplo. Para ver todos os parâmetros disponíveis da API, consulte os documentos completos: [documentos da API de Insights](/docs/marketing-api/insights)

Todos os campos de insights disponíveis estão listados abaixo:

-   Enviada, lida, entregue, clique
    -   marketing\_messages\_sent-   marketing\_messages\_read-   marketing\_messages\_delivered-   marketing\_messages\_link\_btn\_click-   Taxas
    -   marketing\_messages\_delivery\_rate-   marketing\_messages\_read\_rate-   marketing\_messages\_link\_btn\_click\_rate-   Métricas de gastos
    -   marketing\_messages\_spend-   marketing\_messages\_cost\_per\_delivered-   marketing\_messages\_cost\_per\_link\_btn\_click-   Eventos de conversão
    -   marketing\_messages\_website\_add\_to\_cart-   marketing\_messages\_website\_initiate\_checkout-   marketing\_messages\_website\_purchase-   marketing\_messages\_website\_purchase\_values-   marketing\_messages\_app\_add\_to\_cart-   marketing\_messages\_app\_initiate\_checkout-   marketing\_messages\_app\_purchase-   marketing\_messages\_app\_purchase\_values

### Mensurar o ROI com o ponto de extremidade "Análise de modelo" da API de Gerenciamento do WhatsApp Business (análise básica)

O ponto de extremidade [Análise de modelo](/documentation/business-messaging/whatsapp/analytics#template-analytics) da API de Gerenciamento do WhatsApp Business oferece a opção de consultar métricas, incluindo: enviada, entregue, lida, clicada e custo.

Para buscar métricas de mensagens enviadas pela API de MM Lite, anexe o novo parâmetro "product\_type" com o valor abaixo. Se omitido, serão retornadas somente análises da API de Nuvem.

Ponto de extremidade

Autenticação

`/WHATSAPP_BUSINESS_ACCOUNT_ID/template_analytics`

Use o parâmetro de consulta `product_type` = `MARKETING_MESSAGES_LITE_API` para retornar dados da API de MM Lite.

Se omitido, serão retornadas somente análises da API de Nuvem.

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado no **Painel de Apps > WhatsApp > Configuração da API**.

Os parceiros de troca de mensagens comerciais precisam fazer a autenticação usando um token de acesso com a permissão `whatsapp_business_management`.

Sintaxe da solicitação

```
GET /WHATSAPP_BUSINESS_ACCOUNT_ID/template_analytics?start=<START_TIMESTAMP>&end=<END_TIMESTAMP>&template_ids=[‘TEMPLATE_ID’]&granularity=DAILY&product_type=marketing_messages_lite_api
```

Consulte os documentos sobre [Modelos de mensagens GET](/documentation/business-messaging/whatsapp/templates/overview#retrieve-templates)

### Mensurar o ROI com o ponto de extremidade “Análise de conversas” da API de Gerenciamento do WhatsApp Business (análise básica, não recomendada)

O ponto de extremidade [Análises de conversas](/documentation/business-messaging/whatsapp/analytics#conversation-analytics) da API de Gerenciamento do WhatsApp Business oferece a opção de consultar o número de conversas.

Para buscar métricas de mensagens enviadas pela API de MM Lite, use o parâmetro “conversation\_categories” como filtro, com o valor “MARKETING\_LITE”, conforme mostrado abaixo.

Ponto de extremidade

Autenticação

`/WHATSAPP_BUSINESS_ACCOUNT_ID/conversation_analytics`

Use o parâmetro de consulta `conversation_categories` = `MARKETING_LITE` para incluir dados da API de MM Lite.

Se omitido, a API retornará resultados de todas as categorias de conversa.

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado no **Painel de Apps > WhatsApp > Configuração da API**.

Os parceiros de troca de mensagens comerciais precisam fazer a autenticação usando um token de acesso com a permissão `whatsapp_business_management`.

Sintaxe da solicitação

```
GET /WHATSAPP_BUSINESS_ACCOUNT_ID/?fields=conversation_analytics.start(<START_TIMESTAMP>).end(<END_TIMESTAMP>).granularity(DAILY).conversation_categories(MARKETING_LITE).dimensions(["CONVERSATION_CATEGORY"])
```

Consulte os documentos: [GET Conversation Analytics](/documentation/business-messaging/whatsapp/analytics#conversation-analytics)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)