const cypress = require("cypress")


/* 
1. from terminal we can use `npx cypress open`  */

describe('My First Test case', () => {
  it('Test 1', () => {                                              // verify title
    cy.visit("https://opensource-demo.orangehrmlive.com") 

    cy.title().should('eq', 'OrangeHRM')
  })

  it('Test 1', () => {                                              // verify title negative case
    cy.visit("https://opensource-demo.orangehrmlive.com")

    cy.title().should('eq', 'OrangeHRM_Invalid')
  })

})




describe('My First Test', () => {           // In place of "=>" we can use "funtion()", because both are same in javascript
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })