describe('About us page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.navbar').contains('About Us').click()
  })

  it('Shows a header and information in about us page', () => {
    cy.get('.vue-title').should('contain', 'About Us')
  })

  describe('Information in the page', () => {
    it('Shows the information about how to contact author', () => {
      cy.get(':nth-child(5)').should('contain', 'This website is just for the assignment of')
      cy.get(':nth-child(6)').should('contain', 'Web Application Development 2 and Agile Software Practice')
      cy.get(':nth-child(7)').should('contain', 'In Waterford Institute of Technology')
      cy.get('.hero').find(':nth-child(12)').should('contain', 'It references from ddrohan. You can click on this URL to learn it.')
    })
  })

  it('show the picture in the page', () => {
    cy.get('.hero').find('img')
  })

  it('Redirects when links are clicked', () => {
    cy.get('.hero').find(':nth-child(13)').contains('Link URL')
  })
})
