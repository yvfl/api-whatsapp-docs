<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits -->
<!-- Scraped: 2025-12-20T17:34:03.678Z -->

# Limites por usuário para modelos de mensagem de marketing

Updated: 4 de nov de 2025

**Próximas alterações**

_A partir de 3 de março de 2025_, analisaremos o volume geral de mensagens pessoais e empresariais na caixa de entrada de um usuário do WhatsApp, além das taxas de leitura de mensagens de marketing recentes, para determinar se ele deve receber menos mensagens de modelos de marketing e qual deve ser o limite. Isso significa que, se tiver baixa atividade na caixa de entrada ou não tiver interagido com muitas das mensagens de marketing que recebeu ultimamente, a pessoa pode receber menos mensagens de marketing para garantir um equilíbrio saudável no volume de mensagens na sua caixa de entrada. A partir do final do segundo trimestre, também alinharemos o limite de marketing por usuário com as alterações de preços por mensagem para que todas as mensagens de marketing entregues sejam contadas no limite de marketing por usuário.

_A partir de 1º de abril de 2025_, pausaremos temporariamente a entrega de todas as mensagens de modelo de marketing para os usuários do WhatsApp que têm um número de telefone dos Estados Unidos (código de discagem +1 e código de área dos EUA). O objetivo dessa pausa é permitir que possamos melhorar experiência do consumidor nos EUA, o que trará melhores resultados para as empresas. A tentativa de enviar uma mensagem de modelo a usuários do WhatsApp com um número de telefone dos EUA após esta data [resultará em um erro](#how-we-notify-via-error-code).

## O que é isso?

O WhatsApp poderá limitar o número de mensagens de modelo de marketing que uma pessoa recebe de uma empresa em períodos com menos probabilidade de engajamento. Isso será determinado com base em vários fatores, incluindo uma visão dinâmica da taxa de leitura de mensagens de marketing recentes de uma pessoa e quantas mensagens de amigos, familiares e empresas existem na caixa de entrada. A partir de 1º de abril de 2025, para focar a criação da experiência do consumidor, o WhatsApp não entregará nenhuma mensagem de modelo de marketing para pessoas com números de telefone dos Estados Unidos (código de discagem +1 e código de área dos EUA).

## Por que isso é importante

O WhatsApp descobriu que limitar o envio de modelos de marketing maximiza o engajamento dessas mensagens e melhora a experiência do usuário, o que foi comprovado por meio de melhorias nas taxas de leitura e no sentimento do usuário. Essa limitação ajuda os usuários do WhatsApp a considerarem as mensagens comerciais mais valiosas e a não terem a sensação de que estão recebendo notificações demais. Como isso afeta sua empresa

Nosso limite de marketing por usuário é adaptado ao longo do tempo com base nos níveis de engajamento recentes de uma pessoa. Talvez você entregue menos mensagens a alguns usuários durante períodos de baixas nas taxas de leitura de marketing ou na atividade geral na caixa de entrada, mas sua capacidade de alcançar as pessoas quando elas estiverem mais engajadas não vai mudar.

## Alinhamento dos limites de marketing por usuário com as alterações futuras nos preços por mensagem

Com implementação gradual no segundo trimestre de 2025, as [alterações de preços](/documentation/business-messaging/whatsapp/pricing) por mensagem influenciarão o limite de marketing por usuário. Antes, o limite se aplicava apenas a mensagens de modelo de marketing que normalmente abririam uma nova conversa de marketing. As empresas podiam enviar uma mensagem de modelo de marketing adicional se uma conversa já estivesse aberta entre você e um usuário do WhatsApp.

Agora, as empresas poderão enviar um número ilimitado de mensagens de marketing, porém, cada mensagem entregue contará para o limite de marketing por usuário. Uma exceção é que se uma pessoa responder a uma mensagem de marketing, ela iniciará uma [janela de atendimento ao cliente](/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) de 24 horas. As mensagens de marketing enviadas nessa janela não contarão para o limite de uma pessoa.

## Como enviamos notificações via código de erro

Caso uma mensagem não seja enviada devido à aplicação do limite de mensagem de modelo de marketing por usuário, um webhook de mensagens será disparado com o status definido como "falha" e o código (de erro) definido como `131049` (para API de Nuvem).

Se você receber esse código de erro e suspeitar que seja devido ao limite, espere pelo menos 24 horas antes de reenviar a mensagem de modelo. Fazer isso só resultará em outra resposta de erro, já que o limite pode estar em vigor em diferentes períodos.

Continuaremos aperfeiçoando nossa abordagem e agradecemos sua parceria à medida que investimos para tornar o WhatsApp a melhor experiência possível para sua empresa e seus clientes.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)