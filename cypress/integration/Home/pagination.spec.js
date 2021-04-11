context('[Paginação]', () => {
  before(() => {
    cy.visit('/');
  });

  describe('[Sessão de paginação]', () => {
    it('a sessão de paginação deve estar presente', () => {
      cy.get('[data-testid="msh--pagination"]').should('exist');
    });

    it('deve exibir a página atual iniciando por "1"', () => {
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('exist');
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '1');
    });

    it('deve exibir o total de páginas igual a "75"', () => {
      cy.get('[data-testid="msh--home-pagination-total-pages"]').should('exist');
      cy.get('[data-testid="msh--home-pagination-total-pages"]').should('have.text', '75');
    });
  });

  describe('[Botões de paginação]', () => {
    it('botão retroceder várias páginas e que deve inicialmente estar desativado - (<<)', () => {
      cy.get('[data-testid="msh--pagination-button-regress"]').should('exist');
      cy.get('[data-testid="msh--pagination-button-regress"]').should('have.attr', 'disabled');
    });

    it('botão voltar uma página e que deve inicialmente estar desativado - (<)', () => {
      cy.get('[data-testid="msh--pagination-button-previous-page"]').should('exist');
      cy.get('[data-testid="msh--pagination-button-previous-page"]').should('have.attr', 'disabled');
    });

    it('botão avançar uma página e que deve inicialmente estar habilitado - (>)', () => {
      cy.get('[data-testid="msh--pagination-button-next-page"]').should('exist');
      cy.get('[data-testid="msh--pagination-button-next-page"]').should('have.not.attr', 'disabled');
    });

    it('botão de avançar várias página e que deve inicialmente estar habilitado - (>>)', () => {
      cy.get('[data-testid="msh--pagination-button-advance"]').should('exist');
      cy.get('[data-testid="msh--pagination-button-advance"]').should('have.not.attr', 'disabled');
    });

    it('botão da primeira página deve estar inicialmente ativado e desabilitado', () => {
      cy.get('[data-testid="msh--pagination-button-page-1"]').should('exist');
      cy.get('[data-testid="msh--pagination-button-page-1"]').should('have.css', 'background-color', 'rgb(255, 21, 16)');
      cy.get('[data-testid="msh--pagination-button-page-1"]').should('have.css', 'color', 'rgb(255, 255, 255)');
      cy.get('[data-testid="msh--pagination-button-page-1"]').should('have.attr', 'disabled');
    });

    it('botão da segunda página deve estar inicialmente habilitado', () => {
      cy.get('[data-testid="msh--pagination-button-page-2"]').should('exist');
      cy.get('[data-testid="msh--pagination-button-page-2"]').should('have.not.attr', 'disabled');
    });
  });

  describe('[Ações da paginação]', () => {
    it('ao clicar na botão da página dois, a página atual deve 2 e o botão deve estar ativo', () => {
      cy.get('[data-testid="msh--pagination-button-page-2"]').click();
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '2');
    });

    it('após clicar no botáo da página 2, a página atual deve ser "2", o botão da página 2 estar ativo e o primeiro botão não está visível na tela', () => {
      cy.get('[data-testid="msh--pagination-button-page-2"]').should('have.css', 'background-color', 'rgb(255, 21, 16)');
      cy.get('[data-testid="msh--pagination-button-page-2"]').should('have.css', 'color', 'rgb(255, 255, 255)');
      cy.get('[data-testid="msh--pagination-button-page-2"]').should('have.attr', 'disabled');
      cy.get('[data-testid="msh--pagination-button-page-1"]').should('not.exist');
    });

    it('o botáo de retroceder deve estar desabilitado e o botáo de avançar página habilitado', () => {
      cy.get('[data-testid="msh--pagination-button-regress"]').should('have.attr', 'disabled');
      cy.get('[data-testid="msh--pagination-button-previous-page"]').should('have.not.attr', 'disabled');
    });

    it('ao clicar no botáo da página 7, os botões de retroceder e voltar uma página devem estar habilitados e a página atual deve ser 7', () => {
      cy.get('[data-testid="msh--pagination-button-page-7"]').click();
      cy.get('[data-testid="msh--pagination-button-regress"]').should('have.not.attr', 'disabled');
      cy.get('[data-testid="msh--pagination-button-previous-page"]').should('have.not.attr', 'disabled');
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '7');
    });

    it('ao clicar no botáo de avançar uma página, deve ir da página 7 para a 8', () => {
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '7');
      cy.get('[data-testid="msh--pagination-button-next-page"]').click();
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '8');
    });

    it('ao clicar no botáo de avançar várias páginas duas vezes em sequência, deve avançar 5 páginas, da 8 a 13 e depois da 13 para a 18', () => {
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '8');
      cy.get('[data-testid="msh--pagination-button-advance"]').click();
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '13');
      cy.get('[data-testid="msh--pagination-button-advance"]').click();
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '18');
    });

    it('ir até a última página e ao final da ação, os botões de avançar uma e várias páginas deve estar desabilitado', () => {
      for(let i = 1; i <= 11; i++) {
        cy.get('[data-testid="msh--pagination-button-advance"]').click();
      }
      cy.get('[data-testid="msh--pagination-button-page-75"]').click();
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '75');
      cy.get('[data-testid="msh--pagination-button-advance"]').should('have.attr', 'disabled');
      cy.get('[data-testid="msh--pagination-button-next-page"]').should('have.attr', 'disabled');
      cy.get('[data-testid="msh--pagination-button-regress"]').should('have.not.attr', 'disabled');
      cy.get('[data-testid="msh--pagination-button-previous-page"]').should('have.not.attr', 'disabled');
    });

    it('voltar 5 páginas à partir da última', () => {
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '75');
      cy.get('[data-testid="msh--pagination-button-regress"]').click();
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '70');
    });

    it('voltar mais uma página, da 70 para a 69', () => {
      cy.get('[data-testid="msh--pagination-button-previous-page"]').click();
      cy.get('[data-testid="msh--home-pagination-current-page"]').should('have.text', '69');
    });
  });
});
