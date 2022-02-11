// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080')
    cy.findAllByText('Movie App').should('exist')
  })

  it("Pressing search button", () => {
    cy.get("#searchButton").click();
    cy.contains("h5", "Waterworld");
  });
})