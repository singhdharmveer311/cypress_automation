import 'cypress-file-upload';


describe('Cypress File Upload ', () => {

    it('Single File Uplaod', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile('1.png');
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
        

    })


    it('File Upload - Rename ', () => {

    })


    it('File Uplaod - Drag and Drop ', () => {

    })


    it('File Uplaod Multiple ', () => {

    })


    it('File Uplaod - Shadow DOM ', () => {


    })


})

