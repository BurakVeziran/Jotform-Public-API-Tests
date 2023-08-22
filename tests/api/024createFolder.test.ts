import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
require('dotenv').config();

test(`Create Folder is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const randomFolderName = data.randomFolderName;

    const createFolderRequest = await request.post(`${baseURL}/folder?apiKey=${APIKey}&name=${randomFolderName}`);
    const response = await createFolderRequest.json();
    process.env.randomFolderName = randomFolderName;

    expect(createFolderRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.name).toBe(randomFolderName);
    process.env.randomFolderID = response.content.id;
    process.env.randomFolderPath = response.content.path;
    process.env.randomFolderParent = response.content.parent;
    process.env.randomFolderColor = response.content.color;
})
