// go()

describe('mysuite', ()=> 
{
  it('NavigationTest', ()=> 
    {
      cy.visit("http://the-internet.herokuapp.com/");
      cy.title().should('eq',"The Internet"); // Home page

      cy.wait(1000);

      cy.get("a[href='/abtest']", {includeShadowDom:true}).click();
      cy.get("div[class='example'] h3").should('have.text',"A/B Test Variation 1"); // cameras

      cy.wait(1000);

      cy.go('back'); // go back to home
      cy.title().should('eq',"The Internet");

      cy.wait(1000);

      cy.go('forward'); // cameras
      cy.get("div[class='example'] h3").should('have.text',"A/B Test Variation 1");

      cy.wait(1000);

      cy.go(-1);  // home
      cy.title().should('eq',"The Internet");

      cy.wait(1000);
      cy.go(1);  // cameras
      cy.get("div[class='example'] h3").should('have.text',"A/B Test Variation 1");

      cy.reload();

    })
        
  })