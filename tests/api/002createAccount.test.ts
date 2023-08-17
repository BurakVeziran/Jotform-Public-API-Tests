import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';

test(`Created accounts information is correct`, async ({ request }) => {
    const baseURL = data.baseURL;
    const randomEmail = data.randomEmail;
    const randomUsername = data.randomUsername;
    const randomPassword = data.randomPassword;
    const createRequest = await request.post(`${baseURL}/user/register?username=${randomUsername}&password=${randomPassword}&email=${randomEmail}`);
    const response = await createRequest.json();
    process.env.randomEmail = randomEmail;
    process.env.randomUsername = randomUsername;
    process.env.randomPassword = randomPassword;

    expect(createRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.username).toBe(randomUsername);
    expect(response.content.email).toBe(randomEmail);

});


