import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Get Folder is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;

    const getFolderRequest = await request.get(`${baseURL}/user/folders?apiKey=${APIKey}`);
    const response = await getFolderRequest.json();
    const responseFolderId = (response.content.subfolders.length - 1);

    expect(getFolderRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.subfolders[responseFolderId].name).toBe(process.env.randomFolderName);
    expect(response.content.subfolders[responseFolderId].id).toBe(process.env.randomFolderID);
    expect(response.content.subfolders[responseFolderId].path).toBe(process.env.randomFolderPath);
    expect(response.content.subfolders[responseFolderId].parent).toBe(process.env.randomFolderParent);
    expect(response.content.subfolders[responseFolderId].color).toBe(process.env.randomFolderColor);
})
