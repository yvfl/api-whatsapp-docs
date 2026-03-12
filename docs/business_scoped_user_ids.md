<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids -->
<!-- Scraped: 2026-03-10T21:37:22.213Z -->

# IDs do usuário no escopo da empresa

Updated: 6 de fev de 2026

**Atualização de 6 de fevereiro de 2026**

-   Foram adicionadas diversas alterações. Elas estão listadas no [Registro de alterações do documento](#document-changelog).-   Recomendamos que você comece a capturar os IDs de usuário no escopo da empresa (BSUIDs) e os mapeie para os números de telefone dos usuários do WhatsApp assim que possível.-   Para ajudar você com os testes, a partir de 16 de fevereiro de 2026, os BSUIDs de teste aparecerão em webhooks de mensagens de teste disparados por meio do Painel de Apps.-   A partir de 31 de março de 2026, os webhooks de mensagens começarão a incluir os BSUIDs reais dos usuários.

O WhatsApp vai lançar os nomes de usuário em 2026.

Os nomes de usuário são um recurso opcional para pessoas e empresas. Quando um usuário do WhatsApp adotar um nome de usuário, esse nome será exibido no app em vez do número de telefone. Entretanto, os nomes de usuário comerciais não têm o objetivo de garantir a privacidade. A adoção de um nome de usuário comercial não fará com que o número de telefone da empresa seja ocultado no app.

Para possibilitar os nomes de usuário, a Meta vai compartilhar um novo identificador de usuário de back-end chamado ID do usuário no escopo da empresa (BSUID). O BSUID identifica um usuário do WhatsApp de forma exclusiva e está vinculado a uma empresa específica.

Este documento descreve como a adição de nomes de usuário afetará solicitações de API, respostas de API e cargas de webhook. As alterações adicionais para aceitar nomes de usuário antes que o recurso seja disponibilizado serão registradas aqui.

**As alterações descritas neste documento estão sujeitas a mudanças.**

## Nomes de usuário

O nome de usuário é um nome único e opcional que os usuários do WhatsApp podem definir para exibir no app em vez do número de telefone. Em vez dos nomes de perfil, é possível usar os nomes de usuário para personalizar o conteúdo de mensagens para usuários individuais.

Os usuários do WhatsApp podem ter apenas um nome de usuário, mas é possível alterá-lo periodicamente. A alteração do nome de usuário não afeta o número de telefone nem o ID do usuário no escopo da empresa. Além disso, o usuário pode continuar se comunicando com outros usuários do WhatsApp ou empresas na Plataforma do WhatsApp Business.

Os nomes de usuário são atribuídos à propriedade `username` em respostas de API e cargas de webhooks. Depois da habilitação, o nome de usuário do WhatsApp aparecerá em todos os webhooks de [mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages#incoming-messages) recebida, além de webhooks de mensagens com status **entregue** e **lida**[](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status).

## ID de usuário no escopo da empresa

Os BSUIDs começarão a aparecer nos webhooks a partir de 31 de março de 2026.

O BSUID é um identificador único que pode ser usado para enviar mensagem a um usuário do WhatsApp quando você não sabe o número de telefone dele. O BSUID será atribuído ao parâmetro `user_id` e aparecerá em todos os [webhooks de mensagens](#messages-webhooks), independentemente de o usuário ter habilitado ou não o recurso de nome de usuário.

Os BSUIDs são associados a portfólios empresariais individuais. Isso significa que qualquer número de telefone comercial de um determinado portfólio pode ser usado para enviar mensagens a um BSUID no mesmo portfólio. As tentativas de enviar mensagens ao BSUID usando um número de telefone de um portfólio diferente não terão sucesso.

Os BSUIDs serão:

-   gerados automaticamente-   prefixados com o código do país [ISO 3166 alfa-2⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.iso.org%2Fiso-3166-country-codes.html&h=AT6YMuGiXXpq0BTzHMUw-UtTvOeBzfXSfEpoxQ53DXVnMryFpJ6NK0iAtQQR9_saZnunUEyHeFF_A6iFs-T8hUTd6uxXGVQMOicu7JxpnXucNr0zmylzJ3zP4nMCTJ06ArFJ4PviX23AFMDJXGh_whggxMA) de duas letras do usuário e um ponto, seguido de até 128 caracteres alfanuméricos (por exemplo, `US.13491208655302741918`)-   únicos para cada par de usuário e [portfólio empresarial⁠](https://www.facebook.com/business/help/486932075688253)(antes chamados de Gerenciadores de Negócios)-   gerados novamente se um usuário mudar o número de telefone (o que dispara um [webhook de mensagens de status do sistema](#system-status-messages-webhooks))

Os BSUIDs podem ser usados para enviar qualquer tipo de mensagem, exceto [modelos de autenticação](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates) de um toque, sem toque e de copiar código, que exigem o número de telefone do usuário.

Ao fazer solicitações à API com BSUIDs, use o valor inteiro do BSUID: código do país, ponto e todos os caracteres alfanuméricos. Se você omitir ou alterar o código do país, o ponto ou os caracteres alfanuméricos, a solicitação falhará.

Caso você seja uma empresa gerenciada com vários portfólios empresariais e queira usar BSUIDs que funcionem em todos eles, consulte [IDs de usuário no escopo da empresa principal](#parent-business-scoped-user-ids).

## IDs de usuário principal no escopo da empresa

Caso seja uma empresa gerenciada e queira vincular portfólios empresariais, você pode pedir ao seu ponto de contato da Meta para verificar se a sua organização se qualifica. Se você se qualificar e os portfólios empresariais forem vinculados, os BSUIDs principais serão incluídos em todos os webhooks de mensagens, atribuídos a uma nova propriedade `parent_user_id`.

Os BSUIDs principais podem ser usados em vez dos regulares para enviar mensagens aos usuários. Em termos de funcionalidade, os BSUIDs principais têm as mesmas propriedades que os regulares, mas podem ser usados por qualquer número de telefone comercial do conjunto de portfólios vinculados.

Você ainda pode enviar mensagens aos usuários usando o respectivo BSUID no escopo do seu portfólio empresarial.

## Números de telefone

Se um usuário do WhatsApp habilitar o recurso de nome de usuário, o número de telefone dele não será incluído nos webhooks, a menos que você tenha interagido com o usuário antes, conforme explicado abaixo. Portanto, independentemente de o usuário ter ou não habilitado o recurso, o BSUID do usuário será incluído em qualquer webhook que normalmente incluiria o número de telefone, atribuído a uma nova propriedade user\_id.

Para reduzir o risco de perda do contexto de conversas com usuários existentes que habilitarem o recurso de nomes de usuário, os números de telefone dos usuários serão incluídos em webhooks se alguma das seguintes condições for atendida:

-   Você enviou mensagem ou ligou para o número de telefone do usuário em até 30 dias após o disparo do webhook-   Você recebeu uma mensagem ou ligação do número de telefone do usuário em até 30 dias após o disparo do webhook-   Você está na lista de contatos do WhatsApp do usuário-   O usuário está na sua [lista de contatos](#contact-book)

Os BSUIDs começarão a aparecer nos webhooks a partir de 31 de março de 2026. Entretanto, nossas APIs não aceitarão o envio de mensagens direcionadas aos BSUIDs até maio de 2026 (o dia exato será definido em breve). Assim que nossas APIs passarem a ser compatíveis com BSUIDs em maio, você poderá enviar mensagens para os usuários usando o BSUID, o número de telefone ou ambos.

Caso você seja um provedor de soluções e forneça serviços de mensagens do WhatsApp aos clientes da sua empresa, eles poderão usar seu app para enviar mensagens a usuários, usando os respectivos números de telefone comercial do portfólio e os BSUIDs associados. Porém, se você tentar usar um dos BSUIDs de cliente de negócios com seu próprio número de telefone comercial, a ação falhará, já que os BSUIDs pertencem aos portfólios (e, em essência, aos ativos do portfólio).

Se não tiver certeza sobre a propriedade do ativo:

-   Envie uma solicitação GET à [API de Contas do WhatsApp Business do Cliente](/docs/marketing-api/reference/business/client_whatsapp_business_accounts/#Reading) para obter uma lista de contas do WhatsApp Business que não sejam suas, mas que sejam compartilhadas com você.-   Envie uma solicitação GET à [API de Contas do WhatsApp Business](/docs/marketing-api/reference/business/owned_whatsapp_business_accounts/#Reading) para obter uma lista das suas contas do WhatsApp Business.-   Envie uma solicitação GET à [API de Números de Telefone](/docs/graph-api/reference/whats-app-business-account/phone_numbers/#Reading) para obter a lista de números de telefone pertencentes a uma determinada conta do WhatsApp Business.

## Como solicitar o número de telefone dos usuários

Para facilitar a solicitação de números de telefone de usuários do WhatsApp, está disponível um novo tipo de botão `REQUEST_CONTACT_INFO` que pode ser incluído nos modelos `utility` e `marketing`.

Se um usuário tocar nesse botão, o cartão de contato virtual e o número de telefone do WhatsApp dele serão compartilhados no tópico da mensagem. Além disso, um [webhook de contatos](/documentation/business-messaging/whatsapp/webhooks/reference/messages/contacts) será disparado, contendo o número de telefone e o [vCard⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc6350&h=AT6YMuGiXXpq0BTzHMUw-UtTvOeBzfXSfEpoxQ53DXVnMryFpJ6NK0iAtQQR9_saZnunUEyHeFF_A6iFs-T8hUTd6uxXGVQMOicu7JxpnXucNr0zmylzJ3zP4nMCTJ06ArFJ4PviX23AFMDJXGh_whggxMA) do usuário.

Ao usar o recurso de lista de contatos, o número de telefone do cliente também será adicionado automaticamente à sua lista, a menos que o armazenamento local esteja habilitado. Se o armazenamento local estiver habilitado, envie uma mensagem para o número de telefone do usuário. Essa ação adicionará o número de telefone e o BSUID à sua lista de contatos.

Para adicionar um botão de pedido de informações de contato a um modelo de utilidade ou marketing, use a seguinte estrutura de carga ao criar ou editar um modelo desse tipo:

```
{
  "type": "buttons",
  "buttons": [
    {
      "type": "REQUEST_CONTACT_INFO"
    },
    <!-- Additional button objects would go here, if using -->
  ]
}
```

Os botões de pedido de informações de contato não podem ser personalizados. Portanto, não é preciso incluir valores de parâmetro ao enviar o modelo.

Exemplo de carga do webhook de contatos com um vCard:

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",
                  "username": "<USERNAME>",
                },
                "user_id": "<BSUID>"
              }
            ],
            "messages": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "contacts",
                "origin": "contact_request/other",       <!-- ADDED -->
                "contacts": [
                  {
                    "vcard": "<VCARD>",                  <!-- ADDED -->
                    "phones": [
                      {
                        "phone": "<USER_PHONE_NUMBER>"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

## Lista de contatos

No início de abril de 2026, para auxiliar na continuidade das conversas, lançaremos um recurso de lista de contatos que armazena informações de contato de usuários do WhatsApp.

Quando o recurso estiver disponível, se você enviar uma mensagem/ligar para o número de telefone de um usuário ou receber uma mensagem/ligar do número de telefone de um usuário, o número de telefone e o BSUID do usuário serão adicionados à sua lista de contatos. Depois de registrados, esses dados serão usados para preencher as cargas de webhooks e respostas de API que incluem o número de telefone ou o BSUID do usuário, independentemente de o recurso de nomes de usuário ter sido habilitado ou não.

Os dados da lista de contatos serão mantidos até você desabilitar o recurso ou desativar a conta. Se desejar, você poderá desabilitar esse recurso a qualquer momento após 16 de março de 2026 no painel **Meta Business Suite** > **Configurações da empresa** > [**Informações da empresa**⁠](https://business.facebook.com/latest/settings/business_info). Ao desativar a lista de contatos, o armazenamento de novas informações de usuários será interrompido e os dados que já tiverem sido salvos serão apagados. Se você ativar novamente a lista de contatos, o WhatsApp voltará a armazenar as informações dos usuários, mas não será possível restaurar os dados armazenados anteriormente.

Limitações:

-   Se você estiver usando o [armazenamento local](/documentation/business-messaging/whatsapp/local-storage) e um usuário compartilhar o número de telefone com você tocando em um [botão de pedido de informações de contato](#requesting-phone-numbers-from-users), as informações de contato desse usuário não serão adicionadas à sua lista de contatos. Em vez disso, envie uma mensagem para o número de telefone do usuário assim que ele for compartilhado com você. Isso fará com que o número de telefone e o BSUID sejam capturados pela sua lista de contatos.-   As listas de contatos são associadas aos portfólios empresariais. Isso significa que, se você tiver portfólios associados, o número de telefone e o BSUID de um usuário terão que ser registrados no livro de contatos de cada portfólio de forma independente, já que as informações de contato do usuário não são compartilhadas ou sincronizadas entre portfólios associados.

## Códigos de país

Se um usuário do WhatsApp tiver habilitado o recurso de nome de usuário, o número de telefone dele (e, consequentemente, o código de discagem do país) poderá não aparecer nos webhooks. Nesses casos, o BSUID do usuário será exibido, prefixado com o código do país [ISO 3166 alpha-2⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.iso.org%2Fiso-3166-country-codes.html&h=AT6YMuGiXXpq0BTzHMUw-UtTvOeBzfXSfEpoxQ53DXVnMryFpJ6NK0iAtQQR9_saZnunUEyHeFF_A6iFs-T8hUTd6uxXGVQMOicu7JxpnXucNr0zmylzJ3zP4nMCTJ06ArFJ4PviX23AFMDJXGh_whggxMA) de duas letras (por exemplo, `US.13491208655302741918`).

## Nomes de usuário comerciais

As empresas também poderão adotar um nome de usuário comercial. No entanto, se você adotar um nome de usuário comercial, o número de telefone da empresa não ficará oculto no cliente do WhatsApp ou do WhatsApp Business.

Cada nome de usuário comercial é mapeado para um único número de telefone comercial em todo o WhatsApp. Ou seja, um número de telefone pode ter apenas um nome de usuário por vez. Não é possível que dois números de telefone do WhatsApp (consumidor ou empresa) tenham o mesmo nome de usuário.

Os nomes de usuário comerciais devem ter o seguinte formato:

-   podem conter apenas letras (a-z), números (0-9), ponto (.) e sublinhado (\_)-   devem ter entre 3 e 35 caracteres-   devem conter pelo menos uma letra do alfabeto inglês (a-z, A-Z)-   não podem começar nem terminar com ponto nem ter dois pontos consecutivos-   não podem começar com www-   não podem terminar com um domínio (por exemplo, .com, .org, .net, .int, .edu, .gov, .mil, .us, .in, .html e assim por diante);-   a diferença entre maiúsculas e minúsculas é ignorada ao comparar nomes de usuário, mas os caracteres de ponto e sublinhado não. Por exemplo, "meuID" e "meuid" são o mesmo \*nome de usuário, mas "meuid", "meu.id" e "meu\_id" são nomes diferentes

### Nomes de usuário reservados

Antes da disponibilização desse recurso, você terá a opção de reivindicar o nome que o WhatsApp reservou para você. Também pode adotar um nome de usuário diferente que esteja alinhado aos requisitos da sua marca. É possível reivindicar um nome de usuário reservado por meio do Gerenciador do WhatsApp, do Meta Business Suite ou [via API](#get-reserved-usernames). Os nomes de usuário reivindicados e aprovados ficarão ativos assim que o recurso for disponibilizado.

Se o nome de usuário reservado já estiver sendo usado na sua Página do Facebook ou conta do Instagram, será necessário vincular o número de telefone comercial à Página do Facebook ou conta do Instagram para reivindicar o nome de usuário.

É possível vincular o número de telefone quando você reivindicar o nome de usuário no Meta Business Suite ou no Gerenciador do WhatsApp. Outra opção é acessar sua Página do Facebook ou conta do Instagram e [adicionar o número de telefone diretamente⁠](https://www.facebook.com/business/help/4631406400243963).

Para vincular um número de telefone, você deve ter controle total da Página ou conta, ou acesso parcial básico com a permissão manage\_phone. Consulte [Sobre o portfólio empresarial e as permissões de ativos de negócios⁠](https://www.facebook.com/business/help/442345745885606) para saber mais sobre controle/acesso e permissões.

### Prioridade de exibição da janela de conversa

A prioridade a seguir será observada (em ordem decrescente de prioridade) para a exibição de informações do perfil comercial nas janelas de conversa no app. Os números de telefone comerciais sempre aparecerão no seu perfil empresarial.

-   Nome salvo do contato-   Nome comercial verificado ou nome da [conta comercial oficial](/documentation/business-messaging/whatsapp/official-business-accounts)-   Nome de usuário-   Número de telefone

### Suporte

-   Se tiver alguma dúvida, fale com seu gerente de parceiros.-   Você pode entrar em contato com qualquer um dos [canais de suporte padrão](/documentation/business-messaging/whatsapp/support). Para integrações de API, abra um tíquete no Suporte Direto com o tipo de pergunta **Integração da API de Nome de Usuário do WA**.-   Use o canal **Denunciar abuso**via [Suporte Direto⁠](https://business.facebook.com/direct-support/) para denunciar um caso de falsificação de identidade.-   Use nosso [formulário de contato sobre propriedade intelectual do WhatsApp⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Fcontact%2Fforms%2F5071674689613749&h=AT6YMuGiXXpq0BTzHMUw-UtTvOeBzfXSfEpoxQ53DXVnMryFpJ6NK0iAtQQR9_saZnunUEyHeFF_A6iFs-T8hUTd6uxXGVQMOicu7JxpnXucNr0zmylzJ3zP4nMCTJ06ArFJ4PviX23AFMDJXGh_whggxMA) para denunciar violações.

### Como adotar ou alterar um nome de usuário comercial

Você poderá adotar ou alterar um nome de usuário comercial usando o Meta Business Suite, o Gerenciador do WhatsApp, o app WhatsApp Business ou a API, ainda este ano (data a ser definida).

Sintaxe da solicitação:

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/username' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "username": "<DESIRED_USERNAME>"
}'
```

Sintaxe da resposta, em caso de sucesso:

```
{
  "status": "<STATUS>"
}
```

-   `status`: o status do nome de usuário mais recente solicitado. Os valores podem ser os seguintes:
    -   `approved`: o nome de usuário solicitado foi aprovado e ficará visível para os usuários do WhatsApp assim que o recurso de nomes de usuário for disponibilizado.-   `reserved`: o nome de usuário solicitado foi reservado e aprovado, mas ainda não está visível para usuários do WhatsApp. Ele será exibido para os usuários do WhatsApp assim que o recurso estiver disponível para todos.

Sintaxe da resposta, em caso de falha:

```
{
  "error": {
    "message": "<MESSAGE>",
    "type": "<TYPE>",
    "code": <CODE>,
    "error_data": {
      "messaging_product": "whatsapp",
      "details": "<DETAILS>"
    },
    "error_subcode": <ERROR_SUBCODE>,
    "fbtrace_id": "<FBTRACE_ID>"
  }
}
```

Código

Detalhes

Possíveis motivos e soluções

`10`

O app não tem permissão para essa ação

Confirme que o usuário do sistema que possui o token usado na solicitação tem [acesso a ativos de negócios](/documentation/business-messaging/whatsapp/access-tokens#business-asset-access) apropriado na conta do WhatsApp Business: **controle total** ou **acesso parcial** a **números de telefone**.

`33`

ID inválido

(1) o ID do número de telefone comercial é inválido; (2) a conta do WhatsApp Business associada ao número de telefone comercial foi excluída; ou (3) o usuário cujo token foi usado na solicitação não concedeu ao app a permissão **whatsapp\_business\_management** (que exige Advanced Access se você for um [provedor de soluções](/documentation/business-messaging/whatsapp/solution-providers/overview))

`100`

Parâmetro inválido

O [formato do nome de usuário](#business-usernames) é inválido.

`147001`

Nome de usuário indisponível

O nome de usuário já foi reivindicado, não passou em nossas verificações internas ou não está disponível na plataforma. Tente solicitar outro nome de usuário.

`147002`

Conta não qualificada para solicitar um nome de usuário

O portfólio empresarial que é proprietário da conta do WhatsApp Business e do número de telefone comercial deve ter um [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) maior.

`147003`

Conta do Facebook não vinculada

É preciso [vincular⁠](https://www.facebook.com/business/help/4631406400243963) o número de telefone à Página do Facebook que já usa o nome de usuário solicitado.

`147004`

Conta do Instagram não vinculada

É preciso [vincular⁠](https://www.facebook.com/business/help/4631406400243963) o número de telefone à conta do Instagram que já usa o nome de usuário solicitado

`133010`

Conta não registrada

Primeiro, o número de telefone comercial precisa estar [registrado para uso com a API](/documentation/business-messaging/whatsapp/business-phone-numbers/registration).

### Como obter o nome de usuário atual

Use o ponto de extremidade **GET /<BUSINESS\_PHONE\_NUMBER\_ID>/username** para conferir o status do nome de usuário comercial associado ao número de telefone comercial ou informações sobre o nome de usuário.

Sintaxe da solicitação:

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/username' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

Sintaxe da resposta:

```
{
  "username": "<USERNAME>",
  "status": "<STATUS>"
}
```

-   `username`: nome de usuário atual. Será omitido se o número de telefone comercial não tiver um nome de usuário.-   `status`: status do nome de usuário. Os valores podem ser os seguintes:
    -   `approved`: o nome de usuário foi aprovado e está visível para os usuários do WhatsApp.-   `reserved`: o nome de usuário está reservado para o número de telefone comercial, mas não está visível para os usuários do WhatsApp. Ele ficará visível assim que o recurso de nomes de usuário for disponibilizado para todos.

### Como obter nomes de usuário reservados

Inclusão de um novo ponto de extremidade **GET /<BUSINESS\_PHONE\_NUMBER\_ID>/username\_suggestions** que retorna uma lista de nomes de usuário reservados para seu portfólio empresarial.

Chame o ponto de extremidade [**POST /<BUSINESS\_PHONE\_NUMBER\_ID>/username**](#adopt-or-change-a-business-username) para reivindicar o nome de usuário desejado da lista, que depois precisará ser aprovado. Depois que o nome de usuário for aprovado e disponibilizado no seu país, o status será definido como "ativo", e o nome de usuário da empresa começará a aparecer no seu perfil comercial. Além disso, os usuários poderão encontrá-lo usando a pesquisa por correspondência exata.

Sintaxe da solicitação:

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/username_suggestions' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

Sintaxe da resposta:

```
{
  "data": [
   {
     "username_suggestions": [
       "<RESERVED_USERNAME>",
       <!-- Additional usernames would follow, if any -->
     ]
   }
 ],
}
```

-   `username_suggestions`: uma matriz de nomes de usuário reservados, se houver. Esses nomes de usuário têm maior probabilidade de aprovação.

### Como excluir um nome de usuário

É possível usar o ponto de extremidade **DELETE /<BUSINESS\_PHONE\_NUMBER\_ID>/username** para excluir o nome de usuário comercial associado ao número de telefone.

Sintaxe da solicitação:

```
curl -X DELETE 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/username' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

Sintaxe da resposta:

```
{  "success": <SUCCESS?>}
```

-   `success`: booleano. O valor será definido como `true` se o nome de usuário for excluído com sucesso. Caso contrário, será definido como `false`.

### Webhook business\_username\_updates

Um novo webhook **business\_username\_update** será adicionado. Esse webhook será disparado quando o status do nome de usuário de uma empresa for alterado.

Inscreva seus apps no campo do webhook para receber notificações sobre alterações de nome de usuário.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "changes": [
        {
          "field": "business_username_update",
          "value": {
            "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
            "username": "<USERNAME>",
            "status": "<STATUS>"
          }
        }
      ]
    }
  ]
}
```

-   `id`: identificação da conta do WhatsApp Business.-   `time`: indica o registro de data e hora UNIX de quando o webhook foi disparado.-   `display_phone_number`: o número exibido do telefone comercial (o número mostrado no seu perfil no app).-   `username`: o nome de usuário cujo status foi alterado. Omitido se `status` for definido como `deleted`.-   `status`: os valores podem ser:
    -   `approved`: indica que o nome de usuário foi aprovado e está visível para os usuários do WhatsApp. Disparado quando o status do nome de usuário muda de `reserved` para `approved` ou quando o nome de usuário é alterado por meio do app WhatsApp Business.-   `deleted`: indica que o nome de usuário foi excluído por meio do app WhatsApp Business.-   `reserved`: indica que o nome de usuário está reservado para o número de telefone comercial, mas não está visível para os usuários do WhatsApp. Ele ficará visível assim que o recurso de nomes de usuário for disponibilizado para todos.

## Mensagens

### Como enviar pedidos de contato

As alterações se aplicam a solicitações do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#Creating).

Essa sintaxe de exemplo envia uma mensagem `text`, mas as alterações se aplicam a todos os tipos de mensagens.

```
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<USER_PHONE_NUMBER>",    <!-- CHANGED -->
  "recipient": "<BSUID>",         <!-- ADDED -->
  "type": "text",
  "text": {
    "body": "<BODY_TEXT>"
  }
}'
```

É possível incluir `to` (número de telefone) e `recipient` (BSUID ou BSUID principal) na solicitação. Se fizer isso, `to` (número de telefone) terá precedência. Se preferir, você também poderá usar uma das seguintes opções:

Para enviar uma mensagem usando apenas o número de telefone do usuário:

-   defina `to` como o número de telefone do usuário-   omita a propriedade `recipient`

Para enviar uma mensagem usando apenas o BSUID do usuário ou o BSUID principal:

-   defina `recipient` como o BSUID do usuário ou o BSUID principal-   omita a propriedade `to`

### Como enviar resposta às mensagens

As alterações se aplicam às respostas do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#Creating).

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<USER_PHONE_NUMBER_OR_BSUID>",    <!-- CHANGED -->
      "wa_id": "<USER_PHONE_NUMBER>",             <!-- CHANGED -->
      "user_id": "<BSUID>"                        <!-- ADDED -->
    }
  ],
  "messages": [
    {
      "id": "<WHATSAPP_MESSAGE_ID>"
    }
  ]
}
```

-   `input`: novo valor (BSUID ou BSUID principal).
    -   Retornará o número de telefone do usuário, caso a mensagem tenho sido enviada para o número de telefone do usuário.-   Retornará o BSUID do usuário ou o BSUID principal, caso a mensagem tenha sido enviada para o BSUID do usuário ou para o BSUID principal.-   Retornará a identificação do grupo, caso a mensagem tenha sido enviada a um grupo.-   `wa_id`: novo comportamento (pode ser omitido). Retornará o número de telefone do usuário, caso a mensagem tenho sido enviada para o número de telefone do usuário. Caso contrário, o campo será omitido.-   `user_id`: nova propriedade.
    -   Retornará o BSUID do usuário ou o BSUID principal, caso a mensagem tenha sido enviada para o BSUID do usuário ou o BSUID principal, ou caso você tenha incluído o número de telefone e o BSUID do usuário ou o BSUID principal ao enviar a mensagem (fazendo com que a mensagem seja enviada para o número de telefone do usuário, que tem precedência).-   Será omitido se a mensagem tiver sido enviada para o número de telefone do usuário.

Exemplo de resposta a uma solicitação de envio de mensagem enviada ao número de telefone de um usuário (o BSUID do usuário ou o BSUID principal não foi usado na solicitação):

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

Exemplo de resposta a uma solicitação de envio de mensagem enviada ao BSUID de um usuário (o número de telefone do usuário não é usado na solicitação):

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "US.13491208655302741918",      "user_id": "US.13491208655302741918"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

Exemplo de resposta a uma solicitação de envio de mensagem enviada ao número de telefone e ao BSUID de um usuário (o número de telefone do usuário tem precedência):

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234",      "user_id": "US.13491208655302741918"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"    }  ]}
```

### Códigos de erro

Inclusão de uma nova resposta de código de erro para o ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#Creating).

-   Código de erro: `131062`-   Detalhes: `Business-scoped User ID (BSUID) recipients are not supported for this message.`

## API de Mensagens de Marketing para o WhatsApp

### Como enviar solicitações de mensagem de marketing

A API de Mensagens de Marketing para o WhatsApp aceitará números de telefone, BSUIDs e BSUIDs principais. Recomendamos enviar mensagens para números de telefone, principalmente para continuar recebendo números de telefone em webhooks.

As alterações serão aplicadas às solicitações do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/marketing\_messages](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages).

```
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/marketing_messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<USER_PHONE_NUMBER>",    <!-- CHANGED -->
  "recipient": "<BSUID>",         <!-- ADDED -->
  "type": "template",
  "template": {
    <EXPECTED_TEMPLATE_PARAMETERS>
  }
}'
```

É possível incluir `to` (número de telefone) e `recipient` (BSUID ou BSUID principal) na solicitação. Se fizer isso, `to` (número de telefone) terá precedência. Se preferir, você também poderá usar uma das seguintes opções:

Para enviar uma mensagem usando apenas o número de telefone do usuário:

-   defina `to` como o número de telefone do usuário-   omita a propriedade `recipient`

Para enviar uma mensagem usando apenas o BSUID do usuário ou o BSUID principal:

-   defina `recipient` como o BSUID do usuário ou o BSUID principal-   omita a propriedade `to`

### Como enviar resposta a uma mensagem de marketing

Essas alterações se aplicam às respostas do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/marketing\_messages](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages).

```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "<USER_PHONE_NUMBER_OR_ID>",    <!-- CHANGED -->
      "wa_id": "<USER_PHONE_NUMBER>",          <!-- CHANGED -->
      "user_id": "<BSUID>"                     <!-- ADDED -->
    }
  ],
  "messages": [
    {
      "id": "<WHATSAPP_MESSAGE_ID>",
      "message_status": "<PACING_STATUS>"
    }
  ]
}
```

-   `input`: novo valor (BSUID ou BSUID principal).
    -   Retornará o número de telefone do usuário, caso a mensagem tenho sido enviada para o número de telefone do usuário.-   Retornará o BSUID do usuário ou o BSUID principal, caso a mensagem tenha sido enviada para o BSUID do usuário ou para o BSUID principal.-   Retornará a identificação do grupo, caso a mensagem tenha sido enviada a um grupo.-   `wa_id`: retornará o número de telefone do usuário, caso a mensagem tenha sido enviada para o número de telefone dele. Caso contrário, o campo será omitido.-   `user_id`: nova propriedade.
    -   Retornará o BSUID do usuário ou o BSUID principal, caso a mensagem tenha sido enviada para o BSUID do usuário ou o BSUID principal, ou caso você tenha incluído o número de telefone e o BSUID do usuário/BSUID principal ao enviar a mensagem (fazendo com que a mensagem seja enviada para o número de telefone do usuário, que tem precedência).-   Será omitido se a mensagem tiver sido enviada para o número de telefone do usuário.

Exemplo de resposta ao envio de uma mensagem de modelo para o número de telefone de um usuário:

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "+16505551234",      "wa_id": "16505551234"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA",      "message_status": "accepted"    }  ]}
```

Exemplo de resposta ao envio de uma mensagem de modelo para o BSUID de um usuário:

```
{  "messaging_product": "whatsapp",  "contacts": [    {      "input": "US.13491208655302741918",      "user_id": "US.13491208655302741918"    }  ],  "messages": [    {      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA",      "message_status": "accepted"    }  ]}
```

## Webhooks de mensagens

A partir de 16 de fevereiro de 2026, os webhooks de mensagens de teste disparados por meio do **Painel de Apps** (**Casos de uso** > **Conecte-se com clientes pelo WhatsApp** > **Personalizar** > **Configuração**, ou **WhatsApp** > **Configuração**, para apps criados antes de dezembro de 2026), incluirão BSUIDs de teste.

### Webhooks de mensagens de status

As alterações serão aplicadas aos webhooks de [status de mensagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) enviada, entregue, lida e com falha.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },

            <!-- Contacts will be included for sent, delivered, and read status -->
            "contacts": [                                      <!-- ADDED -->
              {
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",               <!-- ADDED --><!-- Only included if user has enabled the username feature -->
                  "username": "<USERNAME>"                     <!-- ADDED -->

                },
                "wa_id": "<USER_PHONE_NUMBER>",                <!-- ADDED -->
                "user_id": "<BSUID>",                          <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "parent_user_id": "<PARENT_BSUID>"             <!-- ADDED -->
              }
            ],

            "statuses": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "status": "<STATUS>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "recipient_id": "<USER_PHONE_NUMBER>",         <!-- CHANGED -->
                "recipient_user_id": "<BSUID>",                <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "parent_recipient_user_id": "<PARENT_BSUID>"   <!-- ADDED -->
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

-   `contacts`: nova matriz. Incluída apenas em mensagens com status enviada, entregue ou lida. Será omitida por completo para webhooks de mensagens de status `failed`.
    -   `name`: nova propriedade. O valor será definido como o nome de exibição do usuário do WhatsApp.-   `username`: nova propriedade.
        -   Será definida como o nome de usuário do WhatsApp se o usuário tiver habilitado o recurso de nome de usuário.-   Será omitida para webhooks de mensagens de status `sent` ou se o usuário não tiver habilitado o recurso de nomes de usuário.-   `wa_id`: nova propriedade.
        -   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone de acordo com as condições descritas na seção [Números de telefone](#phone-numbers).-   Será definida como o número de telefone do usuário se a mensagem for enviada para o número de telefone dele.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário do WhatsApp.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, a propriedade será totalmente omitida.-   `statuses`
    -   `recipient_id`: novo comportamento (pode ser omitido).
        -   Será definido como o número de telefone do usuário se a mensagem foi enviada para o número de telefone dele.-   Será definido como a identificação do grupo se a mensagem foi enviada para um grupo.-   Será omitido se a mensagem foi enviada ao BSUID do usuário ou ao BSUID principal e não conseguirmos incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   `recipient_user_id`: nova propriedade. Será definida como o BSUID do usuário ou o BSUID principal se a mensagem for enviada para o BSUID do usuário ou o BSUID principal. Caso contrário, o campo será omitido.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, ele será totalmente omitido.

Exemplo de webhook de mensagens com status "entregue" descrevendo uma mensagem enviada por uma empresa que habilitou os BSUIDs principais para o número de telefone de um usuário do WhatsApp que habilitou o recurso de nomes de usuário:

```
{ "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Pablo M.",                  "username": "@pablomorales"                },                "wa_id": "16505551234",                "user_id": "US.13491208655302741918",                "parent_user_id": "US.11815799212886844830"              }            ],            "statuses": [              {                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "status": "delivered",                "timestamp": "1750030073",                "recipient_id": "16505551234",                "recipient_user_id": "US.13491208655302741918",                "parent_recipient_user_id": "US.11815799212886844830",                "pricing": {                  "billable": true,                  "pricing_model": "PMP",                  "type": "regular",                  "category": "marketing"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

Exemplo de webhook de mensagens com status "entregue" descrevendo uma mensagem enviada por uma empresa que habilitou BSUIDs principais para o BSUID de um usuário do WhatsApp que habilitou o recurso de nomes de usuário. Neste exemplo, não foi possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers) (portanto, `wa_id` e `recipient_id` foram omitidos).

```
{ "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Pablo M.",                  "username": "@pablomorales"                },                "user_id": "US.13491208655302741918",                "parent_user_id": "US.11815799212886844830"              }            ],            "statuses": [              {                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",                "status": "delivered",                "timestamp": "1750030073",                "recipient_user_id": "US.13491208655302741918",                "parent_user_id": "US.11815799212886844830",                "pricing": {                  "billable": true,                  "pricing_model": "PMP",                  "type": "regular",                  "category": "marketing"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

### Webhooks de mensagens recebidas

As alterações se aplicam a webhooks de mensagens recebidas ([texto](/documentation/business-messaging/whatsapp/webhooks/reference/messages/text), [imagem](/documentation/business-messaging/whatsapp/webhooks/reference/messages/image), [interativa](/documentation/business-messaging/whatsapp/webhooks/reference/messages/interactive), entre outros), incluindo mensagens recebidas enviadas por usuários em uma conversa em grupo.

O exemplo de sintaxe abaixo é para uma mensagem de **texto** recebida, mas as alterações são as mesmas para todos os tipos de mensagem recebida.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_PROFILE_NAME>",

                  <!-- Only included if user has enabled the username feature -->
                  "username": "<USERNAME>"                 <!-- ADDED -->
                },
                "wa_id": "<WHATSAPP_USER_ID>",             <!-- CHANGED -->
                "user_id": "<BSUID>",                      <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "parent_user_id": "<PARENT_BSUID>"         <!-- ADDED -->
              }
            ],
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",    <!-- CHANGED -->
                "from_user_id": "<BSUID>",                 <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "from_parent_user_id": "<PARENT_BSUID>",   <!-- ADDED --><!-- Only included if incoming message sent in a group -->
                "group_id": "<GROUP_ID>",

                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "text",
                "text": {
                  "body": "<MESSAGE_TEXT_BODY>"
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

-   `contacts`
    -   `profile`
        -   `username`: nova propriedade.
            -   Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário.-   Se o usuário não tiver um nome de usuário, o campo será omitido.-   `wa_id`: novo comportamento (pode ser omitido).
        -   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definido como o número de telefone do usuário, se ele não tiver habilitado o recurso de nomes de usuário.-   `user_id`: nova propriedade, definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o BSUID principal do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `messages`
    -   `from`: novo comportamento (pode ser omitido).
        -   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definido como o número de telefone do usuário, se ele não tiver habilitado o recurso de nomes de usuário.-   `from_user_id`: nova propriedade, definida como o BSUID do usuário.-   `from_parent_user_id`: nova propriedade, definida como o BSUID principal do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

Exemplo de mensagem de texto recebida de um usuário que habilitou o recurso de nome de usuário para uma empresa que habilitou [BSUIDs](#parent-business-scoped-user-ids) principais. Nesse cenário, não foi possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).

```
{  "object": "whatsapp_business_account",  "entry": [    {      "id": "102290129340398",      "changes": [        {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": [              {                "profile": {                  "name": "Sheena Nelson",                  "username": "@realsheenanelson"                },                "user_id": "uUS.13491208655302741918",                "parent_user_id": "US.11815799212886844830"              }            ],            "messages": [              {                "from_user_id": "US.13491208655302741918",                "from_parent_user_id": "US.11815799212886844830",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",                "timestamp": "1749416383",                "type": "text",                "text": {                  "body": "Does it come in another color?"                }              }            ]          },          "field": "messages"        }      ]    }  ]}
```

### Webhooks de mensagens de status do sistema

As alterações se aplicam a webhooks de mensagens com [status do sistema](/documentation/business-messaging/whatsapp/webhooks/reference/messages/system).

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "system",
                "system": {
                  "body": "User...",                       <!-- CHANGED -->
                  "wa_id": "<NEW_WHATSAPP_USER_ID>",       <!-- CHANGED -->
                  "user_id": "<NEW_BSUID>",                <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                  "parent_user_id": "<NEW_PARENT_BSUID>",  <!-- ADDED -->
                  "type": "<SYSTEM_CHANGE_TYPE>"           <!-- CHANGED -->
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

-   `system`
    -   `body`: nova string. Será definida como `User <WHATSAPP_USER_PROFILE_NAME> changed from <OLD_BSUID> to <NEW_BSUID>` se o usuário tiver alterado o número de telefone comercial.-   `wa_id`: novo comportamento (pode ser omitido).
        -   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definido como o número de telefone do usuário, se ele não tiver habilitado o recurso de nomes de usuário.-   `user_id`: nova propriedade. Será definido como o novo BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o novo [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, ela será omitida. `type`: novo valor (`user_changed_user_id`). Será definido como `user_changed_user_id` se o usuário do WhatsApp tiver alterado o número de telefone.

### Webhooks user\_preferences

As alterações serão aplicadas aos webhooks [user\_preferences](/documentation/business-messaging/whatsapp/webhooks/reference/user_preferences).

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_NAME>",

                  <!-- Only included if user has enabled the usernames feature -->
                  "username": "<USERNAME>"                 <!-- ADDED -->
                },
                "wa_id": "<WHATSAPP_USER_ID>",             <!-- CHANGED -->
                "user_id": "<BSUID>",                      <!-- ADDED --><!-- Only included if you have enabled parent BSUIDs -->
                "parent_user_id": "<PARENT_BSUID>"         <!-- ADDED -->
              }
            ],
            "user_preferences": [
              {
                "wa_id": "<WHATSAPP_USER_ID>",             <!-- CHANGED -->
                "user_id": "<BSUID>",                      <!-- ADDED --><!-- Only included if you have enabled parent BSUIDs -->
                "parent_user_id": "<PARENT_BSUID>",        <!-- ADDED -->

                "detail": "<PREFERENCE_DESCRIPTION>",
                "category": "marketing_messages",
                "value": "<PREFERENCE>",
                "timestamp": <WEBHOOK_SENT_TIMESTAMP>
              }
            ]
          },
          "field": "user_preferences"
        }
      ]
    }
  ]
}
```

-   `contacts`
    -   `profile`
        -   `username`: nova propriedade. Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. A propriedade será omitida se o usuário tiver desabilitado o recurso de nome de usuário.-   `wa_id`: novo comportamento (pode ser omitido).
        -   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definido como o número de telefone do usuário, se ele não tiver habilitado o recurso de nomes de usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `user_preferences`
    -   `wa_id`: novo comportamento (pode ser omitido). Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

## API de Grupos

### Como obter informações do grupo

As alterações se aplicam a respostas do ponto de extremidade [GET /<GROUP\_ID>](/documentation/business-messaging/whatsapp/groups/reference#get-group-info).

```
{
  "participants": [
    {
      "wa_id": "<USER_PHONE_NUMBER>"        <!-- CHANGED -->
      "user_id": "<BSUID>",                 <!-- ADDED --><!-- Only returned if the you have enabled parent BSUIDs -->
      "parent_user_id": "<PARENT_BSUID>",   <!-- ADDED --><!-- Only returned if the user has enabled the usernames feature -->
      "username": "<USERNAME>"              <!-- ADDED -->

    }
  ],
  "subject": "<GROUP_SUBJECT>",
  "id": "<GROUP_ID>",
  "messaging_product": "whatsapp"
}
```

-   `wa_id`: novo comportamento (pode ser omitido).
    -   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definido como o número de telefone do usuário, se ele não tiver habilitado o recurso de nomes de usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `username`: nova propriedade.
    -   Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário.-   Será omitida se o usuário não estiver usando ou tiver desabilitado o recurso de nome de usuário.

### Como obter as solicitações para participar de grupos

As alterações se aplicam a respostas do ponto de extremidade [GET /<GROUP\_ID>/join\_requests](/documentation/business-messaging/whatsapp/groups/reference#groups-with-join-requests).

```
{
  "data": [
    {
      "join_request_id": "<JOIN_REQUEST_ID>",
      "creation_timestamp": "<JOIN_REQUEST_TIMESTAMP>",
      "wa_id": "<USER_PHONE_NUMBER>",                    <!-- CHANGED -->
      "user_id": "<BSUID>",                              <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
      "parent_user_id": "<PARENT_BSUID>",                <!-- ADDED --><!-- Only included if user has enabled usernames feature -->
      "username": "<USERNAME>"                           <!-- ADDED -->
    }
  ],
  "paging": {
    "cursors": {
      "before": "<BEFORE_CURSOR>",
      "after": "<AFTER_CURSOR>"
    }
  }
}
```

-   `wa_id`: novo comportamento (pode ser omitido).
    -   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definido como o número de telefone do usuário, se ele não tiver habilitado o recurso de nomes de usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `username`: nova propriedade. Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. Será omitida se o usuário não tiver habilitado o recurso de nome de usuário.

### Como remover participantes do grupo

As alterações se aplicam a solicitações do ponto de extremidade [DELETE /<GROUP\_ID>/participants](/documentation/business-messaging/whatsapp/groups/reference#remove-group-participants).

```
curl -g -X DELETE 'https://graph.facebook.com/<API_VERSION>/<GROUP_ID>/participants' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "participants": [
    {
      "user": "<USER_PHONE_NUMBER>"    <!-- CHANGED -->
    }
  ]
}'
```

-   `user`: aceitará o número de telefone ou o BSUID do usuário.

## Webhooks da API de Grupos

### Webhooks de mensagens de status para grupos

Essas alterações serão aplicadas a webhooks de mensagens de status `delivered`, `read` e [](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)para mensagens enviadas a um grupo.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },

           <!-- Contacts will be included for delivered and read status -->
           "contacts": [                             <!-- ADDED -->
                {
                  "profile": {
                    "name": "<USER_DISPLAY_NAME>",   <!-- ADDED --><!-- Only included if user has enabled usernames feature -->
                    "username": "<USERNAME>"         <!-- ADDED -->
                  },
                  "wa_id": "<USER_PHONE_NUMBER>",    <!-- ADDED -->
                  "user_id": "<BSUID>",              <!-- ADDED -->

                  <-- Only included if parent BSUIDs enabled -->
                  "parent_user_id": "<PARENT_BSUID>"
                },
                # Additional contact objects would follow, if aggregated
                {
                  ...
                }
              ],

            "statuses": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "status": "<STATUS>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "recipient_id": "<GROUP_ID>",
                "recipient_type": "group",
                "recipient_participant_id": "<GROUP_PARTICIPANT_USER_PHONE_NUMBER>", <!-- CHANGED -->
                "recipient_participant_user_id": "<BSUID>",                <-- ADDED -->

                <!-- Only included if parent BSUIDs enabled -->
                "recipient_participant_parent_user_id": "<PARENT_BSUID>",  <-- ADDED -->

                <!-- Omitted for v24.0+ unless webhook is for a free entry point conversation -->
                "conversation": {
                  "id": "<CONVERSATION_ID>",
                  "expiration_timestamp": "<CONVERSATION_EXPIRATION_TIMESTAMP>",
                  "origin": {
                    "type": "<CONVERSATION_CATEGORY>"
                  }
                },

                "pricing": {
                  "billable": <IS_BILLABLE?>,
                  "pricing_model": "<PRICING_MODEL>",
                  "type": "<PRICING_TYPE>",
                  "category": "<PRICING_CATEGORY>"
                }
              },
              # Additional status objects would follow, if aggregated
              {
                ...
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

-   `contacts`: nova matriz. Incluído apenas em mensagens com status entregue ou lida. Será omitida por completo para webhooks de mensagens de status com falha.
    -   `name`: nova propriedade. O valor será definido como o nome de exibição do usuário do WhatsApp.-   `username`: nova propriedade. Será definida como o nome de usuário do WhatsApp se o usuário tiver adotado um nome de usuário. Será omitida para webhooks de mensagens de status enviadas ou se o usuário não tiver habilitado o recurso de nomes de usuário.-   `wa_id`: nova propriedade.
        -   Será omitida se o usuário tiver adotado um nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definido como o número de telefone do usuário se a mensagem foi enviada para o número de telefone dele.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário do WhatsApp.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `recipient_participant_id`: alterada. Será definida como o número de telefone do usuário se a mensagem tiver sido enviada para o respectivo número. Caso contrário, o campo será omitido.-   `recipient_participant_user_id`: se você tiver enviado a mensagem para o BSUID do usuário ou para o BSUID principal, esse campo será definido como o BSUID do usuário ou o BSUID principal. Caso contrário, o campo será omitido.-   `recipient_participant_parent_user_id`: nova propriedade. Será definida como o BSUID principal do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

### Webhooks group\_participants\_update

Essas alterações se aplicam ao webhook [group\_participants\_update](/documentation/business-messaging/whatsapp/groups/webhooks#group-participants-update-webhooks).

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "groups": [
              {
                "timestamp": <WEBHOOK_TRIGGER_TIMESTAMP>,
                "group_id": "<GROUP_ID>",

                <!-- Only if business removes participant from group -->
                "type": "group_participants_remove",
                "request_id": "REQUEST_ID",
                "removed_participants": [
                  {
                    "input": "<USER_PHONE_NUMBER>",      <!-- CHANGED -->
                  }
                ],

                "initiated_by": "business"

                <!-- Only if user removes themself from group -->
                "type": "group_participants_remove",
                "request_id": "REQUEST_ID",
                "removed_participants": [
                  {
                    "wa_id": "<USER_PHONE_NUMBER>"       <!-- CHANGED -->
                    "user_id": "<BSUID>",                <!-- ADDED -->
                    "parent_user_id": "<PARENT_BSUID>",  <!-- ADDED -->
                    "username": "<USERNAME>"             <!-- ADDED -->
                  }
                ],

                "initiated_by": "participant"

                <!-- Only if user joins group via invite link -->
                "type": "group_participants_add",
                "reason": "invite_link",
                "added_participants": [
                  {
                    "wa_id": "<USER_PHONE_NUMBER>"       <!-- CHANGED -->
                    "user_id": "<BSUID>",                <!-- ADDED -->
                    "parent_user_id": "<PARENT_BSUID>",  <!-- ADDED -->
                    "username": "<USERNAME>"             <!-- ADDED -->
                  }
                ]

                <!-- Only if join request created -->
                "type": "group_join_request_created",
                "join_request_id": "<JOIN_REQUEST_ID>",
                "wa_id": "<USER_PHONE_NUMBER>",          <!-- CHANGED -->
                "user_id": "<BSUID>",                    <!-- ADDED -->
                "parent_user_id": "<PARENT_BSUID>",      <!-- ADDED -->
                "username": "<USERNAME>"                 <!-- ADDED --><!-- Only if join request revoked -->
                "type": "group_join_request_revoked",
                "join_request_id": "<JOIN_REQUEST_ID>",
                "wa_id": "<USER_PHONE_NUMBER>"           <!-- CHANGED -->
                "user_id": "<BSUID>",                    <!-- ADDED -->
                "parent_user_id": "<PARENT_BSUID>",      <!-- ADDED -->
                "username": "<USERNAME>"                 <!-- ADDED -->
              }
            ]
          },
          "field": "group_participants_update"
        }
      ]
    }
  ]
}
```

-   `input`: novo valor (BSUID ou BSUID principal).
    -   Será definido como o número de telefone do usuário se você tiver removido o usuário do grupo usando o número de telefone dele.-   Será definido como o BSUID do usuário ou o BSUID principal se você tiver removido o usuário do grupo usando o BSUID do usuário ou o BSUID principal.-   `wa_id`: novo comportamento (pode ser omitido).
    -   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `username`: nova propriedade. Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.

## API de Bloqueio de Usuários

### Como bloquear ou desbloquear solicitações de usuários

As alterações se aplicam às solicitações POST e DELETE para [bloquear usuários](/documentation/business-messaging/whatsapp/block-users). Este exemplo mostra a sintaxe de uma solicitação para bloquear um usuário, mas as alterações também se aplicam a solicitações de desbloqueio.

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/block_users' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKENS>' \
-d '
{
  "messaging_product": "whatsapp",
  "block_users": [
    {
      "user": "<USER_PHONE_NUMBER>"
    },
    {
      "user_id": "<BSUID>"   <!-- ADDED -->
    }
  ]
}'
```

É possível incluir `user` (número de telefone) e `user_id` (BSUID ou BSUID principal) na solicitação. Se fizer isso, `user` (número de telefone) terá precedência. Se preferir, você também poderá usar uma das seguintes opções:

Para bloquear ou desbloquear um usuário usando o número de telefone:

-   Defina `user` como o número de telefone do usuário-   Omita o objeto `user_id`

Para bloquear ou desbloquear um usuário usando o BSUID do usuário ou o BSUID principal:

-   Defina `user_id` como o BSUID do usuário ou o BSUID principal-   Omita o objeto `user`

### Como bloquear ou desbloquear respostas a solicitações

As alterações serão aplicadas às respostas de solicitações POST e DELETE para [bloquear usuários](/documentation/business-messaging/whatsapp/block-users).

```
{
  "messaging_product": "whatsapp",
  "block_users": {
    "added_users": [
      {
        "input": "<USER_PHONE_NUMBER>",  <!-- CHANGED -->
        "wa_id": "<USER_PHONE_NUMBER>",  <!-- CHANGED -->
        "user_id": "<BSUID>"             <!-- ADDED -->
      }
    ]
  }
}
```

-   `input`: novo valor (BSUID ou BSUID principal).
    -   Será definida como o BSUID do usuário ou o BSUID principal se você tiver usado o BSUID do usuário ou o BSUID principal para bloquear ou desbloquear o usuário.-   Será definido como o número de telefone do usuário se você tiver usado o número de telefone dele ao bloqueá-lo ou desbloqueá-lo.-   `wa_id`: novo comportamento (pode ser omitido).
    -   Será omitido se você tiver usado o BSUID do usuário ou o BSUID principal ao bloquear ou desbloquear o usuário.-   Será definido como o número de telefone do usuário se você tiver usado o número de telefone dele para bloqueá-lo ou desbloqueá-lo.-   `user_id`: nova propriedade.
    -   Será definida como o BSUID do usuário ou o BSUID principal se você tiver usado o BSUID do usuário ou o BSUID principal para bloqueá-lo ou desbloqueá-lo.-   Será omitida se você tiver usado o número de telefone do usuário para bloqueá-lo ou desbloqueá-lo.

## API de Ligações

### Solicitações de ligações iniciadas pela empresa

As alterações se aplicam a solicitações da API de Ligações iniciadas pela empresa.

```
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "to": "<USER_PHONE_NUMBER>",    <!-- CHANGED -->
  "recipient": "<BSUID>",         <!-- ADDED -->
  "action": "connect",
  "session": {
    "sdp_type": "offer",
    "sdp": "<RFC_4566_SDP>"
  }
}'
```

É possível incluir `to` (número de telefone) e `recipient` (BSUID ou BSUID principal) na solicitação. Se fizer isso, `to` (número de telefone) terá precedência. Se preferir, você também poderá usar uma das seguintes opções:

Para fazer uma ligação usando apenas o número de telefone do usuário:

-   defina `to` como o número de telefone do usuário-   omita a propriedade `recipient`

Para chamar um usuário usando apenas o BSUID dele ou o BSUID principal:

-   defina `recipient` como o BSUID do usuário ou o BSUID principal-   omita a propriedade `to`

### Como obter permissões de ligação

As alterações se aplicam a solicitações para [obter permissões para ligações](/documentation/business-messaging/whatsapp/calling/user-call-permissions#call-permission-request-basics). Não há alterações nas respostas.

Obter permissões de ligação usando o número de telefone do usuário:

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/call_permissions?user_wa_id=<USER_PHONE_NUMBER>' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
```

-   `user_wa_id`: definido como o número de telefone do usuário.

Obter permissões de ligação usando o BSUID do usuário ou o BSUID principal:

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/call_permissions?recipient=<BSUID>' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
```

-   `recipient`: defina como o BSUID do usuário ou o BSUID principal.

### Como enviar uma solicitação de permissão para ligação

Confira como [enviar pedidos de contato](#send-message-requests).

### Webhooks de solicitação de permissão para ligação

As alterações serão aplicadas aos webhooks de resposta de permissão de ligação recebida [interactive messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages/interactive).

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<WHATSAPP_USER_PROFILE_NAME>",

                  <!-- Only included if user has enabled the usernames feature -->
                  "username": "<USERNAME>"                <!-- ADDED -->

                },
                "wa_id": "<WHATSAPP_USER_ID>",            <!-- CHANGED -->
                "user_id": "<BSUID>",                     <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "parent_user_id": "<PARENT_BSUID>"        <!-- ADDED -->

              }
            ],
            "messages": [
              {
                "context": {
                  "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                  "id": "<CONTEXTUAL_WHATSAPP_MESSAGE_ID>"
                },
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",   <!-- CHANGED -->
                "from_user_id": "<BSUID>",                <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "from_parent_user_id": "<PARENT_BSUID>"   <!-- ADDED -->

                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "interactive",
                "interactive": {
                  "type":  "call_permission_reply",
                  "call_permission_reply": {
                    "response": accept,
                    "expiration_timestamp": "<EXPIRATION_TIMTESTAMP>",
                    "response_source": "<RESPONSE_SOURCE>"
                  }
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

-   `contacts`
    -   `profile`
        -   `username`: nova propriedade. Será definida como o nome de usuário do WhatsApp se o usuário tiver adotado um nome de usuário. Se o usuário não tiver um nome de usuário, o campo será omitido.-   `wa_id`: nova propriedade.
        -   Será omitida se o usuário tiver adotado um nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definida como o número de telefone do usuário se o usuário não tiver adotado um nome de usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `messages`
    -   `from`: novo comportamento (pode ser omitido).
        -   Será definida como o número de telefone do usuário caso ele não tenha habilitado o recurso de nome de usuário.-   Será omitido se o usuário tiver habilitado o recurso de nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.

### Webhooks de ligações conectadas iniciadas pela empresa

As alterações se aplicam a webhooks de [ligações conectadas](/documentation/business-messaging/whatsapp/calling/reference#call-connect-webhook) iniciadas pela empresa.

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "contacts": [                                  <!-- ADDED -->
              {
                "profile": {
                  <!-- Only included if user has enabled the usernames feature -->
                  "username": "<USERNAME>"                 <!-- ADDED -->
                },
                "wa_id": "<USER_PHONE_NUMBER>",            <!-- ADDED -->
                "user_id": "<BSUID>",                      <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "parent_user_id": "<PARENT_BSUID>"         <!-- ADDED -->
              }
            ],
            "calls": [
              {
                "biz_opaque_callback_data": "<DATA>",
                "session": {
                  "sdp_type": "answer",
                  "sdp": "<SDP>"
                },
                "from": "<BUSINESS_PHONE_NUMBER>",
                "id": "<WHATSAPP_CALL_ID>",
                "to": "<USER_PHONE_NUMBER>",               <!-- CHANGED -->
                "to_user_id": "<BSUID>",                   <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "to_parent_user_id": "<PARENT_BSUID>",     <!-- ADDED -->

                "event": "connect",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "direction": "BUSINESS_INITIATED"
              }
            ],
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `contacts`: nova matriz.
    -   `profile`
        -   `username`: nova propriedade.
            -   Será definida como o nome de usuário do WhatsApp se o usuário tiver adotado um nome de usuário.-   Será omitida para webhooks de mensagens de status enviadas ou se o usuário não estiver usando um nome de usuário.-   `wa_id`: nova propriedade.
        -   Será omitida se o usuário tiver adotado um nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers).-   Será definido como o número de telefone do usuário se a mensagem foi enviada para o número de telefone dele.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário do WhatsApp.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `calls`
    -   `to`: novo comportamento (pode ser omitido). Será definido como o número de telefone do usuário se ele tiver adotado um nome de usuário e for possível incluir o número de telefone dele com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o campo será omitido.-   `to_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `to_parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, a propriedade será totalmente omitida.

### Webhooks de ligações conectadas iniciadas pelo usuário

As alterações serão aplicadas a webhooks de [ligações conectadas](/documentation/business-messaging/whatsapp/calling/reference#call-connect-webhook) iniciadas pelo usuário.

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "calls": [
              {
                "session": {
                  "sdp_type": "offer",
                  "sdp": "<SDP>"
                },
                "from": "<USER_PHONE_NUMBER>",             <!-- CHANGED -->
                "from_user_id": "<BSUID>",                 <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "from_parent_user_id": "<PARENT_BSUID>",   <!-- ADDED -->

                "id": "<WHATSAPP_CALL_ID>",
                "to": "<BUSINESS_PHONE_NUMBER>",
                "event": "connect",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "direction": "USER_INITIATED"
              }
            ],
            "contacts": [
              {
                "wa_id": "<USER_PHONE_NUMBER>",            <!-- CHANGED -->
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",           <!-- ADDED --><!-- Only included if user has enabled usernames feature -->
                  "username": "<USERNAME>"                 <!-- ADDED -->

                },
                "user_id": "<BSUID>"                       <!-- ADDED -->,

                <!-- Only included if parent BSUIDs enabled -->
                "parent_user_id": "<PARENT_BSUID>"         <!-- ADDED -->
              }
            ],
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `calls`
    -   `from`: novo comportamento (pode ser omitido). Será omitido se o nome de usuário tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone dele com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `from_parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `contacts`
    -   `wa_id`: novo comportamento (pode ser omitido).
        -   Será omitida se o usuário tiver adotado um nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `name`: nova propriedade. Será definida como o nome do perfil do usuário.-   `username`: nova propriedade. Se o usuário tiver definido um nome de usuário, ele será usado para esse campo. Caso contrário, o campo será omitido.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

### Webhooks de ligações iniciadas pela empresa que foram encerradas

As alterações se aplicam a webhooks de ligações iniciadas pela empresa que foram [encerradas](/documentation/business-messaging/whatsapp/calling/reference#call-terminate-webhook).

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "calls": [
              {
                "biz_opaque_callback_data": "<BUSINESS_OPAQUE_DATA>",
                "from": "<BUSINESS_PHONE_NUMBER>",
                "id": "<WHATSAPP_CALL_ID>",
                "to": "<USER_PHONE_NUMBER>",              <!-- CHANGED -->
                "to_user_id": "<BSUID>",                  <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "to_parent_user_id": "<PARENT_BSUID>",    <!-- ADDED -->

                "event": "terminate",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "direction": "BUSINESS_INITIATED",
                "status": "COMPLETED"
              }
            ],
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "contacts": [                                 <!-- ADDED -->
              {
                "profile": {
                <!-- Only included if user has enabled the usernames feature -->
                "username": "<USERNAME>"                 <!-- ADDED -->
                },
                "wa_id": "<USER_PHONE_NUMBER>",           <!-- ADDED -->
                "user_id": "<BSUID>",                     <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "parent_user_id": "<PARENT_BSUID>"        <!-- ADDED -->
              }
            ],
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `calls`
    -   `to`: novo comportamento (pode ser omitido). Será definido como o número de telefone do usuário se ele tiver adotado um nome de usuário e for possível incluir o número de telefone dele com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o campo será omitido.-   `to_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `to_parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `contacts`: nova matriz.
    -   `profile`
        -   `username`: nova propriedade. Se o usuário tiver definido um nome de usuário, ele será usado para esse campo. Caso contrário, o campo será omitido.-   `wa_id`: nova propriedade. Será definida como o número de telefone do usuário se a ligação encerrada tiver sido feita para o número do usuário. Caso contrário, o campo será omitido.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

### Webhooks de ligações encerradas iniciadas pelo usuário

As alterações serão aplicadas aos webhooks de ligações iniciadas pelo usuário que foram [encerradas](/documentation/business-messaging/whatsapp/calling/reference#call-terminate-webhook).

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "calls": [
              {
                "duration": <CALL_DURATION>,
                "start_time": "<CALL_START_TIMESTAMP>",
                "biz_opaque_callback_data": "<BUSINESS_OPAQUE_DATA>",
                "end_time": "<CALL_END_TIMESTAMP>",
                "from": "<USER_PHONE_NUMBER>",             <!-- CHANGED -->
                "from_user_id": "<BSUID>",                 <!-- ADDED --><!-- Only included if you have enabled parent BSUIDs -->
                "from_parent_user_id": "<PARENT_BSUID>",   <!-- ADDED -->

                "id": "<WHATSAPP_CALL_ID>",
                "to": "<BUSINESS_PHONE_NUMBER>",
                "event": "terminate",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "direction": "USER_INITIATED",
                "status": "COMPLETED"
              }
            ],
            "contacts": [
              {
                "profile": {
                  "name": "<USER_PROFILE_NAME>"            <!-- ADDED --><!-- Only included if user has enabled the usernames feature -->
                  "username": "<USERNAME>"                 <!-- ADDED -->
                },
                "wa_id": "<USER_PHONE_NUMBER>",            <!-- CHANGED -->
                "user_id": "<BSUID>",                      <!-- ADDED --><!-- Only included if you have enabled parent BSUIDs -->
                "parent_user_id": "<PARENT_BSUID>"         <!-- ADDED -->
              }
            ],
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `calls`
    -   `from`: novo comportamento (pode ser omitido). Será omitida se o usuário tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `from_parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `contacts`
    -   `profile`
        -   `name`: nova propriedade. Será definida como o nome do perfil do usuário-   `username`: nova propriedade. Se o usuário tiver definido um nome de usuário, ele será usado para esse campo. Caso contrário, o campo será omitido.-   `wa_id`: será omitida se o usuário tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone dele com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

### Webhooks de status de ligações iniciadas pela empresa

As alterações serão aplicadas a webhooks de [status de ligações](/documentation/business-messaging/whatsapp/calling/reference#call-status-webhook) iniciadas pela empresa.

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "statuses": [
              {
                "biz_opaque_callback_data": "<BUSINESS_OPAQUE_DATA>",
                "id": "<WHATSAPP_CALL_ID>",
                "type": "call",
                "status": "<STATUS>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "recipient_id": "<USER_PHONE_NUMBER>",         <!-- CHANGED -->
                "recipient_user_id": "<BSUID>",                <!-- ADDED --><!-- Only included if you have enabled parent BSUIDs -->
                "recipient_parent_user_id": "<PARENT_BSUID>"   <!-- ADDED -->
              }
            ],
            "metadata": {
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"
            },
            "contacts": [                                      <!-- ADDED -->
              {
                "profile": {
                  <!-- Only included if user has enabled the usernames feature -->
                  "username": "<USERNAME>"                     <!-- ADDED -->
                },
                "wa_id": "<USER_PHONE_NUMBER>",                <!-- ADDED -->
                "user_id": "<BSUID>",                          <!-- ADDED --><!-- Only included if you have enabled parent BSUIDs -->
                "parent_user_id": "<PARENT_BSUID>"             <!-- ADDED -->
              }
            ],
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>"
    }
  ],
  "object": "whatsapp_business_account"
}
```

-   `statuses`
    -   `recipient_id`: novo comportamento (pode ser omitido).
        -   Será omitida se o usuário tiver adotado um nome de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `recipient_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `recipient_parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `contacts`: nova matriz.
    -   `profile`
        -   `username`: nova propriedade. Será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.-   `wa_id`: nova propriedade. Será definida como o número de telefone do usuário se a ligação tiver sido feita para o número do usuário. Caso contrário, o campo será omitido.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: nova propriedade. Será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

### Convites de SIP para ligações iniciadas pela empresa

As alterações se aplicam a ligações iniciadas pela empresa usando [SIP](/documentation/business-messaging/whatsapp/calling/sip).

```
<!-- BEGIN CHANGE -->
INVITE sip:<BSUID_OR_PHONE_NUMBER>@wa.meta.vc;transport=tls SIP/2.0
<!-- END CHANGE -->

Record-Route: <sip:+159.65.244.171:5061;transport=tls;lr;ftag=Kc9QZg4496maQ;nat=yes>
Via: SIP/2.0/TLS 159.65.244.171:5061;received=2803:6081:798c:93f8:5f9b:bfe8:300:0;branch=z9hG4bK0da2.36614b8977461b486ceabc004c723476.0;i=617261
Via: SIP/2.0/TLS 137.184.87.1:35181;rport=56533;received=137.184.87.1;branch=z9hG4bKQNa6meey5Dj2g
Max-Forwards: 69
From: <sip:+17125550259@meta-voip.example.com>;tag=Kc9QZg4496maQ

<!-- BEGIN CHANGE -->
To: <sip:<BSUID_OR_PHONE_NUMBER>@wa.meta.vc>
<!-- END CHANGE -->

Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
CSeq: 96743476 INVITE
Contact: <sip:mod_sofia@137.184.87.1:35181;transport=tls;swrad=137.184.87.1~56533~3>
User-Agent: SignalWire
Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, MESSAGE, INFO, UPDATE, REGISTER, REFER, NOTIFY
Supported: timer, path, replaces
Allow-Events: talk, hold, conference, refer
Session-Expires: 600;refresher=uac
Min-SE: 90
Content-Type: application/sdp
Content-Disposition: session
Content-Length: 2427
X-Relay-Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
Remote-Party-ID: <sip:+17125550259@meta-voip.example.com>;party=calling;screen=yes;privacy=off
Content-Type: application/sdp
Content-Length:  2427

<!-- SDP omitted for brevity -->
```

-   <BSUID\_OR\_PHONE\_NUMBER>: será o BSUID do usuário ou o BSUID principal se a ligação tiver sido feita para o BSUID do usuário ou o BSUID principal, ou o número de telefone do usuário se a mensagem tiver sido enviada para o número de telefone dele.

### Convites de SIP para ligações iniciadas pelo usuário

As alterações se aplicam a ligações iniciadas pelo usuário realizadas usando [SIP](/documentation/business-messaging/whatsapp/calling/sip).

```
INVITE sip:+17015558857@meta-voip.example.com;transport=tls SIP/2.0
Via: SIP/2.0/TLS [2803:6080:e888:51aa:d4a4:c5e0:300:0]:33819;rport=33819;received=2803:6080:e888:51aa:d4a4:c5e0:300:0;branch=z9hG4bKPjNvs.IZBnUa1W4l8oHPpk3SUMmcx3MMcE;alias
Max-Forwards: 70

<!-- BEGIN CHANGE -->
From: "<BSUID_OR_PHONE_NUMBER>" <sip:<BSUID_OR_PHONE_NUMBER>@wa.meta.vc>;tag=bbf1ad6e-79bb-4d9c-8a2c-094168a10bea
<!-- END CHANGE -->

To: <sip:+17015558857@meta-voip.example.com>

<!-- BEGIN CHANGE -->
Contact: <sip:<BSUID_OR_PHONE_NUMBER>@wa.meta.vc;transport=tls;ob>;isfocus
<!-- END CHANGE -->

Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCAzODg1NTE5NEU1NTBEMTc1RTFFQUY5NjNCQ0FCRkEzRhwYCzE3MDE1NTU4ODU3FQIAAA==
CSeq: 2824 INVITE
Route: <sip:onevc-sip-proxy-dev.fbinfra.net:8191;transport=tls;lr>
X-FB-External-Domain: wa.meta.vc

<!-- BEGIN ADDITION -->
x-wa-meta-user-id: <BSUID>
x-wa_meta-parent-user-id: <PARENT_BSUID>
x-wa-meta-user-name: <USERNAME><!-- END ADDITION -->

Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
User-Agent: Facebook SipGateway
Content-Type: application/sdp
Content-Length: 1028

<!-- SDP omitted for brevity -->
```

-   `<BSUID>`: será definido como o BSUID do usuário.-   `<BSUID_OR_PHONE_NUMBER>`: será o BSUID do usuário ou o BSUID principal se a ligação tiver sido feita para o BSUID do usuário ou para o BSUID principal, ou se o usuário tiver adotado um nome de usuário e não conseguirmos incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, será o número de telefone do usuário.-   `<PARENT_BSUID>`: será definido como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `<USERNAME>`: será o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.

### Respostas OK do SIP para ligações iniciadas pela empresa

```
SIP/2.0 200 OK
Via: SIP/2.0/TLS 54.172.60.1:5061;received=2803:6080:f934:8894:7eb5:24f9:300:0;branch=z9hG4bK1e5a.0da2ace9cc912d9e5f2595ca4acb9847.0
Via: SIP/2.0/UDP 172.25.10.217:5060;rport=5060;branch=z9hG4bK5cdada8c-cbf0-4369-b02d-cc97d3c36f2b_c3356d0b_54-457463274351249162
Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Record-Route: <sip:wa.meta.vc;transport=tls;lr>
Record-Route: <sip:54.172.60.1:5061;transport=tls;lr;r2=on>
Record-Route: <sip:54.172.60.1;lr;r2=on>
Call-ID: f304a1d2cafb8139c1f9ff93a7733586@0.0.0.0

<!-- BEGIN CHANGE -->
From: "<BSUID_OR_PHONE_NUMBER>" <sip:<BSUID_OR_PHONE_NUMBER>@meta-voip.example.com>;tag=28460006_c3356d0b_5cdada8c-cbf0-4369-b02d-cc97d3c36f2b
<!-- END CHANGE -->

To: <sip:12195550714@wa.meta.vc>;tag=0d185053-2615-46c7-8ff2-250bda494cf1
CSeq: 2 INVITE
Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
Supported: timer
X-FB-External-Domain: wa.meta.vc

<!-- BEGIN CHANGE -->
<sip:<BSUID_OR_PHONE_NUMBER>@wa.meta.vc;transport=tls;ob;X-FB-Sip-Smc-Tier=collaboration.sip_gateway.sip.prod>;isfocus
<!-- END CHANGE --><!-- BEGIN ADDITION -->
x-wa-meta-user-id: <BSUID>
x-wa_meta-parent-user-id: <PARENT_BSUID>
x-wa-meta-user-name: <USERNAME><!-- END ADDITION -->

Content-Type: application/sdp
Content-Length:   645

<!-- SDP omitted for brevity -->
```

-   `<BSUID>`: será definido como o BSUID do usuário.-   `<BSUID_OR_PHONE_NUMBER>`: será o BSUID do usuário ou o BSUID principal se a ligação tiver sido feita para o BSUID do usuário ou para o BSUID principal, ou se o usuário tiver adotado um nome de usuário e não conseguirmos incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, será o número de telefone do usuário.-   `<PARENT_BSUID>`: será definido como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `<USERNAME>`: será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.

### Respostas BYE do SIP para ligações iniciadas pela empresa e pelo usuário

```
BYE sip:+12195550714@103.30.244.182:5061;transport=tls SIP/2.0
Via: SIP/2.0/TLS [2803:6080:e800:6746::]:56843;rport;branch=z9hG4bKPj65946b3e6f68128d52b6a498a8fd00a5;alias
Record-Route: <sip:wa.meta.vc;transport=tls;lr>
Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Via: SIP/2.0/TLS [2803:6080:e800:6746:3347:2251:14a4:a00]:5061;branch=z9hG4bKPj65946b3e6f68128d52b6a498a8fd00a5
Via: SIP/2.0/TLS [2803:6080:e934:3f82:b543:8a4d:1414:a00]:52767;rport=52767;received=2803:6080:e934:3f82:b543:8a4d:1414:a00;branch=z9hG4bKPj-D8BXdIVMqAUT9MIJIp78LxKUZNnjYKF;alias
Max-Forwards: 69

<!-- BEGIN CHANGE -->
From: <sip:<BSUID_OR_PHONE_NUMBER>@wa.meta.vc>;tag=0fb8b5f1-2703-49f4-a454-46b1bcb9bfac
<!-- END CHANGE -->

To: <sip:+12195550714@dev.moxcal.com>;tag=2c21fad0-c581-4e54-a707-3bd52abfcc3f
Call-ID: 21e38222-6fcb-4631-8e7d-5b94cf849c90
CSeq: 31641 BYE

<!-- BEGIN ADDITION -->
x-wa-meta-user-id: <BSUID>
x-wa_meta-parent-user-id: <PARENT_BSUID>
x-wa-meta-user-name: <USERNAME><!-- END ADDITION -->

X-FB-External-Domain: wa.meta.vc
Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
User-Agent: Facebook SipGateway
Content-Length:  0
```

-   `<BSUID>`: será definido como o BSUID do usuário.-   `<BSUID_OR_PHONE_NUMBER>`: será o BSUID do usuário ou o BSUID principal se a ligação tiver sido feita para o BSUID do usuário ou para o BSUID principal, ou se o usuário tiver adotado um nome de usuário e não conseguirmos incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, será o número de telefone do usuário.-   `<PARENT_BSUID>`: será definido como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `<USERNAME>`: será definida como o nome de usuário caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.

## Coexistência

### Webhooks de histórico

As alterações serão aplicadas aos webhooks de [histórico](/documentation/business-messaging/whatsapp/webhooks/reference/history) que descrevem o histórico de conversas do app WhatsApp Business de um cliente empresarial integrado.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<CUSTOMER_WABA_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<CUSTOMER_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<CUSTOMER_PHONE_NUMBER_ID>"
            },
            "history": [
              {
                "metadata": {
                  "phase": <PHASE>,
                  "chunk_order": <CHUNK_ORDER>,
                  "progress": <PROGRESS>
                },
                "threads": [
                  /* First chat history thread object */
                  {
                    "id": "<WHATSAPP_USER_PHONE_NUMBER>",           <!-- CHANGED -->
                    "context": {                                    <!-- ADDED -->
                      "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>",      <!-- ADDED -->
                      "user_id": "<BSUID>",                         <!-- ADDED --><!-- Only included if parent BSUIDs enabled before sync request -->
                      "parent_user_id": "<PARENT_BSUID>",           <!-- ADDED --><!-- Only included if user has enabled usernames feature before sync request -->
                      "username": "<USERNAME>"                      <!-- ADDED -->

                    },
                    "messages": [
                      /* First message object in thread */
                      {
                        "from": "<BUSINESS_OR_WHATSAPP_USER_PHONE_NUMBER>",  <!-- CHANGED -->
                        "from_user_id" : "<BSUID>",                 <!-- ADDED --><!-- Only included if parent BSUIDs enabled before sync request -->
                        "from_parent_user_id": "<PARENT_BSUID>",    <!-- ADDED -->

                        "to": "<WHATSAPP_USER_PHONE_NUMBER>",
                        "id": "<WHATSAPP_MESSAGE_ID>",
                        "timestamp": "<DEVICE_TIMESTAMP>,
                        "type": "<MESSAGE_TYPE>",
                        "<MESSAGE_TYPE>": {
                          <MESSAGE_CONTENTS>
                        },
                        "history_context": {
                          "status": "<MESSAGE_STATUS>"
                        }
                      },
                      /* Additional message objects in thread would follow, if any */
                    ]
                  },
                  /* Additional chat history thread objects would follow, if any */
                ]
              }
            ]
          },
          "field": "history"
        }
      ]
    }
  ]
}
```

-   `id`: novo comportamento (pode ser omitido). Será omitido se, no momento da solicitação de sincronização do histórico, o usuário já tiver habilitado nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `context`: novo objeto de contexto.
    -   `wa_id`: nova propriedade.
        -   Será omitida se, no momento da solicitação de sincronização, o usuário já tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#parent-business-scoped-user-ids). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `username`: nova propriedade.
        -   Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.-   `messages`
    -   `from`: novo comportamento (pode ser omitido).
        -   Será omitido se, no momento da solicitação de sincronização, o usuário já tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `from_parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

As alterações serão aplicadas a webhooks de [histórico](/documentation/business-messaging/whatsapp/webhooks/reference/history) que descrevem um ativo de mídia enviado de um usuário do WhatsApp para um cliente comercial ou vice-versa.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<CUSTOMER_WABA_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<CUSTOMER_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<CUSTOMER_PHONE_NUMBER_ID>"
            },
            "contacts": [                                          <!-- ADDED -->
              {

                <!-- Profile only included if user has enabled the usernames feature -->
                "profile": {
                  "username": "<USERNAME>",                        <!-- ADDED -->
                },
                "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>",           <!-- ADDED -->
                "user_id": "<BSUID>",                              <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "parent_user_id": "<PARENT_BSUID>"                        <!-- ADDED -->
              },
            ],

            <!-- Only for messages sent from a user to a business -->
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",            <!-- CHANGED -->
                "from_user_id": "<BSUID>",                         <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "from_parent_user_id": "<PARENT_BSUID>",           <!-- ADDED -->

                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<ORIGINAL_WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "<MEDIA_TYPE>",
                "<MEDIA_TYPE>": {
                  <MEDIA_METADATA>
                }
              }
            ],

            <!-- Only for messages sent from a business to a user -->
            "message_echoes": [
              {
                "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                "to": "<WHATSAPP_USER_PHONE_NUMBER>",              <!-- CHANGED -->
                "to_user_id": "<BSUID>",                           <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "to_parent_user_id": "<PARENT_BSUID>",             <!-- ADDED -->

                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "<MESSAGE_TYPE>",
                "<MESSAGE_TYPE>": {
                  <MESSAGE_CONTENTS>
                }
              }
            ]

          },
          "field": "history"
        }
      ]
    }
  ]
}
```

-   `contacts`: novo objeto.
    -   `profile`
        -   `username`: nova propriedade. Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.-   `wa_id`: nova propriedade.
        -   Será omitido se, no momento da solicitação de sincronização, o usuário já tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `messages`
    -   `from`: novo comportamento (pode ser omitido).
        -   Será omitido se, no momento da solicitação de sincronização, o usuário já tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `from_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `from_parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `message_echoes`
    -   `to`: novo comportamento (pode ser omitido).
        -   Será omitido se, no momento da solicitação de sincronização, o usuário já tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `to_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `to_parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

### Webhooks smb\_message\_echoes

As alterações serão aplicadas aos webhooks [smb\_message\_echoes](/documentation/business-messaging/whatsapp/webhooks/reference/smb_message_echoes).

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "contacts": [                                     <!-- ADDED -->
              {

                <!-- Only included if user has enabled the usernames feature -->
                "profile": {
                  "username": "<USERNAME>"                    <!-- ADDED -->
                },

                "wa_id": "<WHATSAPP_USER_PHONE_NUMBER>",      <!-- ADDED -->
                "user_id": "<BSUID>",                         <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "parent_user_id": "<PARENT_BSUID>"            <!-- ADDED -->
              }
            ],
            "message_echoes": [
              {
                "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                "to": "<WHATSAPP_USER_PHONE_NUMBER>",         <!-- CHANGED -->
                "to_user_id": "<BSUID>",                      <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                "to_parent_user_id": "<PARENT_BSUID>",        <!-- ADDED -->

                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "<MESSAGE_TYPE>",
                "<MESSAGE_TYPE>": {
                  <MESSAGE_CONTENTS>
                }
              }
            ]
          },
          "field": "smb_message_echoes"
        }
      ]
    }
  ]
}
```

-   `contacts`: nova matriz.
    -   `profile`
        -   `username`: nova propriedade. Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.-   `wa_id`: nova propriedade. Será omitido se, quando o cliente empresarial usou o app WhatsApp Business para enviar a mensagem ao usuário, o usuário já tiver habilitado o recurso de nomes de usuário e não conseguirmos incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `message_echoes`
    -   `to`: novo comportamento (pode ser omitido). Será omitido se, quando o cliente empresarial usou o app WhatsApp Business para enviar a mensagem ao usuário, o usuário já tiver habilitado o recurso de nomes de usuário e não conseguirmos incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `to_user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `to_parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

### Webhooks smb\_app\_state\_sync

As alterações serão aplicadas aos webhooks [smb\_app\_state\_sync](/documentation/business-messaging/whatsapp/webhooks/reference/smb_app_state_sync).

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "state_sync": [
              {
                "type": "contact",
                "contact": {
                  "full_name": "<CONTACT_FULL_NAME>",
                  "first_name": "<CONTACT_FIRST_NAME>",
                  "phone_number": "<CONTACT_PHONE_NUMBER>",    <!-- CHANGED -->
                  "user_id": "<BSUID>",                        <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
                  "parent_user_id": "<PARENT_BSUID>",          <!-- ADDED --><!-- Only included if user has enabled the usernames feature -->
                  "username": "<USERNAME>"                     <!-- ADDED -->
                },
                "action": "<ACTION>",
                "metadata": {
                  "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>"
                }
              },
              <!-- Additional contacts would follow, if any -->
            ]
          },
          "field": "smb_app_state_sync"
        }
      ]
    }
  ]
}
```

-   `phone_number`: novo comportamento (pode ser omitido). Será omitido se, no momento da solicitação de sincronização, o usuário já tiver habilitado nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o número do usuário será definido como o número de telefone do usuário.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.-   `username`: nova propriedade. Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.

### Webhooks de revogar mensagens

As alterações serão aplicadas a webhooks de [revogação de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/revoke).

```
{
 "object": "whatsapp_business_account",
 "entry": [
   {
     "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
     "changes": [
       {
         "value": {
           "messaging_product": "whatsapp",
           "metadata": {
             "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
             "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
           },
           "contacts": [
             {
               "profile": {
                 "name": "<WHATSAPP_USER_PROFILE_NAME>",

                 <!-- Only included if user has enabled the usernames feature -->
                 "username": "<USERNAME>"            <!-- ADDED -->
               },
               "wa_id": "<WHATSAPP_USER_ID>",
               "user_id": "<BSUID>",                 <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
               "parent_user_id": "<PARENT_BSUID>"    <!-- ADDED -->
             }
           ],
           "messages": [
             {
               "from": "<WHATSAPP_USER_PHONE_NUMBER>",
               "id": "<WHATSAPP_MESSAGE_ID>",
               "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
               "type": "revoke",
               "revoke": {
                 "original_message_id": "<ORIGINAL_WHATSAPP_MESSAGE_ID>"
               }
             }
           ]
         },
         "field": "messages"
       }
     ]
   }
 ]
}
```

-   `contacts`
    -   `profile`
        -   `username`: nova propriedade. Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

### Webhooks de edição de mensagens

As alterações serão aplicadas aos webhooks de [edição de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/edit).

```
{
 "object": "whatsapp_business_account",
 "entry": [
   {
     "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
     "changes": [
       {
         "value": {
           "messaging_product": "whatsapp",
           "metadata": {
             "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
             "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
           },
           "contacts": [
             {
               "profile": {
                 "name": "<WHATSAPP_USER_PROFILE_NAME>",

                 <!-- Only included if the user has enabled usernames -->
                 "username": "<USERNAME>"              <!-- ADDED -->
               },
               "wa_id": "<WHATSAPP_USER_ID>",          <!-- CHANGED -->
               "user_id": "<BSUID>",                   <!-- ADDED --><!-- Only included if parent BSUIDs enabled -->
               "parent_user_id": "<PARENT_BSUID>"      <!-- ADDED -->
             }
           ],
           "messages": [
             {
               "from": "<WHATSAPP_USER_PHONE_NUMBER>",
               "id": "<WHATSAPP_MESSAGE_ID>",
               "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
               "type": "edit",
               "edit": {
                 "original_message_id": "<ORIGINAL_WHATSAPP_MESSAGE_ID>",
                 "message": {
                   "context": {
                     "id": "<CONTEXT_ID>"
                   },
                   "type": "image",
                   "image": {
                     "caption": "<MEDIA_ASSET_CAPTION>",
                     "mime_type": "<MEDIA_ASSET_MIME_TYPE>",
                     "sha256": "<MEDIA_ASSET_SHA256_HASH>",
                     "id": "<MEDIA_ASSET_ID>",
                     "url": "<MEDIA_ASSET_URL>"
                   }
                 }
               }
             }
           ]
         },
         "field": "messages"
       }
     ]
   }
 ]
}
```

-   `contacts`
    -   `profile`
        -   `username`: nova propriedade. Será definida como o nome de usuário, caso o usuário tenha habilitado o recurso de nome de usuário. Caso contrário, o campo será omitido.-   `wa_id`: nova propriedade. Será omitida se, quando o usuário do WhatsApp editar a mensagem, ele já tiver habilitado o recurso de nomes de usuário e não for possível incluir o número de telefone com base nas condições descritas na seção [Números de telefone](#phone-numbers). Caso contrário, o campo será omitido.-   `user_id`: nova propriedade. Será definida como o BSUID do usuário.-   `parent_user_id`: será definida como o [BSUID principal](#parent-business-scoped-user-ids) do usuário, se você tiver habilitado os BSUIDs principais. Caso contrário, o campo será omitido.

## Análise

Nenhuma alteração.

## Cobrança e faturamento

Nenhuma alteração.

## Perguntas frequentes

**O que preciso fazer para aceitar nomes de usuário?**

As cargas de webhooks passarão a incluir os BSUIDs e os BSUIDs principais a partir de março de 2026, antes que os nomes de usuário fiquem disponíveis para os usuários do WhatsApp. Para processar mensagens de usuários que habilitarem o recurso assim que ele estiver disponível, você precisará aceitar BSUIDs (e os BSUIDs principais, se estiverem habilitados). Para isso, você deve:

-   Atualizar suas integrações de webhook para aceitar BSUIDs (e o [BSUID principal](#parent-business-scoped-user-ids), se estiver utilizando).-   Desenvolver lógica para possibilitar o uso de vários identificadores (números de telefone de usuários que não são nomes de usuário; BSUIDs dos usuários que adotam nomes de usuário se o número de telefone não estiver presente nos webhooks) e mapear os campos relevantes de volta para seu CRM/banco de dados.-   Atualizar sistemas internos e externos relacionados a essas integrações para poder lidar com BSUIDs e combinar com identificadores anteriores; principalmente CRM (3P ou banco de dados interno) e quaisquer ferramentas ou fluxos de trabalho disparados do CRM (por exemplo, mensagens de campanha disparadas, gerenciamento de campanhas, mensuração, cobrança etc.).-   Caso você ainda precise do número de telefone do cliente, atualize os bots/jornadas de mensagens (se usados) para solicitar o telefone, lidar com cenários em que os usuários não compartilham o número de telefone e fazer iterações sobre essas novas jornadas de conversa. Consulte os [Termos do WhatsApp Business para Soluções⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-solution-terms&h=AT6YMuGiXXpq0BTzHMUw-UtTvOeBzfXSfEpoxQ53DXVnMryFpJ6NK0iAtQQR9_saZnunUEyHeFF_A6iFs-T8hUTd6uxXGVQMOicu7JxpnXucNr0zmylzJ3zP4nMCTJ06ArFJ4PviX23AFMDJXGh_whggxMA) para ver as restrições gerais aos casos de uso de IA.-   Caso você tenha vários portfólios empresariais na Meta, implemente uma solução que permita o acesso central ao CRM em todos eles para minimizar as despesas operacionais relacionadas ao uso e armazenamento de BSUIDs (e BSUIDs principais).

**Quando receberei uma BSUID ou uma BSUID principal em vez de um número de telefone?**

Quando um usuário adota um nome de usuário, ele tem privacidade de número de telefone, ou seja, o número não será exibido no app nem será incluído em webhooks. Se o número de telefone do usuário não estiver presente (a propriedade wa\_id não estiver presente), será possível usar o BSUID do usuário (ou o [BSUID principal](#parent-business-scoped-user-ids), se estiver em uso), que será incluído e atribuído a uma nova propriedade user\_id (`parent_user_id` para BSUIDs principais).

Se um usuário não tiver adotado nomes de usuário, você receberá o número de telefone e o BSUID do usuário (e o BSUID principal, se estiver habilitado).

Continuaremos compartilhando o número de telefone se [certas condições forem atendidas](#phone-numbers). Porém, de acordo com os Termos de Serviço da API de Nuvem, os números de telefone e os dados relacionados são armazenados por até 30 dias para compatibilidade com recursos como redirecionamento de mensagens. Em algumas situações, você pode receber mensagens de usuários existentes fora desse período de 30 dias, o que pode parecer uma nova conversa de usuário para você. Por isso, é essencial que você comece a aceitar BSUIDs assim que possível para evitar perder o contexto das conversas.

**Por que empresas e parceiros diretamente integrados que usam a API de Nuvem, incluindo anunciantes de anúncios de clique para o WhatsApp diretamente integrados, precisam adotar o BSUID?**

Para continuar processando as mensagens recebidas de usuários do WhatsApp, os parceiros e as empresas devem adotar o BSUID. Depois que o BSUID for adotado e as mensagens de usuários com nomes de usuário forem processadas, os webhooks de mensagens não incluirão mais números de telefone em alguns casos como parte do webhook, como wa\_id. Portanto, qualquer pessoa que use a API de Nuvem deve garantir que todos os sistemas conectados sejam compatíveis com o BSUID. Também será possível pedir o número de telefone do usuário na conversa.

**Se eu ainda não tiver adotado os BSUIDs e começar a receber mensagens de usuários que não consigo processar, haverá algum recurso?**

Caso você ainda não tenha adotado o BSUID e não consiga processar mensagens de usuários que fizeram a alteração, não será possível tomar providências ou realizar ações corretivas.

Para mensagens de novos clientes: o webhook continuará sendo enviado de uma mensagem recebida. Dependendo dos detalhes da implementação, isso poderá afetar sistemas que não estão preparados para lidar com o recebimento de mensagens sem o número de telefone do usuário e o BSUID atribuído ao novo campo user\_id. Para mensagens de clientes existentes: o número de telefone continuará sendo incluído se as condições descritas na seção [Números de telefone](#phone-numbers) forem atendidas.

Depois de aceitar os BSUIDs, solicite os números de telefone dos usuários implementando um [botão de solicitação de número de telefone](#requesting-phone-numbers-from-users).

**Qual é a diferença entre o nome de usuário e o nome de exibição da empresa? Quando o usuário verá um nome de usuário comercial ou um nome de exibição?**

Os nomes de usuário comerciais permitirão que os usuários entrem em contato com a empresa usando o nome de usuário dela. Ou seja, um usuário final pode pesquisar um nome de usuário comercial e entrar em contato com a organização. Como os usuários finais não podem pesquisar por nomes de exibição, os nomes de usuário comerciais oferecem uma clara vantagem como identificador único e pesquisável para que os usuários encontrem a empresa correta de forma confiável.

Os nomes de usuário comercial precisam seguir regras de formatação específicas em relação ao tamanho e aos caracteres permitidos, mas os nomes de exibição são mais flexíveis em termos de formatação.

Os nomes de usuário comercial são únicos e estão vinculados de forma individual aos números de telefone. Isso significa que @JaspersMarket seria vinculado a um número de telefone, enquanto @JaspersMarketCustomerSupport seria vinculado a outro. Os nomes de exibição não estão vinculados de forma individual aos números de telefone, ou seja, o nome de exibição Jasper's Market pode ter 10 números de telefone associados.

Quando a empresa tiver um nome de usuário e um de exibição, o nome de exibição será mostrado primeiro (por exemplo, no perfil, na lista de conversas, nas mensagens etc.). Dessa forma, as empresas poderão conquistar a confiança dos usuários e os usuários poderão reconhecer a empresa quando ela entrar em contato com eles.

## Registro de alterações do documento

### 18 de fevereiro de 2026

-   Explicamos que as solicitações de API que aceitam um número de telefone e um BSUID ou um BSUID principal podem incluir ambos os identificadores simultaneamente, com o número de telefone tendo precedência. Atualizamos as solicitações para [enviar mensagem](#send-message-requests), [enviar mensagem de marketing](#send-marketing-message-requests), [solicitações de ligação iniciada pela empresa](#businesses-initiated-call-requests) e [para bloquear ou desbloquear usuários](#block-or-unblock-user-requests).

### 6 de fevereiro de 2026

-   Alteramos o número de caracteres alfanuméricos que compõem [BSUIDs](#business-scoped-user-id) de 256 para 128 alfanuméricos.-   Alteramos a forma de usar um BSUID para enviar uma mensagem. Agora, os BSUIDs devem ser atribuídos a propriedades/campos dedicados em solicitações de envio de mensagem (em vez de propriedades/campos existentes que aceitam BSUIDs e números de telefone).-   Mudamos a forma como os [códigos de país](#country-codes) aparecerão nos webhooks: eles terão um prefixo para os BSUIDs do usuário em vez de serem atribuídos a uma propriedade de webhook dedicada.-   Incluímos informações sobre o [BSUID principal](#parent-business-scoped-user-ids), que podem ser usadas em portfólios empresariais vinculados.-   Incluímos informações da [lista de contatos](#contact-book), que podem armazenar automaticamente os números de telefone e BSUIDs dos usuários.-   Incluímos informações sobre o [botão de solicitação de número de telefone](#requesting-phone-numbers-from-users).-   Alteramos os exemplos de sintaxe, exemplos de carga e descrições para todos os webhooks que retornavam strings vazias nos casos em que um usuário habilitou o recurso de nomes de usuário. Agora, essas propriedades não serão definidas como uma string vazia. Em vez disso, elas serão omitidas (por exemplo, a propriedade `wa_id` em webhooks de mensagens recebidas).-   Alteramos a forma de retornar erros ao tentar [adotar ou alterar um nome de usuário comercial](#adopt-or-change-a-business-username).-   Alteramos a sintaxe da resposta para [obter o nome de usuário atual de uma empresa](#get-current-username).-   Removemos a capacidade de cancelar solicitações de nome de usuário pendentes da empresa.-   Mudamos o webhook phone\_number\_username\_update para o webhook [business\_username\_updates](#business_username_updates-webhook).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)