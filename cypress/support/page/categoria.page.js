const btnAdicionarAoCarrinhoGenerico = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.products-container > div.products-wrapper > div > div > div:nth-child(*) > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button"
const mensagemSucesso = "#bar-notification > div > p";
const btnFecharNotificacao = "#bar-notification > div > span";
const itemsMiniCarrinho = "#flyout-cart > div > div.items > div.item";
const contadorProdutos = "#topcartlink > a > span.cart-qty";
const btnCarrinho = "#topcartlink > a";
const btnPaginaDoProdutoGenerico = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.products-container > div.products-wrapper > div > div > div:nth-child(*) > div > div.details > h2 > a"

Cypress.Commands.add("adicionarAoCarrinho", (idProduto) => {
  const btnSelecionado = btnAdicionarAoCarrinhoGenerico.replace("*", idProduto)
  cy.wait(500).get(btnSelecionado).trigger("click");
});

Cypress.Commands.add("validarAdicao", (quantidadeEsperadaItems, quantidadeEsperadaTotal) => {
  cy.wait(500).get(mensagemSucesso).should("have.text", "The product has been added to your shopping cart");
  cy.get(btnFecharNotificacao).click();

  cy.get(contadorProdutos).should("have.text", `(${quantidadeEsperadaTotal})`);

  cy.get(btnCarrinho).trigger("mouseover")
  cy.get(itemsMiniCarrinho).then((items) => {
    expect(items.length).to.be.equal(quantidadeEsperadaItems);
  })
});

Cypress.Commands.add("navegarParaPaginaDoProduto", (idProduto) => {
  const btnProdutoSelecionado = btnPaginaDoProdutoGenerico.replace("*", idProduto)
  cy.get(btnProdutoSelecionado).click();
});