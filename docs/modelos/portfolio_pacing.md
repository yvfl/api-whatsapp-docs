<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/portfolio-pacing -->
<!-- Scraped: 2026-01-24T01:04:55.465Z -->

# Business portfolio pacing

Updated: 8 de dez de 2025

This feature is being released gradually over the coming weeks so may not apply to you immediately.

Business portfolio pacing is a template message delivery batching mechanism that allows time to gather feedback on any template sent as part of a large-scale messaging campaign.

Note that business portfolio pacing is different from [template pacing](/documentation/business-messaging/whatsapp/templates/template-pacing), which only affects marketing and utility templates.

Business portfolio pacing applies to:

-   business portfolios that have sent less than 500K template messages collectively, across all of their business phone numbers, within a moving 365-day lookback period-   business portfolios that are currently being monitored for suspicious activity (for example, for violating our [WhatsApp Business Messaging Policy](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fpolicy&h=AT3lA-SEh-yLG9qFX_TTQZl2FZCgcrEb_fxw7mGBz_chaOYABEUL_1TuMEwFIrZYFjxx7ueLsptxRKxYN8dXe76wPwwDolRPSxQJpGyNIOK6kEldpu9PISpXgHffUZUsIe-iZ2QPye0Awu_2ExXuHrBKWzw) or [WhatsApp Messaging Guidelines](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fmessaging-guidelines&h=AT3lA-SEh-yLG9qFX_TTQZl2FZCgcrEb_fxw7mGBz_chaOYABEUL_1TuMEwFIrZYFjxx7ueLsptxRKxYN8dXe76wPwwDolRPSxQJpGyNIOK6kEldpu9PISpXgHffUZUsIe-iZ2QPye0Awu_2ExXuHrBKWzw))

If pacing applies to your business portfolio and you attempt to send a large number of templates within a short period of time using any of your portfolio’s business phone numbers:

-   an initial set of messages will be processed normally-   subsequent messages will be held, and the `message_status` property in API responses will be set to `held_for_quality_assessment`

We will then deliver messages in batches, monitoring feedback before releasing each new batch. If feedback suggests suspicious activity, all remaining held messages will be dropped, and a [status messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) webhook with `status` set to `failed` and `code` set to `132015` will be triggered for each dropped message. Portfolio admins will be informed of dropped messages by Meta Business Suite notification, WhatsApp Manager banner, and email.

In addition, the business portfolio will be prevented from sending or creating templates while it undergoes further review. If messaging activity has been found to violate our policies or guidelines, it may be fully disabled completely. Portfolio admins will be notified of any enforcement actions and will have the option to appeal any decisions.

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)