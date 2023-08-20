import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Delete webhook is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const formID = process.env.formID;

    const deleteWebhookRequest = await request.delete(`${baseURL}/form/${formID}/webhooks/0?apiKey=${APIKey}`);
    const response = await deleteWebhookRequest.json();

    expect(deleteWebhookRequest.status()).toBe(200);
    expect(response.message).toBe("success");
})