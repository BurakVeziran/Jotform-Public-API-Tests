import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
require('dotenv').config();

test(`Update User Settings is success`, async ({ request }) => {
    const baseURL = process.env.baseURL;
    const APIKey = process.env.APIKey;
    const randomCompany = data.randomCompanyName;

    const updateSettingsRequest = await request.post(`${baseURL}/user/settings?apiKey=${APIKey}&company=${randomCompany}`);
    const response = await updateSettingsRequest.json();
    process.env.company = randomCompany;

    expect(updateSettingsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.company).toBe(randomCompany);
});
