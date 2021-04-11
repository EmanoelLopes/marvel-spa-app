context('[Search]', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Input values should be equal to typed value', () => {
    cy
      .get('[data-testid="msh--searchbar-input"]')
      .type('Captain', {
        delay: 100
      })
      .should('have.value', 'Captain');
  });

  it('Should list only the Heroes that name matches with the search value', () => {
    cy
      .get('[data-testid="msh--searchbar-input"]')
      .type('J', {
        delay: 100
      });

    cy
      .get('[data-testid="msh--heroes-list"] > li')
      .its('length')
      .should('be.equal', 2);

    cy.get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Iron Patriot (James Rhodes)');

    cy.get('[data-testid="msh--heroes-list"] > li span')
      .eq(1)
      .should('have.text', 'Jessica Jones');
  });

  it('Clear() should return all Heroes list items', () => {
    cy
      .get('[data-testid="msh--searchbar-input"]')
      .type('Captain', {
        delay: 100
      })

    cy
      .get('[data-testid="msh--heroes-list"] > li')
      .its('length').should('be.equal', 2);

    cy
      .get('[data-testid="msh--searchbar-input"]')
      .clear()
      .should('have.value', '');

    cy
      .get('[data-testid="msh--heroes-list"] > li')
      .its('length').should('be.equal', 20);
  });

  it('Heroes list should matches even the value was typed in UPPERCASE, lowercase or Capitalized', () => {
    cy.get('[data-testid="msh--searchbar-input"]')
      .type('CAPTAIN', {
        delay: 100,
      });

    cy
      .get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Captain America');

    cy.get('[data-testid="msh--heroes-list"] > li span')
      .eq(1)
      .should('have.text', 'Captain Marvel (Carol Danvers)');

    cy
      .get('[data-testid="msh--searchbar-input"]')
      .clear()
      .type('captain', {
        delay: 100
      });

    cy.get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Captain America');

    cy.get('[data-testid="msh--heroes-list"] > li span')
      .eq(1)
      .should('have.text', 'Captain Marvel (Carol Danvers)')

    cy.get('[data-testid="msh--searchbar-input"]').clear().type('Captain', {
      delay: 100,
    });

    cy.get('[data-testid="msh--heroes-list"] > li span')
      .first()
      .should('have.text', 'Captain America');

    cy.get('[data-testid="msh--heroes-list"] > li span')
      .eq(1)
      .should('have.text', 'Captain Marvel (Carol Danvers)');
  });
});
