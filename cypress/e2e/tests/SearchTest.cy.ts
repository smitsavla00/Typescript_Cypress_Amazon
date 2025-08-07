/// <reference types="cypress" />

import SearchPage from '../pages/SearchPage'
describe('Search Suite', () => {
  it('search iphone', () => {
    SearchPage.visitss()
    SearchPage.searchflow()
    SearchPage.searchResultcounttotal()
    SearchPage.searchResultcountNonSponser()
  });
  it.skip('search 2',()=>{
    SearchPage.visitss()
    SearchPage.searchflow()
    SearchPage.searchResultcountNonSponser1()
  })
});
