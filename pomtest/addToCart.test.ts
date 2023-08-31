import { expect, test } from "@playwright/test"
import RegisterPage from "../pages/registrationPage.test"
import LoginPage from "../pages/loginPage.test"
import HomePage from "../pages/homePage.test"
import SpecialHotPage from "../pages/specialHotPage.test"

//test.beforeEach(async ({ page }, testInfo) => {
// Extend timeout for all tests running this hook by 30 seconds.
//    testInfo.setTimeout(testInfo.timeout + 120000);
//});

const emailValue = "junie.perez02@nelnetphilippines.com";
const passwordValue = "Passwords1."

test.describe("Page object test demo", async () => {
    test("Register test_01", async ({ page, baseURL }) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstname("Junie");
        await register.enterLastName("Perez");
        await register.enterEmail(emailValue);
        await register.enterTelephone("09273850777");
        await register.enterPassword(passwordValue);
        await register.enterConfirmPassword(passwordValue);
        expect(register.isSubscribedChecked()).toBeChecked();
        await register.clickTermAndCondition();
        await register.clickContinueToRegister();
    })

    test("Login test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(emailValue);
        await login.enterPassword(passwordValue);
        await login.clickLoginBtn();

        expect(await page.title()).toBe("My Account");

    })


    test("Add to cart test_03", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);

        await page.goto(`${baseURL}route=account/login`);
        await login.proceedLogin(emailValue, passwordValue);

        await homePage.clickOnSpecialHotMenu();
        expect(await page.title()).toBe("Special Offers");

        //Since there are no more items in the Special Products, the code was discontinued
        //await special.addFirstProductToTheCard();
        //const isCartVisible = await special.isToastVisible();
        //expect(isCartVisible).toBeVisible();


    })
})