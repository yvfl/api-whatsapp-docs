<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/set-commerce-settings -->
<!-- Scraped: 2025-12-20T17:43:57.949Z -->

# Definir configurações comerciais

Updated: 14 de nov de 2025

É possível habilitar ou desabilitar o carrinho de compras e o catálogo de produtos com base no número de telefone comercial. Por padrão, o carrinho de compras é habilitado e o ícone da vitrine fica oculto em todos os telefones comerciais associados a uma conta do WhatsApp Business.

## Requisitos

-   Um [token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ou um [token de usuário](/documentation/business-messaging/whatsapp/access-tokens#user-access-tokens).-   A permissão [whatsapp\_business\_management](/docs/permissions/reference/whatsapp_business_management).-   Se você estiver usando um [token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens), será preciso conceder a esse usuário o controle total sobre a conta do WhatsApp Business.-   Empresas com sede na Índia precisam [cumprir todas as leis relacionadas a vendas online](https://www.facebook.com/help/1104628230079278).

## Obter números de telefone comerciais

Use o ponto de extremidade [Conta do WhatsApp Business > Números de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#get-all-phone-numbers) para obter uma lista de todos os telefones comerciais associados a uma conta do WhatsApp Business.

## Habilitar/desabilitar o carrinho

Use o ponto de extremidade [Número de telefone comercial > Configurações comerciais do WhatsApp](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-api) para habilitar ou desabilitar o carrinho de compras em um telefone comercial específico.

Caso o carrinho esteja habilitado, os botões relacionados aparecerão nas visualizações da conversa, do catálogo e dos detalhes do produto:

![Three WhatsApp messenger screenshots with callout of various cart UI components displayed](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/513870481_1426428692034436_5288360534924361904_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=5pymBygM_iwQ7kNvwH1mkna&_nc_oc=AdkTXUQ3koPh4j6WvZEr9yOb4C_EL6_i_v5QH4Cp35i7FKT-ZOdQ8VHar7Hhv2agkUY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=_FQiyxAafmeIYrJMY-oK6w&oh=00_Afnj_a1hOebU63dFYHWBST1iW5if8ZCHTFDBzwo31DFt_w&oe=69611F96)

  
  
Se estiver desabilitado, os clientes poderão ver os produtos e os respectivos detalhes, mas os botões relacionados ao carrinho não aparecerão em nenhuma visualização.

### Sintaxe da solicitação

```
POST /<BUSINESS_PHONE_NUMBER_ID>/whatsapp_commerce_settings
  ?is_cart_enabled=<IS_CART_ENABLED>
```

### Parâmetros

Espaço reservado

Exemplo de valor

Descrição

`<BUSINESS_PHONE_NUMBER_ID>`

`106850078877666`

A identificação do número de telefone comercial.

`<IS_CART_ENABLED>`

`true`

Booliano. Defina como `true` para habilitar o carrinho ou como `false` para desabilitá-lo. O valor-padrão é `true`.

### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/106850078877666/whatsapp_commerce_settings?is_cart_enabled=true' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "success": true}
```

## Habilitar/desabilitar o catálogo

Use o ponto de extremidade [Número de telefone comercial > Configurações comerciais do WhatsApp](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-api) para habilitar ou desabilitar o catálogo de produtos em um telefone comercial específico.

Caso o catálogo esteja habilitado, o ícone da vitrine e os botões relacionados aparecerão nas visualizações da conversa e do perfil comercial:

![Two WhatsApp messenger screenshots with callout of various catalog UI components displayed](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/513359223_1234792844894756_6573923522221485884_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=AzrG0L1PHAgQ7kNvwFn9tTH&_nc_oc=AdnbPE6B_B8UPQqcpDRH7IYnmFnhVvYC5j3-uVePknS0-cN7CHKkD8b_jUoQMAY2Ys0&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=_FQiyxAafmeIYrJMY-oK6w&oh=00_Afmy-TY5f7_0OspFOkNvmU9iWlz36M2X6YbQ3reWgRYhxQ&oe=696119F3)

Se estiver desabilitado, o ícone da vitrine e os botões não aparecerão em nenhuma visualização, e a prévia do catálogo com miniaturas não será exibida na visualização do perfil comercial.

Ao desabilitar o catálogo, os links wa.me que direcionam para ele, assim como o botão **Ver catálogo** que aparece quando você envia o link do catálogo em uma mensagem, exibirão o aviso **Link de catálogo inválido** quando tocados.

### Sintaxe da solicitação

```
POST /<BUSINESS_PHONE_NUMBER_ID>/whatsapp_commerce_settings
  ?is_catalog_visible=<IS_CATALOG_VISIBLE>
```

### Parâmetros

Espaço reservado

Exemplo de valor

Descrição

`<BUSINESS_PHONE_NUMBER_ID>`

`106850078877666`

A identificação do número de telefone comercial.

`<IS_CATALOG_VISIBLE>`

`true`

Booliano. Defina como `true` para mostrar o ícone da vitrine do catálogo ou como `false` para ocultá-lo. O valor padrão é `false`.

### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/106850078877666/whatsapp_commerce_settings?is_catalog_visible=true' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "success": true}
```

## Obter configurações comerciais

Use o ponto de extremidade [Número de telefone comercial > Configurações comerciais do WhatsApp](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-api) para obter as configurações de um telefone comercial específico.

### Sintaxe da solicitação

```
GET /<BUSINESS_PHONE_NUMBER_ID>/whatsapp_commerce_settings
```

### Parâmetros

Espaço reservado

Exemplo de valor

Descrição

`<BUSINESS_PHONE_NUMBER_ID>`

`106850078877666`

A identificação do número de telefone comercial.

### Exemplo de solicitação

```
curl -X GET 'https://graph.facebook.com/v24.0/106850078877666/whatsapp_commerce_settings' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "data": [    {      "is_cart_enabled": true,      "is_catalog_visible": true,      "id": "727705352028726"    }  ]}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)