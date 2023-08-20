import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`User Settings are correct`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const username = process.env.USERNAME;
    const email = process.env.EMAIL;
    const timeZone = process.env.TIMEZONE;
    const name = process.env.NAME;

    const settingsRequest = await request.get(`${baseURL}/user/settings?apiKey=${APIKey}`);
    const response = await settingsRequest.json();

    expect(settingsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(username);
    expect(response.content.email).toBe(email);
    expect(response.content.time_zone).toBe(timeZone);
    expect(response.content.name).toBe(name);
});


