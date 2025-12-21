<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages -->
<!-- Scraped: 2025-12-20T17:29:53.941Z -->

# Enviar mensagens

Updated: 14 de nov de 2025

Válido a partir de 1º de julho de 2025: os preços por mensagem já estão em vigor. Além disso, as taxas para mensagens de marketing na API de Nuvem e na API de MM Lite são consistentes, de acordo com as tabelas de tarifas publicadas [neste link](/documentation/business-messaging/whatsapp/pricing).

Planejamos lançar a MM Lite para o público geral no quarto trimestre de 2025.

A API de MM Lite permite apenas o envio de mensagens de modelo de marketing. Para enviar outros tipos e também receber mensagens, você pode usar a API de Nuvem em paralelo com a API de MM Lite no mesmo número de telefone comercial.

Caso você use os portais de interface do usuário ou as APIs de um parceiro para configurar e enviar mensagens de marketing, será possível continuar fazendo isso sem precisar usar os recursos abaixo, já que seu parceiro fará a integração com as funções de envio de mensagens da MM Lite em seu nome.

## Criar modelos de marketing

Você pode criar modelos de marketing de várias maneiras:

-   Use a interface do Gerenciador do WhatsApp Business.-   Use o ponto de extremidade "Modelos de mensagem" da API de Gerenciamento do WhatsApp Business.-   Caso você trabalhe com um parceiro, ele poderá oferecer APIs ou interfaces próprias para a criação de modelos, que aproveitam o ponto de extremidade "Modelos de mensagem".

Veja a documentação sobre como [criar e gerenciar modelos neste link](/documentation/business-messaging/whatsapp/templates/overview).

Após a criação de um modelo de marketing, levará até 10 minutos para que ele seja sincronizado com a conta de anúncios correspondente, permitindo a otimização das mensagens e a mensuração de conversões e cliques. Os modelos que ficarem inativos por mais de sete dias também precisarão de 10 minutos para sincronizar após o novo uso. Após criar novos modelos de marketing (ou enviar a primeira mensagem de marketing em um modelo inativo), aguarde 10 minutos antes de iniciar o envio de tráfego de marketing.

A API de MM Lite é compatível com todos os modelos de marketing. Além disso, essa API fornece os seguintes recursos adicionais que não estão disponíveis para modelos de marketing na API de Nuvem:

-   **Tempo de vida para mensagens de modelo de marketing:** se não conseguirmos entregar uma mensagem a um usuário do WhatsApp, faremos novas tentativas de entrega por um período conhecido como tempo de vida (TTL, pelas iniciais em inglês) ou período de validade da mensagem. O TTL é aplicado a mensagens de modelo de autenticação e utilidade na API de Nuvem. No entanto, para mensagens de modelo de marketing, esse recurso está disponível somente na API de Mensagens de Marketing Lite. Para saber mais sobre a definição de TTLs em mensagens de modelo de marketing, consulte a documentação sobre [como criar e gerenciar modelos via API](/documentation/business-messaging/whatsapp/templates/overview#time-to-live--ttl---customization--defaults--min-max-values--and-compatibility) ou [como definir um período de validade de mensagem personalizado via interface do usuário](https://www.facebook.com/business/help/1305007343713790).

## Otimizações automáticas de criativos

No momento, as otimizações automáticas de criativos estão disponíveis apenas para empresas que participam do programa de acesso antecipado. Isso será disponibilizado a todas as empresas em uma data futura.

As otimizações automáticas de criativos melhoram o apelo visual e o engajamento das mensagens de modelos de marketing. Esse recurso não é previsível, ou seja, a saída pode ser diferente para mensagens com a mesma entrada.

O recurso testa pequenas variações do seu cabeçalho de imagem, com diferentes orientações de corte ou filtros de cor, e seleciona automaticamente a variante que gera a maior taxa de cliques ao longo do tempo, sem que você precise fazer nenhuma intervenção. Esses aprimoramentos de criativos foram desenvolvidos para ajudar a melhorar o desempenho e o apelo visual das mensagens de marketing, ao mesmo tempo em que preservam a fidelidade da mensagem. As otimizações mencionadas são semelhantes ao [criativo Advantage+](https://www.facebook.com/business/help/297506218282224?id=649869995454285).

### Corte de imagens

Em algumas campanhas, cortaremos de modo automático as imagens de cabeçalho para uma dimensão ideal, garantindo que seus recursos visuais estejam sempre perfeitamente enquadrados, sem cortar o texto da imagem:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/490288529_1839136930195624_7868580583654703557_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=xC1gplFvOhYQ7kNvwEB2whh&_nc_oc=Adn3_qgu2zthFena3b2DRcdq8iJ9vSEFLzdjsMm-XWpgH0D41JyEZ_pE9HKxsoCbk9E&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_AfmldN07iT6k9i451vRFWI2fUEcQAZxvX_3ihlFJvkHWCA&oe=69611F65)

### Filtragem de imagens

Em algumas campanhas, aplicaremos automaticamente os filtros mais eficazes às imagens de cabeçalho para melhorar a qualidade e o apelo visual:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/490148881_649567434578657_6531913133400572045_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=dx2dqMMRMdQQ7kNvwE8wn8Z&_nc_oc=Adm0w4ttm7NuvgisHfj5Oy_SDXjHb-DzmqlVWbhsqx8BU8ODpPWHnYR9VnvM9Jv19o4&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_Afl8cK5tEW8vIaNN9kgQEEa8ILHbo3xhoSxcEQXqeUtXHg&oe=6961081E)

As otimizações automáticas de criativos são executadas de forma silenciosa em todos os cabeçalhos de imagem enviados via API de MM Lite e funcionam para selecionar a imagem de cabeçalho com maior apelo visual e taxa de cliques. É possível desabilitar o recurso via API de Modelos de Mensagem, garantindo às empresas flexibilidade e controle sobre a aplicação dos aprimoramentos de criativos. Veja a chamada da solicitação de API abaixo para saber mais.

### Sobreposições de texto

Em algumas campanhas, adicionaremos automaticamente uma sobreposição de texto à sua imagem usando o conteúdo da mensagem:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/510250002_997759808891598_7747444436127893252_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=MevHA-iyNGsQ7kNvwGK0Q1Y&_nc_oc=AdliXiaU5lRXqAMx61bL35isvJuv8btVqn5mRFrZraJhhskUgEIQp5jETBJQr9qUVHg&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_Afm9DucM-QRGe7JoAhoWBRvF3le7sLOJedr2vgI3LQk5lw&oe=69610A65)

### Animação de imagem

Em algumas campanhas, transformaremos automaticamente sua imagem de cabeçalho em um GIF animado:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/499208944_582725901558956_3362739552469670606_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZS7O9nNVO5EQ7kNvwFew5m6&_nc_oc=AdmLwr-mVUnCC3JH4LNbZy5uM-Mijc3DOaMvX2aVfVP9xnd3jFtR0W9VRUPiaytmvUI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_AfkqYUmxYraktwHh4861OECc5DGx8mD-hOTp4468SOs0mA&oe=6961317D)

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/512706297_1012568737452141_3654535789190862417_n.gif?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=iK1138TgbcIQ7kNvwEB7bnF&_nc_oc=AdkC7UFSkIc3EKdqf4QS26GnGSMXR8w0CGsdfccZxytrinf1fS88aGUM44gdafQuDWc&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_Afnw4aQDr7GxCZ4TgguSx2sXzX2O09j9Aw10NEsEBTDm3A&oe=6961065C)

### Geração de plano de fundo para a imagem

Em algumas campanhas, geraremos automaticamente um novo plano de fundo para a imagem:

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/529481192_1905147433612259_8373917617145368846_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y9A1d_Y8-_IQ7kNvwHz_vma&_nc_oc=Adl01hEqnN-rB-ZEBTPkX3iqglZaVH_4b5eRBdkVyM_NjQgyMq6jY0OKjsMWKoSEN_8&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_AfmhTqAXGfCDK6eOPmlDwUw8X4gp4TmtMgtBCOrs8aaT-w&oe=696108C7)

### Extração de título

Em algumas campanhas, extrairemos palavras-chave ou frases da sua mensagem para criar um título para o corpo do texto, buscando destacar informações importantes.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/568356332_1741218023258733_764318396409509397_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=3m4ruq4Kp5MQ7kNvwFRTgf7&_nc_oc=Adm9x5y9vWlLY9s3Fpaz9A9mbsu66xd4BxpSrkN_s5i9AeKUVrOBA-IVUq3aj_VKKoo&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_AfkO7Art-AI-NFPLMy0k0is7Ic1DDiDatzZcXGbalA73Pg&oe=696131B3)

### Extração de título para área de toque

Em algumas campanhas, extrairemos palavras-chave ou frases da sua mensagem para criar um título para a área de toque, buscando destacar informações importantes.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565927808_1275784957569302_5821755358925562973_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=jLFqQ91hp9UQ7kNvwGJFufE&_nc_oc=Adkk7pArjjn27aXBJ0KYbk2cD0XRK-fb6IUSjh1r5MYrNW7BIAX5AyxwAHY_9QqQJkw&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_AfkFxjOMWRkIU7ZxeUPfIOkhgb7CwvE5-y1HPV0mP-aBEQ&oe=696123FF)

### Extensões de produto

Vamos aprimorar os criativos de imagem única anexando um conjunto de produtos adicionais do catálogo com os quais os usuários possam interagir ou converter, criando experiências mais personalizadas e relevantes.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/571739475_802429889249611_5730968219809248185_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=mG2y134klnIQ7kNvwG8s2Ra&_nc_oc=Adm7hnSaKInXqoDoqCBDCGBQtOJJbso0ln0k485_so2dK0kZVoPjoFoTPbrTZBHspsg&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_AfmgNDQiqHu2E7GzIf9XgZHjfMPMRfv04pghSvDWRedeJA&oe=69613364)

### Formatação de texto

Em algumas campanhas, atualizamos a formatação do texto (por exemplo, removemos espaços desnecessários e frases em negrito) para melhorar o desempenho. O conteúdo do texto não é alterado, apenas o formato.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/571559956_1527237245143422_4708127400362964555_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=UvNrbKGzDkQQ7kNvwGOXkmv&_nc_oc=AdkEGxDjdpgE-MycREIhRvwq3abJIwz7DF6xNHAZWLqqP2KJTaauLYK7IEZ6OAzVpDw&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=h2x6DefmdMU7UDS3d_M-Ew&oh=00_AfkkjEI1r15XxdkQMqTdb0FDrV0PXSusLTfOlc1voy-_wg&oe=696125B4)

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
      "text_formating_optimization": {
        "enroll_status": "OPT_OUT"
      }
    }
  }
}
```

### Configurar otimizações automáticas de criativos (no nível da conta do WhatsApp Business)

Todos os recursos de otimização são habilitados por padrão, mas você pode usar o objeto creative\_features\_spec para especificar quais otimizações ativar ou desativar na conta do WhatsApp Business. Para isso, defina a propriedade enroll\_status de cada otimização que você quer modificar como OPT\_IN ou OPT\_OUT. Por exemplo:

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
      "text_formating_optimization": {
        "enroll_status": "OPT_OUT"
      }
    }
  }
}
```

## Enviar mensagens de modelo de marketing

A MM Lite não é compatível com empresas de MSC. As solicitações [`marketing_messages`](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages) serão encaminhadas via API de Nuvem ou rejeitadas se o campo `product_policy` estiver definido como strict.

O envio de mensagens segue a mesma sintaxe de carga da API usada para enviar mensagens na API de Nuvem e exige as mesmas permissões.

O ponto de extremidade `/marketing_messages` é compatível **apenas** com mensagens de modelo de marketing para a API de Nuvem e a API de MM Lite. Todos os outros tipos de mensagem (formato livre, autenticação, serviço, utilidade) não são aceitos e resultarão em erro.

As mensagens de marketing serão enviadas apenas pela MM Lite quando o cliente empresarial tiver atendido a todos os [requisitos de integração](/documentation/business-messaging/whatsapp/marketing-messages/onboarding). Se os requisitos de integração não forem atendidos, as mensagens de marketing ainda serão encaminhadas pela API de Nuvem. Para desabilitar a opção de direcionar para a API de Nuvem, defina o campo opcional `product_policy` como "strict".

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

A API de MM Lite oferece os recursos adicionais a seguir que não estão disponíveis para mensagens de modelo de marketing na API de Nuvem:

-   **Política de fallback de produto:** defina `product_policy` como `CLOUD_API_FALLBACK` para que a API envie a mensagem por meio da API de Nuvem se os [requisitos de integração](/documentation/business-messaging/whatsapp/marketing-messages/onboarding) não tiverem sido atendidos. Defina como `STRICT` se não quiser que a API envie a mensagem via API de Nuvem quando não houver conexão com o WhatsApp.-   **Compartilhamento de atividades de mensagens:**`message_activity_sharing` é um parâmetro opcional no nível da mensagem que ativa/desativa o compartilhamento de atividades de mensagens com a Meta (por exemplo, leitura da mensagem) para ajudar a otimizar as mensagens de marketing. Se o parâmetro não for fornecido, será aplicada a configuração padrão no nível da Conta do WhatsApp Business. Sempre que quiser, você pode editar sua configuração padrão nas configurações do negócio (consulte o registro de alterações para ver uma captura de tela).

Para saber mais, leia a documentação da API de Nuvem sobre [tipos de mensagem](/documentation/business-messaging/whatsapp/messages/send-messages#message-types), já que a API de MM Lite usa a mesma formatação de envio.

## Como receber webhooks de status da mensagem

A API de MM Lite dispara webhooks de status da [mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) (enviada, entregue e lida). Além disso, esses webhooks que descrevem a mensagem enviada via API de MM Lite e incluem informações de preços terão `pricing.category` e `conversation.type` definidos como `marketing_lite`. Se a mensagem for direcionada pela API de Nuvem, `pricing.category` será definido como `marketing`.

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

Recomendamos que você mantenha registros dos IDs de cada mensagem enviada, bem como de qual API foi utilizada para o envio (Nuvem ou MM Lite). Assim, será possível usar o ID único da mensagem, retornado nos webhooks de status, para identificar a origem da mensagem enviada.

## Como receber mensagens

A MM Lite é uma API apenas de envio. Ela não processa mensagens recebidas de consumidores. Para receber mensagens em um telefone comercial, use a API de Nuvem em paralelo com a API de MM Lite no mesmo número.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)