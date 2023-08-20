import { test, expect } from '@playwright/test';
import { randomStyle } from '../../ts/data';
require('dotenv').config();

test(`Update Form Properties is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const formID = process.env.formID;
    const style = randomStyle;
    const formPropertiesRequest = await request.post(`${baseURL}/form/${formID}/properties?apiKey=${APIKey}&properties[styles]=${style}`);
    const response = await formPropertiesRequest.json();

    expect(formPropertiesRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.styles).toBe(style);
    expect(response.content.formID).toBe(formID);
})