import modal from '../selector/modalProduto.selector'

Cypress.Commands.add("clicarContinuarComprando", () => {
  cy.wait(500).get(modal.btnContinuarComprando).click()
})

Cypress.Commands.add("clicarIrParaCheckout", () => {
  cy.get(modal.btnIrParaCheckout).click()
})

