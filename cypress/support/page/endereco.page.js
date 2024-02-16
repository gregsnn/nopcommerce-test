const inputPrimeiroNome = "input#*_FirstName";
const inputUltimoNome = "input#*_LastName";
const inputEmail = "input#*_Email";
const inputNomeEmpresa = "input#*_Company";
const selecionarPais = "select#*_CountryId";
const selecionarEstado = "select#*_StateProvinceId";
const selecionarCidade = "input#*_City";
const inputEndereco = "input[name='*.Address1']";
const inputSegundoEndereco = "input[name='*.Address2']";
const inputCodigoPostal = "input#*_ZipPostalCode";
const inputNumeroCelular = "input#*_PhoneNumber";
const inputNumeroFax = "input#*_FaxNumber";

const selecionarTelaEndereco = (input, tela) => {
  return input.replace("*", tela);
};
