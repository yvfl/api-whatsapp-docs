<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-billdesk -->
<!-- Scraped: 2025-12-20T17:45:07.879Z -->

# Guia de integração do portal de pagamento do Billdesk

Updated: 14 de nov de 2025

Este documento apresenta a integração de pagamento com o Billdesk, necessária para comerciantes ou provedores de soluções empresariais, que configuraram um chatbot usando as APIs do WhatsApp Business e precisam receber pagamentos de usuários do WhatsApp.

Além disso, abrange as APIs que precisam ser integradas e como a integração funciona em conjunto com a integração da API do WhatsApp Business. Embora não seja um guia abrangente, ele serve como uma visão geral para auxiliar na compreensão do processo de integração do portal de pagamento. Todos os detalhes específicos ou únicos relacionados ao gateway de pagamento devem ser determinados pelo comerciante ou parceiro de solução.

Em termos de integração com o produto WA P2M, este documento cobre as solicitações e respostas destacadas em vermelho no diagrama de fluxo.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/583839518_1550939386241240_3556025567907244162_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=7bbQmhKCO0UQ7kNvwHgd7CX&_nc_oc=AdlWTDNHaI2icEU4e0h6ZKco0yHsd5nQbwbD0bH7_unGbEosqTKLc6h9bTOFVKgusB8&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=Zogmjbs7Cm2JtYRqhqum9g&oh=00_Afmj8ISawHkMLcj0xH-QQB2VCSL1qinn3JeTrN9JKQKKOA&oe=696120AF)

## Integração de pagamento do Billdesk

### Configuração

Para fazer a autenticação com a API do Billdesk, é preciso criar um cliente e selecionar um método de autenticação entre HMAC e Javascript Object Signing and Encryption (JOSE), sendo esta a opção preferencial. Esses métodos são usados para criptografar/descriptografar a solicitação/resposta das APIs do Billdesk.

Para simplificar a explicação, os exemplos a seguir abordarão apenas o corpo da carga final que será incluído no objeto final necessário para uma autenticação bem-sucedida com a API. É importante consultar a documentação do Billdesk’s para ver orientações sobre como esse objeto final deve ser estruturado.

Para prosseguir, você precisa dos seguintes detalhes:

-   Identificação do cliente e chave secreta do Billdesk.-   Detalhes da configuração de pagamento que você já definiu na conta do WhatsApp Business
    -   Código de categoria do comerciante-   VPA do comerciante-   Nome do comerciante

### API de Iniciação de Pagamento

#### Exemplo de solicitação para `POST` a https://pguat.billdesk.io/payments/ve1\_2/transactions/create

```
{  "mercid": "BDMERCHANTID",  "orderid": "UPIODR00000004",  "amount": "2.00",  "currency": "356",  "bankid": "ICW",  "txn_process_type": "intent",  "itemcode": "DIRECT",  "payment_method_type": "upi",  "wa_mc": "0743",  "wa_vpa": "billdesk@hdfcbank",  "wa_txnid": "H477676443",  "wa_mercname": "SIDDHIVINK",  "additional_info": {    "additional_info1": "Details1",    "additional_info2": "Details2"  },  "device": {    "init_channel": "app",    "ip": "124.124.1.1",    "user_agent": "App/22.6.74 Platform/19.5.0"  }}
```

Parâmetros

Descrição

Identificação do pedido (obrigatório)

string

Identificação do pedido única gerada pelo comerciante para identificar a transação

mercid (obrigatório)

string

Identificador único definido pelo BillDesk para cada comerciante

quantidade (obrigatório)

string

Valor da transação com dois dígitos decimais

moeda (obrigatório)

string

Moeda ISO do valor da transação

txn\_process\_type (opcional)

string

O valor deve ser definido como `intent`.

bankid (opcional)

string

Identificador exclusivo do BillDesk definido para o banco ou adquirente.

ru (opcional)

string

URL de devolução do comerciante

itemcode (obrigatório)

string

O valor itemcode fornecido pelo BillDesk, com um valor padrão `DIRECT`.

devic (obrigatório)

objeto

Objeto do dispositivo. Para saber mais, consulte a documentação do BillDesk.

payment\_method\_type (obrigatório)

string

Defina como `upi`.

wa\_mc (obrigatório)

string

Categoria do comerciante

wa\_vpa (obrigatório)

string

VPA do beneficiário

wa\_txnid (obrigatório)

string

O txnid único gerado pelo banco para a transação.

wa\_mercname (obrigatório)

string

Nome do comerciante

#### Exemplo de resposta

```
{  "objectid": "transaction",  "transactionid": "X7890477676443",  "orderid": "UPIODR00000004",  "mercid": "BDMERCID",  "transaction_date": "2022-03-18T11:50:27+05:30",  "amount": "2.00",  "surcharge": "0.00",  "discount": "0.00",  "charge_amount": "2.00",  "currency": "356",  "additional_info": {    "additional_info1": "Details1",    "additional_info2": "Details2"  },  "txn_process_type": "intent",  "bankid": "ICW",  "itemcode": "DIRECT",  "auth_status": "0002",  "transaction_error_code": "TRP0000",  "transaction_error_desc": "Transaction Pending ",  "transaction_error_type": "pending",  "payment_method_type": "upi",  "wa_mc": "7399",  "wa_vpa": "billdesk@hdfcbank",  "wa_txnid": "H477676443",  "wa_mercname": "SIDDHIVINK",  "intent": "dXBpOi8vcGF5P3BhPWJpbGxkZXNrQGhkZmNiYW5rJnBuPVNJRERISVZJTksmbWM9NjMwMCZ0cj1YSEQ1MDQ3NzY3NjQ0MyZ0bj1QYXkmYW09Mi4wMCZtYWwMCZjdT1JTlI="}
```

### Analisar a resposta

Use o valor de `wa_txnid` na resposta e passe-o como o `reference_id` ao configurar o objeto `parameters` para enviar na [mensagem de detalhes do pedido](/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent#paramobject) usando a API.

Verifique os valores na intenção recebida:

-   A chave `intent` tem o valor codificado em base64 da intenção-   A decodificação de `intent` deve gerar um valor semelhante a: `upi://pay?pa=billdesk@hdfcbank&pn=SIDDHIVINKamp;mc=6300&tr=XHD50477676443&tn=Pay&am=2.00&malORS`-   O valor de `pa` é o `VPA` do comerciante. Esse valor deve corresponder à identificação de VPA no `payment_configuration` enviado no objeto `parameters`.

### Webhook de status

O Billdesk publicará um objeto de transação no URL de devolução (`ru`) especificado na API de iniciação de pagamento.

Chave

Tipo de dados

Descrição

objectid (obrigatório)

string

A string que representa o tipo do objeto. Esse valor será fixado como transação.

transactionid

string

A identificação de transação única gerada pelo BillDesk para a transação

orderid

string

Identificação do pedido único gerado pelo comerciante para a transação.

mercid

string

Identificador único definido pelo BillDesk para cada comerciante

transaction\_date

timestamp

Data e hora da transação do BillDesk no formato AAAA-MM-DDThh:mm:ssTZD

amount

string

Valor da transação com dois dígitos decimais

surcharge

string

Sobretaxa do cliente em dois decimais aplicada ao valor da transação, se houver.

desconto

string

Sobretaxa do cliente em dois decimais aplicada ao valor da transação, se houver.

charge\_amount

string

Cobrança total na moeda

currency

integer

Moeda ISO do valor da transação

txn\_process\_type

string

Indica o tipo de processamento da transação.

A intenção para payment\_method\_type é upi, e a forma de pagamento é intenção de UPI

bankid

string

Identificador exclusivo do BillDesk definido para o banco ou adquirente.

txn\_process\_type

string

Indica o tipo de processamento da transação.

A intenção para payment\_method\_type é upi, e a forma de pagamento é UPI intent.

ru

string

URL de devolução do comerciante

additional\_info

objeto

Matriz de 10 valores `additional_info` que podem ser anexados à transação. Observação: recomenda-se que o comerciante não transmita informações de PII do cliente em campos de informações adicionais.

itemcode

string

O valor itemcode fornecido pelo BillDesk, com um valor padrão `DIRECT`.

bank\_ref\_no

string

Número de referência da transação gerado pelo banco ou pela entidade adquirente

auth\_status

string

Representa o status de autorização da transação com os seguintes valores possíveis:

-   `0300` – Transação bem-sucedida-   `0002` – A transação está aguardando autorização-   `0399` – Falha na transação

settlement\_lob

string

Linha de negócios de liquidação pré-configurada pelo BillDesk para liquidação de fundos no cliente

cliente

objeto

Objeto do cliente

dispositivo

objeto

Objeto do dispositivo

transaction\_error\_code

string

Representa o código de erro para uma transação com status `0399`.

transaction\_error\_type

string

Representa a categoria de erro padrão para uma transação com status `0399`.

transaction\_error\_desc

string

Representa a descrição do código de erro para uma transação com status `0399`.

authcode

string

O código de autorização recebido do adquirente para uma transação com cartão autorizada com sucesso

eci

string

O valor de eci da autenticação realizada para a transação do cartão.

payment\_method\_type

string

Representa a forma de pagamento, por exemplo, upi.

cartão

Objeto

Objeto da forma de pagamento (aplicável quando a forma de pagamento for cartão)

customer\_refid

string

Identificador único do cliente referente ao comerciante.

links

objeto

Links associados ao objeto

### Como analisar a resposta

Use o `auth_status` recuperado da resposta acima e transmita a [mensagem de status](/docs/whatsapp/cloud-api/payments-api/upi#step-7--update-order-status) correspondente via API do WhatsApp.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)