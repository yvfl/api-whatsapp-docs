<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing -->
<!-- Scraped: 2025-12-20T17:23:17.846Z -->

# Preços na Plataforma do WhatsApp Business

Updated: 4 de nov de 2025

O método de precificação por mensagem já está em vigor e agora se aplica às empresas que já estejam no dia 1º de julho de 2025 ou em uma data posterior, com base no fuso horário da Conta do WhatsApp Business.

Este documento explica como funcionam os preços na Plataforma do WhatsApp Business.

## API de Nuvem e API de MM Lite

Para garantir o alinhamento com os padrões do setor, em 1º de julho de 2025, passamos a cobrar com base em **cada mensagem enviada**:

-   Só cobramos quando um [modelo de mensagem](/documentation/business-messaging/whatsapp/messages/template-messages) é entregue (`"type":"template"`).-   As taxas variam de acordo com a [categoria do modelo de mensagem](#message-template-categories) e com o [código telefônico do país](#country-calling-codes) pertencente ao número de telefone do destinatário no WhatsApp.

Geramos valor às empresas de diversas maneiras:

-   Todas as mensagens que não sejam de modelo são gratuitas (`"type":"text"`, `"type":"image"` e assim por diante). Essas mensagens só podem ser enviadas dentro de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) aberta. Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/messages/send-messages#sending-messages) para ver uma lista com os tipos de mensagens.-   Os modelos de utilidade entregues dentro de uma janela aberta de atendimento ao cliente são gratuitos.-   É possível acessar [taxas mais baixas](#volume-tiers) para mensagens de modelo de autenticação e utilidade, com base no volume de mensagens.-   Todas as mensagens serão gratuitas por 72 horas, incluindo mensagens de modelo, quando forem enviadas dentro de uma [janela aberta de ponto de entrada gratuito](#free-entry-point-windows).

## Informações sobre preços

Nosso PDF explicativo sobre preços descreve nossa forma de cobrança e as diversas maneiras pelas quais geramos valor para as empresas:

[PDF de Informações sobre preços](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.2365-6%2F506409115_515804291560768_5477144239594007982_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3De280be%26_nc_ohc%3DVSxM0Zm41rgQ7kNvwH8nSoh%26_nc_oc%3DAdnc_CRnTGmXMFTxe_fe7QXnSegeuUrBjesXb3LUHmisEhuvbrGtrP7hjYLEkjmsuM4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AflU84wd8knt5K8c0AIrI_uK6mwutVNzzvTtlCkYHytuww%26oe%3D69610BBA&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)

## Categorias dos modelos de mensagens

Ao contrário das mensagens que não usam modelo, as mensagens com modelo são o único tipo que pode ser enviado fora da janela de atendimento ao cliente. Veja como os modelos podem ser categorizados:

-   Marketing-   Utilidade-   Autenticação

Consulte [Categorização de modelos](/documentation/business-messaging/whatsapp/templates/template-categorization) para entender como os modelos são categorizados.

### Comparação entre mensagens com e sem modelo

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571069280_1541820816822527_6328052606712176022_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=hrpbvLJRhMoQ7kNvwHVOx-s&_nc_oc=Adk-5Om-GGt3zycjcV780e09eYFkn8d_V1GWWY-rsKg8QRJ6hPiJiutx4Fnmc4oUQSs&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=EhMcqAXPbKPqMjbPIKT4hw&oh=00_AfnJOnR1jIhcHP-glcoJHNj5-exSdKWLOci7DX_1KsVY5Q&oe=696105AF)

-   CSW = [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows)-   FEP = [janela com ponto de entrada gratuito](#free-entry-point-windows)

As empresas são responsáveis por verificar a categoria atribuída aos modelos aprovados. Sempre que um modelo for usado, a empresa aceitará os custos associados à categoria aplicada no momento do uso.

## Exemplo de cobrança

No exemplo abaixo, uma empresa envia 4 mensagens para um usuário do WhatsApp, mas é cobrada por apenas 2 (1 cobrança de marketing e 1 cobrança de utilidade).

Hora

Ação

Taxa

Motivo

0

Você envia uma mensagem de modelo de marketing para um usuário do WhatsApp, promovendo seu novo produto.

Marketing

Todas as mensagens de modelo de marketing são cobradas.

2

O usuário envia uma mensagem para você sobre o produto.

Essa ação abre uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) (“CSW”) que dura 24 horas.

\-

As mensagens enviadas por um usuário do WhatsApp a uma empresa não são cobradas.

3

Você envia uma [mensagem de texto](/documentation/business-messaging/whatsapp/messages/text-messages) ao usuário (`"type":"text"`), descrevendo os detalhes do produto.

Nenhum

Todas as mensagens sem modelos são gratuitas dentro de uma janela aberta de atendimento ao cliente.

4

O usuário compra o produto, e você envia a ele um modelo de utilidade confirmando o pedido.

Nenhum

A janela ainda está aberta, e os modelos de utilidade enviados dentro desse período são gratuitos.

26

A janela de atendimento ao cliente é fechada, o que significa que você não pode mais enviar mensagens que não sejam de modelo.

\-

Já se passaram 24 horas desde a última mensagem do usuário.

30

Você envia uma mensagem de modelo de utilidade ao usuário, com atualizações sobre o pedido.

Utilidade

As mensagens de modelo de utilidade enviadas fora do período de atendimento são cobradas, e não há nenhuma janela aberta entre você e o usuário.

## Calendário de preços

Para permitir que nossos clientes se planejem e se preparem melhor para atualizações de preços, o calendário a seguir será aplicado a experiências de mensagens e voz na plataforma do WhatsApp Business:

-   A Meta atualizará os preços apenas no _1º dia de cada trimestre_, ou seja, até quatro vezes por ano: 1º de janeiro, 1º de abril, 1º de julho e/ou 1º de outubro.-   A Meta fornecerá um aviso prévio mais adequado ao esforço necessário para implementar diferentes tipos de atualizações de preços, conforme descrito abaixo:

Tipo de atualização de preços

Exemplos

Aviso prévio mínimo

**Atualização da tabela de taxas**

Atualização da [taxa](#rates) para determinado mercado ou produto

Atualização dos níveis de volume para determinado mercado ou produto (apenas utilidade e autenticação)

Transferência de um mercado de uma [região de preços](#country-calling-codes) (por exemplo, "Outro") para outra ou para ser listado de forma independente na tabela de taxas

1 mês

**Complemento do modelo de precificação**

1º de julho de 2025: lançamento dos novos [limites de volume](#volume-tiers) para mensagens de utilidade e autenticação

3 meses

**Alteração no modelo de precificação**

1º de julho de 2025: atualização do nosso modelo de precificação, de cobrança por conversa para cobrança por mensagem

6 meses

## Taxas

As taxas variam de acordo com as informações de [categoria do modelo](/documentation/business-messaging/whatsapp/templates/template-categorization), [nível de volume](#volume-tiers) e [país/região](#country-calling-codes).

### Tabela de taxas e níveis de volume

Estas tabelas de taxas refletem as taxas e os níveis de volume atuais, vigentes a partir de 1º de outubro de 2025, com base no fuso horário da conta do WhatsApp Business. Essas informações também estão disponíveis no [site do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fproducts%2Fplatform-pricing%23rates&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k).

-   Taxas e níveis de volume em USD:
    
    -   [CSV com taxas em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557636343_817908614017168_9066613099892889401_n.csv%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DtEEe7DZfRx8Q7kNvwHHh4rk%26_nc_oc%3DAdmkvYAiBXCJI2JPQXpfeSTkcADDs6VscsnkszmrrSmDER43yMvM_UNR91ypVO3vdFo%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfnhV5c42cOaw6KhlXvPVxlQHjln_QLGoHy92xs3htlLeg%26oe%3D694CA6A1&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [CSV com níveis de volume em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F556818142_1827640941173413_7929040447386400731_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DPeHEFeqbcG8Q7kNvwE-QuNu%26_nc_oc%3DAdkhxQCtw2pyit6VTZFqLX2CrtiJUFQm_H8cPwSnCulqFjb4pHj7DitgBCHye_4Yplg%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_Afle7yDGJEBv3AVQz_45uxXz_f3ctIaytB-cEvowDrwC4A%26oe%3D694C9D88&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [PDF com taxas e níveis de volume em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557104697_1823032481924098_4782241935694017716_n.pdf%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DPbTT0qZQRtYQ7kNvwH6TrnP%26_nc_oc%3DAdmUTNS92uD-vC4iIsiowWLyxtSBZykt3RQNNEkeFvcYWOGORbhh1Rt2Y1Gt1MiTlhk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfknGDxG5t65ivKs9qOOEObbIPJ93sUQaM5Hb1hOg03V5w%26oe%3D694C9E4F&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   Taxas e níveis de volume em INR:
    
    -   [CSV com taxas em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557635547_757917087238644_814395677413795991_n.csv%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DDwa7IJggB44Q7kNvwE_Bz9J%26_nc_oc%3DAdnzjcsqaGim5U7wkS9BFCwh4YiR6fE1lJt1SYGpad0QKni46Z85OlfqULfkljAMxgo%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AflBbSYyFhdGbw4WN40UaAwe8WEbN5OZO_3Jc_Og-pYzFQ%26oe%3D694CC22C&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [CSV com níveis de volume em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F556577613_2305912433163376_4014408024159294112_n.csv%3F_nc_cat%3D107%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DE6iaefAoeHoQ7kNvwEDrtis%26_nc_oc%3DAdlnJ86GP7HZ2TshK5RftANeSiCbd_SIcrw95VbI_9nbq8PdYyIpaNfQS_0jZy-Af2s%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AflxEqZrYnoof4XkDM-YFyXMAy2_G0LMY84YaeYIZof7wA%26oe%3D694CC043&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [PDF com taxas e níveis de volume em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F556236655_776101971914218_2480089454730311036_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DNY2kUwlipj8Q7kNvwFjqTVp%26_nc_oc%3DAdmF0LCawVnIfxE5pQPjpVbUaeKYr88gj8O46apxnWfW_FxssIMPB73cSmLGh2cz6uY%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfnBDDxXUaZkgI8mxlwkUADokfkFbQpAPUbZyuDR_g4Mug%26oe%3D694CBDF3&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   Taxas e níveis de volume em IDR:
    
    -   [CSV com taxas em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557638144_1126483659041930_5747581239272064272_n.csv%3F_nc_cat%3D110%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DRND_aFIqSE8Q7kNvwEtWl58%26_nc_oc%3DAdmnxInvzDPQO4gv1uxh4QNALKICnoIICzBVY6t0QGy9Z-ZXrz_ONGFDtsoYoMIKswI%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AflGghY3sUpSaY3IWUVQ6wSLgiO1mBBtZOwG7Su8G0Ws6A%26oe%3D694CAFE1&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [CSV com níveis de volume em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557132201_1593100242057727_5352582585143961471_n.csv%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DGejmeXoBRVUQ7kNvwE5TCRR%26_nc_oc%3DAdmJvK9dew4vSEDPIqAcjUw9KkNBaxWNWCjmUA8murVYsi2DvaXo__ut41ASsuFZNm4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfnWB_eJ741Ew7V-PschQqYUJHxFVeDtcx61xa9Y29JjtQ%26oe%3D694CA1EC&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [PDF com taxas e níveis de volume em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F556736972_2638119056528579_2889533011772240391_n.pdf%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D1PbLYLEjQ34Q7kNvwEt3s19%26_nc_oc%3DAdm_F-ERaqKIYgnVG4rc5OKfk4zn4oNAgx3TlUpsRG15j89fg7jfo6AT1y5--c8FQCs%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfkEh7jHNp7R5AWBum-JgZA24TqGDR6QGETyJlVx4f_fMQ%26oe%3D694CB5CC&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   Taxas e níveis de volume em EUR:
    
    -   [CSV com taxas em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F556512163_786912034183068_4689619475093722786_n.csv%3F_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DungKbj8JYFUQ7kNvwFglHeb%26_nc_oc%3DAdnHeRtzaoMRbjo-2ESZJyPpHRspC_GAzRg5KI0a0ZD7kRJECxfVvRTmncAjhTlEF9o%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfmsPY_yLOOe-2XV9Tv818t-iV4w3z4bdirytlBmxCSbIg%26oe%3D694CB05B&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [CSV com níveis de volume em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557633743_1897872671098302_7841419432681147816_n.csv%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DbgjVlgwq194Q7kNvwEqwk49%26_nc_oc%3DAdkPrg649vYPOjyyp6JRQhCT3i0jOJiiDCL0ERw5-7eAd2jZKgVv_MbulnM4KkGklf4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfkDf-7DQvPPJbj8lk3PD4HJnqFo5AIkM8ux2Brijk3J0w%26oe%3D694C9C2C&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [PDF com taxas e níveis de volume em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557635441_639404779045715_6234566353547080220_n.pdf%3F_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DloxoHXInQ2gQ7kNvwEeCx-g%26_nc_oc%3DAdk_yDU7SzDI_QC-onF8Cl4wOCJmEYbZlpXYcQ4Jte38MQTGhn-ZYKuQjgSwQ48kL6I%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_Afn_CbGxUnPO2TtvCl8CoULFnJFj3AxOtvvs4LlQjTZdgA%26oe%3D694CC749&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   Taxas e níveis de volume em GBP:
    
    -   [CSV com taxas em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557617018_1811943299692210_4227937681798477321_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dil1s7qUz5JQQ7kNvwEWD7CA%26_nc_oc%3DAdnKV8qGVDJDKRDaAMqqm4OxODB5gECMQewCjPT9B_vHr1quvCH6-0uQgonsgdPPrrM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfkrM_eWY_yaoXST-9Wl4va-fqGPi1T_rjlYtcxounoQYw%26oe%3D694CBA30&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [CSV com níveis de volume em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F556947993_1456011442334361_7728446290449567480_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D7XgSTaok6y4Q7kNvwHFqpG6%26_nc_oc%3DAdlEVVI87iYVsa185qXDs7Z3gFt5T3GN_wL81qFKwehM3eyGFgZ5uUH6NTVyiKzOhJk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_Afmn-ka1Ro_0fj7deIVMjZIEILH4WIIJ9J-rECf6sT5V8g%26oe%3D694CB0ED&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [PDF com taxas e níveis de volume em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F556576758_1333746308286100_7140891643781096222_n.pdf%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DMu8FjhfuvpQQ7kNvwGsfXqu%26_nc_oc%3DAdmNpb0GyG_Ct-8Ke8nicFkwbuJ58HelqWKVh4f9SthX8r8xQmsmabhX2EwC55CLK20%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfnyUHidoYnJbCnAhJ8iGDsRGM7578RVhMMrRx591yGTuA%26oe%3D694CC670&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   Taxas e níveis de volume em AUD:
    
    -   [CSV com taxas em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F557628248_816467277609167_5319255993926778749_n.csv%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DVOFHoXZqAs4Q7kNvwHk7w-q%26_nc_oc%3DAdlN1IUK248-QmOL8oMZF4w0v-wOkUYrWVIMONaGQSLJ-sJdYb3YbFhhpMh7Arukpbc%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_Afm3NVwoWvdYYwN-sTmPwHxfzAKbUBDOloxC5vvxsbaEvA%26oe%3D694CC3D8&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [CSV com níveis de volume em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F556577608_595570603545860_5695074684850338615_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DxrVuuDpOQEoQ7kNvwHV3ppH%26_nc_oc%3DAdkI1OWpSjaeH0hPg0ZT74fqKZMhFNjFS2NDzfPZZoweu-ZdYl9RfRReYzQ_iZ10Ivc%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AflrAz-2jcSwSatajOqYptS9pWV0NPrpxJ2_yAR-zg8hCg%26oe%3D694CACB7&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)-   [PDF com taxas e níveis de volume em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F558365866_2021637291906509_7991974390756730763_n.pdf%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Df919jRC1TzsQ7kNvwE8lrdl%26_nc_oc%3DAdnnjs952jZFIRu1HUP4078hHPOIqIvls7LcEmqy-21v1K8tUu6AL4wJGOHCM0EElis%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AflSIeC3K1Dn4FkHa46VuBABWuk7BEBUbqzV_6THaNIANQ%26oe%3D694CB412&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)

### Atualizações nas tabelas de taxas

**Atualizações anteriores**

-   A partir de 1º de outubro de 2025, à meia-noite, conforme o fuso horário da conta do WhatsApp Business, serão aplicadas as taxas abaixo. As atualizações refletirão as mudanças a seguir:
    -   Aumento nas taxas de mensagens de marketing para os Emirados Árabes Unidos.-   Aumento nas taxas de mensagens de utilidade e autenticação para a Colômbia.-   Redução nas taxas de mensagens de marketing para o México.-   Redução nas taxas de mensagens de utilidade e autenticação para a Arábia Saudita, a Argentina e o Egito.-   O Zimbábue está incluído na região "Outros países da África" em vez de "Outro". As mensagens entregues a usuários do WhatsApp com o código de país +263 (Zimbábue) serão cobradas com base nas taxas da região "Outros países da África".-   Em vigor desde 1º de julho de 2025: reduzimos as taxas para mensagens de utilidade e autenticação em diversos mercados para garantir que nossos preços estejam alinhados com os de canais alternativos para esses casos de uso. As taxas de conversas de marketing se tornaram taxas de mensagens de marketing.-   A partir de 1º de abril de 2025: reduzimos as [taxas internacionais de conversas de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) para Egito, Nigéria, Paquistão e África do Sul.-   A partir de 1º de fevereiro de 2025: reduzimos as [taxas de conversas de autenticação](/documentation/business-messaging/whatsapp/pricing#rates) para Egito, Malásia, Nigéria, Paquistão, Arábia Saudita, África do Sul e Emirados Árabes Unidos.-   A partir de 1º de novembro de 2024: agora as [conversas de serviço](/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#service-conversations) são gratuitas para todas as empresas.-   A partir de 1º de outubro de 2024: atualizamos as [taxas de conversas de marketing](/documentation/business-messaging/whatsapp/pricing#rates) para Índia, Arábia Saudita, Emirados Árabes Unidos e Reino Unido.-   A partir de 1º de agosto de 2024: reduzimos as[taxas de conversas de utilidade](/documentation/business-messaging/whatsapp/pricing#rates).

### Taxas internacionais de autenticação

Países específicos estão sujeitos a uma taxa internacional de autenticação. Nossas tabelas de taxas refletem esses valores. Consulte [Taxas internacionais de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) para saber mais sobre essas taxas e entender se elas se aplicam a você.

### Código telefônico do país

As cobranças por conversas são baseadas no código telefônico do país referente ao número de telefone do destinatário no WhatsApp. A tabela abaixo mostra como identificamos países ou regiões usando os códigos telefônicos de cada país. Os países não listados abaixo são categorizados como **Outro**.

Essas informações também estão disponíveis em um arquivo CSV:

[Código telefônico de país e mapeamento de taxas regionais em CSV](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F559604326_1510649803514615_3972087685039081235_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DXfWyFrXUK8YQ7kNvwH2QXHD%26_nc_oc%3DAdlqEvRNre15BGyxL3YIdR6rTPrVnVo6_SFmMM7WjlnTGTb_VnkZllKr_NhsBTDfaaw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DEhMcqAXPbKPqMjbPIKT4hw%26oh%3D00_AfnjvErppatrrOLbSyWev1FqH65wfboVPslAFIsZK1U9KQ%26oe%3D694CA013&h=AT1Zwslyek_Td_M_f0b95JDdLYACXnwjSPuvrdj52wZT81jeMpiUsk8VDbsbJWGieKRlGbw_Lv7_m6SSFuLW5ORxAN9vDbBdfQBJw4UnJvrW-RZb6QVRW9wFDPk6YetGc-IymJSA1naVuARilrfFcHnzI6k)

  
  

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
  
Zimbábue

  

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
  
263

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

## Níveis de volume

Você pode aproveitar taxas mais baixas de utilidade e autenticação com base no número de mensagens enviadas por mês.

### Acúmulo por níveis

-   **As mensagens são agregadas no nível do portfólio empresarial, abrangendo todas as contas do WhatsApp Business (WABAs, pelas iniciais em inglês) pertencentes ao portfólio**: para definir quais níveis podem ser aplicados em determinado mês para cada combinação de mercado e categoria, as mensagens são somadas entre todas as WABAs do portfólio empresarial, conforme o par mercado-categoria (por exemplo, Brasil-autenticação, Brasil-utilidade, Índia-autenticação e assim por diante).-   **Apenas as mensagens cobradas contam para a definição dos níveis**: portanto, as mensagens a seguir não são contabilizadas:
    -   Modelos de utilidade entregues aos usuários do WhatsApp dentro de uma janela aberta de atendimento ao cliente-   Modelos de utilidade entregues dentro de uma [janela de ponto de entrada gratuito](#free-entry-point-windows)-   **Os níveis de volume serão determinados exclusivamente pela Meta**: todos os dados de insights são aproximados devido a pequenas variações no processamento das informações. Não se deve depositar confiança excessiva nos dados de insights.

### Dinâmica-chave

-   **Os níveis são específicos por mercado e categoria**: os níveis de volume seguem nossas tabelas de taxas e variam conforme o mercado (por exemplo, Brasil ou Outros países da América Latina) e a categoria (utilidade, autenticação).-   **As taxas são específicas por nível**: quando uma empresa envia mensagens suficientes em uma determinada combinação de mercado e categoria para atingir o próximo nível, ela acessa a taxa correspondente à nova faixa, aplicável às mensagens do nível em questão. Essa taxa se aplica a todas suas WABAs.-   **Os níveis são redefinidos todo mês**: no início de cada novo mês (meia-noite no fuso horário da WABA), a contagem de mensagens é zerada, e as empresas começam a acumular mensagens para aquele mês.

### Exemplos de níveis de volume

A tabela abaixo é ilustrativa e destaca apenas a dinâmica dos níveis de volume. Consulte nossas [tabelas de taxas](#rate-cards-and-volume-tiers) para conferir os valores cobrados.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/502514970_1202956304344062_4629097874159039633_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=H7bRJSPBcqsQ7kNvwEwC1ii&_nc_oc=AdlgvFxH4bnjiLaYHKcr30xRkVzBwCoijS3wVZpi0NdsK6rUjRQtHZPSUAA5z8Yx3a0&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=EhMcqAXPbKPqMjbPIKT4hw&oh=00_AfmQMaIq9hdbVeZ0Gods-q7jvpl3bjee6Fv9ZvPSrHVsGg&oe=696105D1)

Veja abaixo vários exemplos para destacar como nossos níveis funcionam e o que cobraríamos em determinado mês para uma combinação específica de mercado e categoria. Os exemplos referem-se à tabela ilustrativa exibida acima:

Exemplo 1 – uma empresa que envia um total de mensagens de autenticação B em um mês para a Índia será cobrada da seguinte forma:

-   Taxa da lista para as primeiras mensagens A-   Taxa do nível 1 para as mensagens de A+1 até B-   Cálculo total para o mês = taxa por nível 𝗑 mensagens em cada nível

Exemplo 2 – uma empresa que começa a ser cobrada pelas nossas taxas internacionais de autenticação no 15º dia do mês:

-   Dias 1 a 14 do mês: os níveis de volume são aplicados à taxa de autenticação.-   Do dia 15 em diante do mês: os níveis de volume passam a ser aplicados à taxa internacional de autenticação, com as mensagens continuando a acumular no mesmo mês. Por exemplo, se uma empresa já tiver alcançado o nível 2, ela será cobrada pela taxa internacional de autenticação correspondente a esse nível:

Exemplo 3 – uma empresa possui 3 WABAs que enviam mensagens de autenticação para a Índia. Para a WABA A, ainda é 31 de julho, de acordo com o fuso horário local. Para as WABAs B e C, já é 1º de agosto, conforme o fuso horário local. No mês de julho, a empresa já está sendo cobrada pela taxa do nível 1.

-   O portfólio empresarial estará acumulando mensagens para os níveis tanto de julho (por meio da WABA A) quanto de agosto (por meio das WABAs B e C) durante um determinado período.-   A empresa pode alcançar o próximo nível para julho por meio da WABA A. Se isso ocorrer, as mensagens restantes de julho enviadas pela WABA A serão cobradas com base na taxa do nível 2.

Exemplo 4 – uma empresa possui 3 WABAs integradas em 2 provedores de solução. O provedor 1 envia as primeiras mensagens B em um determinado mês, e o provedor 2 começa a enviar mensagens quando a empresa já está no 3º nível. A empresa não envia mensagens suficientes naquele mês para atingir o próximo nível. Veja o que cobraríamos de cada provedor:

-   Provedor 1: taxa da lista para as primeiras mensagens A, depois, taxa do nível 1 para as mensagens de A+1 até B e taxa do nível 2 para as mensagens de B+1 até C-   Provedor 2: taxa do nível 2 aplicada a todas as mensagens enviadas por ele

### Webhooks sobre níveis

Um novo evento de gatilho [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) e sua carga estarão disponíveis a partir de 1º de outubro de 2025.

A partir de 1º de outubro de 2025, um webhook [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) com `event` definido como `VOLUME_BASED_PRICING_TIER_UPDATE` será disparado quando sua conta do WhatsApp Business atingir um novo nível de volume, em qualquer mercado, em um determinado mês. Isso complementa nosso ponto de extremidade [pricing\_analytics](/documentation/business-messaging/whatsapp/analytics#pricing-analytics), que continuará fornecendo o progresso do nivelamento ao longo do mês e informações sobre o nível para mensagens entregues.

Exemplo de webhook:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743451903,      "changes": [        {          "value": {            "volume_tier_info": {                "tier_update_time": 1743451903,                "pricing_category": "UTILITY",                "tier": "25000001:50000000",                "effective_month": "2025-11",                "region": "INDIA"            },            "event": "VOLUME_BASED_PRICING_TIER_UPDATE"          },          "field": "account_update"        }      ]    }  ]}
```

-   `tier_update_time` indica quando sua conta do WhatsApp Business atingiu um nível de volume superior (registro de data e hora Unix).-   `pricing_category` indica a categoria de modelo à qual se aplica a taxa do seu novo nível de volume.-   `tier` indica os limites inferior e superior do novo nível de volume.-   `effective_month` indica o mês em que a taxa do seu novo nível de volume entra em vigor.-   `region` indica o país ou a região dos usuários do WhatsApp onde se aplica a taxa do seu novo nível de volume.

É possível que vários webhooks [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) sejam acionados para descrever o mesmo evento de mudança de nível. Nesses casos, use o webhook com o menor registro de data e hora `tier_update_time` Unix como o webhook oficial.

### Análises de nível

Confira [informações sobre os níveis de volume](/documentation/business-messaging/whatsapp/analytics#volume-tier-information) via [análises de modelos](/documentation/business-messaging/whatsapp/analytics#template-analytics).

## Mensagens gratuitas sem modelo

As mensagens sem modelo, que só podem ser enviadas dentro de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) aberta, são gratuitas. Essas mensagens terão `type` definido como `free_customer_service` no objeto `pricing` dos webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de status:

```
"pricing": {  "billable": false,  "pricing_model": "PMP",  "type": "free_customer_service",  "category": "service"}
```

Observe que, para usuários da API Local executando a versão 2.60 e versões anteriores, `type` é omitido. Assim, uma `category` de `service` e `billable` definida como `false` identificará essas mensagens.

## Mensagens gratuitas de modelo de utilidade

As mensagens de modelo de utilidade enviadas dentro de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) aberta são gratuitas. Essas mensagens terão `type` definido como `free_customer_service` e `category` definido como `utility` no objeto `pricing` dos webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de status:

```
"pricing": {  "billable": false,  "pricing_model": "PMP",  "type": "free_customer_service",  "category": "utility"}
```

Observe que, para usuários da API Local executando a versão 2.60 e versões anteriores, `type` é omitido. Assim, uma `category` de `utility` e `billable` definida como `false` identificará essas mensagens.

### Caso extremo

Se você enviar uma mensagem para um usuário do WhatsApp antes de 1º de julho de 2025 (data em que passamos de preços por conversa para preços por mensagem), uma conversa de utilidade será aberta entre você e o usuário que atravessa a mudança no modelo de precificação (ou seja, a conversa foi iniciada antes da transição, mas só será encerrada após a implementação do novo método de cobrança). Nesse caso, os modelos de utilidade enviados ao usuário após a mudança e enquanto a conversa estiver aberta serão gratuitos, mas atribuídos à conversa já iniciada. Em webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de status, essas mensagens terão `pricing_model` de `CBP` e a identificação da conversa de utilidade será atribuída a `conversation.id`. Quando a conversa for encerrada, as mensagens de utilidade enviadas posteriormente passarão a seguir o modelo de cobrança por mensagem, o que será refletido nos novos webhooks.

## Janelas de ponto de entrada gratuito

Se um usuário do WhatsApp enviar uma mensagem para você por meio de um anúncio de clique para o WhatsApp ou do botão de chamada para ação em uma Página do Facebook, usando um dispositivo com nosso app Android ou iOS (apps para desktop e web não são compatíveis):

-   Uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) de 24 horas será aberta (como de costume).-   Se você responder dentro de 24 horas usando qualquer tipo de mensagem, a resposta será gratuita e uma janela de ponto de entrada gratuito (FEP, nas iniciais em inglês) será aberta, com início a partir do momento da sua resposta.

As janelas de FEP permanecem abertas por 72 horas. Enquanto estiver aberta, você poderá enviar qualquer tipo de mensagem ao usuário sem nenhum custo. No entanto, a janela de atendimento ao cliente é independente da FEP. Por isso, depois que a janela de atendimento ao cliente fechar, você só poderá enviar mensagens de modelo.

## Análise

Use o campo [pricing\_analytics](/documentation/business-messaging/whatsapp/analytics#pricing-analytics) para gerar detalhamentos de preços por mensagem e informações sobre níveis para mensagens entregues.

## Webhooks

As mensagens faturáveis ​​têm `type` definido como `regular` no objeto `pricing` dos webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de status:

```
"pricing": {
  "billable": true,
  "pricing_model": "PMP",
  "type": "regular",
  "category": "<PRICING_CATEGORY>"
}
```

A `<PRICING_CATEGORY>` indica qual taxa foi aplicada (por exemplo, `marketing`). Para ver uma lista de valores possíveis, consulte a referência de webhooks de mensagens de status.

Atualmente, não incluímos informações sobre níveis em nenhum webhook. Use o campo [pricing\_analytics](/documentation/business-messaging/whatsapp/analytics#pricing-analytics) para gerar informações sobre os níveis de mensagens entregues.

## Cobrança

As cobranças e ações relacionadas são gerenciadas pelo Meta Business Suite. Consulte [Sobre a cobrança da sua conta do WhatsApp Business](https://www.facebook.com/business/help/2225184664363779) para saber mais.

## Preços da Business Calling API do WhatsApp

A Business Calling API do WhatsApp tem preços diferentes. Veja nosso [documento de preços da Calling API](/documentation/business-messaging/whatsapp/calling/pricing) para saber mais.

## Preços baseados em conversa

O modelo de [preços baseados em conversa](/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing) ficou obsoleto. Ele foi substituído pelo modelo de preços por mensagem em 1º de julho de 2025.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)