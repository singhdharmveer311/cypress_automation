import 'cypress-iframe'


describe('iFrames in Cypress', () => {

    it('Method 1 - By Wraping an iFrames ', () => {

        cy.visit('http://the-internet.herokuapp.com/iframe');

        const iframe = cy.get('#draggable') 
            .its('0.contentDocument.body')       // That button is located inside the body element of the document of the iframe element
            .should('be.visible')        // check that it existed or not
            .then(cy.wrap);         // wrap it so that it can be 

        iframe.clear().type("Welcome, My Name is Dharmveer Singh {cmd+a}"); // to clear the already text, {cmd+a} -> To select all written text and then make it bold using B on UI
        
        cy.get("button[title='Bold']").click() // to make it bold by using CSS Selector of Bold

    })


    it('Method 2 -  By Using Custom Command ', () => {

        cy.visit('http://the-internet.herokuapp.com/iframe');

        cy.getIframe('#mce_0_ifr').clear().type("Welcome, My Name is Dharmveer Singh {cmd+a}");

        cy.get("button[title='Bold']").click() // to make it bold by using CSS Selector of Bold
        

    })


    it('method 3 - ', () => {

        


    })

})