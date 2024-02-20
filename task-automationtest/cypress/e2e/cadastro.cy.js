describe('Registro de usuário', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit("/")

    cy.gerarDadosCadastro()
  })

  it('Consegue se cadastrar com sucesso', () => {
    cy.clicarIrParaEmLogin()

    cy.preencherEmailParaCadastro()
    cy.clicarEmIrParaCadastro()
    
    cy.preencherCamposDeCadastro()
    cy.clicarEmCadastrar()

    cy.validarCadastro()
  })
})