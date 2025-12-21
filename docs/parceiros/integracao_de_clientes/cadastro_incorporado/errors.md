<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/errors -->
<!-- Scraped: 2025-12-20T17:50:57.877Z -->

# Erros no fluxo de Cadastro incorporado

Updated: 10 de nov de 2025

Este guia apresenta os diferentes erros que podem surgir ao [incorporar o fluxo de cadastro](/documentation/business-messaging/whatsapp/embedded-signup/implementation) no seu site ou portal do cliente.

## Telas de fluxo abandonado

Se um cliente empresarial abandonar prematuramente o fluxo de cadastro incorporado, enviaremos um [evento de mensagem](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) ao navegador que gerou o fluxo, indicando qual tela o cliente estava visualizando no momento do abandono.

O valor da propriedade `data.current_step` indica qual tela o cliente abandonou:

```
{
  data: {
    current_step: "<CURRENT_STEP>",
  },
  type: "WA_EMBEDDED_SIGNUP",
  event: "CANCEL",
  version: 3
}
```

Valor da etapa atual

Tela correspondente

`<BUSINESS_ACCOUNT_SELECTION>`

[Tela do portfólio empresarial](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-portfolio-screen)

`<WABA_PHONE_PROFILE_PICKER>`

[Tela de seleção da WABA](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-selection-screen)

`<WHATSAPP_BUSINESS_PROFILE_SETUP>`

[Tela de criação da WABA](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-creation-screen)

`<PHONE_NUMBER_SETUP>`

[Tela de adição de número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen)

`<PHONE_NUMBER_VERIFICATION>`

[Tela de verificação do número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-verification-screen)

`<PERMISSIONS>`

[Tela de análise das permissões](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#permissions-review-screen)

## Erros de criação de conta do Gerenciador de Negócios

Erro

Descrição

**Ocorreu um erro ao processar essa solicitação. Tente novamente mais tarde.**

A criação da conta comercial pode ter falhado por vários motivos. Entre em contato com o Suporte para receber mais ajuda. Solução sugerida: use uma conta ativa do Facebook ou entre em contato com o Suporte para resolver o problema.

**Você atingiu o limite para o número de empresas que pode criar no momento.**

Existe um limite para o número de contas comerciais que você pode criar.

Solução sugerida: use uma conta comercial existente.

**Sua conta do Facebook é muito nova para criar uma conta comercial. Tente novamente em uma hora.**

Novas contas do Facebook precisam esperar algum tempo para criar uma conta do Gerenciador de Negócios. Solução sugerida: use uma conta ativa do Facebook ou espere algumas horas antes de usar a nova conta. A nova conta do Facebook pode ser usada normalmente durante o período de espera.

**Limitamos a frequência com que você pode postar, comentar ou executar outras ações em um determinado período para ajudar a proteger a comunidade contra spam. Tente novamente mais tarde.**

Sua conta do Facebook foi sinalizada devido a um comportamento suspeito. Solução sugerida: use uma conta do Facebook ativa sem problemas anteriores.

**Você não tem mais permissão para usar os produtos do Facebook para anunciar. Você não pode veicular anúncios, gerenciar ativos de publicidade nem criar novos anúncios ou contas comerciais.**

Você não pode criar novas contas do Gerenciador de Negócios devido a um comportamento suspeito anterior. Solução sugerida: use uma conta do Facebook ativa sem problemas anteriores.

**Sua conta de pagamento está desabilitada**

Sua conta de pagamento foi desabilitada devido a um comportamento suspeito anterior.

**Um usuário só pode criar um usuário empresarial de cada vez**

Você só pode criar uma única conta comercial em um determinado período. Solução sugerida: use uma conta empresarial existente para executar a integração.

**O nome escolhido para a empresa não é válido. Considere usar xxx.**

Nome da empresa inválido. Solução sugerida: adicione um nome válido que corresponda ao nome da sua empresa.

## Erros de criação de conta do WhatsApp Business

Erro

Descrição

**Não é possível editar o nome verificado: a verificação do nome já está em andamento.**

Não será permitido editar o nome enquanto a verificação estiver em andamento. Solução sugerida: tente novamente depois que a verificação do nome atual for concluída.

**O usuário não tem permissão para criar contas do WhatsApp Business.**

Você não tem a permissão de nível de administrador necessária para criar contas do WhatsApp na conta comercial selecionada. Solução sugerida: receba acesso de administrador à conta comercial para prosseguir ou selecione uma conta para a qual você tenha permissões de administrador.

**Até que a verificação da empresa e da conta do WhatsApp seja concluída, só é permitido criar um número limitado de contas do WhatsApp Business. Após a verificação, você poderá criar contas adicionais.**

Você tentou criar várias contas do WhatsApp Business em uma empresa não verificada. Solução sugerida: será possível criar contas adicionais do WhatsApp Business somente quando a verificação da empresa e da conta do WhatsApp for concluída. Acesse o Gerenciador de Negócios para começar a verificação da empresa referente à conta.

**Não foi possível verificar a conta empresarial da Meta que você selecionou. Volte à tela anterior para selecionar uma conta diferente ou receba suporte no Gerenciador de Negócios da Meta.**

A conta comercial da Meta selecionada não está em conformidade com as políticas de uso da Plataforma do WhatsApp Business, e não foi possível verificá-la. Solução sugerida: acesse sua conta do Gerenciador de Negócios para saber mais sobre essa conta comercial do Facebook. Se o envio da verificação da sua empresa foi rejeitado, você deve ter recebido uma notificação por email detalhando os motivos. Você pode tentar reenviar a verificação da sua empresa se achar que isso foi um erro ou criar uma conta do WhatsApp Business usando uma conta comercial da Meta que já tenha sido verificada.

**Algo deu errado. Você precisará entrar em contato com o suporte e tentar novamente.**

Esse pode ser um problema intermitente no WhatsApp. Solução sugerida: tente novamente em alguns minutos.

## Erros de configuração de telefone

Erro

Descrição

**O número de telefone foi bloqueado. Verifique o aviso na visão geral do Gerenciador do WhatsApp ou siga as instruções na Página Inicial do Suporte para Empresas.**

Números de telefone bloqueados no WhatsApp não poderão ser adicionados a uma WABA. Solução sugerida: consulte o aviso na visão geral do Gerenciador do WhatsApp ou siga as instruções na [Página Inicial do Suporte para Empresas](https://business.facebook.com/business-support-home) para descobrir o motivo do bloqueio e o que fazer para resolver essa questão. Se você acredita que o telefone foi bloqueado por engano, fale conosco.

**Você atingiu o número máximo permitido de telefones vinculados nesta conta comercial. Para continuar, exclua um número de telefone ou solicite números adicionais. [Saiba mais.](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)**

No momento, limitamos a quantidade de telefones para todas as criações de contas no WhatsApp Business. Consulte [Números de telefone](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#register-phone-number) para saber mais sobre esses limites. Solução sugerida: instrua o administrador da empresa da conta do WhatsApp Business a seguir as etapas em Excluir um número de telefone de uma WABA da documentação Números de telefone ou entre em contato com o Suporte Direto para registrar mais de 20 números de telefone nas suas WABAs.

**Esse número de telefone já existe na sua lista de números de telefone.**

Você está tentando adicionar um número de telefone que já existe na sua conta do WhatsApp Business. Solução sugerida: volte para o fluxo ou reinicie-o para selecionar o número de telefone existente.

**Esse número já está registrado em uma conta do WhatsApp. Para usar este número, desconecte-o da conta existente. Depois, volte a esta página e digite o número novamente. Observação: pode levar até 3 minutos para que o número fique disponível.**

O número de telefone já foi cadastrado na nossa plataforma (ou seja, no WhatsApp Messenger, no app WhatsApp Business ou na API do WhatsApp Business). Solução sugerida: [cancele o registro do número](/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup) se quiser usá-lo ou registre um novo número.

**Seu nome verificado viola as diretrizes do WhatsApp. Edite esse nome e tente novamente.**

O nome usado para o perfil comercial do número de telefone não atende às nossas diretrizes. Solução sugerida: consulte as [diretrizes para nomes de exibição](https://www.facebook.com/business/help/757569725593362) e tente novamente.

**Algo deu errado. Você precisará entrar em contato com o suporte e tentar novamente.**

Ocorreu um problema ao criar o perfil comercial do número de telefone. Solução sugerida: insira novamente o nome correto do perfil comercial de acordo com as [diretrizes](https://www.facebook.com/business/help/757569725593362) e outros detalhes.

## Erros de verificação de telefone

Erro

Descrição

**A propriedade do número de telefone já foi verificada.**

Este número de telefone já foi verificado.

**Não foi possível verificar o código: você tentou registrar o número muitas vezes. Tente novamente mais tarde.**

As APIs do WhatsApp Business permitem um número limitado de tentativas de verificação do número de telefone com senha descartável. Solução sugerida: tente novamente mais tarde.

**O número de telefone não parece válido. Confira o número ou tente novamente após 5 minutos.**

Um número de telefone incorreto foi inserido ou não há suporte para números neste formato. Solução sugerida: verifique se o número está operacional e foi confirmado por uma operadora de telecomunicações. No momento, não damos suporte para números de resposta interativa de voz (IVR).

**Você fez tentativas demais.**

Para evitar spam, o sistema permite apenas um número limitado de tentativas de verificação. Solução sugerida: espere cerca de 12 horas antes de tentar novamente. Após esse período, volte ao fluxo e selecione contas e números de telefone existentes para verificar novamente.

**Ocorreu um erro ao verificar este número de telefone. Tente novamente mais tarde.**

Ocorreu um problema com o código de verificação. Solução sugerida: tente novamente mais tarde.

**Você solicitou o código muitas vezes.**

Para evitar spam, o sistema permite apenas um número limitado de tentativas de verificação. Solução sugerida: limitamos o número de vezes que você pode solicitar um código em determinado período. Volte ao fluxo após o tempo especificado e selecione contas e números de telefone existentes para solicitar um código novamente.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)