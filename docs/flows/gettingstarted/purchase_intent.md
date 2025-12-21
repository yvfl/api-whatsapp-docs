<!-- Source: https://developers.facebook.com/docs/whatsapp/flows/gettingstarted/purchase-intent -->
<!-- Scraped: 2025-12-21T15:24:37.725Z -->

![](https://lookaside.fbsbx.com/elementpath/media/?media_id=595945097590761&version=1765810345)[Plataforma do WhatsApp Business](https://developers.facebook.com/docs/whatsapp)

[](#)

# Use Case Guide: Collect Purchase Interest

## Intro and Overview

![](https://lookaside.fbsbx.com/elementpath/media/?media_id=847283186885264&version=1764886795)

It's easier than ever to collect information from your customers, to understand their preferences and collect opt in for promotions ahead of the sales season. With WhatsApp Flows, your customers can provide their details and interests in a fast and simple way, without the need to speak with an agent.A business can leverage this information to drive targeted promotions and purchases.

In this guide, we will walk through the entire process to build a Flow for ‘Collect Purchase Interest’ use case. The templates here can be adapted to suit your use case.

Flows we will build will demonstrate how you can:

-   Collect relevant personal information from a user
-   Allow users to select products or services they are interested in, which can be leveraged in future promotional campaigns.

This template can be further adapted for any use case where you want to collect information from your customers to better understand their attributes and preferences (i.e. registering for a webinar, event, newsletter etc.).

## Getting Started

To follow this guide, ensure you have:

-   Completed [prerequisites](/docs/whatsapp/flows/gettingstarted#prerequisites) for building Flows.

[](#)

## Flows JSON Template

Flow JSON

{

  "version": "7.3",

  "screens": \[

    {

      "id": "JOIN\_NOW",

      "title": "Join Now",

      "data": {},

      "layout": {

        "type": "SingleColumnLayout",

        "children": \[

          {

            "type": "Form",

            "name": "form",

            "children": \[

              {

                "type": "TextSubheading",

                "text": "Get early access to our Mega Sales Day deals. Register now!"

              },

              {

                "type": "TextInput",

                "name": "name",

                "label": "Name",

                "input-type": "text",

                "required": true

              },

              {

                "type": "TextInput",

                "label": "Email",

                "name": "email",

                "input-type": "email",

                "required": true

              },

              {

                "type": "OptIn",

                "label": "I agree to the terms.",

                "required": true,

                "name": "tos\_optin",

                "on-click-action": {

                  "name": "navigate",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Configurações

​

Select screen

JOIN\_NOW

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

* * *

Preview Flow

## Get early access to our Mega Sales Day deals. Register now!

# Name

Name

# Email

Email

I agree to the terms. Leia mais Leia mais

(opcional) Keep me up to date about offers and promotions

Continue

Gerenciada pela empresa. Saiba mais Saiba mais

### Create new flow from a template

1.  In the [Flows section of WhatsApp Manager](https://business.facebook.com/wa/manage/flows/) click on the **Create Flow** button in the top right corner.
2.  In the Create page, fill in the details for the pre-approved loan Flow:
    -   **Name** - Type _Collect Purchase Intent_, or choose another name you like.
    -   **Categories** - Select _Lead generation_.
    -   **Template** - Choose _Collect purchase intent_. You can further customize the template to suit your use case.
3.  Click **Create** to create flow.

You can preview the Flow on the right of the Builder UI.

The Flow remains in the draft state as you edit it. You can share it with your team for testing purposes only. To share it with a large audience, you’ll need to publish it. However, you can’t edit the Flow once you [publish](#publishing).

**See also**

-   [Flow JSON Overview](/docs/whatsapp/flows/reference/flowjson)

[](#)

## Testing and Debugging

### Debug flow using the interactive preview

After you complete the configurations, toggle the interactive preview in the WhatsApp Builder UI to test the Flow.

1.  Trigger the interactive preview by clicking on settings menu in the **Preview** section of the Flow Builder and enabling **Interactive mode** toggle.
    
2.  In the modal that appears, select **JOIN\_NOW** as the **First Screen**.
    

Now, click on **Actions** tab at the bottom of the code editor in Builder. You’ll see an `navigate` action in the list. Click on it to see the details of the action.

Return back to **Preview** and proceed to complete the first screen and then click on _Continue_ button to navigate to next screen. Back in **Actions** tab notice the new `navigate` action logged and details contains data passed to next screen.

Keep testing out the Flow and observe the data changes in the **Actions** tab. Similar logs will be generated when users interact with the Flow from their mobile devices.

### Send draft flow to your device

Before you publish your flow you can also send it and test it on an actual device. To send draft flow to your device, follow [instructions here](/docs/whatsapp/flows/guides/testingdebugging#send-draft-flow-to-your-device).

**See also**

-   [Flow Testing and debugging guide](/docs/whatsapp/flows/guides/testingdebugging)

[](#)

## Publishing

When you first created your Flow, it entered the Draft state. And as you edited and saved the modified Flow JSON content, it remained in the Draft state. You are able to send the Flow while it's in the Draft state, but only for testing purposes. If you want to send the Flow to a larger audience, you'll need to Publish the Flow.

You can publish your Flow once you have ensured that:

-   All validation errors and [publishing checks](/docs/whatsapp/flows/guides/healthmonitoring#publishing-checks) have been resolved.
-   The Flow meets the [design principles](https://developers.facebook.com/docs/whatsapp/flows/guides/bestpractices) of WhatsApp Flows
-   The Flow complies with [WhatsApp Terms of Service](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fterms-of-service%2F%3Flang%3Den&h=AT24V7uWX26sUwhOv1OVhAf0WrmPtDUtasZ5P2I8_U1vfk_xtUAmCAQ1QoVRiW9NBJPYAkBEdbt3AgkiTk6zWBSWgpZkKBK_X09OvZPue-N1-Jc6RZo-cc8OVg6FtL5gTfzILqYPb-WhBlR9WujmL883l-0), the [WhatsApp Business Messaging Policy](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F933578044281252&h=AT2XUP1UcVyOajYLn2i8dANCY4ZCz-hC3QiHVmBuZjSuDpEn8V4aPsApw-k2PsYct040oy-plb6nTXVA9xcxU3Auz3FnTHwxm5eVBSIcS3GOWac8FbcxY6xFAWZ3rnAPHQGmfAO6XG5NlHA45f_vfYBTpAk) and, if applicable, the [WhatsApp Commerce Policy](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fcommerce-policy%2F%3Flang%3Den&h=AT3W-PPmoK4QsNawe7K7Gfzv6-h8righGSx1fVFjbpJQ7A7nErYC99hDAYF2sbBpGJs36TOQ8QcMaWeEA7vXkjCiwLio6qaaubKJ6H_ZTzY8yaAMg8KeB4gKkeP6k4EFnF-zy4VWwywt0d9kXyVeeZPO0gppZb4d8SyIwy3u)

Remember, once a Flow has been published it can no longer be modified. See [Flow Status Lifecycle](/docs/whatsapp/flows/gettingstarted/flows-lifecycle) for more information on the different Flow states.

To publish your Flow, open the **three dot** menu to the right of the **Save** button and click **Publish**. Once published, the Flow can be sent to anyone!

[](#)

## Sending

You can send your WhatsApp Flow as:

-   **[Template messages](https://developers.facebook.com/docs/whatsapp/flows/gettingstarted/sendingaflow#templatemessages)** - these do not require a 24-hour customer service window to be open between you and the message recipient before the message can be sent.
-   **[Interactive Flow messages](https://developers.facebook.com/docs/whatsapp/flows/gettingstarted/sendingaflow#userinitiated)** - these can only be sent to a user when a customer service window is open between you and the user.

[Learn more about sending your Flow](https://developers.facebook.com/docs/whatsapp/flows/gettingstarted/sendingaflow)

[](#)

## Receiving flow response

Upon flow completion a response message will be sent to the WhatsApp chat. You will receive it in the same way as you receive all other messages from the user - via message webhook.

[Learn more about how to setup messaging webhook](/docs/whatsapp/flows/gettingstarted/receiveflowresponse)

[](#)

## Monitoring

Flow monitoring is only applicable to Flows with endpoint.

[](#)

## Next Steps

Now that you have successfully completed this guide, learn more about what you can do with this Flows in our [Guides](/docs/whatsapp/flows/guides) and [Reference](https://developers.facebook.com/docs/whatsapp/flows/reference) sections.

[](#)