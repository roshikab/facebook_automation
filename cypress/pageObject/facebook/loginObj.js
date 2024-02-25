import formPage from "../../page/formPage";
import buttonPage from "../../page/buttonPage";
import { facebookFilePath } from "../../helpers/filepath";

const formP = new formPage();
const buttonP = new buttonPage();
const loginPageJSON = facebookFilePath().loginPage

export function verifyInputField() {
    cy.checkAndReadFile(loginPageJSON).then((loginPageJSONDatas) => {
        formP.verifyInputFieldAvailability(loginPageJSONDatas.selector.email)
        formP.verifyInputFieldAvailability(loginPageJSONDatas.selector.password)
    })
}

export function verifyButton() {
    cy.checkAndReadFile(loginPageJSON).then((loginPageJSONDatas) => {
        buttonP.verifyButtonThatContains(loginPageJSONDatas.selector.loginButton, 'Log In')
    })
}

export function enterCredentials(email, password) {
    cy.checkAndReadFile(loginPageJSON).then((loginPageJSONDatas) => {
        formP.enterInputFieldData(loginPageJSONDatas.selector.email, email)
        formP.enterInputFieldData(loginPageJSONDatas.selector.password, password)
    })
}

export function clickOnLogInButton() {
    cy.checkAndReadFile(loginPageJSON).then((loginPageJSONDatas) => {
        buttonP.clickButtonThatContains(loginPageJSONDatas.selector.loginButton, 'Log In')
    })
}




