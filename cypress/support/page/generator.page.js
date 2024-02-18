import { login, registro } from "../../utils/base.usuario";

Cypress.Commands.add("gerarDadosRegistro", () => {
  cy.writeFile("cypress/fixtures/registro.json", {
    usuario_valido: {
      ...registro(),
    },
    usuario_email_invalido: {
      ...registro(),
      email: "email@invalido",
    },
    usuario_email_repetido: {
      ...registro(),
      email: "js@gmail.com",
    },
    usuario_senha_invalida: {
      ...registro(),
      senha: "123",
    },
    usuario_senhas_nao_iguais: {
      ...registro(),
      senha: "abc123",
      confirmarSenha: "123abc",
    },
  });
});

Cypress.Commands.add("gerarDadosLogin", (usuarioRegistrado) => {
  cy.writeFile("cypress/fixtures/login.json", {
    usuario_valido: {
      ...login(usuarioRegistrado),
    },
    usuario_invalido: {
      ...login(usuarioRegistrado),
      senha: "senha_invalida",
    },
  });
});
