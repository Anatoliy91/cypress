describe('Checkboxes', () => {
    it('should check and uncheck checkboxes', () => {
      cy.visit('/checkboxes');
      
      cy.get('input[type="checkbox"]').eq(0).check().should('be.checked'); // Відмітити перший чекбокс
      cy.get('input[type="checkbox"]').eq(0).uncheck().should('not.be.checked'); // Сняти відмітку з чекбокса
    });
  });
  