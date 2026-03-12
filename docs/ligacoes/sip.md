<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip -->
<!-- Scraped: 2026-03-10T21:38:58.061Z -->

# Protocolo de Iniciação de Sessão (SIP)

Updated: 15 de dez de 2025

Quando o SIP está habilitado, **não é possível usar pontos de extremidade da Graph API relacionados a ligações**. Além disso, **webhooks relacionados a ligações não são enviados**.

## Visão geral

O Protocolo de Iniciação de Sessão ([SIP⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc3261&h=AT4pZkIG3QMqnUmD5mXz4zb0L1Tzo6091Nrzw5Ni2anBKs2CCRCpW53vuXNYejuz7gz-1VMqei9aOeek8vP0o5_-Agkt13H707eJI4HGIeL4F1yRJH1-9x4XbquyU9QP59U6O8Bw5NPEAz_qwt74s5ko86c)) é um protocolo de sinalização usado para iniciar, manter, modificar e encerrar sessões de comunicação em tempo real entre dois ou mais pontos de extremidade.

A API de Ligações Comerciais do WhatsApp é compatível com o uso do SIP como protocolo de sinalização em vez dos pontos de extremidade da Graph API e Webhooks.

### Antes de começar

Antes de começar com a sinalização de ligações do SIP, confirme o seguinte:

-   Se você cumpre os [pré-requisitos gerais de ligação](/documentation/business-messaging/whatsapp/calling#step-1--prerequisites).-   Se o seu app tem permissões de mensagem para o número de telefone comercial para o qual você quer habilitar o SIP.
    -   Para testar esse processo, envie e receba mensagens por meio dos pontos de extremidade de mensagens da Graph API. Depois, use o mesmo app para configurar o servidor SIP no número de telefone comercial para fazer ligações.-   Confirme usando a [API de Status de Integridade](/documentation/business-messaging/whatsapp/support/health-status) com `PHONE_NUMBER_ID`-   Se o modo do app é "Publicado", não "Desenvolvimento".-   Se você tem um servidor SIP de terceiros compatível com padrões que oferece suporte para transporte [TLS](/documentation/business-messaging/whatsapp/calling/sip#security) e autenticação de digestão.

Para saber mais, consulte [Possíveis configurações de sinalização e mídia](/documentation/business-messaging/whatsapp/calling#signaling-and-media-possible-configurations).

## Fluxos de ligação usando o SIP

Antes de começar, verifique se você [habilitou e configurou o SIP no número de telefone comercial](/documentation/business-messaging/whatsapp/calling/sip#configure-update-sip-settings-on-business-phone-number). A Meta gera uma senha de usuário de SIP única para cada combinação de número de telefone comercial e app. Você precisará dessas informações e poderá recuperá-las usando o ponto de extremidade [get Call Settings.](/documentation/business-messaging/whatsapp/calling/sip#get-phone-number-calling-settings--sip-)

### Segurança

-   O transporte de TLS é obrigatório para o SIP. A Meta apresentará um certificado de servidor válido com um nome de assunto que cubra nosso domínio SIP wa.meta.vc. Seu servidor SIP deve fazer o mesmo, já que a Meta garante que o certificado é válido e o nome de assunto abrange o domínio de SIP configurado no número de telefone comercial
    -   A Meta NÃO aceita o protocolo TLS mútuo (também conhecido como mTLS). Ou seja, quando a Meta atua como cliente TLS, seu servidor TLS não deve solicitar o certificado do cliente. Se você ainda solicitar o certificado do cliente, a Meta apresentará um, mas o nome de assunto do certificado vai se referir a um host dinâmico aleatório que não passará na validação do certificado.-   A Meta adiciona `transport=TLS` ao URI de solicitação como parte das solicitações de SIP para o servidor SIP parceiro-   Para ligações iniciadas pela empresa, o SIP invite do seu servidor SIP será desafiado usando a autenticação de digestão. Para mais detalhes, consulte [Ligações iniciadas pela empresa](/documentation/business-messaging/whatsapp/calling/sip#business-initiated-calls)-   Para ligações iniciadas pelo usuário, recomendamos que você desafie a solicitação de INVITE do SIP da Meta a fim de usar a autenticação de digestão para aumentar a segurança. Para saber mais, consulte [Ligações iniciadas pelo usuário](/documentation/business-messaging/whatsapp/calling/sip#user-initiated-calls)

### Como testar se você tem um certificado TLS válido

Quando um usuário do WhatsApp liga para uma empresa, um motivo comum que pode fazer com que seu servidor SIP **não** receba o SIP invite da Meta é o erro de validação do certificado. É possível usar as informações exibidas para confirmar se a configuração é válida.

Execute o comando `openssl s_client -quiet -verify_hostname {hostname} -connect {hostname}:{port}` substituindo "hostname" e "port" pelos seus valores

#### Exemplo de certificado de servidor válido

```
$ openssl s_client -quiet -verify_hostname meta-voip.example.com -connect meta-voip.example.com:5061
Connecting to 64:ff9b::68f8:b0b8
depth=2 C=US, ST=New Jersey, L=Jersey City, O=The USERTRUST Network, CN=USERTrust RSA Certification Authority
verify return:1
depth=1 C=AT, O=ZeroSSL, CN=ZeroSSL RSA Domain Secure Site CA
verify return:1
depth=0 CN=example.com
verify return:1
```

#### Exemplo de hostname:port não está escutando em TLS

```
openssl s_client -quiet -verify_hostname lb01.voice.usw2.pure.cloud -connect lb01.voice.usw2.pure.cloud:5060
Connecting to 34.211.206.63
009F0DFB01000000:error:0A000126:SSL routines::unexpected eof while reading:ssl/record/rec_layer_s3.c:693:
```

#### Exemplo de certificado inválido

```
$ openssl s_client -quiet -verify_hostname meta-inb.byoc.mypurecloud.com -connect meta-inb.byoc.mypurecloud.com:5061
Connecting to 64:ff9b::3652:f1c0
depth=0 jurisdictionC=US, jurisdictionST=California, businessCategory=Private Organization, serialNumber=1515861, C=US, ST=Indiana, L=Indianapolis, O=Genesys Cloud Services, Inc., CN=voice.mypurecloud.com
verify error:num=62:hostname mismatch
verify return:1
depth=2 C=US, O=DigiCert Inc, OU=www.digicert.com, CN=DigiCert High Assurance EV Root CA
verify return:1
depth=1 C=US, O=DigiCert Inc, OU=www.digicert.com, CN=DigiCert SHA2 Extended Validation Server CA
verify return:1
depth=0 jurisdictionC=US, jurisdictionST=California, businessCategory=Private Organization, serialNumber=1515861, C=US, ST=Indiana, L=Indianapolis, O=Genesys Cloud Services, Inc., CN=voice.mypurecloud.com
verify return:1
```

Nesse caso, você pode alterar o certificado para corresponder ao nome do host ou [alterar o nome do host configurado do servidor SIP](/documentation/business-messaging/whatsapp/calling/sip#configure-update-sip-settings-on-business-phone-number) para corresponder ao certificado

### Ligações iniciadas pela empresa

#### Pré-requisitos

-   Você tem a aprovação de permissão de ligação necessária do usuário do WhatsApp
    -   [Saiba como obter as permissões de ligação de usuários](/documentation/business-messaging/whatsapp/calling/user-call-permissions)-   [Recupere a senha do SIP gerada pela Meta](/documentation/business-messaging/whatsapp/calling/sip#include-sip-user-password) e configure-a no servidor SIP para que ele possa responder aos desafios de autenticação de digester dos servidores SIP da Meta

#### Fluxo da ligação

-   Envie um [SIP INVITE](/documentation/business-messaging/whatsapp/calling/sip#business-initiated-calls--with-webrtc-media-) inicial aos nossos servidores. Nosso domínio de SIP é wa.meta.vc. Para iniciar uma ligação para um usuário do WhatsApp com o número de telefone 11234567890, o URI de solicitação do SIP deve ser "sip: +11234567890@wa.meta.vc;transport=tls".
    -   Essa solicitação falhará com uma mensagem "SIP 407 Proxy Authentication required".-   Envie um segundo [SIP INVITE](/documentation/business-messaging/whatsapp/calling/sip#business-initiated-calls--with-webrtc-media-) com o cabeçalho de autorização correto de acordo com o [RFC 3261⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc3261%23section-22&h=AT4pZkIG3QMqnUmD5mXz4zb0L1Tzo6091Nrzw5Ni2anBKs2CCRCpW53vuXNYejuz7gz-1VMqei9aOeek8vP0o5_-Agkt13H707eJI4HGIeL4F1yRJH1-9x4XbquyU9QP59U6O8Bw5NPEAz_qwt74s5ko86c).
    -   O atributo de nome de usuário do campo de autorização deve corresponder ao nome de usuário do cabeçalho "from", que é o número de telefone comercial-   A senha é gerada pela Meta e pode ser recuperada usando o [ponto de extremidade get Call Settings](/documentation/business-messaging/whatsapp/calling/sip#get-phone-number-calling-settings--sip-)-   A parte do nome de usuário do cabeçalho "from" deve ser o número de telefone comercial totalmente normalizado-   O nome de domínio do cabeçalho "from" deve corresponder ao servidor SIP configurado no número de telefone comercial-   O `SDP Offer` incluído é compatível com ICE, DTLS-SRTP e OPUS (basicamente mídia WebRTC)-   Envie o [SIP INVITE](/documentation/business-messaging/whatsapp/calling/sip#business-initiated-calls--with-webrtc-media-) para o número do usuário do WhatsApp que você deseja chamar.

### Ligações iniciadas pelo usuário

#### Pré-requisitos

-   Se você planeja usar a autenticação de digestão do SIP, [recupere a senha do SIP gerada pela Meta](/documentation/business-messaging/whatsapp/calling/sip#include-sip-user-password) e configure-a no servidor SIP para que ele possa responder aos desafios de autenticação de digestão dos servidores SIP da Meta

#### Fluxo da ligação

-   O usuário do WhatsApp liga para o número de telefone comercial e não sabe se a empresa está usando o SIP ou a Graph API. Ou seja, a experiência do usuário é idêntica-   Se o número de telefone comercial estiver habilitado para SIP, a Meta enviará um [SIP INVITE](/documentation/business-messaging/whatsapp/calling/sip#user-initiated-calls--with-webrtc-media-) para o servidor [configurado no número de telefone comercial](/documentation/business-messaging/whatsapp/calling/sip#configure-update-sip-settings-on-business-phone-number)-   Você responde com um [Desafio de autenticação do SIP](/documentation/business-messaging/whatsapp/calling/sip#user-initiated-calls-with-digest-auth--with-sdes-media-) (recomendado) ou [SIP OK](/documentation/business-messaging/whatsapp/calling/sip#user-initiated-calls--with-webrtc-media-) e transmite em uma resposta SDP

Se não estiver recebendo o SIP INVITE da Meta, consulte as [perguntas frequentes específicas sobre o SIP](/documentation/business-messaging/whatsapp/calling/faq#session-initiation-protocol--sip--faq) para solucionar o problema

  
[Confira exemplos de solicitações de SIP](/documentation/business-messaging/whatsapp/calling/sip#sample-sip-requests)

[Saiba mais sobre o Protocolo de Descrição de Sessão (SDP)⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rfc-editor.org%2Frfc%2Frfc8866.html&h=AT4pZkIG3QMqnUmD5mXz4zb0L1Tzo6091Nrzw5Ni2anBKs2CCRCpW53vuXNYejuz7gz-1VMqei9aOeek8vP0o5_-Agkt13H707eJI4HGIeL4F1yRJH1-9x4XbquyU9QP59U6O8Bw5NPEAz_qwt74s5ko86c)

[Exemplos de estruturas SDP](/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)

### Cabeçalhos de SIP personalizados

Usamos os cabeçalhos de SIP personalizados a seguir, específicos para ligações iniciadas pelo usuário

Nome do cabeçalho

Metadados

Descrição

x-wa-meta-cta-payload

Opcional; String

É exibido quando o usuário inicia uma ligação em um botão de ligação que especifica a carga da empresa. [Saiba mais](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button)

x-wa-meta-deeplink-payload

Opcional; String

É exibido quando o usuário inicia uma ligação a partir de um deep link de ligação que tem carga especificada pela empresa. [Saiba mais](/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-payload-data-in-call-deeplink)

## Como definir/atualizar as configurações de SIP no número de telefone comercial

Use este ponto de extremidade para atualizar as configurações de ligação para um número de telefone comercial individual.

### Sintaxe da solicitação

```
POST /<PHONE_NUMBER_ID>/settings
```

### Parâmetros do ponto de extremidade

  

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial cujas configurações da API de Ligações estão sendo atualizadas.

[Saiba mais sobre como formatar números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

### Corpo da solicitação

```
{  "calling": {    ... // other calling api settings    "sip": {      "status": "ENABLED",      "servers": [        {         "hostname": SIP_SERVER_HOSTNAME          "port": SIP_SERVER_PORT,          "request_uri_user_params": {            "KEY1": "VALUE1", // for cases like trunk groups (tgrp)            "KEY2": "VALUE2",          }        }      ]    }  },  // Other non calling api feature configurations}
```

### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`status`

_String_

**Opcional**

  
Habilite ou desabilite a sinalização de ligações SIP para o número de telefone comercial em questão.

O padrão é `DISABLED`.

Quando `status` for `ENABLED`, o número de telefone usará exclusivamente o SIP para sinalização de ligações e não funcionará com as Graph APIs. Nenhum webhook é enviado.

Quando `status` é definido como `DISABLED`, os valores de `servers` do SIP não são redefinidos.

Se você habilitar o SIP para o mesmo número de telefone outra vez, os valores `servers` configurados anteriormente entrarão em vigor.

É possível configurar o status e os servidores SIP na mesma solicitação

`“ENABLED”`

`“DISABLED”`

`servers`

_String_

**Opcional**

  
A configuração de roteamento do servidor SIP.

Cada app pode ter apenas um servidor SIP configurado. Os servidores são uma matriz preparada para o futuro. Isso também torna o esquema de carga POST consistente com o esquema de carga GET, porque é possível ter vários apps, cada um com o próprio servidor SIP. Na carga GET, se vir vários servidores SIP, isso significa que você usou a API POST com tokens de acesso diferentes que pertencem a apps diferentes.

O app associado é extraído do token de acesso usado para fazer a chamada de API.

Como o número de telefone comercial pode ser usado em vários apps, cada número pode ser atendido por diversos servidores SIP.

Para excluir um servidor SIP configurado previamente, passe uma matriz vazia para este campo. Se alguns servidores permanecerem após a limpeza, pode ser que eles pertençam a apps diferentes. Por isso, será necessário usar os tokens de acesso correspondentes para limpá-los.

Deve haver pelo menos um servidor SIP de qualquer app quando o status do SIP for HABILITADO. Para limpar os servidores de todos os apps usados com um número de telefone comercial, o status do SIP deve ser DESABILITADO.

`hostname` – (_String_) **Obrigatório**

O nome do host do servidor SIP.

As solicitações devem usar TLS.

`port` – (_String_) **Obrigatório**

A porta do servidor SIP que aceitará as solicitações.

As solicitações devem usar TLS.

A porta padrão é 5061

`request_uri_user_params` – (_String_) **Opcional**

Um campo opcional para passar os parâmetros que você deseja incluir na parte do usuário do URI de solicitação usado no nosso SIP INVITE para o servidor SIP.

O tamanho máximo da chave/valor é de 128 caracteres.

Um exemplo de caso de uso seriam grupos de tronco ([RFC 4904⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Frfc4904&h=AT4pZkIG3QMqnUmD5mXz4zb0L1Tzo6091Nrzw5Ni2anBKs2CCRCpW53vuXNYejuz7gz-1VMqei9aOeek8vP0o5_-Agkt13H707eJI4HGIeL4F1yRJH1-9x4XbquyU9QP59U6O8Bw5NPEAz_qwt74s5ko86c))

-   sip:+1234567890@sip.example.com;-   tgrp=wacall;-   trunk-context=byoc.example.com

Este exemplo tem dois parâmetros de usuário para tgrp e trunk-context.

```
"servers": [   {      "hostname": SIP_SERVER_HOSTNAME      "port": SIP_SERVER_PORT,      "request_uri_user_params": {         "KEY1": "VALUE1",         "KEY2": "VALUE2",      }   }]
```

### Resposta de sucesso

```
{  "success": true}
```

### Resposta de erro

[Veja os códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Como obter as configurações de ligação do número de telefone (SIP)

Use este ponto de extremidade para verificar a configuração dos recursos da API de Ligações, incluindo valores SIP.

Esse ponto de extremidade pode retornar informações sobre as configurações de outros recursos da API de Nuvem.

### Sintaxe da solicitação

```
GET /<PHONE_NUMBER_ID>/settings
```

### Parâmetros do ponto de extremidade

  

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial para o qual você está atualizando as configurações da API de Ligações.

[Saiba mais sobre como formatar números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

#### Permissão do app necessária

`whatsapp_business_management`: é necessário ter acesso avançado para atualizar o uso da API para clientes empresariais finais

### Corpo da resposta

```
{
  "calling": {
    "status": "ENABLED",
    "call_icon_visibility": "DEFAULT",
    "callback_permission_status": "ENABLED",
    "sip": {
      "status": "ENABLED",
      "servers": [
        {
          "app_id": <APP_ID_THAT_CONFIGURED_THIS_SIP_SERVER>,
          "hostname": "sip.example.com"
        }
      ]
    }
  }
}
```

### Incluir senha de usuário do SIP

Por padrão, o corpo da resposta não inclui a senha do SIP gerada pela Meta. Para incluir a senha no corpo da resposta, adicione o parâmetro de consulta opcional de credenciais do SIP na solicitação GET:

```
GET /<PHONE_NUMBER_ID>/settings?include_sip_credentials=true
```

A resposta será semelhante a esta:

```
{
  "calling": {
    "status": "ENABLED",
    "call_icon_visibility": "DEFAULT",
    "callback_permission_status": "ENABLED",
    "sip": {
      "status": "ENABLED",
      "servers": [
        {
          "app_id": <APP_ID_THAT_CONFIGURED_THIS_SIP_SERVER>,
          "hostname": "sip.example.com",
          "sip_user_password": "{SIP_USER_PASSWORD}"
        }
      ]
    }
  }
}
```

### Resposta de erro

[Veja os códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Como redefinir a senha do SIP

Para que a Meta gere uma nova senha do SIP, você precisará desabilitar o SIP, excluir o servidor SIP e adicioná-lo novamente.

-   [Obtenha sua configuração de SIP com senha](/documentation/business-messaging/whatsapp/calling/sip#include-sip-user-password) para ver a senha atual e usar como referência-   Desabilite e exclua o servidor SIP

```
curl -X POST \https://graph.facebook.com/{VERSION}/{PHONE_NUMBER_ID}/settings \-H 'Authorization: Bearer {TOKEN}' \-H 'Content-Type: application/json' \-d '{  "calling": {    "status": "DISABLED",    "sip": {      "status": "DISABLED",      "servers": [],    }  }}'{"success":true}
```

-   Habilite o SIP e adicione o servidor

```
curl -X POST \https://graph.facebook.com/{VERSION}/{PHONE_NUMBER_ID}/settings \-H 'Authorization: Bearer {TOKEN}' \-H 'Content-Type: application/json' \-d '{  "calling": {    "status": "ENABLED",    "sip": {      "status": "ENABLED",      "servers": [{"hostname":"sip.example.com"}],    }  }}'{"success":true}
```

-   [Acesse a sua configuração de SIP com senha](/documentation/business-messaging/whatsapp/calling/sip#include-sip-user-password) para ver a nova senha

## Exemplo de solicitações de SIP

### Ligações iniciadas pela empresa (com mídia WebRTC)

#### Solicitação inicial de SIP INVITE

```
INVITE sip:+12195550714@wa.meta.vc;transport=tls SIP/2.0
Record-Route: <sip:+159.65.244.171:5061;transport=tls;lr;ftag=Kc9QZg4496maQ;nat=yes>
Via: SIP/2.0/TLS 159.65.244.171:5061;received=2803:6081:798c:93f8:5f9b:bfe8:300:0;branch=z9hG4bK0da2.36614b8977461b486ceabc004c723476.0;i=617261
Via: SIP/2.0/TLS 137.184.87.1:35181;rport=56533;received=137.184.87.1;branch=z9hG4bKQNa6meey5Dj2g
Max-Forwards: 69
From: <sip:+17125550259@meta-voip.example.com>;tag=Kc9QZg4496maQ
To: <sip:+12195550714@wa.meta.vc>
Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
CSeq: 96743476 INVITE
Contact: <sip:mod_sofia@137.184.87.1:35181;transport=tls;swrad=137.184.87.1~56533~3>
User-Agent: SignalWire
Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, MESSAGE, INFO, UPDATE, REGISTER, REFER, NOTIFY
Supported: timer, path, replaces
Allow-Events: talk, hold, conference, refer
Session-Expires: 600;refresher=uac
Min-SE: 90
Content-Type: application/sdp
Content-Disposition: session
Content-Length: 2427
X-Relay-Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
Remote-Party-ID: <sip:+17125550259@meta-voip.example.com>;party=calling;screen=yes;privacy=off
Content-Type: application/sdp
Content-Length:  2427

<<SDP omitted for brevity>>
```

#### Resposta 407 da Meta

```
SIP/2.0 407 Proxy Authentication Required
Via: SIP/2.0/TLS 159.65.244.171:5061;received=2803:6081:798c:93f8:5f9b:bfe8:300:0;branch=z9hG4bK0da2.36614b8977461b486ceabc004c723476.0;i=617261
Via: SIP/2.0/TLS 137.184.87.1:35181;rport=56533;received=137.184.87.1;branch=z9hG4bKQNa6meey5Dj2g
Record-Route: <sip:+159.65.244.171:5061;transport=tls;lr;ftag=Kc9QZg4496maQ;nat=yes>
Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
From: <sip:+17125550259@meta-voip.example.com>;tag=Kc9QZg4496maQ
To: <sip:+12195550714@wa.meta.vc>;tag=z9hG4bK0da2.36614b8977461b486ceabc004c723476.0
CSeq: 96743476 INVITE
Proxy-Authenticate: Digest realm="wa.meta.vc",nonce="419ac2415577f8e1",opaque="440badfc05072367",algorithm=MD5,qop="auth"
```

#### Segundo envio de SIP INVITE com autorização

```
INVITE sip:+12195550714@wa.meta.vc;transport=tls SIP/2.0
        Record-Route: <sip:+159.65.244.171:5061;transport=tls;lr;ftag=Kc9QZg4496maQ;nat=yes>
        Via: SIP/2.0/TLS 159.65.244.171:5061;received=2803:6081:798c:93f8:5f9b:bfe8:300:0;branch=z9hG4bK1da2.ed8900012befced853927008d619d374.0;i=617261
        Via: SIP/2.0/TLS 137.184.87.1:35181;rport=56533;received=137.184.87.1;branch=z9hG4bKry3yp9y12p8mc
        Max-Forwards: 69
        From: <sip:+17125550259@meta-voip.example.com>;tag=Kc9QZg4496maQ
        To: <sip:+12195550714@wa.meta.vc>
        Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
        CSeq: 96743477 INVITE
        Contact: <sip:mod_sofia@137.184.87.1:35181;transport=tls;swrad=137.184.87.1~56533~3>
        User-Agent: SignalWire
        Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, MESSAGE, INFO, UPDATE, REGISTER, REFER, NOTIFY
        Supported: timer, path, replaces
        Allow-Events: talk, hold, conference, refer
        Proxy-Authorization: Digest username="17125550259", realm="wa.meta.vc", nonce="419ac2415577f8e1", uri="sip:+12195550714@wa.meta.vc;transport=tls", response="blah", algorithm=MD5, cnonce="/mVZtYFCEj65YQJCrBEAAg", opaque="440badfc05072367", qop=auth, nc=00000001
        Session-Expires: 600;refresher=uac
        Min-SE: 90
        Content-Type: application/sdp
        Content-Disposition: session
        Content-Length: 2427
        X-Relay-Call-ID: dc2c5b33-1b81-43ee-9213-afb56f4e56ba
        Remote-Party-ID: <sip:+17125550259@meta-voip.example.com>;party=calling;screen=yes;privacy=off
        Content-Type: application/sdp
        Content-Length:  2427
        <<SDP omitted for brevity>>
```

#### Exemplo de resposta de erro

```
SIP/2.0 403 SIP server wa.meta.vc from INVITE does not match any SIP server configured for phone number id {ID}
        Via: SIP/2.0/TLS [2803:6080:c954:b533:ecfb:5cec:300:0]:39459;rport=39459;received=2803:6080:c954:b533:ecfb:5cec:300:0;branch=z9hG4bKPjf9f3d0bddb3dbe0c9b1e3b486f39784a;alias
        Via: SIP/2.0/TLS 148.72.155.236:5061;rport=30498;received=2803:6080:d014:8e40:ddbb:4ed7:300:0;branch=z9hG4bKPjfd270ec8-7aaf-4a65-b290-4bef3b50b7b7;alias
        Record-Route: <sip:onevc-sip-proxy-dev.fbinfra.net:8191;transport=tls;lr>
        Record-Route: <sip:wa.meta.vc;transport=tls;lr>
        Call-ID: 91578781-44f1-4268-9a7f-d7efec1abf72
        From: <sip:+17125550259@wa.meta.vc>;tag=3a63b370-a697-4a5a-82b4-e8105e23f176
        To: <sip:+12195550714@wa.meta.vc>;tag=e0d30a05-657b-47ec-a668-e05ca79f9f05
        CSeq: 15659 INVITE
        Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
        X-FB-External-Domain: wa.meta.vc
        Warning: 399 wa.meta.vc "SIP server wa.meta.vc from INVITE does not match any SIP server configured for phone number id {ID}"
        Content-Length: 0
        Content-Length:  0
```

#### SIP BYE

```
BYE sip:+5559800000693@wa.meta.vc;transport=tls;ob SIP/2.0
Via: SIP/2.0/TLS 137.184.4.155:5061;received=2803:6080:c074:cac:10ed:4b05:400:0;i=8d2dc2
Via: SIP/2.0/TLS 143.198.136.243:35181;rport=38087;received=143.198.136.243
Route: <sip:wa.meta.vc;transport=tls;lr>
Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Max-Forwards: 69
From: <sip:+12145551869@meta-voip.example.com>;tag=NcKQ6mtDKSDQB
To: "5559800000693" <sip:+5559800000693@wa.meta.vc>;tag=92a01092-ee78-4870-865f-bc176203a6bd
Call-ID: outgoing:wacid.HBgPMjAwNzU2OTA0ODY5OTY1FRIAEhggMjQ4QzUwOUQ1REQ0NDUwNENEQzRFMTgwRTNGQjAwNjEcGAsxMjE0NTU1MTg2ORUCAAA
CSeq: 98734935 BYE
User-Agent: SignalWire
Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, MESSAGE, INFO, UPDATE, REGISTER, REFER, NOTIFY
Supported: timer, path, replaces
Reason: Q.850;cause=16;text="NORMAL_CLEARING"
Content-Length: 0
X-Relay-Call-ID: b72c0c65-e319-41b3-afb7-19ebcca05d38
Content-Length:  0
```

#### SIP INVITE (com SDES)

```
INVITE sip:+12195550714@wa.meta.vc;transport=tls SIP/2.0
Record-Route: <sip:54.172.60.1:5061;transport=tls;lr;r2=on>
Record-Route: <sip:54.172.60.1;lr;r2=on>
CSeq: 2 INVITE
From: "12145551869" <sip:+12145551869@meta-voip.example.com>;tag=28460006_c3356d0b_5cdada8c-cbf0-4369-b02d-cc97d3c36f2b
To: <sip:+12195550714@wa.meta.vc>
Max-Forwards: 66
P-Asserted-Identity: <sip:+12145551869@meta-voip.example.com>
Min-SE: 120
Call-ID: f304a1d2cafb8139c1f9ff93a7733586@0.0.0.0
Contact: "12145551869" <sip:+12145551869@172.25.10.217:5060;transport=udp>
Allow: INVITE, ACK, CANCEL, OPTIONS, BYE, REFER, NOTIFY
Via: SIP/2.0/TLS 54.172.60.1:5061;received=2803:6080:f934:8894:7eb5:24f9:300:0;branch=z9hG4bK1e5a.0da2ace9cc912d9e5f2595ca4acb9847.0
Via: SIP/2.0/UDP 172.25.10.217:5060;rport=5060;branch=z9hG4bK5cdada8c-cbf0-4369-b02d-cc97d3c36f2b_c3356d0b_54-457463274351249162
Supported: timer
User-Agent: Twilio Gateway
Proxy-Authorization: Digest username="12145551869", realm="wa.meta.vc", nonce="2a487cb01d4ed43b", uri="sip:+12195550714@wa.meta.vc;transport=tls", response="3f58df7af575b948625aeffd51bf9060", algorithm=MD5, cnonce="b338deb7f0e004e66353e26d34ad62b7", opaque="725a06fb2cd89a32", qop=auth, nc=00000002
Content-Type: application/sdp
X-Twilio-CallSid: CA93eac6be615da5e6836c7059e9555348
Content-Length: 422
Content-Type: application/sdp
Content-Length:   422

v=0
o=root 1185414872 1185414872 IN IP4 172.18.155.180
s=Twilio Media Gateway
c=IN IP4 168.86.138.232
t=0 0
m=audio 19534 RTP/SAVP 107 0 8 101
a=crypto:**************************************************************************
a=rtpmap:0 PCMU/8000
a=rtpmap:107 opus/48000/2
a=fmtp:107 useinbandfec=1
a=rtpmap:8 PCMA/8000
a=rtpmap:101 telephone-event/8000
a=fmtp:101 0-16
a=ptime:20
a=maxptime:20
a=sendrecv
```

#### SIP OK (com SDES)

```
SIP/2.0 200 OK
Via: SIP/2.0/TLS 54.172.60.1:5061;received=2803:6080:f934:8894:7eb5:24f9:300:0;branch=z9hG4bK1e5a.0da2ace9cc912d9e5f2595ca4acb9847.0
Via: SIP/2.0/UDP 172.25.10.217:5060;rport=5060;branch=z9hG4bK5cdada8c-cbf0-4369-b02d-cc97d3c36f2b_c3356d0b_54-457463274351249162
Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Record-Route: <sip:wa.meta.vc;transport=tls;lr>
Record-Route: <sip:54.172.60.1:5061;transport=tls;lr;r2=on>
Record-Route: <sip:54.172.60.1;lr;r2=on>
Call-ID: f304a1d2cafb8139c1f9ff93a7733586@0.0.0.0
From: "12145551869" <sip:+12145551869@meta-voip.example.com>;tag=28460006_c3356d0b_5cdada8c-cbf0-4369-b02d-cc97d3c36f2b
To: <sip:+12195550714@wa.meta.vc>;tag=0d185053-2615-46c7-8ff2-250bda494cf1
CSeq: 2 INVITE
Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
Supported: timer
X-FB-External-Domain: wa.meta.vc
Contact: <sip:+12195550714@wa.meta.vc;transport=tls;ob;X-FB-Sip-Smc-Tier=collaboration.sip_gateway.sip.prod>;isfocus
Content-Type: application/sdp
Content-Length:   645

v=0
o=- 1746657286595 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS 42da9643-cb50-4eca-95d3-ca41b3f1f4bb
m=audio 3480 RTP/SAVP 107 101
c=IN IP4 157.240.19.130
a=rtcp:9 IN IP4 0.0.0.0
a=mid:audio
a=sendrecv
a=msid:42da9643-cb50-4eca-95d3-ca41b3f1f4bb WhatsAppTrack1
a=rtcp-mux
a=crypto:**************************************************************************
a=rtpmap:107 opus/48000/2
a=fmtp:107 maxaveragebitrate=20000;maxplaybackrate=16000;minptime=20;sprop-maxcapturerate=16000;useinbandfec=1
a=rtpmap:101 telephone-event/8000
a=maxptime:20
a=ptime:20
a=ssrc:1238967757 cname:WhatsAppAudioStream1
```

### Ligações iniciadas pelo usuário (com mídia do WebRTC)

#### SIP INVITE

```
INVITE sip:+17015558857@meta-voip.example.com;transport=tls SIP/2.0
Via: SIP/2.0/TLS [2803:6080:e888:51aa:d4a4:c5e0:300:0]:33819;rport=33819;received=2803:6080:e888:51aa:d4a4:c5e0:300:0;branch=z9hG4bKPjNvs.IZBnUa1W4l8oHPpk3SUMmcx3MMcE;alias
Max-Forwards: 70
From: "12195550714" <sip:+12195550714@wa.meta.vc>;tag=bbf1ad6e-79bb-4d9c-8a2c-094168a10bea
To: <sip:+17015558857@meta-voip.example.com>
Contact: <sip:+12195550714@wa.meta.vc;transport=tls;ob>;isfocus
Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCAzODg1NTE5NEU1NTBEMTc1RTFFQUY5NjNCQ0FCRkEzRhwYCzE3MDE1NTU4ODU3FQIAAA==
CSeq: 2824 INVITE
Route: <sip:onevc-sip-proxy-dev.fbinfra.net:8191;transport=tls;lr>
X-FB-External-Domain: wa.meta.vc
Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
User-Agent: Facebook SipGateway
Content-Type: application/sdp
Content-Length: 1028

v=0
o=- 1741113186367 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS 632a909f-1060-4369-96a4-7bd03e291ee7
a=ice-lite
m=audio 3480 UDP/TLS/RTP/SAVPF 111 126
c=IN IP4 57.144.135.35
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:1775469887 1 udp 2122260223 57.144.135.35 3480 typ host generation 0 network-cost 50
a=candidate:3355715111 1 udp 2122262783 2a03:2880:f343:131:face:b00c:0:699c 3480 typ host generation 0 network-cost 50
a=ice-ufrag:RmDDkfzkwbexPfbC
a=ice-pwd:*************************
a=fingerprint:********************************************************************************************************
a=setup:actpass
a=mid:audio
a=sendrecv
a=msid:632a909f-1060-4369-96a4-7bd03e291ee7 WhatsAppTrack1
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 maxaveragebitrate=20000;maxplaybackrate=16000;minptime=20;sprop-maxcapturerate=16000;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=maxptime:20
a=ptime:20
a=ssrc:849255537 cname:WhatsAppAudioStream1
```

#### SIP BYE

```
BYE sip:+5559800000693@wa.meta.vc;transport=tls;ob SIP/2.0
Via: SIP/2.0/TLS 137.184.4.155:5061;received=2803:6080:c074:cac:10ed:4b05:400:0;i=8d2dc2
Via: SIP/2.0/TLS 143.198.136.243:35181;rport=38087;received=143.198.136.243
Route: <sip:wa.meta.vc;transport=tls;lr>
Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Max-Forwards: 69
From: <sip:+12145551869@meta-voip.example.com>;tag=NcKQ6mtDKSDQB
To: "5559800000693" <sip:+5559800000693@wa.meta.vc>;tag=92a01092-ee78-4870-865f-bc176203a6bd
Call-ID: outgoing:wacid.HBgPMjAwNzU2OTA0ODY5OTY1FRIAEhggMjQ4QzUwOUQ1REQ0NDUwNENEQzRFMTgwRTNGQjAwNjEcGAsxMjE0NTU1MTg2ORUCAAA
CSeq: 98734935 BYE
User-Agent: SignalWire
Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, MESSAGE, INFO, UPDATE, REGISTER, REFER, NOTIFY
Supported: timer, path, replaces
Reason: Q.850;cause=16;text="NORMAL_CLEARING"
Content-Length: 0
X-Relay-Call-ID: b72c0c65-e319-41b3-afb7-19ebcca05d38
Content-Length:  0
```

#### SIP INVITE (com SDES)

```
INVITE sip:+12145551869@meta-voip.example.com;transport=tls SIP/2.0
            Via: SIP/2.0/TLS [2803:6080:f948:9597::]:57363;rport;branch=z9hG4bKPj3a9f2ad89e4a3df61408aa84f7d9a63e;alias
            Record-Route: <sip:wa.meta.vc;transport=tls;lr>
            Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
            Via: SIP/2.0/TLS [2803:6080:f948:9597:d33c:e00:400:0]:5061;branch=z9hG4bKPj3a9f2ad89e4a3df61408aa84f7d9a63e
            Via: SIP/2.0/TLS [2803:6080:f948:9597:1ac5:cdf8:300:0]:63057;rport=63057;received=2803:6080:f948:9597:1ac5:cdf8:300:0;branch=z9hG4bKPj-phic0sbns27DiP0OlrxRxgLtNg4mio7;alias
            Max-Forwards: 69
            From: "12195550714" <sip:+12195550714@wa.meta.vc>;tag=8a0f7e65-6e9e-4801-bf92-85c3ef2485d9
            To: <sip:+12145551869@meta-voip.example.com>
            Contact: <sip:+12195550714@wa.meta.vc;transport=tls;ob>;isfocus
            Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCA4QkY1MTJCQkNFNTgxMEVFRERFRTUzNTFERkE1MDU0MhwYCzEyMTQ1NTUxODY5FQIAAA
            CSeq: 31159 INVITE
            X-FB-External-Domain: wa.meta.vc
            Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
            User-Agent: Facebook SipGateway
            Content-Type: application/sdp
            Content-Length:   645

v=0
o=- 1746659966980 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS 07092115-d151-427e-8722-26c70936b104
m=audio 3480 RTP/SAVP 111 126
c=IN IP4 157.240.19.130
a=rtcp:9 IN IP4 0.0.0.0
a=mid:audio
a=sendrecv
a=msid:07092115-d151-427e-8722-26c70936b104 WhatsAppTrack1
a=rtcp-mux
a=crypto:**************************************************************************
a=rtpmap:111 opus/48000/2
a=fmtp:111 maxaveragebitrate=20000;maxplaybackrate=16000;minptime=20;sprop-maxcapturerate=16000;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=maxptime:20
a=ptime:20
a=ssrc:1615009994 cname:WhatsAppAudioStream1
```

#### SIP OK (com SDES)

```
SIP/2.0 200 OK
            CSeq: 31159 INVITE
            Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCA4QkY1MTJCQkNFNTgxMEVFRERFRTUzNTFERkE1MDU0MhwYCzEyMTQ1NTUxODY5FQIAAA
            From: "12195550714" <sip:+12195550714@wa.meta.vc>;tag=8a0f7e65-6e9e-4801-bf92-85c3ef2485d9
            To: <sip:+12145551869@meta-voip.example.com>;tag=66596922_c3356d0b_fee164be-566a-4679-a80d-5bfdf1d0aa9e
            Via: SIP/2.0/TLS 157.240.229.209:5061;rport=51830;received=69.171.251.115;branch=z9hG4bKPj3a9f2ad89e4a3df61408aa84f7d9a63e;alias
            Via: SIP/2.0/TLS [2803:6080:f948:9597:d33c:e00:400:0]:5061;branch=z9hG4bKPj3a9f2ad89e4a3df61408aa84f7d9a63e
            Via: SIP/2.0/TLS [2803:6080:f948:9597:1ac5:cdf8:300:0]:63057;rport=63057;received=2803:6080:f948:9597:1ac5:cdf8:300:0;branch=z9hG4bKPj-phic0sbns27DiP0OlrxRxgLtNg4mio7;alias
            Record-Route: <sip:54.172.60.1:5060;lr;r2=on;twnat=sip:69.171.251.115:51830>
            Record-Route: <sip:54.172.60.1:5061;transport=tls;lr;r2=on;twnat=sip:69.171.251.115:51830>
            Record-Route: <sip:wa.meta.vc;transport=tls;lr>
            Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
            Server: Twilio
            Contact: <sip:+172.25.16.223:5060>
            Allow: INVITE, ACK, CANCEL, OPTIONS, BYE, REFER, NOTIFY
            Content-Type: application/sdp
            X-Twilio-CallSid: CAb0d74508fe5fcdf6ec70ea3cf4e9b90b
            Content-Length: 446
            Content-Type: application/sdp
            Content-Length:   446

v=0
o=root 1353670385 1353670385 IN IP4 172.18.164.24
s=Twilio Media Gateway
c=IN IP4 168.86.138.176
t=0 0
m=audio 15822 RTP/SAVP 111 126
a=rtpmap:111 opus/48000/2
a=fmtp:111 maxplaybackrate=16000;sprop-maxcapturerate=16000;maxaveragebitrate=20000;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=fmtp:126 0-16
a=crypto:**************************************************************************
a=ptime:20
a=maxptime:20
a=sendrecv
```

### Ligações iniciadas pelo usuário com autenticação por resumo (com mídia SDES)

O servidor SIP da Meta oferece suporte à autenticação por resumo para ligações iniciadas pelo usuário. Seu servidor SIP deve responder com um desafio de autenticação por resumo. Depois, a Meta reenvia o convite com a resposta ao desafio. O nome de usuário usado para a autenticação de digestão é o número de telefone comercial (normalizado). A senha é gerada pela Meta e pode ser recuperada usando o [ponto de extremidade get Call settings](/documentation/business-messaging/whatsapp/calling/sip#include-sip-user-password).

#### Primeira solicitação INVITE da Meta

```
INVITE sip:+12145551869@meta-voip.example.com;transport=tls SIP/2.0
Via: SIP/2.0/TLS [2803:6080:f948:9597::]:47237;rport;branch=z9hG4bKPj1e6c665db16b3ecacf32cadb4497fe77;alias
Record-Route: <sip:wa.meta.vc;transport=tls;lr>
Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Via: SIP/2.0/TLS [2803:6080:f948:9597:7253:922a:400:0]:5061;branch=z9hG4bKPj1e6c665db16b3ecacf32cadb4497fe77
Via: SIP/2.0/TLS [2803:6080:f8bc:9272:e488:9927:400:0]:58279;rport=58279;received=2803:6080:f8bc:9272:e488:9927:400:0;branch=z9hG4bKPjr33j97A1mx5J8HWHEy2zIgqZYCCIb4Fb;alias
Max-Forwards: 69
From: "12195550714" <sip:+12195550714@wa.meta.vc>;tag=ece2da15-39e7-4983-ac65-e312f325d94a
To: <sip:+12145551869@meta-voip.example.com>
Contact: <sip:+12195550714@wa.meta.vc;transport=tls;ob>;isfocus
Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCA2MUI2QUY0MDRCMTUyOTM4QkE5ODEwN0ZGQTAwODkxORwYCzEyMTQ1NTUxODY5FQIAFRoA
CSeq: 9989 INVITE
X-FB-External-Domain: wa.meta.vc
Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
User-Agent: Facebook SipGateway
Content-Type: application/sdp
Content-Length:   643

v=0
o=- 1750716867913 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS 4e37b099-8aef-45d0-be4f-1cde2ca5a37d
m=audio 3480 RTP/SAVP 111 126
c=IN IP4 57.144.219.49
a=rtcp:9 IN IP4 0.0.0.0
a=mid:audio
a=sendrecv
a=msid:4e37b099-8aef-45d0-be4f-1cde2ca5a37d WhatsAppTrack1
a=rtcp-mux
a=crypto:**************************************************************************
a=rtpmap:111 opus/48000/2
a=fmtp:111 maxaveragebitrate=20000;maxplaybackrate=16000;minptime=20;sprop-maxcapturerate=16000;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=maxptime:20
a=ptime:20
a=ssrc:215879358 cname:WhatsAppAudioStream1
```

#### Resposta 407 do servidor SIP parceiro

```
SIP/2.0 407 Proxy Authentication required
CSeq: 9989 INVITE
Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCA2MUI2QUY0MDRCMTUyOTM4QkE5ODEwN0ZGQTAwODkxORwYCzEyMTQ1NTUxODY5FQIAFRoA
From: "12195550714" <sip:+12195550714@wa.meta.vc>;tag=ece2da15-39e7-4983-ac65-e312f325d94a
To: <sip:+12145551869@meta-voip.example.com>;tag=45065608_c3356d0b_16001fd8-76d2-45f0-bb35-e0441d6dc4a2
Via: SIP/2.0/TLS 31.13.66.215:5061;rport=62080;received=69.171.251.112;branch=z9hG4bKPj1e6c665db16b3ecacf32cadb4497fe77;alias
Via: SIP/2.0/TLS [2803:6080:f948:9597:7253:922a:400:0]:5061;branch=z9hG4bKPj1e6c665db16b3ecacf32cadb4497fe77
Via: SIP/2.0/TLS [2803:6080:f8bc:9272:e488:9927:400:0]:58279;rport=58279;received=2803:6080:f8bc:9272:e488:9927:400:0;branch=z9hG4bKPjr33j97A1mx5J8HWHEy2zIgqZYCCIb4Fb;alias
Contact: <sip:+172.25.58.54:5060>
Proxy-Authenticate: Digest realm="sip.twilio.com",nonce="eyOam_8-l5FVugxsyxFRjnlxq9vy1TjQIMB3mBfJuAvB5gV4",opaque="4a6a068be2ca2032a57912b9a2a6adf7",qop="auth"
Content-Length: 0
Content-Length:  0
```

#### Segundo INVITE com autorização da Meta

```
INVITE sip:+12145551869@meta-voip.example.com;transport=tls SIP/2.0
Via: SIP/2.0/TLS 31.13.66.215:5061;rport;branch=z9hG4bKPj16be0694dc6763eb66de5ec5f262db03;alias
Record-Route: <sip:wa.meta.vc;transport=tls;lr>
Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Via: SIP/2.0/TLS [2803:6080:f948:9597:7253:922a:400:0]:5061;branch=z9hG4bKPj16be0694dc6763eb66de5ec5f262db03
Via: SIP/2.0/TLS [2803:6080:f8bc:9272:e488:9927:400:0]:58279;rport=58279;received=2803:6080:f8bc:9272:e488:9927:400:0;branch=z9hG4bKPjYp9LqI0D8zJ.wly5wyMyVaH9fUwIU921;alias
Max-Forwards: 69
From: "12195550714" <sip:+12195550714@wa.meta.vc>;tag=ece2da15-39e7-4983-ac65-e312f325d94a
To: <sip:+12145551869@meta-voip.example.com>
Contact: <sip:+12195550714@wa.meta.vc;transport=tls;ob>;isfocus
Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCA2MUI2QUY0MDRCMTUyOTM4QkE5ODEwN0ZGQTAwODkxORwYCzEyMTQ1NTUxODY5FQIAFRoA
CSeq: 9990 INVITE
X-FB-External-Domain: wa.meta.vc
Allow: INVITE, ACK, BYE, CANCEL, NOTIFY, OPTIONS
User-Agent: Facebook SipGateway
Proxy-Authorization: Digest username="12145551869", realm="sip.twilio.com", nonce="eyOam_8-l5FVugxsyxFRjnlxq9vy1TjQIMB3mBfJuAvB5gV4", uri="sip:+12145551869@meta-voip.example.com", response="b28ed6b8bf1418e3c6eca05ef8c7a0b1", cnonce="TY2SszvYCKitUCBlVLpGiPKMQfmBbj", opaque="4a6a068be2ca2032a57912b9a2a6adf7", qop=auth, nc=00000001
Content-Type: application/sdp
Content-Length:   643

v=0
o=- 1750716867913 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS 4e37b099-8aef-45d0-be4f-1cde2ca5a37d
m=audio 3480 RTP/SAVP 111 126
c=IN IP4 57.144.219.49
a=rtcp:9 IN IP4 0.0.0.0
a=mid:audio
a=sendrecv
a=msid:4e37b099-8aef-45d0-be4f-1cde2ca5a37d WhatsAppTrack1
a=rtcp-mux
a=crypto:**************************************************************************
a=rtpmap:111 opus/48000/2
a=fmtp:111 maxaveragebitrate=20000;maxplaybackrate=16000;minptime=20;sprop-maxcapturerate=16000;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=maxptime:20
a=ptime:20
a=ssrc:215879358 cname:WhatsAppAudioStream1
```

#### SIP OK do servidor SIP do parceiro

```
SIP/2.0 200 OK
CSeq: 9990 INVITE
Call-ID: outgoing:wacid.HBgLMTIxOTU1NTA3MTQVAgASGCA2MUI2QUY0MDRCMTUyOTM4QkE5ODEwN0ZGQTAwODkxORwYCzEyMTQ1NTUxODY5FQIAFRoA
From: "12195550714" <sip:+12195550714@wa.meta.vc>;tag=ece2da15-39e7-4983-ac65-e312f325d94a
To: <sip:+12145551869@meta-voip.example.com>;tag=29360930_c3356d0b_4933dc58-f035-4597-b075-04b19e552329
Via: SIP/2.0/TLS 31.13.66.215:5061;rport=62080;received=69.171.251.112;branch=z9hG4bKPj16be0694dc6763eb66de5ec5f262db03;alias
Via: SIP/2.0/TLS [2803:6080:f948:9597:7253:922a:400:0]:5061;branch=z9hG4bKPj16be0694dc6763eb66de5ec5f262db03
Via: SIP/2.0/TLS [2803:6080:f8bc:9272:e488:9927:400:0]:58279;rport=58279;received=2803:6080:f8bc:9272:e488:9927:400:0;branch=z9hG4bKPjYp9LqI0D8zJ.wly5wyMyVaH9fUwIU921;alias
Record-Route: <sip:54.172.60.0:5060;lr;r2=on;twnat=sip:69.171.251.112:62080>
Record-Route: <sip:54.172.60.0:5061;transport=tls;lr;r2=on;twnat=sip:69.171.251.112:62080>
Record-Route: <sip:wa.meta.vc;transport=tls;lr>
Record-Route: <sip:onevc-sip-proxy.fbinfra.net:8191;transport=tls;lr>
Contact: <sip:+172.25.43.84:5060>
Allow: INVITE, ACK, CANCEL, OPTIONS, BYE, REFER, NOTIFY
Content-Type: application/sdp
X-Twilio-CallSid: CAd4d6e59a356c4d1b0ee85323b2d9dab5
Content-Length: 444
Content-Type: application/sdp
Content-Length:   444

v=0
o=root 477560318 477560318 IN IP4 172.18.156.61
s=Twilio Media Gateway
c=IN IP4 168.86.137.174
t=0 0
m=audio 12710 RTP/SAVP 111 126
a=rtpmap:111 opus/48000/2
a=fmtp:111 maxplaybackrate=16000;sprop-maxcapturerate=16000;maxaveragebitrate=20000;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=fmtp:126 0-16
a=crypto:**************************************************************************
a=ptime:20
a=maxptime:20
a=sendrecv
```

## Como configurar o SDES para o protocolo de troca de chave do SRTP

A troca de chave do Protocolo de Transporte Seguro em Tempo Real (SRTP) é um protocolo criptográfico usado para trocar com segurança as chaves de criptografia entre duas partes em um canal de comunicação inseguro.

Há duas maneiras de configurar a troca de chave do SRTP:

-   DTLS (padrão): troca de chave criptografada padrão do setor. Recomendado.-   SDES: a chave de texto sem formatação é incluída no SDP, que é enviado por meio de um protocolo de sinalização segura como o SIP ou a Graph API. Quando o SDES é usado, não há necessidade de STUN, ICE e DTLS, o que pode ajudar a reduzir o tempo de configuração da ligação.

### Configurar/atualizar o protocolo de troca de chave do SRTP

#### Sintaxe da solicitação

```
POST /<PHONE_NUMBER_ID>/settings
```

#### Parâmetros do ponto de extremidade

  

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial cujas configurações da API de Ligações estão sendo atualizadas.

[Saiba mais sobre como formatar números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

#### Corpo da solicitação

```
{  "calling": {    "status": "ENABLED",    "call_icon_visibility": "DEFAULT"  . . .    "srtp_key_exchange_protocol": "DTLS (default) | SDES",  . . .  }. . .}
```

#### Parâmetros do corpo

Parâmetro

Descrição

Exemplo de valor

`srtp_key_exchange_protocol`

_String_

**Opcional**

  
Habilite ou desabilite o uso do protocolo de troca de chave SRTP.

Os valores possíveis são `SDES` e `DTLS`.

O padrão é `DTLS`.

Observação: a Meta ainda espera que o lado da empresa envie o pacote SRTP inicial tanto para ligações iniciadas pelo usuário quanto pela empresa

`“SDES”`

#### Resposta de sucesso

```
{  "success": true}
```

### Resposta de erro

[Veja os códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

### Obter o protocolo de troca de chave SRTP

#### Sintaxe da solicitação

```
POST /<PHONE_NUMBER_ID>/settings
```

#### Parâmetros do ponto de extremidade

  

Espaço reservado

Descrição

Exemplo de valor

`<PHONE_NUMBER_ID>`

_Número inteiro_

**Obrigatório**

  
O número de telefone comercial cujas configurações da API de Ligações estão sendo atualizadas.

[Saiba mais sobre como formatar números de telefone na API de Nuvem](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)

`+12784358810`

#### Corpo da resposta

```
{  "calling": {    "status": "ENABLED",    "call_icon_visibility": "DEFAULT"  . . .    "srtp_key_exchange_protocol": "DTLS | SDES",  . . .  }. . .}
```

#### Parâmetros da resposta

Parâmetro

Descrição

Exemplo de valor

`srtp_key_exchange_protocol`

_String_

O tipo de protocolo de troca de chave SRTP configurado para o número de telefone comercial consultado

Os valores possíveis são `SDES` e `DTLS`.

O padrão é `DTLS`.

**Observação: se o campo não tiver sido definido explicitamente, ele não será retornado.**

`“SDES”`

#### Resposta de erro

[Veja os códigos de erro e solução de problemas da API de Ligações para saber mais](/documentation/business-messaging/whatsapp/calling/troubleshooting)

[Veja os códigos de erro gerais da API de Nuvem aqui](/documentation/business-messaging/whatsapp/support/error-codes)

## Endereços IP

Os endereços IP usados para a configuração de SIP são os mesmos listados para os webhooks na [seção Endereços IP de webhooks da API de Nuvem](/documentation/business-messaging/whatsapp/webhooks/overview#ip-addresses).

Essa referência serve apenas para indicar os endereços IP que devem ser incluídos na lista de permissão para o tráfego de SIP. Quando o SIP está habilitado, os webhooks relacionados a ligações não são enviados.

## Solução de problemas

Consulte [Perguntas frequentes sobre o SIP](/documentation/business-messaging/whatsapp/calling/faq#session-initiation-protocol--sip--faq) para mais perguntas e respostas específicas sobre o SIP e [Erros no SIP](/documentation/business-messaging/whatsapp/calling/troubleshooting#sip-errors) para erros e soluções específicas do protocolo

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)