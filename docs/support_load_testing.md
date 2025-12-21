<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/support/load-testing -->
<!-- Scraped: 2025-12-20T17:55:57.682Z -->

# Teste de carregamento na API de Nuvem

Updated: 31 de out de 2025

## Introdução ao Teste de carregamento na API de Nuvem

### O que é um Teste de carregamento da API?

O Teste de carregamento da API é um processo crucial para avaliar o desempenho dos servidores do app em relação ao tráfego de produção esperado. Essa abordagem permite aplicar sistematicamente a carga prevista aos seus servidores e observar o comportamento do app. Ao realizar esse teste, você pode identificar fraquezas ou gargalos antes que os usuários os enfrentem, garantindo que o app seja robusto o suficiente para lidar com a carga de trabalho desejada.

Na Meta, reconhecemos a importância do Teste de carregamento da API e fornecemos um recurso abrangente na nossa API de Nuvem do WhatsApp que permite simular o tráfego no ponto de extremidade da API de mensagens e avaliar o desempenho em diferentes condições. Esse recurso permite que você examine o desempenho geral da integração da API e avalie a capacidade de processar solicitações simultâneas de um grande número de usuários virtuais.

Entendemos o cenário dinâmico e exigente da comunicação digital e temos o compromisso de preparar as empresas para prosperar nele. Ao oferecer esse recurso, possibilitamos que nossos clientes se mantenham na vanguarda, fornecendo serviços de mensagens excepcionais que podem resistir aos desafios impostos pela demanda cada vez maior dos usuários e pelas flutuações do mercado.

### Quais tipos de Testes de carregamento estão disponíveis?

Atualmente, a API de Nuvem oferece o "Teste de carregamento de saída". Esse recurso é uma ferramenta avançada que ajuda as empresas a avaliar e aprimorar a resiliência da integração da API de Nuvem do WhatsApp. Ao realizar Testes de carregamento de saída, os clientes podem obter mensurações esclarecedoras sobre o desempenho do sistema e identificar áreas de melhoria.

A capacidade de avaliar e otimizar sistemas de forma proativa é fundamental para empresas que querem fornecer experiências de mensagens perfeitas aos clientes, mesmo durante períodos de uso intenso. Ao aproveitar o recurso de Teste de carregamento de saída, os clientes podem ganhar confiança na robustez e na escalabilidade da integração da API de Nuvem do WhatsApp, garantindo que ela possa lidar com grandes volumes de mensagens sem sacrificar o desempenho ou a experiência do usuário.

### Por que fazer um Teste de carregamento de saída usando a API de Nuvem?

O Teste de carregamento de saída com nossa API de Nuvem oferece benefícios significativos em dois cenários distintos:

-   **Monitoramento de parceiros de soluções**: os parceiros de soluções podem usar o teste de carregamento para monitorar a série temporal das solicitações de API feitas e as respostas correspondentes recebidas. Isso permite que os parceiros de soluções obtenham insights valiosos sobre o desempenho dos próprios sistemas ao longo do tempo. Ao monitorar essas métricas, os parceiros de soluções podem identificar padrões, analisar os tempos de resposta e garantir uma entrega de serviço otimizada aos clientes.
    -   **Monitoramento de webhooks de status da mensagem**: para as empresas, o teste de carregamento fornece uma forma de monitorar o número de webhooks de status da mensagem recebidos no ponto de extremidade designado durante o período de teste. Ao analisar os dados de webhook, as empresas podem avaliar a capacidade de resposta e a confiabilidade dos próprios sistemas em tempo real. Isso permite que eles detectem problemas de forma proativa, otimizem os processos de tratamento de webhooks e garantam atualizações perfeitas do status das mensagens para os usuários.
    

Em ambos os cenários, o teste de carregamento é uma ferramenta eficiente para avaliar e melhorar o desempenho do webhook. Seja para rastrear a dinâmica de resposta e solicitação da API ou monitorar webhooks de status de mensagens, o teste de carregamento permite que empresas e parceiros de soluções melhorem os próprios serviços, otimizem fluxos de trabalho e forneçam experiências de usuário excelentes.

## Preparar-se para o Teste de carregamento

Para garantir uma experiência de teste de carregamento tranquila e eficaz, é essencial realizar uma preparação adequada. No caso de um teste de carregamento de saída com a Meta, fornecemos componentes essenciais para facilitar o processo. Especificamente, forneceremos um número de teste designado que servirá como remetente das mensagens de teste de carregamento. Além disso, diversos números fictícios serão fornecidos para atuar como números de usuários finais para o teste.

O número de teste fornecido foi desenvolvido de propósito para processar todas as solicitações de maneira semelhante à de um número real, mas não entregará as mensagens a destinatários reais. Esse design bem elaborado evita o envio acidental de spams com números reais durante o teste de carregamento, o que poderia comprometer a integridade do processo.

Para iniciar o teste de carregamento, os clientes devem criar solicitações de teste de carregamento por meio do nosso canal de Suporte Direto. Isso garante uma comunicação otimizada e permite que nossa equipe forneça assistência rápida e orientação durante toda a fase de testes.

Para configurar o teste de carregamento com sucesso, pedimos aos nossos clientes as seguintes informações:

-   **Exemplo de modelo de mensagem existente**: exigimos um exemplo do modelo de mensagem que você pretende usar para o teste de carregamento. Isso inclui o nome associado e a conta do WhatsApp Business (WABA) vinculada. Com essas informações, poderemos replicar de forma precisa sua configuração de mensagens durante o teste de carregamento, garantindo condições realistas.
    -   **URL do Webhook**: forneça a URL do ponto de extremidade do webhook que receberá notificações e dados do teste de carregamento. Isso nos permite capturar e analisar as respostas e o comportamento do seu sistema durante o teste, possibilitando uma avaliação e otimização completas.
    -   **Token de verificação de URL de webhook**: forneça o token de verificação de webhook para substituir sua URL de webhook e receber notificações.
    

Depois da confirmação da sessão de teste de carregamento, nossa equipe dedicada de suporte fornecerá os recursos necessários no dia do teste, incluindo:

-   **Número de teste**: forneceremos um número de teste dedicado que servirá como remetente para as mensagens do teste de carregamento. Esse número foi desenvolvido especificamente para processar todas as solicitações como um número normal faria, sem entregar as mensagens aos destinatários reais. Isso garante que o teste de carregamento seja realizado de forma precisa, ao mesmo tempo em que protege a privacidade dos números reais.
    -   **Token de acesso**: você receberá um token de acesso que concede a autorização necessária para iniciar e monitorar o teste de carregamento.
    -   **Modelo de mensagem**: forneceremos o modelo de mensagem específico e os detalhes correspondentes para serem usados durante o teste. Isso inclui o conteúdo, a estrutura e as variáveis ou os espaços reservados que precisam ser incluídos nas mensagens.
    

Nossa equipe de suporte estará disponível durante todo o teste de carregamento para fornecer orientação, responder a dúvidas e garantir uma experiência de teste tranquila.

**Observação**: é fundamental garantir que nenhuma mensagem seja enviada ao número de teste ao registrar ou obter o ID do número de saída. O envio de uma mensagem para o número de teste durante o teste de carregamento pode acionar um mecanismo de interruptor, resultando na desconexão do número do teste de carregamento. Para manter uma sessão de teste de carregamento estável e ininterrupta, evite enviar mensagens para o número de teste designado durante a configuração e execução do teste de carregamento.

## Ferramentas de teste de carregamento e diretrizes de configuração

Algumas ferramentas funcionam melhor em conjunto, dependendo da plataforma de desenvolvimento usada para o teste de carregamento. Veja algumas plataformas comuns e as ferramentas de teste de carregamento:

Plataforma de desenvolvimento

Ferramenta

Java

[JMeter](#jmeter)

Python

[Locust](#locust)

Para realizar testes de carregamento eficazes, você precisará das seguintes ferramentas: InfluxDB, Grafana e JMeter/Locust. Veja abaixo as etapas para configurar cada componente:

#### InfluxDB:

O InfluxDB é um banco de dados de séries temporais que funciona perfeitamente com JMeter e Grafana. Para instalar o InfluxDB, acesse [Baixar o InfluxDB](https://l.facebook.com/l.php?u=https%3A%2F%2Fportal.influxdata.com%2Fdownloads%2F&h=AT0CrwGGedYjdiGRmTRt2zG5Xrw1--MCPkR6em9NVDt3fypuuEMcvZkUcMWzFjFl5R4NyR3KUCKkvQak7ZGWkJ_mSbFaUBuJlKts7QQ5nAP42DSxRBQb-ibtk2Dkyee6GLf4GAJ9FpB0pFvLD6JOb0x1K_4).

Devido a problemas conhecidos com a versão 2.x do InfluxDB, você precisa baixar a versão 1.x. Para encontrar a versão 1.x, acesse o link de download acima, role a tela até o final da página e selecione **Você tem interesse no InfluxDB 1.x Open Source?**.

#### Grafana:

O Grafana é uma solução de análise e monitoramento de código aberto que é compatível com vários bancos de dados. As abordagens mais usadas envolvem a criação de painéis do Grafana usando o InfluxDB e o Prometheus. Nesta seção, vamos focar na integração com JMeter e InfluxDB. Para instalar o Grafana, acesse a página de [download do Grafana](https://l.facebook.com/l.php?u=https%3A%2F%2Fgrafana.com%2Fgrafana%2Fdownload%3Fpg%3Dget%26plcmt%3Dselfmanaged-box1-cta1%26platform%3Dmac&h=AT0CrwGGedYjdiGRmTRt2zG5Xrw1--MCPkR6em9NVDt3fypuuEMcvZkUcMWzFjFl5R4NyR3KUCKkvQak7ZGWkJ_mSbFaUBuJlKts7QQ5nAP42DSxRBQb-ibtk2Dkyee6GLf4GAJ9FpB0pFvLD6JOb0x1K_4).

#### JMeter:

O JMeter é uma ferramenta avançada de código aberto para testes de carregamento. Para instalar o JMeter, siga o guia de instalação disponível no [site do JMeter](https://l.facebook.com/l.php?u=https%3A%2F%2Fjmeter.apache.org%2Fdownload_jmeter.cgi&h=AT0CrwGGedYjdiGRmTRt2zG5Xrw1--MCPkR6em9NVDt3fypuuEMcvZkUcMWzFjFl5R4NyR3KUCKkvQak7ZGWkJ_mSbFaUBuJlKts7QQ5nAP42DSxRBQb-ibtk2Dkyee6GLf4GAJ9FpB0pFvLD6JOb0x1K_4).

#### Locust:

O Locust é uma maneira flexível e eficiente de simular o comportamento do usuário e gerar carga no seu sistema. Baixe o arquivo zip [load test](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IE&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fresources%2FLoadTest-py.zip&event_type=click&last_nav_impression_id=1KLU92oUeSpUvNoBF&max_percent_page_viewed=55&max_viewport_height_px=1009&max_viewport_width_px=1792&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fcloud-api%2Fguides%2Fload-testing&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dwhatsapp%26path2%3Dcloud-api%26path3%3Dguides%26path4%3Dload-testing&region=emea&scrolled=true&session_id=1A5EfT0NY2fOb0sOj&site=developers) fornecido pela Meta e faça a extração.

## Teste de carregamento usando o JMeter com o InfluxDB e o Grafana

Depois de instalar os componentes necessários, siga as etapas abaixo para configurar seu ambiente usando o JMeter:

Para iniciar o **JMeter**, siga estas etapas:

-   Baixe o JMeter usando o link de download fornecido.-   Abra o terminal e navegue até a pasta do JMeter.-   Navegue até a pasta "bin" no diretório do JMeter.-   Execute o comando a seguir para iniciar o app JMeter: `./jmeter`

Executando esse comando, o JMeter será iniciado e você terá acesso à interface do app, onde poderá criar e configurar os testes de desempenho.

A próxima etapa é **importar o plano de teste**. Para importar um exemplo de plano de teste no JMeter, siga estas etapas:

-   Baixe o [arquivo do plano de teste compactado](https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent-gru2-1.xx.fbcdn.net%2Fv%2Ft39.8562-6%2F383083590_849533576487865_448384137962027554_n.zip%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3Db8d81d%26_nc_ohc%3DSdzOOIL5WCwQ7kNvwFH2bII%26_nc_oc%3DAdmKeXqhkQwP-xqSupt6H-RfKyxrDCNIQV1ikaIPe-SPXedapZRm1FQB9Vg_-rdGxzw%26_nc_zt%3D14%26_nc_ht%3Dscontent-gru2-1.xx%26_nc_gid%3D5KR7u3CFJU-rCh6fy-qluA%26oh%3D00_AflOlxXRJ_8l3JS5Q68EC22CaGjDGaH82dK2UTUel99fyA%26oe%3D694CCEA6&h=AT0CrwGGedYjdiGRmTRt2zG5Xrw1--MCPkR6em9NVDt3fypuuEMcvZkUcMWzFjFl5R4NyR3KUCKkvQak7ZGWkJ_mSbFaUBuJlKts7QQ5nAP42DSxRBQb-ibtk2Dkyee6GLf4GAJ9FpB0pFvLD6JOb0x1K_4) fornecido e extraia o conteúdo na pasta do JMeter. Esse arquivo contém as configurações necessárias; você só precisa modificar as variáveis.
    -   Abra o JMeter e navegue até o arquivo de teste `LoadTest.en_US.jmx`. Para isso, selecione **File** > **Open** e localize o arquivo na interface do JMeter.
    -   Depois que o arquivo de teste for aberto, o JMeter exibirá a estrutura do plano de teste. Esse plano de teste importado serve de ponto de partida. É possível modificá-lo conforme seus requisitos específicos.
    -   Localize o elemento "Solicitação HTTP" no plano de teste. Nessa etapa, forneça as informações necessárias nos dados do corpo da solicitação POST, incluindo o objeto do modelo.
    
    ![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/567935685_1343934440798540_7485235151905676730_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=agh50lyMukMQ7kNvwFQR5n2&_nc_oc=AdkrMb96Pt3Ik2REY8zS1K7ZCS1ANfH_nSMeWnS_G70EwNCAfvVbDnd5XU07zDJWKxY&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=5KR7u3CFJU-rCh6fy-qluA&oh=00_AfkguxAX6BR-4mXLYzlp_6cDXPmsyPLtfgUNprIkFbqfew&oe=69614047)
    -   Encontre o elemento "Parâmetros de Usuário" e adicione valores para as seguintes variáveis:
    
    -   **phoneNumberID**: a identificação do número de telefone de teste fornecida pela Meta
        -   **systemUserAccessToken**: esse será o token de acesso também fornecido pela Meta
        
    
    ![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/569390372_1343934430798541_4395388978418862722_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=tq4rryi5SqQQ7kNvwERrttH&_nc_oc=Admo9gu_DLN__KN74Rsdfmp7jFQsEkF95aKozXmEoQvXGAEPEUY4roJ1GQDplTjpAxA&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=5KR7u3CFJU-rCh6fy-qluA&oh=00_AfkgoZ-HhVA-2DprxZJe5GYeaDq-z1gMhF29szl4KEsaRQ&oe=69611E66)
    -   Para configurar o InfluxDB e coletar resultados, acesse o elemento "Backend Listener". Faça as configurações necessárias para corresponder às configurações mostradas na captura de tela ou na documentação fornecida. ![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/565884286_1343934424131875_5658840901806577736_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=PlfZ7vut_IwQ7kNvwFIJ7JL&_nc_oc=AdldZFS5swCx636XGbBtYjH5Gr_yWm_i6Gu3VHhSdwYKQSa9QgFWs1f2ZeRCXdQfV7E&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=5KR7u3CFJU-rCh6fy-qluA&oh=00_AflrK3XWsU0Igk69vu0nRXs1r2tOQB6glKKjmx6A1rOyIg&oe=6961106F) 

Ao seguir essas etapas, você importará o plano de teste de amostra no JMeter e fará as modificações necessárias para adaptá-lo às suas necessidades específicas. Este plano de teste é um ponto de partida para carregar testes no seu sistema e coletar métricas de desempenho usando JMeter e InfluxDB.

Em seguida, inicie o servidor do InfluxDB e crie um novo banco de dados para armazenar as leituras do JMeter:

-   Inicie o servidor do InfluxDB:
    
    -   Abra um terminal e navegue até o diretório de instalação do InfluxDB. Na maioria dos casos, ele pode ser encontrado em **InfluxDB\_folder/usr/bin**.
        -   Execute o seguinte comando para iniciar o servidor do InfluxDB na porta 8086:
        
    
    ```
    ./influxd
    ```
    -   Crie um banco de dados:
    
    -   Abra uma nova aba ou janela de terminal.
        -   Defina o diretório para instalação do InfluxDB, normalmente localizado em **InfluxDB\_folder/usr/bin**.
        -   Execute o seguinte comando para iniciar o console do InfluxDB:
        
    
    ```
    ./influx
    ```
    -   Crie o banco de dados necessário:
    
    -   No console do InfluxDB, crie o banco de dados necessário para a configuração do JMeter. Neste exemplo, vamos nomear o banco de dados como "demo".
        -   Execute este comando para criar o banco de dados:
        
    
    ```
    create database demo
    ```
    

Depois da conclusão dessas etapas, o servidor InfluxDB será iniciado, e você terá um banco de dados de "demonstração" pronto para armazenar as leituras do JMeter.

Para configurar o Grafana para o JMeter, siga estas etapas:

-   Servidor do Grafana:
    
    -   Abra uma nova aba no terminal e navegue até o diretório de instalação do Grafana. Normalmente, ele fica em **grafana\_folder/bin**.
        -   Execute o seguinte comando para iniciar o servidor do Grafana:
        
    
    ```
    ./grafana-server
    ```
    
    -   Isso iniciará o servidor do Grafana na porta padrão 3000. Verifique se outros servidores que usam a porta 3000 (como Docker ou NodeJS) estão desativados para evitar conflitos.
        -   Cliente do Grafana:
    
    -   Abra um navegador da web e acesse [http://localhost:3000](https://l.facebook.com/l.php?u=http%3A%2F%2Flocalhost%3A3000%2F&h=AT0CrwGGedYjdiGRmTRt2zG5Xrw1--MCPkR6em9NVDt3fypuuEMcvZkUcMWzFjFl5R4NyR3KUCKkvQak7ZGWkJ_mSbFaUBuJlKts7QQ5nAP42DSxRBQb-ibtk2Dkyee6GLf4GAJ9FpB0pFvLD6JOb0x1K_4). Você deverá entrar no Grafana.
        -   Use estas credenciais de acesso:
        
    
    ```
    Username: admin
    Password: admin
    ```
    -   Depois de fazer login, passe o ponteiro do mouse sobre o ícone de engrenagem (configuração) localizado no canto inferior esquerdo e selecione **Fontes de dados** para acessar a lista de fontes de dados. Selecione **InfluxDB** nas opções disponíveis para abrir a interface do InfluxDB.
    -   Defina as configurações do InfluxDB:
    
    -   Defina a linguagem de consulta como **InfluxQL**.
        -   Insira o URL do InfluxDB como [http://localhost:8086](https://l.facebook.com/l.php?u=http%3A%2F%2Flocalhost%3A8086%2F&h=AT0CrwGGedYjdiGRmTRt2zG5Xrw1--MCPkR6em9NVDt3fypuuEMcvZkUcMWzFjFl5R4NyR3KUCKkvQak7ZGWkJ_mSbFaUBuJlKts7QQ5nAP42DSxRBQb-ibtk2Dkyee6GLf4GAJ9FpB0pFvLD6JOb0x1K_4) (o URL usado para acessar o InfluxDB).
        -   Escolha o banco de dados **demo** criado anteriormente como o banco de dados de destino para as leituras do JMeter.
        -   Clique em **Salvar e testar** para salvar a configuração do InfluxDB e verificar a conexão.
    -   Para configurar o painel do Grafana, passe o ponteiro do mouse sobre o ícone quadrado no lado esquerdo do app Grafana e selecione **\+ Importar**.
    -   Carregue o painel do Grafana com a identificação **5496** clicando em **Carregar**. ![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/565612441_1343934454131872_6159251827970803777_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=hrpFxlNVTfcQ7kNvwHulAlE&_nc_oc=AdnYci5oY2I-s4NAXFX3NxhAyZdxEthuM__HGExD9HHQ4Or7B9sYj3yvbJcht_iZjag&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=5KR7u3CFJU-rCh6fy-qluA&oh=00_AfkosVwwRemOUS15Z66gJIHePnMTDFP62TQiXACKiptCPA&oe=696111F1) 

Com a conclusão dessas etapas, a configuração do Grafana é finalizada, e você pode executar seu teste do JMeter. Verifique se o JMeter e o InfluxDB estão em execução. Depois, execute o teste do JMeter para preencher o painel do Grafana que você acabou de configurar.

### Como executar o teste no JMeter

Depois de concluir as etapas de configuração descritas na seção anterior, siga estas instruções para executar o teste usando o JMeter:

-   Navegue até o elemento **Thread Group** no plano de teste do JMeter. Nessa etapa, você configura as definições do teste.-   Especifique o número desejado de threads ou usuários que simularão o acesso simultâneo ao seu app. Cada tópico representa um usuário virtual. O número de conversas afeta diretamente a carga no seu sistema.-   Defina o período de aprimoramento para determinar como o JMeter aumentará gradualmente o número de usuários de zero para o total desejado. O período de aprimoramento é medido em segundos e determina o tempo necessário para o JMeter iniciar todos os usuários especificados e atingir o número máximo de usuários. Por exemplo, se você tiver 1.000 usuários e um período de aprimoramento de 100 segundos, o JMeter iniciará um novo usuário a cada 0,1 segundos (1.000 usuários / 100 segundos) até que todos os 1.000 usuários estejam ativos.-   Depois de configurar o teste com o número apropriado de conversas e o período de aprimoramento, você poderá iniciar o teste. Clique no botão de iniciar, representado por um botão de reprodução verde, para iniciar o teste de carregamento.

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/568111860_1343934390798545_5562721101061766972_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=wASczNY1vrAQ7kNvwEb81-f&_nc_oc=AdkiQIriQ403cqP1m8DowtUQzMytRjydfv5nb0EJmtbDWJCOeTlZbauBTMqBULPuGCg&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=5KR7u3CFJU-rCh6fy-qluA&oh=00_AfkUfu6q2Cr-xopBn_WQQyy4S1TFzYyGpouiSQ0S0Lra5Q&oe=69613E93)

## Teste de carregamento com o Locust, o InfluxDB e o Grafana

Depois de instalar os componentes necessários, siga as etapas abaixo para configurar seu ambiente usando o Locust:

Para iniciar o Locust, siga estas etapas:

-   Baixe o arquivo zip [load test](https://developers.facebook.com/resources/LoadTest-py.zip) fornecido pela Meta e extraia o conteúdo.
    -   Abra o arquivo `config.json` incluído nos arquivos extraídos. Nesse arquivo, você precisa especificar os valores de modelo, auth\_token e phone\_number\_id a serem usados para o teste de carregamento.
    
    -   Modifique a estrutura JSON da seguinte maneira:
        
        ```
        {
            "template": {
                "name": "welcome_user",
                "language": {
                    "policy": "deterministic",
                    "code": "en"
                }
            },
            "auth_token": "<YOUR_TOKEN>",
            "phone_number_id": "<YOUR_PHONE_NUMBER_ID>"
        }
        ```
        -   Substitua `<YOUR_TOKEN>` pelo token de identificação adequado e `<YOUR_PHONE_NUMBER_ID>` pela identificação do número de telefone correspondente.
        -   Verifique se o Locust está instalado no seu sistema. Caso não esteja, execute o seguinte comando para instalar:
    
    ```
    pip3 install locust
    ```
    -   Verificação:
    
    -   Verifique se o Locust foi instalado com sucesso executando o seguinte comando:
        
        ```
        locust -V
        ```
        -   A versão instalada do Locust será exibida.
        -   Instale o listener/conector do InfluxDB para habilitar o carregamento dos resultados do teste do Locust diretamente no InfluxDB:
    
    -   Use o seguinte comando para instalar o listener:
        
        ```
        pip3 install locust-influxdb-listener
        ```
        -   A instalação do listener permite integrar facilmente o Locust com o InfluxDB para armazenar e analisar os resultados do teste de carregamento.
        

Depois, inicialize o servidor InfluxDB e crie um banco de dados para armazenar as leituras do Locust:

-   Inicie o servidor do InfluxDB:
    
    -   Abra um terminal e navegue até o diretório de instalação do InfluxDB. Na maioria dos casos, ele pode ser encontrado em **InfluxDB\_folder/usr/bin**.
        -   Execute o seguinte comando para iniciar o servidor do InfluxDB na porta 8086:
        
        ```
        ./influxd
        ```
        -   Crie um banco de dados:
    
    -   Abra uma nova aba ou janela de terminal.
        -   Defina o diretório para instalação do InfluxDB, normalmente localizado em **InfluxDB\_folder/usr/bin**.
        -   Execute o seguinte comando para iniciar o console do InfluxDB:
        
        ```
        ./influx
        ```
        -   Crie o banco de dados necessário:
    
    -   No console do InfluxDB, crie o banco de dados necessário para a configuração do JMeter. Neste exemplo, vamos nomear o banco de dados como `pyt`.
        -   Execute este comando para criar o banco de dados:
        
        ```
        create database pyt
        ```
        

Para configurar o Grafana para Locust, siga estas etapas:

-   Servidor do Grafana:
    
    -   Abra uma nova aba do terminal e navegue até o diretório onde o Grafana está instalado (**grafana\_folder/bin**). Execute o seguinte comando para iniciar o servidor do Grafana:
        
        ```
        ./grafana-server
        ```
        -   Isso iniciará o servidor do Grafana na porta padrão 3000. Verifique se todos os outros serviços que usam a porta 3000 estão interrompidos ou desativados.
        -   Abra um navegador da web e acesse http://localhost:3000. Use as seguintes credenciais de login para acessar o Grafana:
    
    ```
    Username: admin
    Password: admin
    ```
    -   Na interface web do Grafana, passe o ponteiro do mouse sobre o ícone de engrenagem (configuração) localizado no canto inferior esquerdo. Em seguida, selecione **Fontes de Dados** para ver uma lista de fontes de dados.
    -   Selecione **InfluxDB** para abrir a interface do InfluxDB. Na interface do InfluxDB, defina as seguintes configurações:
    
    -   Idioma de consulta: selecione **InfluxQL**
        -   URL: defina o URL como [http://localhost:8086](https://l.facebook.com/l.php?u=http%3A%2F%2Flocalhost%3A8086%2F&h=AT0CrwGGedYjdiGRmTRt2zG5Xrw1--MCPkR6em9NVDt3fypuuEMcvZkUcMWzFjFl5R4NyR3KUCKkvQak7ZGWkJ_mSbFaUBuJlKts7QQ5nAP42DSxRBQb-ibtk2Dkyee6GLf4GAJ9FpB0pFvLD6JOb0x1K_4).
        -   Banco de dados: defina o banco de dados como `pyt`
        -   Clique em "Salvar e testar" para salvar a configuração e verificar a conexão com o InfluxDB.
    -   Para configurar o painel do Grafana:
    
    -   Passe o ponteiro do mouse sobre o ícone de quatro quadrados no lado esquerdo da interface do Grafana e selecione **+Importar**.
        -   Clique em **Upload JSON file** e carregue o `locust-grafana-dashboard.json`[arquivo](#using-locust) fornecido pela Meta no zip.
        -   Clique em **Carregar** para importar e carregar o painel do Locust com as configurações e visualizações predefinidas.
    

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/565823048_1343934460798538_8949946580202322246_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=5IHFmuC0FrMQ7kNvwHn8HZi&_nc_oc=AdnAlG2wDoF7CeseBC2sJBLVM-uQECh3qntBKR_Ng_H58qOr-8TRUtOY6mX7yWZLAnk&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=5KR7u3CFJU-rCh6fy-qluA&oh=00_AfkzrSVh4gUA6XKkJ6b8GWDRTSr2gmMjRgRrLkNZdqXYcg&oe=69613A21)

Ao seguir essas etapas, você configurará com sucesso o Locust para testes de carregamento e garantirá que as dependências e configurações necessárias estejam funcionando.

### Executar o teste no Locust

Depois de concluir as etapas de configuração descritas na seção anterior, siga estas instruções para executar o teste usando o Locust:

-   Navegue até a pasta em que você instalou o arquivo zip do teste de carregamento.
    -   Abra o terminal ou o prompt de comando e execute o seguinte comando para iniciar o servidor Locust na porta 8089:
    
    ```
    locust -f locustFile.py
    ```
    -   Depois de executar o comando, abra o navegador da web e acesse [http://localhost:8089/](https://l.facebook.com/l.php?u=http%3A%2F%2Flocalhost%3A8089%2F&h=AT0CrwGGedYjdiGRmTRt2zG5Xrw1--MCPkR6em9NVDt3fypuuEMcvZkUcMWzFjFl5R4NyR3KUCKkvQak7ZGWkJ_mSbFaUBuJlKts7QQ5nAP42DSxRBQb-ibtk2Dkyee6GLf4GAJ9FpB0pFvLD6JOb0x1K_4). Isso abrirá a interface da web do Locust.
    -   Na interface da web do Locust, clique em **Novo teste** para configurar seu teste.
    -   Especifique o número desejado de usuários para o teste de carregamento. Esses usuários representam os usuários virtuais simulados ou clientes que geram tráfego para seu app durante o teste. O número de usuários determina a quantidade de tráfego simultâneo gerado.
    -   Defina a taxa de criação, que determina a velocidade em que novos usuários virtuais são criados durante o teste de carregamento. Ele controla a velocidade de aumento do número de usuários simultâneos. Por exemplo, se você definir uma taxa de geração de dez usuários por segundo, o Locust começará com poucos usuários e aumentará gradualmente o número de usuários ativos em dez a cada segundo até atingir o número desejado de usuários.
    -   Leve em consideração a proporção ideal de usuários para taxa de transferência de dados do seu teste. Como diretriz geral, é possível adicionar aproximadamente 100 usuários para cada taxa de transferência de dados de 300 mensagens por segundo (MPS). Lembre-se de que cada usuário leva aproximadamente 350 ms para ser calculado.
    -   Verifique se o campo host está definido com o valor apropriado, como [https://graph.facebook.com](https://graph.facebook.com), dependendo do sistema que você está testando.
    -   Clique em **Iniciar swarming** para iniciar o teste de carregamento.
    

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/565636670_1343934437465207_3634071990337038089_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z6-YvX8oHqoQ7kNvwFg1WM4&_nc_oc=AdknKdxpSMFmB16UPex7gLElOJ_R2pl2s_UQfHQbjy9fRP79eRZF8peHzyuFc2_i3rY&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=5KR7u3CFJU-rCh6fy-qluA&oh=00_AfkWEdoDEWMZOvhPX0Jzp64hmVpS1N2f_RDREmgNrc89qA&oe=69612348)

No console do terminal do Locust, você verá a saída detalhada indicando que o teste de carregamento está em execução. Monitore o console para identificar falhas relatadas. A ausência de falhas indica que o teste inicial foi bem-sucedido. Você pode continuar a configurar o painel do Grafana.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)