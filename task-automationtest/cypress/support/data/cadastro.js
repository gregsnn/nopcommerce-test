import { faker } from "@faker-js/faker"

export default function geraCadastro() {
  const generoAleatorio = Math.round(Math.random());
  const opcaoNewsLetter = Math.round(Math.random());
  const opcaoReceberOfertas = Math.round(Math.random());
  
  const dataInicio = new Date(1950, 1, 1);
  const dataFim = new Date(2024, 12, 31);
  const dataNascimento = new Date(faker.date.between({ from: dataInicio, to: dataFim }));
  
  return {
    genero: generoAleatorio === 0 ? "Mr." : "Mrs.",
    primeiroNome: faker.person.firstName(),
    ultimoNome: faker.person.lastName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    diaNascimento: dataNascimento.getDate(),
    mesNascimento: dataNascimento.toLocaleDateString('en-US', { month: 'long' }),
    anoNascimento: dataNascimento.getFullYear(),
    newsLetter: opcaoNewsLetter === 0 ? "check" : "uncheck",
    ofertas: opcaoReceberOfertas === 0 ? "check" : "uncheck",
    nomeEmpresa: faker.company.name(),
    endereco: faker.location.streetAddress(),
    segundoEndereco: faker.location.secondaryAddress(),
    cidade: faker.location.city(),
    estado: faker.location.state(),
    codigoPostal: faker.string.numeric(5),
    numeroResidencial: faker.string.numeric(10),
    numeroCelular: faker.string.numeric(10),
  }
}

