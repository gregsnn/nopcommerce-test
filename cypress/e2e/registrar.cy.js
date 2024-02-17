/// <reference types="cypress" />

describe("Registar usuario", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.gerarDadosRegistro();
  });

  it("com dados validos", () => {
    cy.navegarParaRegistro();

    cy.readFile("cypress/fixtures/usuario.json").then((data) => {
      cy.registrar(data.usuario_valido);
    });

    cy.validarRegistro();

    cy.url().should("eq", "https://demo.nopcommerce.com/");
  });

  it.only("partindo da tela de login com dados validos", () => {
    cy.navegarParaLogin();
    cy.navegarDeLoginParaCadastro();

    cy.readFile("cypress/fixtures/usuario.json").then((data) => {
      cy.registrar(data.usuario_valido);
    });

    cy.validarRegistro();

    cy.url().should("eq", "https://demo.nopcommerce.com/");
  });

  it("com dados requeridos vazios", () => {
    const CAMPOS_REQUERIDOS = [
      "FirstName",
      "LastName",
      "Email",
      "Password",
      "ConfirmPassword",
    ];

    cy.navegarParaRegistro();

    cy.registrarDadosVazios();

    CAMPOS_REQUERIDOS.forEach((campo) => {
      cy.validarRegistroDadosVazios(campo);
    });
  });

  it("com email invalido", () => {
    cy.navegarParaRegistro();

    cy.readFile("cypress/fixtures/usuario.json").then((data) => {
      cy.registrar(data.usuario_email_invalido);
    });

    cy.validarRegistroComEmailInvalido();
  });

  it("com email repetido", () => {
    cy.navegarParaRegistro();

    cy.readFile("cypress/fixtures/usuario.json").then((data) => {
      cy.registrar(data.usuario_email_repetido);
    });

    cy.validarRegistroComEmailRepetido();
  });

  it("com senha invalida", () => {
    cy.navegarParaRegistro();

    cy.readFile("cypress/fixtures/usuario.json").then((data) => {
      cy.registrar(data.usuario_senha_invalida);
    });

    cy.validarRegistroComSenhaInvalida();
  });

  it("com senhas nao iguais", () => {
    cy.navegarParaRegistro();

    cy.readFile("cypress/fixtures/usuario.json").then((data) => {
      cy.registrar(data.usuario_senhas_nao_iguais);
    });

    cy.validarRegistroComSenhasNaoIguais();
  });
});
