/// <reference types="cypress" />

// import LoginPage from '../e2e/pages/LoginPage'

import greythr from '../pages/GreythrSignout';

describe('Login Suite for Amazon',()=>{

  it('login test via Email',()=>{

    //Go to Amazon.in
    greythr.visit();

    //Login via Email
    greythr.SignOut();

  })
  
})