import { test, expect } from '@playwright/test';
import { data, formFields } from '../../ts/data';
import fetch from 'node-fetch';
require('dotenv').config();

test(`Create Form is Success`, async ({ }) => {
    const baseURL = process.env.BASEURL;
    const APIKey = process.env.APIKEY;
    const formProperties = data.formProperties;
    const username = process.env.USERNAME;
    process.env.formTitle = formProperties.title;

    const formdata = new URLSearchParams();
    formFields.forEach((field, index) => {
        formdata.append(`questions[${index}][type]`, field.type);
        formdata.append(`questions[${index}][text]`, field.text);
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formdata.toString(),
    }

    const createFormRequest = await fetch(`${baseURL}/form?apiKey=${APIKey}&properties[title]=${formProperties.title}`, requestOptions);
    const response = await createFormRequest.json();
    process.env.formID = response.content.id;
    process.env.message = response.message;
    process.env.contentTitle = response.content.title;

    expect(process.env.message).toBe("success");
    expect(process.env.contentTitle).toBe(formProperties.title);
    expect(response.content.username).toBe(username);
})
