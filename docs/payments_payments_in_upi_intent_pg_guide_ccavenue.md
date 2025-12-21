<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-ccavenue -->
<!-- Scraped: 2025-12-20T17:45:16.191Z -->

# Guia de integração do gateway de pagamento da CCAvenue

Updated: 14 de nov de 2025

Este documento apresenta a integração de pagamento com a CCAvenue, necessária para comerciantes ou provedores de soluções empresariais (BSP) que configuraram um chatbot usando as APIs do WhatsApp Business e precisam receber pagamentos de usuários do WhatsApp.

Além disso, abrange as APIs que precisam ser integradas e como a integração funciona em conjunto com a integração da API do WhatsApp Business. Embora não seja um guia abrangente, ele serve como uma visão geral para auxiliar na compreensão do processo de integração do gateway de pagamento. Todos os detalhes específicos ou únicos relacionados ao gateway de pagamento devem ser determinados pelo comerciante (ou BSP).

Em termos de integração com o produto WA P2M, este documento cobre as solicitações e respostas destacadas em vermelho no diagrama de fluxo.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/582933363_2600727520301874_3735890498928031759_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=8RznaaSstK4Q7kNvwGjBzTy&_nc_oc=AdlbnGoE-96VfFWfCg9YPDPncSsZGM4GIowGALIVWeQ8To20uA1d3aPu8Rp_5q0akTE&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=gkRMCKLbJI3P3yaDEzohIQ&oh=00_AflSnFifEyee4-JUn96LJOmFN4nohOaoO2OpTa2QLvsnlA&oe=696106F5)

## Integração da CCAvenue com os Pagamentos do WhatsApp

### Configuração

Para saber como fazer a autenticação com o servidor, consulte a documentação da CCAvenue.

Para simplificar a explicação, os exemplos a seguir abordarão apenas o corpo da carga final que será incluído no objeto final necessário para uma autenticação bem-sucedida com a API. É importante consultar a documentação da CCAvenue para ver orientações sobre como esse objeto final deve ser estruturado.

Para prosseguir, você precisa dos seguintes detalhes:

-   Autenticação bem-sucedida-   Detalhes da configuração de pagamento que você já definiu na conta do WhatsApp Business.
    -   Código de categoria do comerciante-   VPA do comerciante

### API de Iniciação de Pagamento

Exemplo de carga para `POST` a `https://secure.ccavenue.com/transaction.do`

#### Solicitação

```
curl -X POST -d 'card_name=UPI&order_id=67314339998877&currency=INR&payment_option=OPTUPI&card_type=UPI&merchant_id=2&amount=100.00&re direct_url=https://merchantredirecturl.com'
```

Nome

Descrição

Tipo

`merchant_id`

A identificação do comerciante é um identificador único gerado pela CCAvenue para cada comerciante ativado.

Numérico

`order_id`

Essa identificação é usada pelos comerciantes para identificar o pedido. Envie uma identificação única em cada solicitação.

Caracteres alfanuméricos (30) permitidos: alfabeto (A – Z e a – z), números, - (hífen), / (barra), \_(sublinhado)

`currency`

A moeda que você quer usar para processar a transação. INR: rupia indiana

“INR”

`amount`

Valor do pedido

Numérico (12, 2)

`redirect_url`

A CCAvenue postará o status do pedido juntamente com os parâmetros nesse URL. Se o valor não for enviado, o status do pedido será enviado de volta para o URL configurado no módulo de notificações de eventos dinâmicos na sua conta MARS. Se não houver um URL configurado na conta MARS, o PG exibirá o status do pedido na página de confirmação da CCAvenue.

Caracteres alfanuméricos (100) permitidos: alfabeto (A – Z e a – z), números, / (barra) e \_ (sublinhado).

`card_type`

O tipo de cartão usado pelo cliente.

UPI

"UPI"

`card_name`

Nome do cartão usado pelo cliente. Essa lista será fornecida pela CCAvenue.

UPI

"UPI"

#### Exemplo de resposta da CCAvenue

```
{
     "status":"0",
     "enc_response":"68b4c0ff090e439119f91d0ace1930973e5a2fc244b122e255170de2b412d486269678930fc2c175a64357a882854f62e5adb6d4476f629df3bb532cc5c82828258ed40b09181949c48e6b9365eabf9dc9e1acb5308f5d6776e2400e0c4ac4282afd81e3a66519b3734192062a49b51d956f93d9cebf4d49b9480ed6cbcdb5f87e50c7a3bd052dca39718738a49a5e22408a8656052fa506458ca1f904970fdf"
}
```

#### Exemplo de resposta descriptografada

```
{
     "errorCode":"",
     "errorMessage":"",
     "intentUrl":"upi://pay?pa=vpa@samplebank&pn=Infibeam Avenues Limited&tr=123123123123&am=100.0&cu=INR&mc=8299"
 }
```

#### Analisar a resposta

-   Use o valor de `tr` no valor de resposta marcado pela chave `intentUrl` e passe-o como o `reference_id` ao configurar o objeto `parameters` para enviar na mensagem de detalhes do pedido usando a API do WhatsApp.-   Verifique se os valores na chave `intentUrl` recebida na resposta correspondem à configuração de pagamento criada no Gerenciador do WhatsApp:
    -   O valor de `pa` é o VPA do comerciante. Esse valor deve corresponder à identificação da UPI no `payment_configuration` enviado no objeto "parâmetros".-   O valor de `mc` deve corresponder ao código MCC inserido na configuração de pagamento.

### Webhook de status

Quando um evento ocorre, como o processamento bem-sucedido de um pagamento na sua conta da CCAvenue, a CCAvenue gera um objeto de evento. Esse objeto contém detalhes essenciais, incluindo o tipo de evento e os dados associados. A CCAvenue envia esse objeto de evento para um URL designado nas configurações de webhook da sua conta por meio de uma solicitação HTTP POST.

### Status do pagamento

Use a notificação de webhook acima para encontrar o status do pagamento com a **API de Status do Pagamento**.

#### Solicitação

Exemplo de carga para `POST` a `https://api.ccavenue.com/apis/servlet/DoWebTrans`

```
{
  "orderNo": "11111111",
  "referenceNo": "111111111111"
}
```

#### Analisar a resposta

Use o `order_status` recuperado da resposta acima e transmita a [mensagem de status](/docs/whatsapp/cloud-api/payments-api/upi#step-7--update-order-status) correspondente via API do WhatsApp.

## Processo de integração do WhatsApp com a Billdesk

-   Quando o parceiro inicia uma solicitação para a Billdesk, um formulário de solicitação é enviado para coletar valores como: IPs de parceiros para a lista de permissão, URLs de retorno de ligação de parceiros e conta do comerciante para acionar a configuração de um ambiente UAT.-   Depois que o formulário de solicitação for compartilhado, a Billdesk compartilhará as credenciais de UAT e os documentos da API para que os parceiros possam criar a solução no UAT. Esse processo leva de quatro a cinco dias.-   Os parceiros podem testar as integrações usando uma [ferramenta da web](https://l.facebook.com/l.php?u=https%3A%2F%2Fpguatweb.billdesk.io%2Fpgtxnsimulator%2Fbanksimulator%2Fupi%2F[tr-value%3E]&h=AT3cGl1PlGOqj5UfcGG0DMfKid64KR2Xg7ujscxtbR0vAinIX0kZaMZAzEWGqMOYe4m3fBOHgXyN5-LvWqad4hVedq7K5JNMrjr9d7sGJxXsiLDT-6x5sJkPpgJ6NBPh-Dd1psCjaNehO3lqwE1HCdFgJ9E). Para isso, substitua `[tr-value]` no URL pelo valor `tr` da resposta "createTransactions", e você poderá simular uma resposta bem-sucedida.-   Os parceiros devem solicitar um post de aprovação de UAT, o que normalmente demora de um a dois dias, durante o qual a Billdesk E2E testa a solução ou solicita capturas de tela se o teste E2E não for possível. Para o WhatsApp, a Billdesk verifica se a bandeja de apps abre e redireciona para os apps corretos.-   Após o recebimento da aprovação, um ambiente de produção é criado em cerca de uma semana. Em seguida, as credenciais para produção são compartilhadas.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)