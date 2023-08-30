import { expect, test } from "@playwright/test";

test("Handling alerts", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const alertTextValue = alert.message();
        console.log(alertTextValue);
        await alert.accept();
    })
    await page.locator("button:has-text('Click Me')").nth(0).click();

})

test("Handling alerts1", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const alertTextValue = alert.message();
        console.log(alertTextValue);
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!");

})

test("Handling alerts1", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const alertTextValue = alert.message();
        console.log(alertTextValue);
        await alert.accept("Junie");
    })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("Junie");

})