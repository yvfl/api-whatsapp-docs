<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree -->
<!-- Scraped: 2025-12-20T17:44:59.590Z -->

# Guia de integração do gateway de pagamento da Cashfree

Updated: 31 de out de 2025

## Propósito

Este documento apresenta a integração de pagamento com a Cashfree, necessária para comerciantes ou parceiros de soluções que configuraram um chatbot usando as APIs do WhatsApp Business e precisam receber pagamentos de usuários do WhatsApp.

Além disso, abrange o conjunto de APIs que precisam ser integradas e como a integração funciona em conjunto com a integração da API do WhatsApp Business. Para saber mais sobre a integração de pagamento da Cashfree, consulte a documentação da Cashfree.

Onde isso se encaixa em todo o fluxo em termos de integração com o produto WA P2M: o documento a seguir cobre as solicitações e respostas em vermelho no diagrama do fluxo abaixo. ![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/569169662_1344528437405807_2132705829768077708_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=LxZvaBSjAD4Q7kNvwGYJcUn&_nc_oc=AdlQqX2V72OWxfbwyK-3pxbMuybZoEqy2VmHPO7vOutPyX9wYqc-EShgEhKWB94aTgk&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=lAelSM4jWWnMuXk_nuKG3w&oh=00_AflD2G7BM0FEZu2bLsuD8XO5zRX5M6xAD3BAK248mI6K1A&oe=69612DE2)

## Integração de pagamento da Cashfree

### Configuração

-   Obtenha as credenciais (segredo e identificação do cliente) no painel da Cashfree depois de configurar a conta.-   Obtenha o VPA, o MCC e o código de finalidade do comerciante junto à Cashfree. Isso será usado para definir a [configuração de pagamento](/docs/whatsapp/on-premises/payments-api/upi#before-you-start) no WhatsApp. É compatível com diversos VPAs, portanto, é possível configurar várias opções de pagamento. Cada configuração de pagamento deve ter um VPA.
    
    ### Criar pedido
    
    Isso cria o pedido na Cashfree.
    

[Consulte a documentação](https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.cashfree.com%2Freference%2Fcreateorder&h=AT01qL6yMJkDMu7tRseghgBE6BXYveTAAQzeZqcoFHvs5-kg6IDqCcvr6zGQUAGb3IBTdYwaEg_cAOfWb4HR_uLQGhhwhqYyoi1Omqa-tXKjC-eCk2_oDLUX45wbabZchBKrNveXqCu0NDTv0NL-ozckmjM)

#### Solicitação

```
curl --request POST \     --url https://sandbox.cashfree.com/pg/orders \ // Production URL : https://api.cashfree.com/pg/orders     --header 'accept: application/json' \     --header 'content-type: application/json' \     --header 'x-api-version: 2022-09-01' \     --header 'x-client-id: 26268833355ef02b8ff299390c886262' \     --header 'x-client-secret: 1708cc38a3c1c3c2512d79b3530dc5cc65ad2fde' \     --data '    {     "customer_details": {          "customer_id": "7112AAA812234",          "customer_email": "john@cashfree.com",          "customer_phone": "9908734801",          "customer_bank_account_number": "1518121112",          "customer_bank_ifsc": "CITI0000001",          "customer_bank_code": 3333     },     "order_meta": {          "notify_url": "https://b8af79f41056.eu.ngrok.io/webhook.php", // Notification URL where status notifications sent - can be different for different merchants          "payment_methods": "upi"     },      "order_tags": {          "channel": "WhatsApp" // Custom tag     },     "order_id": "order02",     "order_amount": 200.5,     "order_currency": "INR",     "order_expiry_time": "2022-12-29T00:00:00Z",     "order_note": "Test order"    }
```

#### Resposta

```
{  "cf_order_id": 3401407,  "created_at": "2022-12-26T14:11:07+05:30",  "customer_details": {    "customer_id": "7112AAA812234",    "customer_name": null,    "customer_email": "john@cashfree.com",    "customer_phone": "9908734801"  },  "entity": "order",  "order_amount": 200.5,  "order_currency": "INR",  "order_expiry_time": "2022-12-29T05:30:00+05:30",  "order_id": "order02",  "order_meta": {    "return_url": null,    "notify_url": "https://b8af79f41056.eu.ngrok.io/webhook.php",    "payment_methods": "upi"  },  "order_note": "Test order",  "order_splits": [],  "order_status": "ACTIVE",  "order_tags": {    "channel": "WhatsApp" // Custom tag  },  "payment_session_id": "session_364o8HjN0-gc6n_n4EBEPOXriJUJvCeVIdy9u8ihOhwvpNg9F1wMorWmkVxUR90kTe473bpbotNxyZ6Fze8M0w42_BpTxoEWsbBR21y7i0nh",  "payments": {    "url": "https://sandbox.cashfree.com/pg/orders/order02/payments" // production URL’s are different  },  "refunds": {    "url": "https://sandbox.cashfree.com/pg/orders/order02/refunds"  },  "settlements": {    "url": "https://sandbox.cashfree.com/pg/orders/order02/settlements"  },  "terminal_data": null}
```

### Pagamento do pedido

Essa API retorna a URL de intenção da UPI que contém os parâmetros necessários para as APIs do WhatsApp. [Consulte a documentação](https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.cashfree.com%2Freference%2Forderpay&h=AT01qL6yMJkDMu7tRseghgBE6BXYveTAAQzeZqcoFHvs5-kg6IDqCcvr6zGQUAGb3IBTdYwaEg_cAOfWb4HR_uLQGhhwhqYyoi1Omqa-tXKjC-eCk2_oDLUX45wbabZchBKrNveXqCu0NDTv0NL-ozckmjM)

#### Solicitação

```
curl --request POST \     --url https://sandbox.cashfree.com/pg/orders/sessions \     --header 'accept: application/json' \     --header 'content-type: application/json' \     --header 'x-api-version: 2022-09-01' \     --data '    {     "payment_method": {          "upi": {               "channel": "link",               "upi_id": "rajnandan1@okhdfcbak",               "upi_expiry_minutes": 10          }     },     "payment_session_id": "session_364o8HjN0-gc6n_n4EBEPOXriJUJvCeVIdy9u8ihOhwvpNg9F1wMorWmkVxUR90kTe473bpbotNxyZ6Fze8M0w42_BpTxoEWsbBR21y7i0nh" // this is from the create order API response    }
```

#### Resposta

```
{  "action": "custom",  "cf_payment_id": 885899755, // is the transaction ID, is also present in UPI url  "channel": "link",  "data": {    "url": null,    "payload": {      "bhim": "https://payments-test.cashfree.com/pgbillpayuiapi/simulator/885899755?txnId=885899755&amount=200.50&pa=cashfree@testbank&pn=Cashfree&tr=885899755&am=200.50&cu=INR&mode=00&purpose=00&mc=5732&tn=Cashfree%20Simulator%20Payment",      "default": "https://payments-test.cashfree.com/pgbillpayuiapi/simulator/885899755?txnId=885899755&amount=200.50&pa=cashfree@testbank&pn=Cashfree&tr=885899755&am=200.50&cu=INR&mode=00&purpose=00&mc=5732&tn=Cashfree%20Simulator%20Payment",      "gpay": "https://payments-test.cashfree.com/pgbillpayuiapi/simulator/885899755?txnId=885899755&amount=200.50&pa=cashfree@testbank&pn=Cashfree&tr=885899755&am=200.50&cu=INR&mode=00&purpose=00&mc=5732&tn=Cashfree%20Simulator%20Payment",      "paytm": "https://payments-test.cashfree.com/pgbillpayuiapi/simulator/885899755?txnId=885899755&amount=200.50&pa=cashfree@testbank&pn=Cashfree&tr=885899755&am=200.50&cu=INR&mode=00&purpose=00&mc=5732&tn=Cashfree%20Simulator%20Payment",      "phonepe": "https://payments-test.cashfree.com/pgbillpayuiapi/simulator/885899755?txnId=885899755&amount=200.50&pa=cashfree@testbank&pn=Cashfree&tr=885899755&am=200.50&cu=INR&mode=00&purpose=00&mc=5732&tn=Cashfree%20Simulator%20Payment",      "web": "https://sandbox.cashfree.com/pg/view/upi/qcrgfb.session_364o8HjN0-gc6n_n4EBEPOXriJUJvCeVIdy9u8ihOhwvpNg9F1wMorWmkVxUR90kTe473bpbotNxyZ6Fze8M0w42_BpTxoEWsbBR21y7i0nh.c252cd27-c877-4a51-8352-837d04a2f4c2"    },    "content_type": null,    "method": null  },  "payment_amount": 200.5,  "payment_method": "upi"}
```

### Como analisar a resposta

Armazene o cf\_payment\_id como um identificador único do pagamento na Cashfree. Como a Cashfree é compatível com vários pagamentos para determinado order\_id (ou cf\_order\_id), armazenar o cf\_payment\_id é importante para desduplicar vários/duplicar pagamentos (se ocorrerem devido a um bug ou outra razão).

Extrair os pares de chave-valor em data.payload.default

-   Verifique se "am" é igual ao valor que foi definido.-   Use o valor em "tr" como reference\_id ao configurar o [objeto Parameters](/docs/whatsapp/on-premises/payments-api/upi#paramobject) para enviar a mensagem de pagamento por meio da API do WhatsApp.-   O valor de "pa" é o VPA do comerciante que será usado para a transação. O nome da configuração de pagamento que corresponde ao vpa devolvido deve ser usado como payment\_configuration ao configurar o [objeto Parameters](/docs/whatsapp/on-premises/payments-api/upi#paramobject) para enviar a mensagem de pagamento usando a API do WhatsApp.-   Caso o VPA do comerciante obtido acima não corresponda a nenhum dos VPAs definidos na configuração de pagamento do WhatsApp, o pagamento deve ser descontinuado. Entre em contato com a Cashfree para confirmar o VPA atualizado e atualize a [configuração de pagamento do WhatsApp](/docs/whatsapp/on-premises/payments-api/upi#before-you-start) conforme apropriado.-   Verifique também se os valores "mode" e "purpose" são os mesmos que os definidos na configuração de pagamento. Em caso de erro de correspondência, registre isso para entrar em contato com a Cashfree e ter acesso aos valores corretos/atualizados. Não bloqueie o pagamento devido a esse erro de correspondência.

```
"default": "upi://pay?pa=cfsukoonaa@yesbank&pn=Sukoon&tr=877376394&am=10.00&cu=INR&mode=00&purpose=00&mc=5399&tn=877376394"
```

## Webhook

Depois que o usuário concluir o pagamento no WhatsApp, a Cashfree enviará um webhook com informações sobre a conclusão. Observe que, embora o WhatsApp também compartilhe um sinal de conclusão de pagamento, use o sinal da Cashfree para o status de pagamento final a fim de evitar problemas de reconciliação.

Com base no payment\_status do webhook, [atualize o status do pedido para o usuário usando a API do WhatsApp](/docs/whatsapp/on-premises/payments-api/upi#step-8--update-order-status).

[Guia de referência](https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.cashfree.com%2Fdocs%2Fpayment-webhooks&h=AT01qL6yMJkDMu7tRseghgBE6BXYveTAAQzeZqcoFHvs5-kg6IDqCcvr6zGQUAGb3IBTdYwaEg_cAOfWb4HR_uLQGhhwhqYyoi1Omqa-tXKjC-eCk2_oDLUX45wbabZchBKrNveXqCu0NDTv0NL-ozckmjM)

### Webhook de transação bem-sucedida

```
{  "data": {    "order": {      "order_id": "1633615918",      "order_amount": 1.00,      "order_currency": "INR",      "order_tags": null    },    "payment": {      "cf_payment_id": 1107253,      "payment_status": "SUCCESS",      "payment_amount": 1.00,      "payment_currency": "INR",      "payment_message": "Transaction pending",      "payment_time": "2021-10-07T19:42:40+05:30",      "bank_reference": "1903772466",      "auth_id": null,      "payment_method": {        "upi": {          "channel":null,          "upi_id":"miglaniyogesh7@okhdfcbank" }                },       "payment_group":"upi"    "customer_details": {      "customer_name": "Yogesh",      "customer_id": "12121212",      "customer_email": "yogesh.miglani@gmail.com",      "customer_phone": "9666699999"    }  },  "event_time": "2021-10-07T19:42:44+05:30",  "type": "PAYMENT_SUCCESS_WEBHOOK"}
```

### Webhook de falha na transação

```
{  "data": {    "order": {      "order_id": "order_01",      "order_amount": 2,      "order_currency": "INR",      "order_tags": null    },    "payment": {      "cf_payment_id": 975677709,      "payment_status": "FAILED",      "payment_amount": 2,      "payment_currency": "INR",      "payment_message": "ZA::U19::Transaction fail",      "payment_time": "2022-05-25T14:28:22+05:30",      "bank_reference": "214568722700",      "auth_id": null,      "payment_method": {        "upi": {          "channel": null,          "upi_id": "9611199227@paytm"        }      },      "payment_group": "upi"    },    "customer_details": {      "customer_name": null,      "customer_id": "7112AAA812234",      "customer_email": "miglaniyogesh7@gmail.com",      "customer_phone": "9611199227"    },    "error_details": {      "error_code": "TRANSACTION_DECLINED",      "error_description": "issuer bank or payment service provider declined the transaction",      "error_reason": "auth_declined",      "error_source": "customer"    }  },  "event_time": "2022-05-25T14:28:38+05:30",  "type": "PAYMENT_FAILED_WEBHOOK"}
```

## Verificação de status

A API de status pode ser usada como alternativa caso o webhook não seja recebido em determinado intervalo de tempo. Com base no payment\_status da resposta, [atualize o status do pedido para o usuário usando a API do WhatsApp](/docs/whatsapp/on-premises/payments-api/upi#step-8--update-order-status).

[Documento de referência](https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.cashfree.com%2Freference%2Fgetpaymentbyid&h=AT01qL6yMJkDMu7tRseghgBE6BXYveTAAQzeZqcoFHvs5-kg6IDqCcvr6zGQUAGb3IBTdYwaEg_cAOfWb4HR_uLQGhhwhqYyoi1Omqa-tXKjC-eCk2_oDLUX45wbabZchBKrNveXqCu0NDTv0NL-ozckmjM)

#### Solicitação

```
curl --request GET \     --url https://sandbox.cashfree.com/pg/orders/order02/payments/885899755 \     --header 'accept: application/json' \     --header 'x-api-version: 2022-09-01' \     --header 'x-client-id: 26268833355ef02b8ff299390c886262' \     --header 'x-client-secret: 1708cc38a3c1c3c2512d79b3530dc5cc65ad2fde'
```

#### Resposta

```
{  "auth_id": null,  "authorization": null,  "bank_reference": null,  "cf_payment_id": 885704957,  "entity": "payment",  "error_details": null,  "is_captured": true,  "order_amount": 10.15,  "order_id": "12345",  "payment_amount": 10.15,  "payment_completion_time": "2022-10-27T08:43:05+05:30",  "payment_currency": "INR",  "payment_group": "upi",  "payment_message": "Transaction Successful",  "payment_method": {    "upi": {      "channel": "link"    }  },  "payment_status": "SUCCESS",  "payment_time": "2022-10-27T08:42:07+05:30"}OR{  "auth_id": null,  "authorization": null,  "bank_reference": null,  "cf_payment_id": 885899755,  "entity": "payment",  "error_details": null,  "is_captured": false,  "order_amount": 200.5,  "order_id": "order02",  "payment_amount": 200.5,  "payment_completion_time": "2022-12-26T14:24:56+05:30",  "payment_currency": "INR",  "payment_gateway_details": null,  "payment_group": "upi",  "payment_message": "User dropped and did not complete the two factor authentication",  "payment_method": {    "upi": {      "channel": "link",      "upi_id": "987836150"    }  },  "payment_status": "USER_DROPPED",  "payment_time": "2022-12-26T14:14:56+05:30"}
```

## Reembolso

A API de Reembolso pode ser usada para acionar reembolsos para o usuário.

[Documento de referência](https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.cashfree.com%2Freference%2Fcreaterefund&h=AT01qL6yMJkDMu7tRseghgBE6BXYveTAAQzeZqcoFHvs5-kg6IDqCcvr6zGQUAGb3IBTdYwaEg_cAOfWb4HR_uLQGhhwhqYyoi1Omqa-tXKjC-eCk2_oDLUX45wbabZchBKrNveXqCu0NDTv0NL-ozckmjM)

#### Solicitação

```
curl --request POST \     --url https://sandbox.cashfree.com/pg/orders/12345/refunds \     --header 'accept: application/json' \     --header 'content-type: application/json' \     --header 'x-api-version: 2022-01-01' \     --header 'x-client-id: xxxxxx' \     --header 'x-client-secret: xxxxxx' \     --data '    {     "refund_amount": 5,     "refund_id": "refund12345"    }
```

#### Resposta

```
{  "cf_payment_id": 885704957,  "cf_refund_id": "refund_49234",  "created_at": "2022-10-27T14:35:22+05:30",  "entity": "refund",  "metadata": null,  "order_id": "12345",  "processed_at": null,  "refund_amount": 5,  "refund_arn": null,  "refund_charge": 0,  "refund_currency": "INR",  "refund_id": "refund12345",  "refund_mode": "STANDARD",  "refund_note": null,  "refund_splits": [],  "refund_status": "PENDING",  "refund_type": "MERCHANT_INITIATED",  "status_description": "In Progress"}
```

## Como lidar com casos especiais

### Expiração do pedido

-   A Cashfree permite definir o tempo de validade de um pedido na API de Criação de Pedido. Use isso para definir o tempo de expiração preferido.-   Após a expiração do pedido, se nenhum webhook for recebido, faça uma verificação de status para confirmar que o pedido expirou e depois [cancele o pedido no WhatsApp para atualizar o usuário](/docs/whatsapp/on-premises/payments-api/upi#step-8--update-order-status).

### Como lidar com falhas no pagamento

-   A mensagem de pagamento enviada ao usuário via WhatsApp permite várias tentativas em caso de falha (ou seja, o botão Pagar fica disponível até que o pagamento seja bem-sucedido). No entanto, a Cashfree exige que a identificação de referência (campo "tr" no URL recebido na resposta de pagamento do pedido) seja único para cada pagamento.-   Então, quando uma resposta de falha de pagamento for recebida da Cashfree, [atualize o status do pedido no WhatsApp para cancelado](/docs/whatsapp/on-premises/payments-api/upi#step-8--update-order-status). Poste um aviso para informar que é possível enviar outra mensagem de pagamento para que o usuário tente fazer o pagamento novamente.-   Caso haja um atraso no cancelamento e o usuário consiga fazer o pagamento com sucesso, a Cashfree não enviará um webhook para o comerciante, mas fará um reembolso automático, sem nenhuma ação adicional necessária por parte do comerciante. Caso o cliente pergunte sobre esse tipo de situação (em que a transação foi bem-sucedida, mas o pagamento não foi registrado na Cashfree), informe que o reembolso será processado em alguns dias.

### Como cancelar um pedido de transação bem-sucedida

Pode surgir um cenário em que a Cashfree compartilhou um sinal de pagamento bem-sucedido, mas o pedido não pôde ser atendido pelo comerciante. Nesse caso, processe o reembolso do pagamento por meio de um dos seguintes mecanismos:

-   Use a API de Reembolso.-   Use o painel da Cashfree para comerciantes.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)