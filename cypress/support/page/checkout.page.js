import { random } from "../../utils/formatador";

const linkNomeProduto =
  "#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.product > a";
const inputQuantidade =
  "#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.quantity > input";
const btnRemoverProduto =
  "#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.remove-from-cart > button";
const preco =
  "#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.unit-price > span";
const precoTotal =
  "#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.subtotal > span";

const btnAtualizaCarrinho = "#updatecart";

const selecionarEmbruloDePresente = "#checkout_attribute_1";

const inputCupom = "#discountcouponcode";
const btnAplicaCupom = "#applydiscountcouponcode";
const inputGiftCard = "#giftcardcouponcode";
const btnApplyGiftCard = "#applygiftcardcouponcode";

const termsCheckbox = "#termsofservice";

const btnCheckout = "#checkout";

const selectPais = "#BillingNewAddress_CountryId";
const selectEstado = "#BillingNewAddress_StateProvinceId";
const inputCidade = "#BillingNewAddress_City";
const inputEndereco = "#BillingNewAddress_Address1";
const inputZipCode = "#BillingNewAddress_ZipPostalCode";
const inputTelefone = "#BillingNewAddress_PhoneNumber";
const btnContinuarEndereco =
  "#billing-buttons-container > button.button-1.new-address-next-step-button";

const btnContinuarMetodoEntrega = "#shipping-method-buttons-container > button";
const btnContinuarMetodoPagamento =
  "#payment-method-buttons-container > button";
const btnContinuarInfo = "#payment-info-buttons-container > button";
const btnConfirmarCheckout = "#confirm-order-buttons-container > button";

const textoSucesso =
  "body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body.checkout-data > div > div.title > strong";

const EMBRULHO_DE_PRESENTE = ["1", "2"];

Cypress.Commands.add("fluxoDeCompra", () => {
  cy.get(selecionarEmbruloDePresente).select(random(EMBRULHO_DE_PRESENTE));
  cy.get(termsCheckbox).click();
  cy.get(btnCheckout).click();
  cy.get(btnContinuarEndereco).click();
  cy.get(btnContinuarMetodoEntrega).click();
  cy.get(btnContinuarMetodoPagamento).click();
  cy.get(btnContinuarInfo).click();
  cy.get(btnConfirmarCheckout).click();
});

Cypress.Commands.add("fluxoDeCompraComEndereco", (produto) => {
  cy.get(selecionarEmbruloDePresente).select(random(EMBRULHO_DE_PRESENTE));
  cy.get(termsCheckbox).click();
  cy.get(btnCheckout).click();

  cy.readFile("cypress/fixtures/endereco.json").then((data) => {
    cy.preencherEnderecoCheckout(data.endereco_valido, "BillingNewAddress");
  });

  cy.get(btnContinuarEndereco).click();
  cy.get(btnContinuarMetodoEntrega).click();
  cy.get(btnContinuarMetodoPagamento).click();
  cy.get(btnContinuarInfo).click();
  cy.get(btnConfirmarCheckout).click();
});

Cypress.Commands.add("fluxoDeCompraComoConvidado", (produto) => {
  cy.get(selecionarEmbruloDePresente).select(random(EMBRULHO_DE_PRESENTE));
  cy.get(termsCheckbox).click();
  cy.get(btnCheckout).click();

  cy.navegarParaCheckoutComoConvidado();

  cy.readFile("cypress/fixtures/endereco.json").then((data) => {
    cy.preencherEnderecoCheckoutComoConvidado(
      data.endereco_valido_completo,
      "BillingNewAddress",
    );
  });

  cy.get(btnContinuarEndereco).click();
  cy.get(btnContinuarMetodoEntrega).click();
  cy.get(btnContinuarMetodoPagamento).click();
  cy.get(btnContinuarInfo).click();
  cy.get(btnConfirmarCheckout).click();
});

Cypress.Commands.add("fluxoDeCompraSemRegistro", (produto) => {
  cy.gerarDadosRegistro();

  cy.get(termsCheckbox).click();
  cy.get(btnCheckout).click();

  cy.navegarDeLoginParaCadastro();

  cy.readFile("cypress/fixtures/registro.json").then((data) => {
    cy.registrar(data.usuario_valido);
    cy.gerarDadosLogin(data.usuario_valido);
    cy.gerarDadosEndereco(data.usuario_valido);
  });

  cy.navegarParaLogin();

  cy.readFile("cypress/fixtures/login.json").then((data) => {
    cy.logar(data.usuario_valido);
  });

  cy.get(selecionarEmbruloDePresente).select(random(EMBRULHO_DE_PRESENTE));
  cy.get(termsCheckbox).click();
  cy.get(btnCheckout).click();

  cy.readFile("cypress/fixtures/endereco.json").then((data) => {
    cy.preencherEnderecoCheckout(data.endereco_valido, "BillingNewAddress");
  });

  cy.get(btnContinuarEndereco).click();
  cy.get(btnContinuarMetodoEntrega).click();
  cy.get(btnContinuarMetodoPagamento).click();
  cy.get(btnContinuarInfo).click();
  cy.get(btnConfirmarCheckout).click();
});

Cypress.Commands.add("validarCheckout", (produto) => {
  cy.get(textoSucesso).should(
    "have.text",
    "Your order has been successfully processed!",
  );
});

Cypress.Commands.add("clicarBtnCheckout", () => {
  cy.get(btnCheckout).click();
});
