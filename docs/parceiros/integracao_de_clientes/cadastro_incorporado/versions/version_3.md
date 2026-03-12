<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-3 -->
<!-- Scraped: 2026-03-10T21:42:49.121Z -->

# Versão 3

Updated: 11 de dez de 2025

Estamos implementando um cadastro de versões no Cadastro Incorporado que ficará alinhado com a Graph API. A versão 3 será lançada em 29 de maio para todos os parceiros adotarem e incluirá as alterações a seguir.

## Os clientes empresariais agora podem concluir o fluxo sem um número de telefone

Na versão 2, o registro de um número de telefone verificado era sempre necessário para concluir o fluxo, a menos que os parceiros tivessem habilitado a opção de ignorar essa etapa. Agora, você pode concluir o fluxo com status como "verificado", "não verificado" ou "sem número de telefone". Você pode fazer o processo de Cadastro Incorporado novamente, acessar o Gerenciador do WhatsApp ou o parceiro pode usar [chamadas de API para verificar o número](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers).

Para determinar o status do número de telefone, acesse a documentação sobre registro de informações da sessão.

## O registro de informações da sessão é habilitado automaticamente

O registro de informações da sessão será habilitado automaticamente para todos os parceiros que usarem a versão 3. Os parceiros ainda precisarão incluir um detector de eventos na mesma janela do Cadastro Incorporado para processar as informações recebidas.

## Inclusão da propriedade `features` na configuração

Agora você pode usar a propriedade de recursos para habilitar diversas opções no Cadastro Incorporado. A propriedade permite incluir vários recursos, em vez de apenas um, na propriedade featureType da versão 2.

### Sintaxe da solicitação da versão 3

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '<CONFIGURATION_ID>', // your configuration ID goes here
    response_type: 'code',
    override_default_response_type: true,
    extras: {
  version: 'v3'
  setup: {},
  features: [<FEATURE_NAME>],
      featureType: '<FEATURE_TYPE>'
    }
}
```

Espaço reservado

Descrição

Exemplo

`<FEATURE_NAME>`

O nome do recurso que será habilitado na configuração do Cadastro Incorporado.

Observação: você pode deixar o valor em branco para seguir o fluxo padrão.

Os valores podem ser os seguintes:

-   `app_only_install`: permite que os parceiros acessem apenas contas do WhatsApp Business via API usando um [token da empresa](/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).-   `marketing_messages_lite`: habilita o fluxo de integração da API de Mensagens de Marketing para WhatsApp.

```
{  features: [    {      name: 'marketing_messages_lite'    }  ]}
```

`<FEATURE_TYPE>`

O nome dos tipos de recursos que serão habilitados na configuração do Cadastro Incorporado.

O valor pode ser apenas `whatsapp_business_app_onboarding`, que habilita o fluxo personalizado de integração de número de telefone do app WhatsApp Business.

`whatsapp_business_app_onboarding`

## Remoção de várias opções `featuretype` na configuração do Cadastro Incorporado

Na [versão 2](/documentation/business-messaging/whatsapp/embedded-signup/versions#version-2), os clientes corporativos que habilitarem um fluxo personalizado deverão concluir o Cadastro Incorporado várias vezes, dependendo do número de featureTypes adicionados à configuração.

### Remoção de `only_waba_sharing`

O [fluxo para pular a tela de número de telefone](/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition) permite um processo de integração mais simples, no qual a conta do WhatsApp Business é compartilhada sem a necessidade de passar pelas etapas de configuração do número de telefone. Esse fluxo não será mais compatível com a versão 3. Se quiser usar o fluxo, utilize a versão 2.

### Remoção de `marketing_messages_lite`

A API de Mensagens de Marketing para o WhatsApp ainda será compatível por meio do argumento de recursos. Se você ainda quiser usar o fluxo, atualize sua configuração para a seguinte.

### Remoção de `coexistence`

Para iniciar o fluxo de integração do app WhatsApp Business, os parceiros deverão usar `whatsapp_business_app_onboarding` em vez de `coexistence`.

## O Cadastro Incorporado preenchido não pulará mais telas.

Os parceiros ainda poderão preencher previamente as informações da empresa no Cadastro Incorporado, mas o cliente corporativo não terá a opção de ignorar nenhuma tela do fluxo. Os parceiros que ainda quiserem usar o fluxo devem permanecer com a versão 2.

## Os parceiros de mensuração devem continuar com a versão 2

No momento, a integração de produtos de mensuração só é aceita com a versão 2. É importante continuar apoiando os Parceiros de Métricas, e essa integração terá suporte em uma versão futura.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)