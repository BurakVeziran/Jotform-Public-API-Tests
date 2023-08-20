import { test, expect } from '@playwright/test';
import { formQuestions } from '../../ts/data';
require('dotenv').config();

test(`Form Question is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const formID = process.env.STATICFORMID;

    const getFormQuestionsRequest = await request.get(`${baseURL}/form/${formID}/questions?apiKey=${APIKey}`);
    const response = await getFormQuestionsRequest.json();

    expect(getFormQuestionsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    for (let i = 1; i <= 5; i++) {
        expect(response.content[i.toString()].type).toBe(formQuestions[i.toString()].type);
        expect(response.content[i.toString()].text).toBe(formQuestions[i.toString()].text);
    }

})
