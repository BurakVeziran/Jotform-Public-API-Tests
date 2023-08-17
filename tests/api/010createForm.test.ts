import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';

test.only(`Create Form is Success`, async ({ page, request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const formProperties = data.formProperties;
    const username = data.username;
    process.env.formTitle = formProperties.title;

    const formdata = new URLSearchParams();
    formdata.append("questions[0][type]", "control_textbox");
    formdata.append("questions[0][text]", "textbox");
    formdata.append("questions[1][type]", "control_head");
    formdata.append("questions[1][text]", "Form Title");

    const requestOptions = {
        method: 'POST',
        body: formdata.toString(),
    }

    const createFormRequest = await fetch(`${baseURL}/form?apiKey=${APIKey}&properties[title]=${formProperties.title}`, requestOptions);
    const response = await createFormRequest.json();
    process.env.questionZeroText = "textbox";
    process.env.questionZeroType = "control_textbox"
    process.env.questionOneText = "Form Title";
    process.env.questionOneType = "control_head";
    process.env.formID = response.content.id;
    process.env.message = response.message;
    process.env.contentTitle = response.content.title;

    expect(process.env.message).toBe("success");
    expect(process.env.contentTitle).toBe(formProperties.title);
    expect(response.content.username).toBe(username);
})
