///<reference types="cypress"/>
describe('exploring the alerts',()=>{
    beforeEach('opening the url',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    afterEach(function() {
        // runs after each test in the it block
        cy.log('It block executed sussefully')
      })
    it('simple alert with OK option',()=>{
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('contain','You successfully clicked an alert') 
        cy.on('window:alert',function(AlertText){
            expect(AlertText).eq('I am a JS Alert')
        })
    })
    it('simple alert with confirm option',()=>{
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('contain','You clicked: Ok')
        cy.on('window:confirm',function(AlertText){
            expect(AlertText).eq('I am a JS Confirm')
        })
    })
    it('simple alert with promt option',()=>{
        // cy.contains('Click for JS Prompt').click()
        cy.window().then(function($promtElement){
            cy.stub($promtElement,"prompt").returns("Hello Text")
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('contain','You entered: Hello')

        })
    })
})