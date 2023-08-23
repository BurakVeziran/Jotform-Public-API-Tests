import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Delete Submission is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const submissionID = process.env.submissionID;

    const deleteSubmissionRequest = await request.delete(`${baseURL}/submission/${submissionID}?apiKey=${APIKey}`);
    const response = await deleteSubmissionRequest.json();

    expect(deleteSubmissionRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content).toBe('Submission' + ' '+ '#' + submissionID+ ' ' + 'deleted successfully.');
})
