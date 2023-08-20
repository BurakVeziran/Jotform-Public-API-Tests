import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
require('dotenv').config();

test(`Get Report is Success`, async ({ request }) => {
    const baseURL = process.env.baseURL;
    const APIKey = process.env.APIKey;
    const formID = process.env.formID;
    const reportID = process.env.reportID;
    const reportProperties = data.reportProperties;

    const getReportRequest = await request.get
    (`${baseURL}/user/reports?apiKey=${APIKey}`);
    const response = await getReportRequest.json();

    expect(getReportRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content[0].id).toBe(reportID);
    expect(response.content[0].form_id).toBe(formID);
    expect(response.content[0].title).toBe(reportProperties.title);
    expect(response.content[0].list_type).toBe(reportProperties.listType);
    expect(response.content[0].fields).toBe(reportProperties.fields);
});

