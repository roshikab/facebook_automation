class formPage {

    //To enter Input Field Data
    enterInputFieldData(selector, value) {
        cy.get(selector)
            .clear()
            .type(value)
            .should("have.value", value)
            .wait(500)
    }


    //To InputFieldAvailability
    verifyInputFieldAvailability(selector) {
        cy.get(selector)
            .should('be.visible')
            .wait(500)
    }

    //To field availability
    verifyFieldAvailability(selector) {
        cy.get(selector)
            .should('exist')
            .wait(500)
    }

    // To verify text message
    verifyTextMessage(selector, message) {
        cy.get(selector).should('have.text', message)
    }


}

export default formPage