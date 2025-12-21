<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification -->
<!-- Scraped: 2025-12-20T17:51:37.278Z -->

# Verificação da empresa conduzida por parceiro

Updated: 14 de nov de 2025

No momento, esse recurso está disponível apenas para parceiros de soluções **Solução selecionada** e **Premier** aprovados. Consulte o artigo [Como se cadastrar para a verificação da empresa conduzida pelo parceiro](https://www.facebook.com/business/help/1091073752691122) da Central de Ajuda e saiba como solicitar aprovação.

Este documento descreve como criar envios de verificação da empresa para clientes corporativos que foram integrados por meio do Cadastro incorporado.

Caso seja um parceiro de soluções aprovado, você pode reunir a documentação de verificação da empresa exigida dos clientes corporativos integrados e enviar a empresa deles para verificação em nome deles. As decisões sobre os envios criados dessa forma podem ser tomadas em minutos, em vez de dias.

## Requisitos

-   você precisa ser um parceiro de soluções **Solução selecionada** ou **Premier** aprovado e [ter aprovação para acesso](https://www.facebook.com/business/help/1091073752691122)-   seu [token de acesso de usuário do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens)-   o usuário do sistema cujo token do sistema você está usando deve ser um administrador no seu portfólio empresarial (consulte o artigo [Sobre o acesso ao portfólio empresarial](https://www.facebook.com/business/help/442345745885606) da Central de Ajuda)-   o usuário do sistema cujo token do sistema você está usando deve ter concedido ao seu app a permissão **business\_management**-   a identificação do portfólio empresarial do cliente comercial ([fornecida pelo cliente](https://www.facebook.com/business/help/1181250022022158?id=180505742745347) ou retornada via API ao solicitar o `owner_business_info field` na identificação da WABA do cliente, usando o [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens))

## Limitações

Você tem um limite de três envios para cada cliente corporativo. Se os três envios forem rejeitados, o cliente deverá concluir a verificação da empresa por conta própria. Caso seu envio seja rejeitado três vezes, compartilhe o seguinte artigo da Central de Ajuda com o cliente:

[Como verificar a sua empresa na Meta](https://www.facebook.com/business/help/2058515294227817?id=180505742745347)

## Suporte

Caso você precise de ajuda com a verificação da empresa conduzida por parceiro, abra um tíquete do Suporte Direto:

-   Acesse o [Suporte Direto](https://business.facebook.com/direct-support/).-   Clique em **Fazer uma pergunta**.-   Em **Tópico**, selecione **WABiz: integração**.-   Clique em **Tipo de solicitação** e selecione **Verificação da empresa conduzida pelo parceiro para WhatsApp**.

## Documentos aceitos

Consulte o artigo da Central de Ajuda para ver uma lista de documentos aceitos:

[Carregue documentos oficiais para verificar a sua empresa](https://www.facebook.com/business/help/159334372093366)

## Tempo de resposta

O tempo médio de resposta para um envio é de cinco minutos, mas pode levar várias horas. Se você não receber um webhook notificando o resultado de um envio após 24 horas, abra um tíquete do Suporte Direto.

## Webhooks

As decisões sobre o envio são comunicadas pelo webhook **account\_update**. Por isso, é importante que você tenha inscrito seu app no campo de webhook **account\_update** e que ele esteja [inscrito em webhooks na conta do WhatsApp Business do cliente comercial](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#subscribe-to-a-whatsapp-business-account).

### Exemplo de webhook

```
{
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_SENT_TIMESTAMP>,
      "changes": [
        {
          "value": {
            "event": "PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE",
            "partner_client_certification_info": {
              "client_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>",
              "status": "<STATUS>",
              "rejection_reasons": [
                "<REJECTION_REASONS>"
              ]

            }
          },
          "field": "account_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

### Parâmetros de webhook

Espaço reservado

Descrição

Valor de exemplo

`<CUSTOMER_BUSINESS_PORTFOLIO_ID>`

A identificação do portfólio empresarial do cliente corporativo.

`2729063490586005`

`<REJECTION_REASONS>`

Descrição dos motivos da rejeição. Esse parâmetro estará presente mesmo se o envio for rejeitado, mas o valor será definido como `NONE`.

Para ver uma lista de valores possíveis e as respectivas descrições, consulte o campo `rejection_reasons` na referência de nó [Envio da verificação do cliente para parceiro do WhatsApp Business](/docs/graph-api/reference/whats-app-business-partner-client-verification-submission#Reading).

`LEGAL_NAME_NOT_FOUND_IN_DOCUMENTS`

`<STATUS>`

Status de verificação da empresa. Os valores podem ser os seguintes:

`APPROVED` – indica que a empresa do cliente foi verificada.

`FAILED` – indica que não foi possível verificar a empresa do cliente com base nas informações enviadas.

`APPROVED`

`<WABA>`

A identificação da WABA do cliente corporativo.

`486585971195941`

`<WEBHOOK_SENT_TIMESTAMP>`

Registro de data e hora UNIX que indica quando o webhook foi enviado.

`1730752761`

## Enviar uma empresa para verificação

Use o ponto de extremidade [POST /<BUSINESS\_PORTFOLIO\_ID>/self\_certify\_whatsapp\_business](/docs/marketing-api/reference/business/self_certify_whatsapp_business#Creating) para iniciar a verificação da empresa em nome de um cliente corporativo integrado por meio da sua implementação do Cadastro incorporado.

### Solicitação

```
curl 'https://graph.facebook.com/v21.0/<BUSINESS_PORTFOLIO_ID>/self_certify_whatsapp_business' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>' \
-F 'end_business_id="<CUSTOMER_BUSINESS_PORTFOLIO_ID>"' \
-F 'business_documents[]=@"<DOCUMENT_PATH>"' \
-F 'business_documents[]=@"<DOCUMENT_PATH>"' \
-F 'business_documents[]=@"<DOCUMENT_PATH>"'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_PORTFOLIO_ID>`

**Obrigatório.**

A identificação do portfólio empresarial.

`506914307656634`

`<CUSTOMER_BUSINESS_PORTFOLIO_ID>`

**Obrigatório.**

A identificação do portfólio empresarial do cliente.

`2729063490586005`

`<DOCUMENT_PATH>`

**Obrigatório.**

O caminho do documento da empresa do cliente que você está enviando em nome dele.

É possível enviar no máximo três documentos (o exemplo de solicitação acima envia três). Use um parâmetro por documento.

O tamanho máximo de cada documento é 5 MB.

Tipos de arquivos compatíveis:

-   PDF-   JPEG-   JPG-   PNG

Para ver os documentos aceitos, consulte o artigo [Carregar documentos oficiais para verificar sua empresa](https://www.facebook.com/business/help/159334372093366) da Central de Ajuda.

`NP7sEWs3x/wind_and_wool_bank_statement_04302024.txt`

`<SYSTEM_TOKEN>`

**Obrigatório.**

Seu token de acesso de usuário do sistema.

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "success": true,
  "message": "Your request has been received and will be reviewed shortly.",
  "verification_attempts": <VERIFICATION_ATTEMPTS>
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<VERIFICATION_ATTEMPTS>`

O número de envios de verificação da empresa que você iniciou em nome do cliente corporativo.

`1`

## Como conferir o status do envio

Use o ponto de extremidade [GET /<BUSINESS\_PORTFOLIO\_ID>/self\_certified\_whatsapp\_business\_submissions](/docs/marketing-api/reference/business/self_certified_whatsapp_business_submissions#Reading) para conferir o status de verificação dos envios que você criou para um único ou para todos os clientes corporativos.

### Solicitação

```
curl 'https://graph.facebook.com/v17.0/<BUSINESS_PORTFOLIO_ID>/self_certified_whatsapp_business_submissions?fields=end_business_id=<CUSTOMER_BUSINESS_PORTFOLIO_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<CUSTOMER_BUSINESS_PORTFOLIO_ID>`

**Opcional.**

A identificação do portfólio empresarial do cliente.

Inclua esse parâmetro se quiser apenas obter dados sobre envios criados para a empresa identificada pela identificação do portfólio empresarial do cliente.

`2729063490586005`

`<SYSTEM_TOKEN>`

**Obrigatório.**

Seu token de acesso de usuário do sistema.

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

### Resposta

Caso a solicitação seja bem-sucedida, o ponto de extremidade retornará uma matriz de nós de [Envio da verificação do cliente para parceiro do WhatsApp Business](/docs/graph-api/reference/whats-app-business-partner-client-verification-submission), com campos padrão em cada nó.

```
{
  "data": [

    // Structure for pending or approved submissions
    {
      "verification_status": "<VERIFICATION_STATUS>",
      "submitted_time": "<SUBMISSION_TIMESTAMP>",
      "update_time": "<UPDATE_TIMESTAMP>",
      "client_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>",
      "submitted_info": {
        "business_vertical": "<CUSTOMER_BUSINESS_VERTICAL>"
      },
      "id": "<SUBMISSION_ID>"
    },

    // Structure for rejected submissions
    {
      "verification_status": "<VERIFICATION_STATUS>",
      "rejection_reasons": [
        "<REJECTION_REASON>",
        "<REJECTION_REASON>"
      ],
      "submitted_time": "<SUBMISSION_TIMESTAMP>",
      "update_time": "<UPDATE_TIMESTAMP>",
      "client_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>",
      "submitted_info": {},
      "id": "<SUBMISSION_ID>"
    },

    // Additional objects describing each submission would follow

  ],
  "paging": {
    "cursors": {
      "before": "<BEFORE_CURSOR>",
      "after": "<AFTER_CURSOR>"
    },
    "next": "<URL_TO_FETCH_NEXT_RESULT_SET>"
  }
}
```

### Parâmetros da resposta

Para ver descrições dos campos retornados e dos valores de parâmetros, consulte a referência do nó [Envio da verificação do cliente para parceiro do WhatsApp Business](/docs/graph-api/reference/whats-app-business-partner-client-verification-submission).

## Obter o status de verificação da empresa

Se desejar, você pode usar o ponto de extremidade [GET /<BUSINESS\_PORTFOLIO\_ID>](/docs/marketing-api/reference/business#Reading) e solicitar o campo `verification_status` na identificação do portfólio empresarial do cliente para ver o status de verificação (como alternativa, é possível solicitar o campo `business_verification_status` na identificação da WABA do cliente usando o token da empresa).

### Solicitação

```
curl 'https://graph.facebook.com/v21.0/<BUSINESS_PORTFOLIO_ID>?fields=verification_status' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

### Parâmetros de solicitação

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_PORTFOLIO_ID>`

**Obrigatório.**

A identificação do portfólio empresarial do cliente.

`2729063490586005`

`<BUSINESS_TOKEN>`

**Obrigatório.**

O token da empresa do cliente.

`EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn`

### Resposta

```
{
  "verification_status": "<VERIFICATION_STATUS>",
  "id": "<BUSINESS_PORTFOLIO_ID>"
}
```

### Parâmetros da resposta

Espaço reservado

Descrição

Valor de exemplo

`<BUSINESS_PORTFOLIO_ID>`

A identificação do portfólio empresarial do cliente corporativo.

`2729063490586005`

`<VERIFICATION_STATUS>`

O status de verificação do portfólio empresarial.

Veja o campo `verification_status` na referência do nó [Empresa](/docs/marketing-api/reference/business#Reading) para conferir a lista de valores possíveis.

`verified`

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)