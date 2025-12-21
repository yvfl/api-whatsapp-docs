<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/data-privacy-and-security -->
<!-- Scraped: 2025-12-20T17:54:52.178Z -->

# Privacidade e segurança de dados

Updated: 29 de out de 2025

Esta página descreve como a Meta fornece a API de Nuvem como um serviço independente para as empresas enviarem mensagens a usuários em escala pelo WhatsApp. A Meta também oferece serviços opcionais adicionais que as empresas podem escolher usar com a API de Nuvem. Por exemplo, um negócio pode utilizar os recursos de IA da Meta para conversar com os clientes por meio da API de Nuvem. Quando uma empresa opta por utilizar esses serviços, podem ser aplicados termos diferentes. Consulte a documentação aplicável para obter detalhes adicionais sobre como a Meta processa os dados desses serviços.

## Fluxos de mensagem

Quando o usuário envia uma mensagem a uma empresa que usa a API de Nuvem, a mensagem transita criptografada via WhatsApp entre o usuário e a API de Nuvem. Ao ser recebida pela API de Nuvem, a mensagem é descriptografada e encaminhada à empresa. Quando a empresa usa a API de Nuvem para enviar mensagem a um usuário, ocorre o caminho inverso. Ao receber a mensagem da empresa, a API de Nuvem criptografa a mensagem usando o protocolo Signal antes de enviá-la ao usuário via WhatsApp. Com o protocolo Signal, o usuário e a API de Nuvem, em nome da empresa, negociam chaves de criptografia e estabelecem um canal seguro de comunicação.

O WhatsApp atua como o canal de transporte. O WhatsApp protege o usuário ao detectar padrões de mensagem atípicos (como uma empresa tentando enviar mensagem a todos os usuários) e coletar denúncias de spam dos usuários. A API de Nuvem, operada pela Meta, atua como intermediária entre o WhatsApp e as empresas que usam a API. Ou seja, as empresas permitem que a API de Nuvem opere em nome delas.

De acordo com os conceitos de "processador de dados" ou "provedor de serviços" reconhecidos por leis de proteção dos dados ou privacidade aplicáveis, a Meta, ao fornecer o serviço da API de Nuvem, atua como processador de dados/provedor de serviços em nome da empresa, conforme definido nessas leis. A API de Nuvem somente usará as mensagens processadas em nome e sob instrução da empresa, a menos que especificado de outra forma. A API de Nuvem não usará as mensagens de WhatsApp para selecionar os anúncios que uma pessoa vê.

Para saber mais sobre fluxos de mensagem e criptografia, consulte o [relatório técnico Visão Geral da Criptografia do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Fsecurity%2FWhatsApp-Security-Whitepaper.pdf&h=AT1wFQ80vLkEcV7A0S5UXXIX2wHIGh7AL4cSHoVHd1Ni2MsyG2wKJvHTbD1fU0fq2ssFRy888Fik7UV2x9fN-f52dF4i1Y2tBFxnCEkWNovR5vAkK20ODerKceYOrVW_VTYYOq7OGP0lGe6F4RUS-aqXOGI).

## Dados armazenados e coletados

Todos os dados coletados, armazenados e acessados pela API de Nuvem são controlados e monitorados para garantir uso adequado e manter um nível elevado de privacidade.

**Dados da empresa.** As informações das empresas (números de telefone comerciais, endereço comercial, entre outros) são mantidas pela Meta e pelo Meta Business Suite/Gerenciador de Negócios e estão sujeitas aos termos de serviço da Meta.

**Dados da mensagem.** As mensagens são retidas por no máximo 30 dias para fornecer recursos básicos e funcionalidades do serviço da API de Nuvem (como retransmissões).

**Dados do usuário.** Os identificadores são usados como fonte/destino de mensagens individuais. Eles são excluídos 30 dias depois da última atualização de status (enviada, entregue, lida) de uma mensagem, a menos que especificado de outra forma.

Para ver mais detalhes sobre o armazenamento e o processamento de dados da API de Nuvem, acesse a [Central de Conformidade do Business Messaging](https://www.facebook.com/business/business-messaging/compliance/), que inclui as certificações e a documentação de conformidade da API de Nuvem.

## Perguntas frequentes

**A Meta usa as mensagens de WhatsApp que são compartilhadas com ela por uma empresa para fins de publicidade?**

A API de Nuvem não usará as mensagens de WhatsApp para selecionar os anúncios que uma pessoa vê. Contudo, como é sempre o caso, as empresas podem usar as mensagens que receberem para seus próprios fins de marketing, o que pode incluir publicidade no Facebook e em outros canais, como email ou TV.

**Onde ficam os servidores da API de Nuvem?**

A API de Nuvem processa mensagens em servidores dos data centers da Meta, que estão localizados [neste link](https://l.facebook.com/l.php?u=https%3A%2F%2Fdatacenters.atmeta.com%2Fall-locations%2F&h=AT1wFQ80vLkEcV7A0S5UXXIX2wHIGh7AL4cSHoVHd1Ni2MsyG2wKJvHTbD1fU0fq2ssFRy888Fik7UV2x9fN-f52dF4i1Y2tBFxnCEkWNovR5vAkK20ODerKceYOrVW_VTYYOq7OGP0lGe6F4RUS-aqXOGI). Se a empresa optar por usar o Armazenamento Local da API de Nuvem, os dados de mensagens serão armazenados em data centers localizados em outro país designado. Uma lista de locais compatíveis com o Armazenamento Local é fornecida [neste link](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#limitations).

**A API de Nuvem é criptografada de ponta a ponta? Qual é o modelo de criptografia?**

Veja [Visão geral da API de Nuvem, Criptografia](/documentation/business-messaging/whatsapp/about-the-platform#encryption).

**O que acontece com os dados de mensagens em repouso? Por quanto tempo eles são armazenados?**

As mensagens da API de Nuvem em repouso são criptografadas. As mensagens são retidas por no máximo 30 dias para fornecer recursos básicos e funcionalidades do serviço da API de Nuvem (como retransmissões).

**A Meta tem acesso a chaves de criptografia?**

Para enviar e receber mensagens por meio da API de Nuvem, essa API gerencia as chaves de criptografia/descriptografia em nome da empresa. Para saber mais, veja o [Relatório técnico Visão Geral da Criptografia do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Fsecurity%2FWhatsApp-Security-Whitepaper.pdf&h=AT1wFQ80vLkEcV7A0S5UXXIX2wHIGh7AL4cSHoVHd1Ni2MsyG2wKJvHTbD1fU0fq2ssFRy888Fik7UV2x9fN-f52dF4i1Y2tBFxnCEkWNovR5vAkK20ODerKceYOrVW_VTYYOq7OGP0lGe6F4RUS-aqXOGI).

**Qual é o modelo de segurança? Quais certificações a API de Nuvem tem?**

Obtivemos os relatórios SOC 2 Tipo II e ISO 27001. Para saber mais, acesse a [Central de Conformidade para Meta Business Messaging](https://www.facebook.com/business/business-messaging/compliance).

**Como a API de Nuvem cumpre as leis regionais de proteção de dados (como o RGPD, a LGPD e a PDPB)?**

A Meta leva a proteção dos dados e a privacidade das pessoas muito a sério e cumpre todos os requisitos legais, regulamentares e do setor aplicáveis que regem a proteção de dados, bem como as boas práticas do setor. Os clientes da API de Nuvem devem cumprir as próprias obrigações de acordo com as leis de proteção de dados, como o Regulamento Geral sobre a Proteção de Dados (RGPD). Para saber mais, acesse a [Central de Conformidade para Meta Business Messaging](https://www.facebook.com/business/business-messaging/compliance).

**O que a Meta e o WhatsApp fazem para garantir a conformidade das transferências de dados da UE e/ou do Reino Unido para os Estados Unidos?**

A Meta e o WhatsApp contam com os mecanismos apropriados de transferência compatíveis com o RGPD ao transferir dados da UE e/ou do Reino Unido para os Estados Unidos.

Para mais informações, consulte os seguintes termos legais:

-   Para todos os clientes: consulte os [Termos de Hospedagem da Meta para a API de Nuvem](https://www.facebook.com/legal/Meta-Hosting-Terms-Cloud-API).-   Para clientes na Região Europeia: consulte o [Adendo sobre Transferência de Dados do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-data-transfer-addendum&h=AT1wFQ80vLkEcV7A0S5UXXIX2wHIGh7AL4cSHoVHd1Ni2MsyG2wKJvHTbD1fU0fq2ssFRy888Fik7UV2x9fN-f52dF4i1Y2tBFxnCEkWNovR5vAkK20ODerKceYOrVW_VTYYOq7OGP0lGe6F4RUS-aqXOGI).-   Para clientes no Reino Unido: consulte o [Adendo sobre a Transferência de Dados do WhatsApp Business no Reino Unido](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-data-transfer-addendum-uk&h=AT1wFQ80vLkEcV7A0S5UXXIX2wHIGh7AL4cSHoVHd1Ni2MsyG2wKJvHTbD1fU0fq2ssFRy888Fik7UV2x9fN-f52dF4i1Y2tBFxnCEkWNovR5vAkK20ODerKceYOrVW_VTYYOq7OGP0lGe6F4RUS-aqXOGI).

Para ver uma lista aplicável de subprocessadores: consulte os [Termos de Tratamento de Dados do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-data-processing-terms&h=AT1wFQ80vLkEcV7A0S5UXXIX2wHIGh7AL4cSHoVHd1Ni2MsyG2wKJvHTbD1fU0fq2ssFRy888Fik7UV2x9fN-f52dF4i1Y2tBFxnCEkWNovR5vAkK20ODerKceYOrVW_VTYYOq7OGP0lGe6F4RUS-aqXOGI) ou os [Termos de Hospedagem da Meta para a API de Nuvem](https://www.facebook.com/legal/Meta-Hosting-Terms-Cloud-API).

Nós vamos garantir que nossas empresas e nossos parceiros possam continuar aproveitando as soluções empresariais enquanto mantêm seus dados em segurança.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)