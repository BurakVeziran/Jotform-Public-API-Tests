import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';


test(`Login is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const username = data.username;
    const password = data.password;

    const loginRequest = await request.get(`${baseURL}/user/login?username=${username}&password=${password}&apiKey=${APIKey}`);
    const response = await loginRequest.json();


    expect(loginRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content).toBe("Login successfully completed.");

});
