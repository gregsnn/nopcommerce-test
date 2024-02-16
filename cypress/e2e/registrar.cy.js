/// <reference types="cypress" />

describe("Registar usuario", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("com dados validos sem newsletter", () => {
    cy.gerarDadosRegistroValido();

    cy.navegarParaRegistro();

    cy.readFile("cypress/fixtures/usuario.json").then((data) => {
      cy.registrar(data.usuario_sem_news);
    });

    cy.validarRegistro();

    cy.url().should("eq", "https://demo.nopcommerce.com/");
  });

  it("com dados validos com newsletter", () => {
    cy.gerarDadosRegistroValido();

    cy.navegarParaRegistro();

    cy.readFile("cypress/fixtures/usuario.json").then((data) => {
      cy.registrar(data.usuario_com_news);
    });

    cy.validarRegistro();

    cy.url().should("eq", "https://demo.nopcommerce.com/");
  });
});
