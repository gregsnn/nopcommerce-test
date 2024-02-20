import home from "../selector/home.selector";

Cypress.Commands.add("clicarIrParaEmLogin", () => {
  cy.get(home.btnLinkParaLogin).click()
})