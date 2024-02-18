import faker from "@faker-js/faker";

export const endereco = () => {
  return {
    nome: faker.name.firstName(),
    sobrenome: faker.name.lastName(),
    email: faker.internet.email(),
    nomeEmpresa: faker.company.companyName(),
    pais: "United States",
    estado: "California",
    cidade: faker.address.city(),
    endereco: faker.address.streetAddress(),
    segundoEndereco: faker.address.secondaryAddress(),
    codigoPostal: faker.address.zipCode(),
    numeroCelular: faker.phone.phoneNumber(),
    numeroFax: faker.phone.phoneNumber(),
  };
};
