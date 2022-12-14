///<reference types="cypress"/>


describe('Exploring the Envinorment Variables',()=>{
    it('getting the env values',()=>{
       const a =Cypress.env('url')
        // cy.visit(Cypress.env('url'))
        // cy.log(Cypress.env('url1'))
        cy.visit(Cypress.env('url1'))
      
    })

    it('open url using env file',()=>{
     
    })
})