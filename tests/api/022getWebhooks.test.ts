import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Get webhook is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const formID = process.env.formID;

    const getWebhookRequest = await request.get(`${baseURL}/form/${formID}/webhooks?apiKey=${APIKey}`);
    const response = await getWebhookRequest.json();

    expect(getWebhookRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content[0]).toBe(process.env.webhookURL);

})
