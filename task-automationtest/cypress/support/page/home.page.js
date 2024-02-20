import home from "../selector/home.selector";

Cypress.Commands.add("clicarIrParaEmLogin", () => {
  cy.get(home.btnLinkParaLogin).click()
})

Cypress.Commands.add("clicarEmDeslogar", () => {
  cy.get(home.btnDeslogar).click()
})