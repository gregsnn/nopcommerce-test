const botaoRegistrar = ".button-1.register-button";
const botaoLogar = ".button-1.login-button";

const inputEmail = "input#Email";
const inputSenha = "input#Password";
const inputLembrarUsuario = "input#RememberMe";
const linkEsqueceuSenha = "form[method='post'] a";

Cypress.Commands.add("navegarDeLoginParaCadastro", () => {
  cy.get(botaoRegistrar).click();
});

Cypress.Commands.add("logar", (usuario) => {
  const { email, senha, lembrarUsuario } = usuario;

  cy.get(inputEmail).type(email);
  cy.get(inputSenha).type(senha);
  cy.get(inputLembrarUsuario)[lembrarUsuario]();
  cy.get(botaoLogar).click();
});

Cypress.Commands.add("setupLogin", () => {
  cy.gerarDadosRegistro();

  cy.navegarParaRegistro();

  cy.readFile("cypress/fixtures/registro.json").then((data) => {
    cy.registrar(data.usuario_valido);
    cy.gerarDadosLogin(data.usuario_valido);
  });
});
