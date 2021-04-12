context('[Ordenação por nome]', () => {
  before(() => {
    cy.visit('/');
  });

  describe('[Ordenacão padrão]', () => {
    it('o primeiro resultado deve ser "3-D Man" e o último "Ajaxis"', () => {
      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', '3-D Man');
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Ajaxis');
    });
  });

  describe('[Ordenacão inversa]', () => {
    it('o primeiro resultado deve ser "3-D Man" e o último "Ajaxis"', () => {
      cy.get('[data-testid="msh--toggle"]').click();
      cy.wait(200);
      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', 'Ajaxis');
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', '3-D Man');
    });
  });

  describe('[Ordenacão após a busca]', () => {
    it('o primeiro resultado deve ser "3-D Man" e o último "Ajaxis"', () => {
      cy.get('[data-testid="msh--toggle"]').click();
      cy.wait(200);
      // cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', '3-D Man');
      // cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Ajaxis');
    });
  });
});
