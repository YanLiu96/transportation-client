describe("Manage Goods page", () => {

  beforeEach(() => {
    // Delete all donations in the API's datastore
    cy.request('https://express-transportation.herokuapp.com/goods/')
      .its('body')
      .then( (goods) => {
        goods.forEach( (element) => {
          cy.request('DELETE',
            'https://express-transportation.herokuapp.com/goods/' + element._id)
        });
      })

    // Populate API's datastore
    cy.fixture('goods')
      .then((goods) => {
        goods.forEach((good) => {
          cy.request('POST',
            'https://express-transportation.herokuapp.com/goods/', good )
        })
      })
    cy.visit("/");
    // Click Manage Donations navbar link
    cy.get('.navbar-nav:nth-child(1)').find('.nav-item:nth-child(2)').click()
  });

  it("allows a good to be deleted", () => {
    cy.get('tbody').find('tr').should('have.length', 4)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(10)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 3)
  });

})
