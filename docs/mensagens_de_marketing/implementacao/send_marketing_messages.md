<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages -->
<!-- Scraped: 2026-03-10T21:46:49.288Z -->

# Como enviar mensagens de marketing

Updated: 19 de fev de 2026

A API de Mensagens de Marketing para o WhatsApp (anteriormente conhecida como API de Mensagens de Marketing Lite) agora está disponível para todos.

Essa API só permite enviar mensagens de modelo de marketing. Para enviar outros tipos de mensagem ou receber mensagens, use a API de Nuvem em paralelo com a API de Mensagens de Marketing para o WhatsApp no mesmo número de telefone comercial.

Caso você use os portais de interface do usuário ou as APIs de um parceiro para configurar e enviar mensagens de marketing, será possível continuar fazendo isso sem precisar usar os recursos abaixo, já que seu parceiro fará a integração com as funções de envio de mensagens da API de MM para o WhatsApp em seu nome.

## Como criar modelos de marketing

Você pode criar modelos de marketing de várias maneiras:

-   Use a interface do Gerenciador do WhatsApp Business.-   Use o ponto de extremidade "Modelos de mensagem" da API de Gerenciamento do WhatsApp Business-   Caso você trabalhe com um parceiro, ele poderá oferecer APIs ou interfaces do usuário para a criação de modelos, que aproveitam o ponto de extremidade "Modelos de mensagem"

Consulte a documentação sobre como [criar e gerenciar modelos](/documentation/business-messaging/whatsapp/templates/overview).

Quando você cria um novo modelo de marketing, a sincronização com a conta de anúncios correspondente pode levar até 10 minutos. Essa sincronização otimiza as mensagens e permite a mensuração de cliques e conversões posteriores. Os modelos que ficarem inativos por mais de 7 dias também precisarão de 10 minutos para sincronização após o primeiro uso. Depois de criar um novo modelo de marketing, espere 10 minutos antes de enviar tráfego de marketing. O mesmo acontece após o envio da primeira mensagem de marketing em um modelo ocioso.

A API de Mensagens de Marketing para WhatsApp é compatível com todos os modelos de marketing. Além disso, a API de Mensagens de Marketing para o WhatsApp fornece os seguintes recursos adicionais que não estão disponíveis para modelos de marketing na API de Nuvem:

-   **Tempo de vida para mensagens de modelo de marketing:** se a Meta não conseguir entregar uma mensagem a um usuário do WhatsApp, novas tentativas de entrega serão feitas por um período conhecido como tempo de vida (TTL) ou período de validade da mensagem. O TTL é aplicado a mensagens que usam modelos de autenticação e utilidade na API de Nuvem. No entanto, para mensagens que usam modelos de marketing, esse recurso está disponível somente na API de MM para o WhatsApp. Para saber mais sobre a definição de TTLs em mensagens de modelo de marketing, consulte a documentação sobre [como criar e gerenciar modelos via API](/documentation/business-messaging/whatsapp/templates/overview#time-to-live--ttl---customization--defaults--min-max-values--and-compatibility) ou [como definir um período de validade de mensagem personalizado via interface do usuário⁠](https://www.facebook.com/business/help/1305007343713790).

## Otimizações automáticas de criativos

No momento, as otimizações automáticas de criativos estão disponíveis apenas para empresas que participam do programa de acesso antecipado. A Meta disponibilizará essa opção a todas as empresas em uma data futura.

As otimizações automáticas de criativos melhoram o apelo visual e o engajamento das mensagens de modelos de marketing. Esse recurso não é previsível, ou seja, a saída pode ser diferente para mensagens com a mesma entrada.

O recurso testa pequenas variações do seu cabeçalho de imagem, com diferentes orientações de corte ou filtros de cor, e seleciona automaticamente a variante que gera a maior taxa de cliques ao longo do tempo, sem que você precise fazer nenhuma intervenção. Esses aprimoramentos de criativos foram desenvolvidos para ajudar a melhorar o desempenho e o apelo visual das mensagens de marketing, ao mesmo tempo em que preservam a fidelidade da mensagem. As otimizações mencionadas são semelhantes ao [criativo Advantage+⁠](https://www.facebook.com/business/help/297506218282224?id=649869995454285).

### Corte de imagem

Em algumas campanhas, a Meta corta de modo automático as imagens de cabeçalho para uma dimensão ideal, garantindo que seus recursos visuais estejam sempre perfeitamente enquadrados, sem cortar o texto da imagem:

![Example of automatic image cropping optimization](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/490288529_1839136930195624_7868580583654703557_n.png?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=fC7R-umF6HgQ7kNvwHS6lF3&_nc_oc=Adl8D-cEyc1zFsic1aa4rmO4mLeq0Q-AYvQjlQQNO0YkhnRy4rKea3C_ZuZ3YmtZ6yM&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_Afx9l6olz8goApZZ3AyLq-2x7Nk6iCCEhFwGSB4_4AEG_A&oe=69CACFA5)

### Filtragem de imagem

Em algumas campanhas, a Meta aplica automaticamente os filtros mais eficazes às imagens de cabeçalho para melhorar a qualidade e o apelo visual:

![Example of automatic image filtering optimization](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/490148881_649567434578657_6531913133400572045_n.png?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=gsguS_lFlRkQ7kNvwF2mXQr&_nc_oc=AdmAF7NuzvZpd_8t1kPlSB-5qEu4JS2RHern_fddq9E6rKd-WRxgDk-ScRMMPM2dJGY&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_AfzERIbn2Rvl1gVgYdoPNvKqRb02O-QFtKaKUNymCDJEcQ&oe=69CAB85E)

### Sobreposições de texto

Em algumas campanhas, adicionaremos automaticamente uma sobreposição de texto à sua imagem usando o conteúdo da mensagem:

![Example of text overlay on marketing message image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/510250002_997759808891598_7747444436127893252_n.png?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=-De2tttPYrUQ7kNvwF34pnC&_nc_oc=AdkO5uTIRBahNextLTm1uov5Eongd1G_OiFufHcjOkRomjJkyAVaA1ylLInRBZ8DYH8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_AfwIro3wm-TqYJgShQc8HTslK4uMr4SaWmGQpIxmcwLHLA&oe=69CABAA5)

### Animação de imagem

Em algumas campanhas, transformaremos automaticamente sua imagem de cabeçalho em um GIF animado:

![Before image animation example](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/499208944_582725901558956_3362739552469670606_n.png?stp=dst-webp&_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=mNXVyvKZwmYQ7kNvwFCPHBl&_nc_oc=AdkleajreXIt8SM_SaGunBCbYGng80bxz5HxGCQkhjVl48q9ubz_65ytCRH04ikunEM&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_Afz_ft58pos-rS-Bo-_DuE_ZWsO9bKp5NkIbFzm2F4pnpA&oe=69CAE1BD)

![After image animation example showing animated GIF](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/512706297_1012568737452141_3654535789190862417_n.gif?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=ytSm9QJ4HjEQ7kNvwGAeN6_&_nc_oc=AdmSR8ICHqsiY-OYnYjZuOSjglokET5ujCJDjgWh3rNxkdD_Hbz6k-T2tZfj1HLOZnM&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_AfwH-YQd-SMHZaP5NSk-XHiKWLm9iXRa_7rwKLHCPgbkPA&oe=69CAEEDC)

### Geração de plano de fundo da imagem

Para algumas campanhas, a Meta gera automaticamente um novo plano de fundo de imagem:

![Example of automatic image background generation](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/529481192_1905147433612259_8373917617145368846_n.png?stp=dst-webp&_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=tqJ_ANHqyqsQ7kNvwG68tyW&_nc_oc=AdnBZCljBa9TRI8p_KhsmhD5AoU2WI6x7Zgka7mMdSLmrAsMZtOfGuX7RlfsVXJ3o2s&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_AfwuDwURR0akIT2OJCgztl7NbB0HaG7eiaFBtI7dNMo04A&oe=69CAB907)

### Tag de promoção automática

Para algumas campanhas, a Meta extrairá automaticamente a tag de promoção (como "30% off", "50% de desconto", "Frete grátis") das mensagens para criar uma tag de promoção e colocá-la na imagem para destacar informações promocionais.

![Example of auto promotion tag](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/637942395_939879988503659_167364162728640941_n.png?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=9DCmNnEvj9IQ7kNvwH8it4G&_nc_oc=AdlPm7-kNgjek31uIcOkjetvL8HqumhMrUx1b8XDVXe79HDL3005cmS1Ehv_ahkbi0s&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_AfwNlHUfbtXA25fwfHHkEO2LFK0fqygIWf1dqT-xsAZeIw&oe=69CAC79A)

### Extração do título

Em algumas campanhas, a Meta vai extrair palavras-chave ou frases da sua mensagem para criar um título para o texto do corpo, buscando destacar informações importantes.

![Example of headline extraction from message content](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/568356332_1741218023258733_764318396409509397_n.png?stp=dst-webp&_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=HpAldi0hBosQ7kNvwG9aU8j&_nc_oc=Adkz9xf7ETZhzSPJWoyrSQM5dfMSAdPNLNkOCLTCyrsw2YJIooQsuTaMRYi4kuDxqPs&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_AfxAmW5Z6xo2W7NWWk8B_O-ZUpk7mX0e7WXf3sDui7bWdw&oe=69CAE1F3)

### Extração de título para área de toque

Em algumas campanhas, a Meta vai extrair palavras-chave ou frases da sua mensagem para criar um título para a área de toque, buscando destacar informações importantes.

![Example of tap-target title extraction](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565927808_1275784957569302_5821755358925562973_n.png?stp=dst-webp&_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=WYvkLvOXIIsQ7kNvwFDwsGl&_nc_oc=AdlcWa61rjQqcBhNF2mc_q1IubBV8ko_TwCIQg4UpCmdd3E62SoYyqTtn7m2GRZVcJQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_AfyrpMHd6aFuX25QSrx-YtjA0ZDAXzZG9dFPmUTc-3cLQw&oe=69CAD43F)

### Extensões de produto

Em algumas campanhas, a Meta adiciona automaticamente um conjunto de produtos do catálogo adicionais com probabilidade de engajamento ou conversão dos usuários.

![Example of product extensions with catalog items](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/571739475_802429889249611_5730968219809248185_n.png?stp=dst-webp&_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=EspZg4x1pAwQ7kNvwHffewz&_nc_oc=AdmApD125XDSTiGiPaE4j4WJStI6lNUDEeNiyqQOlsRiOMEreBjpnZcD2jW8a8ZwQIs&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_AfxSQfJVkgPQi7SChKWbLTMxVSVNkPOJUjG2ngs1sb2BTg&oe=69CAE3A4)

### Formatação de texto

Em algumas campanhas, a Meta atualiza a formatação do texto (por exemplo, removemos espaços desnecessários e frases em negrito) para melhorar o desempenho. O conteúdo do texto não é alterado, apenas o formato.

![Example of text formatting optimization](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/571559956_1527237245143422_4708127400362964555_n.png?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=3fpH4gDveZ8Q7kNvwGSrXXx&_nc_oc=AdmKHLXOg2AtKviM7zt7ip_560lQJeLG6RpNtUGieZOR9DAL_-_f_PeD_4Lr8JBx7l0&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=DxC22_bT5qe_M1UEnZF13w&_nc_ss=8&oh=00_Afym4q5Aqv2iwO_d_riPGx4s0bgrmhQfOffwIHEk7DL5HA&oe=69CAD5F4)

### Configurar otimizações automáticas de criativos (nível do modelo)

Todos os recursos de otimização são habilitados por padrão, mas você pode usar o objeto `creative_features_spec` para especificar quais otimizações ativar ou desativar em um determinado modelo. Para isso, defina a propriedade `enroll_status` de cada otimização como `OPT_IN` ou `OPT_OUT` ao criar um novo modelo ou editar um existente.

### Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) para configurar otimizações de criativos automáticas no nível do modelo.

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
{
  "name": "<TEMPLATE_NAME>",
  "language": "<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>",
  "components": [<TEMPLATE_COMPONENTS>],
  "degrees_of_freedom_spec": {
    "creative_features_spec": {
      "image_brightness_and_contrast": {
        "enroll_status": "OPT_OUT"
      },
      "image_touchups": {
        "enroll_status": "OPT_IN"
      },
      "add_text_overlay": {
        "enroll_status": "OPT_OUT"
      },
      "image_animation": {
        "enroll_status": "OPT_IN"
      },
      "image_background_gen": {
        "enroll_status": "OPT_IN"
      },
      "auto_promotion_tag": {
        "enroll_status": "OPT_IN"
      },
     "text_extraction_for_headline": {
       "enroll_status": "OPT_IN"
     },
     "text_extraction_for_tap_target": {
       "enroll_status": "OPT_IN"
     },
      "product_extensions": {
        "enroll_status": "OPT_OUT"
      },
      "text_formatting_optimization": {
        "enroll_status": "OPT_OUT"
      }
    }
  }
}
```

Use o ponto de extremidade [GET /<TEMPLATE\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) para recuperar os status de otimizações automáticas de criativos em nível de modelo.

### Sintaxe da solicitação

```
GET /<TEMPLATE_ID>?fields=degrees_of_freedom_spec
```

### Exemplo de resposta

```
{  "degrees_of_freedom_spec": {    "creative_features_spec": [      {        "key": "IMAGE_BRIGHTNESS_AND_CONTRAST",        "value": { "enroll_status": "OPT_OUT" }      },      {        "key": "IMAGE_TOUCHUPS",        "value": { "enroll_status": "OPT_OUT" }      },      {        "key": "ADD_TEXT_OVERLAY",        "value": { "enroll_status": "OPT_IN" }      },      {        "key": "IMAGE_ANIMATION",        "value": { "enroll_status": "OPT_OUT" }      },      {        "key": "IMAGE_BACKGROUND_GEN",        "value": { "enroll_status": "OPT_OUT" }      },      {        "key": "AUTO_PROMOTION_TAG",        "value": { "enroll_status": "OPT_OUT" }      },      {        "key": "TEXT_EXTRACTION_FOR_HEADLINE",        "value": { "enroll_status": "OPT_OUT" }      },      {        "key": "TEXT_EXTRACTION_FOR_TAP_TARGET",        "value": { "enroll_status": "OPT_OUT" }      },      {        "key": "PRODUCT_EXTENSIONS",        "value": { "enroll_status": "OPT_IN" }      },      {        "key": "TEXT_FORMATTING_OPTIMIZATION",        "value": { "enroll_status": "OPT_IN" }      }    ]  },  "id": "123456789"}
```

### Configurar otimizações automáticas de criativos (nível da conta do WhatsApp Business)

Todos os recursos de otimização são habilitados por padrão, mas você pode usar o objeto creative\_features\_spec para especificar quais otimizações deseja ativar ou desativar para a conta inteira do WhatsApp Business. Para isso, defina a propriedade enroll\_status de cada otimização que você quer modificar como OPT\_IN ou OPT\_OUT.

### Sintaxe da solicitação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) para configurar otimizações automáticas de criativos no nível da conta do WhatsApp Business.

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>
{
  "degrees_of_freedom_spec": {
    "creative_features_spec": {
      "image_touchups": {
        "enroll_status": "OPT_IN"
      },
      "image_animation": {
        "enroll_status": "OPT_IN"
      },
      "image_brightness_and_contrast": {
        "enroll_status": "OPT_IN"
      },
      "add_text_overlay": {
        "enroll_status": "OPT_IN"
      },
      "image_background_gen": {
        "enroll_status": "OPT_IN"
      },
      "auto_promotion_tag": {
        "enroll_status": "OPT_IN"
      },
      "text_extraction_for_headline": {
        "enroll_status": "OPT_IN"
      },
      "product_extensions": {
        "enroll_status": "OPT_IN"
      },
      "text_extraction_for_tap_target": {
        "enroll_status": "OPT_IN"
      },
      "text_formatting_optimization": {
        "enroll_status": "OPT_OUT"
      }
    }
  }
}
```

### Sintaxe da solicitação

Use o ponto de extremidade [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) para recuperar os status de otimizações automáticas de criativos no nível da conta do WhatsApp Business.

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=degrees_of_freedom_spec
```

### Exemplo de resposta

```
{  "degrees_of_freedom_spec": {    "data": [      {        "creative_features_spec": [          {            "image_brightness_and_contrast": "OPT_IN",            "image_touchups": "OPT_IN",            "add_text_overlay": "OPT_IN",            "image_animation": "OPT_IN",            "image_background_gen": "OPT_IN",            "auto_promotion_tag": "OPT_IN",            "text_extraction_for_headline": "OPT_IN",            "product_extensions": "OPT_IN",            "text_extraction_for_tap_target": "OPT_IN",            "text_formatting_optimization": "OPT_IN"          }        ]      }    ]  },  "id": "1234567890"}
```

## Outras otimizações

### Truncamento de texto

A Meta truncará o texto em um número de linhas específico para melhorar o desempenho. Nenhum contexto do texto é alterado e o texto original ainda pode ser acessado por meio do botão "Ler mais". As regras exatas para truncamento de número de linhas são as seguintes:

-   **Mensagens sem CTA, mas com um link no corpo** (substitui as regras abaixo): truncadas em 5 linhas-   **Mensagens com cabeçalho de mídia** ([Imagem](/documentation/business-messaging/whatsapp/messages/image-messages), [Vídeo](/documentation/business-messaging/whatsapp/messages/video-messages), [Documento](/documentation/business-messaging/whatsapp/messages/document-messages), [Localização](/documentation/business-messaging/whatsapp/messages/template-messages#location) e [GIF](/documentation/business-messaging/whatsapp/templates/components#media-header)): truncadas em 3 linhas-   **Mensagens sem cabeçalho** (ou seja, [SMS](/documentation/business-messaging/whatsapp/messages/template-messages#text-based)): truncadas em 4 linhas

## Como enviar mensagens de modelo de marketing

O envio de mensagens segue a mesma sintaxe de carga da API usada para enviar mensagens na API de Nuvem e exige as mesmas permissões.

O ponto de extremidade `/marketing_messages` aceita **apenas** mensagens de modelo de marketing para a API de MM para o WhatsApp e a API de Nuvem. Todos os outros tipos de mensagem (formato livre, autenticação, serviço, utilidade) não são aceitos e resultarão em erro.

As mensagens de marketing só serão enviadas pela API de MM para o WhatsApp quando o cliente empresarial tiver atendido a todos os [requisitos de integração](/docs/whatsapp/marketing-messages-lite-api/onboarding). Se os requisitos de integração não forem atendidos, as mensagens de marketing ainda serão encaminhadas pela API de Nuvem. Para desabilitar a opção de direcionar para a API de Nuvem, defina o campo opcional `product_policy` como "strict".

Observação: você ainda poderá usar o ponto de extremidade `/messages` para enviar mensagens de marketing usando a API de Nuvem.

Ponto de extremidade

Autenticação

`/PHONE_NUMBER_ID/marketing_messages`

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado no **Painel de Apps > WhatsApp > Configuração da API**.

Caso você seja um provedor de serviços de mensagens comerciais, faça a autenticação usando um token de acesso com a permissão `whatsapp_business_messaging`.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/marketing_messages
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "<MESSAGE_TYPE>",
  "<MESSAGE_TYPE>": {
    <MESSAGE_CONTENTS>
  },
  <!-- Optional -->
  "product_policy": "<PRODUCT_POLICY>",
  "message_activity_sharing": <SHARE_MESSAGING_ACTIVITY?>
}
```

A API de MM para o WhatsApp oferece os recursos adicionais a seguir que não estão disponíveis para mensagens de modelo de marketing na API de Nuvem:

-   **Política de fallback de produto:** defina `product_policy` como `CLOUD_API_FALLBACK` para que a API envie a mensagem pela API de Nuvem se os [requisitos de integração](/docs/whatsapp/marketing-messages-lite-api/onboarding) não tiverem sido atendidos. Defina como `STRICT` se não quiser que a API envie a mensagem pela API de Nuvem como fallback.
    -   **Compartilhamento de atividades de mensagens:**`message_activity_sharing` é um parâmetro opcional no nível da mensagem que ativa ou desativa o compartilhamento de atividades de mensagens com a Meta (por exemplo, leitura da mensagem) para ajudar a otimizar as mensagens de marketing. Se o parâmetro não for fornecido, será aplicada a configuração padrão no nível da conta do WhatsApp Business. Sempre que quiser, você pode editar sua configuração padrão nas configurações do negócio (consulte o registro de alterações para encontrar uma captura de tela).
    

Para saber mais, leia a documentação da API de Nuvem sobre [tipos de mensagem](/documentation/business-messaging/whatsapp/messages/send-messages#message-types), já que a API de MM para o WhatsApp usa a mesma formatação de envio.

## Como receber webhooks de status da mensagem

A API de MM para o WhatsApp dispara webhooks de status da [mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) (enviada, entregue, lida). Além disso, esses webhooks que descrevem a mensagem enviada pela API de MM para o WhatsApp e incluem informações de preços terão `pricing.category` e `conversation.type` definidos como `marketing_lite`. Se a mensagem for direcionada pela API de Nuvem, `pricing.category` será definido como `marketing`.

```
{
  "conversation": {
    "id": "<CONVERSATION_ID>",
    "origin": {
      "type": "marketing_lite"
    }
  },
  "pricing": {
    "billable": true,
    "pricing_model": "PMP",
    "category": "marketing_lite"
  }
}
```

Mantenha registros dos IDs de cada mensagem enviada, bem como de qual API foi utilizada para o envio (Nuvem ou MM). Assim, será possível usar o ID único da mensagem, retornado nos webhooks de status, para identificar a origem da mensagem enviada.

## Como receber mensagens

A MM para o WhatsApp é uma API apenas de envio. Ela não processa mensagens recebidas de consumidores. Para receber mensagens em um número de telefone comercial, use a API de Nuvem em paralelo com a API de MM para WhatsApp no mesmo número.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)