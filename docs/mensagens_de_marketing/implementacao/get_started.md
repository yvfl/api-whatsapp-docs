<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/get-started -->
<!-- Scraped: 2026-01-24T00:37:18.360Z -->

# Primeiros passos

Updated: 4 de dez de 2025

A API de Mensagens de Marketing para o WhatsApp (anteriormente conhecida como API de Mensagens de Marketing Lite) agora está disponível para todos.

Saiba como enviar um modelo de mensagem com a API de Mensagens de Marketing para o WhatsApp (MM API para WhatsApp).

## Requisitos

-   Você tem uma conta ativa do WhatsApp Business e está em um [país qualificado para a API MM para o WhatsApp](/documentation/business-messaging/whatsapp/marketing-messages/get-started#geographic-availability-of-features).-   Você tem um [modelo de mensagem de marketing](/documentation/business-messaging/whatsapp/templates/marketing-templates) aprovado.-   Você assinou o webhook [messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages).

## Etapa 1: aceitar os Termos de Serviço

-   Acesse [**Painel de Apps**](https://developers.facebook.com/apps) > **WhatsApp** > **Início rápido**.-   Localize o módulo "**Aumente o ROI com mensagens de marketing com otimizações**" e clique no botão "**Começar**".-   Clique em "**Continuar para o guia de integração**" e aceite os Termos de Serviço.

## Etapa 2: enviar uma mensagem de modelo de marketing

Use o ponto de extremidade `marketing_messages` para enviar uma mensagem de modelo para você mesmo.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/marketing_messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d
'{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "template",
  "template": {
      "name": "<TEMPLATE_NAME>",
      "language": {
          "code": "<LANGUAGE_AND_LOCALE_CODE>"
      },
      "components": [
          {
              "type": "body",
              "parameters": [
                  {
                      "type": "text",
                      "text": "text-string"
                  }
              ]
          }
      ]
  }
}'
```

## Etapa 3: verificar se a mensagem foi enviada por meio do webhook `status`

A API de MM para o WhatsApp aciona [webhooks de status de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) para eventos como enviado, entregue e lido. Quando uma mensagem é enviada por meio da API de MM para o WhatsApp, a carga do webhook terá `category` e `conversation.origin.type` definidos como `marketing_lite`.

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

## Disponibilidade geográfica dos recursos

Alguns recursos avançados e funcionalidades de relatórios da API de MM para o WhatsApp estão disponíveis apenas em regiões específicas, devido a políticas da Meta ou regulamentações locais.

### Espaço Econômico Europeu, Reino Unido, Japão, Coreia do Sul

-   As mensagens enviadas de um número de telefone comercial ou para um consumidor nesses países não contarão com otimizações de entrega. **Observe** que [os limites de modelo de mensagem de marketing por usuário](/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits) também não estão ativos nesses países. Portanto, a falta de otimizações de entrega não terá nenhum efeito na entrega de mensagens.-   As mensagens enviadas de um número de telefone comercial ou para um consumidor nesses países não contarão com relatórios de métricas de clique e conversão.-   Para as empresas nesses países, as métricas não ficarão disponíveis na interface do usuário do Gerenciador de Anúncios nem na API de Insights. Assim como na API de Nuvem, as métricas estarão disponíveis por meio da API de Gerenciamento de Negócios e das métricas de conversa da interface do usuário do Gerenciador do WhatsApp.

### Estados Unidos

-   A partir de 1º de abril de 2025, as mensagens de marketing enviadas a usuários do WhatsApp nos Estados Unidos não serão entregues (código de erro 131049). Essa política não é específica para a API de MM para o WhatsApp. Ela é válida para todas as APIs de Business Messaging (incluindo a API de Nuvem, [consulte os documentos](/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits)).-   Os números de telefone comerciais nos EUA ainda poderão usar a API de MM para o WhatsApp para enviar mensagens a usuários fora dos Estados Unidos.
    
    ### Cuba, Irã, Coreia do Norte, Síria e três regiões sancionadas na Ucrânia (Crimeia, Donetsk, Luhansk):
    -   As empresas nessas regiões não estão qualificadas para integração, e não é possível enviar mensagens a consumidores que se encontrem nesses lugares. Essa política não é específica para a API de MM para o WhatsApp. Ela é válida para todas as APIs de Business Messaging (incluindo a API de Nuvem, [consulte os documentos](/documentation/business-messaging/whatsapp/support#country-restrictions)).

### Rússia

A partir de 20 de junho de 2025, empresas na Rússia poderão usar a API de MM para o WhatsApp, com exceção dos seguintes recursos:

-   Mensagens enviadas por empresas que têm um perfil empresarial da Meta na Rússia ou que usam uma forma de pagamento com um endereço russo não receberão otimizações de veiculação.-   As mensagens enviadas de um número de telefone comercial ou para um consumidor nesses países não contarão com relatórios de métricas de clique e conversão. Para as empresas nesses países, as métricas não ficarão disponíveis na interface do usuário do Gerenciador de Anúncios nem na API de Insights. Assim como na API de Nuvem, as métricas continuarão disponíveis por meio da API de Gerenciamento de Negócios e das métricas de conversa da interface do usuário do Gerenciador do WhatsApp.-   Todos os demais recursos da API de MM para o WhatsApp continuarão disponíveis.

## Saiba mais

-   Conheça outros [formatos de mensagem de marketing](/documentation/business-messaging/whatsapp/templates/marketing-templates)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)