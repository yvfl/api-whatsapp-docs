<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started -->
<!-- Scraped: 2025-12-20T17:23:48.626Z -->

# Introdução à API de Nuvem do WhatsApp

Updated: 1 de out de 2025

Este guia ajuda os desenvolvedores a começarem a usar rapidamente a API de Nuvem do WhatsApp. Ele abrange as etapas básicas de configuração, incluindo inscrição como desenvolvedor, criação de um app da Meta, envio da primeira mensagem e configuração de um ponto de extremidade de webhook de teste. Você também aprenderá a gerar tokens de acesso seguros e enviar mensagens com e sem modelo. Apresentamos recursos avançados e outros recursos para você saber mais.

* * *

## Baixar o app de exemplo

O app de exemplo do Jasper's Market contém todas as mensagens e códigos usados na demonstração do Jasper's Market. Você pode usar esse app de exemplo para saber como criar um app que envie e processe dados da API de Nuvem do WhatsApp.

[

Baixar o app de exemplo do Jasper's Market

](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Ffbsamples%2Fwhatsapp-business-jaspers-market&h=AT1mCZviIHn09H0e-itdDXq17hxy1RqG5Pw8G0bYKNq0gm_9bbPGojzv3GrJMvu7p8O48LHEF5EGSxMLnDZnoi6dCJlwehitDgHarCBJhRYkkSKDKgD6GSC_lij1xECIkrVa1qKxo5D2NMuAQ29fHXjDruI)

* * *

## Pré-requisitos

-   Você precisa ter uma conta do Facebook ou uma conta gerenciada da Meta.-   É necessário se inscrever como desenvolvedor.
    -   Caso ainda não tenha se inscrito como desenvolvedor, acesse [https://developers.facebook.com/async/registration/](https://developers.facebook.com/async/registration/) e siga as instruções.-   Você precisa de acesso a um dispositivo com o WhatsApp instalado para enviar e receber mensagens de teste durante a configuração.

* * *

## Etapa 1. Criar um novo app de desenvolvedor da Meta e configurar com o WhatsApp

Você precisa criar um app de desenvolvedor da Meta e configurá-lo com o caso de uso do WhatsApp.

Clique em "Ir para o Painel de Apps" e siga as instruções abaixo para começar.

[

Ir para o Painel de Apps

](https://developers.facebook.com/apps)

### Caso você **já tenha** um app da Meta

-   Selecione o app existente no Painel de Apps.-   Clique em **Adicionar casos de uso**.-   Selecione **Conectar-se com clientes pelo WhatsApp** e siga as instruções para adicionar o caso de uso ao seu app.
    -   Observação: se não tiver um portfólio empresarial da Meta, você criará um durante esse processo.

### Caso você **não tenha** um app da Meta

-   Siga as instruções no Painel de Apps para criar um novo app.
    -   Selecione o caso de uso **Conectar-se com clientes pelo WhatsApp**.-   Selecione um portfólio empresarial existente ou siga as instruções para criar um novo.-   Termine de criar o app.-   Após a criação do app, selecione **Casos de uso** (ícone de lápis) na barra lateral.

* * *

## Etapa 2. Enviar sua primeira mensagem de modelo

Agora que o novo app está configurado, vamos enviar a primeira mensagem no WhatsApp.

-   Clique em **Casos de uso** (ícone de lápis) na barra lateral.-   No caso de uso **Conectar-se com clientes pelo WhatsApp**, clique em **Personalizar**.-   Em Início rápido, clique no botão **Começar a usar a API** e siga as duas primeiras etapas para enviar o modelo de mensagem `hello_world` a um número de telefone da sua escolha.
    -   Guarde a identificação do número de telefone de teste e a identificação da conta do WhatsApp Business para usar mais tarde.-   Depois de receber a mensagem que você enviou, responda para manter a conversa ativa.

* * *

## Etapa 3. Configurar o app de webhook de teste

Você precisará configurar um ponto de extremidade de webhook para receber notificações sobre o status das mensagens, como "lida" e "entregue".

Use nosso servidor de webhook de exemplo para fins de teste seguindo o guia [Como usar um app de webhook de teste](/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot).

Após a criação do app de webhook de teste, responda na conversa do WhatsApp que você criou com você. A carga do webhook será exibida no app de teste da seguinte maneira:

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "215589313241560883",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15551797781",              "phone_number_id": "7794189252778687"            },            "contacts": [              {                "profile": {                  "name": "Jessica Laverdetman"                },                "wa_id": "13557825698"              }            ],            "messages": [              {                "from": "17863559966",                "id": "wamid.HBgLMTc4NjM1NTk5NjYVAGHAYWYET688aASGNTI1QzZFQjhEMDk2QQA=",                "timestamp": "1758254144",                "text": {                  "body": "Hi!"                },                "type": "text"              }            ]          },          "field": "messages"        }      ]    }  ]}
```

* * *

## Etapa 4. Criar um usuário do sistema e gerar um token de acesso permanente

O token de acesso temporário que você criou para enviar o modelo `hello_world` expira rapidamente e não é adequado para fins de desenvolvimento. Por isso, você deve criar um token permanente para usar na plataforma do WhatsApp Business.

-   Acesse [Configurações do negócio](https://business.facebook.com/latest/settings) e clique em **Usuários do sistema** na barra lateral.-   Clique no botão **Adicionar+** no canto superior direito e siga as instruções para criar um novo usuário do sistema.-   Selecione o novo usuário do sistema que você criou e clique em **Atribuir ativos**.
    -   Selecione o app e ative **Gerenciar app** em **Controle total**.-   Selecione sua conta do WhatsApp e ative a opção **Gerenciar contas do WhatsApp Business** em **Controle total**.-   Clique no botão **Atribuir ativos**.-   Clique em **Gerar token**.
    -   Siga as instruções para gerar o token.-   Adicione as seguintes permissões ao token:
        -   [business\_management](https://developers.facebook.com/docs/permissions#b)-   [whatsapp\_business\_messaging](https://developers.facebook.com/docs/permissions#w)-   [whatsapp\_business\_management](https://developers.facebook.com/docs/permissions#w)-   Copie o token e guarde-o em um local seguro para usá-lo nas etapas seguintes.

* * *

## Etapa 5. Enviar uma mensagem que não seja de modelo

Quando você respondeu à mensagem de teste anterior, uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) foi aberta. Essa janela de 24 horas permite que você envie [mensagens que não sejam de modelo](/documentation/business-messaging/whatsapp/messages/send-messages#message-types) aos usuários do WhatsApp. Com a janela de atendimento ao cliente aberta, você pode enviar uma mensagem que não seja de modelo para você. Para isso, insira a identificação do número de telefone de teste, o token de acesso do usuário do sistema e o número de telefone no exemplo de código abaixo. Depois, cole o código no seu terminal e execute-o.

```
curl 'https://graph.facebook.com/v23.0/<TEST_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "text",
  "text": {
    "body": "Hello!"
  }
}'
```

Depois de enviar a mensagem, verifique o app de webhook de teste para ver o evento de webhook que confirma o recebimento da mensagem.

* * *

## Etapa 6. Concluir

A API de Nuvem do WhatsApp permite que você envie mensagens e receba webhooks, que são os blocos fundamentais para a integração de mensagens. Além do básico, a API oferece outros recursos, como criação e gerenciamento de grupos, bem como suporte para chamadas. Para explorar esses recursos avançados, confira a seção "Saiba mais" abaixo.

* * *

## Saiba mais

-   [Conheça os diferentes tipos de mensagens que não são de modelo](/documentation/business-messaging/whatsapp/messages/send-messages)-   [Saiba como criar e enviar mensagens de modelo](/documentation/business-messaging/whatsapp/templates/overview)-   [Saiba como criar e gerenciar grupos do WhatsApp via API](/documentation/business-messaging/whatsapp/groups)-   [Saiba como enviar e receber ligações no WhatsApp via API](/documentation/business-messaging/whatsapp/calling)-   [Saiba como adicionar um número de telefone comercial](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)-   [Aprenda a configurar seu próprio servidor de webhook](https://developers.facebook.com/docs/graph-api/webhooks/getting-started)-   [Torne-se um provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)