import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
require('dotenv').config();

test(`Post Submission is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const staticFormID = process.env.STATICFORMID;
    const randomAnswer = data.randomAnswer;

    const postSubmissionRequest = await request.post(`${baseURL}/form/${staticFormID}/submissions?apiKey=${APIKey}&submission[1]=${randomAnswer}`);
    const response = await postSubmissionRequest.json();

    expect(postSubmissionRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    process.env.submissionID = response.content.submissionID;
    process.env.submissionURL = response.content.URL;
})
