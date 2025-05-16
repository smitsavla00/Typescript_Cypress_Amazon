/// <reference types="cypress" />

// import LoginPage from '../e2e/pages/LoginPage'

import loginPage from '../pages/LoginPage'

describe('Login Suite for Amazon',()=>{

  it('login test via Email',()=>{

    //Go to Amazon.in
    loginPage.visit();

    //Login via Email
    loginPage.AmazonLoginViaEmail();

  })
  
})