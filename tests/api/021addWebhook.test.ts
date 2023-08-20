import { test, expect } from '@playwright/test';
import { webhookUrl } from '../../ts/data';
require('dotenv').config();

test(`Add webhook is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const formID = process.env.formID;

    const addWebhookRequest = await request.post(`${baseURL}/form/${formID}/webhooks?apiKey=${APIKey}&webhookURL=${webhookUrl}`);
    const response = await addWebhookRequest.json();
    process.env.webhookURL = response.content[0];

    expect(addWebhookRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content[0]).toBe(process.env.webhookURL);
})
