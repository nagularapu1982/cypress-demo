///<reference types='cypress'/>
import HomePage from '../support/pageObjects/homePage.cy'

describe('Verify error messages',()=>{
    it('Validation of error messages',()=>{
        // cy.log(this.regdata.name)
        cy.visit('https://shop.demoqa.com/my-account/')
        const homePage = new HomePage();
        homePage.getLogin().click()
    
        homePage.getusernameErrormessage().contains('Error: Username is required.').scrollIntoView()
})

})