context('Sort by Name', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have reverse all the items by name', () => {
    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Avengers');

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .last()
      .should('have.text', 'Jessica Jones');

    cy
      .wait(2000)
      .get('[data-testid="msh--toggle-label"]')
      .click();

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Jessica Jones');

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .last()
      .should('have.text', 'Avengers');

    cy
      .get('[data-testid="msh--toggle-label"]')
      .click();
  });

  it('should reverse all the items that matches with the value in the Search Bar', () => {
    cy
      .get('[data-testid="msh--searchbar"]')
      .type('o', { delay: 100 })

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Black Bolt');

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .last()
      .should('have.text', 'Jessica Jones');

    cy
      .get('[data-testid="msh--toggle-label"]')
      .click();

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Jessica Jones');

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .last()
      .should('have.text', 'Black Bolt');

    cy
      .get('[data-testid="msh--searchbar-input"]')
      .clear();

    cy
      .get('[data-testid="msh--toggle-label"]')
      .click();

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Avengers');

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .last()
      .should('have.text', 'Jessica Jones');
  });
});
