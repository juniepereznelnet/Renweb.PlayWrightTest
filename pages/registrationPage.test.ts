import { Page, expect, test } from "@playwright/test";

export default class RegisterPage {

    constructor(public page: Page) {

    }

    async enterFirstname(firstName: string) {
        await this.page.locator("input-firstname").type(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.locator("input-lastname").type(lastName);
    }

    async enterEmail(emailValue: string) {
        await this.page.locator("input-email").type(emailValue);
    }

    async enterTelephone(telephoneValue: string) {
        await this.page.locator("input-telephone").type(telephoneValue);
    }

    async enterPassword(passwordValue: string) {
        await this.page.locator("input-password").type(passwordValue);
    }

    async enterConfirmPassword(confirmPasswordValue: string) {
        await this.page.locator("input-confirm").type(confirmPasswordValue);
    }

    async isSubscribedChecked() {
        await this.page.locator("#input-newsletter-no").isChecked();
    }

    async clickTermAndCondition() {
        await this.page.click("input[name=agree]");
    }


    test("Handling alerts", async ({ page }) => {
        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");



    })
}