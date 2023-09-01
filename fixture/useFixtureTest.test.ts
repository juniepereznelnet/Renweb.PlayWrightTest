import { it } from "./fixtureTest.test" //test

it("Fixture Demo", async ({ age, firstname }) => {
    console.log(age + 1, firstname.toUpperCase());


})