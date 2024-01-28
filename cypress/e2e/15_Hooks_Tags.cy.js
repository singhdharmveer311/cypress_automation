/* 
HOOKS :_-----
before - call one time only
after   - call one time only
beforeEach 
afterEach - after every it block 


TAGS:----
it.skip, it.only, it.

*/



describe('My Test Suite ', () => {


    before( () => {         // run only one time in starting 
        cy.log("******   Launch APP *******");
    })

    after(() => {
        cy.log("********* Close APP **** ");
    })

    beforeEach( () => {         // this will get execurted before each it block
        cy.log("**** Login **** ")
    })

    afterEach( () => {      // this will executed after each it block
        cy.log("**** Logout From application **** ")
    })


    it('Search', ()=>{    // before search i want to login and after search i want to logout ( this can be done vie beforeEach & afterEach)
        cy.log("***** searching **** ");

    })


    it('Advance search', ()=>{
        cy.log("**** This is Advance Search ***** ");
    })


    it('Listing Product ', () => {
        cy.log("This is to list product ");
    })
    

    it.skip('skip ', () => {
        cy.log("This is to list product ");
    })


})