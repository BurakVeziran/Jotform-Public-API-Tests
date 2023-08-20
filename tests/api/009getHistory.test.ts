import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Get History is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;

    const getHistoryRequest = await request.get(`${baseURL}/user/history?apiKey=${APIKey}`);
    const response = await getHistoryRequest.json();

    expect(getHistoryRequest.status()).toBe(200);
    expect(response.message).toBe("success");
});
