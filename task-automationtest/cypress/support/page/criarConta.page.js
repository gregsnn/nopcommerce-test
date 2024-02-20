// const campoGenero = "#id_gender";
// const campoPrimeiroNome = "#customer_firstname"
// const campoUltimoNome = "#customer_lastname"
// const campoEmail = "#email"
// const campoSenha = "#passwd"
// const campoDiaAniversario = "#days"
// const opcaoDiaAniversario = "#days > option:nth-child(*)"
// const campoMesAniversario = "#months"
// const opcaoMesAniversario = "#months > option:nth-child(*)"
// const campoAnoAniversario = "#years"
// const opcaoAnoAniversario = "#years > option:nth-child(*)"
// const btnRegistrar = "#submitAccount"
// const menssagemSucesso = "#center_column > p.alert.alert-success"
// const menssagemErro = "#center_column > div > ol > li"

import seletores from '../selector/criarConta.selector'

Cypress.Commands.add("preencherCamposDeCadastro", () => {
  cy.fixture("registro").then(({ usuarioValido }) => {
    cy.get(seletores.campoPrimeiroNome).type(usuarioValido.primeiroNome)
    cy.get(seletores.campoUltimoNome).type(usuarioValido.ultimoNome)
    cy.get(seletores.campoSenha).type(usuarioValido.senha)
    cy.get(seletores.campoDiaAniversario).select(usuarioValido.diaNascimento)
    cy.get(seletores.campoMesAniversario).select(usuarioValido.mesNascimento)
    cy.get(seletores.campoAnoAniversario).wait(1000).select(usuarioValido.anoNascimento.toString())
    cy.get(seletores.campoNewsLetter)[usuarioValido.newsLetter]()
    cy.get(seletores.campoOfertas)[usuarioValido.ofertas]()
    cy.get(seletores.campoEmpresa).type(usuarioValido.nomeEmpresa)
    cy.get(seletores.campoEndereco).type(usuarioValido.endereco)
    cy.get(seletores.campoSegundoEndereco).type(usuarioValido.segundoEndereco)
    cy.get(seletores.campoCidade).type(usuarioValido.cidade)
    cy.get(seletores.campoEstado).select(usuarioValido.estado)
    cy.get(seletores.campoCodigoPostal).type(usuarioValido.codigoPostal)
    cy.get(seletores.campoTelefoneResidencial).type(usuarioValido.numeroResidencial)
    cy.get(seletores.campoTelefoneMovel).type(usuarioValido.numeroCelular)    
  })
})

Cypress.Commands.add("clicarEmCadastrar", () => {
  cy.get(seletores.btnRegistrar).click()
})

Cypress.Commands.add("validarCadastro", () => {
  cy.get(seletores.elementoPaginaMinhaConta).should("have.text", "My account")
})