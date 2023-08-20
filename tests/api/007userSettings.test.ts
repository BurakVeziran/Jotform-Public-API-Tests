import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`User Settings are correct`, async ({ request }) => {
    const baseURL = process.env.baseURL;
    const APIKey = process.env.APIKey;
    const username = process.env.username;
    const email = process.env.email;
    const timeZone = process.env.timeZone;
    const name = process.env.name;

    const settingsRequest = await request.get(`${baseURL}/user/settings?apiKey=${APIKey}`);
    const response = await settingsRequest.json();

    expect(settingsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(username);
    expect(response.content.email).toBe(email);
    expect(response.content.time_zone).toBe(timeZone);
    expect(response.content.name).toBe(name);
});


