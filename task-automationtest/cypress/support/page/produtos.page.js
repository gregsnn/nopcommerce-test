import produtos from '../selector/produtos.selector'

Cypress.Commands.add("adicionarProdutoAoCarrinho", (produto) => {
  cy.get(produtos.btnNomeProduto.replace("*", produto)).trigger("mouseover")
  cy.get(produtos.btnAdicionarAoCarrinho.replace("*", produto)).click()
})

Cypress.Commands.add("irParaPaginaDoProtudo", (produto) => {
  cy.get(produtos.btnNomeProduto.replace("*", produto)).trigger("mouseover")
  cy.get(produtos.btnIrPraPaginaDeProduto.replace("*", produto)).click()
})

Cypress.Commands.add("validarAdicaoDeProduto", (quantidadeTotalEsperada, quantidadeItensEsperada) => {
  cy.get(produtos.contadorDeProdutosDoCarrinho).scrollIntoView().should("have.text", quantidadeTotalEsperada)

  cy.get(produtos.btnIrParaCheckout).trigger("mouseover")

  cy.get(produtos.produtosNoCarrinho).then((items) => {
    expect(items.length).to.be.equal(quantidadeItensEsperada)
  })
})