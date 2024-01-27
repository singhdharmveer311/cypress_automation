
/* 

*/


describe("Alerts in Cypress", () => {

    // 1. JS Alerts: Simple with some text and an "OK" Button
    it('JS alert', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionAlert()']").click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am an alert box!')

        })

    })

    // 2.  JS Alerts: Simple with some text with "Cancel" and "OK" Button
    it('JS Alert with OK Button ', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionConfirm()']").click()

        cy.on("window:confirm", (t) => {

            expect(t).to.contains('Press a button!')
        });

        cy.get("#demo").should('have.text', 'You pressed OK!');

    })


    // 3.  JS Prompt: It will have some text to input then click on OK or Cancel after entering the text.
    it('JS Prompt ', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        
        // cy.get("button[onclick='myFunctionConfirm()']").click()

        cy.window().then( (win) => {

            cy.stub(win, 'prompt').returns('Dharmveer');
        })

        cy.get("button[onclick='myFunctionPrompt()']").click()

        cy.get("#demo").should('have.text', 'Hello Dharmveer! How are you today?');


    })


    // 4. Authentication ALert
    
    it('Authentication alert Method 1 Using auth', () => {

        cy.visit('https://the-internet.herokuapp.com/basic_auth', {         // By using auth 
                                auth: {
                                    username: 'admin',
                                    password: 'admin'
                                }
        })

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

    })


    it('Authntication POPup by passing username and password in URL', ()=> {

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    })
    

    

})
