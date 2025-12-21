<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/two-step-verification -->
<!-- Scraped: 2025-12-20T17:24:14.354Z -->

# Confirmação em duas etapas

Updated: 5 de nov de 2025

É necessário configurar a confirmação em duas etapas para seu número de telefone, pois isso fornece uma camada extra de segurança para as contas comerciais. Para isso, faça uma ligação `POST` para `/PHONE_NUMBER_ID` e anexe os parâmetros abaixo. Não existe um ponto de extremidade para desabilitar a confirmação em duas etapas.

Ponto de extremidade

Autenticação

`/PHONE_NUMBER_ID`

(consulte [Obter o ID do número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#get-all-phone-numbers))

Os parceiros de soluções devem fazer a autenticação usando um token de acesso com as permissões `whatsapp_business_management` e `whatsapp_business_messaging`.

### Parâmetros

Nome

Descrição

`pin`

**Obrigatório.**

Um PIN de seis dígitos usado para a confirmação em duas etapas.

### Exemplo

Exemplo de solicitação:

```
curl -X  POST \
 'https://graph.facebook.com/v24.0/FROM_PHONE_NUMBER_ID' \
 -H 'Authorization: Bearer ACCESS_TOKEN' \
 -H 'Content-Type: application/json' \
 -d '{"pin" : "6_DIGIT_PIN"}'
```

Exemplo de resposta:

```
{  "success": true}
```

Todas as chamadas à API exigem autenticação com tokens de acesso.

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado em **Painel de Apps** > **WhatsApp** > **Configuração da API**.

Os parceiros de soluções devem fazer a autenticação usando um token de acesso com as permissões `whatsapp_business_messaging` e `whatsapp_business_management`. Para saber mais, consulte [Tokens de acesso do usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).

## Como redefinir o PIN

Se você esquecer ou perder seu PIN, poderá atualizá-lo seguindo estas etapas no Gerenciador do WhatsApp:

-   Acesse [Configurações](https://business.facebook.com/settings/), entre no Facebook para Empresas e clique na organização que você está usando para gerenciar a WABA (conta do WhatsApp Business).-   Na tela de configurações, clique em **Contas do WhatsApp** e encontre a WABA da qual você deseja atualizar o PIN. Clique na WABA para abrir um painel com as respectivas informações no lado direito da página.-   No painel de informações da WABA, clique em **Configurações**.-   Na nova aba, clique em **Gerenciador do WhatsApp**.-   No Gerenciador do WhatsApp, encontre o número de telefone e clique em **Configurações**.-   Clique em **Confirmação em duas etapas**.-   Na aba de confirmação em duas etapas, clique em **Alterar PIN**.-   Você precisará digitar o novo PIN e confirmá-lo. Seu PIN foi atualizado com sucesso.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)