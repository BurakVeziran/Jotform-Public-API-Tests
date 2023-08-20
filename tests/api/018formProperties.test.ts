import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Form Properties is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const username = process.env.USERNAME;
    const formID = process.env.STATICFORMID;
    const name = process.env.NAME;
    const formPropertiesRequest = await request.get(`${baseURL}/form/${formID}/properties?apiKey=${APIKey}`);
    const response = await formPropertiesRequest.json();

    expect(formPropertiesRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.owner).toBe(username);
    expect(response.content.title).toBe("API Tests Do Not Delete");
    expect(response.content.id).toBe(formID);
    expect(response.content.formOwnerName).toBe(name);
})
