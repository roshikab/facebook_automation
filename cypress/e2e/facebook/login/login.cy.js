import * as loginObj from "../../../pageObject/facebook/loginObj";
import formPage from "../../../page/formPage";
import buttonPage from "../../../page/buttonPage";

const formP = new formPage();
const buttonP = new buttonPage();
const validCredentials = {
    email_or_phoneNumber: Cypress.env('EMAIL_OR_PHONENUMBER'),
    password: Cypress.env('PASSWORD'),
}

Given('Visit Facebook URL', () => {
    cy.visit('/').wait(100)
})

And('Verify Input Field is displayed', () => {
    loginObj.verifyInputField()
})

And('Verify Login Button is displayed', () => {
    loginObj.verifyButton()
})

And('Enter valid credentials', () => {
    loginObj.enterCredentials(validCredentials.email_or_phoneNumber, validCredentials.password)
})

And('Enter valid email or phone number and invalid password', () => {
    loginObj.enterCredentials(validCredentials.email_or_phoneNumber, "invalid_password")
})

And('Click on Log In button', () => {
    loginObj.clickOnLogInButton()
})

And('Enter invalid credentials', () => {
    loginObj.enterCredentials("invalid_email@example.com", "invalid_password")
})

And('Check if the error message in {string} is {string}', (selector, message) => {
    formP.verifyTextMessage(selector, message);
})

And('Verify Home button', () => {
    buttonP.verifyButton("a[aria-label='Home']")
})

And("Url should contain login or recover", () => {
    cy.url().should("match", /login|recover/);
});



