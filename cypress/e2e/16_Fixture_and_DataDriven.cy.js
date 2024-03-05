/*  

*/


describe.skip('Fixture & Data Driven ', () => {

    // DIRECT ACCESS
    it('Direct access thorough fixture file', () => {

        cy.clearCookies();
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('openhrm').then( (data) => {

            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);

            cy.get("button[type='submit']").click();


            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', data.text2);
        })
    })




    // Mthod 2 - Using Hooks - store in varible and then use
    let dataSet;

    before( () => {
        cy.fixture('openhrm.json').then( (data) => {
            dataSet = data;      // storing values of feature file in dataSet varible
        })
    })
    
    it('Using hooks ', () => {

        cy.clearCookies();  // to clear the previous login of the app 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        


        cy.get("input[placeholder='Username']").type(dataSet.username);
        cy.get("input[placeholder='Password']").type(dataSet.password);
        cy.get("button[type='submit']").click();

        cy.wait(1000);

        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', dataSet.text1);


    })

})







