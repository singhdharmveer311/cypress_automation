/// <refrence types="Cypress" />            // for cypress 
/// <refrence types="cypress-xpath" />      // for x-path,  we are using "///"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('getIframe', (index)=> {
    return cy.get(index)
            .its('0.contentDocument')       // That button is located inside the body element of the document of the iframe element
            .should('exist')        // check that it existed or not
            .then(cy.wrap);         // wrap it so that it can be 
})

