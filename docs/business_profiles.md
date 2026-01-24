<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-profiles -->
<!-- Scraped: 2026-01-24T00:27:11.408Z -->

# Perfis empresariais

Updated: 5 de out de 2025

O perfil empresarial do número de telefone comercial fornece informações adicionais sobre sua empresa, como endereço, site, descrição, entre outros. Você pode fornecer essas informações ao registrar o número de telefone comercial ou mais tarde, por meio do Gerenciador do WhatsApp ou da API.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/507476070_1379105613180336_7510619276605653298_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=-TeTRZmTTtoQ7kNvwGiPtwe&_nc_oc=Adk-p0nLL1LAVbuCJ8WZPgdHy5W2UDAMkWjxBFsQv-Fs6G7VEejbPnpqsF40zbT-A9s&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=taIzRO2J_mm4yIbPnh0Thg&oh=00_Afpx5xcesus7zRFLDdHghSffsdmf_EKjt1z8pbuG_J6PMw&oe=698E53DD)

## Como ver ou atualizar seu perfil via Gerenciador do WhatsApp

Para ver ou atualizar seu perfil via Gerenciador do WhatsApp:

-   Acesse [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/) > **Ferramentas da conta** > **Números de telefone**.-   Selecione seu número de telefone comercial.-   Clique na aba **Perfil** para ver seu perfil atual.-   Use o formulário para definir novos valores de perfil.

## Como receber seu perfil via API

Use o ponto de extremidade [GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/whatsapp\_business\_profile](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#Reading) para solicitar campos específicos do perfil empresarial:

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/whatsapp_business_profile?fields=about,address,description,email,profile_picture_url,websites,vertical' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
{  "data": [    {      "about": "Succulent specialists!",      "address": "1 Hacker Way, Menlo Park, CA 94025",      "description": "At Lucky Shrub, we specialize in providing a...",      "email": "lucky@luckyshrub.com",      "profile_picture_url": "https://pps.whatsapp.net/v/t61.24...",      "websites": [        "https://www.luckyshrub.com/"      ],      "vertical": "RETAIL",      "messaging_product": "whatsapp"    }  ]}
```

## Como atualizar seu perfil via API

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/whatsapp\_business\_profile](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#Updating) para atualizar campos específicos do perfil empresarial:

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/whatsapp_business_profile' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
--data-raw '
{
  "about": "Succulent specialists!",
  "address": "1 Hacker Way, Menlo Park, CA 94025",
  "description": "At Lucky Shrub, we specialize in providing a diverse range of high-quality succulents to suit your needs. From rare and exotic varieties to timeless classics, our collection has something for everyone.",
  "email": "lucky@luckyshrub.com",
  "messaging_product": "whatsapp",
  "profile_picture_handle": "4::aW...",
  "vertical": "RETAIL",
  "websites": "[\n  \"https://www.luckyshrub.com\"\n]"
}'
```

### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
{  "success": true}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)