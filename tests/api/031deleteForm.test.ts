import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Delete Form is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const formID = process.env.formID;
    const username = process.env.USERNAME;
    const formTitle = process.env.formTitle;

    const deleteFormRequest = await request.delete(`${baseURL}/form/${formID}?apiKey=${APIKey}`);
    const response = await deleteFormRequest.json();

    expect(deleteFormRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.id).toBe(formID);
    expect(response.content.username).toBe(username);
    expect(response.content.title).toBe(formTitle);
    expect(response.content.status).toBe('DELETED');
})

