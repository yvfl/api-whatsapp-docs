<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/qr-codes -->
<!-- Scraped: 2025-12-20T17:25:01.589Z -->

# QR codes e links curtos

Updated: 31 de out de 2025

Os QR codes e links curtos do WhatsApp criam uma porta de entrada digital para as empresas. Dessa forma, elas podem manter a conexão com clientes atuais e interagir com públicos novos. Para iniciar uma conversa, as pessoas só precisam ler o QR code com a câmera do próprio dispositivo móvel ou digitar o link curto. Não é necessário inserir o número de telefone.

Veja, crie, edite e exclua QR codes e links curtos na [API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/qr-codes) ou na [interface do usuário do Gerenciador de Negócios](https://www.facebook.com/business/help/890732351439459).

### Limitações

-   Um número de telefone da conta do WhatsApp Business (WABA, pelas iniciais em inglês) não pode ser associado a mais de dois mil QR codes e links curtos.
    -   A leitura do QR code pode iniciar uma mensagem preenchida automaticamente com até 140 caracteres de texto.
    -   As análises não estão disponíveis para QR codes e links curtos, já que limitamos a quantidade de dados registrada para proteger a privacidade dos usuários.
    

## Criar QR code

Para criar um QR code, envie uma solicitação POST ao ponto de extremidade [Número de telefone do WhatsApp Business > Qrdls de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api).

No corpo do post, inclua um objeto com uma propriedade `prefilled_message` definida como a mensagem de texto, assim como uma propriedade `generate_qr_image` definida como o formato de imagem de sua preferência (`SVG` ou `PNG`).

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/message_qrdls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "prefilled_message": "Cyber Monday",
  "generate_qr_image": "SVG"
}'
```

### Exemplo de resposta

```
{  "code": "4O4YGZEG3RIVE1",  "prefilled_message": "Cyber Monday 1",  "deep_link_url": "https://wa.me/message/4O4YGZEG3RIVE1",  "qr_image_url": "https://scontent-iad3-2.xx.fbcdn.net/..."}
```

## Ver uma lista de QR codes e links curtos

Para ver uma lista de todos os QR codes em um número de telefone comercial, envie uma solicitação GET ao ponto de extremidade [Número de telefone do WhatsApp Business > Qrdls de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api). Acesse o [artigo da Central de Ajuda](https://www.facebook.com/business/help/890732351439459) para ver como obter uma lista de códigos QR por meio do Gerenciador de Negócios.

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/message_qrdls' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "data": [    {      "code": "4O4YGZEG3RIVE1",      "prefilled_message": "Cyber Monday",      "deep_link_url": "https://wa.me/message/4O4YGZEG3RIVE1"    },    {      "code": "WOMVT6TJ2BP7A1",      "prefilled_message": "Tell me more about your production workshop",      "deep_link_url": "https://wa.me/message/WOMVT6TJ2BP7A1"    }  ]}
```

## Obter um QR code

Para ver informações sobre um QR code específico, envie uma solicitação GET ao ponto de extremidade [Número de telefone do WhatsApp Business > Qrdls de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api) e adicione o ID do QR code como parâmetro de caminho.

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/message_qrdls/4O4YGZEG3RIVE1' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "data": [    {      "code": "4O4YGZEG3RIVE1",      "prefilled_message": "Cyber Monday",      "deep_link_url": "https://wa.me/message/4O4YGZEG3RIVE1"    }  ]}
```

## Atualizar um QR code

Para atualizar um QR code, envie uma solicitação POST ao ponto de extremidade [Número de telefone do WhatsApp Business > Qrdls de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api).

No corpo do post, inclua uma propriedade `code` definida como o ID do QR code que você quer atualizar, assim como uma propriedade `prefilled_message` definida como novo texto do QR code.

### Exemplo de solicitação

```
curl 'https://graph.facebook.com/v24.0/106540352242922/message_qrdls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
    "code": "4O4YGZEG3RIVE1",
    "prefilled_message": "Cyber Tuesday"
}'
```

### Exemplo de resposta

```
{  "code": "4O4YGZEG3RIVE1",  "prefilled_message": "Cyber Tuesday",  "deep_link_url": "https://wa.me/message/4O4YGZEG3RIVE1"}
```

### Excluir QR code

Os QR codes não expiram automaticamente. Para excluir um QR code, envie uma solicitação DELETE ao ponto de extremidade [Número de telefone do WhatsApp Business > Qrdls de mensagens](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api) e adicione o ID do QR code que você quer desativar como parâmetro de caminho. Acesse a [Central de Ajuda](https://www.facebook.com/business/help/890732351439459) para ver como excluir códigos QR por meio do Gerenciador de Negócios.

### Exemplo de solicitação

```
curl -X DELETE 'https://graph.facebook.com/v24.0/106540352242922/message_qrdls/4O4YGZEG3RIVE1' \
-H 'Authorization: Bearer EAAJB...'
```

### Exemplo de resposta

```
{  "success": true}
```

## Mensagens preenchidas automaticamente

Os QR codes e links curtos podem ser programados para preencher mensagens automaticamente. As mensagens preenchidas de maneira automática podem ter até 140 caracteres de texto. Esse tipo de mensagem é totalmente personalizado e pode ser atualizado ou excluído a qualquer momento.

## Experiência do usuário

Situação do usuário

Comportamento esperado

O usuário tenta acessar um código ou link que foi excluído.

O usuário vê uma mensagem de erro que diz: "Este código QR (link curto) expirou".

O usuário faz a leitura de um QR code ou digita um link curto de uma empresa que ele bloqueou anteriormente.

O usuário recebe um aviso perguntado se ele quer desbloquear a empresa e enviar uma mensagem.

O usuário clica em um link curto em um navegador desktop.

O cliente para computador é aberto com a mensagem preenchida na conversa. Se não houver um cliente instalado, o usuário deverá realizar essa ação.

## Boas práticas

### Formato

Recomendamos que o código QR seja gerado como um gráfico vetorial escalonável (`.svg`). Você pode redimensionar um código QR para aprimorar a embalagem, a sinalização e outras características do produto.

### Aparência

Não temos um recurso nativo para personalizar códigos QR. No entanto, é possível baixar e editar códigos no software da sua preferência. Recomendamos não personalizar a cor, a aparência nem o aspecto do código em si, para não comprometer a legibilidade.

## Perguntas frequentes

**Como faço para criar um QR code ou um link curto?**

Veja, crie, edite e exclua QR codes e links curtos na [API de Gerenciamento do WhatsApp Business](/documentation/business-messaging/whatsapp/qr-codes) ou na [interface do usuário do Gerenciador de Negócios](https://www.facebook.com/business/help/890732351439459).

**Quantos QR codes e links curtos posso criar?**

Um número de telefone da conta do WhatsApp Business (WABA, pelas iniciais em inglês) não pode ser associado a mais de dois mil QR codes e links curtos.

**Qual é o melhor formato para otimizar a qualidade de impressão dos QR codes?**

Para obter a melhor qualidade possível em materiais impressos, recomendamos usar o formato de arquivo `.svg`.

**Qual é a melhoria dos links curtos em relação aos links wa.me atuais?**

Com os novos links curtos, será possível editar ou excluir a qualquer momento as mensagens preenchidas automaticamente que estiverem associadas a um link. Além disso, a sintaxe da URL será reduzida a um código aleatório. Isso eliminará a necessidade de incorporar mensagens à URL e ocultará o telefone.

**O que acontecerá se um usuário clicar em um link curto no desktop?**

Se o usuário tiver instalado o cliente do WhatsApp para computador, uma conversa com sua empresa será aberta. Caso contrário, o usuário receberá um comando interativo para instalar o cliente.

**O que acontecerá se um usuário ler um QR code ou clicar em um link curto que foi excluído?**

Caso um usuário tente acessar um QR code ou um link curto que foi excluído, uma mensagem de erro será exibida para indicar que esse código/link expirou.

**Qual é a diferença em relação aos QR codes gerados atualmente no meu ambiente de desenvolvimento?**

Agora, é possível gerar e gerenciar QR codes diretamente na API de Gerenciamento do WhatsApp Business. Os usuários podem fazer a leitura do QR code com a câmera do WhatsApp, do iOS ou do Android.

Além disso, os QR codes do WhatsApp trazem as seguintes vantagens:

-   As mensagens preenchidas automaticamente são totalmente personalizáveis e podem ser alteradas ou excluídas a qualquer momento.-   Os usuários sempre acessam o app diretamente, sem passar por uma página intersticial.-   Em caso de QR code expirado, a experiência no app enviará uma mensagem vazia ao usuário.

**Como posso garantir que os usuários leiam o código no idioma certo?**

Você é responsável por usar um QR code adequado à localização e ao idioma provável dos usuários.

**Será possível usar análises para monitorar as leituras de QR codes?**

As análises não estão disponíveis para QR codes e links curtos, já que limitamos a quantidade de dados registrada para proteger a privacidade dos usuários.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)