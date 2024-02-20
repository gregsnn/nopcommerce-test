import seletores from '../selector/criarConta.selector'

Cypress.Commands.add("preencherCamposDeCadastro", (usuario) => {
  cy.get(seletores.campoPrimeiroNome).type(usuario.primeiroNome)
  cy.get(seletores.campoUltimoNome).type(usuario.ultimoNome)
  cy.get(seletores.campoSenha).type(usuario.senha)
  cy.get(seletores.campoDiaAniversario).select(usuario.diaNascimento)
  cy.get(seletores.campoMesAniversario).select(usuario.mesNascimento)
  cy.get(seletores.campoAnoAniversario).select(usuario.anoNascimento.toString())
  cy.get(seletores.campoNewsLetter)[usuario.newsLetter]()
  cy.get(seletores.campoOfertas)[usuario.ofertas]()
  cy.get(seletores.campoEmpresa).type(usuario.nomeEmpresa)
  cy.get(seletores.campoEndereco).type(usuario.endereco)
  cy.get(seletores.campoSegundoEndereco).type(usuario.segundoEndereco)
  cy.get(seletores.campoCidade).type(usuario.cidade)
  cy.get(seletores.campoEstado).select(usuario.estado)
  cy.get(seletores.campoCodigoPostal).type(usuario.codigoPostal)
  cy.get(seletores.campoTelefoneResidencial).type(usuario.numeroResidencial)
  cy.get(seletores.campoTelefoneMovel).type(usuario.numeroCelular)    
})

Cypress.Commands.add("clicarEmCadastrar", () => {
  cy.get(seletores.btnRegistrar).click()
})

Cypress.Commands.add("validarCadastro", () => {
  cy.get(seletores.elementoPaginaMinhaConta).should("have.text", "My account")
})