/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.setupLogin();
  });

  it.only("com dados validos", () => {
    cy.navegarParaLogin();

    cy.readFile("cypress/fixtures/login.json").then((data) => {
      cy.logar(data.usuario_valido);
    });
  });
});
