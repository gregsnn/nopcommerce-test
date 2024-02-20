/// <reference types="cypress" />

describe('Registro de usuário', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit("/")
  })

  it('Consegue se cadastrar com sucesso', () => {
    cy.gerarDadosCadastro()
  
    cy.clicarIrParaEmLogin()

    cy.fixture("registro").then(({ usuarioValido }) => {
      cy.preencherEmailParaCadastro(usuarioValido.email)
      cy.clicarEmIrParaCadastro()
    
      cy.preencherCamposDeCadastro(usuarioValido)
      cy.clicarEmCadastrar()
    }) 

    cy.validarCadastro()
  })

  it('Tenta se cadastrar com email inválido', () => {
    cy.clicarIrParaEmLogin()

    cy.preencherEmailParaCadastro("email@invalido")
    cy.clicarEmIrParaCadastro()
  
    cy.validarErroCriarConta("Invalid email address.")
  })
})