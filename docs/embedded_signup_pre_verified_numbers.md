<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers -->
<!-- Scraped: 2025-12-20T17:49:15.275Z -->

# Números de telefone pré-verificados

Updated: 14 de nov de 2025

Este documento explica como oferecer aos seus clientes empresariais números de telefone comercial pré-verificados. Esses são números de telefone comerciais do WhatsApp que você já verificou. Ou seja, os clientes não precisam entrar em contato com você para obter uma senha descartável.

![Screenshot of pre-verified phone numbers in Embedded Signup flow](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/338350398_960573981782900_5133226701088650766_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=dmnoTsxFApEQ7kNvwFqoE7v&_nc_oc=Adl2aEGoHKfXolQsFjWhDmHWoZq-FEejs051ftJXgBvKoOLr4cz2T2AOyiOYhMuz0KQ&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=FMHU27s7Gl49Z_ifQ29g8A&oh=00_AfmW30mSAeVGljPkE8Rck6zy5W0F9cEoo8S4Ay3qAifaCg&oe=69612F09)

Eles são representados por objetos [Número de telefone pré-verificado do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api), que são **temporários**. Quando um cliente empresarial seleciona um desses números e conclui o fluxo de Cadastro Incorporado, o objeto temporário é substituído por um objeto [Número de telefone do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) válido. Depois, você precisa [obter o ID desse novo objeto](#getting-claimed-phone-number-ids) e usá-lo para [registrar o número](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-4--register-the-number) em até 90 dias.

## Requisitos

-   Sua empresa deve ser um parceiro de soluções aprovado.-   O usuário do app deve ser um [administrador da empresa](https://www.facebook.com/business/help/623924618023072) na conta comercial à qual os números de telefone comercial pré-verificados serão adicionados.-   Um [usuário](/documentation/business-messaging/whatsapp/access-tokens#user-access-tokens) ou [token de acesso do usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).-   A permissão [business\_management](/docs/permissions/reference/business_management).-   Os números de telefone comercial [devem ser válidos](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

## Limitações

-   Você é responsável por acompanhar quem reivindicou um número de telefone comercial pré-verificado.-   Se um número de telefone comercial pré-verificado não for reivindicado por um cliente final no flow Cadastro incorporado dentro de 90 dias após a verificação, o estado dele será revertido para não verificado. Além disso, para restaurar o estado verificado por mais 90 dias, será preciso fazer uma nova verificação do número.-   Os números de telefone comerciais pré-verificados que não forem reivindicados não poderão ser verificados novamente até 45 dias antes da data de reversão programada para o status não verificado. O tempo é indicado no campo [`verification_expiry_time`](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api#fields).-   Se você adicionar um número de telefone ao seu conjunto de números de telefone comerciais pré-verificados (Etapa 1), mas não o verificar dentro de 90 dias (Etapa 3), ele será removido do conjunto e precisará ser adicionado novamente.-   Depois que um cliente empresarial reivindica um número de telefone comercial pré-verificado, você tem 90 dias para registrá-lo.

## Como criar números pré-verificados

Siga estas etapas para criar um número de telefone comercial pré-verificado, exibi-lo no cadastro incorporado e concluir o registro após a reivindicação de um cliente empresarial.

### Etapa 1: criar um número de telefone comercial pré-verificado

Use o ponto de extremidade [**POST /<BUSINESS\_PORTFOLIO\_ID>/add\_phone\_numbers**](/docs/marketing-api/reference/business/add_phone_numbers#Creating) e adicione um número de telefone comercial pré-verificado ao conjunto de números de telefone comercial do portfólio empresarial.

#### Sintaxe da solicitação

```
POST /<BUSINESS_PORTFOLIO_ID>/add_phone_numbers
  ?phone_number=<PHONE_NUMBER>
```

#### Resposta

Em caso de sucesso, a API retornará um ID de [Número de telefone pré-verificado do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api). Copie esse valor para usar na próxima solicitação.

```
{
  "id": "<WHATSAPP_BUSINESS_PRE_VERIFIED_PHONE_NUMBER_ID>"
}
```

#### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/506914307656634/add_phone_numbers?phone_number=15550783881' \
-H 'Authorization: Bearer EAAJB...'
```

#### Exemplo de resposta

```
{  "id": "106540352242922"}
```

### Etapa 2: solicitar um código de verificação

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PRE\_VERIFIED\_BUSINESS\_PHONE\_NUMBER\_ID>/request\_code**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api#Creating) e solicite uma senha descartável via SMS ou mensagem de voz para o novo número de telefone comercial pré-verificado.

#### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PRE_VERIFIED_PHONE_NUMBER_ID>/request_code
  ?code_method=<CODE_METHOD>
  &language=<LANGUAGE>
```

#### Resposta

Em caso de sucesso, a API retornará `true`.

```
{
  "success": <SUCCESS>
}
```

Além disso, enviaremos um SMS ou uma mensagem de voz contendo uma senha descartável para o número de telefone. Copie a senha descartável para usar na próxima solicitação.

#### Sintaxe de SMS de senha descartável

```
WhatsApp code <CODE>
```

#### Sintaxe de mensagem de voz de senha descartável

Repetido três vezes.

```
Verification code is <CODE>
```

#### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/106540352242922/request_code?code_method=SMS&language=en_US' \
-H 'Authorization: Bearer EAAJB...'
```

#### Exemplo de resposta

```
{  "success": true}
```

#### Exemplo de mensagem de SMS de senha descartável

```
WhatsApp code 123-456
```

#### Exemplo de mensagem de voz de senha descartável

Repetido três vezes.

```
Verification code is 123456
```

### Etapa 3: verificar o número

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PRE\_VERIFIED\_PHONE\_NUMBER>/verify\_code**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api#Creating) para verificar o número usando a senha descartável.

#### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PRE_VERIFIED_PHONE_NUMBER_ID>/verify_code
  ?code=<CODE>
```

#### Resposta

Caso o processo seja bem-sucedido, a API retornará `true`, e o número terá o `code_verification_status` definido como `VERIFIED` por 90 dias.

```
{
  "success": <SUCCESS>
}
```

#### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/106540352242922/verify_code?code=123456' \
-H 'Authorization: Bearer EAAJB...'
```

#### Exemplo de resposta

```
{  "success": true}
```

Assim que você tiver um número de telefone comercial pré-verificado com um status verificado (ou um conjunto de números), exiba-o no novo fluxo de Cadastro Incorporado.

## Exibir números pré-verificados no Cadastro incorporado

Você pode exibir números de telefone comercial no fluxo de Cadastro incorporado usando [dados de formulário pré-preenchidos](/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data). Para fazer isso, adicione um objeto `preVerifiedPhone` com uma propriedade `ids` ao objeto `setup` e atribua os IDs dos números de telefone comercial pré-verificados como uma matriz de strings à propriedade `ids`:

```
{
  scope: '<SCOPE>',
  extras: {
    feature: '<FEATURE>',
    setup: {
      preVerifiedPhone: {
        ids: [<IDS>]
      }
    }
  }
}
```

Por exemplo:

```
{  scope: 'business_management,whatsapp_business_management',  extras: {    feature: 'whatsapp_embedded_signup',    version: 2,    setup: {  business: {    name: 'Acme Inc.',    email: 'johndoe@acme.com',    phone: {      code: 1,      number: '6505551234'        },    website: 'https://www.acme.com',        address: {          streetAddress1: '1 Acme Way',          city: 'Acme Town',          state: 'CA',          zipPostal: '94000',          country: 'US'        },        timezone: 'UTC-08:00'      },      phone: {        displayName: 'Acme Inc.',        category: 'ENTERTAIN',        description: 'Gears and widgets'      },      preVerifiedPhone: {        ids: ['106540352242922','105954558954427']      }    }  }}
```

Se um número de telefone comercial pré-verificado com status `VERIFIED` não for reivindicado dentro de 90 dias após a verificação, o status dele será definido como `UNVERIFIED`, mas ele ainda aparecerá no fluxo de Cadastro Incorporado. Caso um cliente empresarial tente reivindicar um número não verificado, ele precisará concluir a verificação por conta própria, ou seja, deverá solicitar a você uma senha descartável.

Para evitar essa experiência, **recomendamos que você monitore quando verificou um número e o verifique novamente antes que ele volte a ter um estado não verificado**.

Caso você não saiba quando foi a última vez que verificou determinado número de telefone comercial pré-verificado, solicite os campos `code_verification_time` e `verification_expiry_time` na identificação do número em questão. Esses campos indicam os horários de verificação mais recente e de expiração da verificação.

## Como determinar se um número foi reivindicado por meio do Cadastro Incorporado

Consulte [Como obter IDs de números de telefone reivindicados](#getting-claimed-phone-number-ids).

## Obter e registrar números de telefone reivindicados

Quando um cliente empresarial reivindica um número de telefone comercial pré-verificado, o número em questão é substituído por um número de telefone comercial verificado do WhatsApp (um objeto [Número de telefone do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) com um `code_verification_status` definido como `VERIFIED`).

Depois, você terá 90 dias para [registrar o número](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-4--register-the-number) usando o respectivo ID. Se você não fizer o registro dentro desse prazo, o número voltará a ter o status `UNVERIFIED`. Como consequência, será preciso [solicitar um novo código de verificação](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-2--request-a-verification-code) e usá-lo para [verificar o número de telefone comercial do WhatsApp](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-3--verify-the-number) novamente.

### Obter números reivindicados via registro de sessão

Se você estiver usando o [registro da sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener), o ID será retornado em um evento de mensagem e capturado pelo detector de eventos. Envie essa identificação ao seu servidor e use-a para registrar o número de telefone comercial do WhatsApp.

### Obter números reivindicados via API

Se você não estiver utilizando o registro da sessão, use o ponto de extremidade [**GET /<WABA\_ID>/phone\_numbers**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Reading) para ver uma lista de números de telefone comercial do WhatsApp na conta do WhatsApp Business.

Analise a propriedade `display_phone_number` em cada objeto retornado no conjunto de resultados. Se um objeto no conjunto de resultados tiver um valor `display_phone_number` que corresponda a um número que você usou para criar um número de telefone comercial pré-verificado, o objeto representará o número do WhatsApp que substituiu o número pré-verificado. Copie a identificação desse objeto e use-a para registrar o número de telefone comercial do WhatsApp.

Alternativamente, você pode usar o mesmo ponto de extremidade com a expansão `field` para solicitar o campo `display_phone_number` e especificar o número de telefone de exibição. Por exemplo:

```
GET /102290129340398/phone_numbers?display_phone_number=16505551234
```

## Obter números de telefone comercial pré-verificados

Use o ponto de extremidade [**GET /<BUSINESS\_PORTFOLIO\_ID>/preverified\_numbers**](/docs/marketing-api/reference/business/preverified_numbers#Reading) para ver uma lista de todos os objetos [Número de telefone pré-verificado do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api), independentemente do status de verificação, no conjunto de números de telefone comercial pré-verificados da sua conta comercial:

```
GET /<BUSINESS_ACCOUNT_ID>/preverified_numbers
```

Os resultados são classificados automaticamente por data de criação. Você também pode utilizar a expansão do campo para solicitar o campo `code_verification_status`, assim, a API retornará apenas números de telefone comercial pré-verificados com o estado de verificação indicado:

```
GET /<BUSINESS_ACCOUNT_ID>/preverified_numbers?code_verification_status=VERIFIED
```

## Compartilhar e cancelar o compartilhamento de números pré-verificados

Use o ponto de extremidade [**POST /<BUSINESS\_PORTFOLIO\_ID>/share\_preverified\_numbers**](/docs/marketing-api/reference/business/share_preverified_numbers#Updating) para compartilhar números de telefone comercial pré-verificados com uma [solução multiparceiros](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) da qual você faz parte. Também é possível fazer uma solicitação DELETE para o mesmo ponto de extremidade a fim de cancelar o compartilhamento.

Os números de telefone comerciais pré-verificados compartilhados podem ser exibidos pelos parceiros de uma solução na implementação do Cadastro incorporado.

Caso esteja compartilhando números com vários parceiros de negócios, recomendamos que você os oriente a [obter uma lista dos números pré-verificados que foram compartilhados](#get-pre-verified-business-phone-numbers) antes de exibi-los no Cadastro Incorporado. Isso reduz a probabilidade de um parceiro tentar exibir um número que já foi reivindicado. Os números reivindicados não são exibidos no flow, mas o parceiro pode não saber disso e se perguntar por que determinado número não está aparecendo.

### Sintaxe da solicitação de compartilhamento

```
POST /<BUSINESS_ID>/share_preverified_numbers
  ?partner_business_id=<PARTNER_BUSINESS_ID>
  &preverified_id=<PREVERIFIED_ID>
```

### Sintaxe da solicitação para cancelar o compartilhamento

```
DELETE /<BUSINESS_ID>/share_preverified_numbers
  ?partner_business_id=<PARTNER_BUSINESS_ID>
  &preverified_id=<PREVERIFIED_ID>
```

### Resposta

Se for bem-sucedida, a API retornará "true". Em caso de compartilhamento, notifique seu parceiro de negócios sobre o número pré-verificado que foi compartilhado e forneça a identificação relacionada. Em caso de cancelamento do compartilhamento, o número não aparecerá mais na implementação do Cadastro incorporado do parceiro.

```
{
  "success": <SUCCESS>
}
```

### Exemplo de solicitação de compartilhamento

```
curl -X POST 'https://graph.facebook.com/v17.0/share_preverified_numbers?partner_business_id=506914307656634&preverified_id=1706193509821738' \-H 'Authorization: Bearer EAAH0...'
```

### Exemplo de solicitação para cancelar o compartilhamento

```
curl -X DELETE 'https://graph.facebook.com/v17.0/share_preverified_numbers?partner_business_id=506914307656634&preverified_id=1706193509821738' \-H 'Authorization: Bearer EAAH0...'
```

### Exemplo de resposta

```
{  "success": true}
```

## Registrar números pré-verificados de modo programático

Se você tiver personalizado o cadastro incorporado para [ignorar a tela de adição de número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition), é possível registrar de forma programática números de telefone comercial pré-verificados na conta do WhatsApp Business de um cliente empresarial integrado. Primeiro, conclua todas as etapas para [criar um número pré-verificado](#creating-pre-verified-numbers). Depois, use a identificação desse número para concluir as etapas **1** e **4** do documento [Registrar números de telefone](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers).

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)