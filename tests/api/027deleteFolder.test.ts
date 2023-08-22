import { test, expect } from '@playwright/test';
require('dotenv').config();

test(`Delete Folder is Success`, async ({ request }) => {
    test.slow();
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const randomFolderID = process.env.randomFolderID;

    const deleteFolderRequest = await request.delete(`${baseURL}/folder/${randomFolderID}?apiKey=${APIKey}`);
    const response = await deleteFolderRequest.json();

    expect(deleteFolderRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content).toBe("Folder deleted successfully");
})

