describe("App displays Maria's commutes", () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', "Maria Husmann's commute")
  })
})

describe("Can navigate to about page", () => {
  it('visits the app root url', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/about"]').click();
    cy.get('h1').should('have.text', 'This page displays commutes. It was implemented at HSLU in the Studio Web & Mobile Design and Engineering in 2024');
    /* ==== End Cypress Studio ==== */
  })
})