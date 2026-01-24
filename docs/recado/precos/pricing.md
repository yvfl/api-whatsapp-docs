<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing -->
<!-- Scraped: 2026-01-24T00:45:51.126Z -->

# Preços na Plataforma do WhatsApp Business

Updated: 10 de dez de 2025

Este documento explica como funcionam os preços na Plataforma do WhatsApp Business.

## API de Nuvem e API de Mensagens de Marketing para o WhatsApp

Para garantir o alinhamento com os padrões do setor, em 1º de julho de 2025, passamos a cobrar com base em **cada mensagem enviada**:

-   Só cobramos quando um [modelo de mensagem](/documentation/business-messaging/whatsapp/messages/template-messages) é entregue (`"type":"template"`).-   As taxas variam de acordo com a [categoria](#message-template-categories) do modelo e com o [código telefônico do país](#country-calling-codes) pertencente ao número de telefone do destinatário no WhatsApp.

Geramos valor às empresas de diversas maneiras:

-   Todas as mensagens que não sejam de modelo são gratuitas (`"type":"text"`, `"type":"image"` e assim por diante). Essas mensagens só podem ser enviadas dentro de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) aberta. Consulte [Como enviar mensagens](/documentation/business-messaging/whatsapp/messages/send-messages#sending-messages) para ver uma lista com os tipos de mensagens.-   Os modelos de utilidade entregues dentro de uma janela aberta de atendimento ao cliente são gratuitos.-   É possível acessar [taxas mais baixas](#volume-tiers) para mensagens de modelo de autenticação e utilidade, com base no volume de mensagens.-   Todas as mensagens serão gratuitas por 72 horas, incluindo mensagens de modelo, quando forem enviadas dentro de uma [janela aberta de ponto de entrada gratuito](#free-entry-point-windows).

## Informações sobre preços

Nosso PDF explicativo sobre preços descreve nossa forma de cobrança e as diversas maneiras pelas quais geramos valor para as empresas:

[PDF de informações sobre preços](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.2365-6%2F506409115_515804291560768_5477144239594007982_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3De280be%26_nc_ohc%3DC4zGozrjKTsQ7kNvwHo5ZPY%26_nc_oc%3DAdkWVN8A_2SKUr039JhcdTE5gzKTE6l0NoVu4SOoiAoTeEB3GFF4jGvO1BzVIYKcXwI%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afob6YkyoplKttVLFtjwduXJXVqC1GUaeqoDifXGeABdJw%26oe%3D698E4F3A&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

## Categorias dos modelos de mensagens

Ao contrário das mensagens que não usam modelo, as mensagens com modelo são o único tipo que pode ser enviado fora da janela de atendimento ao cliente. Veja como os modelos podem ser categorizados:

-   Marketing-   Utilidade-   Autenticação

Consulte [Categorização de modelos](/documentation/business-messaging/whatsapp/templates/template-categorization) para entender como os modelos são categorizados.

### Comparação entre mensagens com e sem modelo

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/571069280_1541820816822527_6328052606712176022_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=zdNr_S16-aMQ7kNvwHpRXSl&_nc_oc=Adl-I5UgNYnanicb-J1QN3KQ-V6iqyAwp1PIqSkCqGpIZ88HNFUzAsYfuaTSYU3XJgI&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=7KZkruFIsDvXu0WNCR1vAA&oh=00_AfrlgRBnjJfHuGiCMXBR3yDL4oTV9-GGRHAzXfu5KWh0gA&oe=698E492F)

-   CSW = [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows)-   FEP = [Janela com ponto de entrada gratuito](#free-entry-point-windows)

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

**Atualização da tabela de tarifas**

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

## Tarifas

As taxas variam de acordo com as informações de [categoria do modelo](/documentation/business-messaging/whatsapp/templates/template-categorization), [nível de volume](#volume-tiers) e [país/região](#country-calling-codes).

### Tabela de tarifas e níveis de volume

Estas tabelas de tarifas refletem as taxas e os níveis de volume atuais, vigentes a partir de 1º de janeiro de 2026, com base no fuso horário da conta do WhatsApp Business. Essas informações também estão disponíveis no [site do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fproducts%2Fplatform-pricing%23rates&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg).

Taxas e níveis de volume em USD:

-   [CSV com taxas em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613097921_829408843431679_7810092641806537646_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D1igVRPg0xpMQ7kNvwHa5r3Q%26_nc_oc%3DAdnANN4bUCP4q5OLwhjICfzzEC8JQuBJbvwhHae-tCciM8Z8n4A7vudBABVMa5luEUw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfrwjHDu1uuvD-AtZLylf9Hd7H2Nz1my5s2tbVYGCOTWYQ%26oe%3D6979F2F9&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [CSV com níveis de volume em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612650454_1382747956168005_5107801514951256200_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DeMMDFYIScWoQ7kNvwGDsVjf%26_nc_oc%3DAdnBqkRI73eYkxGRfcRur6FM7SohDZccET0RYIBg_xqP-Q4I7oeS2elKGagrs_kVi3A%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afrzg_eFEecIi7_fiEVpGo4ni0qCz0UFuYJIliap7NAzhA%26oe%3D6979D395&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [PDF com taxas e níveis de volume em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613082154_1611799993323666_5808670464347184450_n.pdf%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DSbHa_WFVSUgQ7kNvwGImq3B%26_nc_oc%3DAdnPbata3bO6obBv8klAu-8WwRunHMJiDDvMp9x8pqmPezrLyn09ROJVpZxorNGsLCY%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfoGMsvxAscLzLxsBrZhV32eXm5CfJ6NdJ5XBjqH-xKfYQ%26oe%3D6979F93D&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

Taxas e níveis de volume em INR:

-   [CSV com taxas em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612891582_1915472539177641_7245368194742665442_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DLSGSqlbid7AQ7kNvwE_lp_0%26_nc_oc%3DAdm16kPOKfSRu6fGlTCX5DYqejPWxECOytBGBjAJpbpkgMp2h3hiN6JL4bvFtYy7PCI%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afr9MSyDR8BsdF0qtYL4WGMwReA-CCkv9-5IXaW6nRlNYg%26oe%3D6979DC65&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [CSV com níveis de volume em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612637066_1540626437215291_3541164870606595807_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dia-wMcBQ1ZEQ7kNvwED9boy%26_nc_oc%3DAdlMekoif64g0asf1ZsHrP6LrfZqtVkMYzYSmIjUSZB32WdI7tX-qu3lksp9O79YDyk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfppkngcBcM-Up9WOyInCwgPMIsVwDa6DaGY0BPcGgjZUA%26oe%3D6979D3F2&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [PDF com taxas e níveis de volume em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613427402_1308808131292109_8259516863261584201_n.pdf%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Di_5LQSXcZUsQ7kNvwFWOu6k%26_nc_oc%3DAdmXereKpqSfUFTWOLo5o6FWSZPAPzPgf7FlAIa45p4_ryK5SLSfxfcBBwbpHANegQk%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfrmvRs1hT7MVpFVMo4GvGgaht-lB6QdsuB65KTQJoheyw%26oe%3D6979FBB1&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

Taxas e níveis de volume em IDR:

-   [CSV com taxas em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612073660_1590866108938555_6360182959847126008_n.csv%3F_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DYXlBInFwYG0Q7kNvwEjY879%26_nc_oc%3DAdmgUcRpV3RCQDDdP4vNyTP4pPomKFGOPNTFQU3aO_xAnpCVdJphOvknNsbqokDRIhM%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfoZti54jNw19hWnILpfK1PiVqeVZWBaL4HW_hWL-S1Q4A%26oe%3D6979DC0E&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [CSV com níveis de volume em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612534809_914766097781847_68203316073012715_n.csv%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dl-0bfB3_xz8Q7kNvwFfLjL5%26_nc_oc%3DAdlbTQFL8zCtsp5myFYMs_E3JGjLOnn6jZheoVC-e9KD5gi3FOinAr0h2PHCgKjcHII%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afp44e8Xf0QiuAgrH8PNYgMeMrzFYh_jXlWNji5tqQq6Xg%26oe%3D6979F296&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [PDF com taxas e níveis de volume em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613023854_1209937397923198_1654831141025997512_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DV98biDcwjaEQ7kNvwFuyOd-%26_nc_oc%3DAdnu2cflpjY5wPdiH4Sl3JUrdsjVO6AkpNGchQiIZmqyR2q5SX9SovbQQYkkSgGZc_M%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afq9yX5J1-ql74arYfZDqR3q6Wq0GMYde9Y35YBe1f850w%26oe%3D6979CF27&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

Taxas e níveis de volume em EUR:

-   [CSV com taxas em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612915026_1851018822285651_6618063477270339820_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DBc-XxaNVPiIQ7kNvwHJ9cOe%26_nc_oc%3DAdm2_afmcMaAIhLWfiavdQrjQYO5Wqbr1abV_zw6y7yPzQxGJaa9oNUwXZzzsGRo0G8%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfqWFfZaPql97n6KCeT-v069kDmHbZnh6NwmnCw2zgTkqg%26oe%3D6979F2C2&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [CSV com níveis de volume em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612491841_2246276429193721_4631922761189101366_n.csv%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dj3DSvUpaeSQQ7kNvwG94IwQ%26_nc_oc%3DAdkuHTix5xwgIR2BUPkqerPGStyaazyvPGKVj4FTxmY44yFrHGblKXUFkrWqGW2yx-c%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfreN-Q59TfkrO6nVyQlqICIVn5qKutFnyeJ2szNYR6p-A%26oe%3D697A01D2&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [PDF com taxas e níveis de volume em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F611402038_1365076144846880_6687787258004461540_n.pdf%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D83ty2jFEmLkQ7kNvwH6-_yM%26_nc_oc%3DAdmu7txJ-zp0M6CMyFCUTgfJvhJx_NqU3wm5KvnQfiH21sRTsMAWLt9QvG4b7m5jiUU%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfrLVDsbLLDrsWsjKa_ntR2yu-ZvtdylhyGWVG0diJz44Q%26oe%3D6979EF69&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

Taxas e níveis de volume em GBP:

-   [CSV com taxas em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613220798_1213179374358230_8917351099919715504_n.csv%3F_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D-HkOU-HeK2kQ7kNvwEWllbl%26_nc_oc%3DAdlBdTZwtMb1iSXyT04vUDmUoS5KFhCMFH5r5dp3gfpwa9XChtuEwDjC4XOdIkVPMWU%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfpgrFRbTe-HUSTfsyAoawxkLWBFgc249DojxzAhk92-pw%26oe%3D6979E227&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [CSV com níveis de volume em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613103270_1201270381543536_5873449895943701671_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dj4iU5jerSuQQ7kNvwGmi0Ta%26_nc_oc%3DAdnRnL570PVuWb_nRicG04iQPeOHqn4vXb7zx2NVcfEuq0Ps9qYXATatUvIKtiGtffE%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfpzYca-mgvfwG8i9pN05gx2zsIMcKw2ugV7Eo_hTXp2YA%26oe%3D6979E0C6&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [PDF com taxas e níveis de volume em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F614378447_1755328639187981_8185748163222129401_n.pdf%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DGxwM_wixkHAQ7kNvwFCCHfR%26_nc_oc%3DAdnqEqXBpAJ-rVCBB9q2kxXGJ6khUlZY9uQnBAoRHNZJ3eigjYSvC0n_DshwQEHqS_4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afpy34nNWH4wGU7kC5IfX6Yplg_3UnKCT2mqMIhFw5RWtg%26oe%3D6979DF4D&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

Taxas e níveis de volume em AUD:

-   [CSV com taxas em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613671409_3010976015762428_224345004977675966_n.csv%3F_nc_cat%3D109%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D94T0VzdIPfsQ7kNvwEtifZn%26_nc_oc%3DAdlHVvHyyS9-j35mF1lqzjgVwuwZrtlL5e8NweDLKbtI-nCONQNC65opsDWiw-oDFdg%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afoogv8cwn7hh0fZgQAI8tFaehe_O5vX8tPGZUWA44p5zw%26oe%3D6979F273&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [CSV com níveis de volume em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612126795_1985099432053549_8200095052240900162_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DQHK6ebyyY6YQ7kNvwEG73-z%26_nc_oc%3DAdnX3wgXtb6lsNP2Nr3h4CTadA8Jez4sBEFvmCwfarBqJzhtNeIyfxkCjmjrjNxV_d0%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afp1DJQiMeOuzdg1Nk_lI-TXfxngSdw2PDxJ-HgELT4GAA%26oe%3D6979F665&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [PDF com taxas e níveis de volume em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F613501258_763900836739429_2586031885181820769_n.pdf%3F_nc_cat%3D107%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DB4qaTP5IXgcQ7kNvwE_-igz%26_nc_oc%3DAdnE4v15Ztucoiz_drVX2wYXu25-Adi3aYpoZVYPU2ZZoEMUmU-2vu5LGt3U0cnOlm0%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afqk-0ONf9dHogGUpE3oPbu4LgLQ0DtB_7vS_11TLUww4g%26oe%3D6979DDC3&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

Taxas e níveis de volume em MXN:

-   [CSV com taxas em MXN](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612020411_1520914742538571_126144230239442646_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3D3mzVBSpuZxUQ7kNvwFCPSgU%26_nc_oc%3DAdmEHkMESpyNonW2o5XKoxkmxzYfduVMxYZPWEQaNeTpTiOoaO1AOhXJPwwu2mBoiB4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afo7DP1dbf4kayUX2lX1z7WYY2g8Qzf_O_V4NijleeGWZA%26oe%3D6979E118&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [CSV com níveis de volume em MXN](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612044380_1677827379874778_2409160019059014573_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DywYL-OzpevUQ7kNvwHwqubx%26_nc_oc%3DAdnBVEXnyA2zub7dUdOtNYmNrrffx5NuZeFrdIQHXF56kqS-b3CBb1zUIKov-RtW6gs%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_Afq6pfb5DAMbhF0iti4y7CcxsgYDlurr9J_Z4oE261tMQw%26oe%3D6979DFD7&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)-   [PDF com taxas e níveis de volume em MXN](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F612827720_1926445168251428_6596147172436142804_n.pdf%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DEhFxyC_AOaYQ7kNvwE1s48N%26_nc_oc%3DAdnf3LkZGy-eoMSAvHbI3rPpEI1LGHzHBdG_b-c8ilJCEhWLXIfkvsiarV8HQyUJBfE%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfoYQojq2QzoeYYWi9GFafYOfrDHtmo_a08OVZ7Ep3BJ9A%26oe%3D6979FB06&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

### Atualizações nas tabelas de tarifas

Os pontos a seguir representam futuras atualizações das nossas tarifas. Veja as tarifas atualizadas nas nossas [tabelas de tarifas](#rate-cards-and-volume-tiers) acima.

**Atualizações de tabela de tarifas em vigor a partir de 1º de janeiro de 2026**

A partir de 1º de janeiro de 2026, à meia-noite, conforme o fuso horário da conta do WhatsApp Business, serão aplicadas as [tarifas acima](#rate-cards-and-volume-tiers). As atualizações refletirão as mudanças a seguir:

-   Redução das tarifas de mensagens de marketing para a França e o Egito.-   Aumento nas taxas de mensagens de marketing para a Índia.-   Redução das tarifas de mensagens de utilidade e autenticação para a América do Norte.

**Tabelas de tarifas em novas moedas a partir de 2026**

Em 2026, incluiremos tarifas para mensagens e [ligações](/documentation/business-messaging/whatsapp/calling/pricing) em dez novas moedas, oferecendo tarifas em 16 moedas até o final de 2026 para a plataforma do WhatsApp Business. Para usar essas moedas assim que elas estiverem disponíveis, crie uma nova conta do WhatsApp Business (WABA) e selecione a moeda desejada a partir das 9h PT nas datas abaixo:

-   1º de janeiro de 2026: uma nova moeda: **MXN** (México). Somente para empresas com linhas de crédito. Será disponibilizado para todas as empresas em 1º de abril de 2026.-   1º de abril de 2026: oito novas moedas **AED** (Emirados Árabes Unidos), **ARS** (Argentina), **CLP** (Chile), **COP** (Colômbia), **MYR** (Malásia), **PEN** (Peru), **SAR** (Arábia Saudita) e **SGD** (Singapura). Além disso, **MXN** (México) estará disponível para todas as empresas.-   Segunda metade de 2026 (data a ser definida): uma nova moeda **BRL** (Brasil).

Nossas novas tarifas em MXN estão publicadas acima e refletem atualizações das tarifas que entrarão em vigor em 1º de janeiro de 2026. Para as moedas que serão lançadas em 1º de abril de 2026, planejamos publicá-las até 1º de março de 2026, conforme nosso [calendário de preços](#pricing-calendar).

Não é possível alterar _a moeda de uma WABA existente_. A única maneira de usar as moedas disponibilizadas recentemente é criando uma nova WABA e selecionando a moeda desejada.

**Lançamento da cobrança local para Índia e Brasil em 2026**

Introduziremos a cobrança local para clientes qualificados na Índia a partir de janeiro de 2026 e para o Brasil no segundo semestre de 2026 (a data exata está pendente).

**Atualizações anteriores**

-   A partir de 1º de outubro de 2025, à meia-noite, conforme o fuso horário da conta do WhatsApp Business, serão aplicadas as taxas abaixo. As atualizações refletirão as mudanças a seguir:
    -   Aumento nas tarifas de mensagens de marketing para os Emirados Árabes Unidos.-   Aumento nas tarifas de mensagens de utilidade e autenticação para a Colômbia.-   Redução nas taxas de mensagens de marketing para o México.-   Redução nas tarifas de mensagens de utilidade e autenticação para a Arábia Saudita, a Argentina e o Egito.-   O Zimbábue está incluído na região "Outros países da África" em vez de "Outro". As mensagens entregues a usuários do WhatsApp com o código de país +263 (Zimbábue) serão cobradas com base nas taxas da região "Outros países da África".-   A partir de 1º de julho de 2025: reduzimos as tarifas de mensagens de utilidade e autenticação em diversos mercados para garantir que nossos preços estejam alinhados com os de canais alternativos para esses casos de uso. As taxas de conversas de marketing se tornaram taxas de mensagens de marketing.-   A partir de 1º de abril de 2025: reduzimos as [taxas internacionais de conversas de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) para Egito, Nigéria, Paquistão e África do Sul.-   A partir de 1º de fevereiro de 2025: reduzimos as [taxas de conversas de autenticação](/documentation/business-messaging/whatsapp/pricing#rates) para Egito, Malásia, Nigéria, Paquistão, Arábia Saudita, África do Sul e Emirados Árabes Unidos.-   A partir de 1º de novembro de 2024: agora as [conversas de serviço](/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#service-conversations) são gratuitas para todas as empresas.-   A partir de 1º de outubro de 2024: atualizamos as [taxas de conversas de marketing](/documentation/business-messaging/whatsapp/pricing#rates) para Índia, Arábia Saudita, Emirados Árabes Unidos e Reino Unido.-   A partir de 1º de agosto de 2024: reduzimos as[taxas de conversas de utilidade](/documentation/business-messaging/whatsapp/pricing#rates).

### Taxas internacionais de autenticação

Países específicos estão sujeitos a uma taxa internacional de autenticação. Nossas tabelas de tarifas refletem esses valores. Consulte [Taxas internacionais de autenticação](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) para saber mais sobre essas taxas e entender se elas se aplicam a você.

### Código telefônico do país

As cobranças por conversas são baseadas no código telefônico do país referente ao número de telefone do destinatário no WhatsApp. A tabela abaixo mostra como identificamos países ou regiões usando os códigos telefônicos de cada país. Os países não listados abaixo são categorizados como **Outro**.

Essas informações também estão disponíveis em um arquivo CSV:

[Código telefônico de país e mapeamento de taxas regionais em CSV](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F559604326_1510649803514615_3972087685039081235_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DRCje6LObtdMQ7kNvwFB4xXG%26_nc_oc%3DAdklNLL7cj8dg4YzLu5UMJafTQUurUrXGQBTdXNZ7Vyi7Djnam1ftZI4Q8rxWIgHiA4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3D7KZkruFIsDvXu0WNCR1vAA%26oh%3D00_AfpUz3TpVZQe8NDtXPEMsFUNvFXjazPNLz65euvIhklFOA%26oe%3D6979E393&h=AT0Efewwe-Zt3kZO2KMvnXtU2tPhRhKqo494KH-JkCJaKODOXBO6Jv3hkSleCbJXWdwUfgIdYe8agXemXafar7pdU5JA6e_PH8t7EIlW_8YfsfYw-ohAxsysbOon_IcPtx-IRiQOHRzvnWMaMdJC8LPF9hg)

  
  

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

Você pode aproveitar taxas mais baixas de utilidade e autenticação com base no número de mensagens enviadas por mês.

### Acúmulo por níveis

-   **As mensagens são agregadas no nível do portfólio empresarial, abrangendo todas as contas do WhatsApp Business (WABAs, pelas iniciais em inglês) pertencentes ao portfólio**: para definir quais níveis podem ser aplicados em determinado mês para cada combinação de mercado e categoria, as mensagens são somadas entre todas as WABAs do portfólio empresarial, conforme o par mercado-categoria (por exemplo, Brasil-autenticação, Brasil-utilidade, Índia-autenticação e assim por diante).-   **Apenas as mensagens cobradas contam para a definição dos níveis**: portanto, as mensagens a seguir não são contabilizadas:
    -   Modelos de utilidade entregues aos usuários do WhatsApp dentro de uma janela aberta de atendimento ao cliente-   Modelos de utilidade entregues dentro de uma [janela de ponto de entrada gratuito](#free-entry-point-windows)-   **Os níveis de volume serão determinados exclusivamente pela Meta**: todos os dados de insights são aproximados devido a pequenas variações no processamento das informações. Não se deve depositar confiança excessiva nos dados de insights.

### Dinâmica-chave

-   **Os níveis são específicos por mercado e categoria**: os níveis de volume seguem nossas tabelas de tarifas e variam conforme o mercado (por exemplo, Brasil ou Outros países da América Latina) e a categoria (utilidade, autenticação).-   **As taxas são específicas por nível**: quando uma empresa envia mensagens suficientes em uma determinada combinação de mercado e categoria para atingir o próximo nível, ela acessa a taxa correspondente à nova faixa, aplicável às mensagens do nível em questão. Essa taxa se aplica a todas as WABAs da empresa.-   **Os níveis são redefinidos todo mês**: no início de cada novo mês (meia-noite no fuso horário da WABA), a contagem de mensagens é zerada, e as empresas começam a acumular mensagens para aquele mês.

### Exemplos de níveis de volume

A tabela abaixo é apenas ilustrativa e destaca a dinâmica dos níveis de volume. Consulte nossas [tabelas de tarifas](#rate-cards-and-volume-tiers) para conferir os valores cobrados.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/502514970_1202956304344062_4629097874159039633_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=MHAgzHarpocQ7kNvwGXkJn7&_nc_oc=AdmNEahoHjXVmw8A-bZUjh5_8roYJ-hmjG-0ccmjy3zg1ThzHfAj9jNa3qMnzpnfkVo&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7KZkruFIsDvXu0WNCR1vAA&oh=00_Afp2JT4YORLRHDHPBRnp-w2Hy-CA7Y5sN5wEtLB6ITvxdg&oe=698E4951)

Veja abaixo vários exemplos para destacar como nossos níveis funcionam e o que cobraríamos em determinado mês para uma combinação específica de mercado e categoria. Os exemplos referem-se à tabela ilustrativa exibida acima:

Exemplo 1 – uma empresa que envia um total de mensagens de autenticação B em um mês para a Índia será cobrada da seguinte forma:

-   Taxa da lista para as primeiras mensagens A-   Taxa do nível 1 para as mensagens de A+1 até B-   Cálculo total para o mês = taxa por nível 𝗑 mensagens em cada nível

Exemplo 2 – uma empresa que começa a ser cobrada pelas nossas taxas internacionais de autenticação no 15º dia do mês:

-   Dias 1 a 14 do mês: os níveis de volume são aplicados à taxa de autenticação.-   Do dia 15 em diante do mês: os níveis de volume passam a ser aplicados à taxa internacional de autenticação, com as mensagens continuando a acumular no mesmo mês. Por exemplo, se uma empresa já tiver alcançado o nível 2, ela será cobrada pela taxa internacional de autenticação correspondente a esse nível:

Exemplo 3 – uma empresa possui 3 WABAs que enviam mensagens de autenticação para a Índia. Para a WABA A, ainda é 31 de julho, de acordo com o fuso horário local. Para as WABAs B e C, já é 1º de agosto, conforme o fuso horário local. No mês de julho, a empresa já está sendo cobrada pela taxa do nível 1.

-   O portfólio empresarial estará acumulando mensagens para os níveis tanto de julho (por meio da WABA A) quanto de agosto (por meio das WABAs B e C) durante um determinado período.-   A empresa pode alcançar o próximo nível para julho por meio da WABA A. Se isso ocorrer, as mensagens restantes de julho enviadas pela WABA A serão cobradas com base na taxa do nível 2.

Exemplo 4 – uma empresa possui 3 WABAs integradas em 2 provedores de solução. O provedor 1 envia as primeiras mensagens B em um determinado mês, e o provedor 2 começa a enviar mensagens quando a empresa já está no 3º nível. A empresa não envia mensagens suficientes naquele mês para atingir o próximo nível. Veja o que cobraríamos de cada provedor:

-   Provedor 1: taxa da lista para as primeiras mensagens A, depois, taxa do nível 1 para as mensagens de A+1 até B e taxa do nível 2 para as mensagens de B+1 até C-   Provedor 2: taxa do nível 2 aplicada a todas as mensagens enviadas por ele.

### Webhooks sobre níveis

A partir de 1º de outubro de 2025, um webhook [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) com `event` definido como `VOLUME_BASED_PRICING_TIER_UPDATE` será disparado quando sua conta do WhatsApp Business atingir um novo nível de volume, em qualquer mercado, em um determinado mês. Isso complementa nosso ponto de extremidade [pricing\_analytics](/documentation/business-messaging/whatsapp/analytics#pricing-analytics), que continuará fornecendo o progresso do nivelamento ao longo do mês e informações sobre o nível para mensagens entregues.

Exemplo de webhook:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "time": 1743451903,      "changes": [        {          "value": {            "volume_tier_info": {                "tier_update_time": 1743451903,                "pricing_category": "UTILITY",                "tier": "25000001:50000000",                "effective_month": "2025-11",                "region": "India"            },            "event": "VOLUME_BASED_PRICING_TIER_UPDATE"          },          "field": "account_update"        }      ]    }  ]}
```

-   `tier_update_time` indica quando sua conta do WhatsApp Business atingiu um nível de volume superior (registro de data e hora Unix).-   `pricing_category` indica a categoria de modelo à qual se aplica a tarifa do seu novo nível de volume.-   `tier` indica os limites inferior e superior do novo nível de volume.-   `effective_month` indica o mês em que a tarifa do seu novo nível de volume entra em vigor.-   `region` indica o país ou a região dos usuários do WhatsApp onde se aplica a tarifa do seu novo nível de volume.

É possível que vários webhooks [account\_update](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) sejam acionados para descrever o mesmo evento de mudança de nível. Nesses casos, use o webhook com o menor registro de data e hora `tier_update_time` Unix como o webhook oficial.

### Análises de nível

Confira [informações sobre os níveis de volume](/documentation/business-messaging/whatsapp/analytics#volume-tier-information) por meio [da análise de modelos](/documentation/business-messaging/whatsapp/analytics#template-analytics).

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

A `<PRICING_CATEGORY>` indica qual taxa foi aplicada (por exemplo, `marketing`). Consulte a referência do webhook de mensagens de status para ver uma lista de valores possíveis.

Atualmente, não incluímos informações sobre níveis em nenhum webhook. Use o campo [pricing\_analytics](/documentation/business-messaging/whatsapp/analytics#pricing-analytics) para gerar informações sobre os níveis de mensagens entregues.

## Cobrança

As cobranças e ações relacionadas são gerenciadas pelo Meta Business Suite. Para ver mais informações, consulte [Sobre a cobrança da sua conta do WhatsApp Business](https://www.facebook.com/business/help/2225184664363779).

## Preços da API de Ligações Comerciais do WhatsApp

A API de Ligações Comerciais do WhatsApp tem preços diferentes. Veja nosso [documento de preços da API de Ligações](/documentation/business-messaging/whatsapp/calling/pricing) para saber mais.

## Preços baseados em conversa

O modelo de [preços baseados em conversa](/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing) ficou obsoleto. Ele foi substituído pelo modelo de preços por mensagem em 1º de julho de 2025.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)