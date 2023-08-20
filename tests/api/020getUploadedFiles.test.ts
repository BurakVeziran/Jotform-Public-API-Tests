import { test, expect } from '@playwright/test';
import { uploadedFileInfo } from '../../ts/data';
require('dotenv').config();

test(`Update Form Properties is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const formID = process.env.STATICFORMID;
    const username = process.env.USERNAME;
    const getUploadRequest = await request.get(`${baseURL}/form/${formID}/files?apiKey=${APIKey}`);
    const response = await getUploadRequest.json();

    expect(getUploadRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content[0].form_id).toBe(formID);
    expect(response.content[0].name).toBe(uploadedFileInfo[0].name);
    expect(response.content[0].type).toBe(uploadedFileInfo[0].type);
    expect(response.content[0].size).toBe(uploadedFileInfo[0].size);
    expect(response.content[0].username).toBe(username);
    expect(response.content[0].submission_id).toBe(uploadedFileInfo[0].submission_id);
    expect(response.content[0].url).toBe("http://www.jotform.com/uploads/" + username + "/" + formID + "/" +
        uploadedFileInfo[0].submission_id + "/" + uploadedFileInfo[0].name);
})
