/// <reference types="Cypress" />

describe('Handling Child Tabs Using Cypress', ()=> {

    it('Method 1 by removing the target attribute', ()=> {

        // <a href="/windows/new" ,="" target="_blank" xpath="1">Click Here</a>, 
        // because of this target attribute this page is opening a new window we will remove it
        cy.visit('http://the-internet.herokuapp.com/windows');

            cy.get('.example >a').invoke('removeAttr', 'target').click();
            cy.url().should('include', 'http://the-internet.herokuapp.com/windows/new');
            
            cy.wait(4000);

            // to go to previous tab
            cy.go("back");

    })


    it('Method 2 By Visiting the new window url after click ', () => {

        // <a href="/windows/new" ,="" target="_blank" xpath="1">Click Here</a>, 
        // because of this target attribute this page is opening a new window we will remove it
        cy.visit('http://the-internet.herokuapp.com/windows');

        cy.get('.example >a').then( (e) => {

            let url = e.prop('href');

            cy.visit(url);
        })

        cy.url().should('include', 'http://the-internet.herokuapp.com/windows/new');

        cy.wait(2000);

        cy.go("back")   // back to parent tab

        
    })

})