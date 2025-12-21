<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/deep-links -->
<!-- Scraped: 2025-12-20T17:29:36.334Z -->

# Deep links

Updated: 24 de out de 2025

Válido a partir de 1º de julho de 2025: os preços por mensagem já estão em vigor. Além disso, as taxas para mensagens de marketing na API de Nuvem e na API de MM Lite são consistentes, de acordo com as tabelas de tarifas publicadas [neste link](/documentation/business-messaging/whatsapp/pricing).

Planejamos lançar a MM Lite para o público geral no quarto trimestre de 2025.

É possível mapear um [deep link do Android](https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.android.com%2Ftraining%2Fapp-links%2Fdeep-linking&h=AT0Ev0bIXjAWnM5I19hfvY5Dp6Doak0DEZeHxSe5zBmoRmC9m6EGPmiFgAbM0-SrIOlSrM3AOgx80LLVU1e6Z_fMcM80ZBineNbIOgVd4fqBq2TJ_IJd0acD2nkBDr1VltOXutkeKj7AQ6Et48m4ZYJ90qo) a um botão de URL de modelo de marketing que, ao ser tocado, carrega uma localização ou um conteúdo específico no seu app.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/499229465_1266088541526902_7472965918950036987_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Vwi0UZOJ1NgQ7kNvwE0YueH&_nc_oc=AdltzgVpEY61l0PPcEf_xyhkya-J3Bom5Twf3lkugWu7rB84Y3WCeHiww23HOQUuJZM&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=6ZMhc7r0CT7Uu6CiGy1Z4w&oh=00_Afnl3pXr9LGImK3d9Pxos8BdoCp8e88X0Vmtx4NhlNceaQ&oe=69611205)

Caso não tenha feito a integração com o Marketing Messages Lite, nenhuma métrica de conversão será exibida para seus modelos de marketing. Saiba mais sobre como [mensurar a conversão](/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion).

## Criação de modelos com o Gerenciador do WhatsApp

Para criar um modelo com um botão direcionado a um deep link do Android:

-   Acesse o [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/).-   Navegue até **Modelos de mensagem** > **Gerenciar modelos**. Em seguida, clique no botão **Criar modelo**.-   Selecione a aba **Marketing**, clique no botão de opção **Personalizado** e, em seguida, clique no botão **Avançar**.-   Na seção **Botões**, clique no menu suspenso **\+ Adicionar botão** e selecione **Acessar o site**.-   Marque a caixa de seleção **Rastrear conversões no app** para revelar os campos de deep links (conforme mostrado na imagem abaixo).-   Preencha cada campo usando as dicas de ferramentas ou as descrições de [campos do formulário](#form-fields) abaixo como orientação.-   Adicione outros componentes que você gostaria de usar no seu modelo, defina um nome e envie-o para aprovação.

Também é possível usar o painel **Gerenciar modelos** para editar um modelo existente e adicionar um botão direcionado a um deep link, mas o modelo precisará passar por uma nova análise.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/524030257_747636164413080_2609413167857336367_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=iFJ3bA5qADcQ7kNvwHOH8MY&_nc_oc=AdmpXMsMi3JJ9yRV1go4xWHK3WGE-oIhkQ6tLsuz7wZl7bJzBImxKltvfyiY8A4qHDo&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=6ZMhc7r0CT7Uu6CiGy1Z4w&oh=00_AflFVkPwLnlvJ4liOdr1qmjPjqoEFTdO413qp6m6l24Mog&oe=69610712)

### Campos do formulário

Etiqueta do campo

Descrição

Valor de exemplo

Deep links do Android

**Obrigatório.**

URI do deep link do Android.

luckyshrub://deals/summer\_solstice

URL alternativo do Android

**Opcional.**

URL alternativo.

Se o cliente do WhatsApp não conseguir carregar o URI do deep link, ele carregará esse URL no navegador padrão do dispositivo.

Se omitido, o cliente tentará carregar o URL especificado no campo "URL do site".

https://www.luckyshrub.com/deals/summer\_solstice

Texto do botão

**Obrigatório.**

Texto do botão.

Máximo de 25 caracteres.

Mostrar promoção

ID do app da Meta

**Obrigatório.**

Esta é uma lista de app(s) da Meta associado(s) ao seu portfólio empresarial. Selecione o app do qual você usará o token de acesso para enviar o modelo.

Lucky Shrub (634974688087057)

Tipo de ação

Obrigatório.

Deve ser definido como **Acessar o site**.

Acessar o site

Tipo de URL

**Obrigatório.**

Defina como **Estático** se o deep link do Android ou o URL alternativo do Android não tiver valores dinâmicos. Caso contrário, defina como **Dinâmico**.

Estático

URL do site

**Obrigatório.**

URL de um site que será carregado se o usuário do WhatsApp visualizar a mensagem em um dispositivo que não seja Android ou caso o cliente do WhatsApp não consiga carregar o URI do deep link do Android e nenhum URL alternativo do Android tenha sido especificado.

https://www.luckyshrub.com

## Criação de modelo com a API

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates) para criar o modelo e incluir um componente de botão com URL mapeado ao deep link do Android.

Você também pode usar o ponto de extremidade [POST /<TEMPLATE\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#Updating) para editar um modelo existente e adicionar um componente de botão de URL, mas o modelo precisará passar por uma nova análise.

### Sintaxe da solicitação

Os componentes do modelo podem variar de acordo com as suas necessidades. A sintaxe de exemplo cria um modelo de marketing com os seguintes componentes:

-   **Cabeçalho do texto**, sem parâmetros.-   **Corpo**, sem parâmetros.-   **Botão URL**, mapeado para um URI de deep link e URL de fallback

```
'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "name": "<TEMPLATE_NAME>",
  "language": "<TEMPLATE_LANGUAGE>",
  "category": "marketing",
  "components": [
    {
      "type": "header",
      "format": "text",
      "text": "<HEADER_TEXT>"
    },
    {
      "type": "body",
      "text": "<BODY_TEXT>"
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "url",
          "text": "<BUTTON_LABEL_TEXT>",
          "url": "<BUTTON_URL>",
          "app_deep_link": {
            "meta_app_id": <META_APP_ID>,
            "android_deep_link": "<ANDROID_DEEP_LINK>",
            "android_fallback_playstore_url": "<FALLBACK_URL>"
          }
        }
      ]
    }
  ]
}'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

[Token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ou [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).

`EAAJB...`

`<ANDROID_DEEP_LINK>`

_String_

**Obrigatório ao usar um componente de botão de URL direcionado a um deep link.**

URI do [deep link do Android](https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.android.com%2Ftraining%2Fapp-links%2Fdeep-linking&h=AT0Ev0bIXjAWnM5I19hfvY5Dp6Doak0DEZeHxSe5zBmoRmC9m6EGPmiFgAbM0-SrIOlSrM3AOgx80LLVU1e6Z_fMcM80ZBineNbIOgVd4fqBq2TJ_IJd0acD2nkBDr1VltOXutkeKj7AQ6Et48m4ZYJ90qo). O cliente do WhatsApp tentará carregar esse URI se o usuário do WhatsApp tocar no botão em um dispositivo Android.

`luckyshrub://deals/summer/`

`<API_VERSION>`

_String_

**Opcional**

[Versão](/docs/graph-api/guides/versioning) da Graph API.

`v22.0`

`<BODY_TEXT>`

_String_

**Obrigatório ao usar um componente de corpo do texto.**

Texto do corpo do modelo. Variáveis são compatíveis.

Máximo de 1.024 caracteres.

`Beat the heat with our sizzling summer deals on succulents! At Lucky Shrub, we...`

`<BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um componente de botão de URL.**

Texto do botão.

Máximo de 25 caracteres.

`View Deals`

`<BUTTON_URL>`

_String_

**Obrigatório ao usar um componente de botão de URL.**

URL de um site que o cliente do WhatsApp tentará carregar no navegador padrão do dispositivo quando o botão for tocado.

Para deep links, o URL só poderá ser usado se o usuário do WhatsApp tocar no botão em um dispositivo que não seja Android.

`https://www.luckyshrub.com/deals/summer/`

`<FALLBACK_URL>`

_String_

**Obrigatório ao usar um botão de URL direcionado a um deep link.**

URL de um site que o cliente do WhatsApp tentará carregar no navegador padrão do dispositivo quando o botão for tocado, mas não for possível carregar o URI do deep link do Android.

`https://www.luckyshrub.com/deals/summer/`

`<HEADER_TEXT>`

_String_

**Obrigatório ao usar um componente de cabeçalho de texto.**

String de texto do cabeçalho do modelo.

Aceita até 1 parâmetro. Se essa string contiver um parâmetro, você deverá incluir uma propriedade `example`.

Máximo de 60 caracteres.

`Sizzling Summer Deals at Lucky Shrub`

`<META_APP_ID>`

_Número inteiro_

**Obrigatório ao usar um botão de URL direcionado a um deep link.**

Identificação do app da Meta.

`634974688087057`

`<TEMPLATE_LANGUAGE>`

_String_

**Obrigatório.**

O [código de localidade e idioma](/documentation/business-messaging/whatsapp/templates/supported-languages) do modelo.

`en_US`

`<TEMPLATE_NAME>`

_String_

**Obrigatório.**

O nome do modelo.

Máximo de 512 caracteres.

`summer_deals_deep_link_v1`

`<WHATSAPP_BUSINESS_ACCOUNT_ID>`

_String_

**Obrigatório.**

É a identificação da conta do WhatsApp Business.

`102290129340398`

## Exemplo de pedido

```
curl 'https://graph.facebook.com/v22.0/102290129340398/message_templates' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "name": "summer_deals_deep_link_v1",  "language": "en_US",  "category": "marketing",  "components": [    {      "type": "header",      "format": "text",      "text": "Sizzling Summer Deals at Lucky Shrub"    },    {      "type": "body",      "text": "Beat the heat with our sizzling summer deals on succulents! At Lucky Shrub, we'\''re passionate about bringing a touch of greenery to your life. Our succulents are not only low-maintenance and easy to care for, but they also add a pop of color and style to any room. Use the button below to see our Summer Steals!"    },    {      "type": "buttons",      "buttons": [        {          "type": "url",          "text": "View Deals",          "url": "https://www.luckyshrub.com/deals/summer/",          "app_deep_link": {            "meta_app_id": 634974688087057,            "android_deep_link": "luckyshrub://deals/summer/",            "android_fallback_playstore_url": "https://www.luckyshrub.com/deals/summer/"          }        }      ]    }  ]}'
```

## Consultar métricas

Confira nosso documento [Consultar métricas](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)