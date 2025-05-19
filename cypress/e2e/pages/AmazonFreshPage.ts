class AmazonFreshPage {

    elements ={
        fresh_btn :()=> cy.contains('a.nav-a', 'Fresh'),
        HouseholdEssentials:()=> cy.get('img[alt="HouseholdEssentials"]'),
        Detergents_Liquids:()=> cy.get('img[alt="Detergents&Liquids"]'),
        category_header:()=> cy.get('h2.a-size-large').contains('Liquid Detergent')

    }

    visits(){

        cy.visit('https://www.amazon.in/')
        
    }

    AmazonFreshflow(){
        
        this.elements.fresh_btn().click()
        this.elements.HouseholdEssentials().scrollIntoView().should('be.visible')
        this.elements.Detergents_Liquids().should('be.visible').click()
        this.elements.category_header().should('be.visible')

    }

}
export default new AmazonFreshPage();