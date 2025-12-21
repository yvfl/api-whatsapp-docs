<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/pixel-tracking -->
<!-- Scraped: 2025-12-20T17:51:45.130Z -->

# Rastreamento com o Pixel da Meta

Updated: 4 de nov de 2025

O [Pixel da Meta](/docs/meta-pixel) é um trecho de código JavaScript que permite a você rastrear a atividade dos visitantes do seu site. Ele funciona por meio do carregamento de uma pequena biblioteca de funções que pode ser usada sempre que o visitante de um site executa uma ação (ou seja, um evento) que você quer rastrear. Isso é chamado de conversão.

A incorporação do Pixel da Meta é um recurso que mostra quantos visitantes de uma determinada página clicaram no botão de cadastro incorporado. Isso pode ajudar você a entender quantas pessoas consideraram o WhatsApp e quantas converteram.

Certifique-se de que a [configuração inicial do código](/docs/meta-pixel/get-started#base-code) dispare um evento `Pageview` com seu ID do app do Facebook e com o parâmetro `feature`.

## Exemplo

```
<!-- Meta Pixel Code --><script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '<i>your-pixel-id</i>');
  fbq('track', 'PageView', {appId: '<i>your-facebook-app-id</i>', feature: 'whatsapp_embedded_signup'});
</script><noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<i>your-pixel-id</i>&ev=PageView&noscript=1"/></noscript><!-- End Meta Code -->
```

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)