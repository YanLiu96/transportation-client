describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows a header and Words in home page', () => {
    cy.get('.vue-title').should('contain', 'Manage express')
    cy.get('.lead').should('contain', 'Enjoy convenient management of express')
    cy.get('.smallTittle').should('contain', 'Just click here to go to')
    cy.get('.smallTittle').should('contain', 'the page to search for your express')
    cy.get('.lead').should('contain', 'Assignment finished by Yan Liu 20082245')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar').find('[data-test=goodbtn]')
      cy.get('.navbar-brand').contains('Express Transportation Web App')
      cy.get('.navbar').contains('Home')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Goods')
        cy.get('.nav-item:nth-child(3)').should('contain', 'AddGood')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Map')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'About')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Contact Us')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Login')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Logout')
      })
    })

    it('Redirects when links are clicked', () => {
      cy.get('.navbar').contains('Home').click()
      cy.url().should('include', '/')

      cy.get('.navbar').contains('Manage Goods').click()
      cy.url().should('include', '/goods')

      cy.get('[data-test=goodbtn]').click()
      cy.url().should('include', '/addGood')

      cy.get('.navbar').contains('Map').click()
      cy.url().should('include', '/map')

      cy.get('.navbar').contains('Contact Us').click()
      cy.url().should('include', '/contact')

      cy.get('.navbar').contains('Login').click()
      cy.url().should('include', '/auth')

      cy.get('.navbar').contains('Logout').click()
      cy.url().should('include', '/auth')
    })
  })
})
