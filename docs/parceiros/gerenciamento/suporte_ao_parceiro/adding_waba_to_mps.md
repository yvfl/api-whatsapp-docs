<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/adding-waba-to-mps -->
<!-- Scraped: 2025-12-20T17:53:48.937Z -->

# Adicionar uma WABA a uma solução multiparceiros

Updated: 4 de nov de 2025

Caso seja um parceiro de soluções e faça parte de uma [solução multiparceiro](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) ativa, você poderá designar uma WABA como _qualificada_ para a solução (a "solução de destino"). Uma solicitação do Gerenciador de Negócios é enviada ao cliente corporativo detentor da WABA. O cliente pode então usar o Gerenciador de Negócios para aceitar e confirmar o pedido.

A confirmação associa a WABA à solução de destino, concedendo assim permissões (já definidas na solução de destino) aos Provedores de Tecnologia que fazem parte dela.

Caso seja o proprietário da WABA e esteja compartilhando-a com seu cliente (o modelo de propriedade [Em nome de](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#messaging-on-behalf-of)), você poderá [transferir a propriedade](#transferring-ownership-of-a-waba) para o cliente e, como parte do processo de transferência, designar a WABA como qualificada para a solução de destino, incluindo o ID da solução no corpo do post. O cliente poderá confirmar ou rejeitar a solicitação de acesso usando o Cadastro incorporado ou o Gerenciador de Negócios.

Se você não tiver certeza do modelo de propriedade da WABA, peça o campo `ownership_type` na identificação da WABA. Um valor de `ON_BEHALF_OF` indica que você é o proprietário da WABA, enquanto `CLIENT_OWNED` indica que o cliente corporativo é o proprietário da WABA.

## Requisitos

-   A WABA deve ter sido integrada por você.-   A WABA não pode fazer parte de uma solução ativa existente.-   A solução de destino deve estar com estado ativo.

## Etapa 1: designar a WABA como qualificada para a solução

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) para marcar o WABA do cliente comercial para migração. Isso gera uma [intenção de migração](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), que indica sua intenção de migrar o WABA.

### Solicitação

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/set_solution_migration_intent' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "solution_id": "<DESTINATION_MULTI-PARTNER_SOLUTION_ID>"
}'
```

### Resposta

Caso a solicitação seja bem-sucedida:

```
{
  "id": "<MIGRATION_INTENT_ID>"
}
```

Além disso, uma solicitação de confirmação será enviada ao cliente corporativo proprietário da WABA.

## Etapa 2: instruir o cliente a confirmar

Instrua seu cliente corporativo a usar o Meta Business Suite para aceitar e confirmar a solicitação de acesso do parceiro de soluções.

Você pode enviar ao cliente as seguintes instruções:

-   _Acesse [https://business.facebook.com/settings/requests/](https://business.facebook.com/settings/requests/) e entre na sua conta._-   _Se tiver vários portfólios empresariais, todos eles serão apresentados a você. Clique no portfólio que contém sua WABA._-   _Na aba Recebidos, localize a solicitação e conclua o fluxo._

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/462915752_507468075535116_983106198479012193_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=yvAlLYuEXkYQ7kNvwEGVaCG&_nc_oc=AdnwpeIOPImn5Sl-j-tsmEuxoMHo_PU-BRZNu63Qb7lQDpasAlQkxe71a7pxfnsh058&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=9av8QVewsVOJBmm1Rg-cPg&oh=00_AfnN_7PeJ23C-Xd_onu4KXCGWx0Itr4BmSAoXPmidpQxtQ&oe=69613AEA)

Se o cliente não concluir essa etapa em até 90 dias, a aceitação e a confirmação ocorrerão automaticamente.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)