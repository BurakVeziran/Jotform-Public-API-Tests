import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';

test(`Get Submissions is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const submissionsRequest = await request.get(`${baseURL}/user/submissions?apiKey=${APIKey}`);
    const response = await submissionsRequest.json();

    expect(submissionsRequest.status()).toBe(200);
    expect(response.message).toBe("success");
});
