/// <reference types="cypress" />

describe('Checkout', () => {
  beforeEach(() => {
    cy.visit("/")

    cy.gerarDadosCadastro()

    cy.clicarIrParaEmLogin()
    
    cy.readFile("cypress/fixtures/registro.json").then(({ usuarioValido }) => {
      cy.preencherEmailParaCadastro(usuarioValido.email)
      cy.wait(500).clicarEmIrParaCadastro()
    
      cy.preencherCamposDeCadastro(usuarioValido)
      cy.clicarEmCadastrar()

      cy.clicarEmDeslogar()
    })

    cy.clicarIrParaEmLogin()
    
    cy.fixture("registro").then(({ usuarioValido: {email, senha} }) => {
      cy.preencherEmail(email)
      cy.preencherSenha(senha)

      cy.clicarEmLogar()
    })
  })

  it("Consegue finalizar a compra", () => {
    cy.clicarCategoriaWomen()

    cy.adicionarProdutoAoCarrinho(1)
    cy.clicarContinuarComprando()

    cy.adicionarProdutoAoCarrinho(2)
    cy.clicarContinuarComprando()

    cy.validarAdicaoDeProduto(2, 2)
    
    cy.clicarEmCheckout();

    cy.checkoutSucessoComDadosPrevios();

    cy.validarCheckoutComSucesso();
  });

  it.only("Nao consegue finalizar a compra", () => {
    cy.clicarCategoriaWomen()

    cy.adicionarProdutoAoCarrinho(1)
    cy.clicarContinuarComprando()

    cy.adicionarProdutoAoCarrinho(2)
    cy.clicarContinuarComprando()

    cy.validarAdicaoDeProduto(2, 2)
    
    cy.clicarEmCheckout();

    cy.checkoutSemAceitarTermos();

    cy.validarModalDeErro();
  });
});