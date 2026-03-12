<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing -->
<!-- Scraped: 2026-03-10T21:53:23.824Z -->

# Preços na Plataforma do WhatsApp Business

Updated: 2 de mar de 2026

Este documento explica como funcionam os preços na Plataforma do WhatsApp Business.

## API de Nuvem e API de Mensagens de Marketing para o WhatsApp

Para garantir o alinhamento com os padrões do setor, em 1º de julho de 2025, a Meta agora cobra com base em **cada mensagem enviada**:

-   Você recebe cobranças apenas quando uma [mensagem de modelo](/documentation/business-messaging/whatsapp/messages/template-messages) é entregue (`"type":"template"`).-   As taxas variam conforme a [categoria](#message-template-categories) do modelo e o [código de ligação do país](#country-calling-codes) do número de telefone do WhatsApp do destinatário.

A Meta gera valor para as empresas de diversas maneiras:

-   Todas as mensagens que não são de modelo são gratuitas (`"type":"text"`, `"type":"image"`, entre outras). Essas mensagens só podem ser enviadas dentro de uma [janela aberta de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows). Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/messages/send-messages#sending-messages) para ver uma lista com os tipos de mensagens.-   Os modelos de utilidade entregues dentro de uma janela aberta de atendimento ao cliente são gratuitos.-   É possível acessar [taxas mais baixas](#volume-tiers) para mensagens de modelo de autenticação e utilidade, com base no volume de mensagens.-   Todas as mensagens serão gratuitas por 72 horas, incluindo mensagens de modelo, quando forem enviadas dentro de uma [janela aberta de ponto de entrada gratuito](#free-entry-point-windows).

## Informações sobre preços

O PDF de detalhamento de preços descreve como a Meta cobra e as diversas maneiras como a Meta fornece valor às empresas, em formato PDF:

[PDF de informações sobre preços](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.2365-6%2F506409115_515804291560768_5477144239594007982_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3De280be%26_nc_ohc%3DzhCCnP_Ii6AQ7kNvwHBirXJ%26_nc_oc%3DAdlvJsjxYMkTKjaVBcZK1jbf9Bu8rF3jHdwDmDFO2XMmYdGBucCkHT885AJGBH6b3vw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzrIDMrFhfLmHnv72edHPZupwvaU7ka214gzBH3O3K8eg%26oe%3D69CABBFA&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

## Categorias de modelo de mensagem

Ao contrário das mensagens que não usam modelo, as mensagens com modelo são o único tipo que pode ser enviado fora da janela de atendimento ao cliente. Veja como os modelos podem ser categorizados:

-   Marketing-   Utilidade-   Autenticação

Consulte [Categorização de modelos](/documentation/business-messaging/whatsapp/templates/template-categorization) para entender como os modelos são categorizados.

### Comparação entre mensagens com e sem modelo

![Diagram showing template messages vs non-template messages pricing](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571069280_1541820816822527_6328052606712176022_n.png?stp=dst-webp&_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=6l2vJK5mYGcQ7kNvwE77E3R&_nc_oc=AdlRSfDiyQNhMqRCilt5PAP6w4Kv_Eh0nDSWMUkArOm9OWBRB9nz2VpLEXSq30f5CaA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=F2Q73UHTNFL3ZAUa6gjCHg&_nc_ss=8&oh=00_AfwKc16EgpO7Y1DPeS19xshWAy3NWCeEeA8XXLOu1oxmCA&oe=69CAEE2F)

-   CSW = [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows)-   FEP = [Janela com ponto de entrada gratuito](#free-entry-point-windows)

As empresas são responsáveis por analisar a categoria atribuída aos modelos aprovados. Sempre que um modelo é usado, a empresa aceita as cobranças associadas à categoria aplicada a ele no momento do uso.

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

Todas as mensagens que não são de modelo são gratuitas dentro de uma janela aberta de atendimento ao cliente.

4

O usuário compra o produto, e você envia a ele um modelo de utilidade confirmando o pedido.

Nenhum

A janela ainda está aberta, e os modelos de utilidade enviados dentro desse período são gratuitos.

26

A janela de atendimento ao cliente é encerrada, o que significa que você não pode mais enviar mensagens que não sejam de modelo.

\-

Já se passaram 24 horas desde a última mensagem do usuário.

30

Você envia uma mensagem de modelo de utilidade para o usuário, com atualizações sobre o pedido.

Utilidade

As mensagens de modelo de utilidade enviadas fora do período de atendimento são cobradas, e não há nenhuma janela aberta entre você e o usuário.

## Calendário de preços

Para ajudar os clientes a se planejarem e se prepararem para as atualizações de preços, o seguinte calendário de preços se aplica a mensagens e voz na Plataforma do WhatsApp Business:

-   A Meta atualizará os preços apenas no _1º dia de cada trimestre_, ou seja, até quatro vezes por ano: 1º de janeiro, 1º de abril, 1º de julho e/ou 1º de outubro.-   A Meta fornecerá um aviso prévio mais adequado ao esforço necessário para implementar diferentes tipos de atualizações de preços, conforme descrito abaixo:

Tipo de atualização de preço

Exemplos

Aviso prévio mínimo

**Atualização da tabela de taxas**

Como atualizar a [taxa](#rates) para determinado mercado ou produto

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

### Tabelas de taxas e níveis de volume

Estas tabelas de taxas refletem as taxas e os níveis de volume atuais, vigentes a partir de 1º de janeiro de 2026, com base no fuso horário da conta do WhatsApp Business. Essas informações também estão disponíveis no [site do WhatsApp Business⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fproducts%2Fplatform-pricing%23rates&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8).

Taxas e níveis de volume em USD:

-   [CSV com taxas em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613097921_829408843431679_7810092641806537646_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DGMRCFaNN2q8Q7kNvwFqCaZ8%26_nc_oc%3DAdnJPcjFfX6DMqcJj0nnTrQysMCXcOgLvDOeXa1UlyRDamKZ2BeguxP4ECu_E-hde9w%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afzl8G9Vqgqkv53RDWa3TE9GyZOjpIy5Fd2RiOEn75v6uQ%26oe%3D69B65FB9&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [CSV com níveis de volume em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612650454_1382747956168005_5107801514951256200_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DBkKxBCgs85cQ7kNvwGz2fl9%26_nc_oc%3DAdmrperLuHPOb4_qNtQarWF8ddl_zGfeo9ofe7VWXJ4dVD8SrqFJnQVFo1gJXRWemXc%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afye37T0w9A-aJWmovogcKeIEWC1DwGJPIzOXWXNiqhDQg%26oe%3D69B67895&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [PDF com taxas e níveis de volume em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613082154_1611799993323666_5808670464347184450_n.pdf%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D6NWp_PmdlzEQ7kNvwGfCCrz%26_nc_oc%3DAdmMWg_1wt6OW-09UoSzsjhkhIq_nrdfTSEYl_ybS2Ajg5fTcVk0zA_ZwC92eRqlB1U%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxYmfe-98Zj1byNUs_G1FO5fLD4GmMQksFW8jcfT0V6_Q%26oe%3D69B665FD&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

Taxas e níveis de volume em AUD:

-   [CSV com taxas em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613671409_3010976015762428_224345004977675966_n.csv%3F_nc_cat%3D109%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DpCNxWHtJGMQQ7kNvwHAaDYh%26_nc_oc%3DAdlIQfh2FVBSyEbSiQr4i7gA6juU0Ki_KVgCtNKbozSXoq28PehF0SMA4mjYvN0GoPY%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyjkLKXlZlAuayEA0ZKMRA_fAYq2nTqWx0J2XnVSciocw%26oe%3D69B65F33&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [CSV com níveis de volume em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612126795_1985099432053549_8200095052240900162_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DQ7BRghMv7yIQ7kNvwGL17hr%26_nc_oc%3DAdkvH4QEUDP75aE5HjQFkJXFbcevrBz1AaHA6vX5UYxqWcyxQINMmeXS8O5Kl6cLspQ%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxsIdUGjoUP75mHmVLI19MvLGQssqdVffCl0lfZebpbdA%26oe%3D69B66325&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [PDF com taxas e níveis de volume em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613501258_763900836739429_2586031885181820769_n.pdf%3F_nc_cat%3D107%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DyqzpXingEcMQ7kNvwEQjHoo%26_nc_oc%3DAdnJyLX7Gih6gRujnbA1dGCTK8VTBCUIoiyUBPw2ntmpT5FbeRghUTpf3dBW2y7kxS0%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwvLywftNAuWuml7yxDQJ-z_0QcsSBvGJw1O1fjkhdsTw%26oe%3D69B64A83&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

Taxas e níveis de volume em EUR:

-   [CSV com taxas em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612915026_1851018822285651_6618063477270339820_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DttTCLv5yVYEQ7kNvwEUsdpX%26_nc_oc%3DAdk9XnjNtD6d2_2bLUT_9CjRZJxJsknxseUZ27jJBGUbAMZjfOXdPzkNoyU0nDy87pM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyTOOrSHQp4XnOoS6fSqL9yeaZE4xYDqDjs9WbvjdWNlw%26oe%3D69B65F82&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [CSV com níveis de volume em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612491841_2246276429193721_4631922761189101366_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D4ATMBNcDa0MQ7kNvwEQrbCB%26_nc_oc%3DAdkPLv0rtVn86lIQ8lVyDcZt6EoppTAdTWZQPrSnYuUUBxZsXCn8RULfYerTEHNXa9U%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwyR_A830FYOF7JCuru4Ah5Bgjn45OEoJ0UTZ-SD_UQcQ%26oe%3D69B66E92&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [PDF com taxas e níveis de volume em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F611402038_1365076144846880_6687787258004461540_n.pdf%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D3hoxKUZRRIoQ7kNvwGO9O72%26_nc_oc%3DAdlG1v8LdwaKRQNGI09MJDxvFB153mLNkMDDbVzG_faN0B9uvThk6ZHgLdTvuR0CWeM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwFz7_cTkdRvz9Ip7e0O5Cadf4yMoaJ4OykrHbrot9Ymw%26oe%3D69B65C29&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

Taxas e níveis de volume em GBP:

-   [CSV com taxas em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613220798_1213179374358230_8917351099919715504_n.csv%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dn0r07CENZ00Q7kNvwHdMqTU%26_nc_oc%3DAdmysiFIacFK0eIE4QC6jXe90NMfgK1f7I8dXte8hu7wJF6MHXEwfFUSbGCGrALj8Ck%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxmdNE3dMoj-OhfOOQlDif8Wxa6pUFuEm5BrsZUbXl0UA%26oe%3D69B64EE7&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [CSV com níveis de volume em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613103270_1201270381543536_5873449895943701671_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DVrb1zE25wxYQ7kNvwFDWLb4%26_nc_oc%3DAdlN5a19aY0Gei8QOGHSojMv8eDjMw_RbW0ZVrinQs7Bx8OVmdurrZ7QO37_9PcGvfo%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxRRIneEOTqo95Zy2PK3nygVJhzU8_196OKQxbQYU0l_g%26oe%3D69B64D86&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [PDF com taxas e níveis de volume em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F614378447_1755328639187981_8185748163222129401_n.pdf%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D9hyMSE8u1CUQ7kNvwGnNIEZ%26_nc_oc%3DAdmgrT2pYA8Uc-f_izWB7Nly--HmAuRGdkmYZymKIfP_rdykkKABR0Y07dtQfsIfZ94%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxBd3Xcr-iJVtCqxRlIk9JEkze30WFvV1zgSJVFZyM3CQ%26oe%3D69B64C0D&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

Taxas e níveis de volume em IDR:

-   [Taxas em IDR (CSV)](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612073660_1590866108938555_6360182959847126008_n.csv%3F_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Ds2cA4qZlyEgQ7kNvwFhKgiI%26_nc_oc%3DAdkLgBCSk1GTO2MA6BVnRv6Txgf1afbOf1ojXl2IQaxyTaYoCslmX3crvdlLvynpSSU%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzlbbwqkrmN9aq6koEm5DIKfpM22NdbrLbc0EIQ_B5zYg%26oe%3D69B6810E&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [CSV com níveis de volume em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612534809_914766097781847_68203316073012715_n.csv%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DHMhw2zLaN2UQ7kNvwFYZmxP%26_nc_oc%3DAdlYgedHpjkrCBPl1uCHoie_Vql_7iRG-P_mLMwquhl_iSBo884UrfU_OGT_Zba4-oY%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzDiOOfzHsv3GXNPgkURxtPT3YVMpmmsJJD1-yfH3byIA%26oe%3D69B65F56&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [PDF com taxas e níveis de volume em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613023854_1209937397923198_1654831141025997512_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D138gg5BHdrgQ7kNvwFoH_uk%26_nc_oc%3DAdlU1-pf1fpy2cNSR7HJ1-f4YGl4j8W67nGc-Fc_FTrbeQwTjiquFW8UU6GUCeoxFto%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyDk_AWiUEjVZkdoJRW4eo3spartne-zIVZHrmlTpaYuw%26oe%3D69B67427&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

Taxas e níveis de volume em INR:

-   [CSV com taxas em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612891582_1915472539177641_7245368194742665442_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DXmyHy8GPqyQQ7kNvwHedFAv%26_nc_oc%3DAdlPIU6r_GDKf-8hWPV_Q48TxLnoCeOmYsBjHes54AtppaCux_Vy8yeJFiu00CJLsWE%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyXKC6MkMM3z6-28D5lBo0fymUlc0LW2n2bm4UELVHW-g%26oe%3D69B68165&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [CSV com níveis de volume em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612637066_1540626437215291_3541164870606595807_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DAcSU0H3R8ygQ7kNvwFzrdtc%26_nc_oc%3DAdk0k7OWocRzC8Nl0c89ov9-j2cXPCDpnmr3RlylO_Lj80ROrYGZV50ZZYPmRuAJHFc%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzVJMMI5uVXztuS3mNc71jiGngqpGI-xF1T3kp50Ia4PQ%26oe%3D69B678F2&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [PDF com taxas e níveis de volume em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613427402_1308808131292109_8259516863261584201_n.pdf%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DI1SM8K8CP7wQ7kNvwGTIzfj%26_nc_oc%3DAdnKu3Sp4L4WIerrpoZzBLQTno3vBODYi_Jq9z9XO7HGcR4LRDs501HsED8h6NZ5B-w%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxP2MHLDsi_N3B3i4kfw0FbOEbDUIIsLeTV7gHxF7nGRg%26oe%3D69B66871&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

Taxas e níveis de volume em MXN:

-   [CSV com taxas em MXN](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612020411_1520914742538571_126144230239442646_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DDfK_XQmFt-AQ7kNvwHNef1r%26_nc_oc%3DAdn3zqw0TtCk2N3aP2gTbOZc-c7cqG4vlchYvNHY7YM6aGM2iBanEddzaSJpSxXHYUc%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwJC8PnVRcJ4fv8uCXHwUraLNQgPP8Vcg-XjZIx9YPtrA%26oe%3D69B64DD8&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [CSV com níveis de volume em MXN](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612044380_1677827379874778_2409160019059014573_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DeFJIkkCVTxoQ7kNvwHU_VlD%26_nc_oc%3DAdmYYOqaAFishorak2QZZkpjS6E2kdNM8xuL96O3vY5IWWOQTqzNRIRvZNjeg3sKc-k%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzNC9_wdQ1xBmAiCNvulJTm6v6byDiHfn2qLJ0VSAMKBg%26oe%3D69B64C97&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)-   [PDF com taxas e níveis de volume em MXN](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612827720_1926445168251428_6596147172436142804_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DLsdh0ETDt9QQ7kNvwFfvWru%26_nc_oc%3DAdkLe7u1P3qHEj-I2dGtQmtxYwMe2pIxM9-Hw2rPrHFjiZMBo6DKGjwEcg6WZa7O6yk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxbUuD5KUB2FRMDQdSCnyJi8D9YnkDW-JdDv4zGAGj8OQ%26oe%3D69B667C6&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

### Atualizações nas tabelas de taxas

Os pontos a seguir representam futuras atualizações das nossas taxas. Veja as taxas atualizadas nas nossas [tabelas de taxas](#rate-cards-and-volume-tiers) acima.

**Tabelas de taxas em vigor a partir de 1º de julho de 2026**

Em vigor a partir de 1º de julho de 2026 às 9h PT: os clientes qualificados poderão criar contas do WhatsApp Business usando BRL (real brasileiro). Esse recurso está disponível apenas para parceiros de soluções e clientes diretamente integrados cujo país em "Vendido para" é o Brasil na [Central de Cobrança⁠](https://business.facebook.com/billing_hub/legal_entities). De acordo com nosso [calendário de preços](/documentation/business-messaging/whatsapp/pricing#pricing-calendar), a Meta publicará as tarifas por mensagem em BRL até 1º de junho de 2026.

**Tabelas de taxas em vigor a partir de 1º de abril de 2026**

A partir de 1º de abril de 2026, à meia-noite, conforme o fuso horário da conta do WhatsApp Business, serão aplicadas as tarifas abaixo. Essas taxas refletem o seguinte:

-   Arábia Saudita: taxa de mensagens de marketing mais alta.-   Índia: tarifa internacional de autenticação mais alta.-   Paquistão: tarifas de utilidade e autenticação mais altas. A tarifa internacional de autenticação não será alterada.-   Turquia: tarifas de utilidade e autenticação mais baixas.

Em vigor a partir de 1º de abril de 2026 às 9h PT: conforme anunciado em novembro de 2025, a Meta apresentará tarifas por mensagem em oito novas moedas para ajudar os clientes a gerenciar melhor os custos de mensagens em meio às flutuações cambiais. Não é possível alterar as moedas da conta do WhatsApp Business (WABA). Por isso, os clientes podem criar outra WABA na moeda desejada para receber cobranças nessa moeda.

-   Argentina: ARS-   Chile: CLP-   Colômbia – COP-   Malásia – MYR-   Peru: PEN-   Arábia Saudita – SAR-   Singapura: SGD-   Emirados Árabes Unidos – AED

As taxas em vigor a partir de 1º de abril de 2026 para 15 moedas estão refletidas abaixo.

Os pontos a seguir representam futuras atualizações das nossas taxas. Veja nossas [tabelas de tarifas](/documentation/business-messaging/whatsapp/pricing#rate-cards-and-volume-tiers) atuais acima.

Moeda

Tarifas (CSV)

Níveis de volume (CSV)

Tabelas de tarifas e níveis de volume (PDF)

USD

[Tarifas em USD válidas a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646470925_1849155895772539_7552673321538952781_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DE_UjiBmP9JEQ7kNvwEyImfs%26_nc_oc%3DAdmnWAKPTMa45v3jK-pUeYbG-b7JJOWVY05rV7By7r1vFogAhIn2NBeXN1mX6cvejDU%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzTI1-5tPL7wc7KxuGnhOM4jP7JT_0g2JESVFeKca9QzQ%26oe%3D69B67244&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em USD em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646306673_1435549594886031_2261744566831300901_n.csv%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D1RuO1jGrxZYQ7kNvwGfAM2B%26_nc_oc%3DAdkJ-RsR4xvGDOqs8LL2r9-EMqgYsK73I6OgU41B2cQMO7xEp-Y9WgAS4fd5zN6R5Bg%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afy9vykP0sPeuN-6KsqAm-Rb4p06_8Z17_9rh8sOINSHSw%26oe%3D69B64E04&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Tarifas em USD e níveis de volume em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645496976_875816982085197_2219019266491158387_n.pdf%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D77Ens4TRogUQ7kNvwE-amtz%26_nc_oc%3DAdmSiI8-HSR6HTtj3vhN3Xm52_cRwrj1lqZ05f_pEBFKyXR0YvvJ8iPsLZ1dCWcu1yI%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzSIOuKS42w5JLbib06dTQ6Tf2BCbSMsgVSYAe0A4s7WA%26oe%3D69B67B91&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

AED

[Tarifas em AED em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645568463_1218551013344515_5562601556096942883_n.csv%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DCZi2B3LjCYkQ7kNvwFNLzJi%26_nc_oc%3DAdk6hjHbSQGFZhkdba_36nBlMUbVWSesMf36S-xHTU24u6K5SpXj1FkudXCxhXVQjRA%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxDvMh9oh3wqZq09A1XVD8jI0rlXFemba3fLkfe1ZBn6Q%26oe%3D69B66A8F&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume de AED em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F644884592_1251019696987730_4052510796950881731_n.csv%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D3yUPhikJPqsQ7kNvwHZIW1N%26_nc_oc%3DAdmKCpEQZ48PGMh2VIfuMP5TE5UktZ2LhOVCOrhJ_U0BTUyDRWC8BTC8ItEFsSUG5Pw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyEaZO63MgQm-RrI-YrxFibSeGMu9z1UrlPl8xKNnjK3Q%26oe%3D69B676FF&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas AED em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645631130_2035100300414824_2224138623976625824_n.pdf%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D1kAAX72IitQQ7kNvwEcME94%26_nc_oc%3DAdnPygkRgXlgQGWAadMcsEnepbVVnCBUEsqIYa78TcBup5h2b7C_qpTW-62VtOSMYuI%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzlCfUYFSXJFRoTYqk4Y4ZtVDQcczOFN_XVhoY1H_eL0Q%26oe%3D69B67F17&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

ARS

[Tarifas em ARS em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F643913641_4440615829516590_3465054171242509021_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DmmMHUG5dcnYQ7kNvwF6MYrr%26_nc_oc%3DAdlwy1-XSYXbTTZhnCCTZnLbroRcpoRnto-iNLwXYacbk4HMj8bC1b1rsejDmyn_jJc%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxqXLvxUfAqxLWvimfa5DeoGsPZohp6dU_Ok_YqQfTHqw%26oe%3D69B66C2D&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume de ARS em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646298715_1665001634670116_5064640796895645839_n.csv%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D7jXJBOZEFW4Q7kNvwEHDtXh%26_nc_oc%3DAdlfITpsykDH0ULmIbi3xmCAJZ1eNmerPg6nAxoeoPcJDrkZJuvzIXr84-pGTKh-9Yk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzITU3tDzZKFlgXm5swuZuzdDD8IhPaV5lH2sqpac1aCA%26oe%3D69B65EE8&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas ARS em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645582939_1268429208528690_1655505193378266281_n.pdf%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DSNV-w9dERTMQ7kNvwH1bQzm%26_nc_oc%3DAdkQZTIEGogyeO1hk65cuPceNnnLC29YL0qS0OwRTqV-2_y8yzRYApkKxZjz4_zB8yY%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afw43bJiCHySrothcjSAx7ygdpbJq91Y1f4bChmhTFBYpw%26oe%3D69B67281&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

AUD

[Tarifas em AUD em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645214705_926106903280653_9059172455483634440_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DhaUF70vUdfcQ7kNvwFfUxgP%26_nc_oc%3DAdlt1hAlsMjB5_W4lk44JTAA7UODMqo_FIuMB0YCtZHHCKHR97lZAwgCQzWbSFUCVo0%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afzw324730fpjW2RILhzrpGSdUQihhcclGQ7KU7TFuwCGg%26oe%3D69B656C9&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em AUD em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645532473_3766343983661985_2332432266070842193_n.csv%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DmDEm-fKfl4kQ7kNvwEMaI9p%26_nc_oc%3DAdn759nD4LZ8uEGaFFC1xohIwwxt-Pf2hWB50reViCGw24d1aj25OsVF_FiKiLGbwdg%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwoUxX4IWFKohz36EoQ5--CWjTDcs1sT-VmmzrGC6oczw%26oe%3D69B65616&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas em AUD em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645804786_1126134129579524_6009237526232527587_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DOgTpFkCGAqMQ7kNvwExMqLE%26_nc_oc%3DAdlie-HJ5S-d_4d7PjuFKTvQuxgl9gbZSxS0_iA458WJS5tfrFZ50B03Jupyqz7PzaE%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxPzJGNpGAAQr6V9RK8_rQKhrTeqdT0PBM2sxp834N43Q%26oe%3D69B675A6&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

CLP

Tarifas em [CLP a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645117105_1445559120350029_5331117661031875470_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DU13sgTmQ9AYQ7kNvwFJDaFT%26_nc_oc%3DAdkRQIpNJSaWvkeUrb5u5Opu4Qb6jI5HigB8eWWtu93z0IKInN5mJFEu4BTGiUBTbZE%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afz59ul0btREy3Hf6ljYgt_qzkMzzxWFWwBMgyE8flNZCA%26oe%3D69B6731B&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em CLP em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646099733_1592291005343764_8884003281514145550_n.csv%3F_nc_cat%3D109%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dyq_gNpLM8QEQ7kNvwFHhMTX%26_nc_oc%3DAdmV5-BmVWlbWfHvb9MiyZ1ZsI6vhpenO306TZP31mC7Ex2z7UNFxD6svQZoU3mUr_I%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzMPWq2YA3d_CsvtoxVnAjlK9-Axcq2Vt24YR2HFsoweQ%26oe%3D69B6568E&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas em CLP em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645929741_1210713851143066_2773150999300661104_n.pdf%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DP-yGvRQ74vcQ7kNvwEsuiGc%26_nc_oc%3DAdnsBdZKVgXjhiSQJZvE1QqOaD70m2FTsKVsqU393yl_iaH1x75ZTUIhQlErCwjUoh4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzPKjYAFpB6aqoXcQEji2vRNKjtebKvvludqfxeidzNpQ%26oe%3D69B66BAB&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

COP

[Tarifas em COP em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646133333_1211289621088523_2636271817655230827_n.csv%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DrCwSY62KNXoQ7kNvwEbyuPt%26_nc_oc%3DAdmTlFVJtL5APLfk_ZPrcbVTXkituAZFzGEjzOh4xRRZ26apdkgzqv6LdOPslTpncCc%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyC3E1ZNsoh2hjV663jCjVCO1jNfZ0RkjSQt8P5pj-gIA%26oe%3D69B6725F&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume de COP em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645837202_1462156562105280_792028471136264795_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D94UjcSV2170Q7kNvwEDtbcI%26_nc_oc%3DAdkID1qwKaCmAUyyFSQrjeuxU71itECl0TfEBXDqTT4bJtBDNDvbAS0FVdECxYbZJXw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afx8kbhuI2lV4Av8WoR_hXO-MJQbqrRcwpTjtnH2Bcccbg%26oe%3D69B649ED&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Tarifas de COP e níveis de volume em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645914603_1406397620652471_4722825080262332290_n.pdf%3F_nc_cat%3D109%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DxYANnvGh-wUQ7kNvwGGn0Oy%26_nc_oc%3DAdnj9UmYNClYGEFSYPNz56txlm8siiyZ92p-mSPVxD_SDNr4y1HU05sE2ay-kvBw_SE%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwMiVcRoJPYjKKcruhOXkbgrP9iadgZEv7m17FElURlbw%26oe%3D69B67D10&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

EUR

[Tarifas em EUR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645657810_1506583167707281_5211914176614444549_n.csv%3F_nc_cat%3D109%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D9xgA9KVJPyQQ7kNvwE7f0m1%26_nc_oc%3DAdmUDQp47C7NO1lN84DHF8KCIHDpAmF4CY1-UFlHAFyyPiM2Boww4R4F12R9zPNq3hw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afx2fIV7kn5OpNSfnmW1lA9Ua_29ZXAXxWFLXzRBGU4zpg%26oe%3D69B64BF5&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em EUR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646407708_1628331888477444_1399223550584718589_n.csv%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DL6zwgM9JoiAQ7kNvwE1QOeb%26_nc_oc%3DAdmIJMoRyAH8qb5_8MfoLGDsrDFF2xme_lR9YEv7dmJ8rRVl-Lj709X1cNhRhp1wLvA%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afwivtozm2oh7EfDBrDVCTxKS6ELgHL-RAqQA1-XtXyhSQ%26oe%3D69B66339&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Tarifas em EUR e níveis de volume em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F644400405_3352091681633190_2586888755581435859_n.pdf%3F_nc_cat%3D109%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DenLEMfUuC60Q7kNvwFbNyW_%26_nc_oc%3DAdlVOM9AlkVnGKgpzkKU-T0HJgEOQ4y_j3fescx4Yu7lI0Ajzab9MakXIq17vCsfmPA%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxtGS4C-QBaaGTKT08eqclWjAtN0cqPvZ-zFLLgtCJwsw%26oe%3D69B66AF6&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

GBP

[Tarifas em GBP a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645512344_2936605500064292_6503548893920492980_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DWhjRsr2iCCwQ7kNvwE7mq-Z%26_nc_oc%3DAdl1JCZX1Uhhx7Z2ZixVowhHSJqHPKC6zBF1c1Xrp5PuGpXihEXDyUwonZoRtjmyKFw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afxfa3RN8mPPxrfKxmQsgkGGn5Rg00qeIofyqlanFDYpow%26oe%3D69B64E07&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em GBP em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646069105_1235686318174867_3885515129383727955_n.csv%3F_nc_cat%3D107%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DeFmUFOsuE7QQ7kNvwGVd7Gl%26_nc_oc%3DAdmK2qIvwsLvFc8p5p4GgSEVdUFxX0ImK4hIRlqq-FKQ5eDjscxf0Zagf6kP_rJLQxw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afx9xsN-fmakLWSXbYf974koszEKruoRnmRlRNj465SqgA%26oe%3D69B66392&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e taxas em GBP a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645607000_1962269551367326_4978849776780260406_n.pdf%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DZspe_CiJuyAQ7kNvwF841Oo%26_nc_oc%3DAdl9R3zfMib7Pknpe6ol_OswJFVnLegKDhrox2L-z2EmGKUHpQB8Xh-jDCxl6Q0unzk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afw5ZkmZHPAF2UOSf_ryJQm_2GRQn_Kf6SPS7yiOaQhPhw%26oe%3D69B67380&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

IDR

[Tarifas em IDR a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645587393_1342652894302700_2285464581249130509_n.csv%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DKjZ4Uhzq_bwQ7kNvwGXxnJQ%26_nc_oc%3DAdlL2iYHF81dueBTtZtcj_98YzBps15c_pfsDXpTKfalactQaKbWlzv9m8jZA9P2le0%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyDJanbCDEm9cZMCi2ynBhQ85q9ck7lA9PB0zNej_ir7w%26oe%3D69B6605B&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em IDR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645618453_4384412775139879_7250237823263059099_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DEKbbRf-f6IoQ7kNvwH2g2z0%26_nc_oc%3DAdnbzthZ8NjtX8hhwW_dp5APvE2l7G-5x6GOVptIMcE3G-1HVcaZT1gK5oN5pB-wxRk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyD5oUtJNpZg3XSjka514Waefy-m6SLRT-1WuB3uEOmcA%26oe%3D69B6581C&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas em INR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645784931_1631884417835144_8385037940032668186_n.pdf%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DpqNMtp8ONW0Q7kNvwHjXDs3%26_nc_oc%3DAdmESOqb_Bwtp4DtWSOupcW3vy12iDS0JUOThJFp420OajCA2RANla5SUETgpTvK-tk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyHa_sY_b-umHRct6SiUhAjTAlGte-A1KTiQBwtUJBAXw%26oe%3D69B67065&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

INR

[Tarifas em INR a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F644691399_780808657975887_7414210297525862992_n.csv%3F_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DgQi-RCVqtmkQ7kNvwHl8fi_%26_nc_oc%3DAdmfrJOY89V3WNUbLUMjjVPXmy10l9pV_yzvK3jcFdjNmfalOitkZtV7NzbYkbBZ-LU%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwGTa7ffPoWW5J4G9madwO23t2I2cj-RvVT7GwLRwN2Qw%26oe%3D69B661AA&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em INR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645821617_1655024272180131_6677648043329546477_n.csv%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DeJZlj2TByp4Q7kNvwGPA8k8%26_nc_oc%3DAdk7l7IHu4t44yrkGmaJzlkwVeEo1B5FtHEeGh9Y7JP4ynI4fmOjlzEMNpuRjtewzsw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyCc57UvRVoaZjBtw-qnNhD7Z7eeabBpogSuB_mnlaKpQ%26oe%3D69B67D39&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas em INR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645340924_1688614612580625_263955352162865764_n.pdf%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DvOZGWX-dR1kQ7kNvwEr-EdM%26_nc_oc%3DAdmkvtdUMKZdUCUaOhe6nrJpewgFTzHjclW6Q91RsB_ZzJ-x2avipSe612nOWes0Ifw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwUdEVO11fVDsT640euhOaGDmz4t_os6KbVXK5ykNTq8w%26oe%3D69B667BC&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

MXN

[Tarifas em MXN em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645445263_1271743954832842_1411479554011782916_n.csv%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DFoWqTfthtmEQ7kNvwHaDXpG%26_nc_oc%3DAdn880ExiNSTmj_nz3mR13o1h-x3KIb2DONObHs7122LkzxU8jydcBXy3Qaj5mFI698%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwoArfy1KLVFNI_dikTQK05QKtRnOmOBcmUqr6qIK92IA%26oe%3D69B64C4E&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em MXN em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646192865_928155136530656_947493470799381719_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DEJTcGNo6tEoQ7kNvwHgnA7r%26_nc_oc%3DAdkAwdp1fj7NoY7BA-k56ygDmewzeDNW-T1c8iwLBDToHM4_MhFh03cgwAVqCPRwPLk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afwvzdk054N-gRBdOqgK-dPFJ7rZ2FShLhbC_hadad4s7A%26oe%3D69B655B0&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas em MXN em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645566606_944960415149672_8610149435879562431_n.pdf%3F_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DCFr2xLKUKmIQ7kNvwGrkEmH%26_nc_oc%3DAdn2Nvh0p5SMC9WJhMDq2Pe8LtdGc7sqZs5ZRmqLf_4nmkUOKN45gV6BCnRwhZFrIlo%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfyoW1ghMGEPCuSfMYVV_mB2IAR0M3XbrF1qVFMWfncBcA%26oe%3D69B651D0&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

MYR

[Tarifas em MYR a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646114417_2136379863764004_2630854448304510767_n.csv%3F_nc_cat%3D107%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D2IU3ygMI3YkQ7kNvwG6oj-F%26_nc_oc%3DAdkyvySywkeLz0ytAGSEBk5jic04gymZZ9SoQFndwLKim8S4TPKwE-1BOuqveqhWSz4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afzq_CjDOvMmcbhOmhpw0In0Wsd0A64nTk-yOABn1DOqOA%26oe%3D69B660AB&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em MYR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F644697449_872977558897233_1162427474351345029_n.csv%3F_nc_cat%3D110%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D38dNJyM6hZ4Q7kNvwHGG2mv%26_nc_oc%3DAdmS71jqgRqIVEeKPifV_aC75lv0lXPK8oKfNPhSJ1m8B75XePGmsov4q2Oqj1jTb6k%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afwjhj77Bo55A257RzmN1ZsZCnvjcgd4cGJwp5-MU9xS2Q%26oe%3D69B6626A&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas em MYR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646539144_1277569544265333_5845311436988828454_n.pdf%3F_nc_cat%3D107%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Duyysen2DnP4Q7kNvwGAoDB6%26_nc_oc%3DAdl93TS1gHaUkLki_DTvC_wXRmkkdqScPL9Si7rwXuMbEYJV_rDk36zjoVFMKMBksnM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwO6brCGLLdH3BAc7Qweu9LkPyhw10UBNyVFxodEj_9qg%26oe%3D69B65EF8&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

PEN

[Tarifas em PEN em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F644526679_1245236104472842_5372707696864398897_n.csv%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DQt0dE_A2bhYQ7kNvwG-xHp8%26_nc_oc%3DAdkv7rQtpk3ogbSDXjLcYX-8M2mDocjp8X8ziMLvq3BJMkiiBrSvdzGstwlzLJK045M%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzfM-W8UxwVcpppF9SAkuVyDGtei_hS08Z-OoXjLq2LPw%26oe%3D69B64EF5&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em PEN em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F646333054_895979836675305_867995930513186609_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DDKZGusghWdsQ7kNvwFW0lwj%26_nc_oc%3DAdn9t2bU6JA5dyX_IxDxVnjdM1DI2Cbq7FHtqNB8G_FrHV08IzEXCQxyxtZPRd5Ze2M%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxhllbysAw-OBZCtvrsTFGWs4M-qeO9QI8TDacmMzEDLA%26oe%3D69B66F7A&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas em PEN a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F645589709_1370458944837684_3841619281669354961_n.pdf%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DyLT4MiESkwAQ7kNvwE1TvYR%26_nc_oc%3DAdkLzKlZn1xG8_GwRdvQVGt2UJW21Twf2_wnSr59SUNBYWIsJFH3KQygqabHDrPnEOc%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwSiCcCsFGfxaaI3sP5XN8fmAT8P2cBb_I0H1589h__5A%26oe%3D69B65A91&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

SAR

[Tarifas em SAR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F649075654_927528246590659_5744981916710639147_n.csv%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D_-2qTxQtkj4Q7kNvwGEJMtk%26_nc_oc%3DAdkWYWelwNrwM35oBK_CXhCih01v1HtDcp-cBkW8xZtAElgqJwUAgFypcvx4xYzi3-0%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afwt1qEX0oxDOubB63U_wcW1PipaGP_R1b5U-o3hoVhFGA%26oe%3D69B65D8A&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em SAR em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F649244980_1666060274556043_7375565998217516354_n.csv%3F_nc_cat%3D110%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D_nqG-B-QKFQQ7kNvwG0bdff%26_nc_oc%3DAdlfPgcqLQ6AsgGrKY797vsOivMRu3-C9a32hg4g1YA0QMP5F30tz1IaWWbrMkQkeUM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwAS3JIZvt3ywrlofDZ2lK05x2dXDD4KgvDg0aUTS-9Ug%26oe%3D69B67C99&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Tarifas em SAR e níveis de volume em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F649881239_27202899882643114_6378858216910224831_n.pdf%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D8synQzpMmjYQ7kNvwH0cPlT%26_nc_oc%3DAdlL3Bp41BR54WeWxnsON4WeyN5O_J-KvmhMM2p5jHzbh-5_g6Sovc17KxPku3Ggkg0%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfznowVKJ7ZfCl1AIB4zO65EQNotsQtZ8FzYsGQZgxQo4w%26oe%3D69B652BC&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

SGD

[Tarifas em SGD em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F628896908_776793545472202_7743392366323079631_n.csv%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D2UAKxgMzpVAQ7kNvwGo144h%26_nc_oc%3DAdkD7N7pd8TfVoSqjKv6l_wkDJhOX4NUm_yjP2lf_39QP7kWF8tIvCSpsJ5TcD88BbM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfxdXLjg5HqlMt7sBxqG23MZQQWtv6y8da--a-sHg1p5EA%26oe%3D69B66FBA&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume em SGD em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F648843988_936466558827916_559210635634738742_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DvaeTeQoXi3wQ7kNvwEfHa-C%26_nc_oc%3DAdn1rypNOizPvCxvw0KwK9nPLV8JRNGfA7SRJTADLC2bwrMY1kbB2-Amq-08UV3nJ_o%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfzGdzEnSZq0HpVr6KYdwUnWOW_aK4fAd03J6lZjmMDpXw%26oe%3D69B65FE9&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

[Níveis de volume e tarifas em SGD em vigor a partir de 1º de abril de 2026](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F644858913_1277822710882171_4488990594670025917_n.pdf%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DLLjJbUeAeMIQ7kNvwF28aI9%26_nc_oc%3DAdlqBtw_A3qHpPoJyk9jHDOHGSRqI2O2C6in4hMC-6mhNsB_Zawfdfm7rNYtbD8EucM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_Afw1XeWgXCOwU7OY3Y56XFaMKvanPDJPmE42A9R1sqPs_A%26oe%3D69B662A3&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

**Localização de cobranças para a Índia e o Brasil**

A Meta está implementando a localização de cobranças para ajudar os clientes qualificados a gerenciar melhor os custos de mensagens em meio às flutuações cambiais. Isso se aplicará aos mercados abaixo e especificamente a parceiros de soluções e clientes diretamente integrados cujo país "Vendido para" na Central de Cobrança seja um dos mercados abaixo:

-   [Índia:⁠](https://www.facebook.com/business/help/2301408543603167) a partir de 1º de janeiro de 2026.-   [Brasil:⁠](https://www.facebook.com/business/help/4344414845795884) a partir de 1º de julho de 2026.

**Atualizações anteriores**

-   Em 1º de janeiro de 2026, à meia-noite, conforme o fuso horário da conta do WhatsApp Business, serão aplicadas as atualizações de taxas abaixo:
    -   Índia: taxa de marketing mais alta.-   França, Egito: taxas de marketing mais baixas.-   América do Norte: tarifas de utilidade e autenticação mais baixas.-   A partir de 1º de outubro de 2025, à meia-noite, conforme o fuso horário da conta do WhatsApp Business, foram aplicadas as atualizações de taxas abaixo:
    -   Colômbia: tarifas de utilidade e autenticação mais altas.-   México: taxas de marketing mais baixas.-   Emirados Árabes Unidos: taxa de mensagens de marketing mais alta.-   Argentina, Egito e Arábia Saudita: taxas de autenticação e utilidade mais baixas.-   O Zimbábue está incluído na região "Outros países da África" em vez de "Outro". As mensagens entregues a usuários do WhatsApp com o código de país +263 (Zimbábue) serão cobradas com base nas taxas da região "Outros países da África".-   A partir de 1º de julho de 2025: as taxas de mensagens de utilidade e autenticação em diversos mercados serão reduzidas para garantir que nossos preços estejam alinhados com os de canais alternativos para esses casos de uso. As taxas de conversas de marketing se transformaram em taxas de mensagens de marketing.-   A partir de 1º de abril de 2025: redução das [taxas de conversas internacionais de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) no Egito, na Nigéria, no Paquistão e na África do Sul.-   A partir de 1º de fevereiro de 2025: reduzimos as [taxas de conversas de autenticação](/documentation/business-messaging/whatsapp/pricing#rates) para Egito, Malásia, Nigéria, Paquistão, Arábia Saudita, África do Sul e Emirados Árabes Unidos.-   A partir de 1º de novembro de 2024: as [conversas de serviço](/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#service-conversations) agora são gratuitas para todas as empresas.-   A partir de 1º de outubro de 2024: atualizamos as [taxas de conversas de marketing](/documentation/business-messaging/whatsapp/pricing#rates) para Índia, Arábia Saudita, Emirados Árabes Unidos e Reino Unido.-   A partir de 1º de agosto de 2024: reduzimos as[taxas de conversas de utilidade](/documentation/business-messaging/whatsapp/pricing#rates).

### Taxas de autenticação internacionais

Países específicos têm uma taxa internacional de autenticação. Nossas tabelas de taxas refletem esses valores. Consulte [Taxas internacionais de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) para saber mais sobre essas taxas e entender se elas se aplicam a você.

### Código telefônico do país

As cobranças por conversas são baseadas no código telefônico do país referente ao número de telefone do destinatário no WhatsApp. A tabela abaixo mostra como a Meta associa códigos de ligação de países a países ou regiões. Se um país não estiver listado abaixo, ele será associado a **Outros**.

Essas informações também estão disponíveis em um arquivo CSV:

[Código telefônico de país e mapeamento de taxas regionais em CSV](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F559604326_1510649803514615_3972087685039081235_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DHP7I97OKlAUQ7kNvwFJYzMh%26_nc_oc%3DAdmRw26-5JZNQyulwcAkAZq8z1plBu5U_TrT-cJ7dHAUwwTKoQgtz5-O3v5kafvhjVU%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DF2Q73UHTNFL3ZAUa6gjCHg%26_nc_ss%3D8%26oh%3D00_AfwmJZB0tUTFTPQiQYjwn8Oyt3d1G23Cn3bRcevJ544OIA%26oe%3D69B65053&h=AT4S1iuDplC2bkU-GUJ5sIzPP5hBe8mxdFQA0SrVB-dhTdsI_CDHE5HHvmVvmHpsP_5dNPlKmiNqfWMGROgT9cJj4yiYxBo7dM87itXpzjoUuN2TJPp9cm7OSJEswNsE7MBfSgaoCIsUQftjv8nT71MngH8)

Mercados

Código de ligação  
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
  
Malaui  
  
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

Outros países da Europa Central e Oriental  

Albânia  
  
Armênia  
  
Azerbaijão  
  
Bielorrússia  
  
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
  
Iêmen

  

973  
  
964  
  
962  
  
965  
  
961  
  
968  
  
974  
  
967

Outros  

Todos os outros países

  

Varia por país

## Níveis de volume

Você pode desbloquear taxas de utilidade e autenticação mais baixas com base no número de mensagens enviadas em um mês.

### Acúmulo de níveis

-   **As mensagens são agregadas no nível do portfólio empresarial, abrangendo todas as contas do WhatsApp Business (WABAs, pelas iniciais em inglês) pertencentes ao portfólio:** para definir quais níveis podem ser aplicados em determinado mês para cada combinação de mercado e categoria, a Meta agrega mensagens são somadas entre todas as WABAs do portfólio empresarial, conforme o par mercado-categoria (por exemplo, Brasil-autenticação, Brasil-utilidade, Índia-autenticação e assim por diante).-   **Apenas as mensagens cobradas são contabilizadas para os níveis**. Portanto, as seguintes mensagens não são contabilizadas:
    -   Modelos de utilidade entregues a usuários do WhatsApp dentro de uma janela aberta de atendimento ao cliente.-   Modelos de utilidade entregues em uma [janela de ponto de entrada gratuito](#free-entry-point-windows).-   **Os níveis de volume serão determinados exclusivamente pela Meta**: todos os dados de insights são aproximados devido a pequenas variações no processamento das informações. Não se deve depositar confiança excessiva nos dados de insights.

### Dinâmica principal

-   **Os níveis são específicos por mercado e categoria**: os níveis de volume seguem nossas tabelas de taxas e variam conforme o mercado (por exemplo, Brasil ou Outros países da América Latina) e a categoria (utilidade, autenticação).-   **As taxas são específicas para cada nível**: quando uma empresa envia um número suficiente de mensagens em uma determinada combinação de mercado e categoria para atingir o próximo nível, ela acessa a taxa correspondente à nova faixa, que será aplicada às mensagens desse nível. Essa taxa se aplica a todas as WABAs da empresa.-   **Os níveis são redefinidos todo mês**: no início de cada novo mês (meia-noite no fuso horário da WABA), a contagem de mensagens é zerada, e as empresas começam a acumular mensagens para aquele mês.

### Exemplos de níveis de volume

A tabela abaixo é apenas ilustrativa e destaca a dinâmica dos níveis de volume. Consulte nossas [tabelas de tarifas](#rate-cards-and-volume-tiers) para conferir os valores cobrados.

![Table showing volume tier rate examples](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/502514970_1202956304344062_4629097874159039633_n.png?stp=dst-webp&_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=v4zH1qOfJqIQ7kNvwEyF34F&_nc_oc=AdlK-o8e9e4xYoBl5A2yvS7ElUko4VUfu5R1x3LSodqp86HldlPRRRYm2bG-Bndysx8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=F2Q73UHTNFL3ZAUa6gjCHg&_nc_ss=8&oh=00_AfzJKkHAFufvQixnYTPxSQTTiE6YBpK_bSilw-N6CLCIKQ&oe=69CAEE51)

Veja abaixo vários exemplos para destacar como os níveis funcionam e o que será cobrado em determinado mês para uma combinação específica de mercado e categoria. Os exemplos referem-se à tabela ilustrativa exibida acima:

Exemplo 1: uma empresa que envia um total de mensagens de autenticação B em um mês para a Índia será cobrada da seguinte forma:

-   Taxa da lista para as primeiras mensagens A-   Nível 1 para mensagens A+1 a B.-   Cálculo total para o mês = taxa por nível 𝗑 mensagens em cada nível

Exemplo 2: uma empresa que começa a ser cobrada pelas nossas taxas internacionais de autenticação no 15º dia do mês:

-   Dias 1 a 14 do mês: os níveis de volume são aplicados à taxa de autenticação.-   Do dia 15 em diante do mês: os níveis de volume passam a ser aplicados à taxa internacional de autenticação, com as mensagens continuando a acumular no mesmo mês. Por exemplo, se uma empresa já tiver alcançado o nível 2, ela será cobrada pela taxa internacional de autenticação correspondente a esse nível:

Exemplo 3: uma empresa com 3 WABAs que enviam mensagens de autenticação para a Índia. Para a WABA A, ainda é 31 de julho, de acordo com o fuso horário local. Para as WABAs B e C, já é 1º de agosto, conforme o fuso horário local. No mês de julho, a empresa já está sendo cobrada pela taxa do nível 1.

-   O portfólio empresarial estará acumulando mensagens para os níveis tanto de julho (por meio da WABA A) quanto de agosto (por meio das WABAs B e C) durante um determinado período.-   A empresa poderá atingir o próximo nível em julho, por meio da WABA A. Se isso acontecer, as mensagens da WABA A serão cobradas conforme a taxa do nível 2 no que resta de julho.

Exemplo 4: uma empresa possui 3 WABAs integradas em 2 provedores de soluções. O provedor 1 envia as primeiras mensagens B em um determinado mês, e o provedor 2 começa a enviar mensagens quando a empresa já está no 3º nível. A empresa não envia mensagens suficientes naquele mês para atingir o próximo nível. Veja o que cobraríamos de cada provedor:

-   Provedor 1: taxa da lista para as primeiras mensagens A, depois, taxa do nível 1 para as mensagens de A+1 até B e taxa do nível 2 para as mensagens de B+1 até C-   Provedor 2: taxa do nível 2 aplicada a todas as mensagens enviadas por ele.

### Webhooks sobre níveis

A partir de 1º de outubro de 2025, um webhook [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) com `event` definido como `VOLUME_BASED_PRICING_TIER_UPDATE` será disparado quando sua conta do WhatsApp Business atingir um novo nível de volume, em qualquer mercado, em um determinado mês. Isso complementa nosso ponto de extremidade [pricing\_analytics](/documentation/business-messaging/whatsapp/analytics#pricing-analytics), que continuará fornecendo o progresso do nivelamento ao longo do mês e informações sobre o nível para mensagens entregues.

Exemplo de webhook:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743451903,      "changes": [        {          "value": {            "volume_tier_info": {                "tier_update_time": 1743451903,                "pricing_category": "UTILITY",                "tier": "25000001:50000000",                "effective_month": "2025-11",                "region": "India"            },            "event": "VOLUME_BASED_PRICING_TIER_UPDATE"          },          "field": "account_update"        }      ]    }  ]}
```

-   `tier_update_time` indica quando a WABA alcançou um nível de volume maior (registro de data e hora Unix).-   `pricing_category` indica a categoria de modelo à qual a taxa do seu novo nível de volume se aplica.-   `tier` informa os limites mínimo e máximo do novo nível de volume.-   `effective_month` indica o mês em que a taxa do seu novo nível de volume entra em vigor.-   `region` indica o país/região dos usuários do WhatsApp onde a taxa do seu novo nível de volume se aplica.

É possível que vários webhooks [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) sejam acionados para descrever o mesmo evento de mudança de nível. Nesses casos, use o webhook com o menor registro de data e hora `tier_update_time` Unix como o webhook oficial.

### Análises de nível

Confira [informações sobre os níveis de volume](/documentation/business-messaging/whatsapp/analytics#volume-tier-information) por meio [da análise de modelos](/documentation/business-messaging/whatsapp/analytics#template-analytics).

## Mensagens gratuitas sem modelo

As mensagens sem modelo, que só podem ser enviadas dentro de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) aberta, são gratuitas. Essas mensagens terão `type` definido como `free_customer_service` no objeto `pricing` dos webhooks de [mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de status:

```
"pricing": {  "billable": false,  "pricing_model": "PMP",  "type": "free_customer_service",  "category": "service"}
```

## Mensagens gratuitas de modelo de utilidade

As mensagens de modelo de utilidade enviadas dentro de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) aberta são gratuitas. Nessas mensagens, `type` será definido como `free_customer_service` e `category` será definido como `utility` no objeto `pricing` de webhooks [messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de status:

```
"pricing": {  "billable": false,  "pricing_model": "PMP",  "type": "free_customer_service",  "category": "utility"}
```

### Caso extremo

Se você enviar uma mensagem para um usuário do WhatsApp antes de 1º de julho de 2025 (data em que a Meta mudou de preços por conversa para preços por mensagem), uma conversa de utilidade será aberta entre você e o usuário que atravessa a mudança no modelo de precificação (ou seja, a conversa foi iniciada antes da transição, mas só será encerrada após a implementação do novo método de cobrança). Nesse caso, os modelos de utilidade enviados ao usuário depois da mudança enquanto a conversa estiver aberta serão gratuitos, mas serão atribuídos à conversa aberta. Nos webhooks [messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) de status, essas mensagens terão um `pricing_model` de `CBP` e a identificação de conversa de utilidade será atribuída a `conversation.id`. Quando a conversa for encerrada, as mensagens de utilidade enviadas posteriormente passarão a seguir o modelo de cobrança por mensagem, o que será refletido nos novos webhooks.

## Janelas de ponto de entrada gratuito

Se um usuário do WhatsApp enviar uma mensagem para você por meio de um anúncio de clique para o WhatsApp ou do botão de chamada para ação em uma Página do Facebook, usando um dispositivo com nosso app Android ou iOS (apps para desktop e web não são compatíveis):

-   Uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) de 24 horas será aberta (como de costume).-   Se você responder dentro de 24 horas usando qualquer tipo de mensagem, a resposta será gratuita e uma janela de ponto de entrada gratuito (FEP, nas iniciais em inglês) será aberta, com início a partir do momento da sua resposta.

As janelas de FEP permanecem abertas por 72 horas. Durante esse período, é possível enviar ao usuário qualquer tipo de mensagem, sem cobrança. No entanto, a janela de atendimento ao cliente é independente da FEP. Por isso, depois que a janela de atendimento ao cliente fechar, você só poderá enviar mensagens de modelo.

## Nova política de preços para Provedores de IA que usam a Plataforma do WhatsApp Business

Clique [neste link](/documentation/business-messaging/whatsapp/pricing/ai-providers) para saber mais sobre nossa nova política de preços para "Provedores de IA" que usam a Plataforma do WhatsApp Business, em vigor a partir de 16 de fevereiro de 2026 e atualizada em 4 de março de 2026.

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

A `<PRICING_CATEGORY>` indica qual taxa foi aplicada (por exemplo, `marketing`). Consulte a referência do webhook de mensagens de status para ver uma lista de valores possíveis.

Atualmente, não incluímos informações sobre níveis em nenhum webhook. Use o campo [pricing\_analytics](/documentation/business-messaging/whatsapp/analytics#pricing-analytics) para gerar informações sobre os níveis de mensagens entregues.

## Cobrança

As cobranças e ações relacionadas são gerenciadas pelo Meta Business Suite. Para mais informações, consulte [Sobre a cobrança da sua conta do WhatsApp Business⁠](https://www.facebook.com/business/help/2225184664363779).

## Preços da API de Ligações Comerciais do WhatsApp

A API de Ligações Comerciais do WhatsApp tem preços diferentes. Veja nosso [documento de preços da API de Ligações](/documentation/business-messaging/whatsapp/calling/pricing) para saber mais.

## Preços baseados em conversa

[Os preços baseados em conversa](/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing) estão obsoletos. Ele foi substituído pelo modelo de preços por mensagem em 1º de julho de 2025.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)