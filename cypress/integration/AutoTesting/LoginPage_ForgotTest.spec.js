// This test is for testing the Forgot Password functionality

var email = "negata1898@jmail7.com";

describe('In the Addigy LogIn page', function() {
    it('LogIn Test', function() {

        cy.visit('https://dev.addigy.com/login')

        cy.get('#forgotPasswordButton').click()
        cy.get('#resetPasswordEmail').type(email, { delay: 100 })
        cy.get('#resetPasswordEmail').should('have.value', email)
        cy.get('#resetPasswordForm > div.d-flex.login-tfa-buttons > button.btn.btn-link.js-back-to-login').click()

        cy.get('#forgotPasswordButton').click()
        cy.get('#resetPasswordEmail').clear().type(email, { delay: 100 })
        cy.get('#resetPasswordEmail').should('have.value', email)
        cy.get('#addigyResetPasswordSubmitButton').click()
    })
})