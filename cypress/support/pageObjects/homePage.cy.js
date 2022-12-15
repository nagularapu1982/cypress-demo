
class HomePage{
   getUserName(){
    return cy.get('#reg_username')
   }
   getEmail(){
    return cy.get('#reg_email')
   }
   getPassword(){
    return cy.get('#areg_password')
   }
   getRegister(){

   }
   
   getLogin(){
      return cy.get(':nth-child(3) > .woocommerce-button')

   }
   get usernameErrormessage()
   {
      return cy.get('.woocommerce-error > li')

   }
   
}
export default HomePage;