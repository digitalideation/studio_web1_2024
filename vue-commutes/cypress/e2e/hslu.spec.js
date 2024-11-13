
describe('Searching', () => {
    it('Finds Maria Husmann as the first search result.', () => {
      cy.visit('https://hslu.ch/')
      cy.get('input[placeholder="Suchbegriff eingeben"]').type("Maria Husmann")
      cy.get('#submit-sitesearch').click()
      cy.get('#fl li:first-of-type a').contains('Maria Husmann')
    })
    it('Navigates from search results to profile page', () => {
      cy.visit('https://www.hslu.ch/de-ch/hochschule-luzern/search/#?q=maria%20husmann')
      cy.get('a').contains("Maria Husmann").click()
      cy.get('h1 span').contains('Maria')
      cy.get('h1 span').contains('Husmann')
    })
  })