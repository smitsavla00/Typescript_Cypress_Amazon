/// <reference types="cypress" />

import './commands';
import '@4tw/cypress-drag-drop';
import 'cypress-real-events/support';
import 'cypress-real-events/support';
import 'cypress-real-events/support';
import '@4tw/cypress-drag-drop';





//disable fetch and xhr
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
 const style = app.document.createElement("style");
 style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
 style.setAttribute("data-hide-command-log-request", "");
 app.document.head.appendChild(style);
}
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('ResizeObserver loop completed')) {
    return false // prevents test from failing
  }
})