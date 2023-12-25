
/* 
1. from terminal we can use `npx cypress open`  
2. `npx cypress run` to run directly from terminal, by default it pass headless mode, because it doesn't involve any UI
2. If we want UI also then add --headed `npx cypress run --headed` -> this will direclt open the cypress app and u will see on UI
4. For specific file -> `npx cypress run --spec` -> will run all the specs file
    `npx cypress run cypress/e2e/MytestCase.cy.js`  or `npx cypress run cypress/e2e/MytestCase.cy.js --headed`

*/

describe('My First Test case', () => {
  it('Verify Title Positive Case', () => {                                              // Verify Title
    cy.visit("https://opensource-demo.orangehrmlive.com/") 

    cy.title().should('eq', 'OrangeHRM')
  })
  

  it('Verify Tiltle Negative Case', () => {                                              // Verify Title negative case
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.title().should('eq', 'OrangeHRM_Invalid')
  })

})




// describe('My First Test', () => {           // In place of "=>" we can use "funtion()", because both are same in javascript
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })