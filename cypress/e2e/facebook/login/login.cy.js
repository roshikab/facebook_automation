import * as loginObj from "../../../pageObject/facebook/loginObj";
import { faker } from '@faker-js/faker';
import formPage from "../../../page/formPage";

const formP = new formPage();

Given('Visit Facebook URL', () => {
    cy.visit('https://www.facebook.com/').wait(100)
})

And('Enter valid credentials', () => {
    loginObj.enterCredentials(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
})

And('Enter valid email and invalid password', () => {
    loginObj.enterCredentials(Cypress.env('EMAIL'), faker.internet.password())
})

And('Click on Log In button', () => {
    loginObj.clickOnLogInButton()
})

And('Enter invalid credentials', () => {
    loginObj.enterCredentials(faker.internet.email(), faker.internet.password())
})

And('Check if the error message in {string} is {string}', (selector, message) => {
    formP.verifyTextMessage(selector, message);
})

And('Wait for {int} ms', (time) => {
    cy.wait(time);
})


