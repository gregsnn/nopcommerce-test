const botaoRegistrar = ".button-1.register-button";
const botaoLogar = ".button-1.login-button";

const inputEmail = "input#Email";
const inputSenha = "input#Password";
const inputLembrarUsuario = "input#RememberMe";
const linkEsqueceuSenha = "form[method='post'] a";

const campoErro = "#Email-error";
const mensagemErroLogin =
  "body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.message-error.validation-summary-errors";

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

Cypress.Commands.add("logarComDadosVazios", () => {
  cy.get(botaoLogar).click();
});

Cypress.Commands.add("validarLoginInvalido", () => {
  cy.get(mensagemErroLogin).should("exist");
});

Cypress.Commands.add("validarLoginCampoVazio", () => {
  cy.get(campoErro).should("exist");
});

Cypress.Commands.add("setupLogin", () => {
  cy.gerarDadosRegistro();

  cy.navegarParaRegistro();

  cy.readFile("cypress/fixtures/registro.json").then((data) => {
    cy.registrar(data.usuario_valido);
    cy.gerarDadosLogin(data.usuario_valido);
  });
});
