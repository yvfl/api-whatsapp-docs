<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/components -->
<!-- Scraped: 2026-01-24T01:02:59.219Z -->

# Componentes do modelo

Updated: 21 de nov de 2025

Os modelos são feitos de quatro componentes principais, definidos no momento da criação: cabeçalho, corpo, rodapé e botões. Escolha os componentes dos modelos com base nas necessidades da sua empresa. O único componente obrigatório é o corpo.

Alguns componentes são compatíveis com variáveis, cujos valores você pode fornecer ao usar a API de Nuvem ou a API Local para enviar um modelo de mensagem. Quando as variáveis forem usadas, será preciso incluir valores de exemplo para elas no momento da criação do modelo.

## Cabeçalho de texto

Os cabeçalhos de texto são elementos opcionais que podem ser adicionados à parte superior dos modelos de mensagem. Cada modelo pode incluir apenas um cabeçalho de texto. Os caracteres especiais do Markdown não são compatíveis com esse componente. Por isso, recomendamos evitá-los.

Os cabeçalhos de texto são compatíveis com um [parâmetro](/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).

### Sintaxe de criação

```
<!-- No parameter syntax -->
{
  "type": "header",
  "format": "text",
  "text": "<HEADER_TEXT>"
}

<!-- Named parameter syntax -->
{
  "type": "header",
  "format": "text",
  "text": "<HEADER_TEXT>",
  "example": {
    "header_text_named_params": [
      {
        "param_name": "<NAMED_PARAMETER_NAME>",
        "example": "<PARAMETER_EXAMPLE_VALUE>"
      }
    ]
  }
}

<!-- Positional parameter syntax -->
{
  "type": "header",
  "format": "text",
  "text": "<HEADER_TEXT>",
  "example": {
    "header_text": [
      "<PARAMETER_EXAMPLE_VALUE>"
    ]
  }
}
```

### Parâmetros de criação

Espaço reservado

Descrição

Valor de exemplo

`<HEADER_TEXT>`

_String_

**Obrigatório.**

String do texto do corpo do cabeçalho. É compatível com um [parâmetro](/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).

Se essa string contiver um parâmetro, você deverá incluir a propriedade `example` e o valor do parâmetro de exemplo.

Máximo de 60 caracteres.

`Our new sale starts {{sale_start_date}}!`

`<NAMED_PARAMETER_NAME>`

_String_

**Obrigatório ao usar um parâmetro nomeado.**

Nome do [parâmetro nomeado](/documentation/business-messaging/whatsapp/templates/overview#named-parameters).

`{{sale_start_date}}`

`<PARAMETER_EXAMPLE_VALUE>`

_String_

**Obrigatório ao usar um parâmetro.**

Exemplo de valor do [parâmetro](/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).

`December 1st`

### Exemplo de criação

Esse exemplo usa um parâmetro nomeado.

```
{  "type": "HEADER",  "format": "TEXT",  "text": "Our new sale starts {{sale_start_date}}!",  "example": {    "header_text_named_params": [      {        "param_name": "sale_start_date",        "example": "December 1st"      }    ]  }}
```

## Cabeçalho com mídia

Os cabeçalhos com mídia podem ser uma imagem, um vídeo, um GIF ou um documento, como um PDF. Todas as mídias devem ser carregadas com a [API de Carregamento Retomável](/docs/graph-api/guides/upload). A sintaxe para definir um cabeçalho com mídia é a mesma para todos os tipos de mídia.

Observação: atualmente, os GIFs estão disponíveis apenas para a [API de Mensagens de Marketing para o WhatsApp](/docs/whatsapp/marketing-messages-lite-api/features). Os GIFs são arquivos no formato mp4 com tamanho máximo de 3,5 MB. Arquivos maiores serão exibidos como mensagens de vídeo.

### Sintaxe de criação

```
{
  "type": "HEADER",
  "format": "<FORMAT>",
  "example": {
    "header_handle": [
      "<HEADER_HANDLE>"
    ]
  }
}
```

### Parâmetros de criação

Espaço reservado

Descrição

Valor de exemplo

`<FORMAT>`

Indica o tipo de ativo de mídia. Defina como `IMAGE`, `VIDEO`, `GIF` ou `DOCUMENT`.

`IMAGE`

`<HEADER_HANDLE>`

Identificador do ativo de mídia carregado. Use a [API de Carregamento Retomável](/docs/graph-api/guides/upload) para gerar um identificador de ativo.

`4::aW...`

### Exemplo de criação

```
{  "type": "HEADER",  "format": "IMAGE",  "example": {    "header_handle": [      "4::aW..."    ]  }}
```

## Cabeçalho de localização

Os cabeçalhos com localização aparecem como mapas genéricos na parte superior do modelo e são úteis para rastreamento de pedidos, atualizações sobre entregas, embarque e desembarque no transporte por caronas, localização de lojas físicas etc. Quando o usuário toca neles, o app de mapas padrão é aberto e carrega a localização especificada. As localizações são especificadas quando você envia o modelo.

Os cabeçalhos com localização só podem ser usados em modelos categorizados como `UTILITY` ou `MARKETING`. A localização em tempo real não é compatível.

### Sintaxe de criação

```
{  "type": "header",  "format": "location"}
```

### Parâmetros de criação

Nenhum.

### Exemplo de criação

```
{  "type": "header",  "format": "location"}
```

### Sintaxe de envio

```
{
  "type": "header",
  "parameters": [
    {
      "type": "location",
      "location": {
        "latitude": "<LOCATION_LATITUDE>",
        "longitude": "<LOCATION_LONGITUDE>",
        "name": "<LOCATION_NAME>",
        "address": "<LOCATION_ADDRESS>"
      }
    }
  ]
}
```

### Enviar parâmetros

Espaço reservado

Descrição

Exemplo de valor

`<LOCATION_ADDRESS>`

Endereço da localização.

`101 Forest Ave, Palo Alto, CA 94301`

`<LOCATION_LATITUDE>`

Latitude da localização em graus decimais.

`37.44211676562361`

`<LOCATION_LONGITUDE>`

Longitude da localização em graus decimais.

`122.16155960083124`

`<LOCATION_NAME>`

Nome da localização.

`Philz Coffee`

### Exemplo de envio

```
{  "type": "header",  "parameters": [    {      "type": "location",      "location": {        "latitude": "37.44211676562361",        "longitude": "-122.16155960083124",        "name": "Philz Coffee",        "address": "101 Forest Ave, Palo Alto, CA 94301"      }    }  ]}
```

## Corpo

O componente do corpo representa o texto principal do seu modelo de mensagem e inclui somente texto. Os modelos podem ter apenas um componente de corpo.

O texto da mensagem no componente do corpo aceita vários [parâmetros](/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).

### Sintaxe de criação

```
<!-- No parameters syntax -->
{
  "type": "body",
  "text": "<BODY_TEXT>"
}

<!-- Named parameters syntax -->
{
  "type": "body",
  "text": "<BODY_TEXT>",
  "example": {
    "body_text_named_params": [
      {
        "param_name": "<NAMED_PARAMETER_NAME>",
        "example": "<PARAMETER_EXAMPLE_VALUE>"
      }
      <!-- Additional named parameters go here, if using -->
    ]
  }
}

<!-- Positional parameters syntax -->
{
  "type": "body",
  "text": "<BODY_TEXT>",
  "example": {
    "body_text": [
      "<PARAMETER_EXAMPLE_VALUE>"
      <!-- Additional positional parameters go here, if using -->
    ]
  }
}
```

### Parâmetros de criação

Espaço reservado

Descrição

Valor de exemplo

`<BODY_TEXT>`

_String_

**Obrigatório.**

String de texto do corpo. É compatível com vários [parâmetros](/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).

Máximo de 1.024 caracteres.

`Thank you, {{first_name}}! Your order number is {{order_number}}.`

`<NAMED_PARAMETER_NAME>`

_String_

**Obrigatório ao usar um parâmetro nomeado.**

Nome do [parâmetro nomeado](/documentation/business-messaging/whatsapp/templates/overview#named-parameters).

`{{order_number}}`

`<PARAMETER_EXAMPLE_VALUE>`

_String_

**Obrigatório ao usar um parâmetro.**

Exemplo de valor do [parâmetro](/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).

`December 1st`

### Exemplo de criação

```
{  "type": "body",  "text": "Thank you, {{first_name}}! Your order number is {{order_number}}.",  "example": {    "body_text_named_params": [      {        "param_name": "first_name",        "example": "Pablo"      },      {        "param_name": "order_number",        "example": "860198-230332"      }    ]  }}
```

## Rodapé

Os rodapés são componentes opcionais somente de texto que são exibidos imediatamente após o componente do corpo. Os modelos podem ter apenas um componente de rodapé.

### Sintaxe

```
{
  "type": "FOOTER",
  "text": "<TEXT>"
}
```

### Propriedades

Espaço reservado

Descrição

Valor de exemplo

`<TEXT>`

Texto a ser exibido no rodapé do modelo enviado.

  
Máximo de 60 caracteres.

`Use the buttons below to manage your marketing subscriptions`

### Exemplo

```
{  "type": "FOOTER",  "text": "Use the buttons below to manage your marketing subscriptions"}
```

## Botões

Os botões são componentes interativos opcionais que executam ações específicas quando tocados.

Os modelos podem combinar até dez componentes de botão no total, embora haja limitações para botões do mesmo tipo, bem como para combinações, descritos abaixo. Além disso, os modelos que forem compostos por quatro ou mais botões, ou um botão de resposta rápida e um ou mais botões de outro tipo, não poderão ser visualizados no WhatsApp para computador. Os usuários do WhatsApp que receberem um desses modelos deverão abrir a mensagem no smartphone.

Os botões são definidos em um único objeto do componente de botão, agrupados em uma matriz de `buttons`. Por exemplo, este modelo usa um botão de número de telefone e um botão de URL:

```
{  "type": "BUTTONS",  "buttons": [    {      "type": "PHONE_NUMBER",      "text": "Call",      "phone_number": "15550051310"    },    {      "type": "URL",      "text": "Shop Now",      "url": "https://www.luckyshrub.com/shop/"    }  ]}
```

Se o modelo tiver mais de três botões, dois deles aparecerão na mensagem entregue e os restantes serão substituídos por um botão **Ver todas as opções**. Os botões restantes são exibidos quando o usuário toca em **Ver todas as opções**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/362692024_651522560374555_6131765669860446689_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=umKiKjSbyt0Q7kNvwFgN3qQ&_nc_oc=AdldybsE7ZlZUQwOMuJmoY2dMU7xJLqkJhy0sFWc7wAjjFcVIERzxGovFCGrGAJQykU&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=z8zMdyhZpqKa7vKAUxXyHw&oh=00_Afq-CyUj8U1vocWflKdhym34rWSc7L55ImgFJTYQHGFA0g&oe=698E607B)

### Botões de copiar código

Os botões de copiar código copiam uma string de texto (definida quando o modelo é enviado em uma mensagem) para a área de transferência do dispositivo quando ela é tocada pelo usuário do app. Os modelos podem ter apenas um botão de copiar código.

#### Sintaxe

```
{
  "type": "COPY_CODE",
  "example": "<EXAMPLE>"
}
```

#### Propriedades

  

Espaço reservado

Descrição

Valor de exemplo

`<EXAMPLE>`

A string que será copiada para a área de transferência do dispositivo quando for tocada pelo usuário do app.

  
Máximo de 15 caracteres.

`250FF`

#### Exemplo

```
{  "type": "COPY_CODE",  "example": "250FF"}
```

### Botões de mensagem para vários produtos

Os botões de mensagem para vários produtos são botões especiais e não personalizáveis ​​que, quando tocados, exibem até 30 produtos do seu catálogo de comércio eletrônico (organizados em até dez seções) em uma única mensagem. Consulte [Modelos de mensagem para vários produtos](/documentation/business-messaging/whatsapp/templates/marketing-templates/mpm-templates).

### Botões de senha descartável

Os botões de senha descartável são um tipo especial do componente [botão de URL](#url-buttons) usado com modelos de autenticação. Consulte [Modelos de autenticação](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates).

### Botões de número de telefone

Os botões de número de telefone ligam para os telefones comerciais especificados quando o usuário do app clica neles. Os modelos podem ter apenas um botão de número de telefone.

#### Sintaxe

```
{
  "type": "PHONE_NUMBER",
  "text": "<TEXT>",
  "phone_number": "<PHONE_NUMBER>"
}
```

#### Propriedades

  

Espaço reservado

Descrição

Valor de exemplo

`<PHONE_NUMBER>`

String alfanumérica. O número de telefone comercial a ser chamado quando o usuário toca no botão.

Alguns países têm números de telefone especiais que incluem zeros após o código de país (por exemplo, +55-0-955-585-95436). Se você atribuir um números nesse formato, o zero à esquerda será retirado do número. Se o número não funcionar sem o zero, atribua um número alternativo ao botão ou adicione o número como texto do corpo da mensagem.

Pode ter, no máximo, 20 caracteres.

`15550051310`

`<TEXT>`

Texto do rótulo do botão.

  
Máximo de 25 caracteres.

`Call`

#### Exemplo

```
{  "type": "PHONE_NUMBER",  "text": "Call",  "phone_number": "15550051310"}
```

### Botões de resposta rápida

Os botões de resposta rápida são botões personalizados somente de texto que, quando tocados pelo usuário, enviam uma mensagem com a string especificada imediatamente a você. Um caso de uso comum é um botão para o usuário cancelar com facilidade a assinatura de mensagens de marketing.

Os modelos podem ter até 10 botões de resposta rápida. Caso você use botões de resposta rápida com outros tipos de botão, será preciso organizá-los em dois grupos: botões de resposta rápida e outros botões. Se eles forem agrupados incorretamente, a API retornará um erro informando uma combinação inválida.

Exemplos de agrupamentos válidos:

-   Resposta rápida, resposta rápida-   Resposta rápida, resposta rápida, URL, telefone-   URL, telefone, resposta rápida, resposta rápida

Exemplos de agrupamentos inválidos:

-   Resposta rápida, URL, resposta rápida-   URL, resposta rápida, URL

Se você usar a API de Nuvem para enviar um modelo que tenha mais de um botão de resposta rápida, utilize a propriedade "index" para definir a ordem em que os botões aparecerão no modelo de mensagem.

#### Sintaxe

```
{
  "type": "QUICK_REPLY",
  "text": "<TEXT>"
}
```

#### Propriedades

  

Espaço reservado

Descrição

Valor de exemplo

`<TEXT>`

Texto do rótulo do botão.

  
Máximo de 25 caracteres.

`Unsubscribe`

#### Exemplo

```
{  "type": "QUICK_REPLY",  "text": "Unsubscribe from Promos"}
```

### Botões de mensagem de produto único

Os botões de mensagem de produto único (SPM) são botões especiais e não personalizáveis ​​que podem ser mapeados para um produto no seu catálogo. Quando tocados, eles carregam detalhes sobre o produto, que são extraídos do seu catálogo. Os usuários podem então adicionar o produto ao carrinho de compras e fazer o pedido. Consulte [Modelos de mensagem de produto único](/documentation/business-messaging/whatsapp/templates/marketing-templates/spm-templates) e [Modelos de carrossel com cartões de produtos](/documentation/business-messaging/whatsapp/templates/marketing-templates/product-card-carousel-templates).

### Botões de URL

Os botões de URL carregam o URL especificado no navegador da web padrão do dispositivo quando o usuário do app clica neles. Os modelos podem ter até dois botões de URL.

#### Sintaxe

```
{
  "type": "URL",
  "text": "<TEXT>",
  "url": "<URL>",

  # Required if <URL> contains a variable
  "example": [
    "<EXAMPLE>"
  ]
}
```

#### Propriedades

  

Espaço reservado

Descrição

Valor de exemplo

`<EXAMPLE>`

URL do site. Compatível com 1 variável.

  
Se usar uma variável, adicione um exemplo de propriedade de variável ao final da string do URL. O URL é carregado no navegador da web para celular padrão do dispositivo quando o cliente toca no botão.

  
Pode ter, no máximo, 2.000 caracteres.

`https://www.luckyshrub.com/shop?promo=summer2023`

`<TEXT>`

Texto do rótulo do botão. Máximo de 25 caracteres.

`Shop Now`

`<URL>`

URL do site que é carregado no navegador da web para celular padrão do dispositivo quando o usuário do app toca no botão.

  
Compatível com 1 variável, adicionada ao final da string do URL.

  
Pode ter, no máximo, 2.000 caracteres.

`https://www.luckyshrub.com/shop?promo={{1}}`

#### Exemplo

```
{  "type": "URL",  "text": "Shop Now",  "url": "https://www.luckyshrub.com/shop?promo={{1}}",  "example": [    "summer2023"  ]}
```

## Oferta por tempo limitado

Os componentes de oferta por tempo limitado são tipos especiais usados para criar [modelos de oferta por tempo limitado](/documentation/business-messaging/whatsapp/templates/marketing-templates/limited-time-offer-templates).

## Exemplos de pedido

### Promoção sazonal

Um exemplo de pedido para criar um modelo de marketing com os seguintes componentes:

-   um cabeçalho com texto com uma variável e um valor de exemplo-   Um corpo com texto com variáveis e valores de exemplo-   Um rodapé com texto-   dois botões de resposta rápida

```
curl -L 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Authorization: Bearer EAAJB...' \
-H 'Content-Type: application/json' \
-d '
{
  "name": "seasonal_promotion",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Our {{1}} is on!",
      "example": {
        "header_text": [
          "Summer Sale"
        ]
      }
    },
    {
      "type": "BODY",
      "text": "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
      "example": {
        "body_text": [
          [
            "the end of August","25OFF","25%"
          ]
        ]
      }
    },
    {
      "type": "FOOTER",
      "text": "Use the buttons below to manage your marketing subscriptions"
    },
    {
      "type":"BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Unsubscribe from Promos"
        },
        {
          "type":"QUICK_REPLY",
          "text": "Unsubscribe from All"
        }
      ]
    }
  ]
}'
```

### Confirmação do pedido

Um exemplo de pedido para criar um modelo de utilidade com os seguintes componentes:

-   Um cabeçalho com documento com um valor de exemplo-   Um corpo com texto com variáveis e valores de exemplo-   Um botão de número de telefone-   Um botão de URL

```
curl -L 'https://graph.facebook.com/v16.0/102290129340398/message_templates' \-H 'Authorization: Bearer EAAJB...' \-H 'Content-Type: application/json' \-d '{  "name": "order_confirmation",  "language": "en_US",  "category": "UTILITY",  "components": [    {      "type": "HEADER",      "format": "DOCUMENT",      "example": {        "header_handle": [          "4::YX..."        ]      }    },    {      "type": "BODY",      "text": "Thank you for your order, {{1}}! Your order number is {{2}}. Tap the PDF linked above to view your receipt. If you have any questions, please use the buttons below to contact support. Thank you for being a customer!",      "example": {        "body_text": [          [            "Pablo","860198-230332"          ]        ]      }    },    {      "type": "BUTTONS",      "buttons": [        {          "type": "PHONE_NUMBER",          "text": "Call",          "phone_number": "15550051310"        },        {          "type": "URL",          "text": "Contact Support",          "url": "https://www.luckyshrub.com/support"        }      ]    }  ]}'
```

### Atualização sobre entrega do pedido

Um exemplo de pedido para criar um modelo de utilidade com os seguintes componentes:

-   Um cabeçalho com localização-   Um corpo com texto com variáveis e valores de exemplo-   Um rodapé-   Um botão de resposta rápida

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "order_delivery_update",
  "language": "en_US",
  "category": "UTILITY",
  "components": [
    {
      "type": "HEADER",
      "format": "LOCATION"
    },
    {
      "type": "BODY",
      "text": "Good news {{1}}! Your order #{{2}} is on its way to the location above. Thank you for your order!",
      "example": {
        "body_text": [
          [
            "Mark",
            "566701"
          ]
        ]
      }
    },
    {
      "type": "FOOTER",
      "text": "To stop receiving delivery updates, tap the button below."
    },
    {
      "type":"BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Stop Delivery Updates"
        }
      ]
    }
  ]
}'
```

## Webhooks

Assine o campo do webhook [message\_template\_components\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_components_update) para receber notificações sobre alterações nos componentes de um modelo.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)