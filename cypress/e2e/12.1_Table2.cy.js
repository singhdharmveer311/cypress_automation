
describe('Code for working website, on opencart cloudflare is blocking the test cases', ()=> {

    beforeEach('Before each iteration', ()=> {
        cy.visit('http://the-internet.herokuapp.com/tables');

    })

    it('To iterate through  all the table data ', ()=> {

        cy.get('#table1>tbody>tr')
        .each( ($row, index, $rows) => {        // yaha per ()=> aise nhi hai. '.each' is  js for iterating thorugh eeach element // row -> 1st row, index -> index , rows -> all rows 
            
            cy.wrap($row).within( () => {       // wrap row and withing each row
                
                cy.get("td").each( ($col, index, $cols) => {
                    cy.log($col.text())
                } )

            })

        })
    })
})