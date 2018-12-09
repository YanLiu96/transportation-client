describe('Express Transportation page', () => {
  beforeEach(() => {
    cy.visit('/')
    // Click Donate navbar link
    cy.get('[data-test=goodbtn]').click()
  })

  it('allows a valid good to be submitted', () => {
    // Fill out web form
    cy.get('input[data-test=freight]').clear().type(1)
    cy.get('label').contains('goodsName').next().type('Test Name')
    cy.get('label').contains('deliveryman').next().type('Test deliveryman')
    cy.get('label').contains('goodsLocation').next().type('Test location')
    cy.get('.error').should('not.exist')
    cy.get('button[type=submit]').click()
    cy.contains('Add goods successfully!').should('exist')
  })

  it('shows error messages for incomplete form fields', () => {
    cy.get('button[type=submit]').click()
    cy.get('.error').contains('freight must be between 1 and 1000')
    cy.get('.error').contains('GoodsName is Required')
    cy.get('.error').contains('Deliveryman man is Required')
    cy.get('.error').contains('Good Location is Required')

    cy.get('input[data-test=freight]').type(321)
    cy.get('.error').contains('freight').should('not.exist')
    cy.get('label').contains('goodsName').next().type('test name')
    cy.get('label').contains('deliveryman').next().type('Test deliveryman')
    cy.get('label').contains('goodsLocation').next().type('Test location')
    cy.get('button[type=submit]').click()
    cy.get('.error').should('not.exist')
  })
})
