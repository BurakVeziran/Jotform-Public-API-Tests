import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`Create Report is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const formID = process.env.formID;
    const reportProperties = data.reportProperties;
    const createReportRequest = await request.post
    (`${baseURL}/form/${formID}/reports?apiKey=${APIKey}&list_type=${reportProperties.listType}&title=${reportProperties.title}&fields=${reportProperties.fields}`);
    const response = await createReportRequest.json();
    process.env.reportID = response.content.id;

    expect(createReportRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.form_id).toBe(formID);
    expect(response.content.title).toBe(reportProperties.title);
    expect(response.content.list_type).toBe(reportProperties.listType);
    expect(response.content.fields).toBe(reportProperties.fields);
});

