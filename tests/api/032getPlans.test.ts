import { test, expect } from '@playwright/test';
import { randomPlan, plans, propertiesToCheck } from '../../ts/data';
require('dotenv').config();

test(`Get Plans is Success`, async ({ request }) => {
    const baseURL = process.env.BASEURL;
    const plan = randomPlan;

    const getPlansRequest = await request.get(`${baseURL}/system/plan/${plan}`);
    const response = await getPlansRequest.json();

    expect(getPlansRequest.status()).toBe(200);
    expect(response.message).toBe("success");
    expect(response.content.name).toBe(plan);
    expect(response.content.currency).toBe(plans[plan].currency);

    propertiesToCheck.forEach(prop => {
        expect(response.content.limits[prop]).toBe(plans[plan][prop]);
    });

})