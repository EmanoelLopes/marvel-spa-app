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
      cy.get('[data-testid="msh--heroes-list"] > li').its('length').should('be.equal', 1);
      cy.get('[data-testid="msh--heroes-list"] > li span').should('have.text', 'Agent Brand');
    });
  });

  describe('[resultados da busca - múltiplos resultados]', () => {
    it('deve retornar como primeiro personsagem do resultadod da "Abomination (Emil Blonsky)"', () => {
      cy.get('[data-testid="msh--searchbar-input"]').clear();
      cy.get('[data-testid="msh--searchbar-input"]').type('ab', { delay: 100 });
      cy.get('[data-testid="msh--heroes-list"] > li').its('length').should('be.equal', 6);
      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', 'Abomination (Emil Blonsky)');
    });

    it('deve retornar como último personsagem do resultado da busca "Air-Walker (Gabriel Lan)"', () => {
      cy.get('[data-testid="msh--searchbar-input"]').clear();
      cy.get('[data-testid="msh--searchbar-input"]').type('ab', { delay: 100 });
      cy.get('[data-testid="msh--heroes-list"] > li').its('length').should('be.equal', 6);
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Air-Walker (Gabriel Lan)');
      cy.get('[data-testid="msh--searchbar-input"]').clear();
    });
  });
});
