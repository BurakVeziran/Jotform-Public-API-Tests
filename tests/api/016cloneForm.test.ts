import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Clone Form is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const username = process.env.USERNAME;
    const formID = process.env.STATICFORMID;

    const getFormInformationRequest = await request.post(`${baseURL}/form/${formID}/clone?apiKey=${APIKey}`);
    const response = await getFormInformationRequest.json();

    expect(getFormInformationRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(username);
    expect(response.content.title).toBe("Clone of" + " " + "API Tests Do Not Delete");
})

