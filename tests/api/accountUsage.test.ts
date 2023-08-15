import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';

test(`Account usage is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const usageRequest = await request.get(`${baseURL}/user/usage?apiKey=${APIKey}`);
    const response = await usageRequest.json();

    expect(usageRequest.status()).toBe(200);
    expect(response.message).toBe("success");
});
