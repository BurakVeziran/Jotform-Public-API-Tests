import { test, expect } from '@playwright/test';
require('dotenv').config();

test.skip(`Logout is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    const loginRequest = await request.get(`${baseURL}/user/login?username=${username}&password=${password}&apiKey=${APIKey}`);
    const logoutRequest = await request.get(`${baseURL}/v1/user/logout?apiKey=${APIKey}`);
    const response = await logoutRequest.json();

    expect(loginRequest.status()).toBe(200);
    expect(logoutRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content).toBe(true);
})
