///<reference types='cypress'/>
import user from '../fixtures/user.json'
import data from '../fixtures/example.json'
describe('Reading data directly',()=>{
    it('load the data', ()=>{
        cy.log(user.name)
        cy.log(user.email)
        cy.log('reading from ',cy.log(data.name))
        })

        before(function() {
            // runs once before all tests in the it block
            cy.log("I am in before")
            console.log("it is console log")
          })
        
          after(function() {
            // runs once after all tests in the it block
            cy.log("I am in after")
          })
        
          beforeEach(function() {
            // runs before each test in the it block
            cy.log("I am in beforeEach")
          })
        
          afterEach(function() {
            // runs after each test in the it block
            cy.log("I am in afterEach")
          })
        
          it('load the email', ()=>{
            cy.log(user.email)
            })
            it('load the body', ()=>{
                cy.log(user.body)
                })
})