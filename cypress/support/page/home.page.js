const botaoMinhaConta = ".ico-account";
const botaoRegistro = ".ico-register";
const botaoLogin = ".ico-login";
const botaoListaDesejos = ".ico-wishlist > .wishlist-label";
const botaoCarrinho = ".cart-label";
const navLinkLivros = "body > div.master-wrapper-page > div.header-menu > ul.top-menu.notmobile > li:nth-child(5) > a"

Cypress.Commands.add("navegarParaRegistro", () => {
  cy.get(botaoRegistro).click();
});

Cypress.Commands.add("navegarParaHome", () => {
  cy.get(botaoRegistro).click();
});

Cypress.Commands.add("navegarParaLogin", () => {
  cy.get(botaoLogin).click();
});

Cypress.Commands.add("navegarParaMinhaConta", () => {
  cy.get(botaoMinhaConta).click();
});

Cypress.Commands.add("navegarParaListaDesejos", () => {
  cy.get(botaoListaDesejos).click();
});

Cypress.Commands.add("navegarParaCarrinho", () => {
  cy.get(botaoCarrinho).click();
});

Cypress.Commands.add("navegarParaCategoriaLivros", () => {
  cy.get(navLinkLivros).click();
});
