/* 
1. iske liye command.js me 
"""/// <refrence types="Cypress" />
/// <refrence types="cypress-xpath" />""

2. Aur e2e.js me hone chahiye, warna x-path ka error aayega
""require('cypress-xpath')""


*/

describe('XpathLocator Test Case', () =>{

    it('To get number of items', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        
        // To get the list of items via Xpath, .should is assertion
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length', 6)  // number of items should have 6
    })

    it('Chained XPath', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        
        // To get the list of items via Xpath, .should is assertion
        cy.xpath("//ul[@id='blockbestsellers']").xpath("./li").should('have.length', 6)  // these 2 xpath will get merged, "see that ./li is there instead of /li only"
    })


})