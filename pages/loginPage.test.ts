import { Page, expect, test } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) {

    }

    async enterEmail(emailValue: string) {
        await this.page.locator("input[name='email']").type(emailValue);
    }
    async enterPassword(passwordValue: string) {
        await this.page.locator("input[name='password']").type(passwordValue);
    }
 
    async clickLoginBtn() {
        await this.page.click("input[value='Login']");
    }    


    //test("Handling alerts", async ({ page }) => {
    //    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?//route=account/register");
    //)
}