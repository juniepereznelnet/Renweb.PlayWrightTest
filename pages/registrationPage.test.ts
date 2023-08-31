import { Page } from "@playwright/test";

export default class RegistrationPage {

    constructor(public page: Page) { }
    //When element locator does not work or pauses, try changing or adding # inside the locator

    async enterFirstname(firstName: string) {
        await this.page.locator("#input-firstname").fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.locator("#input-lastname").fill(lastName);
    }

    async enterEmail(emailValue: string) {
        await this.page.locator("#input-email").fill(emailValue);
    }

    async enterTelephone(telephoneValue: string) {
        await this.page.locator("#input-telephone").fill(telephoneValue);
    }

    async enterPassword(passwordValue: string) {
        await this.page.locator("#input-password").fill(passwordValue);
    }

    async enterConfirmPassword(confirmPasswordValue: string) {
        await this.page.locator("#input-confirm").fill(confirmPasswordValue);
    }

    isSubscribedChecked() {
        return this.page.locator("#input-newsletter-no");
    }

    async clickTermAndCondition() {
        await this.page.click("//label[@for='input-agree']");
    }

    async clickContinueToRegister() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("input[value='Continue']")
        ])
    }

    //test("Handling alerts", async ({ page }) => {
    //    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?//route=account/register");
    //)
}