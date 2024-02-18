const menuMudarSenha = ".change-password > a";
const menuEnderecos = ".customer-addresses > a";

const botaoAdicionarEndereco = ".add-address-button.button-1";
const botaoEditarEndereco = ".button-2.edit-address-button";
const botaoDeletarEndreco = ".button-2.delete-address-button";
const botaoSalvarEndereco = ".button-1.save-address-button";

const inputAntigaSenha = "input#OldPassword";
const inputNovaSenha = "input#NewPassword";
const inputConfirmarNovaSenha = "input#ConfirmNewPassword";
const botaoMudarSenha = ".button-1.change-password-button";

Cypress.Commands.add("navegarParaMenuEndereco", () => {
  cy.get(menuEnderecos).click();
});

Cypress.Commands.add("entrarEmTelaDeAdicionarEndereco", () => {
  cy.get(botaoAdicionarEndereco).click();
});

Cypress.Commands.add("entrarEmTelaDeEditarEndereco", () => {
  cy.get(botaoEditarEndereco).click();
});

Cypress.Commands.add("deletarEndereco", () => {
  cy.get(botaoDeletarEndreco).click();
});

Cypress.Commands.add("salvarEndereco", () => {
  cy.get(botaoSalvarEndereco).click();
});
