import geraCadastro from "./cadastro"
 
Cypress.Commands.add("gerarDadosCadastro", () => {
  cy.writeFile("cypress/fixtures/registro.json", {
    usuarioValido: {
      ...geraCadastro()
    }
  })
})
