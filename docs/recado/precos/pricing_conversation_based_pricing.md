<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing -->
<!-- Scraped: 2025-12-20T17:23:41.683Z -->

# Preços baseados em conversa (OBSOLETO)

Updated: 14 de nov de 2025

O modelo de preços baseados em conversa ficou obsoleto. Em 1º de julho de 2025, ele foi substituído pelo modelo de [preços por mensagem](/documentation/business-messaging/whatsapp/pricing). O documento abaixo é somente para referência.

Este documento explica o funcionamento dos preços baseados em conversa na Plataforma do WhatsApp Business.

As cobranças são aplicadas por conversa, não por mensagem enviada/recebida.

As conversas são mensagens trocadas entre você e os clientes dentro de um período de 24 horas. Quando as mensagens enviadas por você são entregues aos clientes, a conversa é considerada iniciada, e a cobrança é efetuada. Os critérios que determinam quando uma conversa é iniciada e como ela é categorizada estão descritos abaixo.

As empresas são responsáveis por verificar a categoria atribuída aos modelos aprovados. Sempre que um modelo for usado, a empresa aceitará os custos associados à categoria aplicada no momento do uso.

## Categorias de conversa

As conversas se enquadram em uma das seguintes categorias:

-   **Marketing**: permitem que você atinja uma ampla gama de objetivos, desde gerar reconhecimento até impulsionar vendas e redirecionar clientes. Os exemplos incluem anúncios de novos produtos, serviços ou recursos, promoções/ofertas direcionadas e lembretes de abandono de carrinho.-   **Utilidade**: permitem acompanhar ações ou solicitações do usuário. Os exemplos incluem confirmação de aceitação, gerenciamento de pedidos/entregas (por exemplo, atualização de entrega), atualizações ou alertas de conta (por exemplo, lembrete de pagamento) ou pesquisas de feedback.-   **Autenticação:** permitem que você confirme a identidade do usuário usando códigos de acesso descartáveis em várias etapas do processo de login (por exemplo, verificação e recuperação da conta ou desafios de integridade).-   **Serviço**: permitem que você resolva dúvidas dos clientes.

As conversas de marketing, utilidade e autenticação só podem ser iniciadas com modelos de mensagem. As conversas de serviço podem ser iniciadas com qualquer tipo de mensagem que não seja de modelo.

Consulte [Tipos de mensagens](/documentation/business-messaging/whatsapp/messages/send-messages#message-types) para saber mais sobre os diferentes tipos de mensagens que você pode enviar aos clientes.

## Como iniciar conversas

As conversas são iniciadas quando você envia uma mensagem a um cliente, respeitando as condições a seguir.

### Conversas de marketing, utilidade e autenticação

Quando você envia um modelo aprovado de autenticação, utilidade ou marketing a um cliente, verificamos se há uma conversa aberta entre você e o cliente que corresponda à **categoria** do modelo. Se já houver, não será aberta uma nova. Se não houver, uma nova **conversa dessa categoria** será aberta e durará 24 horas.

Por exemplo:

-   **Hora 0:** você envia uma promoção direcionada ([mensagem de modelo](/documentation/business-messaging/whatsapp/messages/template-messages) de marketing) a um cliente. Não há uma conversa de marketing aberta entre você e o cliente; então, uma conversa dessa categoria que dura 24 horas é aberta.-   **Hora 4:** o cliente faz um pedido no seu site, e você envia uma confirmação (mensagem de modelo de utilidade). Não há conversa de utilidade aberta entre você e o cliente; então, uma conversa dessa categoria que dura 24 horas é aberta.-   **Hora 10:** você envia uma confirmação de envio (mensagem de modelo de utilidade) ao cliente. Já existe uma conversa de utilidade aberta entre você e o cliente; então, não é aberta uma nova conversa dessa categoria.

Para ver mais detalhes sobre as categoriais e saber como escolher a opção apropriada ao criar um modelo de mensagem, consulte [Categorização de modelos](/documentation/business-messaging/whatsapp/templates/template-categorization).

Para ver mais exemplos, consulte nosso [PDF de detalhamento de preços](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F350685135_631521772182777_716278591301876804_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DjA8Zp3h_XN0Q7kNvwGs1rff%26_nc_oc%3DAdmu9HYQO_WQLuAH25ZHTPKO1HfW6M1zQzgJWTq42e_TT7KW8hqWpoScqPf3c2o7b7w%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_AfmP4hwdi0XpvAXkZ9jA34WZjiDlHG4Wtw0L2njtvJf9dA%26oe%3D694CB050&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ).

### Conversas de serviço

As conversas de serviço agora são gratuitas. Essa mudança não afeta a forma como as conversas de serviço são iniciadas.

As conversas de serviço são iniciadas quando qualquer mensagem que não seja de modelo é entregue ao cliente e não há conversas abertas de **nenhuma categoria** entre você e ele.

Para que você possa enviar uma mensagem que não seja um modelo, deve existir uma [janela de atendimento](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) entre você e o cliente.

Por exemplo:

-   **Hora 0:** você envia uma promoção direcionada (modelo de marketing) a um cliente. Não há uma conversa de marketing aberta entre você e o cliente; então, uma conversa dessa categoria que dura 24 horas é aberta.-   **Hora 4:** o cliente envia uma mensagem a você. Isso abre uma janela de atendimento ao cliente, permitindo que você envie a ele qualquer tipo de mensagem nas 24 horas subsequentes.-   **Hora 5:** você envia uma mensagem de lista interativa ao cliente. Já existe uma conversa aberta entre você e o cliente (nesse caso, uma conversa de marketing); então, não é aberta uma conversa de serviço.-   **Hora 24:** a conversa de marketing expira.-   **Hora 25:** a janela de atendimento de 24 horas ainda está aberta; então, você envia uma segunda mensagem de texto ao cliente. Não há mais nenhuma conversa aberta entre você e o cliente; então, uma conversa de serviço com duração de 24 horas é aberta.-   **Hora 26:** a janela de atendimento de 24 horas ainda está aberta; então, você envia uma terceira mensagem de texto ao cliente. Uma conversa de serviço aberta já existe entre você e o cliente; então, uma nova conversa dessa categoria não é aberta.

Para ver mais exemplos, consulte nosso [PDF de detalhamento de preços](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F350685135_631521772182777_716278591301876804_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DjA8Zp3h_XN0Q7kNvwGs1rff%26_nc_oc%3DAdmu9HYQO_WQLuAH25ZHTPKO1HfW6M1zQzgJWTq42e_TT7KW8hqWpoScqPf3c2o7b7w%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_AfmP4hwdi0XpvAXkZ9jA34WZjiDlHG4Wtw0L2njtvJf9dA%26oe%3D694CB050&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ).

## Janelas de atendimento ao cliente

Consulte [Janelas de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows).

## Duração da conversa

As conversas de marketing, utilidade, autenticação e serviço duram 24 horas, a menos que sejam encerradas por uma [conversa com ponto de entrada gratuito](#free-entry-point-conversations).

As conversas com ponto de entrada gratuito têm 72 horas de duração.

## Múltiplas conversas

É possível ter múltiplas conversas abertas entre você e um cliente. Isso pode ocorrer nas seguintes situações:

-   Há uma conversa de marketing, utilidade ou autenticação iniciada entre você e um cliente, e você envia um modelo de mensagem de outra categoria dentro de 24 horas.-   Há uma conversa de serviço aberta entre você e um cliente, e você envia um modelo de mensagem dentro de 24 horas.

## Conversas do período gratuito

Desde 1º de novembro de 2024, você pode abrir um número ilimitado de conversas de serviço sem custos. Para saber mais, consulte [Conversas de serviço gratuitas](/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing).

## Conversas com ponto de entrada gratuito

Uma conversa com ponto de entrada gratuito é iniciada se (1) um cliente usando um dispositivo com Android ou iOS (os clientes para desktop e web não são compatíveis) enviar uma mensagem para você por meio de um [anúncio de clique para o WhatsApp](https://www.facebook.com/business/help/447934475640650/) ou do [botão de chamada para ação em uma Página do Facebook](https://www.facebook.com/help/977869848936797) e (2) você responder dentro de 24 horas. Se você não responder nesse período, não será iniciada uma conversa com ponto de entrada gratuito. Nesse caso, você precisará enviar um modelo de mensagem ao cliente, iniciando uma conversa de marketing, utilidade ou autenticação (conforme a categoria do modelo).

As conversas com ponto de entrada gratuito duram 72 horas e iniciam com a entrega da mensagem. Quando uma conversa desse tipo é iniciada, todas as outras conversas entre você e o cliente são encerradas. Além disso, nenhuma outra conversa será iniciada até que a conversa com ponto de entrada gratuito expire.

Quando a conversa com ponto de entrada gratuito for aberta, você poderá enviar qualquer tipo de mensagem ao cliente sem cobranças adicionais. Porém, as mensagens que não são de modelo só poderão ser enviadas se houver uma janela de atendimento ao cliente aberta.

Por exemplo, se o cliente enviar a mensagem por um anúncio de clique para o WhatsApp às 10h, e você responder às 22h do mesmo dia com um modelo de mensagem:

-   A conversa com ponto de entrada gratuito iniciará às 22h e terá duração de 72h.-   Nesse intervalo, será possível enviar modelos de mensagem sem custos.-   Você poderá enviar mensagens que não são de modelo até às 10h do dia seguinte, quando a [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) será encerrada, já que é independente da conversa com ponto de entrada gratuito. Se o cliente enviar outra mensagem, uma nova janela de atendimento com duração de 24 horas será aberta, e você poderá enviar qualquer tipo de mensagem.

## Tarifas

As taxas variam de acordo com a categoria da conversa e o país ou a região. Baixe o cartão de taxas correspondente à moeda da sua conta do WhatsApp Business abaixo para ver as taxas por país/região para cada categoria de conversa.

Essas tarifas são aplicadas a todas as conversas iniciadas a partir de 1º de junho de 2023, à meia-noite, no fuso horário da conta do WhatsApp Business.

### Tabela de tarifas

Estas tabelas de tarifas representam as taxas atuais na nossa plataforma.

-   [Tabela de tarifas em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F488548499_1171612161004324_55612467351100312_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DgL8ZUqEfSysQ7kNvwH6pIKf%26_nc_oc%3DAdmSo789r4lxa3hLwZ-hS6fpAaqxRYqkSvpGRrWOb6fcKEJF5Vzd8uTVHtRu_i7Nk8A%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_AflVaZuPJvFi9ckWaBI2EL5m54gC3K25dBBP4WSwwIVj1g%26oe%3D694CC58F&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ)-   [Tabela de tarifas em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F487824680_1091145839722631_1669566641969332666_n.csv%3F_nc_cat%3D110%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DKjPYsQMQSp4Q7kNvwEaC8G-%26_nc_oc%3DAdk3KsCRMj-9kjX1v9kWTuxAG6yVKt5Zz1f2wJY2GNVmSaLAIfLlMPceuW9TSFeFc04%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_AfnPOaHaNEdYYUpuSoI8_w5kcUDVjQffcoEOM-vZWsDI2g%26oe%3D694CA3B4&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ)-   [Tabela de tarifas em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F487922265_2064407927393143_2707471833597803937_n.csv%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D_Hw4ViEc1goQ7kNvwGxGap-%26_nc_oc%3DAdnWup5tJ28IjDIw_E-G2W7cu3xvcBdqUKQi5BhWpfVWQg8UHEBJSe90M9gFQ1Tfviw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_AflPanibu6AD2k3IEK8qxnk3of3-S_WNyJokw1QJ75CRow%26oe%3D694CC6AA&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ)-   [Tabela de tarifas em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F487823906_2411534455881440_2846910812011875203_n.csv%3F_nc_cat%3D110%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DNETPsQypYbAQ7kNvwG2XJ0f%26_nc_oc%3DAdkNCF-kYKCWhqf4Yk5GyTim1LImTt87Lhl4KQjPqGa-lgJje_gZrww5ps-VIJ1woBY%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_AfkuzfiNYTQuVAzMTF1wO0_q2foYDBadT5Lnzeae8bPIIg%26oe%3D694CC852&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ)-   [Tabela de tarifas em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F487967306_962284482744376_932505914283994051_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dwf5-ZRZCDK0Q7kNvwHJgldA%26_nc_oc%3DAdkOUgwPu-pVNpHu_qZxNslL867OxuGp9z9HpiWZw4hzC76fUtVePSq6nN0z0auAYZA%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_AfnLzoDjqvrVT1hirbasFWmfiP1RPb-V8E8g_A9Vtrl4xA%26oe%3D694C946B&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ)-   [Tabela de tarifas em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F487931440_1489088359143806_5504887697981709499_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DE-nlf-l47okQ7kNvwF_lzxr%26_nc_oc%3DAdmChK2HuBo5YUg0jJ5iKcOYFIRxZSTFRAff01CtRbvypmzm_GH3XQpG5Ew1J_KGhXY%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_AflcWyCvIghcgX06aJNTcBqBhBXVypa6VTo7iVGZPFfwkg%26oe%3D694CA4CD&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ)

### Tarifas de autenticação internacionais

Em 1º de junho de 2024, incluiremos tarifas de autenticação internacionais. Consulte [Taxas internacionais de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) para saber mais sobre essas taxas e entender se elas se aplicam a você.

A partir de 1º de abril de 2025, reduziremos as taxas internacionais de autenticação no Egito, na Nigéria, no Paquistão e na África do Sul para manter nossos preços competitivos com canais alternativos.

### Preços da API de Mensagens de marketing Lite

Os preços por mensagem estão chegando na MM Lite API. A partir de 1º de julho de 2025, as taxas de marketing da API de Nuvem se aplicarão às mensagens enviadas por meio da MM Lite API.

A API de Mensagens de Marketing Lite ("API de MM Lite") tem preços diferentes. Consulte o [documento de preços da API de MM Lite](/documentation/business-messaging/whatsapp/pricing) para saber mais.

### Preços da API de Ligação do WhatsApp Business

A API de Ligação do WhatsApp Business tem preços diferentes. Consulte o [documento de preços da API de Ligações](/documentation/business-messaging/whatsapp/calling/pricing) para saber mais.

### Atualizações nas tabelas de tarifas

Conforme anunciado em junho de 2024, poderemos atualizar as taxas por trimestre. Para marketing, as atualizações refletem a demanda e o valor dessas mensagens. Para utilidade e autenticação, o objetivo é manter preços similares aos de canais alternativos.

Para isso, fizemos as seguintes atualizações:

-   **Em vigor a partir de 1º de abril de 2025**
    
    -   Redução das taxas de preços [internacionais de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) no Egito, na Nigéria, no Paquistão e na África do Sul.
        -   **Em vigor a partir de 1º de fevereiro de 2025**
    
    -   Reduzimos as [taxas de preços de autenticação](/documentation/business-messaging/whatsapp/pricing#rates) para estes países: Egito, Malásia, Nigéria, Paquistão, Arábia Saudita, África do Sul e Emirados Árabes Unidos.
        -   Adicionamos [tarifas de autenticação internacional](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) para estes países: Egito, Malásia, Nigéria, Paquistão, Arábia Saudita, África do Sul e Emirados Árabes Unidos.
        -   **Em vigor a partir de 1º de novembro de 2024**
    
    -   [As conversas de serviço](/documentation/business-messaging/whatsapp/pricing#service-conversations) agora são gratuitas para todas as empresas, incluindo as experiências conversacionais com tecnologia de IA.
        -   **Em vigor a partir de 1º de outubro de 2024**
    
    -   Atualizamos as [tarifas](/documentation/business-messaging/whatsapp/pricing#rates) na Índia, na Arábia Saudita, nos Emirados Árabes Unidos e no Reino Unido.
        -   **Em vigor a partir de 1º de agosto de 2024**
    
    -   Redução das [taxas de preços](/documentation/business-messaging/whatsapp/pricing#rates) de conversas de utilidade.
        

### Código telefônico do país

As cobranças por conversas se baseiam no número de telefone do usuário. Usamos o código do país e o prefixo de rede (código de área) do cliente para determinar o país. A tabela abaixo mostra como identificamos países ou regiões usando códigos de país. Os países não listados abaixo são categorizados como "Outro".

Mercados

Código telefônico  
(e o prefixo de rede, se aplicável)

Países  

Argentina  
  
Brasil  
  
Chile  
  
Colômbia  
  
Egito  
  
França  
  
Alemanha  
  
Índia  
  
Indonésia  
  
Israel  
  
Itália  
  
Malásia  
  
México  
  
Países Baixos  
  
Nigéria  
  
Paquistão  
  
Peru  
  
Rússia  
  
Arábia Saudita  
  
África do Sul  
  
Espanha  
  
Turquia  
  
Emirados Árabes Unidos  
  
Reino Unido

  

54  
  
55  
  
56  
  
57  
  
20  
  
33  
  
49  
  
91  
  
62  
  
972  
  
39  
  
60  
  
52  
  
31  
  
234  
  
92  
  
51  
  
7  
  
966  
  
27  
  
34  
  
90  
  
971  
  
44

América do Norte  

Canadá  
  
Estados Unidos

  

1  
  
1

Outros países da África  

Argélia  
  
Angola  
  
Benin  
  
Botsuana  
  
Burkina Faso  
  
Burundi  
  
Camarões  
  
Chade  
  
República do Congo (Brazzaville)  
  
Eritreia  
  
Etiópia  
  
Gabão  
  
Gâmbia  
  
Gana  
  
Guiné-Bissau  
  
Costa do Marfim  
  
Quênia  
  
Lesoto  
  
Libéria  
  
Líbia  
  
Madagascar  
  
Malawi  
  
Mali  
  
Mauritânia  
  
Marrocos  
  
Moçambique  
  
Namíbia  
  
Níger  
  
Ruanda  
  
Senegal  
  
Serra Leoa  
  
Somália  
  
Sudão do Sul  
  
Sudão  
  
Suazilândia  
  
Tanzânia  
  
Togo  
  
Tunísia  
  
Uganda  
  
Zâmbia

  

213  
  
244  
  
229  
  
267  
  
226  
  
257  
  
237  
  
235  
  
242  
  
291  
  
251  
  
241  
  
220  
  
233  
  
245  
  
225  
  
254  
  
266  
  
231  
  
218  
  
261  
  
265  
  
223  
  
222  
  
212  
  
258  
  
264  
  
227  
  
250  
  
221  
  
232  
  
252  
  
211  
  
249  
  
268  
  
255  
  
228  
  
216  
  
256  
  
260

Outros países da Ásia-Pacífico  

Afeganistão  
  
Austrália  
  
Bangladesh  
  
Camboja  
  
China  
  
Hong Kong  
  
Japão  
  
Laos  
  
Mongólia  
  
Nepal  
  
Nova Zelândia  
  
Papua-Nova Guiné  
  
Filipinas  
  
Singapura  
  
Sri Lanka  
  
Taiwan  
  
Tadjiquistão  
  
Tailândia  
  
Turcomenistão  
  
Uzbequistão  
  
Vietnã

  

93  
  
61  
  
880  
  
855  
  
86  
  
852  
  
81  
  
856  
  
976  
  
977  
  
64  
  
675  
  
63  
  
65  
  
94  
  
886  
  
992  
  
66  
  
993  
  
998  
  
84

Outros países da Europa Central e Leste Europeu  

Albânia  
  
Armênia  
  
Azerbaijão  
  
Belarus  
  
Bulgária  
  
Croácia  
  
República Tcheca  
  
Geórgia  
  
Grécia  
  
Hungria  
  
Letônia  
  
Lituânia  
  
Moldávia  
  
Macedônia do Norte  
  
Polônia  
  
Romênia  
  
Sérvia  
  
Eslováquia  
  
Eslovênia  
  
Ucrânia

  

355  
  
374  
  
994  
  
375  
  
359  
  
385  
  
420  
  
995  
  
30  
  
36  
  
371  
  
370  
  
373  
  
389  
  
48  
  
40  
  
381  
  
421  
  
386  
  
380

Outros países da Europa Ocidental  

Áustria  
  
Bélgica  
  
Dinamarca  
  
Finlândia  
  
Irlanda  
  
Noruega  
  
Portugal  
  
Suécia  
  
Suíça

  

43  
  
32  
  
45  
  
358  
  
353  
  
47  
  
351  
  
46  
  
41

Outros países da América Latina  

Bolívia  
  
Costa Rica  
  
República Dominicana  
  
Equador  
  
El Salvador  
  
Guatemala  
  
Haiti  
  
Honduras  
  
Jamaica  
  
Nicarágua  
  
Panamá  
  
Paraguai  
  
Porto Rico  
  
Uruguai  
  
Venezuela

  

591  
  
506  
  
1 (809, 829, 849)  
  
593  
  
503  
  
502  
  
509  
  
504  
  
1 (658, 876)  
  
505  
  
507  
  
595  
  
1 (787, 939)  
  
598  
  
58

Outros países do Oriente Médio  

Bahrein  
  
Iraque  
  
Jordânia  
  
Kuwait  
  
Líbano  
  
Omã  
  
Catar  
  
Yemen

  

973  
  
964  
  
962  
  
965  
  
961  
  
968  
  
974  
  
967

Outro  

Todos os outros países

  

Varia de acordo com o país

As informações da tabela acima também estão disponíveis no formato CSV:

-   [Código telefônico de país e mapeamento de taxas regionais em CSV](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F559604326_1510649803514615_3972087685039081235_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DXfWyFrXUK8YQ7kNvwH2QXHD%26_nc_oc%3DAdlqEvRNre15BGyxL3YIdR6rTPrVnVo6_SFmMM7WjlnTGTb_VnkZllKr_NhsBTDfaaw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3Dokax6Cj9BzX4Sk7KXq0Tiw%26oh%3D00_Afl2XBMCRK11yZfBDIU5O8dC7f63qCicRqFXiRkYFIZtTA%26oe%3D694CA013&h=AT2R2jNyMt_NP474xE_gCPQEEMHqJ8F1IVu2I3X-e9Y97KUXtHceqPRKamCZIe4SqqEbDm9N7pq9YcIbL4ErqlFHIyrwqlo5M_E5-iE_s3YKj3Pu-uEr9ZQb8sePEmuFiiKR2ceyIqTI5G4e0F9phNMY0sQ)

## Webhooks

Todos os webhooks de mensagem contêm informações de preços. Consulte:

-   API de Nuvem: [Atualizações de status de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)-   API Local: [Atualizações de status de mensagens](/docs/whatsapp/on-premises/webhooks/components#statuses-object)

## Cobrança

As cobranças e ações relacionadas são gerenciadas pelo Meta Business Suite. Consulte [Sobre a cobrança da sua conta do WhatsApp Business](https://www.facebook.com/business/help/2225184664363779) para saber mais.

## API de Mensagens de Marketing Lite

Ao usar a API de Mensagens de marketing Lite ("MM Lite API"), seu uso estará sujeito aos preços da API em questão. Consulte o documento [Preços da API de MM Lite](/documentation/business-messaging/whatsapp/pricing) para saber mais sobre preços e tarifas da API de MM Lite.

## Veja também:

-   [Conversas](/documentation/business-messaging/whatsapp/messages/send-messages)-   [Sobre a cobrança da sua conta do WhatsApp Business](https://www.facebook.com/business/help/2225184664363779)-   [Preços](/documentation/business-messaging/whatsapp/pricing)-   [Categorização de modelos](/documentation/business-messaging/whatsapp/templates/template-categorization)-   [Envio de mensagens com a API de Nuvem](/documentation/business-messaging/whatsapp/messages/send-messages)-   [Envio de mensagens com a API Local](/docs/whatsapp/on-premises/guides/messages)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)