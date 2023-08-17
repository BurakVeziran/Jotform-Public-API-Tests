import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`Get History is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const getHistoryRequest = await request.get(`${baseURL}/user/history?apiKey=${APIKey}`);
    const response = await getHistoryRequest.json();

    expect(getHistoryRequest.status()).toBe(200);
    expect(response.message).toBe("success");
});
