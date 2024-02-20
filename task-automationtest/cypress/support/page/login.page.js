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

Cypress.Commands.add("preencherEmail", (email) => {
  cy.get(login.campoEmail).type(email)
})

Cypress.Commands.add("preencherSenha", (senha) => {
  cy.get(login.campoSenha).type(senha)
})

Cypress.Commands.add("clicarEmLogar", () => {
  cy.get(login.btnLogin).click()
})

Cypress.Commands.add("validarLogin", () => {
  cy.get(login.elementoPaginaMinhaConta).should("have.text", "My account")
})

Cypress.Commands.add("validarErroLogin", (message) => {
  cy.get(login.mensagemDeErroLogin).should("have.text", message)
})