import 'cypress-file-upload';

/*
Fixtures folder ke andar se direct uthata hai yeah files ko. 
*/

describe('Cypress File Upload ', () => {  

    it('Single File Uplaod', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile('1.png');
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

    })


    it('File Upload - Rename ', () => {

        cy.visit('http://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile({filePath:'1.png', fileName:'renamed1.png'});
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })


    it('File Uplaod - Drag and Drop ', () => {

        cy.visit('http://the-internet.herokuapp.com/upload');

        cy.get('#drag-drop-upload').attachFile('1.png', {subjectType: 'drag-n-drop'});
        cy.wait(2000);

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('1.png');


    })


    it('File Uplaod Multiple ', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        cy.get('#filesToUpload').attachFile(['1.png', '8.png']);
        cy.wait(2000);
        cy.get(':nth-child(6) > strong').should('have.text', 'Files You Selected:')

    })

    
    // These are elements inside Shadow DOM which are inside some DOM cannot be clicked directly.
    it.only('File Uplaod - Shadow DOM ', () => {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('1.png');
        cy.wait(2000)

        cy.get(".smart-item-name", {includeShadowDom:true}).should('have.text', '1.png');



    })


})

