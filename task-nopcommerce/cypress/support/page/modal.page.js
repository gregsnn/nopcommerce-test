const modal =
  "body > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-draggable.ui-resizable";
const tituloModal = ".ui-dialog-title";
const mensagemModal = "div#terms-of-service-warning-box > p";
const fecharModal = "button[title='Close']";

Cypress.Commands.add("validarModal", (titulo, mensagem) => {
  cy.get(modal).should("be.visible");
  cy.get(tituloModal).should("have.text", titulo);
  cy.get(mensagemModal).should("have.text", mensagem);
  cy.get(fecharModal).click();
  cy.get(modal).should("not.be.visible");
});
