import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test.skip(`Form Question is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const username = data.username;
    const formID = process.env.formID;
    const formTitle = process.env.formTitle;
    const getFormQuestionsRequest = await request.get(`${baseURL}/form/${formID}/questions?apiKey=${APIKey}`);
    const response = await getFormQuestionsRequest.json();

    console.warn(response)
    expect(getFormQuestionsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(username);
    expect(response.content.title).toBe(formTitle);
    expect(response.content.id).toBe(formID);
})
