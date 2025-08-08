import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // No custom plugins needed
      return config;
    },
    baseUrl: 'https://www.amazon.in/',
    specPattern: 'cypress/e2e/tests/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    retries: {
      runMode: 2,
      openMode: 0,
    },
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false
    
  }
  

});
