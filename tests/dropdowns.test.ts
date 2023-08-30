import { expect, test } from "@playwright/test";

test("Handling Dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    await page.selectOption("#select-demo", {
        //label: "Tuesday"
        //value: "Friday"
        index: 5
    });
    await page.waitForTimeout(3000);

})

test("Handling Multiselect", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    await page.selectOption("#multi-select", [{
        //label: "Tuesday"
        //value: "Friday"
        index: 5
    }, {
        label: "Washington"
    }, {
        value: "California"
    }]);
    await page.waitForTimeout(3000);

})

test.only("Bootstrap Dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    await selectCountryDropdown("India");
    await selectCountryDropdown("Hong Kong");
    await selectCountryDropdown("South Africa");

    //await page.waitForTimeout(3000);

    async function selectCountryDropdown(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click();
    }
})
