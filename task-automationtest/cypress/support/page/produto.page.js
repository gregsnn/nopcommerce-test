import produto from '../selector/produto.selector'

Cypress.Commands.add("setarQuantidade", (quantidade) => {
  cy.get(produto.campoQuantidade).clear().type(quantidade)
})

Cypress.Commands.add("clicarAdicionarProduto", () => {
  cy.wait(500).get(produto.btnAdicionarAoCarrinho).click()
})

Cypress.Commands.add("validarErroPaginaDeProduto", (menssagem) => {
  cy.get(produto.menssagemDeErro).should("have.text", menssagem)
})