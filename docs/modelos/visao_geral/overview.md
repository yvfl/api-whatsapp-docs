<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview -->
<!-- Scraped: 2025-12-20T17:30:10.547Z -->

# Modelos

Updated: 14 de nov de 2025

Saiba mais sobre modelos, seus usos e limitações e os vários tipos de modelos que você pode criar.

Os modelos dos ativos da conta do WhatsApp Business podem ser enviados em mensagens de modelo por meio da API de Nuvem ou da API de Mensagens de Marketing Lite. As mensagens de modelo são o único tipo de mensagem que pode ser enviado aos usuários do WhatsApp fora de uma[janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows).Normalmente, essas mensagens são usadas para envios em massa ou quando é necessário enviar uma comunicação a um usuário, mas nenhuma janela de atendimento ao cliente está aberta entre ele e você.

## Criação

Use o ponto de extremidade [POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates) ou o [painel de modelos de mensagem](https://business.facebook.com/latest/whatsapp_manager/message_templates) no Gerenciador do WhatsApp para criar um modelo.

A criação de modelos via API usa uma sintaxe comum. A maior parte da variação ocorre na string de categoria, que atribui uma categoria ao modelo, e na matriz de componentes, que define os componentes que compõem o modelo.

Você pode criar no máximo 100 modelos em uma conta do WhatsApp Business por hora.

### Sintaxe comum

```
curl 'https://graph.facebook.com/v23.0/102290129340398/message_templates' \
-H 'Authorization: Bearer EAAJB...' \
-H 'Content-Type: application/json' \
-d '
{
"fname": "<NAME>",
"category": "<CATEGORY>",
"language": "<LANGUAGE>",
"parameter_format": "<PARAMETER_FORMAT>",
"components": [<COMPONENTS>]
}'
```

### Nomes

Cada modelo deve ter um nome, mas os nomes não são exclusivos. Essa flexibilidade permite criar vários modelos com o mesmo nome, mas em idiomas diferentes.

Os nomes dos modelos estão limitados a um máximo de 512 caracteres com caracteres alfanuméricos minúsculos e sublinhados.

### Categorias

Cada modelo deve ser categorizado como **autenticação**, **marketing** ou **utilidade**. Nosso documento [categorização de modelos](/documentation/business-messaging/whatsapp/templates/template-categorization) descreve como atribuir a categoria adequada a um modelo e o que pode acontecer se determinarmos que um modelo foi incorretamente categorizado.

Observe que as categorias de modelos também são considerados nos [preços](/documentation/business-messaging/whatsapp/pricing).

### Componentes

Os modelos são compostos de vários componentes de texto, mídia e interface do usuário, que você define na criação de modelos. Nosso documento [Componentes de modelos](/documentation/business-messaging/whatsapp/templates/components) descreve todos os componentes possíveis e como defini-los.

Como há muitos componentes para escolher, dedicamos documentos e subdocumentos de modelos de [autenticação](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates), [marketing](/documentation/business-messaging/whatsapp/templates/marketing-templates) e [utilidade](/documentation/business-messaging/whatsapp/templates/utility-templates/utility-templates), cada um com exemplos de código que mostram como criar vários modelos com componentes comumente usados.

### Idiomas

Você deve atribuir um [código de idioma para o modelo](/documentation/business-messaging/whatsapp/templates/supported-languages) no momento da criação. Strings e variáveis de modelos não são traduzidas pela Meta, portanto, você é responsável por fornecer strings e parâmetros de exemplo no idioma adequado.

Se você criar vários modelos com o mesmo nome, mas com idiomas diferentes, cada modelo conta para seu [limite de modelos](#template-limits).

### Formatos de parâmetros

Alguns componentes do modelo permitem definir strings que contêm um ou mais parâmetros (descritos como "variáveis" no Gerenciador do WhatsApp). Estes são substituídos por valores incluídos por você na sua carga de envio de mensagens quando você envia o modelo.

Após a criação do modelo, se uma string incluir um ou mais parâmetros, você pode especificar o formato deles, seja `named` ou `positional`, e você deve incluir um valor de exemplo para cada parâmetro. Se não especificar um formato, o modelo usará o formato `positional` por padrão.

#### Parâmetros nomeados

Os parâmetros que usam o formato nomeado devem ser strings únicas, compostas por caracteres minúsculos e sublinhados, envoltos em chaves duplas, por exemplo, `{{first_name}}`. Valores de exemplo em cargas de criação de modelos e valores reais em cargas de envio de modelos podem aparecer em qualquer ordem.

Exemplo de carga de criação de modelos com parâmetros nomeados:

```
```

Exemplo de carga de envio de modelos que usa parâmetros nomeados:

```
```

### Parâmetros posicionais

Os parâmetros posicionais devem ser números de índice de matriz ordenados, começando em 1, envoltos em chaves dupla: (`{{1}}`...`{{2}}`...e assim por diante). Valores de exemplo nas cargas de criação de modelos e valores reais nas cargas de envio de modelos devem aparecer na ordem em que seus espaços reservados correspondentes aparecem na string de texto do componente.

Exemplo de carga de criação de modelos com parâmetros posicionais:

```
```

Exemplo de carga de envio de modelos que usa parâmetros posicionais:

```
```

## Mídia

Os componentes do cabeçalho do modelo podem mostrar ativos de mídia. Se estiver criando um modelo com um cabeçalho de mídia, você deverá usar a [API de Carregamento Retomável](/docs/graph-api/guides/upload) para obter um nome de usuário do ativo e incluir esse nome no seu pedido de criação de modelo. O ativo de exemplo será analisado como parte da [análise do modelo](/documentation/business-messaging/whatsapp/templates/template-review).

## Análise do modelo

Os modelos são automaticamente analisados após a criação ou após a edição. Se o seu modelo for aprovado, o status será definido como `APPROVED` e você poderá começar a enviá-lo em mensagens de modelo. Se for rejeitado ou se o seu estado mudar para qualquer outro valor, não poderá ser enviado em mensagens de modelo.

Consulte o documento sobre [análise do modelo](/documentation/business-messaging/whatsapp/templates/template-review) para saber mais sobre o processo de análise, motivos comuns de rejeição e o que pode fazer se seu modelo for rejeitado.

## Status do modelo

Os modelos precisam ter o status `APPROVED`, antes de serem enviados em mensagens. O status de um modelo é inicialmente definido pelo processo de análise de modelos, mas pode ser alterado para outro valor baseado no uso e no [feedback de qualidade](/documentation/business-messaging/whatsapp/templates/template-quality).

As alterações de status do modelo são comunicadas via webhooks de [message\_template\_status\_update](/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update), mas você pode usar o ponto de extremidade[GET /<TEMPLATE\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#fields) e pedir o campo `status` para obter o status de um modelo a qualquer momento.

### Exemplo de pedido

```
curl 'https://graph.facebook.com/v23.0/1259544702043867?fields=status' \-H 'Authorization: Bearer EAAJ...'
```

### Exemplo de resposta

```
```

Consulte a referência do ponto de extremidade [GET /<TEMPLATE\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#fields) para conferir uma lista de valores de status possíveis ​​e os respectivos significados.

### Gerenciador do WhatsApp

O painel [Gerenciar modelos](https://business.facebook.com/latest/whatsapp_manager/message_templates) no Gerenciador do WhatsApp também exibe os status dos modelos e adiciona classificações de qualidade para modelos aprovados (`active`):

-   **Em análise**: indica que o modelo ainda está em análise. A análise pode levar até 24 horas.-   **Rejeitado**: o modelo foi rejeitado durante o processo de análise ou viola nossas políticas.-   **Ativo – Qualidade pendente**: o modelo de mensagem ainda precisa receber feedback sobre a qualidade ou informações a respeito do índice de leitura dos clientes. Os modelos de mensagem com esse status podem ser enviados aos clientes.-   **Ativo – Alta qualidade**: o modelo recebeu pouco ou nenhum feedback negativo dos clientes. Os modelos de mensagem com esse status podem ser enviados aos clientes.-   **Ativo – Qualidade média**: o modelo recebeu feedback negativo de diversos clientes ou apresenta um baixo índice de leitura e pode ser pausado ou desabilitado em breve. Os modelos de mensagem com esse status podem ser enviados aos clientes.-   **Ativo – Qualidade baixa**: o modelo recebeu feedback negativo de diversos clientes ou apresenta um baixo índice de leitura. Os modelos com esse status podem ser enviados aos clientes, mas talvez sejam suspensos ou desabilitados em breve. Por isso, recomendamos que você resolva os problemas relatados pelos clientes.-   **Pausado**: o modelo foi pausado devido ao feedback negativo recorrente dos clientes ou ao baixo índice de leitura. Os modelos de mensagem com esse status não podem ser enviados aos clientes. Confira [Pausa de modelos](/documentation/business-messaging/whatsapp/templates/template-pausing).-   **Desabilitado**: o modelo foi desabilitado devido a feedback negativo recorrente dos clientes. Os modelos de mensagem com esse status não podem ser enviados aos clientes.-   **Apelação solicitada**: indica que foi feita uma apelação.

## Limites de modelos

O número de modelos que uma conta do WhatsApp Business pode ter é determinado pelo portfólio empresarial principal.

Caso o portfólio empresarial principal não tenha sido verificado, cada uma das contas do WhatsApp Business pode ter 250 modelos de mensagens. Entretanto, se o portfólio tiver sido [verificado](https://www.facebook.com/business/help/1095661473946872)e pelo menos uma das contas tiver um número de telefone comercial com um [nome de exibição](/documentation/business-messaging/whatsapp/display-names) aprovado, cada conta do WhatsApp Business poderá ter até seis mil modelos.

Adicionalmente, existem limites no número de modelos que você pode enviar, bem como processos que podem afetar a apresentação de modelos:

-   [Limites de mensagens:](/documentation/business-messaging/whatsapp/messaging-limits) um limite para o número de modelos que você pode enviar fora das janelas de atendimento ao cliente.-   [Regularidade do modelo:](/documentation/business-messaging/whatsapp/templates/template-pacing) um processo que permite aos usuários do WhatsApp dar feedback sobre os modelos de mensagens.-   [Pausa do modelo:](/documentation/business-messaging/whatsapp/templates/template-pausing) um processo que pausa temporariamente os modelos de mensagens que receberam feedback negativo.-   [Limites de mensagens de modelos de marketing por usuário:](/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits) um processo que limita o número de modelos de mensagens de marketing que um determinado usuário do WhatsApp pode receber de qualquer empresa.

## Tempo de vida

Se uma mensagem enviada a um usuário do WhatsApp não puder ser entregue, o sistema continuará tentando entregar por um período conhecido como TTL (tempo de vida). É possível personalizar o TTL para modelos após a criação do modelo.

Confira o documento [Tempo de vida](/documentation/business-messaging/whatsapp/templates/time-to-live) para saber mais.

## Classificação de qualidade

Classificação de qualidade do modelo é um sistema usado para avaliar a qualidade dos modelos de mensagem com base no uso, no feedback dos clientes e no engajamento. Essa classificação ajuda a manter um ecossistema de mensagens de alta qualidade e ajuda a garantir o envio de mensagens que sejam relevantes e bem recebidas.

Confira o documento [classificação de qualidade dos modelos](/documentation/business-messaging/whatsapp/templates/template-quality) para saber mais sobre classificações de qualidade, como elas podem afetar o status de um modelo e como receber notificações sobre mudanças nas pontuações de qualidade dos modelos.

## Sequência de entrega de várias mensagens

Se você enviar várias mensagens, talvez elas não sejam entregues na mesma ordem dos pedidos da API. Caso haja uma ordem a ser seguida, verifique se cada mensagem foi entregue no status `delivered` do [webhook de mensagens](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) antes de enviar a próxima.

## Gerenciamento de modelos

Confira o documento [Gerencimaento de modelos](/documentation/business-messaging/whatsapp/templates/template-management) para ver uma lista de pontos de extremidade frequentemente usados para obter, atualizar e excluir modelos.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)