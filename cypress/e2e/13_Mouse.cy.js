import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')   // Used for drag and drop import in cypress `npm install --save-dev @4tw/cypress-drag-drop`

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
        // cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick');
        // // cy.get('#accept-choices').click();

        // cy.frameLoaded("#iframeResult") // to laod the iFrame

        // // Approach 1 - trigger()
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');     // double click is db click
        // cy.iframe('#iframeResult').find('#demo').should('have.value', 'Hello World');

        // // Approach 2 - Direct Doble Click
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick(); // direct double click
        // cy.wait(1000)


        // WORKING WEBSITE - IFRAME IS NOT WORKING
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');
        cy.get("button[ondblclick='myFunction()']").dblclick();
        cy.wait(1000);
        cy.on('window:alert', (t) => {
            expect(t).to.contains('You double clicked me.. Thank You..')

        })

    })

    it('Drag and Drop using plugin ', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box5').should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.wait(2000);
        
        // cy.get('#box5').drag('#box106');  // *** sometime we get 4000 timeout delay in cypress execution so we use "FORCE" method
        cy.get('#box5').drag('#box106', {force:true});
    })


    // SCROLLING IN CYPRESS - https://docs.cypress.io/api/commands/scrollIntoView 
    it.only('Scrolling Page ', () => {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-asia.html');

        // India Flag
        cy.get(':nth-child(1) > tbody > :nth-child(17) > :nth-child(2)').scrollIntoView({duration:2000}); // 2 sec ke break me scrool karega
        cy.get(':nth-child(1) > tbody > :nth-child(17) > :nth-child(2)').should('be.visible');

        // Armenia Flag
        cy.get("cy.get(':nth-child(1) > tbody > :nth-child(3) > :nth-child(2)')").scrollIntoView({duration:1000});
        cy.get(':nth-child(1) > tbody > :nth-child(3) > :nth-child(2)').should('be.visible');

    })




})