describe('Manage Goods page', () => {
  beforeEach(() => {
    // Delete all goods in the API's datastore
    cy.request('https://express-transportation-server.herokuapp.com/goods/')
      .its('body')
      .then((goods) => {
        goods.forEach((element) => {
          cy.request('DELETE',
            'https://express-transportation-server.herokuapp.com/goods/' + element._id)
        })
      })

    // Populate API's datastore
    cy.fixture('goods')
      .then((goods) => {
        goods.forEach((good) => {
          cy.request('POST',
            'https://express-transportation-server.herokuapp.com/goods/', good)
        })
      })
    cy.visit('/')
    // Click Manage Donations navbar link
    cy.get('.navbar-nav:nth-child(1)').find('.nav-item:nth-child(2)').click()
  })

  it('allows the deliveryman of a good to be upvoted', () => {
    cy.get('tbody').find('tr:nth-child(3)').find(':nth-child(7)').should('contain', 10)
    cy.get('tbody').find('tr:nth-child(3)').find(':nth-child(8)').click()
    // Click confirmation button
    cy.get('tbody').find('tr:nth-child(3)').find(':nth-child(7)').should('contain', 11)
  })


  it('allows a good to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 4)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(10)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 3)
  })
})
