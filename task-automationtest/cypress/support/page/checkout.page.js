import seletores from '../selector/checkout.selector';
import modal from '../selector/modalCheckout.selector';

Cypress.Commands.add("checkoutSucessoComDadosPrevios", () => {
  cy.get(seletores.btnProceedToCheckout).click();
  cy.get(seletores.btnProceedToCheckoutAddress).click();
  cy.get(seletores.inputTermsOfService).click();
  cy.get(seletores.btnProceedToCheckoutShipping).click();
  cy.get(seletores.btnPayByBankWire).click();
  cy.get(seletores.btnConfirmMyOrder).click();
});

Cypress.Commands.add("checkoutSemAceitarTermos", () => {
  cy.get(seletores.btnProceedToCheckout).click();
  cy.get(seletores.btnProceedToCheckoutAddress).click();
  cy.get(seletores.btnProceedToCheckoutShipping).click();
});

Cypress.Commands.add("validarCheckoutComSucesso", () => {
  cy.get(seletores.successMessage).should("have.text", "Your order on My Store is complete.")
});

Cypress.Commands.add("validarModalDeErro", () => {
  cy.get(modal.text).should("have.text", "You must agree to the terms of service before continuing.")
});