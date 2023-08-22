import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Get Folder is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const randomFolderID = process.env.randomFolderID;

    const gerFolderRequest = await request.get(`${baseURL}/folder/${randomFolderID}?apiKey=${APIKey}`);
    const response = await gerFolderRequest.json();

    expect(gerFolderRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.name).toBe(process.env.randomFolderName);
    expect(response.content.id).toBe(process.env.randomFolderID);
    expect(response.content.path).toBe(process.env.randomFolderPath);
    expect(response.content.parent).toBe(process.env.randomFolderParent);
    expect(response.content.color).toBe(process.env.randomFolderColor);
})
