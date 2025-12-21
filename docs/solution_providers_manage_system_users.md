<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-system-users -->
<!-- Scraped: 2025-12-20T17:52:17.884Z -->

# Gerenciar usuários do sistema

Updated: 14 de nov de 2025

Adicionar o usuário do sistema a contas do WhatsApp Business compartilhadas permite gerenciar contas de forma programada. Neste guia, abordaremos as ações que os BSPs (provedores de soluções de negócios) talvez precisem executar para gerenciar esses usuários.

-   Para criar um usuário do sistema, consulte [Usuários do sistema, Recuperar e atualizar um usuário do sistema](/docs/marketing-api/system-users/create-retrieve-update).-   Consulte [Usuários do sistema, Instalar aplicativos e Gerar tokens](/docs/marketing-api/system-users/install-apps-and-generate-tokens#generate-token) para obter ajudar na geração do token de acesso de usuário do sistema.

## Recuperar números de identificação do usuário do sistema

É possível armazenar em cache números de identificação do usuário do sistema para uso futuro.

### Solicitação

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/system_users
  ?access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

Para encontrar a identificação de uma empresa, acesse [**Gerenciador de Negócios**](https://business.facebook.com/) > **Configurações do negócio** > **Informações da empresa**. Nessa área, você verá informações sobre a empresa, incluindo o número de identificação.

### Resposta

```
{  "data": [    {      "id": "1972555232742222",      "name": "My System User",      "role": "EMPLOYEE"    }  ]}
```

## Adicionar usuários do sistema a uma conta comercial do WhatsApp

Para esta chamada de API, **você precisa usar o token de acesso de um usuário do sistema com permissões de administrador**.

### Sintaxe da solicitação

No exemplo abaixo, use a identificação da WABA atribuída.

```
curl -i -X POST "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/assigned_users
  ?user=<ASSIGNED_USER_ID>
  &tasks=['<ASSIGNED_USERS_TASKS_AND_PERMISSIONS>']
  &access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

Para encontrar o ID de uma conta do WhatsApp Business, acesse [**Gerenciador de Negócios**](https://business.facebook.com/) > **Configurações do negócio** > **Contas** > **Contas do WhatsApp Business**. Encontre a conta que você quer usar e clique nela. Um painel é aberto, contendo as informações sobre a conta, inclusive a ID.

  

Para `<ASSIGNED_USER_ID>`, use a identificação do usuário do sistema retornada da [chamada `/<WHATSAPP_BUSINESS_ACCOUNT_ID>/system_users`](#retrieve-system-user-ids).

### Permissões

Nome

Descrição

`MANAGE`

Fornece acesso de administrador.

Os usuários podem ter acesso de administrador em uma conta do WhatsApp Business compartilhada com permissões desse tipo.

Observação: se você é um parceiro de soluções e está tentando adicionar um usuário a uma conta do WhatsApp Business que é compartilhada com você por meio de uma [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions), você precisa levar em conta os seguintes cenários:

-   Caso você não tenha a permissão para `MESSAGING` na solução, será necessário escolher quais tarefas granulares são necessárias ao adicionar o usuário à conta do WhatsApp Business compartilhada: `DEVELOP`, `MANAGE_TEMPLATES`, `MANAGE_PHONE`, `VIEW_COST`, `MANAGE_EXTENSIONS`, `VIEW_PHONE_ASSETS`, `MANAGE_PHONE_ASSETS`, `VIEW_TEMPLATES`, `VIEW_INSIGHTS`, `MANAGE_USERS` e `MANAGE_BILLING`.-   Neste cenário, `MANAGE_BILLING` é necessária para compartilhar uma linha de crédito.-   MANAGE somente funcionará se você receber acesso total à solução, ou seja, incluindo `MESSAGING`.

`DEVELOP`

Fornece acesso de desenvolvedor. Os usuários podem ter acesso de desenvolvedor em uma conta do WhatsApp Business compartilhada com permissões padrão.

### Resposta

```
{  "success": true}
```

## Recuperar usuários designados

Busque usuários designados da conta do WhatsApp Business para confirmar se foram adicionados. Essa etapa não é obrigatória, mas auxilia o processo de validação.

### Sintaxe da solicitação

No exemplo abaixo, use a identificação da WABA atribuída.

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/assigned_users
  ?business=<WHATSAPP_BUSINESS_ACCOUNT_ID>
  &access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

### Resposta

```
{  "data": [    {      "id": "1972385232742142",      "name": "Anna Flex",      "tasks": [        "MANAGE"      ]    },    {      "id": "1972385232752545",      "name": "Jasper Brown",      "tasks": [        "DEVELOP"      ]    }  ]}
```

## Veja também

-   Referência: [conta do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)