import { expect, Page, test } from "@playwright/test";
import moment from "moment";

test("Calendar demo using fill function", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1994-06-01";

    await page.fill("id=birthday", date);

    await page.waitForTimeout(1500);

    //try in browser console
    //document.getElementById("birthday").value
    //you will see the actual value is 2022-09-02 instead of 06-01-1994 format
})

test("Calendar demo using moment", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "";

    await page.click("//input[@placeholder='Start date']")

    await selectDate(12, "December 2017");

    await page.reload();

    await selectDate(5, "December 2023");

    await page.reload();

    await selectDate(30, "August 2023");

    await page.waitForTimeout(1500);


    async function selectDate(date: number, monthYear: string) {
        await page.click("//input[@placeholder='Start date']")
        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prevBtn = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const nextBtn = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

        const targetPrevMonthDay = page.locator(`//td[@class='day'][text()='${date}']`);

        const thisMonth = moment(monthYear, "MMMM YYYY").isBefore();
        console.log("this month? " + thisMonth);

        while (await mmYY.textContent() != monthYear) {
            if (thisMonth) {
                await prevBtn.click();
            } else {
                await nextBtn.click();
            }
        }

        await targetPrevMonthDay.click();
    }
    //try in browser console
    //document.getElementById("birthday").value
    //you will see the actual value is 2022-09-02
})