<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/local-storage -->
<!-- Scraped: 2025-12-20T17:55:01.079Z -->

# Armazenamento local

Updated: 21 de out de 2025

Com o recurso Armazenamento Local, você tem uma camada adicional de controle no gerenciamento de dados e pode especificar onde os dados das suas mensagens são armazenados em repouso. Caso sua empresa seja de um setor regulamentado (como finanças, organizações governamentais ou serviços de saúde), talvez você prefira que os dados em repouso das mensagens sejam armazenados em um país específico devido às políticas regulatórias ou da empresa.

## Como funciona o armazenamento local

O armazenamento local é controlado por uma configuração habilitada ou desabilitada no nível do número de telefone comercial do WhatsApp. Tanto a API de Nuvem quanto a API de MM Lite são compatíveis com o armazenamento local. A configuração será aplicada a qualquer mensagem enviada por meio dessas APIs, se o armazenamento estiver habilitado.

Quando o armazenamento local está habilitado, as seguintes restrições são aplicadas ao conteúdo de mensagens para um número de telefone comercial:

-   **Dados em uso:** quando o conteúdo da mensagem é enviado ou recebido pela API de Nuvem ou pela API de MM Lite, ele pode ser armazenado nos data centers da Meta em todo o mundo durante o processamento.-   **Dados em repouso:** após o período de dados em uso, o conteúdo da mensagem é excluído dos data centers da Meta fora da região de armazenamento local especificada e persiste apenas nos data centers dentro da região de armazenamento local selecionada. O período de dados em uso é diferente para a API de Nuvem e a API de MM Lite, conforme especificado abaixo:
    -   Ao usar o armazenamento local na API de Nuvem, o período de dados em uso é de até 60 minutos.-   Ao usar o armazenamento local na API de MM Lite, o período de dados em uso é de até 90 minutos.

O armazenamento local complementa outros [controles de privacidade e segurança da Plataforma do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Ftrust-and-safety%3Ffbclid%3DIwZXh0bgNhZW0CMTEAYnJpZBExNkRZWTlJbDFSMDBUVlRLZwEe2Qq3X5Y-XnlgB832KjRawCRQOBQGgvzV0IgHxrk5kplGc2LAfA7cvutA9ms_aem_HXrl5zwbIRR1MUiy5tf6Cw&h=AT3UHqLwYU7Bb-85xI2Dn-oTHoESdchy9on_IJHUZQ0uMM-cfAnEQKDGbd1L_ao2QGEk9P27-17YpYYjERTwECJ8QSWxw6DeaOIWhJyblTChWN1teIo2QqHpzUZFtuBrlFEGu5gz5J4) e permite que os clientes garantam a conformidade com regulamentos locais de proteção de dados.

## Dados em escopo

O armazenamento local se aplica ao conteúdo de mensagens (texto e mídia) enviadas e/ou recebidas por meio da API de Nuvem e da API de MM Lite. Os seguintes conteúdos de mensagem estão no escopo do recurso de armazenamento local:

-   Mensagens de texto: carga de texto (corpo da mensagem)-   Mensagens de mídia: carga de mídia (áudio, documento, imagem ou vídeo)-   Mensagens de modelo (modelo estático + parâmetros passados na hora de envio da mensagem): componentes com carga de texto/mídia

Além disso, um conjunto limitado de atributos de metadados é incluído no conteúdo da mensagem armazenado localmente. Assim, é possível associar a carga da mensagem criptografada à mensagem originalmente processada e auditar a localização. Os metadados armazenados são protegidos com tokens e criptografia.

## Regiões disponíveis

Para ver quais regiões são compatíveis com o armazenamento local, confira o parâmetro `data_localization_region` na [documentação sobre registro de número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#register).

## Limitações

-   Os arquivos de mídia enviados por um número de telefone comercial com armazenamento local habilitado só poderão ser acessados ​​por esse número de telefone específico e não poderão ser compartilhados com outros números associados à empresa.

## Como habilitar o Armazenamento Local

Siga as etapas abaixo para habilitar o Armazenamento Local em um número de telefone comercial não registrado usando a versão 21.0 ou mais recente da API. Se estiver usando uma versão mais antiga da API, consulte [Como habilitar o Armazenamento Local (v20 e versões anteriores)](/documentation/business-messaging/whatsapp/local-storage#enabling-local-storage--v20-and-older-).

### Etapa 1: habilitar o Armazenamento Local no número de telefone

O recurso de Armazenamento Local só poderá ser habilitado ou desabilitado em números de telefone comerciais do WhatsApp que estiverem em um estado não registrado. Caso o número de telefone esteja registrado, será preciso cancelar o registro e registrá-lo novamente com o armazenamento local habilitado.

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/settings**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#Updating) para habilitar o armazenamento local no número de telefone comercial não registrado:

#### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/settings

{
  "storage_configuration": {
    "status": "IN_COUNTRY_STORAGE_ENABLED",
    "data_localization_region": "<COUNTRY_CODE>"
  }
}
```

Defina `<COUNTRY_CODE>` como o [country code](#available-regions) do local onde os dados em repouso devem ser armazenados.

#### Sintaxe da resposta

```
{
  "success": <SUCCESS>
}
```

Em caso de sucesso, `<SUCCESS>` será definido como `true`.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/settings' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "storage_configuration": {
    "status": "IN_COUNTRY_STORAGE_ENABLED",
    "data_localization_region": "BR"
  }
}'
```

#### Exemplo de resposta

```
{  "success": true}
```

### Etapa 2: registrar o número de telefone

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/register**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api#Creating) para registrar o número de telefone comercial.

#### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/register

{
  "messaging_product": "whatsapp",
  "pin": "<TWO_STEP_PIN>"
}
```

Defina `<TWO_STEP_PIN>` como o PIN de verificação em duas etapas desejado para o número de telefone comercial.

#### Sintaxe da resposta

```
{
  "success": <SUCCESS>
}
```

Em caso de sucesso, `<SUCCESS>` será definido como `true`.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v21.0/v24.0/register' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "123456"
}'
```

#### Exemplo de resposta

```
{  "success": true}
```

## Como obter as configurações do armazenamento local

Use o ponto de extremidade [**GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/settings**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#Reading) para ver as configurações de armazenamento local em um número de telefone do WhatsApp Business. Por exemplo:

```
curl 'https://graph.facebook.com/v24.0/179776755229976/settings' \
-H 'Authorization: Bearer EAAJB...'
```

Isso retornará um [nó que representa as configurações de armazenamento local](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api) no número de telefone comercial. Por exemplo:

```
{  "storage_configuration": {    "status": "IN_COUNTRY_STORAGE_ENABLED",    "data_localization_region": "BR"  }}
```

## Como desabilitar o Armazenamento Local

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/settings**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#Updating) para desabilitar o armazenamento local em um número de telefone comercial não registrado com a versão 21.0 ou mais recente da API. Se estiver usando uma versão mais antiga da API, consulte [Como desabilitar o Armazenamento Local (v20 e versões anteriores)](#disabling-local-storage--v20-and-older-).

#### Sintaxe da solicitação

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID/>settings

{
  "storage_configuration": {
    "status": "IN_COUNTRY_STORAGE_DISABLED"
  }
}
```

Defina `<COUNTRY_CODE>` como o [country code](#available-regions) do local onde os dados em repouso devem ser armazenados.

#### Sintaxe da resposta

```
{
  "success": <SUCCESS>
}
```

Em caso de sucesso, `<SUCCESS>` será definido como `true`.

#### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/settings' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "storage_configuration": {
    "status": "IN_COUNTRY_STORAGE_DISABLED"
  }
}'
```

#### Exemplo de resposta

```
{  "success": true}
```

## Como habilitar o Armazenamento Local (v20 e versões anteriores)

Para habilitar o Armazenamento Local em um número de telefone comercial não registrado usando a v20.0 ou versões anteriores da API:

### Etapa 1: consultar o status de verificação

Use o ponto de extremidade [**GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER>**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) e solicite o campo `code_verification_status`. Se o status de verificação de código for `VERIFIED`, pule para a etapa 4. Caso contrário, prossiga para a etapa 2.

### Etapa 2: solicitar um código de verificação

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/request\_code**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api#Creating) para solicitar um código de verificação. Em caso de sucesso, a API responderá com `true`, e um código de verificação será enviado ao número de telefone comercial por meio do método especificado no parâmetro `code_method`.

Por exemplo, esta consulta solicita que um código de verificação seja enviado via SMS em inglês (localidade nos EUA).

```
curl -X POST 'https://graph.facebook.com/v20.0/110200345501442/request_code?code_method=SMS&language=en_US' \-H 'Authorization: Bearer EAAJB...'
```

Use o código na mensagem entregue na próxima etapa.

### Etapa 3: verificar o número de telefone comercial

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/verify\_code**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/verify-code-api#Creating) para verificar o número de telefone comercial utilizando o código incluído na mensagem que você recebeu na etapa anterior.

Por exemplo:

```
curl -X POST 'https://graph.facebook.com/v20.0/110200345501442/verify_code?code=123830' \-H 'Authorization: Bearer EAAJB...'
```

### Etapa 4: registrar o número de telefone comercial

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/register**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api#Creating) para registrar o número de telefone comercial. Indique o país onde os dados em repouso devem ser armazenados usando o parâmetro `data_localization_region`.

Esta solicitação habilita o Armazenamento Local em um número de telefone comercial e define o país onde os dados devem ser armazenados (por exemplo, Índia):

```
curl 'https://graph.facebook.com/v20.0/110200345501442/register' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer EAAJB...' \-d '{  "messaging_product": "whatsapp",  "pin": "123456",  "data_localization_region": "IN"}'
```

## Como desabilitar o Armazenamento Local (v20 e versões anteriores)

Use o ponto de extremidade [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/deregister**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-deregister-api#Creating) para desabilitar o armazenamento local em um número de telefone comercial com a versão 20.0 ou versões anteriores da API.

Por exemplo:

```
curl -X POST 'https://graph.facebook.com/v24.0/110200345501442/deregister' \
-H 'Authorization: Bearer EAAJB...'
```

Vale ressaltar que isso cancelará o registro do número de telefone comercial e impedirá o uso dele com a API de Nuvem do WhatsApp. Se quiser continuar usando o número com a API de Nuvem, mas sem o Armazenamento Local habilitado, você deverá registrá-lo novamente sem incluir o parâmetro `data_localization_region`.

## Perguntas frequentes

**P. Quais são os caminhos de migração para mover um número de telefone para a versão da API de Nuvem com Armazenamento Local?**

Aceitamos todos os caminhos de migração para a versão da API de Nuvem com Armazenamento Local, incluindo:

-   Migrar um número existente da API Local para a versão da API de Nuvem com Armazenamento Local-   Migrar um número existente da API de Nuvem para a versão com Armazenamento Local-   Habilitar um número novo na API de Nuvem com Armazenamento Local

Em todos esses casos, é necessário enviar uma solicitação POST ao ponto de extremidade [/register](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#register) para o número de telefone selecionado, especificando o país no qual os dados devem ser localizados em um novo parâmetro `data_localization_region`.

**P. A migração traz algum risco? Haverá um período de inatividade?**

Não existem riscos. Esse processo é semelhante ao da migração da API Local para a API de Nuvem. Consulte nossa [documentação para desenvolvedores neste link](/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud). Normalmente, o tempo de inatividade é inferior a 5 minutos, e não é preciso verificar o número de telefone comercial novamente.

**P. Há algum tempo de inatividade associado à habilitação do armazenamento local para um número de telefone comercial?**

Se o número de telefone comercial já estiver registrado, será necessário excluí-lo e registrá-lo novamente com o armazenamento local habilitado. Esse processo normalmente demora menos de cinco minutos. Não é necessária uma nova verificação do número de telefone comercial durante esse processo.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)