
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
   
   
}
export default HomePage;