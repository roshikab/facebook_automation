Given('Visit Facebook URL', () => {
    cy.visit('/').wait(100)
})

And('Reload the current page', () => {
    cy.reload();
})

And('Url should contain {string}', (url) => {
    cy.url().should('include', url)
})