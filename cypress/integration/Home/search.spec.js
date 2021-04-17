context('[Busca]', () => {
  before(() => {
    cy.visit('/');
  });

  describe('[valor da busca]', () => {
    it('deve retornar o valor exato da busca', () => {
      cy.get('[data-testid="msh--searchbar-input"]').clear();
      cy.get('[data-testid="msh--searchbar-input"]').type('agent brand', { delay: 100 });
      cy.get('[data-testid="msh--searchbar-input"]').should('have.value', 'agent brand');
    });
  });

  describe('[resultados da busca - único resultado]', () => {
    it('deve retornar na lista o nome do personagem buscado "Agent Brand"', () => {
      cy.get('[data-testid="msh--searchbar-input"]').clear();
      cy.get('[data-testid="msh--searchbar-input"]').type('agent brand', { delay: 100 });

      cy.wait(500);

      cy.get('[data-testid="msh--heroes-list"] > li').its('length').should('be.equal', 1);
      cy.get('[data-testid="msh--heroes-list"] > li span').should('have.text', 'Agent Brand');
    });
  });

  describe('[resultados da busca - múltiplos resultados]', () => {
    it('deve retornar como primeiro personsagem do resultadod da "Abomination (Emil Blonsky)"', () => {
      cy.get('[data-testid="msh--searchbar-input"]').clear();
      cy.get('[data-testid="msh--searchbar-input"]').type('abomination', { delay: 100 });

      cy.wait(500);

      cy.get('[data-testid="msh--heroes-list"] > li').its('length').should('be.equal', 2);
      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', 'Abomination (Emil Blonsky)');
    });

    it('deve retornar como último personsagem do resultado da busca "Abomination (Ultimate)"', () => {
      cy.get('[data-testid="msh--searchbar-input"]').clear();
      cy.get('[data-testid="msh--searchbar-input"]').type('abomination', { delay: 100 });

      cy.wait(500);

      cy.get('[data-testid="msh--heroes-list"] > li').its('length').should('be.equal', 2);
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Abomination (Ultimate)');
    });

    it('ao limpar a busca, deve retornar todos os resultados iniciais', () => {
      cy.get('[data-testid="msh--searchbar-input"]').clear();

      cy.wait(500);
      cy.get('[data-testid="msh--heroes-list"] > li').its('length').should('be.equal', 20);
      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', '3-D Man');
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Ajaxis');
    });
  });
});
