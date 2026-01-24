<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names -->
<!-- Scraped: 2026-01-24T00:31:18.155Z -->

# Nomes de exibição

Updated: 12 de dez de 2025

É preciso fornecer um nome de exibição ao [registrar](/documentation/business-messaging/whatsapp/business-phone-numbers/registration) um número de telefone comercial. O nome de exibição aparece no perfil do WhatsApp do seu número de telefone comercial:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/507127951_698062976515521_2852142619234157074_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=UBd6oRC6VJoQ7kNvwFf1_I-&_nc_oc=AdlpZ_h0E5ubUcOFuJDUk1h-g_UFYc2PhcKdeks8M0Bwpg16I1kZK8J86pVvchCIAFk&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=wUJqMrC9YoLOU6B8iqyZlA&oh=00_Afrz43N6wsavQJ8Z4X7O49zpNsvjGkvfGiU_3WhbN-CkyA&oe=698E4CE9)

Esse nome também poderá aparecer no topo de **conversas individuais** e da **lista de conversas** se o número de telefone comercial for aprovado por meio da [verificação de nome de exibição](#display-name-verification). Observe que, se um usuário editar seu nome de perfil no cliente do WhatsApp, o nome definido por ele será exibido em vez do seu.

## Diretrizes para nomes de exibição

Consulte nosso artigo da Central de Ajuda [Diretrizes para nomes de exibição na Plataforma do WhatsApp Business](https://www.facebook.com/business/help/757569725593362) para saber mais sobre a nomenclatura.

## Verificação do nome de exibição

Quando você atinge um [limite de mensagens superior](/documentation/business-messaging/whatsapp/messaging-limits), o nome de exibição do seu número de telefone comercial será automaticamente submetido à verificação com base nas nossas [diretrizes para nomes de exibição](https://www.facebook.com/business/help/757569725593362). Ao final do processo, um webhook [phone\_number\_name\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_name_update) e uma notificação do Meta Business Suite serão disparados.

Caso seu nome de exibição seja aprovado, o webhook terá `decision` definido como `APPROVED`, e o campo `name_status` no seu número de telefone comercial será definido como `APPROVED`.

Se o nome for rejeitado, o webhook terá `decision` definido como `REJECTED`, e o campo `name_status` no seu número de telefone comercial será definido como `DECLINED`. Em caso de rejeição, recomendamos que você leia novamente nossas [diretrizes](https://www.facebook.com/business/help/757569725593362) e [edite o nome de exibição](https://www.facebook.com/business/help/378834799515077) se necessário ou faça uma apelação via [Suporte ao desenvolvedor](/documentation/business-messaging/whatsapp/support#developer-support) ou [Suporte para desenvolvedores empresariais](/documentation/business-messaging/whatsapp/support#enterprise-developer-support).

## Como ver o nome de exibição no Gerenciador do WhatsApp

O nome de exibição do seu número de telefone comercial é exibido na coluna **Nome** no painel [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/) > **Ferramentas da conta** > **Números de telefone**.

## Como receber o nome de exibição e o status do nome via API

Solicite os campos `verified_name` e `name_status` na identificação do seu número de telefone comercial do WhatsApp para receber o nome de exibição e o status dele. Para conferir uma lista de valores retornáveis ​​e os respectivos significados, consulte a referência [GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading).

O valor `verified_name` não indica se o nome de exibição foi aprovado ou não; ele apenas representa a string do nome de exibição que será submetida à verificação quando estiver qualificada. O campo `name_status` indica o status de aprovação.

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922?fields=verified_name%2Cname_status' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

Caso o pedido seja bem-sucedido:

```
{  "verified_name": "Lucky Shrub",  "name_status": "APPROVED",  "id": "106540352242922"}
```

## Como atualizar o nome de exibição via Gerenciador do WhatsApp

Para atualizar seu nome de exibição via Gerenciador do WhatsApp:

-   Acesse [Gerenciador do WhatsApp](https://business.facebook.com/latest/whatsapp_manager/) > **Ferramentas da conta** > **Números de telefone**.-   Selecione o número de telefone da empresa.-   Clique na aba **Perfil**.-   Na seção **Nome de exibição**, clique no botão **Editar** e complete o fluxo.

Após concluir o fluxo, seu nome de exibição passará pelo [processo de verificação](#display-name-verification) novamente.

Essas informações também estão disponíveis no artigo da Central de Ajuda [Como alterar o nome de exibição no WhatsApp Business](https://www.facebook.com/business/help/378834799515077).

## Como atualizar o nome de exibição via API

Use o campo `new_display_name` do ponto de extremidade <WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>POST /[](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Updating) para atualizar seu nome de exibição via API.

### Exemplo de solicitação

```
curl -X POST 'https://graph.facebook.com/v24.0/106540352242922?new_display_name=Lucky%20Shrub' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

Caso o pedido seja bem-sucedido:

```
{  "success": true}
```

Em caso de sucesso, seu nome de exibição passará pelo [processo de verificação](#display-name-verification). Se você quiser conferir o status da verificação, solicite os campos `new_display_name` e `new_name_status` na identificação do seu número de telefone comercial:

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v23.0/106540352242922?fields=new_display_name,new_name_status' \-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

Caso o pedido seja bem-sucedido:

```
{  "new_display_name": "New Lucky Shrub",  "new_name_status": "PENDING_REVIEW",  "id": "106540352242922"}
```

Se o novo nome de exibição for aprovado, os campos `verified_name` e `name_status` do número de telefone comercial serão atualizados para refletir esse nome e o respectivo status. Além disso, os webhooks **phone\_number\_name\_update** serão disparados.

## Saiba mais

Os artigos a seguir da Central de Ajuda fornecem mais informações sobre nomes de exibição.

-   [Sobre o nome de exibição do WhatsApp Business](https://www.facebook.com/business/help/338047025165344)-   [Como alterar o nome de exibição no WhatsApp Business](https://www.facebook.com/business/help/378834799515077)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)