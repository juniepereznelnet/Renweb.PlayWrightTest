import { Page, expect, test } from "@playwright/test";

export default class SpecialHotPage {

    constructor(public page: Page) {

    }

    async clickOnSpecialHotMenu() {
        await this.page.click("'Special Hot'");
    }

    async addFirstProductToTheCard() {
        await this.page.hover("//div[@class='image']/a", {
            strict: false
        });
        await this.page.locator("(//button[@title='Add to Card'])").nth(0).click();

    }

    async isToastVisible() {
        //await this.page.waitFor
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({state:"visible"})
        return toast;
    }

}