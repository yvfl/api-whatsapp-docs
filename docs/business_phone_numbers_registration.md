<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration -->
<!-- Scraped: 2025-12-20T17:24:06.360Z -->

# Registro

Updated: 4 de nov de 2025

Para usar o número de telefone comercial na API de Nuvem, é preciso registrá-lo. Faça o registro nos seguintes cenários:

-   Criação de conta: ao implementar a API, é preciso registrar o número de telefone comercial a ser usado para enviar mensagens. Para adicionar uma camada adicional de segurança às contas, exigimos o uso da confirmação em duas etapas durante a criação.-   Alteração de nome: nesse caso, o telefone já foi registrado, e você quer alterar o nome de exibição. Para isso, você precisa [solicitar a alteração de nome no Gerenciador do WhatsApp](https://www.facebook.com/business/help/378834799515077). Depois que o nome for aprovado, é necessário registrar o telefone novamente com o novo nome.-   Migração de número da API Local para a API de Nuvem. Consulte [Exceção na migração](#migration-exception).

Antes de fazer o registro, você precisa [verificar o número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#verify).

### Exceção na migração

Se você estiver migrando um número de telefone da API Local para a API de Nuvem, precisará cumprir etapas adicionais antes de registrar um número com a API de Nuvem. Veja [Migrar da API Local para a API de Nuvem](/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud) e confira o processo completo.

## Registrar um número de telefone comercial

Para registrar um número de telefone comercial, faça uma chamada `POST` a `PHONE_NUMBER_ID/register`. Lembre-se de incluir os parâmetros abaixo.

Ponto de extremidade

Autenticação

`PHONE_NUMBER_ID/register`

(consulte [Obter o ID do número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#get-all-phone-numbers))

Os parceiros de soluções devem fazer a autenticação usando um token de acesso com as permissões `whatsapp_business_management` e `whatsapp_business_messaging`.

### Limitações

As solicitações ao ponto de extremidade de registro estão sujeitas ao limite de 10 solicitações por número de telefone comercial em um período de 72 horas.

Quando você fizer uma solicitação de registro, verificaremos quantas solicitações desse tipo você fez para o número de telefone nas últimas 72 horas. Se você já tiver feito 10 solicitações, a API retornará o código de erro `133016`, e não será possível registrar o número nas 72 horas subsequentes.

### Parâmetros

Nome

Descrição

`messaging_product`

**Obrigatório.**

Serviço de mensagens usado. Defina como `"whatsapp"`.

`pin`

**Obrigatório.**

Se a confirmação em duas etapas estiver habilitada no número de telefone comercial verificado, defina esse valor como o PIN de verificação com seis dígitos. Caso você não se lembre do PIN, é possível alterá-lo. Veja [Confirmação em duas etapas](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#two-step-verification).

Se a confirmação em duas etapas não estiver habilitada, defina esse valor como um número de seis dígitos. Esse será o PIN para confirmação em duas etapas do número de telefone comercial.

`data_localization_region`

**Opcional.**

  
Se for incluído, o [armazenamento local](/documentation/business-messaging/whatsapp/local-storage) será habilitado no número de telefone comercial. O valor deve ser um código do país ISO 3166 de duas letras (por exemplo, `IN`), indicando a região onde você quer que os dados em repouso sejam armazenados.

  
Valores compatíveis:

  
**APAC**

-   Austrália: `AU`-   Indonésia: `ID`-   Índia: `IN`-   Japão: `JP`-   Singapura: `SG`-   Coreia do Sul: `KR`

**Europa**

-   Alemanha: `DE`-   Suíça: `CH`-   Reino Unido: `GB`

**LATAM**

-   Brasil: `BR`

**EMEA**

-   Barein: `BH`-   África do Sul: `ZA`-   Emirados Árabes Unidos: `AE`

**NORAM**

-   Canadá: `CA`

Depois que o recurso for habilitado, ele não poderá ser desabilitado nem alterado diretamente. Em vez disso, será necessário [excluir o registro](#deregister) do número de telefone e registrá-lo novamente sem esse parâmetro (para desabilitar), ou incluir o parâmetro com o novo código de país (para alterar).

  
Para habilitar o armazenamento local em um número de telefone que já foi registrado, você deve excluir o registro, depois registrar o número novamente e incluir esse parâmetro.

### Exemplo de solicitação sem armazenamento local

```
curl 'https://graph.facebook.com/v24.0/106540352242922/register ' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "212834"
}
```

### Exemplo de solicitação com armazenamento local

```
curl 'https://graph.facebook.com/v24.0/106540352242922/register ' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "212834",
  "data_localization_region": "CH"
}
```

Todas as chamadas à API exigem autenticação com tokens de acesso.

Os desenvolvedores podem autenticar as chamadas de API com o token de acesso gerado em **Painel de Apps** > **WhatsApp** > **Configuração da API**.

Os parceiros de soluções devem fazer a autenticação usando um token de acesso com as permissões `whatsapp_business_messaging` e `whatsapp_business_management`. Para saber mais, consulte [Tokens de acesso do usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).

## Cancelar o registro de um número de telefone comercial

Após a exclusão do registro, o número de telefone comercial não poderá mais ser usado com a API de Nuvem e terá o [armazenamento local](/documentation/business-messaging/whatsapp/local-storage) desabilitado.

Se quiser cancelar o registro de um número de telefone comercial, faça uma ligação `POST` para `PHONE_NUMBER_ID/deregister`:

Ponto de extremidade

Autenticação

`PHONE_NUMBER_ID/deregister`

(consulte [Obter o ID do número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#get-all-phone-numbers))

Os parceiros de soluções devem fazer a autenticação usando um token de acesso com as permissões `whatsapp_business_management` e `whatsapp_business_messaging`.

### Limitações

-   Este ponto de extremidade não pode ser usado para cancelar o registro de um número de telefone comercial que esteja em uso com [a API de Nuvem e o app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).-   O cancelamento do registro não exclui o número nem o respectivo histórico de mensagens. Para excluir um número e o histórico, veja [Números de telefone: como excluir um número de telefone da WABA](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#deleting-business-phone-numbers).-   As solicitações ao ponto de extremidade de cancelamento do registro estão sujeitas ao limite de dez solicitações por número de telefone comercial em um período de 72 horas. Se você exceder esse valor, a API retornará o código de erro `133016`, e o número de telefone comercial não poderá ser cancelado pelas próximas 72 horas.

### Exemplo

Exemplo de solicitação:

```
curl -X POST \
 'https://graph.facebook.com/v24.0/FROM_PHONE_NUMBER_ID/deregister' \
 -H 'Authorization: Bearer ACCESS_TOKEN'
```

A resposta bem-sucedida tem a seguinte aparência:

```
{  "success": true}
```

## Veja também

-   [Redefinir o PIN](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#changing-your-pin-via-whatsapp-manager)-   [Armazenamento Local da API de Nuvem](/documentation/business-messaging/whatsapp/local-storage)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)