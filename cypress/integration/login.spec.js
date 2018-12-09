describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.navbar').contains('Login').click()
  })

  it('Shows a header in about us page', () => {
    cy.get('.vue-title').should('contain', 'Login')
  })

  describe('Test login ways in the page', () => {
    it('Shows login ways', () => {
      cy.get(':nth-child(1)').get('.firebaseui-idp-text-long').should('contain', 'Sign in with Facebook')
      cy.get(':nth-child(2)').get('.firebaseui-idp-text-long').should('contain', 'Sign in with Google')
      cy.get(':nth-child(3)').get('.firebaseui-idp-text-long').should('contain', 'Sign in with email')
      cy.get(':nth-child(4)').get('.firebaseui-idp-text-long').should('contain', 'Sign in with Github')
    })
  })

})
