import { Page, expect, test } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) {

    }

    async clickOnSpecialHotMenu() {
        await this.page.click("'Special Hot'");
    }


    //test("Handling alerts", async ({ page }) => {
    //    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?//route=account/register");
    //)
}