<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-migration -->
<!-- Scraped: 2025-12-20T17:33:38.614Z -->

# Migração de modelo

Updated: 14 de nov de 2025

Este documento descreve como migrar modelos de uma conta do WhatsApp Business para outra. Esse processo não move os modelos, mas os recria na WABA de destino.

## Limitações

-   Os modelos só podem ser migrados entre WABAs que pertencem à mesma empresa da Meta.-   Apenas os modelos com status de `APPROVED` e `quality_score` de `GREEN` ou `UNKNOWN` são qualificados para migração.

## Sintaxe da solicitação

Use o ponto de extremidade [Conta do WhatsApp Business > Migrar modelos de mensagem](/docs/graph-api/reference/whats-app-business-account/migrate_message_templates) para migrar modelos de uma WABA para outra.

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<DESTINATION_WABA_ID>/migrate_message_templates" \
-H "Authorization: Bearer <ACCESS_TOKEN>" \
-H "Content-Type: application/json" \
-d '
{
  "source_waba_id": "<SOURCE_WABA_ID>",
  "page_number": <PAGE_NUMBER>,
  "count": <COUNT><!-- only if migrating specific templates that failed to migrate -->
  "template_ids": [<TEMPLATE_IDS>]
}'
```

### Parâmetros

Espaço reservado

Descrição

Valor de exemplo

`<ACCESS_TOKEN>`

_String_

**Obrigatório.**

[Token do sistema](/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) ou [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).

`EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD`

`<API_VERSION>`

_String_

**Opcional.**

Versão da Graph API.

v24.0

`<COUNT>`

_Número inteiro_

**Opcional.**

Substitui o tamanho de lote padrão por uma contagem máxima de 500.

Se a solicitação demorar mais de 30 segundos para ser executada e expirar, reduza o número de contagem.

`200`

`<DESTINATION_WABA_ID>`

_Identificação da conta do WhatsApp Business_

**Obrigatório.**

Identificação da conta do WhatsApp Business de destino.

`104996122399160`

`<PAGE_NUMBER>`

_Número inteiro_

**Opcional.**

Indica a quantidade de modelos que serão migrados em conjuntos de 500, com indexação a partir de zero. Por exemplo, para migrar 1.000 modelos, envie, em paralelo, uma solicitação com o valor definido como `0` e outra com o valor definido como `1`.

`0`

`<TEMPLATE_IDS>`

_Matriz de strings_

**Opcional.**

Use apenas para migrar identificações de modelo específicas com uma matriz de tamanho máximo 500. Por exemplo, para migrar identificações de modelo com falha, adicione identificação específica da matriz.

`["35002248699842","351234565148","54382248699842"]`

`<SOURCE_WABA_ID>`

_Identificação da conta do WhatsApp Business_

**Obrigatório.**

Identificação da conta do WhatsApp Business de origem.

`102290129340398`

## Resposta

```
{
  "migrated_templates": [<MIGRATED_TEMPLATES>],
  "failed_templates": [<FAILED_TEMPLATES>]
}
```

### Propriedades de resposta

Espaço reservado

Descrição

Valor de exemplo

`<MIGRATED_TEMPLATES>`

_Lista_

A lista de IDs dos modelos que foram duplicados na conta do WhatsApp Business de destino.

`"1473688840035974","6162904357082268","6147830171896170"`

`<FAILED_TEMPLATES>`

_Mapa_

O mapa identificando modelos que não foram duplicados na conta do WhatsApp Business de destino.

  
As chaves são os IDs dos modelos, e os valores são os motivos de falha.

`"1019496902803242":"Incorrect category",``"259672276895259":"Formatting error - dangling parameter",``"572279198452421":"Incorrect category"`

## Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/104996122399160/migrate_message_templates?source_waba_id=102290129340398&page_number=0' \
-H 'Authorization: Bearer EAAJB...'
```

## Exemplo de resposta

```
{  "migrated_templates": [    "1473688840035974",    "6162904357082268",    "6147830171896170"  ],  "failed_templates": {    "1019496902803242": "Incorrect category",    "259672276895259": "Formatting error - dangling parameter",    "572279198452421": "Incorrect category"  }}
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)