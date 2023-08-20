import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Get History is Success`, async ({ request }) => {
    const baseURL = process.env.baseURL;
    const APIKey = process.env.APIKey;

    const getHistoryRequest = await request.get(`${baseURL}/user/history?apiKey=${APIKey}`);
    const response = await getHistoryRequest.json();

    expect(getHistoryRequest.status()).toBe(200);
    expect(response.message).toBe("success");
});
