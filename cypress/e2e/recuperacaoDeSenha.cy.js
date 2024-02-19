/// <reference types="cypress" />

describe("Recuperação de senha", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.gerarDadosRegistro();
    cy.navegarParaRegistro();

    cy.readFile("cypress/fixtures/registro.json").then((data) => {
      cy.registrar(data.usuario_valido);
    });

    cy.navegarParaLogin();
  });

  it("Recuperação de senha com dados válidos", () => {
    const mensagemDeSucesso = "Email with instructions has been sent to you.";

    cy.navegarParaRecuperaçãoDeSenha();
    
    cy.readFile("cypress/fixtures/registro.json", ({ usuario_valido: { email } }) => {
      cy.recuperarSenha(email);      
      cy.validarRecuperacaoDeSenha(mensagemDeSucesso);
    });
    
  });

  it("Recuperação de senha com email incorreto", () => {
    const mensagemDeErro = "Email not found.";

    cy.navegarParaRecuperaçãoDeSenha();
    
    
    cy.recuperarSenha("invalido@email.com");     
    
    cy.validarRecuperacaoDeSenha(mensagemDeErro);
  });
})