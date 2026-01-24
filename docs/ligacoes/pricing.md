<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/pricing -->
<!-- Scraped: 2026-01-24T00:28:56.798Z -->

# Preços da API de Ligações

Updated: 11 de dez de 2025

**Todas as ligações iniciadas pelo usuário são gratuitas.**

## Visão geral

As ligações iniciadas pela empresa são cobradas com base em:

-   Duração da ligação (calculada em pulsos de seis segundos)-   O código do país do número de telefone que recebe a ligação.-   Nível de volume (com base nos minutos de ligação no mês)

Observação: nossos sistemas contam pulsos fracionários como um pulso. Por exemplo, uma ligação de 56 segundos (9,33 pulsos) seria contada como 10 pulsos.

Para ligações que ultrapassam os níveis de preços (por exemplo, do nível 0–50.000 para o nível 50.001–250.000), a ligação inteira é cobrada pela tarifa mais baixa (ou seja, a tarifa do nível de volume mais alto).

É necessário ter uma forma de pagamento válida para fazer ligações.

**Observação:** as mensagens de solicitação de permissão de ligação estão sujeitas aos [preços por mensagem](/documentation/business-messaging/whatsapp/pricing).

## Tabelas de tarifas de preços baseados em volume (VBP)

As tabelas de tarifas a seguir representam as tarifas atuais de VBP para a API de Ligações Comerciais do WhatsApp em vigor a partir de 1º de agosto de 2025:

-   [Tarifas em USD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F520671944_623223040377923_7736077446508180620_n.csv%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DpNvY_SSHD3UQ7kNvwGrn3dO%26_nc_oc%3DAdmHeB3Rbol8ZBfFFjompJHjRuMHxvjR-1KbFOmeFWoyUIs2IwUPpBKGtmeXMDPfkBo%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DyzxR2H9byHgBpPs1bochIw%26oh%3D00_Afq94FIG6cy7O-lzBdDLknzzAezv72mLMLeUlY6heH5LxA%26oe%3D6979E8D1&h=AT2-jDRqCealyHptWGFwAz-qPNjavUhKJNOALGWhQXmx6UlFiWbbqnWQ0yytYwIwrVrdcB3NdDVt2ZNcXaqs_xJ20oII-C-pLRbPT_1scdmYQLxlD5hrTz7eLtWG3_VSgOOYs8Lo8efut0kyg0faz0QOWCs)-   [Tabela de tarifas em INR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F520297017_2631484657208999_4027192314064932495_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DYux56QbVlfMQ7kNvwEg5gIt%26_nc_oc%3DAdkmFdQS7bTG3VNxkoF3g37-6aVDjwtkBEJkYe5OfA6-PY-z-QcIWlq0CST8XLfSTi8%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DyzxR2H9byHgBpPs1bochIw%26oh%3D00_AfqgZtpeoNgnIM9GqRN30K1JIrqNtYvYgDOHlkci1Gv2fw%26oe%3D6979FA67&h=AT2-jDRqCealyHptWGFwAz-qPNjavUhKJNOALGWhQXmx6UlFiWbbqnWQ0yytYwIwrVrdcB3NdDVt2ZNcXaqs_xJ20oII-C-pLRbPT_1scdmYQLxlD5hrTz7eLtWG3_VSgOOYs8Lo8efut0kyg0faz0QOWCs)-   [Tarifas em IDR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F522403360_1317814323248646_3679642822059879321_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DF1TFklsQ940Q7kNvwELkwQC%26_nc_oc%3DAdnkWw_N3xEBkvNhA0Pd8RBOgcUa82RAdEtp0nV3Q2tzjD5XANYwn43-331jQRs91Q4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DyzxR2H9byHgBpPs1bochIw%26oh%3D00_AfpA5Y169kWT6K6wuPbWaL9dMxqDlT5Su7oyix0AMC6NIQ%26oe%3D6979D26E&h=AT2-jDRqCealyHptWGFwAz-qPNjavUhKJNOALGWhQXmx6UlFiWbbqnWQ0yytYwIwrVrdcB3NdDVt2ZNcXaqs_xJ20oII-C-pLRbPT_1scdmYQLxlD5hrTz7eLtWG3_VSgOOYs8Lo8efut0kyg0faz0QOWCs)-   [Tarifas em EUR](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F521916945_1437343154178501_4307701949709939168_n.csv%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DMKeQCqV2E5sQ7kNvwF-nSnN%26_nc_oc%3DAdlFL8y_-hwoWsUYmg516GLQ0c8MwTFHFB4dDfD7p8VoSNBPFSz9SFzp94-qD5bIPhU%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DyzxR2H9byHgBpPs1bochIw%26oh%3D00_AfpY2H5GaYIkn3KdeAsSWGiCrN2fZURsrSOE1KGirNZM1A%26oe%3D6979E5E5&h=AT2-jDRqCealyHptWGFwAz-qPNjavUhKJNOALGWhQXmx6UlFiWbbqnWQ0yytYwIwrVrdcB3NdDVt2ZNcXaqs_xJ20oII-C-pLRbPT_1scdmYQLxlD5hrTz7eLtWG3_VSgOOYs8Lo8efut0kyg0faz0QOWCs)-   [Tarifas em GBP](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F523820415_1707220083238148_129381165576389329_n.csv%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DJcn3H866meQQ7kNvwEIFi_2%26_nc_oc%3DAdmm7KYYEFSimhgsPYvQc-Chgcm8Q6I51DGB0YvtZR4_eRGWElsCeeJGHEhvRGCPvFo%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3DyzxR2H9byHgBpPs1bochIw%26oh%3D00_AfqfmPpz0rZdXel33O-TXHrgN2DvZLMSFn26jOLFLUzK6g%26oe%3D6979E1F6&h=AT2-jDRqCealyHptWGFwAz-qPNjavUhKJNOALGWhQXmx6UlFiWbbqnWQ0yytYwIwrVrdcB3NdDVt2ZNcXaqs_xJ20oII-C-pLRbPT_1scdmYQLxlD5hrTz7eLtWG3_VSgOOYs8Lo8efut0kyg0faz0QOWCs)-   [Tarifas em AUD](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F518358957_1395180011780140_6900177198446866717_n.csv%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3Dbf4RP_5nChYQ7kNvwE7GZpv%26_nc_oc%3DAdkYKpeGmVuZuMOhdMLyRrJuB4MiL-hW2wYMJ3Z43cE-ci8lMItxpXr1pb_qYxUOfyo%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-2.xx%26_nc_gid%3DyzxR2H9byHgBpPs1bochIw%26oh%3D00_AfqG5i0UOr5zV4JoDp9hTTVQkA7sPu4AwUlp-6J2_LPJTQ%26oe%3D6979CBC6&h=AT2-jDRqCealyHptWGFwAz-qPNjavUhKJNOALGWhQXmx6UlFiWbbqnWQ0yytYwIwrVrdcB3NdDVt2ZNcXaqs_xJ20oII-C-pLRbPT_1scdmYQLxlD5hrTz7eLtWG3_VSgOOYs8Lo8efut0kyg0faz0QOWCs)-   [Tarifas em MXN](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru1-2.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F597620135_866494415956770_7234843917023384648_n.csv%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DJfqB_TMWgF8Q7kNvwEQmq8L%26_nc_oc%3DAdk4cfjThQBFBJM18mjpS9qebxIXTj9Ny9BhTpijTdayhiwzwXz4aQkgJb72sBe5mx4%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru1-2.xx%26_nc_gid%3DyzxR2H9byHgBpPs1bochIw%26oh%3D00_AfrSMdN-ad-JQ1M4j1AQphRr4aWEpmYoOpzTSi30yDmJWQ%26oe%3D6979C91D&h=AT2-jDRqCealyHptWGFwAz-qPNjavUhKJNOALGWhQXmx6UlFiWbbqnWQ0yytYwIwrVrdcB3NdDVt2ZNcXaqs_xJ20oII-C-pLRbPT_1scdmYQLxlD5hrTz7eLtWG3_VSgOOYs8Lo8efut0kyg0faz0QOWCs)

## Como as ligações alteram a janela de atendimento ao cliente de 24 horas

Atualmente, quando um usuário do WhatsApp envia uma mensagem para você, uma [janela de atendimento ao cliente de 24 horas](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) começa ou é atualizada.

Durante esse período, a empresa pode enviar ao usuário do WhatsApp qualquer tipo de mensagem que não seria permitida fora da janela.

Com a introdução da API de Ligações, a janela de atendimento ao cliente agora também é iniciada ou atualizada para ligações:

-   Quando um usuário do WhatsApp liga para você, independentemente de você aceitar a ligação ou não-   Quando um usuário do WhatsApp aceita a ligação.

## Como obter análises de custo e de ligações

Você pode chamar o ponto de extremidade `GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>` com um parâmetro de consulta `?fields=call_analytics` a fim de obter análises de ligações para sua conta do WhatsApp Business (WABA).

Os pontos de extremidade podem fornecer informações úteis, como custo, contagem de ligações concluídas e duração média da ligação. Saiba mais sobre as [análises de ligações neste link](documentation/business-messaging/whatsapp/analytics#call-analytics).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)