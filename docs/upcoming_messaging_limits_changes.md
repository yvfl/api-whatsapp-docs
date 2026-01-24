<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/upcoming-messaging-limits-changes -->
<!-- Scraped: 2026-01-24T01:07:18.228Z -->

# Próximas alterações nos limites de mensagens

Updated: 26 de out de 2025

As alterações descritas neste documento já estão ativas e estão aqui apenas para fins de referência. Atualizamos o documento [Limites de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) para refletir essas mudanças.

No momento, os limites de mensagens são calculados e definidos por número de telefone. **A partir de 7 de outubro de 2025**, os limites de mensagens serão calculados e definidos com base no portfólio empresarial e serão compartilhados por todos os números de telefone comerciais de cada portfólio.

Os portfólios empresariais existentes terão o limite de mensagens definido de acordo com o maior limite entre os números de telefone do portfólio (por exemplo, se um portfólio tiver um número de telefone com limite de 100 mil e outros com limites menores, o limite do portfólio será definido como 100 mil).

Essas alterações resultarão em:

-   **Acesso mais rápido a limites maiores**, com atualizações em até seis horas (em vez do período atual de 24 horas) e acesso imediato aos limites do portfólio para números recém-registrados.-   **Maior flexibilidade**, para que você tenha quantos telefones precisar, sem a necessidade de ter mais telefones para acessar limites mais altos, já que todos os telefones compartilham o limite do portfólio.-   **Redução da carga administrativa e dos custos operacionais**, minimizando a necessidade de números de telefone desnecessários.

## Alterações

 

Antes de 7 de outubro de 2025

A partir de 7 de outubro de 2025

**Onde definir os limites?**

Em números de telefone comerciais individuais.

Por exemplo, o número de telefone A pode ter um limite de 10.000, mas o número de telefone B pode ter um limite de 100.000.

Em portfólios empresariais individuais.

Por exemplo, um portfólio com dois números de telefone comercial poderia ter um limite de 100.000, e ambos os números compartilhariam esse limite.

**Limite inicial para portfólios empresariais recém-criados**

Não se aplica

250

**Limite inicial para um número recém-registrado**

250

Compartilha o limite de mensagens definido no portfólio empresarial.

**Limite ao se qualificar para ajuste automático**

1.000

2.000

**Tempo para aumentar o limite via ajuste automático**

O limite aumentou 24 horas após atender aos critérios.

O limite aumentou 6 horas após atender aos critérios.

**Estados de qualidade do número de telefone**

É possível que o estado de **Sinalizado**[da qualidade do número de telefone](https://www.facebook.com/business/help/896873687365001) seja ativado.

Se a classificação de qualidade do número de telefone comercial tiver sido marcada como **Sinalizado** nos últimos sete dias, o limite de mensagens cairá um nível imediatamente.

O estado **Sinalizado**[para o número de telefone](https://www.facebook.com/business/help/896873687365001) não é mais possível.

Caso a classificação de qualidade do número de telefone comercial caia, o limite de mensagens não será reduzido.

**Critérios de dimensionamento automático**

-   O número de telefone da empresa está conectado-   A classificação de qualidade do número de telefone comercial é **Média** ou **Alta**.-   Nos últimos sete dias, sua empresa usou pelo menos metade do limite de mensagens atual

-   Você envia [mensagens de alta qualidade](/documentation/business-messaging/whatsapp/messages/send-messages#message-quality) com todos os seus modelos e números de telefone comerciais-   Nos últimos sete dias, sua empresa usou pelo menos metade do limite de mensagens atual

**Webhooks**

[Webhook business\_capability\_update](/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update):

-   O valor `max_daily_conversation_per_phone` indica o limite de mensagens de números de telefone comerciais.

[Webhook phone\_number\_quality\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update):

-   O valor `current_limit` indica o limite de mensagens de números de telefone comerciais ou o [nível de taxa de transferência de dados](/documentation/business-messaging/whatsapp/throughput).

[Webhook business\_capability\_update](/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update):

-   Um novo parâmetro `max_daily_conversations_per_business` será incluído, indicando o limite de mensagens do portfólio empresarial (`2000`, `10000`, `100000` ou `UNLIMITED`).-   O parâmetro `max_daily_conversation_per_phone` existente agora indicará o limite de mensagens do portfólio empresarial (mesmos valores acima). O parâmetro será removido em fevereiro de 2026.

[Webhook phone\_number\_quality\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update):

-   Será incluído um novo parâmetro `max_daily_conversations_per_business` que descreve o limite de mensagens do portfólio (mesmos valores acima).-   Agora, o valor `current_limit` existente indicará o limite de mensagens do portfólio empresarial ou o [nível de taxa de transferência de dados](/documentation/business-messaging/whatsapp/throughput) do número de telefone comercial. O parâmetro será removido em fevereiro de 2026.

**Requisitos de qualificação de taxa de transferência de dados**

Para que um número de telefone comercial se qualifique para [1.000 mensagens por segundo](/documentation/business-messaging/whatsapp/throughput), é preciso o seguinte:

-   O número de telefone comercial precisa poder iniciar um [número ilimitado de conversas em um período de 24 horas](/documentation/business-messaging/whatsapp/messaging-limits).-   O número de telefone comercial precisa estar registrado para uso com a API de Nuvem. Se ele estiver registrado na API Local, primeiro [faça a migração para a API de Nuvem](/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud).-   O número de telefone comercial precisa ter pelo menos um nível **médio** de [classificação de qualidade](https://www.facebook.com/business/help/896873687365001).

Para que um número de telefone comercial se qualifique para [1.000 mensagens por segundo](/documentation/business-messaging/whatsapp/throughput), é preciso o seguinte:

-   O portfólio empresarial associado ao número de telefone deve ter um limite de mensagens ilimitado.-   O número de telefone comercial deve ser usado para enviar mensagens para 100 mil ou mais números de telefone únicos de usuários do WhatsApp, fora de uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows), em um período móvel de 24 horas.-   O número de telefone comercial precisa ter pelo menos um nível **médio** de [classificação de qualidade](https://www.facebook.com/business/help/896873687365001).

Se você atender aos requisitos de qualificação, atualizaremos automaticamente seu número de telefone comercial para 1.000 mps em até 12 horas.

**Pontos de extremidade**

Para obter o limite de mensagens atual de um número de telefone comercial, solicite o campo `messaging_limit_tier` no [número de telefone comercial](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading).

Para obter o limite de mensagens atual de um portfólio empresarial, solicite o (novo) campo `whatsapp_business_manager_messaging_limit` no [portfólio empresarial](/docs/marketing-api/reference/business#Reading), em uma [conta do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#Reading) ou [número de telefone comercial](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) do portfólio.

Você pode solicitar esse campo diretamente em qualquer um desses recursos ou indiretamente usando a expansão de campo com qualquer ponto de extremidade que retorne portfólios empresariais, contas do WhatsApp Business ou números de telefone comerciais.

## Alterações no Gerenciador do WhatsApp

A partir de 7 de outubro de 2025, a seção **Limites** do painel [Gerenciador do WhatsApp](https://business.facebook.com/wa/manage/home/) > **Visão geral** será atualizada para refletir os limites baseados em portfólio e as informações de escala:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/535511614_796668959479707_3472246252312886870_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=TLT0M0Kf3hIQ7kNvwFIGUYl&_nc_oc=Adkfq7aG3P4aGxYWL1NcflU1pqdcBGeOJUvnHC21eTKS5wdm2FyMBDvN8U3UZHblC7w&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=xQu1Sy_6VaX-UpKQ_zhd5g&oh=00_Afqgwq9pkA4X0a_AkgOyEn-qMyWM05aFRyRP8LxRSYCqtQ&oe=698E505D)

Além disso, um novo painel **Limites de mensagens** será adicionado ao Gerenciador do WhatsApp para exibir o limite atual do seu portfólio empresarial e informações sobre dimensionamento:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/535132607_2167690997071606_2519788358245522587_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=t8rbfrRerAgQ7kNvwFviXA-&_nc_oc=AdmwuFe_THp6Md2Ul3lhMaqqYri6zCZVdDeHO7bn54lfP1rQJGY57w5_dK68_eMyXkk&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=xQu1Sy_6VaX-UpKQ_zhd5g&oh=00_AfrV_7KorrSotx0MNnoQTD7ZQ9dhCj-kAnIKD6BDXRdIOw&oe=698E6E19)

## Suporte para a próxima alteração

Caso seja um desenvolvedor empresarial e esteja enfrentando problemas ou tenha dúvidas técnicas relacionadas às alterações mencionadas em Limites de mensagens, [abra um tíquete no Suporte Direto](/documentation/business-messaging/whatsapp/support#enterprise-developer-support), com **Tópico: “WABiz: Account & WABA”** e **Tipo de solicitação: “Limites de mensagens”**. Caso você tenha várias contas comerciais da Meta, certifique-se de selecionar a correta.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)