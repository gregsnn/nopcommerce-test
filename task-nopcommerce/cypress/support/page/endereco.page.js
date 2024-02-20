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

const seletorNome = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > div.title > strong"
const seletorEmail = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > ul > li.email"
const seletorNumeroTelefone = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > ul > li.phone"
const seletorNumeroFax = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > ul > li.fax"
const seletorCompany = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > ul > li.company"
const seletorEndereco = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > ul > li.address1"
const seletorSegundoEndereco = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > ul > li.address2"
const seletorLocalizacaoEstadual = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > ul > li.city-state-zip"
const seletorPais = "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.address-list > div:nth-child(*) > ul > li.country"

const mensagemDeErroPrimeiroNome = "#Address_FirstName-error"
const mensagemDeErroUltimoNome = "#Address_LastName-error"
const mensagemDeErroEmail = "#Address_Email-error"
const mensagemDeErroCidade = "#Address_City-error"
const mensagemDeErroEndereco = "#Address_Address1-error"
const mensagemDeErroCodigoPostal = "#Address_ZipPostalCode-error"
const mensagemDeErroTelefone = "#Address_PhoneNumber-error"


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
  }
);

Cypress.Commands.add("validarEnderecoCadastrado", (enderecoEsperado, posicaoNaLista) => {
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
  } = enderecoEsperado;

  cy.get(seletorNome.replace("*", posicaoNaLista)).should("have.text", `${nome} ${sobrenome}`)
  cy.get(seletorEmail.replace("*", posicaoNaLista)).should("have.text", `Email: ${email}`)
  cy.get(seletorCompany.replace("*", posicaoNaLista)).should("have.text", nomeEmpresa)
  cy.get(seletorPais.replace("*", posicaoNaLista)).should("have.text", pais)
  cy.get(seletorEndereco.replace("*", posicaoNaLista)).should("have.text", endereco)
  cy.get(seletorSegundoEndereco.replace("*", posicaoNaLista)).should("have.text", segundoEndereco)
  cy.get(seletorNumeroFax.replace("*", posicaoNaLista)).should("have.text", `Fax number: ${numeroFax}`)
  cy.get(seletorNumeroTelefone.replace("*", posicaoNaLista)).should("have.text", `Phone number: ${numeroCelular}`)
  cy.get(seletorLocalizacaoEstadual.replace("*", posicaoNaLista)).should("have.text", `${cidade}, ${estado}, ${codigoPostal}`)
})

Cypress.Commands.add("validarErroEndereco", (erros) => {
  cy.get(mensagemDeErroPrimeiroNome).should("have.text", erros.primeiroNome);
  cy.get(mensagemDeErroUltimoNome).should("have.text", erros.ultimoNome);
  cy.get(mensagemDeErroCidade).should("have.text", erros.cidade);
  cy.get(mensagemDeErroEmail).should("have.text", erros.email);
  cy.get(mensagemDeErroEndereco).should("have.text", erros.endereco);
  cy.get(mensagemDeErroCodigoPostal).should("have.text", erros.codigoPostal);
  cy.get(mensagemDeErroTelefone).should("have.text", erros.telefone);  
})



