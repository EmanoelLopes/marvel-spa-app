context('[Seleção de favoritos]', () => {
  before(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  describe('Nenhum favorito selecionado', () => {
    it('caso existam favoritos selecionados, deve exibir o alerta com a mensagem "Você não tem nenhum favorito selecionado!"', () => {
      cy.wait(500);
      cy.get('[data-testid="msh--show-only-favorites"]').click();
      cy.get('[data-testid="msh--alert-1"]').should('have.text', 'Você não tem nenhum favorito selecionado!');
      cy.get('[data-testid="msh--show-only-favorites"]').click();
    });
  });

  describe('Selecionar favoritos', () => {
    it.only('deve exibir os favoritos após selecioná-los e exibir somente favoritos', () => {
      cy.wait(500);
      
      cy.get('[data-testid="msh--hero-1009148"]').click();
      cy.get('[data-testid="msh--hero-1010870"]').click();

      cy.get('[data-testid="msh--show-only-favorites"]').click();

      cy.get('[data-testid="msh--heroes-list"] > li span').first().should('have.text', 'Absorbing Man');
      cy.get('[data-testid="msh--heroes-list"] > li span').last().should('have.text', 'Ajaxis');
    });
  });
});

