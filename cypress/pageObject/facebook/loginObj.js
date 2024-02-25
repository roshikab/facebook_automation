import { faker } from '@faker-js/faker';
import formPage from "../../page/formPage";
import buttonPage from "../../page/buttonPage";
import { facebookFilePath } from "../../helpers/filepath";

const formP = new formPage();
const buttonP = new buttonPage();
const loginPageJSON = facebookFilePath().loginPage

export function enterCredentials(email,password) {
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




