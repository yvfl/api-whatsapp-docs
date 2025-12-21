<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/app-review -->
<!-- Scraped: 2025-12-20T17:47:59.313Z -->

# Análise do App

Updated: 6 de nov de 2025

A Análise do App faz parte do [desenvolvimento](/docs/development) e permite que verifiquemos se o app usa nossos produtos e APIs de uma forma que aprovamos. A Meta precisa validar a forma com que você pretende usar as permissões solicitadas para garantir a conformidade com nossos requisitos e políticas.

Primeiro, as empresas precisam criar um protótipo do produto para demonstrar o caso de uso em uma gravação de vídeo e enviar na análise do app. Para que seu app seja aprovado no processo de análise, é importante que você solicite apenas as permissões de que ele realmente precisa. **Solicitar permissões desnecessárias é uma razão comum para rejeição** durante a análise do app.

Assista ao vídeo a seguir para ver um breve panorama do processo de análise do app:

  

Os apps de empresa são automaticamente aprovados para [acesso padrão](/docs/graph-api/overview/access-levels#standard-access) em todas as permissões e recursos disponíveis nesse tipo. Dessa maneira, você pode testar o app enquanto estiver nesse nível de acesso. Verifique se os usuários de teste têm a função de `developer` ou `admin` no app da Meta que está sendo usado para implementar o cadastro incorporado. **Isso significa que, se você estiver usando a API para uso próprio como desenvolvedor direto, não precisará ter acesso avançado nem passar pela análise do app.**

**Caso você esteja criando um app que será usado por outras empresas, solicite acesso avançado a todas as permissões exigidas pelo app.** Você pode solicitar o [Advanced Access](/docs/graph-api/overview/access-levels#advanced-access) enviando seu app para análise.

## Permissões

Confira as permissões mais solicitadas e o que incluir para receber acesso avançado:

Permissão

Descrição

O que incluir no envio

[whatsapp\_business\_management](/docs/permissions#w)

Com a permissão **whatsapp\_business\_management**, o app pode ler e/ou gerenciar ativos de negócios do WhatsApp que você possui ou aos quais obteve acesso por meio de outras empresas. Esses ativos incluem contas do WhatsApp Business, telefones comerciais, modelos de mensagem, QR codes e mensagens relacionadas, bem como assinaturas de webhook.

**Por escrito:** explique como você usará esta permissão para acessar os ativos de negócios dos clientes empresariais que foram integrados à plataforma.

**Vídeo:** grave um vídeo do seu app, ou do Gerenciador do WhatsApp, sendo usado para criar um modelo de mensagem.

[whatsapp\_business\_messaging](/docs/permissions#w)

Com a permissão **whatsapp\_business\_messaging**, o app pode enviar mensagens do WhatsApp e fazer chamadas para um número de telefone específico, carregar e recuperar mídia de mensagens, gerenciar e obter informações do perfil do WhatsApp Business e registrar os números de telefones com a Meta.

**Por escrito:** explique qual funcionalidade de mensagens seu app oferece aos clientes empresariais que foram integrados à plataforma e como essas funções serão executadas.

**Vídeo:** grave um vídeo que mostre seu app sendo usado para enviar uma mensagem a um número do WhatsApp, e o cliente do WhatsApp (seja web ou app para celular) recebendo e exibindo a mensagem enviada. Se quiser, você pode acessar **Painel de Apps** > **WhatsApp** > **Configuração da API** para gerar uma solicitação cURL que poderá ser integrada ao seu app para enviar a mensagem.

Caso você esteja trabalhando com um parceiro de soluções e planeje usar a API dele, peça ao parceiro que compartilhe um vídeo com você para poder encaminhá-lo como parte do seu envio.

[whatsapp\_business\_manage\_events](/docs/permissions#w)

Solicite essa permissão somente se estiver usando a [API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview) com a [API de Conversões](/docs/marketing-api/conversions-api).

Com a permissão **whatsapp\_business\_manage\_events**, seu app pode registrar eventos como compra, adição ao carrinho, leads e muito mais, em nome de uma conta do WhatsApp Business administrada por um usuário do app. O uso permitido dessa permissão é registrar eventos em contas do WhatsApp Business e enviar esses dados de atividade à Meta para relatórios, otimização e direcionamento de anúncios.

A permissão é aprovada automaticamente se você já tiver acesso avançado à permissão `whatsapp_business_messaging`.

O tempo médio de resposta de análises do app é de aproximadamente 24 horas. Recomendamos iniciar o processo de análise do app o mais rápido possível. Para fazer isso, não é preciso esperar pela implementação completa do cadastro incorporado.

## Reduzir as chances de rejeição na Análise do App

Você deve solicitar acesso avançado para as permissões acima. Se você for um parceiro de solução usando a API Local, não será necessário solicitar a permissão `whatsapp_business_messaging`.

É possível solicitar todas essas permissões em um envio em massa ou em envios separados. Você precisa enviar uma explicação e uma gravação de tela específicas para cada permissão.

Como parte do envio, é necessário incluir gravações de tela separadas que mostrem como o app usa cada permissão. O vídeo pode ser uma gravação de tela feita diretamente do seu computador ou uma gravação usando uma câmera digital ou um celular com câmera. Você precisará anexar esse arquivo ao seu envio para a análise do app.

Não envie um vídeo que inclua várias permissões para diferentes casos de uso. É preciso enviar um vídeo específico para cada permissão. Seu envio poderá ser rejeitado se você destacar várias permissões sendo usadas no mesmo vídeo.

É obrigatório enviar descrições escritas e gravações de tela para cada permissão. Se você incluir uma gravação de tela que mostre como o app usa a permissão, mas não incluir uma descrição do uso, o envio será rejeitado.

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/496716242_1475889623405133_5410416263043243743_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=HFfHSxrNGgMQ7kNvwF1wnZU&_nc_oc=Adn_J20tr9t64VO7IuhWlCT2yk4YK2CzGMj2gtnwKEbOiGC-HyEZGG31yVAjH18zLds&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=g2OibVZp2yVZjHA_TYmhHA&oh=00_Afm-YvMpB6HwJ57pPGRTUsM8s1XSfKVfZpxe4BLhiqVetA&oe=6961075A)

Os envios no modo rascunho não serão analisados. Não se esqueça de **concluir o envio do app para análise**.

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/503769387_653066754402874_3122829917621506762_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=FL2KaxCLTOYQ7kNvwEmRywJ&_nc_oc=Adkn6AuPHEWI9Txlx-BQhzzLm2f6RLAWwUwm0hDN7_fkf0KToU9_boUWnEt5z7QN__g&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=g2OibVZp2yVZjHA_TYmhHA&oh=00_AfnImw3SYphCtFrJ86P5bKC_p2uAWKdE9neQknuym5G_lg&oe=69611055)

## Exemplos

Este é um exemplo de gravação de tela que mostra um desenvolvedor usando o próprio app para solicitar a aprovação de um modelo. Isso demonstra o uso da permissão **whatsapp\_business\_management** pelo app do desenvolvedor, que foi solicitada no envio para o processo de análise.

  
Esta captura de gravação de tela mostra um desenvolvedor usando o próprio app para trocar mensagens com o número de um usuário do WhatsApp (clique com o botão direito e abra em uma nova aba para ver uma versão maior). Isso demonstra o uso da permissão **whatsapp\_business\_messaging** pelo app do desenvolvedor, que foi solicitada no envio para o processo de análise.

Importante: **não envie uma captura**, mas sim uma gravação da tela.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/501582465_1425064645196941_2695325123378401168_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=SLp_0w9JY94Q7kNvwEFsPLl&_nc_oc=AdlofGyen2rsQO091qeX3pdsZu_WF5yDGtCazQ3VAvlICXldu9R5U1km9a0_vQ03gNg&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=g2OibVZp2yVZjHA_TYmhHA&oh=00_Afkl_T7nRPXGolwxtKuRYbyagVF7zfXbTL7KI-8hMvtbIw&oe=696137E9)

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)