describe('Dropdown', () => {
    it('should select an option from the dropdown', () => {
      cy.visit('/dropdown');
      
      cy.get('select').select('Option 1').should('have.value', '1'); // Вибрати опцію 1
      cy.get('select').select('Option 2').should('have.value', '2'); // Вибрати опцію 2
    });
  });
  