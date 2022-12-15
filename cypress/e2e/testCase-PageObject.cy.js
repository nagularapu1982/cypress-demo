///<reference types='cypress'/>
import HomePage from '../support/pageObjects/homePage.cy'

describe('Reading data directly',()=>{
    it('Loading the page elmenets using page object model',()=>{
        // cy.log(this.regdata.name)
        cy.visit('https://shop.demoqa.com/my-account/')
        const homePage = new HomePage();
        homePage.getUserName().type('Test User')
        cy.screenshot('Capturing the screenshot after successful login');

        homePage.getPassword().should('be.visible').type('TestPassword')
        homePage.getEmail().type('testuser@gmail.com')
    })
})