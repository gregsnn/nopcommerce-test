import { formatarSeletor } from "../../utils/formatador";

const inputGenero = "input#gender-*";
const inputPrimeiroNome = "input#FirstName";
const inputSobrenome = "input#LastName";
const selecionarDiaNascimento = "select[name='DateOfBirthDay']";
const selecionarMesNascimento = "select[name='DateOfBirthMonth']";
const selecionarAnoNascimento = "select[name='DateOfBirthYear']";
const inputEmail = "input#Email";
const inputNomeEmpresa = "input#Company";
const inputNewsletter = "input#Newsletter";
const inputSenha = "input#Password";
const inputConfirmarSenha = "input#ConfirmPassword";
const botaoRegistrar = "button#register-button";
const validacaoDeRegistro =
  "body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.result";
const botaoContinuarParaHome =
  "body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.buttons > a";
const textoErroFormulario = "form[method='post']  ul > li";
const inputErro = "#*-error";

// ACOES
Cypress.Commands.add("registrar", (usuario) => {
  const {
    genero,
    nome,
    sobrenome,
    diaNascimento,
    mesNascimento,
    anoNascimento,
    email,
    nomeEmpresa,
    newsletter,
    senha,
    confirmarSenha,
  } = usuario;

  cy.get(formatarSeletor(inputGenero, genero)).click();
  cy.get(inputPrimeiroNome).type(nome);
  cy.get(inputSobrenome).type(sobrenome);
  cy.get(selecionarDiaNascimento).select(diaNascimento);
  cy.get(selecionarMesNascimento).select(mesNascimento);
  cy.get(selecionarAnoNascimento).select(anoNascimento);
  cy.get(inputEmail).type(email);
  cy.get(inputNomeEmpresa).type(nomeEmpresa);
  cy.get(inputNewsletter)[newsletter]();
  cy.get(inputSenha).type(senha);
  cy.get(inputConfirmarSenha).type(confirmarSenha);
  cy.get(botaoRegistrar).click();
});

Cypress.Commands.add("registrarDadosVazios", () => {
  cy.get(botaoRegistrar).click();
});

// VALIDACAO
Cypress.Commands.add("validarRegistro", () => {
  cy.get(validacaoDeRegistro).should(
    "have.text",
    "Your registration completed",
  );
  cy.get(botaoContinuarParaHome).click();
});

Cypress.Commands.add("validarRegistroDadosVazios", (campo) => {
  cy.get(formatarSeletor(inputErro, campo)).should(
    "contain.text",
    "is required.",
  );
});

Cypress.Commands.add("validarRegistroComEmailInvalido", () => {
  cy.get(textoErroFormulario).should("have.text", "Wrong email");
});

Cypress.Commands.add("validarRegistroComEmailRepetido", () => {
  cy.get(textoErroFormulario).should(
    "have.text",
    "The specified email already exists",
  );
});

Cypress.Commands.add("validarRegistroComSenhaInvalida", () => {
  cy.get(formatarSeletor(inputErro, "Password")).should(
    "have.text",
    "Password must meet the following rules: must have at least 6 characters",
  );
});

Cypress.Commands.add("validarRegistroComSenhasNaoIguais", () => {
  cy.get(formatarSeletor(inputErro, "ConfirmPassword")).should(
    "have.text",
    "The password and confirmation password do not match.",
  );
});
