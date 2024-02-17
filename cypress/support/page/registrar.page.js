const inputGenero = "input#gender";
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

const selecionarGenero = (generoChar) => {
  return `${inputGenero}-${generoChar}`;
};

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

  cy.get(selecionarGenero(genero)).click();
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

Cypress.Commands.add("validarRegistro", () => {
  cy.get(validacaoDeRegistro).should(
    "have.text",
    "Your registration completed",
  );
  cy.get(botaoContinuarParaHome).click();
});
