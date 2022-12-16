///<reference types='cypress'/>
import HomePage from '../support/pageObjects/homePage.cy'

describe('Verify error messages',()=>{
    it('Validation of error messages',()=>{
        // cy.log(this.regdata.name)
        cy.visit('https://shop.demoqa.com/my-account/')
        const homePage = new HomePage();
        homePage.getLogin().then(
            cy.log("login button in feature")
        )

        

    
        homePage.getusernameErrormessage().contains('Error: Username is required.').scrollIntoView()
})

})
