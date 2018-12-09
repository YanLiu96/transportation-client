describe('Contact us page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.navbar').contains('Contact Us').click()
  })

  it('Shows a header and Words in contact us page', () => {
    cy.get('.vue-title').should('contain', 'Contact Us')
  })

  describe('Information in the page', () => {
    it('Shows the information about how to contact author', () => {
      cy.get('table').find('td:nth-child(1)').should('contain', 'My Github account name is YanLiu96')
      cy.get('table').find('td:nth-child(1)').should('contain', 'My facebook account name is 刘岩')
      cy.get('table').find('td:nth-child(1)').should('contain', 'My email is 20082245@mail.wit.ie')
      cy.get(':nth-child(2)').find(':nth-child(2)').should('contain', 'Please click My GitHub to follow me (^o^)')
      cy.get(':nth-child(2)').should('contain', 'Just contact me if you have any problems')
      cy.get(':nth-child(2)').should('contain', 'Please email me during 9:00 am and 22:00 pm')
    })
  })
})
