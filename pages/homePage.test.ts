import { Page } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) { }

    async clickOnSpecialHotMenu() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            await this.page.click("(//span[contains(text(), 'Special')]/../..)[2]")
        ])
    }


    //test("Handling alerts", async ({ page }) => {
    //    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?//route=account/register");
    //)
}