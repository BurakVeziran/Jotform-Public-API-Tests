import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`Get User Form is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const username = data.username;
    const formID = process.env.formID;
    const formTitle = process.env.formTitle;
    const getUserFormRequest = await request.get(`${baseURL}/user/forms?apiKey=${APIKey}`);
    const response = await getUserFormRequest.json();

    expect(getUserFormRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content[0].username).toBe(username);
    expect(response.content[0].title).toBe(formTitle);
    expect(response.content[0].id).toBe(formID);
})
