Cypress.Commands.add('typeLogin', function (username, password) {
    cy.get('[data-test="username"]').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});
