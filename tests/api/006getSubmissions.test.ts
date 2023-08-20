import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Get Submissions is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;

    const submissionsRequest = await request.get(`${baseURL}/user/submissions?apiKey=${APIKey}`);
    const response = await submissionsRequest.json();

    expect(submissionsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
});
