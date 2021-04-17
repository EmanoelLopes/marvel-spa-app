context('[Página de Personagem]', () => {
  beforeEach(() => {
    cy.fixture('hero').then(function(data) {
      this.data = data;
    });
  });

  describe('Página de personagem com descrição - Wolverine', function() {
    it('Deve conter o título com o nome do personagem da página"', function() {
      cy.visit('/hero/1009718');
      cy.get('h2').first().should('have.text', this.data.hero.wolverine.name);
      cy.get('h2').eq(1).should('have.text', 'Últimos lançamentos');
      cy.get('p').eq(1).should('have.text', this.data.hero.wolverine.description);
    });
  });

  describe('Página de personagem sem descrição - 3-D Man', function() {
    it('Deve conter o título com o nome do personagem da página', function() {
      cy.visit('/hero/1011334');
      cy.get('h2').first().should('have.text', this.data.hero['3d-man'].name);
      cy.get('h2').eq(1).should('have.text', 'Últimos lançamentos');
      cy.get('p').eq(1).should('have.text', 'Nenhuma descrição fornecida.');
    });
  });

  describe('Página de personagem com últimos lançamentos - Wolverine', () => {
    it('deve conter 10 itens em lançamentos', () => {
      cy.get('ul > li').should('have.length', 10);
    });
  });

  describe('Link para voltar a página inicial', () => {
    it('Deve conter o link para voltar a página inicial', () => {
      cy.visit('/hero/1011334');
      cy.get('a').eq(1).should('have.text', 'Voltar para a página inicial');
    });
  });
});
