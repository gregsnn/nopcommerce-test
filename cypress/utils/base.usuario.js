import faker from "@faker-js/faker";

const OPCOES_CHECKBOX = ["check", "uncheck"];
const OPCOES_GENERO = ["male", "female"];
const INITIAL_DATE = new Date(1914, 1, 1);
const FINAL_DATE = new Date(2024, 12, 31);

export const registro = () => {
  const date = faker.date.between(INITIAL_DATE, FINAL_DATE);
  const password = faker.internet.password();

  return {
    genero: random(OPCOES_GENERO),
    nome: faker.name.firstName(),
    sobrenome: faker.name.lastName(),
    diaNascimento: date.getUTCDate(),
    mesNascimento: date.getUTCMonth(),
    anoNascimento: date.getFullYear().toString(),
    email: faker.internet.email(),
    nomeEmpresa: faker.company.companyName(),
    newsletter: random(OPCOES_CHECKBOX),
    senha: password,
    confirmarSenha: password,
  };
};

export const login = (usuarioRegistrado) => {
  const { email, senha } = usuarioRegistrado;

  return {
    email,
    senha,
    lembrarUsuario: random(OPCOES_CHECKBOX),
  };
};

const random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
