<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages -->
<!-- Scraped: 2026-01-24T00:38:11.940Z -->

# Como enviar mensagens

Updated: 3 de dez de 2025

A API de Mensagens de Marketing para o WhatsApp (anteriormente conhecida como API de Mensagens de Marketing Lite) agora está disponível para todos.

Essa API só permite enviar mensagens de modelo de marketing. Para enviar outros tipos e também receber mensagens, você pode usar a API de Nuvem em paralelo com a API de Mensagens de Marketing no mesmo número de telefone comercial.

Caso você use os portais de interface do usuário ou as APIs de um parceiro para configurar e enviar mensagens de marketing, será possível continuar fazendo isso sem precisar usar os recursos abaixo, já que seu parceiro fará a integração com as funções de envio de mensagens da API de MM para o WhatsApp em seu nome.

## Como criar modelos de marketing

Você pode criar modelos de marketing de várias maneiras:

-   Use a interface do Gerenciador do WhatsApp Business.-   Use o ponto de extremidade "Modelos de mensagem" da API de Gerenciamento do WhatsApp Business.-   Caso você trabalhe com um parceiro, ele poderá oferecer APIs ou interfaces próprias para a criação de modelos, que aproveitam o ponto de extremidade "Modelos de mensagem".

Consulte a documentação sobre como [criar e gerenciar modelos](/documentation/business-messaging/whatsapp/templates/overview).

Após a criação de um modelo de marketing, levará até dez minutos para que ele seja sincronizado com a conta de anúncios correspondente, o que permitirá a otimização das mensagens e a mensuração de conversões e cliques. Os modelos que ficarem inativos por mais de sete dias também precisarão de 10 minutos para sincronizar após o novo uso. Após criar novos modelos de marketing (ou enviar a primeira mensagem de marketing em um modelo inativo), aguarde 10 minutos antes de iniciar o envio de tráfego de marketing.

A API de Mensagens de Marketing para o WhatsApp é compatível com todos os modelos de marketing. Além disso, essa API fornece os seguintes recursos adicionais que não estão disponíveis para modelos de marketing na API de Nuvem:

-   **Tempo de vida para mensagens de modelo de marketing:** se não conseguirmos entregar uma mensagem a um usuário do WhatsApp, faremos novas tentativas de entrega por um período conhecido como tempo de vida (TTL, pelas iniciais em inglês) ou período de validade da mensagem. O TTL é aplicado a mensagens que usam modelos de autenticação e utilidade na API de Nuvem. No entanto, para mensagens que usam modelos de marketing, esse recurso está disponível somente na API de MM para o WhatsApp. Para saber mais sobre a definição de TTLs em mensagens de modelo de marketing, consulte a documentação sobre [como criar e gerenciar modelos via API](/documentation/business-messaging/whatsapp/templates/overview#time-to-live--ttl---customization--defaults--min-max-values--and-compatibility) ou [como definir um período de validade de mensagem personalizado via interface do usuário](https://www.facebook.com/business/help/1305007343713790).

## Otimizações automáticas de criativos

No momento, as otimizações automáticas de criativos estão disponíveis apenas para empresas que participam do programa de acesso antecipado. Isso será disponibilizado a todas as empresas em uma data futura.

As otimizações automáticas de criativos melhoram o apelo visual e o engajamento das mensagens de modelos de marketing. Esse recurso não é previsível, ou seja, a saída pode ser diferente para mensagens com a mesma entrada.

O recurso testa pequenas variações do seu cabeçalho de imagem, com diferentes orientações de corte ou filtros de cor, e seleciona automaticamente a variante que gera a maior taxa de cliques ao longo do tempo, sem que você precise fazer nenhuma intervenção. Esses aprimoramentos de criativos foram desenvolvidos para ajudar a melhorar o desempenho e o apelo visual das mensagens de marketing, ao mesmo tempo em que preservam a fidelidade da mensagem. As otimizações mencionadas são semelhantes ao [criativo Advantage+](https://www.facebook.com/business/help/297506218282224?id=649869995454285).

### Corte de imagem

Em algumas campanhas, cortaremos de modo automático as imagens de cabeçalho para uma dimensão ideal, garantindo que seus recursos visuais estejam sempre perfeitamente enquadrados, sem cortar o texto da imagem:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/490288529_1839136930195624_7868580583654703557_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=CU5c7KKok7QQ7kNvwG9fJ-o&_nc_oc=AdmYjQ9FIRGJ2IFHaTdVFqeSvdddYiIn2bXVR7-eaPXRVxGMqxPKLNnXTLeWHSy2Qkc&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_AfqJ-EMhh_E6e9ElYfCCwlco5JblW47_QWxmbn_n0wYnGA&oe=698E62E5)

### Filtragem de imagens

Em algumas campanhas, aplicaremos automaticamente os filtros mais eficazes às imagens de cabeçalho para melhorar a qualidade e o apelo visual:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/490148881_649567434578657_6531913133400572045_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=z2TcI5sKdZ8Q7kNvwHa5hmF&_nc_oc=AdnWBz6gD7VgclMl7CgnGyr2A1QvheDWGHmuv_eeI4S_L97TlUCYVilk5EUnos5FycU&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_AfrVFXIs8VizZVVgn8pzeNU-ed01bXJWLscHnjZimLsnXg&oe=698E4B9E)

As otimizações automáticas de criativos são executadas de forma silenciosa em todos os cabeçalhos de imagem enviados via API de MM para o WhatsApp e funcionam para selecionar a imagem de cabeçalho com maior apelo visual e taxa de cliques. É possível desabilitar o recurso via API de Modelos de Mensagem, garantindo às empresas flexibilidade e controle sobre a aplicação dos aprimoramentos de criativos. Veja a chamada da solicitação de API abaixo para saber mais.

### Sobreposições de texto

Em algumas campanhas, adicionaremos automaticamente uma sobreposição de texto à sua imagem usando o conteúdo da mensagem:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/510250002_997759808891598_7747444436127893252_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=vDQDJ9ibEoEQ7kNvwGAVGHS&_nc_oc=Adl8H5GkrQmQdwNKbQSLEXosTT2ObK8oT-8NMVzkY6cE_vE8ne0XGwjl6XV0O4zsj6s&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_AfpYFwr3_n0tJQhK9qeg-Ne0GuFmCnRdKdzmr7hyA1ocqg&oe=698E4DE5)

### Animação de imagem

Em algumas campanhas, transformaremos automaticamente sua imagem de cabeçalho em um GIF animado:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/499208944_582725901558956_3362739552469670606_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=tvUOVFyofAoQ7kNvwEp8lyn&_nc_oc=Adnf3DrHvgAph4BfiUXPtej4x3tzjeNbP1TrXc91-aiXAKRvuVJm4H3qx-Dkc1hCRAI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_AfoTJXmPk59RyR0MVbdtsK3bH9VgbFUg4YwNE-pIRPqbXA&oe=698E3CBD)

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/512706297_1012568737452141_3654535789190862417_n.gif?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=z6W-VtEpj6IQ7kNvwGRkvdF&_nc_oc=AdnlSTVYz6Raj6lOynWWiHe9RnBnwrLSnQXtObz5HfYtsdyqiNcDUjkbf_3cjnBvGms&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_Afq88HuZLFabDB_1OrAgO0zwBXdmDnmqjZbqgj-W2roIog&oe=698E49DC)

### Geração de plano de fundo da imagem

Em algumas campanhas, geraremos automaticamente um novo plano de fundo para a imagem:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/529481192_1905147433612259_8373917617145368846_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=usfluoXoH9MQ7kNvwEic5L9&_nc_oc=AdmXljB5pIDFfk8Bi7f8CZXYE6H8FSQpmxD94sjnotBP4AoUqRKyBKLeMS6Aivf7gSY&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_Afp_XZm4SKpZ0DVfaD6hT2DujzJSYEuZID6hF_k_CloSSw&oe=698E4C47)

### Extração de título

Em algumas campanhas, extrairemos palavras-chave ou frases da sua mensagem para criar um título para o texto do corpo, buscando destacar informações importantes.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/568356332_1741218023258733_764318396409509397_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=YBtHfWeYY1IQ7kNvwFiwSdU&_nc_oc=AdnFCZxPptUz0Eg-1nx0Lp0D_srJ6GRlF8rjnPT7_59b3D1ZaucSXLtW5Wziz9haFd4&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_AfoTYWX53dKSBqThnXbgaqQIJWNL_c2U6YJKZBnYUENe5Q&oe=698E3CF3)

### Extração de título para área de toque

Em algumas campanhas, extrairemos palavras-chave ou frases da sua mensagem para criar um título para a área de toque, buscando destacar informações importantes.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565927808_1275784957569302_5821755358925562973_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9Rv-DRd8_PgQ7kNvwGTdARi&_nc_oc=Adk-M7gCLGOPDmuQQqRr1w8mS9FOJpPQhZorHja4ixffnLhkbixnj1m_tkN0FPdcfpk&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_AfqFue3BI9PQSwUgNt_yVQntaXRFyQ2YbOE3hATZM31PdA&oe=698E677F)

### Extensões de produto

Aprimoraremos os criativos de imagem única anexando um conjunto de produtos adicionais do catálogo com os quais os usuários provavelmente interagirão ou converterão, criando experiências mais personalizadas e relevantes.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/571739475_802429889249611_5730968219809248185_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=oaM5Rhvb1XwQ7kNvwEXHBU4&_nc_oc=AdnQhHcwv5f3SCBTxHpzuU8jmn5bXb9Lu0xGKLY-OqucNzWkxFbSWsPF0z-H4RWLCsc&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_Afqm41sXNTZrSrrtywinZaVTYgETlhsBB50_DgWhPWo_5w&oe=698E3EA4)

### Formatação de texto

Em algumas campanhas, atualizamos a formatação do texto (por exemplo, removemos espaços desnecessários e frases em negrito) para melhorar o desempenho. O conteúdo do texto não é alterado, apenas o formato.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/571559956_1527237245143422_4708127400362964555_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=piCa-rBvft0Q7kNvwHob_Vc&_nc_oc=Adn7dIZSXmL3im_c4vFM5MNlJUWCBN01kQG2eNzmCiMo8sE6w5Tlz2g9DLKQALEWxGQ&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7u6hx-c-lcAVtCC0-KxVvg&oh=00_Afp-_kp0M9wYgBcRKlZ9VQJv-vHYPsdZPSERcHCW01kNBQ&oe=698E6934)

### Configurar otimizações automáticas de criativos (nível do modelo)

Todos os recursos de otimização são habilitados por padrão, mas você pode usar o objeto `creative_features_spec` para especificar quais otimizações ativar ou desativar em um determinado modelo. Para isso, defina a propriedade `enroll_status` de cada otimização como `OPT_IN` ou `OPT_OUT` ao criar um novo modelo ou editar um existente. Por exemplo:

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

### Configurar otimizações automáticas de criativos (nível da conta do WhatsApp Business)

Todos os recursos de otimização são habilitados por padrão, mas você pode usar o objeto creative\_features\_spec para especificar quais otimizações ativar ou desativar para a conta inteira do WhatsApp Business. Para isso, defina a propriedade enroll\_status de cada otimização que você quer modificar como OPT\_IN ou OPT\_OUT. Por exemplo:

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

## Outras otimizações

### Truncamento de texto

Truncaremos o texto em um número de linha específico para aumentar o desempenho. Nenhum contexto do texto é alterado, e o texto original ainda pode ser acessado por meio do botão "Ler mais". As regras exatas para truncamento de número de linhas são as seguintes:

-   **Mensagens sem CTA, mas com um link no corpo** (substitui as regras abaixo): truncadas em 5 linhas-   **Mensagens com cabeçalho de mídia** ([Imagem](/documentation/business-messaging/whatsapp/messages/image-messages), [Vídeo](/documentation/business-messaging/whatsapp/messages/video-messages), [Documento](/documentation/business-messaging/whatsapp/messages/document-messages), [Localização](/documentation/business-messaging/whatsapp/messages/template-messages#location) e [GIF](/documentation/business-messaging/whatsapp/templates/components#media-header)): truncadas em 3 linhas-   **Mensagens sem cabeçalho** (ou seja, [mensagens de texto](/documentation/business-messaging/whatsapp/messages/template-messages#text-based)): truncadas em 4 linhas

## Como enviar mensagens de modelo de marketing

A API de Mensagens de Marketing para o WhatsApp não é compatível com empresas de MSC. As solicitações `/marketing_messages` serão encaminhadas pela API de Nuvem ou rejeitadas se o campo `product_policy` estiver definido como strict.

O envio de mensagens segue a mesma sintaxe de carga da API usada para enviar mensagens na API de Nuvem e exige as mesmas permissões.

O ponto de extremidade `/marketing_messages` aceita **apenas** mensagens de modelo de marketing para a API de MM para o WhatsApp e a API de Nuvem. Todos os outros tipos de mensagem (formato livre, autenticação, serviço, utilidade) não são aceitos e resultarão em erro.

As mensagens de marketing só serão enviadas pela API de MM para o WhatsApp quando o cliente empresarial tiver atendido a todos os [requisitos de integração](/docs/whatsapp/marketing-messages-lite-api/onboarding). Se os requisitos de integração não forem atendidos, as mensagens de marketing ainda serão encaminhadas pela API de Nuvem. Para desabilitar a opção de direcionar para a API de Nuvem, defina o campo opcional `product_policy` como "strict".

Observação: você ainda poderá usar o ponto de extremidade `/messages` para enviar mensagens de marketing usando a API de Nuvem.

Ponto de extremidade

Autenticação

`/PHONE_NUMBER_ID/marketing_messages`

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado no **Painel de Apps > WhatsApp > Configuração da API**.

Os parceiros de troca de mensagens empresariais precisam se autenticar usando um token de acesso com a permissão `whatsapp_business_messaging`.

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

Recomendamos que você mantenha registros dos IDs de cada mensagem enviada, bem como de qual API foi utilizada para o envio (Nuvem ou MM). Assim, será possível usar o ID único da mensagem, retornado nos webhooks de status, para identificar a origem da mensagem enviada.

## Como receber mensagens

A MM para o WhatsApp é uma API apenas de envio. Ela não processa mensagens recebidas de consumidores. Para receber mensagens em um número de telefone comercial, use a API de Nuvem em paralelo com a API de MM para WhatsApp no mesmo número.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)