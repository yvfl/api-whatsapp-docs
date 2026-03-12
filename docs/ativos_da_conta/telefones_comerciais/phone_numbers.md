<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers -->
<!-- Scraped: 2026-03-10T21:36:43.860Z -->

# Números de telefone comerciais

Updated: 27 de fev de 2026

Este documento descreve os números de telefone comerciais do WhatsApp, bem como os requisitos, as informações de gerenciamento e os recursos únicos relacionados.

## Como registrar números de telefone comerciais

É preciso registrar um número de telefone comercial válido para enviar e receber mensagens via API de Nuvem. Os números registrados ainda funcionam ​para fins gerais, como ligações e mensagens de texto, mas não podem ser usados ​​com o WhatsApp Messenger ("WhatsApp").

Os números que já estiverem em uso no WhatsApp não poderão ser registrados, a menos que sejam [excluídos⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F2138577903196467%2F%3Fhelpref%3Duf_share&h=AT5a-FFlmOmSzBfGvZ4HIvKXn8tvzybFsrMyUTflTkMVwiBELpOdEZmS10UUMGeg9eYUxy-p5bhNRmofL_DxB7auXlsn-oCDt3Rgd8RDpkfdIaE8ylF9KiJXsrcmSyURTwPQ-qND0bdjTx3GnbxqVm6l6c0) primeiro. Se o seu número for banido do WhatsApp e você quiser registrá-lo, primeiro será preciso cancelar o banimento por meio do [processo de apelação⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F465883178708358&h=AT5a-FFlmOmSzBfGvZ4HIvKXn8tvzybFsrMyUTflTkMVwiBELpOdEZmS10UUMGeg9eYUxy-p5bhNRmofL_DxB7auXlsn-oCDt3Rgd8RDpkfdIaE8ylF9KiJXsrcmSyURTwPQ-qND0bdjTx3GnbxqVm6l6c0).

Após a conclusão das etapas descritas no nosso documento [Introdução](/documentation/business-messaging/whatsapp/get-started), um número de telefone comercial de **teste** será gerado e registrado para você automaticamente.

### Requisitos de qualificação

Os números de telefone qualificados devem:

-   pertencer a você-   ter código do país e código de área (códigos curtos não são compatíveis)-   poder receber chamadas de voz ou SMS-   o número deve ter [recursos dimensionados⁠](https://www.facebook.com/business/help/595597942906808)

Para registrar um número 0800, consulte [0800 e números gratuitos](#1-800-and-toll-free-numbers).

### Métodos de registro

-   **Painel de Apps:** conclua as etapas descritas no nosso documento [Introdução](/documentation/business-messaging/whatsapp/get-started), caso ainda não tenha feito isso, e use o painel [Painel de Apps](https://developers.facebook.com/apps) > **WhatsApp** > **Configuração da API** para adicionar um número de telefone.-   **Meta Business Suite:** você pode registrar um número de telefone comercial ao [usar o Meta Business Suite para criar uma conta do WhatsApp Business](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#create-a-waba-via-meta-business-suite).-   **Gerenciador do WhatsApp**: consulte o artigo [Como conectar seu número de telefone à sua conta do WhatsApp Business⁠](https://www.facebook.com/business/help/456220311516626) na Central de Ajuda.-   **Cadastro incorporado**: se você estiver trabalhando com um parceiro de soluções, ele fornecerá um link para o cadastro incorporado, que poderá ser usado para registrar um número.

## Tipos de número de telefone comercial

Esta tabela categoriza os tipos de número de telefone e avalia a adequação deles para receber senhas descartáveis por SMS, ligações telefônicas internacionais e ligações rápidas. Ela fornece avaliações de probabilidade de entrega bem-sucedida com base no tipo de número e nas características da operadora. Além disso, faz recomendações úteis para os usuários melhorarem o sucesso da entrega sem mudar o tipo de número de telefone.

Tipo de telefone

Descrição

Senha descartável por SMS

Senha descartável por voz

Ações

Dispositivos móveis (recomendado)

Atribuídos a dispositivos móveis/SIMs

Básico

Básico

Habilite o recebimento internacional de SMS/ligações, verifique se o dispositivo está conectado à rede celular e conceda as permissões necessárias ao app

Telefone fixo

Atribuídos a localizações físicas (fixo)

Não recomendado

Básico

Habilite o recebimento internacional de SMS/ligações, verifique se a linha está pronta para receber ligações e desabilite o encaminhamento de ligações ou recursos de IVR

Gratuito

0800, ligações a cobrar

Não recomendado

Básico

Verifique com a operadora se o número de telefone pode receber SMS/ligações internacionais, confira se a linha está pronta para receber ligações e desabilite o encaminhamento de ligações ou recursos de IVR

Taxa premium

Cobranças mais altas para serviços especiais

Não recomendado

Básico

Verifique com a operadora se o número de telefone pode receber SMS/ligações internacionais, confira se a linha está pronta para receber ligações e desabilite o encaminhamento de ligações ou recursos de IVR

Custo compartilhado

Custo compartilhado entre quem está ligando e quem está recebendo a ligação

Não recomendado

Não recomendado

Verifique com a operadora se o número de telefone pode receber SMS/ligações internacionais, confira se a linha está pronta para receber ligações e desabilite o encaminhamento de ligações ou recursos de IVR

Acesso universal

Atendimento ao cliente disponível em todo o mundo

Não recomendado

Básico

Verifique com a operadora se o número de telefone pode receber SMS/ligações internacionais, confira se a linha está pronta para receber ligações e desabilite o encaminhamento de ligações ou recursos de IVR

Número pessoal

Atribuído a indivíduos, não vinculado ao dispositivo

Não recomendado

Não recomendado

Verifique com a operadora se o número de telefone pode receber SMS/ligações internacionais, confira se a linha está pronta para receber ligações e desabilite o encaminhamento de ligações ou recursos de IVR

VoIP

Telefonia pela internet, sem vínculo a uma linha física

Não recomendado

Básico

Verifique se o provedor de VoIP é compatível com SMS/ligações internacionais para senhas descartáveis; confira as configurações de provisionamento e da conta; mantenha o app/serviço em execução e as notificações habilitadas; verifique se o dispositivo está online e as permissões foram concedidas

Somente entrada

Apenas ligações/mensagens recebidas

Não recomendado

Básico

Verifique com a operadora se o número de telefone pode receber SMS/ligações internacionais, confira se a linha está pronta para receber ligações e desabilite o encaminhamento de ligações ou recursos de IVR

Pager

Atribuído a pagers (raro)

Não compatível

Não compatível

Não compatível

M2M/IoT

Dispositivos inteligentes e máquina a máquina

Não recomendado

Não recomendado

Verifique se o dispositivo e o chip são compatíveis com o recebimento de SMS/ligações internacionais

## Status

Os números de telefone comerciais têm um status, que reflete a classificação de qualidade e o [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits). Esses números devem ter o status "conectado" para enviar e receber mensagens usando a API.

### Como ver o status via Gerenciador do WhatsApp

O status atual do seu número de telefone comercial é exibido na coluna **Status** no painel [Gerenciador do WhatsApp⁠](https://business.facebook.com/latest/whatsapp_manager/) > **Ferramentas da conta** > **Números de telefone**.

Consulte o artigo [Sobre a classificação por qualidade do seu número de telefone do WhatsApp Business⁠](https://www.facebook.com/business/help/896873687365001) para saber mais sobre as classificações de qualidade e o status que aparecem no Gerenciador do WhatsApp.

### Como receber o status via API

Peça o campo `status` na sua identificação de número de telefone do WhatsApp Business. Consulte a referência [GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) para conferir uma lista de valores de status retornáveis ​​e os respectivos significados.

#### Exemplo de pedido

```
curl 'https://graph.facebook.com/v25.0/106540352242922?fields=status' \
-H 'Authorization: Bearer EAAJB...'
```

#### Exemplo de resposta

```
{  "status": "CONNECTED",  "id": "106540352242922"}
```

## Nomes de exibição

Para registrar um número de telefone comercial, é preciso fornecer informações de nome de exibição. O nome de exibição aparece no perfil do WhatsApp do seu número de telefone comercial e também pode ser mostrado na parte superior de **conversas individuais** e na **lista de conversas** se determinadas condições forem atendidas. Consulte o documento [Nomes de exibição](/documentation/business-messaging/whatsapp/display-names) para saber como funcionam os nomes de exibição.

![WhatsApp display name shown in chat thread](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/507127951_698062976515521_2852142619234157074_n.png?stp=dst-webp&_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=CM6dbFZVjq0Q7kNvwElj2ja&_nc_oc=AdlNXK_h5xQWr7h3aORp3nNzRIV3AlUehq7IjC5fvEcRYtuoGRng02nrLXOR-oFIk8A&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=JkynLKnFY9gQ4R8M1oOnwQ&_nc_ss=8&oh=00_AfyFSZJ23fjOyWMZ5KV4BmYgjANQWo0CJLAgxpZNkasPWQ&oe=69CAB9A9)

## Perfis empresariais

O perfil empresarial fornece informações adicionais sobre sua empresa, como endereço, site, descrição, entre outras. Você pode fornecer essas informações ao registrar o número de telefone comercial. Consulte o documento [Perfis comerciais](/documentation/business-messaging/whatsapp/business-profiles) para saber como os perfis comerciais funcionam.

![Business profile information in WhatsApp](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/507476070_1379105613180336_7510619276605653298_n.png?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=n65o5j3M54AQ7kNvwGnA9L4&_nc_oc=AdmUCr0Yp4AaBLRl9URfnZDruDqDvsOrvOzTIJ5OCPcXymONkRFqGdbmXcXV8k0Pe1U&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=JkynLKnFY9gQ4R8M1oOnwQ&_nc_ss=8&oh=00_AfwwY8fG4uR60HssHlgWIFcWch5OZJGYOC8WLH_VwzK-vA&oe=69CAC09D)

## Status da conta comercial oficial

Os números de telefone comerciais podem receber o status da conta comercial oficial ("OBA", nas iniciais em inglês). Os números de OBA têm uma marca de seleção azul ao lado do nome na visualização de contatos.

![Official Business Account blue checkmark displayed in contacts view](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/456954377_453386597161620_5745766558871976538_n.png?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=adPpkhpRYqgQ7kNvwE9rPzy&_nc_oc=Adli2VwYBN9K7MlENZJjZJCV7DbFqWENt70VeFuO0gEn5YV5TfTY-wvs-e1FWhXRvlA&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=JkynLKnFY9gQ4R8M1oOnwQ&_nc_ss=8&oh=00_Afyhp6dkue1ktftb-MmPtX4PRz2ZXlNO1u3VTNV3Ofcc2Q&oe=69CAE833)

Consulte o documento sobre [contas comerciais oficiais](/documentation/business-messaging/whatsapp/official-business-accounts) para saber como pedir o status de OBA para um número de telefone comercial.

## Confirmação em duas etapas

É preciso definir um PIN de confirmação em duas etapas ao registrar um número de telefone comercial. Você precisará desse código de identificação pessoal para alterar seu PIN ou excluir seu número de telefone da plataforma.

### Como alterar seu PIN via Gerenciador do WhatsApp

Você precisará do código de identificação pessoal atual para alterar seu PIN via Gerenciador do WhatsApp. Para alterar seu PIN:

-   Acesse [Gerenciador do WhatsApp⁠](https://business.facebook.com/latest/whatsapp_manager/) > **Ferramentas da conta** > **Números de telefone**.-   Selecione o número de telefone da empresa.-   Clique na aba **Confirmação em duas etapas**.-   Clique no botão **Alterar PIN** e complete o flow.

Caso você não tenha seu PIN, será possível alterá-lo usando a API.

### Como alterar seu PIN via API

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Updating) para definir um novo PIN.

#### Exemplo de pedido

```
curl 'https://graph.facebook.com/v25.0/106540352242922/' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "pin": "150954"
}'
```

#### Exemplo de resposta

Caso o pedido seja bem-sucedido:

```
{  "success": true}
```

### Como desabilitar a confirmação em duas etapas

Para desabilitar a confirmação em duas etapas usando o Gerenciador do WhatsApp, siga os passos para alterar seu PIN, mas clique no botão **Desativar a confirmação em duas etapas** ao final do processo. Um email com um link será enviado ao endereço de email associado ao portfólio empresarial. Use o link para desabilitar a confirmação em duas etapas. Depois disso, é possível reabilitar a configuração ao definir um novo PIN.

Não é possível desabilitar a confirmação em duas etapas usando a API.

## 0800 e números gratuitos

Talvez você queira registrar um 0800 ou outro número gratuito na plataforma. Em geral, esses números são associados a um sistema de IVR (resposta de voz interativa, pelas iniciais em inglês). Uma ligação de registro do WhatsApp não pode navegar por um IVR. Esse tipo de número de telefone pode ser registrado, mas é necessário que ele aceite ligação de números internacionais e redirecione o SMS ou a ligação de voz para um agente humano.

Veja as etapas para registrar números de telefone com sistema IVR:

-   O WhatsApp consegue compartilhar com você um ou dois números de telefone dos quais a ligação de registro será feita.-   Crie uma lista de permissão para esses números. Caso você não consiga criar uma lista de permissão para esses números, adicione o número de telefone à sua WABA. Além disso, abra um tíquete no Suporte Direto para pedir os números da chamada de registro e inclua o número de telefone que você deseja registrar.-   Redirecione a chamada de registro para um funcionário ou uma caixa de correio. Depois, acesse o código de registro.

Não há compatibilidade com números de telefone com sistema IVR que não podem receber chamadas de registro.

## Limite de números registrados

Novos portfólios empresariais são limitados inicialmente a dois números de telefone comercial registrados.

Se a empresa for [verificada⁠](https://www.facebook.com/business/help/1095661473946872) ou você atingir o [limite de mensagens](/documentation/business-messaging/whatsapp/messaging-limits) de 2 mil, aumentaremos automaticamente o limite para 20. Após o aumento, você receberá uma notificação do Meta Business Suite informando o novo limite e um webhook [business\_capability\_update](/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update) será disparado com `max_phone_numbers_per_business` definido como o novo limite.

## Verificar números de telefone

É preciso verificar o número de telefone que você quer usar para enviar mensagens aos clientes. Os números de telefone devem ser verificados por meio de um código enviado por SMS ou ligação de voz. O processo de verificação pode ser feito a partir das chamadas da Graph API especificadas a seguir.

Para verificar um número de telefone usando a Graph API, faça um pedido `POST` a `PHONE_NUMBER_ID/request_code`. Na chamada, inclua o idioma e o método de verificação escolhido.

Ponto de extremidade

Autenticação

`/PHONE_NUMBER_ID/request_code`

Faça sua autenticação com um token de acesso de usuário do sistema.

Se você estiver pedindo o código em nome de outra empresa, o token de acesso precisa ter acesso avançado para a permissão `whatsapp_business_management`.

### Parâmetros

Nome

Descrição

`code_method`

_string_

**Obrigatório.**

O método de verificação escolhido. Opções compatíveis:

-   `SMS`-   `VOICE`

`language`

_string_

**Obrigatório.**

O código de dois caracteres [do idioma](/documentation/business-messaging/whatsapp/templates/supported-languages). Por exemplo: `"en"`.

### Exemplo de pedido

```
curl -X POST 'https://graph.facebook.com/v25.0/106540352242922/request_code?code_method=SMS&language=en_US' \
-H 'Authorization: Bearer EAAJB...'
```

Depois da chamada de API, você receberá o código de verificação por meio do método selecionado. Para concluir o processo de verificação, inclua o código em um pedido `POST` a `PHONE_NUMBER_ID/verify_code`.

Ponto de extremidade

Autenticação

`/PHONE_NUMBER_ID/verify_code`

Faça sua autenticação com um token de acesso de usuário do sistema.

Se você estiver pedindo o código em nome de outra empresa, o token de acesso precisa ter acesso avançado para a permissão `whatsapp_business_management`.

### Parâmetros

Nome

Descrição

`code`

_string numérica_

**Obrigatório.**

O código recebido depois de fazer a chamada a `FROM_PHONE_NUMBER_ID/request_code`.

### Exemplo

Exemplo de solicitação:

```
curl -X POST \
  'https://graph.facebook.com/v25.0/FROM_PHONE_NUMBER_ID/verify_code' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -F 'code=000000'
```

A resposta bem-sucedida é semelhante a esta:

```
{  "success": true}
```

## Formatos de número de telefone do usuário do WhatsApp

Os sinais de adição (`+`), hifens (`-`), parênteses (`(`,`)`) e espaços são compatíveis com os pedidos de envio de mensagem.

Recomendamos que você inclua o sinal de adição e o código de ligação do país ao enviar mensagens para os clientes. Se o sinal de adição for omitido, o código de ligação do país do seu número de telefone comercial será adicionado antes do número de telefone do cliente. Isso pode resultar em mensagens não entregues ou entregues incorretamente.

Por exemplo, sua empresa está sediada na Índia (código de ligação do país `91`) e você envia uma mensagem para o seguinte número de telefone do cliente em vários formatos:

Número na solicitação de envio de mensagem

Número de mensagens entregues

Resultado

`+16315551234`

`+16315551234`

Número correto

`+1 (631) 555-1234`

`+16315551234`

Número correto

`(631) 555-1234`

`+916315551234`

Número possivelmente errado

`1 (631) 555-1234`

`+9116315551234`

Número possivelmente errado

Observação: no Brasil e no México, o prefixo extra adicionado ao número de telefone poderá ser modificado pela API de Nuvem. Esse é um comportamento padrão do sistema e não é considerado um bug.

## Verificação de alteração de identidade

Podemos verificar a identidade de um cliente antes de enviarmos sua mensagem para ele. Para isso, habilite a verificação de alteração de identidade no seu número de telefone comercial.

Se o cliente realizar uma ação no WhatsApp que for considerada uma alteração de identidade, a Meta gerará um novo hash de identidade para ele. Para obter esse hash ao enviar mensagem a um cliente, habilite a verificação de alteração de identidade no seu número de telefone comercial. Nesse caso, sempre que você receber ou enviar uma mensagem para um cliente sem um hash de identidade, [webhooks de mensagens recebidas](/documentation/business-messaging/whatsapp/webhooks/reference/messages#incoming-messages) ou [webhooks de mensagens de status](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) incluirão o hash dele. Assim, você pode capturar e armazenar esse hash para uso futuro.

Quando quiser usar o hash, inclua-o no pedido de envio de mensagem. A Meta vai comparar o hash do pedido com o atual do cliente. Se eles forem iguais, a mensagem será entregue. Caso haja incompatibilidade, isso significa que a identidade do cliente foi alterada depois do seu último contato com ele. Por isso, a mensagem não será entregue. Nesse caso, enviaremos um webhook de status de mensagem com o código de erro `137000`, notificando sobre a falha e a discrepância dos hashes.

Ao receber esse tipo de webhook, considere que o número de telefone do cliente deixou de ser confiável. Para reestabelecer a confiança, verifique a identidade do cliente por meio de outro canal que não seja o WhatsApp. Depois, reenvie a mensagem com falha para a nova identidade (se houver), sem um hash. Por fim, armazene o novo hash do cliente incluído no webhook de status de entrega de mensagem.

### Sintaxe da solicitação

Envie um pedido POST ao ponto de extremidade **Número de telefone do WhatsApp Business > Configurações** para habilitar ou desabilitar a verificação de alteração de identidade.

`POST /<WHATSAPP_BUSINESS_PHONE_NUMBER>/settings`

### Corpo do post

```
{
  "user_identity_change" : {
    "enable_identity_key_check": <ENABLE_IDENTITY_KEY_CHECK>
}
```

Defina `<ENABLE_IDENTITY_KEY_CHECK>` como `true` para habilitar a verificação de identidade ou como `false` para desabilitá-la.

### Exemplo de pedido para habilitar a configuração

```
curl 'https://graph.facebook.com/v25.0/106850078877666/settings' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "user_identity_change": {
    "enable_identity_key_check": true
  }
}'
```

### Exemplo de resposta de habilitação

```
{  "success": true}
```

### Exemplo de envio de mensagem com verificação

Esta mensagem só seria entregue se o valor `recipient_identity_key_hash` correspondesse ao hash atual do cliente.

```
curl 'https://graph.facebook.com/v25.0/106850078877666/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "recipient_identity_key_hash": "DF2lS5v2W6x=",
  "type": "text",
  "text": {
    "preview_url": false,
    "body": "Your latest statement is attached. See... "
  }
}'
```

### Webhooks

Em webhooks de mensagens recebidas com o objeto `contacts`, como o [webhook de mensagens de texto](/documentation/business-messaging/whatsapp/webhooks/reference/messages/text), o hash do cliente é atribuído à propriedade `identity_key_hash`.

Em webhooks de mensagens enviadas ([webhooks de mensagens de status](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)), o hash do cliente é atribuído à propriedade `recipient_identity_key_hash` no objeto `statuses`.

## Obter o nível de taxa de transferência de dados

Use o ponto de extremidade [Número de telefone do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) para saber o [nível de taxa de transferência de dados](/documentation/business-messaging/whatsapp/throughput) atual de um número de telefone:

`GET /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>?fields=throughput`

## Recuperar todos os números de telefone

Para receber uma lista de todos os números de telefone associados a uma conta do WhatsApp Business, envie um pedido GET para o ponto de extremidade [Conta do WhatsApp Business > Números de telefone](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api).

Além disso, os números de telefone podem ser classificados em ordem crescente ou decrescente de acordo com o `last_onboarded_time`, que é baseado em quando o usuário concluiu a integração do [Cadastro Incorporado](/documentation/business-messaging/whatsapp/embedded-signup/overview). Se não for especificada, a ordem padrão será decrescente.

### Sintaxe da solicitação

```
curl -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers?access_token=<ACCESS_TOKEN>"
```

Em caso de sucesso, um objeto JSON será retornado com uma lista de nomes, telefones, classificações de qualidade e IDs de telefones associados a uma empresa. Os resultados são exibidos por data de conclusão do cadastro incorporado em ordem decrescente, com a integração mais recente listada primeiro.

### Exemplo de resposta

```
{  "data": [    {      "verified_name": "Jasper's Market",      "display_phone_number": "+1 631-555-5555",      "id": "1906385232743451",      "quality_rating": "GREEN"    },    {      "verified_name": "Jasper's Ice Cream",      "display_phone_number": "+1 631-555-5556",      "id": "1913623884432103",      "quality_rating": "NA"    }  ]}
```

### Sintaxe da solicitação

```
curl -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers?access_token=<SYSTEM_USER_ACCESS_TOKEN>]&sort=['last_onboarded_time_ascending']"
```

### Exemplo de resposta

Em caso de sucesso, um objeto JSON será retornado com uma lista de nomes, telefones, classificações de qualidade e IDs de telefones associados a uma empresa. Os resultados são exibidos em ordem crescente com base em quando o usuário concluiu o cadastro incorporado, com a integração mais recente listada por último.

```
{  "data": [   {      "verified_name": "Jasper's Ice Cream",      "display_phone_number": "+1 631-555-5556",      "id": "1913623884432103",      "quality_rating": "NA"    },    {      "verified_name": "Jasper's Market",      "display_phone_number": "+1 631-555-5555",      "id": "1906385232743451",      "quality_rating": "GREEN"    }  ]}
```

### Filtrar números de telefone

Consulte e filtre números de telefone com base em `account_mode`. No momento, essa opção de filtragem está sendo testada no modo beta. Nem todos os desenvolvedores têm acesso a ele.

#### Parâmetros

Nome

Descrição

`field`

**Valor:**`account_mode`

`operator`

**Valor:**`EQUAL`

`value`

**Valores:**`SANDBOX`, `LIVE`

#### Sintaxe da solicitação

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers?filtering=[{"field":"account_mode","operator":"EQUAL","value":"SANDBOX"}]&access_token=<ACCESS_TOKEN>
```

### Exemplo de resposta

```
{  "data": [    {      "id": "1972385232742141",      "display_phone_number": "+1 631-555-1111",      "verified_name": "John’s Cake Shop",      "quality_rating": "UNKNOWN",    }  ],  "paging": {  "cursors": {    "before": "abcdefghij",    "after": "klmnopqr"  }   }}
```

## Recuperar um número de telefone único

Para consultar informações sobre um número de telefone, envie um pedido GET ao ponto de extremidade [Número de telefone do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api):

### Sintaxe da solicitação

```
GET https://graph.facebook.com/<API_VERSION>/<PHONE_NUMBER_ID>
```

### Exemplo de solicitação

```
curl \'https://graph.facebook.com/v15.0/105954558954427/' \-H 'Authorization: Bearer EAAFl...'
```

Em caso de sucesso, um objeto JSON é retornado com o nome, o número de telefone, o ID do telefone e as classificações de qualidade do número de telefone consultado.

```
{  "code_verification_status" : "VERIFIED",  "display_phone_number" : "15555555555",  "id" : "105954558954427",  "quality_rating" : "GREEN",  "verified_name" : "Support Number"}
```

## Consultar status do nome de exibição (beta)

Inclua `fields=name_status` como um parâmetro da string de consulta para consultar o status do nome de exibição associado a um número de telefone específico. No momento, esse campo está na versão beta e não está disponível para todos os desenvolvedores.

### Exemplo de solicitação

```
curl \'https://graph.facebook.com/v15.0/105954558954427?fields=name_status' \-H 'Authorization: Bearer EAAFl...'
```

### Modelo de resposta

```
{  "id" : "105954558954427",  "name_status" : "AVAILABLE_WITHOUT_REVIEW"}
```

O valor `name_status` pode ser um dos seguintes:

-   `APPROVED`: o nome foi aprovado.-   `AVAILABLE_WITHOUT_REVIEW`: o nome de exibição está pronto para ser usado sem análise.-   `DECLINED`: o nome não foi aprovado.-   `EXPIRED`: o certificado do número de telefone expirou e não é possível usá-lo a fim de registrar o número de telefone para uso com a API.-   `PENDING_REVIEW`: o pedido de nome está em análise.-   `NONE`: o número de telefone não tem um certificado e não pode ser usado ao registrar o número de telefone para uso da API.

## Excluir números de telefone comerciais

Apenas os administradores do portfólio empresarial podem excluir números de telefone comerciais. Além disso, os números não poderão ser excluídos se tiverem sido usados para enviar mensagens pagas nos últimos 30 dias.

### Como excluir números de telefone comerciais via Gerenciador do WhatsApp

Caso o número de telefone comercial tenha o status "Conectado", você precisará do seu PIN de confirmação em duas etapas para excluir o número.

-   Carregue seu portfólio empresarial no [Gerenciador do WhatsApp⁠](https://business.facebook.com/wa/manage/home/).-   Se o painel Números de telefone não carregar automaticamente, navegue até **Ferramentas da conta** (ícone de caixa de ferramentas) > **Telefones**.-   Clique no ícone da lixeira do número de telefone e conclua o flow.

Caso o número tenha sido usado para enviar mensagens pagas nos últimos 30 dias, redirecionaremos você para o painel **Insights**, que mostra a data da última mensagem paga. A exclusão do número de telefone poderá ser feita 30 dias após a data listada.

### Como excluir números de telefone comerciais via API

Não é possível excluir um número de telefone comercial via API.

## Migrar números de telefone comerciais

Você pode [migrar números de telefone de uma WABA para outra](/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup).

## Componentes de conversa

Você pode habilitar componentes de interface do usuário para que os usuários do WhatsApp interajam por mensagem com sua empresa mais facilmente. Consulte [Componentes de conversa](/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)