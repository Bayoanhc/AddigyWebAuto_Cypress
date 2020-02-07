// This test is for testing the Log In functionality

var email = "negata1898@jmail7.com";
var password = "1234567890";

describe('Log In', function() {
    it('Visits Addigy LogIn page', function() {
        
        cy.visit('https://dev.addigy.com/login')

        cy.get('input[id="username"]').type(email)
        cy.get('input[id="password"]').type(password)
    })
  })