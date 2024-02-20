import cadastro from "./cadastro"

Cypress.Commands.add("gerarDadosCadastro", () => {
  cy.writeFile("cypress/fixtures/registro.json", {
    usuarioValido: {
      ...cadastro
    }
  })
})
