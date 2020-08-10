context('Sort by Name', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have reverse all the items by name', () => {
    cy
      .get('[data-test-id="HeroesList"] > li span')
      .first()
      .should('have.text', 'Avengers');

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .last()
      .should('have.text', 'Jessica Jones');

    cy
      .wait(2000)
      .get('[data-test-id="SortByName"]')
      .click();

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .first()
      .should('have.text', 'Jessica Jones');

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .last()
      .should('have.text', 'Avengers');

    cy
      .get('[data-test-id="SortByName"]')
      .click();
  });

  it('should reverse all the items that matches with the value in the Search Bar', () => {
    cy
      .get('[data-test-id="SearchBar"]')
      .type('o', { delay: 100 })

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .first()
      .should('have.text', 'Black Bolt');

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .last()
      .should('have.text', 'Jessica Jones');

    cy
      .get('[data-test-id="SortByName"]')
      .click();

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .first()
      .should('have.text', 'Jessica Jones');

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .last()
      .should('have.text', 'Black Bolt');

    cy
      .get('[data-test-id="SearchBar"]')
      .clear();

    cy
      .get('[data-test-id="SortByName"]')
      .click();

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .first()
      .should('have.text', 'Avengers');

    cy
      .get('[data-test-id="HeroesList"] > li span')
      .last()
      .should('have.text', 'Jessica Jones');
  });
});
