<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions -->
<!-- Scraped: 2025-12-20T17:50:04.658Z -->

# Versões

Updated: 4 de nov de 2025

Versão mais recente do Cadastro Incorporado: `v4`

Este guia fornece uma visão geral sobre o controle de versões no Cadastro Incorporado. A cadência de controle de versões ficará alinhado com a Graph API. As versões não são exclusivas. Os parceiros podem implementar aos poucos uma nova versão do cadastro incorporado para reduzir riscos. A versão do Cadastro Incorporado é determinada no **objeto extras** no código de implementação.

**Observação: a interface do usuário atualizada, disponível na prévia pública, será implementada em todas as versões do Cadastro Incorporado no início de setembro.**

## Versões disponíveis do cadastro incorporado

Versão

Data de lançamento

Disponível até

[v4](/documentation/business-messaging/whatsapp/embedded-signup/version-4)

8 de outubro de 2025

A definir

[v3-public-preview](/documentation/business-messaging/whatsapp/embedded-signup/version-3-public-preview)

14 de agosto de 2025

Outubro de 2026

[v2-public-preview](/documentation/business-messaging/whatsapp/embedded-signup/version-2-public-preview)

14 de agosto de 2025

Outubro de 2026

[v3.0](/documentation/business-messaging/whatsapp/embedded-signup/version-3)

29 de maio de 2025

Outubro de 2026

v2.0

Janeiro de 2023

Outubro de 2026

## Visão geral da disponibilidade de recursos

Versão

Tipos de recursos

Recursos

Estado de conclusão

Informações preenchidas automaticamente

[Registro de informações da sessão](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener)

Produtos (via configuração de login)

`V4`

`whatsapp_business_app_onboarding`

`app_only_install`

Os usuários podem concluir com um número de telefone verificado, não verificado ou sem um número de telefone

É possível preencher as informações da empresa. Nenhuma tela será pulada.

Enviado de volta para todos os fluxos

API de Mensagens de Marketing Lite (MM Lite)

Anúncios de clique para o WhatsApp (CTWA)

API de Conversões (WhatsApp)

`v3-public-preview`

`whatsapp_business_app_onboarding`

`app_only_install`

`marketing_messages_lite`

Os usuários podem concluir com um número de telefone verificado, não verificado ou sem um número de telefone

É possível preencher as informações da empresa. Nenhuma tela será pulada.

Enviado de volta para todos os fluxos

Não compatível

`v2-public-preview`

`only_waba_sharing`

`whatsapp_business_app_onboarding`

`marketing_messages_lite`

`app_only_install`

`marketing_messages_lite`

Os usuários finalizam com um número de telefone verificado

É possível preencher as informações da empresa. Nenhuma tela será pulada.

Enviado de volta para todos os fluxos

Não compatível

`V3`

`whatsapp_business_app_onboarding`

`app_only_install`

`marketing_messages_lite`

Os usuários podem concluir com um número de telefone verificado, não verificado ou sem um número de telefone

É possível preencher as informações da empresa. Nenhuma tela será pulada.

Enviado de volta para todos os fluxos

Não compatível

`V2`

`only_waba_sharing`

`whatsapp_business_app_onboarding`

`marketing_messages_lite`

`marketing_messages_lite`

Os usuários finalizam com um número de telefone verificado

É possível preencher as informações da empresa e pular telas.

Os parceiros precisam adicionar uma `sessionInfoVersion` para receber o retorno de chamada

Não compatível

## Versão 4

**Data de lançamento:** 8 de outubro de 2025 | [Alterações detalhadas](/documentation/business-messaging/whatsapp/embedded-signup/version-4)

**Configuração de login**

**Configuração de extras**

```
extras: {
    setup: "<SETUP_DATA>",
    features: [
      {
        name: "<FEATURE_NAME>"
      }
    ],
    featureType: "<FEATURE_TYPE>",
}
```

Espaço reservado

Descrição

Valor de exemplo

`<PREFILL_DATA>`

Dados da empresa preenchidos automaticamente no Cadastro Incorporado.

```
{
  "business": {
  "name": "Jaspers Market"
  }
}
```

`<FEATURE_NAME>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`app_only_install`: permite que os parceiros acessem WABAs via API usando um token detalhado (BISU) sem criar um (SUAT)

`<FEATURE_TYPE>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`whatsapp_business_app_onboarding`: habilita o fluxo personalizado de [integração de número de telefone do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

Para continuar usando a API de Mensagens de Marketing Lite, crie uma nova configuração de Login do Facebook com o produto MM Lite selecionado. Clique aqui para saber mais.

## Prévia pública da versão 3

**Lançamento:** 14 de agosto de 2025 | **Disponível até:** outubro de 2026 | [Alterações detalhadas](/documentation/business-messaging/whatsapp/embedded-signup/version-3-public-preview)

**Configuração de extras**

```
extras: {
    setup: "<SETUP_DATA>",
    features: [
      {
        name: "<FEATURE_NAME>"
      }
    ],
    featureType: "<FEATURE_TYPE>",
    version: "v3-public-preview"
}
```

Espaço reservado

Descrição

Valor de exemplo

`<PREFILL_DATA>`

Dados da empresa preenchidos automaticamente no Cadastro Incorporado.

```
{
  "business": {
  "name": "Jaspers Market"
   }
}
```

`<FEATURE_NAME>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`app_only_install`: permite que os parceiros acessem WABAs via API usando um token detalhado (BISU) sem criar um (SUAT)

`marketing_messages_lite`: habilita o fluxo de [integração da API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview).

`<FEATURE_TYPE>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`whatsapp_business_app_onboarding`: habilita o fluxo personalizado de [integração de número de telefone do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

Deixe **em branco** para habilitar o fluxo de integração padrão.

## Prévia pública da versão 2

**Lançamento:** 14 de agosto de 2025 | **Disponível até:** outubro de 2026 | [Alterações detalhadas](/documentation/business-messaging/whatsapp/embedded-signup/version-2-public-preview)

**Configuração de extras**

```
extras: {
    setup: "<SETUP_DATA>",
    features: [
      {
        name: "<FEATURE_NAME>"
      }
    ],
    featureType: "<FEATURE_TYPE>",
    sessionInfoVersion: "3"
    version: "v2-public-preview"
}
```

Espaço reservado

Descrição

Valor de exemplo

`<PREFILL_DATA>`

Dados da empresa preenchidos automaticamente no Cadastro Incorporado.

```
{
  "business": {
  "name": "Jaspers Market"
   }
}
```

`<FEATURE_NAME>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`app_only_install`: permite que os parceiros acessem WABAs via API usando um token detalhado (BISU) sem criar um (SUAT)

`marketing_messages_lite`: habilita o fluxo de [integração da API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview).

`<FEATURE_TYPE>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`whatsapp_business_app_onboarding`: habilita o fluxo personalizado de [integração de número de telefone do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

`only_waba_sharing`: habilita o fluxo personalizado de [integração de número de telefone do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users). **NÃO** exibirá a nova interface do usuário consolidada.

`marketing_messages_lite`: habilita o fluxo personalizado de [integração da API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview). **NÃO** exibirá a nova interface do usuário consolidada.

Deixe **em branco** para habilitar o fluxo de integração padrão.

## Versão 3

**Data de lançamento:** 29 de maio de 2025

**Disponível até:** outubro de 2026

[Post de blog](/blog/post/2025/05/29/introducing-graph-api-v23-and-marketing-api-v23/)

[Alterações detalhadas](/documentation/business-messaging/whatsapp/embedded-signup/version-3)

**Configuração de extras**

```
extras: {
    setup: "<SETUP_DATA>",
    features: [
      {
        name: "<FEATURE_NAME>"
      }
    ],
    featureType: "<FEATURE_TYPE>",
    version: "v3"
}
```

Espaço reservado

Descrição

Valor de exemplo

`<PREFILL_DATA>`

Dados da empresa preenchidos automaticamente no Cadastro Incorporado.

```
{
  "business": {
  "name": "Jaspers Market"
   }
}
```

`<FEATURE_NAME>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`app_only_install`: permite que os parceiros acessem WABAs via API usando um token detalhado (BISU) sem criar um (SUAT)

`marketing_messages_lite`: habilita o fluxo de [integração da API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview).

`<FEATURE_TYPE>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`whatsapp_business_app_onboarding`: habilita o fluxo personalizado de [integração de número de telefone do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

Deixe **em branco** para habilitar o fluxo de integração padrão.

## Versão 2

**Lançamento:** janeiro de 2023

**Disponível até:** outubro de 2026

**Configuração de extras**

```
extras: {
    setup: "<SETUP_DATA>",
    features: [
      {
        name: "<FEATURE_NAME>"
      }
    ],
    featureType: "<FEATURE_TYPE>",
    sessionInfoVersion: "3"
}
```

Acesse a [página de telas de preenchimento automático](/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data#injecting-data) para ver como injetar dados da empresa do cliente no Cadastro Incorporado.

Espaço reservado

Descrição

Valor de exemplo

`<PREFILL_DATA>`

Dados da empresa preenchidos automaticamente no Cadastro Incorporado.

```
{
  "business": {
  "name": "Jaspers Market"
   }
}
```

`<FEATURE_NAME>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`app_only_install`: permite que os parceiros acessem WABAs via API usando um token detalhado (BISU) sem criar um (SUAT)

`marketing_messages_lite`: habilita o fluxo de [integração da API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview).

`<FEATURE_TYPE>`

Indica um fluxo ou recurso a ser habilitado.

**Valores possíveis:**

`whatsapp_business_app_onboarding`: habilita o fluxo personalizado de [integração de número de telefone do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

`only_waba_sharing`: habilita o fluxo personalizado de [integração de número de telefone do app WhatsApp Business](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

`marketing_messages_lite`: habilita o fluxo personalizado de [integração da API de Mensagens de Marketing Lite](/documentation/business-messaging/whatsapp/marketing-messages/overview).

Deixe **em branco** para habilitar o fluxo de integração padrão.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)