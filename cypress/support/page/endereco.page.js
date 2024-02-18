import { formatarSeletor } from "../../utils/formatador";

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

const TIPO_SELECTOR = {
  Address: "Address",
  Billing: "BillingNewAddress",
};

Cypress.Commands.add("preencherEndereco", (enderecoCadastrado) => {
  const {
    nome,
    sobrenome,
    email,
    nomeEmpresa,
    pais,
    estado,
    cidade,
    endereco,
    segundoEndereco,
    codigoPostal,
    numeroCelular,
    numeroFax,
  } = enderecoCadastrado;

  cy.get(formatarSeletor(inputPrimeiroNome, TIPO_SELECTOR.Address)).type(nome);
  cy.get(formatarSeletor(inputUltimoNome, TIPO_SELECTOR.Address)).type(
    sobrenome,
  );
  cy.get(formatarSeletor(inputEmail, TIPO_SELECTOR.Address)).type(email);
  cy.get(formatarSeletor(inputNomeEmpresa, TIPO_SELECTOR.Address)).type(
    nomeEmpresa,
  );
  cy.get(formatarSeletor(selecionarPais, TIPO_SELECTOR.Address)).select(pais);
  cy.get(formatarSeletor(selecionarEstado, TIPO_SELECTOR.Address)).select(
    estado,
  );
  cy.get(formatarSeletor(selecionarCidade, TIPO_SELECTOR.Address)).type(cidade);
  cy.get(formatarSeletor(inputEndereco, TIPO_SELECTOR.Address)).type(endereco);
  cy.get(formatarSeletor(inputSegundoEndereco, TIPO_SELECTOR.Address)).type(
    segundoEndereco,
  );
  cy.get(formatarSeletor(inputCodigoPostal, TIPO_SELECTOR.Address)).type(
    codigoPostal,
  );
  cy.get(formatarSeletor(inputNumeroCelular, TIPO_SELECTOR.Address)).type(
    numeroCelular,
  );
  cy.get(formatarSeletor(inputNumeroFax, TIPO_SELECTOR.Address)).type(
    numeroFax,
  );

  cy.salvarEndereco();
});

Cypress.Commands.add("preencherEnderecoCheckout", (enderecoCadastrado) => {
  const {
    pais,
    estado,
    cidade,
    endereco,
    segundoEndereco,
    codigoPostal,
    numeroCelular,
    numeroFax,
  } = enderecoCadastrado;

  cy.get(formatarSeletor(selecionarPais, TIPO_SELECTOR.Billing)).select(pais);
  cy.get(formatarSeletor(selecionarEstado, TIPO_SELECTOR.Billing)).select(
    estado,
  );
  cy.get(formatarSeletor(selecionarCidade, TIPO_SELECTOR.Billing)).type(cidade);
  cy.get(formatarSeletor(inputEndereco, TIPO_SELECTOR.Billing)).type(endereco);
  cy.get(formatarSeletor(inputSegundoEndereco, TIPO_SELECTOR.Billing)).type(
    segundoEndereco,
  );
  cy.get(formatarSeletor(inputCodigoPostal, TIPO_SELECTOR.Billing)).type(
    codigoPostal,
  );
  cy.get(formatarSeletor(inputNumeroCelular, TIPO_SELECTOR.Billing)).type(
    numeroCelular,
  );
  cy.get(formatarSeletor(inputNumeroFax, TIPO_SELECTOR.Billing)).type(
    numeroFax,
  );
});

Cypress.Commands.add(
  "preencherEnderecoCheckoutComoConvidado",
  (enderecoCadastrado) => {
    const {
      nome,
      sobrenome,
      email,
      nomeEmpresa,
      pais,
      estado,
      cidade,
      endereco,
      segundoEndereco,
      codigoPostal,
      numeroCelular,
      numeroFax,
    } = enderecoCadastrado;

    cy.get(formatarSeletor(inputPrimeiroNome, TIPO_SELECTOR.Billing)).type(
      nome,
    );
    cy.get(formatarSeletor(inputUltimoNome, TIPO_SELECTOR.Billing)).type(
      sobrenome,
    );
    cy.get(formatarSeletor(inputEmail, TIPO_SELECTOR.Billing)).type(email);
    cy.get(formatarSeletor(inputNomeEmpresa, TIPO_SELECTOR.Billing)).type(
      nomeEmpresa,
    );
    cy.get(formatarSeletor(selecionarPais, TIPO_SELECTOR.Billing)).select(pais);
    cy.get(formatarSeletor(selecionarEstado, TIPO_SELECTOR.Billing)).select(
      estado,
    );
    cy.get(formatarSeletor(selecionarCidade, TIPO_SELECTOR.Billing)).type(
      cidade,
    );
    cy.get(formatarSeletor(inputEndereco, TIPO_SELECTOR.Billing)).type(
      endereco,
    );
    cy.get(formatarSeletor(inputSegundoEndereco, TIPO_SELECTOR.Billing)).type(
      segundoEndereco,
    );
    cy.get(formatarSeletor(inputCodigoPostal, TIPO_SELECTOR.Billing)).type(
      codigoPostal,
    );
    cy.get(formatarSeletor(inputNumeroCelular, TIPO_SELECTOR.Billing)).type(
      numeroCelular,
    );
    cy.get(formatarSeletor(inputNumeroFax, TIPO_SELECTOR.Billing)).type(
      numeroFax,
    );
  },
);
