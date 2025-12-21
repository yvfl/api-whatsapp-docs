<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/time-to-live -->
<!-- Scraped: 2025-12-20T17:34:39.157Z -->

# Tempo de vida

Updated: 31 de out de 2025

Se não conseguirmos entregar uma mensagem a um usuário do WhatsApp, faremos novas tentativas de entrega por um período conhecido como tempo de vida ("TTL", pelas iniciais em inglês) ou período de validade da mensagem.

É possível personalizar o TTL padrão para modelos de autenticação e utilidade enviados por meio da API de Nuvem, bem como para modelos de marketing enviados via API de Mensagens de Marketing Lite ("MM Lite API").

Recomendamos definir um TTL para todos os modelos de autenticação, de preferência igual ou inferior ao tempo de expiração do código, para que os clientes só recebam uma mensagem enquanto ainda for possível usar o código.

## Tabela de padrões, valores mín./máx. e compatibilidade

 

Autenticação

Utilidade

Marketing

**TTL padrão**

10 minutos

30 dias para modelos de autenticação criados antes de 23 de outubro de 2024

30 dias

30 dias

**Compatibilidade**

API de Nuvem + API Local

Somente API de Nuvem

API de Mensagens de Marketing (MM) Lite

**Intervalo personalizável**

De 30 segundos a 15 minutos

De 30 segundos a 12 horas

De 12 horas a 30 dias

## Personalizar o TTL

Para definir um TTL personalizado em um modelo de autenticação, utilidade ou marketing, inclua e defina o valor da propriedade `message_send_ttl_seconds` na chamada a `POST /<PHONE_NUMBER_ID>/message_templates`.

É possível alterar o TTL em um modelo configurado anteriormente por meio desse método.

O TTL pode ser personalizado em incrementos de 1 segundo.

### Valores válidos para a propriedade `message_send_ttl_seconds`

-   Modelos de autenticação: `30` a `900` segundos (30 s a 15 min)-   Modelos de utilidade: `30` a `43200` segundos (30 s a 12 horas)-   Modelos de marketing: `43200` a `2592000` (12 horas a 30 dias)

Para modelos de autenticação e utilidade, você pode definir o valor da propriedade `message_send_ttl_seconds` como `-1`. Isso definirá um TTL personalizado de 30 dias.

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v21.0/102290129340398/message_templates' \      -H 'Authorization: Bearer EAAJB...' \      -H 'Content-Type: application/json' \      -d '      {        "name": "test_template",        "language": "en_US",        "category": "MARKETING",        // Configure your TTL in seconds below        "message_send_ttl_seconds": "120",        "components": [          {            "type": "BODY",            "text": "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",            "example": {              "body_text": [                [                  "the end of August","25OFF","25%"                ]              ]            }          },          {            "type": "FOOTER",            "text": "Use the buttons below to manage your marketing subscriptions"          },        ]      }'
```

### Exemplo de resposta

```
{  "id": "572279198452421",  "status": "PENDING",  "category": "MARKETING"}
```

### Quando o TTL é excedido: mensagens descartadas

As mensagens que não puderem ser entregues dentro do TTL padrão ou personalizado serão descartadas.

Se você não receber um [webhook de mensagem entregue](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) antes da expiração do tempo de vida, presuma que a mensagem foi descartada.

Se você enviar uma mensagem e [houver uma falha na entrega](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status), poderá ocorrer um atraso no recebimento do webhook. Por isso, é recomendável incorporar um buffer antes de presumir o descarte.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)