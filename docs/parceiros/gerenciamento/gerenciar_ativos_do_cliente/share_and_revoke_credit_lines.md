<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines -->
<!-- Scraped: 2026-03-10T22:06:28.662Z -->

# Como gerenciar linhas de crédito

Updated: 12 de dez de 2025

Este documento descreve como os parceiros de soluções podem compartilhar e cancelar linhas de crédito com clientes empresariais integrados.

**Divulgação de responsabilidade por cobranças**

Os clientes empresariais integrados por meio do cadastro incorporado precisam ter acesso à sua linha de crédito com a Meta para pagar pelo acesso à plataforma do WhatsApp Business. Isso significa que as empresas enviarão os pagamentos a você, e você receberá uma fatura agregada para pagar à Meta.

Você é a parte responsável pelas cobranças de todas as empresas que compartilham sua linha de crédito. Você é responsável e deverá pagar à Meta por todos os gastos incorridos por essas empresas pelo uso que fizerem da plataforma do WhatsApp Business.

O acesso à sua linha de crédito poderá ser concedido usando as APIs descritas neste documento. É possível cancelar o acesso à sua linha de crédito para empresas específicas no [Meta Business Suite⁠](https://business.facebook.com/home/accounts) ou com uma [série de chamadas de API](#revoke-a-shared-credit-line).

## Autenticação e autorização

Quase todos os pontos de extremidade relacionados à linha de crédito exigem o token de acesso de usuário do sistema. Além disso, o usuário do sistema que o token representa precisa ter concedido ao seu app a permissão **business\_management** e recebido uma função de **administrador** ou de **editor financeiro** no seu portfólio empresarial.

## Obter a identificação da sua linha de crédito

Quase todas as chamadas de API relacionadas a linhas de crédito exigem a identificação da sua linha de crédito. Use o ponto de extremidade [GET /<BUSINESS\_ID>/extendedcredits](/docs/marketing-api/reference/business/extendedcredits#Reading) para obter a identificação da linha de crédito do seu portfólio empresarial.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/extendedcredits' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/102289599326934/extendedcredits' \-H 'Authorization: Bearer EAAJi...'
```

### Resposta

Em caso de sucesso, a API retornará a identificação da linha de crédito estendida do portfólio empresarial ("Identificação da linha de crédito").

```
{  "data": [    {      "id": "1972385232742146"    }  ]}
```

## Como compartilhar sua linha de crédito

No momento, estamos testando novos métodos para compartilhar sua linha de crédito com clientes empresariais integrados. Posteriormente, eles substituirão esta etapa. Por isso, se você quiser implementá-los agora, consulte a seção [Método alternativo para compartilhar sua linha de crédito](#alternate-method-for-sharing-your-credit-line).

Use o ponto de extremidade [POST /<EXTENDED\_CREDIT\_LINE\_ID>/whatsapp\_credit\_sharing\_and\_attach](/docs/marketing-api/reference/extended-credit/whatsapp_credit_sharing_and_attach#Creating) para compartilhar sua linha de crédito com um cliente empresarial integrado.

### Sintaxe da solicitação

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach?waba_currency=<CUSTOMER_BUSINESS_CURRENCY>&waba_id=<CUSTOMER_WABA_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<CUSTOMER_BUSINESS_CURRENCY>`

**Obrigatório.**

A moeda da empresa, representada por um código de três letras. Valores compatíveis:

-   `AUD`-   `EUR`-   `GBP`-   `IDR`-   `INR`-   `USD`

Esta moeda é usada para fins de faturamento e corresponde às taxas de [precificação](/documentation/business-messaging/whatsapp/pricing).

`USD`

`<CUSTOMER_WABA_ID>`

**Obrigatório.**

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

`<EXTENDED_CREDIT_LINE_ID>`

**Obrigatório.**

A identificação da sua linha de crédito estendida.

`1972385232742146`

`<SYSTEM_TOKEN>`

**Obrigatório.**

Seu token do sistema.

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{  "allocation_config_id": "58501441721238",  "waba_id": "102290129340398"}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<ALLOCATION_CONFIGURATION_ID>`

ID de configuração para alocação da linha de crédito estendida.

Salve esse ID para [verificar](#verifying-shared-status) se a linha de crédito foi realmente compartilhada com o cliente.

`58501441721238`

`<CUSTOMER_WABA_ID>`

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

## Método alternativo para compartilhar sua linha de crédito

No momento, estamos testando novos métodos para compartilhar sua linha de crédito com clientes empresariais integrados. Essas etapas são descritas abaixo e, eventualmente, substituirão o [método atual](#sharing-your-credit-line) usado para compartilhar sua linha de crédito com um cliente integrado.

### Etapa 1: obter a identificação do portfólio empresarial do seu cliente

Use o ponto de extremidade [GET /<WABA\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#Reading) e solicite o campo `owner_business_info` para obter a identificação do portfólio empresarial do cliente.

#### Sintaxe da solicitação

```
curl --get 'https://graph.facebook.com/v21.0/<WABA_ID>?fields=owner_business_info' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

#### Parâmetros de solicitação

  

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_TOKEN>`

**Obrigatório.**

O token da empresa do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

`<WABA_ID>`

**Obrigatório.**

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

#### Sintaxe da resposta

Caso a solicitação seja bem-sucedida:

```
{
  "owner_business_info": {
    "name": "<BUSINESS_PORTFOLIO_NAME>",
    "id": "<BUSINESS_PORTFOLIO_ID>"
  },
  "id": "<WABA_ID>"
}
```

#### Parâmetros da resposta

  

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_PORTFOLIO_ID>`

A identificação do portfólio empresarial do cliente.

`2729063490586005`

`<BUSINESS_PORTFOLIO_NAME>`

O nome do portfólio empresarial do cliente.

`Wind & Wool`

`<WABA_ID>`

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

### Etapa 2: compartilhar sua linha de crédito com a empresa do cliente

Use o ponto de extremidade [POST /<EXTENDED\_CREDIT\_ID>/whatsapp\_credit\_sharing](/docs/marketing-api/reference/extended-credit/whatsapp_credit_sharing#Creating) e o **token do sistema** para indicar a intenção de compartilhar sua linha de crédito com o portfólio empresarial do cliente.

#### Sintaxe da solicitação

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing?receiving_business_id=<BUSINESS_PORTFOLIO_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

#### Parâmetros de solicitação

  

Espaço reservado

Descrição

Valor de exemplo

`<EXTENDED_CREDIT_LINE_ID>`

**Obrigatório.**

A identificação da sua linha de crédito estendida.

`5985499441566032`

`<BUSINESS_PORTFOLIO_ID>`

**Obrigatório.**

A identificação do portfólio empresarial do cliente.

`2729063490586005`

`<SYSTEM_TOKEN>`

**Obrigatório.**

Seu token de acesso de usuário do sistema.

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

#### Exemplo de resposta

Caso a solicitação seja bem-sucedida:

```
"success": true,  "allocation_config_id": "58501441721238"}
```

#### Parâmetros da resposta

  

Espaço reservado

Descrição

Valor de exemplo

`<ALLOCATION_CONFIG_ID>`

ID de configuração para alocação da linha de crédito estendida.

`58501441721238`

### Etapa 3: anexar sua linha de crédito à WABA do cliente

Use o ponto de extremidade [POST /<EXTENDED\_CREDIT\_LINE\_ID>/whatsapp\_credit\_attach](/docs/marketing-api/reference/extended-credit/whatsapp_credit_attach) para anexar sua linha de crédito à WABA do cliente.

Observação: não é possível alterar as linhas de crédito vinculadas a uma WABA. Se a WABA precisar de uma linha de crédito diferente, será necessário criar outra WABA e, em seguida, anexar a nova linha de crédito a ela.

#### Sintaxe da solicitação

```
curl -X POST 'https://graph.facebook.com/v21.0/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_attach?waba_currency=<WABA_CURRENCY>&waba_id=<WABA_ID>' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

#### Parâmetros de solicitação

  

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_TOKEN>`

**Obrigatório.**

O token da empresa do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

`<EXTENDED_CREDIT_LINE_ID>`

**Obrigatório.**

A identificação da sua linha de crédito estendida.

`5985499441566032`

`<WABA_ID>`

**Obrigatório.**

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

`<WABA_CURRENCY>`

**Obrigatório.**

A moeda da empresa do cliente.

`USD`

#### Sintaxe da resposta

Caso a solicitação seja bem-sucedida:

```
{
  "success": true,
  "waba_id": "<WABA_ID>",
  "allocation_config_id": "<ALLOCATION_CONFIG_ID>"
}
```

#### Parâmetros da resposta

  

Espaço reservado

Descrição

Valor de exemplo

`<ALLOCATION_CONFIG_ID>`

ID de configuração para alocação da linha de crédito estendida.

Salve esse ID para [verificar](#verifying-shared-status) se a linha de crédito foi realmente compartilhada com o cliente.

`58501441721238`

`<WABA_ID>`

A identificação da conta do WhatsApp Business (WABA, pelas iniciais em inglês) do cliente.

`102290129340398`

Você concluiu as etapas para compartilhar sua linha de crédito com o cliente empresarial. Para conferir se o processo foi bem-sucedido, leia esta seção sobre [como verificar se a linha de crédito foi compartilhada](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#step-3--verify-credit-line-was-shared).

## Como verificar o status de compartilhamento

Execute as seguintes consultas se quiser ter certeza de que sua linha de crédito foi compartilhada com um cliente empresarial integrado.

### Etapa 1: obter a credencial de recebimento da linha de crédito

Use o ponto de extremidade [GET /<EXTENDED\_CREDIT\_ALLOCATION\_ID>](/docs/graph-api/reference/extended-credit-allocation-config) para solicitar o campo `receiving_credential` na identificação da alocação de crédito estendido (retornada quando você [compartilhou a linha de crédito](#sharing-your-credit-line) com o cliente empresarial).

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_ALLOCATION_ID>?fields=receiving_credential' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

### Sintaxe da resposta

Caso a solicitação seja bem-sucedida:

```
{
  "receiving_credential": {
    "id": "<RECEIVING_CREDENTIAL_ID>"
  },
  "id": "<ALLOCATION_CONFIGURATION_ID>"
}
```

### Etapa 2: obter o ID do financiamento principal da WABA

Use o ponto de extremidade [GET /<WABA>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#Reading) para solicitar o `primary_funding_id` na identificação da WABA do cliente.

### Sintaxe da solicitação

```
curl 'https://graph.facebook.com/v21.0/<CUSTOMER_WABA_ID>/?fields=primary_funding_id' \
-H 'Authorization: Bearer <CUSTOMER_BUSINESS_TOKEN>'
```

### Sintaxe da resposta

Caso a solicitação seja bem-sucedida:

```
{
  "primary_funding_id": "<PRIMARY_FUNDING_ID>",
  "id": "<CUSTOMER_WABA_ID>"
}
```

### Etapa 3: comparar IDs

Compare o ID da credencial de recebimento com o ID do financiamento principal. A correspondência entre os valores indica que sua linha de crédito foi compartilhada corretamente com a WABA do cliente empresarial.

## Cancelar uma linha de crédito compartilhada

Estas são as etapas necessárias para remover uma linha de crédito compartilhada caso seja necessário revogar o acesso por algum motivo. É possível cancelar o acesso à sua linha de crédito sempre que precisar e/ou quando seu cliente remover você como parceiro da conta do WhatsApp Business dele.

Quando você cancela uma linha de crédito da conta de um cliente, esse cancelamento aplica-se a todas as WABAs que pertencem à empresa do cliente **e** foram compartilhadas com você, o parceiro de soluções.

### Etapa 1: obter o ID da sua linha de crédito

#### Exemplo de solicitação

```
curl -i -X GET "https://graph.facebook.com/v25.0/105954558954427/
  extendedcredits?fields=id,legal_entity_name&
  access_token=EAAFl..."
```

#### Exemplo de resposta

```
{  "data": [    {      "id": "1972385232742146",   //Credit line ID      "legal_entity_name": "Your Legal Entity",    }  ]}
```

### Etapa 2: obter a identificação do portfólio empresarial do cliente

Se a conta do WhatsApp Business estiver compartilhada com o parceiro de soluções, obtenha a identificação da empresa do cliente na conta compartilhada.  
  

No exemplo abaixo, use a identificação da conta do WhatsApp Business atribuída.  
  
Solicitação:

```
curl -i -X GET "https://graph.facebook.com/v25.0/
  <WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=owner_business_info&
  access_token=<ACCESS_TOKEN>"
```

Resposta:

```
{  "owner_business_info": {    "name": "Client Business Name",    "id": "1972385232742147"  },}
```

Se a conta do WhatsApp Business deixou de ser compartilhada com o parceiro de soluções ou a empresa do cliente removeu o parceiro de soluções da conta do WhatsApp Business, você não poderá acessar a identificação da empresa do cliente pela chamada à API acima. Para ver mais informações, consulte [Conta do WhatsApp Business não compartilhada](/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#unshared-whatsapp-business-account).

### Etapa 3: obter o registro de compartilhamento de crédito do cliente

No exemplo a seguir, use a identificação da linha de crédito como identificação de crédito estendido.

  
  

Solicitação:

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_ID>/
  owning_credit_allocation_configs?
  receiving_business_id=<CLIENT_BUSINESS_ID>&
  fields=id,receiving_business&
  access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

Resposta:

```
{  "id": "1972385232742140", // Allocation config (i.e., credit sharing) id  "receiving_business": {    "name": "Client Business Name"    "id": "1972385232742147"  },}
```

### Etapa 4: cancelar o compartilhamento de crédito

Solicitação:

```
curl -i -X DELETE "https://graph.facebook.com/v25.0/
  {allocation-config-id}?
  access_token={system-user-access-token}"
```

Resposta:

```
{  "success": true,}
```

### Etapa 5: verificar se o compartilhamento de crédito foi cancelado (opcional)

Solicitação:

```
curl -i -X GET "https://graph.facebook.com/v25.0/
  {allocation-config-id}?fields=receiving_business,request_status&
  access_token={system-user-access-token}"
```

Resposta:

```
{  "receiving_business": {    "name": "Customer Business Name"    "id": "1972385232742147"  },  "request_status": "DELETED"}
```

## Solução de problemas

### Contas do WhatsApp Business não compartilhadas

Caso um cliente empresarial pare de compartilhar a WABA com você ou remova seu perfil de parceiro da conta do WhatsApp Business, você não conseguirá obter o ID do portfólio empresarial dele por meio da API.

Em vez disso, você pode obter o ID do portfólio no email enviado aos administradores do portfólio empresarial quando o cliente removeu você como parceiro ou deixou de compartilhar a WABA.

Quando a WABA não é compartilhada com você, todas as mensagens relacionadas são bloqueadas para proteger sua linha de crédito. Para garantir total segurança, recomendamos que você cancele sua linha de crédito da WABA do cliente assim que ela deixar de ser compartilhada com você.

## Veja também

-   Referência: [Business](/docs/marketing-api/reference/business)-   Referência: [conta do WhatsApp Business](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)-   Referência: [crédito estendido](/docs/marketing-api/reference/extended-credit)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)