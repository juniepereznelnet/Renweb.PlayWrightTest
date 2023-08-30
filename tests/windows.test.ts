import { expect, Page, test } from "@playwright/test";

test("Interact with windows", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    console.log(newWindow.url());
    //await page.waitForTimeout(1500);

})

test("Interact with windows1", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ]);
    await page.waitForLoadState();

    const pages = multiPage.context().pages();

    console.log('No. of tabs:' + pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    });

    //Used to find your target window
    let facebookPage: Page;
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
    }
    const text = await facebookPage.textContent("(//span[text()='Connect with LambdaTest on Facebook'])[1]");
    console.log(text);
})