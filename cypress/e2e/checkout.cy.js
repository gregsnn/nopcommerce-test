/// <reference types="cypress" />

describe("Checkout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("com dados pré cadastrados", () => {
    cy.setupCheckoutComEndereco();

    cy.navegarParaCategoriaLivros();

    cy.adicionarAoCarrinho(1);
    cy.validarAdicao(1, 1);

    cy.wait(1000);
    cy.navegarParaCarrinho();

    cy.fluxoDeCompra();

    cy.validarCheckout();

    cy.deslogar();
    cy.validarDeslogado();
  });

  it("sem endereco cadastrado", () => {
    cy.navegarParaCategoriaLivros();

    cy.adicionarAoCarrinho(1);
    cy.validarAdicao(1, 1);

    cy.wait(1000);
    cy.navegarParaCarrinho();

    cy.fluxoDeCompraSemRegistro();

    cy.validarCheckout();

    cy.deslogar();
    cy.validarDeslogado();
  });

  it("com mais de 1 produto", () => {
    cy.setupCheckoutComEndereco();

    cy.navegarParaCategoriaLivros();

    cy.adicionarAoCarrinho(1);

    cy.adicionarAoCarrinho(2);
    cy.validarAdicao(2, 2);

    cy.wait(1000);
    cy.navegarParaCarrinho();

    cy.fluxoDeCompra();

    cy.validarCheckout();

    cy.deslogar();
    cy.validarDeslogado();
  });

  it("sem login e como convidado", () => {
    cy.gerarDadosEndereco();

    cy.navegarParaCategoriaLivros();

    cy.adicionarAoCarrinho(1);
    cy.validarAdicao(1, 1);

    cy.wait(1000);
    cy.navegarParaCarrinho();

    cy.wait(1000);
    cy.fluxoDeCompraComoConvidado();

    cy.validarCheckout();

    cy.validarDeslogado();
  });

  it("sem aceitar termos", () => {
    cy.setupCheckoutSemEndereco();

    cy.navegarParaCategoriaLivros();

    cy.adicionarAoCarrinho(1);
    cy.validarAdicao(1, 1);

    cy.wait(1000);
    cy.navegarParaCarrinho();

    cy.wait(1000);
    cy.clicarBtnCheckout();

    cy.validarModal(
      "Terms of service",
      "Please accept the terms of service before the next step.",
    );
  });
});
