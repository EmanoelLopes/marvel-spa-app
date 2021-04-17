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
      cy.wait(200);

      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', '3-D Man');
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Ajaxis');

      cy.get('[data-testid="msh--toggle"]').click();

      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', 'Ajaxis');
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', '3-D Man');
    });
  });

  describe('[Ordenacão após a busca]', () => {
    it('Após pesquisar pelo termo "wolv" e depois clicar em "Ordenar por nome", o primeiro resultado deve ser "Wolverine (X-Men: Battle of the Atom)" e o último "Wolver-dok"', () => {
      cy.get('[data-testid="msh--searchbar-input"]').type('wolv', { delay: 200 });
      cy.wait(1000);

      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', 'Wolver-dok');
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Wolverine (X-Men: Battle of the Atom)');

      cy.get('[data-testid="msh--toggle"]').click();
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Wolver-dok');
      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', 'Wolverine (X-Men: Battle of the Atom)');

      cy.get('[data-testid="msh--searchbar-input"]').clear();
    });
  });
});

