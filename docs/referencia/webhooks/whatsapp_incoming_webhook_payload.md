<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/webhooks/whatsapp-incoming-webhook-payload -->
<!-- Scraped: 2025-12-20T17:58:41.404Z -->

Esse conteúdo foi traduzido automaticamente. [Mostrar original](#)

# Payload de Webhook de Entrada do WhatsApp

Copiar para LLM

[

Ver como Markdown](/documentation/business-messaging/whatsapp/reference/webhooks/whatsapp-incoming-webhook-payload/v23.0.md/)

Version

v23.0

Esquemas para notificações de webhook de entrada do WhatsApp.

Define estruturas de carga para mensagens, atualizações de status e interações do usuário

enviados de usuários do WhatsApp para empresas por meio de webhooks.

## URL base

## Pontos de extremidade

POST

[/whatsapp/webhooks](#post-whatsapp-webhooks)

* * *

## POST /whatsapp/webhooks

Ponto de extremidade para receber payloads de webhook para vários tipos de mensagens de entrada do WhatsApp.

### Sintaxe da solicitação

**POST** /whatsapp/webhooks

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/whatsapp/webhooks' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "object": "whatsapp_business_account",  "entry": {    "0": {      "id": "419561257915477",      "changes": {        "0": {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": {              "0": {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            },            "messages": {              "0": {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",                "timestamp": "1749416383",                "type": "text",                "text": {                  "body": "Does it come in another color?"                }              }            }          },          "field": "messages"        }      }    }  }}'
```

Corpo da solicitaçãoObrigatório

* * *

Payload de webhook contendo mensagens de entrada do WhatsApp.

Tipo de conteúdo:application/json

Esquema:WebhookPayload

Mostrar atributos secundários

* * *

WebhookPayload

* * *

objectstring·obrigatório

Sempre 'whatsapp\_business\_account' para esses webhooks.

* * *

entryarray of Entry·obrigatório

Mostrar atributos secundários

* * *

entry\[\]Entry

Mostrar atributos secundários

* * *

idstring·obrigatório

ID da Conta do WhatsApp Business

* * *

changesarray of Change·obrigatório

Mostrar atributos secundários

* * *

changes\[\]Change

Mostrar atributos secundários

* * *

valueMust be one of: IncomingMessageValueGeneral, IncomingMessageValueSystem, StatusMessageValue, GroupValue·obrigatório

Mostrar atributos secundários

* * *

IncomingMessageValueGeneral

Mostrar atributos secundários

* * *

messaging\_productstring·obrigatório

Sempre 'whatsapp'.

* * *

metadataMetadata

Mostrar atributos secundários

* * *

display\_phone\_numberstring·obrigatório

Número de telefone de exibição comercial.

* * *

phone\_number\_idstring·obrigatório

ID do número de telefone comercial.

* * *

contactsarray of ContactProfile·obrigatório

Matriz de perfis de contato para o remetente. Incluído para todas as mensagens de entrada não do sistema.

Mostrar atributos secundários

* * *

contacts\[\]ContactProfile

Mostrar atributos secundários

* * *

profileobject·obrigatório

Mostrar atributos secundários

* * *

namestring·obrigatório

Nome do usuário do WhatsApp como aparece no perfil no cliente do WhatsApp.

* * *

wa\_idstring

ID do usuário do WhatsApp. Observe que o ID do usuário do WhatsApp e o número de telefone podem não corresponder sempre.

* * *

messagesarray of IncomingMessage·obrigatório

Matriz de objetos de mensagem. A estrutura varia com base na propriedade 'type'.

Mostrar atributos secundários

* * *

messages\[\]IncomingMessage

Mostrar atributos secundários

* * *

TextMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"text"·obrigatório

* * *

textobject·obrigatório

Mostrar atributos secundários

* * *

bodystring·obrigatório

Text body of the message.

* * *

contextobject

Incluído apenas se a mensagem for enviada por meio de um botão "Mensagem para empresas".

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone de exibição comercial.

* * *

idstring·obrigatório

ID da mensagem do WhatsApp da mensagem que o usuário usou para acessar o botão "Mensagem para empresas".

* * *

referred\_productobject·obrigatório

Mostrar atributos secundários

* * *

catalog\_idstring·obrigatório

ID do catálogo de produtos.

* * *

product\_retailer\_idstring·obrigatório

ID do Produto.

* * *

referralobject

Incluído apenas se a mensagem for via anúncio Clique para WhatsApp.

Mostrar atributos secundários

* * *

source\_urlstring·obrigatório

URL do anúncio.

* * *

source\_idstring·obrigatório

ID do anúncio.

* * *

source\_typeOne of "ad", "post"·obrigatório

* * *

bodystring·obrigatório

Texto primário de anúncio.

* * *

headlinestring·obrigatório

Título do anúncio.

* * *

media\_typeOne of "image", "video"·obrigatório

* * *

image\_urlstring

Incluído apenas para mídia do tipo imagem.

* * *

video\_urlstring

Incluído apenas para mídia de vídeo.

* * *

thumbnail\_urlstring

Incluído apenas para mídia de vídeo.

* * *

ctwa\_clidstring·obrigatório

ID de clique em anúncio.

* * *

welcome\_messageobject

Mostrar atributos secundários

* * *

textstring·obrigatório

Anúncio de texto de saudação.

* * *

ReactionMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"reaction"·obrigatório

* * *

reactionobject·obrigatório

Mostrar atributos secundários

* * *

message\_idstring·obrigatório

WhatsApp message ID of the message the WhatsApp user reacted to.

* * *

emojistring·obrigatório

Emoji sent by the WhatsApp user as a reaction.

* * *

AudioMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"audio"·obrigatório

* * *

audioobject

Mostrar atributos secundários

* * *

mime\_typestring·obrigatório

Tipo de mídia do ativo.

* * *

sha256string·obrigatório

Hash SHA-256 do ativo de mídia.

* * *

idstring·obrigatório

ID do ativo de mídia. Uma solicitação GET nesse ID pode fornecer a URL do ativo.

* * *

voiceboolean·obrigatório

Boolean indicating if audio is a recording made with the WhatsApp client voice recording feature (true) or not (false).

* * *

DocumentMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"document"·obrigatório

* * *

documentobject

Mostrar atributos secundários

* * *

mime\_typestring·obrigatório

Tipo de mídia do ativo.

* * *

sha256string·obrigatório

Hash SHA-256 do ativo de mídia.

* * *

idstring·obrigatório

ID do ativo de mídia. Uma solicitação GET nesse ID pode fornecer a URL do ativo.

* * *

filenamestring·obrigatório

Media asset filename.

* * *

ImageMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"image"·obrigatório

* * *

imageobject

Mostrar atributos secundários

* * *

mime\_typestring·obrigatório

Tipo de mídia do ativo.

* * *

sha256string·obrigatório

Hash SHA-256 do ativo de mídia.

* * *

idstring·obrigatório

ID do ativo de mídia. Uma solicitação GET nesse ID pode fornecer a URL do ativo.

* * *

captionstring

Media asset caption text.

* * *

StickerMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"sticker"·obrigatório

* * *

stickerobject

Mostrar atributos secundários

* * *

mime\_typestring·obrigatório

Tipo de mídia do ativo.

* * *

sha256string·obrigatório

Hash SHA-256 do ativo de mídia.

* * *

idstring·obrigatório

ID do ativo de mídia. Uma solicitação GET nesse ID pode fornecer a URL do ativo.

* * *

animatedboolean·obrigatório

Boolean indicating if the sticker is animated (true) or not (false).

* * *

VideoMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"video"·obrigatório

* * *

videoobject

Mostrar atributos secundários

* * *

mime\_typestring·obrigatório

Tipo de mídia do ativo.

* * *

sha256string·obrigatório

Hash SHA-256 do ativo de mídia.

* * *

idstring·obrigatório

ID do ativo de mídia. Uma solicitação GET nesse ID pode fornecer a URL do ativo.

* * *

captionstring

Media asset caption text.

* * *

LocationMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"location"·obrigatório

* * *

locationobject·obrigatório

Mostrar atributos secundários

* * *

addressstring·obrigatório

Location address.

* * *

latitudenumber (float)·obrigatório

Location latitude.

* * *

longitudenumber (float)·obrigatório

Location longitude.

* * *

namestring·obrigatório

Location name.

* * *

urlstring

Location URL. Usually only included for business locations.

* * *

ContactSharingMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"contacts"·obrigatório

* * *

contactsarray of ContactObject·obrigatório

Array of contact objects. Many contact object properties may be omitted if the WhatsApp user chooses not to share them, or their device prevents them from being shared.

Mostrar atributos secundários

* * *

contacts\[\]object

Mostrar atributos secundários

* * *

addressesarray of object

Mostrar atributos secundários

* * *

addresses\[\]object

Mostrar atributos secundários

* * *

citystring

City mentioned in the contact address

* * *

countrystring

Country mentioned in the contact address

Mostrar atributos secundários

* * *

country\_codestring

ISO country code for the contact address

* * *

statestring

State mentioned in the contact address

* * *

streetstring

Street mentioned in the contact address

* * *

typestring

Type of address, such as home or work

* * *

zipstring

Zip code in the contact address

* * *

birthdaystring (date)

Data de aniversário do contato (AAAA-MM-DD).

* * *

emailsarray of object

Mostrar atributos secundários

* * *

emails\[\]object

Mostrar atributos secundários

* * *

emailstring (email)

Email address of the contact

* * *

typestring

Type of email, such as personal or work

* * *

nameobject

Mostrar atributos secundários

* * *

formatted\_namestring·obrigatório

Nome formatado do contato

* * *

first\_namestring

Nome do contato

* * *

last\_namestring

Sobrenome do Contato

* * *

middle\_namestring

Nome do meio do contato

* * *

suffixstring

Sufixo do nome do contato

* * *

prefixstring

Prefixo do nome do contato

* * *

orgobject

Mostrar atributos secundários

* * *

companystring

Nome da empresa onde o contato trabalha

* * *

departmentstring

Nome do departamento onde o contato trabalha

* * *

titlestring

Cargo do Contato

* * *

phonesarray of object

Mostrar atributos secundários

* * *

phones\[\]object

Mostrar atributos secundários

* * *

phonestring

Contact’s Phone number

* * *

wa\_idstring

Contact's WhatsApp Number. Note that a WhatsApp user's ID and phone number may not always match.

* * *

typestring

Type of phone number. For example, cell, mobile, main, iPhone, home, work, etc.

* * *

urlsarray of object

Mostrar atributos secundários

* * *

urls\[\]object

Mostrar atributos secundários

* * *

urlstring (uri)

Website URL associated with the contact or their company

* * *

typestring

Type of website. For example, company, work, personal, Facebook Page, Instagram, etc.

* * *

UnsupportedMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

typeOne of "unsupported", "unknown"·obrigatório

* * *

contextobject·obrigatório

Mostrar atributos secundários

* * *

fromstring·obrigatório

Business display phone number.

* * *

idstring·obrigatório

WhatsApp message ID of the message containing the button the WhatsApp user tapped.

* * *

buttonobject·obrigatório

Mostrar atributos secundários

* * *

payloadstring·obrigatório

Quick-reply button payload.

* * *

textstring·obrigatório

Quick-reply button label text.

* * *

ButtonMessage

* * *

InteractiveMessageReply

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"interactive"·obrigatório

* * *

contextobject·obrigatório

Mostrar atributos secundários

* * *

fromstring·obrigatório

Business display phone number.

* * *

idstring·obrigatório

WhatsApp message ID of the message containing the interactive component the user tapped.

* * *

interactiveobject·obrigatório

Mostrar atributos secundários

* * *

typeOne of "list\_reply", "button\_reply"·obrigatório

Type of interactive reply (list\_reply or button\_reply).

* * *

OrderMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"order"·obrigatório

* * *

orderobject·obrigatório

Mostrar atributos secundários

* * *

catalog\_idstring·obrigatório

Product catalog ID.

* * *

textstring·obrigatório

Empty string.

* * *

product\_itemsarray of object·obrigatório

Mostrar atributos secundários

* * *

product\_items\[\]object

Mostrar atributos secundários

* * *

product\_retailer\_idstring·obrigatório

Product ID.

* * *

quantityinteger·obrigatório

Product quantity.

* * *

item\_pricenumber (float)·obrigatório

Individual product price.

* * *

currencystring·obrigatório

Catalog currency code.

* * *

IncomingMessageValueSystem

Mostrar atributos secundários

* * *

messaging\_productstring·obrigatório

Sempre 'whatsapp'.

* * *

metadataMetadata

Mostrar atributos secundários

* * *

display\_phone\_numberstring·obrigatório

Número de telefone de exibição comercial.

* * *

phone\_number\_idstring·obrigatório

ID do número de telefone comercial.

* * *

messagesarray of SystemMessage·obrigatório

Array contendo apenas objetos de mensagem 'system'.

Mostrar atributos secundários

* * *

messages\[\]SystemMessage

Mostrar atributos secundários

* * *

fromstring·obrigatório

Número de telefone do usuário do WhatsApp. Observe que o número de telefone e o ID de um usuário do WhatsApp podem não corresponder sempre.

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp.

* * *

timestampstring·obrigatório

Carimbo de data e hora Unix indicando quando o webhook foi acionado.

* * *

type"system"·obrigatório

* * *

systemobject·obrigatório

Mostrar atributos secundários

* * *

bodystring·obrigatório

Description of the system change (e.g., user changed number).

* * *

wa\_idstring

New WhatsApp user ID.

* * *

type"user\_changed\_number"·obrigatório

Type of system message.

* * *

notunknown

* * *

StatusMessageValue

Mostrar atributos secundários

* * *

messaging\_productstring·obrigatório

Sempre 'whatsapp'.

* * *

metadataMetadata

Mostrar atributos secundários

* * *

display\_phone\_numberstring·obrigatório

Número de telefone de exibição comercial.

* * *

phone\_number\_idstring·obrigatório

ID do número de telefone comercial.

* * *

statusesarray of Statuses·obrigatório

Matriz de objetos de status.

Mostrar atributos secundários

* * *

statuses\[\]Statuses

Mostrar atributos secundários

* * *

idstring·obrigatório

ID de mensagem exclusiva do WhatsApp associada ao status.

* * *

statusOne of "sent", "delivered", "read", "failed"·obrigatório

* * *

timestampstring·obrigatório

* * *

recipient\_idstring·obrigatório

Número de telefone do destinatário.

* * *

group\_idstring

ID do grupo se a mensagem foi enviada para um grupo.

* * *

conversationConversation

Mostrar atributos secundários

* * *

idstring

* * *

expiration\_timestampstring

* * *

originConversationOrigin

Mostrar atributos secundários

* * *

typestring

* * *

pricingPricing

Mostrar atributos secundários

* * *

billableboolean

* * *

pricing\_modelOne of "CBP", "PMP"

* * *

categorystring

* * *

errorsarray of StatusError

Mostrar atributos secundários

* * *

errors\[\]StatusError

Mostrar atributos secundários

* * *

codeinteger

* * *

titlestring

* * *

messagestring

* * *

error\_dataErrorData

Mostrar atributos secundários

* * *

detailsstring

* * *

hrefstring

* * *

GroupValue

Mostrar atributos secundários

* * *

messaging\_productstring·obrigatório

Sempre 'whatsapp'.

* * *

metadataMetadata

Mostrar atributos secundários

* * *

display\_phone\_numberstring·obrigatório

Número de telefone de exibição comercial.

* * *

phone\_number\_idstring·obrigatório

ID do número de telefone comercial.

* * *

groupsarray of Groups·obrigatório

Matriz de objetos de grupo.

Mostrar atributos secundários

* * *

groups\[\]Groups

Mostrar atributos secundários

* * *

timestampinteger·obrigatório

Carimbo de data/hora Unix do evento do grupo

* * *

group\_idstring·obrigatório

Identificador único do grupo

* * *

typeOne of "group\_create", "group\_delete", "group\_settings\_update", "group\_add\_participants", "group\_remove\_participants"·obrigatório

Tipo de evento em grupo

* * *

request\_idstring·obrigatório

Identificador único para a solicitação

* * *

subjectstring

Assunto/nome do grupo

* * *

descriptionstring

Descrição do grupo

* * *

added\_participantsarray of GroupParticipant

Lista de participantes adicionados ao grupo

Mostrar atributos secundários

* * *

added\_participants\[\]GroupParticipant

Mostrar atributos secundários

* * *

inputstring

Digite o número de telefone ou ID do WhatsApp

* * *

wa\_idstring

ID do WhatsApp do participante

* * *

removed\_participantsarray of GroupParticipant

Lista de participantes removidos do grupo

Mostrar atributos secundários

* * *

removed\_participants\[\]GroupParticipant

Mostrar atributos secundários

* * *

inputstring

Digite o número de telefone ou ID do WhatsApp

* * *

wa\_idstring

ID do WhatsApp do participante

* * *

profile\_pictureGroupProfilePicture

Mostrar atributos secundários

* * *

mime\_typestring

Tipo MIME da foto de perfil

* * *

sha256string

Hash SHA256 da foto de perfil

* * *

fieldOne of "messages", "group\_lifecycle\_update", "group\_settings\_update", "group\_participant\_update"·obrigatório

O campo indica a qual objeto o webhook está relacionado:

-   messages: o webhook está relacionado a mensagens do consumidor ou status de mensagem enviada pela empresa para o consumidor.
    
-   group\_lifecycle\_update: o webhook está relacionado à criação e exclusão de grupos.
    
-   group\_settings\_update: o webhook está relacionado à atualização das configurações do grupo.
    
-   group\_participant\_update: o webhook está relacionado à participantes que entram e saem dos grupos.
    

Respostas

* * *

Ponto de extremidade para receber payloads de webhook para vários tipos de mensagens de entrada do WhatsApp.

200

Webhook recebido com sucesso

Selecionar idioma

cURLJavaScriptPython

* * *

```
curl --request POST \  --url 'https://graph.facebook.com/whatsapp/webhooks' \  --header 'Authorization: Bearer <Token>' \  --header 'Content-Type: application/json' \  --data '{  "object": "whatsapp_business_account",  "entry": {    "0": {      "id": "419561257915477",      "changes": {        "0": {          "value": {            "messaging_product": "whatsapp",            "metadata": {              "display_phone_number": "15550783881",              "phone_number_id": "106540352242922"            },            "contacts": {              "0": {                "profile": {                  "name": "Sheena Nelson"                },                "wa_id": "16505551234"              }            },            "messages": {              "0": {                "from": "16505551234",                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",                "timestamp": "1749416383",                "type": "text",                "text": {                  "body": "Does it come in another color?"                }              }            }          },          "field": "messages"        }      }    }  }}'
```

## Autenticação

**Esquema**

**Tipo**

**Localização**

bearerAuth

HTTP Bearer

Header: Authorization

### Exemplos de uso

bearerAuth:

Include Authorization: Bearer your-token-here in request headers

### Requisitos de autenticação global

Todos os pontos de extremidade requerem o seguinte:

bearerAuth

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)