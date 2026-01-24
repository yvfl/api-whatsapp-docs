<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/integration-examples -->
<!-- Scraped: 2026-01-24T00:28:32.891Z -->

# Exemplos de integração

Updated: 6 de nov de 2025

Este guia explica a integração de plataformas VoIP comuns com a API de Ligações Comerciais do WhatsApp.

Este guia tem fins exclusivamente informativos, sem suporte ou garantia de qualquer tipo da Meta ou de qualquer fornecedor. Existem diversas maneiras de integrar, e o guia apresenta apenas uma delas para fins ilustrativos.

## Asterisk usando o SIP

### Visão geral

Este guia explica como configurar a [API de Ligações Comerciais do WhatsApp](/documentation/business-messaging/whatsapp/calling) usando sinalização de SIP com o [Asterisk](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.asterisk.org%2F&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28), um PBX (Private Branch Exchange) de código aberto. Você aprenderá a configurar o servidor Asterisk, conectar telefones SIP e lidar com ligações recebidas e feitas no WhatsApp.

#### Ligações iniciadas pelo usuário

-   O usuário do WhatsApp disca o número comercial.-   A ligação é recebida pelo Asterisk e direcionada por meio de IVR, que solicita ao usuário que insira uma extensão, registrada no mesmo servidor Asterisk.-   Depois, a ligação é conectada à extensão especificada.

#### Ligações iniciadas pela empresa

-   O usuário/agente da empresa se registra no Asterisk usando credenciais de SIP (consulte a seção “[Como configurar um telefone VoIP](#configuring-a-voip-phone)”).-   O usuário comercial disca a extensão B2C (comunicação entre empresa e consumidor), que é gerenciada por um sistema IVR. O IVR solicita o número do WhatsApp para fazer a ligação.-   Depois, a ligação é conectada ao usuário do WhatsApp.

WA – O LEG do Asterisk usará SDES para a troca de chave de criptografia de mídia e opus para codec de áudio

Asterisk – O Sip UA usará SDES para a troca de chave de criptografia de mídia e opus ou G711 para codec de áudio

### Pré-requisitos

-   Implementação do Asterisk: Asterisk implementado (por exemplo, em uma instância pública na nuvem)-   Sistema operacional: qualquer sistema operacional compatível com o Asterisk. Por exemplo: CentOS 9-   Domínio: o servidor Asterisk pode ser acessado por um domínio público com certificado válido-   API do WhatsApp Business: é necessário registrar um número de telefone comercial do WhatsApp e habilitar as ligações.-   Compatibilidade com SIP: o [SIP está habilitado](/documentation/business-messaging/whatsapp/calling/sip#configure-update-sip-settings-on-business-phone-number) no número do WhatsApp Business.-   SDES: o [SDES está habilitado](/documentation/business-messaging/whatsapp/calling/sip#configure-sdes-for-srtp-key-exchange-protocol) no número do WhatsApp Business.

### Como compilar e instalar o Asterisk

Consulte [https://docs.asterisk.org/Getting-Started/Installing-Asterisk/Installing-Asterisk-From-Source/Building-and-Installing-Asterisk/](https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.asterisk.org%2FGetting-Started%2FInstalling-Asterisk%2FInstalling-Asterisk-From-Source%2FBuilding-and-Installing-Asterisk%2F&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28)

Este guia foi testado usando o Asterisk versão 22.5.2

### Configuração do Asterisk

Esses arquivos de configuração ficam em /etc/asterisk/

#### extensions.conf

Substitua os espaços reservados a seguir por valores reais

-   {wa-business-phone-number}: número de telefone do WhatsApp Business-   {asterisk-sip-server-dns}: nome DNS do servidor de SIP do Asterisk-   incoming\_welcome: incoming\_welcome.wav (não fornecido). Coloque este arquivo em /var/lib/asterisk/sounds-   outgoing\_welcome: outgoing\_welcome.wav (não fornecido). Coloque este arquivo em /var/lib/asterisk/sounds

```
[c2b-sub-dial]
exten => s,1,NoOp()
  same => n,Read(Digits,incoming_welcome,0,,5, 500)
  same => n,Dial(PJSIP/${Digits})
  same => n,Hangup()

[whatsapp]
exten => _10XX,1,NoOp()
  same => n,Dial(PJSIP/${EXTEN})
  same => n,Hangup()

;Extension for B2C business call through Meta SIP gateway
exten => b2c-sip,1,NoOp()
  same => n,Read(Digits,outgoing_welcome,0,,5, 500)
  same => n,Dial(PJSIP/whatsapp/sip:${Digits}@wa.meta.vc)

;Extension to handle incoming invite requests from Meta SIP gateway to <wa-business-phone-number>@<asterisk-sip-server-dns>
exten => _+<wa-business-phone-number>,1,Goto(c2b-sub-dial,s,1)
```

#### Pjsip.conf

Substitua os espaços reservados a seguir por valores reais

-   {wa-business-phone-number}: o número de telefone comercial-   {local-net}: rede local do servidor Asterisk-   {external-media-address}: IP público da mídia do servidor Asterisk-   {external-signaling-address}: IP público da sinalização do servidor Asterisk-   {sip-ua-password}: senha escolhida do agente do usuário de SIP-   {domain-name}: nome do domínio atribuído ao servidor Asterisk

Os arquivos de certificado devem ser colocados em /var/lib/asterisk/certs/fullchain.cer /var/lib/asterisk/certs/cer.key

```
[transport-tls]
type=transport
protocol=tls
bind=0.0.0.0:5061
cert_file=/var/lib/asterisk/certs/fullchain.cer
priv_key_file=/var/lib/asterisk/certs/cer.key
method=sslv23
external_media_address={external-media-address}
;External address for SIP signalling
external_signaling_address={external-signaling-address}
;Network to consider local used for NAT purposes
local_net={local-net}

[sdes_endpointtemplate](!)
type=endpoint
context=whatsapp
disallow=all
allow=OPUS
direct_media=no
rtp_symmetric=yes
force_rport=yes
rewrite_contact=no
media_use_received_transport=yes
media_encryption=sdes

[authtemplate](!)
type=auth
auth_type=userpass
password={sip-ua-password}

[aortemplate](!)
type=aor
max_contacts=1
remove_existing=yes

[aoridentitytemplate](!)
type=identify
match_header=X-FB-External-Domain: wa.meta.vc

;SDES users
[1000](sdes_endpointtemplate)
auth=1000_auth
aors=1000

[1000_auth](authtemplate)
username=1000

[1000](aortemplate)

[1000](aoridentitytemplate)
endpoint=1000

[1001](sdes_endpointtemplate)
auth=1001_auth
aors=1001

[1001_auth](authtemplate)
username=1001

[1001](aortemplate)

[1001](aoridentitytemplate)
endpoint=1001

[1002](sdes_endpointtemplate)
auth=1002_auth
aors=1002

[1002_auth](authtemplate)
username=1002

[1002](aortemplate)

[1002](aoridentitytemplate)
endpoint=1002

[1003](sdes_endpointtemplate)
auth=1003_auth
aors=1003

[1003_auth](authtemplate)
username=1003

[1003](aortemplate)

[1003](aoridentitytemplate)
endpoint=1003

[1004](sdes_endpointtemplate)
auth=1004_auth
aors=1004

[1004_auth](authtemplate)
username=1004

[1004](aortemplate)

[1004](aoridentitytemplate)
endpoint=1004

[1005](sdes_endpointtemplate)
auth=1005_auth
aors=1005

[1005_auth](authtemplate)
username=1005

[1005](aortemplate)

[1005](aoridentitytemplate)
endpoint=1005

;This endpoint maps to an IVR for C2B calls
[c2b-sip](sdes_endpointtemplate)

[c2b-sip](aortemplate)

[c2b-sip]
type=identify
endpoint=c2b-sip
match_header=X-FB-External-Domain: wa.meta.vc

;special endpoint for Meta SIP Gateway integration
;This endpoint maps to an IVR for B2C calls
[b2c-sip](sdes_endpointtemplate)

[b2c-sip](aortemplate)

[whatsapp](sdes_endpointtemplate)
type=endpoint
transport=transport-tls
disallow=all
allow=opus,ulaw,alaw
aors=whatsapp
from_user={wa-business-phone-number}
from_domain={domain-name}
outbound_auth=whatsapp

[whatsapp]
type=aor
contact=sip:wa.meta.vc

[whatsapp]
type=identify
endpoint=whatsapp

[whatsapp]
type=auth
auth_type=digest
password={meta-sip-user-password}
username={wa-business-phone-number}
realm=*
```

#### rtp.conf

```
[general]
; Hostname or address for the STUN server used for determining the external
; IP address and port an RTP session can be reached at. The port number is
; optional. If omitted default value of 3478 will be used. This option is
; disabled by default. Name resolution occurs at load time, and if DNS is
; used, name resolution will occur repeatedly after the TTL expires.
;
; e.g. stundaddr=mystun.server.com:3478
;
stunaddr=stun.l.google.com:19302

rtpstart=10000
rtpend=60000
```

### Como configurar um telefone VoIP

Baixe e instale um cliente de telefone por software (por exemplo, [Linphone](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linphone.org%2Fen%2Fdownload&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28)) para testar chamadas iniciadas pela empresa e pelo usuário.

#### Configuração da conta

-   Selecione uma extensão para se cadastrar como um UA do SIP (extensões 1001 a 1005).-   Abra Preferências.-   Em “Contas de SIP”, clique em “Adicionar conta”.-   Insira os seguintes dados:
    -   Endereço de SIP: por exemplo, sip:1001@{asterisk-sip-server-dns}-   Endereço do servidor SIP: por exemplo, sip:{asterisk-sip-server-dns};transport=tls-   Transporte: TLS-   Desabilitar ICE-   Habilitar o AVPF-   Desabilite a opção "Publicar informações de presença"-   Confirme e salve a conta.-   Digite a senha quando solicitado (ou seja, {sip-ua-password})-   Depois de conectar, retorne para Preferências e selecione a aba "Áudio". Habilite todos os codecs de áudio.-   Na aba "Ligações e conversa":
    -   Selecione “Criptografia”-   Escolha "SRTP-SDES".-   Habilite a opção "A criptografia é obrigatória"-   Confirme as configurações

### Lista de verificação final

-   Verifique se os arquivos de configuração incluem os números, as senhas e os nomes de domínio corretos.-   Verifique se o seu firewall permite as portas de SIP (5061/TLS) e de RTP (10000-20000).-   Para saber mais sobre a configuração de senha do SIP, consulte a [documentação da API de Nuvem do WhatsApp](/documentation/business-messaging/whatsapp/calling/sip).

### Solução de problemas

#### Não é possível registrar o UA do SIP

Confirme se o URL do SIP está correto e se o domínio está apontando para o servidor Asterisk. Execute o host {domain-name} para verificar se o endereço IP está apontando para o servidor Asterisk

## FreeSWITCH usando SIP

### Visão geral

Este guia explica como configurar a [API de Ligações Comerciais do WhatsApp](/documentation/business-messaging/whatsapp/calling) usando o sinalizador de SIP com o [FreeSWITCH](https://l.facebook.com/l.php?u=https%3A%2F%2Fsignalwire.com%2Ffreeswitch&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28), uma estrutura de comunicação de código aberto. Você aprenderá a configurar o servidor FreeSWITCH, conectar telefones SIP e lidar com ligações do WhatsApp iniciadas pelo usuário e pela empresa.

#### Ligações iniciadas pelo usuário

-   O usuário do WhatsApp disca o número comercial.-   A ligação é recebida pelo FreeSWITCH e direcionada por meio de IVR, que solicita ao usuário que insira a extensão de um agente, registrada no mesmo servidor FreeSWITCH.-   Depois que a extensão for inserida, a ligação será conectada ao agente especificado.

#### Ligações iniciadas pela empresa

-   O usuário/agente da empresa se registra no FreeSWITCH usando credenciais de SIP (consulte a seção [Como configurar um telefone VoIP](/documentation/business-messaging/whatsapp/calling/integration-examples#configuring-a-voip-phone) para saber mais).-   O usuário empresarial disca a extensão b2c-sip (comunicação entre empresa e consumidor), que é gerenciada por um IVR. Então, o IVR solicita o número do WhatsApp para fazer a ligação.-   Depois que o número é inserido, a ligação é conectada ao usuário do WhatsApp via SIP.

WA – O LEG do FreeSWITCH usa SDES para a troca de chave de criptografia de mídia com Opus como o codec de áudio FreeSWITCH – O LEG SIP UA usa SDES para a troca de chave de criptografia de mídia com codecs de áudio Opus ou G.711.

### Pré-requisitos

-   Implementação do FreeSWITCH: FreeSWITCH implementado (por exemplo, em uma instância pública na nuvem)-   Sistema operacional: qualquer sistema operacional compatível com o FreeSWITCH. Por exemplo: CentOS 9-   Domínio: servidor FreeSWITCH acessível via domínio público com certificado válido-   API do WhatsApp Business: é necessário registrar um número de telefone comercial do WhatsApp e [habilitar as ligações](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings).-   Compatibilidade com SIP: o [SIP está habilitado](/documentation/business-messaging/whatsapp/calling/sip#configure-update-sip-settings-on-business-phone-number) no número do WhatsApp Business.
    -   Observação: o FreeSWITCH é configurado para ouvir a porta 5081 para TLS.-   SDES: o [SDES está habilitado](/documentation/business-messaging/whatsapp/calling/sip#configure-sdes-for-srtp-key-exchange-protocol) no número do WhatsApp Business.

### Como compilar e instalar o FreeSWITCH

Consulte [https://developer.signalwire.com/freeswitch/FreeSWITCH-Explained/Installation/](https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.signalwire.com%2Ffreeswitch%2FFreeSWITCH-Explained%2FInstallation%2F&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28)

Este guia foi testado usando o FreeSWITCH versão 22.5.2. O FreeSWITCH usa Sofia (uma biblioteca de agentes de usuário de código aberto para o protocolo SIP). Sofia v1.13.17 foi usada para este guia

#### Configuração do FreeSWITCH

Esses arquivos de configuração ficam em /usr/share/freeswitch/etc/freeswitch

**wa-biz-api-dialplan.xml**

Coloque o plano de discagem em /usr/share/freeswitch/etc/freeswitch/dialplan/default/wa-biz-api-dialplan.xml

```
<include><extension name="c2b_calls_sip_ivr"><!--Dial plan is selected if the sip request is coming from Meta--><condition field="${sip_from_host}" expression="^wa.meta.vc$"><!--Verify the ip from where the request is coming, compare the ip with the Meta white listed ip's--><action application="check_acl" data="${network_addr} whatsapp_allow normal_clearing"/><!--Enable encrypted media using SDES--><action application="set" data="rtp_secure_media=true"/><action application="answer"/><!--Add silence stream for  1 sec so that the media path is established between whatsapp and freeswitch to avoid audio clipping--><action application="playback" data="silence_stream://1000"/><action application="play_and_get_digits" data="2 5 3 7000 # $${base_dir}/sounds/incoming_welcome.wav  $${base_dir}/sounds/incoming_invalid.wav extension \d+"/><!--While the call is being bridged, play a ringtone for the caller--><action application="set" data="ringback=%(2000, 4000, 440.0, 480.0)"/><!--Offer G711 and Opus for FreeSWITCH-SIP UA leg --><action application="export" data="nolocal:absolute_codec_string=PCMA,PCMU,OPUS@48000h@20i"/><action application="bridge" data="user/${extension}"/><action application="hangup"/></condition></extension><extension name="b2c_calls_ivr"><condition field="destination_number" expression="^b2c-sip$"><!--Enable encrypted media using SDES--><action application="set" data="rtp_secure_media=true"/><action application="answer"/><action application="playback" data="silence_stream://1000"/><action application="set" data="caller_id_check=${caller_id_number}"/><action application="play_and_get_digits" data="2 12 3 20000 # $${base_dir}/sounds/outgoing_welcome.wav $${base_dir}/sounds/outgoing_invalid.wav whatsapp_number \d+"/><action application="log" data="INFO [whatsapp_number] is ${whatsapp_number}"/><!--While the call is being bridged, play a ringtone for the caller--><action application="set" data="ringback=%(2000, 4000, 440.0, 480.0)"/><!--Offer only OPUS--><action application="export" data="nolocal:absolute_codec_string=OPUS@48000h@20i,OPUS@8000h@20i"/><!--Bridge the call by calling META SIP with the WA Number--><action application="bridge" data="sofia/gateway/whatsapp/+${whatsapp_number}"/><action application="hangup"/></condition></extension></include>
```

Os arquivos de áudio devem ser colocados em /usr/share/freeswitch/sounds (não fornecidos)

-   incoming\_welcome.wav-   Incoming\_invalid.wav-   outgoing\_welcome.wav-   outgoing\_invalid.wav

**whatsapp.xml**

Este arquivo configura o portal do WhatsApp. Copie o arquivo para /usr/share/freeswitch/etc/freeswitch/sip\_profiles/external/whatsapp.xml

```
<!--Gateway configuration for Meta SIP--><!--replace {phone-number},{meta-sip-password} and {domain-name} before starting FreeSWITCH--><include><gateway name="whatsapp"><param name="username" value="{phone-number}"/><param name="password" value="{meta-sip-password}"/><param name="register" value="false"/><param name="realm" value="wa.meta.vc"/><param name="from-user" value="{phone-number}"/><param name="from-domain" value="{domain-name}"/></gateway></include>
```

Substitua os espaços reservados a seguir por valores reais

-   {phone-number}: número de telefone do WhatsApp Business-   {meta-sip-password}: senha de SIP emitida pela Meta. Para saber mais sobre a configuração de senha do SIP, consulte a [documentação da API de Nuvem do WhatsApp](/documentation/business-messaging/whatsapp/calling/sip#include-sip-user-password).-   {domain-name}: nome DNS do seu servidor SIP FreeSWITCH

**acl.conf.xml**

Abra /usr/share/freeswitch/etc/freeswitch/autoload\_configs/acl.conf.xml

Adicione a seguinte lista no elemento `network-lists`.

```
<!--IP addresses from Meta that are allowed to send SIP requests via the gateway. Keep this up to date--><list name="whatsapp_allow" default="deny"><node type="allow" cidr="31.13.24.0/21"/><node type="allow" cidr="31.13.64.0/18"/><node type="allow" cidr="45.64.40.0/22"/><node type="allow" cidr="57.141.0.0/21"/><node type="allow" cidr="57.141.8.0/22"/><node type="allow" cidr="57.141.12.0/23"/><node type="allow" cidr="57.144.0.0/14"/><node type="allow" cidr="66.220.144.0/20"/><node type="allow" cidr="69.63.176.0/20"/><node type="allow" cidr="69.171.224.0/19"/><node type="allow" cidr="74.119.76.0/22"/><node type="allow" cidr="102.132.96.0/20"/><node type="allow" cidr="103.4.96.0/22"/><node type="allow" cidr="129.134.0.0/16"/><node type="allow" cidr="147.75.208.0/20"/><node type="allow" cidr="157.240.0.0/16"/><node type="allow" cidr="163.70.128.0/17"/><node type="allow" cidr="163.77.128.0/17"/><node type="allow" cidr="173.252.64.0/18"/><node type="allow" cidr="179.60.192.0/22"/><node type="allow" cidr="185.60.216.0/22"/><node type="allow" cidr="185.89.216.0/22"/><node type="allow" cidr="204.15.20.0/22"/></list>
```

**vars.xml**

Modifique /usr/share/freeswitch/etc/freeswitch/vars.xml

```
Add line <X-PRE-PROCESS cmd="set" data="rtp_secure_media=mandatory"/> under <include>

Replace
  <X-PRE-PROCESS cmd="set" data="default_password=1234"/>
with (substitute {sip_ua_password} with your password)
  <X-PRE-PROCESS cmd="set" data="default_password={sip-ua-password}"/>

Replace
  <X-PRE-PROCESS cmd="set" data="domain=$${local_ip_v4}"/>
with (substitute {domain-name} with your FreeSWITCH sip server dns)
  <X-PRE-PROCESS cmd="set" data="domain={domain-name}”/>

Replace
  <X-PRE-PROCESS cmd="stun-set" data="external_sip_ip=stun:stun.freeswitch.org"/>
with (substitute {external-ip} with your FreeSWITCH public ip)
  <X-PRE-PROCESS cmd="set" data="external_sip_ip={external-ip}"/>

Replace
  <X-PRE-PROCESS cmd="stun-set" data="external_rtp_ip=stun:stun.freeswitch.org"/>
with (substitute {external-ip} with your FreeSWITCH public ip)
  <X-PRE-PROCESS cmd="stun-set" data="external_rtp_ip={external-ip}"/>
```

**internal.xml**

Modifique /usr/share/freeswitch/etc/freeswitch/sip\_profiles/internal.xml. Procure por

```
<param name="sip-trace" value="no"/>
```

Substitua por

```
<param name="sip-trace" value="yes"/>
```

**external.xml**. Modifique /usr/share/freeswitch/etc/freeswitch/sip\_profiles/external.xml

```
Replace
  <param name="sip-trace" value="no"/>
with
  <param name="sip-trace" value="yes"/>

Replace
  <param name="tls" value="$${external_ssl_enable}"/>
with
  <param name="tls" value="true"/>

Replace
  <!--<param name="tls-cert-dir" value=""/>-->
with
  <param name="tls-cert-dir" value="/usr/share/freeswitch/etc/freeswitch/certs"/>
```

Verifique se os certificados estão em /usr/share/freeswitch/etc/freeswitch/certs.

### Lista de verificação final

-   Verifique se os arquivos de configuração incluem os números, as senhas e os nomes de domínio corretos.-   Verifique se o seu firewall permite as portas de SIP (5081/TLS) e de RTP (10000-20000).-   Para saber mais sobre a configuração de senha do SIP, consulte a [documentação da API de Nuvem do WhatsApp](/documentation/business-messaging/whatsapp/calling/sip#include-sip-user-password).

### Solução de problemas

#### Não é possível registrar o UA do SIP

Confirme se o URL do SIP está correto e se o domínio está apontando para o servidor Freeswitch. Execute o host {domain-name} para verificar se o endereço IP está apontando para o servidor Freeswitch

#### Rastrear mensagens de SIP

Inicie o CLI (/usr/share/freeswitch/bin/fs\_cli) para visualizar mensagens de SIP

## FreeSWITCH usando a Graph API e sinalização de webhook

### Visão geral

Este guia explica como configurar a [API de Ligações Comerciais do WhatsApp](/documentation/business-messaging/whatsapp/calling) usando [sinalização da API de Nuvem do WhatsApp](/documentation/business-messaging/whatsapp/calling/business-initiated-calls) com [FreeSWITCH](https://l.facebook.com/l.php?u=https%3A%2F%2Fsignalwire.com%2Ffreeswitch&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28), uma estrutura de comunicação de código aberto e [Janus](https://l.facebook.com/l.php?u=https%3A%2F%2Fjanus.conf.meetecho.com%2F&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28), um servidor WebRTC de uso geral. Você aprenderá a configurar o servidor FreeSWITCH, conectar telefones SIP e lidar com ligações recebidas e feitas no WhatsApp.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/572080785_1362494772245673_6325189235439218390_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=nr5_57zpLggQ7kNvwGzIDqc&_nc_oc=Adncy0FoN7hiVbt7c--tSV-S1OaJoPNFZs8qATvLOJBjkhMUwE3s5XrXCIw8-kIL14k&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=EF87BEZ1IhvM_SV2lmcb6w&oh=00_AfpMwnlPTFySxtraHGUusHoxk1L-v2R46oWpH8ksy0crPw&oe=698E4131)

#### Ligações iniciadas pelo usuário

-   O usuário do WhatsApp disca o número comercial.-   A ligação é recebida pelo servidor de webhook que a encaminha para o servidor FreeSWITCH via plugin Janus SIP.-   A ligação é recebida pelo FreeSWITCH e direcionada por meio de IVR, que solicita ao usuário que insira uma extensão, registrada no mesmo servidor FreeSWITCH.-   Depois, a ligação é conectada à extensão especificada.

#### Ligações iniciadas pela empresa

-   O usuário/agente da empresa se registra no FreeSWITCH usando credenciais de SIP (consulte a seção "[Como configurar um telefone VoIP](/documentation/business-messaging/whatsapp/calling/integration-examples#configuring-a-voip-phone)").-   O usuário empresarial disca a extensão b2c-sip (comunicação entre empresa e consumidor), que é gerenciada por um IVR. O IVR solicita o número do WhatsApp para fazer a ligação.-   O FreeSWITCH conecta a ligação à extensão registrada no plugin Janus SIP, que a traduz em uma solicitação de API para a Meta.-   Depois, a ligação é conectada ao usuário do WhatsApp.

O servidor Janus fica entre o WA e o FreeSWITCH e converte mídia do WA (compatível com WebRTC com troca de chave DTLS) em mídia negociada pelo FreeSWITCH (troca de chave SDES).

Asterisk – O SIP UA usará SDES para a troca de chave de criptografia de mídia e Opus ou G711 para codec de áudio

### Pré-requisitos

-   Implementação do FreeSWITCH: FreeSWITCH implementado (por exemplo, em uma instância pública na nuvem)-   Implementação do Janus: pode ser implementado na mesma máquina que o FreeSWITCH-   Sistema operacional: qualquer sistema operacional compatível com o FreeSWITCH. Por exemplo: CentOS 9-   Domínio: os servidores FreeSWITCH e Webhook podem ser acessados por um domínio público com certificado válido-   API do WhatsApp Business: é necessário registrar um número de telefone comercial do WhatsApp e [habilitar as ligações](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings).-   Webhooks: configure o URL de retorno de ligação do webhook apontando para o nome de domínio do servidor de webhook

### Integração com sinalização da API de Nuvem

Será necessário implementar um módulo de integração entre o WhatsApp e o Janus para traduzir as mensagens de sinalização da API de Nuvem para o plugin Janus SIP e vice-versa.

Você precisará do seguinte:

-   Um servidor de webhook para receber eventos de webhook de ligações da Meta-   Um módulo da Graph API para enviar mensagens de ligação para a Meta-   Uma implementação do [plugin Janus para SIP](https://l.facebook.com/l.php?u=https%3A%2F%2Fjanus.conf.meetecho.com%2Fdocs%2Fsip&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28) para conectar ao Janus. A implementação do plugin Janus se conectará ao FreeSWITCH usando a extensão 1000, que é reservada para conexão

Ligações iniciadas pela empresa

-   O módulo receberá um convite de SIP por meio do plugin Janus SIP na extensão 1000. O SIP INVITE é convertido em uma [solicitação da Graph API](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#initiate-call). O SDP recebido no SIP INVITE é enviado verbatim como a oferta do SDP para o WA por meio da chamada da Graph API-   Quando a ligação é aceita pelo usuário do WhatsApp, um webhook é recebido. Ao receber o webhook, o plugin SIP Janus aceita o SIP INVITE, passando o SDP de resposta no [webhook de conexão](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-connect-webhook)

Ligações iniciadas pelo usuário

-   O servidor de webhook recebe uma ligação por meio de uma mensagem de webhook contendo o SDP da oferta. Ao receber o convite de ligação, o plugin SIP Janus envia um convite para o FreeSWITCH via extensão 1000. A extensão de destino é **c2b-sip.**-   Quando o plugin SIP Janus recebe o 200 OK do SIP, um pedido de aceitação de ligação via Graph API é enviado para a Meta para aceitar a ligação recebida, transmitindo o SDP recebido como parte da resposta do SIP.

### Como compilar e instalar o Janus

Consulte [https://github.com/meetecho/janus-gateway](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Fmeetecho%2Fjanus-gateway&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28). Este guia foi testado usando a versão 1.3.3

### Configuração do Janus

**janus.jcfg**

Modifique o janus.jcfg, que pode ser encontrado em /usr/share/janus/etc/janus/janus.jcfg. Defina nat\_1\_1\_mapping para o IP público do servidor Janus.

Para iniciar o Janus

```
/usr/share/janus/bin/janus  --debug-level=6 --libnice-debug=on -S stun.l.google.com:19302 --log-file=/var/log/janus.log --config=/usr/share/janus/etc/janus/janus.jcfg
```

### Como compilar e instalar o FreeSWITCH

Consulte [https://developer.signalwire.com/freeswitch/FreeSWITCH-Explained/Installation/](https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.signalwire.com%2Ffreeswitch%2FFreeSWITCH-Explained%2FInstallation%2F&h=AT01XdDaDlKwME36VMVEY5oITOXwHjqzPV2wEnYietTEE_6uM2gcABBISADz8MxFX22bBH43bn0NMbSCJAwmqNUz1fWip5xu_ozYSQJJXtMGvS22Xt5uTf6lLVL8EbSvfirxyaGvehOrP_rkXgVfB3pOB28)

Este guia foi testado usando o FreeSWITCH versão 22.5.2. O FreeSWITCH usa Sofia (uma biblioteca de agentes de usuário de código aberto para o protocolo SIP). Sofia v1.13.17 foi usada para este guia

**Configuração do FreeSWITCH** Esses arquivos de configuração ficam em /usr/share/freeswitch/etc/freeswitch

**wa-biz-api-dialplan.xml**

Coloque o plano de discagem em /usr/share/freeswitch/etc/freeswitch/dialplan/default/wa-biz-api-dialplan.xml

```
<include><extension name="c2b_calls_ivr"><condition field="destination_number" expression="^c2b-sip$"><action application="set" data="rtp_secure_media=true"/><action application="answer"/><!--Add silence stream for  1 sec so that the media path is established between whatsapp and freeswitch to avoid audio clipping. TODO: Investigate if silence can be removed--><action application="playback" data="silence_stream://1000"/><action application="play_and_get_digits" data="2 5 3 7000 # $${base_dir}/sounds/incoming_welcome.wav  $${base_dir}/sounds/incoming_invalid.wav extension \d+"/><!--While the call is being bridged, play a ringtone for the caller--><action application="set" data="ringback=%(2000, 4000, 440.0, 480.0)"/><!--WA calls bridged via Janus through extension 1000 only support OPUS. However, the callee might be restricted to other codecs e.g. G722--><!--Therefore , don't restrict to OPUS for C2B calls and offer more codecs to the caller. Transcoding between OPUS and the negotiated codec by the caller--><!--will happen in freeswitch--><action application="export" data="nolocal:absolute_codec_string=PCMA,PCMU,OPUS@48000h@20i,G722"/><action application="bridge" data="user/${extension}"/><action application="hangup"/></condition></extension><extension name="b2c_calls_ivr"><condition field="destination_number" expression="^b2c-sip$"><action application="set" data="rtp_secure_media=true"/><action application="answer"/><action application="playback" data="silence_stream://1000"/><action application="set" data="caller_id_check=${caller_id_number}"/><action application="log" data="INFO [caller id ] is ${caller_id_check}"/><action application="play_and_get_digits" data="2 12 3 20000 # $${base_dir}/sounds/outgoing_welcome.wav $${base_dir}/sounds/outgoing_invalid.wav whatsapp_number \d+"/><action application="log" data="INFO [whatsapp_number] is ${whatsapp_number}"/><!--Add the whatsapp number entered by the user as a custom sip header, Janus will use this WA user number in API request to Meta--><action application="export" data="sip_h_X-WhatsApp-Number=${whatsapp_number"/><!--While the call is being bridged, play a ringtone for the caller--><action application="set" data="ringback=%(2000, 4000, 440.0, 480.0)"/><!--WA calls bridged via Janus through extension 1000 only support OPUS. However, the caller might be restricted to other codecs e.g. G722--><!--Therefore , don't restrict to OPUS for B2C calls and let caller select other codecs--><!--However, force transcoding to OPUS by only offering OPUS to Janus--><action application="export" data="nolocal:absolute_codec_string=OPUS@48000h@20i,PCMU,PCMA"/><!--Bridge the call to extension 1000 to which capi-calling is registered via Janus to route calls to WhatsApp--><action application="bridge" data="user/1000"/><action application="hangup"/></condition></extension></include>
```

Os arquivos de áudio devem ser colocados em /usr/share/freeswitch/sounds (não fornecidos)

-   incoming\_welcome.wav-   Incoming\_invalid.wav-   outgoing\_welcome.wav-   outgoing\_invalid.wav

**internal.xml**

Modifique /usr/share/freeswitch/etc/freeswitch/sip\_profiles/internal.xml. Procure por

```
<param name="sip-trace" value="no"/>
```

Substitua por

```
<param name="sip-trace" value="yes"/>
```

### Como configurar um telefone VoIP

Consulte a [seção anterior](/documentation/business-messaging/whatsapp/calling/integration-examples#configuring-a-voip-phone).

### Lista de verificação final

-   Verifique se os arquivos de configuração incluem os números, as senhas e os nomes de domínio corretos.-   Verifique se o seu firewall permite as portas de SIP (5061/TLS) e de RTP (10000-20000).-   Para saber mais sobre a configuração de senha do SIP, consulte a [documentação da API de Nuvem do WhatsApp](/documentation/business-messaging/whatsapp/calling/sip).

### Solução de problemas

#### Não é possível registrar o UA do SIP

Confirme se o URL do SIP está correto e se o domínio está apontando para o servidor Asterisk. Execute o host {domain-name} para verificar se o endereço IP está apontando para o servidor Asterisk

#### Rastrear mensagens de SIP

Inicie o CLI (/usr/share/freeswitch/bin/fs\_cli) para visualizar mensagens de SIP

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)