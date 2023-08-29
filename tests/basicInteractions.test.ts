import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");

    console.log('Before entering data: ' + await messageInput.inputValue());
    await messageInput.type("Hi Junie");
    console.log('After entering data: ' + await messageInput.inputValue());
})

test("Sum", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1Input = page.locator("#sum1");
    const sum2Input = page.locator("#sum2");


    const getValuesBtn = page.getByRole('button', { name: 'Get Sum' }).click();

    let num1 = 100;
    let num2 = 200;

    await sum1Input.fill("" + num1);
    await sum2Input.type("" + num2);

    await page.getByRole('button', { name: 'Get Sum' }).click();

    const result = page.locator("#addmessage");
    console.log(await result.textContent());

    let expectedResultValue = num1 + num2;
    expect(result).toHaveText("" + expectedResultValue);
})

test("Checkbox", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

    const checkboxInput = page.locator("id=isAgeSelected");
    expect(checkboxInput).not.toBeChecked();
    await checkboxInput.check();
    expect(checkboxInput).toBeChecked();
})