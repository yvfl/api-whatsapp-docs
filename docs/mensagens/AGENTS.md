# Mensagens

Documentação completa sobre envio e recebimento de mensagens na WhatsApp Business API.

## Visão Geral

A API permite enviar diferentes tipos de mensagens:
- **Mensagens de texto**: Mensagens simples de texto
- **Mensagens de mídia**: Imagens, vídeos, áudios, documentos
- **Mensagens interativas**: Botões, listas, fluxos
- **Mensagens com template**: Mensagens pré-aprovadas para marketing

## Endpoint Principal

```
POST https://graph.facebook.com/v23.0/{PHONE_NUMBER_ID}/messages
```

**Autenticação**: Bearer Token necessário
**Content-Type**: application/json

## Documentos Disponíveis

- [Visão Geral - Enviar Mensagens](./visao_geral/send_messages.md) - Guia completo sobre envio de mensagens

## Subpastas

- [Tipos de Mensagens](./tipos_de_mensagens/) - Todos os tipos de mensagens disponíveis (texto, imagem, vídeo, áudio, documentos, interativas, templates)
- [Limites de Mensagens](./limites_de_mensagens/) - Limites e restrições de envio
- [Recursos Adicionais](./recursos_adicionais/) - Recursos extras como mídia, confirmações de leitura, indicadores de digitação

## Casos de Uso Comuns

1. **Enviar mensagem de texto**: Ver [Mensagens de Texto](./tipos_de_mensagens/text_messages.md)
2. **Enviar imagem**: Ver [Mensagens de Imagem](./tipos_de_mensagens/image_messages.md)
3. **Enviar template**: Ver [Mensagens com Template](./tipos_de_mensagens/template_messages.md)
4. **Criar mensagem interativa**: Ver [Mensagens Interativas](./tipos_de_mensagens/interactive_reply_buttons_messages.md)

## Limitações Importantes

- **Janela de 24 horas**: Após receber mensagem do usuário, você pode enviar mensagens livres por 24h
- **Templates obrigatórios**: Para mensagens após 24h, é necessário usar templates aprovados
- **Rate limits**: Existem limites de envio baseados na qualidade da conta

Veja mais detalhes em [Limites de Mensagens](./limites_de_mensagens/).

