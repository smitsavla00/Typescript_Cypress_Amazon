class LoginPage {

    elements = {
        signin_button : () => cy.get('#nav-link-accountList'),
        email_input :() => cy.get('#ap_email_login'),
        email_continue:()=> cy.get('#continue'),
        password_input:()=> cy.get('#ap_password'),
        user_validation:()=> cy.get('#nav-link-accountList-nav-line-1')

    }

    visit() {
        cy.visit('https://www.amazon.in/')

    }

    AmazonLoginViaEmail(){
        this.elements.signin_button().click()
        this.elements.email_input().type('sample@mail.com') //Enter your email
        this.elements.email_continue().click()
        this.elements.password_input().type('samplepassword{enter}') //Enter your password
        this.elements.user_validation().should('contain','Hello, smit')
    }




}
export default new LoginPage();