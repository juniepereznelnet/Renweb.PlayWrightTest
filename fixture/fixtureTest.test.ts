import { test as myTest } from "@playwright/test"

type person = {
    age: number,
    firstname: string
}

const myFixtureTest = myTest.extend<person>({
    age: 29,
    firstname: "Junie"
})

export const it = myFixtureTest; //test