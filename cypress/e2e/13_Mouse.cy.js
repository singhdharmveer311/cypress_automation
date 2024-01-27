import 'cypress-iframe'

/* 
Cypress trigger is used in all these mouse action 
https://docs.cypress.io/api/commands/trigger

*/

describe('Mouse handling, ', () => {

    it('Mouse Hover - Invoking mouse using .invoke method', () => {
        cy.visit('https://www.letskodeit.com/practice');

        // show hidden element with invoke 
        cy.get('.mouse-hover-content').invoke('show');
        cy.wait(1000)

        cy.contains('Top').click();

        cy.wait(1000)


        // method 2 - using trigger

        cy.get('.mouse-hover-content').trigger('mouseover').click();  // mouse over for the options to be visible
        cy.get("a[href='#top']").should('be.visible').click();

    })


    it('Right Click ', () => {

        // 1 - by using trigger OR 2 - by using direct right click method
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

        // Approach 1
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu'); // contextmenu is for right click
        
        cy.get("ul[class$='context-menu-list context-menu-root']>li:first-child").should('be.visible') // first option edit should be visible
        cy.get("ul[class$='context-menu-list context-menu-root']>li:last-child").click(); // closing the window


        // Approach 2 - direct right click action
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get("ul[class$='context-menu-list context-menu-root']>li:first-child").should('be.visible') // first option edit should be visible
        cy.get("ul[class$='context-menu-list context-menu-root']>li:last-child").click(); // closing the window
    })

    it('Left Click ', () => {


    })

    it('Double Click ', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick');

        cy.frameLoaded("#iframeResult") // to laod the iFrame

        // Approach 1 - trigger()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');     // double click is db click
        cy.iframe('#iframeResult').find('#demo').should('have.value', 'Hello World');


    })

    it('Drag and Drop using plugin ', () => {


    })


    it('Scrolling Page ', () => {


    })


})