///<reference types="cypress"/>
import abc from '../fixtures/user.json'
// import abc from '../fixtures/*.json'


describe('verify Fixtures',()=>{
    beforeEach('Open the url',()=>{
        // cy.visit('https://example.cypress.io').then(()=>{
        //     cy.log('Opend URL successfully')
        // })
        cy.visit('https://example.cypress.io')
        // done()
    })
    it('print the name',()=>{
            // cy.log(this.regdata.name)
            // cy.log(user.name)
            cy.log(abc.email)
    })
    
  it('printin the email', ()=> {
    // cy.log(this.regdata.email)
    cy.log(abc.email)
  })
  it('printin the body', ()=> {
    // cy.log(this.regdata.body)
    cy.log(abc.body)
  })

})
