import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // впровадження налаштувань подій
    },
    baseUrl: 'https://the-internet.herokuapp.com',
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts'
  },
});
