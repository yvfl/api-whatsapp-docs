<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/checkout-button-templates -->
<!-- Scraped: 2025-12-20T17:46:09.936Z -->

# Modelos com botão de finalização da compra

Updated: 3 de nov de 2025

Os modelos de botão de finalização da compra são modelos de marketing que podem exibir um ou mais produtos juntamente com os botões de finalização da compra correspondentes que os usuários do WhatsApp podem usar para fazer compras sem sair do cliente do WhatsApp.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/461864193_1053025166222560_1984323495828319066_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Dewt7_RiaqwQ7kNvwHJpwB2&_nc_oc=AdnU7zHhkbqN--vtS6CDywyubSm7O1oC-4va413YXEUyIE-PAVMrf5gZY5wVeZw46_s&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_AfmjkyJyJo71rodI0-FkCGzE2dfUvHX8_15cI_703dhTyQ&oe=69611FBC)

## Produtos únicos

Os modelos de botão de finalização da compra podem mostrar uma imagem ou um cabeçalho de vídeo de produto único, juntamente com o corpo e o rodapé da mensagem, um botão de finalização da compra e até 9 botões de resposta rápida.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/461716389_980926930508984_4731907095777942335_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=1cHy8ASDwYkQ7kNvwEIdZ_z&_nc_oc=AdkZ_ukImm5n2NNMD-_OjSnv3EivRxzmT4_Ydd7_UhswzgSf27DIGGtjCZrPms6Vzvg&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_AfnKBuY-hC3ZcSJJktNNwCebmmB1fNny5teX1KJUWWzh0Q&oe=696137F7)

Os usuários do WhatsApp que tocarem no botão verão os seguintes detalhes do pedido:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/461898315_2387340868275631_829544685895208004_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=aR5XwuUV1H8Q7kNvwHuAf_A&_nc_oc=AdlWlLAYXbG5BXJYstJumTW_dI7k2oBj1inQnucPJk3CVFgBOH76Yb_-e2buyEN8F1s&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_Afkse8Hbnh2A3XnjeASL7nfxq0lbufuJ2ticJyDB1o-6cA&oe=69612B4B)

Para continuar, os usuários podem selecionar as informações de envio fornecidas por você (se souber e tiver fornecido essas informações na carga de envio de mensagem)...

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/461872330_923861569791765_2740463248926355079_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=zJvQkMplRqAQ7kNvwG3TBIt&_nc_oc=AdlJMdCUd2FX5yoAWQOT62Vb-rFkFFxnzKLZ1Hsd0r4SUp2SIdn2-oaHgeHxOGyFBxA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_AfnRg97QZkD6h3F708WnZFXRxzcUfuvJ_ZlNz3mGM3j4lw&oe=69611AEA)

... ou podem adicionar as próprias informações de envio:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/461774395_433815155940531_3266765354702751375_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=McHFgifk45gQ7kNvwFeI7Bo&_nc_oc=AdmiDsLzE0iC_ZWyg0NvPZ6fu7CgOlS7A4JQ4c95H9RAsbrtx8PCnuMLcjqxPFnsGnQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_AflHNhImM_N6ZsFsuItvtFmEzVu7jKLNeUww04HfiqIaQA&oe=69612DD9)

## Como habilitar cupons, inventário em tempo real e atualizações de preços

A habilitação de cupons, inventário em tempo real e atualizações de preços está em versão beta e disponível apenas para empresas da Índia e usuários do WhatsApp com um código de ligação de país da Índia. Para saber mais, entre em contato com whatsappindia-bizpayments-support@meta.com.

Para habilitar cupons, inventário em tempo real e atualizações de preços, você pode configurar um ponto de extremidade de finalização da compra que troca dados em tempo real para atualizar o pedido no cliente do WhatsApp. Com essa opção, as empresas recebem o endereço de entrega e oferecem cupons com base no pedido, permitindo que os usuários apliquem o cupom. Isso também permite que as empresas validem o inventário e a capacidade de atendimento do pedido antes da finalização da compra.

A configuração do ponto de extremidade de finalização da compra inclui as etapas a seguir e é o mesmo método que o [ponto de extremidade do WhatsApp Flows](/docs/whatsapp/flows/guides/implementingyourflowendpoint#implementing-endpoint-for-flows) usa para compartilhar os dados com os clientes do WhatsApp.

-   Crie um par de chaves, carregue e assine a chave pública usando a [API de Nuvem](/docs/whatsapp/cloud-api/reference/whatsapp-business-encryption#set-business-public-key).-   [Configurar o ponto de extremidade](#setup_the_endpoint)-   [Implementar a criptografia/descriptografia de carga](#implement_encryption_decryption)-   [Vincular o ponto de extremidade de finalização da compra com a configuração de pagamento](#link_checkout_endpoint)-   [Implementar a lógica do ponto de extremidade de finalização da compra](#implement_checkout_logic)

### Configurar o ponto de extremidade

O cliente do WhatsApp faz uma solicitação HTTPS para trocar os dados com o ponto de extremidade da empresa. Verifique se o ponto de extremidade está configurado para aceitar a solicitação e vincule o URL do ponto de extremidade à [configuração de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#link-your-payment-account):

```
https://business.com/checkout
```

Seu servidor deve estar habilitado para receber e processar solicitações `POST`, usar `HTTPS` e ter um certificado TLS/SSL válido instalado. Esse certificado não precisa ser usado para criptografia/descriptografia de carga.

### Implementar a criptografia/descriptografia

O corpo de cada solicitação contém a carga criptografada e aparece da seguinte forma:

#### Exemplo de sintaxe de solicitação do ponto de extremidade

```
{
  encrypted_flow_data: "<ENCRYPTED_FLOW_DATA>",
  encrypted_aes_key: "<ENCRYPTED_AES_KEY>",
  initial_vector: "<INITIAL_VECTOR>"
}
```

Parâmetro

Descrição

String `encrypted_flow_data`

**Obrigatório.** A carga criptografada da solicitação.

String `encrypted_aes_key`

**Obrigatório.** A chave AES de 128 bits criptografada.

String `initial_vector`

**Obrigatório.** O vetor de inicialização de 128 bits.

Depois de processar a solicitação descriptografada, crie uma resposta e criptografe-a antes de enviá-la de volta para o cliente do WhatsApp. Criptografe a carga usando a chave AES recebida na solicitação e envie-a de volta como uma string Base64.

Consulte exemplos de como [descriptografar e criptografar](/docs/whatsapp/flows/guides/implementingyourflowendpoint#request-decryption-and-encryption).

Se uma solicitação não puder ser descriptografada, o ponto de extremidade retornará o código de status da resposta HTTP 421 (consulte [Códigos de erro do ponto de extremidade comercial](/docs/whatsapp/flows/reference/error-codes#endpoint_error_codes) para saber mais).

#### Exemplo de resposta do ponto de extremidade

```
curl -i -H "Content-Type: application/json" -X POST -d '{"encrypted_flow_data":"4Wor0bpfvrNqnkH+XQZLn3HnU2Zi7hG\\/UHjISS93Fzn9J7youssaLeXlNUH","encrypted_aes_key":"ufA0fXD1Wz...","initial_vector":"G\\/1rq1naEOMR4TJHFvIs\\/Q==."}' 'https://business.com/checkout'HTTP/2 200content-type: text/plaincontent-length: 232date: Wed, 06 Jul 2022 14:03:03 GMTyZcJQaH3AqfzKgjn64vAcASaJrOMN27S6CESyU68WN/cDCP6abskoMa/pPjszXGKyyh/23lw84HW6ZilMfU6KL3j5AWwOx6GWNwtq8Aj7gz/Y7R+LccmJWxKo2UccMu5xJlduIFlFlOS1gAnOwKrk8wpuprsi4jAOspw3xO2uh3J883aC/csu/MhRPiYCaGGy/tTNvVDmb2Gw1WXFmpvLsZ/SBrgG0cDQJjQzpTO
```

### Vincular o ponto de extremidade de finalização da compra com a configuração de pagamento

A empresa deve ter uma [configuração de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#link-your-payment-account) baseada em gateway de pagamento e entrar em contato com whatsappindia-bizpayments-support@meta.com para habilitar a vinculação do ponto de extremidade de finalização da compra com a configuração de pagamento na conta do WhatsApp Business.

Antes de vincular o ponto de extremidade de finalização da compra, você deve criar uma [configuração de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#link-your-payment-account) e vincular à conta do gateway de pagamento. Recomendamos que você use a configuração de pagamento vinculada apenas com a integração de modelo de botão de finalização da compra.

Para vincular o ponto de extremidade com a configuração de pagamento, siga [APIs de integração – Vincular ponto de extremidade de dados](/documentation/business-messaging/whatsapp/payments/payments-in/onboarding-apis#link-or-update-data-endpoint)

### Implementar a lógica do ponto de extremidade da finalização da compra

A integração do ponto de extremidade de finalização da compra do WhatsApp herda a permissão "data\_exchange", semelhante ao Flows. Além disso, oferece suporte ao conjunto de subações baseadas na interação do usuário e transmite as informações relevantes em cada uma dessas ações para permitir que as empresas forneçam cupons específicos de usuários e atualizem as informações de preços de acordo.

Subação

Método

Descrição

`get_coupons`

Solicitação

Quando os usuários clicam em uma CTA de oferta de descontos, o WhatsApp transmite [parâmetros de pedido](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject), excluindo as [configurações de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paymentsettingsobject). Ele também transmite `user phone number` como um parâmetro de entrada.

```
{  "input":  {    "user_id": "user_phone_number"  }}
```

Consulte o exemplo de [solicitação de obtenção de cupons](#get_coupon_request) para entender a ordem e os parâmetros de entrada

Resposta

O ponto de extremidade de finalização da compra deve transmitir a lista de informações do cupom, como código, identificação e descrição.

```
{  "coupons":    [        {            "code": "coupon_code",            "id": "coupon_id",            "description": "coupon_description"        }    ]}
```

Consulte o exemplo de [resposta de obtenção de cupons](#get_coupon_response) para entender a resposta esperada.

`apply_coupon`

Solicitação

Quando os usuários selecionam ou inserem um cupom, o WhatsApp transmite [parâmetros de pedido](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject), excluindo as [configurações de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paymentsettingsobject). Também transmite `user phone number` e informações sobre o cupom a ser aplicado como um parâmetro de entrada.

```
{  "input":  {    "user_id": "user_phone_number",    "coupon":    {      "code": "WELCOME70"    }  }}
```

Consulte o exemplo de [solicitação de aplicação de cupom](#apply_coupon_request) para entender a ordem e os parâmetros de entrada

Resposta

O ponto de extremidade de finalização da compra deve atualizar o item e o preço do pedido em [parâmetros de pedido](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject) e anexar o cupom ao pedido

Consulte o exemplo de [resposta de aplicação de cupom](#apply_coupon_response) para entender a resposta esperada.

`remove_coupon`

Solicitação

Quando os usuários tentam remover um cupom aplicado, o WhatsApp transmite [parâmetros de pedido](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject), excluindo as [configurações de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paymentsettingsobject). Ele também transmite `user phone number` como um parâmetro de entrada.

```
{  "input":  {    "user_id": "user_phone_number"  }}
```

Consulte o exemplo de [solicitação de remoção de cupom](#remove_coupon_request) para entender a resposta esperada.

Resposta

O ponto de extremidade de finalização da compra deve atualizar o item e o preço do pedido em [parâmetros de pedido](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject) e remover o cupom anexado ao pedido.

Consulte o exemplo de [resposta de remoção de cupom](#remove_coupon_response) para entender a resposta esperada.

`apply_shipping`

Solicitação

Quando os usuários tentam enviar um endereço de entrega, o WhatsApp transmite [parâmetros de pedido](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject), excluindo as [configurações de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paymentsettingsobject). Também transmite as informações de envio e `user phone number` como um parâmetro de entrada.

```
{  "input":  {    "user_id": "user_phone_number"  }}
```

Consulte o exemplo de [solicitação de aplicação de envio](#apply_shipping_request) para entender a resposta esperada.

Resposta

O ponto de extremidade de finalização da compra deve atualizar o item e o custo de envio em [parâmetros de pedido](/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject).

Consulte o exemplo de [resposta da aplicação de envio](#apply_shipping_response) para entender a resposta esperada.

Criamos um [exemplo de ponto de extremidade de finalização da compra](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2FWhatsApp%2FWhatsApp-Checkout-Button-Template-Endpoint&h=AT2NzfGirew_5IjpruU2uBTSmpPHEJz_vdsV8L2aQsnXg6xGo1EUI_HgnlQu9OMBV4uH7SEprIZkmP7YwIrQi1TGA-yQSLijlj9JpbZMcmlBkXsPYCeeJspIZGv0b7krCzcaAk3czZfkAb7aMozjdU61RHs) no Node.js que você pode clonar (remixar) no Glitch para criar seu próprio ponto de extremidade e fazer um protótipo da lógica de finalização da compra. Para começar, siga as instruções no arquivo [README.md](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2FWhatsApp%2FWhatsApp-Checkout-Button-Template-Endpoint%2Fblob%2Fmain%2FREADME.md&h=AT2NzfGirew_5IjpruU2uBTSmpPHEJz_vdsV8L2aQsnXg6xGo1EUI_HgnlQu9OMBV4uH7SEprIZkmP7YwIrQi1TGA-yQSLijlj9JpbZMcmlBkXsPYCeeJspIZGv0b7krCzcaAk3czZfkAb7aMozjdU61RHs). O uso do Glitch é totalmente opcional. É possível clonar o código de exemplo do Glitch e executá-lo em qualquer ambiente da sua preferência. Depois de concluir as etapas acima, quando a empresa envia o modelo de finalização da compra com a configuração de pagamento vinculada, o WhatsApp habilita os cupons, o inventário em tempo real e as atualizações de preços, além de permitir que os usuários apliquem cupons e compartilhem endereços de entrega.

Quando habilitado, o `Apply a savings offer` aparecerá na tela de resumo do pedido

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/566208922_1339318471260137_8031940610378006006_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=y7ui9Fa0x9EQ7kNvwEFjtpv&_nc_oc=Adl281s3rXoSiIZZlr0Y_fw_zYA_xvdUJ6W79AQjqfY2RyrLWrHxPmAhFwWTHf5mg_U&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_AfnZlOx52qyrDcOmYb-1oN7ehs8zxH2Tgb2n3_zffi9TWw&oe=69613620)

O usuário pode clicar em `Apply a savings offer` para explorar os cupons. Nesse momento, o WhatsApp faz uma `get_coupons` solicitação para buscar a lista de cupons com base nas informações de `user phone number` e pedidos passados.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/560013461_1339318424593475_5113635030322783543_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=YvUG8mbT_kwQ7kNvwFpwOAh&_nc_oc=Adl50UJJBWnG0yznvDYdo0Xx84iTLkHNRQfq6dtvoWytvo7Q95jx6hjl7tPhFQHkzzk&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_Afk4Cu4g7_0SKyCIXt-D0HV9DBO8JHBVWaoeKxx_iSgCBg&oe=69612F2B)

Quando o usuário tenta aplicar um cupom, o WhatsApp faz `apply_coupon` e permite que as empresas atualizem o pedido ou o preço do item com base no cupom selecionado.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560498579_1339318444593473_8466127193448601632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=MWyvO-V2tQMQ7kNvwG9Xqc2&_nc_oc=AdlhNdUA8vwkpI_RUJrLLZ1vOMGIv9tnpF6rxv87pfQVKyaQZjXxqzKdnoR2kdLpk6o&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_Afkfk6eZNdYqpJJa8VjjRX8P5Z338pq8ZOwog2iqPy_4kg&oe=69610CF9)

Assim como com os cupons, o usuário pode compartilhar o endereço de entrega clicando em `Add shipping address` e selecionando os endereços salvos com as empresas ou adicionando um novo endereço. O WhatsApp faz uma solicitação `apply_shipping` quando o usuário tenta enviar o endereço e permite que as empresas verifiquem o inventário e a logística com base no endereço fornecido.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/561725167_1339318187926832_1852627850653076539_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=23ts7MmHSHIQ7kNvwHDByyO&_nc_oc=AdlqYHqGYjgkCkfmwyDOQOS0XsT9lPNo9XPzy5NFZ3tOvavLWHMLwtQ6tSFQutKXSr8&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_AfmDuu8X8OFTW_Eo5Y0gyQ1zurA89vvEE-77aaMXEnB16w&oe=696133D2)![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/560467967_1339318057926845_5662577297785116122_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=hVD1myP_J8gQ7kNvwHZdCyK&_nc_oc=Adm7jcmYq7-0VDaHodwrSjJ16QgLqAPykKWhy1K87Yh_U0aVqNQE0bvUzMmmgY6vh3c&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_Afk9CWNmY75-FveeadZRqk1kFqEpFVJ4pNAl7V05HcuGLw&oe=69613024)

Os usuários podem continuar a fazer o pedido usando a forma de pagamento preferencial configurada no cliente do WhatsApp:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/461783140_456335920794267_694558377704466245_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=1vVb5h9qTXYQ7kNvwFNGs2G&_nc_oc=AdmuVw8l5H2btROXYZlxSotSvAmLHCa7QP5OLwdg_HIwC1aYUUawqUiBfgeqRijkvgQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=sd6uHUO2SY6EGltFStOA7w&oh=00_Aflh33-hED7WGUZ7BMuBcLr94_VI_XBa8RrHOoPA7U1uQQ&oe=69612B1D)

Após o processamento do pedido, um [webhook de pagamento](/documentation/business-messaging/whatsapp/payments/payments-in/pg#step-2--receive-webhook-about-transaction-status) é disparado.

## Vários produtos

É possível criar um [modelo de carrossel de cartões de mídia](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) que mostra até 10 produtos em um carrossel de cartões, cada um com o próprio botão de finalização da compra. Para isso, crie um modelo de carrossel de cartão de mídia como de costume, mas substitua um dos botões por um [botão de finalização da compra](#checkout-buttons). Além disso, verifique se esse é o primeiro botão no cartão.

Os botões de finalização da compra em modelos de carrossel com cartão de mídia acionam o mesmo fluxo de pedido e pagamento que os botões de finalização da compra em modelos que exibem um único produto.

## Botões de finalização da compra

Cada botão de finalização da compra em um modelo deve corresponder a um único produto. Os botões de finalização da compra, ao criar um modelo, devem ter a seguinte sintaxe não personalizável:

```
{  "type": "order_details",  "text": "Buy now"}
```

Observe que isso é apenas uma definição de botão. Os detalhes reais sobre o produto relacionado a esse botão são incluídos quando você [envia o modelo](#sending-payment-button-templates) em uma mensagem de modelo. Por exemplo:

```
{  "type": "button",  "sub_type": "order_details",  "index": 0,  "parameters": [    {      "type": "action",      "action": {        "order_details": {          "reference_id": "abc.123_xyz-1",          "type": "physical-goods",          "currency": "INR",          "payment_settings": [            {              "type": "payment_gateway",              "payment_gateway": {                "type": "razorpay",                "configuration_name": "prod-razor-pay-config-05"              }            }          ],          "shipping_info": {            "country": "IN",            "addresses": [              {                "name": "Nidhi Tripathi",                "phone_number": "919000090000",                "address": "Bandra Kurla Complex",                "city": "Mumbai",                "state": "Maharastra",                "in_pin_code": "400051",                "house_number": "12",                "tower_number": "5",                "building_name": "One BKC",                "landmark_area": "Near BKC Circle"              }            ]          },          "order": {            "items": [              {                "amount": {                  "offset": 100,                  "value": 200000                },                "sale_amount": {                  "offset": 100,                  "value": 150000                },                "name": "Blue Elf Aloe",                "quantity": 1,                "country_of_origin": "India",                "importer_name": "Lucky Shrub Imports and Exports",                "importer_address": {                  "address_line1": "One BKC",                  "address_line2": "Bandra Kurla Complex",                  "city": "Mumbai",                  "zone_code": "MH",                  "postal_code": "400051",                  "country_code": "IN"                }              }            ],            "subtotal": {              "offset": 100,              "value": 150000            },            "shipping": {              "offset": 100,              "value": 20000            },            "tax": {              "offset": 100,              "value": 10000            },            "discount": {              "offset": 100,              "value": 15000,              "description": "Additional 10% off"            },            "status": "pending",            "expiration": {              "timestamp": "1726627150"            }          },          "total_amount": {            "offset": 100,            "value": 165000          }        }      }    }  ]}
```

Se você estiver enviando um [modelo de carrossel de cartão de mídia](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) (que pode ter dois ou mais produtos), cada botão de finalização da compra deve ser definido no modelo. Os detalhes do item que mapeiam para cada botão devem ser incluídos quando o modelo for enviado.

## Como criar modelos com botão de finalização da compra

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates) para criar um modelo com botão de finalização da compra.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```

### Corpo do post

O corpo do post abaixo é para um modelo de botão de finalização da compra que mostra um botão único. Consulte o documento [Modelos de carrossel de cartão de mídia](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) e veja a sintaxe do corpo do post para o modelo de carrossel.

```
{
  "name": "<TEMPLATE_NAME>",
  "language": "<TEMPLATE_LANGUAGE>",
  "category": "marketing",
  "components": [
    {
      "type": "header",
      "format": "<MESSAGE_HEADER_FORMAT>",
      "example": {
        "header_handle": [
          "<MESSAGE_HEADER_ASSET_HANDLE>"
        ]
      }
    },
    {
      "type": "body",
      "text": "<MESSAGE_BODY_TEXT>",
      "example": {
        "body_text": [
          [
            "<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>",
            "<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>"
          ]
        ]
      }
    },

    /* Footer component is optional */
    {
      "type": "footer",
      "text": "<MESSAGE_FOOTER_TEXT>"
    },

    {
      "type": "buttons",
      "buttons": [
        {
          "type": "order_details",
          "text": "Buy now"
        },

        /* Quick-reply buttons are optional; up to 9 permitted */
        {
          "type": "quick_reply",
          "text": "<QUICK_REPLY_BUTTON_LABEL_TEXT>"
        }
      ]
    }
  ]
}
```

### Parâmetros do corpo do post

Espaço reservado

Descrição

Valor de exemplo

`<MESSAGE_BODY_TEXT>`

_String_

**Obrigatório.**

Texto do corpo da mensagem. Aceita variáveis.

Máximo de 1.024 caracteres.

`Hi {{1}}! The {{2}} is back in stock! Order now before it's gone!`

`<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>`

_String_

**Obrigatório se a string de texto do corpo da mensagem tiver variáveis.**

String(s) de variáveis de exemplo de texto do corpo da mensagem. O número de strings precisa corresponder ao número de espaços reservados para variáveis na string de texto do corpo da mensagem.

Se o texto do corpo da mensagem usar uma única variável, o valor `body_text` poderá ser uma string; caso contrário, deverá ser uma matriz contendo uma matriz de strings.

`Pablo`

`<MESSAGE_FOOTER_TEXT>`

_String_

**Obrigatório com o uso de um rodapé de mensagem.**

String de texto do rodapé da mensagem.

Máximo de 60 caracteres.

`Tap 'Stop' below to stop back-in-stock reminders.`

`<MESSAGE_HEADER_ASSET_HANDLE>`

_String_

**Obrigatório se um cabeçalho com mídia não textual for usado.**

Nome de usuário do ativo de mídia carregado. Use a [API de Carregamento Retomável](/docs/graph-api/guides/upload) para gerar um identificador de ativo.

Os ativos de mídia são cortados automaticamente na proporção ampla com base no dispositivo do usuário do WhatsApp.

`4::anBlZw==:ARa525ZJ1g0J-8egeiRvb4Z4r9RSi9qeKF7-wXsUiaDFsll5CKbu5H7h_9mTW0TDfA8LEGHC4bAeXtJJiVQADMp5Ooe2huQlhpBxMadJiu3qVg:e:1724535430:634974688087057:100089620928913:ARaQoFQMm6BlbI3MYo4`

`<MESSAGE_HEADER_FORMAT>`

_String_

**Obrigatório.**

Formato do cabeçalho da mensagem. O valor pode ser `image` ou `video`.

`image`

`<QUICK_REPLY_BUTTON_LABEL_TEXT>`

_String_

**Obrigatório ao usar um botão de resposta rápida.**

O texto do botão de resposta rápida.

Máximo de 25 caracteres.

`Stop`

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

`item_back_in_stock_v1`

### Exemplo de solicitação

Esta solicitação de exemplo cria um modelo de botão de finalização da compra com cabeçalho de mensagem de imagem única, corpo de texto de mensagem que usa duas variáveis, rodapé, botão de finalização da compra único e botão de resposta rápida.

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "item_back_in_stock_v1",
  "language": "en_US",
  "category": "marketing",
  "components": [
    {
      "type": "header",
      "format": "image",
      "example": {
        "header_handle": [
          "3:NDU..."
        ]
      }
    },
    {
      "type": "body",
      "text": "Hi {{1}}! The {{2}} is back in stock! Order now before it\'s gone!",
      "example": {
        "body_text": [
          [
            "Pablo",
            "Blue Elf Aloe"
          ]
        ]
      }
    },
    {
      "type": "footer",
      "text": "Tap \'Stop\' below to stop back-in-stock reminders."
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "order_details",
          "text": "Buy now"
        },
        {
          "type": "quick_reply",
          "text": "Stop"
        }
      ]
    }
  ]
}'
```

## Como enviar modelos com botão de finalização da compra

Depois que o modelo de botão de finalização da compra ou carrossel for aprovado, você poderá enviá-lo em uma mensagem de modelo.

### Sintaxe da solicitação

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) para enviar um modelo de botão de finalização da compra ou um modelo de carrossel aprovado para um usuário do WhatsApp.

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```

### Corpo do post

Essa sintaxe do corpo do post é para um modelo de botão de finalização da compra. Consulte [Como enviar modelos de carrossel de cartão de mídia](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) para ver a sintaxe da carga do corpo do post para o modelo de carrossel de cartão de mídia.

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "template",
  "template": {
    "name": "<TEMPLATE_NAME>",
    "language": {
      "policy": "deterministic",
      "code": "<TEMPLATE_LANGUAGE>"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "<MESSAGE_HEADER_FORMAT>",
            "<MESSAGE_HEADER_FORMAT>": {
              "id": "<MESSAGE_HEADER_ASSET_ID>"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            <MESSAGE_BODY_TEXT_VARIABLE>
          },
          {
            <MESSAGE_BODY_TEXT_VARIABLE>
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "order_details",
        "index": 0,
        "parameters": [
          {
            "type": "action",
            "action": {
              "order_details": {
                "reference_id": "<REFERENCE_ID>",
                "currency": "INR",
                "type": "<PRODUCT_TYPE>",
                "payment_settings": [
                  {
                    "type": "payment_gateway",
                    "payment_gateway": {
                      "type": "<PAYMENT_GATEWAY_NAME>",
                      "configuration_name": "<PAYMENT_GATEWAY_CONFIGURATION_NAME>"
                    }
                  }
                ],

                /* "shipping_info" required for physical-goods type, else omit */
                "shipping_info": {
                  "country": "IN",
                  "addresses": [

                    /* object required if you know recipient's address, otherwise omit (i.e., set "addresses" to an empty array) */
                    {
                      "name": "<SHIPPING_INFO_NAME>",
                      "phone_number": "<SHIPPING_INFO_PHONE_NUMBER>",
                      "address": "<SHIPPING_INFO_ADDRESS>",
                      "city": "<SHIPPING_INFO_CITY>",
                      "state": "<SHIPPING_INFO_STATE>",
                      "in_pin_code": "<SHIPPING_INFO_INDIA_PIN>",
                      "landmark_area": "<SHIPPING_INFO_LANDMARK_AREA>",
                      "house_number": "<SHIPPING_INFO_HOUSE_NUMBER>",
                      "tower_number": "<SHIPPING_INFO_TOWER_NUMBER>",
                      "building_name": "<SHIPPING_INFO_BUILDING_NAME>"
                    }

                  ]
                },

                "order": {
                  "items": [
                    {
                      "amount": {
                        "offset": 100,
                        "value": <ITEM_PRICE>
                      },

                      /* "sale_amount" optional */
                      "sale_amount": {
                        "offset": 100,
                        "value": <SALE_PRICE>
                      },

                      "name": "<ITEM_NAME>",
                      "quantity": <ITEM_QUANTITY>,
                      "country_of_origin": "<ITEM_COUNTRY_OF_ORIGIN>",
                      "importer_name": "<IMPORTER_NAME>",
                      "importer_address": {
                        "address_line1": "<IMPORTER_ADDRESS_LINE_1>",
                        "address_line2": "<IMPORTER_ADDRESS_LINE_2>",
                        "city": "<IMPORTER_CITY>",
                        "zone_code": "<IMPORTER_ZONE_CODE>",
                        "postal_code": "<IMPORTER_POSTAL_CODE>",
                        "country_code": "IN"
                      }
                    }
                  ],
                  "subtotal": {
                    "offset": 100,
                    "value": <SUBTOTAL_AMOUNT>
                  }
                  "shipping": {
                    "offset": 100,
                    "value": <SHIPPING_AMOUNT>
                  },
                  "tax": {
                    "offset": 100,
                    "value": <TAX_AMOUNT>,
                    "description": "<TAX_DESCRIPTION>"
                  },

                  /* "discount" optional */
                  "discount": {
                    "offset": 100,
                    "value": <DISCOUNT_AMOUNT>,
                    "description": "<DISCOUNT_DESCRIPTION>"
                  },
                  "status": "pending",

                  /* "expiration" optional */
                  "expiration": {
                    "timestamp": "<EXPIRATION_TIMESTAMP>"
                  }
                },
                "total_amount": {
                  "offset": 100,
                  "value": <TOTAL_AMOUNT>
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

### Parâmetros do corpo do post

Espaço reservado

Descrição

Valor de exemplo

`<DISCOUNT_AMOUNT>`

_Número inteiro_

**Obrigatório se um desconto for usado.**

Valor do desconto multiplicado pelo valor de discount.offset.

Por exemplo, para representar um desconto de ₹2, o valor será `200`.

O valor do desconto aplica-se ao subtotal do pedido.

`15000`

`<DISCOUNT_DESCRIPTION>`

_String_

**Opcional.**

Descrição do desconto.

Máximo de 60 caracteres.

`Additional 10% off`

`<EXPIRATION_TIMESTAMP>`

_String_

**Obrigatório para pedidos com prazo de validade.**

Registro de data e hora UTC que indica quando devemos desabilitar o botão **Comprar agora**. O registro de data e hora será usado para gerar uma string de texto que aparece na parte inferior da janela **Detalhes do pedido**. Por exemplo:

_O pedido expira em 30 de setembro de 2024 às 12h._

Os usuários do WhatsApp que visualizarem a mensagem depois desse período não poderão comprar o item usando o botão de finalização da compra.

Os valores devem representar um horário UTC de pelo menos 300 segundos a partir do momento em que a solicitação de envio de mensagem é enviada para nós.

`1726692927`

`<IMPORTER_ADDRESS_LINE_1>`

_String_

**Obrigatório.**

Endereço da importadora, linha 1 (porta, torre, número, rua etc.).

Máximo de 100 caracteres.

`One BKC`

`<IMPORTER_ADDRESS_LINE_2>`

_String_

**Opcional.**

Endereço da importadora (cont.): linha 2 (ponto de referência, área etc.).

Máximo de 100 caracteres.

`Bandra Kurla Complex`

`<IMPORTER_CITY>`

_String_

**Obrigatório.**

Cidade da importadora.

Máximo de 120 caracteres.

`Mumbai`

`<IMPORTER_NAME>`

_String_

**Obrigatório.**

Nome da importadora.

Máximo de 200 caracteres.

`Lucky Shrub Imports and Exports`

`<IMPORTER_POSTAL_CODE>`

_String_

**Obrigatório.**

Número do código postal de 6 dígitos da importadora.

Máximo de 6 dígitos.

`400051`

`<IMPORTER_ZONE_CODE>`

_String_

**Obrigatório.**

Código de zona de duas letras da importadora.

`MH`

`<ITEM_COUNTRY_OF_ORIGIN>`

_String_

**Obrigatório.**

País de origem do item.

Máximo de 100 caracteres.

`India`

`<ITEM_NAME>`

_String_

**Obrigatório.**

Nome do item

Máximo de 60 caracteres.

`Blue Elf Aloe`

`<ITEM_PRICE>`

_Número inteiro_

**Obrigatório.**

Preço do item individual (preço por item) multiplicado pelo valor de amount.offset.

Por exemplo, para representar o preço de um item de ₹ 12,99, o valor seria `1299`.

`200000`

`<ITEM_QUANTITY>`

_Número inteiro_

**Obrigatório.**

O número de itens no pedido, se o pedido for efetuado.

Máximo de 100 números inteiros.

`1`

`<MESSAGE_BODY_TEXT_VARIABLE>`

_Objeto_

**Obrigatório se o texto do corpo da mensagem de modelo usar variáveis; caso contrário, omita.**

Objeto que descreve uma variável de mensagem. Se o modelo usa diversas variáveis, defina um objeto para cada uma delas.

É compatível com os tipos `text`, `currency` e `date_time`. Consulte [Parâmetros de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#parameter-object).

Não há um limite máximo de caracteres para esse valor, mas ele é contabilizado no limite de 1.024 caracteres do texto do corpo da mensagem.

```
{
"type":"text",
"text": "Nidhi"
}
```

`<MESSAGE_HEADER_ASSET_ID>`

_String_

**Obrigatório.**

A identificação do ativo de mídia carregado do ativo de cabeçalho. Use o ponto de extremidade [**POST /<BUSINESS\_PHONE\_NUMBER\_ID>/media**](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) para gerar uma identificação de ativo.

`1558081531584829`

`<MESSAGE_HEADER_FORMAT>`

_String_

**Obrigatório.**

Indica o tipo de cabeçalho e um nome de propriedade correspondente.

Observe que o espaço reservado `<MESSAGE_HEADER_FORMAT>` aparece duas vezes no exemplo de corpo do post acima, pois serve como espaço reservado para o valor da propriedade de tipo e o nome de propriedade correspondente.

O valor pode ser `image` ou `video`.

`image`

`<PAYMENT_GATEWAY_CONFIGURATION_NAME>`

_String_

**Obrigatório.**

O nome de configuração do gateway de pagamento que você [configurou](/documentation/business-messaging/whatsapp/payments/payments-in/onboarding-apis) na sua conta do WhatsApp Business.

`prod-razor-pay-config-05`

`<PAYMENT_GATEWAY_NAME>`

_String_

**Obrigatório.**

O nome do gateway de pagamento que você [configurou](/documentation/business-messaging/whatsapp/payments/payments-in/onboarding-apis) na sua conta do WhatsApp Business.

Os valores podem ser os seguintes:

-   `razorpay`-   `payu`-   `zaakpay`

`razorpay`

`<PRODUCT_TYPE>`

_String_

**Obrigatório.**

Tipo de produto O valor pode ser `digital-goods` ou `physical-goods`.

`digital-goods`

`<QUICK_REPLY_BUTTON_PAYLOAD>`

_String_

**Opcional.**

O valor a ser incluído em webhooks de mensagens (`messages.button.payload`) quando o botão for tocado.

`opt-out`

`<REFERENCE_ID>`

_String_

**Obrigatório.**

A identificação de referência única do pedido ou da fatura. Diferencia maiúsculas de minúsculas. Não pode estar vazio. Será precedido por um símbolo de hash (#) no fluxo de finalização da compra.

O valor deve ser único para cada mensagem de modelo de botão de finalização da compra. Se você enviar um modelo de carrossel, cada botão de finalização da compra deverá ter uma identificação de referência única.

Se você precisar enviar várias mensagens para o mesmo pedido/fatura, recomendamos anexar um número de sequência ao valor (por exemplo, -1).

Os valores podem conter apenas letras em inglês, números, sublinhados, traços ou pontos.

Máximo de 35 caracteres.

`abc.123_xyz-1`

`<SALE_PRICE>`

_Número inteiro_

**Obrigatório se usar um valor de venda.**

Preço do item em promoção multiplicado pelo valor `sale.offset`.

Por exemplo, para representar um preço de venda de ₹10, o valor seria `1000`.

`150000`

`<SHIPPING_AMOUNT>`

_Número inteiro_

**Obrigatório.**

Custo de envio do pedido multiplicado pelo valor `shipping.offset`.

Por exemplo, para representar um custo de envio de ₹ 0,99, o valor seria `99`.

`20000`

`<SHIPPING_INFO_ADDRESS>`

_String_

**Obrigatório se você souber as informações de envio do destinatário.**

Endereço do destinatário do produto.

Máximo de 512 caracteres.

`Bandra Kurla Complex`

`<SHIPPING_INFO_BUILDING_NAME>`

_String_

**Opcional.**

Nome do edifício do destinatário do produto.

Máximo de 128 caracteres.

`One BKC`

`<SHIPPING_INFO_CITY>`

_String_

**Obrigatório se você souber as informações de envio do destinatário.**

Nome completo da cidade do destinatário do produto.

Máximo de 100 caracteres.

`Mumbai`

`<SHIPPING_INFO_FLOOR_NUMBER>`

_String_

**Opcional.**

O número do andar do destinatário do produto.

Máximo de 10 caracteres.

`2`

`<SHIPPING_INFO_HOUSE_NUMBER>`

_String_

**Opcional.**

Número do destinatário do produto.

Máximo de 8 caracteres.

`12`

`<SHIPPING_INFO_INDIA_PIN>`

_String_

**Obrigatório se você souber as informações de envio do destinatário.**

Código postal do destinatário do produto.

Máximo de 6 caracteres.

`400051`

`<SHIPPING_INFO_LANDMARK_AREA>`

_String_

**Opcional.**

Área de ponto de referência do destinatário do produto.

Máximo de 128 caracteres.

`Near BKC Circle`

`<SHIPPING_INFO_NAME>`

_String_

**Obrigatório se você souber as informações de envio do destinatário.**

Nome completo do destinatário do produto.

Máximo de 256 caracteres.

`Nidhi Tripathi`

`<SHIPPING_INFO_PHONE_NUMBER>`

_String_

**Obrigatório se você souber as informações de envio do destinatário.**

Número de telefone do WhatsApp do destinatário do produto.

Máximo de 12 caracteres.

`919000090000`

`<SHIPPING_INFO_STATE>`

_String_

**Obrigatório se você souber as informações de envio do destinatário.**

Nome completo do estado do destinatário do produto.

Máximo de 100 caracteres.

`Maharastra`

`<SHIPPING_INFO_TOWER_NUMBER>`

_String_

**Opcional.**

Número da torre do destinatário do produto.

Máximo de 8 caracteres.

`2`

`<SUBTOTAL_AMOUNT>`

_Número inteiro_

**Obrigatório.**

Subtotal do pedido. Para calcular, multiplique `<ITEM_PRICE>` por `<ITEM_QUANTITY>` por `subtotal.offset`.

Por exemplo, se o modelo for destinado a um pedido único com dois itens que custam ₹12,99, o valor seria `2598`.

`150000`

`<TAX_AMOUNT>`

_Número inteiro_

**Obrigatório.**

Valor do imposto multiplicado por `tax.offset`.

Por exemplo, para representar um valor de imposto de ₹5, o valor seria `500`.

`10000`

`<TAX_DESCRIPTION>`

_String_

**Opcional.**

Descrição do imposto.

Máximo de 60 caracteres.

`Sales tax`

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

`item_back_in_stock_v1`

`<TOTAL_AMOUNT>`

_Número inteiro_

**Obrigatório.**

Valor total do pedido multiplicado pelo valor `total_amount.offset`.

Por exemplo, para representar o valor total de ₹ 18,00, o valor seria `1800`.

Deve ser uma soma de:

-   `order.subtotal.value`-   `order.shipping.value`-   `order.tax.value`

Descontando:

-   `order.discount.value`

`165000`

`<WHATSAPP_USER_PHONE_NUMBER>`

_String_

**Obrigatório.**

Número de telefone do usuário do WhatsApp.

`+16505551234`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "template",
  "template": {
    "name": "item_back_in_stock_v2",
    "language": {
      "policy": "deterministic",
      "code": "en_US"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "image",
            "image": {
              "id": "1558081531584829"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "Nidhi"
          },
          {
            "type": "text",
            "text": "Blue Elf Aloe"
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "order_details",
        "index": 0,
        "parameters": [
          {
            "type": "action",
            "action": {
              "order_details": {
                "reference_id": "abc.123_xyz-1",
                "type": "physical-goods",
                "currency": "INR",
                "payment_settings": [
                  {
                    "type": "payment_gateway",
                    "payment_gateway": {
                      "type": "razorpay",
                      "configuration_name": "prod-razor-pay-config-05"
                    }
                  }
                ],
                "shipping_info": {
                  "country": "IN",
                  "addresses": [
                    {
                      "name": "Nidhi Tripathi",
                      "phone_number": "919000090000",
                      "address": "Bandra Kurla Complex",
                      "city": "Mumbai",
                      "state": "Maharastra",
                      "in_pin_code": "400051",
                      "house_number": "12",
                      "tower_number": "5",
                      "building_name": "One BKC",
                      "landmark_area": "Near BKC Circle"
                    }
                  ]
                },
                "order": {
                  "items": [
                    {
                      "amount": {
                        "offset": 100,
                        "value": 200000
                      },
                      "sale_amount": {
                        "offset": 100,
                        "value": 150000
                      },
                      "name": "Blue Elf Aloe",
                      "quantity": 1,
                      "country_of_origin": "India",
                      "importer_name": "Lucky Shrub Imports and Exports",
                      "importer_address": {
                        "address_line1": "One BKC",
                        "address_line2": "Bandra Kurla Complex",
                        "city": "Mumbai",
                        "zone_code": "MH",
                        "postal_code": "400051",
                        "country_code": "IN"
                      }
                    }
                  ],
                  "subtotal": {
                    "offset": 100,
                    "value": 150000
                  },
                  "shipping": {
                    "offset": 100,
                    "value": 20000
                  },
                  "tax": {
                    "offset": 100,
                    "value": 10000
                  },
                  "discount": {
                    "offset": 100,
                    "value": 15000,
                    "description": "Additional 10% off"
                  },
                  "status": "pending",
                  "expiration": {
                    "timestamp": "1726627150"
                  }
                },
                "total_amount": {
                  "offset": 100,
                  "value": 165000
                }
              }
            }
          }
        ]
      }
    ]
  }
}'
```

Os exemplos de solicitação e respostas abaixo são compatíveis apenas com o recurso [Habilitação de cupons, inventário em tempo real e atualizações de preços](#enabling_coupons_inventory), que está em versão beta e disponível apenas para empresas da Índia e usuários do WhatsApp com código de chamada de país da Índia. Para saber mais, entre em contato com whatsappindia-bizpayments-support@meta.com.

### Obter cupons – Exemplo de solicitação de ponto de extremidade

```
{    "data":    {        "order_details":        {            "reference_id": "abc.123_xyz-1",            "type": "physical-goods",            "currency": "INR",            "shipping_info":            {                "country": "IN",                "addresses":                [                    {                        "name": "Nidhi Tripathi",                        "phone_number": "919000090000",                        "address": "Bandra Kurla Complex",                        "city": "Mumbai",                        "state": "Maharastra",                        "in_pin_code": "400051",                        "house_number": "12",                        "tower_number": "5",                        "building_name": "One BKC",                        "landmark_area": "Near BKC Circle"                    }                ]            },            "order":            {                "items":                [                    {                        "amount":                        {                            "offset": 100,                            "value": 200000                        },                        "sale_amount":                        {                            "offset": 100,                            "value": 150000                        },                        "name": "Blue Elf Aloe",                        "quantity": 1,                        "country_of_origin": "India",                        "importer_name": "Lucky Shrub Imports and Exports",                        "importer_address":                        {                            "address_line1": "One BKC",                            "address_line2": "Bandra Kurla Complex",                            "city": "Mumbai",                            "zone_code": "MH",                            "postal_code": "400051",                            "country_code": "IN"                        }                    }                ],                "subtotal":                {                    "offset": 100,                    "value": 150000                },                "shipping":                {                    "offset": 100,                    "value": 20000                },                "tax":                {                    "offset": 100,                    "value": 10000                },                "discount":                {                    "offset": 100,                    "value": 15000,                    "description": "Additional 10% off"                },                "status": "pending",                "expiration":                {                    "timestamp": "1726627150",                    "description": "order expires in 5 min"                }            },            "total_amount":            {                "offset": 100,                "value": 165000            }        },        "input":        {            "user_id": "919000090000"        }    },    "action": "data_exchange",    "sub_action": "get_coupons",    "version": "1.0"}
```

### Obter cupons – Exemplo de resposta do ponto de extremidade

```
{    "version": "1.0",    "sub_action": "get_coupons",    "data":    {        "coupons":        [            {                "description": "Save R20 on the order",                "code": "TRYNEW20",                "id": "try_new_20_id"            },            {                "description": "Save R30 on the order",                "code": "TRYNEW30",                "id": "try_new_30_id"            },            {                "description": "Save R50 on the order",                "code": "TRYNEW50",                "id": "try_new50_id"            }        ]    }}
```

### Aplicar cupom – Exemplo de solicitação de ponto de extremidade

```
{    "data":    {        "order_details":        {            "reference_id": "abc.123_xyz-1",            "type": "physical-goods",            "currency": "INR",            "shipping_info":            {                "country": "IN",                "addresses":                [                    {                        "name": "Nidhi Tripathi",                        "phone_number": "919000090000",                        "address": "Bandra Kurla Complex",                        "city": "Mumbai",                        "state": "Maharastra",                        "in_pin_code": "400051",                        "house_number": "12",                        "tower_number": "5",                        "building_name": "One BKC",                        "landmark_area": "Near BKC Circle"                    }                ]            },            "order":            {                "items":                [                    {                        "amount":                        {                            "offset": 100,                            "value": 200000                        },                        "sale_amount":                        {                            "offset": 100,                            "value": 150000                        },                        "name": "Blue Elf Aloe",                        "quantity": 1,                        "country_of_origin": "India",                        "importer_name": "Lucky Shrub Imports and Exports",                        "importer_address":                        {                            "address_line1": "One BKC",                            "address_line2": "Bandra Kurla Complex",                            "city": "Mumbai",                            "zone_code": "MH",                            "postal_code": "400051",                            "country_code": "IN"                        }                    }                ],                "subtotal":                {                    "offset": 100,                    "value": 150000                },                "shipping":                {                    "offset": 100,                    "value": 20000                },                "tax":                {                    "offset": 100,                    "value": 10000                },                "discount":                {                    "offset": 100,                    "value": 15000,                    "description": "Additional 10% off"                },                "status": "pending",                "expiration":                {                    "timestamp": "1726627150",                    "description": "order expires in 5 min"                }            },            "total_amount":            {                "offset": 100,                "value": 165000            }        },        "input":        {            "user_id": "919000090000",            "coupon":            {                "code": "TRYNEW10"            }        }    },    "action": "data_exchange",    "sub_action": "apply_coupon",    "version": "1.0"}
```

### Aplicar cupom – Exemplo de resposta de ponto de extremidade

```
{    "sub_action": "apply_coupon",    "version": "1.0",    "data":    {        "order_details":        {            "reference_id": "abc.123_xyz-1",            "type": "physical-goods",            "currency": "INR",            "shipping_info":            {                "country": "IN",                "addresses":                [                    {                        "name": "Nidhi Tripathi",                        "phone_number": "919000090000",                        "address": "Bandra Kurla Complex",                        "city": "Mumbai",                        "state": "Maharastra",                        "in_pin_code": "400051",                        "house_number": "12",                        "tower_number": "5",                        "building_name": "One BKC",                        "landmark_area": "Near BKC Circle"                    }                ]            },            "order":            {                "items":                [                    {                        "amount":                        {                            "offset": 100,                            "value": 200000                        },                        "sale_amount":                        {                            "offset": 100,                            "value": 150000                        },                        "name": "Blue Elf Aloe",                        "quantity": 1,                        "country_of_origin": "India",                        "importer_name": "Lucky Shrub Imports and Exports",                        "importer_address":                        {                            "address_line1": "One BKC",                            "address_line2": "Bandra Kurla Complex",                            "city": "Mumbai",                            "zone_code": "MH",                            "postal_code": "400051",                            "country_code": "IN"                        }                    }                ],                "subtotal":                {                    "offset": 100,                    "value": 150000                },                "shipping":                {                    "offset": 100,                    "value": 20000                },                "tax":                {                    "offset": 100,                    "value": 10000                },                "discount":                {                    "offset": 100,                    "value": 15000,                    "description": "Additional 10% off"                },                "status": "pending",                "expiration":                {                    "timestamp": "1726627150",                    "description": "order expires in 5 min"                }            },            "coupon":            {                "code": "TRYNEW10",                "discount":                {                    "value": 16500,                    "offset": 100                }            },            "total_amount":            {                "offset": 100,                "value": 148500            }        }    }}
```

### Remover cupom – Exemplo de solicitação do ponto de extremidade

```
{    "data":    {        "order_details":        {            "reference_id": "abc.123_xyz-1",            "type": "physical-goods",            "currency": "INR",            "shipping_info":            {                "country": "IN",                "addresses":                [                    {                        "name": "Nidhi Tripathi",                        "phone_number": "919000090000",                        "address": "Bandra Kurla Complex",                        "city": "Mumbai",                        "state": "Maharastra",                        "in_pin_code": "400051",                        "house_number": "12",                        "tower_number": "5",                        "building_name": "One BKC",                        "landmark_area": "Near BKC Circle"                    }                ]            },            "order":            {                "items":                [                    {                        "amount":                        {                            "offset": 100,                            "value": 200000                        },                        "sale_amount":                        {                            "offset": 100,                            "value": 150000                        },                        "name": "Blue Elf Aloe",                        "quantity": 1,                        "country_of_origin": "India",                        "importer_name": "Lucky Shrub Imports and Exports",                        "importer_address":                        {                            "address_line1": "One BKC",                            "address_line2": "Bandra Kurla Complex",                            "city": "Mumbai",                            "zone_code": "MH",                            "postal_code": "400051",                            "country_code": "IN"                        }                    }                ],                "subtotal":                {                    "offset": 100,                    "value": 150000                },                "shipping":                {                    "offset": 100,                    "value": 20000                },                "tax":                {                    "offset": 100,                    "value": 10000                },                "discount":                {                    "offset": 100,                    "value": 15000,                    "description": "Additional 10% off"                },                "status": "pending",                "expiration":                {                    "timestamp": "1726627150",                    "description": "order expires in 5 min"                }            },            "coupon":            {                "code": "TRYNEW10",                "discount":                {                    "value": 16500,                    "offset": 100                }            },            "total_amount":            {                "offset": 100,                "value": 148500            }        },        "input":        {            "user_id": "919000090000"        }    },    "action": "data_exchange",    "sub_action": "remove_coupon",    "version": "1.0"}
```

### Remover cupom – Exemplo de resposta do ponto de extremidade

```
{    "sub_action": "remove_coupon",    "version": "1.0",    "data":    {        "order_details":        {            "reference_id": "abc.123_xyz-1",            "type": "physical-goods",            "currency": "INR",            "shipping_info":            {                "country": "IN",                "addresses":                [                    {                        "name": "Nidhi Tripathi",                        "phone_number": "919000090000",                        "address": "Bandra Kurla Complex",                        "city": "Mumbai",                        "state": "Maharastra",                        "in_pin_code": "400051",                        "house_number": "12",                        "tower_number": "5",                        "building_name": "One BKC",                        "landmark_area": "Near BKC Circle"                    }                ]            },            "order":            {                "items":                [                    {                        "amount":                        {                            "offset": 100,                            "value": 200000                        },                        "sale_amount":                        {                            "offset": 100,                            "value": 150000                        },                        "name": "Blue Elf Aloe",                        "quantity": 1,                        "country_of_origin": "India",                        "importer_name": "Lucky Shrub Imports and Exports",                        "importer_address":                        {                            "address_line1": "One BKC",                            "address_line2": "Bandra Kurla Complex",                            "city": "Mumbai",                            "zone_code": "MH",                            "postal_code": "400051",                            "country_code": "IN"                        }                    }                ],                "subtotal":                {                    "offset": 100,                    "value": 150000                },                "shipping":                {                    "offset": 100,                    "value": 20000                },                "tax":                {                    "offset": 100,                    "value": 10000                },                "discount":                {                    "offset": 100,                    "value": 15000,                    "description": "Additional 10% off"                },                "status": "pending",                "expiration":                {                    "timestamp": "1726627150",                    "description": "order expires in 5 min"                }            },            "total_amount":            {                "offset": 100,                "value": 165000            }        }    }}
```

### Aplicar envio – Exemplo de solicitação de ponto de extremidade

```
{    "data":    {        "order_details":        {            "reference_id": "abc.123_xyz-1",            "type": "physical-goods",            "currency": "INR",            "shipping_info":            {                "country": "IN",                "addresses":                [                    {                        "name": "Nidhi Tripathi",                        "phone_number": "919000090000",                        "address": "Bandra Kurla Complex",                        "city": "Mumbai",                        "state": "Maharastra",                        "in_pin_code": "400051",                        "house_number": "12",                        "tower_number": "5",                        "building_name": "One BKC",                        "landmark_area": "Near BKC Circle"                    }                ]            },            "order":            {                "items":                [                    {                        "amount":                        {                            "offset": 100,                            "value": 200000                        },                        "sale_amount":                        {                            "offset": 100,                            "value": 150000                        },                        "name": "Blue Elf Aloe",                        "quantity": 1,                        "country_of_origin": "India",                        "importer_name": "Lucky Shrub Imports and Exports",                        "importer_address":                        {                            "address_line1": "One BKC",                            "address_line2": "Bandra Kurla Complex",                            "city": "Mumbai",                            "zone_code": "MH",                            "postal_code": "400051",                            "country_code": "IN"                        }                    }                ],                "subtotal":                {                    "offset": 100,                    "value": 150000                },                "shipping":                {                    "offset": 100,                    "value": 20000                },                "tax":                {                    "offset": 100,                    "value": 10000                },                "discount":                {                    "offset": 100,                    "value": 15000,                    "description": "Additional 10% off"                },                "status": "pending",                "expiration":                {                    "timestamp": "1726627150",                    "description": "order expires in 5 min"                }            },            "coupon":            {                "code": "TRYNEW10",                "discount":                {                    "value": 16500,                    "offset": 100                }            },            "total_amount":            {                "offset": 100,                "value": 148500            }        },        "input":        {            "user_id": "919000090000",            "selected_address":            {                "name": "Nidhi Tripathi",                "phone_number": "919000090000",                "address": "Bandra Kurla Complex",                "city": "Mumbai",                "state": "Maharastra",                "in_pin_code": "400051",                "house_number": "12",                "tower_number": "5",                "building_name": "One BKC",                "landmark_area": "Near BKC Circle"            }        }    },    "action": "data_exchange",    "sub_action": "apply_shipping",    "version": "1.0"}
```

### Aplicar envio – Exemplo de resposta de ponto de extremidade

```
{    "sub_action": "apply_shipping",    "version": "1.0",    "data":    {        "order_details":        {            "reference_id": "abc.123_xyz-1",            "type": "physical-goods",            "currency": "INR",            "shipping_info":            {                "country": "IN",                "addresses":                [                    {                        "name": "Nidhi Tripathi",                        "phone_number": "919000090000",                        "address": "Bandra Kurla Complex",                        "city": "Mumbai",                        "state": "Maharastra",                        "in_pin_code": "400051",                        "house_number": "12",                        "tower_number": "5",                        "building_name": "One BKC",                        "landmark_area": "Near BKC Circle"                    }                ],                "selected_address":                {                    "name": "Nidhi Tripathi",                    "phone_number": "919000090000",                    "address": "Bandra Kurla Complex",                    "city": "Mumbai",                    "state": "Maharastra",                    "in_pin_code": "400051",                    "house_number": "12",                    "tower_number": "5",                    "building_name": "One BKC",                    "landmark_area": "Near BKC Circle"                }            },            "order":            {                "items":                [                    {                        "amount":                        {                            "offset": 100,                            "value": 200000                        },                        "sale_amount":                        {                            "offset": 100,                            "value": 150000                        },                        "name": "Blue Elf Aloe",                        "quantity": 1,                        "country_of_origin": "India",                        "importer_name": "Lucky Shrub Imports and Exports",                        "importer_address":                        {                            "address_line1": "One BKC",                            "address_line2": "Bandra Kurla Complex",                            "city": "Mumbai",                            "zone_code": "MH",                            "postal_code": "400051",                            "country_code": "IN"                        }                    }                ],                "subtotal":                {                    "offset": 100,                    "value": 150000                },                "shipping":                {                    "offset": 100,                    "value": 40000                },                "tax":                {                    "offset": 100,                    "value": 10000                },                "discount":                {                    "offset": 100,                    "value": 15000,                    "description": "Additional 10% off"                },                "status": "pending",                "expiration":                {                    "timestamp": "1726627150",                    "description": "order expires in 5 min"                }            },            "coupon":            {                "code": "TRYNEW10",                "discount":                {                    "value": 16500,                    "offset": 100                }            },            "total_amount":            {                "offset": 100,                "value": 168500            }        }    }}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)