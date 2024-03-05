// We get 

describe('mysuite', ()=> 
{
  it('Capture screenshots & Videos', ()=> 
    {
      cy.visit("https://demo.opencart.com/");
      cy.screenshot("homepage");    // homepage is name of file which get saved in Screnshot Folder
      cy.wait(5000);
      cy.get("img[title='Your Store']").screenshot("logo");  // to capture perticuler element like logo 


      //Cypress Automatically capture screenshot & video on failure - only when ou execute through CLI **** `npx cypress run --spec cypress/e2e/19_CaptureScreenshotsAndVideos.cy.js `
      cy.get("li:nth-child(7) a:nth-child(1)").click(); //cameras
      cy.get("div[id='content'] h2").should('have.text',"Tablets");

    })

  })