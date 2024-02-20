// const btnLinkParaLogin = "#header > div.nav > div > div > nav > div.header_user_info > a"
// const btnDeslogar = "#header > div.nav > div > div > nav > div:nth-child(2) > a"
// const btnLinkParaContactUs = "#contact-link"
// const btnPaginaInicial = "#center_column > ul > li > a > span"
// const btnLinkMinhaConta = "#header > div.nav > div > div > nav > div:nth-child(1) > a > span"

import home from "../selector/home.selector";

Cypress.Commands.add("clicarIrParaEmLogin", () => {
  cy.get(home.btnLinkParaLogin).click()
})