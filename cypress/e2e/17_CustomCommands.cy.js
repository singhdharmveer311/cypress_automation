//click on link using label
// over writing existing contains() command
// re-usuable custom command/Users/dharmveersingh/Documents/projects/cypressautomation/cypress/e2e/Navigation.cy.js

describe('Custom commands', () => {

    it("handling links", () => {  // by using a lable only we can click ( so we pass lable only and it will click )
       
        cy.visit("https://demo.nopcommerce.com/");

       //direct - witout using custom command
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
       
       //using custom command, this clickLInk is defined in commands.js 
        cy.clickLink("Apple MacBook Pro 13-inch");
         cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');

    })

    it.only("overwriting existing command", () => {
    
        cy.visit("https://demo.nopcommerce.com/");

       //using custom command
       cy.clickLink("APPLE MACBOOK PRO 13-inch");   // everything in uppar case , so it should not perform the action because .contains in case senstitive
       cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it("Login command", () => {
       
        cy.visit("https://demo.nopcommerce.com/");
        
        cy.clickLink("Log in"); // custom command
        cy.wait(3000);
        cy.loginapp("testing@gmail.com","test123");  // custom command
           
        cy.get('.ico-account').should('have.text','My account');

    })
    
    })