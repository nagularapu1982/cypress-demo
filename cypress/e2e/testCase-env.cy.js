///<reference types="cypress"/>
describe('Exploring the Envinorment Variables',()=>{
    it('getting the env values',()=>{
        // cy.log(cy.env('url'))
        cy.log(Cypress.env('UAT').user.User1)
        cy.log(ab)
    })

    it('open url using env file',()=>{
        cy.log(Cypress.env('UAT').user.url)
        cy.visit(Cypress.env('UAT').user.url)
    })
    it('getting the env values through',()=>{
        const a =Cypress.env('url')
         // cy.visit(Cypress.env('url'))
         // cy.log(Cypress.env('url1'))
         cy.visit(Cypress.env('url1'))
       
     })

})