<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/throughput -->
<!-- Scraped: 2026-03-10T22:13:11.651Z -->

# Taxa de transferência

Updated: 21 de nov de 2025

Para cada número de telefone comercial registrado, a API de Nuvem é compatível com até 80 mensagens por segundo (mps), por padrão. Esse limite pode aumentar para até [1.000 mps](#higher-throughput) por atualização automática.

A taxa de transferência de dados inclui mensagens enviadas e recebidas, assim como todos os tipos de mensagem. Independentemente da taxa de transferência de dados, os números de telefone comerciais ainda estarão sujeitos ao [limite de volume](/documentation/business-messaging/whatsapp/about-the-platform#rate-limits) e aos [limites de modelos de mensagem](/documentation/business-messaging/whatsapp/messaging-limits) da conta do WhatsApp Business.

Se você tentar enviar mais mensagens do que o permitido pelo nível de taxa de transferência de dados atual, a API retornará o código de erro `130429` até que você volte ao nível permitido. Além disso, os níveis de taxa de transferência de dados são destinados a campanhas de mensagens envolvendo diferentes números de telefone de usuários do WhatsApp. Se tentar enviar muitas mensagens ao mesmo número de usuário do WhatsApp, você poderá receber um erro de [limite de volume de pareamento](/documentation/business-messaging/whatsapp/about-the-platform#rate-limits).

## Números de telefone do app WhatsApp Business

Para manter a compatibilidade com o app WhatsApp Business, os números de telefone comercias que estão em uso no app WhatsApp Business e na API de Nuvem ("[números coexistentes](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users)") têm a taxa de transferência fixa de 20 mps.

## Taxa de transferência de dados mais alta

Se você cumprir nossos [requisitos de qualificação](#eligibility), atualizaremos a taxa de transferência de dados do seu número de telefone comercial para 1.000 mps sem custos. Isso não gerará cobranças adicionais nem afetará os preços.

O processo de atualização pode levar até 1 minuto. Durante esse período, o número não poderá ser usado na nossa plataforma. Se ele for usado em chamadas de API, o código de erro `131057` será retornado. Assim que o número de telefone comercial for atualizado, futuras alterações na taxa de transferência de dados serão feitas automaticamente sem tempo de inatividade.

Quando seu número receber uma taxa mais alta, o webhook [phone\_number\_quality\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update) será acionado com `event` definido como `THROUGHPUT_UPGRADE` e `max_daily_conversations_per_business` definido como `TIER_UNLIMITED`.

## Qualificação

-   O portfólio empresarial associado ao número de telefone deve ter um [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) ilimitado.-   O número de telefone comercial deve ser usado para enviar mensagens para 100 mil ou mais números de telefone únicos de usuários do WhatsApp, fora de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows), em um período móvel de 24 horas.-   O número de telefone comercial precisa ter uma `quality_score` de `YELLOW` (exibida como uma [classificação de qualidade⁠](https://www.facebook.com/business/help/896873687365001)**média** no Gerenciador do WhatsApp) ou superior.

## Webhooks

Seus servidores de webhook devem suportar 3 vezes a capacidade do tráfego de mensagens enviadas e 1 vez a capacidade do tráfego de mensagens recebidas esperado. Por exemplo, se considerarmos um envio de 1.000 mps a uma taxa de resposta esperada de 30%, seus servidores deverão ser capazes de processar até 3.000 webhooks de status de mensagem, mais 300 webhooks adicionais de mensagens recebidas.

Tentamos entregar os webhooks simultaneamente. Por isso, recomendamos que você configure e faça um teste de carga do servidor de webhook para processar solicitações concomitantes com o padrão de latência descrito a seguir:

-   Latência mediana não superior a 250 ms.-   Menos de 1% de latência excede 1 s.

Tentaremos entregar os webhooks com falha novamente por até 7 dias, com retirada exponencial.

## Mensagens de mídia

Para aproveitar ao máximo a taxa de transferência de dados superior, recomendamos [carregar os ativos de mídia](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) nos nossos servidores e usar os IDs de mídia retornados (em vez de hospedar os ativos nos seus servidores e usar os respectivos URLs) nas [mensagens de mídia](/documentation/business-messaging/whatsapp/messages/send-messages). Caso você prefira ou precise hospedar os ativos em servidores próprios, recomendamos usar o [armazenamento em cache de mídia](/documentation/business-messaging/whatsapp/messages/send-messages#media-http-caching).

## Como consultar o nível da taxa de transferência

Use o ponto de extremidade [WhatsApp Business Phone Number](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) para saber o nível atual de taxa de transferência de dados do número de telefone:

```
GET /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>?fields=throughput
```

## Migração

Se você [migrar um número de telefone comercial](/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud) que tenha multiconexão executando 2 ou mais fragmentos da API Local para a API de Nuvem, ele será atualizado automaticamente para uma taxa de transferência de dados mais alta.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)