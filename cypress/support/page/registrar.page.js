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

const selecionarGenero = (generoChar) => {
  return `${inputGenero}-${generoChar}`;
};
