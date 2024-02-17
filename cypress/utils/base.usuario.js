import faker from "@faker-js/faker";

const checkboxArray = ["check", "uncheck"];
const genderArray = ["male", "female"];
const date = faker.date.between(1914, 2024);
const password = faker.internet.password();

export const usuario = () => {
  return {
    genero: random(genderArray),
    nome: faker.name.firstName(),
    sobrenome: faker.name.lastName(),
    diaNascimento: date.getDay(),
    mesNascimento: date.getMonth(),
    anoNascimento: date.getFullYear().toString(),
    email: faker.internet.email(),
    nomeEmpresa: faker.company.companyName(),
    newsletter: random(checkboxArray),
    senha: password,
    confirmarSenha: password,
  };
};

const random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
