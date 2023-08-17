import { test, expect } from '@playwright/test';
import { data } from '../../ts/data';
test(`Create Form is Success`, async ({ request }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const formProperties = data.formProperties;
    const username = data.username;
    process.env.formTitle = formProperties.title;
    const formdata = new FormData();
    formdata.append("questions[0][type]", "control_textbox");
    formdata.append("questions[0][text]", "textbox");
    formdata.append("questions[1][type]", "control_head");
    formdata.append("questions[1][text]", "Form Title");

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "JOTFORM_SESSION=c05a5fb9-d1f3-90c9-df95-6bf946ac; _gj=79dda518dfe6516f3a925c51fa168a84c77bacff; guest=guest_e78104f00932113c; showToolbar=true");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
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

