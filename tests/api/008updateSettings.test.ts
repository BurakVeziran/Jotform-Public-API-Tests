import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`Update User Settings is success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const randomCompany = data.randomCompanyName;
    const updateSettingsRequest = await request.post(`${baseURL}/user/settings?apiKey=${APIKey}&company=${randomCompany}`);
    const response = await updateSettingsRequest.json();
    process.env.company = randomCompany;

    expect(updateSettingsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.company).toBe(randomCompany);
});
