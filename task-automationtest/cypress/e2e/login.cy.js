/// <reference types="cypress" />

describe('Login', () => {
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

    cy.visit("/")
  })

  it("Consegue fazer login com sucesso", () => {
    cy.clicarIrParaEmLogin()
    
    cy.fixture("registro").then(({ usuarioValido: {email, senha} }) => {
      cy.preencherEmail(email)
      cy.preencherSenha(senha)

      cy.clicarEmLogar()
    })

    cy.validarLogin()
  })

  it("Não consegue fazer login com email valido e senha invalida", () => {
    cy.clicarIrParaEmLogin()
    
    cy.fixture("registro").then(({ usuarioValido: {email} }) => {
      cy.preencherEmail(email)
      cy.preencherSenha("senha_invalida")

      cy.clicarEmLogar()
    })

    cy.validarErroLogin("Authentication failed.")
  })

  it("Não consegue fazer login com email invalido e senha valida", () => {
    cy.clicarIrParaEmLogin()
    
    cy.fixture("registro").then(({ usuarioValido: {senha} }) => {
      cy.preencherEmail("email@invalido.com")
      cy.preencherSenha(senha)

      cy.clicarEmLogar()
    })

    cy.validarErroLogin("Authentication failed.")
  })

  it("Não consegue fazer login com email mal formatado e senha valida", () => {
    cy.clicarIrParaEmLogin()
    
    cy.fixture("registro").then(({ usuarioValido: {senha} }) => {
      cy.preencherEmail("email@invalido")
      cy.preencherSenha(senha)

      cy.clicarEmLogar()
    })

    cy.validarErroLogin("Invalid email address.")
  })
})