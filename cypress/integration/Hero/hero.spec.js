context('[Página de Personagem]', () => {
  describe('Página de personagem com descrição - Wolverine', () => {
    it('Deve conter o título com o nome do personagem da página"', () => {
      const description = "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.";

      cy.visit('/hero/1009718');
      cy.get('h2').first().should('have.text', 'Wolverine');
      cy.get('h2').eq(1).should('have.text', 'Últimos lançamentos');
      cy.get('p').eq(1).should('have.text', description);
    });
  });

  describe('Página de personagem sem descrição - 3-D Man', () => {
    it('Deve conter o título com o nome do personagem da página', () => {
      cy.visit('/hero/1011334');
      cy.get('h2').first().should('have.text', '3-D Man');
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
