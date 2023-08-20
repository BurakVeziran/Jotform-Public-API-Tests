import { test, expect } from '@playwright/test';
require('dotenv').config();

test.skip(`Logout is Success`, async ({ request }) => {
    const baseURL = process.env.baseURL;
    const APIKey = process.env.ApiKey;
    const username = process.env.username;
    const password = process.env.password;

    const loginRequest = await request.get(`${baseURL}/user/login?username=${username}&password=${password}&apiKey=${APIKey}`);
    const logoutRequest = await request.get(`${baseURL}/v1/user/logout?apiKey=${APIKey}`);
    const response = await logoutRequest.json();

    expect(loginRequest.status()).toBe(200);
    expect(logoutRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content).toBe(true);
})
