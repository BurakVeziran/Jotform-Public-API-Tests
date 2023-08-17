import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`Form Question is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const questionZeroType = process.env.questionZeroType;
    const questionZeroText = process.env.questionZeroText;
    const questionOneType = process.env.questionOneType;
    const questionOneText = process.env.questionOneText;
    const formID = process.env.formID;
    const getFormQuestionsRequest = await request.get(`${baseURL}/form/${formID}/questions?apiKey=${APIKey}`);
    const response = await getFormQuestionsRequest.json();

    expect(getFormQuestionsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content['1'].type).toBe(questionZeroType);
    expect(response.content['1'].text).toBe(questionZeroText);
    expect(response.content['2'].type).toBe(questionOneType);
    expect(response.content['2'].text).toBe(questionOneText);
})
