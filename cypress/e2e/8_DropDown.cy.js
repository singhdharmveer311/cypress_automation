/// <reference types="Cypress" />


describe("Drop Down ", () => {

    it.skip('Drop Down with Select Class ', () => {

        cy.visit("https://testautomationpractice.blogspot.com/")

        // Selecting directly from the option, no need to click becuase selct is available in xpath
        //  <select class="form-control" id="country" xpath="1"> 
        cy.get("#country")
        .select("Japan")
        .should('have.value', 'japan')
    })


    it.skip('Drop Down without Select Class ', () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        // Drop Down where select class is not available, only when we click the option get's avaialable
        //  <span class="select2-selection__rendered" id="select2-billing_country-container" role="textbox" aria-readonly="true" title="Poland">Poland</span>
        /* Steps:
        Click on drop down -> type country name -> press enter   
        */

        cy.get("#select2-billing_country-container").click();

        cy.get(".select2-search__field").type("Japan").type("{enter}");  

        cy.get("#select2-billing_country-container")
        .should('have.text', 'Japan')            // we cannot use have.value because there is no select, with select only we can use have.funtion

    })



    it.skip('DropDown with Static Options after typing', () => {

        cy.visit("https://www.wikipedia.org/");

        cy.get("#searchInput").type('cypress');

        cy.get(".suggestion-title").contains('Cypress').click()  // total 6-7 options in the drop down, static options
    })



    // Most Dynamic Drop Down Options
   /*  each cypress -> Iterate through an array like structure (arrays or objects with a length property) */

    it('Drop Down with all dynamic options select', () => {

        cy.visit('https://www.google.com/');

        cy.wait(3000)

        cy.get("[type='search']").type('raj singh')

        cy.wait(3000)

        cy.get("div.wM6W7d").each( ($el, index, $list) => {

            if($el.text() == 'Raj Singh'){
                cy.wrap($el).click()
            }

        } )

        cy.get("[type='search']").should('have.value', 'Raj Singh')

        
    })
    
})