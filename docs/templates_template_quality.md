<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality -->
<!-- Scraped: 2025-12-20T17:34:19.183Z -->

# Classificação de qualidade do modelo

Updated: 29 de out de 2025

Os modelos têm uma classificação de qualidade baseada no uso, no feedback dos clientes e no engajamento. Os modelos podem ter as seguintes classificações, conforme informado pela API:

-   `GREEN` – Indica alta qualidade. O modelo recebeu pouco ou nenhum feedback negativo dos usuários do WhatsApp. O modelo pode ser enviado.-   `YELLOW` – Indica qualidade média. O modelo recebeu feedback negativo de diversos usuários do WhatsApp ou apresenta baixa taxa de leitura e pode ser pausado ou desabilitado em breve. Os modelos de mensagem com esse status podem ser enviados.-   `RED` – Indica baixa qualidade. O modelo recebeu feedback negativo de vários usuários do WhatsApp ou apresenta baixa taxa de leitura. O modelo pode ser enviado, mas corre o risco de ser pausado ou desabilitado em breve. Recomendamos que você resolva os problemas que os usuários estão relatando.-   `UNKNOWN` – Indica que a pontuação de qualidade ainda está pendente, porque ainda não recebeu o feedback do usuário do WhatsApp ou os dados de taxa de leitura. O modelo pode ser enviado.

Os modelos recém-criados têm uma pontuação de qualidade inferior a `UNKNOWN`. Porém, a classificação mudará automaticamente conforme uso, feedback e sinal de engajamento são coletados ao longo do tempo.

As classificações de qualidade influenciam o [tempo de regularidade](/documentation/business-messaging/whatsapp/templates/template-pacing) e a [pausa do modelo](/documentation/business-messaging/whatsapp/templates/template-pausing), o que pode afetar a entrega. Se um modelo receber feedback negativo ou apresentar baixo índice de engajamento de forma contínua, isso pode causar uma mudança de status. Caso o status seja alterado para qualquer outra coisa que não `APPROVED`, o modelo não poderá ser enviado em mensagens de modelo, a menos que o status `APPROVED` seja restaurado.

## Obter a classificação de qualidade do modelo via API

Use o ponto de extremidade [GET /<TEMPLATE\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#Reading) e solicite o campo `quality_score` para obter a pontuação de qualidade de um modelo.

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/1105258428396250?fields=quality_score' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "quality_score": {    "score": "GREEN",    "date": 1758754645  },  "id": "1387372356726668"}
```

## Obter a classificação de qualidade do modelo por meio do Gerenciador do WhatsApp

O painel [Gerenciar modelos](https://business.facebook.com/latest/whatsapp_manager/message_templates) no Gerenciador do WhatsApp também exibe as classificações de qualidade para modelos aprovados:

-   Ativo – **Qualidade pendente** (equivalente a uma pontuação de qualidade `UNKNOWN`)-   Ativo – **Alta qualidade** (equivalente a uma pontuação de qualidade `GREEN`)-   Ativo – **Qualidade média** (equivalente a uma pontuação de qualidade `YELLOW`)-   Ativo – **Baixa qualidade** (equivalente a uma pontuação de qualidade `RED`)

## Veja também

-   [Sobre a classificação de qualidade do seu modelo de mensagem do WhatsApp Business](https://www.facebook.com/business/help/766346674749731)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)