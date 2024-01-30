const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    //docker run -it -v C:\Users\LENOVO\VS\Cypress:/e2e -w /e2e --entrypoint=cypress cypress/included:latest run
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
