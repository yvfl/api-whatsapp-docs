<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/website-optional -->
<!-- Scraped: 2025-12-20T17:49:30.184Z -->

# Campo de site opcional

Updated: 4 de nov de 2025

No momento, esse recurso está disponível apenas para parceiros de soluções **Solução selecionada** e **Premier** aprovados. Consulte nosso artigo da Central de Ajuda [Como se cadastrar para a verificação da empresa conduzida por parceiro](https://www.facebook.com/business/help/1091073752691122) e saiba como pedir aprovação.

Por padrão, o campo do site é obrigatório na tela do [portfólio empresarial](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-portfolio-screen). Se você tiver aprovação para a [Verificação da empresa conduzida por parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification), o campo do site se tornará opcional e será acompanhado por uma caixa de seleção **Minha empresa não tem um site ou uma página de perfil**:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/467331606_2133248890410157_3569145607260288812_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=JnNc32kkoWIQ7kNvwHuGmMe&_nc_oc=Adl5VM6AW77FUOX_1lJ5PlOAZoHF3sfZMWVY1sb7KpUo3Pw0Y6qemxKqTUO1cil4RZQ&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=nOVsQWBC6FfyWMsLoBeVJQ&oh=00_AfkBU9ZPaGUcx9fSe4X7N_INk3shfgsf39pwBLsqozLaWQ&oe=69611CC4)

Quando um cliente empresarial marcar essa caixa e concluir o fluxo, os ativos do WhatsApp e o código de token trocável do cliente serão gerados e retornados em um [evento de mensagem](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) e uma [resposta JavaScript](/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback), como de costume.

No entanto, o [webhook account\_update](#webhook) disparado quando o cliente concluir o fluxo terá `event` definido como `PARTNER_CLIENT_CERTIFICATION_NEEDED`, o que indica que você deve verificar a empresa como parte do processo de integração.

Faça a integração do cliente da maneira usual. Quando terminar, conclua as etapas descritas no nosso documento [Verificação da empresa conduzida por parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) para verificar a empresa. **O cliente não poderá enviar mensagens até que a empresa seja verificada.**

-   [Integrar clientes empresariais como Provedor de Soluções](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner)-   [Integrar clientes empresariais como Provedor de Tecnologia](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider)

Caso você não consiga verificar a empresa do seu cliente, ele precisará adicionar um site por conta própria em [Meta Business Suite > Configurações > Informações da empresa](https://business.facebook.com/settings/info), ou não poderá enviar mensagens. Depois de adicionar e aceitar um site, a empresa também poderá [verificar a própria organização](https://www.facebook.com/business/help/2058515294227817), se desejar.

## Webhook

Quando um cliente empresarial concluir o fluxo, um webhook **account\_update** será disparado com `event` definido como `PARTNER_CLIENT_CERTIFICATION_NEEDED`.

```
{
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_SENT_TIMESTAMP>,
      "changes": [
        {
          "value": {
            "event": "PARTNER_CLIENT_CERTIFICATION_NEEDED",
            "partner_client_certification_needed_info": {
              "client_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>"
            }
          },
          "field": "account_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

Ao receber esse webhook, faça a integração do cliente da maneira usual e, depois, conclua as etapas descritas no documento [Verificação da empresa conduzida por parceiro](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) para verificar a empresa do cliente.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)