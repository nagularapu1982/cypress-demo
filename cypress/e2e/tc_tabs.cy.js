/// <reference types="cypress"/>
describe('Testcase to switch tabs', () => {


  it.only('Verify the login page', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').then(() => { 
      //Handling Async behavior using then method 
      // cy.get('[href="https://docs.cypress.io"]').click()
      console.log('Using Mocha Log'); 
    })
    cy.log('outside'); 
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    cy.get('.DocSearch-Button-Placeholder').should('have.text','Search')
    cy.go('back')
  })


})