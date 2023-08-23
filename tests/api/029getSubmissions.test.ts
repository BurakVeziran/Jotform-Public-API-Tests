import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Get Submission is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const staticFormID = process.env.STATICFORMID;

    const getSubmissionRequest = await request.get(`${baseURL}/form/${staticFormID}/submissions?apiKey=${APIKey}`);
    const response = await getSubmissionRequest.json();

    expect(getSubmissionRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content[0].form_id).toBe(staticFormID);
    expect(response.content[0].id).toBe(process.env.submissionID);
})

