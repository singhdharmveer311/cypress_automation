/// <reference types="Cypress" />

/* 

*/


describe("Checking UI Elements ", () => {

    it("Interecting with radio button", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")

        // Visibility Of Radio Buttons
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible') 


        // Selecting (check ) on radio button and then checking that is selected or not
        cy.get("#male").check().should('be.checked')        // .check() is to click on it and the be.cheked for checking it is selectd or not
        cy.get("#female").should('not.be.checked')  // if male is cheked then femail will be not

        cy.get("#female").check().should('be.checked')      // we can also use "tag#id", ex: "input#male"
        cy.get("#male").should('not.be.checked') 
        

    })



    it("Interecting with CheckBox ", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")

        // // Visibility Of Check box 
        cy.get("input#monday").should('be.visible')
        


        // Selecting (check ) on Check Box and then checking that is selected or not
        cy.get("input#monday").check().should('be.checked')        // .check() is to click on it and the be.cheked for checking it is selectd or not

    
        // Unselecting checkBox
        cy.get("input#monday").uncheck().should('not.be.checked');


        // Selecting all the check boxes, we don't need loop here we can directly give common css selector and check on all the boxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');   // Format - "tag.class_name[attribute='value']"
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');    // unchecking all the boxes 

        // Select First and last Check Boxes among all of them
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        // cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');


    })
})


