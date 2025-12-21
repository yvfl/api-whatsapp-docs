<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations -->
<!-- Scraped: 2025-12-20T17:51:29.840Z -->

# Conversas com Múltiplas Soluções (MSC)

Updated: 12 de nov de 2025

**Disponibilidade de recursos**

Para se qualificar para as Conversas com Múltiplas Soluções, sua empresa deve ter um limite de 2.000 mensagens ou mais.

**Se as WABAs associadas aos seus números de telefone tiverem restrições ou banimentos, você não poderá integrar a versão beta fechada do MSC.**[Remova essas restrições](https://business.facebook.com/business-support-home/) antes de tentar fazer a integração.

Alguns recursos podem não estar disponíveis ou funcionar como esperado. [Os termos da versão Beta são aplicáveis.](https://www.facebook.com/legal/BetaProductTestingTerms)

## Visão geral

O recurso Conversas com Múltiplas Soluções permite que as empresas usem diferentes parceiros e soluções **no mesmo número de telefone**, proporcionando uma experiência contínua de conversa para os clientes.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/514415965_1411106036830432_6948086596070603950_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=nssofcQuUEEQ7kNvwEkH_iN&_nc_oc=AdmNA7wIJceZiV8euPnkucJDz1icvGkmrnVfOx12hFM7o-0kqamEhl5irOAT-iwuR88&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=oFnGIBcZvBKt951_k67lrQ&oh=00_AfmJzhk8Rk959Cngx9sXOABvF1EHE3gygtsZLB4SVUE8Hw&oe=69613A3A)

## Principais recursos

-   **Integração de ponta a ponta via Cadastro Incorporado:** os parceiros podem integrar empresas de forma fácil por meio do [Cadastro Incorporado](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations#onboarding-for-msc--embedded-signup-flow-).-   **Isolamento de pagamento e modelo por parceiro:** cada parceiro tem a própria conta do WhatsApp Business, bem como os próprios modelos, cobranças e métricas.

## Como funcionam as Conversas com Múltiplas Soluções

  

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/577460481_2092717124880571_7578694447380220573_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=FIYkyLmJxfIQ7kNvwGCB1Rn&_nc_oc=AdluOCuxBDOqcuG6ysgtdBIfRH6oXM2JK28-JrshCVaql7oHqGC9swu2S6pDssALF04&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=oFnGIBcZvBKt951_k67lrQ&oh=00_Afkx5minblldQ2q6MdVNInl5gBWAT6Qv7MjR-y_UzPfbgg&oe=696112E6)

O gráfico acima ilustra uma nova WABA compartilhada com cada parceiro integrado e os ativos separados por WABA.

-   A empresa compartilha todos os números de telefone associados à conta do WhatsApp Business (WABA, na sigla em inglês) com um parceiro por meio do [fluxo de Cadastro Incorporado](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations#onboarding-for-msc--embedded-signup-flow-).-   Uma nova WABA é criada e compartilhada com o parceiro com o qual a empresa se integra.-   Agora, o parceiro terá acesso a mensagens ou ligações para os números de telefone comerciais compartilhados com ele e poderá enviar mensagens ou gerenciar ligações em nome da empresa.

### APIs compatíveis e uso

As empresas podem usar um único número de telefone com um ou vários parceiros nas seguintes APIs e usos:

-   [Mensagens via API de Nuvem do WhatsApp](/documentation/business-messaging/whatsapp/messages/send-messages)-   [Ligação via API de Nuvem do WhatsApp](/documentation/business-messaging/whatsapp/calling)-   [Anúncios de clique para o WhatsApp no Gerenciador de Anúncios](https://www.facebook.com/business/help/447934475640650?id=371525583593535)

**Observação:** os desenvolvedores diretos que usam um parceiro para qualquer um desses casos de uso têm suporte com as Conversas com Múltiplas Soluções, **exceto para a API de MM Lite**.

## Limitações

A MM Lite não é compatível com empresas de MSC. As solicitações [`marketing_messages`](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages) serão encaminhadas via API de Nuvem ou rejeitadas se o campo `product_policy` estiver definido como strict.

**No momento, o MSC não é compatível com o seguinte:**

-   Roteamento e gerenciamento de conversas: atualmente, todos com quem o número de telefone é compartilhado recebem webhooks. As empresas devem colaborar com parceiros para gerenciar o processamento de respostas.-   Números de telefone coexistentes-   Números de telefone usando a API de Grupos-   WABAs criadas por meio do Cadastro Incorporado e usadas no Gerenciador de Anúncios para mensagens de marketing-   [Integração do parceiro de mensuração](/documentation/business-messaging/whatsapp/solution-providers/measurement-partners)

### Limitações gerais

-   É possível ativar apenas cinco parceiros ou soluções por cada conta do WhatsApp Business (WABA) de empresa final.-   Apenas um parceiro pode anexar um catálogo aos números de telefone compartilhados entre parceiros.

### Limitações de compartilhamento de número de telefone

A empresa não pode compartilhar um número de telefone com o mesmo parceiro mais de uma vez por meio de WABAs diferentes.

Por exemplo, a empresa tem um número de telefone vinculado à WABA 1 e depois compartilha a WABA 1 com o Parceiro 1. Caso o mesmo número de telefone esteja vinculado à WABA 2, você não poderá compartilhá-la com o Parceiro 1. Se você tentar compartilhá-lo, poderá receber um erro.

## Como funcionam as mensagens, as ligações e o gerenciamento de contas ao usar o MSC

Use a tabela abaixo para entender como diferentes recursos e APIs funcionam quando o MSC é usado como parceiro ou empresa.

### Integração

**Valor:** use um número de telefone existente com vários parceiros e soluções.

Experiência da empresa

Experiência do parceiro

A empresa integra um telefone existente com mais de um parceiro por meio do [cadastro incorporado.](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations#onboarding-for-msc--embedded-signup-flow-)

Os parceiros podem ver a nova WABA compartilhada com eles nas configurações do Meta Business Suite.

### Gerenciamento de contas

**Valor:** gerenciamento de contas como de costume.

Experiência da empresa

Experiência do parceiro

Capacidade de realizar operações de gerenciamento de contas por meio dos caminhos usuais (Gerenciador do WhatsApp, API etc.) com base nas permissões concedidas.

### Uso da API

**Valor:** ative as funções de mensagem e ligação com vários parceiros em um único número de telefone.

Recurso

Experiência da empresa

Experiência do parceiro

-   Mensagens da API de Nuvem-   MM Lite (consulte a seção de limitações acima)

Não aplicável

-   **Enviar mensagens:** todos os parceiros conseguem enviar mensagens por meio da API nos números de telefone compartilhados.
    -   **Receber mensagens:** todos os parceiros receberão os webhooks de entrada nos números de telefone compartilhados.
    

[Chamadas à API de Nuvem](/documentation/business-messaging/whatsapp/calling)

Não aplicável

Os parceiros integrados à API de Ligações podem fazer [ligações iniciadas pela empresa](/documentation/business-messaging/whatsapp/calling/business-initiated-calls) e receber [ligações iniciadas pelo usuário](/documentation/business-messaging/whatsapp/calling/user-initiated-calls).

[Saiba mais sobre a API de Ligações Comerciais do WhatsApp](/documentation/business-messaging/whatsapp/calling)

[Modelos](/documentation/business-messaging/whatsapp/templates/overview#create-and-manage-templates)

Não aplicável

Os parceiros podem criar modelos como de costume usando a nova WABA, seja por meio da API ou do Gerenciador do WhatsApp.

[Saiba como criar e gerenciar modelos de mensagem](/documentation/business-messaging/whatsapp/templates/overview#create-and-manage-templates)

Encaminhamento e gerenciamento de conversas

No momento, todas as partes com as quais o número de telefone é compartilhado recebem webhooks.

As empresas devem colaborar com parceiros para gerenciar o processamento de respostas.

No momento, todas as partes com as quais o número de telefone é compartilhado recebem webhooks.

As empresas devem colaborar com parceiros para gerenciar o processamento de respostas.

### Cobrança

**Valor:** propriedade de cobrança simplificada e isolada por WABA.

Experiência da empresa

Experiência do parceiro

As empresas podem adicionar uma forma de pagamento a qualquer WABA criada e compartilhada com parceiros.

Os parceiros adicionam as próprias formas de pagamento à WABA compartilhada com eles, da mesma maneira que fazem atualmente.

Cada parceiro só será cobrado pelas mensagens enviadas por meio do próprio app.

[Os preços por mensagem se aplicam](/documentation/business-messaging/whatsapp/pricing#per-message-pricing).

### Gerenciamento de ativos

**Valor:** gerenciamento de ativos simplificado e isolado por WABA.

Recurso

Experiência da empresa

Experiência do parceiro

Modelos

A empresa pode criar e ver modelos em todas as WABAs compartilhadas com parceiros.

Os parceiros só podem criar modelos nas WABAs compartilhadas com eles.

Os parceiros não podem ver os modelos de outros parceiros

Números de telefone

Os números de telefone são um recurso compartilhado.

Quando a empresa final ou o parceiro adiciona o número de telefone, ele ficará visível para todos no Gerenciador do WhatsApp. Os novos números de telefone adicionados a WABAs usando o MSC são compartilhados com todos os parceiros que possuem acesso a essas WABAs.

### Cancelamento

**Valor:** a empresa tem controle total dos parceiros, ativos e contas que retém.

Função/ativo

Experiência da empresa

Experiência do parceiro

Experiência do parceiro

WABA

A empresa pode excluir a WABA.

Os parceiros **não podem excluir** a WABA compartilhada com eles.

Número de telefone

Tanto a empresa quanto o parceiro podem excluir um número de telefone.

Parceiro

A empresa pode remover o parceiro.

Não aplicável.

## Como funcionam as violações e os banimentos no MSC

-   **Violações de número de telefone**
    -   As violações relacionadas ao número de telefone resultarão no banimento de todas as WABAs de todos os parceiros associados ao número em questão.-   **Violações de modelo**
    -   As violações de modelos se aplicam apenas à WABA em violação.-   **Violações do portfólio empresarial**
    -   Os banimentos do portfólio empresarial se aplicam a todas as WABAs associadas ao número de telefone.

As [apelações de decisões](/documentation/business-messaging/whatsapp/policy-enforcement#appeals) continuam a funcionar como hoje.

## Integração para MSC (fluxo de Cadastro Incorporado)

Disponível apenas para empresas com um limite de mensagens de pelo menos mil conversas iniciadas pela empresa em um período contínuo de 24 horas.

Quando uma empresa atende aos requisitos de qualificação, o fluxo de MSC para o Cadastro Incorporado é automaticamente exibido no fluxo de Cadastro Incorporado (ES) ([v2 e versões mais recentes](/documentation/business-messaging/whatsapp/embedded-signup/versions#version-2)). Os parceiros não precisam configurar nada no Cadastro Incorporado para que isso funcione.

Isso significa que, quando as empresas se cadastrarem em um parceiro por meio do Cadastro Incorporado, o fluxo abaixo será exibido, e elas terão a opção de compartilhar os respectivos números de telefone comerciais, o que integrará a empresa e o parceiro ao MSC.

### Fluxo de cadastro incorporado para empresas

Depois que a empresa concluir o fluxo de Cadastro Incorporado, o parceiro não precisará se registrar novamente.

As empresas fazem a integração ao MSC por meio do fluxo de Cadastro Incorporado:

Observação: essas capturas de tela podem diferir à medida que desenvolvemos o produto. Use-as apenas como ilustrações do conceito.

Etapa 1: selecione o portfólio empresarial

![Image](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/561250684_1339317894593528_7901913241321161228_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=HEgFAKlMMqgQ7kNvwEYUXRC&_nc_oc=AdkuWkYPmUlz-egv__eijW398Q2D0GMkxmOdAbDgIblpsLX8xG1hN8AF0VKvDr48ou4&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=oFnGIBcZvBKt951_k67lrQ&oh=00_AfmHHg60i0eAL1ssGD_hXJc-Lb21NnxDtQmaOV6ViyGSDw&oe=69612F55)

  

Etapa 2: selecione **Compartilhar números de telefone do WhatsApp existentes**

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/560932723_1339318257926825_6933311255214552210_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=4BGbTiIahBAQ7kNvwF702Py&_nc_oc=AdnjHw-2sTdLMybjRmQvMY6wVvYGejn_1z2sRur8gLZtIPvJzPwk2XKpIAJ00UzCKhg&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=oFnGIBcZvBKt951_k67lrQ&oh=00_AfkcybYdkVBAw7GbGaBCkmKbR-h680SgbsbsQ5dgStqHjg&oe=69610F42)

  

Etapa 3: a empresa seleciona a WABA com os números de telefone que gostaria de compartilhar.

_Observação: esses números só poderão ser selecionados se ainda não tiverem sido compartilhados com esse parceiro._

![Image](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/561279123_1339318087926842_185158341832098536_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=7uNGmynbj4sQ7kNvwFfq2pN&_nc_oc=Adm0p7yGUpky2JUdPRDq87bs3kLf8Vy6kaB0XetQJsLBVaEKv6F5h0fs0R0T5vcq7O8&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=oFnGIBcZvBKt951_k67lrQ&oh=00_AfkPTmn0Ma4ydDCFsUsartqqQGlWT23jF9GEn4yfNV0frQ&oe=69610DF4)

  

Etapa 4: crie um nome para a nova conta do WhatsApp Business que está sendo criada.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561245087_1339318197926831_5102266886972443478_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=H-t2F3rnEkYQ7kNvwH_HNHr&_nc_oc=AdnI4k1TYdX7BKZ_50acY8vAPssQwBTkuqsp5o2CnEb5KrEgQcXQgXr7N7XjylNrF9M&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=oFnGIBcZvBKt951_k67lrQ&oh=00_AflNeT5-p7xSlvyjgwA8ccBw2OdVKP_tChjTI0lAylWh6g&oe=69613BC6)

  

Etapa 5: verifique as informações de permissão.

![Image](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/563466403_1339318091260175_1784292960435920523_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Aema3m6Pf8QQ7kNvwH2iFPs&_nc_oc=AdlJv2fOQH3gCwT6OsNBnKlsHqbVpNg1atOZZUCAazFCHxcGpTVnPBrS-cvJTW02210&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=oFnGIBcZvBKt951_k67lrQ&oh=00_AfluYHchDRogEcKEaPq-pBe2Mj3UGOl9GnTkv3YYNms9Ww&oe=69611B51)

  

Etapa 6: verifique as informações de cadastro e finalize.

![Image](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/561627451_1339318034593514_8661379492656270102_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=_-Y0jk8zLC0Q7kNvwEqCiVH&_nc_oc=Adlg8SWV-6LM-gJ_UDnQoZRlCMcnQ0nkTm8EEJYGNGsGwTIETGgzAX3CwAnH5_6eKJw&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=oFnGIBcZvBKt951_k67lrQ&oh=00_AfkrhTD4BBaPacmayZm07rNkEX5bIfKHoKH5Km6BpsSybg&oe=6961115F)

  

## Solução de problemas

**A opção "Compartilhar números de telefone do WhatsApp existentes" aparece esmaecida**

Isso pode acontecer por diversos motivos

-   A empresa já tem uma solução com o parceiro com quem está tentando compartilhar o número-   A empresa excedeu o limite máximo de cinco parceiros para o número-   O número de telefone ainda não está qualificado para enviar 1.000 mensagens-   O número de telefone não foi registrado

**O que posso fazer se o número de telefone comercial ficar offline?**

Em raras ocasiões, um número de telefone pode ficar offline. Para resolver esse problema, tente fazer o seguinte:

-   **Registrar novamente o número de telefone:** a empresa deve pesquisar em todos os registros de atividades da WABA para encontrar que parceiro registrou o número de telefone primeiro. Depois, o parceiro poderá registrar o número de telefone novamente.-   **_(Opcional)_ Desative a autenticação de dois fatores (2FA):** se a empresa não conseguir obter informações sobre o parceiro que registrou originalmente o número de telefone, será possível desativar a 2FA e solicitar que outro parceiro registre o número novamente. [Saiba como desabilitar a autenticação de dois fatores em um número de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#disabling-two-step-verification).

## Perguntas frequentes

**Como faço para obter suporte?**

Para obter suporte relacionado às Conversas com Múltiplas Soluções, escolha o tópico **WABiz: integração** ao abrir um tíquete no [Suporte Direto](https://business.facebook.com/direct-support/).

**Como faço o desligamento do MSC?**

Desligamento do MSC

-   **_(Opcional)_ Migrar modelos:** se houver modelos recém-criados em uma conta do WhatsApp Business criada no MSC, migre-os antes do desligamento. \[Para saber como migrar modelos, clique aqui.\]-   **Envie um tíquete para o suporte do WhatsApp:** use o tipo de solicitação "Cadastro incorporado – Desligamento de MSC" e inclua a WABA que você quer manter.

**O MSC é compatível com Provedores de Tecnologia, Parceiros de Tecnologia e Soluções Multiparceiros?**

Sim.

**Um parceiro poderá ver quantos parceiros um cliente está usando e os serviços/recursos específicos que cada parceiro fornece?**

Não.

**Cada parceiro precisa registrar um determinado número de telefone comercial para integrá-lo ao MSC?**

Não, apenas um parceiro precisa registrá-lo. Depois do registro, o número estará pronto para ser usado com novos parceiros sem a necessidade de um novo registro.

**O que acontecerá se a empresa tentar fazer a integração sem registrar previamente o número de telefone?**

Nesse caso, será exibido um erro na interface do usuário do Cadastro Incorporado, solicitando que a empresa registre o(s) número(s). **Se vários parceiros responderem às mensagens na mesma janela de conversa, quem será cobrado?**

[Os preços seguem as alterações por mensagem lançadas em 1º de julho de 2025](/documentation/business-messaging/whatsapp/pricing#per-message-pricing).

**O que acontece se dois parceiros enviarem mensagens ao mesmo tempo? Receberei duas cobranças?**

\[Os preços seguem as alterações por mensagem lançadas em 1º de julho de 2025\](/documentation/business-messaging/whatsapp/pricing#per-message-pricing).

**Quando o MSC será disponibilizado para o público geral?**

No início de 2026.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)