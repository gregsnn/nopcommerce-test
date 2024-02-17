import { usuario } from "../../utils/base.usuario";

Cypress.Commands.add("gerarDadosRegistro", () => {
  cy.writeFile("cypress/fixtures/usuario.json", {
    usuario_valido: {
      ...usuario(),
    },
    usuario_email_invalido: {
      ...usuario(),
      email: "email@invalido",
    },
    usuario_email_repetido: {
      ...usuario(),
      email: "js@gmail.com",
    },
    usuario_senha_invalida: {
      ...usuario(),
      senha: "123",
    },
    usuario_senhas_nao_iguais: {
      ...usuario(),
      senha: "abc123",
      confirmarSenha: "123abc",
    },
  });
});
