/// <reference types="cypress" />

import sample from "../pages/sample";
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Unexpected token '<'")) {
    return false;
  }
});

describe('Sample Flow suite',()=>{
    it.skip('dropdown select',()=>{
        sample.dropdownflow()
    })
    it.skip('checkbox select',()=>{
        sample.checkbox()
    })
    it.skip('radio select',()=>{
        sample.radioflow()
    })
    it.skip('disable',()=>{
        sample.SelectedDisabledflow()
    })
    it.skip('hoverdelete1',()=>{
        sample.hoverDelete();
    })
    it.skip('dynamicText',()=>{
        sample.dynamictext();
    })
    it.skip('loader',()=>{
        sample.loader();
    })
    it('dragDrop',()=>{
        sample.dragdrop();
    })
})

