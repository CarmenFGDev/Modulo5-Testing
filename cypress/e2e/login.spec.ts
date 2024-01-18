/// <reference types="cypress" />
describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });
   it('should user input has the focus when it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByRole('textbox').click();

    // Assert
    cy.findByRole('textbox').should('have.focus');
  });
  it('should password input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findAllByTestId('password').click();

    // Assert
    cy.findAllByTestId('password').should('have.focus');
  });
   it('should show an alert with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';

     // Act
    cy.visit('/');
    cy.get('input[name="user"]').as('userInput');
    cy.get('@userInput').type(user);
    cy.get('input[name="password"]').as('passwordInput');
    cy.get('@passwordInput').type(password);

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
  });
});