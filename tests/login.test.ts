import test, { Browser, BrowserContext, expect, chromium, Page } from "@playwright/test";


test("Login RenWeb", async () => {

    //const browser = await chromium.launch({
    //    headless: false
    //});
    //const context = await browser.newContext();
    //const page = await context.newPage();

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://sp.renweb.com/session/login/");
    await page.locator('#mat-input-0').type("110467@nelnet.net");
    await page.locator('#mat-input-1').type("Q623pass.");

    await page.click('span.mat-button-wrapper');



    await expect(page).toHaveURL("https://sp.renweb.com/impersonate");

    await page.close();
    await context.close();
    await browser.close();
})

//Last part, lambda test remote testing needs an account as well as access keys