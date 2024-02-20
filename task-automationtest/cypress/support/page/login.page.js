import login from "../selector/login.selector"

Cypress.Commands.add("preencherEmailParaCadastro", (email) => {
  cy.get(login.campoEmailCriarConta).type(email)
})

Cypress.Commands.add("clicarEmIrParaCadastro", () => {
  cy.wait(1000).get(login.btnCriarConta).click()
})

Cypress.Commands.add("validarErroCriarConta", (message) => {
  cy.get(login.menssagemDeErroCriarConta).should("have.text", message)
})