// class GreythrSignout {
//   elements = {
//     logo: () => cy.get('.gt-greytip-header-logo'),
//     email_input: () => cy.get('#username'),
//     // email_continue: () => cy.get('#continue'),
//     password_input: () => cy.get('#password'),
//     login: () => cy.contains('button', 'Login'),
//     signin_btn: () => cy.contains('button', 'Sign In'),
//     sign_out_btn: () => cy.contains('button', 'Sign Out'),
//   }

//   visit() {
//     cy.visit('https://pipin.greythr.com/')
//   }

//   SignOut() {
//     this.elements.logo().should('be.visible')
//     this.elements.email_input().type('P282') // Enter your email
//     // this.elements.email_continue().click()
//     this.elements.password_input().type('Pippin@123') // Enter your password
//     this.elements.login().click()
//     cy.wait(3000)
//     cy.contains('Sign Out', { includeShadowDom: true }).click()
//   }
// }

// // ✅ Correct default export
// export default new GreythrSignout()
