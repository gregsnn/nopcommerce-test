import faker from "@faker-js/faker";

Cypress.Commands.add("gerarDadosRegistroValido", () => {
  const checkbox = ["check", "uncheck"];
  const date = faker.date.between(1914, 2024);
  const password = faker.internet.password();

  cy.writeFile("cypress/fixtures/usuario.json", {
    usuario_sem_news: {
      genero: "male",
      nome: faker.name.firstName(),
      sobrenome: faker.name.lastName(),
      diaNascimento: date.getDay(),
      mesNascimento: date.getMonth(),
      anoNascimento: date.getFullYear().toString(),
      email: faker.internet.email(),
      nomeEmpresa: faker.company.companyName(),
      newsletter: checkbox[1],
      senha: password,
      confirmarSenha: password,
    },
    usuario_com_news: {
      genero: "male",
      nome: faker.name.firstName(),
      sobrenome: faker.name.lastName(),
      diaNascimento: date.getDay(),
      mesNascimento: date.getMonth(),
      anoNascimento: date.getFullYear().toString(),
      email: faker.internet.email(),
      nomeEmpresa: faker.company.companyName(),
      newsletter: checkbox[0],
      senha: password,
      confirmarSenha: password,
    },
  });
});
