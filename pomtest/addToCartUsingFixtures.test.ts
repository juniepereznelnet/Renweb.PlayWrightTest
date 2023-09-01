import { expect, test } from "../base/pomFixture.test"
import * as data from "../test-data/addtoCart-test-data.json"
//import RegisterPage from "../pages/registrationPage.test"
//import LoginPage from "../pages/loginPage.test"
//import HomePage from "../pages/homePage.test"
//import SpecialHotPage from "../pages/specialHotPage.test"

//test.beforeEach(async ({ page }, testInfo) => {
// Extend timeout for all tests running this hook by 30 seconds.
//    testInfo.setTimeout(testInfo.timeout + 120000);
//});

const firstNameValue = data.firstname;
const lastNamevalue = data.lastName;
const emailValue = data.email; // "junie.perez02@nelnetphilippines.com";
const passwordValue = data.password; // "Passwords1."
const phoneNumberValue = data.phone_number;

//test.use({
//    browserName: "firefox"
//});
test.describe("Page object test demo", async () => {
    test("Register test_01", async ({ page, baseURL, registerPage }) => {
        //const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstname(firstNameValue);
        await registerPage.enterLastName(lastNamevalue);
        await registerPage.enterEmail(emailValue);
        await registerPage.enterTelephone(phoneNumberValue);
        await registerPage.enterPassword(passwordValue);
        await registerPage.enterConfirmPassword(passwordValue);
        expect(registerPage.isSubscribedChecked()).toBeChecked();
        await registerPage.clickTermAndCondition();
        await registerPage.clickContinueToRegister();
    })

    test("Login test_02", async ({ page, baseURL, loginPage }) => {
        //const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmail(emailValue);
        await loginPage.enterPassword(passwordValue);
        await loginPage.clickLoginBtn();

        expect(await page.title()).toBe("My Account");

    })


    test("Add to cart test_03", async ({ page, baseURL, loginPage, homePage, specialHotPage }) => {
        //const login = new LoginPage(page);
        //const homePage = new HomePage(page);
        //const special = new SpecialHotPage(page);

        await page.goto(`${baseURL}route=account/login`);
        await loginPage.proceedLogin(emailValue, passwordValue);

        await homePage.clickOnSpecialHotMenu();
        expect(await page.title()).toBe("Special Offers");

        //Since there are no more items in the Special Products, the code was discontinued
        //await special.addFirstProductToTheCard();
        //const isCartVisible = await special.isToastVisible();
        //expect(isCartVisible).toBeVisible();


    })
})