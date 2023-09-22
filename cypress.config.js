const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/*.feature",
    baseUrl: "http://150.95.25.8:6681/login",
    env: {
      downloadDirectory: "cypress/downloads",
    },
  },
});
