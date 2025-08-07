

class SearchPage {

  elements = {
    searchInput: () => cy.get('input[name="field-keywords"]'), // example Amazon search input
    listitem: () => cy.get('div[role="listitem"][data-component-type="s-search-result"]'),
    filter_deliveryRefinements :()=> cy.get('#deliveryRefinements li input[type="checkbox"]'),
    opt1:()=> cy.contains('li', 'Get It Today'),
    opt2:()=>cy.get('#p_n_feature_twenty-nine_browse-bin\\/44349045031 li input[type="checkbox"]')
  };

  visitss() {
    cy.visit('https://www.amazon.in');
  }

  searchflow() {
    this.elements.searchInput().type('iphone{enter}');
  }

  searchResultcounttotal() {
    this.elements.listitem()
      .its('length')
      .then((count) => {
        cy.log(`Count for the result is: ${count}`);
      });
  }

  searchResultcountNonSponser(){
    this.elements.listitem().filter(':has(span[aria-label="View Sponsored information or leave ad feedback"])').then($nonSponsoredItems => {
    cy.log(`Count of sponsored items: ${$nonSponsoredItems.length}`);
  });
  cy.screenshot()
    
  }

  searchResultcountNonSponser1(){
    // this.elements.listitem().then((all)=>{
    //     cy.log(`${all.length}`)
    //     const all1 = all.filter(':not(:has(span[aria-label="View Sponsored information or leave ad feedback"]))')
    //     cy.log(`${all1.length}`)
    //     const all2 = all.filter(':has(span[aria-label="View Sponsored information or leave ad feedback"])')
    //     cy.log(`${all2.length}`)
    //     const res = all.length-all2.length
    //     cy.log(`${res}`)

    // })
    //this.elements.filter_deliveryRefinements().should('not.be.checked').check({ force: true });
    // this.elements.filter_deliveryRefinements().each((el)=>{
    //     cy.wrap(el).should('not.be.checked')
    // })
    // this.elements.filter_deliveryRefinements().first().check({force:true}) 

    this.elements.opt2().each(((el1)=>{
        cy.wrap(el1).should('not.be.checked')
      
    }))

    this.elements.opt2().each(((el1)=>{
        cy.wrap(el1).check({ force: true })
    }))
    cy.screenshot('home-page');
 }
 
  

    

}

export default new SearchPage(); // ✅ CRUCIAL
