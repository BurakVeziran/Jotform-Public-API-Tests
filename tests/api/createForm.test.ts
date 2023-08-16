import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`Create Form is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const formProperties = data.formProperties;
    const createFormRequest = await request.post(`${baseURL}/form?apiKey=${APIKey}
    &properties[title]=${formProperties.title}`);
    const response = await createFormRequest.json();
    process.env.formTitle = formProperties.title;
    process.env.formID = response.content.id;

    expect(createFormRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.title).toBe(formProperties.title);
});

