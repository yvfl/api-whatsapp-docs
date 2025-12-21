<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-library -->
<!-- Scraped: 2025-12-20T17:33:16.781Z -->

# Biblioteca de modelos

Updated: 14 de nov de 2025

Com a biblioteca de modelos, as empresas podem criar modelos de utilidade de forma mais rápida e fácil para casos de uso comuns, como lembretes de pagamento, atualizações de entrega, bem como modelos de autenticação para casos de uso comuns de verificação de identidade.

Esses modelos predefinidos já foram categorizados como utilidade ou autenticação. Os modelos da biblioteca incluem conteúdo fixo que não pode ser editado e parâmetros que podem ser adaptados para informações específicas da empresa ou do usuário.

É possível navegar e criar modelos usando a biblioteca de modelos no Gerenciador do WhatsApp ou de forma programática por meio da API.

## Criar modelos por meio do Gerenciador do WhatsApp (WAM)

Siga as instruções abaixo para criar modelos usando a biblioteca de modelos no [Gerenciador do WhatsApp](https://business.facebook.com/wa/manage/template-library).

1\. Na barra lateral do WAM, em **Modelos de mensagem**, selecione **Criar modelo**.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/564050140_1339317901260194_2215442945738675402_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=uLP61YGzN28Q7kNvwF_BP3J&_nc_oc=Adk2NLH7MmlMLxD6o24ky9taBOQN9cQdPF_1MnLWODLrY8XBC5FFA9KMFNIUfYLM-k0&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=aFjzqhp0v11hAYGu2vzA5A&oh=00_AfkRYBY9K4BSYqf7QeZKOoGfWZm8rogZ44VBZ7jC-T2fZg&oe=69610F0A)

2\. Em _Explorar a biblioteca de modelos do WhatsApp_, selecione **Explorar modelos**.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/560898429_1339318461260138_2068693222637029790_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=18FGtrR6cFYQ7kNvwHFhLlN&_nc_oc=AdmRPzPvSpnWR8iw5Qf9BijUIj0nqjyFYjfpCXgDdSEogw_LpXn3ozltgf5oZlU0eIU&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=aFjzqhp0v11hAYGu2vzA5A&oh=00_Afm-8w92GWuz9GPoC_ZyZWqwgl7PNC21Xs02UTgVZfj2lA&oe=696112E2)

3\. Agora, você verá todos os modelos disponíveis no momento. Use a barra de pesquisa para pesquisar por tópico ou caso de uso, ou use as opções do menu suspenso na barra lateral para filtrar os resultados.

Se você passar o ponteiro do mouse sobre um modelo, será possível ver os respectivos valores de parâmetros.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560665283_1339318454593472_1581401886238873208_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=nvE-KaIWeWYQ7kNvwG7gw_U&_nc_oc=AdniMDSEeq5CVjBlCFIhqVUwY453eJYRTo_rjnBqXuPWXDTiCFmt28CrjXcTFntNodQ&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=aFjzqhp0v11hAYGu2vzA5A&oh=00_Afl4DkOR-R2M8WQV4jn-wx7N7OVlSF1ypk0E7yMoPI8F0g&oe=69613B59)

4\. Para criar um modelo, **selecione um** clicando sobre ele. Depois, adicione o nome do modelo, selecione o idioma e preencha os detalhes do botão. Depois de concluir essas etapas, clique em **Enviar**.

Observação: se escolher **Personalizar modelo**, será necessário analisar o modelo antes que você possa enviar mensagens.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/564202977_1339318004593517_4596535304491755062_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=SKlymGobLpoQ7kNvwHIdpKa&_nc_oc=AdlsAo3ZA9HLsgU4sPJJ_mJsYpY6LmfsnVUzWM6xe1mu8iNPwvQEYbRA0Pc-Va1Jmvw&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=aFjzqhp0v11hAYGu2vzA5A&oh=00_Afl6GASzznUpCerQW2N2qAEJZxh8QsoqTjj-oQ_K30bAQA&oe=69612A1C)

## Parâmetros e restrições de modelos

Quando um modelo contém o valor `library_template_name` na resposta `GET <WABAID>/message_templates?name=<TEMPLATE_NAME>`, ele é um modelo criado a partir da Biblioteca de modelos e está sujeito a verificações e restrições de tipo.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/564078988_1339317931260191_355325833187515070_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=hjTXO4JWsgEQ7kNvwEo_7ST&_nc_oc=AdkbebwBnO1aeUAw_7VKRk6b3jmoqGt0zdkVPZirToVMVaRitmqUMzd6J9znFG1C7xQ&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=aFjzqhp0v11hAYGu2vzA5A&oh=00_Afm0VtcLCnL6lWp1qo_fEv3HHmD93MycGik5en7fw1KLBw&oe=6961082A)![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/560193637_1339318421260142_6827805123941026588_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=tsEBR0eVrkYQ7kNvwHUfeCj&_nc_oc=AdnhpyVO4B_8MRsRaq_9lg9EU7eeYc_MDi5uIWffnctYXjuLnThwVlHAXNTaPd1YHpI&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=aFjzqhp0v11hAYGu2vzA5A&oh=00_AflwgRWvIFizDXZolVBTvZ-G4tb-JvjZpbtZOK_czimehw&oe=6961371E)

Os modelos na biblioteca incluem conteúdo fixo e parâmetros. Os parâmetros representam espaços no modelo em que informações variáveis podem ser inseridas, como nomes, endereços e telefones.

No exemplo acima, parâmetros como nome `Jim` ou nome comercial `CS Mutual` podem ser modificados para aceitar variáveis como o nome do cliente e o nome da empresa.

As mensagens enviadas com os modelos da biblioteca estão sujeitas a verificações de parâmetros durante o envio. Se os parâmetros usarem valores fora das faixas listadas abaixo, ocorrerá uma falha no envio da mensagem.

### Lista de parâmetros e exemplos de valores

Todos os parâmetros têm restrição de tamanho. Se ocorrer um erro, tente novamente com um valor mais curto.

Tipo de parâmetro

Descrição

Exemplo de valor

`ADDRESS`

Endereço de uma localização.

-   Deve ser um endereço válido.

-   `1 Hacker Way, Menlo Park, CA 94025`

`TEXT`

Texto básico.

-   `regarding your order.`-   `12 pack of paper towels`-   `your request`-   `purchase`-   `Jasper's Market`

`AMOUNT`

Um número que representa uma quantidade.

-   Pode conter um prefixo ou sufixo para valores monetários, como USD ou RS.-   Pode conter casas decimais (.) e vírgulas (,)-   Pode conter símbolos de moeda válidos, como $ e €

-   `145`-   `USD $375.32`-   `€1,376.22 EUR`-   `RS 1200`

`DATE`

Uma data padrão.

-   `2021-04-19`-   `13/03/2021`-   `5th January 1982`-   `08.22.1991`-   `January 1st, 2024`-   `05 12 2022`

`PHONE NUMBER`

Um número de telefone.

-   Pode conter números, espaços, hifens (-), parênteses e símbolos de adição (+)

-   `+1 4256789900`-   `+91-7884-789122`-   `+39 87 62232`

`EMAIL`

Um endereço de email padrão.

-   Deve ser um endereço de email válido

-   `1hackerway@meta.com`-   `yourcustomername@gmail.com`-   `abusinessorcustomername@hotmail.com`

`NUMBER`

Um número.

-   Deve ser um número.-   Não pode conter espaços.

-   `23444`-   `90001234921388904`-   `453638`

## Formulários

Os formulários estão disponíveis apenas para contas que tiveram os limites de mensagens aumentados.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561076760_1339318104593507_1250042269511586117_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9Tys2yhsOC8Q7kNvwFwf8O5&_nc_oc=AdkNmeCV3th7VeFe7w-wQxXilOH3_lPwvEF597_ikAcQJesmCNiPxr5kVcqpjYVNko0&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=aFjzqhp0v11hAYGu2vzA5A&oh=00_AfmwFLptYpF_SDGHhiJEzk2eAFeJvqD4wiGTJn7Xk4HEwg&oe=69611290)

Alguns modelos da biblioteca são formulários interativos da plataforma do WhatsApp Flows.

No Gerenciador do WhatsApp, esses modelos específicos podem ser identificados pelo rótulo "Formulário". No momento, os casos de uso compatíveis são feedback do cliente e falha na entrega.

### Identificar formulários na resposta da solicitação

Ao chamar o ponto de extremidade `GET /message_template_library`, a chave `type` na matriz `buttons` será exibida como `"FORMS"`.

```
{      "name": "delivery_failed_2_form",      "language": "en_US",      "category": "UTILITY",      "topic": "ORDER_MANAGEMENT",      "usecase": "DELIVERY_FAILED",      "industry": [        "E_COMMERCE"      ],      "body": "We were unable to deliver order {{1}} today.Please {{2}} to schedule another delivery attempt.",      "body_params": [        "#12345",        "try a redelivery"      ],      "body_param_types": [        "TEXT",        "TEXT"      ],      "buttons": [        {          "type": "FLOW",          "text": "Reschedule"        }      ],      "id": "7138055039625658"},
```

## Como usar a API

A API da Biblioteca de Modelos tem dois pontos de extremidade:

```
// Used to browse available library templates
GET /message_template_library
```

```
// Used when you are ready to create a template from the library.
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```

### Pesquisar e filtrar modelos disponíveis

Modelos com tipos de parâmetros `Header` de `Document` são compatíveis apenas com PDFs

Para explorar e filtrar os modelos disponíveis, use o ponto de extremidade `message_template_library`.

Quando encontrar o modelo que deseja usar, anote o nome, já que você o utilizará ao criar o modelo por meio do método `POST`.

### Sintaxe da solicitação

```
// Get all available templates
GET /message_template_library

// Search for substring
GET /message_template_library?search=<SEARCH_KEY>

// Filter by template topic
GET/message_template_library?topic=<TOPIC>

// Filter by template use case
GET/message_template_library?usecase=<USECASE>

// Filter by template industry
GET/message_template_library?industry=<INDUSTRY>

// Filter by template language
GET/message_template_library?language=<LANGUAGE>
```

### Parâmetros da string de consulta

Espaço reservado

Descrição

Exemplo de valor

`<SEARCH_KEY>`

_String_

**Opcional.**

  
Uma substring que você está procurando no conteúdo, nome, cabeçalho, corpo ou rodapé do modelo.

`payments`

`<TOPIC>`

_Enumeração_

**Opcional.**

  
O tópico do modelo.  
Veja os filtros de modelo abaixo.

`ORDER_MANAGEMENT`

`<USECASE>`

_Enumeração_

**Opcional.**

  
O caso de uso do modelo.  
Veja os filtros de modelo abaixo

`SHIPMENT_CONFIRMATION`

`<INDUSTRY>`

_Enumeração_

**Opcional.**

  
O setor do modelo.  
Veja os filtros de modelo abaixo

`E_COMMERCE`

`<LANGUAGE>`

_Enumeração_

**Opcional.**

  
O código de localidade do idioma do modelo.  
Consulte [Idiomas compatíveis](/documentation/business-messaging/whatsapp/templates/supported-languages)

`en_US`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/102290129340398/message_templates?search="payments"'
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{      "name": "low_balance_warning_1",      "language": "en_US",      "category": "UTILITY",      "topic": "PAYMENTS",      "usecase": "LOW_BALANCE_WARNING",      "industry": [        "FINANCIAL_SERVICES"      ],      "header": "Your account balance is low",      "body": "Hi {{1}},This is to notify you that your {{2}} in your {{3}} account, ending in {{4}} is below your pre-set {{5}} of {{6}}.Click the button to deposit more {{7}}.{{8}}",      "body_params": [        "Jim",        "available funds",        "CS Mutual checking plus",        "1234",        "limit",        "$75.00",        "funds",        "CS Mutual"      ],      "buttons": [        {          "type": "URL",          "text": "Make a deposit",          "url": "https://www.example.com/"        },        {          "type": "PHONE_NUMBER",          "text": "Call us",          "phone_number": "+18005551234"        }      ],      "id": "7147013345418927"}
```

### Filtros de modelo

Há vários modelos para escolher na biblioteca de modelos. É possível usar a API para filtrá-los com base em alguns fatores.

**Setor**

-   `E_COMMERCE`-   `FINANCIAL_SERVICES`

**Tópico**

-   `ACCOUNT_UPDATE`-   `CUSTOMER_FEEDBACK`-   `ORDER_MANAGEMENT`-   `PAYMENTS`

**Caso de uso**

-   `ACCOUNT_CREATION_CONFIRMATION`-   `AUTO_PAY_REMINDER`-   `DELIVERY_CONFIRMATION`-   `DELIVERY_FAILED`-   `DELIVERY_UPDATE`-   `FEEDBACK_SURVEY`-   `FRAUD_ALERT`-   `LOW_BALANCE_WARNING`-   `ORDER_ACTION_NEEDED`-   `ORDER_CONFIRMATION`-   `ORDER_DELAY`-   `ORDER_OR_TRANSACTION_CANCEL`-   `ORDER_PICK_UP`-   `PAYMENT_ACTION_REQUIRED`-   `PAYMENT_CONFIRMATION`-   `PAYMENT_DUE_REMINDER`-   `PAYMENT_OVERDUE`-   `PAYMENT_REJECT_FAIL`-   `PAYMENT_SCHEDULED`-   `RECEIPT_ATTACHMENT`-   `RETURN_CONFIRMATION`-   `SHIPMENT_CONFIRMATION`-   `STATEMENT_ATTACHMENT`-   `STATEMENT_AVAILABLE`-   `TRANSACTION_ALERT`

## **Criar modelos**

**Observação: a modificação das regras em torno das propriedades do corpo para este ponto de extremidade é para fins explicitamente didáticos, ou seja, para mostrar como usar o ponto de extremidade com a biblioteca de modelos.**

Para criar um novo modelo usando a biblioteca de modelos, faça uma chamada ao ponto de extremidade `<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates` existente usando as propriedades de corpo abaixo.

### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```

### Corpo da publicação

```
{
  "name": "<NAME>",
  "category": "UTILITY",
  "language": "en_US",
  “library_template_name”: “<LIBRARY_TEMPLATE_NAME>”,
  "library_template_button_inputs": "[
    'url_suffix_example' : 'https://www.example.com/demo'}},
    {type: 'PHONE_NUMBER', 'phone_number': '+16315551010'}
]"
}
```

### Propriedades do corpo

Espaço reservado

Descrição

Exemplo de valor

`<NAME>`

_String_

**Obrigatório.**

  
O nome que você está fornecendo para o modelo.

  
Máximo de 512 caracteres.

`my_payment_template`

`<CATEGORY>`

_Enumeração_

**Obrigatório.**

  
A categoria do modelo.  
**Deve ser `UTILITY` para uso com a Biblioteca de Modelos.**

`UTILITY`

`<LANGUAGE>`

_Enumeração_

**Obrigatório.**

  
O código de localidade do idioma do modelo.  
Consulte [Idiomas compatíveis](/documentation/business-messaging/whatsapp/templates/supported-languages)

`en_US`

`<LIBRARY_TEMPLATE_NAME>`

_String_

**Obrigatório.**

  
O nome exato do modelo da Biblioteca de Modelos.

`delivery_update_1`

`<LIBRARY_TEMPLATE_BUTTON_INPUTS>`

_Matriz de objetos_

**Opcional.**

  
O site e/ou o número de telefone da empresa usado no modelo.  
**Observação: para modelos de utilidade que tenham entradas de botão, esta propriedade _não_ é opcional.**

`“[ {'type': 'URL', 'url': {'base_url' : 'https://www.example.com/{{1}}', 'url_suffix_example' : 'https://www.example.com/demo'}}, {type: 'PHONE_NUMBER', 'phone_number': '+16315551010'} ]"`

### Entradas de botão do modelo de biblioteca

Espaço reservado

Descrição

Exemplo de valor

`type`

_Enumeração_

O tipo de botão

`QUICK_REPLY`, `URL`, `PHONE_NUMBER`, `OTP`, `MPM`, `CATALOG`, `FLOW`, `VOICE_CALL`, `APP`

_Obrigatório_

`OTP`

`phone_number`

_String_

O número de telefone para o botão.

_Opcional_

`"+13057652345"`

`url`

_Objeto JSON_

[Consulte os parâmetros de URL do objeto JSON `base_url` e `url_suffix_example` aqui](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates)

_Opcional_

`zero_tap_terms_accepted`

_booliano_

Se o usuário aceitou ou não os termos de toque zero.

_Opcional_

`TRUE`

`otp_type`

_Enumeração_

O tipo de senha descartável.

`COPY_CODE`, `ONE_TAP`, `ZERO_TAP`

_Opcional_

`TRUE`

`supported_apps`

_Matriz de objetos JSON_

[Consulte os parâmetros de objeto JSON de app compatíveis com `package_name` e `signature_hash` aqui](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates)

_Opcional_

### Entradas do corpo do modelo de biblioteca

Espaço reservado

Descrição

Exemplo de valor

`<LIBRARY_TEMPLATE_BODY_INPUTS>`

_Objeto JSON_

**Opcional.**

  
Dados opcionais durante a criação de um modelo da biblioteca de modelos. Estes são campos opcionais no componente do botão.  
[_Saiba como criar modelos usando a Biblioteca de modelos_](/docs/whatsapp/cloud-api/guides/send-message-templates/utility-templates)

`add_contact_number`

_booliano_

Valor booliano para adicionar informações ao modelo sobre como entrar em contato com a empresa pelo número de telefone.

_Opcional_

`TRUE`

`add_learn_more_link`

_booliano_

Valor booliano para adicionar mais informações ao modelo com um link de URL.

Não tem ampla disponibilidade e será ignorado se não estiver disponível.

_Opcional_

`TRUE`

`add_security_recommendation`

_booliano_

Valor booliano para adicionar informações ao modelo para não compartilhar códigos de autenticação com ninguém.

_Opcional_

`TRUE`

`add_track_package_link`

_booliano_

Valor booliano para adicionar informações ao modelo para rastrear pacotes de veiculação.

Não tem ampla disponibilidade e será ignorado se não estiver disponível.

_Opcional_

`TRUE`

`code_expiration_minutes`

_int64_

Valor inteiro para adicionar informações ao modelo sobre quando o código expirará.

_Opcional_

`5`

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v19.0/102290129340398/message_templates'-H 'Authorization: Bearer EAAJB...'-H 'Content-Type: application/json'-d '{  "name": "my_delivery_update",  "language": "en_US",  "category": "UTILITY",  “library_template_name”: “delivery_update_1”,  "library_template_button_inputs": "[    {'type': 'URL', 'url': {'base_url' : 'https://www.example.com/{{1}}',    'url_suffix_example' : 'https://www.example.com/order_update}}  ]"}
```

### Exemplo de resposta

```
{  "id": "{hsm-id}",  "status": "APPROVED",  "category": "UTILITY"}
```

## Enviar modelos de mensagens

Para saber como enviar mensagens com modelo, consulte o [guia Enviar modelos](/documentation/business-messaging/whatsapp/messages/template-messages)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)