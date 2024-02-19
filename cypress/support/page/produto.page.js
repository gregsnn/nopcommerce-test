const inputQuantidade = "#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.add-to-cart > div > input";
const btnAdicionar = "#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.add-to-cart > div > button"
const menssagemDeErro = "#bar-notification > div > p";

Cypress.Commands.add("adicionarProdutos", (quantidadeProdutos) => {
  cy.get(inputQuantidade).clear().type(quantidadeProdutos);
  cy.get(btnAdicionar).click();
})

Cypress.Commands.add("validarErro", (menssagem) => {
  cy.get(menssagemDeErro).should("have.text", menssagem);
})