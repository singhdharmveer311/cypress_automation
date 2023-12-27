






describe("Asserstion in Cypress", () => {

    it("Implicit Assertion", () =>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('include', 'orangehrmlive.com')   // .url() will return url of site, inlude in key of should
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  // eq is the key of assertion, equal
        cy.url().should('contain', 'opensource')        // url should contain

        // Method 2 -> we don't need to take url everytime, after first sould it will be chained
        cy.url().should('include', 'orangehrmlive.com')   // .url() will return url of site, inlude in key of should
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  // eq is the key of assertion, equal
        .should('contain', 'opensource')        // url should contain


        // Method 3 -> we were using .should 3 time we can decrease it via 'and' keyboard
        cy.url().should('include', 'orangehrmlive.com')   
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
        .and('contain', 'opensource')     
        .and('not.contain', 'Negative match')    // Not contain   


        // --- Assertion on Titile , Original title is "OrangeHRM"
        cy.title().should('include', 'Orange')  // It will pass because Orange is in titile
        .and('eq', 'OrangeHRM')


        // --- Assertion on Element/logo existence or visibility
        cy.get('.orangehrm-login-branding > img').should('be.visible')      //  be.visible is method for visibility
        .and('exist')                      // exist used for element existence


        // -- To capture all the links form the web page using Xpath
        cy.xpath('//a').should('have.length', '5')


        // --- To validate that some text is present inside input box or not
        



    })

})