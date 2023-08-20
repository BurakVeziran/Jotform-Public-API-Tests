import { test, expect } from '@playwright/test';
import {data, } from '../../ts/data';
import fetch from 'node-fetch';

test(`Add Question is Success`, async ({ }) => {
    const baseURL = data.baseURL;
    const APIKey = data.APIKey;
    const formID = data.staticFormID;

    const formdata = new URLSearchParams();
    formdata.append("question[type]", "control_textarea");
    formdata.append("question[text]", "Name");
    formdata.append("question[order]", "3");

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formdata.toString(),
    }

    const addQuestionRequest = await fetch(`${baseURL}/form/${formID}/questions?apiKey=${APIKey}`, requestOptions);
    const response = await addQuestionRequest.json();

    expect(response.responseCode).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.type).toBe('control_textarea');
    expect(response.content.text).toBe('Name');
    expect(response.content.order).toBe('3');
})
