const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 2560,
    viewportHeight: 1080,
    baseUrl: "https://demo.nopcommerce.com",
  },
});
