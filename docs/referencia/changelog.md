<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/changelog -->
<!-- Scraped: 2026-03-10T21:40:16.181Z -->

Registro de alterações

Atualizado em: 2 de março de 2026

[

Get notified

](/documentation/business-messaging/whatsapp/changelog/rss/)

* * *

Registro de alterações (180)

Pesquisar no registro de alterações

2 de março de 2026

_Cloud API_, _Marketing Messages API for WhatsApp_, _Pricing_

Added [upcoming rates](/documentation/business-messaging/whatsapp/pricing#upcoming-updates-to-rate-cards) for 2026 for the following countries:

Argentina (ARS), Australia (AUD), Chile (CLP), Colombia (COP), Euro (EUR), India (INR), Indonesia (IDR), Malaysia (MYR), Mexico (MXN), Peru (PEN), Saudi Arabia (SAR), Singapore (SGD), United Arab Emirates (AED), United Kingdom (GBP), United States (USD).

* * *

19 de fevereiro de 2026

_Marketing Messages API for WhatsApp_

Added a new [Automatic Creative Optimization](/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#send-marketing-template-messages) type: Auto promotion tag.

* * *

19 de fevereiro de 2026

_Cloud API_

Added new [unsupported message types](/documentation/business-messaging/whatsapp/webhooks/reference/messages/unsupported) in the unsupported messages webhook.

* * *

4 de fevereiro de 2026

_Embedded Signup_

Added `account_offboarded` and `account_reconnected` webhooks for [Coexistence](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

* * *

3 de fevereiro de 2026

_Cloud API_

[Cloud API Groups](/documentation/business-messaging/whatsapp/groups) are now available to all businesses with an [Official Business Account](/documentation/business-messaging/whatsapp/official-business-accounts).

* * *

29 de janeiro de 2026

_Marketing Messages API for WhatsApp_

[Multi-solution conversations](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations) are now available for Marketing Messages API for WhatsApp.

* * *

28 de janeiro de 2026

_Cloud API_

Added new [pricing policy for AI Providers](/documentation/business-messaging/whatsapp/pricing/ai-providers).

Effective February 16, 2026, in countries where Meta is legally required to support AI Providers, Meta will charge AI Providers for non-template messages sent to WhatsApp users.

* * *

8 de dezembro de 2025

_Cloud API, Business Management API_

Added [business portfolio pacing](/documentation/business-messaging/whatsapp/templates/portfolio-pacing), a new template message delivery batching mechanism that allows time to gather feedback on any template sent as part of a large-scale messaging campaign.

* * *

4 de dezembro de 2025

_Marketing Messages API for WhatsApp_

Businesses that use Marketing Messages API for WhatsApp can now [view metrics for quick replies](/documentation/business-messaging/whatsapp/marketing-messages/view-metrics).

* * *

3 de dezembro de 2025

_Cloud API_

[Coupon code templates](/documentation/business-messaging/whatsapp/templates/marketing-templates/coupon-templates) now support codes with up to 20 characters, instead of 15.

* * *

1 de dezembro de 2025

_Cloud API_

Added [No Storage](/documentation/business-messaging/whatsapp/no-storage), an alternative [Local Storage](/documentation/business-messaging/whatsapp/local-storage) configuration. With No Storage, in-transit data is kept for a shorter period of time, and at-rest data is not persisted.

* * *

26 de novembro de 2025

_Embedded Signup_

Added a note in [embedded signup](/documentation/business-messaging/whatsapp/embedded-signup/overview#how-it-works) indicating users may experience a new completion flow for all versions. A new **View your setup guide** button will take users to a new setup guidance page in the WhatsApp Manager, which will provide next steps on:

-   Business verification-   Resolving integrity issues and accessing Business Support Home-   Sending the first message via a partner solution-   Sending business-initiated messages using templates

* * *

25 de novembro de 2025

_Embedded Signup_

The following messages event webhooks are now supported for [Coexistence](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#edit) in Embedded Signup:

-   [Edit messages](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#edit)-   [Revoke messages](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#revoke)

* * *

19 de novembro de 2025

_Marketing Messages API for WhatsApp_

[Marketing Messages API for WhatsApp](/documentation/business-messaging/whatsapp/marketing-messages/overview) (formerly known as Marketing Messages Lite API) is now generally available.

* * *

3 de novembro de 2025

_Cloud API_

-   Updated the [unsupported messages webhook](/documentation/business-messaging/whatsapp/webhooks/reference/messages/unsupported) by adding details about the actual message type.-   Added new `played` [status messages webhook](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) `status` value, which indicates when a voice message is played by the Whatsapp user.

* * *

3 de novembro de 2025

_Cloud API_

Updated the [unsupported message webhook](/documentation/business-messaging/whatsapp/webhooks/reference/messages/unsupported)by adding details about the actual message type.

Added new [played status message webhook](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) which indicates when a voice messge is played by the Whatsapp user.

* * *

31 de outubro de 2025

_MM Lite API_

-   Added two new [Automatic Creative Optimization types](/docs/whatsapp/marketing-messages-lite-api/sending-messages#product-extensions): product extensions and text formatting optimization.-   Launched a new endpoint to support [WABA-level opt-out](/docs/whatsapp/marketing-messages-lite-api/sending-messages#configure-automatic-creative-optimizations--whatsapp-business-account-level-) for automatic creative optimizations.

* * *

23 de outubro de 2025

_Embedded Signup_

The following countries/regions are now supported for [Coexistence](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#onboarding-whatsapp-business-app-users--aka--coexistence--) in Embedded Signup:

-   Australia-   Japan-   Philippines-   Russia-   South Korea-   Turkey-   European Economic Area (EEA)-   European Union (EU)-   United Kingdom (UK)

* * *

20 de outubro de 2025

_MM Lite API_

-   [Offsite conversion metrics](/docs/whatsapp/marketing-messages-lite-api/viewing-metrics) is now available in WhatsApp Business Manager and in the [Template Analytics API](/documentation/business-messaging/whatsapp/analytics#template-analytics).-   Added two new Automatic Creative Optimization features: [Headline extraction](/docs/whatsapp/marketing-messages-lite-api/sending-messages#headline-extraction) and [Tap-target title extraction](/docs/whatsapp/marketing-messages-lite-api/sending-messages#tap-target-title-extraction).

* * *

20 de outubro de 2025

_Cloud API_

Ad click IDs will not be included in incoming [text messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages/text) webhooks payloads describing an incoming message that originated from a [WhatsApp Status ad placements⁠](https://www.facebook.com/business/help/1074444721456755?id=805840565113559).

* * *

17 de outubro de 2025

_MM Lite API_

Added [`marketing_messages_onboarding_status`](/docs/whatsapp/marketing-messages-lite-api/onboarding#if-you-want-to-check-tos-and-intent-request-status-for-the-business-manager) and [`owner_business_info`](docs/whatsapp/marketing-messages-lite-api/onboarding#if-you-want-to-check-tos-and-intent-request-status-for-the-business-manager) fields to check Terms of Service and Intent request status for business manager.

* * *

17 de outubro de 2025

_Embedded Signup_

If you don’t want to configure and host the Embedded Signup [implementation code](/documentation/business-messaging/whatsapp/embedded-signup/implementation) on your website or customer portal, you can now use [Hosted Embedded Signup](/documentation/business-messaging/whatsapp/embedded-signup/hosted-es) (“Hosted ES”) instead.

Hosted ES is a pre-configured implementation of Embedded Signup that is hosted by Meta. You can get a link to Hosted ES in the App Dashboard and add it to your website or customer portal. Business customers who click the link will be presented with a webpage with a “Get started” button that launches the Embedded Signup flow:

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/557247008_1487309905743315_2332288243528054136_n.png?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=9xTsAKri29kQ7kNvwE9fXVg&_nc_oc=AdlQP6IEn7Hgwt21a6CY97IY6r2-rkslUWa1S_Ymu6QogpK_Vq5uKkmFJC8vu7kBEaQ&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=pcc-om_10wWbs4p3brennQ&_nc_ss=8&oh=00_AfyBGD7bimvpV1B7Pd0emNYnhg7QWusJrwAO4BsQTAugjw&oe=69CACD0A)

* * *

16 de outubro de 2025

_Cloud API, Business Management API_

-   Incoming media messages webhooks ([image messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages/image), [video messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages/video), etc.) now include the incoming media asset’s media URL, which is assigned to the `url` property.-   You can now designate an [audio message](/documentation/business-messaging/whatsapp/messages/audio-messages) as a **voice message**. Delivered voice messages appear in the WhatsApp client with a play icon, waveform graphic, profile image, and a microphone icon. If the recipient has enabled [voice message transcripts⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F241617298315321%2F&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE), a text transcription of the message can also appear:

![](https://scontent-gru1-2.xx.fbcdn.net/v/t39.2365-6/562379210_2249057198900177_5743647093897895635_n.png?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=q2bVTJ5P0cYQ7kNvwFAat6h&_nc_oc=AdnDlak08xq88bYmIqFMhsJbQqCkzGCFAEHI7NCZVmZv3kyOXQh0Fbe1KQmh17njB9g&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=pcc-om_10wWbs4p3brennQ&_nc_ss=8&oh=00_AfzsdFUL1r0KLR_OsMndzCxx5LmjZxhQebnsh6K438WxgA&oe=69CAD40C)

* * *

14 de outubro de 2025

_MM Lite API_

The [`product_policy`](/docs/whatsapp/marketing-messages-lite-api/sending-messages#send-marketing-template-messages) field is now 100% rolled out for businesses customers.

* * *

8 de outubro de 2025

_Cloud API, Business Management API_

-   [Messaging limits](/documentation/business-messaging/whatsapp/messaging-limits) are now business portfolio-based instead of business phone number-based, and the initial increase via scaling path is now 2,000 instead of 1,000. To support this change, for version 24.0 and newer requests, a new `whatsapp_business_manager_messaging_limit` field has been added, which returns the owning business portfolio’s messaging limit. This field is available on the following endpoints:
    -   [GET /<BUSINESS\_PORTFOLIO\_ID>](/docs/marketing-api/reference/business#Reading)-   [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#Reading)-   [GET /<BUSINESS\_PHONE\_NUMBER\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading)-   For version 24.0 and newer requests, the `messaging_limit_tier` on the [GET /<BUSINESS\_PHONE\_NUMBER\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) endpoint now returns the owning business portfolio’s messaging limit.-   For version 24.0 and newer requests, added error code `131059` which is returned when querying the [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#Reading) endpoint with an invalid [pagination cursor](/docs/graph-api/results#cursors). If you get this error, retry your request without `before` or `after` cursors. This will generate and return new cursors for paginated responses.-   For version 24.0 and newer requests, the [status messages](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) webhook no longer includes the `conversation` object, unless the webhook is for a message sent during an open [Free Entry Point window](/documentation/business-messaging/whatsapp/pricing#free-entry-point-windows).

_Embedded Signup_

[Embedded Signup version 4](/documentation/business-messaging/whatsapp/embedded-signup/version-4) is now available. Version 4 provides a simplified onboarding experience and allows you to onboard business customers to multiple products (WhatsApp Cloud API, Marketing Messages Lite API, [Ads that click-to-WhatsApp⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fproducts%2Fads-that-click-to-whatsapp&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE) and the [Conversions API](/docs/marketing-api/conversions-api)).

* * *

8 de outubro de 2025

_Embedded Signup_

Embedded Signup version 4 is now available. Version 4 provides a simplified onboarding experience and allows you to onboard business customers to multiple products (WhatsApp Cloud API, Marketing Messages Lite API, Ads that click-to-WhatsApp and the Conversions API). For more information, see the [versions](/documentation/business-messaging/whatsapp/embedded-signup/versions) and [v4](/documentation/business-messaging/whatsapp/embedded-signup/version-4) page.

_MM Lite_

Updated the [onboarding page](/docs/whatsapp/marketing-messages-lite-api/onboarding#onboarding-business-customers) with an onboarding video tutorial.

* * *

6 de outubro de 2025

_Groups API_

Introducing [WhatsApp Groups API](/documentation/business-messaging/whatsapp/groups), which enables programmatic creation and management of groups on WhatsApp.

* * *

3 de outubro de 2025

_Solution providers_

[Access verification](/docs/development/release/access-verification) is no longer required to become a [Tech Provider](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers).

* * *

1 de outubro de 2025

_Cloud API, Marketing Messages Lite API, Pricing_

Changed [WhatsApp Business Platform rates](/documentation/business-messaging/whatsapp/pricing#rates).

-   Increased marketing message rates for United Arab Emirates.-   Increased utility and authentication message rates for Colombia.-   Decreased marketing message rates for Mexico.-   Decreased utility and authentication message rates for Saudi Arabia, Argentina, and Egypt.-   Zimbabwe is now mapped to our “Rest of Africa” region vs. “Other.” Messages delivered to WhatsApp users with a +263 country calling code (Zimbabwe) will now be charged “Rest of Africa” rates.

* * *

1 de outubro de 2025

_MM Lite API_

Updated the [support page](/docs/whatsapp/marketing-messages-lite-api/support) with new troubleshooting guides.

* * *

29 de setembro de 2025

_MM Lite API_

Added a [Coexistence onboarding guide to MM Lite](/docs/whatsapp/marketing-messages-lite-api/for-solution-providers#onboard-whatsapp-business-app-users--aka--coexistence--). Whatsapp Business users can now onboard with their existing WhatsApp Business app account and phone number.

* * *

24 de setembro de 2025

_Cloud API_

Added [note in the media document](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) when retrieving a media from a media ID received via webhook, the media ID will only be available to download for 30 days. After October 9th this will only be available for 7 days.

* * *

8 de setembro de 2025

_Cloud API_

-   Updated [v3 document](/documentation/business-messaging/whatsapp/embedded-signup/version-3) to display an example of the v3 syntax.-   Added [Call Permissions Request](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) type under interactive objects for messages.

* * *

3 de setembro de 2025

_MM Lite API_

-   On September 8th, 2025, we’re launching a new [“MM Lite ToS signed” webhook](/docs/whatsapp/marketing-messages-lite-api/onboarding#receive-mm-lite-terms-of-service-signed-webhook--preferred-), which will be sent whenever a business signs the MM Lite ToS via any method (e.g. Embedded Signup, or in WhatsApp Manager). The webhook will have a more descriptive name than the existing `AD_ACCOUNT_LINKED` webhook. The older webhook will be deprecated by Jan 1, 2026.
    -   [Conversion metrics](/docs/whatsapp/marketing-messages-lite-api/viewing-metrics) will now also be available in WhatsApp Manager UI and via the WhatsApp Business Management API. This means that we’re removing the ability to view MM Lite metrics for read-only Ad Accounts in Ads Manager.
    -   The `/marketing_messages` endpoint will [accept marketing messages for both MM Lite API and Cloud API](/docs/whatsapp/marketing-messages-lite-api/sending-messages#send-marketing-template-messages).
    

* * *

27 de agosto de 2025

_Embedded Signup_

Updated [v3 document](/documentation/business-messaging/whatsapp/embedded-signup/version-3) to display an example of the v3 syntax.

_Cloud API_

Added [Call Permissions Request](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) type under interactive objects for messages.

* * *

22 de agosto de 2025

_MM Lite API_

Added a [features page](/docs/whatsapp/marketing-messages-lite-api/features) comparing MM Lite and Cloud API features.

MM Lite API [uptime and availability metrics](/documentation/business-messaging/whatsapp/support/api-status-page) are now live on [metastatus.com⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api%3Ffbclid%3DIwY2xjawM2tbNleHRuA2FlbQIxMQBicmlkETFPWE5PUldSeE95a2tuMnA1AR66setbfmUOYwOMQ3HtM7k277dWGE5sNlomsS6qAp8WTv_DlOf4Y10k6Dhf2w_aem_ieXDJ6jqZJA6QbtWWAA2Dw&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE), providing visibility into service status.

* * *

14 de agosto de 2025

_Embedded Signup_

In September we are simplifying the Embedded Signup flow across all versions. You can preview the simplified flow by configuring Embedded Signup with `v#-public-preview` (e.g. `v3-public-preview`) and launching the flow. See [Versions](/documentation/business-messaging/whatsapp/embedded-signup/versions) for additional details.

* * *

12 de agosto de 2025

_Cloud API_

Added `AD_ACCOUNT_LINKED` event to the [`account_update webhook`](/documentation/business-messaging/whatsapp/webhooks/reference/account_update), which triggers when a WABA has onboarded to MM LITE through Embedded Signup or Intent API giving the partner access to its ad accounts.

* * *

11 de agosto de 2025

_Business Management API_

Added [Welcome Message Sequences](/documentation/business-messaging/whatsapp/ctwa/welcome-message-sequences), which allow you to populate a set of pre-defined text and FAQs or a prefilled message, that can appear in a WhatsApp thread when a user taps a Click-to-WhatsApp ad.

* * *

6 de agosto de 2025

_MM Lite API_

Added a [image background generation](/docs/whatsapp/marketing-messages-lite-api/sending-messages) field for automatic creative optimization.

* * *

4 de agosto de 2025

_Cloud API_

Added new [whatsapp\_business\_manage\_events](/docs/whatsapp/embedded-signup/app-review) permission to log events.

* * *

30 de julho de 2025

_Cloud API_

Changed the [Media Card Carousel Template](/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) requirements so that card body text is no longer mandatory.

* * *

25 de julho de 2025

_MM Lite API_

-   Updated [references](/docs/whatsapp/marketing-messages-lite-api/guides/deep-links#form-fields) to “Mobile App ID” to “Meta App ID” when creating a template to avoid confusion.-   Added a [Template-to-ad-syncing guideline](/docs/whatsapp/marketing-messages-lite-api/measuring-conversion) for clients to follow to ensure all templates be set up for conversion metrics.

* * *

25 de julho de 2025

_Cloud API_

Added the [Tap target title URL override](/documentation/business-messaging/whatsapp/templates/tap-target-url-title-override) message template.

* * *

22 de julho de 2025

_MM Lite API_

Local Storage is now available for MM Lite. If you have already enabled [Local Storage](/documentation/business-messaging/whatsapp/local-storage) for the Cloud API, your existing settings are automatically applied to the MM Lite API.

* * *

16 de julho de 2025

_MM Lite API_

Added a troubleshooting guide on how to identify admins of a business portfolio using Meta Business Suite or the API. Both methods return the same results.

-   [Meta Business Suite⁠](https://business.facebook.com): Navigate to the Business Settings to view users with **Full Control** access.-   API: [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) and [GET /<BUSINESS\_PORTFOLIO\_ID>/business\_users](/docs/marketing-api/reference/business/business_users) endpoints to get a list of business portfolio admins.

* * *

15 de julho de 2025

_MM Lite API_

-   Added [`marketing_messages_onboarding_status` field](/docs/whatsapp/marketing-messages-lite-api/onboarding#checking-eligibility-status) which provides more granular eligibility status data. The field will be a replacement for [`marketing_messages_api_status` field](/docs/whatsapp/marketing-messages-lite-api/onboarding#checking-eligibility-status--alternative-) which will be deprecated in version 24.0.-   Fixed the `marketing_messages_lite_api_status` field to correct a bug which was erroneously returning `ELIGIBLE` when it should have returned `ONBOARDED`. This field will be deprecated in version 24.0, so we recommend using the new `marketing_onboarding_status` field instead.-   Changed the `marketing_messages_api_status` field to no longer require one or more registered phone numbers, or one or more MM Lite API-ready templates, in order for `ONBOARDED` to be returned.

* * *

15 de julho de 2025

_Cloud API_

[WhatsApp Business Calling API](/documentation/business-messaging/whatsapp/calling) now available.

_WhatsApp Business Platform_

[Multi-solution Conversations is now available in open beta](/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations)

Multi-solution Conversations enables businesses to use multiple partners and solutions on the same phone number, enabling a seamless chat thread experience for their customers.

* * *

7 de julho de 2025

_Business Management API_

Added `PROFILE_PICTURE_LOST` as a new `alert_type` to [account\_alerts](/documentation/business-messaging/whatsapp/webhooks/reference/account_alerts) webhooks, to notify you when a business phone number’s business profile photo has been deleted.

* * *

1 de julho de 2025

_MM Lite API_

Per-message pricing now applies to MM Lite API! See [Pricing on the WhatsApp Business Platform](/documentation/business-messaging/whatsapp/pricing) to learn more.

* * *

1 de julho de 2025

_Cloud API_

[Per-message pricing](/documentation/business-messaging/whatsapp/pricing) is now live.

* * *

24 de junho de 2025

_MM Lite API_

_Permissions_

The [ads\_read](/docs/permissions#a) permission is now optional for partners. This change impacts the [Intent API](/docs/whatsapp/marketing-messages-lite-api/for-solution-providers#-recommended--onboard-a-business-to-mm-lite-api-using-the-intent-api) and the [Embedded Signup](/docs/whatsapp/marketing-messages-lite-api/for-solution-providers#onboard-a-business-to-mm-lite-api-using-embedded-signup) onboarding flows. Prior to this change, partners had to apply for App Review to get advanced access for this new permission, regardless of whether or not their app intended to call the [Insights API](/docs/marketing-api/insights) for conversion metrics. Now, partners only need to request advanced access for this permission via App Review if their app intends to use the Insights API.

_Automatic Creative Optimizations_

Added [text overlays](/docs/whatsapp/marketing-messages-lite-api/sending-messages#text-overlays) and [image animation](/docs/whatsapp/marketing-messages-lite-api/sending-messages#image-animation) Automatic Creative Optimizations. Like other optimizations, these are enabled by default on all templates, but can be disabled upon template creation, or when editing a template.

* * *

20 de junho de 2025

_MM Lite API_

Businesses in Russia who were previously unable to send messages via MM Lite API can now do so. Note that these businesses will not have access to some advanced features, but can still take advantage of all other benefits, such as exclusive [marketing features](/docs/whatsapp/marketing-messages-lite-api). For more details, see [Geographic availability of features](/docs/whatsapp/marketing-messages-lite-api/get-started#russia).

* * *

18 de junho de 2025

_Embedded Signup_

[Solution Partners](/documentation/business-messaging/whatsapp/solution-providers/overview#solution-partners) can now claim [sandbox accounts](/documentation/business-messaging/whatsapp/embedded-signup/overview#sandbox-accounts).

* * *

13 de junho de 2025

_Cloud API_

You can now [request Official Business Account status via API](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#requesting-oba-status-via-api) and [edit your display name via API](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#updating-display-name-via-api). Before you could only do this using WhatsApp Manager.

* * *

10 de junho de 2025

_MM Lite API_

Added two new Insights API fields so you can [get read rate and click rate benchmarks via API](/docs/whatsapp/marketing-messages-lite-api/viewing-metrics#benchmark-metrics) instead of only via WhatsApp Manager:

-   `marketing_messages_read_rate_benchmark`-   `marketing_messages_click_rate_benchmark`

* * *

5 de junho de 2025

_Embedded Signup_

Embedded Signup now gives business customers the option to have us automatically identify purchase or lead gen events in message threads that originate from ads that click to WhatsApp.

![](https://scontent-gru2-2.xx.fbcdn.net/v/t39.2365-6/503425036_1029531339304862_7305936950282438326_n.png?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=t3ER3YVRL8sQ7kNvwEebbyC&_nc_oc=AdmD6_LV9CONzF1Zw8q3JeO49vIPFC0W5bEjbc4eU3rda-U7cnFL51sTHfDw4tDhLLs&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=pcc-om_10wWbs4p3brennQ&_nc_ss=8&oh=00_AfwDiSC9CEODUkan7h36m2ZUzTB8fp88gJ2WJRDOIUtz2g&oe=69CABC0D)

To be notified of these events, you can subscribe to the new new **automatic\_events** webhook, and optionally, report them via Conversions API. See [Automatic Events API](/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api) for more details.

* * *

4 de junho de 2025

_Business Management API_

A [phone\_number\_quality\_update](/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update) webhook with `event` set to `THROUGHPUT_UPGRADE` and `current_limit` set to `TIER_UNLIMITED` will now be triggered if your business phone number is upgraded to [higher throughput](/documentation/business-messaging/whatsapp/throughput).

* * *

29 de maio de 2025

_Cloud API_

Added [error code](/documentation/business-messaging/whatsapp/support/error-codes) `132018` for help diagnosing invalid parameters when attempting to send a template message. Applies to version 23.0 and newer versions.

_Embedded Signup_

[Version 3](/documentation/business-messaging/whatsapp/embedded-signup/version-3) is now available. As part of this release, we have introduced versioning that will align with Graph API’s release cadence. The following changes apply to version 3:

-   `only_waba_sharing` is no longer a valid `extras.featureType` value, since [bypassing the phone number screen](/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition) is obsolete now that business customers are able to complete the flow with a verified business phone number, unverified number, or no number at all.-   Added `extras.version` which must be set to `3` to enable version 3.-   Added `extras.features` for enabling [Marketing Messages Lite API](/docs/whatsapp/marketing-messages-lite-api) and [App-Only Install](/documentation/business-messaging/whatsapp/embedded-signup/app-only-install) onboarding.-   Added `extras.features.api_access_only` for enabling App-Only Install onboarding.-   Enabling Marketing Messages Lite API onboarding must now be done through the `extras.features` instead of `extras.featureType`.-   [Session info](/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) will be automatically enabled for all users. Partners will still have to add an event listener on the same window to process incoming information.-   `coexistence` is no longer a valid `extras.featureType` value, you must use `whatsapp_business_app_onboarding` to launch the [Whatsapp Business App onboarding](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) flow.-   Measurement partners currently cannot use version 3.-   [Pre-filled data](/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data) will no longer bypass any screens, to provide business customers the opportunity to review and change data.

* * *

23 de maio de 2025

_MM Lite API_

Added [Android deep link](/docs/whatsapp/marketing-messages-lite-api/guides/deep-links) support.

* * *

21 de maio de 2025

_MM Lite API_

Added an [Error messages](/docs/whatsapp/marketing-messages-lite-api/viewing-metrics#error-metrics) section to WhatsApp Manager that shows a summary of errors encountered by your templates within a given period of time.

* * *

20 de maio de 2025

_MM Lite API_

Added [new error codes](/docs/whatsapp/marketing-messages-lite-api/support#error-codes) to help diagnose messaging errors. These will be available with Graph API version 23.0.

-   `134100`-   `134101`-   `134102`-   `134103`

* * *

5 de maio de 2025

_Embedded Signup_

Solution providers can now [onboard WhatsApp Business app users](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) who have a WhatsApp Business app phone number with an India country dialing code.

* * *

16 de abril de 2025

_MM Lite API_

_Limited access available for [tracking click events](/docs/whatsapp/marketing-messages-lite-api/guides/tracking-click-events)._

We are offering a limited roll-out of webhook access to click events on marketing messages sent using MM Lite. [Read the “Tracking click events” page for more information](/docs/whatsapp/marketing-messages-lite-api/guides/tracking-click-events)

* * *

11 de abril de 2025

_MM Lite API_

_Early access to Automated Creative Optimizations_

We are piloting a new optimization capability exclusive to MM Lite API (not available on Cloud API), which automatically enhances the visual appeal and engagement of marketing messages. Similarly to Advantage+ creative, this capability tests minor variations of your existing image header with different crop orientations or color filters, and automatically selects the variant which is getting the highest click-through rate over time with no input needed from you.

A small group of businesses will be getting early access to this feature starting May 5, with the ability to opt Templates out via the message template API. For more details, see [Automated Creative Optimizations](/docs/whatsapp/marketing-messages-lite-api/sending-messages#automatic-creative-optimizations).

Please reach out to your partner, if you would like to be included in early access to this feature.

* * *

9 de abril de 2025

_Template Categorization_

We no longer support the `allow_category_change` property during template creation. Previously, if set to true in a template creation request, this allowed us to update a template’s category to marketing, if we determined marketing to be its category per its content and our guidelines. This is now the default behavior.

* * *

8 de abril de 2025

_Cloud API_

Added [typing indicators](/documentation/business-messaging/whatsapp/typing-indicators) so you can let WhatsApp users know that you are preparing a response.

* * *

2 de abril de 2025

_WhatsApp Manager_

Added ability to [create](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#create-a-waba-via-meta-business-suite) and [share](/documentation/business-messaging/whatsapp/whatsapp-business-accounts#share-your-waba-with-a-solution-provider) WhatsApp Business Accounts using WhatsApp Manager.

* * *

1 de abril de 2025

_MM Lite API_

_MM lite is now in Open Beta_

With this update, MM lite has:

-   **Self-signup for all partners and businesses**. All businesses and solution providers (including Solution Partners, Tech Providers and Tech Partners) can now use self-serve onboarding flows to onboard to MM Lite API. See documentation on [Onboarding](/docs/whatsapp/marketing-messages-lite-api/onboarding) for more details.-   **Global availability**. MM Lite API is now available in all regions where Cloud API is also available. Note that while the API is available, some geographic variation of features may apply, [see details here](/docs/whatsapp/marketing-messages-lite-api/get-started#geographic-availability-of-features).

* * *

1 de abril de 2025

_Pricing_

Lowered [authentication-international pricing rates](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) for Egypt, Nigeria, Pakistan, and South Africa.

* * *

31 de março de 2025

_Cloud API, On-Premises API_

Payments API for business portfolios with Singapore addresses is no longer available.

* * *

27 de março de 2025

_MM Lite API_

_Updates to character and emoji limits in Templates_

This update applies across all Templates on the Business Messaging API, and is not specific to MM Lite API (also applies on Cloud API).

As part of our ongoing efforts to improve the performance and user experience of our messaging platform, we are introducing changes to the body component of marketing templates via Cloud API and MM Lite API. These changes will impact the character limits and emoji usage in the body component, depending on the format and tag of the template.

**Key Updates**:

-   Character limits for the body component will vary based on the template format and tag-   The number of emojis allowed in the body component may also be limited.

These updates are designed to enhance the performance and user experience of our messaging platform. While these changes may require some adjustments to your template creation process, they can ultimately lead to better performance and engagement with your customers.

* * *

20 de março de 2025

_Cloud API_

Added [partner-initiated WABA creation](/documentation/business-messaging/whatsapp/solution-providers/overview) to replace the [On-Behalf-Of](/documentation/business-messaging/whatsapp/solution-providers/obo-model-deprecation) (“OBO”) account ownership model, which is [being deprecated](/documentation/business-messaging/whatsapp/solution-providers/obo-model-deprecation). Starting September 30, 2025, WABAs can no longer be onboarded to the OBO model.

* * *

27 de fevereiro de 2025

_App Dashboard_

Added additional tiles to the [App Dashboard](/apps) > **WhatsApp** > **Quickstart** panel to make it easier for you to get started with complementary products that can help you scale business messaging:

-   [Marketing Messages Lite API](/docs/whatsapp/marketing-messages-lite-api)-   [Conversions API](/docs/marketing-api/conversions-api)-   [Marketing API](/docs/marketing-apis)

These tiles make it easier to find documentation for these products and automatically add required permissions to an App Review request, which you can review and submit at your convenience.

![](https://scontent-gru1-1.xx.fbcdn.net/v/t39.2365-6/485152013_950048063974284_3173044385037889136_n.png?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=kSKyTOJXSuoQ7kNvwHft9BB&_nc_oc=Adnu4_WmJL6SvFHxk9to_KBrpGv4E0PKJC5nP0pzNcZjUiHZ0LzWPKyfDsBWC0nrF3w&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=pcc-om_10wWbs4p3brennQ&_nc_ss=8&oh=00_AfxpegSIPjBhptz_A4hlKq6Lkt7WV4Ke5sz6a868YSGyFQ&oe=69CAB64F)

Note that these tiles only appear for products that you are eligible to use.

* * *

14 de fevereiro de 2025

_Cloud API_

Added new endpoints to support [template groups](/documentation/business-messaging/whatsapp/templates/template-groups) and [template group analytics](/documentation/business-messaging/whatsapp/analytics#template-group-analytics), which allows you group sets of templates for easier analytic analysis.

-   Added [GET /<WABA\_ID>/template\_groups](/docs/graph-api/reference/whats-app-business-account/template_groups#Reading)-   Added [POST /<WABA\_ID>/template\_groups](/docs/graph-api/reference/whats-app-business-account/template_groups#Creating)-   Added [GET /<WABA\_ID>/template\_group\_analytics](/docs/graph-api/reference/whats-app-business-account/template_group_analytics#Reading)-   Added [GET /<TEMPLATE\_GROUP\_ID>](/docs/graph-api/reference/business-messaging-template-group#Reading)-   Added [POST /<TEMPLATE\_GROUP\_ID>](/docs/graph-api/reference/business-messaging-template-group#Updating)-   Added [DELETE /<TEMPLATE\_GROUP\_ID>](/docs/graph-api/reference/business-messaging-template-group#Deleting)

* * *

11 de fevereiro de 2025

_Embedded Signup_

Added ability for solution providers to [onboard WhatsApp Business app users](/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) via Embedded Signup (aka “Coexistence”).

* * *

1 de fevereiro de 2025

_Pricing_

-   Lowered [authentication pricing rates](/documentation/business-messaging/whatsapp/pricing#rates) for Egypt, Malaysia, Nigeria, Pakistan, Saudi Arabia, South Africa, and the United Arab Emirates.
    -   Added [authentication-international pricing rates](/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) for Egypt, Malaysia, Nigeria, Pakistan, Saudi Arabia, South Africa, and the United Arab Emirates.
    

* * *

23 de janeiro de 2025

_Embedded Signup_

Added ability for business customers of solution providers to claim [“555” business phone numbers](/documentation/business-messaging/whatsapp/embedded-signup/overview#555-business-phone-numbers) when onboarding via Embedded Signup.

* * *

16 de janeiro de 2025

_Cloud API_

Added the [Block API](/documentation/business-messaging/whatsapp/block-users) giving businesses the ability to manage unwanted spam by blocking or unblocking specific customer phone numbers.

* * *

7 de janeiro de 2025

_Multi-Partner Solutions_

-   Added ability to migrate business customers off of Multi-Partner Solutions [via Embedded Signup](/documentation/business-messaging/whatsapp/solution-providers/support/migrating-customers-off-solutions-via-embedded-signup) and [via Meta Business Suite](/documentation/business-messaging/whatsapp/solution-providers/support/migrating-customers-off-solutions-via-meta-business-suite). Both methods skip business phone number re-verification.-   Added `app_id` parameter to the [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) endpoint to allow for migration off of Multi-Partner Solutions.

* * *

10 de dezembro de 2024

_Embedded Signup_

Added [Sandbox accounts](/documentation/business-messaging/whatsapp/embedded-signup/overview#sandbox-accounts) for easier testing of the Embedded Signup flow.

* * *

1 de dezembro de 2024

_MM Lite API_

_USA availability, and checking MM Lite eligibility via API_

Businesses in the USA are now eligible to use the MM Lite API.

In addition, a new MM Lite enrolment parameter allows businesses and partners to programmatically check MM Lite eligibility. See API docs for details.

* * *

18 de novembro de 2024

_MM Lite API_

_Reduced sync and async latency_

MM Lite team has quickly responded to feedback on “async” or “delivery” latency. This is defined as the time between an API call being received by MM Lite API, and MM Lite API dispatching a “delivered” webhook, assuming a user is online when the message is sent.

MM Lite previously had a p99 “async” delivery time of 12s, vs. p99 of 5s on Cloud API. This time has now been reduced to 9s. No action is required on a business or partner’s part.

* * *

18 de novembro de 2024

_Cloud API_

-   Added [user preferences for marketing messages](/documentation/business-messaging/whatsapp/messages/template-messages#user-preferences-for-marketing-messages).-   Added [user\_preferences](/docs/whatsapp/cloud-api/webhooks/user_preferences) webhook field for user preferences for marketing messages.-   Added error code `131050` for messages webhooks, indicating message non-delivery due user marketing preferences.

* * *

15 de novembro de 2024

_MM Lite API_

_New easier onboarding flow, for partner-managed businesses_

MM Lite is rolling out a new way for partners to guide a business through signing the MM Lite Terms of Service and moving to MM Lite.

In parallel with the Embedded Signup flow already available, a partner will also alternatively be able to initiate the following flow:

-   Call an ‘Intent API’ endpoint to indicate a BMID the partner wishes to assist in migrating to MM Lite. (If a BMID contains any OBO WABAs, these must be migrated to ‘shared’ prior to this event).-   Admins of that BMID will receive a notification that they have been invited to start sending marketing messages with optimizations via MM Lite. This notification is in Business Manager and via email.-   Once accepted, and MM Lite setup and Ad account syncing is complete, a webhook will be triggered to the partner and all subscribers indicating that MM Lite onboarding is complete, and including the linked Ad IDs.-   The partner may now call the “send” endpoint of MM Lite on this business’ behalf, and call an API to fetch an updated token with permission to access the business’ Ad account metrics.

See API docs for details on this new onboarding flow.

* * *

13 de novembro de 2024

_Cloud API_

Added [GET /<SOLUTION\_ID>/access\_token](/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api#Reading) endpoint for [getting business tokens](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions#getting-customer-business-tokens) of business customers who have onboarded to the platform via a Multi-Partner Solution.

* * *

12 de novembro de 2024

_Cloud API_

Added [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) endpoint to enable Tech Providers to [migrate business customers](/docs/whatsapp/embedded-signup/migrating-customer-assets#switching-solution-partners-with-multi-partner-solutions) from one Solution Partner and Multi-Partner Solution to another Solution Partner and Multi-Partner Solution.

* * *

8 de novembro de 2024

_MM Lite API_

_App Conversion reporting now supported_

Businesses can now use MM Lite API to measure when marketing messages lead users to perform app events, such as purchases, searches, or achieving levels in games. See Integrate with App Conversions for details.

* * *

5 de novembro de 2024

_Cloud API, Business Management API_

Added [POST /<BUSINESS\_PORTFOLIO\_ID>/self\_certify\_whatsapp\_business](/docs/marketing-api/reference/business/self_certify_whatsapp_business#Creating) endpoint for [partner-led business verifiation](/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification).

* * *

1 de novembro de 2024

_Cloud API, Pricing_

[Service conversations](/documentation/business-messaging/whatsapp/pricing#service-conversations) are now free for all businesses, including via AI-enabled conversational experiences.

* * *

1 de novembro de 2024

_MM Lite API_

_Metrics in WhatsApp Manager_

To represent this new conversation type, MM Lite API conversations are available in every surface where reporting is offered:

-   Ads Manager UI \[recommended\]-   Marketing API “Insights API” \[recommended\]-   WhatsApp Manager UI “WABA Insights” page and “Template Insights” page-   Business Management API-   Pricing webhooks

For full details on how to see MM Lite API metrics via API and in pricing webhooks, consult the MM Lite API docs.

-   In the Marketing API “Insights API” response, MM Lite events can be return using fields named `marketing_messages_[event]`-   In the Business Management API “Template Analytics” endpoint, MM Lite events can be returned using the query parameter `MARKETING_MESSAGES_LITE_API`-   In the Business Management API “Conversation Analytics” endpoints, MM Lite events can be returned using the `product_type` query parameter \`MARKETING\_LITE’-   In message status webhooks, the `conversation:origin:type` and `pricing:category` fields will show as `marketing_lite`

Businesses can now see MM Lite metrics as “Marketing - lite” in the WhatsApp Manager UI:

![](https://scontent-gru2-1.xx.fbcdn.net/v/t39.2365-6/475969840_997283928986096_7019011551543213590_n.png?stp=dst-webp&_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=KiJZnpeTfMwQ7kNvwEby-ES&_nc_oc=Adnikrv7Uy5ihJnpTxOJH7Y4dinFsoso2K9WkrzLfZ1mlYxBv4ZSWHbs0PzPVX9-5L8&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=pcc-om_10wWbs4p3brennQ&_nc_ss=8&oh=00_Afy2FzEj2tC4SbZ98sa7XYd6LnuIhTAsHovoX4koANaSpA&oe=69CACCA3)

We recommend you integrate with the Marketing API “Insights API” for MM Lite Metrics, and encourage end businesses to log into Ads Manager UI to see their metrics, instead of using the WhatsApp business surface. Ads Mgr UI and Insights API show conversion metrics that are not available on WhatsApp surfaces, and will continue to support new metrics and features as the primary surface for MM Lite API reporting as the API grows.

API docs for partners have been updated to reflect how to fetch MM Lite metrics via API.

API docs have been updated to reflect how to fetch MM Lite metrics via API, see [Viewing metrics](/docs/whatsapp/marketing-messages-lite-api/viewing-metrics).

* * *

30 de outubro de 2024

_MM Lite API_

_Exclusive feature: TTLs for Marketing messages_

We continue to invest to improve consumer experiences and business outcomes. We are introducing customizable message validity periods (time-to-live or TTL) for marketing messages on MM Lite API, to ensure marketing messages are always timely and relevant for users thus performant for businesses. We are also updating our customizable range for TTL for utility and authentication templates, to provide businesses more control and flexibility.

-   Marketing: From 12 hours to 30 days, for businesses on MM Lite API-   Utility: From 30 seconds to 12 hours, for businesses on Cloud API-   Authentication: From 30 seconds to 15 minutes, for businesses on Cloud API or On-Premises API

Businesses can customize the TTL of marketing, utility and authentication templates during template creation via WhatsApp Manager (via pre-set increments) and via API (in 1-second increments). This is reflected in our [dev docs](/documentation/business-messaging/whatsapp/templates/overview#time-to-live--customization-and-defaults) and [Business Help Center⁠](https://www.facebook.com/business/help/1305007343713790).

* * *

15 de outubro de 2024

_MM Lite API_

_New rate cards and pricing category for MM Lite_

Marketing message conversations initiated via MM Lite API are counted and billed separately from Marketing message conversations initiated via Cloud API. This includes updates to pricing webhooks. For details, please see [Pricing](/docs/whatsapp/marketing-messages-lite-api/mm-lite-api-pricing).

* * *

11 de outubro de 2024

_Business Management API_

Added [**POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/set\_solution\_migration\_intent**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) endpoint for [adding a WABA to an active multi-partner solution](/docs/whatsapp/embedded-signup/migrating-customer-assets#adding-a-waba-to-a-multi-partner-solution).

* * *

2 de outubro de 2024

_Cloud API_

-   Starting with version 21.0 the `package_name` and `signature_hash` parameters must be defined within the `supported_apps` array when creating [one-tap autofill](/documentation/business-messaging/whatsapp/templates/authentication-templates/autofill-button-authentication-templates#post-body) and [zero-tap](/documentation/business-messaging/whatsapp/templates/authentication-templates/zero-tap-authentication-templates#post-body) authentication templates.-   Starting with version 21.0, to enable [local storage](/documentation/business-messaging/whatsapp/local-storage) on a business phone number, the number must be in an unregistered state, and you must use the [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER>/settings**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#Updating) endpoint to enable local storage before registering the number (instead of enabling during registration). To support these changes:
    -   Added a `storage_configuration` parameter to the [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER>/settings**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#Updating) endpoint, which can be used to enable or disable local storage.-   Removed the `data_localization_region` parameter from the [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER>/register**](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api#Creating) endpoint.

* * *

1 de outubro de 2024

_Cloud API, Pricing_

Updated [pricing rates](/documentation/business-messaging/whatsapp/pricing#rates) in India, Saudi Arabia, the United Arab Emirates, and the United Kingdom.

* * *

25 de setembro de 2024

_Cloud API_

Changed steps in the App Dashboard to make it easier to [become a Tech Provider](/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers).

* * *

24 de setembro de 2024

_Cloud API_

Added [checkout button templates](/documentation/business-messaging/whatsapp/payments/payments-in/checkout-button-templates) (only available to India businesses that use business phone numbers with India country calling codes).

* * *

11 de setembro de 2024

_Cloud API_

-   Added [single-product message templates](/documentation/business-messaging/whatsapp/templates/marketing-templates/spm-templates).-   Added [product card carousel templates](/documentation/business-messaging/whatsapp/templates/marketing-templates/product-card-carousel-templates).

* * *

10 de setembro de 2024

_Cloud API_

Changed media asset caching behavior from developer definable (via Cache-Control header) to a fixed time period of 10 minutes. You can still force us to fetch assets from your server instead of our cache, however. See [Media Caching](/documentation/business-messaging/whatsapp/messages/send-messages#media-caching).

* * *

6 de setembro de 2024

_Cloud API_

-   Added **Messages** [business asset access](/documentation/business-messaging/whatsapp/get-started#business-asset-access) for more granular control of WhatsApp Business Account access.-   Added ability to create [Multi-Partner Solutions via embeddable button](/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solution-embedded-creation).

* * *

1 de agosto de 2024

_Cloud API, Pricing_

Lowered utility conversation [pricing rates](/documentation/business-messaging/whatsapp/pricing#rates).

* * *

25 de junho de 2024

_MM Lite API_

_Show MM Lite metrics on the Template Analytics API_

MM Lite metrics are now available from the Template Analytics API endpoint. See documentation for details.

* * *

1 de junho de 2024

_Cloud API_

-   Added ability to set a [custom time-to-live](/documentation/business-messaging/whatsapp/templates/overview#customizing-time-to-live) on utility templates.

_Business Management API_

-   Added automatic category updates to correct templates that are miscategorized according to our guidelines.

* * *

10 de abril de 2024

_Cloud API_

-   Added [webook callback URL override on business phone numbers](/docs/whatsapp/embedded-signup/webhooks/override#set-phone-number-alternate-callback).

* * *

18 de março de 2024

_Cloud API_

-   Added the [Conversational Components API](/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components#using-the-api).

* * *

13 de fevereiro de 2024

_Cloud API_

-   Changed business phone number [registration/deregistration](/documentation/business-messaging/whatsapp/business-phone-numbers/registration) attempt limits to 10 requests per business number in a 72 hour moving window (was a one-week moving window).

* * *

6 de fevereiro de 2024

_Cloud API_, _On-Premises API_

-   Added [per-user marketing template message limits](/documentation/business-messaging/whatsapp/messages/template-messages#per-user-marketing-template-message-limits) to help deliver high-quality user experiences.

* * *

26 de janeiro de 2024

_Cloud API_

-   Changed Cloud API template message delivery retry time-to-live from 24 hours to 30 days. You can still [override this value](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#time-to-live) for authentication templates.-   Changed [`biz_opaque_callback_data`](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) character maximum from 256 to 512.

* * *

18 de janeiro de 2024

_Cloud API_

-   Added [Conversational Components](/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components).

* * *

18 de dezembro de 2023

_Cloud API_

-   Added [location request messages](/documentation/business-messaging/whatsapp/messages/location-request-messages).

* * *

12 de dezembro de 2023

_Business Management API_

-   Added `cta_url_link_tracking_opted_out` field on WhatsApp Message Template node for [enabling/disabling button click tracking](/documentation/business-messaging/whatsapp/analytics#disabling-button-click-analytics).-   [Template analytics](/documentation/business-messaging/whatsapp/analytics#template-analytics) now include button clicks in templates categorized as `UTILITY`.

* * *

20 de novembro de 2023

_Business Management API_

-   Added [console logging](/documentation/business-messaging/whatsapp/templates/authentication-templates/error-signals#console-logging) to help with debugging one-tap and zero-tap authentication templates.

* * *

14 de novembro de 2023

_Cloud API_

-   Added `health_status` field to various nodes for checking [messaging health status](/documentation/business-messaging/whatsapp/support/health-status).-   Added [`biz_opaque_callback_data` field](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) to free-form messages for including arbitrary strings in [**messages** webhooks](/documentation/business-messaging/whatsapp/webhooks/reference/messages/status).

_Embedded Signup_

Embedded Signup can now be used to [migrate customer business phone numbers](/docs/whatsapp/business-management-api/guides/migrate-phone-to-different-waba) from one WhatsApp Business Account to another.

* * *

3 de novembro de 2023

_Business Management API_

-   [Carousel template](/docs/whatsapp/business-management-api/message-templates/carousel-templates) creation now requires at least one button.

* * *

23 de outubro de 2023

_Business Management API_, _Cloud API_, _On-Premises API_

-   Added [zero-tap authentication messages](/documentation/business-messaging/whatsapp/templates/authentication-templates/zero-tap-authentication-templates).

* * *

10 de outubro de 2023

_Cloud API_

-   [WhatsApp Flows](/docs/whatsapp/flows) is now available.-   Added new `data_localization_region` field on [WhatsApp Business Phone Number > Register](/documentation/business-messaging/whatsapp/business-phone-numbers/registration) endpoint for enabling [local storage](/documentation/business-messaging/whatsapp/local-storage).-   Added new [click-to-action URL buttons](/documentation/business-messaging/whatsapp/messages/send-messages#cta-url-buttons) for free-form interactive messages.

* * *

4 de outubro de 2023

_Business Management API_, _Cloud API_, _On-Premises API_

-   [Authentication templates](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates) using the code expiration warning now use the `code_expiration_minutes` value (instead of a default of 10 minutes) to determine if the delivered template message should display an autofill button or copy code button.-   Autofill buttons displayed in a delivered template message will become disabled after the amount of time indicated by the template’s `code_expiration_minutes` value, if present (or after 10 minutes, if not present).

* * *

2 de outubro de 2023

_Cloud API_

-   Added new [limited time offer templates](/documentation/business-messaging/whatsapp/templates/marketing-templates/limited-time-offer-templates) and new `limited_time_offer` template component.

* * *

27 de setembro de 2023

_Cloud API_

-   Added `ctwa_clid` property to `referral` object in [messages webhooks](/documentation/business-messaging/whatsapp/webhooks/reference/messages). Indicates the click ID generated when the user taps an ad that clicks to WhatsApp in order to send the message.

* * *

18 de setembro de 2023

_Cloud API_, _On-Premises API_

-   Legacy authentication templates (authentication templates without [one-time password buttons](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates)) can continue to be sent, edited, and appealed until April 1, 204 (extended from October 2, 2023).

* * *

12 de setembro de 2023

_Business Management API_

-   GET request responses on [authentication templates](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates) now include `add_security_recommendation` and `code_expiration_minutes` template components in `component` value.-   Added new [WhatsApp Business Account Access](/documentation/business-messaging/whatsapp/get-started#whatsapp-business-account-control) levels for more granular control.-   GET requests on [WhatsApp Business Account > Phone Numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api) and [WhatsApp Business Account > Message Templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api) now return error code `200` if the user identified by token has not been granted appropriate [WhatsApp Business Account Access](/documentation/business-messaging/whatsapp/get-started#whatsapp-business-account-control).-   Added [Template Migration](/documentation/business-messaging/whatsapp/templates/template-migration).

_Cloud API_

-   Added `throughput` and `platform_type` fields to [WhatsApp Business Phone Numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api).-   Added [Carousel Templates](/docs/whatsapp/business-management-api/message-templates/carousel-templates).

_Cloud API_, _On-Premises API_

-   [Migrating business phone numbers](/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud) that have multiconnect running 2 or more shards from On-Premises API to Cloud API automatically upgrades the numbers to higher Cloud API throughput.

* * *

28 de agosto de 2023

_Embedded Signup_

Added a new boolean field, [override\_default\_response\_type](/documentation/business-messaging/whatsapp/embedded-signup/implementation#launch-method-and-callback-registration). When set to `true`, any response types passed in `response_type` will take precedence over the default types.

* * *

15 de agosto de 2023

_Business Management API_

-   Added [`template_analytics`](/documentation/business-messaging/whatsapp/analytics#template-analytics) (in beta).

* * *

9 de agosto de 2023

_Embedded Signup_

Added [granular business tokens](/docs/whatsapp/embedded-signup/embed-the-flow) that exist at the client business level as an opt-in feature to help partners improve account security. In addition, we have updated the creation screens for [Pre Filled Data](/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data).

* * *

8 de agosto de 2023

_Cloud API_

-   Added Cloud API localized storage status to [WhatsApp Business API Status⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE) page.

_Business Management API_

-   Added [copy code button](/documentation/business-messaging/whatsapp/templates/components#copy-code-buttons) component for use with [coupon code templates](/documentation/business-messaging/whatsapp/templates/marketing-templates/coupon-templates).-   Increased template [button component](/documentation/business-messaging/whatsapp/templates/components#buttons) total limit to 10, quick reply buttons can now be mixed with other button types, and URL button limit increased to 2.-   Added [template bulk management](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#bulk-management).-   Added [template previews](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#template-previews) for previewing template text in multiple languages.

_Embedded Signup_

-   Added ability to [bypass phone number selection](/docs/whatsapp/embedded-signup/custom-flows/bypass-phone-selection) in Embedded Signup.-   Added [business phone number programmatic/bulk registration](/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers).-   Added [pre-verified business phone numbers bulk registration](/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers#registering-pre-verified-numbers-programmatically).-   Added [pre-verified business phone number sharing](/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers#sharing-and-unsharing-pre-verified-numbers).

* * *

2 de agosto de 2023

_Business Management API_

[Pre-verified business phone numbers](/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers) now have a `VERIFIED` status of 28 days (up from 14).

* * *

11 de julho de 2023

_Cloud API_

-   Scheduling and performing an upgrade to a business phone number’s [throughput](/documentation/business-messaging/whatsapp/throughput) no longer requires a live call.-   You can now specify an upgrade time when submitting a Direct Support ticket to request an upgrade to a business phone number’s throughput.-   Downtime for business phone numbers undergoing a throughput upgrade reduced to 5 minutes or less.

* * *

7 de julho de 2023

_Business Management API_

[Authentication template](/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates) copy code button text and autofill button text are now optional upon creation.

* * *

6 de julho de 2023

_Embedded Signup_

We are [requiring Solution Partners to request the whatsapp\_business\_messaging permission](/docs/whatsapp/embedded-signup/steps#meta-app) to use the API calls on the Cloud API, hosted by Meta. There is now a [permissions acknowledgement screen](/documentation/business-messaging/whatsapp/embedded-signup/default-flow#permissions-review-screen) businesses must go through in order to complete Embedded Signup.

* * *

13 de junho de 2023

_Cloud API_

Added latency to the [WhatsApp Business API Status Page⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fmetastatus.com%2Fwhatsapp-business-api&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE).

_Business Management API_

Added Business Management API [error code `2494100`](/documentation/business-messaging/whatsapp/support/error-codes) that indicates a business phone number is temporarily in maintenance mode.

_Cloud API_

-   Added [identity change check](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) feature.-   Added [catalog messages](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/share-products#catalog-messages).-   Added [catalog templates](/documentation/business-messaging/whatsapp/templates/marketing-templates/catalog-templates).

* * *

26 de maio de 2023

_Cloud API_

Added [error signals](/documentation/business-messaging/whatsapp/templates/authentication-templates/error-signals) that can help debug authentication templates with one-time password autofill buttons.

* * *

23 de maio de 2023

_Cloud API_

-   Attempting to send a paused template in a template message using v17 or later now returns [error code `132015`](/documentation/business-messaging/whatsapp/support/error-codes#other-errors) instead of `132001`.-   Attempting to send a disabled template in a template message using v17 or later now returns [error code `132016`](/documentation/business-messaging/whatsapp/support/error-codes#other-errors) instead of `132001`.

_On-Premises API_

-   Attempting to send a paused template in a template message now returns [error code `2061`](/docs/whatsapp/on-premises/errors).-   Attempting to send a disabled template in a template message now returns [error code `2062`](/docs/whatsapp/on-premises/errors).

* * *

9 de maio de 2023

_Business Management API_

Added [multi-product message templates](/documentation/business-messaging/whatsapp/templates/marketing-templates/mpm-templates).

_Cloud API_

-   Added [Stripe payments](/docs/whatsapp/cloud-api/payments-api/payments-sg) (Singapore only).-   Added [address messages](/documentation/business-messaging/whatsapp/messages/send-messages#address-messages) for requesting customer addresses (Singapore and India only).-   Added [1,000 messages per second](/documentation/business-messaging/whatsapp/about-the-platform#how-to-request-1-000-mps) throughput.

_On-Premises API_

-   Added [Stripe payments](/docs/whatsapp/on-premises/payments-api/payments-sg) (Singapore only).-   Added [address messages](/docs/whatsapp/api/messages/address-messages) for requesting customer addresses (Singapore and India only).

* * *

1 de maio de 2023

_Business Management API_

-   Added new webhooks notifying you of denials of messaging limit increases to the [`account_alerts` webhooks field](/documentation/business-messaging/whatsapp/webhooks/overview#account-alerts).-   All templates must now be categorized as `AUTHENTICATION`, `MARKETING`, or `UTILITY`.

* * *

26 de abril de 2023

_Business Management API_

Added `hsm_id` field to DELETE [WhatsApp Business Account > Message Templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#Deleting) endpoint. If included, deletes a single template that matches the supplied ID (instead of deleting all templates that match the supplied name).

* * *

18 de abril de 2023

_Cloud API_

Added `last_onboarded_time` to [WhatsApp Business Phone Number](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) node. Indicates when a user created a business phone number on their WhatsApp Business Account by completing the Embedded Signup flow.

* * *

17 de abril de 2023

_Business Management API_

Added `last_onboarded_time` field to the [GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) and [GET <WABA\_ID>/phone\_numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Reading) endpoints to enable sorting results by when a user last onboarded the [Embedded Signup](/documentation/business-messaging/whatsapp/embedded-signup/overview) flow. If this parameter is not specified, the results are sorted in descending order.

* * *

11 de abril de 2023

_Cloud API_

Added [WhatsApp Business Phone Number > Business Compliance Info](/docs/graph-api/reference/whats-app-business-account-to-number-current-status/business_compliance_info) endpoint for adding/updating a business phone number’s India-based compliance information.

_Embedded Signup_

-   Added the following endpoints to support [pre-verified business phone numbers](/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers) for [Embedded Signup](/documentation/business-messaging/whatsapp/embedded-signup/overview) users:
    -   [WhatsApp Business Pre-Verified Phone Number](/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api)-   [WhatsApp Business Pre-Verified Phone Number > Request Code](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api)-   [WhatsApp Business Pre-Verified Phone Number > Verify Code](/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api)-   [Business > Add Phone Numbers](/docs/marketing-api/reference/business/add_phone_numbers)-   In Version 2 of the Embedded Signup Flow, you can now [retrieve both the phone number and WABA ID](/docs/whatsapp/embedded-signup/embed-the-flow#step-5--optional---get-selected-phone-number-id-and-waba-id-at-the-end-of-the-flow) you selected by specifying the sessionInfoVersion inside the extras object at the end of the flow.

* * *

4 de abril de 2023

_Business Management AI_, _Cloud API_, _On-Premises API_

-   The first template category migration is complete.-   Category validation is now part of the template review process for [newly created templates](/documentation/business-messaging/whatsapp/templates/overview#create-message-templates). Applies to version v16.0+.-   API responses to [template creation or editing](/documentation/business-messaging/whatsapp/templates/overview) requests now include template status and template category. Applies to all API versions.-   Added `allow_category_change` parameter to [POST WhatsApp Business Account > Message Templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api#post-version-waba-id-message-templates) endpoint.-   Added `INCORRECT_CATEGORY` as a new rejection `reason` value for [template status webhooks](/documentation/business-messaging/whatsapp/webhooks/overview).-   Templates that rely on variables now require sample values upon [creation or editing](/documentation/business-messaging/whatsapp/templates/overview). Applies to all versions.-   Added `previous_category` field to [WhatsApp Message Templates](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/template-api).-   Business-initiated conversations are no longer eligible for free tier conversations. If your WhatsApp Business Account relies on the services of a Solution Partner or a Meta partner, you are exempt from these changes until June 1, 2023.

* * *

17 de março de 2023

_Business Management API_

-   Added a new `template_category_update` [webhook subscription field](/documentation/business-messaging/whatsapp/webhooks/overview#available-subscription-fields). If subscribed to this field, anytime a template’s category changes you will receive a webhook indicating the template’s previous and new category.-   API responses to [template creation and editing requests](/documentation/business-messaging/whatsapp/templates/overview) now include the template’s status and category.

* * *

14 de março de 2023

_Cloud API_

You can now share location information with users by adding a [Location Header](/documentation/business-messaging/whatsapp/templates/components#location-headers) in your template.

_On-Premises API_

Conversely, users can now share their location information with businesses via [Location Request Messages](/docs/whatsapp/guides/interactive-messages#location-request-messages).

* * *

1 de março de 2023

_Cloud API_, _On-Premises API_

Migrating an India-based business phone number from On-Premises API to Cloud API no longer deletes its [online selling compliance data⁠](https://www.facebook.com/business/help/1104628230079278), so you no longer have to manually repopulate this data after migration.

* * *

15 de fevereiro de 2023

_Business Management API_

Added a new [template comparison](/documentation/business-messaging/whatsapp/templates/template-comparison) endpoint that allows you to compare template send counts and block ratios.

* * *

3 de fevereiro de 2023

_Cloud API_, _On-Premises API_

Added a new [WhatsApp Business Phone Number > Commerce Settings](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-api) endpoint to enable/disable the shopping cart and product catalog on individual business phone numbers. See [Set Commerce Settings](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services/set-commerce-settings) for Cloud API and [Set Commerce Settings](/docs/whatsapp/on-premises/guides/commerce-guides) for On-Premises API for usage instructions and to learn how these settings can help you sell products and services.

* * *

2 de fevereiro de 2023

_Business Management API_, _Cloud API_

Graph API version 16 is now available. Changes to message template categories, API error responses, and webhooks have been introduced as part of this version.

_Cloud API_

-   Templates [created or edited](/documentation/business-messaging/whatsapp/templates/overview) using v16.0 must now be categorized using one of the following categories; all other categories are no longer supported. Applies to Cloud API v16.0+. Will apply to all versions May 1, 2023. This change has been introduced to support our June 1, 2023 switch to a new conversation-based pricing model.
    
    -   `AUTHENTICATION`-   `MARKETING`-   `UTILITY`-   Error subcodes, which are rarely used and should not be relied upon, will no longer be included in v16.0+ error responses. Use `code` and `details` instead.-   Error code 100 (`"code":100`) had multiple unique titles which indicated the nature of a given 100 error. All code 100 errors will now use `Invalid parameter` as their title. Old titles that described the nature of a given code 100 error have been moved to the `details` property. This change is also now reflected in webhooks payloads that describe a code 100 error response.

_Cloud API Webhooks_

-   The `errors` object in webhooks triggered by v16.0+ request errors now include `message` and `error_data.details` properties, and `title` values have changed for multiple error codes. Now, `errors` objects have the following structure and data:

```
[  {    "code": <CODE>,    "title" : "<TITLE>",    "message": "<MESSAGE>",    "error_data": {      "details": "<DETAILS>"    }  },  ...]
```

-   The `title` property value has been updated for the following error codes. Their old values now appear in `error_data.details`.
    -   `130470` new title is now `Re-engagement message`-   `130429` new title is now `Rate limit hit`-   `131045` new title is now `Incorrect certificate`-   `131031` new title is now `Business Account locked`-   `131053` new title is now `Media upload error`-   `131027` new title is now `Something went wrong`-   `131042` new title is now `Business eligibility payment issue`-   `131026` new title is now `Message Undeliverable`-   `131000` new title is now `Something went wrong`-   The `message` property value is the same as the `title` property value, which indicates the error code’s title. This property maps to the `message` property in [API error response payloads](/documentation/business-messaging/whatsapp/support/error-codes).-   The `error_data.details` property now includes error code titles from the error codes listed above and describes the underlying cause of the error. This value maps to the `details` property in API error response payloads.

These changes are reflected in the following `errors` properties in error-related webhooks:

-   `entry.changes.value.errors`-   `entry.changes.value.messages.errors`-   `entry.changes.value.statuses.errors`

* * *

30 de janeiro de 2023

_Cloud API_

Unverified businesses can now initiate up to 250 conversations in a rolling 24-hour period.

* * *

10 de janeiro de 2023

_Embedded Signup_

We have started rolling out the [new embedded signup UI](/docs/whatsapp/embedded-signup/embed-the-flow).

* * *

13 de dezembro de 2022

_Cloud API_

Added new optional `phone_number_id` field to the [Media](/documentation/business-messaging/whatsapp/business-phone-numbers/media) endpoint. If you include this parameter and a business phone number ID, the operation will only be processed if the phone number ID matches the ID of the phone number upon which the media was uploaded.

* * *

8 de dezembro de 2022

_Cloud API_

-   Cloud API [HTTP media caching](/documentation/business-messaging/whatsapp/messages/send-messages#media-http-caching) is out of beta and available to everyone.-   Cloud API will now reattempt to deliver failed webhooks notifications for up to 7 days instead of up to 30 days. See [Webhooks Delivery Failure](/documentation/business-messaging/whatsapp/webhooks/overview#webhook-delivery-failure).

* * *

23 de novembro de 2022

_Business Management API_

Added a new [`template_performance_metrics`](/docs/graph-api/webhooks/reference/whatsapp-business-account#template_performance_metrics) field. Notifies you weekly of all template performance metrics, including messages sent count, messages opened count, and top reasons for blocks.

* * *

22 de novembro de 2022

_Cloud API, Business Management API, Webhooks_

**Webhooks**

New [`account_alerts`](/docs/graph-api/webhooks/reference/whatsapp-business-account#account_alerts) field:

-   Added a new [`account_alerts`](/docs/graph-api/webhooks/reference/whatsapp-business-account#account_alerts) field. Notifies you of Business, WhatsApp Business Account, and business phone number alerts.

New [`account_update`](/docs/graph-api/webhooks/reference/whatsapp-business-account#account_update) field values:

-   Added a new [`account_update.events`](/docs/graph-api/webhooks/reference/whatsapp-business-account#account_update) value: `ACCOUNT_DELETED`. Indicates that a phone number has been de-registered or deleted from a WhatsApp Business Account.-   Added a new [`message_template_status_update.events`](/docs/graph-api/webhooks/reference/whatsapp-business-account#message_template_status_update) value: `PENDING_DELETION`. Indicates a message template has been marked for deletion.

Sample Webhooks notifications that are sent when these new events are triggered:

-   `ACCOUNT_DELETED` : [WhatsApp Business Account Deleted](/documentation/business-messaging/whatsapp/webhooks/overview#WABA-deleted)-   `PENDING_DELETION` : [Template Message Pending Deletion](/documentation/business-messaging/whatsapp/webhooks/overview#template-msg-pending-delete)

**New WhatsApp Business Account endpoint fields**

Added the following [WhatsApp Business Account](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) node fields:

-   `country` (applies to `v15.0+`)-   `ownership_type` (applies to `v15.0+`)-   `business_verification_status` (applies to all versions)

**New Business portfolio endpoint filters**

Added the following filter options to the [Business Client Whatsapp Business Accounts](/docs/marketing-api/reference/business/client_whatsapp_business_accounts) endpoint:

-   Filter by WhatsApp Business Account `creation_time` field using `GREATER_THAN`, `LESS_THAN`, or `IN_RANGE` operators.-   Filter by WhatsApp Business Account `ownership_type` using `EQUAL` or `IN` operators.

Added the following filter options to the [Business Owned WhatsApp Business Accounts](/docs/marketing-api/reference/business/owned_whatsapp_business_accounts) endpoint:

-   Filter by WhatsApp Business Account `creation_time` using `GREATER_THAN`, `LESS_THAN`, or `IN_RANGE` operators.-   Filter by WhatsApp Business Account `ownership_type` using `EQUAL` or `IN` operators.-   Filter by WhatsApp Business Account `country` using `EQUAL` or `IN` operators.

Applies to v15.0 and newer.

**New business phone number node fields**

Added the following [WhatsApp Business Phone Number](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) node fields:

-   `is_official_business_account`-   `messaging_limit_tier`

In addition, you can filter [WhatsApp Business Account Phone Numbers](/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api) endpoint by `is_official_business_account`.

Applies to v15.0 and newer.

* * *

3 de novembro de 2022

_Cloud API_

**Messages Per Second**

Cloud API now supports up to 500 (up from 350) messages per second (mps) of combined text and media messages, by request. See [Throughput](/documentation/business-messaging/whatsapp/throughput) for details.

If you already have 350 mps it will be increased to 500 mps automatically. If you already requested 350 mps but the process has not been completed, you will receive 500 mps upon completion.

**Media HTTP Caching**

We are now beta testing Cloud API media HTTP caching. If you are a Solution Partner, see [Media HTTP Caching](/documentation/business-messaging/whatsapp/messages/send-messages#media-http-caching) to learn how to use headers in your server responses that instruct us to cache your media assets for reuse with future messages.

**Document Captions**

Cloud API now supports captions on documents sent to and received from customers. See **Media Object** in the [Media](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) reference.

* * *

25 de outubro de 2022

_Business Management API_

**Message Template Limit Increased**

WhatsApp Business Accounts can now have up to 6,000 message templates if their parent business has been [verified⁠](https://www.facebook.com/business/help/1095661473946872) and at least one of the parent business’s WhatsApp Business Accounts has a business phone number with an approved [display name⁠](https://www.facebook.com/business/help/338047025165344).

As part of this change, translated versions of a message template now count against a WhatsApp Business Account’s template limit.

* * *

20 de outubro de 2022

_Cloud API_

Businesses in India can now use a credit card to pay for messages sent using the platform. See [Add a Credit Card to Your WhatsApp Business Platform Account⁠](https://www.facebook.com/business/help/488291839463771).

* * *

12 de outubro de 2022

_Business Management API_

You can now migrate a business phone number to and from Cloud API WhatsApp Business Accounts. See [Migrate Phone Number to a Different WABA](/docs/whatsapp/business-management-api/guides/migrate-phone-to-different-waba#preparing-the-destination-waba).

* * *

11 de outubro de 2022

_On-Premises API_

**v2.43**

-   Starting in `v2.43`, there will be changes to the behavior of the [`contacts` endpoint](/docs/whatsapp/on-premises/reference/contacts)-   [Responses for `status` will change](/docs/whatsapp/on-premises/reference/contacts#returned-fields). Regardless of whether a user has WhatsApp, it will always return `valid` for `status` in the response and a `wa_id`. There is no guarantee that the returned wa\_id will be valid. These changes are applicable for both direct responses, as well as webhook responses for non-blocking calls-   Ensure your code avoids relying on `status` and `wa_id` returned in the `contacts` node. In addition, [sending a message](/docs/whatsapp/on-premises/reference/messages) on `v2.39.1` or higher can be completed without calling the `contacts` node-   Ensure your code handles a potential `1013` **User is not valid** error when trying to send a template message, which will be returned if you attempt to send the template message to a phone number without a WhatsApp account-   For non template messages, sending a message to a phone number without a WhatsApp account will return a `470` error

**v2.45, January 10, 2023**

-   Starting in `v2.45`, the [optional `cert` parameter](/docs/whatsapp/multiconnect_mc#parameters) in the `shards` node will become mandatory for all requests. Please update your integration to always include a valid `cert` when calling the `shards` node-   Starting in `v2.41.2`, businesses can use the [`application` node](/docs/whatsapp/on-premises/reference/settings/app) to filter out sent message statuses they are not interested in through the `message` object within the `webhooks` object. In `v2.45`, `sent_status` will be deprecated, so update your integration to use the [`webhooks` object in the `application` node](/docs/whatsapp/on-premises/reference/settings/app#webhooks) for all webhook controls-   As of `v2.39.1`, `recipient_id` is available in both the [`statuses` object](/docs/whatsapp/on-premises/webhooks/outbound#status--message-sent) and in the `message` object. In `v2.45`, `recipient_id` will be removed in the [`statuses` object](/docs/whatsapp/on-premises/webhooks/outbound#status--message-sent), so update your integration to use `recipient_id` under the `message` object

* * *

6 de outubro de 2022

_Cloud API_

-   You can now use different callback URLs for each of your WhatsApp Business Accounts without having to create a unique app for each WhatsApp Business Account. See [Overriding the Callback URL](/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#overriding-the-callback-url) for details.-   All Cloud API endpoints now support version 15 calls.-   Text parameters (`components.parameters.text`) for message templates that only use a body component (`components.type:body`) can now total up to 32,768 characters. See [Parameters object](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api).-   Cloud API now supports up to 350 (up from 250) messages per second (mps) of combined text and media messages, by request. See [Throughput](/documentation/business-messaging/whatsapp/throughput) for details. If you already have 250 mps it will be increased to 350 mps automatically. If you already requested 250 mps but the process has not been completed, you will receive 350 mps upon completion.

_Embedded Signup_

[Embedded Signup](/docs/whatsapp/embedded-signup/overview) now supports mobile web browsers. The user interface will automatically optimize for a mobile experience when it detects that the viewer is using a mobile web browser.

* * *

30 de setembro de 2022

_Embedded Signup_

Businesses that have been onboarded by a Solution Partner through the [Embedded Signup](/documentation/business-messaging/whatsapp/embedded-signup/overview) or “On Behalf Of” process can now initiate up to 250 conversations with unique customers in a rolling 24-hour period, immediately.

* * *

22 de setembro de 2022

_Cloud API_

-   Reactions are now supported. See [Send Messages - Reaction Messages](/documentation/business-messaging/whatsapp/messages/send-messages#reaction-messages) to learn how to send and receive reactions and [Payload Examples - Reaction Messages](/documentation/business-messaging/whatsapp/webhooks/overview#reaction-messages) for webhook payload notification examples.-   The `about` field on business profiles is now supported. See [Business Profiles](/documentation/business-messaging/whatsapp/business-phone-numbers/business-profiles) for details.

* * *

19 de setembro de 2022

_On-Premises API_

**v2.41.3**

The `v2.41.3` version of our Business API client added a new table index on `message_receipt_log` that could benefit partners with high throughput needs. For instance, this improvement allows partners to send more than 200 messages/second.

* * *

7 de setembro de 2022

_Cloud API_

Latest documentation for requesting migration from 80 messages per second to 250 messages per second of combined sending and receiving of text and media messages is now available. See [Throughput](/documentation/business-messaging/whatsapp/throughput).

* * *

25 de agosto de 2022

_Cloud API_

-   You can now include animated stickers in outbound, business-initiated messages and receive [message webhooks](/documentation/business-messaging/whatsapp/webhooks/reference/messages) describing those messages the same way you would if you were sending a non-animated sticker. Refer to the [Message](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) object’s `sticker` property and for animated sticker asset requirements.-   You can now include products and services in messages sent to customers, and customers can add them to shopping carts without having to leave the chat thread. Refer to the [Sell Products & Services](/documentation/business-messaging/whatsapp/catalogs/sell-products-and-services) guide to learn how to send Single and Multi-Product messages to customers.

* * *

21 de julho de 2022

_Cloud API_

-   Businesses can now reply to any message in a conversation thread. Replies will include a contextual bubble referencing the replied-to message. Refer to the [Send Messages](/documentation/business-messaging/whatsapp/messages/send-messages#replies) guide to learn how to reply to a message.-   Cloud API now supports up to 250 messages per second of combined sending and receiving (inclusive of text and media messages), by request. If you are an enterprise partner you can open a [Direct Support⁠](https://business.facebook.com/direct-support) ticket to request 250 MPS throughput by selecting Question Topic: “Cloud API Issues”, Request Type: “Request to migrate to 250 MPS throughput” and filling out the required information.

* * *

27 de junho de 2022

_On-Premises API_

**Best practices for a seamless upgrade to v2.41.2**

In v2.41.2, we are introducing DB schema changes to improve the performance of the system. As a result, upgrades from v2.37.2 and v2.39.x for set ups with large databases which have millions of message and contact entries will take longer than usual.

Generally, perform upgrades during off-peak hours and upgrade lower-throughput setups first.

For large databases, follow these steps:

-   Run garbage collection via the [/services/message/gc](/docs/whatsapp/on-premises/reference/services) endpoint before your upgrade, and ensure it completes successfully-   Please use the [dbupgrade tool](/docs/whatsapp/on-premises/get-started/installation/dev-multiconnect#for-mysql-database-users-upgrading-to-v2-23-x-and-above) to upgrade the DB schemas prior to the version upgrade.

Once done, you will be able to upgrade API versions with minimal down time. It is strongly recommended to bring the API client down before using the dbupgrade tool.

Ensure the dbupgrade tool completes successfully (exit code 0), and avoid or limit API requests while the upgrade is taking place.

We recommend increasing the query timeout on your database servers to one hour, until the upgrade completes successfully.

**v2.41.2 features and updates**

-   Improvements to the latency of the bulk [/contacts](/docs/whatsapp/on-premises/reference/contacts) endpoint requests and resolution of deadlock issues.-   Improvements to the performance and reliability of the [garbage collection process](/docs/whatsapp/on-premises/reference/services).-   Businesses now have the ability to enable/disable `delivered` and `read` webhook notifications which gives them greater control over webhook notifications for messages. This can be achieved through the [settings/applications](/docs/whatsapp/on-premises/reference/settings/app) endpoint.-   `namespace` field is optional for the [template object](/docs/whatsapp/on-premises/reference/messages#template-object).-   More robust handling of media download errors so businesses should experience less issues downloading media sent by customers.-   Additional reliability and bug fixes within the send message and registration workflows.

* * *

19 de maio de 2022

_Cloud API_

Starting today, the WhatsApp Business Cloud API is open to all developers building products or services for themselves or their organizations. To get started, [see our guide](/docs/whatsapp/getting-started/signing-up). If you are interested in offering API access to your customers, please [join our waitlist⁠](https://l.facebook.com/l.php?u=http%3A%2F%2Fbusiness.whatsapp.com%2Flearn-more&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE).

_Business Management API_

The following values for the `category` parameter for the `/WHATSAPP-BUSINESS-ACCOUNT-ID/message_template` endpoint have been deprecated for `v14.0` and later:

-   `ACCOUNT_UPDATE`-   `ALERT_UPDATE`-   `APPOINTMENT_UPDATE`-   `AUTO_REPLY`

-   `ISSUE_RESOLUTION`-   `PAYMENT_UPDATE`-   `PERSONAL_FINANCE_UPDATE`-   `RESERVATION_UPDATE`

-   `SHIPPING_UPDATE`-   `TICKET_UPDATE`-   `TRANSPORTATION_UPDATE`

The following values have been added:

-   `TRANSACTIONAL`-   `MARKETING`

* * *

10 de maio de 2022

_On-Premises API_

**v2.39.4**

This client version contains all features and fixes shipped with `v2.39.1`. Additionally, this release:

-   Fixes a bug that prevented video messages from being sent under certain circumstances. _This fix was also included in `v2.39.2`._-   Fixes a bug that prevented businesses from sending messages to a customer, if the customer was the first to initiate an interaction between the two parties on WhatsApp, and that initiation happened more than 7 days ago. This fix was also included in `v2.39.3`.-   Fixes a bug that prevented businesses from receiving disappearing messages from customers. After `v2.39.4` is installed, businesses will get notified they received a disappearing message by a webhooks notification with type set to `"ephemeral"`. Businesses will not be able to see the message’s content.

When we launched `v2.39.3`, the disappearing messages issue was handled by WhatsApp automatically disabling these messages in the chat thread with the client. For `v2.39.4`, we will not do that. With this version, businesses that receive disappearing messages must ask the customer to disable disappearing messages and resend their latest message.

* * *

4 de maio de 2022

_On-Premises API_

**v2.3.8**

AWS Service Templates and Template URLs:

-   Enterprise: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent.yml?versionId=0pACuWHFUL7U1RjxGcTkAsza7rj.\_5tK](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent.yml%3FversionId%3D0pACuWHFUL7U1RjxGcTkAsza7rj._5tK&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)-   DB: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent\_db.yml?versionId=4BtYzof0\_z0yl7Pbat9mln8Xj5CYS07Z](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent_db.yml%3FversionId%3D4BtYzof0_z0yl7Pbat9mln8Xj5CYS07Z&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)-   Lambda: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent\_lambda.yml?versionId=o1JUcpuOHKfTU\_hRExFxhib5YCeXeZx.](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent_lambda.yml%3FversionId%3Do1JUcpuOHKfTU_hRExFxhib5YCeXeZx.&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)-   Network: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent\_net.yml?versionId=\_D2yaFcS1zEqRLf23t2Wesnh3M.Qw1UF](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent_net.yml%3FversionId%3D_D2yaFcS1zEqRLf23t2Wesnh3M.Qw1UF&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)-   Monitoring: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent\_monitoring.yml?versionId=H534ejFNiHnMpWyy1ERh3kr9TvM5VtyS](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent_monitoring.yml%3FversionId%3DH534ejFNiHnMpWyy1ERh3kr9TvM5VtyS&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)

Changelog:

-   Updating AMIs for CentOS 7 machines

* * *

3 de maio de 2022

_Cloud API_

-   Fixed an issue related to disappearing messages from users.-   Better determination of thumbnail quality for media messages.

* * *

26 de abril de 2022

_On-Premises API_

**v2.3.7**

AWS Service Templates and Template URLs

-   Enterprise: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent.yml?versionId=bNECfwPYZZNGlhzkfCyheoQugydIiui4](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent.yml%3FversionId%3DbNECfwPYZZNGlhzkfCyheoQugydIiui4&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)-   DB: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent\_db.yml?versionId=RRa0vGtuodHnWNyww8uLyZUAWFOfQ7hN](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent_db.yml%3FversionId%3DRRa0vGtuodHnWNyww8uLyZUAWFOfQ7hN&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)-   Lambda: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent\_lambda.yml?versionId=Sp2BO2LgxkVWH2XTxZ6pgOx3yf1xEqUQ](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent_lambda.yml%3FversionId%3DSp2BO2LgxkVWH2XTxZ6pgOx3yf1xEqUQ&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)-   Network: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent\_net.yml?versionId=uNubDzGLs1WddCGB0EgEa6OMSF1vw4Mn](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent_net.yml%3FversionId%3DuNubDzGLs1WddCGB0EgEa6OMSF1vw4Mn&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)-   Monitoring: [https://wa-biz-cfn.s3-us-west-2.amazonaws.com/wa\_ent\_monitoring.yml?versionId=HyC5PA5IZy9d.CFDkNTGDBEyxSHf5gHI](https://l.facebook.com/l.php?u=https%3A%2F%2Fwa-biz-cfn.s3-us-west-2.amazonaws.com%2Fwa_ent_monitoring.yml%3FversionId%3DHyC5PA5IZy9d.CFDkNTGDBEyxSHf5gHI&h=AT5bNuxI3oRfZ5yeq8kdeNAN5LGc78unD9VOUdTB4g7xNsxqypNt-F_Sq4M_G0mVuof9pwMq-Vpd2s9OFjzSB_RPR5Xw5AYz_86NYdruR-nJnUljSKtks7-SEuRLcAIAad1xGfSO2tbEmnV6QwHxIauLENE)

Changelog:

-   Moved from using pip to pip3 to install AWS bootstrap scripts.-   Fixed an issue with awscli installation.

* * *

14 de abril de 2022

_Embedded Signup_

We’re making it easier for businesses and partners to scale on the WhatsApp Business Platform with an improved onboarding experience. Starting May 2, 2022, businesses will be able to message customers immediately after signup and only need to complete Business Verification when they’re ready to scale business-initiated conversations or request to become an Official Business Account.

The changes mean that onboarded businesses will be able to:

-   Respond to unlimited customer-initiated conversations.-   Send business-initiated conversations to 50 unique customers in a rolling 24-hour period.

These are the changes being implemented on May 2, 2022:

-   WhatsApp Account checks and display name review will no longer be a requirement to get started on the platform. After signup, a compliance check with the WhatsApp Platform Policy Checks will be auto-triggered and will be performed in the background.-   Display name review will be initiated after Business Verification is completed. Businesses should still follow the display name best practice guidelines when adding a new phone number. For more information, see Display Names.-   Business Verification only needs to be completed when businesses are ready to scale business-initiated conversations or request to become an Official Business Account (OBA). For more information, see how to increase limits.-   Since businesses get access to sending messages after sign up, the Unverified Trial Experience will be deprecated.-   Businesses will be able to see the messaging limits in the Overview Dashboard in WhatsApp Manager -after completing the signup process.

The changes listed above have no impact on pricing. See pricing for more details.

* * *

5 de abril de 2022

_Cloud API_

Starting today, the Cloud API is generally available to all existing Solution Partners and direct clients. Additionally, we’re releasing the following features for Cloud API developers:

-   **Messages with Stickers**: Send media messages containing third-party static stickers. See the following documentation for more details: [Reference, Messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) and [Reference, Media](/documentation/business-messaging/whatsapp/business-phone-numbers/media). We support inbound both and outbound stickers. For outbound, we only support static third-party stickers. For inbound, we support all types of stickers.-   **Deregister Phone Number API**: Make `POST` calls to `PHONE_NUMBER_ID/deregister` in order to remove a phone number from the WhatsApp Business API. See [Registration](/documentation/business-messaging/whatsapp/business-phone-numbers/registration#deregister-phone) for information.-   **New Phone Verification Option**: Verify your business phone number via Graph API calls. See [Phone Numbers](/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#verify) for information.-   **New Referral Webhooks**: Receive Webhooks notifications when a user clicks on an ad that clicks to WhatsApp and sends a message to the business. See [Webhooks](/documentation/business-messaging/whatsapp/webhooks/overview#received-message-triggered-by-click-to-whatsapp-ads) for information. Be aware that the Cloud API’s webhooks `referral` object is different from the On-Premises API’s `referral` object.

Additionally, we are announcing that App Review is no longer required for first-party developers using the Cloud API. All developers are subject to the [WhatsApp Business Platform messaging limits](/docs/whatsapp/api/rate-limits#messaging).

* * *

26 de março de 2022

_On-Premises API_

**v2.37.2**

This version contains the same features as [`v2.37.1`](/docs/whatsapp/changelog/archive#wa237), but there’s a different expiration date. `v2.37.2` expires on Sep 22, 2022.

Known Issues:

Some Kubernetes developers may see `CrashLoopBackOff` for their webapp container and their container may fail to start. To fix that, add following line in the Kubernetes deployment `YML` file under webapp configuration:

```
command: ["/opt/whatsapp/bin/wait_on_mysql.sh", "/opt/whatsapp/bin/launch_within_docker.sh"]
```

* * *

25 de março de 2022

_On-Premises API_

**v2.39.3**

The `v2.39.3` version of our Business API client is available for developers today. The new client includes two fixes and additional logs to support debugging. The two fixes are:

-   Fixed a bug that prevented businesses from sending messages to a customer, if the customer was the first to initiate an interaction between the two parties on WhatsApp, and that initiation happened more than 7 days ago.-   Fixed a bug that prevented businesses from receiving disappearing messages from customers. After v2.39.3 is installed, businesses will get notified they received a disappearing message by a webhooks notification. On their end, customers will see a warning saying that the disappearing messages mode has been turned off.

* * *

15 de março de 2022

_Cloud API_

**List Messages and Reply Buttons**

Starting today, Cloud API beta users can start sending and list and reply button messages. See the following documentation for more details:

-   [Reference, Messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)-   Webhooks: [List Messages](/documentation/business-messaging/whatsapp/webhooks/overview#list-messages) and [Reply Button](/documentation/business-messaging/whatsapp/webhooks/overview#reply-button)-   [Webhooks, Components](/documentation/business-messaging/whatsapp/webhooks/overview#interactive-object)

**Preview URL**

Starting today, Cloud API beta users can add a preview URL box to text messages that include a URL. See the following documentation for more details:

-   [Reference, Messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

**New Documentation Guides**

-   [Migrate Between On-Premises and Cloud API](/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud)

* * *

4 de março de 2022

_On-Premises API_

**v2.39.2**

We just released the On-Premises API `v2.39.2`. This version fixes a bug that prevented video messages from being sent under certain circumstances.

Known Issues:

-   A bug exists that prevents businesses from sending messages to a customer, if the customer was the first to initiate an interaction between the two parties on WhatsApp, and that initiation happened more than 7 days ago.-   A bug exists that prevents businesses from receiving disappearing messages from customers.

* * *

1 de março de 2022

_Cloud API_

Cloud API beta users can start sending and receiving video messages. The following documentation provides more information:

-   [Media, Upload Media](/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media)-   [Supported Media Types](/documentation/business-messaging/whatsapp/business-phone-numbers/media#supported-media-types)-   [Messages, Examples, Media Messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)-   [Webhooks, Components](/documentation/business-messaging/whatsapp/webhooks/overview#fields)

* * *

1 de fevereiro de 2022

_Cloud API_

Starting today, WhatsApp has switched from a notification-based pricing model to a conversation-based pricing model. Businesses are charged per conversation, which includes all messages delivered in a 24 hour session. See [Conversation-Based Pricing](/documentation/business-messaging/whatsapp/pricing) for information.

-   Starting today, Cloud API beta users can start sending and receiving location and contact messages. See the documentation below for more information:
    -   Reference, Messages: [Location](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) and [Contacts](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)-   Webhooks, Examples: [Received Messages](/documentation/business-messaging/whatsapp/webhooks/overview#examples--received-messages)-   We now support 80 messages per second peak throughput per phone number. This includes incoming and outgoing messages, as well as text, template and media messages.

_On-Premises API_

**v2.39.1**

The `2.39.1` version of our Business API client is available for developers starting today. The new client includes:

-   New field for the Set Shards API.-   New hostname added to network requirements.-   New error code `1031`.-   Deprecations of the `hsm` type and the `webhook_payload_conversation_pricingmodel_disabled` application setting.

**Set Shards API**

Starting with the new API client version, you may provide your phone’s certificate when you are setting up multiconnect. That means that, when calling the /v1/account/shards endpoint, you can add the Base64-encoded certificate in the cert field. See [Scale Your API Client With Multiconnect](/docs/whatsapp/multiconnect_mc) for information.

**New Hostname**

We have added `graph.whatsapp.com` to the list of WhatsApp server hostnames that the Business API client requires connectivity to. See [Set Up and Debug Your Network, Hostnames](/docs/whatsapp/guides/network-requirements) for information.

**Error Code Updates**

With `v2.39`, we have added error code `1031`. You will get this error if your account has been locked and can’t send any messages due to an integrity policy violation. See [Error and Status Messages](/docs/whatsapp/api/errors#error) and [Policy Enforcement](/documentation/business-messaging/whatsapp/policy-enforcement) for information.

**Deprecations**

-   **Messages API**: The `hsm` type has been deprecated with `v2.39`. You should use the `template` type instead.-   **Application Setting**: The application setting `webhook_payload_conversation_pricingmodel_disabled` has been deprecated.

**Known Issues**

Some video messages fail to send under certain circumstances.

* * *

15 de novembro de 2021

_Cloud API_

**Audio Messages**

Starting today, Cloud API beta users can start sending [audio messages](/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) to their customers. For supported audio types, see our [media documentation](/documentation/business-messaging/whatsapp/business-phone-numbers/media#supported-media-types).

**Webhooks**

We have updated our [webhooks documentation](/documentation/business-messaging/whatsapp/webhooks/overview) to clarify the following: **if you receive a message type that is not yet supported by Cloud API, you will be notified via an [unknown message webhook](/documentation/business-messaging/whatsapp/webhooks/overview#received-unknown-messages)**. This means that, for the current API beta release, you will get an unknown message webhook if you receive any of the following message types: Media Messages (Video), Contact Messages, Location Messages, Stickers, Stickerpacks.

* * *

21 de outubro de 2021

_Cloud API_

**Feature Availability**

We have updated the [list of features that will be available for the Cloud API Beta release](/docs/whatsapp/cloud-api/overview/on-premises-cloud-api-comparison). This is an updated snapshot of the features and their availability:

Available for beta:

-   Text Messages-   Text-Based Message Templates-   Media Messages (Images and Documents)-   Media-Based Message Templates (Images and Documents)-   Interactive Message Templates

Not available for beta:

-   Media Messages (Audio and Video)-   Media-Based Message Templates (Audio and Video)-   Contact Messages-   Location Messages-   Stickers and Stickerpacks-   List Messages-   Dynamic Reply Buttons-   Multi-Product Messages

Endpoint Availability:

The following endpoints will not be available for the Cloud API Beta release:

-   `/PHONE_NUMBER_ID/deregister`-   `/PHONE_NUMBER_ID/application_settings`

Staged Onboarding:

We’ve added specific instructions for each stage of the beta implementation. See more information [here](/docs/whatsapp/cloud-api/alpha-and-beta-program#staged-onboarding).

Migrating Between On-Premises and Cloud API:

We’ve added instructions to migrate from the Cloud API back to On-Premises, if needed. See more information [here](/documentation/business-messaging/whatsapp/about-the-platform#migration).