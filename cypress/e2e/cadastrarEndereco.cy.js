/// <reference types="cypress"/>

describe("cadastro de endereço", () => {
  beforeEach(() => {
    cy.visit("/")

    cy.gerarDadosRegistro();

    cy.navegarParaRegistro();
  
    cy.readFile("cypress/fixtures/registro.json").then((data) => {
      cy.registrar(data.usuario_valido);
      cy.gerarDadosLogin(data.usuario_valido);
      cy.gerarDadosEndereco(data.usuario_valido);
    });
  
    cy.navegarParaLogin();
  
    cy.readFile("cypress/fixtures/login.json").then((data) => {
      cy.logar(data.usuario_valido);
    });
  });

  it("cadastrar um endereço com sucesso", () => {
    cy.navegarParaMinhaConta();
    cy.navegarParaMenuEndereco();
    cy.entrarEmTelaDeAdicionarEndereco();

    cy.readFile("cypress/fixtures/endereco.json").then((data) => {
      cy.preencherEndereco(data.endereco_valido);
      cy.validarEnderecoCadastrado(data.endereco_valido, 1);
    });
  })

  it("cadastrar dois endereços com sucesso", () => {
    const quantidadeDeEnderecos = 2;
    
    cy.navegarParaMinhaConta();
    cy.navegarParaMenuEndereco();

    for(let i = 1; i <= quantidadeDeEnderecos; i += 1) {
      cy.entrarEmTelaDeAdicionarEndereco();
      
      cy.readFile("cypress/fixtures/endereco.json").then((data) => {
        cy.preencherEndereco(data.endereco_valido);
        cy.validarEnderecoCadastrado(data.endereco_valido, i);
      });

      cy.readFile("cypress/fixtures/registro.json").then((data) => {
        cy.gerarDadosEndereco(data.usuario_valido)
      })
    }
  })

  it("cadastrar endereco sem preencher nenhum campo", () => {    
    cy.navegarParaMinhaConta();
    cy.navegarParaMenuEndereco();
    cy.entrarEmTelaDeAdicionarEndereco();

    const mensagensDeErro = {
      primeiroNome: "First name is required.",
      ultimoNome: "Last name is required.",
      email: "Email is required.",
      cidade: "City is required",
      endereco: "Street address is required",
      codigoPostal: "Zip / postal code is required",
      telefone: "Phone is required",
    }

    cy.salvarEndereco();
    cy.validarErroEndereco(mensagensDeErro);
  })
})