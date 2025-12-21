<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-phone-numbers -->
<!-- Scraped: 2025-12-20T17:52:01.487Z -->

# Números de telefone de clientes empresariais

Updated: 4 de nov de 2025

Este documento descreve os números de telefone de clientes empresariais, seus requisitos e os pontos de extremidade comumente usados para gerenciar números de telefone comerciais.

## Noções básicas

Seus clientes empresariais precisam de um número dedicado para usar o WhatsApp. Números de telefone já usados com o app WhatsApp não são aceitos, mas números utilizados com o app WhatsApp Business [podem ser registrados](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

Os clientes empresariais podem ter vários números de telefone associados à [conta comercial da Meta](https://business.facebook.com/settings/). Dessa forma, é possível [adicionar outro número para usá-lo com a API](#adding-more-phone-numbers) se desejarem.

Ao concluir o flow Cadastro incorporado, os clientes empresariais devem usar o número de telefone e o nome de exibição que desejam ver no app do WhatsApp. É altamente desaconselhável fazer o cadastro com um número pessoal ou de teste, assim como um nome de exibição provisório, pois será difícil alterar essas informações.

-   Para obter informações mais detalhadas sobre os números de telefone e a Plataforma do WhatsApp Business, consulte [Números de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).-   Para obter informações sobre como migrar um número já registrado no WhatsApp, consulte [Números de telefone comercial](/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup).

## Instruções para clientes empresariais

Esta seção destina-se a clientes do cadastro incorporado e fornece instruções sobre ações relacionadas a números de telefone.

### Adicionar números de telefone a uma conta comercial do WhatsApp

Há duas formas de adicionar números de telefone a uma WABA (conta comercial do WhatsApp):

-   **\[Recomendado\]** Passe pelo fluxo de cadastro incorporado, selecione o Gerenciador de Negócios e a WABA, adicione o número e verifique-o.-   No **Gerenciador de Negócios**, acesse a aba **Números de telefone** no **Gerenciador do WhatsApp**. Depois, selecione **Adicionar número de telefone**. Ao usar essa opção, o parceiro de soluções precisa verificar manualmente o número, pois esse recurso não está disponível no Gerenciador de Negócios. Por isso, recomendamos que as empresas sigam o fluxo de cadastro incorporado para adicionar números.

## Instruções para parceiros de soluções

Esta seção destina-se a parceiros de soluções e fornece instruções sobre o gerenciamento de números de telefone e certificados de clientes.

### Como obter números de telefone

Use o ponto de extremidade [GET /<WABA\_ID>/phone\_numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Reading) para obter uma lista de números de telefone comercial na WABA de um cliente corporativo.

#### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<CUSTOMER_WABA_ID>/phone_numbers' \
-H 'Authorization: Bearer <CUSTOMER_BUSINESS_TOKEN>'
```

#### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "data": [
    {
      "verified_name": "<VERIFIED_DISPLAY_NAME>",
      "code_verification_status": "<VERIFICATION_STATUS>",
      "display_phone_number": "<DISPLAY_PHONE_NUMBER>",
      "quality_rating": "<QUALITY_RATING>",
      "platform_type": "CLOUD_API",
      "throughput": {
        "level": "<THROUGHPUT_LEVEL>"
      },
      "webhook_configuration": {
        "application": "<WEBHOOK_CALLBACK_URL>"
      },
      "id": "<BUSINESS_PHONE_NUMBER_ID>"
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

### Registrar números de telefone

Após concluir a verificação do fluxo de cadastro incorporado, o registro é concluído com uma chamada de API ao [`register`ponto de extremidade](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api#Creating). Para isso, forneça um `code_method` (`sms`

`voice`). Como o número de telefone já foi verificado, não é preciso se preocupar com o código de registro.

Como alternativa, **é possível verificar previamente os números de telefone** e oferecê-los aos clientes no novo flow Cadastro incorporado. Assim, eles não precisam entrar em contato com você para receber uma senha descartável durante o processo de integração. Consulte [Números de telefone pré-verificados](/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers).

**É necessário** registrar um número de telefone até 14 dias após o flow Cadastro incorporado. Se o número não for cadastrado nesse período, será preciso realizar o flow novamente antes de fazer o registro.

### Obter metadados do smartphone

O ponto de extremidade `phone_numbers` permite que você veja o status do nome de exibição de um número de telefone e outros metadados.

#### Exemplo de solicitação

No exemplo abaixo, use a identificação da WABA atribuída.

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers
  ?fields=
    display_phone_number,
    certificate,
    name_status,
    new_certificate,
    new_name_status
  &access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

Para encontrar o ID de uma conta do WhatsApp Business, acesse [**Gerenciador de Negócios**](https://business.facebook.com/) > **Configurações do negócio** > **Contas** > **Contas do WhatsApp Business**. Encontre a conta que você quer usar e clique nela. Um painel é aberto, contendo as informações sobre a conta, inclusive a ID.

#### Exemplo de resposta

```
{
  "data": [
    {
      "id": "1972385232742141",
      "display_phone_number": "+1 631-555-1111",
      "last_onboarded_time": "2023-08-22T19:05:53+0000",
      "certificate": "AbCdEfGhIjKlMnOpQrStUvWxYz",
      "new_certificate": "123AbCdEfGhIjKlMnOpQrStUvWxYz",
      "name_status": "APPROVED",
      "new_name_status": "APPROVED",
    }
  ]
}
```

### Parâmetros da resposta

Nome

Descrição

`name_status`

O status de análise da atual solicitação de nome de exibição. Opções disponíveis:

-   `APPROVED`: o nome foi aprovado. Baixe seu certificado agora.-   `DECLINED`: o nome não foi aprovado. Não é possível baixar o certificado.-   `EXPIRED`: o certificado expirou e você não pode baixá-lo.-   `PENDING_REVIEW`: a solicitação de nome está em análise. Não é possível baixar o certificado.-   `NONE`: nenhum certificado disponível.

`new_name_status`

O status da análise de uma solicitação de alteração do nome de exibição. Este campo retorna dados apenas se houver uma solicitação de alteração do nome de exibição.

`certificate`

Retorna o certificado atual do número de telefone.

`new_certificate`

O certificado de um novo nome de exibição, depois que a alteração foi aprovada. Este campo retorna dados apenas se a solicitação de alteração do nome de exibição tiver sido aprovada e ficará disponível até que o número de telefone tenha sido registrado com o novo certificado.

### Obter o status de senha descartável do número de telefone

Para ver se um número de telefone foi verificado via senha descartável, confira o campo `code_verification_status` desse número. Primeiro, faça uma chamada `GET` para o ponto de extremidade `/{whatsapp-business-account-id}/phone_numbers`:

```
curl -i -X GET \
"https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers
  ?access_token=<ACCESS_TOKEN>"
```

A resposta inclui o code\_verification\_status com uma das opções a seguir: `VERIFIED` ou `NOT_VERIFIED`. A resposta será semelhante a esta:

```
[
  {
    "code_verification_status": "NOT_VERIFIED",
    "id": "1754951608042154"
  }
]
```

Como alternativa, obtenha o status chamando a ID de um número de telefone:

```
curl -i -X GET \
"https://graph.facebook.com/<API_VERSION>/<PHONE_NUMBER_ID>
  ?access_token=<ACCESS_TOKEN>"
```

Use o ponto de extremidade [Conta do WhatsApp Business > Números de telefone](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Reading) para obter o ID de um número de telefone. Consulte [Recuperar números de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#get-all-phone-numbers) para saber mais sobre o uso.

### Filtrar números de telefone por modo de conta

Consulte e filtre números de telefone com base em `account_mode`. Use os parâmetros abaixo na solicitação.

#### Parâmetros de solicitação

Nome

Descrição

`field`

Contém o campo que está sendo usado para filtragem. Nesse exemplo, use `account_mode`.

`operator`

Contém o modo que você quer usar para filtrar as contas. Nesse exemplo, use `EQUAL`.

`value`

Contém o modo da conta que você está procurando. Valores compatíveis:

-   `SANDBOX`: a conta não foi verificada.
    -   `LIVE`: a conta não se qualifica para a experiência de avaliação não verificada ou foi atualizada para verificada.
    

#### Exemplo de solicitação

No exemplo abaixo, use a identificação da WABA atribuída.

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers
  ?filtering=[{
    "field":"account_mode",
    "operator":"EQUAL",
    "value":"SANDBOX"}]
  &access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

#### Exemplo de resposta

```
{
  "data": [
    {
      "id": "1972385232742141",
      "display_phone_number": "+1 631-555-1111",
      "verified_name": "John’s Cake Shop",
      "quality_rating": "UNKNOWN",
    }
  ],
  "paging": {
  "cursors": {
    "before": "abcdefghij"
    "after": "klmnopqr"
  }
   }
}
```

## Saiba mais

-   [Números de telefone: visão geral da Plataforma do WhatsApp Business](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)-   [Números de telefone: migrar número já registrado](/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup)-   Referência: [Conta do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)