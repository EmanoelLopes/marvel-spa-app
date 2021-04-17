context('[Página não encontrada - 404]', () => {
  before(() => {
    cy.visit('/esta-pagina-nao-existe');
  });

  describe('[]', () => {
    it('deve conter o texto "Página não encontrada :/"', () => {
      cy.get('h2').first().should('have.text', 'Página não encontrada :/');
    });
  });
});
