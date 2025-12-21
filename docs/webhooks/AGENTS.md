# Webhooks

Sistema de notificações em tempo real para receber eventos da WhatsApp Business API.

## Visão Geral

Os webhooks permitem que sua aplicação receba notificações sobre:
- **Mensagens recebidas**: Quando usuários enviam mensagens
- **Status de mensagens**: Quando mensagens são entregues, lidas ou falham
- **Atualizações de conta**: Mudanças na conta ou números
- **Eventos de templates**: Status de aprovação de templates

## Configuração Básica

1. **Criar endpoint**: Seu servidor deve ter um endpoint HTTPS público
2. **Configurar webhook**: Registrar URL no Meta App Dashboard
3. **Verificar assinatura**: Validar requisições usando assinatura do Meta
4. **Processar eventos**: Tratar diferentes tipos de eventos recebidos

## Endpoint de Configuração

```
POST /v23.0/{APP_ID}/subscriptions
```

**Documentação completa**: [Webhooks > Visão Geral](./visao_geral/overview.md)

## Tipos de Eventos

- **messages**: Mensagens recebidas e status de envio
- **account_alerts**: Alertas da conta
- **message_template_status_update**: Atualizações de status de templates
- **phone_number_quality_update**: Atualizações de qualidade do número

Veja todos os tipos em [Webhooks > Referência](./referencia/).

## Subpastas

- [Referência](./referencia/)
- [Visão Geral](./visao_geral/)

