// This test is for testing the Log In functionality

var url = "https://dev.addigy.com/signup"

//var email = "negata1898@jmail7.com";
var firstname = "first"
var lastname = "last"
var email = "testing@temp.com"
var phone = "3055550123"
var company = "home"
var countryUS = "United States"
var state = "Florida"
var stateAbbr = "FL"

var countryCAN = "Canada"
var countryOther = "Canada"

describe('In the Addigy Signup page', function() {
    it('All components are visible', function() {

        // Open Webpage
        cy.visit(url)

        /* Verify
        *
        firstname
        lastname
        email
        phone number
        company name
        country
        state
        google-link
        finish-regis
        login
        *        
        */
        cy.get('#signup_firstname').should('be.visible')
        cy.get('#signup_lastname').should('be.visible')
        cy.get('#signup_email').should('be.visible')
        cy.get('#signup_phone').should('be.visible')
        cy.get('#signup_company').should('be.visible')
        cy.get('#signup_country').select(countryUS, { delay: 100 }).should('be.visible')
        cy.get('#signup_state').should('be.visible')
        cy.get(" #googleLink > span").should('be.visible')
        cy.get("#page-container > div > div:nth-child(2) > div > form > p:nth-child(9) > small > a").should('be.visible')
        cy.get("#page-container > div > div:nth-child(2) > div > form > p:nth-child(10) > small > a").should('be.visible')
    })


    it('Signup US Citizen', function() {

        // Open Webpage
        cy.visit(url)

        /* Write
        *
        *firstname
        *lastname
        *email
        *phone number
        *company name
        *country
        *state
        *        
        */
        cy.get('#signup_firstname').type(firstname, { delay: 100 }).should('have.value', firstname)
        cy.get('#signup_lastname').type(lastname, { delay: 100 }).should('have.value', lastname)
        cy.get('#signup_email').type(email, { delay: 100 }).should('have.value', email)
        cy.get('#signup_phone').type(phone, { delay: 100 }).should('have.value', phone)
        cy.get('#signup_company').type(company, { delay: 100 }).should('have.value', company)
        cy.get('#signup_country').select(countryUS, { delay: 100 }).should('have.value', countryUS)
        cy.get('#signup_state').select(state, { delay: 100 }).should('have.value', stateAbbr)
    })

    it('Signup Canadian', function() {

        // Open Webpage
        cy.visit(url)

        /* Write
        *
        *firstname
        *lastname
        *email
        *phone number
        *company name
        *country
        *        
        */
       cy.get('#signup_firstname').type(firstname, { delay: 100 }).should('have.value', firstname)
       cy.get('#signup_lastname').type(lastname, { delay: 100 }).should('have.value', lastname)
       cy.get('#signup_email').type(email, { delay: 100 }).should('have.value', email)
       cy.get('#signup_phone').type(phone, { delay: 100 }).should('have.value', phone)
       cy.get('#signup_company').type(company, { delay: 100 }).should('have.value', company)
       cy.get('#signup_country').select(countryUS, { delay: 100 }).should('have.value', countryUS)
       cy.get('#signup_state').select(state, { delay: 100 }).should('have.value', stateAbbr)
    })

    it('Signup Other', function() {

        // Open Webpage
        cy.visit(url)

        /* Write
        *
        *firstname
        *lastname
        *email
        *phone number
        *company name
        *country
        *        
        */
       cy.get('#signup_firstname').type(firstname, { delay: 100 }).should('have.value', firstname)
       cy.get('#signup_lastname').type(lastname, { delay: 100 }).should('have.value', lastname)
       cy.get('#signup_email').type(email, { delay: 100 }).should('have.value', email)
       cy.get('#signup_phone').type(phone, { delay: 100 }).should('have.value', phone)
       cy.get('#signup_company').type(company, { delay: 100 }).should('have.value', company)
       cy.get('#signup_country').select(countryUS, { delay: 100 }).should('have.value', countryOther)
       cy.get('#signup_state').select(state, { delay: 100 }).should('have.value', stateAbbr)
    })

    it('Clicking on Finish Registration link', function() {

        // Open Webpage
        cy.visit(url)

        cy.get("#page-container > div > div:nth-child(2) > div > form > p:nth-child(9) > small > a")
        .contains("Finish Registration").click()
    })

    it('Clicking on LogIn link', function() {

        // Open Webpage
        cy.visit(url)

        cy.get("#page-container > div > div:nth-child(2) > div > form > p:nth-child(10) > small > a")
        .contains("Log in with your account").click()
    })

})

