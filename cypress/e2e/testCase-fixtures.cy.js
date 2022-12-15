///<reference types="cypress"/>

import user from '../fixtures/user.json'

describe('verify Fixtures',()=>{
  before('Load fixture',()=>{
    cy.fixture('example').then(function(regdata){
        this.regdata=regdata
        cy.log('Fixture is loaded one time')
     })
})
  beforeEach('Open the url',()=>{
    cy.visit('https://example.cypress.io')
})
    it('print the name',function(regdata){
            cy.log(this.regdata.name)
           cy.log(user.name)
         
    })
    
  it('printin the email', function(regdata) {
    // cy.log(this.regdata.email)
    cy.log(user.email)
  })
  it('printin the body', function(regdata) {
    // cy.log(this.regdata.body)
    cy.log(user.body)
  })

})
