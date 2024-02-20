const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1680,
    viewportHeight: 1050,
    baseUrl: "https://automationtest.shop",
  },
});
