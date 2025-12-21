<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data -->
<!-- Scraped: 2025-12-20T17:49:06.523Z -->

# As telas de preenchimento automático

Updated: 10 de nov de 2025

Você pode inserir informações sobre a empresa do seu cliente (como nome e endereço comercial) no Cadastro Incorporado. Isso permite que as telas sejam preenchidas automaticamente ou ignoradas, reduzindo a quantidade de informações e interações necessárias por parte dos seus clientes.

No exemplo abaixo, você pode ver a tela do portfólio empresarial preenchida com o nome da empresa, o endereço de email, o site, o país e um número de telefone comercial pré-verificado:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/465727373_1573223883300812_8312998736298536563_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=fu48N5EOdVMQ7kNvwGY39t4&_nc_oc=AdnXMCHl_2RHQbNiBFHVIijGcRmnU-TezTzp5m7nN-dvpPQq9DKaAGaZWtbLGeKBsr0&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=-C1X28-72bC6mSi6-5YZVA&oh=00_AflbUyx_apmnxne31sRoIm66Rh_5Z3DWqM1izBZywVqcvQ&oe=69612C47)

Recomendamos que você injete [dados do portfólio empresarial](#business-portfolio-data), um [número pré-verificado](#pre-verified-phone-numbers) e [dados de perfil do telefone](#phone-profile-data). A injeção desses dados melhora a experiência do seu cliente pelos seguintes motivos:

-   Preenche automaticamente toda a tela do portfólio empresarial.-   Ignora as telas de seleção e criação da conta do WhatsApp Business (WABA, pelas iniciais em inglês).-   Ignora as telas de seleção e verificação do número de telefone comercial.-   Define automaticamente as informações do perfil do número de telefone comercial no cliente do WhatsApp.

## Auxiliar de integração de Cadastro Incorporado.

O Auxiliar de integração do Cadastro Incorporado fornece uma maneira prática de criar cargas de dados preenchidos e testar o impacto no fluxo. Para acessar a ferramenta de carga:

-   Navegue até o **Painel de Apps** > **WhatsApp** > **Configurador de Cadastro Incorporado**.-   Encontre a seção **Configuração do Cadastro Incorporado**.-   Localize a linha **Preenchimento automático do Cadastro incorporado**.-   Clique no botão **Editar dados de preenchimento automático**.

## Injeção de dados

A função `FB.login`, que é chamada quando um cliente empresarial inicia o Cadastro Incorporado, aceita um objeto como argumento. Use a propriedade `extras.setup` desse objeto para injetar os dados:

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '<CONFIGURATION_ID>', // your configuration ID goes here
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {
        business: {
          // Business portfolio data goes here
        },
        preVerifiedPhone: {
          // Pre-verified phone number IDs go here
        },
        phone: {
          // Phone number profile data goes here
        },
        whatsAppBusinessAccount: {
          // WABA IDs go here
        }
      },
      featureType: '',
      sessionInfoVersion: '3',
    }
  });
}
```

### Dados do portfólio empresarial

Você pode inserir os seguintes detalhes na tela do portfólio empresarial:

-   Nome do portfólio empresarial-   Endereço de email do portfólio empresarial-   Site do portfólio empresarial-   País do portfólio empresarial (e detalhes adicionais do endereço)-   Número de telefone comercial

Outra opção é inserir _apenas a identificação de um portfólio empresarial existente_ para que as informações sejam automaticamente inseridas na tela. Isso pode ser útil se você quiser que um número de telefone pré-verificado seja associado ao portfólio empresarial existente do cliente.

A injeção de dados do portfólio empresarial preencherá automaticamente a tela e também fará com que o Cadastro Incorporado ignore as telas de seleção e criação da WABA.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/465818706_1256612865537779_5095106003564232822_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=vd0_AzFHYa4Q7kNvwGqOA_D&_nc_oc=AdkRGlmVsIf1i3Idr4fxNCo5FSN3bpp6pCfWRNWUZmpc4a7d5W-_BTWhg-Fo7zlh3PQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=-C1X28-72bC6mSi6-5YZVA&oh=00_AfkD8POFPfGZrW_Um0ttkYydIdicjCi6xZsd_1KD8t7hig&oe=69610D9A)

A injeção de dados do número de telefone comercial preencherá automaticamente a [tela de adição de número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen):

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/466044438_1065156355155603_6571589207868521084_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=mSfeyF54W1AQ7kNvwHQJumJ&_nc_oc=AdmtW7yA7oO43apktGQ3HnJg1nWhVmUJJW2SdYXTclSUt5POcbXRiHPPRSyKLDdArMk&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=-C1X28-72bC6mSi6-5YZVA&oh=00_AfnfV61yap0fuy8K_4Ly1s6xR-nTInJD1udzFVgshOpLJg&oe=69613750)

Mesmo se você injetar dados, o cliente empresarial ainda poderá fazer alterações usando o botão **Editar**.

Quando um cliente empresarial conclui o fluxo, as informações inseridas por você são usadas para criar o portfólio empresarial e a WABA.

#### Sintaxe do objeto "business"

```
setup: {
  business: {
    id: <BUSINESS_PORTFOLIO_ID>,
    name: '<BUSINESS_PORTFOLIO_NAME>',
    email: '<BUSINESS_PORTFOLIO_EMAIL_ADDRESS>',
    website: '<BUSINESS_PORTFOLIO_WEBSITE>',
    address: {
      streetAddress1: '<BUSINESS_PORTFOLIO_STREET_ADDRESS_LINE_1>',
      streetAddress2: '<BUSINESS_PORTFOLIO_STREET_ADDRESS_LINE_2>',
      city: '<BUSINESS_PORTFOLIO_CITY>',
      state: '<BUSINESS_PORTFOLIO_STATE>',
      zipPostal: '<BUSINESS_PORTFOLIO_ZIP_CODE>',
      country: '<BUSINESS_PORTFOLIO_COUNTRY>'
    },
    phone: {
      code: <BUSINESS_PORTFOLIO_COUNTRY_CALLING_CODE>,
      number: '<BUSINESS_PORTFOLIO_PHONE_NUMBER>'
    },
    timezone: '<BUSINESS_PORTFOLIO_TIME_ZONE>'
  }
}
```

#### Parâmetros do objeto "business"

  

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_PORTFOLIO_ID>`

_Número inteiro ou nulo_

**Será obrigatório se você estiver usando um portfólio empresarial existente. Caso contrário, defina como nulo ou omita o campo para criar um novo portfólio.**

Defina como a identificação do portfólio empresarial do cliente se desejar preencher automaticamente a tela com dados existentes ou se quiser associar um número de telefone pré-verificado a esse portfólio.

Caso seja definido como a identificação de um portfólio, verificaremos se o cliente empresarial é o proprietário do portfólio em questão.

Se o cliente for o proprietário, injetaremos os dados existentes no fluxo e ignoraremos todas as outras propriedades do objeto "business".

Caso contrário, injetaremos os valores `business.name`, `business.email`, `business.website` e `address.country` se **todos** tiverem sido definidos. Se **algum valor** não tiver sido definido, o fluxo exibirá a tela padrão do portfólio empresarial.

Defina como `null` (ou omita a propriedade `id`) se quiser criar um novo portfólio com base nos valores injetados `business.name`, `business.email`, `business.website` e `address.country`.

`2729063490586005`

`<BUSINESS_PORTFOLIO_NAME>`

_String_

**Será obrigatório se você estiver criando um novo portfólio empresarial.**

Nome do portfólio empresarial.

Se corresponder ao nome de um portfólio já criado e pertencente ao cliente empresarial, o portfólio existente será usado (trataremos como se você tivesse atribuído a identificação do portfólio existente à propriedade `id`).

Esse nome também será usado como o nome da conta do WhatsApp Business, que só fica visível no Gerenciador do WhatsApp.

Máximo de 100 caracteres.

`Wind & Wool`

`<BUSINESS_PORTFOLIO_EMAIL_ADDRESS>`

_String_

**Será obrigatório se você estiver criando um novo portfólio empresarial.**

Endereço de email da empresa.

Essa informação será exibida no painel **Meta Business Suite** > **Portfólio empresarial** > **Configurações** > **Informações da empresa**.

`support@windandwool.com`

`<BUSINESS_PORTFOLIO_COUNTRY_CALLING_CODE>`

_Número inteiro_

**Será obrigatório se você estiver injetando um número de telefone comercial.**

Número de telefone comercial com o código de chamada do país.

`1`

`<BUSINESS_PORTFOLIO_PHONE_NUMBER>`

_String_

**Será obrigatório se você estiver injetando um número de telefone comercial.**

Número de telefone comercial sem o código de chamada do país.

`6505559999`

`<BUSINESS_PORTFOLIO_WEBSITE>`

_String_

**Será obrigatório se você estiver criando um novo portfólio empresarial.**

URL do site da empresa.

Essa informação será exibida no painel **Meta Business Suite** > **Portfólio empresarial** > **Configurações** > **Informações da empresa**.

`https://windandwool.com/`

`<BUSINESS_PORTFOLIO_STREET_ADDRESS_LINE_1>`

_String_

A linha 1 do endereço comercial.

Essa informação será exibida no painel **Meta Business Suite** > **Portfólio empresarial** > **Configurações** > **Informações da empresa**.

`1 Hacker Way`

`<BUSINESS_PORTFOLIO_STREET_ADDRESS_LINE_2>`

_String_

A linha 2 do endereço comercial.

Essa informação será exibida no painel **Meta Business Suite** > **Portfólio empresarial** > **Configurações** > **Informações da empresa**.

`Suite 1`

`<BUSINESS_PORTFOLIO_CITY>`

_String_

Cidade da empresa.

Essa informação será exibida no painel **Meta Business Suite** > **Portfólio empresarial** > **Configurações** > **Informações da empresa**.

`Menlo Park`

`<BUSINESS_PORTFOLIO_STATE>`

_String_

Estado da empresa.

Essa informação será exibida no painel **Meta Business Suite** > **Portfólio empresarial** > **Configurações** > **Informações da empresa**.

`California`

`<BUSINESS_PORTFOLIO_ZIP_CODE>`

_String_

Código postal da empresa.

Essa informação será exibida no painel **Meta Business Suite** > **Portfólio empresarial** > **Configurações** > **Informações da empresa**.

`94025`

`<BUSINESS_PORTFOLIO_COUNTRY>`

_String_

**Será obrigatório se você estiver criando um novo portfólio empresarial.**

Endereço comercial [Código do país ISO 3166-1 alfa-2](https://l.facebook.com/l.php?u=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FISO_3166-1_alpha-2&h=AT3E99BT_50xJUnJ8nWFI8fp3Ec078mgmG9O04Dhs44Ih9aJVPKCq5axvRq2xoAnjDGX4ZzNSDAYVgkXenWJ4YRjutpgHU88NkM8faoC5StdvzSjocootrVN4xjKM4Kl7CWLpYWm-auHSCqloEb2ebYPXME).

`US`

`<BUSINESS_PORTFOLIO_TIME_ZONE>`

_String_

O fuso horário da empresa no formato [UTC com deslocamento](https://l.facebook.com/l.php?u=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FList_of_tz_database_time_zones&h=AT3E99BT_50xJUnJ8nWFI8fp3Ec078mgmG9O04Dhs44Ih9aJVPKCq5axvRq2xoAnjDGX4ZzNSDAYVgkXenWJ4YRjutpgHU88NkM8faoC5StdvzSjocootrVN4xjKM4Kl7CWLpYWm-auHSCqloEb2ebYPXME).

`UTC-07:00`

#### Exemplo de objeto "business"

```
setup: {
  business: {
    name: 'Wind & Wool',
    email: 'support@windandwool.com',
    website: 'https://windandwool.com/',
    address: {
      streetAddress1: '1 Hacker Way',
      streetAddress2: 'Suite 1',
      city: 'Menlo Park',
      state: 'California',
      zipPostal: '94025',
      country: 'US'
    },
    phone: {
      code: 1,
      number: '6505559999'
    },
    timezone: 'UTC-07:00'
  }
}
```

### Números de telefone pré-verificados

Você pode injetar um [número de telefone comercial pré-verificado](/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers) no Cadastro Incorporado. Dessa forma, as telas de [adição de número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen) e [verificação do número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-verification-screen) serão ignoradas.

Se você estiver injetando um número de telefone pré-verificado junto com dados do portfólio empresarial (seja ao criar um novo portfólio ou usar um existente), a [tela do portfólio empresarial](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-portfolio-screen) será preenchida automaticamente com o número pré-verificado:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/465901723_348914194949317_6482687639584528008_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=KUVwkTDt2U8Q7kNvwEZI52V&_nc_oc=AdnmZcjNFo1VL2K8bJWiS2k1u9CbKSS3w6-R9IjGvCpIOuBqonlEAM_jrmgMkXvJeAg&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=-C1X28-72bC6mSi6-5YZVA&oh=00_AflNw2H3VYdt6OkSkGuwI_kNettwnBBB1avEM93DC5p9kg&oe=69612DB2)

Caso você esteja injetando dados do portfólio empresarial junto com um ID de número pré-verificado, o número aparecerá na [tela de seleção da WABA](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-selection-screen):

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/465853311_1297615144933767_5353203651542728771_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=HuMeDb5cBY0Q7kNvwGUfNdR&_nc_oc=AdnVwQrFxxbeL1kDnLNMDK2u_oP4Tg_FCr91zOtM3JQoTjxrjzVdntet1BAXWEiAHkY&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=-C1X28-72bC6mSi6-5YZVA&oh=00_Aflv9HSvHLTbwaAsP8sxgsTyZqqt40If-7-E9X7NkSopTw&oe=69611011)

#### Sintaxe do objeto "PreVerifiedPhone"

```
setup: {
  preVerifiedPhone: {
    ids: [
      '<PRE-VERIFIED_PHONE_NUMBER_ID>'
    ]
  }
}
```

Substitua `<PRE-VERIFIED_PHONE_NUMBER_ID>` por uma identificação de número de telefone comercial único e pré-verificado.

Embora o valor `ids` aceite uma matriz de strings, se você incluir mais de um ID de número de telefone comercial pré-verificado, somente o primeiro ID na matriz aparecerá na tela de seleção da WABA.

#### Exemplo de objeto "preVerifiedPhone"

```
setup: {
  preVerifiedPhone: {
    ids: [
      '106540352242922'
    ]
  }
}
```

### Dados de perfil do telefone

Você pode inserir os seguintes dados de perfil do número de telefone. Estes dados não preenchem nenhuma tela do Cadastro Incorporado, mas completam o perfil do número de telefone comercial no cliente do WhatsApp, que fica visível para os usuários do app de mensagens.

-   Nome de exibição do perfil do número de telefone-   Categoria do número de telefone-   Descrição do número de telefone

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/466002126_2208553189514290_7696161917337366109_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=3hgM4uG3JfEQ7kNvwEL46SJ&_nc_oc=AdmUs9NfOxFz7FGCAhC5MyrfdT-iDtqneNGp3oi3-NMnFyhrUCjbXXQCrxgFobp2cFk&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=-C1X28-72bC6mSi6-5YZVA&oh=00_Afllrjbd_bT8wRF8IDdPj2RGXjBo9jrE75zEmXcQet2txQ&oe=6961259F)

Se você não incluir esses dados, a categoria será definida como **Outro**, e o cliente empresarial precisará definir ou editar os dados de perfil por conta própria.

Seus clientes podem fazer isso no [painel **Gerenciador do WhatsApp** > **Ferramentas da conta** > **Números de telefone**](https://business.facebook.com/latest/whatsapp_manager/phone_numbers/) selecionando o número de telefone comercial e acessando a aba **Perfil**. Você também pode fornecer uma maneira para que eles atualizem o perfil de modo programático usando o [ponto de extremidade POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER>/whatsapp\_business\_profile](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#Creating).

#### Sintaxe do objeto "phone"

```
setup: {
  phone: {
    displayName: '<PHONE_PROFILE_DISPLAY_NAME>',
    category: '<PHONE_PROFILE_DISPLAY_CATEGORY>',
    description: '<PHONE_PROFILE_DISPLAY_DESCRIPTION>'
  }
}
```

#### Parâmetros do objeto "phone"

  

Espaço reservado

Descrição

Valor de exemplo

`<PHONE_PROFILE_DISPLAY_NAME>`

_String_

**Obrigatório.**

Nome de exibição do perfil empresarial, visível para usuários do WhatsApp no ​​cliente do WhatsApp. Veja a captura de tela acima.

`Wind & Wool`

`<PHONE_PROFILE_DISPLAY_CATEGORY>`

_String_

**Obrigatório.**

Categoria de exibição do perfil empresarial.

Veja o campo de setor na referência do ponto de extremidade [GET /<WHATSAPP\_BUSINESS\_PHONE\_ID>/whatsapp\_business\_profile](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#fields) para conferir a lista de valores possíveis.

`APPAREL`

`<PHONE_PROFILE_DISPLAY_DESCRIPTION>`

_String_

**Obrigatório.**

Descrição do perfil do número de telefone comercial.

-   Máximo de 512 caracteres.-   Emojis renderizados são compatíveis, mas não os respectivos valores unicode. Os valores de emoji unicode deverão ser codificados com escape do Java ou JavaScript.-   Hiperlinks podem ser incluídos, mas não serão renderizados como links clicáveis.-   Não há compatibilidade com Markdown.

`Bespoke artisan apparel and lifestyle goods from upcoming designers.`

#### Exemplo de objeto "phone"

```
setup: {
  phone: {
    displayName: 'Wind & Wool',
    category: 'APPAREL',
    description: 'Bespoke artisan apparel and lifestyle goods from upcoming designers.'
  }
}
```

### Contas do WhatsApp Business

Se você estiver inserindo um número de telefone pré-verificado, também será possível incluir a identificação de uma WABA. Isso associará o número pré-verificado à WABA existente em vez de uma nova que o cliente empresarial seria solicitado a criar como parte do fluxo.

#### Sintaxe do objeto "WhatsAppBusinessAccount"

```
setup: {
  whatsAppBusinessAccount: {
    ids: '<WABA_ID>'
  }
}
```

Substitua `<WABA_ID>` por uma identificação única da conta do WhatsApp Business.

#### Exemplo de objeto "whatsAppBusinessAccount"

Este exemplo associa um número de telefone pré-verificado a uma WABA existente.

```
setup: {
  preVerifiedPhone: {
    ids: [
      '106540352242922'
    ]
  },
  whatsAppBusinessAccount: {
    id: [
      '432428883295692'
    ]
  }
}
```

## Exemplos

### Novo portfólio empresarial, número pré-verificado e perfil de exibição

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '31602279155865',
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {
        business: {
          name: 'Wind & Wool',
          email: 'support@windandwool.com',
          website: 'https://windandwool.com/',
          address: {
            streetAddress1: '1 Hacker Way',
            streetAddress2: 'Suite 1',
            city: 'Menlo Park',
            state: 'California',
            zipPostal: '94025',
            country: 'US'
          },
          phone: {
            code: 1,
            number: '6505559999'
          },
          timezone: 'UTC-07:00'
        },
        preVerifiedPhone: {
          ids: [
            '106540352242922'
          ]
        },
        phone: {
          displayName: 'Wind & Wool',
          category: 'APPAREL',
          description: 'Bespoke artisan apparel and lifestyle goods from upcoming designers.'
        }
      },
      featureType: '',
      sessionInfoVersion: '3',
    }
  });
}
```

### Portfólio empresarial existente, número pré-verificado e perfil de exibição

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '31602279155865',
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {
        business: {
          id: '2729063490586005'
        },
        preVerifiedPhone: {
          ids: [
            '106540352242922'
          ]
        },
        phone: {
          displayName: 'Wind & Wool',
          category: 'APPAREL',
          description: 'Bespoke artisan apparel and lifestyle goods from upcoming designers.'
        }
      },
      featureType: '',
      sessionInfoVersion: '3',
    }
  });
}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)