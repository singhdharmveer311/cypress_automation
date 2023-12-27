// const cypress = require("cypress")  // to get all the visit and funcitons of cypress

/*  
Locators
--------

CSS Selector - only locators support by cypress, direct support is there 
Xpath - by using the path, we need plugin for this 

Steps:
1. Indentify The element
2. locate the element
3. by using the cy.get(locator) -> to locate the element


CSS Selector 
-------------
tag id,  tag class,  tag attribute ,  tag class attribute -> 4 type, in all these 4 tag is optional
***** Ex: Use selctorHUb , for id you can directly use "#" and the id name, ex "#id_name", for class we can ".class_value",  for attribute "[attribure='value']"
1. For ID -> "#id_name"
2. For Class -> ".class_name"
3. For Attribute -> "[attribute='value']"
4. Class[attirbute='value']

we can also wirte all these in format like tag.id.id_name, tag is optional


XPATH ----------
2nd Way is XPATH, for that we need plugin , search cypress plugin -> Cypress-xpath -> Command `npm install -D cypress-xpath`
*/


describe('CSSSLocators', () => {

    it("CSS Locators ", () => {
        cy.visit("https://www.automationpractice.pl/index.php/")            // getting infine redirection on chrome for this website , use firefox


        // <input class="search_query form-control ac_input" type="text" id="search_query_top" name="search_query" placeholder="Search" value="" autocomplete="off">
        // cy.get("#search_query_top").type("Shirt")                // Id , type is used to write inside input, 
        // cy.get(".search_query").type("Shirt")                // Instead of ID, we are using class here. uska query search_quesry hai., this will also do the same thing
        cy.get("[name='search_query']").type("Shirt")        // Locating by using attributes, double questes ke andar single quote hota hai. vice verse
       
       
        cy.get("[name='submit_search']").click()              // attributes ko bracket ke ander dete hai

        cy.get(".lighter").contains("Shirt")        // Assertion ****

    })

})