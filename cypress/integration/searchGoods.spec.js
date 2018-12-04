describe("Manage Donations page", () => {

  beforeEach(() => {
    // Delete all donations in the API's datastore
    cy.request('https://express-transportation.herokuapp.com/goods')
      .its('body')
      .then( (goods) => {
        goods.forEach( (element) => {
          cy.request('DELETE',
            'https://express-transportation.herokuapp.com/goods' + element._id)
        });
      })

    // Populate API's datastore
    cy.fixture('goods')
      .then((goods) => {
        goods.forEach((good) => {
          cy.request('POST',
            'https://express-transportation.herokuapp.com/goods', good )
        })
      })
  });
})
