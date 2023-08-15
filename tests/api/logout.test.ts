import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';

test.skip(`Logout is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const username = data.username;
    const password = data.password;

    const loginRequest = await request.get(`${baseURL}/user/login?username=${username}&password=${password}&apiKey=${APIKey}`);
    const logoutRequest = await request.get(`${baseURL}/v1/user/logout?apiKey=${APIKey}`);
    const response = await logoutRequest.json();


    console.warn(response)
    expect(loginRequest.status()).toBe(200);
    expect(logoutRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content).toBe(true);
})
