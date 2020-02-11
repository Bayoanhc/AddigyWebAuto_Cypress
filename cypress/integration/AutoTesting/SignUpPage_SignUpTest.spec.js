// This test is for testing the Log In functionality

// url Addigy
const url = "https://dev.addigy.com/signup"

// url Email
const emailGeneration = "https://temp-mail.org/en/"

// Input for country = united states
const firstnameUS = "firstUS"
const lastnameUS = "lastUS"
var emailUS = "emailUS@us.com"
const phoneUS = "1234567890"
const companyUS = "companyUS"
const countryUS = "United States"
const state = "Florida"
const stateAbbr = "FL"

// Input for country = canada
const firstnameCAN = "firstCAN"
const lastnameCAN = "lastCAN"
var emailCAN = "emailCAN@can.com"
const phoneCAN = "1234567890"
const companyCAN = "companyCAN"
const countryCAN = "Canada"

// Input for country = other
const firstnameOTHER = "firstOTHER"
const lastnameOTHER = "lastOTHER"
var emailOTHER = "emailOTH@other.com"
const phoneOTHER = "1234567890"
const companyOTHER = "companyOTHER"
const countryOTHER = "Other"

describe('Addigy Sign Up Page', function() {

    it('Verifying visibility of components', function() {
        // Open Webpage
        cy.visit(url)
        cy.wait(3000)

        /* Verifying
        *
        *firstname
        *lastname
        *email
        *phone number
        *company name
        *country
        *state
        *signup
        *google-link
        *finish-regis
        *login
        *        
        */
        cy.get('#signup_firstname').should('be.visible', { delay: 500 })
        cy.get('#signup_lastname').should('be.visible', { delay: 500 })
        cy.get('#signup_email').should('be.visible', { delay: 500 })
        cy.get('#signup_phone').should('be.visible', { delay: 500 })
        cy.get('#signup_company').should('be.visible', { delay: 500 })
        cy.get('#signup_country').select(countryUS, { delay: 500 }).should('be.visible')
        cy.get('#signup_state').should('be.visible', { delay: 500 })
        cy.get('#page-container > div > div:nth-child(2) > div > form > div > button').should('be.visible', { delay: 500 })
        cy.get('#googleLink > span').should('be.visible', { delay: 500 })
        cy.get('#page-container > div > div:nth-child(2) > div > form > p:nth-child(9) > small > a').should('be.visible', { delay: 500 })
        cy.get('#page-container > div > div:nth-child(2) > div > form > p:nth-child(10) > small > a').should('be.visible', { delay: 500 })
        cy.wait(2000)
    })

    it('Sign Up United States country', function() {
        // Open Webpage
        cy.visit(url)
        cy.wait(3000)

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
        cy.get('#signup_firstname').type(firstnameUS, { delay: 200 }).should('have.value', firstnameUS)
        cy.get('#signup_lastname').type(lastnameUS, { delay: 200 }).should('have.value', lastnameUS)
        cy.get('#signup_email').type(emailUS, { delay: 200 }).should('have.value', emailUS)
        cy.get('#signup_phone').type(phoneUS, { delay: 200 }).should('have.value', phoneUS)
        cy.get('#signup_company').type(companyUS, { delay: 200 }).should('have.value', companyUS)
        cy.get('#signup_country').select(countryUS, { delay: 200 }).should('have.value', countryUS)
        cy.get('#signup_state').select(state, { delay: 200 }).should('have.value', stateAbbr)
        cy.get('#page-container > div > div:nth-child(2) > div > form > div > button').contains("Sign Up").click()
        cy.wait(2000)
    })

    it('Sign Up Canada country', function() {
        // Open Webpage
        cy.visit(url)
        cy.wait(3000)

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
       cy.get('#signup_firstname').type(firstnameCAN, { delay: 200 }).should('have.value', firstnameCAN)
       cy.get('#signup_lastname').type(lastnameCAN, { delay: 200 }).should('have.value', lastnameCAN)
       cy.get('#signup_email').type(emailCAN, { delay: 200 }).should('have.value', emailCAN)
       cy.get('#signup_phone').type(phoneCAN, { delay: 200 }).should('have.value', phoneCAN)
       cy.get('#signup_company').type(companyCAN, { delay: 200 }).should('have.value', companyCAN)
       cy.get('#signup_country').select(countryCAN, { delay: 200 }).should('have.value', countryCAN)
       cy.get('#page-container > div > div:nth-child(2) > div > form > div > button').contains("Sign Up").click()
       cy.wait(2000)
    })

    it('Sign Up Other country', function() {
        // Open Webpage
        cy.visit(url)
        cy.wait(3000)

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
       cy.get('#signup_firstname').type(firstnameOTHER, { delay: 200 }).should('have.value', firstnameOTHER)
       cy.get('#signup_lastname').type(lastnameOTHER, { delay: 200 }).should('have.value', lastnameOTHER)
       cy.get('#signup_email').type(emailOTHER, { delay: 200 }).should('have.value', emailOTHER)
       cy.get('#signup_phone').type(phoneOTHER, { delay: 200 }).should('have.value', phoneOTHER)
       cy.get('#signup_company').type(companyOTHER, { delay: 200 }).should('have.value', companyOTHER)
       cy.get('#signup_country').select(countryOTHER, { delay: 200 }).should('have.value', countryOTHER)
       cy.get('#page-container > div > div:nth-child(2) > div > form > div > button').contains("Sign Up").click()
       cy.wait(2000)
    })

    it('Clicking on Sign Up with Google ', function() {
        // Open Webpage
        cy.visit(url)
        cy.wait(3000)

        cy.get('#googleLink').then(($a) => {
            // pull off the fully qualified href from the <a>
            var tempUrl = $a.prop('href')
            cy.request(tempUrl)
        })
        cy.wait(2000)
    })

    it('Clicking on Finish Registration link', function() {
        // Open Webpage
        cy.visit(url)
        cy.wait(3000)

        cy.get('#page-container > div > div:nth-child(2) > div > form > p:nth-child(9) > small > a')
        .contains("Finish Registration", { delay: 500 }).click()
        cy.wait(2000)
        cy.visit(url)
    })

    it('Clicking on Log In with your account', function() {
        // Open Webpage
        cy.visit(url)
        cy.wait(3000)

        cy.get('#page-container > div > div:nth-child(2) > div > form > p:nth-child(10) > small > a')
        .contains("Log in with your account", { delay: 500 }).click()
        cy.wait(2000)
        cy.visit(url)
    })

})

