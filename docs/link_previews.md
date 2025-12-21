<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews -->
<!-- Scraped: 2025-12-20T17:28:45.224Z -->

# Prévias de links

Updated: 5 de nov de 2025

O WhatsApp é compatível com prévias de links enviados em conversas ou compartilhados no status. Sempre que possível, o WhatsApp tentará gerar uma prévia do link para melhorar a experiência do usuário. Para habilitar essa experiência, o WhatsApp precisa que os proprietários de links definam propriedades otimizadas especificamente para ele. Se esses requisitos não forem atendidos, não será possível ver uma prévia do link.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/316961531_1509723012881470_8719776711697314858_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=XCmjx4GgUuoQ7kNvwEnvnKX&_nc_oc=AdmjsNK5CowJto7JA8DedQxFWrG4zwZ0XBXxTTJdG-u83VQj8W2Pb2zZq3BQjPFFKAI&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=cfFANm_8rSPbgIKnohyNoQ&oh=00_AflQvvSc_lBMxuOuxCp25EyMmcp0UjZIJ2ZQpUoym3smdA&oe=69613224)

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/316956074_903853424360664_8885274580316527555_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=PtPh6gMfrCUQ7kNvwHajXEl&_nc_oc=AdkXrph-6npJ3qJGdU458biHQE45kdTnDJoonldpxaLAbTxd1Rva1kOIYTod0MDvKFI&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=cfFANm_8rSPbgIKnohyNoQ&oh=00_AfmbsPDcClRw4kwn91LeknSgq7lnM_FTpC59N3p1WWqwUg&oe=696115EF)

## Começar

Para começar a usar as prévias de links, é preciso adicionar marcações HTML à seção HEAD da página.

```
<head>
  <meta property="og:title" content=”WhatsApp"/>
  <meta property="og:description" content="Simple. Secure. Reliable messaging."/><meta property="og:url" content="https://whatsapp.com"/>
  <meta property="og:image"content="https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg"/>
</head>
```

O `<head>` que contém as marcações HTML deve aparecer dentro dos primeiros 300 KB do HTML. O HTML completo não precisa se encaixar em 300 KB.

As marcações `<og:title>`, `<og:description>` e `<og:url>` devem ficar dentro da tag `<head>`. Elas não podem estar vazias.

A marcação `<og:title>` representa o título do conteúdo sem nenhuma indicação de marca. O WhatsApp exibirá esse texto na cor principal, em negrito e no máximo em duas linhas.

A marcação `<og:description>` representa a descrição do conteúdo. O WhatsApp exibirá o texto em um tamanho menor que o título e com a cor de texto secundária. O limite é de até duas linhas e até 80 caracteres.

A marcação `<og:url>` representa a URL canônica da página. A URL deve ser a não decorada, sem variáveis de sessão, parâmetros de identificação do usuário nem contadores.

A marcação `<og:image>` é uma URL absoluta para uma imagem usada como miniatura da prévia do link. A imagem deve ter menos de 600 KB. A imagem deve ter 300 px ou mais de largura com taxa de proporção de 4:1 largura/altura ou menos.

O WhatsApp fará o possível para mostrar prévias de links, por exemplo, flexibilizando requisitos, procurando outras marcações HTML e revertendo para pequenas prévias de links. Porém, não conte com isso. Não há garantia de que funcionará (e continuará funcionando).

O WhatsApp faz o crawl da página da web por meio de uma solicitação HTTP GET.

A solicitação terá o cabeçalho `User-Agent` definido como `WhatsApp/2.x.x.x A|I|N`, em que `x` são as versões numéricas principais/secundárias do WhatsApp, e `A|I|N` é para Android, iOS e web, respectivamente. Alguns exemplos de valores de cabeçalho `User-Agent` válidos: `WhatsApp/2.22.20.72 A`, `WhatsApp/2.22.19.78 I`, `WhatsApp/2.2236.3 N`. Os proprietários de sites podem identificar essas solicitações recebidas e personalizar o conteúdo (marcações e imagens) de maneira adequada.

A solicitação também terá o cabeçalho `Accept-Language` definido como o idioma selecionado pelo remetente, se houver. Confira alguns exemplos de valores de cabeçalho `Accept-Language` válidos: `en`, `fr` e `de`. Do mesmo modo, os proprietários de sites podem personalizar o idioma do conteúdo. O idioma definido pelo destinatário também será visto por ele.

## Como fazer a verificação?

Comece escrevendo uma mensagem com o link para testar (não toque para enviar). Em nome do remetente, o WhatsApp rastreará essa URL e tentará gerar uma prévia do link.

Se a prévia não aparecer acima da caixa do editor após dez segundos, verifique se todos os requisitos mencionados foram atendidos. Caso contrário, prossiga com o envio da mensagem tocando no botão "enviar".

Se a prévia não aparecer no tamanho grande esperado, verifique se os requisitos de imagem mencionados acima foram atendidos. Caso contrário, as prévias de links estão funcionando conforme o esperado. Pronto!

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)