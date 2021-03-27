context('Show only favorites', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show an Alert informing that you don`t have favorites selected', () => {
    cy
      .wait(2000)
      .get('[data-testid="msh--show-only-favorites"]')
      .click();

    cy
      .get('[data-testid="msh--alert-1"]')
      .should('have.text', 'Você não tem nenhum favorito selecionado!');

    cy
      .get('[data-testid="msh--show-only-favorites"]')
      .click();
  });

  it('should show only selected favorites', () => {
    cy
      .get('[data-testid="msh--hero-1009165"]')
      .click();

    cy
      .get('[data-testid="msh--hero-1009220"]')
      .click();

    cy
      .get('[data-testid="msh--show-only-favorites"]')
      .click();

    cy.get('[data-testid="msh--heroes-list"] > li[data-is-favorite="true"] span')
      .first()
      .should('have.text', 'Avengers');

    cy.get('[data-testid="msh--heroes-list"] > li[data-is-favorite="true"] span')
      .eq(1)
      .should('have.text', 'Captain America');
  });

  it('should show persisted favorites after page reload', () => {
    cy
      .get('[data-testid="msh--hero-1009165"]')
      .click();

    cy
      .get('[data-testid="msh--hero-1009220"]')
      .click();

    cy
      .get('[data-testid="msh--show-only-favorites"]')
      .click();

    cy
      .reload()
      .wait(2000);

    cy
      .get('[data-testid="msh--heroes-list"] > li[data-is-favorite="true"] span')
      .first()
      .should('have.text', 'Avengers');

    cy
      .get('[data-testid="msh--heroes-list"] > li[data-is-favorite="true"] span')
      .eq(1)
      .should('have.text', 'Captain America');
  });
});
