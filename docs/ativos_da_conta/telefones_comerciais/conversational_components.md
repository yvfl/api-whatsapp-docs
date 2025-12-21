<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components -->
<!-- Scraped: 2025-12-20T17:24:21.507Z -->

# Componentes de conversa

Updated: 31 de out de 2025

Os componentes de conversa são recursos de conversa que podem ser habilitados em números de telefone comercial. Eles facilitam a interação dos usuários do WhatsApp com sua empresa. Você pode configurar comandos fáceis de usar, disponibilizar quebra-gelos tocáveis e saudar os novos usuários com uma mensagem de boas-vindas.

## Limitações

Se um usuário do WhatsApp tocar em um [link universal](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F425247423114725&h=AT0URidKBCdpr9ntT4nHcJ_nvQ-oyEzuEyxx9FWUy9i2_Dz4xSAQC6qC-VuvbXtu5mlBctkAwzMO5wyR_or6ADuMo4d9rR0q-ES93HeWn10yVlAj0Ey_0JHTwJ5sfQ5YheDb-gG8fFADaIM2IvW0_gj0anM) (ou seja, um link **wa.me**) configurado com texto preenchido, as interfaces do usuário para **quebra-gelos** serão ignoradas automaticamente.

## Configurar usando o Gerenciador do WhatsApp (WAM)

Você pode configurar esses recursos no Gerenciador do WhatsApp em números da sua escolha:

-   Acesse o painel [Meus apps no site Meta for Developers](https://developers.facebook.com/apps/).-   Selecione o app e clique em **Configurações** dentro de **WhatsApp** no painel esquerdo.-   Em **Telefones**, selecione **Gerenciar telefones**.-   À direita do número de telefone a ser configurado, selecione o **ícone de engrenagem** sob **Configurações**.-   Selecione **Automações**.-   Acesse e configure os componentes de conversa.

Os provedores de soluções podem configurar esses recursos para os clientes se tiverem acesso à respectiva conta do WhatsApp Business no Gerenciador do WhatsApp.

## Mensagens de boas-vindas

**No momento, as mensagens de boas-vindas não estão funcionando conforme o esperado.**

Infelizmente, não temos uma data para a implementação desse recurso.

Mensagens em formato livre, interativas e de modelo podem ser enviadas como mensagens de boas-vindas. Os preços de mensagens categorizadas serão aplicados.

É possível receber uma notificação pelo webhook sempre que um usuário do WhatsApp iniciar uma conversa com você pela primeira vez. Isso pode ser útil caso você queira responder a esses usuários com uma mensagem especial de boas-vindas de sua autoria.

As mensagens de boas-vindas são ótimas para interações de serviço, como suporte ou atendimento ao cliente. Por exemplo, é possível adicionar um botão do WhatsApp ao seu app ou site. Ao tocar no botão, os usuários serão redirecionados para o WhatsApp, onde receberão uma mensagem de boas-vindas que fornece contexto sobre como interagir com você.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/569161109_1345385607320090_4519398041032643721_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=OW0ii1iB5t4Q7kNvwH2yBMZ&_nc_oc=Adm9-eHA95x7IZ0SiI0VOs5AbNOE7T0aZxppwdobGgCo1f4Q-ZtOe40HUrDJusc_EKQ&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=DnWAcPPp_z0Vm32scjKdRg&oh=00_AfnJjZ1J66Nm3CkURnj6ITI8wWcPDkYGPD9NYIQHL3vjiQ&oe=69612CAF)

Se esse recurso estiver habilitado e um usuário enviar uma mensagem para você, o cliente do WhatsApp verificará se há mensagens antigas trocadas entre esse usuário e seu número de telefone comercial. Caso não exista nenhuma conversa registrada, o cliente disparará um webhook `messages` com `type` definido como `request_welcome`. Você poderá então responder ao usuário com a mensagem de boas-vindas de sua autoria.

O webhook `request_welcome` dispara a janela de atendimento ao cliente, permitindo que a empresa envie mensagens em formato livre ao responder aos clientes.

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/569826404_1345385577320093_3373746847875714798_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=NUHZV6QSOCAQ7kNvwHVfEC2&_nc_oc=Adl0aO1rLGsasie8M15juBl7v8mEnaJ9zkNGCE4DxjO7CuL3btW_gQ_vdlh5g8Ea-ZE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=DnWAcPPp_z0Vm32scjKdRg&oh=00_AfkrbdQyFU3jCH-nlg0eV5iEKcycOvHpAo17JZw2zEkGaw&oe=69612BEC)

_Mensagem de modelo de carrossel como uma mensagem de boas-vindas_

### Carga do webhook

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
                  "name": "<WHATSAPP_USER_NAME>"
                },
                "wa_id": "<WHATSAPP_USER_ID>"
              }
            ],
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER_ID>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<TIMESTAMP>",
                "type": "request_welcome"  // Indicates first time message from WhatsApp user
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

## Quebra-gelos

Os quebra-gelos são textos tocáveis personalizados que aparecem em uma conversa por mensagem na primeira vez que você conversa com um usuário. Por exemplo, "Planejar uma viagem" ou "Criar um plano de treinos".

Os quebra-gelos são ótimos para interações de serviço, como suporte ou atendimento ao cliente. Por exemplo, é possível adicionar um botão do WhatsApp ao seu app ou site. Ao tocar no botão, os usuários serão redirecionados para o WhatsApp, onde poderão escolher um item de um conjunto de comandos personalizados, que fornecem contexto sobre como interagir com você.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565721000_1345385600653424_5234072759638667532_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8daFQ63YrksQ7kNvwHSQvhy&_nc_oc=Admo_e7h1xf2BxmE326U8ODkGdW_AqucMwJnqhhkrZp6dFPLCw12ZJuGs1B3MLbN8xQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=DnWAcPPp_z0Vm32scjKdRg&oh=00_AfmrIdARARg4WV5c4aP9OwK7NuLaAwopxz0J8bdw0bBJJQ&oe=69611B91)

É possível configurar até 4 quebra-gelos em um número de telefone comercial. Cada quebra-gelo pode ter no máximo 80 caracteres. Não há compatibilidade com emojis.

Quando um usuário toca em um quebra-gelo, essa ação dispara um webhook de mensagem recebida padrão com a string do quebra-gelo atribuída à propriedade `body` na carga. Se o usuário tentar enviar uma mensagem a você em vez de tocar em um quebra-gelo, o teclado será exibido como uma sobreposição, mas poderá ser ignorado para mostrar o menu de quebra-gelos novamente.

Se um usuário do WhatsApp tocar em um [link universal](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F425247423114725&h=AT0URidKBCdpr9ntT4nHcJ_nvQ-oyEzuEyxx9FWUy9i2_Dz4xSAQC6qC-VuvbXtu5mlBctkAwzMO5wyR_or6ADuMo4d9rR0q-ES93HeWn10yVlAj0Ey_0JHTwJ5sfQ5YheDb-gG8fFADaIM2IvW0_gj0anM) (links **wa.me** ou **api.whatsapp.com**) configurado com texto preenchido, as interfaces do usuário para **quebra-gelos** serão ignoradas automaticamente.

### Carga do webhook

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
                  "name": "<WHATSAPP_USER_NAME>"
                },
                "wa_id": "<WHATSAPP_USER_ID>"
              }
            ],
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER_ID>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<TIMESTAMP>",
                "text": {
                  "body": "Plan a trip"
                },
                "type": "text"
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

## Comandos

Os comandos são strings de texto que aparecem quando os usuários do WhatsApp digitam uma barra em um tópico da conversa com sua empresa.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/571105995_1345385610653423_1562585712301544837_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=BTF0pWoNEkQQ7kNvwEe_d6F&_nc_oc=AdlttPn0c4tj2ojWfyfvdSdpZWb11jB12mtHLzOrwyRdb5oC_Jkrrd5khJf_affyCUU&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=DnWAcPPp_z0Vm32scjKdRg&oh=00_AfkdOTYfXDr92zxw8lnrVoT8-koQs-JMQ_okV1fk3KWtUQ&oe=69612D76)

Eles são compostos pelo comando em si e uma dica, que dá ao usuário uma ideia do que pode acontecer ao usar o recurso. Por exemplo, você pode definir o comando:

`/imagine - Create images using a text prompt`

Quando o usuário do WhatsApp digitar "_/imagine uma corrida de carros em Marte_", essa ação disparará um webhook de mensagem recebida com essa string de texto exata atribuída à propriedade `body`. Assim, você pode gerar e retornar uma imagem de uma corrida de carros em Marte.

É possível definir até 30 comandos. Há um limite máximo de 32 caracteres para cada comando e de 256 caracteres para cada dica. Não há compatibilidade com emojis.

### Carga do webhook

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
                  "name": "<WHATSAPP_USER_NAME>"
                },
                "wa_id": "<WHATSAPP_USER_ID>"
              }
            ],
            "messages": [
              {
                "from": "<WHATSAPP_USER_PHONE_NUMBER_ID>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<TIMESTAMP>",
                "text": {
                  "body": "/imagine cars racing on Mars"
                },
                "type": "text"
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

## Configurar usando a API

Com a API, é possível configurar componentes de conversa e visualizar valores configurados.

A API de Componentes de Conversa tem dois pontos de extremidade:

`POST </PHONE_NUMBER_ID>/conversational_automation` usado para configurar componentes de conversa em um número de telefone específico.

`GET /<PHONE_NUMBER_ID>/conversational_automation` retorna os valores atuais de campos de prompt, comandos e enable\_welcome\_message em um número de telefone específico.

### Configurar componentes conversacionais via API

Você pode configurar componentes de conversa em um número de telefone específico fazendo uma chamada ao ponto de extremidade POST.

#### Sintaxe da solicitação

```
// Enable or disable the Welcome Message for the given phone number ID
POST /<PHONE_NUMBER_ID>/conversational_automation?enable_welcome_message=<ENABLE_DISABLE>

// Configure Commands with names and descriptions
POST /<PHONE_NUMBER_ID>/conversational_automation?commands=<COMMAND_LIST>

// Configure Prompts
POST /<PHONE_NUMBER_ID>/conversational_automation?prompts=<PROMPT>
```

#### Propriedades do corpo

  

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório.**

  
A identificação do número de telefone no WhatsApp Business.

`+12784358810`

`<ENABLE_DISABLE>`

_Booliano_

**Opcional.**

  
Um booliano para habilitar ou desabilitar a mensagem de boas-vindas no número de telefone.  

`true`

`<COMMAND_LIST>`

_JSON_

**Opcional.**

  
Uma lista de comandos a serem configurados.  

```
"commands": {     "command_name": "generate"     "command_description": "Create a new image",     “command_name”: “rethink”     “command_description”: “Generate new images from existing images”,}
```

`<PROMPTS>`

_Lista de string_

**Opcional.**

  
Os prompts a serem configurados.  

`"prompts": ["Book a flight","plan a vacation"]`

#### Exemplo de solicitação

```
curl -X POST \ 'https://graph.facebook.com/v19.0/PHONE_NUMBER_ID/conversational_automation' \ -H 'Authorization: Bearer ACCESS_TOKEN' \ -H 'Content-Type: application/json' \ -d '{   "enable_welcome_message": true/false,   "commands": [     {       "command_name": "tickets",       "command_description": "Book flight tickets",     },     {       "command_name": "hotel",       "command_description": "Book hotel",     }   ], "prompts": ["Book a flight","plan a vacation"]}'
```

#### Exemplo de resposta

```
{
  "success": true
}
```

### Verificar a configuração atual usando a API

Você pode visualizar a configuração atual dos componentes de conversa em um número de telefone específico fazendo uma chamada ao ponto de extremidade GET.

#### Sintaxe da solicitação

```
GET  /<PHONE_NUMBER_ID>?fields=conversational_automation
```

#### Exemplo de resposta

```
{
  "conversational_automation": {
    "enable_welcome_message": true
    "prompts": [
      "Find the best hotels in the area",
      "Find deals on rental cars"
    ],
    "commands": [
      {
        "command_name": "tickets",
        "command_description": "Book flight tickets",
      },
      {
        "command_name": "hotel",
        "command_description": "Book hotel",
      }
    ],
  }
  "id": "123456"
}
```

## Teste

Para testar os componentes de conversa que já foram configurados, abra o cliente do WhatsApp e inicie uma conversa com seu número de telefone comercial.

Para mensagens de boas-vindas e quebra-gelos, se você já tiver trocado mensagens com o número de telefone comercial, exclua a conversa na conversa primeiro:

-   Abra a conversa no cliente do WhatsApp.-   Toque no perfil do número de telefone comercial.-   Toque em **Limpar conversa** > **Limpar todas as mensagens**.-   **Excluir conversa**.-   Inicie uma nova conversa de conversa com essa empresa.

Você poderá então enviar uma mensagem ao número de telefone comercial, o que deve disparar o webhook `request_welcome`.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)