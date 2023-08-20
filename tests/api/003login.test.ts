import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Login is Success`, async ({ request }) => {
    const baseURL = process.env.baseURL;
    const APIKey = process.env.APIKey;
    const username = process.env.username;
    const password = process.env.password;

    const loginRequest = await request.get(`${baseURL}/user/login?username=${username}&password=${password}&apiKey=${APIKey}`);
    const response = await loginRequest.json();


    expect(loginRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content).toBe("Login successfully completed.");

});
