import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`User Information is correct`, async ({ request }) => {
    const baseURL = process.env.baseURL;
    const APIKey = process.env.APIKey;
    const username = process.env.username;
    const email = process.env.email;
    const timeZone = process.env.timeZone;
    const name = process.env.name;

    const informationRequest = await request.get(`${baseURL}/user?apiKey=${APIKey}`);
    const response = await informationRequest.json();

    expect(informationRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(username);
    expect(response.content.email).toBe(email);
    expect(response.content.time_zone).toBe(timeZone);
    expect(response.content.name).toBe(name);
});


