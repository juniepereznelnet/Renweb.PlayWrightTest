import { test as baseTest } from "@playwright/test"
import RegisterPage from "../pages/registrationPage.test"
import LoginPage from "../pages/loginPage.test"
import HomePage from "../pages/homePage.test"
import SpecialHotPage from "../pages/specialHotPage.test"

type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    specialHotPage: SpecialHotPage
}

const testPages = baseTest.extend<pages>({

    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    specialHotPage: async ({ page }, use) => {
        await use(new SpecialHotPage(page))
    }

})

export const test = testPages;
export const expect = testPages.expect;