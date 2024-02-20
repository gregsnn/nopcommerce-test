/// <reference types="cypress" />

describe('Registro de usuário', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Adicionar um produto ao carrinho", () => {
    cy.clicarCategoriaWomen()

    cy.adicionarProdutoAoCarrinho(1)
    cy.clicarContinuarComprando()

    cy.validarAdicaoDeProduto(1, 1)
  })

  it("Adicionar dois produtos diferentes ao carrinho", () => {
    cy.clicarCategoriaWomen()

    cy.adicionarProdutoAoCarrinho(1)
    cy.clicarContinuarComprando()

    cy.adicionarProdutoAoCarrinho(2)
    cy.clicarContinuarComprando()

    cy.validarAdicaoDeProduto(2, 2)
  })

  it("Adicionar um produto com quantidade maior que 1", () => {
    cy.clicarCategoriaWomen()

    cy.irParaPaginaDoProtudo(1)
    cy.setarQuantidade(5)
    cy.clicarAdicionarProduto()
    cy.clicarContinuarComprando()  

    cy.validarAdicaoDeProduto(5, 1)
  })

  it("Adicionar um produto com quantidade zero", () => {
    cy.clicarCategoriaWomen()

    cy.irParaPaginaDoProtudo(1)
    cy.setarQuantidade(0)
    cy.clicarAdicionarProduto()

    cy.validarErroPaginaDeProduto("Null quantity.\n")
  })

  it("Adicionar um produto com quantidade maior que o estoque", () => {
    cy.clicarCategoriaWomen()

    cy.irParaPaginaDoProtudo(1)
    cy.setarQuantidade(100000)
    cy.clicarAdicionarProduto()

    cy.validarErroPaginaDeProduto("There are not enough products in stock.\n")
  })
})