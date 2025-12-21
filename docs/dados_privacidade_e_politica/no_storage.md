<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/no-storage -->
<!-- Scraped: 2025-12-20T17:55:08.915Z -->

# Sem armazenamento

Updated: 8 de out de 2025

Esse recurso está disponível apenas para parceiros selecionados que não podem usar o armazenamento local. Se o armazenamento local não for uma opção para você, é possível solicitar a opção Sem armazenamento [abrindo um tíquete no Suporte Direto](https://business.facebook.com/direct-support/) com as seguintes seleções:

-   **Tópico da pergunta**: Cloud API Issues (Problemas na API de Nuvem)-   **Tipo de solicitação:** solicitação para usar a API de Nuvem sem solução de armazenamento

A opção "Sem armazenamento" é uma configuração personalizada do [armazenamento local](/documentation/business-messaging/whatsapp/local-storage) da API de Nuvem, em que os dados em trânsito são armazenados por até uma hora nos data centers da Meta, e os dados não persistem em repouso (ou seja, não ficam armazenados nos data centers da Meta nem em armazenamentos da AWS no país). As mensagens de entrada/saída são armazenadas por, no máximo, uma hora nos data centers da Meta:

-   As mensagens recebidas e enviadas são armazenadas por até uma hora nos data centers da Meta.-   Os blobs de mídia de entrada/saída são armazenados por, no máximo, uma hora nos data centers da Meta.-   É possível definir um TTL personalizado, de uma hora a 30 dias, ao carregar mídias para substituir o prazo de validade de uma hora (isso é especialmente útil para campanhas de marketing que reutilizam a mesma mídia)

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/559308894_1116451836859295_8169970485040161301_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=SIXxEE3yo54Q7kNvwEL-Nv1&_nc_oc=AdmkQLLENYR_Rj0TKN9lB8QEGXPtj0fatz215HdvfblW6SK80V13ysq6aFjBqbeQSUw&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=WIztnPPIHBJWt6wfMbE5Qw&oh=00_AfnPLwihObkfrQnzdPUWxB4FcUiKq4AHImP8lOLcp7aD5w&oe=69613815)

## Habilitar a opção "Sem armazenamento"

A permissão de uso desse recurso para um número de telefone comercial deve ser concedida manualmente pela Meta. É preciso fornecer uma lista de números de telefone comerciais a serem ativados. **Trabalhe com seu Gerente de Parceiros para solicitar isso.**

### Sintaxe da solicitação (v21.0 ou posterior)

A ativação do recurso é feita antes do registro por meio do ponto de extremidade [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/settings](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#Updating).

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/settings' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "storage_configuration": {
    "status": "NO_STORAGE_ENABLED",
    "retention_minutes": 60
  }
}'
```

No momento, apenas o valor `60` é permitido para o parâmetro `retention_minutes`, pois essa é a única duração de retenção compatível.

### Sintaxe da solicitação (v20.0 ou anterior)

A ativação do recurso é feita na solicitação de registro [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/register](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api#Creating).

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/settings' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "123456",
  "tier": "test",
  "meta_store_retention_minutes": 60
}'
```

-   No momento, apenas o valor 60 é permitido para o parâmetro meta\_store\_retention\_minutes, pois essa é a única duração de retenção compatível.-   `meta_store_retention_minutes` não pode ser usado com `data_localization_region`.

## Desabilitar sem armazenamento

Para desabilitar o recurso, o número de telefone comercial precisa ser excluído usando o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/deregister](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-deregister-api#Creating) e depois registrado novamente sem o parâmetro `meta_store_retention_minutes`.

### Exemplo de sintaxe de cancelamento do registro

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/deregister' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

## Como substituir o TTL de mídia de saída

Para números de telefone comercial com a opção "Sem armazenamento" habilitada, o TTL padrão de 1 hora também se aplicará à [mídia carregada no número](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media). . Se quiser substituir o TTL padrão de uma hora, inclua o novo parâmetro `ttl_minutes` ao carregar mídias.

### Exemplo de sintaxe

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/media' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "file": "file=<FILE_NAME>;type=<FILE_MIME_TYPE>",
  "ttl_minutes": "120"
}'
```

-   O intervalo `ttl_minutes` é de uma hora (`60`) a 30 dias (`43200`).-   No momento, a API não retorna a data de validade da mídia na resposta.

## Webhooks de erro

### Falhas de confirmação de nova tentativa

No caso de falhas de descriptografia no lado do consumidor, as contas de Retenção Limitada não poderão honrar solicitações de novas tentativas se isso acontecer após o TTL de uma hora da mensagem.

Nesses casos, um webhook de [status de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) é disparado com o código de erro `131036`:

#### Exemplo de carga

```
{  "object": "whatsapp_business_account",  "entry": [{    "id": "102290129340398",    "changes": [{      "field": "messages",      "value": {        "messaging_product": "whatsapp",        "metadata": {          "display_phone_number": "15550783881",          "phone_number_id": "106540352242922"        },        "statuses": [{          "id": "wamid.HBgMNDQ3ODI1MDYzOTQxFQIAERgSN0MzMTg0Nzk2RkMwOEQ5NTQ2AA==",          "status": "failed",          "timestamp": "1712597457",          "recipient_id": "16505551234",          "errors": [{              "code": 131036,              "title": "Message failed to be delivered on at least one of the user's device",              "message": "Message failed to be delivered on at least one of the user's device",              "error_data": {                "details": "Message payload not found"              }            }]        }]      }    }]  }]}
```

Observações:

-   Esse erro só será enviado se não conseguirmos honrar uma confirmação de nova tentativa enviada pelo dispositivo principal. Se a nova tentativa falhar para um dispositivo secundário, nós o ignoraremos, já que a mensagem será entregue ao sincronizar com o dispositivo principal.-   É possível que a mensagem tenha sido entregue em dispositivos secundários, mas não no dispositivo principal. Nesse caso, o webhook será enviado.

### Falha na entrega de webhooks

Por padrão, a API de Nuvem tenta entregar webhooks (por exemplo, mensagem recebida) por até sete dias. Para contas de retenção limitada, se não conseguirmos entregar o webhook, descartaremos o conteúdo e o substituiremos por uma mensagem de erro informando que não foi possível entregar o webhook.

Nesses casos, um webhook de [mensagens de erro](/documentation/business-messaging/whatsapp/webhooks/reference/messages/errors) é disparado com o código de erro `131035`:

```
{  "object": "whatsapp_business_account",  "entry": [{    "id": "102290129340398",    "changes": [{      "field": "messages",      "value": {        "messaging_product": "whatsapp",        "metadata": {          "display_phone_number": "15550783881",          "phone_number_id": "106540352242922"        },        "errors": [{            "code": 131035,            "title": "Webhook could not be delivered within data retention limit",            "message": "Webhook could not be delivered within data retention limit",            "error_data": {              "details": "Webhook could not be delivered within data retention limit"            }          }]      }    }]  }]}
```

## Limites

Quando o recurso de armazenamento desabilitado está habilitado, o conteúdo das mensagens não é armazenado em repouso por 30 dias, como é o caso com a API de Nuvem. Isso traz as seguintes limitações:

-   **Falhas de descriptografia de mensagens**
    -   Caso uma mensagem falhe em descriptografar do lado do consumidor, a Cloud API só pode tentar enviar novamente a mensagem dentro de uma janela de TTL (tempo de validade) de uma hora.-   Após o período de uma hora, a API de Nuvem não poderá tentar entregar a mensagem novamente. Nesse caso, você receberá um webhook de erro indicando a falha.-   Consulte: [Falhas de confirmação de nova tentativa](#retry-receipt-failures)-   **Falhas na entrega de webhooks**
    -   Normalmente, a API de Nuvem tenta novamente enviar webhooks não entregues (como mensagens recebidas ou recibos) por até sete dias.-   Se essa opção não estiver habilitada, as novas tentativas de envio de webhooks serão limitadas a uma hora. Se o servidor de webhook ficar indisponível por mais tempo, o webhook (incluindo mensagens recebidas, recibos etc) será perdido permanentemente.-   Consulte: [Falha na entrega de webhooks](#failure-to-deliver-webhooks)-   **Mensagens de mídia recebidas**
    -   A mídia anexada às mensagens recebidas ficará disponível para baixar por até uma hora.-   Depois de uma hora, a mídia será excluída permanentemente e não poderá ser recuperada.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)