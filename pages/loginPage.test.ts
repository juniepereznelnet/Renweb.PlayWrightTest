import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) { }

    async enterEmail(emailValue: string) {
        await this.page.locator("#input-email").type(emailValue);
    }

    async enterPassword(passwordValue: string) {
        await this.page.locator("#input-password").type(passwordValue);
    }

    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//input[@class='btn btn-primary']")
        ])
    }

    async proceedLogin(emailValue: string, passwordValue: string) {
        await this.enterEmail(emailValue);
        await this.enterPassword(passwordValue);
        await this.clickLoginBtn();
    }


    //test("Handling alerts", async ({ page }) => {
    //    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?//route=account/register");
    //)
}