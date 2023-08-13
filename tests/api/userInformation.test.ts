import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`User Information is correct`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const username = data.username;
    const email = data.email;
    const timeZone = data.timeZone;
    const name = data.name;
    const loginRequest = await request.get(`${baseURL}/user?apiKey=${APIKey}`);
    const response = await loginRequest.json();

    expect(loginRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(username);
    expect(response.content.email).toBe(email);
    expect(response.content.time_zone).toBe(timeZone);
    expect(response.content.name).toBe(name);

});


