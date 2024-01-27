/// <reference types="Cypress" />

describe('Web Tables ', () => {

    beforeEach('Login', () => {

        // Application login -> username password -> Popup close -> customers -> sub section of customers -> see tables 
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();

        // closing the popup 
        cy.get('.btn-close').click();

        // navigating to cutomers -> cutomers ( which is first child )
        cy.get('#menu-customer').click();  // customers main menu
        cy.get('#menu-customer>ul>li:first-child').click();     // cutomers sub menu
    })


    it('To get the number of rows in each table', ()=> {

        cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length', 10);
    })


    it('To get the 5th row and 3rd column data ', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('hfgjhgjgjggj@gmail.com');
    })



    it('To iterate through  all the table data ', ()=> {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each( ($row, index, $rows) => {        // yaha per ()=> aise nhi hai. '.each' is  js for iterating thorugh eeach element // row -> 1st row, index -> index , rows -> all rows 
            
            cy.wrap($row).within( () => {       // wrap row and withing each row
                
                cy.get("td").each( ($col, index, $cols) => {
                    cy.log($col.text());
                } )

            })

        })
    })


    // TO ITERATE THROUGH THE PAGES AND READ DATA OF TABLE ON ALL THE PAGES.. ******
    it.only('Pagination - Itering through pages like out of 500 ( 5 iterate ) ', () => {

        // Find the total number of pages, it is dynamic, it might change depends on total pages shown on website
        let totalPages;
        cy.get('.col-sm-6.text-end').then( (e) => {     // then for this element e we will perform the action 
            let myText = e.text();  // "Showing 1 to 10 of 17678 (1768 Pages)"
            totalPages = myText.substring( myText.indexOf("(") + 1, myText.indexOf("P") - 1);
            cy.log("Total Number of pages in a table are ===== " + totalPages);
            

        })

        // Now we read all the data from some pages, we need to write the loop to collect data from all the pages.
        let totalPage1 = 5;   // let we iterate 5 page only, we can use above number also but it's big

        for(let p=1; p<totalPage1; p++){
            if(totalPage1 > 1){
                cy.log("Active Pages are === " +p );

                cy.get("ul[class$='pagination']>li:nth-child("+p+")");  // click on nth page
                cy.wait(3000); // wait 3 sec

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row, index, $rows) => {
                    
                    cy.wrap($row).within( () => {

                        cy.get("td:nth-child(3)").then( (e) => {        // email address are on 3rd row
                            cy.log(e.text()); 
                        })

                    })
                })
            }
        }

    })


    
    
})