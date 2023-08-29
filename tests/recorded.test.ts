import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://sp.renweb.com/session/login');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('110467@nelnet.net');
    await page.getByLabel('Username').press('Tab');
    await page.getByLabel('Password').fill('Q623pass.');
    await page.getByLabel('Password').press('Enter');
    await page.getByLabel('District Code').click();
    await page.getByRole('combobox', { name: 'District Code' }).click();
    await page.locator('#mat-input-3').type('TST-LMS', { delay: 900 });
    await page.getByRole('option', { name: 'TST-LMS' }).click();
    await page.getByLabel('School').click({ delay: 900 });
    await page.getByRole('option', { name: 'Automation-TST' }).click({ delay: 4000 });
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Admin' }).click();
    const page1 = await page1Promise;
    /*await page1.goto('https://renweb1.renweb.com/renweb1/#/?client=support&tabId=7fb60468-e1e3-49b7-8ff2-480438b8f4bf');
    await page1.goto('https://renweb1.renweb.com/renweb1/#/?client=support');
    await page1.goto('https://renweb1.renweb.com/renweb1/#/?client=support&tabId=7fb60468-e1e3-49b7-8ff2-480438b8f4bf');
    await page1.goto('https://renweb1.renweb.com/renweb1/#/Home');
    await page1.getByLabel('Main Nav').click();
    await page1.locator('#side-nav-open-Report-Manager').click();*/
});