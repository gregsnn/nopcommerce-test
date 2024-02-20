/// <reference types="cypress" />

describe("Adicionar produto no carrinho", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("um produto", () => {
    const variedadeProdutos = 1;
    const quantidadeProdutos = 1;

    cy.navegarParaCategoriaLivros();

    cy.adicionarAoCarrinho(1);

    cy.validarAdicao(variedadeProdutos, quantidadeProdutos);
  });

  it("dois produtos diferentes", () => {
    const variedadeProdutos = 2;
    const quantidadeProdutos = 2;

    cy.navegarParaCategoriaLivros();

    cy.adicionarAoCarrinho(1);
    cy.adicionarAoCarrinho(2);
  
    cy.validarAdicao(variedadeProdutos, quantidadeProdutos);
  });

  it("um produto com quantidade maior que 1", () => {
    const variedadeProdutos = 1;
    const quantidadeProdutos = 3;

    cy.navegarParaCategoriaLivros();

    cy.navegarParaPaginaDoProduto(3);

    cy.adicionarProdutos(quantidadeProdutos);
    cy.validarAdicao(variedadeProdutos, quantidadeProdutos);
  });

  it("um produto com quantidade zero", () => {
    const menssageDeErro = "Quantity should be positive";
    const quantidadeProdutos = 0;

    cy.navegarParaCategoriaLivros();

    cy.navegarParaPaginaDoProduto(2);

    cy.adicionarProdutos(quantidadeProdutos);
    cy.validarErro(menssageDeErro);
  });

  it("um produto com quantidade acima de 10000", () => {
    const menssageDeErro = "The maximum quantity allowed for purchase is 10000.";
    const quantidadeProdutos = 10001;

    cy.navegarParaCategoriaLivros();

    cy.navegarParaPaginaDoProduto(2);

    cy.adicionarProdutos(quantidadeProdutos);
    cy.validarErro(menssageDeErro);
  });
})