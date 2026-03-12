<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboarding -->
<!-- Scraped: 2026-03-10T21:46:24.477Z -->

# Integração

Updated: 10 de fev de 2026

A API de Mensagens de Marketing para o WhatsApp (anteriormente conhecida como API de Mensagens de Marketing Lite) agora está disponível para todos.

A integração com a API de Mensagens de Marketing para o WhatsApp (API de MM para o WhatsApp) é uma atualização de baixo esforço para o envio de mensagens de marketing com otimizações na API de Nuvem. Confira as instruções abaixo para integrar sua empresa, seja diretamente com a API ou usando um parceiro.

Quando uma empresa se cadastra na API de MM para o WhatsApp, contas de anúncios somente para leitura são criadas e vinculadas a cada um dos modelos de marketing associados ao portfólio empresarial.

Veja o que as empresas podem fazer com essas contas vinculadas:

-   Buscar insights da API de MM para o WhatsApp por meio da "API de Insights" da API de Marketing para análise

Essas contas de anúncios somente leitura ficam sincronizadas para que qualquer alteração nos modelos de marketing seja refletida na entidade de anúncio vinculada.

Siga as etapas abaixo para integrar a API de MM para o WhatsApp.

## Requisitos de qualificação

Para usar a API de Mensagens de Marketing para o WhatsApp (API de MM para o WhatsApp), a empresa precisa cumprir as restrições legais, setoriais e de conteúdo aplicáveis (que variam de acordo com o país), conforme descrito nas [Políticas de Mensagens do WhatsApp Business⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fpolicy&h=AT5yYkPUum-DhgC0bbx4kKHhUsF0CmCwZx5YbLoVQRtTGoQWyNm8unMds1iGzsbuFsUwmikBarsNgLbuHj4lnvnqSaZARVydVvr40mS-9lZ9qSoBcWYuu6U-awTNb9tH5NP3-M4atFV-vVJKlb3HpMkJLOc).

Além disso, os seguintes requisitos devem ser atendidos:

-   A Conta do WhatsApp Business (WABA, nas iniciais em inglês) precisa estar ativa, sem restrições de mensagens devido a violações-   O país fiscal da WABA não está em regiões sancionadas-   O país da empresa proprietária não pode estar em regiões sancionadas

A API de MM para o WhatsApp atualizará continuamente a qualificação por vertical e as políticas para cumprir diversas normas e regulamentações internacionais. Isso significa que esses requisitos podem sofrer alterações.

### Verificar o status de integração e a qualificação da WABA

Use o ponto de extremidade [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#fields) e peça o campo `marketing_messages_onboarding_status` para verificar o status de qualificação de uma WABA para a API de MM para o WhatsApp.

Nas WABAs qualificadas, o campo é definido como `ELIGIBLE`. Um valor definido como `ONBOARDED` indica que a WABA do cliente empresarial já foi integrada. Para conferir os valores possíveis e os respectivos significados, consulte a referência [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#fields).

**Exemplo de solicitação**

```
curl 'https://graph.facebook.com/v25.0/25002526842541/?fields=marketing_messages_onboarding_status' \
    -H 'Authorization: Bearer EAAAl...'
```

**Exemplo de resposta**

```
{  "marketing_messages_onboarding_status": "ELIGIBLE",  "id": "25002526842541"}
```

Também é possível usar o ponto de extremidade [GET /<BUSINESS\_PORTFOLIO\_ID>/client\_whatsapp\_business\_accounts](/docs/marketing-api/reference/business) com o filtro a seguir para gerar uma lista de todas as WABAs qualificadas que foram compartilhadas com você.

**Sintaxe da solicitação**

```
GET /<BUSINESS_PORTFOLIO_ID>/client_whatsapp_business_accounts
  ?filtering=[
    {
      'field':'marketing_messages_onboarding_status',
      'operator':'IN',
      'value':['ELIGIBLE']
    }
  ]
```

**Exemplo de solicitação**

```
curl -g 'https://graph.facebook.com/v25.0/19502398688333/client_whatsapp_business_accounts?filtering=[{'field':'marketing_messages_onboarding_status','operator':'IN','value':['ELIGIBLE']}]' \
    -H 'Authorization: Bearer EAAAj...'
```

**Exemplo de resposta**

```
{  "data": [    {      "id": "46302397361990",      "name": "San Andreas Roofing",      "timezone_id": "1",      "message_template_namespace": "93d3e793_8a4f_49c4_b903_fd72aac80f71"    }  ]}
```

### Verificar o status de qualificação (opção alternativa)

Este campo ficará obsoleto na versão 24.0. Recomendamos usar o campo [`marketing_messages_onboarding_status`](#check-waba-onboarding-status-and-eligibility).

Você pode usar o ponto de extremidade [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) e solicitar o campo [`marketing_messages_lite_api_status`](#check-waba-onboarding-status-and-eligibility) para ver o status de qualificação. No entanto, como esse campo ficará obsoleto em uma data futura, recomendamos usar o [método acima](/documentation/business-messaging/whatsapp/marketing-messages/onboarding#eligibility-requirements).

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=marketing_messages_lite_api_status
```

Para WABAs gerenciadas por parceiros, as empresas podem encontrar as contas qualificadas usando este ponto de extremidade:

```
GET /<BUSINESS_ID>/client_whatsapp_business_accounts?fields=marketing_messages_lite_api_status
```

Para conferir uma lista dos valores que podem ser retornados e os respectivos significados, consulte a referência [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#fields).

### Caso queira conferir se a empresa aceitou os Termos de Serviço e qual o status da Intenção para o Gerenciador de Negócios

Use o ponto de extremidade [GET /<BUSINESS\_PORTFOLIO\_ID>/](/docs/marketing-api/reference/business) e solicite o campo `marketing_messages_onboarding_status` para verificar o status de qualificação para a API de MM para o WhatsApp.

**Permissão**

-   `business_management`

#### Exemplo de pedido

```
curl "https://graph.facebook.com/v24.0/52002526842524351/?fields=marketing_messages_onboarding_status" \-H 'Authorization: Bearer EAAAl...'
```

#### Exemplo de resposta

```
{  "marketing_messages_onboarding_status":   {      "status": "TERM_OF_SERVICE_SIGNED"      "time": "2025-10-07"   }}
```

Use o ponto de extremidade [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#fields) e solicite o campo `owner_business_info` para verificar o status de integração da WABA.

**Permissões**

-   `whatsapp_business_management`-   `whatsapp_business_messaging`

#### Exemplo de pedido

```
curl GET "https://graph.facebook.com/v24.0/69843579834234?fields=owner_business_info" \-H 'Authorization: Bearer EAAAl...'
```

#### Exemplo de resposta

```
{
  "owner_business_info": {
    "name": "WhatsApp PaidSend Testing",
    "id": "<BM_ID>",
    "marketing_messages_onboarding_status": {
     "status": "TERM_OF_SERVICE_SIGNED" | "REQUEST_SENT" | "NOT_STARTED"
     "time": "2025-08-13"
    }
  },
}
```

## Registrar um número de telefone na API de Nuvem

Para enviar uma mensagem por meio da API de MM para o WhatsApp, também é preciso registrar um número de telefone comercial na API de Nuvem. A API de MM para o WhatsApp e a API de Nuvem são usadas juntas no mesmo número de telefone:

-   A API de Nuvem permite que uma empresa envie modelos de autenticação, serviço, utilidade e marketing não otimizado, além de mensagens em formato livre, e receba mensagens de consumidores em um número de telefone comercial.
    -   Com a API de MM para o WhatsApp, a empresa pode enviar mensagens de marketing com otimizações usando o mesmo número de telefone registrado na API de Nuvem.
    

Os números de telefone do WhatsApp Business que não estiverem registrados na API de Nuvem não poderão ser usados com a API de MM para o WhatsApp.

Se um número de telefone comercial já estiver registrado na API de Nuvem, não será necessário verificar o telefone para usar a API de MM para o WhatsApp, já que nenhum novo número será incluído durante o processo de registro. Os números de telefone existentes continuarão registrados na API de Nuvem e agora também poderão usar a API de MM Lite, além da API de Nuvem, simultaneamente, para o envio de mensagens de marketing.

## Para provedores de soluções

Caso você seja um provedor de soluções integrando empresas finais, consulte [Como integrar clientes comerciais](/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers).

## Como integrar clientes comerciais

Instrua seus clientes comerciais a designarem alguém com controle total do portfólio empresarial para aceitar os Termos de Serviço e integrar a API de MM para o WhatsApp via Gerenciador do WhatsApp.

-   Navegue até Gerenciador do WhatsApp > Visão geral.-   Na seção Alertas, clique em Aceitar termos para começar a usar a API de Mensagens de Marketing para o WhatsApp.-   Siga as etapas para aceitar os Termos de Serviço da API de MM para o WhatsApp.

Seus clientes comerciais poderão começar a enviar mensagens por meio da API de MM para o WhatsApp.

Caso não consiga acessar o Gerenciador do WhatsApp, [encontre o administrador do seu portfólio empresarial neste link](/documentation/business-messaging/whatsapp/support#i-can-t-find-an-admin-user-at-my-company-to-onboard-to-mm-api-for-whatsapp).

## Para clientes comerciais sem parceiro

Caso sua empresa faça a integração direta com a API de Nuvem sem um parceiro, siga as instruções abaixo para aceitar os Termos de Serviço e usar a API de MM para o WhatsApp.

-   Acesse **[Painel de Apps](/apps)** > **WhatsApp** > **Início rápido**.-   Na página **Início rápido** , localize o cartão “Aumente o ROI com a API de Mensagens de Marketing para o WhatsApp” e clique no botão “Começar”.-   Clique em "Continuar para o guia de integração" e aceite os Termos de Serviço

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/476020445_3647418092312679_4465719704295641193_n.png?stp=dst-webp&_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=Mc6bW1C_XNsQ7kNvwHb8Nt5&_nc_oc=AdmExcX1cHsOOtGZ_mrtyKb4Gd3v7R4MD7ZjF3ygzLUJViRkTrmfgsnsFvWWSE_6DR8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=nkhsZGpTcawRv1rmldnDcg&_nc_ss=8&oh=00_Afz-_Tv4XPiFngcuaTMwzZpBq5AzUL4Nj63r6CgHqt2MSw&oe=69CAEB0B)

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/476114538_1636490170408141_5744881403199109308_n.png?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Lv7NLecLxIYQ7kNvwFm1Lxo&_nc_oc=AdlEr7Th30-zT24HglV6gnaaVyyv8LwPMvNN0TbVyZj9QQWwvxr5XDhfrpNAuSVs6Gs&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=nkhsZGpTcawRv1rmldnDcg&_nc_ss=8&oh=00_Afx2-s44nsXj-S3IV2eAKo84wQX2lax02UubxtFBEB67NA&oe=69CADA51)

## Como compartilhar a atividade do evento

Assim que a empresa for integrada, os eventos de status de mensagem (entregue, lida, clicada) serão compartilhados com a Meta automaticamente como parte da atividade do evento. A Meta não vende seus dados nem os dos assinantes. Esses dados são usados somente para otimizar o desempenho de campanhas de marketing.

### Gerenciar via configurações da conta do WhatsApp

É possível desabilitar o compartilhamento da atividade do evento na [configuração da conta do WhatsApp Business⁠](https://business.facebook.com/latest/settings/whatsapp_account).

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/532666735_24223328414028742_8881901315029283677_n.png?stp=dst-webp&_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=qtsUXoTxI90Q7kNvwEuq3nf&_nc_oc=AdlKXDw63PoOO15uCLodkC9E783e5v4pbFOs3z6n7uxloDuaDfSiRPpy-W_v_cE6_P8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=nkhsZGpTcawRv1rmldnDcg&_nc_ss=8&oh=00_AfyhFdc5OvoLnFeG7fQi9LcRriTa8Lqcx9Nn7yByWXWVNQ&oe=69CAED9C)

### Configurar via API

Além disso, para personalizar o compartilhamento da atividade do evento por mensagem, é possível incluir o parâmetro `<message_activity_sharing>` e defini-lo como um booliano (True/False) na carga `marketing_messages` da chamada de API. A chamada de API substitui a configuração predefinida da conta do WhatsApp Business.

Use o ponto de extremidade `POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/marketing_messages` para enviar uma mensagem a um usuário do WhatsApp.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/marketing_messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "message_activity_sharing": "<BOOLEAN>",
  "type": "<MESSAGE_TYPE",
  "<MESSAGE_TYPE":"<MESSAGE_CONTENTS>"
}
```

## Receber webhook de assinatura dos Termos de Serviço da API de MM para o WhatsApp (preferencial)

Observação: o valor do evento de Termos de Serviço ficará disponível em 8 de setembro de 2025. Consulte o webhook legado abaixo.

Quando os Termos de Serviço da API de MM para o WhatsApp forem assinados por uma empresa, um webhook [`account_update`](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) será enviado a cada conta do WhatsApp Business associada ao seu portfólio empresarial. Esse webhook indica que a empresa da WABA aceitou os Termos de Serviço da API de MM para o WhatsApp. Quando o webhook é acionado, a WABA poderá enviar mensagens por meio da API de MM para o WhatsApp.

Você pode usar a identificação do portfólio empresarial e a identificação da WABA para verificar a conformidade e enviar mensagens. Também pode acionar ações subsequentes de integração conforme necessário. Este é o webhook de preferência para acompanhar a integração e o status de qualificação da API de MM para o WhatsApp.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<SOLUTION_PROVIDER_BUSINESS_ID>",
      "time": "<WEBHOOK_TIMESTAMP>",
      "changes": [
        {
          "field": "account_update",
          "value": {
            "event": "MM_LITE_TERMS_SIGNED",
            "waba_info": {
              "owner_business_id": "<BUSINESS_PORTFOLIO_ID>",
              "waba_id": "<WABA_ID>"
            }
          }
        }
      ]
    }
  ]
}
```

## Receber webhook de conclusão da integração (legado)

Assim que o processo de integração for concluído e as contas de anúncios vinculadas estiverem configuradas, um webhook do tipo [`account_update`](/documentation/business-messaging/whatsapp/webhooks/reference/account_update) será enviado para cada WABA associada ao seu portfólio empresarial, indicando que a integração foi concluída com sucesso. Esse webhook contém a identificação da conta de anúncios com permissão de leitura à qual cada WABA está vinculada, para uso nas chamadas das APIs de Insights.

Observação: este webhook é considerado legado na integração com a API de MM para o WhatsApp. Use o webhook de assinatura dos Termos de Serviço da API de MM para o WhatsApp.

Importante: o evento de webhook `ad_account_linked` não será mais disparado, já que os parceiros não terão acesso às contas de anúncios.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WABA_ID>",
      "time": "<WEBHOOK_TIMESTAMP>",
      "changes": [
        {
          "field": "account_update",
          "value": {
            "event": "AD_ACCOUNT_LINKED",
            "waba_info": {
              "waba_id": "<WABA_ID>",
              "ad_account_id": "<AD_ACCOUNT_ID>",
              "owner_business_id": "<BUSINESS_PORTFOLIO_ID>"
            }
          }
        }
      ]
    }
  ]
}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)