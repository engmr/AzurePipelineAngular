/// <reference types="cypress" />

Cypress.Commands.add("setViewPort", (width: any, height: any) => {
	cy.log(`Setting viewport to ${width} x ${height}`);
	cy.viewport(width, height);
});