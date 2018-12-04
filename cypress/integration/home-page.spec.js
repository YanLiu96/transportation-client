describe("Home page", () => {

    beforeEach(() => {
      cy.visit("/");
    });

    it("Shows a header", () => {
      cy.get(".vue-title").should('contain','Homer for President !!');
    });

    describe("Navigation bar", () => {
        it("Shows the required links", () => {
          cy.get(".navbar").find('[data-test=goodbtn]' );
          cy.get(".navbar").contains('Home' );
          cy.get('.navbar-nav:nth-child(1)').within(() => {
            cy.get('.nav-item:first').should('contain', 'Home')
            cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Goods')
            cy.get('.nav-item:nth-child(3)').should('contain', 'AddGood')
            cy.get('.nav-item:nth-child(4)').should('contain', 'Map')
          })
          cy.get('.navbar-nav:nth-child(2)').within(() => {
            cy.get('.nav-item:first').should('contain', 'About')
            cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
          })
        });

        it("Redirects when links are clicked", () => {
          cy.get('[data-test=goodbtn]').click();
          cy.url().should('include','/addGood' )
          cy.get(".navbar").contains('Manage Goods' ).click();
          cy.url().should('include','/goods' )
          // etc
        });
      })
  });
