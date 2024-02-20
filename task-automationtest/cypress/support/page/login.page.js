// const campoEmail = "#email"
// const campoSenha = "#passwd"
// const btnLogin = "#SubmitLogin > span"
// const btnCriarConta = "#SubmitCreate > span"
// const campoEmailCriarConta = "#email_create"
// const errorMessageSelector = "#center_column > div.alert.alert-danger > ol > li"
import login from "../selector/login.selector"

Cypress.Commands.add("preencherEmailParaCadastro", () => {
  cy.fixture("registro").then(({ usuarioValido: { email } }) => {
    cy.get(login.campoEmailCriarConta).type(email)
  })
})

Cypress.Commands.add("clicarEmIrParaCadastro", () => {
  cy.wait(1000).get(login.btnCriarConta).click()
})