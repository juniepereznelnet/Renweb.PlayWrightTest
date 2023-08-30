import { expect, test } from "@playwright/test";

test("Handling Modals", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    await page.click("(//button[text()='Launch Modal'])[1]");

})
