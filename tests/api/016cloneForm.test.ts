import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`Clone Form is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const username = data.username;
    const formID = process.env.formID;
    const formTitle = process.env.contentTitle;
    const getFormInformationRequest = await request.post(`${baseURL}/form/${formID}/clone?apiKey=${APIKey}`);
    const response = await getFormInformationRequest.json();

    expect(getFormInformationRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(username);
    expect(response.content.title).toBe("Clone of" + " " + formTitle);
})

