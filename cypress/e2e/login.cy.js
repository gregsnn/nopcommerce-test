/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.setupLogin();
  });

  it("com dados validos", () => {
    cy.navegarParaLogin();

    cy.readFile("cypress/fixtures/login.json").then((data) => {
      cy.logar(data.usuario_valido);
    });

    cy.validarLogado();
  });

  it("com dados invalidos", () => {
    cy.navegarParaLogin();

    cy.readFile("cypress/fixtures/login.json").then((data) => {
      cy.logar(data.usuario_invalido);
    });

    cy.validarLoginInvalido();
    cy.validarDeslogado();
  });

  it("com campos vazios", () => {
    cy.navegarParaLogin();

    cy.logarComDadosVazios();

    cy.validarLoginCampoVazio();
    cy.validarDeslogado();
  });
});
