import { expect, test } from "@playwright/test";

test("Interact with frames1", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames:" + allframes.length);

    const nameInputValue = page.frame("firstFr");

    //if (myFrame !=null) {
    //await myFrame.fill("", "");
    //}

    await nameInputValue?.fill("input[name='fname']", "Junie");
    await nameInputValue?.fill("input[name='lname']", "Perez");

    expect(await nameInputValue?.locator("p.has-text-info").textContent()).toContain("You have entered");

    await page.waitForTimeout(1500);

})

test("Interact with frames2", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames:" + allframes.length);

    const nameInputValue = page.frameLocator("#firstFr");
    await nameInputValue.locator("input[name='fname']").fill("Junie");
    await nameInputValue.locator("input[name='lname']").fill("Perez");

    await page.waitForTimeout(1500);

})

test("Interact with frames3", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames:" + allframes.length);

    const nameInputValue = page.frameLocator("#firstFr");
    await nameInputValue.locator("input[name='fname']").fill("Junie");
    await nameInputValue.locator("input[name='lname']").fill("Perez");

    const innerFrame = nameInputValue.frameLocator("iframe[src='innerFrame']");
    innerFrame.locator("input[name='email']").fill("junie.perez@nelnetphilippines.com")

    await page.waitForTimeout(1500);

})