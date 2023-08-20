import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Form Information is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const username = process.env.USERNAME;
    const formID = process.env.formID;
    const formTitle = process.env.formTitle;

    const getFormInformationRequest = await request.get(`${baseURL}/form/${formID}?apiKey=${APIKey}`);
    const response = await getFormInformationRequest.json();

    expect(getFormInformationRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(username);
    expect(response.content.title).toBe(formTitle);
    expect(response.content.id).toBe(formID);
})
