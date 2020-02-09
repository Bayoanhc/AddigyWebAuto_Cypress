// This test is for testing the Log In functionality

var email = "negata1898@jmail7.com";
var password = "1234567890";

describe('In the Addigy LogIn page', function() {
    it('LogIn Test', function() {

        cy.visit('https://dev.addigy.com/login')

        cy.get('#username').type(email)
        cy.get('#password').type(password)
        cy.get('#addigySigninButton').click()

        //const srcLink = cy.get('#setup-frame').find('src')
        //console.log(srcLink)

        cy.get('#setup-frame').then(($iframe) => {

            $iframe.contents()
            .find('body > section > div > section > div > div > button')
            //.contains('Next')
            .click()
        })
    })
})