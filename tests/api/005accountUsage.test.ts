import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Account usage is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;

    const usageRequest = await request.get(`${baseURL}/user/usage?apiKey=${APIKey}`);
    const response = await usageRequest.json();

    expect(usageRequest.status()).toBe(200);
    expect(response.message).toBe("success");
});
