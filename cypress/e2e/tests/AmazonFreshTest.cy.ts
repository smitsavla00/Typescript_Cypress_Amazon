/// <reference types="cypress" />

import amazonfreshPage from '../pages/AmazonFreshPage'

describe('Amazon Fresh Page Suite',()=>{


    it('go to amazon fresh and from there go to Ditergen section',()=>{

        amazonfreshPage.visits();
        amazonfreshPage.AmazonFreshflow();
    })
})