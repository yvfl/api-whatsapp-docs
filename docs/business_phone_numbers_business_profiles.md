<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/business-profiles -->
<!-- Scraped: 2025-12-20T17:24:29.468Z -->

# Perfis empresariais

Updated: 4 de nov de 2025

## Obter um perfil empresarial

Use o ponto de extremidade [`GET /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/whatsapp_business_profile`](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#Reading) para obter o perfil empresarial do número de telefone da sua empresa. Os usuários do WhatsApp podem ver seu perfil empresarial clicando no nome ou número da sua empresa em uma conversa do WhatsApp.

### Exemplo de solicitação

```
curl \
'https://graph.facebook.com/v24.0/1906385232743451/whatsapp_business_profile?fields=about,address,description,email,profile_picture_url,websites,vertical' \
-H 'Authorization: Bearer EAAFl...'
```

### Exemplo de resposta

```
{  "data": [{    "about": "My Butterfly Business sells butterflies",    "address": "101 Butterfly Ln., Butterfly, Ohio",    "description": "We sell butterflies.",    "email": "butterflies@butterflies.com",    "messaging_product": "whatsapp",    "profile_picture_url": "2:c2FtcGxl...",    "websites": [       "https://https://www.butterflies.com/",       "https://https://www.butterflies.com/amea/"     ],    "vertical": "INDUSTRY",  }]}
```

## Atualizar perfil empresarial

Para atualizar seu perfil, faça uma chamada `POST` para `/PHONE_NUMBER_ID/whatsapp_business_profile`. Na solicitação, você pode incluir os parâmetros listados abaixo.

### Parâmetros

Nome

Descrição

`about`

_string_

**Opcional.**

O texto da seção **Sobre** da empresa. Esse texto aparece no perfil da empresa, abaixo da imagem do perfil, do número de telefone e dos botões de contato.

-   A string não pode ficar vazia.-   As strings devem ter até 139 caracteres.-   Emojis renderizados são compatíveis, mas não os respectivos valores unicode. Os valores de emoji unicode deverão ser codificados com escape do Java ou JavaScript.-   Hiperlinks podem ser incluídos, mas não serão renderizados como links clicáveis.-   Não é compatível com Markdown.

`address`

_string_

**Opcional.**

O endereço da empresa. Limite de 256 caracteres.

`description`

_string_

**Opcional.**

Descrição da empresa. Limite de 512 caracteres.

`email`

_string_

**Opcional.**

O endereço de email para contato da empresa (em formato válido). Limite de 128 caracteres.

`messaging_product`

**Obrigatório.**

O serviço de mensagens usado para a solicitação. Se você estiver usando a API do WhatsApp Business, sempre defina essa propriedade como "whatsapp".

`profile_picture_handle`

_string_

**Opcional.**

O nome de usuário da foto do perfil. Esse identificador é gerado quando você carrega o arquivo binário da foto do perfil na Meta usando a [API de Carregamento Retomável](/docs/graph-api/resumable-upload-api).

`vertical`

**Opcional.**

Categoria da empresa. Pode ser uma string vazia ou um dos valores aceitos abaixo. Esses valores correspondem às seguintes strings, que são exibidas no perfil empresarial no cliente do WhatsApp. Valores compatíveis:

-   `ALCOHOL` = Bebidas alcoólicas-   `APPAREL` = Roupas e acessórios-   `AUTO` = Automotivo-   `BEAUTY` = Beleza, spa e salão de beleza-   `EDU` = Educação-   `ENTERTAIN` = Entretenimento-   `EVENT_PLAN` = Serviços e planejamento de eventos-   `FINANCE` = Finanças e bancos-   `GOVT` = Serviços públicos-   `GROCERY` = Alimentação e mercearia-   `HEALTH` = Medicina e saúde-   `HOTEL` = Hotel e alojamento-   `NONPROFIT` = Organização sem fins lucrativos-   `ONLINE_GAMBLING` = Jogos de azar e apostas online-   `OTC_DRUGS` = Medicamentos de venda livre-   `OTHER` = Outros-   `PHYSICAL_GAMBLING` = Jogos de azar e apostas não online (estabelecimento físico)-   `PROF_SERVICES` = Serviços profissionais-   `RESTAURANT` = Restaurante-   `RETAIL` = Compras e varejo-   `TRAVEL` = Viagem e transporte

`websites`

_matriz de strings_

**Opcional.**

As URLs associadas à empresa. Por exemplo, um site, uma Página do Facebook ou uma conta do Instagram. É preciso incluir a parte `http://` ou `https://` da URL.

É compatível com dois sites no máximo, 256 caracteres cada.

### Exemplo de solicitação

```
curl -X POST \
  'https://graph.facebook.com/v24.0/1906385232743451/whatsapp_business_profile' \
  -H 'Authorization: Bearer EAAFl...' \
  -H 'Content-Type: application/json' \
  -d '{
    "messaging_product": "whatsapp",
    "about": "ABOUT",
    "address": "ADDRESS",
    "description": "DESCRIPTION",
    "vertical": "INDUSTRY",
    "email": "EMAIL",
    "websites": [
      "https://WEBSITE-1",
      "https://WEBSITE-2"
    ],
    "profile_picture_handle": "HANDLE_OF_PROFILE_PICTURE"
```

### Exemplo de resposta

```
{  "success": true}
```

## Excluir perfil comercial

Para excluir seu perfil empresarial, você deve [excluir seu número de telefone](/docs/whatsapp/phone-numbers#delete-phone-number-from-a-business-account).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)